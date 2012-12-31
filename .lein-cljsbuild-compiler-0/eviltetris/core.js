goog.provide('eviltetris.core');
goog.require('cljs.core');
goog.require('goog.events.KeyHandler');
goog.require('goog.events');
goog.require('clojure.browser.repl');
clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
eviltetris.core.load_image = (function load_image(file){
var image__1410602 = (new Image());
image__1410602.src = [cljs.core.str("images/"),cljs.core.str(file)].join('');
return image__1410602;
});
eviltetris.core.images = cljs.core.ObjMap.fromObject(["\uFDD0'blue","\uFDD0'cyan","\uFDD0'green","\uFDD0'magenta","\uFDD0'orange","\uFDD0'red","\uFDD0'yellow"],{"\uFDD0'blue":eviltetris.core.load_image.call(null,"blue.png"),"\uFDD0'cyan":eviltetris.core.load_image.call(null,"cyan.png"),"\uFDD0'green":eviltetris.core.load_image.call(null,"green.png"),"\uFDD0'magenta":eviltetris.core.load_image.call(null,"magenta.png"),"\uFDD0'orange":eviltetris.core.load_image.call(null,"orange.png"),"\uFDD0'red":eviltetris.core.load_image.call(null,"red.png"),"\uFDD0'yellow":eviltetris.core.load_image.call(null,"yellow.png")});
eviltetris.core.shapes = cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([3,1,"\uFDD0'cyan"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([2,3,"\uFDD0'cyan"], true)], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,0,"\uFDD0'yellow"], true),cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'yellow"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'yellow"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'yellow"], true)], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([3,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'magenta"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([3,1,"\uFDD0'magenta"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([3,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'magenta"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'magenta"], true)], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'green"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'green"], true)], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,2,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'red"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,0,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'red"], true)], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'blue"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,2,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'blue"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([0,2,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'blue"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'blue"], true)], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([0,2,"\uFDD0'orange"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,0,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'orange"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([0,2,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'orange"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'orange"], true)], true)], true)], true);
eviltetris.core._STAR_last_key_pressed_STAR_ = null;
eviltetris.core.keypress = (function keypress(event){
var key__1410604 = event.keyCode;
eviltetris.core._STAR_last_key_pressed_STAR_ = key__1410604;
event.preventDefault();
return event.stopPropagation();
});
eviltetris.core.consume_keypress = (function consume_keypress(){
var lastkey__1410606 = eviltetris.core._STAR_last_key_pressed_STAR_;
eviltetris.core._STAR_last_key_pressed_STAR_ = null;
return lastkey__1410606;
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
return cljs.core.dorun.call(null,(function (){var iter__2464__auto____1410664 = (function iter__1410636(s__1410637){
return (new cljs.core.LazySeq(null,false,(function (){
var s__1410637__1410652 = s__1410637;
while(true){
if(cljs.core.seq.call(null,s__1410637__1410652))
{var x__1410653 = cljs.core.first.call(null,s__1410637__1410652);
var iterys__2462__auto____1410662 = ((function (s__1410637__1410652,x__1410653){
return (function iter__1410638(s__1410639){
return (new cljs.core.LazySeq(null,false,((function (s__1410637__1410652,x__1410653){
return (function (){
var s__1410639__1410658 = s__1410639;
while(true){
if(cljs.core.seq.call(null,s__1410639__1410658))
{var y__1410659 = cljs.core.first.call(null,s__1410639__1410658);
return cljs.core.cons.call(null,(function (){var temp__3974__auto____1410660 = board.call(null,y__1410659).call(null,x__1410653);
if(cljs.core.truth_(temp__3974__auto____1410660))
{var color__1410661 = temp__3974__auto____1410660;
return eviltetris.core.paint_block.call(null,ctx,x__1410653,y__1410659,color__1410661);
} else
{return null;
}
})(),iter__1410638.call(null,cljs.core.rest.call(null,s__1410639__1410658)));
} else
{return null;
}
break;
}
});})(s__1410637__1410652,x__1410653))
,null));
});})(s__1410637__1410652,x__1410653))
;
var fs__2463__auto____1410663 = cljs.core.seq.call(null,iterys__2462__auto____1410662.call(null,cljs.core.range.call(null,20)));
if(fs__2463__auto____1410663)
{return cljs.core.concat.call(null,fs__2463__auto____1410663,iter__1410636.call(null,cljs.core.rest.call(null,s__1410637__1410652)));
} else
{{
var G__1410665 = cljs.core.rest.call(null,s__1410637__1410652);
s__1410637__1410652 = G__1410665;
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
return iter__2464__auto____1410664.call(null,cljs.core.range.call(null,10));
})());
});
eviltetris.core.patch_board = (function patch_board(board,color,x,y){
return cljs.core.assoc.call(null,board,y,cljs.core.assoc.call(null,board.call(null,y),x,color));
});
eviltetris.core.test_pattern = (function test_pattern(board){
return eviltetris.core.patch_board.call(null,board,cljs.core.rand_nth.call(null,cljs.core.keys.call(null,eviltetris.core.images)),cljs.core.rand_int.call(null,10),cljs.core.rand_int.call(null,20));
});
eviltetris.core.overlay = (function overlay(board,piece){
var vec__1410676__1410677 = piece;
var px__1410678 = cljs.core.nth.call(null,vec__1410676__1410677,0,null);
var py__1410679 = cljs.core.nth.call(null,vec__1410676__1410677,1,null);
var shape__1410680 = cljs.core.nth.call(null,vec__1410676__1410677,2,null);
return cljs.core.apply.call(null,cljs.core.comp,cljs.core.map.call(null,(function (dot){
var vec__1410681__1410682 = dot;
var dx__1410683 = cljs.core.nth.call(null,vec__1410681__1410682,0,null);
var dy__1410684 = cljs.core.nth.call(null,vec__1410681__1410682,1,null);
var dcolor__1410685 = cljs.core.nth.call(null,vec__1410681__1410682,2,null);
return (function (board){
return eviltetris.core.patch_board.call(null,board,dcolor__1410685,(px__1410678 + dx__1410683),(py__1410679 + dy__1410684));
});
}),cljs.core.first.call(null,shape__1410680))).call(null,board);
});
eviltetris.core.collides_QMARK_ = (function collides_QMARK_(board,piece){
var vec__1410702__1410703 = piece;
var px__1410704 = cljs.core.nth.call(null,vec__1410702__1410703,0,null);
var py__1410705 = cljs.core.nth.call(null,vec__1410702__1410703,1,null);
var shape__1410706 = cljs.core.nth.call(null,vec__1410702__1410703,2,null);
return cljs.core.some.call(null,cljs.core.false_QMARK_,cljs.core.map.call(null,(function (dot){
var vec__1410707__1410708 = dot;
var dx__1410709 = cljs.core.nth.call(null,vec__1410707__1410708,0,null);
var dy__1410710 = cljs.core.nth.call(null,vec__1410707__1410708,1,null);
var ___1410711 = cljs.core.nth.call(null,vec__1410707__1410708,2,null);
var fx__1410712 = (dx__1410709 + px__1410704);
var fy__1410713 = (dy__1410710 + py__1410705);
var and__3822__auto____1410715 = (function (){var and__3822__auto____1410714 = (-1 < fx__1410712);
if(and__3822__auto____1410714)
{return (fx__1410712 < 10);
} else
{return and__3822__auto____1410714;
}
})();
if(cljs.core.truth_(and__3822__auto____1410715))
{var and__3822__auto____1410717 = (function (){var and__3822__auto____1410716 = (-1 < fy__1410713);
if(and__3822__auto____1410716)
{return (fy__1410713 < 20);
} else
{return and__3822__auto____1410716;
}
})();
if(cljs.core.truth_(and__3822__auto____1410717))
{return (board.call(null,fy__1410713).call(null,fx__1410712) == null);
} else
{return and__3822__auto____1410717;
}
} else
{return and__3822__auto____1410715;
}
}),cljs.core.first.call(null,shape__1410706)));
});
eviltetris.core.rotate = (function rotate(piece){
var vec__1410723__1410724 = piece;
var px__1410725 = cljs.core.nth.call(null,vec__1410723__1410724,0,null);
var py__1410726 = cljs.core.nth.call(null,vec__1410723__1410724,1,null);
var shape__1410727 = cljs.core.nth.call(null,vec__1410723__1410724,2,null);
return cljs.core.PersistentVector.fromArray([px__1410725,py__1410726,cljs.core.next.call(null,shape__1410727)], true);
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
eviltetris.core.hard_drop = (function hard_drop(board,piece){
var p__1410729 = piece;
while(true){
if(cljs.core.truth_(eviltetris.core.collides_QMARK_.call(null,board,eviltetris.core.move_down.call(null,p__1410729))))
{return p__1410729;
} else
{{
var G__1410730 = eviltetris.core.move_down.call(null,p__1410729);
p__1410729 = G__1410730;
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
eviltetris.core.game_over = (function game_over(ctx){
var gameover__1410732 = document.getElementById("gameover");
return gameover__1410732.style.visibility = "visible";
});
eviltetris.core.line_full_QMARK_ = (function line_full_QMARK_(line){
return cljs.core.not_every_QMARK_.call(null,cljs.core.keyword_QMARK_,line);
});
eviltetris.core.remove_lines = (function remove_lines(lines){
var filtered_lines__1410735 = cljs.core.filter.call(null,eviltetris.core.line_full_QMARK_,lines);
var difference__1410736 = (cljs.core.count.call(null,lines) - cljs.core.count.call(null,filtered_lines__1410735));
return cljs.core.into.call(null,cljs.core.vec.call(null,cljs.core.repeat.call(null,difference__1410736,eviltetris.core.create_line.call(null))),filtered_lines__1410735);
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
var last_key__1410741 = eviltetris.core.consume_keypress.call(null);
if(cljs.core.truth_(eviltetris.core.collides_QMARK_.call(null,board,piece)))
{return eviltetris.core.game_over.call(null,ctx);
} else
{if((function (){var and__3822__auto____1410742 = cljs.core._EQ_.call(null,last_key__1410741,38);
if(and__3822__auto____1410742)
{return cljs.core.not.call(null,eviltetris.core.collides_QMARK_.call(null,board,eviltetris.core.rotate.call(null,piece)));
} else
{return and__3822__auto____1410742;
}
})())
{return eviltetris.core.next_tick.call(null,ctx,board,eviltetris.core.rotate.call(null,piece),previous_tick);
} else
{if((function (){var and__3822__auto____1410743 = cljs.core._EQ_.call(null,last_key__1410741,39);
if(and__3822__auto____1410743)
{return cljs.core.not.call(null,eviltetris.core.collides_QMARK_.call(null,board,eviltetris.core.move_right.call(null,piece)));
} else
{return and__3822__auto____1410743;
}
})())
{return eviltetris.core.next_tick.call(null,ctx,board,eviltetris.core.move_right.call(null,piece),previous_tick);
} else
{if((function (){var and__3822__auto____1410744 = cljs.core._EQ_.call(null,last_key__1410741,37);
if(and__3822__auto____1410744)
{return cljs.core.not.call(null,eviltetris.core.collides_QMARK_.call(null,board,eviltetris.core.move_left.call(null,piece)));
} else
{return and__3822__auto____1410744;
}
})())
{return eviltetris.core.next_tick.call(null,ctx,board,eviltetris.core.move_left.call(null,piece),previous_tick);
} else
{if(cljs.core._EQ_.call(null,last_key__1410741,32))
{return eviltetris.core.next_tick.call(null,ctx,board,eviltetris.core.hard_drop.call(null,board,piece),previous_tick);
} else
{if(((eviltetris.core.tick.call(null) - previous_tick) < 400))
{return eviltetris.core.next_tick.call(null,ctx,board,piece,previous_tick);
} else
{if(cljs.core.truth_(eviltetris.core.collides_QMARK_.call(null,board,eviltetris.core.move_down.call(null,piece))))
{return eviltetris.core.next_tick.call(null,ctx,eviltetris.core.remove_lines.call(null,eviltetris.core.overlay.call(null,board,piece)),eviltetris.core.get_next_piece.call(null),eviltetris.core.tick.call(null));
} else
{if("\uFDD0'else")
{return eviltetris.core.next_tick.call(null,ctx,board,eviltetris.core.move_down.call(null,piece),eviltetris.core.tick.call(null));
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
eviltetris.core.start_game = (function start_game(){
var canvas__1410749 = document.getElementById("canvas");
var ctx__1410750 = canvas__1410749.getContext("2d");
var board__1410751 = eviltetris.core.create_board.call(null);
var gameover__1410752 = document.getElementById("gameover");
gameover__1410752.style.visibility = "hidden";
return eviltetris.core.main_loop.call(null,ctx__1410750,board__1410751);
});
goog.exportSymbol('eviltetris.core.start_game', eviltetris.core.start_game);
eviltetris.core.init = (function init(){
var handler__1410754 = (new goog.events.KeyHandler(document,true));
goog.events.listen(handler__1410754,"key",eviltetris.core.keypress);
return eviltetris.core.start_game.call(null);
});
goog.exportSymbol('eviltetris.core.init', eviltetris.core.init);
