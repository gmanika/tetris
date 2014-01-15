(defproject tetris "0.1.0"
  :description "An evil tetris"
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2138"]
                 [compojure "1.1.3"]
                 [ring/ring-jetty-adapter "1.2.1"]]
  :plugins [[lein-cljsbuild "1.0.1"]
            [lein-ring "0.8.10"]]

  :source-paths ["src/clj"]

  :ring {:handler tetris.handler/serve}

  :cljsbuild
  {:builds
   [{:source-paths ["src/cljs"],
     :id "dev",
     :compiler
     {:pretty-print false,
      :output-to "resources/public/main.js",
      :optimizations :advanced}}]})
