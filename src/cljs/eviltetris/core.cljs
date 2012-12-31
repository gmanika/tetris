(ns eviltetris.core
   (:require [clojure.browser.repl :as repl]))

(repl/connect "http://localhost:9000/repl")


(defn load-image
  [file]
  (let [image (js/Image.)]
    (set! (.-src image) (str "images/" file))
    image))

(def images
  { :blue (load-image "blue.png")
    :cyan (load-image "cyan.png")
    :green (load-image "green.png")
    :magenta (load-image "magenta.png")
    :orange (load-image "orange.png")
    :red (load-image "red.png")
    :yellow (load-image "yellow.png") })

(def shapes
  [ [0 0 :blue] [0 1 :blue] [0 2 :blue] [0 3 :blue] ])


(defn fill-rect
  [ctx x y sx sy color]

  (set! (. ctx -fillStyle) color)
  (.fillRect ctx x y sx sy))

(defn paint-block
  [ctx x y color]
  (.drawImage ctx (images color) (* x 24) (* y 24)))


(defn paint-board
  [ctx board]
  (fill-rect ctx 0 0 320 480 "black")
  (dorun
    (for [x (range 10)
          y (range 20)]
      (when-let [color ((board y) x)]
          (paint-block ctx x y color)))))

(defn patch-board
  [board color x y]
  (assoc board y (assoc (board y) x color)))

(defn test-pattern
  [board]
  (patch-board board (rand-nth (keys images)) (rand-int 10) (rand-int 20)))

(defn overlay
  [board piece]
  (let [[px py shape] piece]
    ((apply comp (map (fn [dot]
                     (let [[dx dy dcolor] dot]
                      (fn [board]
                        (patch-board board dcolor (+ px dx) (+ py dy)))))
                        shape)) board)))
             

        

(defn main-loop
  ([ctx board] (main-loop ctx board (.getTime (js/Date.))))
  ([ctx board previous-tick]
  (let [overlayed-board (overlay board [0 0 shapes])]
    (paint-board ctx overlayed-board)
    (js/setTimeout #(main-loop ctx board) 100))))
    
;(js/setTimeout #(main-loop ctx (test-pattern board)) 100)))


(defn create-board
  []
  (vec (take 20 (repeat (vec (take 10 (repeat nil)))))))



(defn ^:export init
  []
  (let [canvas (.getElementById js/document "canvas")
        ctx (.getContext canvas "2d")
        board (create-board)]
    (main-loop ctx (patch-board board :blue 0 0))))
