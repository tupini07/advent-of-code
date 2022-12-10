defmodule Mix.Tasks.Day do
  use Mix.Task

  import AdventOfCode.Day01

  @shortdoc "Run "
  @spec run(Enum.t()) :: any
  def run(args) do
    requested_benchmark? = Enum.member?(args, "-b")
    args = Enum.filter(args, &(&1 != "-b"))

    if Enum.count(args) != 2 do
      Mix.raise("Usage: mix day <day> <part>")
    end

    [day, part_num] = args
    part_function_name = String.to_atom("part#{part_num}")

    IO.puts("-------------------------------")
    IO.puts("Running day #{day} part #{part_function_name}")
    IO.puts("-------------------------------\n")

    padded_day = String.pad_leading(day, 2, "0")
    aoc_module_name = String.to_existing_atom("Elixir.AdventOfCode.Day#{padded_day}")

    input = AdventOfCode.Input.get!(day, 2022)

    if requested_benchmark? do
      Benchee.run(%{
        "#{part_function_name}" => fn -> apply(aoc_module_name, part_function_name, [input]) end
      })
    else
      apply(aoc_module_name, part_function_name, [input])
      |> IO.inspect(label: "Part #{part_num} Results")
    end

    IO.puts("")
  end
end
