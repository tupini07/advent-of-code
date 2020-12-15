module Solutions.Day04 where

import AOC
import qualified Data.HashMap.Strict as M
import Data.Text (Text)
import qualified Data.Text as T
import Data.Void
import Text.Megaparsec hiding (State)
import qualified Text.Megaparsec as P
import Text.Megaparsec.Char

type Passport = M.HashMap Text Text

type Input = [Passport]

type Parser = Parsec Void Text

parseKeyValue :: Parser (Text, Text)
parseKeyValue = do
  key <- P.many alphaNumChar
  _ <- char ':'
  value <- P.many (alphaNumChar <|> char '#')
  return $ (T.pack key, T.pack value)

pPassport :: Parser [(Text, Text)]
pPassport = do parseKeyValue `P.sepBy` spacesOrNewline
  where
    spacesOrNewline = do P.many (char ' ' <|> char '\n')

getPassport :: Text -> Passport
getPassport inpt = M.fromList parsed
  where
    parsed = case parse pPassport "" inpt of
      Left _ -> []
      Right r -> r

-- expectedFields :: [[Char]]
expectedFields :: [Text]
expectedFields =
  [ "byr",
    "iyr",
    "eyr",
    "hgt",
    "hcl",
    "ecl",
    "pid"
    -- "cid" -- we can ignore this field
  ]

parseInput :: Text -> Input
parseInput inpt = map getPassport splitted
  where
    splitted = T.splitOn "\n\n" inpt

-- solution

-- | How many passports are valid?
part1 :: Input -> Int
part1 psprts = countTrue $ map isPassportCorrect psprts
  where
    isPassportCorrect ppt = all (`M.member` ppt) expectedFields

part2 :: Input -> String
part2 = undefined

-- main

main :: String -> IO ()
main rawData = do
  let rawText = T.pack rawData
      testInput = parseInput example
      realInput = parseInput rawText
      partPrinter = printAocPart testInput realInput

  putStrLn ""
  partPrinter 1 part1 "2"
  -- partPrinter 2 part2 "1"
  putStrLn ""

example :: Text
example = "ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\nbyr:1937 iyr:2017 cid:147 hgt:183cm\n\niyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884\nhcl:#cfa07d byr:1929\n\nhcl:#ae17e1 iyr:2013\neyr:2024\necl:brn pid:760753108 byr:1931\nhgt:179cm\n\nhcl:#cfa07d eyr:2025 pid:166559648\niyr:2011 ecl:brn hgt:59in"
