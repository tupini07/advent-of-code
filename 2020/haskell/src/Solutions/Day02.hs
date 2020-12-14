{-# LANGUAGE RecordWildCards #-}

module Solutions.Day02 (main) where

-- import

import AOC
import Text.Parsec

-- input

type Input = [PW]

data PW = PW
  { lowerLimit :: Int,
    upperLimit :: Int,
    requiredChar :: Char,
    pass :: [Char]
  }
  deriving (Show)

parseInput :: String -> Input
parseInput = parseLinesWith $ do
  mmin <- intLiteral
  _ <- char '-'
  mmax <- intLiteral
  req <- lower
  _ <- symbol ":"
  pss <- many anyChar

  return $ PW mmin mmax req pss

-- solution
isPWValid :: PW -> Bool
isPWValid PW {..} = reqOccrs >= lowerLimit && reqOccrs <= upperLimit
  where
    reqOccrs = length $ filter (== requiredChar) pass


part1 :: Input -> Int
part1 = length . filter isPWValid

part2 :: Input -> Int
part2 = length . filter isCorrect
  where
    isCorrect PW {..} =
      let isAtLower = isCharAtLimit lowerLimit
          isAtupper = isCharAtLimit upperLimit
          isCharAtLimit limit = pass !! (limit - 1) == requiredChar
       in isAtLower /= isAtupper

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
example = "1-3 a: abcde\n1-3 b: cdefg\n2-9 c: ccccccccc"
