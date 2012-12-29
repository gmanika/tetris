goog.provide('cljs.core');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.string.format');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var x__6362 = (((x == null))?null:x);
if((p[goog.typeOf(x__6362)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error(["No protocol method ",proto," defined for type ",goog.typeOf(obj),": ",obj].join(""));
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return array_like.slice();
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return (new Array(size));
});
var make_array__2 = (function (type,size){
return make_array.call(null,size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw('Invalid arity: ' + arguments.length);
};
make_array.cljs$lang$arity$1 = make_array__1;
make_array.cljs$lang$arity$2 = make_array__2;
return make_array;
})()
;
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__6363__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__6363 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6363__delegate.call(this, array, i, idxs);
};
G__6363.cljs$lang$maxFixedArity = 2;
G__6363.cljs$lang$applyTo = (function (arglist__6364){
var array = cljs.core.first(arglist__6364);
var i = cljs.core.first(cljs.core.next(arglist__6364));
var idxs = cljs.core.rest(cljs.core.next(arglist__6364));
return G__6363__delegate(array, i, idxs);
});
G__6363.cljs$lang$arity$variadic = G__6363__delegate;
return G__6363;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$lang$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$lang$arity$2 = aget__2;
aget.cljs$lang$arity$variadic = aget__3.cljs$lang$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.call(null,null,aseq);
});
var into_array__2 = (function (type,aseq){
return cljs.core.reduce.call(null,(function (a,x){
a.push(x);
return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw('Invalid arity: ' + arguments.length);
};
into_array.cljs$lang$arity$1 = into_array__1;
into_array.cljs$lang$arity$2 = into_array__2;
return into_array;
})()
;
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3822__auto____6449 = this$;
if(and__3822__auto____6449)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____6449;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2452__auto____6450 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6451 = (cljs.core._invoke[goog.typeOf(x__2452__auto____6450)]);
if(or__3824__auto____6451)
{return or__3824__auto____6451;
} else
{var or__3824__auto____6452 = (cljs.core._invoke["_"]);
if(or__3824__auto____6452)
{return or__3824__auto____6452;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____6453 = this$;
if(and__3822__auto____6453)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____6453;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__2452__auto____6454 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6455 = (cljs.core._invoke[goog.typeOf(x__2452__auto____6454)]);
if(or__3824__auto____6455)
{return or__3824__auto____6455;
} else
{var or__3824__auto____6456 = (cljs.core._invoke["_"]);
if(or__3824__auto____6456)
{return or__3824__auto____6456;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____6457 = this$;
if(and__3822__auto____6457)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____6457;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__2452__auto____6458 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6459 = (cljs.core._invoke[goog.typeOf(x__2452__auto____6458)]);
if(or__3824__auto____6459)
{return or__3824__auto____6459;
} else
{var or__3824__auto____6460 = (cljs.core._invoke["_"]);
if(or__3824__auto____6460)
{return or__3824__auto____6460;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____6461 = this$;
if(and__3822__auto____6461)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____6461;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__2452__auto____6462 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6463 = (cljs.core._invoke[goog.typeOf(x__2452__auto____6462)]);
if(or__3824__auto____6463)
{return or__3824__auto____6463;
} else
{var or__3824__auto____6464 = (cljs.core._invoke["_"]);
if(or__3824__auto____6464)
{return or__3824__auto____6464;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____6465 = this$;
if(and__3822__auto____6465)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____6465;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__2452__auto____6466 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6467 = (cljs.core._invoke[goog.typeOf(x__2452__auto____6466)]);
if(or__3824__auto____6467)
{return or__3824__auto____6467;
} else
{var or__3824__auto____6468 = (cljs.core._invoke["_"]);
if(or__3824__auto____6468)
{return or__3824__auto____6468;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____6469 = this$;
if(and__3822__auto____6469)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____6469;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__2452__auto____6470 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6471 = (cljs.core._invoke[goog.typeOf(x__2452__auto____6470)]);
if(or__3824__auto____6471)
{return or__3824__auto____6471;
} else
{var or__3824__auto____6472 = (cljs.core._invoke["_"]);
if(or__3824__auto____6472)
{return or__3824__auto____6472;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____6473 = this$;
if(and__3822__auto____6473)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____6473;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__2452__auto____6474 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6475 = (cljs.core._invoke[goog.typeOf(x__2452__auto____6474)]);
if(or__3824__auto____6475)
{return or__3824__auto____6475;
} else
{var or__3824__auto____6476 = (cljs.core._invoke["_"]);
if(or__3824__auto____6476)
{return or__3824__auto____6476;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____6477 = this$;
if(and__3822__auto____6477)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____6477;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__2452__auto____6478 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6479 = (cljs.core._invoke[goog.typeOf(x__2452__auto____6478)]);
if(or__3824__auto____6479)
{return or__3824__auto____6479;
} else
{var or__3824__auto____6480 = (cljs.core._invoke["_"]);
if(or__3824__auto____6480)
{return or__3824__auto____6480;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____6481 = this$;
if(and__3822__auto____6481)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____6481;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__2452__auto____6482 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6483 = (cljs.core._invoke[goog.typeOf(x__2452__auto____6482)]);
if(or__3824__auto____6483)
{return or__3824__auto____6483;
} else
{var or__3824__auto____6484 = (cljs.core._invoke["_"]);
if(or__3824__auto____6484)
{return or__3824__auto____6484;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____6485 = this$;
if(and__3822__auto____6485)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____6485;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__2452__auto____6486 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6487 = (cljs.core._invoke[goog.typeOf(x__2452__auto____6486)]);
if(or__3824__auto____6487)
{return or__3824__auto____6487;
} else
{var or__3824__auto____6488 = (cljs.core._invoke["_"]);
if(or__3824__auto____6488)
{return or__3824__auto____6488;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____6489 = this$;
if(and__3822__auto____6489)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____6489;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__2452__auto____6490 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6491 = (cljs.core._invoke[goog.typeOf(x__2452__auto____6490)]);
if(or__3824__auto____6491)
{return or__3824__auto____6491;
} else
{var or__3824__auto____6492 = (cljs.core._invoke["_"]);
if(or__3824__auto____6492)
{return or__3824__auto____6492;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____6493 = this$;
if(and__3822__auto____6493)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____6493;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__2452__auto____6494 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6495 = (cljs.core._invoke[goog.typeOf(x__2452__auto____6494)]);
if(or__3824__auto____6495)
{return or__3824__auto____6495;
} else
{var or__3824__auto____6496 = (cljs.core._invoke["_"]);
if(or__3824__auto____6496)
{return or__3824__auto____6496;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____6497 = this$;
if(and__3822__auto____6497)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____6497;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__2452__auto____6498 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6499 = (cljs.core._invoke[goog.typeOf(x__2452__auto____6498)]);
if(or__3824__auto____6499)
{return or__3824__auto____6499;
} else
{var or__3824__auto____6500 = (cljs.core._invoke["_"]);
if(or__3824__auto____6500)
{return or__3824__auto____6500;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____6501 = this$;
if(and__3822__auto____6501)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____6501;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__2452__auto____6502 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6503 = (cljs.core._invoke[goog.typeOf(x__2452__auto____6502)]);
if(or__3824__auto____6503)
{return or__3824__auto____6503;
} else
{var or__3824__auto____6504 = (cljs.core._invoke["_"]);
if(or__3824__auto____6504)
{return or__3824__auto____6504;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____6505 = this$;
if(and__3822__auto____6505)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____6505;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__2452__auto____6506 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6507 = (cljs.core._invoke[goog.typeOf(x__2452__auto____6506)]);
if(or__3824__auto____6507)
{return or__3824__auto____6507;
} else
{var or__3824__auto____6508 = (cljs.core._invoke["_"]);
if(or__3824__auto____6508)
{return or__3824__auto____6508;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____6509 = this$;
if(and__3822__auto____6509)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____6509;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__2452__auto____6510 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6511 = (cljs.core._invoke[goog.typeOf(x__2452__auto____6510)]);
if(or__3824__auto____6511)
{return or__3824__auto____6511;
} else
{var or__3824__auto____6512 = (cljs.core._invoke["_"]);
if(or__3824__auto____6512)
{return or__3824__auto____6512;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____6513 = this$;
if(and__3822__auto____6513)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____6513;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__2452__auto____6514 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6515 = (cljs.core._invoke[goog.typeOf(x__2452__auto____6514)]);
if(or__3824__auto____6515)
{return or__3824__auto____6515;
} else
{var or__3824__auto____6516 = (cljs.core._invoke["_"]);
if(or__3824__auto____6516)
{return or__3824__auto____6516;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____6517 = this$;
if(and__3822__auto____6517)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____6517;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__2452__auto____6518 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6519 = (cljs.core._invoke[goog.typeOf(x__2452__auto____6518)]);
if(or__3824__auto____6519)
{return or__3824__auto____6519;
} else
{var or__3824__auto____6520 = (cljs.core._invoke["_"]);
if(or__3824__auto____6520)
{return or__3824__auto____6520;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____6521 = this$;
if(and__3822__auto____6521)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____6521;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__2452__auto____6522 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6523 = (cljs.core._invoke[goog.typeOf(x__2452__auto____6522)]);
if(or__3824__auto____6523)
{return or__3824__auto____6523;
} else
{var or__3824__auto____6524 = (cljs.core._invoke["_"]);
if(or__3824__auto____6524)
{return or__3824__auto____6524;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____6525 = this$;
if(and__3822__auto____6525)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____6525;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__2452__auto____6526 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6527 = (cljs.core._invoke[goog.typeOf(x__2452__auto____6526)]);
if(or__3824__auto____6527)
{return or__3824__auto____6527;
} else
{var or__3824__auto____6528 = (cljs.core._invoke["_"]);
if(or__3824__auto____6528)
{return or__3824__auto____6528;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____6529 = this$;
if(and__3822__auto____6529)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____6529;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__2452__auto____6530 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6531 = (cljs.core._invoke[goog.typeOf(x__2452__auto____6530)]);
if(or__3824__auto____6531)
{return or__3824__auto____6531;
} else
{var or__3824__auto____6532 = (cljs.core._invoke["_"]);
if(or__3824__auto____6532)
{return or__3824__auto____6532;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
_invoke.cljs$lang$arity$1 = _invoke__1;
_invoke.cljs$lang$arity$2 = _invoke__2;
_invoke.cljs$lang$arity$3 = _invoke__3;
_invoke.cljs$lang$arity$4 = _invoke__4;
_invoke.cljs$lang$arity$5 = _invoke__5;
_invoke.cljs$lang$arity$6 = _invoke__6;
_invoke.cljs$lang$arity$7 = _invoke__7;
_invoke.cljs$lang$arity$8 = _invoke__8;
_invoke.cljs$lang$arity$9 = _invoke__9;
_invoke.cljs$lang$arity$10 = _invoke__10;
_invoke.cljs$lang$arity$11 = _invoke__11;
_invoke.cljs$lang$arity$12 = _invoke__12;
_invoke.cljs$lang$arity$13 = _invoke__13;
_invoke.cljs$lang$arity$14 = _invoke__14;
_invoke.cljs$lang$arity$15 = _invoke__15;
_invoke.cljs$lang$arity$16 = _invoke__16;
_invoke.cljs$lang$arity$17 = _invoke__17;
_invoke.cljs$lang$arity$18 = _invoke__18;
_invoke.cljs$lang$arity$19 = _invoke__19;
_invoke.cljs$lang$arity$20 = _invoke__20;
_invoke.cljs$lang$arity$21 = _invoke__21;
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if((function (){var and__3822__auto____6537 = coll;
if(and__3822__auto____6537)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____6537;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2452__auto____6538 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6539 = (cljs.core._count[goog.typeOf(x__2452__auto____6538)]);
if(or__3824__auto____6539)
{return or__3824__auto____6539;
} else
{var or__3824__auto____6540 = (cljs.core._count["_"]);
if(or__3824__auto____6540)
{return or__3824__auto____6540;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____6545 = coll;
if(and__3822__auto____6545)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____6545;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2452__auto____6546 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6547 = (cljs.core._empty[goog.typeOf(x__2452__auto____6546)]);
if(or__3824__auto____6547)
{return or__3824__auto____6547;
} else
{var or__3824__auto____6548 = (cljs.core._empty["_"]);
if(or__3824__auto____6548)
{return or__3824__auto____6548;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____6553 = coll;
if(and__3822__auto____6553)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____6553;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2452__auto____6554 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6555 = (cljs.core._conj[goog.typeOf(x__2452__auto____6554)]);
if(or__3824__auto____6555)
{return or__3824__auto____6555;
} else
{var or__3824__auto____6556 = (cljs.core._conj["_"]);
if(or__3824__auto____6556)
{return or__3824__auto____6556;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3822__auto____6565 = coll;
if(and__3822__auto____6565)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____6565;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2452__auto____6566 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6567 = (cljs.core._nth[goog.typeOf(x__2452__auto____6566)]);
if(or__3824__auto____6567)
{return or__3824__auto____6567;
} else
{var or__3824__auto____6568 = (cljs.core._nth["_"]);
if(or__3824__auto____6568)
{return or__3824__auto____6568;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____6569 = coll;
if(and__3822__auto____6569)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____6569;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__2452__auto____6570 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6571 = (cljs.core._nth[goog.typeOf(x__2452__auto____6570)]);
if(or__3824__auto____6571)
{return or__3824__auto____6571;
} else
{var or__3824__auto____6572 = (cljs.core._nth["_"]);
if(or__3824__auto____6572)
{return or__3824__auto____6572;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_nth.cljs$lang$arity$2 = _nth__2;
_nth.cljs$lang$arity$3 = _nth__3;
return _nth;
})()
;
cljs.core.ASeq = {};
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if((function (){var and__3822__auto____6577 = coll;
if(and__3822__auto____6577)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____6577;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2452__auto____6578 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6579 = (cljs.core._first[goog.typeOf(x__2452__auto____6578)]);
if(or__3824__auto____6579)
{return or__3824__auto____6579;
} else
{var or__3824__auto____6580 = (cljs.core._first["_"]);
if(or__3824__auto____6580)
{return or__3824__auto____6580;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____6585 = coll;
if(and__3822__auto____6585)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____6585;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2452__auto____6586 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6587 = (cljs.core._rest[goog.typeOf(x__2452__auto____6586)]);
if(or__3824__auto____6587)
{return or__3824__auto____6587;
} else
{var or__3824__auto____6588 = (cljs.core._rest["_"]);
if(or__3824__auto____6588)
{return or__3824__auto____6588;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____6593 = coll;
if(and__3822__auto____6593)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____6593;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2452__auto____6594 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6595 = (cljs.core._next[goog.typeOf(x__2452__auto____6594)]);
if(or__3824__auto____6595)
{return or__3824__auto____6595;
} else
{var or__3824__auto____6596 = (cljs.core._next["_"]);
if(or__3824__auto____6596)
{return or__3824__auto____6596;
} else
{throw cljs.core.missing_protocol.call(null,"INext.-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3822__auto____6605 = o;
if(and__3822__auto____6605)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____6605;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2452__auto____6606 = (((o == null))?null:o);
return (function (){var or__3824__auto____6607 = (cljs.core._lookup[goog.typeOf(x__2452__auto____6606)]);
if(or__3824__auto____6607)
{return or__3824__auto____6607;
} else
{var or__3824__auto____6608 = (cljs.core._lookup["_"]);
if(or__3824__auto____6608)
{return or__3824__auto____6608;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____6609 = o;
if(and__3822__auto____6609)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____6609;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__2452__auto____6610 = (((o == null))?null:o);
return (function (){var or__3824__auto____6611 = (cljs.core._lookup[goog.typeOf(x__2452__auto____6610)]);
if(or__3824__auto____6611)
{return or__3824__auto____6611;
} else
{var or__3824__auto____6612 = (cljs.core._lookup["_"]);
if(or__3824__auto____6612)
{return or__3824__auto____6612;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_lookup.cljs$lang$arity$2 = _lookup__2;
_lookup.cljs$lang$arity$3 = _lookup__3;
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3822__auto____6617 = coll;
if(and__3822__auto____6617)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____6617;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2452__auto____6618 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6619 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__2452__auto____6618)]);
if(or__3824__auto____6619)
{return or__3824__auto____6619;
} else
{var or__3824__auto____6620 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____6620)
{return or__3824__auto____6620;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____6625 = coll;
if(and__3822__auto____6625)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____6625;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2452__auto____6626 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6627 = (cljs.core._assoc[goog.typeOf(x__2452__auto____6626)]);
if(or__3824__auto____6627)
{return or__3824__auto____6627;
} else
{var or__3824__auto____6628 = (cljs.core._assoc["_"]);
if(or__3824__auto____6628)
{return or__3824__auto____6628;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____6633 = coll;
if(and__3822__auto____6633)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____6633;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2452__auto____6634 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6635 = (cljs.core._dissoc[goog.typeOf(x__2452__auto____6634)]);
if(or__3824__auto____6635)
{return or__3824__auto____6635;
} else
{var or__3824__auto____6636 = (cljs.core._dissoc["_"]);
if(or__3824__auto____6636)
{return or__3824__auto____6636;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____6641 = coll;
if(and__3822__auto____6641)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____6641;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2452__auto____6642 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6643 = (cljs.core._key[goog.typeOf(x__2452__auto____6642)]);
if(or__3824__auto____6643)
{return or__3824__auto____6643;
} else
{var or__3824__auto____6644 = (cljs.core._key["_"]);
if(or__3824__auto____6644)
{return or__3824__auto____6644;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____6649 = coll;
if(and__3822__auto____6649)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____6649;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2452__auto____6650 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6651 = (cljs.core._val[goog.typeOf(x__2452__auto____6650)]);
if(or__3824__auto____6651)
{return or__3824__auto____6651;
} else
{var or__3824__auto____6652 = (cljs.core._val["_"]);
if(or__3824__auto____6652)
{return or__3824__auto____6652;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____6657 = coll;
if(and__3822__auto____6657)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____6657;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2452__auto____6658 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6659 = (cljs.core._disjoin[goog.typeOf(x__2452__auto____6658)]);
if(or__3824__auto____6659)
{return or__3824__auto____6659;
} else
{var or__3824__auto____6660 = (cljs.core._disjoin["_"]);
if(or__3824__auto____6660)
{return or__3824__auto____6660;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____6665 = coll;
if(and__3822__auto____6665)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____6665;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2452__auto____6666 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6667 = (cljs.core._peek[goog.typeOf(x__2452__auto____6666)]);
if(or__3824__auto____6667)
{return or__3824__auto____6667;
} else
{var or__3824__auto____6668 = (cljs.core._peek["_"]);
if(or__3824__auto____6668)
{return or__3824__auto____6668;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____6673 = coll;
if(and__3822__auto____6673)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____6673;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2452__auto____6674 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6675 = (cljs.core._pop[goog.typeOf(x__2452__auto____6674)]);
if(or__3824__auto____6675)
{return or__3824__auto____6675;
} else
{var or__3824__auto____6676 = (cljs.core._pop["_"]);
if(or__3824__auto____6676)
{return or__3824__auto____6676;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____6681 = coll;
if(and__3822__auto____6681)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____6681;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2452__auto____6682 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6683 = (cljs.core._assoc_n[goog.typeOf(x__2452__auto____6682)]);
if(or__3824__auto____6683)
{return or__3824__auto____6683;
} else
{var or__3824__auto____6684 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____6684)
{return or__3824__auto____6684;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____6689 = o;
if(and__3822__auto____6689)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____6689;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2452__auto____6690 = (((o == null))?null:o);
return (function (){var or__3824__auto____6691 = (cljs.core._deref[goog.typeOf(x__2452__auto____6690)]);
if(or__3824__auto____6691)
{return or__3824__auto____6691;
} else
{var or__3824__auto____6692 = (cljs.core._deref["_"]);
if(or__3824__auto____6692)
{return or__3824__auto____6692;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____6697 = o;
if(and__3822__auto____6697)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____6697;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2452__auto____6698 = (((o == null))?null:o);
return (function (){var or__3824__auto____6699 = (cljs.core._deref_with_timeout[goog.typeOf(x__2452__auto____6698)]);
if(or__3824__auto____6699)
{return or__3824__auto____6699;
} else
{var or__3824__auto____6700 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____6700)
{return or__3824__auto____6700;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____6705 = o;
if(and__3822__auto____6705)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____6705;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2452__auto____6706 = (((o == null))?null:o);
return (function (){var or__3824__auto____6707 = (cljs.core._meta[goog.typeOf(x__2452__auto____6706)]);
if(or__3824__auto____6707)
{return or__3824__auto____6707;
} else
{var or__3824__auto____6708 = (cljs.core._meta["_"]);
if(or__3824__auto____6708)
{return or__3824__auto____6708;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____6713 = o;
if(and__3822__auto____6713)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____6713;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2452__auto____6714 = (((o == null))?null:o);
return (function (){var or__3824__auto____6715 = (cljs.core._with_meta[goog.typeOf(x__2452__auto____6714)]);
if(or__3824__auto____6715)
{return or__3824__auto____6715;
} else
{var or__3824__auto____6716 = (cljs.core._with_meta["_"]);
if(or__3824__auto____6716)
{return or__3824__auto____6716;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3822__auto____6725 = coll;
if(and__3822__auto____6725)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____6725;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2452__auto____6726 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6727 = (cljs.core._reduce[goog.typeOf(x__2452__auto____6726)]);
if(or__3824__auto____6727)
{return or__3824__auto____6727;
} else
{var or__3824__auto____6728 = (cljs.core._reduce["_"]);
if(or__3824__auto____6728)
{return or__3824__auto____6728;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____6729 = coll;
if(and__3822__auto____6729)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____6729;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__2452__auto____6730 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6731 = (cljs.core._reduce[goog.typeOf(x__2452__auto____6730)]);
if(or__3824__auto____6731)
{return or__3824__auto____6731;
} else
{var or__3824__auto____6732 = (cljs.core._reduce["_"]);
if(or__3824__auto____6732)
{return or__3824__auto____6732;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
_reduce.cljs$lang$arity$2 = _reduce__2;
_reduce.cljs$lang$arity$3 = _reduce__3;
return _reduce;
})()
;
cljs.core.IKVReduce = {};
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3822__auto____6737 = coll;
if(and__3822__auto____6737)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____6737;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2452__auto____6738 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6739 = (cljs.core._kv_reduce[goog.typeOf(x__2452__auto____6738)]);
if(or__3824__auto____6739)
{return or__3824__auto____6739;
} else
{var or__3824__auto____6740 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____6740)
{return or__3824__auto____6740;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____6745 = o;
if(and__3822__auto____6745)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____6745;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2452__auto____6746 = (((o == null))?null:o);
return (function (){var or__3824__auto____6747 = (cljs.core._equiv[goog.typeOf(x__2452__auto____6746)]);
if(or__3824__auto____6747)
{return or__3824__auto____6747;
} else
{var or__3824__auto____6748 = (cljs.core._equiv["_"]);
if(or__3824__auto____6748)
{return or__3824__auto____6748;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____6753 = o;
if(and__3822__auto____6753)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____6753;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2452__auto____6754 = (((o == null))?null:o);
return (function (){var or__3824__auto____6755 = (cljs.core._hash[goog.typeOf(x__2452__auto____6754)]);
if(or__3824__auto____6755)
{return or__3824__auto____6755;
} else
{var or__3824__auto____6756 = (cljs.core._hash["_"]);
if(or__3824__auto____6756)
{return or__3824__auto____6756;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____6761 = o;
if(and__3822__auto____6761)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____6761;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2452__auto____6762 = (((o == null))?null:o);
return (function (){var or__3824__auto____6763 = (cljs.core._seq[goog.typeOf(x__2452__auto____6762)]);
if(or__3824__auto____6763)
{return or__3824__auto____6763;
} else
{var or__3824__auto____6764 = (cljs.core._seq["_"]);
if(or__3824__auto____6764)
{return or__3824__auto____6764;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IList = {};
cljs.core.IRecord = {};
cljs.core.IReversible = {};
cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3822__auto____6769 = coll;
if(and__3822__auto____6769)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____6769;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2452__auto____6770 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6771 = (cljs.core._rseq[goog.typeOf(x__2452__auto____6770)]);
if(or__3824__auto____6771)
{return or__3824__auto____6771;
} else
{var or__3824__auto____6772 = (cljs.core._rseq["_"]);
if(or__3824__auto____6772)
{return or__3824__auto____6772;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____6777 = coll;
if(and__3822__auto____6777)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____6777;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2452__auto____6778 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6779 = (cljs.core._sorted_seq[goog.typeOf(x__2452__auto____6778)]);
if(or__3824__auto____6779)
{return or__3824__auto____6779;
} else
{var or__3824__auto____6780 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____6780)
{return or__3824__auto____6780;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____6785 = coll;
if(and__3822__auto____6785)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____6785;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2452__auto____6786 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6787 = (cljs.core._sorted_seq_from[goog.typeOf(x__2452__auto____6786)]);
if(or__3824__auto____6787)
{return or__3824__auto____6787;
} else
{var or__3824__auto____6788 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____6788)
{return or__3824__auto____6788;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____6793 = coll;
if(and__3822__auto____6793)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____6793;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2452__auto____6794 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6795 = (cljs.core._entry_key[goog.typeOf(x__2452__auto____6794)]);
if(or__3824__auto____6795)
{return or__3824__auto____6795;
} else
{var or__3824__auto____6796 = (cljs.core._entry_key["_"]);
if(or__3824__auto____6796)
{return or__3824__auto____6796;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____6801 = coll;
if(and__3822__auto____6801)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____6801;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2452__auto____6802 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6803 = (cljs.core._comparator[goog.typeOf(x__2452__auto____6802)]);
if(or__3824__auto____6803)
{return or__3824__auto____6803;
} else
{var or__3824__auto____6804 = (cljs.core._comparator["_"]);
if(or__3824__auto____6804)
{return or__3824__auto____6804;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____6809 = o;
if(and__3822__auto____6809)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____6809;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2452__auto____6810 = (((o == null))?null:o);
return (function (){var or__3824__auto____6811 = (cljs.core._pr_seq[goog.typeOf(x__2452__auto____6810)]);
if(or__3824__auto____6811)
{return or__3824__auto____6811;
} else
{var or__3824__auto____6812 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____6812)
{return or__3824__auto____6812;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____6817 = d;
if(and__3822__auto____6817)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____6817;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2452__auto____6818 = (((d == null))?null:d);
return (function (){var or__3824__auto____6819 = (cljs.core._realized_QMARK_[goog.typeOf(x__2452__auto____6818)]);
if(or__3824__auto____6819)
{return or__3824__auto____6819;
} else
{var or__3824__auto____6820 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____6820)
{return or__3824__auto____6820;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____6825 = this$;
if(and__3822__auto____6825)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____6825;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2452__auto____6826 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6827 = (cljs.core._notify_watches[goog.typeOf(x__2452__auto____6826)]);
if(or__3824__auto____6827)
{return or__3824__auto____6827;
} else
{var or__3824__auto____6828 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____6828)
{return or__3824__auto____6828;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____6833 = this$;
if(and__3822__auto____6833)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____6833;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2452__auto____6834 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6835 = (cljs.core._add_watch[goog.typeOf(x__2452__auto____6834)]);
if(or__3824__auto____6835)
{return or__3824__auto____6835;
} else
{var or__3824__auto____6836 = (cljs.core._add_watch["_"]);
if(or__3824__auto____6836)
{return or__3824__auto____6836;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____6841 = this$;
if(and__3822__auto____6841)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____6841;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2452__auto____6842 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6843 = (cljs.core._remove_watch[goog.typeOf(x__2452__auto____6842)]);
if(or__3824__auto____6843)
{return or__3824__auto____6843;
} else
{var or__3824__auto____6844 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____6844)
{return or__3824__auto____6844;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____6849 = coll;
if(and__3822__auto____6849)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____6849;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2452__auto____6850 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6851 = (cljs.core._as_transient[goog.typeOf(x__2452__auto____6850)]);
if(or__3824__auto____6851)
{return or__3824__auto____6851;
} else
{var or__3824__auto____6852 = (cljs.core._as_transient["_"]);
if(or__3824__auto____6852)
{return or__3824__auto____6852;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____6857 = tcoll;
if(and__3822__auto____6857)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____6857;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2452__auto____6858 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6859 = (cljs.core._conj_BANG_[goog.typeOf(x__2452__auto____6858)]);
if(or__3824__auto____6859)
{return or__3824__auto____6859;
} else
{var or__3824__auto____6860 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____6860)
{return or__3824__auto____6860;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____6865 = tcoll;
if(and__3822__auto____6865)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____6865;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2452__auto____6866 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6867 = (cljs.core._persistent_BANG_[goog.typeOf(x__2452__auto____6866)]);
if(or__3824__auto____6867)
{return or__3824__auto____6867;
} else
{var or__3824__auto____6868 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____6868)
{return or__3824__auto____6868;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____6873 = tcoll;
if(and__3822__auto____6873)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____6873;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2452__auto____6874 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6875 = (cljs.core._assoc_BANG_[goog.typeOf(x__2452__auto____6874)]);
if(or__3824__auto____6875)
{return or__3824__auto____6875;
} else
{var or__3824__auto____6876 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____6876)
{return or__3824__auto____6876;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____6881 = tcoll;
if(and__3822__auto____6881)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____6881;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2452__auto____6882 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6883 = (cljs.core._dissoc_BANG_[goog.typeOf(x__2452__auto____6882)]);
if(or__3824__auto____6883)
{return or__3824__auto____6883;
} else
{var or__3824__auto____6884 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____6884)
{return or__3824__auto____6884;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____6889 = tcoll;
if(and__3822__auto____6889)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____6889;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2452__auto____6890 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6891 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__2452__auto____6890)]);
if(or__3824__auto____6891)
{return or__3824__auto____6891;
} else
{var or__3824__auto____6892 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____6892)
{return or__3824__auto____6892;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____6897 = tcoll;
if(and__3822__auto____6897)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____6897;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2452__auto____6898 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6899 = (cljs.core._pop_BANG_[goog.typeOf(x__2452__auto____6898)]);
if(or__3824__auto____6899)
{return or__3824__auto____6899;
} else
{var or__3824__auto____6900 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____6900)
{return or__3824__auto____6900;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____6905 = tcoll;
if(and__3822__auto____6905)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____6905;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2452__auto____6906 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6907 = (cljs.core._disjoin_BANG_[goog.typeOf(x__2452__auto____6906)]);
if(or__3824__auto____6907)
{return or__3824__auto____6907;
} else
{var or__3824__auto____6908 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____6908)
{return or__3824__auto____6908;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____6913 = x;
if(and__3822__auto____6913)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____6913;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2452__auto____6914 = (((x == null))?null:x);
return (function (){var or__3824__auto____6915 = (cljs.core._compare[goog.typeOf(x__2452__auto____6914)]);
if(or__3824__auto____6915)
{return or__3824__auto____6915;
} else
{var or__3824__auto____6916 = (cljs.core._compare["_"]);
if(or__3824__auto____6916)
{return or__3824__auto____6916;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____6921 = coll;
if(and__3822__auto____6921)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____6921;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2452__auto____6922 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6923 = (cljs.core._drop_first[goog.typeOf(x__2452__auto____6922)]);
if(or__3824__auto____6923)
{return or__3824__auto____6923;
} else
{var or__3824__auto____6924 = (cljs.core._drop_first["_"]);
if(or__3824__auto____6924)
{return or__3824__auto____6924;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____6929 = coll;
if(and__3822__auto____6929)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____6929;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2452__auto____6930 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6931 = (cljs.core._chunked_first[goog.typeOf(x__2452__auto____6930)]);
if(or__3824__auto____6931)
{return or__3824__auto____6931;
} else
{var or__3824__auto____6932 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____6932)
{return or__3824__auto____6932;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____6937 = coll;
if(and__3822__auto____6937)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____6937;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2452__auto____6938 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6939 = (cljs.core._chunked_rest[goog.typeOf(x__2452__auto____6938)]);
if(or__3824__auto____6939)
{return or__3824__auto____6939;
} else
{var or__3824__auto____6940 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____6940)
{return or__3824__auto____6940;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____6945 = coll;
if(and__3822__auto____6945)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____6945;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2452__auto____6946 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6947 = (cljs.core._chunked_next[goog.typeOf(x__2452__auto____6946)]);
if(or__3824__auto____6947)
{return or__3824__auto____6947;
} else
{var or__3824__auto____6948 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____6948)
{return or__3824__auto____6948;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
var or__3824__auto____6950 = (x === y);
if(or__3824__auto____6950)
{return or__3824__auto____6950;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__6951__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__6952 = y;
var G__6953 = cljs.core.first.call(null,more);
var G__6954 = cljs.core.next.call(null,more);
x = G__6952;
y = G__6953;
more = G__6954;
continue;
}
} else
{return _EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6951 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6951__delegate.call(this, x, y, more);
};
G__6951.cljs$lang$maxFixedArity = 2;
G__6951.cljs$lang$applyTo = (function (arglist__6955){
var x = cljs.core.first(arglist__6955);
var y = cljs.core.first(cljs.core.next(arglist__6955));
var more = cljs.core.rest(cljs.core.next(arglist__6955));
return G__6951__delegate(x, y, more);
});
G__6951.cljs$lang$arity$variadic = G__6951__delegate;
return G__6951;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$lang$arity$1 = _EQ___1;
_EQ_.cljs$lang$arity$2 = _EQ___2;
_EQ_.cljs$lang$arity$variadic = _EQ___3.cljs$lang$arity$variadic;
return _EQ_;
})()
;
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
cljs.core.type = (function type(x){
if((x == null))
{return null;
} else
{return x.constructor;
}
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__6956 = null;
var G__6956__2 = (function (o,k){
return null;
});
var G__6956__3 = (function (o,k,not_found){
return not_found;
});
G__6956 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__6956__2.call(this,o,k);
case 3:
return G__6956__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6956;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.INext["null"] = true);
(cljs.core._next["null"] = (function (_){
return null;
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__6957 = null;
var G__6957__2 = (function (_,f){
return f.call(null);
});
var G__6957__3 = (function (_,f,start){
return start;
});
G__6957 = function(_,f,start){
switch(arguments.length){
case 2:
return G__6957__2.call(this,_,f);
case 3:
return G__6957__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6957;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o == null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__6958 = null;
var G__6958__2 = (function (_,n){
return null;
});
var G__6958__3 = (function (_,n,not_found){
return not_found;
});
G__6958 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__6958__2.call(this,_,n);
case 3:
return G__6958__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6958;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var and__3822__auto____6959 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____6959)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____6959;
}
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
if((o === true))
{return 1;
} else
{return 0;
}
}));
(cljs.core.IHash["_"] = true);
(cljs.core._hash["_"] = (function (o){
return goog.getUid(o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
var cnt__6972 = cljs.core._count.call(null,cicoll);
if((cnt__6972 === 0))
{return f.call(null);
} else
{var val__6973 = cljs.core._nth.call(null,cicoll,0);
var n__6974 = 1;
while(true){
if((n__6974 < cnt__6972))
{var nval__6975 = f.call(null,val__6973,cljs.core._nth.call(null,cicoll,n__6974));
if(cljs.core.reduced_QMARK_.call(null,nval__6975))
{return cljs.core.deref.call(null,nval__6975);
} else
{{
var G__6984 = nval__6975;
var G__6985 = (n__6974 + 1);
val__6973 = G__6984;
n__6974 = G__6985;
continue;
}
}
} else
{return val__6973;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__6976 = cljs.core._count.call(null,cicoll);
var val__6977 = val;
var n__6978 = 0;
while(true){
if((n__6978 < cnt__6976))
{var nval__6979 = f.call(null,val__6977,cljs.core._nth.call(null,cicoll,n__6978));
if(cljs.core.reduced_QMARK_.call(null,nval__6979))
{return cljs.core.deref.call(null,nval__6979);
} else
{{
var G__6986 = nval__6979;
var G__6987 = (n__6978 + 1);
val__6977 = G__6986;
n__6978 = G__6987;
continue;
}
}
} else
{return val__6977;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__6980 = cljs.core._count.call(null,cicoll);
var val__6981 = val;
var n__6982 = idx;
while(true){
if((n__6982 < cnt__6980))
{var nval__6983 = f.call(null,val__6981,cljs.core._nth.call(null,cicoll,n__6982));
if(cljs.core.reduced_QMARK_.call(null,nval__6983))
{return cljs.core.deref.call(null,nval__6983);
} else
{{
var G__6988 = nval__6983;
var G__6989 = (n__6982 + 1);
val__6981 = G__6988;
n__6982 = G__6989;
continue;
}
}
} else
{return val__6981;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
ci_reduce.cljs$lang$arity$2 = ci_reduce__2;
ci_reduce.cljs$lang$arity$3 = ci_reduce__3;
ci_reduce.cljs$lang$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){
var cnt__7002 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__7003 = (arr[0]);
var n__7004 = 1;
while(true){
if((n__7004 < cnt__7002))
{var nval__7005 = f.call(null,val__7003,(arr[n__7004]));
if(cljs.core.reduced_QMARK_.call(null,nval__7005))
{return cljs.core.deref.call(null,nval__7005);
} else
{{
var G__7014 = nval__7005;
var G__7015 = (n__7004 + 1);
val__7003 = G__7014;
n__7004 = G__7015;
continue;
}
}
} else
{return val__7003;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__7006 = arr.length;
var val__7007 = val;
var n__7008 = 0;
while(true){
if((n__7008 < cnt__7006))
{var nval__7009 = f.call(null,val__7007,(arr[n__7008]));
if(cljs.core.reduced_QMARK_.call(null,nval__7009))
{return cljs.core.deref.call(null,nval__7009);
} else
{{
var G__7016 = nval__7009;
var G__7017 = (n__7008 + 1);
val__7007 = G__7016;
n__7008 = G__7017;
continue;
}
}
} else
{return val__7007;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__7010 = arr.length;
var val__7011 = val;
var n__7012 = idx;
while(true){
if((n__7012 < cnt__7010))
{var nval__7013 = f.call(null,val__7011,(arr[n__7012]));
if(cljs.core.reduced_QMARK_.call(null,nval__7013))
{return cljs.core.deref.call(null,nval__7013);
} else
{{
var G__7018 = nval__7013;
var G__7019 = (n__7012 + 1);
val__7011 = G__7018;
n__7012 = G__7019;
continue;
}
}
} else
{return val__7011;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
array_reduce.cljs$lang$arity$2 = array_reduce__2;
array_reduce.cljs$lang$arity$3 = array_reduce__3;
array_reduce.cljs$lang$arity$4 = array_reduce__4;
return array_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 166199546;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7020 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__7021 = this;
if(((this__7021.i + 1) < this__7021.a.length))
{return (new cljs.core.IndexedSeq(this__7021.a,(this__7021.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7022 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__7023 = this;
var c__7024 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__7024 > 0))
{return (new cljs.core.RSeq(coll,(c__7024 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__7025 = this;
var this__7026 = this;
return cljs.core.pr_str.call(null,this__7026);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7027 = this;
if(cljs.core.counted_QMARK_.call(null,this__7027.a))
{return cljs.core.ci_reduce.call(null,this__7027.a,f,(this__7027.a[this__7027.i]),(this__7027.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__7027.a[this__7027.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7028 = this;
if(cljs.core.counted_QMARK_.call(null,this__7028.a))
{return cljs.core.ci_reduce.call(null,this__7028.a,f,start,this__7028.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__7029 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7030 = this;
return (this__7030.a.length - this__7030.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__7031 = this;
return (this__7031.a[this__7031.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__7032 = this;
if(((this__7032.i + 1) < this__7032.a.length))
{return (new cljs.core.IndexedSeq(this__7032.a,(this__7032.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7033 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__7034 = this;
var i__7035 = (n + this__7034.i);
if((i__7035 < this__7034.a.length))
{return (this__7034.a[i__7035]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__7036 = this;
var i__7037 = (n + this__7036.i);
if((i__7037 < this__7036.a.length))
{return (this__7036.a[i__7037]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.call(null,prim,0);
});
var prim_seq__2 = (function (prim,i){
if((prim.length === 0))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw('Invalid arity: ' + arguments.length);
};
prim_seq.cljs$lang$arity$1 = prim_seq__1;
prim_seq.cljs$lang$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljs.core.prim_seq.call(null,array,0);
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.call(null,array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw('Invalid arity: ' + arguments.length);
};
array_seq.cljs$lang$arity$1 = array_seq__1;
array_seq.cljs$lang$arity$2 = array_seq__2;
return array_seq;
})()
;
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__7038 = null;
var G__7038__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__7038__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__7038 = function(array,f,start){
switch(arguments.length){
case 2:
return G__7038__2.call(this,array,f);
case 3:
return G__7038__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7038;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__7039 = null;
var G__7039__2 = (function (array,k){
return (array[k]);
});
var G__7039__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__7039 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__7039__2.call(this,array,k);
case 3:
return G__7039__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7039;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__7040 = null;
var G__7040__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__7040__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__7040 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__7040__2.call(this,array,n);
case 3:
return G__7040__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7040;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));

/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7041 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7042 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__7043 = this;
var this__7044 = this;
return cljs.core.pr_str.call(null,this__7044);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7045 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7046 = this;
return (this__7046.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7047 = this;
return cljs.core._nth.call(null,this__7047.ci,this__7047.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7048 = this;
if((this__7048.i > 0))
{return (new cljs.core.RSeq(this__7048.ci,(this__7048.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7049 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__7050 = this;
return (new cljs.core.RSeq(this__7050.ci,this__7050.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7051 = this;
return this__7051.meta;
});
cljs.core.RSeq;
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__7055__7056 = coll;
if(G__7055__7056)
{if((function (){var or__3824__auto____7057 = (G__7055__7056.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____7057)
{return or__3824__auto____7057;
} else
{return G__7055__7056.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__7055__7056.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__7055__7056);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__7055__7056);
}
})())
{return coll;
} else
{return cljs.core._seq.call(null,coll);
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__7062__7063 = coll;
if(G__7062__7063)
{if((function (){var or__3824__auto____7064 = (G__7062__7063.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7064)
{return or__3824__auto____7064;
} else
{return G__7062__7063.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7062__7063.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7062__7063);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7062__7063);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__7065 = cljs.core.seq.call(null,coll);
if((s__7065 == null))
{return null;
} else
{return cljs.core._first.call(null,s__7065);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if(!((coll == null)))
{if((function (){var G__7070__7071 = coll;
if(G__7070__7071)
{if((function (){var or__3824__auto____7072 = (G__7070__7071.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7072)
{return or__3824__auto____7072;
} else
{return G__7070__7071.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7070__7071.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7070__7071);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7070__7071);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__7073 = cljs.core.seq.call(null,coll);
if(!((s__7073 == null)))
{return cljs.core._rest.call(null,s__7073);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__7077__7078 = coll;
if(G__7077__7078)
{if((function (){var or__3824__auto____7079 = (G__7077__7078.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____7079)
{return or__3824__auto____7079;
} else
{return G__7077__7078.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__7077__7078.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__7077__7078);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__7077__7078);
}
})())
{return cljs.core._next.call(null,coll);
} else
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
}
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
var sn__7081 = cljs.core.next.call(null,s);
if(!((sn__7081 == null)))
{{
var G__7082 = sn__7081;
s = G__7082;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3 = (function() { 
var G__7083__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__7084 = conj.call(null,coll,x);
var G__7085 = cljs.core.first.call(null,xs);
var G__7086 = cljs.core.next.call(null,xs);
coll = G__7084;
x = G__7085;
xs = G__7086;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__7083 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7083__delegate.call(this, coll, x, xs);
};
G__7083.cljs$lang$maxFixedArity = 2;
G__7083.cljs$lang$applyTo = (function (arglist__7087){
var coll = cljs.core.first(arglist__7087);
var x = cljs.core.first(cljs.core.next(arglist__7087));
var xs = cljs.core.rest(cljs.core.next(arglist__7087));
return G__7083__delegate(coll, x, xs);
});
G__7083.cljs$lang$arity$variadic = G__7083__delegate;
return G__7083;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$lang$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$lang$arity$2 = conj__2;
conj.cljs$lang$arity$variadic = conj__3.cljs$lang$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s__7090 = cljs.core.seq.call(null,coll);
var acc__7091 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__7090))
{return (acc__7091 + cljs.core._count.call(null,s__7090));
} else
{{
var G__7092 = cljs.core.next.call(null,s__7090);
var G__7093 = (acc__7091 + 1);
s__7090 = G__7092;
acc__7091 = G__7093;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(cljs.core.counted_QMARK_.call(null,coll))
{return cljs.core._count.call(null,coll);
} else
{return cljs.core.accumulating_seq_count.call(null,coll);
}
});
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if(cljs.core.seq.call(null,coll))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1));
} else
{if("\uFDD0'else")
{throw (new Error("Index out of bounds"));
} else
{return null;
}
}
}
}
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
if((coll == null))
{return not_found;
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n,not_found);
} else
{if(cljs.core.seq.call(null,coll))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1),not_found);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
linear_traversal_nth.cljs$lang$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$lang$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if((coll == null))
{return null;
} else
{if((function (){var G__7100__7101 = coll;
if(G__7100__7101)
{if((function (){var or__3824__auto____7102 = (G__7100__7101.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7102)
{return or__3824__auto____7102;
} else
{return G__7100__7101.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7100__7101.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7100__7101);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7100__7101);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n));
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n));
}
}
});
var nth__3 = (function (coll,n,not_found){
if(!((coll == null)))
{if((function (){var G__7103__7104 = coll;
if(G__7103__7104)
{if((function (){var or__3824__auto____7105 = (G__7103__7104.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7105)
{return or__3824__auto____7105;
} else
{return G__7103__7104.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7103__7104.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7103__7104);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7103__7104);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n),not_found);
}
} else
{return not_found;
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
nth.cljs$lang$arity$2 = nth__2;
nth.cljs$lang$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get.cljs$lang$arity$2 = get__2;
get.cljs$lang$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__4 = (function() { 
var G__7108__delegate = function (coll,k,v,kvs){
while(true){
var ret__7107 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__7109 = ret__7107;
var G__7110 = cljs.core.first.call(null,kvs);
var G__7111 = cljs.core.second.call(null,kvs);
var G__7112 = cljs.core.nnext.call(null,kvs);
coll = G__7109;
k = G__7110;
v = G__7111;
kvs = G__7112;
continue;
}
} else
{return ret__7107;
}
break;
}
};
var G__7108 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7108__delegate.call(this, coll, k, v, kvs);
};
G__7108.cljs$lang$maxFixedArity = 3;
G__7108.cljs$lang$applyTo = (function (arglist__7113){
var coll = cljs.core.first(arglist__7113);
var k = cljs.core.first(cljs.core.next(arglist__7113));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7113)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7113)));
return G__7108__delegate(coll, k, v, kvs);
});
G__7108.cljs$lang$arity$variadic = G__7108__delegate;
return G__7108;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$lang$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$lang$arity$3 = assoc__3;
assoc.cljs$lang$arity$variadic = assoc__4.cljs$lang$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3 = (function() { 
var G__7116__delegate = function (coll,k,ks){
while(true){
var ret__7115 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__7117 = ret__7115;
var G__7118 = cljs.core.first.call(null,ks);
var G__7119 = cljs.core.next.call(null,ks);
coll = G__7117;
k = G__7118;
ks = G__7119;
continue;
}
} else
{return ret__7115;
}
break;
}
};
var G__7116 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7116__delegate.call(this, coll, k, ks);
};
G__7116.cljs$lang$maxFixedArity = 2;
G__7116.cljs$lang$applyTo = (function (arglist__7120){
var coll = cljs.core.first(arglist__7120);
var k = cljs.core.first(cljs.core.next(arglist__7120));
var ks = cljs.core.rest(cljs.core.next(arglist__7120));
return G__7116__delegate(coll, k, ks);
});
G__7116.cljs$lang$arity$variadic = G__7116__delegate;
return G__7116;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$lang$arity$1 = dissoc__1;
dissoc.cljs$lang$arity$2 = dissoc__2;
dissoc.cljs$lang$arity$variadic = dissoc__3.cljs$lang$arity$variadic;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if((function (){var G__7124__7125 = o;
if(G__7124__7125)
{if((function (){var or__3824__auto____7126 = (G__7124__7125.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____7126)
{return or__3824__auto____7126;
} else
{return G__7124__7125.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__7124__7125.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__7124__7125);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__7124__7125);
}
})())
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3 = (function() { 
var G__7129__delegate = function (coll,k,ks){
while(true){
var ret__7128 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__7130 = ret__7128;
var G__7131 = cljs.core.first.call(null,ks);
var G__7132 = cljs.core.next.call(null,ks);
coll = G__7130;
k = G__7131;
ks = G__7132;
continue;
}
} else
{return ret__7128;
}
break;
}
};
var G__7129 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7129__delegate.call(this, coll, k, ks);
};
G__7129.cljs$lang$maxFixedArity = 2;
G__7129.cljs$lang$applyTo = (function (arglist__7133){
var coll = cljs.core.first(arglist__7133);
var k = cljs.core.first(cljs.core.next(arglist__7133));
var ks = cljs.core.rest(cljs.core.next(arglist__7133));
return G__7129__delegate(coll, k, ks);
});
G__7129.cljs$lang$arity$variadic = G__7129__delegate;
return G__7129;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$lang$arity$1 = disj__1;
disj.cljs$lang$arity$2 = disj__2;
disj.cljs$lang$arity$variadic = disj__3.cljs$lang$arity$variadic;
return disj;
})()
;
cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){
var h__7135 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__7135);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__7135;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__7137 = (cljs.core.string_hash_cache[k]);
if(!((h__7137 == null)))
{return h__7137;
} else
{return cljs.core.add_to_string_hash_cache.call(null,k);
}
});
cljs.core.hash = (function() {
var hash = null;
var hash__1 = (function (o){
return hash.call(null,o,true);
});
var hash__2 = (function (o,check_cache){
if((function (){var and__3822__auto____7139 = goog.isString(o);
if(and__3822__auto____7139)
{return check_cache;
} else
{return and__3822__auto____7139;
}
})())
{return cljs.core.check_string_hash_cache.call(null,o);
} else
{return cljs.core._hash.call(null,o);
}
});
hash = function(o,check_cache){
switch(arguments.length){
case 1:
return hash__1.call(this,o);
case 2:
return hash__2.call(this,o,check_cache);
}
throw('Invalid arity: ' + arguments.length);
};
hash.cljs$lang$arity$1 = hash__1;
hash.cljs$lang$arity$2 = hash__2;
return hash;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7143__7144 = x;
if(G__7143__7144)
{if((function (){var or__3824__auto____7145 = (G__7143__7144.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____7145)
{return or__3824__auto____7145;
} else
{return G__7143__7144.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__7143__7144.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__7143__7144);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__7143__7144);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7149__7150 = x;
if(G__7149__7150)
{if((function (){var or__3824__auto____7151 = (G__7149__7150.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____7151)
{return or__3824__auto____7151;
} else
{return G__7149__7150.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__7149__7150.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__7149__7150);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__7149__7150);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__7155__7156 = x;
if(G__7155__7156)
{if((function (){var or__3824__auto____7157 = (G__7155__7156.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____7157)
{return or__3824__auto____7157;
} else
{return G__7155__7156.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__7155__7156.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__7155__7156);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__7155__7156);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__7161__7162 = x;
if(G__7161__7162)
{if((function (){var or__3824__auto____7163 = (G__7161__7162.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____7163)
{return or__3824__auto____7163;
} else
{return G__7161__7162.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__7161__7162.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__7161__7162);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__7161__7162);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__7167__7168 = x;
if(G__7167__7168)
{if((function (){var or__3824__auto____7169 = (G__7167__7168.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____7169)
{return or__3824__auto____7169;
} else
{return G__7167__7168.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__7167__7168.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__7167__7168);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__7167__7168);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__7173__7174 = x;
if(G__7173__7174)
{if((function (){var or__3824__auto____7175 = (G__7173__7174.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7175)
{return or__3824__auto____7175;
} else
{return G__7173__7174.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7173__7174.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7173__7174);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7173__7174);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__7179__7180 = x;
if(G__7179__7180)
{if((function (){var or__3824__auto____7181 = (G__7179__7180.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7181)
{return or__3824__auto____7181;
} else
{return G__7179__7180.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7179__7180.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7179__7180);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7179__7180);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7185__7186 = x;
if(G__7185__7186)
{if((function (){var or__3824__auto____7187 = (G__7185__7186.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____7187)
{return or__3824__auto____7187;
} else
{return G__7185__7186.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__7185__7186.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__7185__7186);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__7185__7186);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__7191__7192 = x;
if(G__7191__7192)
{if((function (){var or__3824__auto____7193 = (G__7191__7192.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____7193)
{return or__3824__auto____7193;
} else
{return G__7191__7192.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__7191__7192.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__7191__7192);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__7191__7192);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__7197__7198 = x;
if(G__7197__7198)
{if(cljs.core.truth_((function (){var or__3824__auto____7199 = null;
if(cljs.core.truth_(or__3824__auto____7199))
{return or__3824__auto____7199;
} else
{return G__7197__7198.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__7197__7198.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__7197__7198);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__7197__7198);
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
return {};
});
var js_obj__1 = (function() { 
var G__7200__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__7200 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7200__delegate.call(this, keyvals);
};
G__7200.cljs$lang$maxFixedArity = 0;
G__7200.cljs$lang$applyTo = (function (arglist__7201){
var keyvals = cljs.core.seq(arglist__7201);;
return G__7200__delegate(keyvals);
});
G__7200.cljs$lang$arity$variadic = G__7200__delegate;
return G__7200;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$lang$arity$0 = js_obj__0;
js_obj.cljs$lang$arity$variadic = js_obj__1.cljs$lang$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys__7203 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__7203.push(key);
}));
return keys__7203;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__7207 = i;
var j__7208 = j;
var len__7209 = len;
while(true){
if((len__7209 === 0))
{return to;
} else
{(to[j__7208] = (from[i__7207]));
{
var G__7210 = (i__7207 + 1);
var G__7211 = (j__7208 + 1);
var G__7212 = (len__7209 - 1);
i__7207 = G__7210;
j__7208 = G__7211;
len__7209 = G__7212;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__7216 = (i + (len - 1));
var j__7217 = (j + (len - 1));
var len__7218 = len;
while(true){
if((len__7218 === 0))
{return to;
} else
{(to[j__7217] = (from[i__7216]));
{
var G__7219 = (i__7216 - 1);
var G__7220 = (j__7217 - 1);
var G__7221 = (len__7218 - 1);
i__7216 = G__7219;
j__7217 = G__7220;
len__7218 = G__7221;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = {};
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null))
{return false;
} else
{var G__7225__7226 = s;
if(G__7225__7226)
{if((function (){var or__3824__auto____7227 = (G__7225__7226.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7227)
{return or__3824__auto____7227;
} else
{return G__7225__7226.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7225__7226.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7225__7226);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7225__7226);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__7231__7232 = s;
if(G__7231__7232)
{if((function (){var or__3824__auto____7233 = (G__7231__7232.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____7233)
{return or__3824__auto____7233;
} else
{return G__7231__7232.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__7231__7232.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7231__7232);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7231__7232);
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3822__auto____7236 = goog.isString(x);
if(and__3822__auto____7236)
{return !((function (){var or__3824__auto____7237 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____7237)
{return or__3824__auto____7237;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____7236;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____7239 = goog.isString(x);
if(and__3822__auto____7239)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____7239;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____7241 = goog.isString(x);
if(and__3822__auto____7241)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____7241;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____7246 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____7246)
{return or__3824__auto____7246;
} else
{var G__7247__7248 = f;
if(G__7247__7248)
{if((function (){var or__3824__auto____7249 = (G__7247__7248.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____7249)
{return or__3824__auto____7249;
} else
{return G__7247__7248.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__7247__7248.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7247__7248);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7247__7248);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____7251 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____7251)
{return (n == n.toFixed());
} else
{return and__3822__auto____7251;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3822__auto____7254 = coll;
if(cljs.core.truth_(and__3822__auto____7254))
{var and__3822__auto____7255 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____7255)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____7255;
}
} else
{return and__3822__auto____7254;
}
})()))
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.call(null,coll,k)], true);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3 = (function() { 
var G__7264__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__7260 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__7261 = more;
while(true){
var x__7262 = cljs.core.first.call(null,xs__7261);
var etc__7263 = cljs.core.next.call(null,xs__7261);
if(cljs.core.truth_(xs__7261))
{if(cljs.core.contains_QMARK_.call(null,s__7260,x__7262))
{return false;
} else
{{
var G__7265 = cljs.core.conj.call(null,s__7260,x__7262);
var G__7266 = etc__7263;
s__7260 = G__7265;
xs__7261 = G__7266;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__7264 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7264__delegate.call(this, x, y, more);
};
G__7264.cljs$lang$maxFixedArity = 2;
G__7264.cljs$lang$applyTo = (function (arglist__7267){
var x = cljs.core.first(arglist__7267);
var y = cljs.core.first(cljs.core.next(arglist__7267));
var more = cljs.core.rest(cljs.core.next(arglist__7267));
return G__7264__delegate(x, y, more);
});
G__7264.cljs$lang$arity$variadic = G__7264__delegate;
return G__7264;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$lang$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$lang$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$lang$arity$variadic = distinct_QMARK___3.cljs$lang$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((x === y))
{return 0;
} else
{if((x == null))
{return -1;
} else
{if((y == null))
{return 1;
} else
{if((cljs.core.type.call(null,x) === cljs.core.type.call(null,y)))
{if((function (){var G__7271__7272 = x;
if(G__7271__7272)
{if(cljs.core.truth_((function (){var or__3824__auto____7273 = null;
if(cljs.core.truth_(or__3824__auto____7273))
{return or__3824__auto____7273;
} else
{return G__7271__7272.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__7271__7272.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__7271__7272);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__7271__7272);
}
})())
{return cljs.core._compare.call(null,x,y);
} else
{return goog.array.defaultCompare(x,y);
}
} else
{if("\uFDD0'else")
{throw (new Error("compare on non-nil objects of different types"));
} else
{return null;
}
}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){
var xl__7278 = cljs.core.count.call(null,xs);
var yl__7279 = cljs.core.count.call(null,ys);
if((xl__7278 < yl__7279))
{return -1;
} else
{if((xl__7278 > yl__7279))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__7278,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__7280 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____7281 = (d__7280 === 0);
if(and__3822__auto____7281)
{return ((n + 1) < len);
} else
{return and__3822__auto____7281;
}
})())
{{
var G__7282 = xs;
var G__7283 = ys;
var G__7284 = len;
var G__7285 = (n + 1);
xs = G__7282;
ys = G__7283;
len = G__7284;
n = G__7285;
continue;
}
} else
{return d__7280;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw('Invalid arity: ' + arguments.length);
};
compare_indexed.cljs$lang$arity$2 = compare_indexed__2;
compare_indexed.cljs$lang$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.call(null,f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__7287 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__7287))
{return r__7287;
} else
{if(cljs.core.truth_(r__7287))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.seq.call(null,coll))
{var a__7289 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__7289,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__7289);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort.cljs$lang$arity$1 = sort__1;
sort.cljs$lang$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort_by.cljs$lang$arity$2 = sort_by__2;
sort_by.cljs$lang$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__3971__auto____7295 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____7295)
{var s__7296 = temp__3971__auto____7295;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__7296),cljs.core.next.call(null,s__7296));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__7297 = val;
var coll__7298 = cljs.core.seq.call(null,coll);
while(true){
if(coll__7298)
{var nval__7299 = f.call(null,val__7297,cljs.core.first.call(null,coll__7298));
if(cljs.core.reduced_QMARK_.call(null,nval__7299))
{return cljs.core.deref.call(null,nval__7299);
} else
{{
var G__7300 = nval__7299;
var G__7301 = cljs.core.next.call(null,coll__7298);
val__7297 = G__7300;
coll__7298 = G__7301;
continue;
}
}
} else
{return val__7297;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
seq_reduce.cljs$lang$arity$2 = seq_reduce__2;
seq_reduce.cljs$lang$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){
var a__7303 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__7303);
return cljs.core.vec.call(null,a__7303);
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if((function (){var G__7310__7311 = coll;
if(G__7310__7311)
{if((function (){var or__3824__auto____7312 = (G__7310__7311.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7312)
{return or__3824__auto____7312;
} else
{return G__7310__7311.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7310__7311.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7310__7311);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7310__7311);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__7313__7314 = coll;
if(G__7313__7314)
{if((function (){var or__3824__auto____7315 = (G__7313__7314.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7315)
{return or__3824__auto____7315;
} else
{return G__7313__7314.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7313__7314.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7313__7314);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7313__7314);
}
})())
{return cljs.core._reduce.call(null,coll,f,val);
} else
{return cljs.core.seq_reduce.call(null,f,val,coll);
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reduce.cljs$lang$arity$2 = reduce__2;
reduce.cljs$lang$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
return cljs.core._kv_reduce.call(null,coll,f,init);
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__7316 = this;
return this__7316.val;
});
cljs.core.Reduced;
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return cljs.core.instance_QMARK_.call(null,cljs.core.Reduced,r);
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return 0;
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__7317__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__7317 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7317__delegate.call(this, x, y, more);
};
G__7317.cljs$lang$maxFixedArity = 2;
G__7317.cljs$lang$applyTo = (function (arglist__7318){
var x = cljs.core.first(arglist__7318);
var y = cljs.core.first(cljs.core.next(arglist__7318));
var more = cljs.core.rest(cljs.core.next(arglist__7318));
return G__7317__delegate(x, y, more);
});
G__7317.cljs$lang$arity$variadic = G__7317__delegate;
return G__7317;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$lang$arity$0 = _PLUS___0;
_PLUS_.cljs$lang$arity$1 = _PLUS___1;
_PLUS_.cljs$lang$arity$2 = _PLUS___2;
_PLUS_.cljs$lang$arity$variadic = _PLUS___3.cljs$lang$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__7319__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__7319 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7319__delegate.call(this, x, y, more);
};
G__7319.cljs$lang$maxFixedArity = 2;
G__7319.cljs$lang$applyTo = (function (arglist__7320){
var x = cljs.core.first(arglist__7320);
var y = cljs.core.first(cljs.core.next(arglist__7320));
var more = cljs.core.rest(cljs.core.next(arglist__7320));
return G__7319__delegate(x, y, more);
});
G__7319.cljs$lang$arity$variadic = G__7319__delegate;
return G__7319;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$lang$arity$1 = ___1;
_.cljs$lang$arity$2 = ___2;
_.cljs$lang$arity$variadic = ___3.cljs$lang$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return 1;
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__7321__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__7321 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7321__delegate.call(this, x, y, more);
};
G__7321.cljs$lang$maxFixedArity = 2;
G__7321.cljs$lang$applyTo = (function (arglist__7322){
var x = cljs.core.first(arglist__7322);
var y = cljs.core.first(cljs.core.next(arglist__7322));
var more = cljs.core.rest(cljs.core.next(arglist__7322));
return G__7321__delegate(x, y, more);
});
G__7321.cljs$lang$arity$variadic = G__7321__delegate;
return G__7321;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$lang$arity$0 = _STAR___0;
_STAR_.cljs$lang$arity$1 = _STAR___1;
_STAR_.cljs$lang$arity$2 = _STAR___2;
_STAR_.cljs$lang$arity$variadic = _STAR___3.cljs$lang$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__7323__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__7323 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7323__delegate.call(this, x, y, more);
};
G__7323.cljs$lang$maxFixedArity = 2;
G__7323.cljs$lang$applyTo = (function (arglist__7324){
var x = cljs.core.first(arglist__7324);
var y = cljs.core.first(cljs.core.next(arglist__7324));
var more = cljs.core.rest(cljs.core.next(arglist__7324));
return G__7323__delegate(x, y, more);
});
G__7323.cljs$lang$arity$variadic = G__7323__delegate;
return G__7323;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$lang$arity$1 = _SLASH___1;
_SLASH_.cljs$lang$arity$2 = _SLASH___2;
_SLASH_.cljs$lang$arity$variadic = _SLASH___3.cljs$lang$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__7325__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__7326 = y;
var G__7327 = cljs.core.first.call(null,more);
var G__7328 = cljs.core.next.call(null,more);
x = G__7326;
y = G__7327;
more = G__7328;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7325 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7325__delegate.call(this, x, y, more);
};
G__7325.cljs$lang$maxFixedArity = 2;
G__7325.cljs$lang$applyTo = (function (arglist__7329){
var x = cljs.core.first(arglist__7329);
var y = cljs.core.first(cljs.core.next(arglist__7329));
var more = cljs.core.rest(cljs.core.next(arglist__7329));
return G__7325__delegate(x, y, more);
});
G__7325.cljs$lang$arity$variadic = G__7325__delegate;
return G__7325;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$lang$arity$1 = _LT___1;
_LT_.cljs$lang$arity$2 = _LT___2;
_LT_.cljs$lang$arity$variadic = _LT___3.cljs$lang$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__7330__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__7331 = y;
var G__7332 = cljs.core.first.call(null,more);
var G__7333 = cljs.core.next.call(null,more);
x = G__7331;
y = G__7332;
more = G__7333;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7330 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7330__delegate.call(this, x, y, more);
};
G__7330.cljs$lang$maxFixedArity = 2;
G__7330.cljs$lang$applyTo = (function (arglist__7334){
var x = cljs.core.first(arglist__7334);
var y = cljs.core.first(cljs.core.next(arglist__7334));
var more = cljs.core.rest(cljs.core.next(arglist__7334));
return G__7330__delegate(x, y, more);
});
G__7330.cljs$lang$arity$variadic = G__7330__delegate;
return G__7330;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$lang$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$lang$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$lang$arity$variadic = _LT__EQ___3.cljs$lang$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__7335__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__7336 = y;
var G__7337 = cljs.core.first.call(null,more);
var G__7338 = cljs.core.next.call(null,more);
x = G__7336;
y = G__7337;
more = G__7338;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7335 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7335__delegate.call(this, x, y, more);
};
G__7335.cljs$lang$maxFixedArity = 2;
G__7335.cljs$lang$applyTo = (function (arglist__7339){
var x = cljs.core.first(arglist__7339);
var y = cljs.core.first(cljs.core.next(arglist__7339));
var more = cljs.core.rest(cljs.core.next(arglist__7339));
return G__7335__delegate(x, y, more);
});
G__7335.cljs$lang$arity$variadic = G__7335__delegate;
return G__7335;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$lang$arity$1 = _GT___1;
_GT_.cljs$lang$arity$2 = _GT___2;
_GT_.cljs$lang$arity$variadic = _GT___3.cljs$lang$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__7340__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__7341 = y;
var G__7342 = cljs.core.first.call(null,more);
var G__7343 = cljs.core.next.call(null,more);
x = G__7341;
y = G__7342;
more = G__7343;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7340 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7340__delegate.call(this, x, y, more);
};
G__7340.cljs$lang$maxFixedArity = 2;
G__7340.cljs$lang$applyTo = (function (arglist__7344){
var x = cljs.core.first(arglist__7344);
var y = cljs.core.first(cljs.core.next(arglist__7344));
var more = cljs.core.rest(cljs.core.next(arglist__7344));
return G__7340__delegate(x, y, more);
});
G__7340.cljs$lang$arity$variadic = G__7340__delegate;
return G__7340;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$lang$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$lang$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$lang$arity$variadic = _GT__EQ___3.cljs$lang$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3 = (function() { 
var G__7345__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__7345 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7345__delegate.call(this, x, y, more);
};
G__7345.cljs$lang$maxFixedArity = 2;
G__7345.cljs$lang$applyTo = (function (arglist__7346){
var x = cljs.core.first(arglist__7346);
var y = cljs.core.first(cljs.core.next(arglist__7346));
var more = cljs.core.rest(cljs.core.next(arglist__7346));
return G__7345__delegate(x, y, more);
});
G__7345.cljs$lang$arity$variadic = G__7345__delegate;
return G__7345;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$lang$arity$1 = max__1;
max.cljs$lang$arity$2 = max__2;
max.cljs$lang$arity$variadic = max__3.cljs$lang$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3 = (function() { 
var G__7347__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__7347 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7347__delegate.call(this, x, y, more);
};
G__7347.cljs$lang$maxFixedArity = 2;
G__7347.cljs$lang$applyTo = (function (arglist__7348){
var x = cljs.core.first(arglist__7348);
var y = cljs.core.first(cljs.core.next(arglist__7348));
var more = cljs.core.rest(cljs.core.next(arglist__7348));
return G__7347__delegate(x, y, more);
});
G__7347.cljs$lang$arity$variadic = G__7347__delegate;
return G__7347;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$lang$arity$1 = min__1;
min.cljs$lang$arity$2 = min__2;
min.cljs$lang$arity$variadic = min__3.cljs$lang$arity$variadic;
return min;
})()
;
cljs.core.fix = (function fix(q){
if((q >= 0))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return cljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix.call(null,x);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__7350 = (n % d);
return cljs.core.fix.call(null,((n - rem__7350) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__7352 = cljs.core.quot.call(null,n,d);
return (n - (d * q__7352));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return Math.random.call(null);
});
var rand__1 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){
var v__7355 = (v - ((v >> 1) & 1431655765));
var v__7356 = ((v__7355 & 858993459) + ((v__7355 >> 2) & 858993459));
return ((((v__7356 + (v__7356 >> 4)) & 252645135) * 16843009) >> 24);
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3 = (function() { 
var G__7357__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__7358 = y;
var G__7359 = cljs.core.first.call(null,more);
var G__7360 = cljs.core.next.call(null,more);
x = G__7358;
y = G__7359;
more = G__7360;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7357 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7357__delegate.call(this, x, y, more);
};
G__7357.cljs$lang$maxFixedArity = 2;
G__7357.cljs$lang$applyTo = (function (arglist__7361){
var x = cljs.core.first(arglist__7361);
var y = cljs.core.first(cljs.core.next(arglist__7361));
var more = cljs.core.rest(cljs.core.next(arglist__7361));
return G__7357__delegate(x, y, more);
});
G__7357.cljs$lang$arity$variadic = G__7357__delegate;
return G__7357;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$lang$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$lang$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$lang$arity$variadic = _EQ__EQ___3.cljs$lang$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__7365 = n;
var xs__7366 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7367 = xs__7366;
if(and__3822__auto____7367)
{return (n__7365 > 0);
} else
{return and__3822__auto____7367;
}
})()))
{{
var G__7368 = (n__7365 - 1);
var G__7369 = cljs.core.next.call(null,xs__7366);
n__7365 = G__7368;
xs__7366 = G__7369;
continue;
}
} else
{return xs__7366;
}
break;
}
});
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___0 = (function (){
return "";
});
var str_STAR___1 = (function (x){
if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2 = (function() { 
var G__7370__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7371 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__7372 = cljs.core.next.call(null,more);
sb = G__7371;
more = G__7372;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__7370 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7370__delegate.call(this, x, ys);
};
G__7370.cljs$lang$maxFixedArity = 1;
G__7370.cljs$lang$applyTo = (function (arglist__7373){
var x = cljs.core.first(arglist__7373);
var ys = cljs.core.rest(arglist__7373);
return G__7370__delegate(x, ys);
});
G__7370.cljs$lang$arity$variadic = G__7370__delegate;
return G__7370;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str_STAR___0.call(this);
case 1:
return str_STAR___1.call(this,x);
default:
return str_STAR___2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
str_STAR_.cljs$lang$arity$0 = str_STAR___0;
str_STAR_.cljs$lang$arity$1 = str_STAR___1;
str_STAR_.cljs$lang$arity$variadic = str_STAR___2.cljs$lang$arity$variadic;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if(cljs.core.symbol_QMARK_.call(null,x))
{return x.substring(2,x.length);
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2 = (function() { 
var G__7374__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7375 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__7376 = cljs.core.next.call(null,more);
sb = G__7375;
more = G__7376;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__7374 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7374__delegate.call(this, x, ys);
};
G__7374.cljs$lang$maxFixedArity = 1;
G__7374.cljs$lang$applyTo = (function (arglist__7377){
var x = cljs.core.first(arglist__7377);
var ys = cljs.core.rest(arglist__7377);
return G__7374__delegate(x, ys);
});
G__7374.cljs$lang$arity$variadic = G__7374__delegate;
return G__7374;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$lang$arity$0 = str__0;
str.cljs$lang$arity$1 = str__1;
str.cljs$lang$arity$variadic = str__2.cljs$lang$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subs.cljs$lang$arity$2 = subs__2;
subs.cljs$lang$arity$3 = subs__3;
return subs;
})()
;
/**
* Formats a string using goog.string.format.
* @param {...*} var_args
*/
cljs.core.format = (function() { 
var format__delegate = function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
};
var format = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this, fmt, args);
};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__7378){
var fmt = cljs.core.first(arglist__7378);
var args = cljs.core.rest(arglist__7378);
return format__delegate(fmt, args);
});
format.cljs$lang$arity$variadic = format__delegate;
return format;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if(cljs.core.symbol_QMARK_.call(null,name))
{name;
} else
{if(cljs.core.keyword_QMARK_.call(null,name))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
});
var symbol__2 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
symbol.cljs$lang$arity$1 = symbol__1;
symbol.cljs$lang$arity$2 = symbol__2;
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if(cljs.core.keyword_QMARK_.call(null,name))
{return name;
} else
{if(cljs.core.symbol_QMARK_.call(null,name))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if("\uFDD0'else")
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
keyword.cljs$lang$arity$1 = keyword__1;
keyword.cljs$lang$arity$2 = keyword__2;
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__7381 = cljs.core.seq.call(null,x);
var ys__7382 = cljs.core.seq.call(null,y);
while(true){
if((xs__7381 == null))
{return (ys__7382 == null);
} else
{if((ys__7382 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__7381),cljs.core.first.call(null,ys__7382)))
{{
var G__7383 = cljs.core.next.call(null,xs__7381);
var G__7384 = cljs.core.next.call(null,ys__7382);
xs__7381 = G__7383;
ys__7382 = G__7384;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__7385_SHARP_,p2__7386_SHARP_){
return cljs.core.hash_combine.call(null,p1__7385_SHARP_,cljs.core.hash.call(null,p2__7386_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__7390 = 0;
var s__7391 = cljs.core.seq.call(null,m);
while(true){
if(s__7391)
{var e__7392 = cljs.core.first.call(null,s__7391);
{
var G__7393 = ((h__7390 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__7392)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__7392)))) % 4503599627370496);
var G__7394 = cljs.core.next.call(null,s__7391);
h__7390 = G__7393;
s__7391 = G__7394;
continue;
}
} else
{return h__7390;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__7398 = 0;
var s__7399 = cljs.core.seq.call(null,s);
while(true){
if(s__7399)
{var e__7400 = cljs.core.first.call(null,s__7399);
{
var G__7401 = ((h__7398 + cljs.core.hash.call(null,e__7400)) % 4503599627370496);
var G__7402 = cljs.core.next.call(null,s__7399);
h__7398 = G__7401;
s__7399 = G__7402;
continue;
}
} else
{return h__7398;
}
break;
}
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__7423__7424 = cljs.core.seq.call(null,fn_map);
if(G__7423__7424)
{var G__7426__7428 = cljs.core.first.call(null,G__7423__7424);
var vec__7427__7429 = G__7426__7428;
var key_name__7430 = cljs.core.nth.call(null,vec__7427__7429,0,null);
var f__7431 = cljs.core.nth.call(null,vec__7427__7429,1,null);
var G__7423__7432 = G__7423__7424;
var G__7426__7433 = G__7426__7428;
var G__7423__7434 = G__7423__7432;
while(true){
var vec__7435__7436 = G__7426__7433;
var key_name__7437 = cljs.core.nth.call(null,vec__7435__7436,0,null);
var f__7438 = cljs.core.nth.call(null,vec__7435__7436,1,null);
var G__7423__7439 = G__7423__7434;
var str_name__7440 = cljs.core.name.call(null,key_name__7437);
(obj[str_name__7440] = f__7438);
var temp__3974__auto____7441 = cljs.core.next.call(null,G__7423__7439);
if(temp__3974__auto____7441)
{var G__7423__7442 = temp__3974__auto____7441;
{
var G__7443 = cljs.core.first.call(null,G__7423__7442);
var G__7444 = G__7423__7442;
G__7426__7433 = G__7443;
G__7423__7434 = G__7444;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413358;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7445 = this;
var h__2281__auto____7446 = this__7445.__hash;
if(!((h__2281__auto____7446 == null)))
{return h__2281__auto____7446;
} else
{var h__2281__auto____7447 = cljs.core.hash_coll.call(null,coll);
this__7445.__hash = h__2281__auto____7447;
return h__2281__auto____7447;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7448 = this;
if((this__7448.count === 1))
{return null;
} else
{return this__7448.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7449 = this;
return (new cljs.core.List(this__7449.meta,o,coll,(this__7449.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__7450 = this;
var this__7451 = this;
return cljs.core.pr_str.call(null,this__7451);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7452 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7453 = this;
return this__7453.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7454 = this;
return this__7454.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7455 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7456 = this;
return this__7456.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7457 = this;
if((this__7457.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__7457.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7458 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7459 = this;
return (new cljs.core.List(meta,this__7459.first,this__7459.rest,this__7459.count,this__7459.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7460 = this;
return this__7460.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7461 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413326;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7462 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7463 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7464 = this;
return (new cljs.core.List(this__7464.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__7465 = this;
var this__7466 = this;
return cljs.core.pr_str.call(null,this__7466);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7467 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7468 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7469 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7470 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7471 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7472 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7473 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7474 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7475 = this;
return this__7475.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7476 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__7480__7481 = coll;
if(G__7480__7481)
{if((function (){var or__3824__auto____7482 = (G__7480__7481.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____7482)
{return or__3824__auto____7482;
} else
{return G__7480__7481.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__7480__7481.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7480__7481);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7480__7481);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq.call(null,coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
if(cljs.core.reversible_QMARK_.call(null,coll))
{return cljs.core.rseq.call(null,coll);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() {
var list = null;
var list__0 = (function (){
return cljs.core.List.EMPTY;
});
var list__1 = (function (x){
return cljs.core.conj.call(null,cljs.core.List.EMPTY,x);
});
var list__2 = (function (x,y){
return cljs.core.conj.call(null,list.call(null,y),x);
});
var list__3 = (function (x,y,z){
return cljs.core.conj.call(null,list.call(null,y,z),x);
});
var list__4 = (function() { 
var G__7483__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__7483 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7483__delegate.call(this, x, y, z, items);
};
G__7483.cljs$lang$maxFixedArity = 3;
G__7483.cljs$lang$applyTo = (function (arglist__7484){
var x = cljs.core.first(arglist__7484);
var y = cljs.core.first(cljs.core.next(arglist__7484));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7484)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7484)));
return G__7483__delegate(x, y, z, items);
});
G__7483.cljs$lang$arity$variadic = G__7483__delegate;
return G__7483;
})()
;
list = function(x,y,z,var_args){
var items = var_args;
switch(arguments.length){
case 0:
return list__0.call(this);
case 1:
return list__1.call(this,x);
case 2:
return list__2.call(this,x,y);
case 3:
return list__3.call(this,x,y,z);
default:
return list__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
list.cljs$lang$maxFixedArity = 3;
list.cljs$lang$applyTo = list__4.cljs$lang$applyTo;
list.cljs$lang$arity$0 = list__0;
list.cljs$lang$arity$1 = list__1;
list.cljs$lang$arity$2 = list__2;
list.cljs$lang$arity$3 = list__3;
list.cljs$lang$arity$variadic = list__4.cljs$lang$arity$variadic;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65405164;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7485 = this;
var h__2281__auto____7486 = this__7485.__hash;
if(!((h__2281__auto____7486 == null)))
{return h__2281__auto____7486;
} else
{var h__2281__auto____7487 = cljs.core.hash_coll.call(null,coll);
this__7485.__hash = h__2281__auto____7487;
return h__2281__auto____7487;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7488 = this;
if((this__7488.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__7488.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7489 = this;
return (new cljs.core.Cons(null,o,coll,this__7489.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__7490 = this;
var this__7491 = this;
return cljs.core.pr_str.call(null,this__7491);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7492 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7493 = this;
return this__7493.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7494 = this;
if((this__7494.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__7494.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7495 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7496 = this;
return (new cljs.core.Cons(meta,this__7496.first,this__7496.rest,this__7496.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7497 = this;
return this__7497.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7498 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7498.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____7503 = (coll == null);
if(or__3824__auto____7503)
{return or__3824__auto____7503;
} else
{var G__7504__7505 = coll;
if(G__7504__7505)
{if((function (){var or__3824__auto____7506 = (G__7504__7505.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7506)
{return or__3824__auto____7506;
} else
{return G__7504__7505.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7504__7505.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7504__7505);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7504__7505);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__7510__7511 = x;
if(G__7510__7511)
{if((function (){var or__3824__auto____7512 = (G__7510__7511.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____7512)
{return or__3824__auto____7512;
} else
{return G__7510__7511.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__7510__7511.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7510__7511);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7510__7511);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__7513 = null;
var G__7513__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__7513__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__7513 = function(string,f,start){
switch(arguments.length){
case 2:
return G__7513__2.call(this,string,f);
case 3:
return G__7513__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7513;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__7514 = null;
var G__7514__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__7514__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__7514 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__7514__2.call(this,string,k);
case 3:
return G__7514__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7514;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__7515 = null;
var G__7515__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__7515__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__7515 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__7515__2.call(this,string,n);
case 3:
return G__7515__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7515;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode(o);
}));

/**
* @constructor
*/
cljs.core.Keyword = (function (k){
this.k = k;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1;
})
cljs.core.Keyword.cljs$lang$type = true;
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function() {
var G__7527 = null;
var G__7527__2 = (function (this_sym7518,coll){
var this__7520 = this;
var this_sym7518__7521 = this;
var ___7522 = this_sym7518__7521;
if((coll == null))
{return null;
} else
{var strobj__7523 = coll.strobj;
if((strobj__7523 == null))
{return cljs.core._lookup.call(null,coll,this__7520.k,null);
} else
{return (strobj__7523[this__7520.k]);
}
}
});
var G__7527__3 = (function (this_sym7519,coll,not_found){
var this__7520 = this;
var this_sym7519__7524 = this;
var ___7525 = this_sym7519__7524;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__7520.k,not_found);
}
});
G__7527 = function(this_sym7519,coll,not_found){
switch(arguments.length){
case 2:
return G__7527__2.call(this,this_sym7519,coll);
case 3:
return G__7527__3.call(this,this_sym7519,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7527;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym7516,args7517){
var this__7526 = this;
return this_sym7516.call.apply(this_sym7516,[this_sym7516].concat(args7517.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__7536 = null;
var G__7536__2 = (function (this_sym7530,coll){
var this_sym7530__7532 = this;
var this__7533 = this_sym7530__7532;
return cljs.core._lookup.call(null,coll,this__7533.toString(),null);
});
var G__7536__3 = (function (this_sym7531,coll,not_found){
var this_sym7531__7534 = this;
var this__7535 = this_sym7531__7534;
return cljs.core._lookup.call(null,coll,this__7535.toString(),not_found);
});
G__7536 = function(this_sym7531,coll,not_found){
switch(arguments.length){
case 2:
return G__7536__2.call(this,this_sym7531,coll);
case 3:
return G__7536__3.call(this,this_sym7531,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7536;
})()
;
String.prototype.apply = (function (this_sym7528,args7529){
return this_sym7528.call.apply(this_sym7528,[this_sym7528].concat(args7529.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__7538 = lazy_seq.x;
if(lazy_seq.realized)
{return x__7538;
} else
{lazy_seq.x = x__7538.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x,__hash){
this.meta = meta;
this.realized = realized;
this.x = x;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850700;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7539 = this;
var h__2281__auto____7540 = this__7539.__hash;
if(!((h__2281__auto____7540 == null)))
{return h__2281__auto____7540;
} else
{var h__2281__auto____7541 = cljs.core.hash_coll.call(null,coll);
this__7539.__hash = h__2281__auto____7541;
return h__2281__auto____7541;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7542 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7543 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__7544 = this;
var this__7545 = this;
return cljs.core.pr_str.call(null,this__7545);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7546 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7547 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7548 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7549 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7550 = this;
return (new cljs.core.LazySeq(meta,this__7550.realized,this__7550.x,this__7550.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7551 = this;
return this__7551.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7552 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7552.meta);
});
cljs.core.LazySeq;

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.cljs$lang$type = true;
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7553 = this;
return this__7553.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__7554 = this;
var ___7555 = this;
(this__7554.buf[this__7554.end] = o);
return this__7554.end = (this__7554.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__7556 = this;
var ___7557 = this;
var ret__7558 = (new cljs.core.ArrayChunk(this__7556.buf,0,this__7556.end));
this__7556.buf = null;
return ret__7558;
});
cljs.core.ChunkBuffer;
cljs.core.chunk_buffer = (function chunk_buffer(capacity){
return (new cljs.core.ChunkBuffer(cljs.core.make_array.call(null,capacity),0));
});

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.cljs$lang$type = true;
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7559 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__7559.arr[this__7559.off]),(this__7559.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7560 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__7560.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__7561 = this;
if((this__7561.off === this__7561.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__7561.arr,(this__7561.off + 1),this__7561.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__7562 = this;
return (this__7562.arr[(this__7562.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__7563 = this;
if((function (){var and__3822__auto____7564 = (i >= 0);
if(and__3822__auto____7564)
{return (i < (this__7563.end - this__7563.off));
} else
{return and__3822__auto____7564;
}
})())
{return (this__7563.arr[(this__7563.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7565 = this;
return (this__7565.end - this__7565.off);
});
cljs.core.ArrayChunk;
cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){
return array_chunk.call(null,arr,0,arr.length);
});
var array_chunk__2 = (function (arr,off){
return array_chunk.call(null,arr,off,arr.length);
});
var array_chunk__3 = (function (arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw('Invalid arity: ' + arguments.length);
};
array_chunk.cljs$lang$arity$1 = array_chunk__1;
array_chunk.cljs$lang$arity$2 = array_chunk__2;
array_chunk.cljs$lang$arity$3 = array_chunk__3;
return array_chunk;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27656296;
})
cljs.core.ChunkedCons.cljs$lang$type = true;
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__7566 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7567 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7568 = this;
return cljs.core._nth.call(null,this__7568.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7569 = this;
if((cljs.core._count.call(null,this__7569.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__7569.chunk),this__7569.more,this__7569.meta));
} else
{if((this__7569.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7569.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__7570 = this;
if((this__7570.more == null))
{return null;
} else
{return this__7570.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7571 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__7572 = this;
return (new cljs.core.ChunkedCons(this__7572.chunk,this__7572.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7573 = this;
return this__7573.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__7574 = this;
return this__7574.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__7575 = this;
if((this__7575.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7575.more;
}
});
cljs.core.ChunkedCons;
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){
if((cljs.core._count.call(null,chunk) === 0))
{return rest;
} else
{return (new cljs.core.ChunkedCons(chunk,rest,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){
return b.add(x);
});
cljs.core.chunk = (function chunk(b){
return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){
return cljs.core._chunked_first.call(null,s);
});
cljs.core.chunk_rest = (function chunk_rest(s){
return cljs.core._chunked_rest.call(null,s);
});
cljs.core.chunk_next = (function chunk_next(s){
if((function (){var G__7579__7580 = s;
if(G__7579__7580)
{if(cljs.core.truth_((function (){var or__3824__auto____7581 = null;
if(cljs.core.truth_(or__3824__auto____7581))
{return or__3824__auto____7581;
} else
{return G__7579__7580.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__7579__7580.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7579__7580);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7579__7580);
}
})())
{return cljs.core._chunked_next.call(null,s);
} else
{return cljs.core.seq.call(null,cljs.core._chunked_rest.call(null,s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__7584 = [];
var s__7585 = s;
while(true){
if(cljs.core.seq.call(null,s__7585))
{ary__7584.push(cljs.core.first.call(null,s__7585));
{
var G__7586 = cljs.core.next.call(null,s__7585);
s__7585 = G__7586;
continue;
}
} else
{return ary__7584;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__7590 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__7591 = 0;
var xs__7592 = cljs.core.seq.call(null,coll);
while(true){
if(xs__7592)
{(ret__7590[i__7591] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__7592)));
{
var G__7593 = (i__7591 + 1);
var G__7594 = cljs.core.next.call(null,xs__7592);
i__7591 = G__7593;
xs__7592 = G__7594;
continue;
}
} else
{}
break;
}
return ret__7590;
});
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return long_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("long-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a__7602 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7603 = cljs.core.seq.call(null,init_val_or_seq);
var i__7604 = 0;
var s__7605 = s__7603;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7606 = s__7605;
if(and__3822__auto____7606)
{return (i__7604 < size);
} else
{return and__3822__auto____7606;
}
})()))
{(a__7602[i__7604] = cljs.core.first.call(null,s__7605));
{
var G__7609 = (i__7604 + 1);
var G__7610 = cljs.core.next.call(null,s__7605);
i__7604 = G__7609;
s__7605 = G__7610;
continue;
}
} else
{return a__7602;
}
break;
}
} else
{var n__2616__auto____7607 = size;
var i__7608 = 0;
while(true){
if((i__7608 < n__2616__auto____7607))
{(a__7602[i__7608] = init_val_or_seq);
{
var G__7611 = (i__7608 + 1);
i__7608 = G__7611;
continue;
}
} else
{}
break;
}
return a__7602;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
long_array.cljs$lang$arity$1 = long_array__1;
long_array.cljs$lang$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return double_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("double-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a__7619 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7620 = cljs.core.seq.call(null,init_val_or_seq);
var i__7621 = 0;
var s__7622 = s__7620;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7623 = s__7622;
if(and__3822__auto____7623)
{return (i__7621 < size);
} else
{return and__3822__auto____7623;
}
})()))
{(a__7619[i__7621] = cljs.core.first.call(null,s__7622));
{
var G__7626 = (i__7621 + 1);
var G__7627 = cljs.core.next.call(null,s__7622);
i__7621 = G__7626;
s__7622 = G__7627;
continue;
}
} else
{return a__7619;
}
break;
}
} else
{var n__2616__auto____7624 = size;
var i__7625 = 0;
while(true){
if((i__7625 < n__2616__auto____7624))
{(a__7619[i__7625] = init_val_or_seq);
{
var G__7628 = (i__7625 + 1);
i__7625 = G__7628;
continue;
}
} else
{}
break;
}
return a__7619;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
double_array.cljs$lang$arity$1 = double_array__1;
double_array.cljs$lang$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return object_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("object-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a__7636 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7637 = cljs.core.seq.call(null,init_val_or_seq);
var i__7638 = 0;
var s__7639 = s__7637;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7640 = s__7639;
if(and__3822__auto____7640)
{return (i__7638 < size);
} else
{return and__3822__auto____7640;
}
})()))
{(a__7636[i__7638] = cljs.core.first.call(null,s__7639));
{
var G__7643 = (i__7638 + 1);
var G__7644 = cljs.core.next.call(null,s__7639);
i__7638 = G__7643;
s__7639 = G__7644;
continue;
}
} else
{return a__7636;
}
break;
}
} else
{var n__2616__auto____7641 = size;
var i__7642 = 0;
while(true){
if((i__7642 < n__2616__auto____7641))
{(a__7636[i__7642] = init_val_or_seq);
{
var G__7645 = (i__7642 + 1);
i__7642 = G__7645;
continue;
}
} else
{}
break;
}
return a__7636;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
object_array.cljs$lang$arity$1 = object_array__1;
object_array.cljs$lang$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_.call(null,s))
{return cljs.core.count.call(null,s);
} else
{var s__7650 = s;
var i__7651 = n;
var sum__7652 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7653 = (i__7651 > 0);
if(and__3822__auto____7653)
{return cljs.core.seq.call(null,s__7650);
} else
{return and__3822__auto____7653;
}
})()))
{{
var G__7654 = cljs.core.next.call(null,s__7650);
var G__7655 = (i__7651 - 1);
var G__7656 = (sum__7652 + 1);
s__7650 = G__7654;
i__7651 = G__7655;
sum__7652 = G__7656;
continue;
}
} else
{return sum__7652;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null))
{return null;
} else
{if((cljs.core.next.call(null,arglist) == null))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if("\uFDD0'else")
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
}),null));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
}),null));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__7661 = cljs.core.seq.call(null,x);
if(s__7661)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__7661))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__7661),concat.call(null,cljs.core.chunk_rest.call(null,s__7661),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__7661),concat.call(null,cljs.core.rest.call(null,s__7661),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__7665__delegate = function (x,y,zs){
var cat__7664 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__7663 = cljs.core.seq.call(null,xys);
if(xys__7663)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__7663))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__7663),cat.call(null,cljs.core.chunk_rest.call(null,xys__7663),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__7663),cat.call(null,cljs.core.rest.call(null,xys__7663),zs));
}
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
}),null));
});
return cat__7664.call(null,concat.call(null,x,y),zs);
};
var G__7665 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7665__delegate.call(this, x, y, zs);
};
G__7665.cljs$lang$maxFixedArity = 2;
G__7665.cljs$lang$applyTo = (function (arglist__7666){
var x = cljs.core.first(arglist__7666);
var y = cljs.core.first(cljs.core.next(arglist__7666));
var zs = cljs.core.rest(cljs.core.next(arglist__7666));
return G__7665__delegate(x, y, zs);
});
G__7665.cljs$lang$arity$variadic = G__7665__delegate;
return G__7665;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$lang$arity$0 = concat__0;
concat.cljs$lang$arity$1 = concat__1;
concat.cljs$lang$arity$2 = concat__2;
concat.cljs$lang$arity$variadic = concat__3.cljs$lang$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___5 = (function() { 
var G__7667__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__7667 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7667__delegate.call(this, a, b, c, d, more);
};
G__7667.cljs$lang$maxFixedArity = 4;
G__7667.cljs$lang$applyTo = (function (arglist__7668){
var a = cljs.core.first(arglist__7668);
var b = cljs.core.first(cljs.core.next(arglist__7668));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7668)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7668))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7668))));
return G__7667__delegate(a, b, c, d, more);
});
G__7667.cljs$lang$arity$variadic = G__7667__delegate;
return G__7667;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$lang$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$lang$arity$1 = list_STAR___1;
list_STAR_.cljs$lang$arity$2 = list_STAR___2;
list_STAR_.cljs$lang$arity$3 = list_STAR___3;
list_STAR_.cljs$lang$arity$4 = list_STAR___4;
list_STAR_.cljs$lang$arity$variadic = list_STAR___5.cljs$lang$arity$variadic;
return list_STAR_;
})()
;
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient.call(null,coll);
});
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_.call(null,tcoll);
});
cljs.core.conj_BANG_ = (function conj_BANG_(tcoll,val){
return cljs.core._conj_BANG_.call(null,tcoll,val);
});
cljs.core.assoc_BANG_ = (function assoc_BANG_(tcoll,key,val){
return cljs.core._assoc_BANG_.call(null,tcoll,key,val);
});
cljs.core.dissoc_BANG_ = (function dissoc_BANG_(tcoll,key){
return cljs.core._dissoc_BANG_.call(null,tcoll,key);
});
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_.call(null,tcoll);
});
cljs.core.disj_BANG_ = (function disj_BANG_(tcoll,val){
return cljs.core._disjoin_BANG_.call(null,tcoll,val);
});
cljs.core.apply_to = (function apply_to(f,argc,args){
var args__7710 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__7711 = cljs.core._first.call(null,args__7710);
var args__7712 = cljs.core._rest.call(null,args__7710);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__7711);
} else
{return f.call(null,a__7711);
}
} else
{var b__7713 = cljs.core._first.call(null,args__7712);
var args__7714 = cljs.core._rest.call(null,args__7712);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__7711,b__7713);
} else
{return f.call(null,a__7711,b__7713);
}
} else
{var c__7715 = cljs.core._first.call(null,args__7714);
var args__7716 = cljs.core._rest.call(null,args__7714);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__7711,b__7713,c__7715);
} else
{return f.call(null,a__7711,b__7713,c__7715);
}
} else
{var d__7717 = cljs.core._first.call(null,args__7716);
var args__7718 = cljs.core._rest.call(null,args__7716);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__7711,b__7713,c__7715,d__7717);
} else
{return f.call(null,a__7711,b__7713,c__7715,d__7717);
}
} else
{var e__7719 = cljs.core._first.call(null,args__7718);
var args__7720 = cljs.core._rest.call(null,args__7718);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__7711,b__7713,c__7715,d__7717,e__7719);
} else
{return f.call(null,a__7711,b__7713,c__7715,d__7717,e__7719);
}
} else
{var f__7721 = cljs.core._first.call(null,args__7720);
var args__7722 = cljs.core._rest.call(null,args__7720);
if((argc === 6))
{if(f__7721.cljs$lang$arity$6)
{return f__7721.cljs$lang$arity$6(a__7711,b__7713,c__7715,d__7717,e__7719,f__7721);
} else
{return f__7721.call(null,a__7711,b__7713,c__7715,d__7717,e__7719,f__7721);
}
} else
{var g__7723 = cljs.core._first.call(null,args__7722);
var args__7724 = cljs.core._rest.call(null,args__7722);
if((argc === 7))
{if(f__7721.cljs$lang$arity$7)
{return f__7721.cljs$lang$arity$7(a__7711,b__7713,c__7715,d__7717,e__7719,f__7721,g__7723);
} else
{return f__7721.call(null,a__7711,b__7713,c__7715,d__7717,e__7719,f__7721,g__7723);
}
} else
{var h__7725 = cljs.core._first.call(null,args__7724);
var args__7726 = cljs.core._rest.call(null,args__7724);
if((argc === 8))
{if(f__7721.cljs$lang$arity$8)
{return f__7721.cljs$lang$arity$8(a__7711,b__7713,c__7715,d__7717,e__7719,f__7721,g__7723,h__7725);
} else
{return f__7721.call(null,a__7711,b__7713,c__7715,d__7717,e__7719,f__7721,g__7723,h__7725);
}
} else
{var i__7727 = cljs.core._first.call(null,args__7726);
var args__7728 = cljs.core._rest.call(null,args__7726);
if((argc === 9))
{if(f__7721.cljs$lang$arity$9)
{return f__7721.cljs$lang$arity$9(a__7711,b__7713,c__7715,d__7717,e__7719,f__7721,g__7723,h__7725,i__7727);
} else
{return f__7721.call(null,a__7711,b__7713,c__7715,d__7717,e__7719,f__7721,g__7723,h__7725,i__7727);
}
} else
{var j__7729 = cljs.core._first.call(null,args__7728);
var args__7730 = cljs.core._rest.call(null,args__7728);
if((argc === 10))
{if(f__7721.cljs$lang$arity$10)
{return f__7721.cljs$lang$arity$10(a__7711,b__7713,c__7715,d__7717,e__7719,f__7721,g__7723,h__7725,i__7727,j__7729);
} else
{return f__7721.call(null,a__7711,b__7713,c__7715,d__7717,e__7719,f__7721,g__7723,h__7725,i__7727,j__7729);
}
} else
{var k__7731 = cljs.core._first.call(null,args__7730);
var args__7732 = cljs.core._rest.call(null,args__7730);
if((argc === 11))
{if(f__7721.cljs$lang$arity$11)
{return f__7721.cljs$lang$arity$11(a__7711,b__7713,c__7715,d__7717,e__7719,f__7721,g__7723,h__7725,i__7727,j__7729,k__7731);
} else
{return f__7721.call(null,a__7711,b__7713,c__7715,d__7717,e__7719,f__7721,g__7723,h__7725,i__7727,j__7729,k__7731);
}
} else
{var l__7733 = cljs.core._first.call(null,args__7732);
var args__7734 = cljs.core._rest.call(null,args__7732);
if((argc === 12))
{if(f__7721.cljs$lang$arity$12)
{return f__7721.cljs$lang$arity$12(a__7711,b__7713,c__7715,d__7717,e__7719,f__7721,g__7723,h__7725,i__7727,j__7729,k__7731,l__7733);
} else
{return f__7721.call(null,a__7711,b__7713,c__7715,d__7717,e__7719,f__7721,g__7723,h__7725,i__7727,j__7729,k__7731,l__7733);
}
} else
{var m__7735 = cljs.core._first.call(null,args__7734);
var args__7736 = cljs.core._rest.call(null,args__7734);
if((argc === 13))
{if(f__7721.cljs$lang$arity$13)
{return f__7721.cljs$lang$arity$13(a__7711,b__7713,c__7715,d__7717,e__7719,f__7721,g__7723,h__7725,i__7727,j__7729,k__7731,l__7733,m__7735);
} else
{return f__7721.call(null,a__7711,b__7713,c__7715,d__7717,e__7719,f__7721,g__7723,h__7725,i__7727,j__7729,k__7731,l__7733,m__7735);
}
} else
{var n__7737 = cljs.core._first.call(null,args__7736);
var args__7738 = cljs.core._rest.call(null,args__7736);
if((argc === 14))
{if(f__7721.cljs$lang$arity$14)
{return f__7721.cljs$lang$arity$14(a__7711,b__7713,c__7715,d__7717,e__7719,f__7721,g__7723,h__7725,i__7727,j__7729,k__7731,l__7733,m__7735,n__7737);
} else
{return f__7721.call(null,a__7711,b__7713,c__7715,d__7717,e__7719,f__7721,g__7723,h__7725,i__7727,j__7729,k__7731,l__7733,m__7735,n__7737);
}
} else
{var o__7739 = cljs.core._first.call(null,args__7738);
var args__7740 = cljs.core._rest.call(null,args__7738);
if((argc === 15))
{if(f__7721.cljs$lang$arity$15)
{return f__7721.cljs$lang$arity$15(a__7711,b__7713,c__7715,d__7717,e__7719,f__7721,g__7723,h__7725,i__7727,j__7729,k__7731,l__7733,m__7735,n__7737,o__7739);
} else
{return f__7721.call(null,a__7711,b__7713,c__7715,d__7717,e__7719,f__7721,g__7723,h__7725,i__7727,j__7729,k__7731,l__7733,m__7735,n__7737,o__7739);
}
} else
{var p__7741 = cljs.core._first.call(null,args__7740);
var args__7742 = cljs.core._rest.call(null,args__7740);
if((argc === 16))
{if(f__7721.cljs$lang$arity$16)
{return f__7721.cljs$lang$arity$16(a__7711,b__7713,c__7715,d__7717,e__7719,f__7721,g__7723,h__7725,i__7727,j__7729,k__7731,l__7733,m__7735,n__7737,o__7739,p__7741);
} else
{return f__7721.call(null,a__7711,b__7713,c__7715,d__7717,e__7719,f__7721,g__7723,h__7725,i__7727,j__7729,k__7731,l__7733,m__7735,n__7737,o__7739,p__7741);
}
} else
{var q__7743 = cljs.core._first.call(null,args__7742);
var args__7744 = cljs.core._rest.call(null,args__7742);
if((argc === 17))
{if(f__7721.cljs$lang$arity$17)
{return f__7721.cljs$lang$arity$17(a__7711,b__7713,c__7715,d__7717,e__7719,f__7721,g__7723,h__7725,i__7727,j__7729,k__7731,l__7733,m__7735,n__7737,o__7739,p__7741,q__7743);
} else
{return f__7721.call(null,a__7711,b__7713,c__7715,d__7717,e__7719,f__7721,g__7723,h__7725,i__7727,j__7729,k__7731,l__7733,m__7735,n__7737,o__7739,p__7741,q__7743);
}
} else
{var r__7745 = cljs.core._first.call(null,args__7744);
var args__7746 = cljs.core._rest.call(null,args__7744);
if((argc === 18))
{if(f__7721.cljs$lang$arity$18)
{return f__7721.cljs$lang$arity$18(a__7711,b__7713,c__7715,d__7717,e__7719,f__7721,g__7723,h__7725,i__7727,j__7729,k__7731,l__7733,m__7735,n__7737,o__7739,p__7741,q__7743,r__7745);
} else
{return f__7721.call(null,a__7711,b__7713,c__7715,d__7717,e__7719,f__7721,g__7723,h__7725,i__7727,j__7729,k__7731,l__7733,m__7735,n__7737,o__7739,p__7741,q__7743,r__7745);
}
} else
{var s__7747 = cljs.core._first.call(null,args__7746);
var args__7748 = cljs.core._rest.call(null,args__7746);
if((argc === 19))
{if(f__7721.cljs$lang$arity$19)
{return f__7721.cljs$lang$arity$19(a__7711,b__7713,c__7715,d__7717,e__7719,f__7721,g__7723,h__7725,i__7727,j__7729,k__7731,l__7733,m__7735,n__7737,o__7739,p__7741,q__7743,r__7745,s__7747);
} else
{return f__7721.call(null,a__7711,b__7713,c__7715,d__7717,e__7719,f__7721,g__7723,h__7725,i__7727,j__7729,k__7731,l__7733,m__7735,n__7737,o__7739,p__7741,q__7743,r__7745,s__7747);
}
} else
{var t__7749 = cljs.core._first.call(null,args__7748);
var args__7750 = cljs.core._rest.call(null,args__7748);
if((argc === 20))
{if(f__7721.cljs$lang$arity$20)
{return f__7721.cljs$lang$arity$20(a__7711,b__7713,c__7715,d__7717,e__7719,f__7721,g__7723,h__7725,i__7727,j__7729,k__7731,l__7733,m__7735,n__7737,o__7739,p__7741,q__7743,r__7745,s__7747,t__7749);
} else
{return f__7721.call(null,a__7711,b__7713,c__7715,d__7717,e__7719,f__7721,g__7723,h__7725,i__7727,j__7729,k__7731,l__7733,m__7735,n__7737,o__7739,p__7741,q__7743,r__7745,s__7747,t__7749);
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
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
}
});
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity__7765 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7766 = cljs.core.bounded_count.call(null,args,(fixed_arity__7765 + 1));
if((bc__7766 <= fixed_arity__7765))
{return cljs.core.apply_to.call(null,f,bc__7766,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__7767 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__7768 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7769 = cljs.core.bounded_count.call(null,arglist__7767,(fixed_arity__7768 + 1));
if((bc__7769 <= fixed_arity__7768))
{return cljs.core.apply_to.call(null,f,bc__7769,arglist__7767);
} else
{return f.cljs$lang$applyTo(arglist__7767);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7767));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__7770 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__7771 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7772 = cljs.core.bounded_count.call(null,arglist__7770,(fixed_arity__7771 + 1));
if((bc__7772 <= fixed_arity__7771))
{return cljs.core.apply_to.call(null,f,bc__7772,arglist__7770);
} else
{return f.cljs$lang$applyTo(arglist__7770);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7770));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__7773 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__7774 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7775 = cljs.core.bounded_count.call(null,arglist__7773,(fixed_arity__7774 + 1));
if((bc__7775 <= fixed_arity__7774))
{return cljs.core.apply_to.call(null,f,bc__7775,arglist__7773);
} else
{return f.cljs$lang$applyTo(arglist__7773);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7773));
}
});
var apply__6 = (function() { 
var G__7779__delegate = function (f,a,b,c,d,args){
var arglist__7776 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__7777 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7778 = cljs.core.bounded_count.call(null,arglist__7776,(fixed_arity__7777 + 1));
if((bc__7778 <= fixed_arity__7777))
{return cljs.core.apply_to.call(null,f,bc__7778,arglist__7776);
} else
{return f.cljs$lang$applyTo(arglist__7776);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7776));
}
};
var G__7779 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__7779__delegate.call(this, f, a, b, c, d, args);
};
G__7779.cljs$lang$maxFixedArity = 5;
G__7779.cljs$lang$applyTo = (function (arglist__7780){
var f = cljs.core.first(arglist__7780);
var a = cljs.core.first(cljs.core.next(arglist__7780));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7780)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7780))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7780)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7780)))));
return G__7779__delegate(f, a, b, c, d, args);
});
G__7779.cljs$lang$arity$variadic = G__7779__delegate;
return G__7779;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$lang$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$lang$arity$2 = apply__2;
apply.cljs$lang$arity$3 = apply__3;
apply.cljs$lang$arity$4 = apply__4;
apply.cljs$lang$arity$5 = apply__5;
apply.cljs$lang$arity$variadic = apply__6.cljs$lang$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__7781){
var obj = cljs.core.first(arglist__7781);
var f = cljs.core.first(cljs.core.next(arglist__7781));
var args = cljs.core.rest(cljs.core.next(arglist__7781));
return vary_meta__delegate(obj, f, args);
});
vary_meta.cljs$lang$arity$variadic = vary_meta__delegate;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3 = (function() { 
var G__7782__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__7782 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7782__delegate.call(this, x, y, more);
};
G__7782.cljs$lang$maxFixedArity = 2;
G__7782.cljs$lang$applyTo = (function (arglist__7783){
var x = cljs.core.first(arglist__7783);
var y = cljs.core.first(cljs.core.next(arglist__7783));
var more = cljs.core.rest(cljs.core.next(arglist__7783));
return G__7782__delegate(x, y, more);
});
G__7782.cljs$lang$arity$variadic = G__7782__delegate;
return G__7782;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$lang$arity$1 = not_EQ___1;
not_EQ_.cljs$lang$arity$2 = not_EQ___2;
not_EQ_.cljs$lang$arity$variadic = not_EQ___3.cljs$lang$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.seq.call(null,coll))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((cljs.core.seq.call(null,coll) == null))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__7784 = pred;
var G__7785 = cljs.core.next.call(null,coll);
pred = G__7784;
coll = G__7785;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return !(cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.seq.call(null,coll))
{var or__3824__auto____7787 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____7787))
{return or__3824__auto____7787;
} else
{{
var G__7788 = pred;
var G__7789 = cljs.core.next.call(null,coll);
pred = G__7788;
coll = G__7789;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.integer_QMARK_.call(null,n))
{return ((n & 1) === 0);
} else
{throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return !(cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__7790 = null;
var G__7790__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__7790__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__7790__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__7790__3 = (function() { 
var G__7791__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__7791 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7791__delegate.call(this, x, y, zs);
};
G__7791.cljs$lang$maxFixedArity = 2;
G__7791.cljs$lang$applyTo = (function (arglist__7792){
var x = cljs.core.first(arglist__7792);
var y = cljs.core.first(cljs.core.next(arglist__7792));
var zs = cljs.core.rest(cljs.core.next(arglist__7792));
return G__7791__delegate(x, y, zs);
});
G__7791.cljs$lang$arity$variadic = G__7791__delegate;
return G__7791;
})()
;
G__7790 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__7790__0.call(this);
case 1:
return G__7790__1.call(this,x);
case 2:
return G__7790__2.call(this,x,y);
default:
return G__7790__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__7790.cljs$lang$maxFixedArity = 2;
G__7790.cljs$lang$applyTo = G__7790__3.cljs$lang$applyTo;
return G__7790;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__7793__delegate = function (args){
return x;
};
var G__7793 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7793__delegate.call(this, args);
};
G__7793.cljs$lang$maxFixedArity = 0;
G__7793.cljs$lang$applyTo = (function (arglist__7794){
var args = cljs.core.seq(arglist__7794);;
return G__7793__delegate(args);
});
G__7793.cljs$lang$arity$variadic = G__7793__delegate;
return G__7793;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__7801 = null;
var G__7801__0 = (function (){
return f.call(null,g.call(null));
});
var G__7801__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__7801__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__7801__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__7801__4 = (function() { 
var G__7802__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__7802 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7802__delegate.call(this, x, y, z, args);
};
G__7802.cljs$lang$maxFixedArity = 3;
G__7802.cljs$lang$applyTo = (function (arglist__7803){
var x = cljs.core.first(arglist__7803);
var y = cljs.core.first(cljs.core.next(arglist__7803));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7803)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7803)));
return G__7802__delegate(x, y, z, args);
});
G__7802.cljs$lang$arity$variadic = G__7802__delegate;
return G__7802;
})()
;
G__7801 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7801__0.call(this);
case 1:
return G__7801__1.call(this,x);
case 2:
return G__7801__2.call(this,x,y);
case 3:
return G__7801__3.call(this,x,y,z);
default:
return G__7801__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7801.cljs$lang$maxFixedArity = 3;
G__7801.cljs$lang$applyTo = G__7801__4.cljs$lang$applyTo;
return G__7801;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__7804 = null;
var G__7804__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__7804__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__7804__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__7804__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__7804__4 = (function() { 
var G__7805__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__7805 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7805__delegate.call(this, x, y, z, args);
};
G__7805.cljs$lang$maxFixedArity = 3;
G__7805.cljs$lang$applyTo = (function (arglist__7806){
var x = cljs.core.first(arglist__7806);
var y = cljs.core.first(cljs.core.next(arglist__7806));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7806)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7806)));
return G__7805__delegate(x, y, z, args);
});
G__7805.cljs$lang$arity$variadic = G__7805__delegate;
return G__7805;
})()
;
G__7804 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7804__0.call(this);
case 1:
return G__7804__1.call(this,x);
case 2:
return G__7804__2.call(this,x,y);
case 3:
return G__7804__3.call(this,x,y,z);
default:
return G__7804__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7804.cljs$lang$maxFixedArity = 3;
G__7804.cljs$lang$applyTo = G__7804__4.cljs$lang$applyTo;
return G__7804;
})()
});
var comp__4 = (function() { 
var G__7807__delegate = function (f1,f2,f3,fs){
var fs__7798 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__7808__delegate = function (args){
var ret__7799 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__7798),args);
var fs__7800 = cljs.core.next.call(null,fs__7798);
while(true){
if(fs__7800)
{{
var G__7809 = cljs.core.first.call(null,fs__7800).call(null,ret__7799);
var G__7810 = cljs.core.next.call(null,fs__7800);
ret__7799 = G__7809;
fs__7800 = G__7810;
continue;
}
} else
{return ret__7799;
}
break;
}
};
var G__7808 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7808__delegate.call(this, args);
};
G__7808.cljs$lang$maxFixedArity = 0;
G__7808.cljs$lang$applyTo = (function (arglist__7811){
var args = cljs.core.seq(arglist__7811);;
return G__7808__delegate(args);
});
G__7808.cljs$lang$arity$variadic = G__7808__delegate;
return G__7808;
})()
;
};
var G__7807 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7807__delegate.call(this, f1, f2, f3, fs);
};
G__7807.cljs$lang$maxFixedArity = 3;
G__7807.cljs$lang$applyTo = (function (arglist__7812){
var f1 = cljs.core.first(arglist__7812);
var f2 = cljs.core.first(cljs.core.next(arglist__7812));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7812)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7812)));
return G__7807__delegate(f1, f2, f3, fs);
});
G__7807.cljs$lang$arity$variadic = G__7807__delegate;
return G__7807;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$lang$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$lang$arity$0 = comp__0;
comp.cljs$lang$arity$1 = comp__1;
comp.cljs$lang$arity$2 = comp__2;
comp.cljs$lang$arity$3 = comp__3;
comp.cljs$lang$arity$variadic = comp__4.cljs$lang$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2 = (function (f,arg1){
return (function() { 
var G__7813__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__7813 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7813__delegate.call(this, args);
};
G__7813.cljs$lang$maxFixedArity = 0;
G__7813.cljs$lang$applyTo = (function (arglist__7814){
var args = cljs.core.seq(arglist__7814);;
return G__7813__delegate(args);
});
G__7813.cljs$lang$arity$variadic = G__7813__delegate;
return G__7813;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__7815__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__7815 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7815__delegate.call(this, args);
};
G__7815.cljs$lang$maxFixedArity = 0;
G__7815.cljs$lang$applyTo = (function (arglist__7816){
var args = cljs.core.seq(arglist__7816);;
return G__7815__delegate(args);
});
G__7815.cljs$lang$arity$variadic = G__7815__delegate;
return G__7815;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__7817__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__7817 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7817__delegate.call(this, args);
};
G__7817.cljs$lang$maxFixedArity = 0;
G__7817.cljs$lang$applyTo = (function (arglist__7818){
var args = cljs.core.seq(arglist__7818);;
return G__7817__delegate(args);
});
G__7817.cljs$lang$arity$variadic = G__7817__delegate;
return G__7817;
})()
;
});
var partial__5 = (function() { 
var G__7819__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__7820__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__7820 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7820__delegate.call(this, args);
};
G__7820.cljs$lang$maxFixedArity = 0;
G__7820.cljs$lang$applyTo = (function (arglist__7821){
var args = cljs.core.seq(arglist__7821);;
return G__7820__delegate(args);
});
G__7820.cljs$lang$arity$variadic = G__7820__delegate;
return G__7820;
})()
;
};
var G__7819 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7819__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__7819.cljs$lang$maxFixedArity = 4;
G__7819.cljs$lang$applyTo = (function (arglist__7822){
var f = cljs.core.first(arglist__7822);
var arg1 = cljs.core.first(cljs.core.next(arglist__7822));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7822)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7822))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7822))));
return G__7819__delegate(f, arg1, arg2, arg3, more);
});
G__7819.cljs$lang$arity$variadic = G__7819__delegate;
return G__7819;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$lang$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$lang$arity$2 = partial__2;
partial.cljs$lang$arity$3 = partial__3;
partial.cljs$lang$arity$4 = partial__4;
partial.cljs$lang$arity$variadic = partial__5.cljs$lang$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__7823 = null;
var G__7823__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__7823__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__7823__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__7823__4 = (function() { 
var G__7824__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__7824 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7824__delegate.call(this, a, b, c, ds);
};
G__7824.cljs$lang$maxFixedArity = 3;
G__7824.cljs$lang$applyTo = (function (arglist__7825){
var a = cljs.core.first(arglist__7825);
var b = cljs.core.first(cljs.core.next(arglist__7825));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7825)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7825)));
return G__7824__delegate(a, b, c, ds);
});
G__7824.cljs$lang$arity$variadic = G__7824__delegate;
return G__7824;
})()
;
G__7823 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__7823__1.call(this,a);
case 2:
return G__7823__2.call(this,a,b);
case 3:
return G__7823__3.call(this,a,b,c);
default:
return G__7823__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7823.cljs$lang$maxFixedArity = 3;
G__7823.cljs$lang$applyTo = G__7823__4.cljs$lang$applyTo;
return G__7823;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__7826 = null;
var G__7826__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7826__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__7826__4 = (function() { 
var G__7827__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__7827 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7827__delegate.call(this, a, b, c, ds);
};
G__7827.cljs$lang$maxFixedArity = 3;
G__7827.cljs$lang$applyTo = (function (arglist__7828){
var a = cljs.core.first(arglist__7828);
var b = cljs.core.first(cljs.core.next(arglist__7828));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7828)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7828)));
return G__7827__delegate(a, b, c, ds);
});
G__7827.cljs$lang$arity$variadic = G__7827__delegate;
return G__7827;
})()
;
G__7826 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7826__2.call(this,a,b);
case 3:
return G__7826__3.call(this,a,b,c);
default:
return G__7826__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7826.cljs$lang$maxFixedArity = 3;
G__7826.cljs$lang$applyTo = G__7826__4.cljs$lang$applyTo;
return G__7826;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__7829 = null;
var G__7829__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7829__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__7829__4 = (function() { 
var G__7830__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__7830 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7830__delegate.call(this, a, b, c, ds);
};
G__7830.cljs$lang$maxFixedArity = 3;
G__7830.cljs$lang$applyTo = (function (arglist__7831){
var a = cljs.core.first(arglist__7831);
var b = cljs.core.first(cljs.core.next(arglist__7831));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7831)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7831)));
return G__7830__delegate(a, b, c, ds);
});
G__7830.cljs$lang$arity$variadic = G__7830__delegate;
return G__7830;
})()
;
G__7829 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7829__2.call(this,a,b);
case 3:
return G__7829__3.call(this,a,b,c);
default:
return G__7829__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7829.cljs$lang$maxFixedArity = 3;
G__7829.cljs$lang$applyTo = G__7829__4.cljs$lang$applyTo;
return G__7829;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
fnil.cljs$lang$arity$2 = fnil__2;
fnil.cljs$lang$arity$3 = fnil__3;
fnil.cljs$lang$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__7847 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7855 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7855)
{var s__7856 = temp__3974__auto____7855;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7856))
{var c__7857 = cljs.core.chunk_first.call(null,s__7856);
var size__7858 = cljs.core.count.call(null,c__7857);
var b__7859 = cljs.core.chunk_buffer.call(null,size__7858);
var n__2616__auto____7860 = size__7858;
var i__7861 = 0;
while(true){
if((i__7861 < n__2616__auto____7860))
{cljs.core.chunk_append.call(null,b__7859,f.call(null,(idx + i__7861),cljs.core._nth.call(null,c__7857,i__7861)));
{
var G__7862 = (i__7861 + 1);
i__7861 = G__7862;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7859),mapi.call(null,(idx + size__7858),cljs.core.chunk_rest.call(null,s__7856)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__7856)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__7856)));
}
} else
{return null;
}
}),null));
});
return mapi__7847.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7872 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7872)
{var s__7873 = temp__3974__auto____7872;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7873))
{var c__7874 = cljs.core.chunk_first.call(null,s__7873);
var size__7875 = cljs.core.count.call(null,c__7874);
var b__7876 = cljs.core.chunk_buffer.call(null,size__7875);
var n__2616__auto____7877 = size__7875;
var i__7878 = 0;
while(true){
if((i__7878 < n__2616__auto____7877))
{var x__7879 = f.call(null,cljs.core._nth.call(null,c__7874,i__7878));
if((x__7879 == null))
{} else
{cljs.core.chunk_append.call(null,b__7876,x__7879);
}
{
var G__7881 = (i__7878 + 1);
i__7878 = G__7881;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7876),keep.call(null,f,cljs.core.chunk_rest.call(null,s__7873)));
} else
{var x__7880 = f.call(null,cljs.core.first.call(null,s__7873));
if((x__7880 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__7873));
} else
{return cljs.core.cons.call(null,x__7880,keep.call(null,f,cljs.core.rest.call(null,s__7873)));
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__7907 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7917 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7917)
{var s__7918 = temp__3974__auto____7917;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7918))
{var c__7919 = cljs.core.chunk_first.call(null,s__7918);
var size__7920 = cljs.core.count.call(null,c__7919);
var b__7921 = cljs.core.chunk_buffer.call(null,size__7920);
var n__2616__auto____7922 = size__7920;
var i__7923 = 0;
while(true){
if((i__7923 < n__2616__auto____7922))
{var x__7924 = f.call(null,(idx + i__7923),cljs.core._nth.call(null,c__7919,i__7923));
if((x__7924 == null))
{} else
{cljs.core.chunk_append.call(null,b__7921,x__7924);
}
{
var G__7926 = (i__7923 + 1);
i__7923 = G__7926;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7921),keepi.call(null,(idx + size__7920),cljs.core.chunk_rest.call(null,s__7918)));
} else
{var x__7925 = f.call(null,idx,cljs.core.first.call(null,s__7918));
if((x__7925 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__7918));
} else
{return cljs.core.cons.call(null,x__7925,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__7918)));
}
}
} else
{return null;
}
}),null));
});
return keepi__7907.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8012 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____8012))
{return p.call(null,y);
} else
{return and__3822__auto____8012;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8013 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____8013))
{var and__3822__auto____8014 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____8014))
{return p.call(null,z);
} else
{return and__3822__auto____8014;
}
} else
{return and__3822__auto____8013;
}
})());
});
var ep1__4 = (function() { 
var G__8083__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8015 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8015))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____8015;
}
})());
};
var G__8083 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8083__delegate.call(this, x, y, z, args);
};
G__8083.cljs$lang$maxFixedArity = 3;
G__8083.cljs$lang$applyTo = (function (arglist__8084){
var x = cljs.core.first(arglist__8084);
var y = cljs.core.first(cljs.core.next(arglist__8084));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8084)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8084)));
return G__8083__delegate(x, y, z, args);
});
G__8083.cljs$lang$arity$variadic = G__8083__delegate;
return G__8083;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$lang$arity$0 = ep1__0;
ep1.cljs$lang$arity$1 = ep1__1;
ep1.cljs$lang$arity$2 = ep1__2;
ep1.cljs$lang$arity$3 = ep1__3;
ep1.cljs$lang$arity$variadic = ep1__4.cljs$lang$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8027 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8027))
{return p2.call(null,x);
} else
{return and__3822__auto____8027;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8028 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8028))
{var and__3822__auto____8029 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8029))
{var and__3822__auto____8030 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8030))
{return p2.call(null,y);
} else
{return and__3822__auto____8030;
}
} else
{return and__3822__auto____8029;
}
} else
{return and__3822__auto____8028;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8031 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8031))
{var and__3822__auto____8032 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8032))
{var and__3822__auto____8033 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____8033))
{var and__3822__auto____8034 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8034))
{var and__3822__auto____8035 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8035))
{return p2.call(null,z);
} else
{return and__3822__auto____8035;
}
} else
{return and__3822__auto____8034;
}
} else
{return and__3822__auto____8033;
}
} else
{return and__3822__auto____8032;
}
} else
{return and__3822__auto____8031;
}
})());
});
var ep2__4 = (function() { 
var G__8085__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8036 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8036))
{return cljs.core.every_QMARK_.call(null,(function (p1__7882_SHARP_){
var and__3822__auto____8037 = p1.call(null,p1__7882_SHARP_);
if(cljs.core.truth_(and__3822__auto____8037))
{return p2.call(null,p1__7882_SHARP_);
} else
{return and__3822__auto____8037;
}
}),args);
} else
{return and__3822__auto____8036;
}
})());
};
var G__8085 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8085__delegate.call(this, x, y, z, args);
};
G__8085.cljs$lang$maxFixedArity = 3;
G__8085.cljs$lang$applyTo = (function (arglist__8086){
var x = cljs.core.first(arglist__8086);
var y = cljs.core.first(cljs.core.next(arglist__8086));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8086)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8086)));
return G__8085__delegate(x, y, z, args);
});
G__8085.cljs$lang$arity$variadic = G__8085__delegate;
return G__8085;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$lang$arity$0 = ep2__0;
ep2.cljs$lang$arity$1 = ep2__1;
ep2.cljs$lang$arity$2 = ep2__2;
ep2.cljs$lang$arity$3 = ep2__3;
ep2.cljs$lang$arity$variadic = ep2__4.cljs$lang$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8056 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8056))
{var and__3822__auto____8057 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8057))
{return p3.call(null,x);
} else
{return and__3822__auto____8057;
}
} else
{return and__3822__auto____8056;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8058 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8058))
{var and__3822__auto____8059 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8059))
{var and__3822__auto____8060 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____8060))
{var and__3822__auto____8061 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8061))
{var and__3822__auto____8062 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8062))
{return p3.call(null,y);
} else
{return and__3822__auto____8062;
}
} else
{return and__3822__auto____8061;
}
} else
{return and__3822__auto____8060;
}
} else
{return and__3822__auto____8059;
}
} else
{return and__3822__auto____8058;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8063 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8063))
{var and__3822__auto____8064 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8064))
{var and__3822__auto____8065 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____8065))
{var and__3822__auto____8066 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8066))
{var and__3822__auto____8067 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8067))
{var and__3822__auto____8068 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____8068))
{var and__3822__auto____8069 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____8069))
{var and__3822__auto____8070 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____8070))
{return p3.call(null,z);
} else
{return and__3822__auto____8070;
}
} else
{return and__3822__auto____8069;
}
} else
{return and__3822__auto____8068;
}
} else
{return and__3822__auto____8067;
}
} else
{return and__3822__auto____8066;
}
} else
{return and__3822__auto____8065;
}
} else
{return and__3822__auto____8064;
}
} else
{return and__3822__auto____8063;
}
})());
});
var ep3__4 = (function() { 
var G__8087__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8071 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8071))
{return cljs.core.every_QMARK_.call(null,(function (p1__7883_SHARP_){
var and__3822__auto____8072 = p1.call(null,p1__7883_SHARP_);
if(cljs.core.truth_(and__3822__auto____8072))
{var and__3822__auto____8073 = p2.call(null,p1__7883_SHARP_);
if(cljs.core.truth_(and__3822__auto____8073))
{return p3.call(null,p1__7883_SHARP_);
} else
{return and__3822__auto____8073;
}
} else
{return and__3822__auto____8072;
}
}),args);
} else
{return and__3822__auto____8071;
}
})());
};
var G__8087 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8087__delegate.call(this, x, y, z, args);
};
G__8087.cljs$lang$maxFixedArity = 3;
G__8087.cljs$lang$applyTo = (function (arglist__8088){
var x = cljs.core.first(arglist__8088);
var y = cljs.core.first(cljs.core.next(arglist__8088));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8088)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8088)));
return G__8087__delegate(x, y, z, args);
});
G__8087.cljs$lang$arity$variadic = G__8087__delegate;
return G__8087;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$lang$arity$0 = ep3__0;
ep3.cljs$lang$arity$1 = ep3__1;
ep3.cljs$lang$arity$2 = ep3__2;
ep3.cljs$lang$arity$3 = ep3__3;
ep3.cljs$lang$arity$variadic = ep3__4.cljs$lang$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__8089__delegate = function (p1,p2,p3,ps){
var ps__8074 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__7884_SHARP_){
return p1__7884_SHARP_.call(null,x);
}),ps__8074);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__7885_SHARP_){
var and__3822__auto____8079 = p1__7885_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____8079))
{return p1__7885_SHARP_.call(null,y);
} else
{return and__3822__auto____8079;
}
}),ps__8074);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__7886_SHARP_){
var and__3822__auto____8080 = p1__7886_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____8080))
{var and__3822__auto____8081 = p1__7886_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____8081))
{return p1__7886_SHARP_.call(null,z);
} else
{return and__3822__auto____8081;
}
} else
{return and__3822__auto____8080;
}
}),ps__8074);
});
var epn__4 = (function() { 
var G__8090__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8082 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8082))
{return cljs.core.every_QMARK_.call(null,(function (p1__7887_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__7887_SHARP_,args);
}),ps__8074);
} else
{return and__3822__auto____8082;
}
})());
};
var G__8090 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8090__delegate.call(this, x, y, z, args);
};
G__8090.cljs$lang$maxFixedArity = 3;
G__8090.cljs$lang$applyTo = (function (arglist__8091){
var x = cljs.core.first(arglist__8091);
var y = cljs.core.first(cljs.core.next(arglist__8091));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8091)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8091)));
return G__8090__delegate(x, y, z, args);
});
G__8090.cljs$lang$arity$variadic = G__8090__delegate;
return G__8090;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$lang$arity$0 = epn__0;
epn.cljs$lang$arity$1 = epn__1;
epn.cljs$lang$arity$2 = epn__2;
epn.cljs$lang$arity$3 = epn__3;
epn.cljs$lang$arity$variadic = epn__4.cljs$lang$arity$variadic;
return epn;
})()
};
var G__8089 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8089__delegate.call(this, p1, p2, p3, ps);
};
G__8089.cljs$lang$maxFixedArity = 3;
G__8089.cljs$lang$applyTo = (function (arglist__8092){
var p1 = cljs.core.first(arglist__8092);
var p2 = cljs.core.first(cljs.core.next(arglist__8092));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8092)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8092)));
return G__8089__delegate(p1, p2, p3, ps);
});
G__8089.cljs$lang$arity$variadic = G__8089__delegate;
return G__8089;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$lang$arity$1 = every_pred__1;
every_pred.cljs$lang$arity$2 = every_pred__2;
every_pred.cljs$lang$arity$3 = every_pred__3;
every_pred.cljs$lang$arity$variadic = every_pred__4.cljs$lang$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
return p.call(null,x);
});
var sp1__2 = (function (x,y){
var or__3824__auto____8173 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____8173))
{return or__3824__auto____8173;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____8174 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____8174))
{return or__3824__auto____8174;
} else
{var or__3824__auto____8175 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____8175))
{return or__3824__auto____8175;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__8244__delegate = function (x,y,z,args){
var or__3824__auto____8176 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8176))
{return or__3824__auto____8176;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__8244 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8244__delegate.call(this, x, y, z, args);
};
G__8244.cljs$lang$maxFixedArity = 3;
G__8244.cljs$lang$applyTo = (function (arglist__8245){
var x = cljs.core.first(arglist__8245);
var y = cljs.core.first(cljs.core.next(arglist__8245));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8245)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8245)));
return G__8244__delegate(x, y, z, args);
});
G__8244.cljs$lang$arity$variadic = G__8244__delegate;
return G__8244;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$lang$arity$0 = sp1__0;
sp1.cljs$lang$arity$1 = sp1__1;
sp1.cljs$lang$arity$2 = sp1__2;
sp1.cljs$lang$arity$3 = sp1__3;
sp1.cljs$lang$arity$variadic = sp1__4.cljs$lang$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3824__auto____8188 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8188))
{return or__3824__auto____8188;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____8189 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8189))
{return or__3824__auto____8189;
} else
{var or__3824__auto____8190 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8190))
{return or__3824__auto____8190;
} else
{var or__3824__auto____8191 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8191))
{return or__3824__auto____8191;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____8192 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8192))
{return or__3824__auto____8192;
} else
{var or__3824__auto____8193 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8193))
{return or__3824__auto____8193;
} else
{var or__3824__auto____8194 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____8194))
{return or__3824__auto____8194;
} else
{var or__3824__auto____8195 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8195))
{return or__3824__auto____8195;
} else
{var or__3824__auto____8196 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8196))
{return or__3824__auto____8196;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__8246__delegate = function (x,y,z,args){
var or__3824__auto____8197 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8197))
{return or__3824__auto____8197;
} else
{return cljs.core.some.call(null,(function (p1__7927_SHARP_){
var or__3824__auto____8198 = p1.call(null,p1__7927_SHARP_);
if(cljs.core.truth_(or__3824__auto____8198))
{return or__3824__auto____8198;
} else
{return p2.call(null,p1__7927_SHARP_);
}
}),args);
}
};
var G__8246 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8246__delegate.call(this, x, y, z, args);
};
G__8246.cljs$lang$maxFixedArity = 3;
G__8246.cljs$lang$applyTo = (function (arglist__8247){
var x = cljs.core.first(arglist__8247);
var y = cljs.core.first(cljs.core.next(arglist__8247));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8247)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8247)));
return G__8246__delegate(x, y, z, args);
});
G__8246.cljs$lang$arity$variadic = G__8246__delegate;
return G__8246;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$lang$arity$0 = sp2__0;
sp2.cljs$lang$arity$1 = sp2__1;
sp2.cljs$lang$arity$2 = sp2__2;
sp2.cljs$lang$arity$3 = sp2__3;
sp2.cljs$lang$arity$variadic = sp2__4.cljs$lang$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3824__auto____8217 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8217))
{return or__3824__auto____8217;
} else
{var or__3824__auto____8218 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8218))
{return or__3824__auto____8218;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____8219 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8219))
{return or__3824__auto____8219;
} else
{var or__3824__auto____8220 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8220))
{return or__3824__auto____8220;
} else
{var or__3824__auto____8221 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____8221))
{return or__3824__auto____8221;
} else
{var or__3824__auto____8222 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8222))
{return or__3824__auto____8222;
} else
{var or__3824__auto____8223 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8223))
{return or__3824__auto____8223;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____8224 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8224))
{return or__3824__auto____8224;
} else
{var or__3824__auto____8225 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8225))
{return or__3824__auto____8225;
} else
{var or__3824__auto____8226 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____8226))
{return or__3824__auto____8226;
} else
{var or__3824__auto____8227 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8227))
{return or__3824__auto____8227;
} else
{var or__3824__auto____8228 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8228))
{return or__3824__auto____8228;
} else
{var or__3824__auto____8229 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____8229))
{return or__3824__auto____8229;
} else
{var or__3824__auto____8230 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____8230))
{return or__3824__auto____8230;
} else
{var or__3824__auto____8231 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____8231))
{return or__3824__auto____8231;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__8248__delegate = function (x,y,z,args){
var or__3824__auto____8232 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8232))
{return or__3824__auto____8232;
} else
{return cljs.core.some.call(null,(function (p1__7928_SHARP_){
var or__3824__auto____8233 = p1.call(null,p1__7928_SHARP_);
if(cljs.core.truth_(or__3824__auto____8233))
{return or__3824__auto____8233;
} else
{var or__3824__auto____8234 = p2.call(null,p1__7928_SHARP_);
if(cljs.core.truth_(or__3824__auto____8234))
{return or__3824__auto____8234;
} else
{return p3.call(null,p1__7928_SHARP_);
}
}
}),args);
}
};
var G__8248 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8248__delegate.call(this, x, y, z, args);
};
G__8248.cljs$lang$maxFixedArity = 3;
G__8248.cljs$lang$applyTo = (function (arglist__8249){
var x = cljs.core.first(arglist__8249);
var y = cljs.core.first(cljs.core.next(arglist__8249));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8249)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8249)));
return G__8248__delegate(x, y, z, args);
});
G__8248.cljs$lang$arity$variadic = G__8248__delegate;
return G__8248;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$lang$arity$0 = sp3__0;
sp3.cljs$lang$arity$1 = sp3__1;
sp3.cljs$lang$arity$2 = sp3__2;
sp3.cljs$lang$arity$3 = sp3__3;
sp3.cljs$lang$arity$variadic = sp3__4.cljs$lang$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__8250__delegate = function (p1,p2,p3,ps){
var ps__8235 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__7929_SHARP_){
return p1__7929_SHARP_.call(null,x);
}),ps__8235);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__7930_SHARP_){
var or__3824__auto____8240 = p1__7930_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____8240))
{return or__3824__auto____8240;
} else
{return p1__7930_SHARP_.call(null,y);
}
}),ps__8235);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__7931_SHARP_){
var or__3824__auto____8241 = p1__7931_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____8241))
{return or__3824__auto____8241;
} else
{var or__3824__auto____8242 = p1__7931_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____8242))
{return or__3824__auto____8242;
} else
{return p1__7931_SHARP_.call(null,z);
}
}
}),ps__8235);
});
var spn__4 = (function() { 
var G__8251__delegate = function (x,y,z,args){
var or__3824__auto____8243 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8243))
{return or__3824__auto____8243;
} else
{return cljs.core.some.call(null,(function (p1__7932_SHARP_){
return cljs.core.some.call(null,p1__7932_SHARP_,args);
}),ps__8235);
}
};
var G__8251 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8251__delegate.call(this, x, y, z, args);
};
G__8251.cljs$lang$maxFixedArity = 3;
G__8251.cljs$lang$applyTo = (function (arglist__8252){
var x = cljs.core.first(arglist__8252);
var y = cljs.core.first(cljs.core.next(arglist__8252));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8252)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8252)));
return G__8251__delegate(x, y, z, args);
});
G__8251.cljs$lang$arity$variadic = G__8251__delegate;
return G__8251;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$lang$arity$0 = spn__0;
spn.cljs$lang$arity$1 = spn__1;
spn.cljs$lang$arity$2 = spn__2;
spn.cljs$lang$arity$3 = spn__3;
spn.cljs$lang$arity$variadic = spn__4.cljs$lang$arity$variadic;
return spn;
})()
};
var G__8250 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8250__delegate.call(this, p1, p2, p3, ps);
};
G__8250.cljs$lang$maxFixedArity = 3;
G__8250.cljs$lang$applyTo = (function (arglist__8253){
var p1 = cljs.core.first(arglist__8253);
var p2 = cljs.core.first(cljs.core.next(arglist__8253));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8253)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8253)));
return G__8250__delegate(p1, p2, p3, ps);
});
G__8250.cljs$lang$arity$variadic = G__8250__delegate;
return G__8250;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$lang$arity$1 = some_fn__1;
some_fn.cljs$lang$arity$2 = some_fn__2;
some_fn.cljs$lang$arity$3 = some_fn__3;
some_fn.cljs$lang$arity$variadic = some_fn__4.cljs$lang$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8272 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8272)
{var s__8273 = temp__3974__auto____8272;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8273))
{var c__8274 = cljs.core.chunk_first.call(null,s__8273);
var size__8275 = cljs.core.count.call(null,c__8274);
var b__8276 = cljs.core.chunk_buffer.call(null,size__8275);
var n__2616__auto____8277 = size__8275;
var i__8278 = 0;
while(true){
if((i__8278 < n__2616__auto____8277))
{cljs.core.chunk_append.call(null,b__8276,f.call(null,cljs.core._nth.call(null,c__8274,i__8278)));
{
var G__8290 = (i__8278 + 1);
i__8278 = G__8290;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8276),map.call(null,f,cljs.core.chunk_rest.call(null,s__8273)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__8273)),map.call(null,f,cljs.core.rest.call(null,s__8273)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8279 = cljs.core.seq.call(null,c1);
var s2__8280 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____8281 = s1__8279;
if(and__3822__auto____8281)
{return s2__8280;
} else
{return and__3822__auto____8281;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8279),cljs.core.first.call(null,s2__8280)),map.call(null,f,cljs.core.rest.call(null,s1__8279),cljs.core.rest.call(null,s2__8280)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8282 = cljs.core.seq.call(null,c1);
var s2__8283 = cljs.core.seq.call(null,c2);
var s3__8284 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____8285 = s1__8282;
if(and__3822__auto____8285)
{var and__3822__auto____8286 = s2__8283;
if(and__3822__auto____8286)
{return s3__8284;
} else
{return and__3822__auto____8286;
}
} else
{return and__3822__auto____8285;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8282),cljs.core.first.call(null,s2__8283),cljs.core.first.call(null,s3__8284)),map.call(null,f,cljs.core.rest.call(null,s1__8282),cljs.core.rest.call(null,s2__8283),cljs.core.rest.call(null,s3__8284)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__8291__delegate = function (f,c1,c2,c3,colls){
var step__8289 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8288 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8288))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__8288),step.call(null,map.call(null,cljs.core.rest,ss__8288)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__8093_SHARP_){
return cljs.core.apply.call(null,f,p1__8093_SHARP_);
}),step__8289.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__8291 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8291__delegate.call(this, f, c1, c2, c3, colls);
};
G__8291.cljs$lang$maxFixedArity = 4;
G__8291.cljs$lang$applyTo = (function (arglist__8292){
var f = cljs.core.first(arglist__8292);
var c1 = cljs.core.first(cljs.core.next(arglist__8292));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8292)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8292))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8292))));
return G__8291__delegate(f, c1, c2, c3, colls);
});
G__8291.cljs$lang$arity$variadic = G__8291__delegate;
return G__8291;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$lang$arity$2 = map__2;
map.cljs$lang$arity$3 = map__3;
map.cljs$lang$arity$4 = map__4;
map.cljs$lang$arity$variadic = map__5.cljs$lang$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if((n > 0))
{var temp__3974__auto____8295 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8295)
{var s__8296 = temp__3974__auto____8295;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__8296),take.call(null,(n - 1),cljs.core.rest.call(null,s__8296)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__8302 = (function (n,coll){
while(true){
var s__8300 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____8301 = (n > 0);
if(and__3822__auto____8301)
{return s__8300;
} else
{return and__3822__auto____8301;
}
})()))
{{
var G__8303 = (n - 1);
var G__8304 = cljs.core.rest.call(null,s__8300);
n = G__8303;
coll = G__8304;
continue;
}
} else
{return s__8300;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8302.call(null,n,coll);
}),null));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
drop_last.cljs$lang$arity$1 = drop_last__1;
drop_last.cljs$lang$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__8307 = cljs.core.seq.call(null,coll);
var lead__8308 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__8308)
{{
var G__8309 = cljs.core.next.call(null,s__8307);
var G__8310 = cljs.core.next.call(null,lead__8308);
s__8307 = G__8309;
lead__8308 = G__8310;
continue;
}
} else
{return s__8307;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__8316 = (function (pred,coll){
while(true){
var s__8314 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____8315 = s__8314;
if(and__3822__auto____8315)
{return pred.call(null,cljs.core.first.call(null,s__8314));
} else
{return and__3822__auto____8315;
}
})()))
{{
var G__8317 = pred;
var G__8318 = cljs.core.rest.call(null,s__8314);
pred = G__8317;
coll = G__8318;
continue;
}
} else
{return s__8314;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8316.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8321 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8321)
{var s__8322 = temp__3974__auto____8321;
return cljs.core.concat.call(null,s__8322,cycle.call(null,s__8322));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)], true);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
}),null));
});
var repeat__2 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
repeat.cljs$lang$arity$1 = repeat__1;
repeat.cljs$lang$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
}),null));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
repeatedly.cljs$lang$arity$1 = repeatedly__1;
repeatedly.cljs$lang$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}),null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8327 = cljs.core.seq.call(null,c1);
var s2__8328 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____8329 = s1__8327;
if(and__3822__auto____8329)
{return s2__8328;
} else
{return and__3822__auto____8329;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__8327),cljs.core.cons.call(null,cljs.core.first.call(null,s2__8328),interleave.call(null,cljs.core.rest.call(null,s1__8327),cljs.core.rest.call(null,s2__8328))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__8331__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8330 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8330))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__8330),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__8330)));
} else
{return null;
}
}),null));
};
var G__8331 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8331__delegate.call(this, c1, c2, colls);
};
G__8331.cljs$lang$maxFixedArity = 2;
G__8331.cljs$lang$applyTo = (function (arglist__8332){
var c1 = cljs.core.first(arglist__8332);
var c2 = cljs.core.first(cljs.core.next(arglist__8332));
var colls = cljs.core.rest(cljs.core.next(arglist__8332));
return G__8331__delegate(c1, c2, colls);
});
G__8331.cljs$lang$arity$variadic = G__8331__delegate;
return G__8331;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$lang$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$lang$arity$2 = interleave__2;
interleave.cljs$lang$arity$variadic = interleave__3.cljs$lang$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__8342 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____8340 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____8340)
{var coll__8341 = temp__3971__auto____8340;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__8341),cat.call(null,cljs.core.rest.call(null,coll__8341),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__8342.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3 = (function() { 
var G__8343__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__8343 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8343__delegate.call(this, f, coll, colls);
};
G__8343.cljs$lang$maxFixedArity = 2;
G__8343.cljs$lang$applyTo = (function (arglist__8344){
var f = cljs.core.first(arglist__8344);
var coll = cljs.core.first(cljs.core.next(arglist__8344));
var colls = cljs.core.rest(cljs.core.next(arglist__8344));
return G__8343__delegate(f, coll, colls);
});
G__8343.cljs$lang$arity$variadic = G__8343__delegate;
return G__8343;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapcat__2.call(this,f,coll);
default:
return mapcat__3.cljs$lang$arity$variadic(f,coll, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
mapcat.cljs$lang$arity$2 = mapcat__2;
mapcat.cljs$lang$arity$variadic = mapcat__3.cljs$lang$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8354 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8354)
{var s__8355 = temp__3974__auto____8354;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8355))
{var c__8356 = cljs.core.chunk_first.call(null,s__8355);
var size__8357 = cljs.core.count.call(null,c__8356);
var b__8358 = cljs.core.chunk_buffer.call(null,size__8357);
var n__2616__auto____8359 = size__8357;
var i__8360 = 0;
while(true){
if((i__8360 < n__2616__auto____8359))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__8356,i__8360))))
{cljs.core.chunk_append.call(null,b__8358,cljs.core._nth.call(null,c__8356,i__8360));
} else
{}
{
var G__8363 = (i__8360 + 1);
i__8360 = G__8363;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8358),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__8355)));
} else
{var f__8361 = cljs.core.first.call(null,s__8355);
var r__8362 = cljs.core.rest.call(null,s__8355);
if(cljs.core.truth_(pred.call(null,f__8361)))
{return cljs.core.cons.call(null,f__8361,filter.call(null,pred,r__8362));
} else
{return filter.call(null,pred,r__8362);
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__8366 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__8366.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__8364_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__8364_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__8370__8371 = to;
if(G__8370__8371)
{if((function (){var or__3824__auto____8372 = (G__8370__8371.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____8372)
{return or__3824__auto____8372;
} else
{return G__8370__8371.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__8370__8371.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__8370__8371);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__8370__8371);
}
})())
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core.transient$.call(null,to),from));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,to,from);
}
});
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
return cljs.core.conj_BANG_.call(null,v,f.call(null,o));
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__8373__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__8373 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8373__delegate.call(this, f, c1, c2, c3, colls);
};
G__8373.cljs$lang$maxFixedArity = 4;
G__8373.cljs$lang$applyTo = (function (arglist__8374){
var f = cljs.core.first(arglist__8374);
var c1 = cljs.core.first(cljs.core.next(arglist__8374));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8374)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8374))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8374))));
return G__8373__delegate(f, c1, c2, c3, colls);
});
G__8373.cljs$lang$arity$variadic = G__8373__delegate;
return G__8373;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$lang$arity$2 = mapv__2;
mapv.cljs$lang$arity$3 = mapv__3;
mapv.cljs$lang$arity$4 = mapv__4;
mapv.cljs$lang$arity$variadic = mapv__5.cljs$lang$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
if(cljs.core.truth_(pred.call(null,o)))
{return cljs.core.conj_BANG_.call(null,v,o);
} else
{return v;
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8381 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8381)
{var s__8382 = temp__3974__auto____8381;
var p__8383 = cljs.core.take.call(null,n,s__8382);
if((n === cljs.core.count.call(null,p__8383)))
{return cljs.core.cons.call(null,p__8383,partition.call(null,n,step,cljs.core.drop.call(null,step,s__8382)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8384 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8384)
{var s__8385 = temp__3974__auto____8384;
var p__8386 = cljs.core.take.call(null,n,s__8385);
if((n === cljs.core.count.call(null,p__8386)))
{return cljs.core.cons.call(null,p__8386,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__8385)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__8386,pad)));
}
} else
{return null;
}
}),null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition.cljs$lang$arity$2 = partition__2;
partition.cljs$lang$arity$3 = partition__3;
partition.cljs$lang$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of keys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel__8391 = cljs.core.lookup_sentinel;
var m__8392 = m;
var ks__8393 = cljs.core.seq.call(null,ks);
while(true){
if(ks__8393)
{var m__8394 = cljs.core._lookup.call(null,m__8392,cljs.core.first.call(null,ks__8393),sentinel__8391);
if((sentinel__8391 === m__8394))
{return not_found;
} else
{{
var G__8395 = sentinel__8391;
var G__8396 = m__8394;
var G__8397 = cljs.core.next.call(null,ks__8393);
sentinel__8391 = G__8395;
m__8392 = G__8396;
ks__8393 = G__8397;
continue;
}
}
} else
{return m__8392;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get_in.cljs$lang$arity$2 = get_in__2;
get_in.cljs$lang$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__8398,v){
var vec__8403__8404 = p__8398;
var k__8405 = cljs.core.nth.call(null,vec__8403__8404,0,null);
var ks__8406 = cljs.core.nthnext.call(null,vec__8403__8404,1);
if(cljs.core.truth_(ks__8406))
{return cljs.core.assoc.call(null,m,k__8405,assoc_in.call(null,cljs.core._lookup.call(null,m,k__8405,null),ks__8406,v));
} else
{return cljs.core.assoc.call(null,m,k__8405,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__8407,f,args){
var vec__8412__8413 = p__8407;
var k__8414 = cljs.core.nth.call(null,vec__8412__8413,0,null);
var ks__8415 = cljs.core.nthnext.call(null,vec__8412__8413,1);
if(cljs.core.truth_(ks__8415))
{return cljs.core.assoc.call(null,m,k__8414,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__8414,null),ks__8415,f,args));
} else
{return cljs.core.assoc.call(null,m,k__8414,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__8414,null),args));
}
};
var update_in = function (m,p__8407,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__8407, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__8416){
var m = cljs.core.first(arglist__8416);
var p__8407 = cljs.core.first(cljs.core.next(arglist__8416));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8416)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8416)));
return update_in__delegate(m, p__8407, f, args);
});
update_in.cljs$lang$arity$variadic = update_in__delegate;
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array,__hash){
this.meta = meta;
this.array = array;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Vector.cljs$lang$type = true;
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8419 = this;
var h__2281__auto____8420 = this__8419.__hash;
if(!((h__2281__auto____8420 == null)))
{return h__2281__auto____8420;
} else
{var h__2281__auto____8421 = cljs.core.hash_coll.call(null,coll);
this__8419.__hash = h__2281__auto____8421;
return h__2281__auto____8421;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8422 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8423 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8424 = this;
var new_array__8425 = this__8424.array.slice();
(new_array__8425[k] = v);
return (new cljs.core.Vector(this__8424.meta,new_array__8425,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__8456 = null;
var G__8456__2 = (function (this_sym8426,k){
var this__8428 = this;
var this_sym8426__8429 = this;
var coll__8430 = this_sym8426__8429;
return coll__8430.cljs$core$ILookup$_lookup$arity$2(coll__8430,k);
});
var G__8456__3 = (function (this_sym8427,k,not_found){
var this__8428 = this;
var this_sym8427__8431 = this;
var coll__8432 = this_sym8427__8431;
return coll__8432.cljs$core$ILookup$_lookup$arity$3(coll__8432,k,not_found);
});
G__8456 = function(this_sym8427,k,not_found){
switch(arguments.length){
case 2:
return G__8456__2.call(this,this_sym8427,k);
case 3:
return G__8456__3.call(this,this_sym8427,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8456;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym8417,args8418){
var this__8433 = this;
return this_sym8417.call.apply(this_sym8417,[this_sym8417].concat(args8418.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8434 = this;
var new_array__8435 = this__8434.array.slice();
new_array__8435.push(o);
return (new cljs.core.Vector(this__8434.meta,new_array__8435,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__8436 = this;
var this__8437 = this;
return cljs.core.pr_str.call(null,this__8437);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8438 = this;
return cljs.core.ci_reduce.call(null,this__8438.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8439 = this;
return cljs.core.ci_reduce.call(null,this__8439.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8440 = this;
if((this__8440.array.length > 0))
{var vector_seq__8441 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__8440.array.length))
{return cljs.core.cons.call(null,(this__8440.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__8441.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8442 = this;
return this__8442.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8443 = this;
var count__8444 = this__8443.array.length;
if((count__8444 > 0))
{return (this__8443.array[(count__8444 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8445 = this;
if((this__8445.array.length > 0))
{var new_array__8446 = this__8445.array.slice();
new_array__8446.pop();
return (new cljs.core.Vector(this__8445.meta,new_array__8446,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8447 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8448 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8449 = this;
return (new cljs.core.Vector(meta,this__8449.array,this__8449.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8450 = this;
return this__8450.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8451 = this;
if((function (){var and__3822__auto____8452 = (0 <= n);
if(and__3822__auto____8452)
{return (n < this__8451.array.length);
} else
{return and__3822__auto____8452;
}
})())
{return (this__8451.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8453 = this;
if((function (){var and__3822__auto____8454 = (0 <= n);
if(and__3822__auto____8454)
{return (n < this__8453.array.length);
} else
{return and__3822__auto____8454;
}
})())
{return (this__8453.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8455 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8455.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[],0));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs,null));
});

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__2399__auto__){
return cljs.core.list.call(null,"cljs.core/VectorNode");
});
cljs.core.VectorNode;
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,cljs.core.make_array.call(null,32)));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,node.arr.slice()));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__8458 = pv.cnt;
if((cnt__8458 < 32))
{return 0;
} else
{return (((cnt__8458 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__8464 = level;
var ret__8465 = node;
while(true){
if((ll__8464 === 0))
{return ret__8465;
} else
{var embed__8466 = ret__8465;
var r__8467 = cljs.core.pv_fresh_node.call(null,edit);
var ___8468 = cljs.core.pv_aset.call(null,r__8467,0,embed__8466);
{
var G__8469 = (ll__8464 - 5);
var G__8470 = r__8467;
ll__8464 = G__8469;
ret__8465 = G__8470;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__8476 = cljs.core.pv_clone_node.call(null,parent);
var subidx__8477 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__8476,subidx__8477,tailnode);
return ret__8476;
} else
{var child__8478 = cljs.core.pv_aget.call(null,parent,subidx__8477);
if(!((child__8478 == null)))
{var node_to_insert__8479 = push_tail.call(null,pv,(level - 5),child__8478,tailnode);
cljs.core.pv_aset.call(null,ret__8476,subidx__8477,node_to_insert__8479);
return ret__8476;
} else
{var node_to_insert__8480 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__8476,subidx__8477,node_to_insert__8480);
return ret__8476;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____8484 = (0 <= i);
if(and__3822__auto____8484)
{return (i < pv.cnt);
} else
{return and__3822__auto____8484;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__8485 = pv.root;
var level__8486 = pv.shift;
while(true){
if((level__8486 > 0))
{{
var G__8487 = cljs.core.pv_aget.call(null,node__8485,((i >>> level__8486) & 31));
var G__8488 = (level__8486 - 5);
node__8485 = G__8487;
level__8486 = G__8488;
continue;
}
} else
{return node__8485.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__8491 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__8491,(i & 31),val);
return ret__8491;
} else
{var subidx__8492 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8491,subidx__8492,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8492),i,val));
return ret__8491;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__8498 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8499 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8498));
if((function (){var and__3822__auto____8500 = (new_child__8499 == null);
if(and__3822__auto____8500)
{return (subidx__8498 === 0);
} else
{return and__3822__auto____8500;
}
})())
{return null;
} else
{var ret__8501 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8501,subidx__8498,new_child__8499);
return ret__8501;
}
} else
{if((subidx__8498 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__8502 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8502,subidx__8498,null);
return ret__8502;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8505 = this;
return (new cljs.core.TransientVector(this__8505.cnt,this__8505.shift,cljs.core.tv_editable_root.call(null,this__8505.root),cljs.core.tv_editable_tail.call(null,this__8505.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8506 = this;
var h__2281__auto____8507 = this__8506.__hash;
if(!((h__2281__auto____8507 == null)))
{return h__2281__auto____8507;
} else
{var h__2281__auto____8508 = cljs.core.hash_coll.call(null,coll);
this__8506.__hash = h__2281__auto____8508;
return h__2281__auto____8508;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8509 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8510 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8511 = this;
if((function (){var and__3822__auto____8512 = (0 <= k);
if(and__3822__auto____8512)
{return (k < this__8511.cnt);
} else
{return and__3822__auto____8512;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__8513 = this__8511.tail.slice();
(new_tail__8513[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__8511.meta,this__8511.cnt,this__8511.shift,this__8511.root,new_tail__8513,null));
} else
{return (new cljs.core.PersistentVector(this__8511.meta,this__8511.cnt,this__8511.shift,cljs.core.do_assoc.call(null,coll,this__8511.shift,this__8511.root,k,v),this__8511.tail,null));
}
} else
{if((k === this__8511.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__8511.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__8561 = null;
var G__8561__2 = (function (this_sym8514,k){
var this__8516 = this;
var this_sym8514__8517 = this;
var coll__8518 = this_sym8514__8517;
return coll__8518.cljs$core$ILookup$_lookup$arity$2(coll__8518,k);
});
var G__8561__3 = (function (this_sym8515,k,not_found){
var this__8516 = this;
var this_sym8515__8519 = this;
var coll__8520 = this_sym8515__8519;
return coll__8520.cljs$core$ILookup$_lookup$arity$3(coll__8520,k,not_found);
});
G__8561 = function(this_sym8515,k,not_found){
switch(arguments.length){
case 2:
return G__8561__2.call(this,this_sym8515,k);
case 3:
return G__8561__3.call(this,this_sym8515,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8561;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym8503,args8504){
var this__8521 = this;
return this_sym8503.call.apply(this_sym8503,[this_sym8503].concat(args8504.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__8522 = this;
var step_init__8523 = [0,init];
var i__8524 = 0;
while(true){
if((i__8524 < this__8522.cnt))
{var arr__8525 = cljs.core.array_for.call(null,v,i__8524);
var len__8526 = arr__8525.length;
var init__8530 = (function (){var j__8527 = 0;
var init__8528 = (step_init__8523[1]);
while(true){
if((j__8527 < len__8526))
{var init__8529 = f.call(null,init__8528,(j__8527 + i__8524),(arr__8525[j__8527]));
if(cljs.core.reduced_QMARK_.call(null,init__8529))
{return init__8529;
} else
{{
var G__8562 = (j__8527 + 1);
var G__8563 = init__8529;
j__8527 = G__8562;
init__8528 = G__8563;
continue;
}
}
} else
{(step_init__8523[0] = len__8526);
(step_init__8523[1] = init__8528);
return init__8528;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__8530))
{return cljs.core.deref.call(null,init__8530);
} else
{{
var G__8564 = (i__8524 + (step_init__8523[0]));
i__8524 = G__8564;
continue;
}
}
} else
{return (step_init__8523[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8531 = this;
if(((this__8531.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__8532 = this__8531.tail.slice();
new_tail__8532.push(o);
return (new cljs.core.PersistentVector(this__8531.meta,(this__8531.cnt + 1),this__8531.shift,this__8531.root,new_tail__8532,null));
} else
{var root_overflow_QMARK___8533 = ((this__8531.cnt >>> 5) > (1 << this__8531.shift));
var new_shift__8534 = ((root_overflow_QMARK___8533)?(this__8531.shift + 5):this__8531.shift);
var new_root__8536 = ((root_overflow_QMARK___8533)?(function (){var n_r__8535 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__8535,0,this__8531.root);
cljs.core.pv_aset.call(null,n_r__8535,1,cljs.core.new_path.call(null,null,this__8531.shift,(new cljs.core.VectorNode(null,this__8531.tail))));
return n_r__8535;
})():cljs.core.push_tail.call(null,coll,this__8531.shift,this__8531.root,(new cljs.core.VectorNode(null,this__8531.tail))));
return (new cljs.core.PersistentVector(this__8531.meta,(this__8531.cnt + 1),new_shift__8534,new_root__8536,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8537 = this;
if((this__8537.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__8537.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__8538 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__8539 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__8540 = this;
var this__8541 = this;
return cljs.core.pr_str.call(null,this__8541);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8542 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8543 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8544 = this;
if((this__8544.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8545 = this;
return this__8545.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8546 = this;
if((this__8546.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__8546.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8547 = this;
if((this__8547.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8547.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8547.meta);
} else
{if((1 < (this__8547.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__8547.meta,(this__8547.cnt - 1),this__8547.shift,this__8547.root,this__8547.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__8548 = cljs.core.array_for.call(null,coll,(this__8547.cnt - 2));
var nr__8549 = cljs.core.pop_tail.call(null,coll,this__8547.shift,this__8547.root);
var new_root__8550 = (((nr__8549 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__8549);
var cnt_1__8551 = (this__8547.cnt - 1);
if((function (){var and__3822__auto____8552 = (5 < this__8547.shift);
if(and__3822__auto____8552)
{return (cljs.core.pv_aget.call(null,new_root__8550,1) == null);
} else
{return and__3822__auto____8552;
}
})())
{return (new cljs.core.PersistentVector(this__8547.meta,cnt_1__8551,(this__8547.shift - 5),cljs.core.pv_aget.call(null,new_root__8550,0),new_tail__8548,null));
} else
{return (new cljs.core.PersistentVector(this__8547.meta,cnt_1__8551,this__8547.shift,new_root__8550,new_tail__8548,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8553 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8554 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8555 = this;
return (new cljs.core.PersistentVector(meta,this__8555.cnt,this__8555.shift,this__8555.root,this__8555.tail,this__8555.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8556 = this;
return this__8556.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8557 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8558 = this;
if((function (){var and__3822__auto____8559 = (0 <= n);
if(and__3822__auto____8559)
{return (n < this__8558.cnt);
} else
{return and__3822__auto____8559;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8560 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8560.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__8565 = xs.length;
var xs__8566 = (((no_clone === true))?xs:xs.slice());
if((l__8565 < 32))
{return (new cljs.core.PersistentVector(null,l__8565,5,cljs.core.PersistentVector.EMPTY_NODE,xs__8566,null));
} else
{var node__8567 = xs__8566.slice(0,32);
var v__8568 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__8567,null));
var i__8569 = 32;
var out__8570 = cljs.core._as_transient.call(null,v__8568);
while(true){
if((i__8569 < l__8565))
{{
var G__8571 = (i__8569 + 1);
var G__8572 = cljs.core.conj_BANG_.call(null,out__8570,(xs__8566[i__8569]));
i__8569 = G__8571;
out__8570 = G__8572;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8570);
}
break;
}
}
});
cljs.core.vec = (function vec(coll){
return cljs.core._persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core._as_transient.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__8573){
var args = cljs.core.seq(arglist__8573);;
return vector__delegate(args);
});
vector.cljs$lang$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27525356;
})
cljs.core.ChunkedSeq.cljs$lang$type = true;
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8574 = this;
if(((this__8574.off + 1) < this__8574.node.length))
{var s__8575 = cljs.core.chunked_seq.call(null,this__8574.vec,this__8574.node,this__8574.i,(this__8574.off + 1));
if((s__8575 == null))
{return null;
} else
{return s__8575;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8576 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8577 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8578 = this;
return (this__8578.node[this__8578.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8579 = this;
if(((this__8579.off + 1) < this__8579.node.length))
{var s__8580 = cljs.core.chunked_seq.call(null,this__8579.vec,this__8579.node,this__8579.i,(this__8579.off + 1));
if((s__8580 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8580;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__8581 = this;
var l__8582 = this__8581.node.length;
var s__8583 = ((((this__8581.i + l__8582) < cljs.core._count.call(null,this__8581.vec)))?cljs.core.chunked_seq.call(null,this__8581.vec,(this__8581.i + l__8582),0):null);
if((s__8583 == null))
{return null;
} else
{return s__8583;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8584 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__8585 = this;
return cljs.core.chunked_seq.call(null,this__8585.vec,this__8585.node,this__8585.i,this__8585.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__8586 = this;
return this__8586.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8587 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8587.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__8588 = this;
return cljs.core.array_chunk.call(null,this__8588.node,this__8588.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__8589 = this;
var l__8590 = this__8589.node.length;
var s__8591 = ((((this__8589.i + l__8590) < cljs.core._count.call(null,this__8589.vec)))?cljs.core.chunked_seq.call(null,this__8589.vec,(this__8589.i + l__8590),0):null);
if((s__8591 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8591;
}
});
cljs.core.ChunkedSeq;
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){
return chunked_seq.call(null,vec,cljs.core.array_for.call(null,vec,i),i,off,null);
});
var chunked_seq__4 = (function (vec,node,i,off){
return chunked_seq.call(null,vec,node,i,off,null);
});
var chunked_seq__5 = (function (vec,node,i,off,meta){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw('Invalid arity: ' + arguments.length);
};
chunked_seq.cljs$lang$arity$3 = chunked_seq__3;
chunked_seq.cljs$lang$arity$4 = chunked_seq__4;
chunked_seq.cljs$lang$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8594 = this;
var h__2281__auto____8595 = this__8594.__hash;
if(!((h__2281__auto____8595 == null)))
{return h__2281__auto____8595;
} else
{var h__2281__auto____8596 = cljs.core.hash_coll.call(null,coll);
this__8594.__hash = h__2281__auto____8596;
return h__2281__auto____8596;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8597 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8598 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__8599 = this;
var v_pos__8600 = (this__8599.start + key);
return (new cljs.core.Subvec(this__8599.meta,cljs.core._assoc.call(null,this__8599.v,v_pos__8600,val),this__8599.start,((this__8599.end > (v_pos__8600 + 1)) ? this__8599.end : (v_pos__8600 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__8626 = null;
var G__8626__2 = (function (this_sym8601,k){
var this__8603 = this;
var this_sym8601__8604 = this;
var coll__8605 = this_sym8601__8604;
return coll__8605.cljs$core$ILookup$_lookup$arity$2(coll__8605,k);
});
var G__8626__3 = (function (this_sym8602,k,not_found){
var this__8603 = this;
var this_sym8602__8606 = this;
var coll__8607 = this_sym8602__8606;
return coll__8607.cljs$core$ILookup$_lookup$arity$3(coll__8607,k,not_found);
});
G__8626 = function(this_sym8602,k,not_found){
switch(arguments.length){
case 2:
return G__8626__2.call(this,this_sym8602,k);
case 3:
return G__8626__3.call(this,this_sym8602,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8626;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym8592,args8593){
var this__8608 = this;
return this_sym8592.call.apply(this_sym8592,[this_sym8592].concat(args8593.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8609 = this;
return (new cljs.core.Subvec(this__8609.meta,cljs.core._assoc_n.call(null,this__8609.v,this__8609.end,o),this__8609.start,(this__8609.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__8610 = this;
var this__8611 = this;
return cljs.core.pr_str.call(null,this__8611);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8612 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8613 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8614 = this;
var subvec_seq__8615 = (function subvec_seq(i){
if((i === this__8614.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__8614.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__8615.call(null,this__8614.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8616 = this;
return (this__8616.end - this__8616.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8617 = this;
return cljs.core._nth.call(null,this__8617.v,(this__8617.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8618 = this;
if((this__8618.start === this__8618.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__8618.meta,this__8618.v,this__8618.start,(this__8618.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8619 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8620 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8621 = this;
return (new cljs.core.Subvec(meta,this__8621.v,this__8621.start,this__8621.end,this__8621.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8622 = this;
return this__8622.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8623 = this;
return cljs.core._nth.call(null,this__8623.v,(this__8623.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8624 = this;
return cljs.core._nth.call(null,this__8624.v,(this__8624.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8625 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8625.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end,null));
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subvec.cljs$lang$arity$2 = subvec__2;
subvec.cljs$lang$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,node.arr.slice()));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode({},node.arr.slice()));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret__8628 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__8628,0,tl.length);
return ret__8628;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__8632 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__8633 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8632,subidx__8633,(((level === 5))?tail_node:(function (){var child__8634 = cljs.core.pv_aget.call(null,ret__8632,subidx__8633);
if(!((child__8634 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__8634,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__8632;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__8639 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__8640 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8641 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__8639,subidx__8640));
if((function (){var and__3822__auto____8642 = (new_child__8641 == null);
if(and__3822__auto____8642)
{return (subidx__8640 === 0);
} else
{return and__3822__auto____8642;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__8639,subidx__8640,new_child__8641);
return node__8639;
}
} else
{if((subidx__8640 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__8639,subidx__8640,null);
return node__8639;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____8647 = (0 <= i);
if(and__3822__auto____8647)
{return (i < tv.cnt);
} else
{return and__3822__auto____8647;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__8648 = tv.root;
var node__8649 = root__8648;
var level__8650 = tv.shift;
while(true){
if((level__8650 > 0))
{{
var G__8651 = cljs.core.tv_ensure_editable.call(null,root__8648.edit,cljs.core.pv_aget.call(null,node__8649,((i >>> level__8650) & 31)));
var G__8652 = (level__8650 - 5);
node__8649 = G__8651;
level__8650 = G__8652;
continue;
}
} else
{return node__8649.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in transient vector of length "),cljs.core.str(tv.cnt)].join('')));
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 22;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__8692 = null;
var G__8692__2 = (function (this_sym8655,k){
var this__8657 = this;
var this_sym8655__8658 = this;
var coll__8659 = this_sym8655__8658;
return coll__8659.cljs$core$ILookup$_lookup$arity$2(coll__8659,k);
});
var G__8692__3 = (function (this_sym8656,k,not_found){
var this__8657 = this;
var this_sym8656__8660 = this;
var coll__8661 = this_sym8656__8660;
return coll__8661.cljs$core$ILookup$_lookup$arity$3(coll__8661,k,not_found);
});
G__8692 = function(this_sym8656,k,not_found){
switch(arguments.length){
case 2:
return G__8692__2.call(this,this_sym8656,k);
case 3:
return G__8692__3.call(this,this_sym8656,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8692;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym8653,args8654){
var this__8662 = this;
return this_sym8653.call.apply(this_sym8653,[this_sym8653].concat(args8654.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8663 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8664 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8665 = this;
if(this__8665.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8666 = this;
if((function (){var and__3822__auto____8667 = (0 <= n);
if(and__3822__auto____8667)
{return (n < this__8666.cnt);
} else
{return and__3822__auto____8667;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8668 = this;
if(this__8668.root.edit)
{return this__8668.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__8669 = this;
if(this__8669.root.edit)
{if((function (){var and__3822__auto____8670 = (0 <= n);
if(and__3822__auto____8670)
{return (n < this__8669.cnt);
} else
{return and__3822__auto____8670;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__8669.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__8675 = (function go(level,node){
var node__8673 = cljs.core.tv_ensure_editable.call(null,this__8669.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__8673,(n & 31),val);
return node__8673;
} else
{var subidx__8674 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__8673,subidx__8674,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__8673,subidx__8674)));
return node__8673;
}
}).call(null,this__8669.shift,this__8669.root);
this__8669.root = new_root__8675;
return tcoll;
}
} else
{if((n === this__8669.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__8669.cnt)].join('')));
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var this__8676 = this;
if(this__8676.root.edit)
{if((this__8676.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8676.cnt))
{this__8676.cnt = 0;
return tcoll;
} else
{if((((this__8676.cnt - 1) & 31) > 0))
{this__8676.cnt = (this__8676.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__8677 = cljs.core.editable_array_for.call(null,tcoll,(this__8676.cnt - 2));
var new_root__8679 = (function (){var nr__8678 = cljs.core.tv_pop_tail.call(null,tcoll,this__8676.shift,this__8676.root);
if(!((nr__8678 == null)))
{return nr__8678;
} else
{return (new cljs.core.VectorNode(this__8676.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____8680 = (5 < this__8676.shift);
if(and__3822__auto____8680)
{return (cljs.core.pv_aget.call(null,new_root__8679,1) == null);
} else
{return and__3822__auto____8680;
}
})())
{var new_root__8681 = cljs.core.tv_ensure_editable.call(null,this__8676.root.edit,cljs.core.pv_aget.call(null,new_root__8679,0));
this__8676.root = new_root__8681;
this__8676.shift = (this__8676.shift - 5);
this__8676.cnt = (this__8676.cnt - 1);
this__8676.tail = new_tail__8677;
return tcoll;
} else
{this__8676.root = new_root__8679;
this__8676.cnt = (this__8676.cnt - 1);
this__8676.tail = new_tail__8677;
return tcoll;
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8682 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8683 = this;
if(this__8683.root.edit)
{if(((this__8683.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__8683.tail[(this__8683.cnt & 31)] = o);
this__8683.cnt = (this__8683.cnt + 1);
return tcoll;
} else
{var tail_node__8684 = (new cljs.core.VectorNode(this__8683.root.edit,this__8683.tail));
var new_tail__8685 = cljs.core.make_array.call(null,32);
(new_tail__8685[0] = o);
this__8683.tail = new_tail__8685;
if(((this__8683.cnt >>> 5) > (1 << this__8683.shift)))
{var new_root_array__8686 = cljs.core.make_array.call(null,32);
var new_shift__8687 = (this__8683.shift + 5);
(new_root_array__8686[0] = this__8683.root);
(new_root_array__8686[1] = cljs.core.new_path.call(null,this__8683.root.edit,this__8683.shift,tail_node__8684));
this__8683.root = (new cljs.core.VectorNode(this__8683.root.edit,new_root_array__8686));
this__8683.shift = new_shift__8687;
this__8683.cnt = (this__8683.cnt + 1);
return tcoll;
} else
{var new_root__8688 = cljs.core.tv_push_tail.call(null,tcoll,this__8683.shift,this__8683.root,tail_node__8684);
this__8683.root = new_root__8688;
this__8683.cnt = (this__8683.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8689 = this;
if(this__8689.root.edit)
{this__8689.root.edit = null;
var len__8690 = (this__8689.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__8691 = cljs.core.make_array.call(null,len__8690);
cljs.core.array_copy.call(null,this__8689.tail,0,trimmed_tail__8691,0,len__8690);
return (new cljs.core.PersistentVector(null,this__8689.cnt,this__8689.shift,this__8689.root,trimmed_tail__8691,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientVector;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8693 = this;
var h__2281__auto____8694 = this__8693.__hash;
if(!((h__2281__auto____8694 == null)))
{return h__2281__auto____8694;
} else
{var h__2281__auto____8695 = cljs.core.hash_coll.call(null,coll);
this__8693.__hash = h__2281__auto____8695;
return h__2281__auto____8695;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8696 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__8697 = this;
var this__8698 = this;
return cljs.core.pr_str.call(null,this__8698);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8699 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8700 = this;
return cljs.core._first.call(null,this__8700.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8701 = this;
var temp__3971__auto____8702 = cljs.core.next.call(null,this__8701.front);
if(temp__3971__auto____8702)
{var f1__8703 = temp__3971__auto____8702;
return (new cljs.core.PersistentQueueSeq(this__8701.meta,f1__8703,this__8701.rear,null));
} else
{if((this__8701.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__8701.meta,this__8701.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8704 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8705 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__8705.front,this__8705.rear,this__8705.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8706 = this;
return this__8706.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8707 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8707.meta);
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8708 = this;
var h__2281__auto____8709 = this__8708.__hash;
if(!((h__2281__auto____8709 == null)))
{return h__2281__auto____8709;
} else
{var h__2281__auto____8710 = cljs.core.hash_coll.call(null,coll);
this__8708.__hash = h__2281__auto____8710;
return h__2281__auto____8710;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8711 = this;
if(cljs.core.truth_(this__8711.front))
{return (new cljs.core.PersistentQueue(this__8711.meta,(this__8711.count + 1),this__8711.front,cljs.core.conj.call(null,(function (){var or__3824__auto____8712 = this__8711.rear;
if(cljs.core.truth_(or__3824__auto____8712))
{return or__3824__auto____8712;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__8711.meta,(this__8711.count + 1),cljs.core.conj.call(null,this__8711.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__8713 = this;
var this__8714 = this;
return cljs.core.pr_str.call(null,this__8714);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8715 = this;
var rear__8716 = cljs.core.seq.call(null,this__8715.rear);
if(cljs.core.truth_((function (){var or__3824__auto____8717 = this__8715.front;
if(cljs.core.truth_(or__3824__auto____8717))
{return or__3824__auto____8717;
} else
{return rear__8716;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__8715.front,cljs.core.seq.call(null,rear__8716),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8718 = this;
return this__8718.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8719 = this;
return cljs.core._first.call(null,this__8719.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8720 = this;
if(cljs.core.truth_(this__8720.front))
{var temp__3971__auto____8721 = cljs.core.next.call(null,this__8720.front);
if(temp__3971__auto____8721)
{var f1__8722 = temp__3971__auto____8721;
return (new cljs.core.PersistentQueue(this__8720.meta,(this__8720.count - 1),f1__8722,this__8720.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__8720.meta,(this__8720.count - 1),cljs.core.seq.call(null,this__8720.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8723 = this;
return cljs.core.first.call(null,this__8723.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8724 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8725 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8726 = this;
return (new cljs.core.PersistentQueue(meta,this__8726.count,this__8726.front,this__8726.rear,this__8726.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8727 = this;
return this__8727.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8728 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.EMPTY,0));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__8729 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,((cljs.core.map_QMARK_.call(null,y))?(((cljs.core.count.call(null,x) === cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core._lookup.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__8732 = array.length;
var i__8733 = 0;
while(true){
if((i__8733 < len__8732))
{if((k === (array[i__8733])))
{return i__8733;
} else
{{
var G__8734 = (i__8733 + incr);
i__8733 = G__8734;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__8737 = cljs.core.hash.call(null,a);
var b__8738 = cljs.core.hash.call(null,b);
if((a__8737 < b__8738))
{return -1;
} else
{if((a__8737 > b__8738))
{return 1;
} else
{if("\uFDD0'else")
{return 0;
} else
{return null;
}
}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks__8746 = m.keys;
var len__8747 = ks__8746.length;
var so__8748 = m.strobj;
var out__8749 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__8750 = 0;
var out__8751 = cljs.core.transient$.call(null,out__8749);
while(true){
if((i__8750 < len__8747))
{var k__8752 = (ks__8746[i__8750]);
{
var G__8753 = (i__8750 + 1);
var G__8754 = cljs.core.assoc_BANG_.call(null,out__8751,k__8752,(so__8748[k__8752]));
i__8750 = G__8753;
out__8751 = G__8754;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__8751,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__8760 = {};
var l__8761 = ks.length;
var i__8762 = 0;
while(true){
if((i__8762 < l__8761))
{var k__8763 = (ks[i__8762]);
(new_obj__8760[k__8763] = (obj[k__8763]));
{
var G__8764 = (i__8762 + 1);
i__8762 = G__8764;
continue;
}
} else
{}
break;
}
return new_obj__8760;
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8767 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8768 = this;
var h__2281__auto____8769 = this__8768.__hash;
if(!((h__2281__auto____8769 == null)))
{return h__2281__auto____8769;
} else
{var h__2281__auto____8770 = cljs.core.hash_imap.call(null,coll);
this__8768.__hash = h__2281__auto____8770;
return h__2281__auto____8770;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8771 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8772 = this;
if((function (){var and__3822__auto____8773 = goog.isString(k);
if(and__3822__auto____8773)
{return !((cljs.core.scan_array.call(null,1,k,this__8772.keys) == null));
} else
{return and__3822__auto____8773;
}
})())
{return (this__8772.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8774 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____8775 = (this__8774.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____8775)
{return or__3824__auto____8775;
} else
{return (this__8774.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__8774.keys) == null)))
{var new_strobj__8776 = cljs.core.obj_clone.call(null,this__8774.strobj,this__8774.keys);
(new_strobj__8776[k] = v);
return (new cljs.core.ObjMap(this__8774.meta,this__8774.keys,new_strobj__8776,(this__8774.update_count + 1),null));
} else
{var new_strobj__8777 = cljs.core.obj_clone.call(null,this__8774.strobj,this__8774.keys);
var new_keys__8778 = this__8774.keys.slice();
(new_strobj__8777[k] = v);
new_keys__8778.push(k);
return (new cljs.core.ObjMap(this__8774.meta,new_keys__8778,new_strobj__8777,(this__8774.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8779 = this;
if((function (){var and__3822__auto____8780 = goog.isString(k);
if(and__3822__auto____8780)
{return !((cljs.core.scan_array.call(null,1,k,this__8779.keys) == null));
} else
{return and__3822__auto____8780;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__8802 = null;
var G__8802__2 = (function (this_sym8781,k){
var this__8783 = this;
var this_sym8781__8784 = this;
var coll__8785 = this_sym8781__8784;
return coll__8785.cljs$core$ILookup$_lookup$arity$2(coll__8785,k);
});
var G__8802__3 = (function (this_sym8782,k,not_found){
var this__8783 = this;
var this_sym8782__8786 = this;
var coll__8787 = this_sym8782__8786;
return coll__8787.cljs$core$ILookup$_lookup$arity$3(coll__8787,k,not_found);
});
G__8802 = function(this_sym8782,k,not_found){
switch(arguments.length){
case 2:
return G__8802__2.call(this,this_sym8782,k);
case 3:
return G__8802__3.call(this,this_sym8782,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8802;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym8765,args8766){
var this__8788 = this;
return this_sym8765.call.apply(this_sym8765,[this_sym8765].concat(args8766.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8789 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__8790 = this;
var this__8791 = this;
return cljs.core.pr_str.call(null,this__8791);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8792 = this;
if((this__8792.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__8755_SHARP_){
return cljs.core.vector.call(null,p1__8755_SHARP_,(this__8792.strobj[p1__8755_SHARP_]));
}),this__8792.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8793 = this;
return this__8793.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8794 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8795 = this;
return (new cljs.core.ObjMap(meta,this__8795.keys,this__8795.strobj,this__8795.update_count,this__8795.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8796 = this;
return this__8796.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8797 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__8797.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8798 = this;
if((function (){var and__3822__auto____8799 = goog.isString(k);
if(and__3822__auto____8799)
{return !((cljs.core.scan_array.call(null,1,k,this__8798.keys) == null));
} else
{return and__3822__auto____8799;
}
})())
{var new_keys__8800 = this__8798.keys.slice();
var new_strobj__8801 = cljs.core.obj_clone.call(null,this__8798.strobj,this__8798.keys);
new_keys__8800.splice(cljs.core.scan_array.call(null,1,k,new_keys__8800),1);
cljs.core.js_delete.call(null,new_strobj__8801,k);
return (new cljs.core.ObjMap(this__8798.meta,new_keys__8800,new_strobj__8801,(this__8798.update_count + 1),null));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],{},0,0));
cljs.core.ObjMap.HASHMAP_THRESHOLD = 32;
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,0,null));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj,__hash){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.HashMap.cljs$lang$type = true;
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8806 = this;
var h__2281__auto____8807 = this__8806.__hash;
if(!((h__2281__auto____8807 == null)))
{return h__2281__auto____8807;
} else
{var h__2281__auto____8808 = cljs.core.hash_imap.call(null,coll);
this__8806.__hash = h__2281__auto____8808;
return h__2281__auto____8808;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8809 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8810 = this;
var bucket__8811 = (this__8810.hashobj[cljs.core.hash.call(null,k)]);
var i__8812 = (cljs.core.truth_(bucket__8811)?cljs.core.scan_array.call(null,2,k,bucket__8811):null);
if(cljs.core.truth_(i__8812))
{return (bucket__8811[(i__8812 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8813 = this;
var h__8814 = cljs.core.hash.call(null,k);
var bucket__8815 = (this__8813.hashobj[h__8814]);
if(cljs.core.truth_(bucket__8815))
{var new_bucket__8816 = bucket__8815.slice();
var new_hashobj__8817 = goog.object.clone(this__8813.hashobj);
(new_hashobj__8817[h__8814] = new_bucket__8816);
var temp__3971__auto____8818 = cljs.core.scan_array.call(null,2,k,new_bucket__8816);
if(cljs.core.truth_(temp__3971__auto____8818))
{var i__8819 = temp__3971__auto____8818;
(new_bucket__8816[(i__8819 + 1)] = v);
return (new cljs.core.HashMap(this__8813.meta,this__8813.count,new_hashobj__8817,null));
} else
{new_bucket__8816.push(k,v);
return (new cljs.core.HashMap(this__8813.meta,(this__8813.count + 1),new_hashobj__8817,null));
}
} else
{var new_hashobj__8820 = goog.object.clone(this__8813.hashobj);
(new_hashobj__8820[h__8814] = [k,v]);
return (new cljs.core.HashMap(this__8813.meta,(this__8813.count + 1),new_hashobj__8820,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8821 = this;
var bucket__8822 = (this__8821.hashobj[cljs.core.hash.call(null,k)]);
var i__8823 = (cljs.core.truth_(bucket__8822)?cljs.core.scan_array.call(null,2,k,bucket__8822):null);
if(cljs.core.truth_(i__8823))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__8848 = null;
var G__8848__2 = (function (this_sym8824,k){
var this__8826 = this;
var this_sym8824__8827 = this;
var coll__8828 = this_sym8824__8827;
return coll__8828.cljs$core$ILookup$_lookup$arity$2(coll__8828,k);
});
var G__8848__3 = (function (this_sym8825,k,not_found){
var this__8826 = this;
var this_sym8825__8829 = this;
var coll__8830 = this_sym8825__8829;
return coll__8830.cljs$core$ILookup$_lookup$arity$3(coll__8830,k,not_found);
});
G__8848 = function(this_sym8825,k,not_found){
switch(arguments.length){
case 2:
return G__8848__2.call(this,this_sym8825,k);
case 3:
return G__8848__3.call(this,this_sym8825,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8848;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym8804,args8805){
var this__8831 = this;
return this_sym8804.call.apply(this_sym8804,[this_sym8804].concat(args8805.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8832 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__8833 = this;
var this__8834 = this;
return cljs.core.pr_str.call(null,this__8834);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8835 = this;
if((this__8835.count > 0))
{var hashes__8836 = cljs.core.js_keys.call(null,this__8835.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__8803_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__8835.hashobj[p1__8803_SHARP_])));
}),hashes__8836);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8837 = this;
return this__8837.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8838 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8839 = this;
return (new cljs.core.HashMap(meta,this__8839.count,this__8839.hashobj,this__8839.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8840 = this;
return this__8840.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8841 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__8841.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8842 = this;
var h__8843 = cljs.core.hash.call(null,k);
var bucket__8844 = (this__8842.hashobj[h__8843]);
var i__8845 = (cljs.core.truth_(bucket__8844)?cljs.core.scan_array.call(null,2,k,bucket__8844):null);
if(cljs.core.not.call(null,i__8845))
{return coll;
} else
{var new_hashobj__8846 = goog.object.clone(this__8842.hashobj);
if((3 > bucket__8844.length))
{cljs.core.js_delete.call(null,new_hashobj__8846,h__8843);
} else
{var new_bucket__8847 = bucket__8844.slice();
new_bucket__8847.splice(i__8845,2);
(new_hashobj__8846[h__8843] = new_bucket__8847);
}
return (new cljs.core.HashMap(this__8842.meta,(this__8842.count - 1),new_hashobj__8846,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__8849 = ks.length;
var i__8850 = 0;
var out__8851 = cljs.core.HashMap.EMPTY;
while(true){
if((i__8850 < len__8849))
{{
var G__8852 = (i__8850 + 1);
var G__8853 = cljs.core.assoc.call(null,out__8851,(ks[i__8850]),(vs[i__8850]));
i__8850 = G__8852;
out__8851 = G__8853;
continue;
}
} else
{return out__8851;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__8857 = m.arr;
var len__8858 = arr__8857.length;
var i__8859 = 0;
while(true){
if((len__8858 <= i__8859))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__8857[i__8859]),k))
{return i__8859;
} else
{if("\uFDD0'else")
{{
var G__8860 = (i__8859 + 2);
i__8859 = G__8860;
continue;
}
} else
{return null;
}
}
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8863 = this;
return (new cljs.core.TransientArrayMap({},this__8863.arr.length,this__8863.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8864 = this;
var h__2281__auto____8865 = this__8864.__hash;
if(!((h__2281__auto____8865 == null)))
{return h__2281__auto____8865;
} else
{var h__2281__auto____8866 = cljs.core.hash_imap.call(null,coll);
this__8864.__hash = h__2281__auto____8866;
return h__2281__auto____8866;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8867 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8868 = this;
var idx__8869 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8869 === -1))
{return not_found;
} else
{return (this__8868.arr[(idx__8869 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8870 = this;
var idx__8871 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8871 === -1))
{if((this__8870.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__8870.meta,(this__8870.cnt + 1),(function (){var G__8872__8873 = this__8870.arr.slice();
G__8872__8873.push(k);
G__8872__8873.push(v);
return G__8872__8873;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__8870.arr[(idx__8871 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__8870.meta,this__8870.cnt,(function (){var G__8874__8875 = this__8870.arr.slice();
(G__8874__8875[(idx__8871 + 1)] = v);
return G__8874__8875;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8876 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__8908 = null;
var G__8908__2 = (function (this_sym8877,k){
var this__8879 = this;
var this_sym8877__8880 = this;
var coll__8881 = this_sym8877__8880;
return coll__8881.cljs$core$ILookup$_lookup$arity$2(coll__8881,k);
});
var G__8908__3 = (function (this_sym8878,k,not_found){
var this__8879 = this;
var this_sym8878__8882 = this;
var coll__8883 = this_sym8878__8882;
return coll__8883.cljs$core$ILookup$_lookup$arity$3(coll__8883,k,not_found);
});
G__8908 = function(this_sym8878,k,not_found){
switch(arguments.length){
case 2:
return G__8908__2.call(this,this_sym8878,k);
case 3:
return G__8908__3.call(this,this_sym8878,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8908;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym8861,args8862){
var this__8884 = this;
return this_sym8861.call.apply(this_sym8861,[this_sym8861].concat(args8862.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__8885 = this;
var len__8886 = this__8885.arr.length;
var i__8887 = 0;
var init__8888 = init;
while(true){
if((i__8887 < len__8886))
{var init__8889 = f.call(null,init__8888,(this__8885.arr[i__8887]),(this__8885.arr[(i__8887 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__8889))
{return cljs.core.deref.call(null,init__8889);
} else
{{
var G__8909 = (i__8887 + 2);
var G__8910 = init__8889;
i__8887 = G__8909;
init__8888 = G__8910;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8890 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__8891 = this;
var this__8892 = this;
return cljs.core.pr_str.call(null,this__8892);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8893 = this;
if((this__8893.cnt > 0))
{var len__8894 = this__8893.arr.length;
var array_map_seq__8895 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__8894))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__8893.arr[i]),(this__8893.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__8895.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8896 = this;
return this__8896.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8897 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8898 = this;
return (new cljs.core.PersistentArrayMap(meta,this__8898.cnt,this__8898.arr,this__8898.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8899 = this;
return this__8899.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8900 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8900.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8901 = this;
var idx__8902 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8902 >= 0))
{var len__8903 = this__8901.arr.length;
var new_len__8904 = (len__8903 - 2);
if((new_len__8904 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__8905 = cljs.core.make_array.call(null,new_len__8904);
var s__8906 = 0;
var d__8907 = 0;
while(true){
if((s__8906 >= len__8903))
{return (new cljs.core.PersistentArrayMap(this__8901.meta,(this__8901.cnt - 1),new_arr__8905,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__8901.arr[s__8906])))
{{
var G__8911 = (s__8906 + 2);
var G__8912 = d__8907;
s__8906 = G__8911;
d__8907 = G__8912;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__8905[d__8907] = (this__8901.arr[s__8906]));
(new_arr__8905[(d__8907 + 1)] = (this__8901.arr[(s__8906 + 1)]));
{
var G__8913 = (s__8906 + 2);
var G__8914 = (d__8907 + 2);
s__8906 = G__8913;
d__8907 = G__8914;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return coll;
}
});
cljs.core.PersistentArrayMap;
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,0,[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
cljs.core.PersistentArrayMap.fromArrays = (function (ks,vs){
var len__8915 = cljs.core.count.call(null,ks);
var i__8916 = 0;
var out__8917 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__8916 < len__8915))
{{
var G__8918 = (i__8916 + 1);
var G__8919 = cljs.core.assoc_BANG_.call(null,out__8917,(ks[i__8916]),(vs[i__8916]));
i__8916 = G__8918;
out__8917 = G__8919;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8917);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__8920 = this;
if(cljs.core.truth_(this__8920.editable_QMARK_))
{var idx__8921 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__8921 >= 0))
{(this__8920.arr[idx__8921] = (this__8920.arr[(this__8920.len - 2)]));
(this__8920.arr[(idx__8921 + 1)] = (this__8920.arr[(this__8920.len - 1)]));
var G__8922__8923 = this__8920.arr;
G__8922__8923.pop();
G__8922__8923.pop();
G__8922__8923;
this__8920.len = (this__8920.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8924 = this;
if(cljs.core.truth_(this__8924.editable_QMARK_))
{var idx__8925 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__8925 === -1))
{if(((this__8924.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__8924.len = (this__8924.len + 2);
this__8924.arr.push(key);
this__8924.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__8924.len,this__8924.arr),key,val);
}
} else
{if((val === (this__8924.arr[(idx__8925 + 1)])))
{return tcoll;
} else
{(this__8924.arr[(idx__8925 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8926 = this;
if(cljs.core.truth_(this__8926.editable_QMARK_))
{if((function (){var G__8927__8928 = o;
if(G__8927__8928)
{if((function (){var or__3824__auto____8929 = (G__8927__8928.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____8929)
{return or__3824__auto____8929;
} else
{return G__8927__8928.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__8927__8928.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8927__8928);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8927__8928);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__8930 = cljs.core.seq.call(null,o);
var tcoll__8931 = tcoll;
while(true){
var temp__3971__auto____8932 = cljs.core.first.call(null,es__8930);
if(cljs.core.truth_(temp__3971__auto____8932))
{var e__8933 = temp__3971__auto____8932;
{
var G__8939 = cljs.core.next.call(null,es__8930);
var G__8940 = tcoll__8931.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__8931,cljs.core.key.call(null,e__8933),cljs.core.val.call(null,e__8933));
es__8930 = G__8939;
tcoll__8931 = G__8940;
continue;
}
} else
{return tcoll__8931;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8934 = this;
if(cljs.core.truth_(this__8934.editable_QMARK_))
{this__8934.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__8934.len,2),this__8934.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__8935 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__8936 = this;
if(cljs.core.truth_(this__8936.editable_QMARK_))
{var idx__8937 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__8937 === -1))
{return not_found;
} else
{return (this__8936.arr[(idx__8937 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__8938 = this;
if(cljs.core.truth_(this__8938.editable_QMARK_))
{return cljs.core.quot.call(null,this__8938.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__8943 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__8944 = 0;
while(true){
if((i__8944 < len))
{{
var G__8945 = cljs.core.assoc_BANG_.call(null,out__8943,(arr[i__8944]),(arr[(i__8944 + 1)]));
var G__8946 = (i__8944 + 2);
out__8943 = G__8945;
i__8944 = G__8946;
continue;
}
} else
{return out__8943;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})
cljs.core.Box.cljs$lang$type = true;
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__2399__auto__){
return cljs.core.list.call(null,"cljs.core/Box");
});
cljs.core.Box;
cljs.core.key_test = (function key_test(key,other){
if(goog.isString(key))
{return (key === other);
} else
{return cljs.core._EQ_.call(null,key,other);
}
});
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & 31);
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__8951__8952 = arr.slice();
(G__8951__8952[i] = a);
return G__8951__8952;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__8953__8954 = arr.slice();
(G__8953__8954[i] = a);
(G__8953__8954[j] = b);
return G__8953__8954;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
clone_and_set.cljs$lang$arity$3 = clone_and_set__3;
clone_and_set.cljs$lang$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr__8956 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__8956,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__8956,(2 * i),(new_arr__8956.length - (2 * i)));
return new_arr__8956;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count.call(null,(bitmap & (bit - 1)));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return (1 << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable__8959 = inode.ensure_editable(edit);
(editable__8959.arr[i] = a);
return editable__8959;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__8960 = inode.ensure_editable(edit);
(editable__8960.arr[i] = a);
(editable__8960.arr[j] = b);
return editable__8960;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
edit_and_set.cljs$lang$arity$4 = edit_and_set__4;
edit_and_set.cljs$lang$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len__8967 = arr.length;
var i__8968 = 0;
var init__8969 = init;
while(true){
if((i__8968 < len__8967))
{var init__8972 = (function (){var k__8970 = (arr[i__8968]);
if(!((k__8970 == null)))
{return f.call(null,init__8969,k__8970,(arr[(i__8968 + 1)]));
} else
{var node__8971 = (arr[(i__8968 + 1)]);
if(!((node__8971 == null)))
{return node__8971.kv_reduce(f,init__8969);
} else
{return init__8969;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__8972))
{return cljs.core.deref.call(null,init__8972);
} else
{{
var G__8973 = (i__8968 + 2);
var G__8974 = init__8972;
i__8968 = G__8973;
init__8969 = G__8974;
continue;
}
}
} else
{return init__8969;
}
break;
}
});

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__8975 = this;
var inode__8976 = this;
if((this__8975.bitmap === bit))
{return null;
} else
{var editable__8977 = inode__8976.ensure_editable(e);
var earr__8978 = editable__8977.arr;
var len__8979 = earr__8978.length;
editable__8977.bitmap = (bit ^ editable__8977.bitmap);
cljs.core.array_copy.call(null,earr__8978,(2 * (i + 1)),earr__8978,(2 * i),(len__8979 - (2 * (i + 1))));
(earr__8978[(len__8979 - 2)] = null);
(earr__8978[(len__8979 - 1)] = null);
return editable__8977;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__8980 = this;
var inode__8981 = this;
var bit__8982 = (1 << ((hash >>> shift) & 0x01f));
var idx__8983 = cljs.core.bitmap_indexed_node_index.call(null,this__8980.bitmap,bit__8982);
if(((this__8980.bitmap & bit__8982) === 0))
{var n__8984 = cljs.core.bit_count.call(null,this__8980.bitmap);
if(((2 * n__8984) < this__8980.arr.length))
{var editable__8985 = inode__8981.ensure_editable(edit);
var earr__8986 = editable__8985.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__8986,(2 * idx__8983),earr__8986,(2 * (idx__8983 + 1)),(2 * (n__8984 - idx__8983)));
(earr__8986[(2 * idx__8983)] = key);
(earr__8986[((2 * idx__8983) + 1)] = val);
editable__8985.bitmap = (editable__8985.bitmap | bit__8982);
return editable__8985;
} else
{if((n__8984 >= 16))
{var nodes__8987 = cljs.core.make_array.call(null,32);
var jdx__8988 = ((hash >>> shift) & 0x01f);
(nodes__8987[jdx__8988] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__8989 = 0;
var j__8990 = 0;
while(true){
if((i__8989 < 32))
{if((((this__8980.bitmap >>> i__8989) & 1) === 0))
{{
var G__9043 = (i__8989 + 1);
var G__9044 = j__8990;
i__8989 = G__9043;
j__8990 = G__9044;
continue;
}
} else
{(nodes__8987[i__8989] = ((!(((this__8980.arr[j__8990]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__8980.arr[j__8990])),(this__8980.arr[j__8990]),(this__8980.arr[(j__8990 + 1)]),added_leaf_QMARK_):(this__8980.arr[(j__8990 + 1)])));
{
var G__9045 = (i__8989 + 1);
var G__9046 = (j__8990 + 2);
i__8989 = G__9045;
j__8990 = G__9046;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__8984 + 1),nodes__8987));
} else
{if("\uFDD0'else")
{var new_arr__8991 = cljs.core.make_array.call(null,(2 * (n__8984 + 4)));
cljs.core.array_copy.call(null,this__8980.arr,0,new_arr__8991,0,(2 * idx__8983));
(new_arr__8991[(2 * idx__8983)] = key);
(new_arr__8991[((2 * idx__8983) + 1)] = val);
cljs.core.array_copy.call(null,this__8980.arr,(2 * idx__8983),new_arr__8991,(2 * (idx__8983 + 1)),(2 * (n__8984 - idx__8983)));
added_leaf_QMARK_.val = true;
var editable__8992 = inode__8981.ensure_editable(edit);
editable__8992.arr = new_arr__8991;
editable__8992.bitmap = (editable__8992.bitmap | bit__8982);
return editable__8992;
} else
{return null;
}
}
}
} else
{var key_or_nil__8993 = (this__8980.arr[(2 * idx__8983)]);
var val_or_node__8994 = (this__8980.arr[((2 * idx__8983) + 1)]);
if((key_or_nil__8993 == null))
{var n__8995 = val_or_node__8994.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8995 === val_or_node__8994))
{return inode__8981;
} else
{return cljs.core.edit_and_set.call(null,inode__8981,edit,((2 * idx__8983) + 1),n__8995);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8993))
{if((val === val_or_node__8994))
{return inode__8981;
} else
{return cljs.core.edit_and_set.call(null,inode__8981,edit,((2 * idx__8983) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__8981,edit,(2 * idx__8983),null,((2 * idx__8983) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__8993,val_or_node__8994,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__8996 = this;
var inode__8997 = this;
return cljs.core.create_inode_seq.call(null,this__8996.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__8998 = this;
var inode__8999 = this;
var bit__9000 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8998.bitmap & bit__9000) === 0))
{return inode__8999;
} else
{var idx__9001 = cljs.core.bitmap_indexed_node_index.call(null,this__8998.bitmap,bit__9000);
var key_or_nil__9002 = (this__8998.arr[(2 * idx__9001)]);
var val_or_node__9003 = (this__8998.arr[((2 * idx__9001) + 1)]);
if((key_or_nil__9002 == null))
{var n__9004 = val_or_node__9003.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__9004 === val_or_node__9003))
{return inode__8999;
} else
{if(!((n__9004 == null)))
{return cljs.core.edit_and_set.call(null,inode__8999,edit,((2 * idx__9001) + 1),n__9004);
} else
{if((this__8998.bitmap === bit__9000))
{return null;
} else
{if("\uFDD0'else")
{return inode__8999.edit_and_remove_pair(edit,bit__9000,idx__9001);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9002))
{(removed_leaf_QMARK_[0] = true);
return inode__8999.edit_and_remove_pair(edit,bit__9000,idx__9001);
} else
{if("\uFDD0'else")
{return inode__8999;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__9005 = this;
var inode__9006 = this;
if((e === this__9005.edit))
{return inode__9006;
} else
{var n__9007 = cljs.core.bit_count.call(null,this__9005.bitmap);
var new_arr__9008 = cljs.core.make_array.call(null,(((n__9007 < 0))?4:(2 * (n__9007 + 1))));
cljs.core.array_copy.call(null,this__9005.arr,0,new_arr__9008,0,(2 * n__9007));
return (new cljs.core.BitmapIndexedNode(e,this__9005.bitmap,new_arr__9008));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__9009 = this;
var inode__9010 = this;
return cljs.core.inode_kv_reduce.call(null,this__9009.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9011 = this;
var inode__9012 = this;
var bit__9013 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9011.bitmap & bit__9013) === 0))
{return not_found;
} else
{var idx__9014 = cljs.core.bitmap_indexed_node_index.call(null,this__9011.bitmap,bit__9013);
var key_or_nil__9015 = (this__9011.arr[(2 * idx__9014)]);
var val_or_node__9016 = (this__9011.arr[((2 * idx__9014) + 1)]);
if((key_or_nil__9015 == null))
{return val_or_node__9016.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9015))
{return cljs.core.PersistentVector.fromArray([key_or_nil__9015,val_or_node__9016], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var this__9017 = this;
var inode__9018 = this;
var bit__9019 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9017.bitmap & bit__9019) === 0))
{return inode__9018;
} else
{var idx__9020 = cljs.core.bitmap_indexed_node_index.call(null,this__9017.bitmap,bit__9019);
var key_or_nil__9021 = (this__9017.arr[(2 * idx__9020)]);
var val_or_node__9022 = (this__9017.arr[((2 * idx__9020) + 1)]);
if((key_or_nil__9021 == null))
{var n__9023 = val_or_node__9022.inode_without((shift + 5),hash,key);
if((n__9023 === val_or_node__9022))
{return inode__9018;
} else
{if(!((n__9023 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__9017.bitmap,cljs.core.clone_and_set.call(null,this__9017.arr,((2 * idx__9020) + 1),n__9023)));
} else
{if((this__9017.bitmap === bit__9019))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__9017.bitmap ^ bit__9019),cljs.core.remove_pair.call(null,this__9017.arr,idx__9020)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9021))
{return (new cljs.core.BitmapIndexedNode(null,(this__9017.bitmap ^ bit__9019),cljs.core.remove_pair.call(null,this__9017.arr,idx__9020)));
} else
{if("\uFDD0'else")
{return inode__9018;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9024 = this;
var inode__9025 = this;
var bit__9026 = (1 << ((hash >>> shift) & 0x01f));
var idx__9027 = cljs.core.bitmap_indexed_node_index.call(null,this__9024.bitmap,bit__9026);
if(((this__9024.bitmap & bit__9026) === 0))
{var n__9028 = cljs.core.bit_count.call(null,this__9024.bitmap);
if((n__9028 >= 16))
{var nodes__9029 = cljs.core.make_array.call(null,32);
var jdx__9030 = ((hash >>> shift) & 0x01f);
(nodes__9029[jdx__9030] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9031 = 0;
var j__9032 = 0;
while(true){
if((i__9031 < 32))
{if((((this__9024.bitmap >>> i__9031) & 1) === 0))
{{
var G__9047 = (i__9031 + 1);
var G__9048 = j__9032;
i__9031 = G__9047;
j__9032 = G__9048;
continue;
}
} else
{(nodes__9029[i__9031] = ((!(((this__9024.arr[j__9032]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__9024.arr[j__9032])),(this__9024.arr[j__9032]),(this__9024.arr[(j__9032 + 1)]),added_leaf_QMARK_):(this__9024.arr[(j__9032 + 1)])));
{
var G__9049 = (i__9031 + 1);
var G__9050 = (j__9032 + 2);
i__9031 = G__9049;
j__9032 = G__9050;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__9028 + 1),nodes__9029));
} else
{var new_arr__9033 = cljs.core.make_array.call(null,(2 * (n__9028 + 1)));
cljs.core.array_copy.call(null,this__9024.arr,0,new_arr__9033,0,(2 * idx__9027));
(new_arr__9033[(2 * idx__9027)] = key);
(new_arr__9033[((2 * idx__9027) + 1)] = val);
cljs.core.array_copy.call(null,this__9024.arr,(2 * idx__9027),new_arr__9033,(2 * (idx__9027 + 1)),(2 * (n__9028 - idx__9027)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__9024.bitmap | bit__9026),new_arr__9033));
}
} else
{var key_or_nil__9034 = (this__9024.arr[(2 * idx__9027)]);
var val_or_node__9035 = (this__9024.arr[((2 * idx__9027) + 1)]);
if((key_or_nil__9034 == null))
{var n__9036 = val_or_node__9035.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9036 === val_or_node__9035))
{return inode__9025;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9024.bitmap,cljs.core.clone_and_set.call(null,this__9024.arr,((2 * idx__9027) + 1),n__9036)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9034))
{if((val === val_or_node__9035))
{return inode__9025;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9024.bitmap,cljs.core.clone_and_set.call(null,this__9024.arr,((2 * idx__9027) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__9024.bitmap,cljs.core.clone_and_set.call(null,this__9024.arr,(2 * idx__9027),null,((2 * idx__9027) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__9034,val_or_node__9035,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9037 = this;
var inode__9038 = this;
var bit__9039 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9037.bitmap & bit__9039) === 0))
{return not_found;
} else
{var idx__9040 = cljs.core.bitmap_indexed_node_index.call(null,this__9037.bitmap,bit__9039);
var key_or_nil__9041 = (this__9037.arr[(2 * idx__9040)]);
var val_or_node__9042 = (this__9037.arr[((2 * idx__9040) + 1)]);
if((key_or_nil__9041 == null))
{return val_or_node__9042.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9041))
{return val_or_node__9042;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode;
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,0,cljs.core.make_array.call(null,0)));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr__9058 = array_node.arr;
var len__9059 = (2 * (array_node.cnt - 1));
var new_arr__9060 = cljs.core.make_array.call(null,len__9059);
var i__9061 = 0;
var j__9062 = 1;
var bitmap__9063 = 0;
while(true){
if((i__9061 < len__9059))
{if((function (){var and__3822__auto____9064 = !((i__9061 === idx));
if(and__3822__auto____9064)
{return !(((arr__9058[i__9061]) == null));
} else
{return and__3822__auto____9064;
}
})())
{(new_arr__9060[j__9062] = (arr__9058[i__9061]));
{
var G__9065 = (i__9061 + 1);
var G__9066 = (j__9062 + 2);
var G__9067 = (bitmap__9063 | (1 << i__9061));
i__9061 = G__9065;
j__9062 = G__9066;
bitmap__9063 = G__9067;
continue;
}
} else
{{
var G__9068 = (i__9061 + 1);
var G__9069 = j__9062;
var G__9070 = bitmap__9063;
i__9061 = G__9068;
j__9062 = G__9069;
bitmap__9063 = G__9070;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__9063,new_arr__9060));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9071 = this;
var inode__9072 = this;
var idx__9073 = ((hash >>> shift) & 0x01f);
var node__9074 = (this__9071.arr[idx__9073]);
if((node__9074 == null))
{var editable__9075 = cljs.core.edit_and_set.call(null,inode__9072,edit,idx__9073,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__9075.cnt = (editable__9075.cnt + 1);
return editable__9075;
} else
{var n__9076 = node__9074.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9076 === node__9074))
{return inode__9072;
} else
{return cljs.core.edit_and_set.call(null,inode__9072,edit,idx__9073,n__9076);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__9077 = this;
var inode__9078 = this;
return cljs.core.create_array_node_seq.call(null,this__9077.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9079 = this;
var inode__9080 = this;
var idx__9081 = ((hash >>> shift) & 0x01f);
var node__9082 = (this__9079.arr[idx__9081]);
if((node__9082 == null))
{return inode__9080;
} else
{var n__9083 = node__9082.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__9083 === node__9082))
{return inode__9080;
} else
{if((n__9083 == null))
{if((this__9079.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__9080,edit,idx__9081);
} else
{var editable__9084 = cljs.core.edit_and_set.call(null,inode__9080,edit,idx__9081,n__9083);
editable__9084.cnt = (editable__9084.cnt - 1);
return editable__9084;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__9080,edit,idx__9081,n__9083);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__9085 = this;
var inode__9086 = this;
if((e === this__9085.edit))
{return inode__9086;
} else
{return (new cljs.core.ArrayNode(e,this__9085.cnt,this__9085.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__9087 = this;
var inode__9088 = this;
var len__9089 = this__9087.arr.length;
var i__9090 = 0;
var init__9091 = init;
while(true){
if((i__9090 < len__9089))
{var node__9092 = (this__9087.arr[i__9090]);
if(!((node__9092 == null)))
{var init__9093 = node__9092.kv_reduce(f,init__9091);
if(cljs.core.reduced_QMARK_.call(null,init__9093))
{return cljs.core.deref.call(null,init__9093);
} else
{{
var G__9112 = (i__9090 + 1);
var G__9113 = init__9093;
i__9090 = G__9112;
init__9091 = G__9113;
continue;
}
}
} else
{return null;
}
} else
{return init__9091;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9094 = this;
var inode__9095 = this;
var idx__9096 = ((hash >>> shift) & 0x01f);
var node__9097 = (this__9094.arr[idx__9096]);
if(!((node__9097 == null)))
{return node__9097.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__9098 = this;
var inode__9099 = this;
var idx__9100 = ((hash >>> shift) & 0x01f);
var node__9101 = (this__9098.arr[idx__9100]);
if(!((node__9101 == null)))
{var n__9102 = node__9101.inode_without((shift + 5),hash,key);
if((n__9102 === node__9101))
{return inode__9099;
} else
{if((n__9102 == null))
{if((this__9098.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__9099,null,idx__9100);
} else
{return (new cljs.core.ArrayNode(null,(this__9098.cnt - 1),cljs.core.clone_and_set.call(null,this__9098.arr,idx__9100,n__9102)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__9098.cnt,cljs.core.clone_and_set.call(null,this__9098.arr,idx__9100,n__9102)));
} else
{return null;
}
}
}
} else
{return inode__9099;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9103 = this;
var inode__9104 = this;
var idx__9105 = ((hash >>> shift) & 0x01f);
var node__9106 = (this__9103.arr[idx__9105]);
if((node__9106 == null))
{return (new cljs.core.ArrayNode(null,(this__9103.cnt + 1),cljs.core.clone_and_set.call(null,this__9103.arr,idx__9105,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__9107 = node__9106.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9107 === node__9106))
{return inode__9104;
} else
{return (new cljs.core.ArrayNode(null,this__9103.cnt,cljs.core.clone_and_set.call(null,this__9103.arr,idx__9105,n__9107)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9108 = this;
var inode__9109 = this;
var idx__9110 = ((hash >>> shift) & 0x01f);
var node__9111 = (this__9108.arr[idx__9110]);
if(!((node__9111 == null)))
{return node__9111.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__9116 = (2 * cnt);
var i__9117 = 0;
while(true){
if((i__9117 < lim__9116))
{if(cljs.core.key_test.call(null,key,(arr[i__9117])))
{return i__9117;
} else
{{
var G__9118 = (i__9117 + 2);
i__9117 = G__9118;
continue;
}
}
} else
{return -1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9119 = this;
var inode__9120 = this;
if((hash === this__9119.collision_hash))
{var idx__9121 = cljs.core.hash_collision_node_find_index.call(null,this__9119.arr,this__9119.cnt,key);
if((idx__9121 === -1))
{if((this__9119.arr.length > (2 * this__9119.cnt)))
{var editable__9122 = cljs.core.edit_and_set.call(null,inode__9120,edit,(2 * this__9119.cnt),key,((2 * this__9119.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__9122.cnt = (editable__9122.cnt + 1);
return editable__9122;
} else
{var len__9123 = this__9119.arr.length;
var new_arr__9124 = cljs.core.make_array.call(null,(len__9123 + 2));
cljs.core.array_copy.call(null,this__9119.arr,0,new_arr__9124,0,len__9123);
(new_arr__9124[len__9123] = key);
(new_arr__9124[(len__9123 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__9120.ensure_editable_array(edit,(this__9119.cnt + 1),new_arr__9124);
}
} else
{if(((this__9119.arr[(idx__9121 + 1)]) === val))
{return inode__9120;
} else
{return cljs.core.edit_and_set.call(null,inode__9120,edit,(idx__9121 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__9119.collision_hash >>> shift) & 0x01f)),[null,inode__9120,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__9125 = this;
var inode__9126 = this;
return cljs.core.create_inode_seq.call(null,this__9125.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9127 = this;
var inode__9128 = this;
var idx__9129 = cljs.core.hash_collision_node_find_index.call(null,this__9127.arr,this__9127.cnt,key);
if((idx__9129 === -1))
{return inode__9128;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__9127.cnt === 1))
{return null;
} else
{var editable__9130 = inode__9128.ensure_editable(edit);
var earr__9131 = editable__9130.arr;
(earr__9131[idx__9129] = (earr__9131[((2 * this__9127.cnt) - 2)]));
(earr__9131[(idx__9129 + 1)] = (earr__9131[((2 * this__9127.cnt) - 1)]));
(earr__9131[((2 * this__9127.cnt) - 1)] = null);
(earr__9131[((2 * this__9127.cnt) - 2)] = null);
editable__9130.cnt = (editable__9130.cnt - 1);
return editable__9130;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__9132 = this;
var inode__9133 = this;
if((e === this__9132.edit))
{return inode__9133;
} else
{var new_arr__9134 = cljs.core.make_array.call(null,(2 * (this__9132.cnt + 1)));
cljs.core.array_copy.call(null,this__9132.arr,0,new_arr__9134,0,(2 * this__9132.cnt));
return (new cljs.core.HashCollisionNode(e,this__9132.collision_hash,this__9132.cnt,new_arr__9134));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__9135 = this;
var inode__9136 = this;
return cljs.core.inode_kv_reduce.call(null,this__9135.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9137 = this;
var inode__9138 = this;
var idx__9139 = cljs.core.hash_collision_node_find_index.call(null,this__9137.arr,this__9137.cnt,key);
if((idx__9139 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__9137.arr[idx__9139])))
{return cljs.core.PersistentVector.fromArray([(this__9137.arr[idx__9139]),(this__9137.arr[(idx__9139 + 1)])], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var this__9140 = this;
var inode__9141 = this;
var idx__9142 = cljs.core.hash_collision_node_find_index.call(null,this__9140.arr,this__9140.cnt,key);
if((idx__9142 === -1))
{return inode__9141;
} else
{if((this__9140.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__9140.collision_hash,(this__9140.cnt - 1),cljs.core.remove_pair.call(null,this__9140.arr,cljs.core.quot.call(null,idx__9142,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9143 = this;
var inode__9144 = this;
if((hash === this__9143.collision_hash))
{var idx__9145 = cljs.core.hash_collision_node_find_index.call(null,this__9143.arr,this__9143.cnt,key);
if((idx__9145 === -1))
{var len__9146 = this__9143.arr.length;
var new_arr__9147 = cljs.core.make_array.call(null,(len__9146 + 2));
cljs.core.array_copy.call(null,this__9143.arr,0,new_arr__9147,0,len__9146);
(new_arr__9147[len__9146] = key);
(new_arr__9147[(len__9146 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__9143.collision_hash,(this__9143.cnt + 1),new_arr__9147));
} else
{if(cljs.core._EQ_.call(null,(this__9143.arr[idx__9145]),val))
{return inode__9144;
} else
{return (new cljs.core.HashCollisionNode(null,this__9143.collision_hash,this__9143.cnt,cljs.core.clone_and_set.call(null,this__9143.arr,(idx__9145 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__9143.collision_hash >>> shift) & 0x01f)),[null,inode__9144])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9148 = this;
var inode__9149 = this;
var idx__9150 = cljs.core.hash_collision_node_find_index.call(null,this__9148.arr,this__9148.cnt,key);
if((idx__9150 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__9148.arr[idx__9150])))
{return (this__9148.arr[(idx__9150 + 1)]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){
var this__9151 = this;
var inode__9152 = this;
if((e === this__9151.edit))
{this__9151.arr = array;
this__9151.cnt = count;
return inode__9152;
} else
{return (new cljs.core.HashCollisionNode(this__9151.edit,this__9151.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__9157 = cljs.core.hash.call(null,key1);
if((key1hash__9157 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9157,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9158 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__9157,key1,val1,added_leaf_QMARK___9158).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___9158);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__9159 = cljs.core.hash.call(null,key1);
if((key1hash__9159 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9159,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9160 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__9159,key1,val1,added_leaf_QMARK___9160).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___9160);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw('Invalid arity: ' + arguments.length);
};
create_node.cljs$lang$arity$6 = create_node__6;
create_node.cljs$lang$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9161 = this;
var h__2281__auto____9162 = this__9161.__hash;
if(!((h__2281__auto____9162 == null)))
{return h__2281__auto____9162;
} else
{var h__2281__auto____9163 = cljs.core.hash_coll.call(null,coll);
this__9161.__hash = h__2281__auto____9163;
return h__2281__auto____9163;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9164 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__9165 = this;
var this__9166 = this;
return cljs.core.pr_str.call(null,this__9166);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9167 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9168 = this;
if((this__9168.s == null))
{return cljs.core.PersistentVector.fromArray([(this__9168.nodes[this__9168.i]),(this__9168.nodes[(this__9168.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__9168.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9169 = this;
if((this__9169.s == null))
{return cljs.core.create_inode_seq.call(null,this__9169.nodes,(this__9169.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__9169.nodes,this__9169.i,cljs.core.next.call(null,this__9169.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9170 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9171 = this;
return (new cljs.core.NodeSeq(meta,this__9171.nodes,this__9171.i,this__9171.s,this__9171.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9172 = this;
return this__9172.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9173 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9173.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__9180 = nodes.length;
var j__9181 = i;
while(true){
if((j__9181 < len__9180))
{if(!(((nodes[j__9181]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__9181,null,null));
} else
{var temp__3971__auto____9182 = (nodes[(j__9181 + 1)]);
if(cljs.core.truth_(temp__3971__auto____9182))
{var node__9183 = temp__3971__auto____9182;
var temp__3971__auto____9184 = node__9183.inode_seq();
if(cljs.core.truth_(temp__3971__auto____9184))
{var node_seq__9185 = temp__3971__auto____9184;
return (new cljs.core.NodeSeq(null,nodes,(j__9181 + 2),node_seq__9185,null));
} else
{{
var G__9186 = (j__9181 + 2);
j__9181 = G__9186;
continue;
}
}
} else
{{
var G__9187 = (j__9181 + 2);
j__9181 = G__9187;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_inode_seq.cljs$lang$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$lang$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9188 = this;
var h__2281__auto____9189 = this__9188.__hash;
if(!((h__2281__auto____9189 == null)))
{return h__2281__auto____9189;
} else
{var h__2281__auto____9190 = cljs.core.hash_coll.call(null,coll);
this__9188.__hash = h__2281__auto____9190;
return h__2281__auto____9190;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9191 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__9192 = this;
var this__9193 = this;
return cljs.core.pr_str.call(null,this__9193);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9194 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9195 = this;
return cljs.core.first.call(null,this__9195.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9196 = this;
return cljs.core.create_array_node_seq.call(null,null,this__9196.nodes,this__9196.i,cljs.core.next.call(null,this__9196.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9197 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9198 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__9198.nodes,this__9198.i,this__9198.s,this__9198.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9199 = this;
return this__9199.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9200 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9200.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__9207 = nodes.length;
var j__9208 = i;
while(true){
if((j__9208 < len__9207))
{var temp__3971__auto____9209 = (nodes[j__9208]);
if(cljs.core.truth_(temp__3971__auto____9209))
{var nj__9210 = temp__3971__auto____9209;
var temp__3971__auto____9211 = nj__9210.inode_seq();
if(cljs.core.truth_(temp__3971__auto____9211))
{var ns__9212 = temp__3971__auto____9211;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__9208 + 1),ns__9212,null));
} else
{{
var G__9213 = (j__9208 + 1);
j__9208 = G__9213;
continue;
}
}
} else
{{
var G__9214 = (j__9208 + 1);
j__9208 = G__9214;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_array_node_seq.cljs$lang$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$lang$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9217 = this;
return (new cljs.core.TransientHashMap({},this__9217.root,this__9217.cnt,this__9217.has_nil_QMARK_,this__9217.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9218 = this;
var h__2281__auto____9219 = this__9218.__hash;
if(!((h__2281__auto____9219 == null)))
{return h__2281__auto____9219;
} else
{var h__2281__auto____9220 = cljs.core.hash_imap.call(null,coll);
this__9218.__hash = h__2281__auto____9220;
return h__2281__auto____9220;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9221 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9222 = this;
if((k == null))
{if(this__9222.has_nil_QMARK_)
{return this__9222.nil_val;
} else
{return not_found;
}
} else
{if((this__9222.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__9222.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9223 = this;
if((k == null))
{if((function (){var and__3822__auto____9224 = this__9223.has_nil_QMARK_;
if(and__3822__auto____9224)
{return (v === this__9223.nil_val);
} else
{return and__3822__auto____9224;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9223.meta,((this__9223.has_nil_QMARK_)?this__9223.cnt:(this__9223.cnt + 1)),this__9223.root,true,v,null));
}
} else
{var added_leaf_QMARK___9225 = (new cljs.core.Box(false));
var new_root__9226 = (((this__9223.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9223.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___9225);
if((new_root__9226 === this__9223.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9223.meta,((added_leaf_QMARK___9225.val)?(this__9223.cnt + 1):this__9223.cnt),new_root__9226,this__9223.has_nil_QMARK_,this__9223.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9227 = this;
if((k == null))
{return this__9227.has_nil_QMARK_;
} else
{if((this__9227.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__9227.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__9250 = null;
var G__9250__2 = (function (this_sym9228,k){
var this__9230 = this;
var this_sym9228__9231 = this;
var coll__9232 = this_sym9228__9231;
return coll__9232.cljs$core$ILookup$_lookup$arity$2(coll__9232,k);
});
var G__9250__3 = (function (this_sym9229,k,not_found){
var this__9230 = this;
var this_sym9229__9233 = this;
var coll__9234 = this_sym9229__9233;
return coll__9234.cljs$core$ILookup$_lookup$arity$3(coll__9234,k,not_found);
});
G__9250 = function(this_sym9229,k,not_found){
switch(arguments.length){
case 2:
return G__9250__2.call(this,this_sym9229,k);
case 3:
return G__9250__3.call(this,this_sym9229,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9250;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym9215,args9216){
var this__9235 = this;
return this_sym9215.call.apply(this_sym9215,[this_sym9215].concat(args9216.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9236 = this;
var init__9237 = ((this__9236.has_nil_QMARK_)?f.call(null,init,null,this__9236.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__9237))
{return cljs.core.deref.call(null,init__9237);
} else
{if(!((this__9236.root == null)))
{return this__9236.root.kv_reduce(f,init__9237);
} else
{if("\uFDD0'else")
{return init__9237;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9238 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__9239 = this;
var this__9240 = this;
return cljs.core.pr_str.call(null,this__9240);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9241 = this;
if((this__9241.cnt > 0))
{var s__9242 = ((!((this__9241.root == null)))?this__9241.root.inode_seq():null);
if(this__9241.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__9241.nil_val], true),s__9242);
} else
{return s__9242;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9243 = this;
return this__9243.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9244 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9245 = this;
return (new cljs.core.PersistentHashMap(meta,this__9245.cnt,this__9245.root,this__9245.has_nil_QMARK_,this__9245.nil_val,this__9245.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9246 = this;
return this__9246.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9247 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__9247.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9248 = this;
if((k == null))
{if(this__9248.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__9248.meta,(this__9248.cnt - 1),this__9248.root,false,null,null));
} else
{return coll;
}
} else
{if((this__9248.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__9249 = this__9248.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__9249 === this__9248.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9248.meta,(this__9248.cnt - 1),new_root__9249,this__9248.has_nil_QMARK_,this__9248.nil_val,null));
}
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap;
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,0,null,false,null,0));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len__9251 = ks.length;
var i__9252 = 0;
var out__9253 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__9252 < len__9251))
{{
var G__9254 = (i__9252 + 1);
var G__9255 = cljs.core.assoc_BANG_.call(null,out__9253,(ks[i__9252]),(vs[i__9252]));
i__9252 = G__9254;
out__9253 = G__9255;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9253);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__9256 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9257 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__9258 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9259 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9260 = this;
if((k == null))
{if(this__9260.has_nil_QMARK_)
{return this__9260.nil_val;
} else
{return null;
}
} else
{if((this__9260.root == null))
{return null;
} else
{return this__9260.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9261 = this;
if((k == null))
{if(this__9261.has_nil_QMARK_)
{return this__9261.nil_val;
} else
{return not_found;
}
} else
{if((this__9261.root == null))
{return not_found;
} else
{return this__9261.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9262 = this;
if(this__9262.edit)
{return this__9262.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__9263 = this;
var tcoll__9264 = this;
if(this__9263.edit)
{if((function (){var G__9265__9266 = o;
if(G__9265__9266)
{if((function (){var or__3824__auto____9267 = (G__9265__9266.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____9267)
{return or__3824__auto____9267;
} else
{return G__9265__9266.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9265__9266.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9265__9266);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9265__9266);
}
})())
{return tcoll__9264.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__9268 = cljs.core.seq.call(null,o);
var tcoll__9269 = tcoll__9264;
while(true){
var temp__3971__auto____9270 = cljs.core.first.call(null,es__9268);
if(cljs.core.truth_(temp__3971__auto____9270))
{var e__9271 = temp__3971__auto____9270;
{
var G__9282 = cljs.core.next.call(null,es__9268);
var G__9283 = tcoll__9269.assoc_BANG_(cljs.core.key.call(null,e__9271),cljs.core.val.call(null,e__9271));
es__9268 = G__9282;
tcoll__9269 = G__9283;
continue;
}
} else
{return tcoll__9269;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__9272 = this;
var tcoll__9273 = this;
if(this__9272.edit)
{if((k == null))
{if((this__9272.nil_val === v))
{} else
{this__9272.nil_val = v;
}
if(this__9272.has_nil_QMARK_)
{} else
{this__9272.count = (this__9272.count + 1);
this__9272.has_nil_QMARK_ = true;
}
return tcoll__9273;
} else
{var added_leaf_QMARK___9274 = (new cljs.core.Box(false));
var node__9275 = (((this__9272.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9272.root).inode_assoc_BANG_(this__9272.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___9274);
if((node__9275 === this__9272.root))
{} else
{this__9272.root = node__9275;
}
if(added_leaf_QMARK___9274.val)
{this__9272.count = (this__9272.count + 1);
} else
{}
return tcoll__9273;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__9276 = this;
var tcoll__9277 = this;
if(this__9276.edit)
{if((k == null))
{if(this__9276.has_nil_QMARK_)
{this__9276.has_nil_QMARK_ = false;
this__9276.nil_val = null;
this__9276.count = (this__9276.count - 1);
return tcoll__9277;
} else
{return tcoll__9277;
}
} else
{if((this__9276.root == null))
{return tcoll__9277;
} else
{var removed_leaf_QMARK___9278 = (new cljs.core.Box(false));
var node__9279 = this__9276.root.inode_without_BANG_(this__9276.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___9278);
if((node__9279 === this__9276.root))
{} else
{this__9276.root = node__9279;
}
if(cljs.core.truth_((removed_leaf_QMARK___9278[0])))
{this__9276.count = (this__9276.count - 1);
} else
{}
return tcoll__9277;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__9280 = this;
var tcoll__9281 = this;
if(this__9280.edit)
{this__9280.edit = null;
return (new cljs.core.PersistentHashMap(null,this__9280.count,this__9280.root,this__9280.has_nil_QMARK_,this__9280.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__9286 = node;
var stack__9287 = stack;
while(true){
if(!((t__9286 == null)))
{{
var G__9288 = ((ascending_QMARK_)?t__9286.left:t__9286.right);
var G__9289 = cljs.core.conj.call(null,stack__9287,t__9286);
t__9286 = G__9288;
stack__9287 = G__9289;
continue;
}
} else
{return stack__9287;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9290 = this;
var h__2281__auto____9291 = this__9290.__hash;
if(!((h__2281__auto____9291 == null)))
{return h__2281__auto____9291;
} else
{var h__2281__auto____9292 = cljs.core.hash_coll.call(null,coll);
this__9290.__hash = h__2281__auto____9292;
return h__2281__auto____9292;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9293 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__9294 = this;
var this__9295 = this;
return cljs.core.pr_str.call(null,this__9295);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9296 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9297 = this;
if((this__9297.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__9297.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__9298 = this;
return cljs.core.peek.call(null,this__9298.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__9299 = this;
var t__9300 = cljs.core.first.call(null,this__9299.stack);
var next_stack__9301 = cljs.core.tree_map_seq_push.call(null,((this__9299.ascending_QMARK_)?t__9300.right:t__9300.left),cljs.core.next.call(null,this__9299.stack),this__9299.ascending_QMARK_);
if(!((next_stack__9301 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__9301,this__9299.ascending_QMARK_,(this__9299.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9302 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9303 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__9303.stack,this__9303.ascending_QMARK_,this__9303.cnt,this__9303.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9304 = this;
return this__9304.meta;
});
cljs.core.PersistentTreeMapSeq;
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push.call(null,tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
cljs.core.balance_left = (function balance_left(key,val,ins,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,ins,right,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,left,ins,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right))
{return cljs.core.balance_right.call(null,key,val,del,right.redden());
} else
{if((function (){var and__3822__auto____9306 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____9306)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____9306;
}
})())
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right.call(null,right.key,right.val,right.left.right,right.right.redden()),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left))
{return cljs.core.balance_left.call(null,key,val,left.redden(),del);
} else
{if((function (){var and__3822__auto____9308 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____9308)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____9308;
}
})())
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left.call(null,left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__9312 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__9312))
{return cljs.core.deref.call(null,init__9312);
} else
{var init__9313 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__9312):init__9312);
if(cljs.core.reduced_QMARK_.call(null,init__9313))
{return cljs.core.deref.call(null,init__9313);
} else
{var init__9314 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__9313):init__9313);
if(cljs.core.reduced_QMARK_.call(null,init__9314))
{return cljs.core.deref.call(null,init__9314);
} else
{return init__9314;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9317 = this;
var h__2281__auto____9318 = this__9317.__hash;
if(!((h__2281__auto____9318 == null)))
{return h__2281__auto____9318;
} else
{var h__2281__auto____9319 = cljs.core.hash_coll.call(null,coll);
this__9317.__hash = h__2281__auto____9319;
return h__2281__auto____9319;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9320 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9321 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9322 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__9322.key,this__9322.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__9370 = null;
var G__9370__2 = (function (this_sym9323,k){
var this__9325 = this;
var this_sym9323__9326 = this;
var node__9327 = this_sym9323__9326;
return node__9327.cljs$core$ILookup$_lookup$arity$2(node__9327,k);
});
var G__9370__3 = (function (this_sym9324,k,not_found){
var this__9325 = this;
var this_sym9324__9328 = this;
var node__9329 = this_sym9324__9328;
return node__9329.cljs$core$ILookup$_lookup$arity$3(node__9329,k,not_found);
});
G__9370 = function(this_sym9324,k,not_found){
switch(arguments.length){
case 2:
return G__9370__2.call(this,this_sym9324,k);
case 3:
return G__9370__3.call(this,this_sym9324,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9370;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym9315,args9316){
var this__9330 = this;
return this_sym9315.call.apply(this_sym9315,[this_sym9315].concat(args9316.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9331 = this;
return cljs.core.PersistentVector.fromArray([this__9331.key,this__9331.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9332 = this;
return this__9332.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9333 = this;
return this__9333.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__9334 = this;
var node__9335 = this;
return ins.balance_right(node__9335);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__9336 = this;
var node__9337 = this;
return (new cljs.core.RedNode(this__9336.key,this__9336.val,this__9336.left,this__9336.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__9338 = this;
var node__9339 = this;
return cljs.core.balance_right_del.call(null,this__9338.key,this__9338.val,this__9338.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__9340 = this;
var node__9341 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__9342 = this;
var node__9343 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__9343,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__9344 = this;
var node__9345 = this;
return cljs.core.balance_left_del.call(null,this__9344.key,this__9344.val,del,this__9344.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__9346 = this;
var node__9347 = this;
return ins.balance_left(node__9347);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__9348 = this;
var node__9349 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__9349,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__9371 = null;
var G__9371__0 = (function (){
var this__9350 = this;
var this__9352 = this;
return cljs.core.pr_str.call(null,this__9352);
});
G__9371 = function(){
switch(arguments.length){
case 0:
return G__9371__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9371;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__9353 = this;
var node__9354 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9354,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__9355 = this;
var node__9356 = this;
return node__9356;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9357 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9358 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9359 = this;
return cljs.core.list.call(null,this__9359.key,this__9359.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9360 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9361 = this;
return this__9361.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9362 = this;
return cljs.core.PersistentVector.fromArray([this__9362.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9363 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__9363.key,this__9363.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9364 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9365 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9365.key,this__9365.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9366 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9367 = this;
if((n === 0))
{return this__9367.key;
} else
{if((n === 1))
{return this__9367.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__9368 = this;
if((n === 0))
{return this__9368.key;
} else
{if((n === 1))
{return this__9368.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__9369 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.BlackNode;

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9374 = this;
var h__2281__auto____9375 = this__9374.__hash;
if(!((h__2281__auto____9375 == null)))
{return h__2281__auto____9375;
} else
{var h__2281__auto____9376 = cljs.core.hash_coll.call(null,coll);
this__9374.__hash = h__2281__auto____9376;
return h__2281__auto____9376;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9377 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9378 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9379 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__9379.key,this__9379.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__9427 = null;
var G__9427__2 = (function (this_sym9380,k){
var this__9382 = this;
var this_sym9380__9383 = this;
var node__9384 = this_sym9380__9383;
return node__9384.cljs$core$ILookup$_lookup$arity$2(node__9384,k);
});
var G__9427__3 = (function (this_sym9381,k,not_found){
var this__9382 = this;
var this_sym9381__9385 = this;
var node__9386 = this_sym9381__9385;
return node__9386.cljs$core$ILookup$_lookup$arity$3(node__9386,k,not_found);
});
G__9427 = function(this_sym9381,k,not_found){
switch(arguments.length){
case 2:
return G__9427__2.call(this,this_sym9381,k);
case 3:
return G__9427__3.call(this,this_sym9381,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9427;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym9372,args9373){
var this__9387 = this;
return this_sym9372.call.apply(this_sym9372,[this_sym9372].concat(args9373.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9388 = this;
return cljs.core.PersistentVector.fromArray([this__9388.key,this__9388.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9389 = this;
return this__9389.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9390 = this;
return this__9390.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__9391 = this;
var node__9392 = this;
return (new cljs.core.RedNode(this__9391.key,this__9391.val,this__9391.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__9393 = this;
var node__9394 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__9395 = this;
var node__9396 = this;
return (new cljs.core.RedNode(this__9395.key,this__9395.val,this__9395.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__9397 = this;
var node__9398 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__9399 = this;
var node__9400 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__9400,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__9401 = this;
var node__9402 = this;
return (new cljs.core.RedNode(this__9401.key,this__9401.val,del,this__9401.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__9403 = this;
var node__9404 = this;
return (new cljs.core.RedNode(this__9403.key,this__9403.val,ins,this__9403.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__9405 = this;
var node__9406 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9405.left))
{return (new cljs.core.RedNode(this__9405.key,this__9405.val,this__9405.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__9405.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9405.right))
{return (new cljs.core.RedNode(this__9405.right.key,this__9405.right.val,(new cljs.core.BlackNode(this__9405.key,this__9405.val,this__9405.left,this__9405.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__9405.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__9406,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__9428 = null;
var G__9428__0 = (function (){
var this__9407 = this;
var this__9409 = this;
return cljs.core.pr_str.call(null,this__9409);
});
G__9428 = function(){
switch(arguments.length){
case 0:
return G__9428__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9428;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__9410 = this;
var node__9411 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9410.right))
{return (new cljs.core.RedNode(this__9410.key,this__9410.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9410.left,null)),this__9410.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9410.left))
{return (new cljs.core.RedNode(this__9410.left.key,this__9410.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9410.left.left,null)),(new cljs.core.BlackNode(this__9410.key,this__9410.val,this__9410.left.right,this__9410.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9411,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__9412 = this;
var node__9413 = this;
return (new cljs.core.BlackNode(this__9412.key,this__9412.val,this__9412.left,this__9412.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9414 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9415 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9416 = this;
return cljs.core.list.call(null,this__9416.key,this__9416.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9417 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9418 = this;
return this__9418.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9419 = this;
return cljs.core.PersistentVector.fromArray([this__9419.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9420 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__9420.key,this__9420.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9421 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9422 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9422.key,this__9422.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9423 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9424 = this;
if((n === 0))
{return this__9424.key;
} else
{if((n === 1))
{return this__9424.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__9425 = this;
if((n === 0))
{return this__9425.key;
} else
{if((n === 1))
{return this__9425.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__9426 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__9432 = comp.call(null,k,tree.key);
if((c__9432 === 0))
{(found[0] = tree);
return null;
} else
{if((c__9432 < 0))
{var ins__9433 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__9433 == null)))
{return tree.add_left(ins__9433);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__9434 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__9434 == null)))
{return tree.add_right(ins__9434);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{var app__9437 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9437))
{return (new cljs.core.RedNode(app__9437.key,app__9437.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__9437.left,null)),(new cljs.core.RedNode(right.key,right.val,app__9437.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__9437,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__9438 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9438))
{return (new cljs.core.RedNode(app__9438.key,app__9438.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__9438.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__9438.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__9438,right.right,null)));
}
} else
{return null;
}
}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if(!((tree == null)))
{var c__9444 = comp.call(null,k,tree.key);
if((c__9444 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__9444 < 0))
{var del__9445 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____9446 = !((del__9445 == null));
if(or__3824__auto____9446)
{return or__3824__auto____9446;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__9445,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__9445,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__9447 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____9448 = !((del__9447 == null));
if(or__3824__auto____9448)
{return or__3824__auto____9448;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__9447);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__9447,null));
}
} else
{return null;
}
} else
{return null;
}
}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk__9451 = tree.key;
var c__9452 = comp.call(null,k,tk__9451);
if((c__9452 === 0))
{return tree.replace(tk__9451,v,tree.left,tree.right);
} else
{if((c__9452 < 0))
{return tree.replace(tk__9451,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__9451,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9455 = this;
var h__2281__auto____9456 = this__9455.__hash;
if(!((h__2281__auto____9456 == null)))
{return h__2281__auto____9456;
} else
{var h__2281__auto____9457 = cljs.core.hash_imap.call(null,coll);
this__9455.__hash = h__2281__auto____9457;
return h__2281__auto____9457;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9458 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9459 = this;
var n__9460 = coll.entry_at(k);
if(!((n__9460 == null)))
{return n__9460.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9461 = this;
var found__9462 = [null];
var t__9463 = cljs.core.tree_map_add.call(null,this__9461.comp,this__9461.tree,k,v,found__9462);
if((t__9463 == null))
{var found_node__9464 = cljs.core.nth.call(null,found__9462,0);
if(cljs.core._EQ_.call(null,v,found_node__9464.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9461.comp,cljs.core.tree_map_replace.call(null,this__9461.comp,this__9461.tree,k,v),this__9461.cnt,this__9461.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9461.comp,t__9463.blacken(),(this__9461.cnt + 1),this__9461.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9465 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__9499 = null;
var G__9499__2 = (function (this_sym9466,k){
var this__9468 = this;
var this_sym9466__9469 = this;
var coll__9470 = this_sym9466__9469;
return coll__9470.cljs$core$ILookup$_lookup$arity$2(coll__9470,k);
});
var G__9499__3 = (function (this_sym9467,k,not_found){
var this__9468 = this;
var this_sym9467__9471 = this;
var coll__9472 = this_sym9467__9471;
return coll__9472.cljs$core$ILookup$_lookup$arity$3(coll__9472,k,not_found);
});
G__9499 = function(this_sym9467,k,not_found){
switch(arguments.length){
case 2:
return G__9499__2.call(this,this_sym9467,k);
case 3:
return G__9499__3.call(this,this_sym9467,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9499;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym9453,args9454){
var this__9473 = this;
return this_sym9453.call.apply(this_sym9453,[this_sym9453].concat(args9454.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9474 = this;
if(!((this__9474.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__9474.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9475 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9476 = this;
if((this__9476.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9476.tree,false,this__9476.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__9477 = this;
var this__9478 = this;
return cljs.core.pr_str.call(null,this__9478);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__9479 = this;
var coll__9480 = this;
var t__9481 = this__9479.tree;
while(true){
if(!((t__9481 == null)))
{var c__9482 = this__9479.comp.call(null,k,t__9481.key);
if((c__9482 === 0))
{return t__9481;
} else
{if((c__9482 < 0))
{{
var G__9500 = t__9481.left;
t__9481 = G__9500;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__9501 = t__9481.right;
t__9481 = G__9501;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__9483 = this;
if((this__9483.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9483.tree,ascending_QMARK_,this__9483.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9484 = this;
if((this__9484.cnt > 0))
{var stack__9485 = null;
var t__9486 = this__9484.tree;
while(true){
if(!((t__9486 == null)))
{var c__9487 = this__9484.comp.call(null,k,t__9486.key);
if((c__9487 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__9485,t__9486),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__9487 < 0))
{{
var G__9502 = cljs.core.conj.call(null,stack__9485,t__9486);
var G__9503 = t__9486.left;
stack__9485 = G__9502;
t__9486 = G__9503;
continue;
}
} else
{{
var G__9504 = stack__9485;
var G__9505 = t__9486.right;
stack__9485 = G__9504;
t__9486 = G__9505;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__9487 > 0))
{{
var G__9506 = cljs.core.conj.call(null,stack__9485,t__9486);
var G__9507 = t__9486.right;
stack__9485 = G__9506;
t__9486 = G__9507;
continue;
}
} else
{{
var G__9508 = stack__9485;
var G__9509 = t__9486.left;
stack__9485 = G__9508;
t__9486 = G__9509;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__9485 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__9485,ascending_QMARK_,-1,null));
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__9488 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9489 = this;
return this__9489.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9490 = this;
if((this__9490.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9490.tree,true,this__9490.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9491 = this;
return this__9491.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9492 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9493 = this;
return (new cljs.core.PersistentTreeMap(this__9493.comp,this__9493.tree,this__9493.cnt,meta,this__9493.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9494 = this;
return this__9494.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9495 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__9495.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9496 = this;
var found__9497 = [null];
var t__9498 = cljs.core.tree_map_remove.call(null,this__9496.comp,this__9496.tree,k,found__9497);
if((t__9498 == null))
{if((cljs.core.nth.call(null,found__9497,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9496.comp,null,0,this__9496.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9496.comp,t__9498.blacken(),(this__9496.cnt - 1),this__9496.meta,null));
}
});
cljs.core.PersistentTreeMap;
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,0,null,0));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in__9512 = cljs.core.seq.call(null,keyvals);
var out__9513 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__9512)
{{
var G__9514 = cljs.core.nnext.call(null,in__9512);
var G__9515 = cljs.core.assoc_BANG_.call(null,out__9513,cljs.core.first.call(null,in__9512),cljs.core.second.call(null,in__9512));
in__9512 = G__9514;
out__9513 = G__9515;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9513);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__9516){
var keyvals = cljs.core.seq(arglist__9516);;
return hash_map__delegate(keyvals);
});
hash_map.cljs$lang$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,cljs.core.count.call(null,keyvals),2),cljs.core.apply.call(null,cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this, keyvals);
};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__9517){
var keyvals = cljs.core.seq(arglist__9517);;
return array_map__delegate(keyvals);
});
array_map.cljs$lang$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new object map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.obj_map = (function() { 
var obj_map__delegate = function (keyvals){
var ks__9521 = [];
var obj__9522 = {};
var kvs__9523 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__9523)
{ks__9521.push(cljs.core.first.call(null,kvs__9523));
(obj__9522[cljs.core.first.call(null,kvs__9523)] = cljs.core.second.call(null,kvs__9523));
{
var G__9524 = cljs.core.nnext.call(null,kvs__9523);
kvs__9523 = G__9524;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__9521,obj__9522);
}
break;
}
};
var obj_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return obj_map__delegate.call(this, keyvals);
};
obj_map.cljs$lang$maxFixedArity = 0;
obj_map.cljs$lang$applyTo = (function (arglist__9525){
var keyvals = cljs.core.seq(arglist__9525);;
return obj_map__delegate(keyvals);
});
obj_map.cljs$lang$arity$variadic = obj_map__delegate;
return obj_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in__9528 = cljs.core.seq.call(null,keyvals);
var out__9529 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__9528)
{{
var G__9530 = cljs.core.nnext.call(null,in__9528);
var G__9531 = cljs.core.assoc.call(null,out__9529,cljs.core.first.call(null,in__9528),cljs.core.second.call(null,in__9528));
in__9528 = G__9530;
out__9529 = G__9531;
continue;
}
} else
{return out__9529;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this, keyvals);
};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__9532){
var keyvals = cljs.core.seq(arglist__9532);;
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$lang$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in__9535 = cljs.core.seq.call(null,keyvals);
var out__9536 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__9535)
{{
var G__9537 = cljs.core.nnext.call(null,in__9535);
var G__9538 = cljs.core.assoc.call(null,out__9536,cljs.core.first.call(null,in__9535),cljs.core.second.call(null,in__9535));
in__9535 = G__9537;
out__9536 = G__9538;
continue;
}
} else
{return out__9536;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this, comparator, keyvals);
};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__9539){
var comparator = cljs.core.first(arglist__9539);
var keyvals = cljs.core.rest(arglist__9539);
return sorted_map_by__delegate(comparator, keyvals);
});
sorted_map_by.cljs$lang$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key.call(null,map_entry);
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val.call(null,map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__9540_SHARP_,p2__9541_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____9543 = p1__9540_SHARP_;
if(cljs.core.truth_(or__3824__auto____9543))
{return or__3824__auto____9543;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__9541_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__9544){
var maps = cljs.core.seq(arglist__9544);;
return merge__delegate(maps);
});
merge.cljs$lang$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__9552 = (function (m,e){
var k__9550 = cljs.core.first.call(null,e);
var v__9551 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__9550))
{return cljs.core.assoc.call(null,m,k__9550,f.call(null,cljs.core._lookup.call(null,m,k__9550,null),v__9551));
} else
{return cljs.core.assoc.call(null,m,k__9550,v__9551);
}
});
var merge2__9554 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__9552,(function (){var or__3824__auto____9553 = m1;
if(cljs.core.truth_(or__3824__auto____9553))
{return or__3824__auto____9553;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__9554,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__9555){
var f = cljs.core.first(arglist__9555);
var maps = cljs.core.rest(arglist__9555);
return merge_with__delegate(f, maps);
});
merge_with.cljs$lang$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__9560 = cljs.core.ObjMap.EMPTY;
var keys__9561 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__9561)
{var key__9562 = cljs.core.first.call(null,keys__9561);
var entry__9563 = cljs.core._lookup.call(null,map,key__9562,"\uFDD0'cljs.core/not-found");
{
var G__9564 = ((cljs.core.not_EQ_.call(null,entry__9563,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret__9560,key__9562,entry__9563):ret__9560);
var G__9565 = cljs.core.next.call(null,keys__9561);
ret__9560 = G__9564;
keys__9561 = G__9565;
continue;
}
} else
{return ret__9560;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9569 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__9569.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9570 = this;
var h__2281__auto____9571 = this__9570.__hash;
if(!((h__2281__auto____9571 == null)))
{return h__2281__auto____9571;
} else
{var h__2281__auto____9572 = cljs.core.hash_iset.call(null,coll);
this__9570.__hash = h__2281__auto____9572;
return h__2281__auto____9572;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9573 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9574 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9574.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__9595 = null;
var G__9595__2 = (function (this_sym9575,k){
var this__9577 = this;
var this_sym9575__9578 = this;
var coll__9579 = this_sym9575__9578;
return coll__9579.cljs$core$ILookup$_lookup$arity$2(coll__9579,k);
});
var G__9595__3 = (function (this_sym9576,k,not_found){
var this__9577 = this;
var this_sym9576__9580 = this;
var coll__9581 = this_sym9576__9580;
return coll__9581.cljs$core$ILookup$_lookup$arity$3(coll__9581,k,not_found);
});
G__9595 = function(this_sym9576,k,not_found){
switch(arguments.length){
case 2:
return G__9595__2.call(this,this_sym9576,k);
case 3:
return G__9595__3.call(this,this_sym9576,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9595;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym9567,args9568){
var this__9582 = this;
return this_sym9567.call.apply(this_sym9567,[this_sym9567].concat(args9568.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9583 = this;
return (new cljs.core.PersistentHashSet(this__9583.meta,cljs.core.assoc.call(null,this__9583.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__9584 = this;
var this__9585 = this;
return cljs.core.pr_str.call(null,this__9585);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9586 = this;
return cljs.core.keys.call(null,this__9586.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9587 = this;
return (new cljs.core.PersistentHashSet(this__9587.meta,cljs.core.dissoc.call(null,this__9587.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9588 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9589 = this;
var and__3822__auto____9590 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9590)
{var and__3822__auto____9591 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9591)
{return cljs.core.every_QMARK_.call(null,(function (p1__9566_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9566_SHARP_);
}),other);
} else
{return and__3822__auto____9591;
}
} else
{return and__3822__auto____9590;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9592 = this;
return (new cljs.core.PersistentHashSet(meta,this__9592.hash_map,this__9592.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9593 = this;
return this__9593.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9594 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__9594.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__9596 = cljs.core.count.call(null,items);
var i__9597 = 0;
var out__9598 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__9597 < len__9596))
{{
var G__9599 = (i__9597 + 1);
var G__9600 = cljs.core.conj_BANG_.call(null,out__9598,(items[i__9597]));
i__9597 = G__9599;
out__9598 = G__9600;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9598);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 34;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__9618 = null;
var G__9618__2 = (function (this_sym9604,k){
var this__9606 = this;
var this_sym9604__9607 = this;
var tcoll__9608 = this_sym9604__9607;
if((cljs.core._lookup.call(null,this__9606.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__9618__3 = (function (this_sym9605,k,not_found){
var this__9606 = this;
var this_sym9605__9609 = this;
var tcoll__9610 = this_sym9605__9609;
if((cljs.core._lookup.call(null,this__9606.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__9618 = function(this_sym9605,k,not_found){
switch(arguments.length){
case 2:
return G__9618__2.call(this,this_sym9605,k);
case 3:
return G__9618__3.call(this,this_sym9605,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9618;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym9602,args9603){
var this__9611 = this;
return this_sym9602.call.apply(this_sym9602,[this_sym9602].concat(args9603.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__9612 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__9613 = this;
if((cljs.core._lookup.call(null,this__9613.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9614 = this;
return cljs.core.count.call(null,this__9614.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__9615 = this;
this__9615.transient_map = cljs.core.dissoc_BANG_.call(null,this__9615.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9616 = this;
this__9616.transient_map = cljs.core.assoc_BANG_.call(null,this__9616.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9617 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__9617.transient_map),null));
});
cljs.core.TransientHashSet;

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9621 = this;
var h__2281__auto____9622 = this__9621.__hash;
if(!((h__2281__auto____9622 == null)))
{return h__2281__auto____9622;
} else
{var h__2281__auto____9623 = cljs.core.hash_iset.call(null,coll);
this__9621.__hash = h__2281__auto____9623;
return h__2281__auto____9623;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9624 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9625 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9625.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__9651 = null;
var G__9651__2 = (function (this_sym9626,k){
var this__9628 = this;
var this_sym9626__9629 = this;
var coll__9630 = this_sym9626__9629;
return coll__9630.cljs$core$ILookup$_lookup$arity$2(coll__9630,k);
});
var G__9651__3 = (function (this_sym9627,k,not_found){
var this__9628 = this;
var this_sym9627__9631 = this;
var coll__9632 = this_sym9627__9631;
return coll__9632.cljs$core$ILookup$_lookup$arity$3(coll__9632,k,not_found);
});
G__9651 = function(this_sym9627,k,not_found){
switch(arguments.length){
case 2:
return G__9651__2.call(this,this_sym9627,k);
case 3:
return G__9651__3.call(this,this_sym9627,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9651;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym9619,args9620){
var this__9633 = this;
return this_sym9619.call.apply(this_sym9619,[this_sym9619].concat(args9620.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9634 = this;
return (new cljs.core.PersistentTreeSet(this__9634.meta,cljs.core.assoc.call(null,this__9634.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9635 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__9635.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__9636 = this;
var this__9637 = this;
return cljs.core.pr_str.call(null,this__9637);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__9638 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__9638.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9639 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__9639.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__9640 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9641 = this;
return cljs.core._comparator.call(null,this__9641.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9642 = this;
return cljs.core.keys.call(null,this__9642.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9643 = this;
return (new cljs.core.PersistentTreeSet(this__9643.meta,cljs.core.dissoc.call(null,this__9643.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9644 = this;
return cljs.core.count.call(null,this__9644.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9645 = this;
var and__3822__auto____9646 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9646)
{var and__3822__auto____9647 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9647)
{return cljs.core.every_QMARK_.call(null,(function (p1__9601_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9601_SHARP_);
}),other);
} else
{return and__3822__auto____9647;
}
} else
{return and__3822__auto____9646;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9648 = this;
return (new cljs.core.PersistentTreeSet(meta,this__9648.tree_map,this__9648.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9649 = this;
return this__9649.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9650 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__9650.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* @param {...*} var_args
*/
cljs.core.hash_set = (function() {
var hash_set = null;
var hash_set__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var hash_set__1 = (function() { 
var G__9656__delegate = function (keys){
var in__9654 = cljs.core.seq.call(null,keys);
var out__9655 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__9654))
{{
var G__9657 = cljs.core.next.call(null,in__9654);
var G__9658 = cljs.core.conj_BANG_.call(null,out__9655,cljs.core.first.call(null,in__9654));
in__9654 = G__9657;
out__9655 = G__9658;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9655);
}
break;
}
};
var G__9656 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9656__delegate.call(this, keys);
};
G__9656.cljs$lang$maxFixedArity = 0;
G__9656.cljs$lang$applyTo = (function (arglist__9659){
var keys = cljs.core.seq(arglist__9659);;
return G__9656__delegate(keys);
});
G__9656.cljs$lang$arity$variadic = G__9656__delegate;
return G__9656;
})()
;
hash_set = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return hash_set__0.call(this);
default:
return hash_set__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
hash_set.cljs$lang$maxFixedArity = 0;
hash_set.cljs$lang$applyTo = hash_set__1.cljs$lang$applyTo;
hash_set.cljs$lang$arity$0 = hash_set__0;
hash_set.cljs$lang$arity$variadic = hash_set__1.cljs$lang$arity$variadic;
return hash_set;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
return cljs.core.apply.call(null,cljs.core.hash_set,coll);
});
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.call(null,cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this, keys);
};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__9660){
var keys = cljs.core.seq(arglist__9660);;
return sorted_set__delegate(keys);
});
sorted_set.cljs$lang$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.call(null,cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by.call(null,comparator),0)),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this, comparator, keys);
};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__9662){
var comparator = cljs.core.first(arglist__9662);
var keys = cljs.core.rest(arglist__9662);
return sorted_set_by__delegate(comparator, keys);
});
sorted_set_by.cljs$lang$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.vector_QMARK_.call(null,coll))
{var n__9668 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____9669 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____9669))
{var e__9670 = temp__3971__auto____9669;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__9670));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__9668,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__9661_SHARP_){
var temp__3971__auto____9671 = cljs.core.find.call(null,smap,p1__9661_SHARP_);
if(cljs.core.truth_(temp__3971__auto____9671))
{var e__9672 = temp__3971__auto____9671;
return cljs.core.second.call(null,e__9672);
} else
{return p1__9661_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__9702 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__9695,seen){
while(true){
var vec__9696__9697 = p__9695;
var f__9698 = cljs.core.nth.call(null,vec__9696__9697,0,null);
var xs__9699 = vec__9696__9697;
var temp__3974__auto____9700 = cljs.core.seq.call(null,xs__9699);
if(temp__3974__auto____9700)
{var s__9701 = temp__3974__auto____9700;
if(cljs.core.contains_QMARK_.call(null,seen,f__9698))
{{
var G__9703 = cljs.core.rest.call(null,s__9701);
var G__9704 = seen;
p__9695 = G__9703;
seen = G__9704;
continue;
}
} else
{return cljs.core.cons.call(null,f__9698,step.call(null,cljs.core.rest.call(null,s__9701),cljs.core.conj.call(null,seen,f__9698)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__9702.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__9707 = cljs.core.PersistentVector.EMPTY;
var s__9708 = s;
while(true){
if(cljs.core.next.call(null,s__9708))
{{
var G__9709 = cljs.core.conj.call(null,ret__9707,cljs.core.first.call(null,s__9708));
var G__9710 = cljs.core.next.call(null,s__9708);
ret__9707 = G__9709;
s__9708 = G__9710;
continue;
}
} else
{return cljs.core.seq.call(null,ret__9707);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if((function (){var or__3824__auto____9713 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9713)
{return or__3824__auto____9713;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9714 = x.lastIndexOf("/");
if((i__9714 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__9714 + 1));
}
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if((function (){var or__3824__auto____9717 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9717)
{return or__3824__auto____9717;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9718 = x.lastIndexOf("/");
if((i__9718 > -1))
{return cljs.core.subs.call(null,x,2,i__9718);
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__9725 = cljs.core.ObjMap.EMPTY;
var ks__9726 = cljs.core.seq.call(null,keys);
var vs__9727 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____9728 = ks__9726;
if(and__3822__auto____9728)
{return vs__9727;
} else
{return and__3822__auto____9728;
}
})())
{{
var G__9729 = cljs.core.assoc.call(null,map__9725,cljs.core.first.call(null,ks__9726),cljs.core.first.call(null,vs__9727));
var G__9730 = cljs.core.next.call(null,ks__9726);
var G__9731 = cljs.core.next.call(null,vs__9727);
map__9725 = G__9729;
ks__9726 = G__9730;
vs__9727 = G__9731;
continue;
}
} else
{return map__9725;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if((k.call(null,x) > k.call(null,y)))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__9734__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9719_SHARP_,p2__9720_SHARP_){
return max_key.call(null,k,p1__9719_SHARP_,p2__9720_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__9734 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9734__delegate.call(this, k, x, y, more);
};
G__9734.cljs$lang$maxFixedArity = 3;
G__9734.cljs$lang$applyTo = (function (arglist__9735){
var k = cljs.core.first(arglist__9735);
var x = cljs.core.first(cljs.core.next(arglist__9735));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9735)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9735)));
return G__9734__delegate(k, x, y, more);
});
G__9734.cljs$lang$arity$variadic = G__9734__delegate;
return G__9734;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$lang$arity$2 = max_key__2;
max_key.cljs$lang$arity$3 = max_key__3;
max_key.cljs$lang$arity$variadic = max_key__4.cljs$lang$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if((k.call(null,x) < k.call(null,y)))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__9736__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9732_SHARP_,p2__9733_SHARP_){
return min_key.call(null,k,p1__9732_SHARP_,p2__9733_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__9736 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9736__delegate.call(this, k, x, y, more);
};
G__9736.cljs$lang$maxFixedArity = 3;
G__9736.cljs$lang$applyTo = (function (arglist__9737){
var k = cljs.core.first(arglist__9737);
var x = cljs.core.first(cljs.core.next(arglist__9737));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9737)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9737)));
return G__9736__delegate(k, x, y, more);
});
G__9736.cljs$lang$arity$variadic = G__9736__delegate;
return G__9736;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$lang$arity$2 = min_key__2;
min_key.cljs$lang$arity$3 = min_key__3;
min_key.cljs$lang$arity$variadic = min_key__4.cljs$lang$arity$variadic;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9740 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9740)
{var s__9741 = temp__3974__auto____9740;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__9741),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__9741)));
} else
{return null;
}
}),null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition_all.cljs$lang$arity$2 = partition_all__2;
partition_all.cljs$lang$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9744 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9744)
{var s__9745 = temp__3974__auto____9744;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__9745))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9745),take_while.call(null,pred,cljs.core.rest.call(null,s__9745)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp__9747 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__9747.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include__9759 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____9760 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____9760))
{var vec__9761__9762 = temp__3974__auto____9760;
var e__9763 = cljs.core.nth.call(null,vec__9761__9762,0,null);
var s__9764 = vec__9761__9762;
if(cljs.core.truth_(include__9759.call(null,e__9763)))
{return s__9764;
} else
{return cljs.core.next.call(null,s__9764);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9759,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9765 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____9765))
{var vec__9766__9767 = temp__3974__auto____9765;
var e__9768 = cljs.core.nth.call(null,vec__9766__9767,0,null);
var s__9769 = vec__9766__9767;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__9768))?s__9769:cljs.core.next.call(null,s__9769)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
subseq.cljs$lang$arity$3 = subseq__3;
subseq.cljs$lang$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include__9781 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____9782 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____9782))
{var vec__9783__9784 = temp__3974__auto____9782;
var e__9785 = cljs.core.nth.call(null,vec__9783__9784,0,null);
var s__9786 = vec__9783__9784;
if(cljs.core.truth_(include__9781.call(null,e__9785)))
{return s__9786;
} else
{return cljs.core.next.call(null,s__9786);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9781,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9787 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____9787))
{var vec__9788__9789 = temp__3974__auto____9787;
var e__9790 = cljs.core.nth.call(null,vec__9788__9789,0,null);
var s__9791 = vec__9788__9789;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__9790))?s__9791:cljs.core.next.call(null,s__9791)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
rsubseq.cljs$lang$arity$3 = rsubseq__3;
rsubseq.cljs$lang$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__9792 = this;
var h__2281__auto____9793 = this__9792.__hash;
if(!((h__2281__auto____9793 == null)))
{return h__2281__auto____9793;
} else
{var h__2281__auto____9794 = cljs.core.hash_coll.call(null,rng);
this__9792.__hash = h__2281__auto____9794;
return h__2281__auto____9794;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__9795 = this;
if((this__9795.step > 0))
{if(((this__9795.start + this__9795.step) < this__9795.end))
{return (new cljs.core.Range(this__9795.meta,(this__9795.start + this__9795.step),this__9795.end,this__9795.step,null));
} else
{return null;
}
} else
{if(((this__9795.start + this__9795.step) > this__9795.end))
{return (new cljs.core.Range(this__9795.meta,(this__9795.start + this__9795.step),this__9795.end,this__9795.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__9796 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__9797 = this;
var this__9798 = this;
return cljs.core.pr_str.call(null,this__9798);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__9799 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__9800 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__9801 = this;
if((this__9801.step > 0))
{if((this__9801.start < this__9801.end))
{return rng;
} else
{return null;
}
} else
{if((this__9801.start > this__9801.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__9802 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__9802.end - this__9802.start) / this__9802.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__9803 = this;
return this__9803.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__9804 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__9804.meta,(this__9804.start + this__9804.step),this__9804.end,this__9804.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__9805 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__9806 = this;
return (new cljs.core.Range(meta,this__9806.start,this__9806.end,this__9806.step,this__9806.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__9807 = this;
return this__9807.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__9808 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9808.start + (n * this__9808.step));
} else
{if((function (){var and__3822__auto____9809 = (this__9808.start > this__9808.end);
if(and__3822__auto____9809)
{return (this__9808.step === 0);
} else
{return and__3822__auto____9809;
}
})())
{return this__9808.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__9810 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9810.start + (n * this__9810.step));
} else
{if((function (){var and__3822__auto____9811 = (this__9810.start > this__9810.end);
if(and__3822__auto____9811)
{return (this__9810.step === 0);
} else
{return and__3822__auto____9811;
}
})())
{return this__9810.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__9812 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9812.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.call(null,0,Number.MAX_VALUE,1);
});
var range__1 = (function (end){
return range.call(null,0,end,1);
});
var range__2 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
range.cljs$lang$arity$0 = range__0;
range.cljs$lang$arity$1 = range__1;
range.cljs$lang$arity$2 = range__2;
range.cljs$lang$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9815 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9815)
{var s__9816 = temp__3974__auto____9815;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__9816),take_nth.call(null,n,cljs.core.drop.call(null,n,s__9816)));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)], true);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9823 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9823)
{var s__9824 = temp__3974__auto____9823;
var fst__9825 = cljs.core.first.call(null,s__9824);
var fv__9826 = f.call(null,fst__9825);
var run__9827 = cljs.core.cons.call(null,fst__9825,cljs.core.take_while.call(null,(function (p1__9817_SHARP_){
return cljs.core._EQ_.call(null,fv__9826,f.call(null,p1__9817_SHARP_));
}),cljs.core.next.call(null,s__9824)));
return cljs.core.cons.call(null,run__9827,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__9827),s__9824))));
} else
{return null;
}
}),null));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc_BANG_.call(null,counts,x,(cljs.core._lookup.call(null,counts,x,0) + 1));
}),cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____9842 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____9842)
{var s__9843 = temp__3971__auto____9842;
return reductions.call(null,f,cljs.core.first.call(null,s__9843),cljs.core.rest.call(null,s__9843));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9844 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9844)
{var s__9845 = temp__3974__auto____9844;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__9845)),cljs.core.rest.call(null,s__9845));
} else
{return null;
}
}),null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reductions.cljs$lang$arity$2 = reductions__2;
reductions.cljs$lang$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__9848 = null;
var G__9848__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__9848__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__9848__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__9848__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__9848__4 = (function() { 
var G__9849__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__9849 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9849__delegate.call(this, x, y, z, args);
};
G__9849.cljs$lang$maxFixedArity = 3;
G__9849.cljs$lang$applyTo = (function (arglist__9850){
var x = cljs.core.first(arglist__9850);
var y = cljs.core.first(cljs.core.next(arglist__9850));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9850)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9850)));
return G__9849__delegate(x, y, z, args);
});
G__9849.cljs$lang$arity$variadic = G__9849__delegate;
return G__9849;
})()
;
G__9848 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9848__0.call(this);
case 1:
return G__9848__1.call(this,x);
case 2:
return G__9848__2.call(this,x,y);
case 3:
return G__9848__3.call(this,x,y,z);
default:
return G__9848__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9848.cljs$lang$maxFixedArity = 3;
G__9848.cljs$lang$applyTo = G__9848__4.cljs$lang$applyTo;
return G__9848;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__9851 = null;
var G__9851__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__9851__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__9851__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__9851__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__9851__4 = (function() { 
var G__9852__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__9852 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9852__delegate.call(this, x, y, z, args);
};
G__9852.cljs$lang$maxFixedArity = 3;
G__9852.cljs$lang$applyTo = (function (arglist__9853){
var x = cljs.core.first(arglist__9853);
var y = cljs.core.first(cljs.core.next(arglist__9853));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9853)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9853)));
return G__9852__delegate(x, y, z, args);
});
G__9852.cljs$lang$arity$variadic = G__9852__delegate;
return G__9852;
})()
;
G__9851 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9851__0.call(this);
case 1:
return G__9851__1.call(this,x);
case 2:
return G__9851__2.call(this,x,y);
case 3:
return G__9851__3.call(this,x,y,z);
default:
return G__9851__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9851.cljs$lang$maxFixedArity = 3;
G__9851.cljs$lang$applyTo = G__9851__4.cljs$lang$applyTo;
return G__9851;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__9854 = null;
var G__9854__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__9854__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__9854__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__9854__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__9854__4 = (function() { 
var G__9855__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__9855 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9855__delegate.call(this, x, y, z, args);
};
G__9855.cljs$lang$maxFixedArity = 3;
G__9855.cljs$lang$applyTo = (function (arglist__9856){
var x = cljs.core.first(arglist__9856);
var y = cljs.core.first(cljs.core.next(arglist__9856));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9856)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9856)));
return G__9855__delegate(x, y, z, args);
});
G__9855.cljs$lang$arity$variadic = G__9855__delegate;
return G__9855;
})()
;
G__9854 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9854__0.call(this);
case 1:
return G__9854__1.call(this,x);
case 2:
return G__9854__2.call(this,x,y);
case 3:
return G__9854__3.call(this,x,y,z);
default:
return G__9854__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9854.cljs$lang$maxFixedArity = 3;
G__9854.cljs$lang$applyTo = G__9854__4.cljs$lang$applyTo;
return G__9854;
})()
});
var juxt__4 = (function() { 
var G__9857__delegate = function (f,g,h,fs){
var fs__9847 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__9858 = null;
var G__9858__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__9828_SHARP_,p2__9829_SHARP_){
return cljs.core.conj.call(null,p1__9828_SHARP_,p2__9829_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__9847);
});
var G__9858__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__9830_SHARP_,p2__9831_SHARP_){
return cljs.core.conj.call(null,p1__9830_SHARP_,p2__9831_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__9847);
});
var G__9858__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__9832_SHARP_,p2__9833_SHARP_){
return cljs.core.conj.call(null,p1__9832_SHARP_,p2__9833_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__9847);
});
var G__9858__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__9834_SHARP_,p2__9835_SHARP_){
return cljs.core.conj.call(null,p1__9834_SHARP_,p2__9835_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__9847);
});
var G__9858__4 = (function() { 
var G__9859__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__9836_SHARP_,p2__9837_SHARP_){
return cljs.core.conj.call(null,p1__9836_SHARP_,cljs.core.apply.call(null,p2__9837_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__9847);
};
var G__9859 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9859__delegate.call(this, x, y, z, args);
};
G__9859.cljs$lang$maxFixedArity = 3;
G__9859.cljs$lang$applyTo = (function (arglist__9860){
var x = cljs.core.first(arglist__9860);
var y = cljs.core.first(cljs.core.next(arglist__9860));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9860)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9860)));
return G__9859__delegate(x, y, z, args);
});
G__9859.cljs$lang$arity$variadic = G__9859__delegate;
return G__9859;
})()
;
G__9858 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9858__0.call(this);
case 1:
return G__9858__1.call(this,x);
case 2:
return G__9858__2.call(this,x,y);
case 3:
return G__9858__3.call(this,x,y,z);
default:
return G__9858__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9858.cljs$lang$maxFixedArity = 3;
G__9858.cljs$lang$applyTo = G__9858__4.cljs$lang$applyTo;
return G__9858;
})()
};
var G__9857 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9857__delegate.call(this, f, g, h, fs);
};
G__9857.cljs$lang$maxFixedArity = 3;
G__9857.cljs$lang$applyTo = (function (arglist__9861){
var f = cljs.core.first(arglist__9861);
var g = cljs.core.first(cljs.core.next(arglist__9861));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9861)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9861)));
return G__9857__delegate(f, g, h, fs);
});
G__9857.cljs$lang$arity$variadic = G__9857__delegate;
return G__9857;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$lang$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$lang$arity$1 = juxt__1;
juxt.cljs$lang$arity$2 = juxt__2;
juxt.cljs$lang$arity$3 = juxt__3;
juxt.cljs$lang$arity$variadic = juxt__4.cljs$lang$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(cljs.core.seq.call(null,coll))
{{
var G__9864 = cljs.core.next.call(null,coll);
coll = G__9864;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9863 = cljs.core.seq.call(null,coll);
if(and__3822__auto____9863)
{return (n > 0);
} else
{return and__3822__auto____9863;
}
})()))
{{
var G__9865 = (n - 1);
var G__9866 = cljs.core.next.call(null,coll);
n = G__9865;
coll = G__9866;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
dorun.cljs$lang$arity$1 = dorun__1;
dorun.cljs$lang$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
doall.cljs$lang$arity$1 = doall__1;
doall.cljs$lang$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){
return o instanceof RegExp;
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__9868 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__9868),s))
{if((cljs.core.count.call(null,matches__9868) === 1))
{return cljs.core.first.call(null,matches__9868);
} else
{return cljs.core.vec.call(null,matches__9868);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__9870 = re.exec(s);
if((matches__9870 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__9870) === 1))
{return cljs.core.first.call(null,matches__9870);
} else
{return cljs.core.vec.call(null,matches__9870);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__9875 = cljs.core.re_find.call(null,re,s);
var match_idx__9876 = s.search(re);
var match_str__9877 = ((cljs.core.coll_QMARK_.call(null,match_data__9875))?cljs.core.first.call(null,match_data__9875):match_data__9875);
var post_match__9878 = cljs.core.subs.call(null,s,(match_idx__9876 + cljs.core.count.call(null,match_str__9877)));
if(cljs.core.truth_(match_data__9875))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__9875,re_seq.call(null,re,post_match__9878));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__9885__9886 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___9887 = cljs.core.nth.call(null,vec__9885__9886,0,null);
var flags__9888 = cljs.core.nth.call(null,vec__9885__9886,1,null);
var pattern__9889 = cljs.core.nth.call(null,vec__9885__9886,2,null);
return (new RegExp(pattern__9889,flags__9888));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__9879_SHARP_){
return print_one.call(null,p1__9879_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end], true));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if((obj == null))
{return cljs.core.list.call(null,"nil");
} else
{if((void 0 === obj))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if("\uFDD0'else")
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____9899 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____9899))
{var and__3822__auto____9903 = (function (){var G__9900__9901 = obj;
if(G__9900__9901)
{if((function (){var or__3824__auto____9902 = (G__9900__9901.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____9902)
{return or__3824__auto____9902;
} else
{return G__9900__9901.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__9900__9901.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9900__9901);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9900__9901);
}
})();
if(cljs.core.truth_(and__3822__auto____9903))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____9903;
}
} else
{return and__3822__auto____9899;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____9904 = !((obj == null));
if(and__3822__auto____9904)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____9904;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__9905__9906 = obj;
if(G__9905__9906)
{if((function (){var or__3824__auto____9907 = (G__9905__9906.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____9907)
{return or__3824__auto____9907;
} else
{return G__9905__9906.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__9905__9906.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__9905__9906);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__9905__9906);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var sb__9927 = (new goog.string.StringBuffer());
var G__9928__9929 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__9928__9929)
{var string__9930 = cljs.core.first.call(null,G__9928__9929);
var G__9928__9931 = G__9928__9929;
while(true){
sb__9927.append(string__9930);
var temp__3974__auto____9932 = cljs.core.next.call(null,G__9928__9931);
if(temp__3974__auto____9932)
{var G__9928__9933 = temp__3974__auto____9932;
{
var G__9946 = cljs.core.first.call(null,G__9928__9933);
var G__9947 = G__9928__9933;
string__9930 = G__9946;
G__9928__9931 = G__9947;
continue;
}
} else
{}
break;
}
} else
{}
var G__9934__9935 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__9934__9935)
{var obj__9936 = cljs.core.first.call(null,G__9934__9935);
var G__9934__9937 = G__9934__9935;
while(true){
sb__9927.append(" ");
var G__9938__9939 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__9936,opts));
if(G__9938__9939)
{var string__9940 = cljs.core.first.call(null,G__9938__9939);
var G__9938__9941 = G__9938__9939;
while(true){
sb__9927.append(string__9940);
var temp__3974__auto____9942 = cljs.core.next.call(null,G__9938__9941);
if(temp__3974__auto____9942)
{var G__9938__9943 = temp__3974__auto____9942;
{
var G__9948 = cljs.core.first.call(null,G__9938__9943);
var G__9949 = G__9938__9943;
string__9940 = G__9948;
G__9938__9941 = G__9949;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____9944 = cljs.core.next.call(null,G__9934__9937);
if(temp__3974__auto____9944)
{var G__9934__9945 = temp__3974__auto____9944;
{
var G__9950 = cljs.core.first.call(null,G__9934__9945);
var G__9951 = G__9934__9945;
obj__9936 = G__9950;
G__9934__9937 = G__9951;
continue;
}
} else
{}
break;
}
} else
{}
return sb__9927;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
return [cljs.core.str(cljs.core.pr_sb.call(null,objs,opts))].join('');
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
var sb__9953 = cljs.core.pr_sb.call(null,objs,opts);
sb__9953.append("\n");
return [cljs.core.str(sb__9953)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var G__9972__9973 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__9972__9973)
{var string__9974 = cljs.core.first.call(null,G__9972__9973);
var G__9972__9975 = G__9972__9973;
while(true){
cljs.core.string_print.call(null,string__9974);
var temp__3974__auto____9976 = cljs.core.next.call(null,G__9972__9975);
if(temp__3974__auto____9976)
{var G__9972__9977 = temp__3974__auto____9976;
{
var G__9990 = cljs.core.first.call(null,G__9972__9977);
var G__9991 = G__9972__9977;
string__9974 = G__9990;
G__9972__9975 = G__9991;
continue;
}
} else
{}
break;
}
} else
{}
var G__9978__9979 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__9978__9979)
{var obj__9980 = cljs.core.first.call(null,G__9978__9979);
var G__9978__9981 = G__9978__9979;
while(true){
cljs.core.string_print.call(null," ");
var G__9982__9983 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__9980,opts));
if(G__9982__9983)
{var string__9984 = cljs.core.first.call(null,G__9982__9983);
var G__9982__9985 = G__9982__9983;
while(true){
cljs.core.string_print.call(null,string__9984);
var temp__3974__auto____9986 = cljs.core.next.call(null,G__9982__9985);
if(temp__3974__auto____9986)
{var G__9982__9987 = temp__3974__auto____9986;
{
var G__9992 = cljs.core.first.call(null,G__9982__9987);
var G__9993 = G__9982__9987;
string__9984 = G__9992;
G__9982__9985 = G__9993;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____9988 = cljs.core.next.call(null,G__9978__9981);
if(temp__3974__auto____9988)
{var G__9978__9989 = temp__3974__auto____9988;
{
var G__9994 = cljs.core.first.call(null,G__9978__9989);
var G__9995 = G__9978__9989;
obj__9980 = G__9994;
G__9978__9981 = G__9995;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core._lookup.call(null,opts,"\uFDD0'flush-on-newline",null)))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__9996){
var objs = cljs.core.seq(arglist__9996);;
return pr_str__delegate(objs);
});
pr_str.cljs$lang$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__9997){
var objs = cljs.core.seq(arglist__9997);;
return prn_str__delegate(objs);
});
prn_str.cljs$lang$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__9998){
var objs = cljs.core.seq(arglist__9998);;
return pr__delegate(objs);
});
pr.cljs$lang$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__9999){
var objs = cljs.core.seq(arglist__9999);;
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$lang$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__10000){
var objs = cljs.core.seq(arglist__10000);;
return print_str__delegate(objs);
});
print_str.cljs$lang$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__10001){
var objs = cljs.core.seq(arglist__10001);;
return println__delegate(objs);
});
println.cljs$lang$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__10002){
var objs = cljs.core.seq(arglist__10002);;
return println_str__delegate(objs);
});
println_str.cljs$lang$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__10003){
var objs = cljs.core.seq(arglist__10003);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
/**
* Prints formatted output, as per format
* @param {...*} var_args
*/
cljs.core.printf = (function() { 
var printf__delegate = function (fmt,args){
return cljs.core.print.call(null,cljs.core.apply.call(null,cljs.core.format,fmt,args));
};
var printf = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return printf__delegate.call(this, fmt, args);
};
printf.cljs$lang$maxFixedArity = 1;
printf.cljs$lang$applyTo = (function (arglist__10004){
var fmt = cljs.core.first(arglist__10004);
var args = cljs.core.rest(arglist__10004);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10005 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10005,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,[cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10006 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10006,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10007 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10007,"{",", ","}",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#queue ["," ","]",opts,cljs.core.seq.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,[cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.keyword_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____10008 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____10008))
{var nspc__10009 = temp__3974__auto____10008;
return [cljs.core.str(nspc__10009),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____10010 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____10010))
{var nspc__10011 = temp__3974__auto____10010;
return [cljs.core.str(nspc__10011),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if("\uFDD0'else")
{return cljs.core.list.call(null,(cljs.core.truth_((new cljs.core.Keyword("\uFDD0'readably")).call(null,opts))?goog.string.quote(obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10012 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10012,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintable$ = true;
Date.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (d,_){
var normalize__10014 = (function (n,len){
var ns__10013 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__10013) < len))
{{
var G__10016 = [cljs.core.str("0"),cljs.core.str(ns__10013)].join('');
ns__10013 = G__10016;
continue;
}
} else
{return ns__10013;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__10014.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__10014.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__10014.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__10014.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__10014.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__10014.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10015 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10015,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
return cljs.core.compare_indexed.call(null,x,y);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2690809856;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10017 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__10018 = this;
var G__10019__10020 = cljs.core.seq.call(null,this__10018.watches);
if(G__10019__10020)
{var G__10022__10024 = cljs.core.first.call(null,G__10019__10020);
var vec__10023__10025 = G__10022__10024;
var key__10026 = cljs.core.nth.call(null,vec__10023__10025,0,null);
var f__10027 = cljs.core.nth.call(null,vec__10023__10025,1,null);
var G__10019__10028 = G__10019__10020;
var G__10022__10029 = G__10022__10024;
var G__10019__10030 = G__10019__10028;
while(true){
var vec__10031__10032 = G__10022__10029;
var key__10033 = cljs.core.nth.call(null,vec__10031__10032,0,null);
var f__10034 = cljs.core.nth.call(null,vec__10031__10032,1,null);
var G__10019__10035 = G__10019__10030;
f__10034.call(null,key__10033,this$,oldval,newval);
var temp__3974__auto____10036 = cljs.core.next.call(null,G__10019__10035);
if(temp__3974__auto____10036)
{var G__10019__10037 = temp__3974__auto____10036;
{
var G__10044 = cljs.core.first.call(null,G__10019__10037);
var G__10045 = G__10019__10037;
G__10022__10029 = G__10044;
G__10019__10030 = G__10045;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__10038 = this;
return this$.watches = cljs.core.assoc.call(null,this__10038.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__10039 = this;
return this$.watches = cljs.core.dissoc.call(null,this__10039.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__10040 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__10040.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__10041 = this;
return this__10041.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__10042 = this;
return this__10042.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__10043 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__10057__delegate = function (x,p__10046){
var map__10052__10053 = p__10046;
var map__10052__10054 = ((cljs.core.seq_QMARK_.call(null,map__10052__10053))?cljs.core.apply.call(null,cljs.core.hash_map,map__10052__10053):map__10052__10053);
var validator__10055 = cljs.core._lookup.call(null,map__10052__10054,"\uFDD0'validator",null);
var meta__10056 = cljs.core._lookup.call(null,map__10052__10054,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__10056,validator__10055,null));
};
var G__10057 = function (x,var_args){
var p__10046 = null;
if (goog.isDef(var_args)) {
  p__10046 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10057__delegate.call(this, x, p__10046);
};
G__10057.cljs$lang$maxFixedArity = 1;
G__10057.cljs$lang$applyTo = (function (arglist__10058){
var x = cljs.core.first(arglist__10058);
var p__10046 = cljs.core.rest(arglist__10058);
return G__10057__delegate(x, p__10046);
});
G__10057.cljs$lang$arity$variadic = G__10057__delegate;
return G__10057;
})()
;
atom = function(x,var_args){
var p__10046 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$lang$arity$1 = atom__1;
atom.cljs$lang$arity$variadic = atom__2.cljs$lang$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3974__auto____10062 = a.validator;
if(cljs.core.truth_(temp__3974__auto____10062))
{var validate__10063 = temp__3974__auto____10062;
if(cljs.core.truth_(validate__10063.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6440))))].join('')));
}
} else
{}
var old_value__10064 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__10064,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___5 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___6 = (function() { 
var G__10065__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__10065 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10065__delegate.call(this, a, f, x, y, z, more);
};
G__10065.cljs$lang$maxFixedArity = 5;
G__10065.cljs$lang$applyTo = (function (arglist__10066){
var a = cljs.core.first(arglist__10066);
var f = cljs.core.first(cljs.core.next(arglist__10066));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10066)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10066))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10066)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10066)))));
return G__10065__delegate(a, f, x, y, z, more);
});
G__10065.cljs$lang$arity$variadic = G__10065__delegate;
return G__10065;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
case 5:
return swap_BANG___5.call(this,a,f,x,y,z);
default:
return swap_BANG___6.cljs$lang$arity$variadic(a,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
swap_BANG_.cljs$lang$arity$2 = swap_BANG___2;
swap_BANG_.cljs$lang$arity$3 = swap_BANG___3;
swap_BANG_.cljs$lang$arity$4 = swap_BANG___4;
swap_BANG_.cljs$lang$arity$5 = swap_BANG___5;
swap_BANG_.cljs$lang$arity$variadic = swap_BANG___6.cljs$lang$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.call(null,a.state,oldval))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__10067){
var iref = cljs.core.first(arglist__10067);
var f = cljs.core.first(cljs.core.next(arglist__10067));
var args = cljs.core.rest(cljs.core.next(arglist__10067));
return alter_meta_BANG___delegate(iref, f, args);
});
alter_meta_BANG_.cljs$lang$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.call(null,"G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,[cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
gensym.cljs$lang$arity$0 = gensym__0;
gensym.cljs$lang$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073774592;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__10068 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__10068.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__10069 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__10069.state,(function (p__10070){
var map__10071__10072 = p__10070;
var map__10071__10073 = ((cljs.core.seq_QMARK_.call(null,map__10071__10072))?cljs.core.apply.call(null,cljs.core.hash_map,map__10071__10072):map__10071__10072);
var curr_state__10074 = map__10071__10073;
var done__10075 = cljs.core._lookup.call(null,map__10071__10073,"\uFDD0'done",null);
if(cljs.core.truth_(done__10075))
{return curr_state__10074;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__10069.f.call(null)});
}
})));
});
cljs.core.Delay;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.delay_QMARK_.call(null,x))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__10096__10097 = options;
var map__10096__10098 = ((cljs.core.seq_QMARK_.call(null,map__10096__10097))?cljs.core.apply.call(null,cljs.core.hash_map,map__10096__10097):map__10096__10097);
var keywordize_keys__10099 = cljs.core._lookup.call(null,map__10096__10098,"\uFDD0'keywordize-keys",null);
var keyfn__10100 = (cljs.core.truth_(keywordize_keys__10099)?cljs.core.keyword:cljs.core.str);
var f__10115 = (function thisfn(x){
if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray(x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if((cljs.core.type.call(null,x) === Object))
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2551__auto____10114 = (function iter__10108(s__10109){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10109__10112 = s__10109;
while(true){
if(cljs.core.seq.call(null,s__10109__10112))
{var k__10113 = cljs.core.first.call(null,s__10109__10112);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__10100.call(null,k__10113),thisfn.call(null,(x[k__10113]))], true),iter__10108.call(null,cljs.core.rest.call(null,s__10109__10112)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2551__auto____10114.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if("\uFDD0'else")
{return x;
} else
{return null;
}
}
}
}
}
});
return f__10115.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__10116){
var x = cljs.core.first(arglist__10116);
var options = cljs.core.rest(arglist__10116);
return js__GT_clj__delegate(x, options);
});
js__GT_clj.cljs$lang$arity$variadic = js__GT_clj__delegate;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__10121 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__10125__delegate = function (args){
var temp__3971__auto____10122 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__10121),args,null);
if(cljs.core.truth_(temp__3971__auto____10122))
{var v__10123 = temp__3971__auto____10122;
return v__10123;
} else
{var ret__10124 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__10121,cljs.core.assoc,args,ret__10124);
return ret__10124;
}
};
var G__10125 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10125__delegate.call(this, args);
};
G__10125.cljs$lang$maxFixedArity = 0;
G__10125.cljs$lang$applyTo = (function (arglist__10126){
var args = cljs.core.seq(arglist__10126);;
return G__10125__delegate(args);
});
G__10125.cljs$lang$arity$variadic = G__10125__delegate;
return G__10125;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret__10128 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__10128))
{{
var G__10129 = ret__10128;
f = G__10129;
continue;
}
} else
{return ret__10128;
}
break;
}
});
var trampoline__2 = (function() { 
var G__10130__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__10130 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10130__delegate.call(this, f, args);
};
G__10130.cljs$lang$maxFixedArity = 1;
G__10130.cljs$lang$applyTo = (function (arglist__10131){
var f = cljs.core.first(arglist__10131);
var args = cljs.core.rest(arglist__10131);
return G__10130__delegate(f, args);
});
G__10130.cljs$lang$arity$variadic = G__10130__delegate;
return G__10130;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$lang$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$lang$arity$1 = trampoline__1;
trampoline.cljs$lang$arity$variadic = trampoline__2.cljs$lang$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.call(null,1);
});
var rand__1 = (function (n){
return (Math.random.call(null) * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor.call(null,(Math.random.call(null) * n));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__10133 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__10133,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__10133,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.ObjMap.EMPTY,coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.EMPTY,"\uFDD0'descendants":cljs.core.ObjMap.EMPTY,"\uFDD0'ancestors":cljs.core.ObjMap.EMPTY});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3824__auto____10142 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____10142)
{return or__3824__auto____10142;
} else
{var or__3824__auto____10143 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____10143)
{return or__3824__auto____10143;
} else
{var and__3822__auto____10144 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____10144)
{var and__3822__auto____10145 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____10145)
{var and__3822__auto____10146 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____10146)
{var ret__10147 = true;
var i__10148 = 0;
while(true){
if((function (){var or__3824__auto____10149 = cljs.core.not.call(null,ret__10147);
if(or__3824__auto____10149)
{return or__3824__auto____10149;
} else
{return (i__10148 === cljs.core.count.call(null,parent));
}
})())
{return ret__10147;
} else
{{
var G__10150 = isa_QMARK_.call(null,h,child.call(null,i__10148),parent.call(null,i__10148));
var G__10151 = (i__10148 + 1);
ret__10147 = G__10150;
i__10148 = G__10151;
continue;
}
}
break;
}
} else
{return and__3822__auto____10146;
}
} else
{return and__3822__auto____10145;
}
} else
{return and__3822__auto____10144;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
isa_QMARK_.cljs$lang$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$lang$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,null));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
parents.cljs$lang$arity$1 = parents__1;
parents.cljs$lang$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,null));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
ancestors.cljs$lang$arity$1 = ancestors__1;
ancestors.cljs$lang$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),tag,null));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
descendants.cljs$lang$arity$1 = descendants__1;
descendants.cljs$lang$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6724))))].join('')));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.call(null,tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6728))))].join('')));
}
var tp__10160 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__10161 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__10162 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__10163 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____10164 = ((cljs.core.contains_QMARK_.call(null,tp__10160.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__10162.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__10162.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__10160,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__10163.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__10161,parent,ta__10162),"\uFDD0'descendants":tf__10163.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__10162,tag,td__10161)});
})());
if(cljs.core.truth_(or__3824__auto____10164))
{return or__3824__auto____10164;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
derive.cljs$lang$arity$2 = derive__2;
derive.cljs$lang$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap__10169 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__10170 = (cljs.core.truth_(parentMap__10169.call(null,tag))?cljs.core.disj.call(null,parentMap__10169.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__10171 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__10170))?cljs.core.assoc.call(null,parentMap__10169,tag,childsParents__10170):cljs.core.dissoc.call(null,parentMap__10169,tag));
var deriv_seq__10172 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__10152_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__10152_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__10152_SHARP_),cljs.core.second.call(null,p1__10152_SHARP_)));
}),cljs.core.seq.call(null,newParents__10171)));
if(cljs.core.contains_QMARK_.call(null,parentMap__10169.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__10153_SHARP_,p2__10154_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__10153_SHARP_,p2__10154_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__10172));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
underive.cljs$lang$arity$2 = underive__2;
underive.cljs$lang$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__10180 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____10182 = (cljs.core.truth_((function (){var and__3822__auto____10181 = xprefs__10180;
if(cljs.core.truth_(and__3822__auto____10181))
{return xprefs__10180.call(null,y);
} else
{return and__3822__auto____10181;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____10182))
{return or__3824__auto____10182;
} else
{var or__3824__auto____10184 = (function (){var ps__10183 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__10183) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__10183),prefer_table)))
{} else
{}
{
var G__10187 = cljs.core.rest.call(null,ps__10183);
ps__10183 = G__10187;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____10184))
{return or__3824__auto____10184;
} else
{var or__3824__auto____10186 = (function (){var ps__10185 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__10185) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__10185),y,prefer_table)))
{} else
{}
{
var G__10188 = cljs.core.rest.call(null,ps__10185);
ps__10185 = G__10188;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____10186))
{return or__3824__auto____10186;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____10190 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____10190))
{return or__3824__auto____10190;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__10208 = cljs.core.reduce.call(null,(function (be,p__10200){
var vec__10201__10202 = p__10200;
var k__10203 = cljs.core.nth.call(null,vec__10201__10202,0,null);
var ___10204 = cljs.core.nth.call(null,vec__10201__10202,1,null);
var e__10205 = vec__10201__10202;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__10203))
{var be2__10207 = (cljs.core.truth_((function (){var or__3824__auto____10206 = (be == null);
if(or__3824__auto____10206)
{return or__3824__auto____10206;
} else
{return cljs.core.dominates.call(null,k__10203,cljs.core.first.call(null,be),prefer_table);
}
})())?e__10205:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__10207),k__10203,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__10203),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__10207)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__10207;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__10208))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__10208));
return cljs.core.second.call(null,best_entry__10208);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if((function (){var and__3822__auto____10213 = mf;
if(and__3822__auto____10213)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____10213;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2452__auto____10214 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10215 = (cljs.core._reset[goog.typeOf(x__2452__auto____10214)]);
if(or__3824__auto____10215)
{return or__3824__auto____10215;
} else
{var or__3824__auto____10216 = (cljs.core._reset["_"]);
if(or__3824__auto____10216)
{return or__3824__auto____10216;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____10221 = mf;
if(and__3822__auto____10221)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____10221;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2452__auto____10222 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10223 = (cljs.core._add_method[goog.typeOf(x__2452__auto____10222)]);
if(or__3824__auto____10223)
{return or__3824__auto____10223;
} else
{var or__3824__auto____10224 = (cljs.core._add_method["_"]);
if(or__3824__auto____10224)
{return or__3824__auto____10224;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____10229 = mf;
if(and__3822__auto____10229)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____10229;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2452__auto____10230 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10231 = (cljs.core._remove_method[goog.typeOf(x__2452__auto____10230)]);
if(or__3824__auto____10231)
{return or__3824__auto____10231;
} else
{var or__3824__auto____10232 = (cljs.core._remove_method["_"]);
if(or__3824__auto____10232)
{return or__3824__auto____10232;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____10237 = mf;
if(and__3822__auto____10237)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____10237;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2452__auto____10238 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10239 = (cljs.core._prefer_method[goog.typeOf(x__2452__auto____10238)]);
if(or__3824__auto____10239)
{return or__3824__auto____10239;
} else
{var or__3824__auto____10240 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____10240)
{return or__3824__auto____10240;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____10245 = mf;
if(and__3822__auto____10245)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____10245;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2452__auto____10246 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10247 = (cljs.core._get_method[goog.typeOf(x__2452__auto____10246)]);
if(or__3824__auto____10247)
{return or__3824__auto____10247;
} else
{var or__3824__auto____10248 = (cljs.core._get_method["_"]);
if(or__3824__auto____10248)
{return or__3824__auto____10248;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____10253 = mf;
if(and__3822__auto____10253)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____10253;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2452__auto____10254 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10255 = (cljs.core._methods[goog.typeOf(x__2452__auto____10254)]);
if(or__3824__auto____10255)
{return or__3824__auto____10255;
} else
{var or__3824__auto____10256 = (cljs.core._methods["_"]);
if(or__3824__auto____10256)
{return or__3824__auto____10256;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____10261 = mf;
if(and__3822__auto____10261)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____10261;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2452__auto____10262 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10263 = (cljs.core._prefers[goog.typeOf(x__2452__auto____10262)]);
if(or__3824__auto____10263)
{return or__3824__auto____10263;
} else
{var or__3824__auto____10264 = (cljs.core._prefers["_"]);
if(or__3824__auto____10264)
{return or__3824__auto____10264;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____10269 = mf;
if(and__3822__auto____10269)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____10269;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2452__auto____10270 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10271 = (cljs.core._dispatch[goog.typeOf(x__2452__auto____10270)]);
if(or__3824__auto____10271)
{return or__3824__auto____10271;
} else
{var or__3824__auto____10272 = (cljs.core._dispatch["_"]);
if(or__3824__auto____10272)
{return or__3824__auto____10272;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__10275 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__10276 = cljs.core._get_method.call(null,mf,dispatch_val__10275);
if(cljs.core.truth_(target_fn__10276))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__10275)].join('')));
}
return cljs.core.apply.call(null,target_fn__10276,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194304;
this.cljs$lang$protocol_mask$partition1$ = 64;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10277 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__10278 = this;
cljs.core.swap_BANG_.call(null,this__10278.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10278.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10278.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10278.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__10279 = this;
cljs.core.swap_BANG_.call(null,this__10279.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__10279.method_cache,this__10279.method_table,this__10279.cached_hierarchy,this__10279.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__10280 = this;
cljs.core.swap_BANG_.call(null,this__10280.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__10280.method_cache,this__10280.method_table,this__10280.cached_hierarchy,this__10280.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__10281 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__10281.cached_hierarchy),cljs.core.deref.call(null,this__10281.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__10281.method_cache,this__10281.method_table,this__10281.cached_hierarchy,this__10281.hierarchy);
}
var temp__3971__auto____10282 = cljs.core.deref.call(null,this__10281.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____10282))
{var target_fn__10283 = temp__3971__auto____10282;
return target_fn__10283;
} else
{var temp__3971__auto____10284 = cljs.core.find_and_cache_best_method.call(null,this__10281.name,dispatch_val,this__10281.hierarchy,this__10281.method_table,this__10281.prefer_table,this__10281.method_cache,this__10281.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____10284))
{var target_fn__10285 = temp__3971__auto____10284;
return target_fn__10285;
} else
{return cljs.core.deref.call(null,this__10281.method_table).call(null,this__10281.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__10286 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__10286.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__10286.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__10286.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__10286.method_cache,this__10286.method_table,this__10286.cached_hierarchy,this__10286.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__10287 = this;
return cljs.core.deref.call(null,this__10287.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__10288 = this;
return cljs.core.deref.call(null,this__10288.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__10289 = this;
return cljs.core.do_dispatch.call(null,mf,this__10289.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__10291__delegate = function (_,args){
var self__10290 = this;
return cljs.core._dispatch.call(null,self__10290,args);
};
var G__10291 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10291__delegate.call(this, _, args);
};
G__10291.cljs$lang$maxFixedArity = 1;
G__10291.cljs$lang$applyTo = (function (arglist__10292){
var _ = cljs.core.first(arglist__10292);
var args = cljs.core.rest(arglist__10292);
return G__10291__delegate(_, args);
});
G__10291.cljs$lang$arity$variadic = G__10291__delegate;
return G__10291;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__10293 = this;
return cljs.core._dispatch.call(null,self__10293,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 543162368;
})
cljs.core.UUID.cljs$lang$type = true;
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10294 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_10296,_){
var this__10295 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__10295.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__10297 = this;
var and__3822__auto____10298 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____10298)
{return (this__10297.uuid === other.uuid);
} else
{return and__3822__auto____10298;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__10299 = this;
var this__10300 = this;
return cljs.core.pr_str.call(null,this__10300);
});
cljs.core.UUID;
