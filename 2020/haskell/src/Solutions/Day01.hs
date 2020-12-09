module Solutions.Day01 where

-- import

import AOC
import Control.Monad
import Data.List

-- input

type Input = [Int]

parseInput :: String -> Input
parseInput = map read . lines

-- solution

part1 :: Input -> Int
part1 input = head $ do
  n <- input
  guard $ (2020 - n) `elem` input
  return $ n * (2020 - n)

part2 :: Input -> Int
part2 input = head $ do
  (first : rest) <- tails input
  second <- rest

  let diff = 2020 - first - second
  guard $ diff `elem` input

  return $ first * second * diff

-- main

main :: String -> IO ()
main rawData = do
  let testInput = parseInput example
      realInput = parseInput rawData
      partPrinter = printAocPart testInput realInput

  putStrLn ""
  partPrinter 1 part1 "514579"
  partPrinter 2 part2 "241861950"
  putStrLn ""

example :: String
example = "1721\n979\n366\n299\n675\n1456"
