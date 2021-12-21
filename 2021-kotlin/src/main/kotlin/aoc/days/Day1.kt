package aoc.days

class Day1 : BaseDay<List<Int>>("1") {
    override fun prepareData(data: String): List<Int> {
        return data.split("\n").filter { it.isNotEmpty() }.map {
            Integer.parseInt(it)
        }
    }

    override fun part1(data: List<Int>): Number {
        var seen = 0
        var last = Integer.MAX_VALUE

        for (current in data) {
            if (current > last)
                seen++

            last = current
        }

        return seen
    }

    override fun part2(data: List<Int>): Number {
        // not implementing this since I already did it for the clojure implementation :P
        TODO("Not yet implemented")
    }
}