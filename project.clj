(defproject eviltetris "0.1.0"
  :description "An evil tetris"
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [org.clojure/clojurescript "0.0-1450"]
                 [compojure "1.1.3"]
                 [ring/ring-jetty-adapter "1.1.1"]]
  :plugins [[lein-cljsbuild "0.2.10"]
            [lein-ring "0.7.5"]]

  :source-paths ["src/clj"]

  :ring {:handler eviltetris.handler/serve}
  :cljsbuild {
    :builds {
      :dev
      ; The path to the top-level ClojureScript source directory:
      { :source-path "src/cljs"
        :compiler { :output-to "resources/public/main.js"  
                    :optimizations :whitespace 
                    :pretty-print true }}}})
