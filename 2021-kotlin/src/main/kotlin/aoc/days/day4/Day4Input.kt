package aoc.days.day4

import kotlin.math.pow

class Day4Input(val orderOfDraws: List<Int>, val boards: MutableList<BingoBoard>)

class BingoBoard(boardRep: String) {
    private val boardNumbers: List<Int>
    private val numbersSet: MutableList<Boolean>
    private val boardSize: Int

    private var lastDrawnNumber = -1

    data class BoardCords(val x: Int, val y: Int)

    init {
        /*
        22 13 17 11  0
         8  2 23  4 24
        21  9 14 16  7
         6 10  3 18  5
         1 12 20 15 19
        * */

        val rows = boardRep.split("\n").map { row ->
            row.split(" ")
                .map { it.trim() }
                .filter { it.isNotEmpty() }
                .map { Integer.parseInt(it) }
        }

        // we assume the shape of the board is a square
        boardSize = rows[0].size;
        boardNumbers = rows.flatten()
        numbersSet = generateSequence { false }.take(boardSize.toDouble().pow(2.0).toInt()).toMutableList()

    }

    private fun cordsToLocalIndex(cords: BoardCords): Int =
        cords.y * boardSize + cords.x

    private fun localIndexToCords(idx: Int): BoardCords =
        BoardCords(
            idx % boardSize,
            idx / boardSize
        )

    private fun isNumberAtCordsSet(cords: BoardCords): Boolean =
        this.numbersSet[cordsToLocalIndex(cords)]

    fun setDrawnNumber(drawnNumber: Int) {
        lastDrawnNumber = drawnNumber
        this.boardNumbers.mapIndexed { index, i ->
            if (drawnNumber == i) {
                this.numbersSet[index] = true
                return
            }
        }
    }

    fun getBoardScore(): Int {
        // sum all unmarked numbers
        var sumOfUnmarked = 0
        for (x in 0 until this.boardSize) {
            for (y in 0 until this.boardSize) {
                val cords = BoardCords(x, y)
                if (!isNumberAtCordsSet(cords)) {
                    sumOfUnmarked += this.boardNumbers[cordsToLocalIndex(cords)]
                }
            }
        }

        return sumOfUnmarked * this.lastDrawnNumber
    }

    fun isBoardComplete(): Boolean {
        // for every row
        for (y in 0 until this.boardSize) {
            var isRowComplete = true
            for (x in 0 until this.boardSize) {
                isRowComplete = isRowComplete && isNumberAtCordsSet(BoardCords(x, y))
                if (!isRowComplete)
                    break
            }
            if (isRowComplete)
                return true
        }

        // for every column
        for (x in 0 until this.boardSize) {
            var isColumnComplete = true
            for (y in 0 until this.boardSize) {
                isColumnComplete = isColumnComplete && isNumberAtCordsSet(BoardCords(x, y))
                if (!isColumnComplete)
                    break
            }
            if (isColumnComplete)
                return true
        }

        return false
    }
}

