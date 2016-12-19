(ns advent-of-code-2016.day1
  (:require [sablono.core :as sab]))

(defn abs [x]
  (cond (< x 0) (- x)
        :else x))

(defn path-points
  "Return an array with all the points we travers from a starting point"
  [strt cmp op amnt]

  (defn h-next-point [this-point]
    (path-points this-point cmp op (dec amnt)))

   (if (zero? amnt)
     [strt]
     (let [x  (first strt)
           y  (last strt)
           xi (op x)
           yi (op y)]
       
       (into [strt] (cond (= cmp 'x) (h-next-point [xi y])
                          (= cmp 'y) (h-next-point [x yi]))))))

(defn next-point
  "Given a direction 'left or right', magnitude and initial position and initial direction calculate next point.
Returns an array with 
[next-x next-y next-direction modified-component operator-used]"
  [indir lor mag x y]
  (cond (= indir \N) (if (= lor \L)
                       [(- x mag) y \W 'x dec]
                       [(+ x mag) y \E 'x inc])
        (= indir \E) (if (= lor \L)
                       [x (+ y mag) \N 'y inc]
                       [x (- y mag) \S 'y dec])
        (= indir \S) (if (= lor \L)
                       [(+ x mag) y \E 'x inc]
                       [(- x mag) y \W 'x dec])
        (= indir \W) (if (= lor \L)
                       [x (- y mag) \S 'y dec]
                       [x (+ y mag) \N 'y inc])))


(defn calc-end-position
  "Takes the directions 'L1, R5, R3...' and computes the end position in a cartesian system. Returns [xpos, ypos, dir] where dir is the direction we are facing"
  [directs]
  (reduce #(let [[dir & amnt]          %2
                 amnt                  (int (apply str amnt))
                 [x y idr points] %1
                 [nx ny ndir cmp op]   (next-point idr dir amnt x y)
                 path                  (into points (path-points [x y] cmp op (dec amnt)))]
             [nx ny ndir path])
          [0 0 \N []]                   ; [x y dir arr-of-positions
          directs))


(defn solution-1 [directs]
    "How many blocks away is Easter Bunny HQ"
  (->> directs
       calc-end-position
       (take 2) ; first 2 elements are x and y
       (map abs); we only care for real distance
       (apply +))) ; the sum of components is the amounts of blocks in distance

(defn solution-2 [directs]
  (->> directs
       calc-end-position
       last ; Last element is array of positions we crossed
       (reductions conj (list)) 
       (filter (fn [[x & xs]] ((set xs) x))) ; Filter out duplicate elements
       ffirst
       (map abs)
       (reduce +)))



; Display stuff --------------------------------------------------------------------------

(defn get-input []
  "Gets input from input field and pre-process it"
  (clojure.string/split 
   (.-value (.getElementById js/document "inpt"))
   #", "))

(defn- set-result! [val]
  (set! (.-innerHTML (.getElementById js/document "result")) (str "Result => " val)))


(defn display [] 
  (sab/html [:div 
             [:h1 "Solution for day 1"]
             [:input {type "text" id "inpt"}]
             [:div {id "result"}]
             [:div [:a {:href "#"
                        :onClick #(set-result! (solution-1 (get-input)))}
                    "Solve Part 1"]]
             [:div [:a {:href "#"
                        :onClick #(set-result! (solution-2 (get-input)))}
                    "Solve Part 2"]]]))

