goog.provide('eviltetris.core');
goog.require('cljs.core');
goog.require('goog.events.KeyHandler');
goog.require('goog.events');
goog.require('clojure.browser.repl');
clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
eviltetris.core.load_image = (function load_image(file){
var image__716153 = (new Image());
image__716153.src = [cljs.core.str("images/"),cljs.core.str(file)].join('');
return image__716153;
});
eviltetris.core.images = cljs.core.ObjMap.fromObject(["\uFDD0'blue","\uFDD0'cyan","\uFDD0'green","\uFDD0'magenta","\uFDD0'orange","\uFDD0'red","\uFDD0'yellow"],{"\uFDD0'blue":eviltetris.core.load_image.call(null,"blue.png"),"\uFDD0'cyan":eviltetris.core.load_image.call(null,"cyan.png"),"\uFDD0'green":eviltetris.core.load_image.call(null,"green.png"),"\uFDD0'magenta":eviltetris.core.load_image.call(null,"magenta.png"),"\uFDD0'orange":eviltetris.core.load_image.call(null,"orange.png"),"\uFDD0'red":eviltetris.core.load_image.call(null,"red.png"),"\uFDD0'yellow":eviltetris.core.load_image.call(null,"yellow.png")});
eviltetris.core.shapes = cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([3,1,"\uFDD0'cyan"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([2,3,"\uFDD0'cyan"], true)], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,0,"\uFDD0'yellow"], true),cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'yellow"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'yellow"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'yellow"], true)], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([3,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'magenta"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([3,1,"\uFDD0'magenta"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([3,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'magenta"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'magenta"], true)], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'green"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'green"], true)], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,2,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'red"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,0,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'red"], true)], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'blue"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,2,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'blue"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([0,2,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'blue"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'blue"], true)], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([0,2,"\uFDD0'orange"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,0,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'orange"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([0,2,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'orange"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'orange"], true)], true)], true)], true);
eviltetris.core._STAR_last_key_pressed_STAR_ = null;
eviltetris.core.keypress = (function keypress(event){
var key__716155 = event.keyCode;
eviltetris.core._STAR_last_key_pressed_STAR_ = key__716155;
event.preventDefault();
return event.stopPropagation();
});
eviltetris.core.consume_keypress = (function consume_keypress(){
var lastkey__716157 = eviltetris.core._STAR_last_key_pressed_STAR_;
eviltetris.core._STAR_last_key_pressed_STAR_ = null;
return lastkey__716157;
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
return cljs.core.dorun.call(null,(function (){var iter__2464__auto____716215 = (function iter__716187(s__716188){
return (new cljs.core.LazySeq(null,false,(function (){
var s__716188__716203 = s__716188;
while(true){
if(cljs.core.seq.call(null,s__716188__716203))
{var x__716204 = cljs.core.first.call(null,s__716188__716203);
var iterys__2462__auto____716213 = ((function (s__716188__716203,x__716204){
return (function iter__716189(s__716190){
return (new cljs.core.LazySeq(null,false,((function (s__716188__716203,x__716204){
return (function (){
var s__716190__716209 = s__716190;
while(true){
if(cljs.core.seq.call(null,s__716190__716209))
{var y__716210 = cljs.core.first.call(null,s__716190__716209);
return cljs.core.cons.call(null,(function (){var temp__3974__auto____716211 = board.call(null,y__716210).call(null,x__716204);
if(cljs.core.truth_(temp__3974__auto____716211))
{var color__716212 = temp__3974__auto____716211;
return eviltetris.core.paint_block.call(null,ctx,x__716204,y__716210,color__716212);
} else
{return null;
}
})(),iter__716189.call(null,cljs.core.rest.call(null,s__716190__716209)));
} else
{return null;
}
break;
}
});})(s__716188__716203,x__716204))
,null));
});})(s__716188__716203,x__716204))
;
var fs__2463__auto____716214 = cljs.core.seq.call(null,iterys__2462__auto____716213.call(null,cljs.core.range.call(null,20)));
if(fs__2463__auto____716214)
{return cljs.core.concat.call(null,fs__2463__auto____716214,iter__716187.call(null,cljs.core.rest.call(null,s__716188__716203)));
} else
{{
var G__716216 = cljs.core.rest.call(null,s__716188__716203);
s__716188__716203 = G__716216;
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
return iter__2464__auto____716215.call(null,cljs.core.range.call(null,10));
})());
});
eviltetris.core.patch_board = (function patch_board(board,color,x,y){
return cljs.core.assoc.call(null,board,y,cljs.core.assoc.call(null,board.call(null,y),x,color));
});
eviltetris.core.test_pattern = (function test_pattern(board){
return eviltetris.core.patch_board.call(null,board,cljs.core.rand_nth.call(null,cljs.core.keys.call(null,eviltetris.core.images)),cljs.core.rand_int.call(null,10),cljs.core.rand_int.call(null,20));
});
eviltetris.core.overlay = (function overlay(board,piece){
var vec__716227__716228 = piece;
var px__716229 = cljs.core.nth.call(null,vec__716227__716228,0,null);
var py__716230 = cljs.core.nth.call(null,vec__716227__716228,1,null);
var shape__716231 = cljs.core.nth.call(null,vec__716227__716228,2,null);
return cljs.core.apply.call(null,cljs.core.comp,cljs.core.map.call(null,(function (dot){
var vec__716232__716233 = dot;
var dx__716234 = cljs.core.nth.call(null,vec__716232__716233,0,null);
var dy__716235 = cljs.core.nth.call(null,vec__716232__716233,1,null);
var dcolor__716236 = cljs.core.nth.call(null,vec__716232__716233,2,null);
return (function (board){
return eviltetris.core.patch_board.call(null,board,dcolor__716236,(px__716229 + dx__716234),(py__716230 + dy__716235));
});
}),cljs.core.first.call(null,shape__716231))).call(null,board);
});
eviltetris.core.collides_QMARK_ = (function collides_QMARK_(board,piece){
var vec__716253__716254 = piece;
var px__716255 = cljs.core.nth.call(null,vec__716253__716254,0,null);
var py__716256 = cljs.core.nth.call(null,vec__716253__716254,1,null);
var shape__716257 = cljs.core.nth.call(null,vec__716253__716254,2,null);
return cljs.core.some.call(null,cljs.core.false_QMARK_,cljs.core.map.call(null,(function (dot){
var vec__716258__716259 = dot;
var dx__716260 = cljs.core.nth.call(null,vec__716258__716259,0,null);
var dy__716261 = cljs.core.nth.call(null,vec__716258__716259,1,null);
var ___716262 = cljs.core.nth.call(null,vec__716258__716259,2,null);
var fx__716263 = (dx__716260 + px__716255);
var fy__716264 = (dy__716261 + py__716256);
var and__3822__auto____716266 = (function (){var and__3822__auto____716265 = (-1 < fx__716263);
if(and__3822__auto____716265)
{return (fx__716263 < 10);
} else
{return and__3822__auto____716265;
}
})();
if(cljs.core.truth_(and__3822__auto____716266))
{var and__3822__auto____716268 = (function (){var and__3822__auto____716267 = (-1 < fy__716264);
if(and__3822__auto____716267)
{return (fy__716264 < 20);
} else
{return and__3822__auto____716267;
}
})();
if(cljs.core.truth_(and__3822__auto____716268))
{return (board.call(null,fy__716264).call(null,fx__716263) == null);
} else
{return and__3822__auto____716268;
}
} else
{return and__3822__auto____716266;
}
}),cljs.core.first.call(null,shape__716257)));
});
eviltetris.core.rotate = (function rotate(piece){
var vec__716274__716275 = piece;
var px__716276 = cljs.core.nth.call(null,vec__716274__716275,0,null);
var py__716277 = cljs.core.nth.call(null,vec__716274__716275,1,null);
var shape__716278 = cljs.core.nth.call(null,vec__716274__716275,2,null);
return cljs.core.PersistentVector.fromArray([px__716276,py__716277,cljs.core.next.call(null,shape__716278)], true);
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
return cljs.core.PersistentVector.fromArray([3,0,cljs.core.cycle.call(null,cljs.core.rand_nth.call(null,eviltetris.core.shapes))], true);
});
eviltetris.core.create_board = (function create_board(){
return cljs.core.vec.call(null,cljs.core.take.call(null,20,cljs.core.repeat.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,10,cljs.core.repeat.call(null,null))))));
});
eviltetris.core.game_over = (function game_over(ctx){
return eviltetris.core.main_loop.call(null,ctx,eviltetris.core.create_board.call(null));
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
var last_key__716283 = eviltetris.core.consume_keypress.call(null);
if(cljs.core.truth_(eviltetris.core.collides_QMARK_.call(null,board,piece)))
{return eviltetris.core.game_over.call(null,ctx);
} else
{if((function (){var and__3822__auto____716284 = cljs.core._EQ_.call(null,last_key__716283,38);
if(and__3822__auto____716284)
{return cljs.core.not.call(null,eviltetris.core.collides_QMARK_.call(null,board,eviltetris.core.rotate.call(null,piece)));
} else
{return and__3822__auto____716284;
}
})())
{return eviltetris.core.next_tick.call(null,ctx,board,eviltetris.core.rotate.call(null,piece),eviltetris.core.tick.call(null));
} else
{if((function (){var and__3822__auto____716285 = cljs.core._EQ_.call(null,last_key__716283,39);
if(and__3822__auto____716285)
{return cljs.core.not.call(null,eviltetris.core.collides_QMARK_.call(null,board,eviltetris.core.move_right.call(null,piece)));
} else
{return and__3822__auto____716285;
}
})())
{return eviltetris.core.next_tick.call(null,ctx,board,eviltetris.core.move_right.call(null,piece),eviltetris.core.tick.call(null));
} else
{if((function (){var and__3822__auto____716286 = cljs.core._EQ_.call(null,last_key__716283,37);
if(and__3822__auto____716286)
{return cljs.core.not.call(null,eviltetris.core.collides_QMARK_.call(null,board,eviltetris.core.move_left.call(null,piece)));
} else
{return and__3822__auto____716286;
}
})())
{return eviltetris.core.next_tick.call(null,ctx,board,eviltetris.core.move_left.call(null,piece),eviltetris.core.tick.call(null));
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
eviltetris.core.init = (function init(){
var canvas__716291 = document.getElementById("canvas");
var ctx__716292 = canvas__716291.getContext("2d");
var board__716293 = eviltetris.core.create_board.call(null);
var handler__716294 = (new goog.events.KeyHandler(document,true));
goog.events.listen(handler__716294,"key",eviltetris.core.keypress);
return eviltetris.core.main_loop.call(null,ctx__716292,board__716293);
});
goog.exportSymbol('eviltetris.core.init', eviltetris.core.init);
