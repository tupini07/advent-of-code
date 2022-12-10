defmodule Mix.Tasks.Day do
  use Mix.Task

  @shortdoc "Run a specific day and part"
  @spec run(Enum.t()) :: any
  def run(args) do
    requested_benchmark? = Enum.member?(args, "-b")
    args = Enum.filter(args, &(&1 != "-b"))

    if Enum.count(args) != 2 do
      Mix.raise("Usage: mix day <day> <part>")
    end

    [day, part_num] = args

    if part_num != "1" and part_num != "2" do
      Mix.raise("Part must be 1 or 2")
    end

    part_function_name = String.to_atom("part#{part_num}")

    IO.puts("-------------------------------")
    IO.puts("Running day #{day} part #{part_function_name}")
    IO.puts("-------------------------------\n")

    padded_day = String.pad_leading(day, 2, "0")
    aoc_module_name = String.to_existing_atom("Elixir.AdventOfCode.Day#{padded_day}")

    input = AdventOfCode.Input.get!(day, 2022)

    run_fn = fn ->
      res = apply(aoc_module_name, part_function_name, [input])

      if res == nil do
        Mix.raise("Day #{day} part #{part_num} is not implemented")
      end

      res
    end

    if requested_benchmark? do
      Benchee.run(%{
        "#{part_function_name}" => run_fn
      })
    else
      run_fn.()
      |> IO.inspect(label: "Part #{part_num} Results")
    end

    IO.puts("")
  end
end
