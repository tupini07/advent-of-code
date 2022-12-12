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

    IO.puts("-------------------------------")
    IO.puts("Running day #{day} part ##{part_num}")
    IO.puts("-------------------------------\n")

    input = get_input_for_day(day)
    run_fn = get_part_run_fn(day, part_num, input)

    if requested_benchmark? do
      Benchee.run(%{
        "part ##{part_num}" => run_fn
      })
    else
      run_fn.()
      |> IO.inspect(label: "Part ##{part_num} Results")
    end

    IO.puts("")
  end

  @spec get_input_for_day(String.t(), String.t()) :: String.t()
  defp get_input_for_day(day, year \\ "2022") do
    {day_num, _decimal} = Integer.parse(day)

    if day_num < 1 or day_num > 25 do
      Mix.raise("Day must be between 1 and 25")
    end

    AdventOfCode.Input.get!(day, year)
  end

  @spec get_part_run_fn(String.t(), String.t(), String.t()) :: fun
  defp get_part_run_fn(day, part_num, input) do
    part_function_name = String.to_atom("part#{part_num}")
    padded_day = String.pad_leading(day, 2, "0")
    aoc_module_name = String.to_existing_atom("Elixir.AdventOfCode.Day#{padded_day}")

    fn ->
      res = apply(aoc_module_name, part_function_name, [input])

      if res == nil do
        Mix.raise("Day #{day} part #{part_num} is not implemented")
      end

      res
    end
  end
end
