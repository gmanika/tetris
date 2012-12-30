(ns eviltetris.core
   (:require [clojure.browser.repl :as repl]))

(repl/connect "http://localhost:9000/repl")

(defn pos

(defn paint-board
  [board]
    (set! (. ctx -fillStyle) "black")
    (.fillRect ctx 0 0 320 480)
    (for [

(defn main-loop
  [ctx board]
    (paint-board board)
)

(defn ^:export init
  []
  (let [canvas (.getElementById js/document "canvas")
        ctx (.getContext canvas "2d")]
    (main-loop ctx [])))
