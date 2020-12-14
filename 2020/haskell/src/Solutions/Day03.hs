module Solutions.Day03 where

import           AOC
import           Control.Monad
import           Data.Function    (on)
import           Data.List
import           Data.Maybe
import qualified Data.Set         as S
import           Text.Parsec
import           Text.Parsec.Char

-- input

type Input = [S.Set Int]

parseInput :: String -> Input
parseInput = map (S.fromList . findIndices (`elem` "#")) . lines

-- solution

part1 :: Input -> Int
part1 inpt = countTrue $ map isTreePos (generatePath 0 0)
  where
    mmx = length inpt
    generatePath r c = (r,c) : if r >= (mmx - 1)
                                  then []
                                  else generatePath (r+1) ((c+3) `mod` 11)
    isTreePos (r, c) = S.member c (inpt !! r)

part2 :: Input -> String
part2 = undefined

-- main

main :: String -> IO ()
main rawData = do
  let testInput = parseInput example
      realInput = parseInput rawData
      partPrinter = printAocPart testInput realInput

  putStrLn ""
  partPrinter 1 part1 "7"
  -- partPrinter 2 part2 "1"
  putStrLn ""

example :: String
example = "..##.......\n#...#...#..\n.#....#..#.\n..#.#...#.#\n.#...##..#.\n..#.##.....\n.#.#.#....#\n.#........#\n#.##...#...\n#...##....#\n.#..#...#.#"
