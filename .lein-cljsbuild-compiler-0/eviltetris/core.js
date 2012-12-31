goog.provide('eviltetris.core');
goog.require('cljs.core');
goog.require('goog.events.KeyHandler');
goog.require('goog.events');
goog.require('clojure.browser.repl');
clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
eviltetris.core.load_image = (function load_image(file){
var image__1142095 = (new Image());
image__1142095.src = [cljs.core.str("images/"),cljs.core.str(file)].join('');
return image__1142095;
});
eviltetris.core.images = cljs.core.ObjMap.fromObject(["\uFDD0'blue","\uFDD0'cyan","\uFDD0'green","\uFDD0'magenta","\uFDD0'orange","\uFDD0'red","\uFDD0'yellow"],{"\uFDD0'blue":eviltetris.core.load_image.call(null,"blue.png"),"\uFDD0'cyan":eviltetris.core.load_image.call(null,"cyan.png"),"\uFDD0'green":eviltetris.core.load_image.call(null,"green.png"),"\uFDD0'magenta":eviltetris.core.load_image.call(null,"magenta.png"),"\uFDD0'orange":eviltetris.core.load_image.call(null,"orange.png"),"\uFDD0'red":eviltetris.core.load_image.call(null,"red.png"),"\uFDD0'yellow":eviltetris.core.load_image.call(null,"yellow.png")});
eviltetris.core.shapes = cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([3,1,"\uFDD0'cyan"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([2,3,"\uFDD0'cyan"], true)], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,0,"\uFDD0'yellow"], true),cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'yellow"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'yellow"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'yellow"], true)], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([3,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'magenta"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([3,1,"\uFDD0'magenta"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([3,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'magenta"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'magenta"], true)], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'green"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'green"], true)], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,2,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'red"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,0,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'red"], true)], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'blue"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,2,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'blue"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([0,2,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'blue"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'blue"], true)], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([0,2,"\uFDD0'orange"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,0,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'orange"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([0,2,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'orange"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'orange"], true)], true)], true)], true);
eviltetris.core._STAR_last_key_pressed_STAR_ = null;
eviltetris.core.keypress = (function keypress(event){
var key__1142097 = event.keyCode;
eviltetris.core._STAR_last_key_pressed_STAR_ = key__1142097;
event.preventDefault();
return event.stopPropagation();
});
eviltetris.core.consume_keypress = (function consume_keypress(){
var lastkey__1142099 = eviltetris.core._STAR_last_key_pressed_STAR_;
eviltetris.core._STAR_last_key_pressed_STAR_ = null;
return lastkey__1142099;
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
return cljs.core.dorun.call(null,(function (){var iter__2464__auto____1142157 = (function iter__1142129(s__1142130){
return (new cljs.core.LazySeq(null,false,(function (){
var s__1142130__1142145 = s__1142130;
while(true){
if(cljs.core.seq.call(null,s__1142130__1142145))
{var x__1142146 = cljs.core.first.call(null,s__1142130__1142145);
var iterys__2462__auto____1142155 = ((function (s__1142130__1142145,x__1142146){
return (function iter__1142131(s__1142132){
return (new cljs.core.LazySeq(null,false,((function (s__1142130__1142145,x__1142146){
return (function (){
var s__1142132__1142151 = s__1142132;
while(true){
if(cljs.core.seq.call(null,s__1142132__1142151))
{var y__1142152 = cljs.core.first.call(null,s__1142132__1142151);
return cljs.core.cons.call(null,(function (){var temp__3974__auto____1142153 = board.call(null,y__1142152).call(null,x__1142146);
if(cljs.core.truth_(temp__3974__auto____1142153))
{var color__1142154 = temp__3974__auto____1142153;
return eviltetris.core.paint_block.call(null,ctx,x__1142146,y__1142152,color__1142154);
} else
{return null;
}
})(),iter__1142131.call(null,cljs.core.rest.call(null,s__1142132__1142151)));
} else
{return null;
}
break;
}
});})(s__1142130__1142145,x__1142146))
,null));
});})(s__1142130__1142145,x__1142146))
;
var fs__2463__auto____1142156 = cljs.core.seq.call(null,iterys__2462__auto____1142155.call(null,cljs.core.range.call(null,20)));
if(fs__2463__auto____1142156)
{return cljs.core.concat.call(null,fs__2463__auto____1142156,iter__1142129.call(null,cljs.core.rest.call(null,s__1142130__1142145)));
} else
{{
var G__1142158 = cljs.core.rest.call(null,s__1142130__1142145);
s__1142130__1142145 = G__1142158;
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
return iter__2464__auto____1142157.call(null,cljs.core.range.call(null,10));
})());
});
eviltetris.core.patch_board = (function patch_board(board,color,x,y){
return cljs.core.assoc.call(null,board,y,cljs.core.assoc.call(null,board.call(null,y),x,color));
});
eviltetris.core.test_pattern = (function test_pattern(board){
return eviltetris.core.patch_board.call(null,board,cljs.core.rand_nth.call(null,cljs.core.keys.call(null,eviltetris.core.images)),cljs.core.rand_int.call(null,10),cljs.core.rand_int.call(null,20));
});
eviltetris.core.overlay = (function overlay(board,piece){
var vec__1142169__1142170 = piece;
var px__1142171 = cljs.core.nth.call(null,vec__1142169__1142170,0,null);
var py__1142172 = cljs.core.nth.call(null,vec__1142169__1142170,1,null);
var shape__1142173 = cljs.core.nth.call(null,vec__1142169__1142170,2,null);
return cljs.core.apply.call(null,cljs.core.comp,cljs.core.map.call(null,(function (dot){
var vec__1142174__1142175 = dot;
var dx__1142176 = cljs.core.nth.call(null,vec__1142174__1142175,0,null);
var dy__1142177 = cljs.core.nth.call(null,vec__1142174__1142175,1,null);
var dcolor__1142178 = cljs.core.nth.call(null,vec__1142174__1142175,2,null);
return (function (board){
return eviltetris.core.patch_board.call(null,board,dcolor__1142178,(px__1142171 + dx__1142176),(py__1142172 + dy__1142177));
});
}),cljs.core.first.call(null,shape__1142173))).call(null,board);
});
eviltetris.core.collides_QMARK_ = (function collides_QMARK_(board,piece){
var vec__1142195__1142196 = piece;
var px__1142197 = cljs.core.nth.call(null,vec__1142195__1142196,0,null);
var py__1142198 = cljs.core.nth.call(null,vec__1142195__1142196,1,null);
var shape__1142199 = cljs.core.nth.call(null,vec__1142195__1142196,2,null);
return cljs.core.some.call(null,cljs.core.false_QMARK_,cljs.core.map.call(null,(function (dot){
var vec__1142200__1142201 = dot;
var dx__1142202 = cljs.core.nth.call(null,vec__1142200__1142201,0,null);
var dy__1142203 = cljs.core.nth.call(null,vec__1142200__1142201,1,null);
var ___1142204 = cljs.core.nth.call(null,vec__1142200__1142201,2,null);
var fx__1142205 = (dx__1142202 + px__1142197);
var fy__1142206 = (dy__1142203 + py__1142198);
var and__3822__auto____1142208 = (function (){var and__3822__auto____1142207 = (-1 < fx__1142205);
if(and__3822__auto____1142207)
{return (fx__1142205 < 10);
} else
{return and__3822__auto____1142207;
}
})();
if(cljs.core.truth_(and__3822__auto____1142208))
{var and__3822__auto____1142210 = (function (){var and__3822__auto____1142209 = (-1 < fy__1142206);
if(and__3822__auto____1142209)
{return (fy__1142206 < 20);
} else
{return and__3822__auto____1142209;
}
})();
if(cljs.core.truth_(and__3822__auto____1142210))
{return (board.call(null,fy__1142206).call(null,fx__1142205) == null);
} else
{return and__3822__auto____1142210;
}
} else
{return and__3822__auto____1142208;
}
}),cljs.core.first.call(null,shape__1142199)));
});
eviltetris.core.rotate = (function rotate(piece){
var vec__1142216__1142217 = piece;
var px__1142218 = cljs.core.nth.call(null,vec__1142216__1142217,0,null);
var py__1142219 = cljs.core.nth.call(null,vec__1142216__1142217,1,null);
var shape__1142220 = cljs.core.nth.call(null,vec__1142216__1142217,2,null);
return cljs.core.PersistentVector.fromArray([px__1142218,py__1142219,cljs.core.next.call(null,shape__1142220)], true);
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
eviltetris.core.create_line = (function create_line(){
return cljs.core.vec.call(null,cljs.core.take.call(null,10,cljs.core.repeat.call(null,null)));
});
eviltetris.core.create_board = (function create_board(){
return cljs.core.vec.call(null,cljs.core.take.call(null,20,cljs.core.repeat.call(null,eviltetris.core.create_line.call(null))));
});
eviltetris.core.game_over = (function game_over(ctx){
return eviltetris.core.main_loop.call(null,ctx,eviltetris.core.create_board.call(null));
});
eviltetris.core.next_tick = (function next_tick(ctx,board,piece,tick){
return setTimeout((function (){
return eviltetris.core.main_loop.call(null,ctx,board,piece,tick);
}),100);
});
eviltetris.core.remove_lines = (function remove_lines(lines){
var filtered_lines__1142223 = cljs.core.filter.call(null,(function (x){
return cljs.core.not_every_QMARK_.call(null,cljs.core.keyword_QMARK_,x);
}),lines);
var difference__1142224 = (cljs.core.count.call(null,lines) - cljs.core.count.call(null,filtered_lines__1142223));
return cljs.core.into.call(null,cljs.core.vec.call(null,cljs.core.repeat.call(null,difference__1142224,eviltetris.core.create_line.call(null))),filtered_lines__1142223);
});
eviltetris.core.main_loop = (function() {
var main_loop = null;
var main_loop__2 = (function (ctx,board){
return main_loop.call(null,ctx,board,eviltetris.core.get_next_piece.call(null),eviltetris.core.tick.call(null));
});
var main_loop__4 = (function (ctx,board,piece,previous_tick){
eviltetris.core.paint_board.call(null,ctx,eviltetris.core.overlay.call(null,board,piece));
var last_key__1142229 = eviltetris.core.consume_keypress.call(null);
if(cljs.core.truth_(eviltetris.core.collides_QMARK_.call(null,board,piece)))
{return eviltetris.core.game_over.call(null,ctx);
} else
{if((function (){var and__3822__auto____1142230 = cljs.core._EQ_.call(null,last_key__1142229,38);
if(and__3822__auto____1142230)
{return cljs.core.not.call(null,eviltetris.core.collides_QMARK_.call(null,board,eviltetris.core.rotate.call(null,piece)));
} else
{return and__3822__auto____1142230;
}
})())
{return eviltetris.core.next_tick.call(null,ctx,board,eviltetris.core.rotate.call(null,piece),eviltetris.core.tick.call(null));
} else
{if((function (){var and__3822__auto____1142231 = cljs.core._EQ_.call(null,last_key__1142229,39);
if(and__3822__auto____1142231)
{return cljs.core.not.call(null,eviltetris.core.collides_QMARK_.call(null,board,eviltetris.core.move_right.call(null,piece)));
} else
{return and__3822__auto____1142231;
}
})())
{return eviltetris.core.next_tick.call(null,ctx,board,eviltetris.core.move_right.call(null,piece),eviltetris.core.tick.call(null));
} else
{if((function (){var and__3822__auto____1142232 = cljs.core._EQ_.call(null,last_key__1142229,37);
if(and__3822__auto____1142232)
{return cljs.core.not.call(null,eviltetris.core.collides_QMARK_.call(null,board,eviltetris.core.move_left.call(null,piece)));
} else
{return and__3822__auto____1142232;
}
})())
{return eviltetris.core.next_tick.call(null,ctx,board,eviltetris.core.move_left.call(null,piece),eviltetris.core.tick.call(null));
} else
{if("\uFDD0'else")
{if(cljs.core.truth_(eviltetris.core.collides_QMARK_.call(null,board,eviltetris.core.move_down.call(null,piece))))
{return eviltetris.core.next_tick.call(null,ctx,eviltetris.core.remove_lines.call(null,eviltetris.core.overlay.call(null,board,piece)),eviltetris.core.get_next_piece.call(null),eviltetris.core.tick.call(null));
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
var canvas__1142237 = document.getElementById("canvas");
var ctx__1142238 = canvas__1142237.getContext("2d");
var board__1142239 = eviltetris.core.create_board.call(null);
var handler__1142240 = (new goog.events.KeyHandler(document,true));
goog.events.listen(handler__1142240,"key",eviltetris.core.keypress);
return eviltetris.core.main_loop.call(null,ctx__1142238,board__1142239);
});
goog.exportSymbol('eviltetris.core.init', eviltetris.core.init);
