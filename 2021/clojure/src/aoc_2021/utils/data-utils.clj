(ns aoc-2021.utils.data-utils
  (:require [clj-http.client :as client]
            [clojure.string :as strings]))

(def ^:private ^:const cookie-session "53616c7465645f5f8c5005d5f2ab470188544bbb81a7657eb3245f7360b10b4ea2c23195f492efead11cf4c2622930c1")

(defn split-newline [data]
  (strings/split-lines data))

(defn- get-file-path-for-day [dayn]
  (str "resources/data-day-" dayn ".txt"))

(defn- download-data-for-day [dayn]
  (let [request-body (:body (client/get (str "https://adventofcode.com/2021/day/" dayn "/input")
                                        {:cookies {"session" {:value cookie-session}}
                                         :as :stream}))]
    (clojure.java.io/copy
     request-body
     (java.io.File. (get-file-path-for-day dayn)))))

(defn- read-data-for-day [dayn]
  (slurp (get-file-path-for-day dayn)))

(defn get-problem-input-for-day
  "Gets problem data for the specified day. Data is cached inside `resources/` directory."
  [dayn]
  (when (not (.exists (clojure.java.io/file (get-file-path-for-day dayn))))
    (download-data-for-day dayn))
  (read-data-for-day dayn))
