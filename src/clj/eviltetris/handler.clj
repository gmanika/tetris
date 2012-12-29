(ns eviltetris.handler
  (:use compojure.core)
  (:require [compojure.handler :as handler]
            [compojure.route :as route]))

(defroutes cljs-routes
  (route/resources "/")
  (route/not-found "Page not found"))

(def serve
  (handler/site cljs-routes))

