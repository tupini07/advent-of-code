defmodule AdventOfCode.Day05 do
  import NimbleParsec

  eol = choice([ignore(string("\n")), ignore(string("\n\r"))])

  present_column =
    ignore(string("["))
    |> ascii_string([?A..?Z], 1)
    |> ignore(string("]"))

  empty_column = string("   ") |> replace(:empty)

  multi_column =
    choice([present_column, empty_column])
    |> concat(optional(ignore(string(" "))))
    |> repeat()
    |> tag(:column_line)
    |> concat(eol)

  lines_of_columns =
    multi_column
    |> wrap()
    |> repeat()

  defparsecp(:parse_starting_structure, lines_of_columns)

  def sparse_starting_structure(starting_structure) do
    starting_structure |> dbg

    starting_structure
    |> parse_starting_structure
    |> dbg()
  end

  def part1(args) do
    [starting_structure, _instructions] = String.split(args, "\n\n")

    structure =
      starting_structure
      |> parse_starting_structure
      |> dbg()

    structure
  end

  def part2(_args) do
  end
end
