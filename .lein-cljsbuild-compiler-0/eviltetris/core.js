goog.provide('eviltetris.core');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
alert("hello");
/**
* I don't do a whole lot.
*/
eviltetris.core.foo = (function foo(x){
return cljs.core.println.call(null,x,"Hello, World!");
});
