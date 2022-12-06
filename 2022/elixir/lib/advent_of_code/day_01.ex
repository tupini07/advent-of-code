defmodule AdventOfCode.Day01 do
  def part1(args) do
    args
    |> get_calories_per_elf()
    |> Enum.map(&Enum.sum(&1))
    |> Enum.sort(:desc)
    |> hd()
  end

  def part2(args) do
    args
    |> get_calories_per_elf()
    |> Enum.map(&Enum.sum(&1))
    |> Enum.sort(:desc)
    |> Enum.take(3)
    |> Enum.sum()
  end

  defp get_calories_per_elf(input) do
    input
    |> String.split("\n\n")
    |> Enum.map(fn elf_calories ->
      elf_calories
      |> String.split("\n")
      |> Enum.filter(&(&1 != ""))
      |> Enum.map(fn score ->
        with {num, _} <- Integer.parse(score) do
          num
        else
          :error -> dbg(score)
        end
      end)
    end)
  end
end
