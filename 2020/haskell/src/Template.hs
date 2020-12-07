-- import

import           Control.Monad
import           Data.Function    (on)
import           Data.List
import           Data.Maybe
import           Text.Parsec
import           Text.Parsec.Char

import           AOC



-- input

type Input = String

parseInput :: String -> Input
parseInput = parseLinesWith line
  where line = undefined



-- solution

part1 :: Input -> String
part1 = undefined

part2 :: Input -> String
part2 = undefined



-- main


printPart num f t r = do
  putStrLn $ "# Part " <> (show num)
  putStrLn "> Test input:"
  print $ f t

  putStrLn "> Real input:"
  print $ f r

  putStrLn ""

main :: IO ()
main = aocMain 00 $ \rawData -> do
  let testInput = parseInput example
      realInput = parseInput rawData

  putStrLn ""
  printPart 1 part1 testInput realInput
  printPart 2 part2 testInput realInput
  putStrLn ""


example :: String
example = ""
