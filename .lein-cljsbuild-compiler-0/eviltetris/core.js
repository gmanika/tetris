goog.provide('eviltetris.core');
goog.require('cljs.core');
goog.require('goog.events.KeyHandler');
goog.require('goog.events');
goog.require('clojure.browser.repl');
clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
eviltetris.core.load_image = (function load_image(file){
var image__1226595 = (new Image());
image__1226595.src = [cljs.core.str("images/"),cljs.core.str(file)].join('');
return image__1226595;
});
eviltetris.core.images = cljs.core.ObjMap.fromObject(["\uFDD0'blue","\uFDD0'cyan","\uFDD0'green","\uFDD0'magenta","\uFDD0'orange","\uFDD0'red","\uFDD0'yellow"],{"\uFDD0'blue":eviltetris.core.load_image.call(null,"blue.png"),"\uFDD0'cyan":eviltetris.core.load_image.call(null,"cyan.png"),"\uFDD0'green":eviltetris.core.load_image.call(null,"green.png"),"\uFDD0'magenta":eviltetris.core.load_image.call(null,"magenta.png"),"\uFDD0'orange":eviltetris.core.load_image.call(null,"orange.png"),"\uFDD0'red":eviltetris.core.load_image.call(null,"red.png"),"\uFDD0'yellow":eviltetris.core.load_image.call(null,"yellow.png")});
eviltetris.core.shapes = cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([3,1,"\uFDD0'cyan"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([2,3,"\uFDD0'cyan"], true)], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,0,"\uFDD0'yellow"], true),cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'yellow"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'yellow"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'yellow"], true)], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([3,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'magenta"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([3,1,"\uFDD0'magenta"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([3,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'magenta"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'magenta"], true)], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'green"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'green"], true)], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,2,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'red"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,0,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'red"], true)], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'blue"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,2,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'blue"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([0,2,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'blue"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'blue"], true)], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([0,2,"\uFDD0'orange"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,0,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'orange"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([0,2,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'orange"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([2,2,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,2,"\uFDD0'orange"], true)], true)], true)], true);
eviltetris.core._STAR_last_key_pressed_STAR_ = null;
eviltetris.core.keypress = (function keypress(event){
var key__1226597 = event.keyCode;
eviltetris.core._STAR_last_key_pressed_STAR_ = key__1226597;
event.preventDefault();
return event.stopPropagation();
});
eviltetris.core.consume_keypress = (function consume_keypress(){
var lastkey__1226599 = eviltetris.core._STAR_last_key_pressed_STAR_;
eviltetris.core._STAR_last_key_pressed_STAR_ = null;
return lastkey__1226599;
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
return cljs.core.dorun.call(null,(function (){var iter__2464__auto____1226657 = (function iter__1226629(s__1226630){
return (new cljs.core.LazySeq(null,false,(function (){
var s__1226630__1226645 = s__1226630;
while(true){
if(cljs.core.seq.call(null,s__1226630__1226645))
{var x__1226646 = cljs.core.first.call(null,s__1226630__1226645);
var iterys__2462__auto____1226655 = ((function (s__1226630__1226645,x__1226646){
return (function iter__1226631(s__1226632){
return (new cljs.core.LazySeq(null,false,((function (s__1226630__1226645,x__1226646){
return (function (){
var s__1226632__1226651 = s__1226632;
while(true){
if(cljs.core.seq.call(null,s__1226632__1226651))
{var y__1226652 = cljs.core.first.call(null,s__1226632__1226651);
return cljs.core.cons.call(null,(function (){var temp__3974__auto____1226653 = board.call(null,y__1226652).call(null,x__1226646);
if(cljs.core.truth_(temp__3974__auto____1226653))
{var color__1226654 = temp__3974__auto____1226653;
return eviltetris.core.paint_block.call(null,ctx,x__1226646,y__1226652,color__1226654);
} else
{return null;
}
})(),iter__1226631.call(null,cljs.core.rest.call(null,s__1226632__1226651)));
} else
{return null;
}
break;
}
});})(s__1226630__1226645,x__1226646))
,null));
});})(s__1226630__1226645,x__1226646))
;
var fs__2463__auto____1226656 = cljs.core.seq.call(null,iterys__2462__auto____1226655.call(null,cljs.core.range.call(null,20)));
if(fs__2463__auto____1226656)
{return cljs.core.concat.call(null,fs__2463__auto____1226656,iter__1226629.call(null,cljs.core.rest.call(null,s__1226630__1226645)));
} else
{{
var G__1226658 = cljs.core.rest.call(null,s__1226630__1226645);
s__1226630__1226645 = G__1226658;
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
return iter__2464__auto____1226657.call(null,cljs.core.range.call(null,10));
})());
});
eviltetris.core.patch_board = (function patch_board(board,color,x,y){
return cljs.core.assoc.call(null,board,y,cljs.core.assoc.call(null,board.call(null,y),x,color));
});
eviltetris.core.test_pattern = (function test_pattern(board){
return eviltetris.core.patch_board.call(null,board,cljs.core.rand_nth.call(null,cljs.core.keys.call(null,eviltetris.core.images)),cljs.core.rand_int.call(null,10),cljs.core.rand_int.call(null,20));
});
eviltetris.core.overlay = (function overlay(board,piece){
var vec__1226669__1226670 = piece;
var px__1226671 = cljs.core.nth.call(null,vec__1226669__1226670,0,null);
var py__1226672 = cljs.core.nth.call(null,vec__1226669__1226670,1,null);
var shape__1226673 = cljs.core.nth.call(null,vec__1226669__1226670,2,null);
return cljs.core.apply.call(null,cljs.core.comp,cljs.core.map.call(null,(function (dot){
var vec__1226674__1226675 = dot;
var dx__1226676 = cljs.core.nth.call(null,vec__1226674__1226675,0,null);
var dy__1226677 = cljs.core.nth.call(null,vec__1226674__1226675,1,null);
var dcolor__1226678 = cljs.core.nth.call(null,vec__1226674__1226675,2,null);
return (function (board){
return eviltetris.core.patch_board.call(null,board,dcolor__1226678,(px__1226671 + dx__1226676),(py__1226672 + dy__1226677));
});
}),cljs.core.first.call(null,shape__1226673))).call(null,board);
});
eviltetris.core.collides_QMARK_ = (function collides_QMARK_(board,piece){
var vec__1226695__1226696 = piece;
var px__1226697 = cljs.core.nth.call(null,vec__1226695__1226696,0,null);
var py__1226698 = cljs.core.nth.call(null,vec__1226695__1226696,1,null);
var shape__1226699 = cljs.core.nth.call(null,vec__1226695__1226696,2,null);
return cljs.core.some.call(null,cljs.core.false_QMARK_,cljs.core.map.call(null,(function (dot){
var vec__1226700__1226701 = dot;
var dx__1226702 = cljs.core.nth.call(null,vec__1226700__1226701,0,null);
var dy__1226703 = cljs.core.nth.call(null,vec__1226700__1226701,1,null);
var ___1226704 = cljs.core.nth.call(null,vec__1226700__1226701,2,null);
var fx__1226705 = (dx__1226702 + px__1226697);
var fy__1226706 = (dy__1226703 + py__1226698);
var and__3822__auto____1226708 = (function (){var and__3822__auto____1226707 = (-1 < fx__1226705);
if(and__3822__auto____1226707)
{return (fx__1226705 < 10);
} else
{return and__3822__auto____1226707;
}
})();
if(cljs.core.truth_(and__3822__auto____1226708))
{var and__3822__auto____1226710 = (function (){var and__3822__auto____1226709 = (-1 < fy__1226706);
if(and__3822__auto____1226709)
{return (fy__1226706 < 20);
} else
{return and__3822__auto____1226709;
}
})();
if(cljs.core.truth_(and__3822__auto____1226710))
{return (board.call(null,fy__1226706).call(null,fx__1226705) == null);
} else
{return and__3822__auto____1226710;
}
} else
{return and__3822__auto____1226708;
}
}),cljs.core.first.call(null,shape__1226699)));
});
eviltetris.core.rotate = (function rotate(piece){
var vec__1226716__1226717 = piece;
var px__1226718 = cljs.core.nth.call(null,vec__1226716__1226717,0,null);
var py__1226719 = cljs.core.nth.call(null,vec__1226716__1226717,1,null);
var shape__1226720 = cljs.core.nth.call(null,vec__1226716__1226717,2,null);
return cljs.core.PersistentVector.fromArray([px__1226718,py__1226719,cljs.core.next.call(null,shape__1226720)], true);
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
eviltetris.core.line_full_QMARK_ = (function line_full_QMARK_(line){
return cljs.core.not_every_QMARK_.call(null,cljs.core.keyword_QMARK_,line);
});
eviltetris.core.remove_lines = (function remove_lines(lines){
var filtered_lines__1226723 = cljs.core.filter.call(null,eviltetris.core.line_full_QMARK_,lines);
var difference__1226724 = (cljs.core.count.call(null,lines) - cljs.core.count.call(null,filtered_lines__1226723));
return cljs.core.into.call(null,cljs.core.vec.call(null,cljs.core.repeat.call(null,difference__1226724,eviltetris.core.create_line.call(null))),filtered_lines__1226723);
});
eviltetris.core.main_loop = (function() {
var main_loop = null;
var main_loop__2 = (function (ctx,board){
return main_loop.call(null,ctx,board,eviltetris.core.get_next_piece.call(null),eviltetris.core.tick.call(null));
});
var main_loop__4 = (function (ctx,board,piece,previous_tick){
eviltetris.core.paint_board.call(null,ctx,eviltetris.core.overlay.call(null,board,piece));
var last_key__1226729 = eviltetris.core.consume_keypress.call(null);
if(cljs.core.truth_(eviltetris.core.collides_QMARK_.call(null,board,piece)))
{return eviltetris.core.game_over.call(null,ctx);
} else
{if((function (){var and__3822__auto____1226730 = cljs.core._EQ_.call(null,last_key__1226729,38);
if(and__3822__auto____1226730)
{return cljs.core.not.call(null,eviltetris.core.collides_QMARK_.call(null,board,eviltetris.core.rotate.call(null,piece)));
} else
{return and__3822__auto____1226730;
}
})())
{return eviltetris.core.next_tick.call(null,ctx,board,eviltetris.core.rotate.call(null,piece),previous_tick);
} else
{if((function (){var and__3822__auto____1226731 = cljs.core._EQ_.call(null,last_key__1226729,39);
if(and__3822__auto____1226731)
{return cljs.core.not.call(null,eviltetris.core.collides_QMARK_.call(null,board,eviltetris.core.move_right.call(null,piece)));
} else
{return and__3822__auto____1226731;
}
})())
{return eviltetris.core.next_tick.call(null,ctx,board,eviltetris.core.move_right.call(null,piece),previous_tick);
} else
{if((function (){var and__3822__auto____1226732 = cljs.core._EQ_.call(null,last_key__1226729,37);
if(and__3822__auto____1226732)
{return cljs.core.not.call(null,eviltetris.core.collides_QMARK_.call(null,board,eviltetris.core.move_left.call(null,piece)));
} else
{return and__3822__auto____1226732;
}
})())
{return eviltetris.core.next_tick.call(null,ctx,board,eviltetris.core.move_left.call(null,piece),previous_tick);
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
var canvas__1226737 = document.getElementById("canvas");
var ctx__1226738 = canvas__1226737.getContext("2d");
var board__1226739 = eviltetris.core.create_board.call(null);
var handler__1226740 = (new goog.events.KeyHandler(document,true));
goog.events.listen(handler__1226740,"key",eviltetris.core.keypress);
return eviltetris.core.main_loop.call(null,ctx__1226738,board__1226739);
});
goog.exportSymbol('eviltetris.core.init', eviltetris.core.init);
