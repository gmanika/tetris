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
  [ [ [0 0 :cyan] [0 1 :cyan] [0 2 :cyan] [0 3 :cyan] ]
    [ [0 0 :blue] [0 1 :blue] [1 1 :blue] [2 1 :blue] ]
    [ [0 1 :orange] [1 1 :orange] [2 1 :orange] [2 0 :orange] ]
    [ [0 0 :yellow] [0 1 :yellow] [1 0 :yellow] [1 1 :yellow] ]
    [ [0 1 :green] [1 1 :green] [1 0 :green] [2 0 :green] ]
    [ [0 0 :red] [1 0 :red] [1 1 :red] [2 1 :red] ]
    [ [0 1 :magenta] [1 1 :magenta] [1 0 :magenta] [2 1 :magenta] ]
    ])


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
(defn collides?
  [board piece]
  (let [[px py shape] piece]
    (some false? (map (fn [dot]
            (let [[dx dy _] dot
                   fx (+ dx px)
                   fy (+ dy py)]
              (and (< 0 fx 10)
                   (< 0 fy 20)
                   (nil? ((board fy) fx))))) shape))))
             
(defn rotate-shape
  [shape]
  (mapv (fn [s]
         (let [[x y color] s]
           [y x color])) shape))

(defn tick
  []
  (.getTime (js/Date.)))

(defn move-down
  [piece]
  (assoc piece 1 (inc (second piece))))

(defn get-next-piece
  []
  [3 0 (rand-nth shapes)])

(declare main-loop)

(defn next-tick
  [ctx board piece tick]
  (js/setTimeout #(main-loop ctx board (move-down piece) tick) 250))


(defn main-loop
  ([ctx board] (main-loop ctx board (get-next-piece) (tick)))
  ([ctx board piece previous-tick]
    (paint-board ctx (overlay board piece))

    (if (collides? board (move-down piece))
      (next-tick ctx (overlay board piece) (get-next-piece) (tick))
      (next-tick ctx board (move-down piece) (tick)))))
    
;(js/setTimeout #(main-loop ctx (test-pattern board)) 100)))


(defn create-board
  []
  (vec (take 20 (repeat (vec (take 10 (repeat nil)))))))



(defn ^:export init
  []
  (let [canvas (.getElementById js/document "canvas")
        ctx (.getContext canvas "2d")
        board (create-board)]
    (main-loop ctx board)))
