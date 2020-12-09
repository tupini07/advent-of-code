module Lib
  ( runStep,
  )
where

import qualified Solutions.Day01 as D1
import qualified Solutions.Day02 as D2

runStep ::
  -- | number of step
  Int ->
  -- | raw input data
  String ->
  IO ()
runStep stepNumber rawData = f rawData
  where
    f = case stepNumber of
      1 -> D1.main
      2 -> D2.main
      _ -> return putStrLn "Unknown step number"
