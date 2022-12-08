defmodule AdventOfCode.Day02 do
  # A for Rock, B for Paper, and C for Scissors
  # X for Rock, Y for Paper, and Z for Scissors
  @shape_scores %{
    "X" => 1,
    "Y" => 2,
    "Z" => 3
  }

  @outcome_score %{
    lost: 0,
    draw: 3,
    won: 6
  }

  @strategy_map %{
    "A" => %{lost: "Z", draw: "X", won: "Y"},
    "B" => %{lost: "X", draw: "Y", won: "Z"},
    "C" => %{lost: "Y", draw: "Z", won: "X"}
  }

  defp filter_input(input) do
    input
    |> String.split("\n")
    |> Enum.filter(&(&1 != ""))
  end

  def part1(args) do
    outcome_map = %{
      "A X" => :draw,
      "A Y" => :won,
      "A Z" => :lost,
      "B X" => :lost,
      "B Y" => :draw,
      "B Z" => :won,
      "C X" => :won,
      "C Y" => :lost,
      "C Z" => :draw
    }

    # Your total score is the sum of your scores for each round. The score for a
    # single round is the score for the shape you selected (1 for Rock, 2 for
    # Paper, and 3 for Scissors) plus the score for the outcome of the round (0
    # if you lost, 3 if the round was a draw, and 6 if you won).
    args
    |> filter_input()
    |> Enum.map(fn line ->
      my_shape = String.at(line, 2)

      shape_score = @shape_scores[my_shape]
      outcome = outcome_map[line]
      outcome_score = @outcome_score[outcome]

      shape_score + outcome_score
    end)
    |> Enum.sum()
  end

  def part2(args) do
    # the second column says how the round needs to end: X means you need to
    # lose, Y means you need to end the round in a draw, and Z means you need to
    # win
    second_column_map = %{
      "X" => :lost,
      "Y" => :draw,
      "Z" => :won
    }

    args
    |> filter_input()
    |> Enum.map(fn line ->
      desired_outcome = second_column_map[String.at(line, 2)]

      # what should be my shape and what should be opponet's shape?
      opponet_shape = String.at(line, 0)
      my_shape = @strategy_map[opponet_shape][desired_outcome]

      shape_score = @shape_scores[my_shape]
      outcome_score = @outcome_score[desired_outcome]

      shape_score + outcome_score
    end)
    |> Enum.sum()
  end
end
