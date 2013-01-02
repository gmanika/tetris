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
  (fill-rect ctx 0 0 320 480 "#4A4848")
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
             
(defn get-tick
  []
  (.getTime (js/Date.)))


(defn new-or-original
  [board new original]
  (if (collides? board new)
    original
    new))

(defn move-down
  [board piece]
  (let [new-piece (assoc piece 1 (inc (second piece)))]
    (new-or-original board new-piece piece)))

(defn move-left
  [board piece]
  (let [new-piece (assoc piece 0 (dec (first piece)))]
    (new-or-original board new-piece piece)))

(defn move-right
  [board piece]
  (let [new-piece (assoc piece 0 (inc (first piece)))]
    (new-or-original board new-piece piece)))

(defn rotate
  [board piece]
  (let [[px py shape] piece
        new-piece [px py (next shape)]]
    (new-or-original board new-piece piece)))


(defn hard-drop
  [board piece]
  (loop [p piece]
    (if (= p (move-down board p))
      p
      (recur (move-down board p)))))
  

(defn random-bag
  []
  (let [bag-seq (mapcat identity (repeatedly #(shuffle shapes)))
        q (atom bag-seq)]
    (fn [board]
      (let [next-piece (first @q)]
        (swap! q rest)
        [3 0 (cycle next-piece)]))))

(defn create-line
  []
    (vec (take 10 (repeat nil))))

(defn create-board
  []
  (vec (take 20 (repeat (create-line)))))


(defn format-score
  [score]
  (cond
    (< score 1) "No lines"
    (< score 2) "1 line"
    :else (str score " lines")))

(defn game-over
  [state]
  (let [gameover (.getElementById js/document "gameover")
        scoreline (.getElementById js/document "score")]
    (set! (.-visibility (.-style gameover)) "visible")
    (set! (.-innerHTML scoreline) (format-score (state :score)))))

(defn line-full?
  [line]
  (every? keyword? line))

(defn remove-lines
  [board]
  (let [filtered-lines (filter (comp not line-full?) board)
        difference (- (count board) (count filtered-lines))]
    (into (vec (repeat difference (create-line))) filtered-lines)))

(defn account-lines
  [board]
  (count (filter line-full? board)))

(declare main-loop)

(defn next-tick
  [state]
  (js/setTimeout #(main-loop state) 5))

(defn main-loop
  [state]
    (let [{:keys [ctx board piece score tick last-tick piece-generator]} state
          last-key (consume-keypress)
          current-tick (get-tick)
          piece (or piece (piece-generator board))]
      (if (collides? board piece)
        (game-over state)
        (do
          (paint-board (:ctx state) (overlay (:board state) (:piece state)))
          (next-tick
            (cond
              (= last-key 37) (assoc state :piece (move-left board piece))
              (= last-key 38) (assoc state :piece (rotate board piece))
              (= last-key 39) (assoc state :piece (move-right board piece))
              (= last-key 40) (assoc state :piece (move-down board piece))
              (= last-key 32) (assoc state :piece (hard-drop board piece))
              (< (- current-tick last-tick) tick) state
              (= piece (move-down board piece)) (let [overlaid-board (overlay board piece)
                                                      new-board (remove-lines overlaid-board)]
                                                   (assoc state :score (+ score (account-lines overlaid-board))
                                                                :board new-board
                                                                :piece (piece-generator new-board)
                                                                :last-tick
                                                                current-tick))
              :else  (assoc state :piece (move-down board piece)
                                  :last-tick current-tick)))))))

(defn create-game-state
  [ctx piece-generator]
  { :ctx ctx
    :board (create-board)
    :piece nil
    :score  0
    :tick 350
    :piece-generator piece-generator
    :last-tick 0})
    
(defn ^:export start-game
  []
  (consume-keypress)
  (let [canvas (.getElementById js/document "canvas")
        ctx (.getContext canvas "2d")
        board (create-board)
        gameover (.getElementById js/document "gameover")]
    (set! (.-visibility (.-style gameover)) "hidden")
    (main-loop (create-game-state ctx (random-bag)))))

(defn ^:export init
  []
    (let [handler (goog.events.KeyHandler. js/document true)]
      (events/listen handler "key" keypress)
      (start-game)))



