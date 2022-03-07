(ns aoc-2021.days.day3
  (:require [clojure.string :as string]
            [aoc-2021.utils.data-utils :as data-utils]
            [aoc-2021.data.test-data :as test-data]
            [aoc-2021.utils.run-utils :as run-utils]))

(defn- prepare-data [data]
  (->> data
       data-utils/split-newline))

(defn- binary-string-to-decimal [bstr]
  (Integer/parseInt bstr 2))

(defn- inverse-of-binary-string
  "Returns a new binary string where every bit is inverted"
  [bstr]
  (->> bstr
       (map (fn [b] (if (= b \1)
                      "0"
                      "1")))
       string/join))

(defn- get-gamma-rate-str [data]
  (let [num-length (count (first data))]
    (loop [result []
           curr-i 0]
      (if (= curr-i num-length)
        (string/join result)
        (recur
         (conj result (->> data
                           seq
                           (map (fn [d] (nth d curr-i)))
                           frequencies
                           (sort-by val)
                           reverse
                           first
                           key))
         (inc curr-i))))))

(defn- get-gamma-rate-decimal [data]
  (-> data
      get-gamma-rate-str
      binary-string-to-decimal))

(defn- get-epsilon-rate-decimal [data]
  (-> data
      get-gamma-rate-str
      inverse-of-binary-string
      binary-string-to-decimal))

(defn- solution-part-1
  [data]
  ;; more optimal yet would be to calculate gamma str here and then invert to get epsilon
  ;; so we don't need to process `data` twice. But, meh..
  (let [gamma (get-gamma-rate-decimal data)
        epsilon (get-epsilon-rate-decimal data)]
    (* gamma epsilon)))

(defn- solution-part-2
  [data])

(defn run []
  (println "\n--- Day 2 Solution ---")
  (run-utils/run-on-both
   3
   test-data/day3
   prepare-data
   solution-part-1
   solution-part-2))
