defmodule AdventOfCode.Day05 do
  def part1(args) do
    [starting_structure, _instructions] = String.split(args, "\n\n")

    [column_line | starting_structure] =
      starting_structure
      |> String.split("\n")
      |> Enum.reverse()

    columns = column_line |> String.trim() |> String.split("   ") |> Enum.count()

    structure =
      1..columns
      |> Enum.reduce(%{}, fn col, acc ->
        Map.put(acc, col, [])
      end)

    for {line, row} <- Enum.with_index(starting_structure) do
      IO.puts("Processing line #{row}: #{line}")
    end

    columns
  end

  def part2(_args) do
  end
end
