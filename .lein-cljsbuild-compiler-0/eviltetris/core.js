goog.provide('eviltetris.core');
goog.require('cljs.core');
goog.require('goog.events.KeyHandler');
goog.require('goog.events');
goog.require('clojure.browser.repl');
clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
eviltetris.core.load_image = (function load_image(file){
var image__1803546 = (new Image());
image__1803546.src = [cljs.core.str("images/"),cljs.core.str(file)].join('');
return image__1803546;
});
eviltetris.core.images = cljs.core.ObjMap.fromObject(["\uFDD0'blue","\uFDD0'cyan","\uFDD0'green","\uFDD0'magenta","\uFDD0'orange","\uFDD0'red","\uFDD0'yellow"],{"\uFDD0'blue":eviltetris.core.load_image.call(null,"blue.png"),"\uFDD0'cyan":eviltetris.core.load_image.call(null,"cyan.png"),"\uFDD0'green":eviltetris.core.load_image.call(null,"green.png"),"\uFDD0'magenta":eviltetris.core.load_image.call(null,"magenta.png"),"\uFDD0'orange":eviltetris.core.load_image.call(null,"orange.png"),"\uFDD0'red":eviltetris.core.load_image.call(null,"red.png"),"\uFDD0'yellow":eviltetris.core.load_image.call(null,"yellow.png")});
eviltetris.core.shapes = cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([3,1,"\uFDD0'cyan"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([2,3,"\uFDD0'cyan"], true)], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,0,"\uFDD0'yellow"], true),cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'yellow"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'yellow"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'yellow"], true)], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([3,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'magenta"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([3,1,"\uFDD0'magenta"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([3,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'magenta"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'magenta"], true)], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'green"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'green"], true)], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,2,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'red"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,0,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'red"], true)], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'blue"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,2,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'blue"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([0,2,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'blue"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'blue"], true)], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([0,2,"\uFDD0'orange"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,0,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'orange"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([0,2,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'orange"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'orange"], true)], true)], true)], true);
eviltetris.core._STAR_last_key_pressed_STAR_ = null;
eviltetris.core.keypress = (function keypress(event){
var key__1803548 = event.keyCode;
eviltetris.core._STAR_last_key_pressed_STAR_ = key__1803548;
event.preventDefault();
return event.stopPropagation();
});
eviltetris.core.consume_keypress = (function consume_keypress(){
var lastkey__1803550 = eviltetris.core._STAR_last_key_pressed_STAR_;
eviltetris.core._STAR_last_key_pressed_STAR_ = null;
return lastkey__1803550;
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
return cljs.core.dorun.call(null,(function (){var iter__2464__auto____1803608 = (function iter__1803580(s__1803581){
return (new cljs.core.LazySeq(null,false,(function (){
var s__1803581__1803596 = s__1803581;
while(true){
if(cljs.core.seq.call(null,s__1803581__1803596))
{var x__1803597 = cljs.core.first.call(null,s__1803581__1803596);
var iterys__2462__auto____1803606 = ((function (s__1803581__1803596,x__1803597){
return (function iter__1803582(s__1803583){
return (new cljs.core.LazySeq(null,false,((function (s__1803581__1803596,x__1803597){
return (function (){
var s__1803583__1803602 = s__1803583;
while(true){
if(cljs.core.seq.call(null,s__1803583__1803602))
{var y__1803603 = cljs.core.first.call(null,s__1803583__1803602);
return cljs.core.cons.call(null,(function (){var temp__3974__auto____1803604 = board.call(null,y__1803603).call(null,x__1803597);
if(cljs.core.truth_(temp__3974__auto____1803604))
{var color__1803605 = temp__3974__auto____1803604;
return eviltetris.core.paint_block.call(null,ctx,x__1803597,y__1803603,color__1803605);
} else
{return null;
}
})(),iter__1803582.call(null,cljs.core.rest.call(null,s__1803583__1803602)));
} else
{return null;
}
break;
}
});})(s__1803581__1803596,x__1803597))
,null));
});})(s__1803581__1803596,x__1803597))
;
var fs__2463__auto____1803607 = cljs.core.seq.call(null,iterys__2462__auto____1803606.call(null,cljs.core.range.call(null,20)));
if(fs__2463__auto____1803607)
{return cljs.core.concat.call(null,fs__2463__auto____1803607,iter__1803580.call(null,cljs.core.rest.call(null,s__1803581__1803596)));
} else
{{
var G__1803609 = cljs.core.rest.call(null,s__1803581__1803596);
s__1803581__1803596 = G__1803609;
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
return iter__2464__auto____1803608.call(null,cljs.core.range.call(null,10));
})());
});
eviltetris.core.patch_board = (function patch_board(board,color,x,y){
return cljs.core.assoc.call(null,board,y,cljs.core.assoc.call(null,board.call(null,y),x,color));
});
eviltetris.core.test_pattern = (function test_pattern(board){
return eviltetris.core.patch_board.call(null,board,cljs.core.rand_nth.call(null,cljs.core.keys.call(null,eviltetris.core.images)),cljs.core.rand_int.call(null,10),cljs.core.rand_int.call(null,20));
});
eviltetris.core.overlay = (function overlay(board,piece){
var vec__1803620__1803621 = piece;
var px__1803622 = cljs.core.nth.call(null,vec__1803620__1803621,0,null);
var py__1803623 = cljs.core.nth.call(null,vec__1803620__1803621,1,null);
var shape__1803624 = cljs.core.nth.call(null,vec__1803620__1803621,2,null);
return cljs.core.apply.call(null,cljs.core.comp,cljs.core.map.call(null,(function (dot){
var vec__1803625__1803626 = dot;
var dx__1803627 = cljs.core.nth.call(null,vec__1803625__1803626,0,null);
var dy__1803628 = cljs.core.nth.call(null,vec__1803625__1803626,1,null);
var dcolor__1803629 = cljs.core.nth.call(null,vec__1803625__1803626,2,null);
return (function (board){
return eviltetris.core.patch_board.call(null,board,dcolor__1803629,(px__1803622 + dx__1803627),(py__1803623 + dy__1803628));
});
}),cljs.core.first.call(null,shape__1803624))).call(null,board);
});
eviltetris.core.collides_QMARK_ = (function collides_QMARK_(board,piece){
var vec__1803646__1803647 = piece;
var px__1803648 = cljs.core.nth.call(null,vec__1803646__1803647,0,null);
var py__1803649 = cljs.core.nth.call(null,vec__1803646__1803647,1,null);
var shape__1803650 = cljs.core.nth.call(null,vec__1803646__1803647,2,null);
return cljs.core.some.call(null,cljs.core.false_QMARK_,cljs.core.map.call(null,(function (dot){
var vec__1803651__1803652 = dot;
var dx__1803653 = cljs.core.nth.call(null,vec__1803651__1803652,0,null);
var dy__1803654 = cljs.core.nth.call(null,vec__1803651__1803652,1,null);
var ___1803655 = cljs.core.nth.call(null,vec__1803651__1803652,2,null);
var fx__1803656 = (dx__1803653 + px__1803648);
var fy__1803657 = (dy__1803654 + py__1803649);
var and__3822__auto____1803659 = (function (){var and__3822__auto____1803658 = (-1 < fx__1803656);
if(and__3822__auto____1803658)
{return (fx__1803656 < 10);
} else
{return and__3822__auto____1803658;
}
})();
if(cljs.core.truth_(and__3822__auto____1803659))
{var and__3822__auto____1803661 = (function (){var and__3822__auto____1803660 = (-1 < fy__1803657);
if(and__3822__auto____1803660)
{return (fy__1803657 < 20);
} else
{return and__3822__auto____1803660;
}
})();
if(cljs.core.truth_(and__3822__auto____1803661))
{return (board.call(null,fy__1803657).call(null,fx__1803656) == null);
} else
{return and__3822__auto____1803661;
}
} else
{return and__3822__auto____1803659;
}
}),cljs.core.first.call(null,shape__1803650)));
});
eviltetris.core.rotate = (function rotate(piece){
var vec__1803667__1803668 = piece;
var px__1803669 = cljs.core.nth.call(null,vec__1803667__1803668,0,null);
var py__1803670 = cljs.core.nth.call(null,vec__1803667__1803668,1,null);
var shape__1803671 = cljs.core.nth.call(null,vec__1803667__1803668,2,null);
return cljs.core.PersistentVector.fromArray([px__1803669,py__1803670,cljs.core.next.call(null,shape__1803671)], true);
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
var p__1803673 = piece;
while(true){
if(cljs.core.truth_(eviltetris.core.collides_QMARK_.call(null,board,eviltetris.core.move_down.call(null,p__1803673))))
{return p__1803673;
} else
{{
var G__1803674 = eviltetris.core.move_down.call(null,p__1803673);
p__1803673 = G__1803674;
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
var gameover__1803677 = document.getElementById("gameover");
var scoreline__1803678 = document.getElementById("score");
gameover__1803677.style.visibility = "visible";
return scoreline__1803678.innerHTML = [cljs.core.str(state.call(null,"\uFDD0'score")),cljs.core.str(" lines")].join('');
});
eviltetris.core.line_full_QMARK_ = (function line_full_QMARK_(line){
return cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,line);
});
eviltetris.core.remove_lines = (function remove_lines(board){
var filtered_lines__1803681 = cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,eviltetris.core.line_full_QMARK_),board);
var difference__1803682 = (cljs.core.count.call(null,board) - cljs.core.count.call(null,filtered_lines__1803681));
return cljs.core.into.call(null,cljs.core.vec.call(null,cljs.core.repeat.call(null,difference__1803682,eviltetris.core.create_line.call(null))),filtered_lines__1803681);
});
eviltetris.core.account_lines = (function account_lines(board){
return cljs.core.count.call(null,cljs.core.filter.call(null,eviltetris.core.line_full_QMARK_,board));
});
eviltetris.core.next_tick = (function next_tick(state){
return setTimeout((function (){
return eviltetris.core.main_loop.call(null,state);
}),100);
});
eviltetris.core.main_loop = (function main_loop(state){
var map__1803696__1803697 = state;
var map__1803696__1803698 = ((cljs.core.seq_QMARK_.call(null,map__1803696__1803697))?cljs.core.apply.call(null,cljs.core.hash_map,map__1803696__1803697):map__1803696__1803697);
var tick__1803699 = cljs.core._lookup.call(null,map__1803696__1803698,"\uFDD0'tick",null);
var score__1803700 = cljs.core._lookup.call(null,map__1803696__1803698,"\uFDD0'score",null);
var piece__1803701 = cljs.core._lookup.call(null,map__1803696__1803698,"\uFDD0'piece",null);
var ticklength__1803702 = cljs.core._lookup.call(null,map__1803696__1803698,"\uFDD0'ticklength",null);
var board__1803703 = cljs.core._lookup.call(null,map__1803696__1803698,"\uFDD0'board",null);
var ctx__1803704 = cljs.core._lookup.call(null,map__1803696__1803698,"\uFDD0'ctx",null);
var last_key__1803705 = eviltetris.core.consume_keypress.call(null);
if(cljs.core.truth_(eviltetris.core.collides_QMARK_.call(null,board__1803703,piece__1803701)))
{return eviltetris.core.game_over.call(null,state);
} else
{eviltetris.core.paint_board.call(null,(new cljs.core.Keyword("\uFDD0'ctx")).call(null,state),eviltetris.core.overlay.call(null,(new cljs.core.Keyword("\uFDD0'board")).call(null,state),(new cljs.core.Keyword("\uFDD0'piece")).call(null,state)));
if(cljs.core.truth_(eviltetris.core.collides_QMARK_.call(null,board__1803703,piece__1803701)))
{return eviltetris.core.game_over.call(null,state);
} else
{if((function (){var and__3822__auto____1803706 = cljs.core._EQ_.call(null,last_key__1803705,38);
if(and__3822__auto____1803706)
{return cljs.core.not.call(null,eviltetris.core.collides_QMARK_.call(null,board__1803703,eviltetris.core.rotate.call(null,piece__1803701)));
} else
{return and__3822__auto____1803706;
}
})())
{return eviltetris.core.next_tick.call(null,cljs.core.assoc.call(null,state,"\uFDD0'piece",eviltetris.core.rotate.call(null,piece__1803701)));
} else
{if((function (){var and__3822__auto____1803707 = cljs.core._EQ_.call(null,last_key__1803705,39);
if(and__3822__auto____1803707)
{return cljs.core.not.call(null,eviltetris.core.collides_QMARK_.call(null,board__1803703,eviltetris.core.move_right.call(null,piece__1803701)));
} else
{return and__3822__auto____1803707;
}
})())
{return eviltetris.core.next_tick.call(null,cljs.core.assoc.call(null,state,"\uFDD0'piece",eviltetris.core.move_right.call(null,piece__1803701)));
} else
{if((function (){var and__3822__auto____1803708 = cljs.core._EQ_.call(null,last_key__1803705,37);
if(and__3822__auto____1803708)
{return cljs.core.not.call(null,eviltetris.core.collides_QMARK_.call(null,board__1803703,eviltetris.core.move_left.call(null,piece__1803701)));
} else
{return and__3822__auto____1803708;
}
})())
{return eviltetris.core.next_tick.call(null,cljs.core.assoc.call(null,state,"\uFDD0'piece",eviltetris.core.move_left.call(null,piece__1803701)));
} else
{if(cljs.core._EQ_.call(null,last_key__1803705,32))
{return eviltetris.core.next_tick.call(null,cljs.core.assoc.call(null,state,"\uFDD0'piece",eviltetris.core.hard_drop.call(null,board__1803703,piece__1803701)));
} else
{if(((eviltetris.core.get_tick.call(null) - tick__1803699) < 400))
{return eviltetris.core.next_tick.call(null,state);
} else
{if(cljs.core.truth_(eviltetris.core.collides_QMARK_.call(null,board__1803703,eviltetris.core.move_down.call(null,piece__1803701))))
{return eviltetris.core.next_tick.call(null,cljs.core.assoc.call(null,state,"\uFDD0'score",(score__1803700 + eviltetris.core.account_lines.call(null,board__1803703)),"\uFDD0'board",eviltetris.core.remove_lines.call(null,eviltetris.core.overlay.call(null,board__1803703,piece__1803701)),"\uFDD0'piece",eviltetris.core.get_next_piece.call(null),"\uFDD0'tick",eviltetris.core.get_tick.call(null)));
} else
{if("\uFDD0'else")
{return eviltetris.core.next_tick.call(null,cljs.core.assoc.call(null,state,"\uFDD0'piece",eviltetris.core.move_down.call(null,piece__1803701),"\uFDD0'tick",eviltetris.core.get_tick.call(null)));
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
});
eviltetris.core.create_game_state = (function create_game_state(ctx){
return cljs.core.ObjMap.fromObject(["\uFDD0'ctx","\uFDD0'board","\uFDD0'ticklenght","\uFDD0'piece","\uFDD0'score","\uFDD0'tick"],{"\uFDD0'ctx":ctx,"\uFDD0'board":eviltetris.core.create_board.call(null),"\uFDD0'ticklenght":400,"\uFDD0'piece":eviltetris.core.get_next_piece.call(null),"\uFDD0'score":0,"\uFDD0'tick":eviltetris.core.get_tick.call(null)});
});
eviltetris.core.start_game = (function start_game(){
eviltetris.core.consume_keypress.call(null);
var canvas__1803713 = document.getElementById("canvas");
var ctx__1803714 = canvas__1803713.getContext("2d");
var board__1803715 = eviltetris.core.create_board.call(null);
var gameover__1803716 = document.getElementById("gameover");
gameover__1803716.style.visibility = "hidden";
return eviltetris.core.main_loop.call(null,eviltetris.core.create_game_state.call(null,ctx__1803714));
});
goog.exportSymbol('eviltetris.core.start_game', eviltetris.core.start_game);
eviltetris.core.init = (function init(){
var handler__1803718 = (new goog.events.KeyHandler(document,true));
goog.events.listen(handler__1803718,"key",eviltetris.core.keypress);
return eviltetris.core.start_game.call(null);
});
goog.exportSymbol('eviltetris.core.init', eviltetris.core.init);
