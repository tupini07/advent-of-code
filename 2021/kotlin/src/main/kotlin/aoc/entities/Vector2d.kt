package aoc.entities

class Vector2d(val x: Int, val y: Int) {

    operator fun minus(other: Vector2d): Vector2d = Vector2d(this.x - other.x, this.y - other.y)

    operator fun plus(other: Vector2d): Vector2d = Vector2d(this.x + other.x, this.y + other.y)

    operator fun div(num: Int): Vector2d = Vector2d(this.x / num, this.y / num)

    override fun hashCode(): Int = this.x.hashCode() + this.y.hashCode()

    override fun equals(other: Any?): Boolean =
        other is Vector2d && this.x == other.x && this.y == other.y

    fun sign(): Vector2d =
        Vector2d(
            kotlin.math.sign(this.x.toFloat()).toInt(), kotlin.math.sign(this.y.toFloat()).toInt()
        )
}
