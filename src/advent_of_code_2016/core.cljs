(ns advent-of-code-2016.core
  (:require [sablono.core :as sab]
            [advent-of-code-2016.day1 :as day1])) 

(enable-console-print!)

(defonce app-state (atom {:displayed day1/display}))

(defn change-problem! [dspl]
  (swap! app-state #(update % :displayed dspl)))

(defn disp-manager []
  (sab/html  
   [:div 
    [:div {style {width "20%" float "left" padding-right "20px"}} 
     [:h2 "Select problem you would like solution for"]
     [:a {:href "#"
          :onClick #(change-problem! day1/display )}
      "Day 1"]
     ]
    [:div {style {border "3px dashed" float "right" width "75%" padding "20px"}}
     ((@app-state :displayed))]]))
 
(defn render! []
  (.render js/ReactDOM
           (disp-manager)
           (.getElementById js/document "app")))

(defn on-js-reload []
  )

(add-watch app-state :on-change (fn [_ _ _ _] (render!)))

(render!)



