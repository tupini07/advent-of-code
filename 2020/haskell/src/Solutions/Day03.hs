module Solutions.Day03 where

import           AOC
import           Data.List
import qualified Data.Set  as S

-- input

type Input = (Int, [S.Set Int])

parseInput :: String -> Input
parseInput i = (colLen, sets)
  where
    lns = lines i
    sets = map (S.fromList . findIndices (`elem` "#")) lns
    colLen = length . head $ lns
-- solution

type Slope = (Int, Int)
numTreesInSlope :: Input -> Slope -> Int
numTreesInSlope (colLen, inpt) (sR, sC) = countTrue $ map isTreePos (generatePath 0 0)
  where
    mmx = length inpt
    isTreePos (r, c) = S.member c (inpt !! r)
    generatePath r c = (r,c) : if r >= (mmx - 1)
                                  then []
                                  else generatePath (r+sR) ((c+sC) `mod` colLen)

part1 :: Input -> Int
part1 inpt = numTreesInSlope inpt (1,3)

part2 :: Input -> Int
part2 inpt = product $ map (numTreesInSlope inpt) [(1,1), (1,3), (1,5), (1,7), (2,1)]

-- main

main :: String -> IO ()
main rawData = do
  let testInput = parseInput example
      realInput = parseInput rawData
      partPrinter = printAocPart testInput realInput

      checkPath tpl should = putStrLn $ do
        let tplS = show tpl
            n = numTreesInSlope testInput tpl
            nStr = show n
            isEqual = show $ nStr == should
        tplS <> " -> " <> nStr <> " (" <> isEqual <> ")"

  putStrLn ""
  partPrinter 1 part1 "7"

  putStrLn "# Checking path tuples for part 2"
  checkPath (1,1) "2"
  checkPath (1,3) "7"
  checkPath (1,5) "3"
  checkPath (1,7) "4"
  checkPath (2,1) "2"
  putStrLn ""

  partPrinter 2 part2 "336"
  putStrLn ""

example :: String
example = "..##.......\n#...#...#..\n.#....#..#.\n..#.#...#.#\n.#...##..#.\n..#.##.....\n.#.#.#....#\n.#........#\n#.##...#...\n#...##....#\n.#..#...#.#"
