module Main where

import AOC
import Lib (runStep)
import System.Environment
import           System.Exit

main :: IO ()
main = do
  args <- getArgs
  putStrLn $ show args
  if length args < 2 
      then die "bad arguments: input_dir step_num"
      else do
        let stepNum = read $ args !! 1

        aocMain stepNum $ \rawData -> runStep stepNum rawData
            