goog.provide('eviltetris.core');
goog.require('cljs.core');
goog.require('goog.events.KeyHandler');
goog.require('goog.events');
goog.require('clojure.browser.repl');
clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
eviltetris.core.load_image = (function load_image(file){
var image__316114 = (new Image());
image__316114.src = [cljs.core.str("images/"),cljs.core.str(file)].join('');
return image__316114;
});
eviltetris.core.images = cljs.core.ObjMap.fromObject(["\uFDD0'blue","\uFDD0'cyan","\uFDD0'green","\uFDD0'magenta","\uFDD0'orange","\uFDD0'red","\uFDD0'yellow"],{"\uFDD0'blue":eviltetris.core.load_image.call(null,"blue.png"),"\uFDD0'cyan":eviltetris.core.load_image.call(null,"cyan.png"),"\uFDD0'green":eviltetris.core.load_image.call(null,"green.png"),"\uFDD0'magenta":eviltetris.core.load_image.call(null,"magenta.png"),"\uFDD0'orange":eviltetris.core.load_image.call(null,"orange.png"),"\uFDD0'red":eviltetris.core.load_image.call(null,"red.png"),"\uFDD0'yellow":eviltetris.core.load_image.call(null,"yellow.png")});
eviltetris.core.shapes = cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,0,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([0,2,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([0,3,"\uFDD0'cyan"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,0,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'blue"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'orange"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,0,"\uFDD0'yellow"], true),cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'yellow"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'yellow"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'yellow"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'green"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,0,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'red"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'magenta"], true)], true)], true);
eviltetris.core._STAR_last_key_pressed_STAR_ = null;
eviltetris.core.keypress = (function keypress(event){
var key__316116 = event.keyCode;
eviltetris.core._STAR_last_key_pressed_STAR_ = key__316116;
event.preventDefault();
return event.stopPropagation();
});
eviltetris.core.consume_keypress = (function consume_keypress(){
var lastkey__316118 = eviltetris.core._STAR_last_key_pressed_STAR_;
eviltetris.core._STAR_last_key_pressed_STAR_ = null;
return lastkey__316118;
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
return cljs.core.dorun.call(null,(function (){var iter__2464__auto____316176 = (function iter__316148(s__316149){
return (new cljs.core.LazySeq(null,false,(function (){
var s__316149__316164 = s__316149;
while(true){
if(cljs.core.seq.call(null,s__316149__316164))
{var x__316165 = cljs.core.first.call(null,s__316149__316164);
var iterys__2462__auto____316174 = ((function (s__316149__316164,x__316165){
return (function iter__316150(s__316151){
return (new cljs.core.LazySeq(null,false,((function (s__316149__316164,x__316165){
return (function (){
var s__316151__316170 = s__316151;
while(true){
if(cljs.core.seq.call(null,s__316151__316170))
{var y__316171 = cljs.core.first.call(null,s__316151__316170);
return cljs.core.cons.call(null,(function (){var temp__3974__auto____316172 = board.call(null,y__316171).call(null,x__316165);
if(cljs.core.truth_(temp__3974__auto____316172))
{var color__316173 = temp__3974__auto____316172;
return eviltetris.core.paint_block.call(null,ctx,x__316165,y__316171,color__316173);
} else
{return null;
}
})(),iter__316150.call(null,cljs.core.rest.call(null,s__316151__316170)));
} else
{return null;
}
break;
}
});})(s__316149__316164,x__316165))
,null));
});})(s__316149__316164,x__316165))
;
var fs__2463__auto____316175 = cljs.core.seq.call(null,iterys__2462__auto____316174.call(null,cljs.core.range.call(null,20)));
if(fs__2463__auto____316175)
{return cljs.core.concat.call(null,fs__2463__auto____316175,iter__316148.call(null,cljs.core.rest.call(null,s__316149__316164)));
} else
{{
var G__316177 = cljs.core.rest.call(null,s__316149__316164);
s__316149__316164 = G__316177;
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
return iter__2464__auto____316176.call(null,cljs.core.range.call(null,10));
})());
});
eviltetris.core.patch_board = (function patch_board(board,color,x,y){
return cljs.core.assoc.call(null,board,y,cljs.core.assoc.call(null,board.call(null,y),x,color));
});
eviltetris.core.test_pattern = (function test_pattern(board){
return eviltetris.core.patch_board.call(null,board,cljs.core.rand_nth.call(null,cljs.core.keys.call(null,eviltetris.core.images)),cljs.core.rand_int.call(null,10),cljs.core.rand_int.call(null,20));
});
eviltetris.core.overlay = (function overlay(board,piece){
var vec__316188__316189 = piece;
var px__316190 = cljs.core.nth.call(null,vec__316188__316189,0,null);
var py__316191 = cljs.core.nth.call(null,vec__316188__316189,1,null);
var shape__316192 = cljs.core.nth.call(null,vec__316188__316189,2,null);
return cljs.core.apply.call(null,cljs.core.comp,cljs.core.map.call(null,(function (dot){
var vec__316193__316194 = dot;
var dx__316195 = cljs.core.nth.call(null,vec__316193__316194,0,null);
var dy__316196 = cljs.core.nth.call(null,vec__316193__316194,1,null);
var dcolor__316197 = cljs.core.nth.call(null,vec__316193__316194,2,null);
return (function (board){
return eviltetris.core.patch_board.call(null,board,dcolor__316197,(px__316190 + dx__316195),(py__316191 + dy__316196));
});
}),shape__316192)).call(null,board);
});
eviltetris.core.collides_QMARK_ = (function collides_QMARK_(board,piece){
var vec__316214__316215 = piece;
var px__316216 = cljs.core.nth.call(null,vec__316214__316215,0,null);
var py__316217 = cljs.core.nth.call(null,vec__316214__316215,1,null);
var shape__316218 = cljs.core.nth.call(null,vec__316214__316215,2,null);
return cljs.core.some.call(null,cljs.core.false_QMARK_,cljs.core.map.call(null,(function (dot){
var vec__316219__316220 = dot;
var dx__316221 = cljs.core.nth.call(null,vec__316219__316220,0,null);
var dy__316222 = cljs.core.nth.call(null,vec__316219__316220,1,null);
var ___316223 = cljs.core.nth.call(null,vec__316219__316220,2,null);
var fx__316224 = (dx__316221 + px__316216);
var fy__316225 = (dy__316222 + py__316217);
var and__3822__auto____316227 = (function (){var and__3822__auto____316226 = (-1 < fx__316224);
if(and__3822__auto____316226)
{return (fx__316224 < 10);
} else
{return and__3822__auto____316226;
}
})();
if(cljs.core.truth_(and__3822__auto____316227))
{var and__3822__auto____316229 = (function (){var and__3822__auto____316228 = (-1 < fy__316225);
if(and__3822__auto____316228)
{return (fy__316225 < 20);
} else
{return and__3822__auto____316228;
}
})();
if(cljs.core.truth_(and__3822__auto____316229))
{return (board.call(null,fy__316225).call(null,fx__316224) == null);
} else
{return and__3822__auto____316229;
}
} else
{return and__3822__auto____316227;
}
}),shape__316218));
});
eviltetris.core.rotate_piece = (function rotate_piece(piece){
var vec__316240__316241 = piece;
var px__316242 = cljs.core.nth.call(null,vec__316240__316241,0,null);
var py__316243 = cljs.core.nth.call(null,vec__316240__316241,1,null);
var shape__316244 = cljs.core.nth.call(null,vec__316240__316241,2,null);
return cljs.core.PersistentVector.fromArray([px__316242,py__316243,cljs.core.mapv.call(null,(function (s){
var vec__316245__316246 = s;
var x__316247 = cljs.core.nth.call(null,vec__316245__316246,0,null);
var y__316248 = cljs.core.nth.call(null,vec__316245__316246,1,null);
var color__316249 = cljs.core.nth.call(null,vec__316245__316246,2,null);
return cljs.core.PersistentVector.fromArray([y__316248,x__316247,color__316249], true);
}),shape__316244)], true);
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
}),300);
});
eviltetris.core.create_board = (function create_board(){
return cljs.core.vec.call(null,cljs.core.take.call(null,20,cljs.core.repeat.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,10,cljs.core.repeat.call(null,null))))));
});
eviltetris.core.game_over = (function game_over(ctx){
alert("GAME OVER");
return eviltetris.core.main_loop.call(null,ctx,eviltetris.core.create_board.call(null));
});
eviltetris.core.main_loop = (function() {
var main_loop = null;
var main_loop__2 = (function (ctx,board){
return main_loop.call(null,ctx,board,eviltetris.core.get_next_piece.call(null),eviltetris.core.tick.call(null));
});
var main_loop__4 = (function (ctx,board,piece,previous_tick){
eviltetris.core.paint_board.call(null,ctx,eviltetris.core.overlay.call(null,board,piece));
var last_key__316254 = eviltetris.core.consume_keypress.call(null);
if(cljs.core.truth_(eviltetris.core.collides_QMARK_.call(null,board,piece)))
{return eviltetris.core.game_over.call(null,ctx);
} else
{if((function (){var and__3822__auto____316255 = cljs.core._EQ_.call(null,last_key__316254,38);
if(and__3822__auto____316255)
{return cljs.core.not.call(null,eviltetris.core.collides_QMARK_.call(null,board,eviltetris.core.rotate_piece.call(null,piece)));
} else
{return and__3822__auto____316255;
}
})())
{return eviltetris.core.next_tick.call(null,ctx,board,eviltetris.core.rotate_piece.call(null,piece),eviltetris.core.tick.call(null));
} else
{if((function (){var and__3822__auto____316256 = cljs.core._EQ_.call(null,last_key__316254,39);
if(and__3822__auto____316256)
{return cljs.core.not.call(null,eviltetris.core.collides_QMARK_.call(null,board,eviltetris.core.move_right.call(null,piece)));
} else
{return and__3822__auto____316256;
}
})())
{return eviltetris.core.next_tick.call(null,ctx,board,eviltetris.core.move_right.call(null,piece),eviltetris.core.tick.call(null));
} else
{if((function (){var and__3822__auto____316257 = cljs.core._EQ_.call(null,last_key__316254,37);
if(and__3822__auto____316257)
{return cljs.core.not.call(null,eviltetris.core.collides_QMARK_.call(null,board,eviltetris.core.move_left.call(null,piece)));
} else
{return and__3822__auto____316257;
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
var canvas__316262 = document.getElementById("canvas");
var ctx__316263 = canvas__316262.getContext("2d");
var board__316264 = eviltetris.core.create_board.call(null);
var handler__316265 = (new goog.events.KeyHandler(document,true));
goog.events.listen(handler__316265,"key",eviltetris.core.keypress);
return eviltetris.core.main_loop.call(null,ctx__316263,board__316264);
});
goog.exportSymbol('eviltetris.core.init', eviltetris.core.init);
