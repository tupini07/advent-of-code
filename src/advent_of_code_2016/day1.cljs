(ns advent-of-code-2016.day1
  (:require [sablono.core :as sab]))

(defn solution [directs]
    "Directions is an array for 'directions' consisting of Rx and Lx where x is a number.
This functions walks through these directions and returns the number of how many blocks away is Easter Bunny HQ"
   (apply + (reduce #(let [[dir amnt] %2
                           [x y idr]  %1]
                       (cond (= idr \N) (if (= dir \L)
                                          [(- x amnt) y \W]
                                          [(+ x amnt) y \E])
                             (= idr \E) (if (= dir \L)
                                          [x (+ y amnt) \N]
                                          [x (- y amnt) \S])
                             (= idr \S) (if (= dir \L)
                                          [(- x amnt) y \E]
                                          [(+ x amnt) y \W])
                             (= idr \W) (if (= dir \L)
                                          [x (- y amnt) \S]
                                          [x (+ y amnt) \N]))) 
                    [0 0 \N]
                    directs)))

(defn get-input []
  "Gets input from input field and pre-process it"
  (clojure.string/split 
   (.-value (.getElementById js/document "inpt"))
   ", "))

(defn display [] 
  (sab/html [:div
             [:h1 "Solution for day 1"]
             [:input {type "text" id "inpt"}]
             [:div [:a {:href "#"
                        :onClick #(solution (get-input))}
                    "Thumbs upp"]]
             [:div {id "result"}]]))

