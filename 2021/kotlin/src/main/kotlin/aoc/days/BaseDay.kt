package aoc.days

import aoc.data.TestData
import aoc.utils.DataUtils
import kotlin.system.exitProcess

abstract class BaseDay<T>(private val dayNumber: Number) {
    abstract fun prepareData(data: String): T
    abstract fun part1(data: T): Number
    abstract fun part2(data: T): Number

    private fun printTest(testNum: Number, expectedAnswer: Number, obtainedAnswer: Number) {
        println(
            "[TEST] Part $testNum: $obtainedAnswer " +
                (
                    if (obtainedAnswer == expectedAnswer) "[PASSED]"
                    else "[FAILED expected ($expectedAnswer)]"
                    )
        )
        if (obtainedAnswer != expectedAnswer) {
            // fail process since test failed
            exitProcess(1)
        }
    }

    private fun printReal(realNum: Number, obtainedAnswer: Number) {
        println("[REAL] Part $realNum: $obtainedAnswer")
    }

    fun run() {
        val dayData = DataUtils.getProblemInputForDay(this.dayNumber)
        val testData = TestData.getTestDataForDay(this.dayNumber)

        val preparedRealData = prepareData(dayData)
        val preparedTestData = prepareData(testData.data)

        println("\n--- Running AoC for day $dayNumber --")
        val part1TestResult = part1(preparedTestData)
        printTest(1, testData.answer1, part1TestResult)
        printReal(1, part1(preparedRealData))

        val part2TestResult = part2(preparedTestData)
        printTest(2, testData.answer2, part2TestResult)
        printReal(2, part2(preparedRealData))
    }
}
