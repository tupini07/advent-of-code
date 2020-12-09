module Lib
  ( runDay,
  )
where

import qualified Solutions.Day01 as D1
import qualified Solutions.Day02 as D2

runDay ::
  -- | number of step
  Int ->
  -- | raw input data
  String ->
  IO ()
runDay stepNumber = f
  where
    f = case stepNumber of
      1 -> D1.main
      2 -> D2.main
      _ -> return putStrLn "Unknown step number"
