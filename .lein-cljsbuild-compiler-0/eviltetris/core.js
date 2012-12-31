goog.provide('eviltetris.core');
goog.require('cljs.core');
goog.require('goog.events.KeyHandler');
goog.require('goog.events');
goog.require('clojure.browser.repl');
clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
eviltetris.core.load_image = (function load_image(file){
var image__193513 = (new Image());
image__193513.src = [cljs.core.str("images/"),cljs.core.str(file)].join('');
return image__193513;
});
eviltetris.core.images = cljs.core.ObjMap.fromObject(["\uFDD0'blue","\uFDD0'cyan","\uFDD0'green","\uFDD0'magenta","\uFDD0'orange","\uFDD0'red","\uFDD0'yellow"],{"\uFDD0'blue":eviltetris.core.load_image.call(null,"blue.png"),"\uFDD0'cyan":eviltetris.core.load_image.call(null,"cyan.png"),"\uFDD0'green":eviltetris.core.load_image.call(null,"green.png"),"\uFDD0'magenta":eviltetris.core.load_image.call(null,"magenta.png"),"\uFDD0'orange":eviltetris.core.load_image.call(null,"orange.png"),"\uFDD0'red":eviltetris.core.load_image.call(null,"red.png"),"\uFDD0'yellow":eviltetris.core.load_image.call(null,"yellow.png")});
eviltetris.core.shapes = cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,0,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([0,2,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([0,3,"\uFDD0'cyan"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,0,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'blue"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'orange"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,0,"\uFDD0'yellow"], true),cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'yellow"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'yellow"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'yellow"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'green"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,0,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'red"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'magenta"], true)], true)], true);
eviltetris.core._STAR_last_key_pressed_STAR_ = null;
eviltetris.core.keypress = (function keypress(event){
var key__193515 = event.keyCode;
eviltetris.core._STAR_last_key_pressed_STAR_ = key__193515;
event.preventDefault();
return event.stopPropagation();
});
eviltetris.core.consume_keypress = (function consume_keypress(){
var lastkey__193517 = eviltetris.core._STAR_last_key_pressed_STAR_;
eviltetris.core._STAR_last_key_pressed_STAR_ = null;
return lastkey__193517;
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
return cljs.core.dorun.call(null,(function (){var iter__2464__auto____193575 = (function iter__193547(s__193548){
return (new cljs.core.LazySeq(null,false,(function (){
var s__193548__193563 = s__193548;
while(true){
if(cljs.core.seq.call(null,s__193548__193563))
{var x__193564 = cljs.core.first.call(null,s__193548__193563);
var iterys__2462__auto____193573 = ((function (s__193548__193563,x__193564){
return (function iter__193549(s__193550){
return (new cljs.core.LazySeq(null,false,((function (s__193548__193563,x__193564){
return (function (){
var s__193550__193569 = s__193550;
while(true){
if(cljs.core.seq.call(null,s__193550__193569))
{var y__193570 = cljs.core.first.call(null,s__193550__193569);
return cljs.core.cons.call(null,(function (){var temp__3974__auto____193571 = board.call(null,y__193570).call(null,x__193564);
if(cljs.core.truth_(temp__3974__auto____193571))
{var color__193572 = temp__3974__auto____193571;
return eviltetris.core.paint_block.call(null,ctx,x__193564,y__193570,color__193572);
} else
{return null;
}
})(),iter__193549.call(null,cljs.core.rest.call(null,s__193550__193569)));
} else
{return null;
}
break;
}
});})(s__193548__193563,x__193564))
,null));
});})(s__193548__193563,x__193564))
;
var fs__2463__auto____193574 = cljs.core.seq.call(null,iterys__2462__auto____193573.call(null,cljs.core.range.call(null,20)));
if(fs__2463__auto____193574)
{return cljs.core.concat.call(null,fs__2463__auto____193574,iter__193547.call(null,cljs.core.rest.call(null,s__193548__193563)));
} else
{{
var G__193576 = cljs.core.rest.call(null,s__193548__193563);
s__193548__193563 = G__193576;
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
return iter__2464__auto____193575.call(null,cljs.core.range.call(null,10));
})());
});
eviltetris.core.patch_board = (function patch_board(board,color,x,y){
return cljs.core.assoc.call(null,board,y,cljs.core.assoc.call(null,board.call(null,y),x,color));
});
eviltetris.core.test_pattern = (function test_pattern(board){
return eviltetris.core.patch_board.call(null,board,cljs.core.rand_nth.call(null,cljs.core.keys.call(null,eviltetris.core.images)),cljs.core.rand_int.call(null,10),cljs.core.rand_int.call(null,20));
});
eviltetris.core.overlay = (function overlay(board,piece){
var vec__193587__193588 = piece;
var px__193589 = cljs.core.nth.call(null,vec__193587__193588,0,null);
var py__193590 = cljs.core.nth.call(null,vec__193587__193588,1,null);
var shape__193591 = cljs.core.nth.call(null,vec__193587__193588,2,null);
return cljs.core.apply.call(null,cljs.core.comp,cljs.core.map.call(null,(function (dot){
var vec__193592__193593 = dot;
var dx__193594 = cljs.core.nth.call(null,vec__193592__193593,0,null);
var dy__193595 = cljs.core.nth.call(null,vec__193592__193593,1,null);
var dcolor__193596 = cljs.core.nth.call(null,vec__193592__193593,2,null);
return (function (board){
return eviltetris.core.patch_board.call(null,board,dcolor__193596,(px__193589 + dx__193594),(py__193590 + dy__193595));
});
}),shape__193591)).call(null,board);
});
eviltetris.core.collides_QMARK_ = (function collides_QMARK_(board,piece){
var vec__193613__193614 = piece;
var px__193615 = cljs.core.nth.call(null,vec__193613__193614,0,null);
var py__193616 = cljs.core.nth.call(null,vec__193613__193614,1,null);
var shape__193617 = cljs.core.nth.call(null,vec__193613__193614,2,null);
return cljs.core.some.call(null,cljs.core.false_QMARK_,cljs.core.map.call(null,(function (dot){
var vec__193618__193619 = dot;
var dx__193620 = cljs.core.nth.call(null,vec__193618__193619,0,null);
var dy__193621 = cljs.core.nth.call(null,vec__193618__193619,1,null);
var ___193622 = cljs.core.nth.call(null,vec__193618__193619,2,null);
var fx__193623 = (dx__193620 + px__193615);
var fy__193624 = (dy__193621 + py__193616);
var and__3822__auto____193626 = (function (){var and__3822__auto____193625 = (-1 < fx__193623);
if(and__3822__auto____193625)
{return (fx__193623 < 10);
} else
{return and__3822__auto____193625;
}
})();
if(cljs.core.truth_(and__3822__auto____193626))
{var and__3822__auto____193628 = (function (){var and__3822__auto____193627 = (-1 < fy__193624);
if(and__3822__auto____193627)
{return (fy__193624 < 20);
} else
{return and__3822__auto____193627;
}
})();
if(cljs.core.truth_(and__3822__auto____193628))
{return (board.call(null,fy__193624).call(null,fx__193623) == null);
} else
{return and__3822__auto____193628;
}
} else
{return and__3822__auto____193626;
}
}),shape__193617));
});
eviltetris.core.rotate_shape = (function rotate_shape(shape){
return cljs.core.mapv.call(null,(function (s){
var vec__193634__193635 = s;
var x__193636 = cljs.core.nth.call(null,vec__193634__193635,0,null);
var y__193637 = cljs.core.nth.call(null,vec__193634__193635,1,null);
var color__193638 = cljs.core.nth.call(null,vec__193634__193635,2,null);
return cljs.core.PersistentVector.fromArray([y__193637,x__193636,color__193638], true);
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
