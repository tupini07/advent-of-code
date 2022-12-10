defmodule AdventOfCode.Day03 do
  @docp """
  To help prioritize item rearrangement, every item type can be converted to a
  priority:
  - Lowercase item types a through z have priorities 1 through 26.
  - Uppercase item types A through Z have priorities 27 through 52.
  """
  defp priority(char) do
    case char do
      char when char in ?a..?z -> char - ?a + 1
      char when char in ?A..?Z -> char - ?A + 27
    end
  end

  def part1(args) do
    args
    |> String.split("\n")
    |> Enum.map(fn contents ->
      len_contents = String.length(contents)
      charlist = String.to_charlist(contents)

      # index of middle
      middle_idx = div(len_contents, 2)

      # part 1 contains the first half of the list
      part_1_set = MapSet.new(Enum.take(charlist, middle_idx))

      # part 2 contains the second half of the list
      part_2_set = MapSet.new(Enum.drop(charlist, middle_idx))

      # the intersection of the two sets is the list of characters that are in both
      # parts of the list
      intersection = MapSet.intersection(part_1_set, part_2_set)

      intersection
    end)
    |> Enum.flat_map(fn intersection -> Enum.map(intersection, &priority(&1)) end)
    |> Enum.sum()
  end

  def part2(args) do
    args
    |> String.split("\n")
    |> Enum.chunk_every(3)
    |> Enum.map(fn group_rucksacks ->
      # each group of 3 rucksacks is a list of 3 lists of characters
      # we need to convert each list of characters into a set of characters
      # and then find the intersection of the 3 sets
      group_rucksacks
      |> Enum.map(fn rucksack -> MapSet.new(String.to_charlist(rucksack)) end)
      |> Enum.reduce(fn rucksack, acc -> MapSet.intersection(rucksack, acc) end)
    end)
    |> Enum.flat_map(fn intersection -> Enum.map(intersection, &priority(&1)) end)
    |> Enum.sum()
  end
end
