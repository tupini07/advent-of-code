defmodule AdventOfCode.Day04 do
  def part1(args) do
    args
    |> String.split("\n")
    |> Enum.filter(&(&1 != ""))
    |> Enum.map(fn pair ->
      [left_range, right_range] = String.split(pair, ",")

      [left_a, left_b] = String.split(left_range, "-") |> Enum.map(&String.to_integer/1)
      [right_a, right_b] = String.split(right_range, "-") |> Enum.map(&String.to_integer/1)

      is_left_in_right = left_a >= right_a and left_b <= right_b
      is_right_in_left = right_a >= left_a and right_b <= left_b

      is_left_in_right or is_right_in_left
    end)
    |> Enum.filter(& &1)
    |> Enum.count()
  end

  def part2(args) do
    args
    |> String.split("\n")
    |> Enum.filter(&(&1 != ""))
    |> Enum.map(fn pair ->
      [left_range, right_range] = String.split(pair, ",")

      [left_a, left_b] = String.split(left_range, "-") |> Enum.map(&String.to_integer/1)
      [right_a, right_b] = String.split(right_range, "-") |> Enum.map(&String.to_integer/1)

      (left_a >= right_a and left_a <= right_b) or
        (left_b >= right_a and left_b <= right_b) or
        (right_a >= left_a and right_a <= left_b) or
        (right_b >= left_a and right_b <= left_b)
    end)
    |> Enum.filter(& &1)
    |> Enum.count()
  end
end
