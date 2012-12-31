goog.provide('eviltetris.core');
goog.require('cljs.core');
goog.require('goog.events.KeyHandler');
goog.require('goog.events');
goog.require('clojure.browser.repl');
clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
eviltetris.core.load_image = (function load_image(file){
var image__1896382 = (new Image());
image__1896382.src = [cljs.core.str("images/"),cljs.core.str(file)].join('');
return image__1896382;
});
eviltetris.core.images = cljs.core.ObjMap.fromObject(["\uFDD0'blue","\uFDD0'cyan","\uFDD0'green","\uFDD0'magenta","\uFDD0'orange","\uFDD0'red","\uFDD0'yellow"],{"\uFDD0'blue":eviltetris.core.load_image.call(null,"blue.png"),"\uFDD0'cyan":eviltetris.core.load_image.call(null,"cyan.png"),"\uFDD0'green":eviltetris.core.load_image.call(null,"green.png"),"\uFDD0'magenta":eviltetris.core.load_image.call(null,"magenta.png"),"\uFDD0'orange":eviltetris.core.load_image.call(null,"orange.png"),"\uFDD0'red":eviltetris.core.load_image.call(null,"red.png"),"\uFDD0'yellow":eviltetris.core.load_image.call(null,"yellow.png")});
eviltetris.core.shapes = cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([3,1,"\uFDD0'cyan"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([2,3,"\uFDD0'cyan"], true)], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,0,"\uFDD0'yellow"], true),cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'yellow"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'yellow"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'yellow"], true)], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([3,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'magenta"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([3,1,"\uFDD0'magenta"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([3,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'magenta"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'magenta"], true)], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'green"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'green"], true)], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,2,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'red"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,0,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'red"], true)], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'blue"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,2,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'blue"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([0,2,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'blue"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'blue"], true)], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([0,2,"\uFDD0'orange"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,0,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'orange"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([0,2,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'orange"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'orange"], true)], true)], true)], true);
eviltetris.core._STAR_last_key_pressed_STAR_ = null;
eviltetris.core.keypress = (function keypress(event){
var key__1896384 = event.keyCode;
eviltetris.core._STAR_last_key_pressed_STAR_ = key__1896384;
event.preventDefault();
return event.stopPropagation();
});
eviltetris.core.consume_keypress = (function consume_keypress(){
var lastkey__1896386 = eviltetris.core._STAR_last_key_pressed_STAR_;
eviltetris.core._STAR_last_key_pressed_STAR_ = null;
return lastkey__1896386;
});
eviltetris.core.fill_rect = (function fill_rect(ctx,x,y,sx,sy,color){
ctx.fillStyle = color;
return ctx.fillRect(x,y,sx,sy);
});
eviltetris.core.paint_block = (function paint_block(ctx,x,y,color){
return ctx.drawImage(eviltetris.core.images.call(null,color),(x * 24),(y * 24));
});
eviltetris.core.paint_board = (function paint_board(ctx,board){
eviltetris.core.fill_rect.call(null,ctx,0,0,320,480,"#4A4848");
return cljs.core.dorun.call(null,(function (){var iter__2464__auto____1896444 = (function iter__1896416(s__1896417){
return (new cljs.core.LazySeq(null,false,(function (){
var s__1896417__1896432 = s__1896417;
while(true){
if(cljs.core.seq.call(null,s__1896417__1896432))
{var x__1896433 = cljs.core.first.call(null,s__1896417__1896432);
var iterys__2462__auto____1896442 = ((function (s__1896417__1896432,x__1896433){
return (function iter__1896418(s__1896419){
return (new cljs.core.LazySeq(null,false,((function (s__1896417__1896432,x__1896433){
return (function (){
var s__1896419__1896438 = s__1896419;
while(true){
if(cljs.core.seq.call(null,s__1896419__1896438))
{var y__1896439 = cljs.core.first.call(null,s__1896419__1896438);
return cljs.core.cons.call(null,(function (){var temp__3974__auto____1896440 = board.call(null,y__1896439).call(null,x__1896433);
if(cljs.core.truth_(temp__3974__auto____1896440))
{var color__1896441 = temp__3974__auto____1896440;
return eviltetris.core.paint_block.call(null,ctx,x__1896433,y__1896439,color__1896441);
} else
{return null;
}
})(),iter__1896418.call(null,cljs.core.rest.call(null,s__1896419__1896438)));
} else
{return null;
}
break;
}
});})(s__1896417__1896432,x__1896433))
,null));
});})(s__1896417__1896432,x__1896433))
;
var fs__2463__auto____1896443 = cljs.core.seq.call(null,iterys__2462__auto____1896442.call(null,cljs.core.range.call(null,20)));
if(fs__2463__auto____1896443)
{return cljs.core.concat.call(null,fs__2463__auto____1896443,iter__1896416.call(null,cljs.core.rest.call(null,s__1896417__1896432)));
} else
{{
var G__1896445 = cljs.core.rest.call(null,s__1896417__1896432);
s__1896417__1896432 = G__1896445;
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
return iter__2464__auto____1896444.call(null,cljs.core.range.call(null,10));
})());
});
eviltetris.core.patch_board = (function patch_board(board,color,x,y){
return cljs.core.assoc.call(null,board,y,cljs.core.assoc.call(null,board.call(null,y),x,color));
});
eviltetris.core.test_pattern = (function test_pattern(board){
return eviltetris.core.patch_board.call(null,board,cljs.core.rand_nth.call(null,cljs.core.keys.call(null,eviltetris.core.images)),cljs.core.rand_int.call(null,10),cljs.core.rand_int.call(null,20));
});
eviltetris.core.overlay = (function overlay(board,piece){
var vec__1896456__1896457 = piece;
var px__1896458 = cljs.core.nth.call(null,vec__1896456__1896457,0,null);
var py__1896459 = cljs.core.nth.call(null,vec__1896456__1896457,1,null);
var shape__1896460 = cljs.core.nth.call(null,vec__1896456__1896457,2,null);
return cljs.core.apply.call(null,cljs.core.comp,cljs.core.map.call(null,(function (dot){
var vec__1896461__1896462 = dot;
var dx__1896463 = cljs.core.nth.call(null,vec__1896461__1896462,0,null);
var dy__1896464 = cljs.core.nth.call(null,vec__1896461__1896462,1,null);
var dcolor__1896465 = cljs.core.nth.call(null,vec__1896461__1896462,2,null);
return (function (board){
return eviltetris.core.patch_board.call(null,board,dcolor__1896465,(px__1896458 + dx__1896463),(py__1896459 + dy__1896464));
});
}),cljs.core.first.call(null,shape__1896460))).call(null,board);
});
eviltetris.core.collides_QMARK_ = (function collides_QMARK_(board,piece){
var vec__1896482__1896483 = piece;
var px__1896484 = cljs.core.nth.call(null,vec__1896482__1896483,0,null);
var py__1896485 = cljs.core.nth.call(null,vec__1896482__1896483,1,null);
var shape__1896486 = cljs.core.nth.call(null,vec__1896482__1896483,2,null);
return cljs.core.some.call(null,cljs.core.false_QMARK_,cljs.core.map.call(null,(function (dot){
var vec__1896487__1896488 = dot;
var dx__1896489 = cljs.core.nth.call(null,vec__1896487__1896488,0,null);
var dy__1896490 = cljs.core.nth.call(null,vec__1896487__1896488,1,null);
var ___1896491 = cljs.core.nth.call(null,vec__1896487__1896488,2,null);
var fx__1896492 = (dx__1896489 + px__1896484);
var fy__1896493 = (dy__1896490 + py__1896485);
var and__3822__auto____1896495 = (function (){var and__3822__auto____1896494 = (-1 < fx__1896492);
if(and__3822__auto____1896494)
{return (fx__1896492 < 10);
} else
{return and__3822__auto____1896494;
}
})();
if(cljs.core.truth_(and__3822__auto____1896495))
{var and__3822__auto____1896497 = (function (){var and__3822__auto____1896496 = (-1 < fy__1896493);
if(and__3822__auto____1896496)
{return (fy__1896493 < 20);
} else
{return and__3822__auto____1896496;
}
})();
if(cljs.core.truth_(and__3822__auto____1896497))
{return (board.call(null,fy__1896493).call(null,fx__1896492) == null);
} else
{return and__3822__auto____1896497;
}
} else
{return and__3822__auto____1896495;
}
}),cljs.core.first.call(null,shape__1896486)));
});
eviltetris.core.rotate = (function rotate(piece){
var vec__1896503__1896504 = piece;
var px__1896505 = cljs.core.nth.call(null,vec__1896503__1896504,0,null);
var py__1896506 = cljs.core.nth.call(null,vec__1896503__1896504,1,null);
var shape__1896507 = cljs.core.nth.call(null,vec__1896503__1896504,2,null);
return cljs.core.PersistentVector.fromArray([px__1896505,py__1896506,cljs.core.next.call(null,shape__1896507)], true);
});
eviltetris.core.get_tick = (function get_tick(){
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
eviltetris.core.hard_drop = (function hard_drop(board,piece){
var p__1896509 = piece;
while(true){
if(cljs.core.truth_(eviltetris.core.collides_QMARK_.call(null,board,eviltetris.core.move_down.call(null,p__1896509))))
{return p__1896509;
} else
{{
var G__1896510 = eviltetris.core.move_down.call(null,p__1896509);
p__1896509 = G__1896510;
continue;
}
}
break;
}
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
eviltetris.core.game_over = (function game_over(state){
var gameover__1896513 = document.getElementById("gameover");
var scoreline__1896514 = document.getElementById("score");
gameover__1896513.style.visibility = "visible";
return scoreline__1896514.innerHTML = [cljs.core.str(state.call(null,"\uFDD0'score")),cljs.core.str(" lines")].join('');
});
eviltetris.core.line_full_QMARK_ = (function line_full_QMARK_(line){
return cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,line);
});
eviltetris.core.remove_lines = (function remove_lines(board){
var filtered_lines__1896517 = cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,eviltetris.core.line_full_QMARK_),board);
var difference__1896518 = (cljs.core.count.call(null,board) - cljs.core.count.call(null,filtered_lines__1896517));
return cljs.core.into.call(null,cljs.core.vec.call(null,cljs.core.repeat.call(null,difference__1896518,eviltetris.core.create_line.call(null))),filtered_lines__1896517);
});
eviltetris.core.account_lines = (function account_lines(board){
return cljs.core.count.call(null,cljs.core.filter.call(null,eviltetris.core.line_full_QMARK_,board));
});
eviltetris.core.next_tick = (function next_tick(state){
return setTimeout((function (){
return eviltetris.core.main_loop.call(null,state);
}),5);
});
eviltetris.core.main_loop = (function main_loop(state){
var map__1896532__1896533 = state;
var map__1896532__1896534 = ((cljs.core.seq_QMARK_.call(null,map__1896532__1896533))?cljs.core.apply.call(null,cljs.core.hash_map,map__1896532__1896533):map__1896532__1896533);
var tick__1896535 = cljs.core._lookup.call(null,map__1896532__1896534,"\uFDD0'tick",null);
var score__1896536 = cljs.core._lookup.call(null,map__1896532__1896534,"\uFDD0'score",null);
var piece__1896537 = cljs.core._lookup.call(null,map__1896532__1896534,"\uFDD0'piece",null);
var board__1896538 = cljs.core._lookup.call(null,map__1896532__1896534,"\uFDD0'board",null);
var ctx__1896539 = cljs.core._lookup.call(null,map__1896532__1896534,"\uFDD0'ctx",null);
var last_key__1896540 = eviltetris.core.consume_keypress.call(null);
if(cljs.core.truth_(eviltetris.core.collides_QMARK_.call(null,board__1896538,piece__1896537)))
{return eviltetris.core.game_over.call(null,state);
} else
{eviltetris.core.paint_board.call(null,(new cljs.core.Keyword("\uFDD0'ctx")).call(null,state),eviltetris.core.overlay.call(null,(new cljs.core.Keyword("\uFDD0'board")).call(null,state),(new cljs.core.Keyword("\uFDD0'piece")).call(null,state)));
if(cljs.core.truth_(eviltetris.core.collides_QMARK_.call(null,board__1896538,piece__1896537)))
{return eviltetris.core.game_over.call(null,state);
} else
{if((function (){var and__3822__auto____1896541 = cljs.core._EQ_.call(null,last_key__1896540,37);
if(and__3822__auto____1896541)
{return cljs.core.not.call(null,eviltetris.core.collides_QMARK_.call(null,board__1896538,eviltetris.core.move_left.call(null,piece__1896537)));
} else
{return and__3822__auto____1896541;
}
})())
{return eviltetris.core.next_tick.call(null,cljs.core.assoc.call(null,state,"\uFDD0'piece",eviltetris.core.move_left.call(null,piece__1896537)));
} else
{if((function (){var and__3822__auto____1896542 = cljs.core._EQ_.call(null,last_key__1896540,38);
if(and__3822__auto____1896542)
{return cljs.core.not.call(null,eviltetris.core.collides_QMARK_.call(null,board__1896538,eviltetris.core.rotate.call(null,piece__1896537)));
} else
{return and__3822__auto____1896542;
}
})())
{return eviltetris.core.next_tick.call(null,cljs.core.assoc.call(null,state,"\uFDD0'piece",eviltetris.core.rotate.call(null,piece__1896537)));
} else
{if((function (){var and__3822__auto____1896543 = cljs.core._EQ_.call(null,last_key__1896540,39);
if(and__3822__auto____1896543)
{return cljs.core.not.call(null,eviltetris.core.collides_QMARK_.call(null,board__1896538,eviltetris.core.move_right.call(null,piece__1896537)));
} else
{return and__3822__auto____1896543;
}
})())
{return eviltetris.core.next_tick.call(null,cljs.core.assoc.call(null,state,"\uFDD0'piece",eviltetris.core.move_right.call(null,piece__1896537)));
} else
{if((function (){var and__3822__auto____1896544 = cljs.core._EQ_.call(null,last_key__1896540,40);
if(and__3822__auto____1896544)
{return cljs.core.not.call(null,eviltetris.core.collides_QMARK_.call(null,board__1896538,eviltetris.core.move_down.call(null,piece__1896537)));
} else
{return and__3822__auto____1896544;
}
})())
{return eviltetris.core.next_tick.call(null,cljs.core.assoc.call(null,state,"\uFDD0'piece",eviltetris.core.move_down.call(null,piece__1896537)));
} else
{if(cljs.core._EQ_.call(null,last_key__1896540,32))
{return eviltetris.core.next_tick.call(null,cljs.core.assoc.call(null,state,"\uFDD0'piece",eviltetris.core.hard_drop.call(null,board__1896538,piece__1896537)));
} else
{if(((eviltetris.core.get_tick.call(null) - tick__1896535) < 350))
{return eviltetris.core.next_tick.call(null,state);
} else
{if(cljs.core.truth_(eviltetris.core.collides_QMARK_.call(null,board__1896538,eviltetris.core.move_down.call(null,piece__1896537))))
{return eviltetris.core.next_tick.call(null,cljs.core.assoc.call(null,state,"\uFDD0'score",(score__1896536 + eviltetris.core.account_lines.call(null,board__1896538)),"\uFDD0'board",eviltetris.core.remove_lines.call(null,eviltetris.core.overlay.call(null,board__1896538,piece__1896537)),"\uFDD0'piece",eviltetris.core.get_next_piece.call(null),"\uFDD0'tick",eviltetris.core.get_tick.call(null)));
} else
{if("\uFDD0'else")
{return eviltetris.core.next_tick.call(null,cljs.core.assoc.call(null,state,"\uFDD0'piece",eviltetris.core.move_down.call(null,piece__1896537),"\uFDD0'tick",eviltetris.core.get_tick.call(null)));
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});
eviltetris.core.create_game_state = (function create_game_state(ctx){
return cljs.core.ObjMap.fromObject(["\uFDD0'ctx","\uFDD0'board","\uFDD0'piece","\uFDD0'score","\uFDD0'tick"],{"\uFDD0'ctx":ctx,"\uFDD0'board":eviltetris.core.create_board.call(null),"\uFDD0'piece":eviltetris.core.get_next_piece.call(null),"\uFDD0'score":0,"\uFDD0'tick":eviltetris.core.get_tick.call(null)});
});
eviltetris.core.start_game = (function start_game(){
eviltetris.core.consume_keypress.call(null);
var canvas__1896549 = document.getElementById("canvas");
var ctx__1896550 = canvas__1896549.getContext("2d");
var board__1896551 = eviltetris.core.create_board.call(null);
var gameover__1896552 = document.getElementById("gameover");
gameover__1896552.style.visibility = "hidden";
return eviltetris.core.main_loop.call(null,eviltetris.core.create_game_state.call(null,ctx__1896550));
});
goog.exportSymbol('eviltetris.core.start_game', eviltetris.core.start_game);
eviltetris.core.init = (function init(){
var handler__1896554 = (new goog.events.KeyHandler(document,true));
goog.events.listen(handler__1896554,"key",eviltetris.core.keypress);
return eviltetris.core.start_game.call(null);
});
goog.exportSymbol('eviltetris.core.init', eviltetris.core.init);
