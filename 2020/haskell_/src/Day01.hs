-- import

import           AOC
import           Control.Monad
import           Data.Function    (on)
import           Data.List
import           Data.Maybe
import           Text.Parsec
import           Text.Parsec.Char

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

printPart num f t r = do
  putStrLn $ "# Part " <> show num
  putStrLn "> Test input:"
  print $ f t

  putStrLn "> Real input:"
  print $ f r

  putStrLn ""

main :: IO ()
main = aocMain 01 $ \rawData -> do
  let testInput = parseInput example
      realInput = parseInput rawData

  putStrLn ""
  printPart 1 part1 testInput realInput
  printPart 2 part2 testInput realInput
  putStrLn ""

example :: String
example = "1721\n979\n366\n299\n675\n1456"
