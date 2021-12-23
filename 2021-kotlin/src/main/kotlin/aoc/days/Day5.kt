package aoc.days

import aoc.entities.Vector2d

typealias Day5Input = List<Pair<Vector2d, Vector2d>>

class Day5 : BaseDay<Day5Input>(5) {
    override fun prepareData(data: String): Day5Input =
        data.split("\n").filter { it.isNotEmpty() }.map { instruction ->
            val (pos1, pos2) =
                instruction.split(" -> ").map { singlePos ->
                    val (x, y) = singlePos.split(",").map(Integer::parseInt)

                    Vector2d(x, y)
                }
            Pair(pos1, pos2)
        }

    private fun walkInstruction(start: Vector2d, end: Vector2d): List<Vector2d> {
        var currentPos = start
        val result = mutableListOf(currentPos)

        while (currentPos != end) {
            val direction = (end - currentPos).sign()
            currentPos += direction
            result.add(currentPos)
        }

        return result
    }

    private fun countPositions(positions: List<Vector2d>): Map<Vector2d, Int> =
        positions.fold(mutableMapOf<Vector2d, Int>()) { acc, pos ->
            acc[pos] = acc.getOrDefault(pos, 0) + 1
            acc
        }

    override fun part1(data: Day5Input): Number {
        // only consider horizontal or vertical movements
        val validInstructions =
            data.filter {
                val (start, end) = it
                start.x == end.x || start.y == end.y
            }

        // get visited points for every instruction
        val positionsVisited =
            validInstructions
                .map {
                    val (start, end) = it
                    walkInstruction(start, end)
                }
                .flatten()

        return countPositions(positionsVisited).values.filter { it >= 2 }.size
    }

    override fun part2(data: Day5Input): Number {
        // same as part1 but we're considering every instruction
        val positionsVisited =
            data
                .map {
                    val (start, end) = it
                    walkInstruction(start, end)
                }
                .flatten()

        return countPositions(positionsVisited).values.filter { it >= 2 }.size
    }
}
