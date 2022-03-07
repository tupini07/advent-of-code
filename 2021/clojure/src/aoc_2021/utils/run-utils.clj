(ns aoc-2021.utils.run-utils
  (:require [aoc-2021.utils.data-utils :as data-utils]))

(defn run-on-real-data [dayn
                        prepare-data-fn
                        solution-part-1-fn
                        solution-part-2-fn]
  (let [problem-data (data-utils/get-problem-input-for-day dayn)
        data (-> problem-data
                 prepare-data-fn)]
    (println "[REAL] Part 1:" (solution-part-1-fn data))
    (println "[REAL] Part 2:" (solution-part-2-fn data))))

(defn run-on-test-data [test-data
                        prepare-data-fn
                        solution-part-1-fn
                        solution-part-2-fn]
  (let [data (-> test-data
                 :data
                 prepare-data-fn)
        result-1 (-> data
                     solution-part-1-fn)
        expected-1 (-> test-data
                       :answer-1)
        result-2 (-> data
                     solution-part-2-fn)
        expected-2 (-> test-data
                       :answer-2)]
    (println "[TEST] Part 1:"
             result-1
             (if (= result-1 expected-1)
               "[PASSED]"
               (str "[FAILED expected(" expected-1 ")]")))

    (println "[TEST] Part 2:"
             result-2
             (if (= result-2 expected-2)
               "[PASSED]"
               (str "[FAILED expected(" expected-2 ")]")))

    ;; return true if both tests passed, false otherwise
    (and (= result-1 expected-1) (= result-2 expected-2))))

(defn run-on-both [dayn
                   test-data
                   prepare-fn
                   part-1
                   part-2]
  (if (run-on-test-data test-data prepare-fn part-1 part-2)
    (run-on-real-data dayn prepare-fn part-1 part-2)
    (println "Tests failed! Not running on real data")))
