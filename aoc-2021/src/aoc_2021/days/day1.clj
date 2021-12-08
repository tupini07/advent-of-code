(ns aoc-2021.days.day1
  (:require [aoc-2021.utils.data-utils :as data-utils]
            [aoc-2021.data.test-data :as test-data]
            [aoc-2021.utils.run-utils :as run-utils]))

(defn- prepare-data [data]
  (->> data
       data-utils/split-newline
       (map #(Integer/parseInt %))))

(defn- solution-part-1
  ([data]
   (solution-part-1 Integer/MAX_VALUE 0 data))
  ([last-seen seen data]
   (if (empty? data)
     seen
     (let [curr (first data)
           rem (rest data)]
       (solution-part-1 ; loop back using the rest of the data
        curr
        (if (> curr last-seen) ; only increase "seen" if curr > last-seen
          (inc seen)
          seen)
        rem)))))

(defn- build-sequences-of-n [n coll]
  (loop [acc []
         rem coll]
    (if (<= n (count rem))
      (recur (conj acc (vec (take n rem))) (rest rem))
      acc)))

(defn- solution-part-2
  [data]
  (solution-part-1
   (map
    #(apply + %)
    (build-sequences-of-n 3 data))))

(defn run []
  (println "\n--- Day 1 Solution [Part 1] ---")
  (run-utils/run-on-both
   1
   test-data/day1
   prepare-data
   solution-part-1
   solution-part-2))
