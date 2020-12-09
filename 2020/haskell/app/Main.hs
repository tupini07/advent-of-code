module Main where

import AOC
import Lib (runDay)
import System.Environment
import System.Exit

main :: IO ()
main = do
  args <- getArgs

  if length args < 2
    then die "bad arguments: input_dir step_num"
    else do
      let stepNum = read $ args !! 1

      aocMain stepNum $ \rawData -> runDay stepNum rawData