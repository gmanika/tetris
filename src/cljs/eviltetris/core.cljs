(ns eviltetris.core
   (:require [clojure.browser.repl :as repl]))

(repl/connect "http://localhost:9000/repl")

(js/alert "hello")

(defn foo
  "I don't do a whole lot."
  [x]
  (println x "Hello, World!"))
