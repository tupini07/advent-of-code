package aoc.data

class TestDataEntry(val data: String, val answer1: Number, val answer2: Number)

class TestData {
    companion object {
        private val testDataMap =
            mapOf(
                1 to TestDataEntry("199\n200\n208\n210\n200\n207\n240\n269\n260\n263", 7, 5),
                2 to TestDataEntry("forward 5\ndown 5\nforward 8\nup 3\ndown 8\nforward 2", 150, 900),
                3 to
                    TestDataEntry(
                        "00100\n11110\n10110\n10111\n10101\n01111\n00111\n11100\n10000\n11001\n00010\n01010",
                        190,
                        -1
                    ),
                4 to
                    TestDataEntry(
                        "7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1\n 22 13 17 11  0\n 8  2 23  4 24\n21  9 14 16  7\n 6 10  3 18  5\n 1 12 20 15 19\n\n 3 15  0  2 22\n 9 18 13 17  5\n19  8  7 25 23\n20 11 10 24  4\n14 21 16 12  6\n\n14 21 17 24  4\n10 16 15  9 19\n18  8 23 26 20\n22 11 13  6  5\n 2  0 12  3  7",
                        4512,
                        1924
                    ),
                5 to
                    TestDataEntry(
                        "0,9 -> 5,9\n8,0 -> 0,8\n9,4 -> 3,4\n2,2 -> 2,1\n7,0 -> 7,4\n6,4 -> 2,0\n0,9 -> 2,9\n3,4 -> 1,4\n0,0 -> 8,8\n5,5 -> 8,2",
                        5,
                        12
                    )
            )

        fun getTestDataForDay(dayNumber: Number): TestDataEntry {
            return testDataMap[dayNumber]!!
        }
    }
}
