goog.provide('eviltetris.core');
goog.require('cljs.core');
goog.require('goog.events.KeyHandler');
goog.require('goog.events');
goog.require('clojure.browser.repl');
clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
eviltetris.core.load_image = (function load_image(file){
var image__105525 = (new Image());
image__105525.src = [cljs.core.str("images/"),cljs.core.str(file)].join('');
return image__105525;
});
eviltetris.core.images = cljs.core.ObjMap.fromObject(["\uFDD0'blue","\uFDD0'cyan","\uFDD0'green","\uFDD0'magenta","\uFDD0'orange","\uFDD0'red","\uFDD0'yellow"],{"\uFDD0'blue":eviltetris.core.load_image.call(null,"blue.png"),"\uFDD0'cyan":eviltetris.core.load_image.call(null,"cyan.png"),"\uFDD0'green":eviltetris.core.load_image.call(null,"green.png"),"\uFDD0'magenta":eviltetris.core.load_image.call(null,"magenta.png"),"\uFDD0'orange":eviltetris.core.load_image.call(null,"orange.png"),"\uFDD0'red":eviltetris.core.load_image.call(null,"red.png"),"\uFDD0'yellow":eviltetris.core.load_image.call(null,"yellow.png")});
eviltetris.core.shapes = cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,0,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([0,2,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([0,3,"\uFDD0'cyan"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,0,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'blue"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'orange"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,0,"\uFDD0'yellow"], true),cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'yellow"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'yellow"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'yellow"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'green"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,0,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'red"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'magenta"], true)], true)], true);
eviltetris.core._STAR_last_key_pressed_STAR_ = null;
eviltetris.core.keypress = (function keypress(event){
var key__105527 = event.keyCode;
eviltetris.core._STAR_last_key_pressed_STAR_ = key__105527;
event.preventDefault();
return event.stopPropagation();
});
eviltetris.core.consume_keypress = (function consume_keypress(){
var lastkey__105529 = eviltetris.core._STAR_last_key_pressed_STAR_;
eviltetris.core._STAR_last_key_pressed_STAR_ = null;
return lastkey__105529;
});
eviltetris.core.fill_rect = (function fill_rect(ctx,x,y,sx,sy,color){
ctx.fillStyle = color;
return ctx.fillRect(x,y,sx,sy);
});
eviltetris.core.paint_block = (function paint_block(ctx,x,y,color){
return ctx.drawImage(eviltetris.core.images.call(null,color),(x * 24),(y * 24));
});
eviltetris.core.paint_board = (function paint_board(ctx,board){
eviltetris.core.fill_rect.call(null,ctx,0,0,320,480,"black");
return cljs.core.dorun.call(null,(function (){var iter__2464__auto____105587 = (function iter__105559(s__105560){
return (new cljs.core.LazySeq(null,false,(function (){
var s__105560__105575 = s__105560;
while(true){
if(cljs.core.seq.call(null,s__105560__105575))
{var x__105576 = cljs.core.first.call(null,s__105560__105575);
var iterys__2462__auto____105585 = ((function (s__105560__105575,x__105576){
return (function iter__105561(s__105562){
return (new cljs.core.LazySeq(null,false,((function (s__105560__105575,x__105576){
return (function (){
var s__105562__105581 = s__105562;
while(true){
if(cljs.core.seq.call(null,s__105562__105581))
{var y__105582 = cljs.core.first.call(null,s__105562__105581);
return cljs.core.cons.call(null,(function (){var temp__3974__auto____105583 = board.call(null,y__105582).call(null,x__105576);
if(cljs.core.truth_(temp__3974__auto____105583))
{var color__105584 = temp__3974__auto____105583;
return eviltetris.core.paint_block.call(null,ctx,x__105576,y__105582,color__105584);
} else
{return null;
}
})(),iter__105561.call(null,cljs.core.rest.call(null,s__105562__105581)));
} else
{return null;
}
break;
}
});})(s__105560__105575,x__105576))
,null));
});})(s__105560__105575,x__105576))
;
var fs__2463__auto____105586 = cljs.core.seq.call(null,iterys__2462__auto____105585.call(null,cljs.core.range.call(null,20)));
if(fs__2463__auto____105586)
{return cljs.core.concat.call(null,fs__2463__auto____105586,iter__105559.call(null,cljs.core.rest.call(null,s__105560__105575)));
} else
{{
var G__105588 = cljs.core.rest.call(null,s__105560__105575);
s__105560__105575 = G__105588;
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
return iter__2464__auto____105587.call(null,cljs.core.range.call(null,10));
})());
});
eviltetris.core.patch_board = (function patch_board(board,color,x,y){
return cljs.core.assoc.call(null,board,y,cljs.core.assoc.call(null,board.call(null,y),x,color));
});
eviltetris.core.test_pattern = (function test_pattern(board){
return eviltetris.core.patch_board.call(null,board,cljs.core.rand_nth.call(null,cljs.core.keys.call(null,eviltetris.core.images)),cljs.core.rand_int.call(null,10),cljs.core.rand_int.call(null,20));
});
eviltetris.core.overlay = (function overlay(board,piece){
var vec__105599__105600 = piece;
var px__105601 = cljs.core.nth.call(null,vec__105599__105600,0,null);
var py__105602 = cljs.core.nth.call(null,vec__105599__105600,1,null);
var shape__105603 = cljs.core.nth.call(null,vec__105599__105600,2,null);
return cljs.core.apply.call(null,cljs.core.comp,cljs.core.map.call(null,(function (dot){
var vec__105604__105605 = dot;
var dx__105606 = cljs.core.nth.call(null,vec__105604__105605,0,null);
var dy__105607 = cljs.core.nth.call(null,vec__105604__105605,1,null);
var dcolor__105608 = cljs.core.nth.call(null,vec__105604__105605,2,null);
return (function (board){
return eviltetris.core.patch_board.call(null,board,dcolor__105608,(px__105601 + dx__105606),(py__105602 + dy__105607));
});
}),shape__105603)).call(null,board);
});
eviltetris.core.collides_QMARK_ = (function collides_QMARK_(board,piece){
var vec__105625__105626 = piece;
var px__105627 = cljs.core.nth.call(null,vec__105625__105626,0,null);
var py__105628 = cljs.core.nth.call(null,vec__105625__105626,1,null);
var shape__105629 = cljs.core.nth.call(null,vec__105625__105626,2,null);
return cljs.core.some.call(null,cljs.core.false_QMARK_,cljs.core.map.call(null,(function (dot){
var vec__105630__105631 = dot;
var dx__105632 = cljs.core.nth.call(null,vec__105630__105631,0,null);
var dy__105633 = cljs.core.nth.call(null,vec__105630__105631,1,null);
var ___105634 = cljs.core.nth.call(null,vec__105630__105631,2,null);
var fx__105635 = (dx__105632 + px__105627);
var fy__105636 = (dy__105633 + py__105628);
var and__3822__auto____105638 = (function (){var and__3822__auto____105637 = (0 < fx__105635);
if(and__3822__auto____105637)
{return (fx__105635 < 10);
} else
{return and__3822__auto____105637;
}
})();
if(cljs.core.truth_(and__3822__auto____105638))
{var and__3822__auto____105640 = (function (){var and__3822__auto____105639 = (0 < fy__105636);
if(and__3822__auto____105639)
{return (fy__105636 < 20);
} else
{return and__3822__auto____105639;
}
})();
if(cljs.core.truth_(and__3822__auto____105640))
{return (board.call(null,fy__105636).call(null,fx__105635) == null);
} else
{return and__3822__auto____105640;
}
} else
{return and__3822__auto____105638;
}
}),shape__105629));
});
eviltetris.core.rotate_shape = (function rotate_shape(shape){
return cljs.core.mapv.call(null,(function (s){
var vec__105646__105647 = s;
var x__105648 = cljs.core.nth.call(null,vec__105646__105647,0,null);
var y__105649 = cljs.core.nth.call(null,vec__105646__105647,1,null);
var color__105650 = cljs.core.nth.call(null,vec__105646__105647,2,null);
return cljs.core.PersistentVector.fromArray([y__105649,x__105648,color__105650], true);
}),shape);
});
eviltetris.core.tick = (function tick(){
return (new Date()).getTime();
});
eviltetris.core.move_down = (function move_down(piece){
return cljs.core.assoc.call(null,piece,1,(cljs.core.second.call(null,piece) + 1));
});
eviltetris.core.move_left = (function move_left(piece){
return cljs.core.assoc.call(null,piece,0,(cljs.core.first.call(null,piece) - 1));
});
eviltetris.core.move_right = (function move_right(piece){
return cljs.core.assoc.call(null,piece,0,(cljs.core.first.call(null,piece) + 1));
});
eviltetris.core.get_next_piece = (function get_next_piece(){
return cljs.core.PersistentVector.fromArray([3,0,cljs.core.rand_nth.call(null,eviltetris.core.shapes)], true);
});
eviltetris.core.next_tick = (function next_tick(ctx,board,piece,tick){
return setTimeout((function (){
return eviltetris.core.main_loop.call(null,ctx,board,piece,tick);
}),100);
});
eviltetris.core.main_loop = (function() {
var main_loop = null;
var main_loop__2 = (function (ctx,board){
return main_loop.call(null,ctx,board,eviltetris.core.get_next_piece.call(null),eviltetris.core.tick.call(null));
});
var main_loop__4 = (function (ctx,board,piece,previous_tick){
eviltetris.core.paint_board.call(null,ctx,eviltetris.core.overlay.call(null,board,piece));
var last_key__105652 = eviltetris.core.consume_keypress.call(null);
if(cljs.core._EQ_.call(null,last_key__105652,37))
{return eviltetris.core.next_tick.call(null,ctx,board,eviltetris.core.move_left.call(null,piece),eviltetris.core.tick.call(null));
} else
{if(cljs.core._EQ_.call(null,last_key__105652,39))
{return eviltetris.core.next_tick.call(null,ctx,board,eviltetris.core.move_right.call(null,piece),eviltetris.core.tick.call(null));
} else
{if("\uFDD0'else")
{if(cljs.core.truth_(eviltetris.core.collides_QMARK_.call(null,board,eviltetris.core.move_down.call(null,piece))))
{return eviltetris.core.next_tick.call(null,ctx,eviltetris.core.overlay.call(null,board,piece),eviltetris.core.get_next_piece.call(null),eviltetris.core.tick.call(null));
} else
{return eviltetris.core.next_tick.call(null,ctx,board,eviltetris.core.move_down.call(null,piece),eviltetris.core.tick.call(null));
}
} else
{return null;
}
}
}
});
main_loop = function(ctx,board,piece,previous_tick){
switch(arguments.length){
case 2:
return main_loop__2.call(this,ctx,board);
case 4:
return main_loop__4.call(this,ctx,board,piece,previous_tick);
}
throw('Invalid arity: ' + arguments.length);
};
main_loop.cljs$lang$arity$2 = main_loop__2;
main_loop.cljs$lang$arity$4 = main_loop__4;
return main_loop;
})()
;
eviltetris.core.create_board = (function create_board(){
return cljs.core.vec.call(null,cljs.core.take.call(null,20,cljs.core.repeat.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,10,cljs.core.repeat.call(null,null))))));
});
eviltetris.core.init = (function init(){
var canvas__105657 = document.getElementById("canvas");
var ctx__105658 = canvas__105657.getContext("2d");
var board__105659 = eviltetris.core.create_board.call(null);
var handler__105660 = (new goog.events.KeyHandler(document,true));
goog.events.listen(handler__105660,"key",eviltetris.core.keypress);
return eviltetris.core.main_loop.call(null,ctx__105658,board__105659);
});
goog.exportSymbol('eviltetris.core.init', eviltetris.core.init);
