goog.provide('eviltetris.core');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
eviltetris.core.load_image = (function load_image(file){
var image__2366386 = (new Image());
image__2366386.src = [cljs.core.str("images/"),cljs.core.str(file)].join('');
return image__2366386;
});
eviltetris.core.images = cljs.core.ObjMap.fromObject(["\uFDD0'blue","\uFDD0'cyan","\uFDD0'green","\uFDD0'magenta","\uFDD0'orange","\uFDD0'red","\uFDD0'yellow"],{"\uFDD0'blue":eviltetris.core.load_image.call(null,"blue.png"),"\uFDD0'cyan":eviltetris.core.load_image.call(null,"cyan.png"),"\uFDD0'green":eviltetris.core.load_image.call(null,"green.png"),"\uFDD0'magenta":eviltetris.core.load_image.call(null,"magenta.png"),"\uFDD0'orange":eviltetris.core.load_image.call(null,"orange.png"),"\uFDD0'red":eviltetris.core.load_image.call(null,"red.png"),"\uFDD0'yellow":eviltetris.core.load_image.call(null,"yellow.png")});
eviltetris.core.shapes = cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,0,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([0,2,"\uFDD0'cyan"], true),cljs.core.PersistentVector.fromArray([0,3,"\uFDD0'cyan"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,0,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'blue"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'blue"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'orange"], true),cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'orange"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,0,"\uFDD0'yellow"], true),cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'yellow"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'yellow"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'yellow"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'green"], true),cljs.core.PersistentVector.fromArray([2,0,"\uFDD0'green"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,0,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'red"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'red"], true)], true),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([0,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([1,1,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([1,0,"\uFDD0'magenta"], true),cljs.core.PersistentVector.fromArray([2,1,"\uFDD0'magenta"], true)], true)], true);
eviltetris.core.fill_rect = (function fill_rect(ctx,x,y,sx,sy,color){
ctx.fillStyle = color;
return ctx.fillRect(x,y,sx,sy);
});
eviltetris.core.paint_block = (function paint_block(ctx,x,y,color){
return ctx.drawImage(eviltetris.core.images.call(null,color),(x * 24),(y * 24));
});
eviltetris.core.paint_board = (function paint_board(ctx,board){
eviltetris.core.fill_rect.call(null,ctx,0,0,320,480,"black");
return cljs.core.dorun.call(null,(function (){var iter__2464__auto____2366444 = (function iter__2366416(s__2366417){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2366417__2366432 = s__2366417;
while(true){
if(cljs.core.seq.call(null,s__2366417__2366432))
{var x__2366433 = cljs.core.first.call(null,s__2366417__2366432);
var iterys__2462__auto____2366442 = ((function (s__2366417__2366432,x__2366433){
return (function iter__2366418(s__2366419){
return (new cljs.core.LazySeq(null,false,((function (s__2366417__2366432,x__2366433){
return (function (){
var s__2366419__2366438 = s__2366419;
while(true){
if(cljs.core.seq.call(null,s__2366419__2366438))
{var y__2366439 = cljs.core.first.call(null,s__2366419__2366438);
return cljs.core.cons.call(null,(function (){var temp__3974__auto____2366440 = board.call(null,y__2366439).call(null,x__2366433);
if(cljs.core.truth_(temp__3974__auto____2366440))
{var color__2366441 = temp__3974__auto____2366440;
return eviltetris.core.paint_block.call(null,ctx,x__2366433,y__2366439,color__2366441);
} else
{return null;
}
})(),iter__2366418.call(null,cljs.core.rest.call(null,s__2366419__2366438)));
} else
{return null;
}
break;
}
});})(s__2366417__2366432,x__2366433))
,null));
});})(s__2366417__2366432,x__2366433))
;
var fs__2463__auto____2366443 = cljs.core.seq.call(null,iterys__2462__auto____2366442.call(null,cljs.core.range.call(null,20)));
if(fs__2463__auto____2366443)
{return cljs.core.concat.call(null,fs__2463__auto____2366443,iter__2366416.call(null,cljs.core.rest.call(null,s__2366417__2366432)));
} else
{{
var G__2366445 = cljs.core.rest.call(null,s__2366417__2366432);
s__2366417__2366432 = G__2366445;
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
return iter__2464__auto____2366444.call(null,cljs.core.range.call(null,10));
})());
});
eviltetris.core.patch_board = (function patch_board(board,color,x,y){
return cljs.core.assoc.call(null,board,y,cljs.core.assoc.call(null,board.call(null,y),x,color));
});
eviltetris.core.test_pattern = (function test_pattern(board){
return eviltetris.core.patch_board.call(null,board,cljs.core.rand_nth.call(null,cljs.core.keys.call(null,eviltetris.core.images)),cljs.core.rand_int.call(null,10),cljs.core.rand_int.call(null,20));
});
eviltetris.core.overlay = (function overlay(board,piece){
var vec__2366456__2366457 = piece;
var px__2366458 = cljs.core.nth.call(null,vec__2366456__2366457,0,null);
var py__2366459 = cljs.core.nth.call(null,vec__2366456__2366457,1,null);
var shape__2366460 = cljs.core.nth.call(null,vec__2366456__2366457,2,null);
return cljs.core.apply.call(null,cljs.core.comp,cljs.core.map.call(null,(function (dot){
var vec__2366461__2366462 = dot;
var dx__2366463 = cljs.core.nth.call(null,vec__2366461__2366462,0,null);
var dy__2366464 = cljs.core.nth.call(null,vec__2366461__2366462,1,null);
var dcolor__2366465 = cljs.core.nth.call(null,vec__2366461__2366462,2,null);
return (function (board){
return eviltetris.core.patch_board.call(null,board,dcolor__2366465,(px__2366458 + dx__2366463),(py__2366459 + dy__2366464));
});
}),shape__2366460)).call(null,board);
});
eviltetris.core.collides_QMARK_ = (function collides_QMARK_(board,piece){
var vec__2366482__2366483 = piece;
var px__2366484 = cljs.core.nth.call(null,vec__2366482__2366483,0,null);
var py__2366485 = cljs.core.nth.call(null,vec__2366482__2366483,1,null);
var shape__2366486 = cljs.core.nth.call(null,vec__2366482__2366483,2,null);
return cljs.core.some.call(null,cljs.core.false_QMARK_,cljs.core.map.call(null,(function (dot){
var vec__2366487__2366488 = dot;
var dx__2366489 = cljs.core.nth.call(null,vec__2366487__2366488,0,null);
var dy__2366490 = cljs.core.nth.call(null,vec__2366487__2366488,1,null);
var ___2366491 = cljs.core.nth.call(null,vec__2366487__2366488,2,null);
var fx__2366492 = (dx__2366489 + px__2366484);
var fy__2366493 = (dy__2366490 + py__2366485);
var and__3822__auto____2366495 = (function (){var and__3822__auto____2366494 = (0 < fx__2366492);
if(and__3822__auto____2366494)
{return (fx__2366492 < 10);
} else
{return and__3822__auto____2366494;
}
})();
if(cljs.core.truth_(and__3822__auto____2366495))
{var and__3822__auto____2366497 = (function (){var and__3822__auto____2366496 = (0 < fy__2366493);
if(and__3822__auto____2366496)
{return (fy__2366493 < 20);
} else
{return and__3822__auto____2366496;
}
})();
if(cljs.core.truth_(and__3822__auto____2366497))
{return (board.call(null,fy__2366493).call(null,fx__2366492) == null);
} else
{return and__3822__auto____2366497;
}
} else
{return and__3822__auto____2366495;
}
}),shape__2366486));
});
eviltetris.core.rotate_shape = (function rotate_shape(shape){
return cljs.core.mapv.call(null,(function (s){
var vec__2366503__2366504 = s;
var x__2366505 = cljs.core.nth.call(null,vec__2366503__2366504,0,null);
var y__2366506 = cljs.core.nth.call(null,vec__2366503__2366504,1,null);
var color__2366507 = cljs.core.nth.call(null,vec__2366503__2366504,2,null);
return cljs.core.PersistentVector.fromArray([y__2366506,x__2366505,color__2366507], true);
}),shape);
});
eviltetris.core.tick = (function tick(){
return (new Date()).getTime();
});
eviltetris.core.move_down = (function move_down(piece){
return cljs.core.assoc.call(null,piece,1,(cljs.core.second.call(null,piece) + 1));
});
eviltetris.core.get_next_piece = (function get_next_piece(){
return cljs.core.PersistentVector.fromArray([3,0,cljs.core.rand_nth.call(null,eviltetris.core.shapes)], true);
});
eviltetris.core.next_tick = (function next_tick(ctx,board,piece,tick){
return setTimeout((function (){
return eviltetris.core.main_loop.call(null,ctx,board,eviltetris.core.move_down.call(null,piece),tick);
}),250);
});
eviltetris.core.main_loop = (function() {
var main_loop = null;
var main_loop__2 = (function (ctx,board){
return main_loop.call(null,ctx,board,eviltetris.core.get_next_piece.call(null),eviltetris.core.tick.call(null));
});
var main_loop__4 = (function (ctx,board,piece,previous_tick){
eviltetris.core.paint_board.call(null,ctx,eviltetris.core.overlay.call(null,board,piece));
if(cljs.core.truth_(eviltetris.core.collides_QMARK_.call(null,board,eviltetris.core.move_down.call(null,piece))))
{return eviltetris.core.next_tick.call(null,ctx,eviltetris.core.overlay.call(null,board,piece),eviltetris.core.get_next_piece.call(null),eviltetris.core.tick.call(null));
} else
{return eviltetris.core.next_tick.call(null,ctx,board,eviltetris.core.move_down.call(null,piece),eviltetris.core.tick.call(null));
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
var canvas__2366511 = document.getElementById("canvas");
var ctx__2366512 = canvas__2366511.getContext("2d");
var board__2366513 = eviltetris.core.create_board.call(null);
return eviltetris.core.main_loop.call(null,ctx__2366512,board__2366513);
});
goog.exportSymbol('eviltetris.core.init', eviltetris.core.init);
