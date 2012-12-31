goog.provide('eviltetris.core');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
eviltetris.core.load_image = (function load_image(file){
var image__1759169 = (new Image());
image__1759169.src = [cljs.core.str("images/"),cljs.core.str(file)].join('');
return image__1759169;
});
eviltetris.core.images = cljs.core.ObjMap.fromObject(["\uFDD0'blue","\uFDD0'cyan","\uFDD0'green","\uFDD0'magenta","\uFDD0'orange","\uFDD0'red","\uFDD0'yellow"],{"\uFDD0'blue":eviltetris.core.load_image.call(null,"blue.png"),"\uFDD0'cyan":eviltetris.core.load_image.call(null,"cyan.png"),"\uFDD0'green":eviltetris.core.load_image.call(null,"green.png"),"\uFDD0'magenta":eviltetris.core.load_image.call(null,"magenta.png"),"\uFDD0'orange":eviltetris.core.load_image.call(null,"orange.png"),"\uFDD0'red":eviltetris.core.load_image.call(null,"red.png"),"\uFDD0'yellow":eviltetris.core.load_image.call(null,"yellow.png")});
eviltetris.core.shapes = cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,0,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([0,2,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([0,3,"\uFDD0'blue"], true)], true);
eviltetris.core.fill_rect = (function fill_rect(ctx,x,y,sx,sy,color){
ctx.fillStyle = color;
return ctx.fillRect(x,y,sx,sy);
});
eviltetris.core.paint_block = (function paint_block(ctx,x,y,color){
return ctx.drawImage(eviltetris.core.images.call(null,color),(x * 24),(y * 24));
});
eviltetris.core.paint_board = (function paint_board(ctx,board){
eviltetris.core.fill_rect.call(null,ctx,0,0,320,480,"black");
return cljs.core.dorun.call(null,(function (){var iter__2464__auto____1759227 = (function iter__1759199(s__1759200){
return (new cljs.core.LazySeq(null,false,(function (){
var s__1759200__1759215 = s__1759200;
while(true){
if(cljs.core.seq.call(null,s__1759200__1759215))
{var x__1759216 = cljs.core.first.call(null,s__1759200__1759215);
var iterys__2462__auto____1759225 = ((function (s__1759200__1759215,x__1759216){
return (function iter__1759201(s__1759202){
return (new cljs.core.LazySeq(null,false,((function (s__1759200__1759215,x__1759216){
return (function (){
var s__1759202__1759221 = s__1759202;
while(true){
if(cljs.core.seq.call(null,s__1759202__1759221))
{var y__1759222 = cljs.core.first.call(null,s__1759202__1759221);
return cljs.core.cons.call(null,(function (){var temp__3974__auto____1759223 = board.call(null,y__1759222).call(null,x__1759216);
if(cljs.core.truth_(temp__3974__auto____1759223))
{var color__1759224 = temp__3974__auto____1759223;
return eviltetris.core.paint_block.call(null,ctx,x__1759216,y__1759222,color__1759224);
} else
{return null;
}
})(),iter__1759201.call(null,cljs.core.rest.call(null,s__1759202__1759221)));
} else
{return null;
}
break;
}
});})(s__1759200__1759215,x__1759216))
,null));
});})(s__1759200__1759215,x__1759216))
;
var fs__2463__auto____1759226 = cljs.core.seq.call(null,iterys__2462__auto____1759225.call(null,cljs.core.range.call(null,20)));
if(fs__2463__auto____1759226)
{return cljs.core.concat.call(null,fs__2463__auto____1759226,iter__1759199.call(null,cljs.core.rest.call(null,s__1759200__1759215)));
} else
{{
var G__1759228 = cljs.core.rest.call(null,s__1759200__1759215);
s__1759200__1759215 = G__1759228;
continue;
}
}
} else
{return null;
}
break;
}
}),null));
});
return iter__2464__auto____1759227.call(null,cljs.core.range.call(null,10));
})());
});
eviltetris.core.patch_board = (function patch_board(board,color,x,y){
return cljs.core.assoc.call(null,board,y,cljs.core.assoc.call(null,board.call(null,y),x,color));
});
eviltetris.core.test_pattern = (function test_pattern(board){
return eviltetris.core.patch_board.call(null,board,cljs.core.rand_nth.call(null,cljs.core.keys.call(null,eviltetris.core.images)),cljs.core.rand_int.call(null,10),cljs.core.rand_int.call(null,20));
});
eviltetris.core.overlay = (function overlay(board,piece){
var vec__1759239__1759240 = piece;
var px__1759241 = cljs.core.nth.call(null,vec__1759239__1759240,0,null);
var py__1759242 = cljs.core.nth.call(null,vec__1759239__1759240,1,null);
var shape__1759243 = cljs.core.nth.call(null,vec__1759239__1759240,2,null);
return cljs.core.apply.call(null,cljs.core.comp,cljs.core.map.call(null,(function (dot){
var vec__1759244__1759245 = dot;
var dx__1759246 = cljs.core.nth.call(null,vec__1759244__1759245,0,null);
var dy__1759247 = cljs.core.nth.call(null,vec__1759244__1759245,1,null);
var dcolor__1759248 = cljs.core.nth.call(null,vec__1759244__1759245,2,null);
return (function (board){
return eviltetris.core.patch_board.call(null,board,dcolor__1759248,(px__1759241 + dx__1759246),(py__1759242 + dy__1759247));
});
}),shape__1759243)).call(null,board);
});
eviltetris.core.main_loop = (function() {
var main_loop = null;
var main_loop__2 = (function (ctx,board){
return main_loop.call(null,ctx,board,(new Date()).getTime());
});
var main_loop__3 = (function (ctx,board,previous_tick){
var overlayed_board__1759250 = eviltetris.core.overlay.call(null,board,cljs.core.PersistentVector.fromArray([0,0,eviltetris.core.shapes], true));
eviltetris.core.paint_board.call(null,ctx,overlayed_board__1759250);
return setTimeout((function (){
return main_loop.call(null,ctx,board);
}),100);
});
main_loop = function(ctx,board,previous_tick){
switch(arguments.length){
case 2:
return main_loop__2.call(this,ctx,board);
case 3:
return main_loop__3.call(this,ctx,board,previous_tick);
}
throw('Invalid arity: ' + arguments.length);
};
main_loop.cljs$lang$arity$2 = main_loop__2;
main_loop.cljs$lang$arity$3 = main_loop__3;
return main_loop;
})()
;
eviltetris.core.create_board = (function create_board(){
return cljs.core.vec.call(null,cljs.core.take.call(null,20,cljs.core.repeat.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,10,cljs.core.repeat.call(null,null))))));
});
eviltetris.core.init = (function init(){
var canvas__1759254 = document.getElementById("canvas");
var ctx__1759255 = canvas__1759254.getContext("2d");
var board__1759256 = eviltetris.core.create_board.call(null);
return eviltetris.core.main_loop.call(null,ctx__1759255,eviltetris.core.patch_board.call(null,board__1759256,"\uFDD0'blue",0,0));
});
goog.exportSymbol('eviltetris.core.init', eviltetris.core.init);
