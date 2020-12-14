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

type Input = (Int, [S.Set Int])

parseInput :: String -> Input
parseInput i = (colLen, sets)
  where
    lns = lines i
    sets = map (S.fromList . findIndices (`elem` "#")) $ lns
    colLen = length . head $ lns
-- solution

part1 :: Input -> Int
part1 (colLen, inpt) = countTrue $ map isTreePos (generatePath 0 0)
  where
    mmx = length inpt
    isTreePos (r, c) = S.member c (inpt !! r)
    generatePath r c = (r,c) : if r >= (mmx - 1)
                                  then []
                                  else generatePath (r+1) ((c+3) `mod` colLen)

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
