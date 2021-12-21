package aoc.utils

import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse
import java.nio.file.Files
import java.nio.file.Path
import java.nio.file.StandardOpenOption
import kotlin.io.path.notExists

class DataUtils {
    companion object {
        private val cookieSession =
            "53616c7465645f5f8c5005d5f2ab470188544bbb81a7657eb3245f7360b10b4ea2c23195f492efead11cf4c2622930c1"

        private fun getFilePathForDay(dayNumber: Number): Path {
            return Path.of("aoc-data/data-day-$dayNumber.txt")
        }

        private fun downloadDataForDay(dayNumber: Number) {
            val client = HttpClient.newBuilder().build()
            val request =
                HttpRequest.newBuilder()
                    .uri(URI.create("https://adventofcode.com/2021/day/$dayNumber/input"))
                    .setHeader("Cookie", "session=$cookieSession")
                    .build()

            val data = client.send(request, HttpResponse.BodyHandlers.ofString()).body()

            val filePath = getFilePathForDay(dayNumber)

            Files.createDirectories(filePath.parent)
            Files.writeString(filePath, data, StandardOpenOption.CREATE)
        }

        fun getProblemInputForDay(dayNumber: Number): String {
            val filePath = getFilePathForDay(dayNumber)

            if (filePath.notExists()) {
                downloadDataForDay(dayNumber)
            }

            return Files.readString(filePath)
        }
    }
}
