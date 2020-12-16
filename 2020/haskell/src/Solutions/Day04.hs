module Solutions.Day04 where

import AOC
import qualified Data.HashMap.Strict as M
import Data.Maybe
import qualified Data.Set as Set
import Data.Text (Text)
import qualified Data.Text as T
import Data.Void
import Debug.Trace
import Text.Megaparsec hiding (State)
import qualified Text.Megaparsec as P
import Text.Megaparsec.Char
import Text.Read

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

hasRequiredFields :: Passport -> Bool
hasRequiredFields ppt = all (`M.member` ppt) expectedFields

-- | How many passports are valid?
part1 :: Input -> Int
part1 passports = countTrue $ map hasRequiredFields passports

-- | Problem:
-- - byr (Birth Year) - four digits; at least 1920 and at most 2002.
-- - iyr (Issue Year) - four digits; at least 2010 and at most 2020.
-- - eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
-- - hgt (Height) - a number followed by either cm or in:
--  - If cm, the number must be at least 150 and at most 193.
--  - If in, the number must be at least 59 and at most 76.
-- - hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
-- - ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
-- - pid (Passport ID) - a nine-digit number, including leading zeroes.
-- - cid (Country ID) - ignored, missing or not.
part2 :: Input -> Int
part2 passports = countTrue $ map completeValidation passports
  where
    completeValidation :: Passport -> Bool
    completeValidation p =
      all
        ($ p)
        [ validateFields,
          validateByr,
          validateIyr,
          validateEyr,
          validateHgt,
          validateHairColor,
          validateEyeColor,
          validatePid
        ]

    validateFields = hasRequiredFields
    validateLength s l = T.length s == l
    validateRange n lower upper = lower <= n && n <= upper
    validateNumber n = isJust (readMaybe $ T.unpack n :: Maybe Int)
    validateYear y lower upper = validateLength y 4 && validateNumber y && validateRange n lower upper
      where
        n = read $ T.unpack y

    validateByr p = validateYear byr 1920 2020
      where
        byr = lookupStrInPassport p "byr"
    validateIyr p = validateYear iyr 2010 2020
      where
        iyr = lookupStrInPassport p "iyr"
    validateEyr p = validateYear eyr 2020 2030
      where
        eyr = lookupStrInPassport p "eyr"

    validateHgt p = canParse hgt $ do
      num <- P.many numberChar
      unit <- string "in" <|> string "cm"

      let rnum = read num :: Int

      case unit of
        "cm" ->
          if validateRange rnum 150 193
            then return True
            else P.failure Nothing Set.empty
        "in" ->
          if validateRange rnum 59 76
            then return True
            else P.failure Nothing Set.empty
        _ -> P.failure Nothing Set.empty
      where
        hgt = lookupStrInPassport p "hgt"

    validateHairColor p = canParse hcl $ do
      _ <- char '#'
      P.many hexDigitChar
      where
        hcl = lookupStrInPassport p "hcl"
    validateEyeColor p = ecl `elem` ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"]
      where
        ecl = lookupStrInPassport p "ecl"
    validatePid p = canParse pid (do P.count 9 numberChar)
      where
        pid = lookupStrInPassport p "pid"

    lookupStrInPassport :: Passport -> Text -> Text
    lookupStrInPassport p s = M.lookupDefault "" s p

    canParse :: Show a => Text -> Parser a -> Bool
    canParse t p = case parse p "" t of
      Left _ -> False
      Right _ -> True

-- main

main :: String -> IO ()
main rawData = do
  let rawText = T.pack rawData
      testInput = parseInput example
      realInput = parseInput rawText
      partPrinter = printAocPart testInput realInput

  let testTestInput = parseInput "hgt:59cm ecl:zzz\neyr:2038 hcl:74454a iyr:2023\npid:3556412378 byr:2007"
  putStrLn $ show $ part2 testTestInput

  putStrLn ""
  partPrinter 1 part1 "8"
  partPrinter 2 part2 "4"
  putStrLn ""

example :: Text
example = "eyr:1972 cid:100\nhcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926\n\niyr:2019\nhcl:#602927 eyr:1967 hgt:170cm\necl:grn pid:012533040 byr:1946\n\nhcl:dab227 iyr:2012\necl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277\n\nhgt:59cm ecl:zzz\neyr:2038 hcl:74454a iyr:2023\npid:3556412378 byr:2007\n\npid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980\nhcl:#623a2f\n\neyr:2029 ecl:blu cid:129 byr:1989\niyr:2014 pid:896056539 hcl:#a97842 hgt:165cm\n\nhcl:#888785\nhgt:164cm byr:2001 iyr:2015 cid:88\npid:545766238 ecl:hzl\neyr:2022\n\niyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719"