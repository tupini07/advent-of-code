(ns aoc-2021.days.day2
  (:require [aoc-2021.utils.data-utils :as data-utils]
            [aoc-2021.data.test-data :as test-data]
            [aoc-2021.utils.run-utils :as run-utils]))

(defn- prepare-data [data]
  (->> data
       data-utils/split-newline))

(defn- get-pos-change-from-instruction [instruction]
  (let [splitted (clojure.string/split instruction #"\s")
        head (first splitted)
        arg (Integer/parseInt (second splitted))]
    (case head
      "forward" {:horizontal arg :vertical 0}
      "down" {:horizontal 0 :vertical arg}
      "up" {:horizontal 0 :vertical (* -1 arg)})))

(defn- part-2-apply-instruction-to-pos [pos instruction]
  (let [splitted (clojure.string/split instruction #"\s")
        head (first splitted)
        arg (Integer/parseInt (second splitted))
        curr-h (:horizontal pos)
        curr-v (:vertical pos)
        curr-a (:aim pos)]
    (case head
      "forward" {:horizontal (+ curr-h arg)
                 :vertical (+ curr-v (* curr-a arg))
                 :aim curr-a}
      "down" {:horizontal curr-h
              :vertical curr-v
              :aim (+ curr-a arg)}
      "up" {:horizontal curr-h
            :vertical curr-v
            :aim (- curr-a arg)})))

(defn- merge-pos-and-instruction [pos instruction]
  (merge-with +
              pos
              (get-pos-change-from-instruction instruction)))

(defn- apply-instructions [instructions]
  (loop [curr (first instructions)
         rem (rest instructions)
         pos {:horizontal 0
              :vertical 0}]
    (if (empty? rem)
      (merge-pos-and-instruction pos curr)
      (recur
       (first rem)
       (rest rem)
       (merge-pos-and-instruction pos curr)))))

(defn- part-2-apply-instructions [instructions]
  (loop [curr (first instructions)
         rem (rest instructions)
         pos {:horizontal 0
              :vertical 0
              :aim 0}]
    (if (empty? rem)
      (part-2-apply-instruction-to-pos pos curr)
      (recur
       (first rem)
       (rest rem)
       (merge-with +
                   (part-2-apply-instruction-to-pos pos curr))))))

(defn- solution-part-1
  [data]
  (let [final-pos (apply-instructions data)
        horizontal (:horizontal final-pos)
        vertical (:vertical final-pos)]
    (* horizontal vertical)))

(defn- solution-part-2
  [data]
  (let [final-pos (part-2-apply-instructions data)
        horizontal (:horizontal final-pos)
        vertical (:vertical final-pos)]
    (* horizontal vertical)))

(defn run []
  (println "\n--- Day 2 Solution ---")
  (run-utils/run-on-both
   2
   test-data/day2
   prepare-data
   solution-part-1
   solution-part-2))
