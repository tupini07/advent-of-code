-- import
module Solutions.Template where

import AOC
import Control.Monad
import Data.Function (on)
import Data.List
import Data.Maybe
import Text.Parsec
import Text.Parsec.Char

-- input

type Input = String

parseInput :: String -> Input
parseInput = parseLinesWith line
  where
    line = undefined

-- solution

part1 :: Input -> String
part1 = undefined

part2 :: Input -> String
part2 = undefined

-- main

main :: String -> IO ()
main rawData = do
  let testInput = parseInput example
      realInput = parseInput rawData
      partPrinter = printAocPart testInput realInput

  putStrLn ""
  partPrinter 1 part1 "2"
  partPrinter 2 part2 "1"
  putStrLn ""

example :: String
example = ""
