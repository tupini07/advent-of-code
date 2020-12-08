-- module

module AOC.Runtime (aocMain, printAocPart) where

-- imports

import           Control.Monad
import           Data.Char
import           Data.List
import           System.Environment
import           System.Exit
import           System.FilePath.Posix
import           Text.Printf

-- helpers

printUsageAndDie :: String -> IO ()
printUsageAndDie cmd = die $ "usage: " ++ cmd ++ " path_to_input_dir"

getInput :: Int -> String -> IO String
getInput day dir = dropWhileEnd isSpace <$> readFile filename
  where
    filename = dir </> printf "%02d" day ++ ".in"

-- main

aocMain :: Int -> (String -> IO ()) -> IO ()
aocMain day body = do
  args <- getArgs
  when (length args /= 1) $ getProgName >>= printUsageAndDie
  putStrLn $ printf "### Day %02d ###" day
  getInput day (head args) >>= body

{-|
This function will accept the test and real data, followed by the number of the step, the function to evaluate
which should correspond with the step, and finally the answer for the test data. The answer of the test data is
validated against the expected answer and a check mark or X are shown depending on whether the answer is correct
or not.

A useful patter is to partially apply this function with test and real data, and then apply the result once for
each actual step.

>let testInput = parseInput example
>    realInput = parseInput rawData
>    partPrinter = printAocPart testInput realInput
>
>partPrinter 1 part1 "2"
>partPrinter 2 part2 "1"
-}
printAocPart :: (Show a1, Show a2) => p -> p -> a1 -> (p -> a2) -> String -> IO ()
printAocPart testData realData num func testAns = do
  putStrLn $ "# Part " <> show num
  putStrLn "> Test input:"

  let testResult = show $ func testData
  putStrLn $
    testResult
      <> if testResult == testAns
        then "✅"
        else "❌"

  putStrLn "> Real input:"
  print $ func realData

  putStrLn ""
