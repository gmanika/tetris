(ns eviltetris.core
   (:require [clojure.browser.repl :as repl]
             [goog.events :as events]
             [goog.events.KeyHandler :as key-handler]))

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


; http://tetris.wikia.com/wiki/Sega_Rotation
(def shapes
  [  
     ; I
     [ [ [0 1 :cyan] [1 1 :cyan] [2 1 :cyan] [3 1 :cyan] ]
       [ [2 0 :cyan] [2 1 :cyan] [2 2 :cyan] [2 3 :cyan] ] ]

     ; O
     [ [ [0 0 :yellow] [0 1 :yellow] [1 0 :yellow] [1 1 :yellow] ] ] 

     ; T
     [ [ [1 1 :magenta] [2 1 :magenta] [3 1 :magenta] [2 0 :magenta] ]
       [ [2 0 :magenta] [2 1 :magenta] [2 2 :magenta] [3 1 :magenta] ]
       [ [1 1 :magenta] [2 1 :magenta] [3 1 :magenta] [2 2 :magenta] ]
       [ [2 0 :magenta] [2 1 :magenta] [2 2 :magenta] [1 1 :magenta] ]
       ]

     ; S
     [ [ [0 1 :green] [1 1 :green] [1 2 :green] [2 2 :green] ]
       [ [1 1 :green] [1 2 :green] [2 0 :green] [2 1 :green] ]
     ]

     ; Z
     [ [ [0 2 :red] [1 1 :red] [1 2 :red] [2 1 :red] ]
       [ [0 0 :red] [0 1 :red] [1 1 :red] [1 2 :red] ]
     ]

     ; J
     [ [ [0 1 :blue] [1 1 :blue] [2 1 :blue] [2 2 :blue] ]
       [ [0 2 :blue] [1 0 :blue] [1 1 :blue] [1 2 :blue] ]
       [ [0 1 :blue] [0 2 :blue] [1 2 :blue] [2 2 :blue] ]
       [ [2 0 :blue] [1 0 :blue] [1 1 :blue] [1 2 :blue] ]
     ]

     ; L
     [ [ [0 1 :orange] [1 1 :orange] [2 1 :orange] [0 2 :orange] ]
       [ [0 0 :orange] [1 0 :orange] [1 1 :orange] [1 2 :orange] ]
       [ [2 1 :orange] [0 2 :orange] [1 2 :orange] [2 2 :orange] ]
       [ [2 2 :orange] [1 0 :orange] [1 1 :orange] [1 2 :orange] ]
     ]



     ])

;(def shapes
;  [ [ [0 0 :cyan] [0 1 :cyan] [0 2 :cyan] [0 3 :cyan] ]
;    [ [0 0 :blue] [0 1 :blue] [1 1 :blue] [2 1 :blue] ]
;    [ [0 1 :orange] [1 1 :orange] [2 1 :orange] [2 0 :orange] ]
;    [ [0 0 :yellow] [0 1 :yellow] [1 0 :yellow] [1 1 :yellow] ]
;    [ [0 1 :green] [1 1 :green] [1 0 :green] [2 0 :green] ]
;    [ [0 0 :red] [1 0 :red] [1 1 :red] [2 1 :red] ]
;    [ [0 1 :magenta] [1 1 :magenta] [1 0 :magenta] [2 1 :magenta] ]
;    ])


(def *last-key-pressed* nil)

(defn keypress
  [event]
  (let [key (.-keyCode event)]
    (set! *last-key-pressed* key))
  (.preventDefault event)
  (.stopPropagation event))

(defn consume-keypress
  []
  (let [lastkey *last-key-pressed*]
    (set! *last-key-pressed* nil)
    lastkey))

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
                        (first shape))) board)))
(defn collides?
  [board piece]
  (let [[px py shape] piece]
    (some false? (map (fn [dot]
            (let [[dx dy _] dot
                   fx (+ dx px)
                   fy (+ dy py)]
              (and (< -1 fx 10)
                   (< -1 fy 20)
                   (nil? ((board fy) fx))))) (first shape)))))
             
(defn rotate
  [piece]
  (let [[px py shape] piece]
    [px py (next shape)]))

(defn tick
  []
  (.getTime (js/Date.)))

(defn move-down
  [piece]
  (assoc piece 1 (inc (second piece))))

(defn move-left
  [piece]
  (assoc piece 0 (dec (first piece))))

(defn move-right
  [piece]
  (assoc piece 0 (inc (first piece))))

(defn get-next-piece
  []
  [3 0 (cycle (rand-nth shapes))])

(defn create-board
  []
  (vec (take 20 (repeat (vec (take 10 (repeat nil)))))))

(declare main-loop)

(defn game-over
  [ctx]
  (main-loop ctx (create-board)))

(defn next-tick
  [ctx board piece tick]
  (js/setTimeout #(main-loop ctx board piece tick) 100))

(defn main-loop
  ([ctx board] (main-loop ctx board (get-next-piece) (tick)))
  ([ctx board piece previous-tick]
    (paint-board ctx (overlay board piece))
    (let [last-key (consume-keypress)]
      (cond
        (collides? board piece) (game-over ctx)
        (and (= last-key 38) (not (collides? board (rotate piece)))) (next-tick ctx board (rotate piece) (tick))
        (and (= last-key 39) (not (collides? board (move-right piece)))) (next-tick ctx board (move-right piece) (tick))
        (and (= last-key 37) (not (collides? board (move-left piece)))) (next-tick ctx board (move-left piece) (tick))
        :else (if (collides? board (move-down piece))
                (next-tick ctx (overlay board piece) (get-next-piece) (tick))
                (next-tick ctx board (move-down piece) (tick)))))))
    

(defn ^:export init
  []
  (let [canvas (.getElementById js/document "canvas")
        ctx (.getContext canvas "2d")
        board (create-board)
        handler (goog.events.KeyHandler. js/document true)]
    (events/listen handler "key" keypress)
    (main-loop ctx board)))
