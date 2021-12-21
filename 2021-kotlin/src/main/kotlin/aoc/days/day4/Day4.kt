package aoc.days.day4

import aoc.days.BaseDay

class Day4 : BaseDay<Day4Input>(4) {

    override fun prepareData(data: String): Day4Input {
        var drawOrderStr = data.split("\n").first()

        var drawOrder = drawOrderStr.split(",").map { Integer.parseInt(it) }

        var boards =
            data.split(drawOrderStr + "\n")[1].split("\n\n").map { it.trim() }.filter {
                it.isNotEmpty()
            }

        return Day4Input(drawOrder, boards.map { BingoBoard(it) }.toMutableList())
    }

    override fun part1(data: Day4Input): Number {
        for (drawnNumber in data.orderOfDraws) {
            for (board in data.boards) {
                board.setDrawnNumber(drawnNumber)
                if (board.isBoardComplete()) {
                    return board.getBoardScore()
                }
            }
        }

        return -1
    }

    override fun part2(data: Day4Input): Number {
        var lastBoardScore = 0
        var seenBoards = mutableSetOf<Int>()

        for (drawnNumber in data.orderOfDraws) {
            for (board in data.boards) {
                board.setDrawnNumber(drawnNumber)
                if (!seenBoards.contains(board.hashCode()) && board.isBoardComplete()) {
                    lastBoardScore = board.getBoardScore()
                    seenBoards.add(board.hashCode())
                }
            }
        }

        return lastBoardScore
    }
}
