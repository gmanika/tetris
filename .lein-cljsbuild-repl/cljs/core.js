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
var x__14148 = (((x == null))?null:x);
if((p[goog.typeOf(x__14148)]))
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
var G__14149__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__14149 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__14149__delegate.call(this, array, i, idxs);
};
G__14149.cljs$lang$maxFixedArity = 2;
G__14149.cljs$lang$applyTo = (function (arglist__14150){
var array = cljs.core.first(arglist__14150);
var i = cljs.core.first(cljs.core.next(arglist__14150));
var idxs = cljs.core.rest(cljs.core.next(arglist__14150));
return G__14149__delegate(array, i, idxs);
});
G__14149.cljs$lang$arity$variadic = G__14149__delegate;
return G__14149;
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
if((function (){var and__3822__auto____14235 = this$;
if(and__3822__auto____14235)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____14235;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2452__auto____14236 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14237 = (cljs.core._invoke[goog.typeOf(x__2452__auto____14236)]);
if(or__3824__auto____14237)
{return or__3824__auto____14237;
} else
{var or__3824__auto____14238 = (cljs.core._invoke["_"]);
if(or__3824__auto____14238)
{return or__3824__auto____14238;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____14239 = this$;
if(and__3822__auto____14239)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____14239;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__2452__auto____14240 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14241 = (cljs.core._invoke[goog.typeOf(x__2452__auto____14240)]);
if(or__3824__auto____14241)
{return or__3824__auto____14241;
} else
{var or__3824__auto____14242 = (cljs.core._invoke["_"]);
if(or__3824__auto____14242)
{return or__3824__auto____14242;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____14243 = this$;
if(and__3822__auto____14243)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____14243;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__2452__auto____14244 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14245 = (cljs.core._invoke[goog.typeOf(x__2452__auto____14244)]);
if(or__3824__auto____14245)
{return or__3824__auto____14245;
} else
{var or__3824__auto____14246 = (cljs.core._invoke["_"]);
if(or__3824__auto____14246)
{return or__3824__auto____14246;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____14247 = this$;
if(and__3822__auto____14247)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____14247;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__2452__auto____14248 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14249 = (cljs.core._invoke[goog.typeOf(x__2452__auto____14248)]);
if(or__3824__auto____14249)
{return or__3824__auto____14249;
} else
{var or__3824__auto____14250 = (cljs.core._invoke["_"]);
if(or__3824__auto____14250)
{return or__3824__auto____14250;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____14251 = this$;
if(and__3822__auto____14251)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____14251;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__2452__auto____14252 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14253 = (cljs.core._invoke[goog.typeOf(x__2452__auto____14252)]);
if(or__3824__auto____14253)
{return or__3824__auto____14253;
} else
{var or__3824__auto____14254 = (cljs.core._invoke["_"]);
if(or__3824__auto____14254)
{return or__3824__auto____14254;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____14255 = this$;
if(and__3822__auto____14255)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____14255;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__2452__auto____14256 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14257 = (cljs.core._invoke[goog.typeOf(x__2452__auto____14256)]);
if(or__3824__auto____14257)
{return or__3824__auto____14257;
} else
{var or__3824__auto____14258 = (cljs.core._invoke["_"]);
if(or__3824__auto____14258)
{return or__3824__auto____14258;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____14259 = this$;
if(and__3822__auto____14259)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____14259;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__2452__auto____14260 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14261 = (cljs.core._invoke[goog.typeOf(x__2452__auto____14260)]);
if(or__3824__auto____14261)
{return or__3824__auto____14261;
} else
{var or__3824__auto____14262 = (cljs.core._invoke["_"]);
if(or__3824__auto____14262)
{return or__3824__auto____14262;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____14263 = this$;
if(and__3822__auto____14263)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____14263;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__2452__auto____14264 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14265 = (cljs.core._invoke[goog.typeOf(x__2452__auto____14264)]);
if(or__3824__auto____14265)
{return or__3824__auto____14265;
} else
{var or__3824__auto____14266 = (cljs.core._invoke["_"]);
if(or__3824__auto____14266)
{return or__3824__auto____14266;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____14267 = this$;
if(and__3822__auto____14267)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____14267;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__2452__auto____14268 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14269 = (cljs.core._invoke[goog.typeOf(x__2452__auto____14268)]);
if(or__3824__auto____14269)
{return or__3824__auto____14269;
} else
{var or__3824__auto____14270 = (cljs.core._invoke["_"]);
if(or__3824__auto____14270)
{return or__3824__auto____14270;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____14271 = this$;
if(and__3822__auto____14271)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____14271;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__2452__auto____14272 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14273 = (cljs.core._invoke[goog.typeOf(x__2452__auto____14272)]);
if(or__3824__auto____14273)
{return or__3824__auto____14273;
} else
{var or__3824__auto____14274 = (cljs.core._invoke["_"]);
if(or__3824__auto____14274)
{return or__3824__auto____14274;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____14275 = this$;
if(and__3822__auto____14275)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____14275;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__2452__auto____14276 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14277 = (cljs.core._invoke[goog.typeOf(x__2452__auto____14276)]);
if(or__3824__auto____14277)
{return or__3824__auto____14277;
} else
{var or__3824__auto____14278 = (cljs.core._invoke["_"]);
if(or__3824__auto____14278)
{return or__3824__auto____14278;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____14279 = this$;
if(and__3822__auto____14279)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____14279;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__2452__auto____14280 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14281 = (cljs.core._invoke[goog.typeOf(x__2452__auto____14280)]);
if(or__3824__auto____14281)
{return or__3824__auto____14281;
} else
{var or__3824__auto____14282 = (cljs.core._invoke["_"]);
if(or__3824__auto____14282)
{return or__3824__auto____14282;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____14283 = this$;
if(and__3822__auto____14283)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____14283;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__2452__auto____14284 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14285 = (cljs.core._invoke[goog.typeOf(x__2452__auto____14284)]);
if(or__3824__auto____14285)
{return or__3824__auto____14285;
} else
{var or__3824__auto____14286 = (cljs.core._invoke["_"]);
if(or__3824__auto____14286)
{return or__3824__auto____14286;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____14287 = this$;
if(and__3822__auto____14287)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____14287;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__2452__auto____14288 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14289 = (cljs.core._invoke[goog.typeOf(x__2452__auto____14288)]);
if(or__3824__auto____14289)
{return or__3824__auto____14289;
} else
{var or__3824__auto____14290 = (cljs.core._invoke["_"]);
if(or__3824__auto____14290)
{return or__3824__auto____14290;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____14291 = this$;
if(and__3822__auto____14291)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____14291;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__2452__auto____14292 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14293 = (cljs.core._invoke[goog.typeOf(x__2452__auto____14292)]);
if(or__3824__auto____14293)
{return or__3824__auto____14293;
} else
{var or__3824__auto____14294 = (cljs.core._invoke["_"]);
if(or__3824__auto____14294)
{return or__3824__auto____14294;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____14295 = this$;
if(and__3822__auto____14295)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____14295;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__2452__auto____14296 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14297 = (cljs.core._invoke[goog.typeOf(x__2452__auto____14296)]);
if(or__3824__auto____14297)
{return or__3824__auto____14297;
} else
{var or__3824__auto____14298 = (cljs.core._invoke["_"]);
if(or__3824__auto____14298)
{return or__3824__auto____14298;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____14299 = this$;
if(and__3822__auto____14299)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____14299;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__2452__auto____14300 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14301 = (cljs.core._invoke[goog.typeOf(x__2452__auto____14300)]);
if(or__3824__auto____14301)
{return or__3824__auto____14301;
} else
{var or__3824__auto____14302 = (cljs.core._invoke["_"]);
if(or__3824__auto____14302)
{return or__3824__auto____14302;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____14303 = this$;
if(and__3822__auto____14303)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____14303;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__2452__auto____14304 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14305 = (cljs.core._invoke[goog.typeOf(x__2452__auto____14304)]);
if(or__3824__auto____14305)
{return or__3824__auto____14305;
} else
{var or__3824__auto____14306 = (cljs.core._invoke["_"]);
if(or__3824__auto____14306)
{return or__3824__auto____14306;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____14307 = this$;
if(and__3822__auto____14307)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____14307;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__2452__auto____14308 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14309 = (cljs.core._invoke[goog.typeOf(x__2452__auto____14308)]);
if(or__3824__auto____14309)
{return or__3824__auto____14309;
} else
{var or__3824__auto____14310 = (cljs.core._invoke["_"]);
if(or__3824__auto____14310)
{return or__3824__auto____14310;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____14311 = this$;
if(and__3822__auto____14311)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____14311;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__2452__auto____14312 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14313 = (cljs.core._invoke[goog.typeOf(x__2452__auto____14312)]);
if(or__3824__auto____14313)
{return or__3824__auto____14313;
} else
{var or__3824__auto____14314 = (cljs.core._invoke["_"]);
if(or__3824__auto____14314)
{return or__3824__auto____14314;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____14315 = this$;
if(and__3822__auto____14315)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____14315;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__2452__auto____14316 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14317 = (cljs.core._invoke[goog.typeOf(x__2452__auto____14316)]);
if(or__3824__auto____14317)
{return or__3824__auto____14317;
} else
{var or__3824__auto____14318 = (cljs.core._invoke["_"]);
if(or__3824__auto____14318)
{return or__3824__auto____14318;
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
if((function (){var and__3822__auto____14323 = coll;
if(and__3822__auto____14323)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____14323;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2452__auto____14324 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14325 = (cljs.core._count[goog.typeOf(x__2452__auto____14324)]);
if(or__3824__auto____14325)
{return or__3824__auto____14325;
} else
{var or__3824__auto____14326 = (cljs.core._count["_"]);
if(or__3824__auto____14326)
{return or__3824__auto____14326;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____14331 = coll;
if(and__3822__auto____14331)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____14331;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2452__auto____14332 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14333 = (cljs.core._empty[goog.typeOf(x__2452__auto____14332)]);
if(or__3824__auto____14333)
{return or__3824__auto____14333;
} else
{var or__3824__auto____14334 = (cljs.core._empty["_"]);
if(or__3824__auto____14334)
{return or__3824__auto____14334;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____14339 = coll;
if(and__3822__auto____14339)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____14339;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2452__auto____14340 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14341 = (cljs.core._conj[goog.typeOf(x__2452__auto____14340)]);
if(or__3824__auto____14341)
{return or__3824__auto____14341;
} else
{var or__3824__auto____14342 = (cljs.core._conj["_"]);
if(or__3824__auto____14342)
{return or__3824__auto____14342;
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
if((function (){var and__3822__auto____14351 = coll;
if(and__3822__auto____14351)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____14351;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2452__auto____14352 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14353 = (cljs.core._nth[goog.typeOf(x__2452__auto____14352)]);
if(or__3824__auto____14353)
{return or__3824__auto____14353;
} else
{var or__3824__auto____14354 = (cljs.core._nth["_"]);
if(or__3824__auto____14354)
{return or__3824__auto____14354;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____14355 = coll;
if(and__3822__auto____14355)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____14355;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__2452__auto____14356 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14357 = (cljs.core._nth[goog.typeOf(x__2452__auto____14356)]);
if(or__3824__auto____14357)
{return or__3824__auto____14357;
} else
{var or__3824__auto____14358 = (cljs.core._nth["_"]);
if(or__3824__auto____14358)
{return or__3824__auto____14358;
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
if((function (){var and__3822__auto____14363 = coll;
if(and__3822__auto____14363)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____14363;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2452__auto____14364 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14365 = (cljs.core._first[goog.typeOf(x__2452__auto____14364)]);
if(or__3824__auto____14365)
{return or__3824__auto____14365;
} else
{var or__3824__auto____14366 = (cljs.core._first["_"]);
if(or__3824__auto____14366)
{return or__3824__auto____14366;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____14371 = coll;
if(and__3822__auto____14371)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____14371;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2452__auto____14372 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14373 = (cljs.core._rest[goog.typeOf(x__2452__auto____14372)]);
if(or__3824__auto____14373)
{return or__3824__auto____14373;
} else
{var or__3824__auto____14374 = (cljs.core._rest["_"]);
if(or__3824__auto____14374)
{return or__3824__auto____14374;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____14379 = coll;
if(and__3822__auto____14379)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____14379;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2452__auto____14380 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14381 = (cljs.core._next[goog.typeOf(x__2452__auto____14380)]);
if(or__3824__auto____14381)
{return or__3824__auto____14381;
} else
{var or__3824__auto____14382 = (cljs.core._next["_"]);
if(or__3824__auto____14382)
{return or__3824__auto____14382;
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
if((function (){var and__3822__auto____14391 = o;
if(and__3822__auto____14391)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____14391;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2452__auto____14392 = (((o == null))?null:o);
return (function (){var or__3824__auto____14393 = (cljs.core._lookup[goog.typeOf(x__2452__auto____14392)]);
if(or__3824__auto____14393)
{return or__3824__auto____14393;
} else
{var or__3824__auto____14394 = (cljs.core._lookup["_"]);
if(or__3824__auto____14394)
{return or__3824__auto____14394;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____14395 = o;
if(and__3822__auto____14395)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____14395;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__2452__auto____14396 = (((o == null))?null:o);
return (function (){var or__3824__auto____14397 = (cljs.core._lookup[goog.typeOf(x__2452__auto____14396)]);
if(or__3824__auto____14397)
{return or__3824__auto____14397;
} else
{var or__3824__auto____14398 = (cljs.core._lookup["_"]);
if(or__3824__auto____14398)
{return or__3824__auto____14398;
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
if((function (){var and__3822__auto____14403 = coll;
if(and__3822__auto____14403)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____14403;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2452__auto____14404 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14405 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__2452__auto____14404)]);
if(or__3824__auto____14405)
{return or__3824__auto____14405;
} else
{var or__3824__auto____14406 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____14406)
{return or__3824__auto____14406;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____14411 = coll;
if(and__3822__auto____14411)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____14411;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2452__auto____14412 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14413 = (cljs.core._assoc[goog.typeOf(x__2452__auto____14412)]);
if(or__3824__auto____14413)
{return or__3824__auto____14413;
} else
{var or__3824__auto____14414 = (cljs.core._assoc["_"]);
if(or__3824__auto____14414)
{return or__3824__auto____14414;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____14419 = coll;
if(and__3822__auto____14419)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____14419;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2452__auto____14420 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14421 = (cljs.core._dissoc[goog.typeOf(x__2452__auto____14420)]);
if(or__3824__auto____14421)
{return or__3824__auto____14421;
} else
{var or__3824__auto____14422 = (cljs.core._dissoc["_"]);
if(or__3824__auto____14422)
{return or__3824__auto____14422;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____14427 = coll;
if(and__3822__auto____14427)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____14427;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2452__auto____14428 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14429 = (cljs.core._key[goog.typeOf(x__2452__auto____14428)]);
if(or__3824__auto____14429)
{return or__3824__auto____14429;
} else
{var or__3824__auto____14430 = (cljs.core._key["_"]);
if(or__3824__auto____14430)
{return or__3824__auto____14430;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____14435 = coll;
if(and__3822__auto____14435)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____14435;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2452__auto____14436 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14437 = (cljs.core._val[goog.typeOf(x__2452__auto____14436)]);
if(or__3824__auto____14437)
{return or__3824__auto____14437;
} else
{var or__3824__auto____14438 = (cljs.core._val["_"]);
if(or__3824__auto____14438)
{return or__3824__auto____14438;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____14443 = coll;
if(and__3822__auto____14443)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____14443;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2452__auto____14444 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14445 = (cljs.core._disjoin[goog.typeOf(x__2452__auto____14444)]);
if(or__3824__auto____14445)
{return or__3824__auto____14445;
} else
{var or__3824__auto____14446 = (cljs.core._disjoin["_"]);
if(or__3824__auto____14446)
{return or__3824__auto____14446;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____14451 = coll;
if(and__3822__auto____14451)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____14451;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2452__auto____14452 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14453 = (cljs.core._peek[goog.typeOf(x__2452__auto____14452)]);
if(or__3824__auto____14453)
{return or__3824__auto____14453;
} else
{var or__3824__auto____14454 = (cljs.core._peek["_"]);
if(or__3824__auto____14454)
{return or__3824__auto____14454;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____14459 = coll;
if(and__3822__auto____14459)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____14459;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2452__auto____14460 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14461 = (cljs.core._pop[goog.typeOf(x__2452__auto____14460)]);
if(or__3824__auto____14461)
{return or__3824__auto____14461;
} else
{var or__3824__auto____14462 = (cljs.core._pop["_"]);
if(or__3824__auto____14462)
{return or__3824__auto____14462;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____14467 = coll;
if(and__3822__auto____14467)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____14467;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2452__auto____14468 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14469 = (cljs.core._assoc_n[goog.typeOf(x__2452__auto____14468)]);
if(or__3824__auto____14469)
{return or__3824__auto____14469;
} else
{var or__3824__auto____14470 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____14470)
{return or__3824__auto____14470;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____14475 = o;
if(and__3822__auto____14475)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____14475;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2452__auto____14476 = (((o == null))?null:o);
return (function (){var or__3824__auto____14477 = (cljs.core._deref[goog.typeOf(x__2452__auto____14476)]);
if(or__3824__auto____14477)
{return or__3824__auto____14477;
} else
{var or__3824__auto____14478 = (cljs.core._deref["_"]);
if(or__3824__auto____14478)
{return or__3824__auto____14478;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____14483 = o;
if(and__3822__auto____14483)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____14483;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2452__auto____14484 = (((o == null))?null:o);
return (function (){var or__3824__auto____14485 = (cljs.core._deref_with_timeout[goog.typeOf(x__2452__auto____14484)]);
if(or__3824__auto____14485)
{return or__3824__auto____14485;
} else
{var or__3824__auto____14486 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____14486)
{return or__3824__auto____14486;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____14491 = o;
if(and__3822__auto____14491)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____14491;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2452__auto____14492 = (((o == null))?null:o);
return (function (){var or__3824__auto____14493 = (cljs.core._meta[goog.typeOf(x__2452__auto____14492)]);
if(or__3824__auto____14493)
{return or__3824__auto____14493;
} else
{var or__3824__auto____14494 = (cljs.core._meta["_"]);
if(or__3824__auto____14494)
{return or__3824__auto____14494;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____14499 = o;
if(and__3822__auto____14499)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____14499;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2452__auto____14500 = (((o == null))?null:o);
return (function (){var or__3824__auto____14501 = (cljs.core._with_meta[goog.typeOf(x__2452__auto____14500)]);
if(or__3824__auto____14501)
{return or__3824__auto____14501;
} else
{var or__3824__auto____14502 = (cljs.core._with_meta["_"]);
if(or__3824__auto____14502)
{return or__3824__auto____14502;
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
if((function (){var and__3822__auto____14511 = coll;
if(and__3822__auto____14511)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____14511;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2452__auto____14512 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14513 = (cljs.core._reduce[goog.typeOf(x__2452__auto____14512)]);
if(or__3824__auto____14513)
{return or__3824__auto____14513;
} else
{var or__3824__auto____14514 = (cljs.core._reduce["_"]);
if(or__3824__auto____14514)
{return or__3824__auto____14514;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____14515 = coll;
if(and__3822__auto____14515)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____14515;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__2452__auto____14516 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14517 = (cljs.core._reduce[goog.typeOf(x__2452__auto____14516)]);
if(or__3824__auto____14517)
{return or__3824__auto____14517;
} else
{var or__3824__auto____14518 = (cljs.core._reduce["_"]);
if(or__3824__auto____14518)
{return or__3824__auto____14518;
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
if((function (){var and__3822__auto____14523 = coll;
if(and__3822__auto____14523)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____14523;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2452__auto____14524 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14525 = (cljs.core._kv_reduce[goog.typeOf(x__2452__auto____14524)]);
if(or__3824__auto____14525)
{return or__3824__auto____14525;
} else
{var or__3824__auto____14526 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____14526)
{return or__3824__auto____14526;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____14531 = o;
if(and__3822__auto____14531)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____14531;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2452__auto____14532 = (((o == null))?null:o);
return (function (){var or__3824__auto____14533 = (cljs.core._equiv[goog.typeOf(x__2452__auto____14532)]);
if(or__3824__auto____14533)
{return or__3824__auto____14533;
} else
{var or__3824__auto____14534 = (cljs.core._equiv["_"]);
if(or__3824__auto____14534)
{return or__3824__auto____14534;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____14539 = o;
if(and__3822__auto____14539)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____14539;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2452__auto____14540 = (((o == null))?null:o);
return (function (){var or__3824__auto____14541 = (cljs.core._hash[goog.typeOf(x__2452__auto____14540)]);
if(or__3824__auto____14541)
{return or__3824__auto____14541;
} else
{var or__3824__auto____14542 = (cljs.core._hash["_"]);
if(or__3824__auto____14542)
{return or__3824__auto____14542;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____14547 = o;
if(and__3822__auto____14547)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____14547;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2452__auto____14548 = (((o == null))?null:o);
return (function (){var or__3824__auto____14549 = (cljs.core._seq[goog.typeOf(x__2452__auto____14548)]);
if(or__3824__auto____14549)
{return or__3824__auto____14549;
} else
{var or__3824__auto____14550 = (cljs.core._seq["_"]);
if(or__3824__auto____14550)
{return or__3824__auto____14550;
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
if((function (){var and__3822__auto____14555 = coll;
if(and__3822__auto____14555)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____14555;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2452__auto____14556 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14557 = (cljs.core._rseq[goog.typeOf(x__2452__auto____14556)]);
if(or__3824__auto____14557)
{return or__3824__auto____14557;
} else
{var or__3824__auto____14558 = (cljs.core._rseq["_"]);
if(or__3824__auto____14558)
{return or__3824__auto____14558;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____14563 = coll;
if(and__3822__auto____14563)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____14563;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2452__auto____14564 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14565 = (cljs.core._sorted_seq[goog.typeOf(x__2452__auto____14564)]);
if(or__3824__auto____14565)
{return or__3824__auto____14565;
} else
{var or__3824__auto____14566 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____14566)
{return or__3824__auto____14566;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____14571 = coll;
if(and__3822__auto____14571)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____14571;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2452__auto____14572 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14573 = (cljs.core._sorted_seq_from[goog.typeOf(x__2452__auto____14572)]);
if(or__3824__auto____14573)
{return or__3824__auto____14573;
} else
{var or__3824__auto____14574 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____14574)
{return or__3824__auto____14574;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____14579 = coll;
if(and__3822__auto____14579)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____14579;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2452__auto____14580 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14581 = (cljs.core._entry_key[goog.typeOf(x__2452__auto____14580)]);
if(or__3824__auto____14581)
{return or__3824__auto____14581;
} else
{var or__3824__auto____14582 = (cljs.core._entry_key["_"]);
if(or__3824__auto____14582)
{return or__3824__auto____14582;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____14587 = coll;
if(and__3822__auto____14587)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____14587;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2452__auto____14588 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14589 = (cljs.core._comparator[goog.typeOf(x__2452__auto____14588)]);
if(or__3824__auto____14589)
{return or__3824__auto____14589;
} else
{var or__3824__auto____14590 = (cljs.core._comparator["_"]);
if(or__3824__auto____14590)
{return or__3824__auto____14590;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____14595 = o;
if(and__3822__auto____14595)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____14595;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2452__auto____14596 = (((o == null))?null:o);
return (function (){var or__3824__auto____14597 = (cljs.core._pr_seq[goog.typeOf(x__2452__auto____14596)]);
if(or__3824__auto____14597)
{return or__3824__auto____14597;
} else
{var or__3824__auto____14598 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____14598)
{return or__3824__auto____14598;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____14603 = d;
if(and__3822__auto____14603)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____14603;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2452__auto____14604 = (((d == null))?null:d);
return (function (){var or__3824__auto____14605 = (cljs.core._realized_QMARK_[goog.typeOf(x__2452__auto____14604)]);
if(or__3824__auto____14605)
{return or__3824__auto____14605;
} else
{var or__3824__auto____14606 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____14606)
{return or__3824__auto____14606;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____14611 = this$;
if(and__3822__auto____14611)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____14611;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2452__auto____14612 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14613 = (cljs.core._notify_watches[goog.typeOf(x__2452__auto____14612)]);
if(or__3824__auto____14613)
{return or__3824__auto____14613;
} else
{var or__3824__auto____14614 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____14614)
{return or__3824__auto____14614;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____14619 = this$;
if(and__3822__auto____14619)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____14619;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2452__auto____14620 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14621 = (cljs.core._add_watch[goog.typeOf(x__2452__auto____14620)]);
if(or__3824__auto____14621)
{return or__3824__auto____14621;
} else
{var or__3824__auto____14622 = (cljs.core._add_watch["_"]);
if(or__3824__auto____14622)
{return or__3824__auto____14622;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____14627 = this$;
if(and__3822__auto____14627)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____14627;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2452__auto____14628 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____14629 = (cljs.core._remove_watch[goog.typeOf(x__2452__auto____14628)]);
if(or__3824__auto____14629)
{return or__3824__auto____14629;
} else
{var or__3824__auto____14630 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____14630)
{return or__3824__auto____14630;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____14635 = coll;
if(and__3822__auto____14635)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____14635;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2452__auto____14636 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14637 = (cljs.core._as_transient[goog.typeOf(x__2452__auto____14636)]);
if(or__3824__auto____14637)
{return or__3824__auto____14637;
} else
{var or__3824__auto____14638 = (cljs.core._as_transient["_"]);
if(or__3824__auto____14638)
{return or__3824__auto____14638;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____14643 = tcoll;
if(and__3822__auto____14643)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____14643;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2452__auto____14644 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____14645 = (cljs.core._conj_BANG_[goog.typeOf(x__2452__auto____14644)]);
if(or__3824__auto____14645)
{return or__3824__auto____14645;
} else
{var or__3824__auto____14646 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____14646)
{return or__3824__auto____14646;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____14651 = tcoll;
if(and__3822__auto____14651)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____14651;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2452__auto____14652 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____14653 = (cljs.core._persistent_BANG_[goog.typeOf(x__2452__auto____14652)]);
if(or__3824__auto____14653)
{return or__3824__auto____14653;
} else
{var or__3824__auto____14654 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____14654)
{return or__3824__auto____14654;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____14659 = tcoll;
if(and__3822__auto____14659)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____14659;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2452__auto____14660 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____14661 = (cljs.core._assoc_BANG_[goog.typeOf(x__2452__auto____14660)]);
if(or__3824__auto____14661)
{return or__3824__auto____14661;
} else
{var or__3824__auto____14662 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____14662)
{return or__3824__auto____14662;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____14667 = tcoll;
if(and__3822__auto____14667)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____14667;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2452__auto____14668 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____14669 = (cljs.core._dissoc_BANG_[goog.typeOf(x__2452__auto____14668)]);
if(or__3824__auto____14669)
{return or__3824__auto____14669;
} else
{var or__3824__auto____14670 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____14670)
{return or__3824__auto____14670;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____14675 = tcoll;
if(and__3822__auto____14675)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____14675;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2452__auto____14676 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____14677 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__2452__auto____14676)]);
if(or__3824__auto____14677)
{return or__3824__auto____14677;
} else
{var or__3824__auto____14678 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____14678)
{return or__3824__auto____14678;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____14683 = tcoll;
if(and__3822__auto____14683)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____14683;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2452__auto____14684 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____14685 = (cljs.core._pop_BANG_[goog.typeOf(x__2452__auto____14684)]);
if(or__3824__auto____14685)
{return or__3824__auto____14685;
} else
{var or__3824__auto____14686 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____14686)
{return or__3824__auto____14686;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____14691 = tcoll;
if(and__3822__auto____14691)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____14691;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2452__auto____14692 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____14693 = (cljs.core._disjoin_BANG_[goog.typeOf(x__2452__auto____14692)]);
if(or__3824__auto____14693)
{return or__3824__auto____14693;
} else
{var or__3824__auto____14694 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____14694)
{return or__3824__auto____14694;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____14699 = x;
if(and__3822__auto____14699)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____14699;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2452__auto____14700 = (((x == null))?null:x);
return (function (){var or__3824__auto____14701 = (cljs.core._compare[goog.typeOf(x__2452__auto____14700)]);
if(or__3824__auto____14701)
{return or__3824__auto____14701;
} else
{var or__3824__auto____14702 = (cljs.core._compare["_"]);
if(or__3824__auto____14702)
{return or__3824__auto____14702;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____14707 = coll;
if(and__3822__auto____14707)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____14707;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2452__auto____14708 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14709 = (cljs.core._drop_first[goog.typeOf(x__2452__auto____14708)]);
if(or__3824__auto____14709)
{return or__3824__auto____14709;
} else
{var or__3824__auto____14710 = (cljs.core._drop_first["_"]);
if(or__3824__auto____14710)
{return or__3824__auto____14710;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____14715 = coll;
if(and__3822__auto____14715)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____14715;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2452__auto____14716 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14717 = (cljs.core._chunked_first[goog.typeOf(x__2452__auto____14716)]);
if(or__3824__auto____14717)
{return or__3824__auto____14717;
} else
{var or__3824__auto____14718 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____14718)
{return or__3824__auto____14718;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____14723 = coll;
if(and__3822__auto____14723)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____14723;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2452__auto____14724 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14725 = (cljs.core._chunked_rest[goog.typeOf(x__2452__auto____14724)]);
if(or__3824__auto____14725)
{return or__3824__auto____14725;
} else
{var or__3824__auto____14726 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____14726)
{return or__3824__auto____14726;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____14731 = coll;
if(and__3822__auto____14731)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____14731;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2452__auto____14732 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____14733 = (cljs.core._chunked_next[goog.typeOf(x__2452__auto____14732)]);
if(or__3824__auto____14733)
{return or__3824__auto____14733;
} else
{var or__3824__auto____14734 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____14734)
{return or__3824__auto____14734;
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
var or__3824__auto____14736 = (x === y);
if(or__3824__auto____14736)
{return or__3824__auto____14736;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__14737__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__14738 = y;
var G__14739 = cljs.core.first.call(null,more);
var G__14740 = cljs.core.next.call(null,more);
x = G__14738;
y = G__14739;
more = G__14740;
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
var G__14737 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__14737__delegate.call(this, x, y, more);
};
G__14737.cljs$lang$maxFixedArity = 2;
G__14737.cljs$lang$applyTo = (function (arglist__14741){
var x = cljs.core.first(arglist__14741);
var y = cljs.core.first(cljs.core.next(arglist__14741));
var more = cljs.core.rest(cljs.core.next(arglist__14741));
return G__14737__delegate(x, y, more);
});
G__14737.cljs$lang$arity$variadic = G__14737__delegate;
return G__14737;
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
var G__14742 = null;
var G__14742__2 = (function (o,k){
return null;
});
var G__14742__3 = (function (o,k,not_found){
return not_found;
});
G__14742 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__14742__2.call(this,o,k);
case 3:
return G__14742__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14742;
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
var G__14743 = null;
var G__14743__2 = (function (_,f){
return f.call(null);
});
var G__14743__3 = (function (_,f,start){
return start;
});
G__14743 = function(_,f,start){
switch(arguments.length){
case 2:
return G__14743__2.call(this,_,f);
case 3:
return G__14743__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14743;
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
var G__14744 = null;
var G__14744__2 = (function (_,n){
return null;
});
var G__14744__3 = (function (_,n,not_found){
return not_found;
});
G__14744 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__14744__2.call(this,_,n);
case 3:
return G__14744__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14744;
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
var and__3822__auto____14745 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____14745)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____14745;
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
var cnt__14758 = cljs.core._count.call(null,cicoll);
if((cnt__14758 === 0))
{return f.call(null);
} else
{var val__14759 = cljs.core._nth.call(null,cicoll,0);
var n__14760 = 1;
while(true){
if((n__14760 < cnt__14758))
{var nval__14761 = f.call(null,val__14759,cljs.core._nth.call(null,cicoll,n__14760));
if(cljs.core.reduced_QMARK_.call(null,nval__14761))
{return cljs.core.deref.call(null,nval__14761);
} else
{{
var G__14770 = nval__14761;
var G__14771 = (n__14760 + 1);
val__14759 = G__14770;
n__14760 = G__14771;
continue;
}
}
} else
{return val__14759;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__14762 = cljs.core._count.call(null,cicoll);
var val__14763 = val;
var n__14764 = 0;
while(true){
if((n__14764 < cnt__14762))
{var nval__14765 = f.call(null,val__14763,cljs.core._nth.call(null,cicoll,n__14764));
if(cljs.core.reduced_QMARK_.call(null,nval__14765))
{return cljs.core.deref.call(null,nval__14765);
} else
{{
var G__14772 = nval__14765;
var G__14773 = (n__14764 + 1);
val__14763 = G__14772;
n__14764 = G__14773;
continue;
}
}
} else
{return val__14763;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__14766 = cljs.core._count.call(null,cicoll);
var val__14767 = val;
var n__14768 = idx;
while(true){
if((n__14768 < cnt__14766))
{var nval__14769 = f.call(null,val__14767,cljs.core._nth.call(null,cicoll,n__14768));
if(cljs.core.reduced_QMARK_.call(null,nval__14769))
{return cljs.core.deref.call(null,nval__14769);
} else
{{
var G__14774 = nval__14769;
var G__14775 = (n__14768 + 1);
val__14767 = G__14774;
n__14768 = G__14775;
continue;
}
}
} else
{return val__14767;
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
var cnt__14788 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__14789 = (arr[0]);
var n__14790 = 1;
while(true){
if((n__14790 < cnt__14788))
{var nval__14791 = f.call(null,val__14789,(arr[n__14790]));
if(cljs.core.reduced_QMARK_.call(null,nval__14791))
{return cljs.core.deref.call(null,nval__14791);
} else
{{
var G__14800 = nval__14791;
var G__14801 = (n__14790 + 1);
val__14789 = G__14800;
n__14790 = G__14801;
continue;
}
}
} else
{return val__14789;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__14792 = arr.length;
var val__14793 = val;
var n__14794 = 0;
while(true){
if((n__14794 < cnt__14792))
{var nval__14795 = f.call(null,val__14793,(arr[n__14794]));
if(cljs.core.reduced_QMARK_.call(null,nval__14795))
{return cljs.core.deref.call(null,nval__14795);
} else
{{
var G__14802 = nval__14795;
var G__14803 = (n__14794 + 1);
val__14793 = G__14802;
n__14794 = G__14803;
continue;
}
}
} else
{return val__14793;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__14796 = arr.length;
var val__14797 = val;
var n__14798 = idx;
while(true){
if((n__14798 < cnt__14796))
{var nval__14799 = f.call(null,val__14797,(arr[n__14798]));
if(cljs.core.reduced_QMARK_.call(null,nval__14799))
{return cljs.core.deref.call(null,nval__14799);
} else
{{
var G__14804 = nval__14799;
var G__14805 = (n__14798 + 1);
val__14797 = G__14804;
n__14798 = G__14805;
continue;
}
}
} else
{return val__14797;
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
var this__14806 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__14807 = this;
if(((this__14807.i + 1) < this__14807.a.length))
{return (new cljs.core.IndexedSeq(this__14807.a,(this__14807.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__14808 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__14809 = this;
var c__14810 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__14810 > 0))
{return (new cljs.core.RSeq(coll,(c__14810 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__14811 = this;
var this__14812 = this;
return cljs.core.pr_str.call(null,this__14812);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__14813 = this;
if(cljs.core.counted_QMARK_.call(null,this__14813.a))
{return cljs.core.ci_reduce.call(null,this__14813.a,f,(this__14813.a[this__14813.i]),(this__14813.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__14813.a[this__14813.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__14814 = this;
if(cljs.core.counted_QMARK_.call(null,this__14814.a))
{return cljs.core.ci_reduce.call(null,this__14814.a,f,start,this__14814.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__14815 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__14816 = this;
return (this__14816.a.length - this__14816.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__14817 = this;
return (this__14817.a[this__14817.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__14818 = this;
if(((this__14818.i + 1) < this__14818.a.length))
{return (new cljs.core.IndexedSeq(this__14818.a,(this__14818.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__14819 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__14820 = this;
var i__14821 = (n + this__14820.i);
if((i__14821 < this__14820.a.length))
{return (this__14820.a[i__14821]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__14822 = this;
var i__14823 = (n + this__14822.i);
if((i__14823 < this__14822.a.length))
{return (this__14822.a[i__14823]);
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
var G__14824 = null;
var G__14824__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__14824__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__14824 = function(array,f,start){
switch(arguments.length){
case 2:
return G__14824__2.call(this,array,f);
case 3:
return G__14824__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14824;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__14825 = null;
var G__14825__2 = (function (array,k){
return (array[k]);
});
var G__14825__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__14825 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__14825__2.call(this,array,k);
case 3:
return G__14825__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14825;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__14826 = null;
var G__14826__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__14826__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__14826 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__14826__2.call(this,array,n);
case 3:
return G__14826__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14826;
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
var this__14827 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__14828 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__14829 = this;
var this__14830 = this;
return cljs.core.pr_str.call(null,this__14830);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__14831 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__14832 = this;
return (this__14832.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__14833 = this;
return cljs.core._nth.call(null,this__14833.ci,this__14833.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__14834 = this;
if((this__14834.i > 0))
{return (new cljs.core.RSeq(this__14834.ci,(this__14834.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__14835 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__14836 = this;
return (new cljs.core.RSeq(this__14836.ci,this__14836.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__14837 = this;
return this__14837.meta;
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
{if((function (){var G__14841__14842 = coll;
if(G__14841__14842)
{if((function (){var or__3824__auto____14843 = (G__14841__14842.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____14843)
{return or__3824__auto____14843;
} else
{return G__14841__14842.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__14841__14842.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__14841__14842);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__14841__14842);
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
{if((function (){var G__14848__14849 = coll;
if(G__14848__14849)
{if((function (){var or__3824__auto____14850 = (G__14848__14849.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____14850)
{return or__3824__auto____14850;
} else
{return G__14848__14849.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__14848__14849.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__14848__14849);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__14848__14849);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__14851 = cljs.core.seq.call(null,coll);
if((s__14851 == null))
{return null;
} else
{return cljs.core._first.call(null,s__14851);
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
{if((function (){var G__14856__14857 = coll;
if(G__14856__14857)
{if((function (){var or__3824__auto____14858 = (G__14856__14857.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____14858)
{return or__3824__auto____14858;
} else
{return G__14856__14857.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__14856__14857.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__14856__14857);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__14856__14857);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__14859 = cljs.core.seq.call(null,coll);
if(!((s__14859 == null)))
{return cljs.core._rest.call(null,s__14859);
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
{if((function (){var G__14863__14864 = coll;
if(G__14863__14864)
{if((function (){var or__3824__auto____14865 = (G__14863__14864.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____14865)
{return or__3824__auto____14865;
} else
{return G__14863__14864.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__14863__14864.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__14863__14864);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__14863__14864);
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
var sn__14867 = cljs.core.next.call(null,s);
if(!((sn__14867 == null)))
{{
var G__14868 = sn__14867;
s = G__14868;
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
var G__14869__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__14870 = conj.call(null,coll,x);
var G__14871 = cljs.core.first.call(null,xs);
var G__14872 = cljs.core.next.call(null,xs);
coll = G__14870;
x = G__14871;
xs = G__14872;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__14869 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__14869__delegate.call(this, coll, x, xs);
};
G__14869.cljs$lang$maxFixedArity = 2;
G__14869.cljs$lang$applyTo = (function (arglist__14873){
var coll = cljs.core.first(arglist__14873);
var x = cljs.core.first(cljs.core.next(arglist__14873));
var xs = cljs.core.rest(cljs.core.next(arglist__14873));
return G__14869__delegate(coll, x, xs);
});
G__14869.cljs$lang$arity$variadic = G__14869__delegate;
return G__14869;
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
var s__14876 = cljs.core.seq.call(null,coll);
var acc__14877 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__14876))
{return (acc__14877 + cljs.core._count.call(null,s__14876));
} else
{{
var G__14878 = cljs.core.next.call(null,s__14876);
var G__14879 = (acc__14877 + 1);
s__14876 = G__14878;
acc__14877 = G__14879;
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
{if((function (){var G__14886__14887 = coll;
if(G__14886__14887)
{if((function (){var or__3824__auto____14888 = (G__14886__14887.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____14888)
{return or__3824__auto____14888;
} else
{return G__14886__14887.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__14886__14887.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__14886__14887);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__14886__14887);
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
{if((function (){var G__14889__14890 = coll;
if(G__14889__14890)
{if((function (){var or__3824__auto____14891 = (G__14889__14890.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____14891)
{return or__3824__auto____14891;
} else
{return G__14889__14890.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__14889__14890.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__14889__14890);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__14889__14890);
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
var G__14894__delegate = function (coll,k,v,kvs){
while(true){
var ret__14893 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__14895 = ret__14893;
var G__14896 = cljs.core.first.call(null,kvs);
var G__14897 = cljs.core.second.call(null,kvs);
var G__14898 = cljs.core.nnext.call(null,kvs);
coll = G__14895;
k = G__14896;
v = G__14897;
kvs = G__14898;
continue;
}
} else
{return ret__14893;
}
break;
}
};
var G__14894 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14894__delegate.call(this, coll, k, v, kvs);
};
G__14894.cljs$lang$maxFixedArity = 3;
G__14894.cljs$lang$applyTo = (function (arglist__14899){
var coll = cljs.core.first(arglist__14899);
var k = cljs.core.first(cljs.core.next(arglist__14899));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14899)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14899)));
return G__14894__delegate(coll, k, v, kvs);
});
G__14894.cljs$lang$arity$variadic = G__14894__delegate;
return G__14894;
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
var G__14902__delegate = function (coll,k,ks){
while(true){
var ret__14901 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__14903 = ret__14901;
var G__14904 = cljs.core.first.call(null,ks);
var G__14905 = cljs.core.next.call(null,ks);
coll = G__14903;
k = G__14904;
ks = G__14905;
continue;
}
} else
{return ret__14901;
}
break;
}
};
var G__14902 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__14902__delegate.call(this, coll, k, ks);
};
G__14902.cljs$lang$maxFixedArity = 2;
G__14902.cljs$lang$applyTo = (function (arglist__14906){
var coll = cljs.core.first(arglist__14906);
var k = cljs.core.first(cljs.core.next(arglist__14906));
var ks = cljs.core.rest(cljs.core.next(arglist__14906));
return G__14902__delegate(coll, k, ks);
});
G__14902.cljs$lang$arity$variadic = G__14902__delegate;
return G__14902;
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
if((function (){var G__14910__14911 = o;
if(G__14910__14911)
{if((function (){var or__3824__auto____14912 = (G__14910__14911.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____14912)
{return or__3824__auto____14912;
} else
{return G__14910__14911.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__14910__14911.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__14910__14911);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__14910__14911);
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
var G__14915__delegate = function (coll,k,ks){
while(true){
var ret__14914 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__14916 = ret__14914;
var G__14917 = cljs.core.first.call(null,ks);
var G__14918 = cljs.core.next.call(null,ks);
coll = G__14916;
k = G__14917;
ks = G__14918;
continue;
}
} else
{return ret__14914;
}
break;
}
};
var G__14915 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__14915__delegate.call(this, coll, k, ks);
};
G__14915.cljs$lang$maxFixedArity = 2;
G__14915.cljs$lang$applyTo = (function (arglist__14919){
var coll = cljs.core.first(arglist__14919);
var k = cljs.core.first(cljs.core.next(arglist__14919));
var ks = cljs.core.rest(cljs.core.next(arglist__14919));
return G__14915__delegate(coll, k, ks);
});
G__14915.cljs$lang$arity$variadic = G__14915__delegate;
return G__14915;
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
var h__14921 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__14921);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__14921;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__14923 = (cljs.core.string_hash_cache[k]);
if(!((h__14923 == null)))
{return h__14923;
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
if((function (){var and__3822__auto____14925 = goog.isString(o);
if(and__3822__auto____14925)
{return check_cache;
} else
{return and__3822__auto____14925;
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
{var G__14929__14930 = x;
if(G__14929__14930)
{if((function (){var or__3824__auto____14931 = (G__14929__14930.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____14931)
{return or__3824__auto____14931;
} else
{return G__14929__14930.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__14929__14930.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__14929__14930);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__14929__14930);
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
{var G__14935__14936 = x;
if(G__14935__14936)
{if((function (){var or__3824__auto____14937 = (G__14935__14936.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____14937)
{return or__3824__auto____14937;
} else
{return G__14935__14936.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__14935__14936.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__14935__14936);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__14935__14936);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__14941__14942 = x;
if(G__14941__14942)
{if((function (){var or__3824__auto____14943 = (G__14941__14942.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____14943)
{return or__3824__auto____14943;
} else
{return G__14941__14942.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__14941__14942.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__14941__14942);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__14941__14942);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__14947__14948 = x;
if(G__14947__14948)
{if((function (){var or__3824__auto____14949 = (G__14947__14948.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____14949)
{return or__3824__auto____14949;
} else
{return G__14947__14948.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__14947__14948.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__14947__14948);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__14947__14948);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__14953__14954 = x;
if(G__14953__14954)
{if((function (){var or__3824__auto____14955 = (G__14953__14954.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____14955)
{return or__3824__auto____14955;
} else
{return G__14953__14954.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__14953__14954.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__14953__14954);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__14953__14954);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__14959__14960 = x;
if(G__14959__14960)
{if((function (){var or__3824__auto____14961 = (G__14959__14960.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____14961)
{return or__3824__auto____14961;
} else
{return G__14959__14960.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__14959__14960.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__14959__14960);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__14959__14960);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__14965__14966 = x;
if(G__14965__14966)
{if((function (){var or__3824__auto____14967 = (G__14965__14966.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____14967)
{return or__3824__auto____14967;
} else
{return G__14965__14966.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__14965__14966.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__14965__14966);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__14965__14966);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__14971__14972 = x;
if(G__14971__14972)
{if((function (){var or__3824__auto____14973 = (G__14971__14972.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____14973)
{return or__3824__auto____14973;
} else
{return G__14971__14972.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__14971__14972.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__14971__14972);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__14971__14972);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__14977__14978 = x;
if(G__14977__14978)
{if((function (){var or__3824__auto____14979 = (G__14977__14978.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____14979)
{return or__3824__auto____14979;
} else
{return G__14977__14978.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__14977__14978.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__14977__14978);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__14977__14978);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__14983__14984 = x;
if(G__14983__14984)
{if(cljs.core.truth_((function (){var or__3824__auto____14985 = null;
if(cljs.core.truth_(or__3824__auto____14985))
{return or__3824__auto____14985;
} else
{return G__14983__14984.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__14983__14984.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__14983__14984);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__14983__14984);
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
var G__14986__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__14986 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14986__delegate.call(this, keyvals);
};
G__14986.cljs$lang$maxFixedArity = 0;
G__14986.cljs$lang$applyTo = (function (arglist__14987){
var keyvals = cljs.core.seq(arglist__14987);;
return G__14986__delegate(keyvals);
});
G__14986.cljs$lang$arity$variadic = G__14986__delegate;
return G__14986;
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
var keys__14989 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__14989.push(key);
}));
return keys__14989;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__14993 = i;
var j__14994 = j;
var len__14995 = len;
while(true){
if((len__14995 === 0))
{return to;
} else
{(to[j__14994] = (from[i__14993]));
{
var G__14996 = (i__14993 + 1);
var G__14997 = (j__14994 + 1);
var G__14998 = (len__14995 - 1);
i__14993 = G__14996;
j__14994 = G__14997;
len__14995 = G__14998;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__15002 = (i + (len - 1));
var j__15003 = (j + (len - 1));
var len__15004 = len;
while(true){
if((len__15004 === 0))
{return to;
} else
{(to[j__15003] = (from[i__15002]));
{
var G__15005 = (i__15002 - 1);
var G__15006 = (j__15003 - 1);
var G__15007 = (len__15004 - 1);
i__15002 = G__15005;
j__15003 = G__15006;
len__15004 = G__15007;
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
{var G__15011__15012 = s;
if(G__15011__15012)
{if((function (){var or__3824__auto____15013 = (G__15011__15012.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____15013)
{return or__3824__auto____15013;
} else
{return G__15011__15012.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__15011__15012.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__15011__15012);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__15011__15012);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__15017__15018 = s;
if(G__15017__15018)
{if((function (){var or__3824__auto____15019 = (G__15017__15018.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____15019)
{return or__3824__auto____15019;
} else
{return G__15017__15018.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__15017__15018.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__15017__15018);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__15017__15018);
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
var and__3822__auto____15022 = goog.isString(x);
if(and__3822__auto____15022)
{return !((function (){var or__3824__auto____15023 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____15023)
{return or__3824__auto____15023;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____15022;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____15025 = goog.isString(x);
if(and__3822__auto____15025)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____15025;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____15027 = goog.isString(x);
if(and__3822__auto____15027)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____15027;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____15032 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____15032)
{return or__3824__auto____15032;
} else
{var G__15033__15034 = f;
if(G__15033__15034)
{if((function (){var or__3824__auto____15035 = (G__15033__15034.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____15035)
{return or__3824__auto____15035;
} else
{return G__15033__15034.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__15033__15034.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__15033__15034);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__15033__15034);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____15037 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____15037)
{return (n == n.toFixed());
} else
{return and__3822__auto____15037;
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
if(cljs.core.truth_((function (){var and__3822__auto____15040 = coll;
if(cljs.core.truth_(and__3822__auto____15040))
{var and__3822__auto____15041 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____15041)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____15041;
}
} else
{return and__3822__auto____15040;
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
var G__15050__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__15046 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__15047 = more;
while(true){
var x__15048 = cljs.core.first.call(null,xs__15047);
var etc__15049 = cljs.core.next.call(null,xs__15047);
if(cljs.core.truth_(xs__15047))
{if(cljs.core.contains_QMARK_.call(null,s__15046,x__15048))
{return false;
} else
{{
var G__15051 = cljs.core.conj.call(null,s__15046,x__15048);
var G__15052 = etc__15049;
s__15046 = G__15051;
xs__15047 = G__15052;
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
var G__15050 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15050__delegate.call(this, x, y, more);
};
G__15050.cljs$lang$maxFixedArity = 2;
G__15050.cljs$lang$applyTo = (function (arglist__15053){
var x = cljs.core.first(arglist__15053);
var y = cljs.core.first(cljs.core.next(arglist__15053));
var more = cljs.core.rest(cljs.core.next(arglist__15053));
return G__15050__delegate(x, y, more);
});
G__15050.cljs$lang$arity$variadic = G__15050__delegate;
return G__15050;
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
{if((function (){var G__15057__15058 = x;
if(G__15057__15058)
{if(cljs.core.truth_((function (){var or__3824__auto____15059 = null;
if(cljs.core.truth_(or__3824__auto____15059))
{return or__3824__auto____15059;
} else
{return G__15057__15058.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__15057__15058.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__15057__15058);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__15057__15058);
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
var xl__15064 = cljs.core.count.call(null,xs);
var yl__15065 = cljs.core.count.call(null,ys);
if((xl__15064 < yl__15065))
{return -1;
} else
{if((xl__15064 > yl__15065))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__15064,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__15066 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____15067 = (d__15066 === 0);
if(and__3822__auto____15067)
{return ((n + 1) < len);
} else
{return and__3822__auto____15067;
}
})())
{{
var G__15068 = xs;
var G__15069 = ys;
var G__15070 = len;
var G__15071 = (n + 1);
xs = G__15068;
ys = G__15069;
len = G__15070;
n = G__15071;
continue;
}
} else
{return d__15066;
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
var r__15073 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__15073))
{return r__15073;
} else
{if(cljs.core.truth_(r__15073))
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
{var a__15075 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__15075,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__15075);
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
var temp__3971__auto____15081 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____15081)
{var s__15082 = temp__3971__auto____15081;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__15082),cljs.core.next.call(null,s__15082));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__15083 = val;
var coll__15084 = cljs.core.seq.call(null,coll);
while(true){
if(coll__15084)
{var nval__15085 = f.call(null,val__15083,cljs.core.first.call(null,coll__15084));
if(cljs.core.reduced_QMARK_.call(null,nval__15085))
{return cljs.core.deref.call(null,nval__15085);
} else
{{
var G__15086 = nval__15085;
var G__15087 = cljs.core.next.call(null,coll__15084);
val__15083 = G__15086;
coll__15084 = G__15087;
continue;
}
}
} else
{return val__15083;
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
var a__15089 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__15089);
return cljs.core.vec.call(null,a__15089);
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
if((function (){var G__15096__15097 = coll;
if(G__15096__15097)
{if((function (){var or__3824__auto____15098 = (G__15096__15097.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____15098)
{return or__3824__auto____15098;
} else
{return G__15096__15097.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__15096__15097.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__15096__15097);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__15096__15097);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__15099__15100 = coll;
if(G__15099__15100)
{if((function (){var or__3824__auto____15101 = (G__15099__15100.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____15101)
{return or__3824__auto____15101;
} else
{return G__15099__15100.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__15099__15100.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__15099__15100);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__15099__15100);
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
var this__15102 = this;
return this__15102.val;
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
var G__15103__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__15103 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15103__delegate.call(this, x, y, more);
};
G__15103.cljs$lang$maxFixedArity = 2;
G__15103.cljs$lang$applyTo = (function (arglist__15104){
var x = cljs.core.first(arglist__15104);
var y = cljs.core.first(cljs.core.next(arglist__15104));
var more = cljs.core.rest(cljs.core.next(arglist__15104));
return G__15103__delegate(x, y, more);
});
G__15103.cljs$lang$arity$variadic = G__15103__delegate;
return G__15103;
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
var G__15105__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__15105 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15105__delegate.call(this, x, y, more);
};
G__15105.cljs$lang$maxFixedArity = 2;
G__15105.cljs$lang$applyTo = (function (arglist__15106){
var x = cljs.core.first(arglist__15106);
var y = cljs.core.first(cljs.core.next(arglist__15106));
var more = cljs.core.rest(cljs.core.next(arglist__15106));
return G__15105__delegate(x, y, more);
});
G__15105.cljs$lang$arity$variadic = G__15105__delegate;
return G__15105;
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
var G__15107__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__15107 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15107__delegate.call(this, x, y, more);
};
G__15107.cljs$lang$maxFixedArity = 2;
G__15107.cljs$lang$applyTo = (function (arglist__15108){
var x = cljs.core.first(arglist__15108);
var y = cljs.core.first(cljs.core.next(arglist__15108));
var more = cljs.core.rest(cljs.core.next(arglist__15108));
return G__15107__delegate(x, y, more);
});
G__15107.cljs$lang$arity$variadic = G__15107__delegate;
return G__15107;
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
var G__15109__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__15109 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15109__delegate.call(this, x, y, more);
};
G__15109.cljs$lang$maxFixedArity = 2;
G__15109.cljs$lang$applyTo = (function (arglist__15110){
var x = cljs.core.first(arglist__15110);
var y = cljs.core.first(cljs.core.next(arglist__15110));
var more = cljs.core.rest(cljs.core.next(arglist__15110));
return G__15109__delegate(x, y, more);
});
G__15109.cljs$lang$arity$variadic = G__15109__delegate;
return G__15109;
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
var G__15111__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__15112 = y;
var G__15113 = cljs.core.first.call(null,more);
var G__15114 = cljs.core.next.call(null,more);
x = G__15112;
y = G__15113;
more = G__15114;
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
var G__15111 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15111__delegate.call(this, x, y, more);
};
G__15111.cljs$lang$maxFixedArity = 2;
G__15111.cljs$lang$applyTo = (function (arglist__15115){
var x = cljs.core.first(arglist__15115);
var y = cljs.core.first(cljs.core.next(arglist__15115));
var more = cljs.core.rest(cljs.core.next(arglist__15115));
return G__15111__delegate(x, y, more);
});
G__15111.cljs$lang$arity$variadic = G__15111__delegate;
return G__15111;
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
var G__15116__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__15117 = y;
var G__15118 = cljs.core.first.call(null,more);
var G__15119 = cljs.core.next.call(null,more);
x = G__15117;
y = G__15118;
more = G__15119;
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
var G__15116 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15116__delegate.call(this, x, y, more);
};
G__15116.cljs$lang$maxFixedArity = 2;
G__15116.cljs$lang$applyTo = (function (arglist__15120){
var x = cljs.core.first(arglist__15120);
var y = cljs.core.first(cljs.core.next(arglist__15120));
var more = cljs.core.rest(cljs.core.next(arglist__15120));
return G__15116__delegate(x, y, more);
});
G__15116.cljs$lang$arity$variadic = G__15116__delegate;
return G__15116;
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
var G__15121__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__15122 = y;
var G__15123 = cljs.core.first.call(null,more);
var G__15124 = cljs.core.next.call(null,more);
x = G__15122;
y = G__15123;
more = G__15124;
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
var G__15121 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15121__delegate.call(this, x, y, more);
};
G__15121.cljs$lang$maxFixedArity = 2;
G__15121.cljs$lang$applyTo = (function (arglist__15125){
var x = cljs.core.first(arglist__15125);
var y = cljs.core.first(cljs.core.next(arglist__15125));
var more = cljs.core.rest(cljs.core.next(arglist__15125));
return G__15121__delegate(x, y, more);
});
G__15121.cljs$lang$arity$variadic = G__15121__delegate;
return G__15121;
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
var G__15126__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__15127 = y;
var G__15128 = cljs.core.first.call(null,more);
var G__15129 = cljs.core.next.call(null,more);
x = G__15127;
y = G__15128;
more = G__15129;
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
var G__15126 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15126__delegate.call(this, x, y, more);
};
G__15126.cljs$lang$maxFixedArity = 2;
G__15126.cljs$lang$applyTo = (function (arglist__15130){
var x = cljs.core.first(arglist__15130);
var y = cljs.core.first(cljs.core.next(arglist__15130));
var more = cljs.core.rest(cljs.core.next(arglist__15130));
return G__15126__delegate(x, y, more);
});
G__15126.cljs$lang$arity$variadic = G__15126__delegate;
return G__15126;
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
var G__15131__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__15131 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15131__delegate.call(this, x, y, more);
};
G__15131.cljs$lang$maxFixedArity = 2;
G__15131.cljs$lang$applyTo = (function (arglist__15132){
var x = cljs.core.first(arglist__15132);
var y = cljs.core.first(cljs.core.next(arglist__15132));
var more = cljs.core.rest(cljs.core.next(arglist__15132));
return G__15131__delegate(x, y, more);
});
G__15131.cljs$lang$arity$variadic = G__15131__delegate;
return G__15131;
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
var G__15133__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__15133 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15133__delegate.call(this, x, y, more);
};
G__15133.cljs$lang$maxFixedArity = 2;
G__15133.cljs$lang$applyTo = (function (arglist__15134){
var x = cljs.core.first(arglist__15134);
var y = cljs.core.first(cljs.core.next(arglist__15134));
var more = cljs.core.rest(cljs.core.next(arglist__15134));
return G__15133__delegate(x, y, more);
});
G__15133.cljs$lang$arity$variadic = G__15133__delegate;
return G__15133;
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
var rem__15136 = (n % d);
return cljs.core.fix.call(null,((n - rem__15136) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__15138 = cljs.core.quot.call(null,n,d);
return (n - (d * q__15138));
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
var v__15141 = (v - ((v >> 1) & 1431655765));
var v__15142 = ((v__15141 & 858993459) + ((v__15141 >> 2) & 858993459));
return ((((v__15142 + (v__15142 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__15143__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__15144 = y;
var G__15145 = cljs.core.first.call(null,more);
var G__15146 = cljs.core.next.call(null,more);
x = G__15144;
y = G__15145;
more = G__15146;
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
var G__15143 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15143__delegate.call(this, x, y, more);
};
G__15143.cljs$lang$maxFixedArity = 2;
G__15143.cljs$lang$applyTo = (function (arglist__15147){
var x = cljs.core.first(arglist__15147);
var y = cljs.core.first(cljs.core.next(arglist__15147));
var more = cljs.core.rest(cljs.core.next(arglist__15147));
return G__15143__delegate(x, y, more);
});
G__15143.cljs$lang$arity$variadic = G__15143__delegate;
return G__15143;
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
var n__15151 = n;
var xs__15152 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____15153 = xs__15152;
if(and__3822__auto____15153)
{return (n__15151 > 0);
} else
{return and__3822__auto____15153;
}
})()))
{{
var G__15154 = (n__15151 - 1);
var G__15155 = cljs.core.next.call(null,xs__15152);
n__15151 = G__15154;
xs__15152 = G__15155;
continue;
}
} else
{return xs__15152;
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
var G__15156__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__15157 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__15158 = cljs.core.next.call(null,more);
sb = G__15157;
more = G__15158;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__15156 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15156__delegate.call(this, x, ys);
};
G__15156.cljs$lang$maxFixedArity = 1;
G__15156.cljs$lang$applyTo = (function (arglist__15159){
var x = cljs.core.first(arglist__15159);
var ys = cljs.core.rest(arglist__15159);
return G__15156__delegate(x, ys);
});
G__15156.cljs$lang$arity$variadic = G__15156__delegate;
return G__15156;
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
var G__15160__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__15161 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__15162 = cljs.core.next.call(null,more);
sb = G__15161;
more = G__15162;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__15160 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15160__delegate.call(this, x, ys);
};
G__15160.cljs$lang$maxFixedArity = 1;
G__15160.cljs$lang$applyTo = (function (arglist__15163){
var x = cljs.core.first(arglist__15163);
var ys = cljs.core.rest(arglist__15163);
return G__15160__delegate(x, ys);
});
G__15160.cljs$lang$arity$variadic = G__15160__delegate;
return G__15160;
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
format.cljs$lang$applyTo = (function (arglist__15164){
var fmt = cljs.core.first(arglist__15164);
var args = cljs.core.rest(arglist__15164);
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__15167 = cljs.core.seq.call(null,x);
var ys__15168 = cljs.core.seq.call(null,y);
while(true){
if((xs__15167 == null))
{return (ys__15168 == null);
} else
{if((ys__15168 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__15167),cljs.core.first.call(null,ys__15168)))
{{
var G__15169 = cljs.core.next.call(null,xs__15167);
var G__15170 = cljs.core.next.call(null,ys__15168);
xs__15167 = G__15169;
ys__15168 = G__15170;
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
return cljs.core.reduce.call(null,(function (p1__15171_SHARP_,p2__15172_SHARP_){
return cljs.core.hash_combine.call(null,p1__15171_SHARP_,cljs.core.hash.call(null,p2__15172_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__15176 = 0;
var s__15177 = cljs.core.seq.call(null,m);
while(true){
if(s__15177)
{var e__15178 = cljs.core.first.call(null,s__15177);
{
var G__15179 = ((h__15176 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__15178)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__15178)))) % 4503599627370496);
var G__15180 = cljs.core.next.call(null,s__15177);
h__15176 = G__15179;
s__15177 = G__15180;
continue;
}
} else
{return h__15176;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__15184 = 0;
var s__15185 = cljs.core.seq.call(null,s);
while(true){
if(s__15185)
{var e__15186 = cljs.core.first.call(null,s__15185);
{
var G__15187 = ((h__15184 + cljs.core.hash.call(null,e__15186)) % 4503599627370496);
var G__15188 = cljs.core.next.call(null,s__15185);
h__15184 = G__15187;
s__15185 = G__15188;
continue;
}
} else
{return h__15184;
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
var G__15209__15210 = cljs.core.seq.call(null,fn_map);
if(G__15209__15210)
{var G__15212__15214 = cljs.core.first.call(null,G__15209__15210);
var vec__15213__15215 = G__15212__15214;
var key_name__15216 = cljs.core.nth.call(null,vec__15213__15215,0,null);
var f__15217 = cljs.core.nth.call(null,vec__15213__15215,1,null);
var G__15209__15218 = G__15209__15210;
var G__15212__15219 = G__15212__15214;
var G__15209__15220 = G__15209__15218;
while(true){
var vec__15221__15222 = G__15212__15219;
var key_name__15223 = cljs.core.nth.call(null,vec__15221__15222,0,null);
var f__15224 = cljs.core.nth.call(null,vec__15221__15222,1,null);
var G__15209__15225 = G__15209__15220;
var str_name__15226 = cljs.core.name.call(null,key_name__15223);
(obj[str_name__15226] = f__15224);
var temp__3974__auto____15227 = cljs.core.next.call(null,G__15209__15225);
if(temp__3974__auto____15227)
{var G__15209__15228 = temp__3974__auto____15227;
{
var G__15229 = cljs.core.first.call(null,G__15209__15228);
var G__15230 = G__15209__15228;
G__15212__15219 = G__15229;
G__15209__15220 = G__15230;
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
var this__15231 = this;
var h__2281__auto____15232 = this__15231.__hash;
if(!((h__2281__auto____15232 == null)))
{return h__2281__auto____15232;
} else
{var h__2281__auto____15233 = cljs.core.hash_coll.call(null,coll);
this__15231.__hash = h__2281__auto____15233;
return h__2281__auto____15233;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__15234 = this;
if((this__15234.count === 1))
{return null;
} else
{return this__15234.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__15235 = this;
return (new cljs.core.List(this__15235.meta,o,coll,(this__15235.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__15236 = this;
var this__15237 = this;
return cljs.core.pr_str.call(null,this__15237);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__15238 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__15239 = this;
return this__15239.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__15240 = this;
return this__15240.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__15241 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__15242 = this;
return this__15242.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__15243 = this;
if((this__15243.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__15243.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__15244 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__15245 = this;
return (new cljs.core.List(meta,this__15245.first,this__15245.rest,this__15245.count,this__15245.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__15246 = this;
return this__15246.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__15247 = this;
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
var this__15248 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__15249 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__15250 = this;
return (new cljs.core.List(this__15250.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__15251 = this;
var this__15252 = this;
return cljs.core.pr_str.call(null,this__15252);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__15253 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__15254 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__15255 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__15256 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__15257 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__15258 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__15259 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__15260 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__15261 = this;
return this__15261.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__15262 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__15266__15267 = coll;
if(G__15266__15267)
{if((function (){var or__3824__auto____15268 = (G__15266__15267.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____15268)
{return or__3824__auto____15268;
} else
{return G__15266__15267.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__15266__15267.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__15266__15267);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__15266__15267);
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
var G__15269__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__15269 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15269__delegate.call(this, x, y, z, items);
};
G__15269.cljs$lang$maxFixedArity = 3;
G__15269.cljs$lang$applyTo = (function (arglist__15270){
var x = cljs.core.first(arglist__15270);
var y = cljs.core.first(cljs.core.next(arglist__15270));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15270)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15270)));
return G__15269__delegate(x, y, z, items);
});
G__15269.cljs$lang$arity$variadic = G__15269__delegate;
return G__15269;
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
var this__15271 = this;
var h__2281__auto____15272 = this__15271.__hash;
if(!((h__2281__auto____15272 == null)))
{return h__2281__auto____15272;
} else
{var h__2281__auto____15273 = cljs.core.hash_coll.call(null,coll);
this__15271.__hash = h__2281__auto____15273;
return h__2281__auto____15273;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__15274 = this;
if((this__15274.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__15274.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__15275 = this;
return (new cljs.core.Cons(null,o,coll,this__15275.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__15276 = this;
var this__15277 = this;
return cljs.core.pr_str.call(null,this__15277);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__15278 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__15279 = this;
return this__15279.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__15280 = this;
if((this__15280.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__15280.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__15281 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__15282 = this;
return (new cljs.core.Cons(meta,this__15282.first,this__15282.rest,this__15282.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__15283 = this;
return this__15283.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__15284 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__15284.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____15289 = (coll == null);
if(or__3824__auto____15289)
{return or__3824__auto____15289;
} else
{var G__15290__15291 = coll;
if(G__15290__15291)
{if((function (){var or__3824__auto____15292 = (G__15290__15291.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____15292)
{return or__3824__auto____15292;
} else
{return G__15290__15291.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__15290__15291.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__15290__15291);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__15290__15291);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__15296__15297 = x;
if(G__15296__15297)
{if((function (){var or__3824__auto____15298 = (G__15296__15297.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____15298)
{return or__3824__auto____15298;
} else
{return G__15296__15297.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__15296__15297.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__15296__15297);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__15296__15297);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__15299 = null;
var G__15299__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__15299__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__15299 = function(string,f,start){
switch(arguments.length){
case 2:
return G__15299__2.call(this,string,f);
case 3:
return G__15299__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15299;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__15300 = null;
var G__15300__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__15300__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__15300 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__15300__2.call(this,string,k);
case 3:
return G__15300__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15300;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__15301 = null;
var G__15301__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__15301__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__15301 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__15301__2.call(this,string,n);
case 3:
return G__15301__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15301;
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
var G__15313 = null;
var G__15313__2 = (function (this_sym15304,coll){
var this__15306 = this;
var this_sym15304__15307 = this;
var ___15308 = this_sym15304__15307;
if((coll == null))
{return null;
} else
{var strobj__15309 = coll.strobj;
if((strobj__15309 == null))
{return cljs.core._lookup.call(null,coll,this__15306.k,null);
} else
{return (strobj__15309[this__15306.k]);
}
}
});
var G__15313__3 = (function (this_sym15305,coll,not_found){
var this__15306 = this;
var this_sym15305__15310 = this;
var ___15311 = this_sym15305__15310;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__15306.k,not_found);
}
});
G__15313 = function(this_sym15305,coll,not_found){
switch(arguments.length){
case 2:
return G__15313__2.call(this,this_sym15305,coll);
case 3:
return G__15313__3.call(this,this_sym15305,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15313;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym15302,args15303){
var this__15312 = this;
return this_sym15302.call.apply(this_sym15302,[this_sym15302].concat(args15303.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__15322 = null;
var G__15322__2 = (function (this_sym15316,coll){
var this_sym15316__15318 = this;
var this__15319 = this_sym15316__15318;
return cljs.core._lookup.call(null,coll,this__15319.toString(),null);
});
var G__15322__3 = (function (this_sym15317,coll,not_found){
var this_sym15317__15320 = this;
var this__15321 = this_sym15317__15320;
return cljs.core._lookup.call(null,coll,this__15321.toString(),not_found);
});
G__15322 = function(this_sym15317,coll,not_found){
switch(arguments.length){
case 2:
return G__15322__2.call(this,this_sym15317,coll);
case 3:
return G__15322__3.call(this,this_sym15317,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15322;
})()
;
String.prototype.apply = (function (this_sym15314,args15315){
return this_sym15314.call.apply(this_sym15314,[this_sym15314].concat(args15315.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__15324 = lazy_seq.x;
if(lazy_seq.realized)
{return x__15324;
} else
{lazy_seq.x = x__15324.call(null);
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
var this__15325 = this;
var h__2281__auto____15326 = this__15325.__hash;
if(!((h__2281__auto____15326 == null)))
{return h__2281__auto____15326;
} else
{var h__2281__auto____15327 = cljs.core.hash_coll.call(null,coll);
this__15325.__hash = h__2281__auto____15327;
return h__2281__auto____15327;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__15328 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__15329 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__15330 = this;
var this__15331 = this;
return cljs.core.pr_str.call(null,this__15331);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__15332 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__15333 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__15334 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__15335 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__15336 = this;
return (new cljs.core.LazySeq(meta,this__15336.realized,this__15336.x,this__15336.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__15337 = this;
return this__15337.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__15338 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__15338.meta);
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
var this__15339 = this;
return this__15339.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__15340 = this;
var ___15341 = this;
(this__15340.buf[this__15340.end] = o);
return this__15340.end = (this__15340.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__15342 = this;
var ___15343 = this;
var ret__15344 = (new cljs.core.ArrayChunk(this__15342.buf,0,this__15342.end));
this__15342.buf = null;
return ret__15344;
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
var this__15345 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__15345.arr[this__15345.off]),(this__15345.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__15346 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__15346.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__15347 = this;
if((this__15347.off === this__15347.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__15347.arr,(this__15347.off + 1),this__15347.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__15348 = this;
return (this__15348.arr[(this__15348.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__15349 = this;
if((function (){var and__3822__auto____15350 = (i >= 0);
if(and__3822__auto____15350)
{return (i < (this__15349.end - this__15349.off));
} else
{return and__3822__auto____15350;
}
})())
{return (this__15349.arr[(this__15349.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__15351 = this;
return (this__15351.end - this__15351.off);
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
var this__15352 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__15353 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__15354 = this;
return cljs.core._nth.call(null,this__15354.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__15355 = this;
if((cljs.core._count.call(null,this__15355.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__15355.chunk),this__15355.more,this__15355.meta));
} else
{if((this__15355.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__15355.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__15356 = this;
if((this__15356.more == null))
{return null;
} else
{return this__15356.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__15357 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__15358 = this;
return (new cljs.core.ChunkedCons(this__15358.chunk,this__15358.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__15359 = this;
return this__15359.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__15360 = this;
return this__15360.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__15361 = this;
if((this__15361.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__15361.more;
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
if((function (){var G__15365__15366 = s;
if(G__15365__15366)
{if(cljs.core.truth_((function (){var or__3824__auto____15367 = null;
if(cljs.core.truth_(or__3824__auto____15367))
{return or__3824__auto____15367;
} else
{return G__15365__15366.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__15365__15366.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__15365__15366);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__15365__15366);
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
var ary__15370 = [];
var s__15371 = s;
while(true){
if(cljs.core.seq.call(null,s__15371))
{ary__15370.push(cljs.core.first.call(null,s__15371));
{
var G__15372 = cljs.core.next.call(null,s__15371);
s__15371 = G__15372;
continue;
}
} else
{return ary__15370;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__15376 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__15377 = 0;
var xs__15378 = cljs.core.seq.call(null,coll);
while(true){
if(xs__15378)
{(ret__15376[i__15377] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__15378)));
{
var G__15379 = (i__15377 + 1);
var G__15380 = cljs.core.next.call(null,xs__15378);
i__15377 = G__15379;
xs__15378 = G__15380;
continue;
}
} else
{}
break;
}
return ret__15376;
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
var a__15388 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__15389 = cljs.core.seq.call(null,init_val_or_seq);
var i__15390 = 0;
var s__15391 = s__15389;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____15392 = s__15391;
if(and__3822__auto____15392)
{return (i__15390 < size);
} else
{return and__3822__auto____15392;
}
})()))
{(a__15388[i__15390] = cljs.core.first.call(null,s__15391));
{
var G__15395 = (i__15390 + 1);
var G__15396 = cljs.core.next.call(null,s__15391);
i__15390 = G__15395;
s__15391 = G__15396;
continue;
}
} else
{return a__15388;
}
break;
}
} else
{var n__2616__auto____15393 = size;
var i__15394 = 0;
while(true){
if((i__15394 < n__2616__auto____15393))
{(a__15388[i__15394] = init_val_or_seq);
{
var G__15397 = (i__15394 + 1);
i__15394 = G__15397;
continue;
}
} else
{}
break;
}
return a__15388;
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
var a__15405 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__15406 = cljs.core.seq.call(null,init_val_or_seq);
var i__15407 = 0;
var s__15408 = s__15406;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____15409 = s__15408;
if(and__3822__auto____15409)
{return (i__15407 < size);
} else
{return and__3822__auto____15409;
}
})()))
{(a__15405[i__15407] = cljs.core.first.call(null,s__15408));
{
var G__15412 = (i__15407 + 1);
var G__15413 = cljs.core.next.call(null,s__15408);
i__15407 = G__15412;
s__15408 = G__15413;
continue;
}
} else
{return a__15405;
}
break;
}
} else
{var n__2616__auto____15410 = size;
var i__15411 = 0;
while(true){
if((i__15411 < n__2616__auto____15410))
{(a__15405[i__15411] = init_val_or_seq);
{
var G__15414 = (i__15411 + 1);
i__15411 = G__15414;
continue;
}
} else
{}
break;
}
return a__15405;
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
var a__15422 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__15423 = cljs.core.seq.call(null,init_val_or_seq);
var i__15424 = 0;
var s__15425 = s__15423;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____15426 = s__15425;
if(and__3822__auto____15426)
{return (i__15424 < size);
} else
{return and__3822__auto____15426;
}
})()))
{(a__15422[i__15424] = cljs.core.first.call(null,s__15425));
{
var G__15429 = (i__15424 + 1);
var G__15430 = cljs.core.next.call(null,s__15425);
i__15424 = G__15429;
s__15425 = G__15430;
continue;
}
} else
{return a__15422;
}
break;
}
} else
{var n__2616__auto____15427 = size;
var i__15428 = 0;
while(true){
if((i__15428 < n__2616__auto____15427))
{(a__15422[i__15428] = init_val_or_seq);
{
var G__15431 = (i__15428 + 1);
i__15428 = G__15431;
continue;
}
} else
{}
break;
}
return a__15422;
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
{var s__15436 = s;
var i__15437 = n;
var sum__15438 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____15439 = (i__15437 > 0);
if(and__3822__auto____15439)
{return cljs.core.seq.call(null,s__15436);
} else
{return and__3822__auto____15439;
}
})()))
{{
var G__15440 = cljs.core.next.call(null,s__15436);
var G__15441 = (i__15437 - 1);
var G__15442 = (sum__15438 + 1);
s__15436 = G__15440;
i__15437 = G__15441;
sum__15438 = G__15442;
continue;
}
} else
{return sum__15438;
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
var s__15447 = cljs.core.seq.call(null,x);
if(s__15447)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__15447))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__15447),concat.call(null,cljs.core.chunk_rest.call(null,s__15447),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__15447),concat.call(null,cljs.core.rest.call(null,s__15447),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__15451__delegate = function (x,y,zs){
var cat__15450 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__15449 = cljs.core.seq.call(null,xys);
if(xys__15449)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__15449))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__15449),cat.call(null,cljs.core.chunk_rest.call(null,xys__15449),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__15449),cat.call(null,cljs.core.rest.call(null,xys__15449),zs));
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
return cat__15450.call(null,concat.call(null,x,y),zs);
};
var G__15451 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15451__delegate.call(this, x, y, zs);
};
G__15451.cljs$lang$maxFixedArity = 2;
G__15451.cljs$lang$applyTo = (function (arglist__15452){
var x = cljs.core.first(arglist__15452);
var y = cljs.core.first(cljs.core.next(arglist__15452));
var zs = cljs.core.rest(cljs.core.next(arglist__15452));
return G__15451__delegate(x, y, zs);
});
G__15451.cljs$lang$arity$variadic = G__15451__delegate;
return G__15451;
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
var G__15453__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__15453 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__15453__delegate.call(this, a, b, c, d, more);
};
G__15453.cljs$lang$maxFixedArity = 4;
G__15453.cljs$lang$applyTo = (function (arglist__15454){
var a = cljs.core.first(arglist__15454);
var b = cljs.core.first(cljs.core.next(arglist__15454));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15454)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15454))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15454))));
return G__15453__delegate(a, b, c, d, more);
});
G__15453.cljs$lang$arity$variadic = G__15453__delegate;
return G__15453;
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
var args__15496 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__15497 = cljs.core._first.call(null,args__15496);
var args__15498 = cljs.core._rest.call(null,args__15496);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__15497);
} else
{return f.call(null,a__15497);
}
} else
{var b__15499 = cljs.core._first.call(null,args__15498);
var args__15500 = cljs.core._rest.call(null,args__15498);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__15497,b__15499);
} else
{return f.call(null,a__15497,b__15499);
}
} else
{var c__15501 = cljs.core._first.call(null,args__15500);
var args__15502 = cljs.core._rest.call(null,args__15500);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__15497,b__15499,c__15501);
} else
{return f.call(null,a__15497,b__15499,c__15501);
}
} else
{var d__15503 = cljs.core._first.call(null,args__15502);
var args__15504 = cljs.core._rest.call(null,args__15502);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__15497,b__15499,c__15501,d__15503);
} else
{return f.call(null,a__15497,b__15499,c__15501,d__15503);
}
} else
{var e__15505 = cljs.core._first.call(null,args__15504);
var args__15506 = cljs.core._rest.call(null,args__15504);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__15497,b__15499,c__15501,d__15503,e__15505);
} else
{return f.call(null,a__15497,b__15499,c__15501,d__15503,e__15505);
}
} else
{var f__15507 = cljs.core._first.call(null,args__15506);
var args__15508 = cljs.core._rest.call(null,args__15506);
if((argc === 6))
{if(f__15507.cljs$lang$arity$6)
{return f__15507.cljs$lang$arity$6(a__15497,b__15499,c__15501,d__15503,e__15505,f__15507);
} else
{return f__15507.call(null,a__15497,b__15499,c__15501,d__15503,e__15505,f__15507);
}
} else
{var g__15509 = cljs.core._first.call(null,args__15508);
var args__15510 = cljs.core._rest.call(null,args__15508);
if((argc === 7))
{if(f__15507.cljs$lang$arity$7)
{return f__15507.cljs$lang$arity$7(a__15497,b__15499,c__15501,d__15503,e__15505,f__15507,g__15509);
} else
{return f__15507.call(null,a__15497,b__15499,c__15501,d__15503,e__15505,f__15507,g__15509);
}
} else
{var h__15511 = cljs.core._first.call(null,args__15510);
var args__15512 = cljs.core._rest.call(null,args__15510);
if((argc === 8))
{if(f__15507.cljs$lang$arity$8)
{return f__15507.cljs$lang$arity$8(a__15497,b__15499,c__15501,d__15503,e__15505,f__15507,g__15509,h__15511);
} else
{return f__15507.call(null,a__15497,b__15499,c__15501,d__15503,e__15505,f__15507,g__15509,h__15511);
}
} else
{var i__15513 = cljs.core._first.call(null,args__15512);
var args__15514 = cljs.core._rest.call(null,args__15512);
if((argc === 9))
{if(f__15507.cljs$lang$arity$9)
{return f__15507.cljs$lang$arity$9(a__15497,b__15499,c__15501,d__15503,e__15505,f__15507,g__15509,h__15511,i__15513);
} else
{return f__15507.call(null,a__15497,b__15499,c__15501,d__15503,e__15505,f__15507,g__15509,h__15511,i__15513);
}
} else
{var j__15515 = cljs.core._first.call(null,args__15514);
var args__15516 = cljs.core._rest.call(null,args__15514);
if((argc === 10))
{if(f__15507.cljs$lang$arity$10)
{return f__15507.cljs$lang$arity$10(a__15497,b__15499,c__15501,d__15503,e__15505,f__15507,g__15509,h__15511,i__15513,j__15515);
} else
{return f__15507.call(null,a__15497,b__15499,c__15501,d__15503,e__15505,f__15507,g__15509,h__15511,i__15513,j__15515);
}
} else
{var k__15517 = cljs.core._first.call(null,args__15516);
var args__15518 = cljs.core._rest.call(null,args__15516);
if((argc === 11))
{if(f__15507.cljs$lang$arity$11)
{return f__15507.cljs$lang$arity$11(a__15497,b__15499,c__15501,d__15503,e__15505,f__15507,g__15509,h__15511,i__15513,j__15515,k__15517);
} else
{return f__15507.call(null,a__15497,b__15499,c__15501,d__15503,e__15505,f__15507,g__15509,h__15511,i__15513,j__15515,k__15517);
}
} else
{var l__15519 = cljs.core._first.call(null,args__15518);
var args__15520 = cljs.core._rest.call(null,args__15518);
if((argc === 12))
{if(f__15507.cljs$lang$arity$12)
{return f__15507.cljs$lang$arity$12(a__15497,b__15499,c__15501,d__15503,e__15505,f__15507,g__15509,h__15511,i__15513,j__15515,k__15517,l__15519);
} else
{return f__15507.call(null,a__15497,b__15499,c__15501,d__15503,e__15505,f__15507,g__15509,h__15511,i__15513,j__15515,k__15517,l__15519);
}
} else
{var m__15521 = cljs.core._first.call(null,args__15520);
var args__15522 = cljs.core._rest.call(null,args__15520);
if((argc === 13))
{if(f__15507.cljs$lang$arity$13)
{return f__15507.cljs$lang$arity$13(a__15497,b__15499,c__15501,d__15503,e__15505,f__15507,g__15509,h__15511,i__15513,j__15515,k__15517,l__15519,m__15521);
} else
{return f__15507.call(null,a__15497,b__15499,c__15501,d__15503,e__15505,f__15507,g__15509,h__15511,i__15513,j__15515,k__15517,l__15519,m__15521);
}
} else
{var n__15523 = cljs.core._first.call(null,args__15522);
var args__15524 = cljs.core._rest.call(null,args__15522);
if((argc === 14))
{if(f__15507.cljs$lang$arity$14)
{return f__15507.cljs$lang$arity$14(a__15497,b__15499,c__15501,d__15503,e__15505,f__15507,g__15509,h__15511,i__15513,j__15515,k__15517,l__15519,m__15521,n__15523);
} else
{return f__15507.call(null,a__15497,b__15499,c__15501,d__15503,e__15505,f__15507,g__15509,h__15511,i__15513,j__15515,k__15517,l__15519,m__15521,n__15523);
}
} else
{var o__15525 = cljs.core._first.call(null,args__15524);
var args__15526 = cljs.core._rest.call(null,args__15524);
if((argc === 15))
{if(f__15507.cljs$lang$arity$15)
{return f__15507.cljs$lang$arity$15(a__15497,b__15499,c__15501,d__15503,e__15505,f__15507,g__15509,h__15511,i__15513,j__15515,k__15517,l__15519,m__15521,n__15523,o__15525);
} else
{return f__15507.call(null,a__15497,b__15499,c__15501,d__15503,e__15505,f__15507,g__15509,h__15511,i__15513,j__15515,k__15517,l__15519,m__15521,n__15523,o__15525);
}
} else
{var p__15527 = cljs.core._first.call(null,args__15526);
var args__15528 = cljs.core._rest.call(null,args__15526);
if((argc === 16))
{if(f__15507.cljs$lang$arity$16)
{return f__15507.cljs$lang$arity$16(a__15497,b__15499,c__15501,d__15503,e__15505,f__15507,g__15509,h__15511,i__15513,j__15515,k__15517,l__15519,m__15521,n__15523,o__15525,p__15527);
} else
{return f__15507.call(null,a__15497,b__15499,c__15501,d__15503,e__15505,f__15507,g__15509,h__15511,i__15513,j__15515,k__15517,l__15519,m__15521,n__15523,o__15525,p__15527);
}
} else
{var q__15529 = cljs.core._first.call(null,args__15528);
var args__15530 = cljs.core._rest.call(null,args__15528);
if((argc === 17))
{if(f__15507.cljs$lang$arity$17)
{return f__15507.cljs$lang$arity$17(a__15497,b__15499,c__15501,d__15503,e__15505,f__15507,g__15509,h__15511,i__15513,j__15515,k__15517,l__15519,m__15521,n__15523,o__15525,p__15527,q__15529);
} else
{return f__15507.call(null,a__15497,b__15499,c__15501,d__15503,e__15505,f__15507,g__15509,h__15511,i__15513,j__15515,k__15517,l__15519,m__15521,n__15523,o__15525,p__15527,q__15529);
}
} else
{var r__15531 = cljs.core._first.call(null,args__15530);
var args__15532 = cljs.core._rest.call(null,args__15530);
if((argc === 18))
{if(f__15507.cljs$lang$arity$18)
{return f__15507.cljs$lang$arity$18(a__15497,b__15499,c__15501,d__15503,e__15505,f__15507,g__15509,h__15511,i__15513,j__15515,k__15517,l__15519,m__15521,n__15523,o__15525,p__15527,q__15529,r__15531);
} else
{return f__15507.call(null,a__15497,b__15499,c__15501,d__15503,e__15505,f__15507,g__15509,h__15511,i__15513,j__15515,k__15517,l__15519,m__15521,n__15523,o__15525,p__15527,q__15529,r__15531);
}
} else
{var s__15533 = cljs.core._first.call(null,args__15532);
var args__15534 = cljs.core._rest.call(null,args__15532);
if((argc === 19))
{if(f__15507.cljs$lang$arity$19)
{return f__15507.cljs$lang$arity$19(a__15497,b__15499,c__15501,d__15503,e__15505,f__15507,g__15509,h__15511,i__15513,j__15515,k__15517,l__15519,m__15521,n__15523,o__15525,p__15527,q__15529,r__15531,s__15533);
} else
{return f__15507.call(null,a__15497,b__15499,c__15501,d__15503,e__15505,f__15507,g__15509,h__15511,i__15513,j__15515,k__15517,l__15519,m__15521,n__15523,o__15525,p__15527,q__15529,r__15531,s__15533);
}
} else
{var t__15535 = cljs.core._first.call(null,args__15534);
var args__15536 = cljs.core._rest.call(null,args__15534);
if((argc === 20))
{if(f__15507.cljs$lang$arity$20)
{return f__15507.cljs$lang$arity$20(a__15497,b__15499,c__15501,d__15503,e__15505,f__15507,g__15509,h__15511,i__15513,j__15515,k__15517,l__15519,m__15521,n__15523,o__15525,p__15527,q__15529,r__15531,s__15533,t__15535);
} else
{return f__15507.call(null,a__15497,b__15499,c__15501,d__15503,e__15505,f__15507,g__15509,h__15511,i__15513,j__15515,k__15517,l__15519,m__15521,n__15523,o__15525,p__15527,q__15529,r__15531,s__15533,t__15535);
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
var fixed_arity__15551 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__15552 = cljs.core.bounded_count.call(null,args,(fixed_arity__15551 + 1));
if((bc__15552 <= fixed_arity__15551))
{return cljs.core.apply_to.call(null,f,bc__15552,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__15553 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__15554 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__15555 = cljs.core.bounded_count.call(null,arglist__15553,(fixed_arity__15554 + 1));
if((bc__15555 <= fixed_arity__15554))
{return cljs.core.apply_to.call(null,f,bc__15555,arglist__15553);
} else
{return f.cljs$lang$applyTo(arglist__15553);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__15553));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__15556 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__15557 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__15558 = cljs.core.bounded_count.call(null,arglist__15556,(fixed_arity__15557 + 1));
if((bc__15558 <= fixed_arity__15557))
{return cljs.core.apply_to.call(null,f,bc__15558,arglist__15556);
} else
{return f.cljs$lang$applyTo(arglist__15556);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__15556));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__15559 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__15560 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__15561 = cljs.core.bounded_count.call(null,arglist__15559,(fixed_arity__15560 + 1));
if((bc__15561 <= fixed_arity__15560))
{return cljs.core.apply_to.call(null,f,bc__15561,arglist__15559);
} else
{return f.cljs$lang$applyTo(arglist__15559);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__15559));
}
});
var apply__6 = (function() { 
var G__15565__delegate = function (f,a,b,c,d,args){
var arglist__15562 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__15563 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__15564 = cljs.core.bounded_count.call(null,arglist__15562,(fixed_arity__15563 + 1));
if((bc__15564 <= fixed_arity__15563))
{return cljs.core.apply_to.call(null,f,bc__15564,arglist__15562);
} else
{return f.cljs$lang$applyTo(arglist__15562);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__15562));
}
};
var G__15565 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__15565__delegate.call(this, f, a, b, c, d, args);
};
G__15565.cljs$lang$maxFixedArity = 5;
G__15565.cljs$lang$applyTo = (function (arglist__15566){
var f = cljs.core.first(arglist__15566);
var a = cljs.core.first(cljs.core.next(arglist__15566));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15566)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15566))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15566)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15566)))));
return G__15565__delegate(f, a, b, c, d, args);
});
G__15565.cljs$lang$arity$variadic = G__15565__delegate;
return G__15565;
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
vary_meta.cljs$lang$applyTo = (function (arglist__15567){
var obj = cljs.core.first(arglist__15567);
var f = cljs.core.first(cljs.core.next(arglist__15567));
var args = cljs.core.rest(cljs.core.next(arglist__15567));
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
var G__15568__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__15568 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15568__delegate.call(this, x, y, more);
};
G__15568.cljs$lang$maxFixedArity = 2;
G__15568.cljs$lang$applyTo = (function (arglist__15569){
var x = cljs.core.first(arglist__15569);
var y = cljs.core.first(cljs.core.next(arglist__15569));
var more = cljs.core.rest(cljs.core.next(arglist__15569));
return G__15568__delegate(x, y, more);
});
G__15568.cljs$lang$arity$variadic = G__15568__delegate;
return G__15568;
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
var G__15570 = pred;
var G__15571 = cljs.core.next.call(null,coll);
pred = G__15570;
coll = G__15571;
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
{var or__3824__auto____15573 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____15573))
{return or__3824__auto____15573;
} else
{{
var G__15574 = pred;
var G__15575 = cljs.core.next.call(null,coll);
pred = G__15574;
coll = G__15575;
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
var G__15576 = null;
var G__15576__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__15576__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__15576__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__15576__3 = (function() { 
var G__15577__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__15577 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15577__delegate.call(this, x, y, zs);
};
G__15577.cljs$lang$maxFixedArity = 2;
G__15577.cljs$lang$applyTo = (function (arglist__15578){
var x = cljs.core.first(arglist__15578);
var y = cljs.core.first(cljs.core.next(arglist__15578));
var zs = cljs.core.rest(cljs.core.next(arglist__15578));
return G__15577__delegate(x, y, zs);
});
G__15577.cljs$lang$arity$variadic = G__15577__delegate;
return G__15577;
})()
;
G__15576 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__15576__0.call(this);
case 1:
return G__15576__1.call(this,x);
case 2:
return G__15576__2.call(this,x,y);
default:
return G__15576__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__15576.cljs$lang$maxFixedArity = 2;
G__15576.cljs$lang$applyTo = G__15576__3.cljs$lang$applyTo;
return G__15576;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__15579__delegate = function (args){
return x;
};
var G__15579 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15579__delegate.call(this, args);
};
G__15579.cljs$lang$maxFixedArity = 0;
G__15579.cljs$lang$applyTo = (function (arglist__15580){
var args = cljs.core.seq(arglist__15580);;
return G__15579__delegate(args);
});
G__15579.cljs$lang$arity$variadic = G__15579__delegate;
return G__15579;
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
var G__15587 = null;
var G__15587__0 = (function (){
return f.call(null,g.call(null));
});
var G__15587__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__15587__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__15587__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__15587__4 = (function() { 
var G__15588__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__15588 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15588__delegate.call(this, x, y, z, args);
};
G__15588.cljs$lang$maxFixedArity = 3;
G__15588.cljs$lang$applyTo = (function (arglist__15589){
var x = cljs.core.first(arglist__15589);
var y = cljs.core.first(cljs.core.next(arglist__15589));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15589)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15589)));
return G__15588__delegate(x, y, z, args);
});
G__15588.cljs$lang$arity$variadic = G__15588__delegate;
return G__15588;
})()
;
G__15587 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__15587__0.call(this);
case 1:
return G__15587__1.call(this,x);
case 2:
return G__15587__2.call(this,x,y);
case 3:
return G__15587__3.call(this,x,y,z);
default:
return G__15587__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__15587.cljs$lang$maxFixedArity = 3;
G__15587.cljs$lang$applyTo = G__15587__4.cljs$lang$applyTo;
return G__15587;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__15590 = null;
var G__15590__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__15590__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__15590__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__15590__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__15590__4 = (function() { 
var G__15591__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__15591 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15591__delegate.call(this, x, y, z, args);
};
G__15591.cljs$lang$maxFixedArity = 3;
G__15591.cljs$lang$applyTo = (function (arglist__15592){
var x = cljs.core.first(arglist__15592);
var y = cljs.core.first(cljs.core.next(arglist__15592));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15592)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15592)));
return G__15591__delegate(x, y, z, args);
});
G__15591.cljs$lang$arity$variadic = G__15591__delegate;
return G__15591;
})()
;
G__15590 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__15590__0.call(this);
case 1:
return G__15590__1.call(this,x);
case 2:
return G__15590__2.call(this,x,y);
case 3:
return G__15590__3.call(this,x,y,z);
default:
return G__15590__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__15590.cljs$lang$maxFixedArity = 3;
G__15590.cljs$lang$applyTo = G__15590__4.cljs$lang$applyTo;
return G__15590;
})()
});
var comp__4 = (function() { 
var G__15593__delegate = function (f1,f2,f3,fs){
var fs__15584 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__15594__delegate = function (args){
var ret__15585 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__15584),args);
var fs__15586 = cljs.core.next.call(null,fs__15584);
while(true){
if(fs__15586)
{{
var G__15595 = cljs.core.first.call(null,fs__15586).call(null,ret__15585);
var G__15596 = cljs.core.next.call(null,fs__15586);
ret__15585 = G__15595;
fs__15586 = G__15596;
continue;
}
} else
{return ret__15585;
}
break;
}
};
var G__15594 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15594__delegate.call(this, args);
};
G__15594.cljs$lang$maxFixedArity = 0;
G__15594.cljs$lang$applyTo = (function (arglist__15597){
var args = cljs.core.seq(arglist__15597);;
return G__15594__delegate(args);
});
G__15594.cljs$lang$arity$variadic = G__15594__delegate;
return G__15594;
})()
;
};
var G__15593 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15593__delegate.call(this, f1, f2, f3, fs);
};
G__15593.cljs$lang$maxFixedArity = 3;
G__15593.cljs$lang$applyTo = (function (arglist__15598){
var f1 = cljs.core.first(arglist__15598);
var f2 = cljs.core.first(cljs.core.next(arglist__15598));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15598)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15598)));
return G__15593__delegate(f1, f2, f3, fs);
});
G__15593.cljs$lang$arity$variadic = G__15593__delegate;
return G__15593;
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
var G__15599__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__15599 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15599__delegate.call(this, args);
};
G__15599.cljs$lang$maxFixedArity = 0;
G__15599.cljs$lang$applyTo = (function (arglist__15600){
var args = cljs.core.seq(arglist__15600);;
return G__15599__delegate(args);
});
G__15599.cljs$lang$arity$variadic = G__15599__delegate;
return G__15599;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__15601__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__15601 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15601__delegate.call(this, args);
};
G__15601.cljs$lang$maxFixedArity = 0;
G__15601.cljs$lang$applyTo = (function (arglist__15602){
var args = cljs.core.seq(arglist__15602);;
return G__15601__delegate(args);
});
G__15601.cljs$lang$arity$variadic = G__15601__delegate;
return G__15601;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__15603__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__15603 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15603__delegate.call(this, args);
};
G__15603.cljs$lang$maxFixedArity = 0;
G__15603.cljs$lang$applyTo = (function (arglist__15604){
var args = cljs.core.seq(arglist__15604);;
return G__15603__delegate(args);
});
G__15603.cljs$lang$arity$variadic = G__15603__delegate;
return G__15603;
})()
;
});
var partial__5 = (function() { 
var G__15605__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__15606__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__15606 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15606__delegate.call(this, args);
};
G__15606.cljs$lang$maxFixedArity = 0;
G__15606.cljs$lang$applyTo = (function (arglist__15607){
var args = cljs.core.seq(arglist__15607);;
return G__15606__delegate(args);
});
G__15606.cljs$lang$arity$variadic = G__15606__delegate;
return G__15606;
})()
;
};
var G__15605 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__15605__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__15605.cljs$lang$maxFixedArity = 4;
G__15605.cljs$lang$applyTo = (function (arglist__15608){
var f = cljs.core.first(arglist__15608);
var arg1 = cljs.core.first(cljs.core.next(arglist__15608));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15608)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15608))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15608))));
return G__15605__delegate(f, arg1, arg2, arg3, more);
});
G__15605.cljs$lang$arity$variadic = G__15605__delegate;
return G__15605;
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
var G__15609 = null;
var G__15609__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__15609__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__15609__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__15609__4 = (function() { 
var G__15610__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__15610 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15610__delegate.call(this, a, b, c, ds);
};
G__15610.cljs$lang$maxFixedArity = 3;
G__15610.cljs$lang$applyTo = (function (arglist__15611){
var a = cljs.core.first(arglist__15611);
var b = cljs.core.first(cljs.core.next(arglist__15611));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15611)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15611)));
return G__15610__delegate(a, b, c, ds);
});
G__15610.cljs$lang$arity$variadic = G__15610__delegate;
return G__15610;
})()
;
G__15609 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__15609__1.call(this,a);
case 2:
return G__15609__2.call(this,a,b);
case 3:
return G__15609__3.call(this,a,b,c);
default:
return G__15609__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__15609.cljs$lang$maxFixedArity = 3;
G__15609.cljs$lang$applyTo = G__15609__4.cljs$lang$applyTo;
return G__15609;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__15612 = null;
var G__15612__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__15612__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__15612__4 = (function() { 
var G__15613__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__15613 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15613__delegate.call(this, a, b, c, ds);
};
G__15613.cljs$lang$maxFixedArity = 3;
G__15613.cljs$lang$applyTo = (function (arglist__15614){
var a = cljs.core.first(arglist__15614);
var b = cljs.core.first(cljs.core.next(arglist__15614));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15614)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15614)));
return G__15613__delegate(a, b, c, ds);
});
G__15613.cljs$lang$arity$variadic = G__15613__delegate;
return G__15613;
})()
;
G__15612 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__15612__2.call(this,a,b);
case 3:
return G__15612__3.call(this,a,b,c);
default:
return G__15612__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__15612.cljs$lang$maxFixedArity = 3;
G__15612.cljs$lang$applyTo = G__15612__4.cljs$lang$applyTo;
return G__15612;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__15615 = null;
var G__15615__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__15615__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__15615__4 = (function() { 
var G__15616__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__15616 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15616__delegate.call(this, a, b, c, ds);
};
G__15616.cljs$lang$maxFixedArity = 3;
G__15616.cljs$lang$applyTo = (function (arglist__15617){
var a = cljs.core.first(arglist__15617);
var b = cljs.core.first(cljs.core.next(arglist__15617));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15617)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15617)));
return G__15616__delegate(a, b, c, ds);
});
G__15616.cljs$lang$arity$variadic = G__15616__delegate;
return G__15616;
})()
;
G__15615 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__15615__2.call(this,a,b);
case 3:
return G__15615__3.call(this,a,b,c);
default:
return G__15615__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__15615.cljs$lang$maxFixedArity = 3;
G__15615.cljs$lang$applyTo = G__15615__4.cljs$lang$applyTo;
return G__15615;
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
var mapi__15633 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____15641 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____15641)
{var s__15642 = temp__3974__auto____15641;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15642))
{var c__15643 = cljs.core.chunk_first.call(null,s__15642);
var size__15644 = cljs.core.count.call(null,c__15643);
var b__15645 = cljs.core.chunk_buffer.call(null,size__15644);
var n__2616__auto____15646 = size__15644;
var i__15647 = 0;
while(true){
if((i__15647 < n__2616__auto____15646))
{cljs.core.chunk_append.call(null,b__15645,f.call(null,(idx + i__15647),cljs.core._nth.call(null,c__15643,i__15647)));
{
var G__15648 = (i__15647 + 1);
i__15647 = G__15648;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15645),mapi.call(null,(idx + size__15644),cljs.core.chunk_rest.call(null,s__15642)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__15642)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__15642)));
}
} else
{return null;
}
}),null));
});
return mapi__15633.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____15658 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____15658)
{var s__15659 = temp__3974__auto____15658;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15659))
{var c__15660 = cljs.core.chunk_first.call(null,s__15659);
var size__15661 = cljs.core.count.call(null,c__15660);
var b__15662 = cljs.core.chunk_buffer.call(null,size__15661);
var n__2616__auto____15663 = size__15661;
var i__15664 = 0;
while(true){
if((i__15664 < n__2616__auto____15663))
{var x__15665 = f.call(null,cljs.core._nth.call(null,c__15660,i__15664));
if((x__15665 == null))
{} else
{cljs.core.chunk_append.call(null,b__15662,x__15665);
}
{
var G__15667 = (i__15664 + 1);
i__15664 = G__15667;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15662),keep.call(null,f,cljs.core.chunk_rest.call(null,s__15659)));
} else
{var x__15666 = f.call(null,cljs.core.first.call(null,s__15659));
if((x__15666 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__15659));
} else
{return cljs.core.cons.call(null,x__15666,keep.call(null,f,cljs.core.rest.call(null,s__15659)));
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
var keepi__15693 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____15703 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____15703)
{var s__15704 = temp__3974__auto____15703;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15704))
{var c__15705 = cljs.core.chunk_first.call(null,s__15704);
var size__15706 = cljs.core.count.call(null,c__15705);
var b__15707 = cljs.core.chunk_buffer.call(null,size__15706);
var n__2616__auto____15708 = size__15706;
var i__15709 = 0;
while(true){
if((i__15709 < n__2616__auto____15708))
{var x__15710 = f.call(null,(idx + i__15709),cljs.core._nth.call(null,c__15705,i__15709));
if((x__15710 == null))
{} else
{cljs.core.chunk_append.call(null,b__15707,x__15710);
}
{
var G__15712 = (i__15709 + 1);
i__15709 = G__15712;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15707),keepi.call(null,(idx + size__15706),cljs.core.chunk_rest.call(null,s__15704)));
} else
{var x__15711 = f.call(null,idx,cljs.core.first.call(null,s__15704));
if((x__15711 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__15704));
} else
{return cljs.core.cons.call(null,x__15711,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__15704)));
}
}
} else
{return null;
}
}),null));
});
return keepi__15693.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____15798 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____15798))
{return p.call(null,y);
} else
{return and__3822__auto____15798;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____15799 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____15799))
{var and__3822__auto____15800 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____15800))
{return p.call(null,z);
} else
{return and__3822__auto____15800;
}
} else
{return and__3822__auto____15799;
}
})());
});
var ep1__4 = (function() { 
var G__15869__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____15801 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____15801))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____15801;
}
})());
};
var G__15869 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15869__delegate.call(this, x, y, z, args);
};
G__15869.cljs$lang$maxFixedArity = 3;
G__15869.cljs$lang$applyTo = (function (arglist__15870){
var x = cljs.core.first(arglist__15870);
var y = cljs.core.first(cljs.core.next(arglist__15870));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15870)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15870)));
return G__15869__delegate(x, y, z, args);
});
G__15869.cljs$lang$arity$variadic = G__15869__delegate;
return G__15869;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____15813 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____15813))
{return p2.call(null,x);
} else
{return and__3822__auto____15813;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____15814 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____15814))
{var and__3822__auto____15815 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____15815))
{var and__3822__auto____15816 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____15816))
{return p2.call(null,y);
} else
{return and__3822__auto____15816;
}
} else
{return and__3822__auto____15815;
}
} else
{return and__3822__auto____15814;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____15817 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____15817))
{var and__3822__auto____15818 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____15818))
{var and__3822__auto____15819 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____15819))
{var and__3822__auto____15820 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____15820))
{var and__3822__auto____15821 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____15821))
{return p2.call(null,z);
} else
{return and__3822__auto____15821;
}
} else
{return and__3822__auto____15820;
}
} else
{return and__3822__auto____15819;
}
} else
{return and__3822__auto____15818;
}
} else
{return and__3822__auto____15817;
}
})());
});
var ep2__4 = (function() { 
var G__15871__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____15822 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____15822))
{return cljs.core.every_QMARK_.call(null,(function (p1__15668_SHARP_){
var and__3822__auto____15823 = p1.call(null,p1__15668_SHARP_);
if(cljs.core.truth_(and__3822__auto____15823))
{return p2.call(null,p1__15668_SHARP_);
} else
{return and__3822__auto____15823;
}
}),args);
} else
{return and__3822__auto____15822;
}
})());
};
var G__15871 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15871__delegate.call(this, x, y, z, args);
};
G__15871.cljs$lang$maxFixedArity = 3;
G__15871.cljs$lang$applyTo = (function (arglist__15872){
var x = cljs.core.first(arglist__15872);
var y = cljs.core.first(cljs.core.next(arglist__15872));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15872)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15872)));
return G__15871__delegate(x, y, z, args);
});
G__15871.cljs$lang$arity$variadic = G__15871__delegate;
return G__15871;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____15842 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____15842))
{var and__3822__auto____15843 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____15843))
{return p3.call(null,x);
} else
{return and__3822__auto____15843;
}
} else
{return and__3822__auto____15842;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____15844 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____15844))
{var and__3822__auto____15845 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____15845))
{var and__3822__auto____15846 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____15846))
{var and__3822__auto____15847 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____15847))
{var and__3822__auto____15848 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____15848))
{return p3.call(null,y);
} else
{return and__3822__auto____15848;
}
} else
{return and__3822__auto____15847;
}
} else
{return and__3822__auto____15846;
}
} else
{return and__3822__auto____15845;
}
} else
{return and__3822__auto____15844;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____15849 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____15849))
{var and__3822__auto____15850 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____15850))
{var and__3822__auto____15851 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____15851))
{var and__3822__auto____15852 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____15852))
{var and__3822__auto____15853 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____15853))
{var and__3822__auto____15854 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____15854))
{var and__3822__auto____15855 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____15855))
{var and__3822__auto____15856 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____15856))
{return p3.call(null,z);
} else
{return and__3822__auto____15856;
}
} else
{return and__3822__auto____15855;
}
} else
{return and__3822__auto____15854;
}
} else
{return and__3822__auto____15853;
}
} else
{return and__3822__auto____15852;
}
} else
{return and__3822__auto____15851;
}
} else
{return and__3822__auto____15850;
}
} else
{return and__3822__auto____15849;
}
})());
});
var ep3__4 = (function() { 
var G__15873__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____15857 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____15857))
{return cljs.core.every_QMARK_.call(null,(function (p1__15669_SHARP_){
var and__3822__auto____15858 = p1.call(null,p1__15669_SHARP_);
if(cljs.core.truth_(and__3822__auto____15858))
{var and__3822__auto____15859 = p2.call(null,p1__15669_SHARP_);
if(cljs.core.truth_(and__3822__auto____15859))
{return p3.call(null,p1__15669_SHARP_);
} else
{return and__3822__auto____15859;
}
} else
{return and__3822__auto____15858;
}
}),args);
} else
{return and__3822__auto____15857;
}
})());
};
var G__15873 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15873__delegate.call(this, x, y, z, args);
};
G__15873.cljs$lang$maxFixedArity = 3;
G__15873.cljs$lang$applyTo = (function (arglist__15874){
var x = cljs.core.first(arglist__15874);
var y = cljs.core.first(cljs.core.next(arglist__15874));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15874)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15874)));
return G__15873__delegate(x, y, z, args);
});
G__15873.cljs$lang$arity$variadic = G__15873__delegate;
return G__15873;
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
var G__15875__delegate = function (p1,p2,p3,ps){
var ps__15860 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__15670_SHARP_){
return p1__15670_SHARP_.call(null,x);
}),ps__15860);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__15671_SHARP_){
var and__3822__auto____15865 = p1__15671_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____15865))
{return p1__15671_SHARP_.call(null,y);
} else
{return and__3822__auto____15865;
}
}),ps__15860);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__15672_SHARP_){
var and__3822__auto____15866 = p1__15672_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____15866))
{var and__3822__auto____15867 = p1__15672_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____15867))
{return p1__15672_SHARP_.call(null,z);
} else
{return and__3822__auto____15867;
}
} else
{return and__3822__auto____15866;
}
}),ps__15860);
});
var epn__4 = (function() { 
var G__15876__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____15868 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____15868))
{return cljs.core.every_QMARK_.call(null,(function (p1__15673_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__15673_SHARP_,args);
}),ps__15860);
} else
{return and__3822__auto____15868;
}
})());
};
var G__15876 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15876__delegate.call(this, x, y, z, args);
};
G__15876.cljs$lang$maxFixedArity = 3;
G__15876.cljs$lang$applyTo = (function (arglist__15877){
var x = cljs.core.first(arglist__15877);
var y = cljs.core.first(cljs.core.next(arglist__15877));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15877)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15877)));
return G__15876__delegate(x, y, z, args);
});
G__15876.cljs$lang$arity$variadic = G__15876__delegate;
return G__15876;
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
var G__15875 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15875__delegate.call(this, p1, p2, p3, ps);
};
G__15875.cljs$lang$maxFixedArity = 3;
G__15875.cljs$lang$applyTo = (function (arglist__15878){
var p1 = cljs.core.first(arglist__15878);
var p2 = cljs.core.first(cljs.core.next(arglist__15878));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15878)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15878)));
return G__15875__delegate(p1, p2, p3, ps);
});
G__15875.cljs$lang$arity$variadic = G__15875__delegate;
return G__15875;
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
var or__3824__auto____15959 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____15959))
{return or__3824__auto____15959;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____15960 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____15960))
{return or__3824__auto____15960;
} else
{var or__3824__auto____15961 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____15961))
{return or__3824__auto____15961;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__16030__delegate = function (x,y,z,args){
var or__3824__auto____15962 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____15962))
{return or__3824__auto____15962;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__16030 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__16030__delegate.call(this, x, y, z, args);
};
G__16030.cljs$lang$maxFixedArity = 3;
G__16030.cljs$lang$applyTo = (function (arglist__16031){
var x = cljs.core.first(arglist__16031);
var y = cljs.core.first(cljs.core.next(arglist__16031));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__16031)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__16031)));
return G__16030__delegate(x, y, z, args);
});
G__16030.cljs$lang$arity$variadic = G__16030__delegate;
return G__16030;
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
var or__3824__auto____15974 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____15974))
{return or__3824__auto____15974;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____15975 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____15975))
{return or__3824__auto____15975;
} else
{var or__3824__auto____15976 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____15976))
{return or__3824__auto____15976;
} else
{var or__3824__auto____15977 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____15977))
{return or__3824__auto____15977;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____15978 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____15978))
{return or__3824__auto____15978;
} else
{var or__3824__auto____15979 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____15979))
{return or__3824__auto____15979;
} else
{var or__3824__auto____15980 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____15980))
{return or__3824__auto____15980;
} else
{var or__3824__auto____15981 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____15981))
{return or__3824__auto____15981;
} else
{var or__3824__auto____15982 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____15982))
{return or__3824__auto____15982;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__16032__delegate = function (x,y,z,args){
var or__3824__auto____15983 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____15983))
{return or__3824__auto____15983;
} else
{return cljs.core.some.call(null,(function (p1__15713_SHARP_){
var or__3824__auto____15984 = p1.call(null,p1__15713_SHARP_);
if(cljs.core.truth_(or__3824__auto____15984))
{return or__3824__auto____15984;
} else
{return p2.call(null,p1__15713_SHARP_);
}
}),args);
}
};
var G__16032 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__16032__delegate.call(this, x, y, z, args);
};
G__16032.cljs$lang$maxFixedArity = 3;
G__16032.cljs$lang$applyTo = (function (arglist__16033){
var x = cljs.core.first(arglist__16033);
var y = cljs.core.first(cljs.core.next(arglist__16033));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__16033)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__16033)));
return G__16032__delegate(x, y, z, args);
});
G__16032.cljs$lang$arity$variadic = G__16032__delegate;
return G__16032;
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
var or__3824__auto____16003 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____16003))
{return or__3824__auto____16003;
} else
{var or__3824__auto____16004 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____16004))
{return or__3824__auto____16004;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____16005 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____16005))
{return or__3824__auto____16005;
} else
{var or__3824__auto____16006 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____16006))
{return or__3824__auto____16006;
} else
{var or__3824__auto____16007 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____16007))
{return or__3824__auto____16007;
} else
{var or__3824__auto____16008 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____16008))
{return or__3824__auto____16008;
} else
{var or__3824__auto____16009 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____16009))
{return or__3824__auto____16009;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____16010 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____16010))
{return or__3824__auto____16010;
} else
{var or__3824__auto____16011 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____16011))
{return or__3824__auto____16011;
} else
{var or__3824__auto____16012 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____16012))
{return or__3824__auto____16012;
} else
{var or__3824__auto____16013 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____16013))
{return or__3824__auto____16013;
} else
{var or__3824__auto____16014 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____16014))
{return or__3824__auto____16014;
} else
{var or__3824__auto____16015 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____16015))
{return or__3824__auto____16015;
} else
{var or__3824__auto____16016 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____16016))
{return or__3824__auto____16016;
} else
{var or__3824__auto____16017 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____16017))
{return or__3824__auto____16017;
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
var G__16034__delegate = function (x,y,z,args){
var or__3824__auto____16018 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____16018))
{return or__3824__auto____16018;
} else
{return cljs.core.some.call(null,(function (p1__15714_SHARP_){
var or__3824__auto____16019 = p1.call(null,p1__15714_SHARP_);
if(cljs.core.truth_(or__3824__auto____16019))
{return or__3824__auto____16019;
} else
{var or__3824__auto____16020 = p2.call(null,p1__15714_SHARP_);
if(cljs.core.truth_(or__3824__auto____16020))
{return or__3824__auto____16020;
} else
{return p3.call(null,p1__15714_SHARP_);
}
}
}),args);
}
};
var G__16034 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__16034__delegate.call(this, x, y, z, args);
};
G__16034.cljs$lang$maxFixedArity = 3;
G__16034.cljs$lang$applyTo = (function (arglist__16035){
var x = cljs.core.first(arglist__16035);
var y = cljs.core.first(cljs.core.next(arglist__16035));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__16035)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__16035)));
return G__16034__delegate(x, y, z, args);
});
G__16034.cljs$lang$arity$variadic = G__16034__delegate;
return G__16034;
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
var G__16036__delegate = function (p1,p2,p3,ps){
var ps__16021 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__15715_SHARP_){
return p1__15715_SHARP_.call(null,x);
}),ps__16021);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__15716_SHARP_){
var or__3824__auto____16026 = p1__15716_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____16026))
{return or__3824__auto____16026;
} else
{return p1__15716_SHARP_.call(null,y);
}
}),ps__16021);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__15717_SHARP_){
var or__3824__auto____16027 = p1__15717_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____16027))
{return or__3824__auto____16027;
} else
{var or__3824__auto____16028 = p1__15717_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____16028))
{return or__3824__auto____16028;
} else
{return p1__15717_SHARP_.call(null,z);
}
}
}),ps__16021);
});
var spn__4 = (function() { 
var G__16037__delegate = function (x,y,z,args){
var or__3824__auto____16029 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____16029))
{return or__3824__auto____16029;
} else
{return cljs.core.some.call(null,(function (p1__15718_SHARP_){
return cljs.core.some.call(null,p1__15718_SHARP_,args);
}),ps__16021);
}
};
var G__16037 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__16037__delegate.call(this, x, y, z, args);
};
G__16037.cljs$lang$maxFixedArity = 3;
G__16037.cljs$lang$applyTo = (function (arglist__16038){
var x = cljs.core.first(arglist__16038);
var y = cljs.core.first(cljs.core.next(arglist__16038));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__16038)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__16038)));
return G__16037__delegate(x, y, z, args);
});
G__16037.cljs$lang$arity$variadic = G__16037__delegate;
return G__16037;
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
var G__16036 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__16036__delegate.call(this, p1, p2, p3, ps);
};
G__16036.cljs$lang$maxFixedArity = 3;
G__16036.cljs$lang$applyTo = (function (arglist__16039){
var p1 = cljs.core.first(arglist__16039);
var p2 = cljs.core.first(cljs.core.next(arglist__16039));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__16039)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__16039)));
return G__16036__delegate(p1, p2, p3, ps);
});
G__16036.cljs$lang$arity$variadic = G__16036__delegate;
return G__16036;
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
var temp__3974__auto____16058 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____16058)
{var s__16059 = temp__3974__auto____16058;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16059))
{var c__16060 = cljs.core.chunk_first.call(null,s__16059);
var size__16061 = cljs.core.count.call(null,c__16060);
var b__16062 = cljs.core.chunk_buffer.call(null,size__16061);
var n__2616__auto____16063 = size__16061;
var i__16064 = 0;
while(true){
if((i__16064 < n__2616__auto____16063))
{cljs.core.chunk_append.call(null,b__16062,f.call(null,cljs.core._nth.call(null,c__16060,i__16064)));
{
var G__16076 = (i__16064 + 1);
i__16064 = G__16076;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16062),map.call(null,f,cljs.core.chunk_rest.call(null,s__16059)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__16059)),map.call(null,f,cljs.core.rest.call(null,s__16059)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__16065 = cljs.core.seq.call(null,c1);
var s2__16066 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____16067 = s1__16065;
if(and__3822__auto____16067)
{return s2__16066;
} else
{return and__3822__auto____16067;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__16065),cljs.core.first.call(null,s2__16066)),map.call(null,f,cljs.core.rest.call(null,s1__16065),cljs.core.rest.call(null,s2__16066)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__16068 = cljs.core.seq.call(null,c1);
var s2__16069 = cljs.core.seq.call(null,c2);
var s3__16070 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____16071 = s1__16068;
if(and__3822__auto____16071)
{var and__3822__auto____16072 = s2__16069;
if(and__3822__auto____16072)
{return s3__16070;
} else
{return and__3822__auto____16072;
}
} else
{return and__3822__auto____16071;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__16068),cljs.core.first.call(null,s2__16069),cljs.core.first.call(null,s3__16070)),map.call(null,f,cljs.core.rest.call(null,s1__16068),cljs.core.rest.call(null,s2__16069),cljs.core.rest.call(null,s3__16070)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__16077__delegate = function (f,c1,c2,c3,colls){
var step__16075 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__16074 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__16074))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__16074),step.call(null,map.call(null,cljs.core.rest,ss__16074)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__15879_SHARP_){
return cljs.core.apply.call(null,f,p1__15879_SHARP_);
}),step__16075.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__16077 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__16077__delegate.call(this, f, c1, c2, c3, colls);
};
G__16077.cljs$lang$maxFixedArity = 4;
G__16077.cljs$lang$applyTo = (function (arglist__16078){
var f = cljs.core.first(arglist__16078);
var c1 = cljs.core.first(cljs.core.next(arglist__16078));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__16078)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__16078))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__16078))));
return G__16077__delegate(f, c1, c2, c3, colls);
});
G__16077.cljs$lang$arity$variadic = G__16077__delegate;
return G__16077;
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
{var temp__3974__auto____16081 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____16081)
{var s__16082 = temp__3974__auto____16081;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__16082),take.call(null,(n - 1),cljs.core.rest.call(null,s__16082)));
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
var step__16088 = (function (n,coll){
while(true){
var s__16086 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____16087 = (n > 0);
if(and__3822__auto____16087)
{return s__16086;
} else
{return and__3822__auto____16087;
}
})()))
{{
var G__16089 = (n - 1);
var G__16090 = cljs.core.rest.call(null,s__16086);
n = G__16089;
coll = G__16090;
continue;
}
} else
{return s__16086;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__16088.call(null,n,coll);
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
var s__16093 = cljs.core.seq.call(null,coll);
var lead__16094 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__16094)
{{
var G__16095 = cljs.core.next.call(null,s__16093);
var G__16096 = cljs.core.next.call(null,lead__16094);
s__16093 = G__16095;
lead__16094 = G__16096;
continue;
}
} else
{return s__16093;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__16102 = (function (pred,coll){
while(true){
var s__16100 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____16101 = s__16100;
if(and__3822__auto____16101)
{return pred.call(null,cljs.core.first.call(null,s__16100));
} else
{return and__3822__auto____16101;
}
})()))
{{
var G__16103 = pred;
var G__16104 = cljs.core.rest.call(null,s__16100);
pred = G__16103;
coll = G__16104;
continue;
}
} else
{return s__16100;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__16102.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____16107 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____16107)
{var s__16108 = temp__3974__auto____16107;
return cljs.core.concat.call(null,s__16108,cycle.call(null,s__16108));
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
var s1__16113 = cljs.core.seq.call(null,c1);
var s2__16114 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____16115 = s1__16113;
if(and__3822__auto____16115)
{return s2__16114;
} else
{return and__3822__auto____16115;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__16113),cljs.core.cons.call(null,cljs.core.first.call(null,s2__16114),interleave.call(null,cljs.core.rest.call(null,s1__16113),cljs.core.rest.call(null,s2__16114))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__16117__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__16116 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__16116))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__16116),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__16116)));
} else
{return null;
}
}),null));
};
var G__16117 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__16117__delegate.call(this, c1, c2, colls);
};
G__16117.cljs$lang$maxFixedArity = 2;
G__16117.cljs$lang$applyTo = (function (arglist__16118){
var c1 = cljs.core.first(arglist__16118);
var c2 = cljs.core.first(cljs.core.next(arglist__16118));
var colls = cljs.core.rest(cljs.core.next(arglist__16118));
return G__16117__delegate(c1, c2, colls);
});
G__16117.cljs$lang$arity$variadic = G__16117__delegate;
return G__16117;
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
var cat__16128 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____16126 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____16126)
{var coll__16127 = temp__3971__auto____16126;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__16127),cat.call(null,cljs.core.rest.call(null,coll__16127),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__16128.call(null,null,colls);
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
var G__16129__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__16129 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__16129__delegate.call(this, f, coll, colls);
};
G__16129.cljs$lang$maxFixedArity = 2;
G__16129.cljs$lang$applyTo = (function (arglist__16130){
var f = cljs.core.first(arglist__16130);
var coll = cljs.core.first(cljs.core.next(arglist__16130));
var colls = cljs.core.rest(cljs.core.next(arglist__16130));
return G__16129__delegate(f, coll, colls);
});
G__16129.cljs$lang$arity$variadic = G__16129__delegate;
return G__16129;
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
var temp__3974__auto____16140 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____16140)
{var s__16141 = temp__3974__auto____16140;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16141))
{var c__16142 = cljs.core.chunk_first.call(null,s__16141);
var size__16143 = cljs.core.count.call(null,c__16142);
var b__16144 = cljs.core.chunk_buffer.call(null,size__16143);
var n__2616__auto____16145 = size__16143;
var i__16146 = 0;
while(true){
if((i__16146 < n__2616__auto____16145))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__16142,i__16146))))
{cljs.core.chunk_append.call(null,b__16144,cljs.core._nth.call(null,c__16142,i__16146));
} else
{}
{
var G__16149 = (i__16146 + 1);
i__16146 = G__16149;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16144),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__16141)));
} else
{var f__16147 = cljs.core.first.call(null,s__16141);
var r__16148 = cljs.core.rest.call(null,s__16141);
if(cljs.core.truth_(pred.call(null,f__16147)))
{return cljs.core.cons.call(null,f__16147,filter.call(null,pred,r__16148));
} else
{return filter.call(null,pred,r__16148);
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
var walk__16152 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__16152.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__16150_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__16150_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__16156__16157 = to;
if(G__16156__16157)
{if((function (){var or__3824__auto____16158 = (G__16156__16157.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____16158)
{return or__3824__auto____16158;
} else
{return G__16156__16157.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__16156__16157.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__16156__16157);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__16156__16157);
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
var G__16159__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__16159 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__16159__delegate.call(this, f, c1, c2, c3, colls);
};
G__16159.cljs$lang$maxFixedArity = 4;
G__16159.cljs$lang$applyTo = (function (arglist__16160){
var f = cljs.core.first(arglist__16160);
var c1 = cljs.core.first(cljs.core.next(arglist__16160));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__16160)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__16160))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__16160))));
return G__16159__delegate(f, c1, c2, c3, colls);
});
G__16159.cljs$lang$arity$variadic = G__16159__delegate;
return G__16159;
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
var temp__3974__auto____16167 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____16167)
{var s__16168 = temp__3974__auto____16167;
var p__16169 = cljs.core.take.call(null,n,s__16168);
if((n === cljs.core.count.call(null,p__16169)))
{return cljs.core.cons.call(null,p__16169,partition.call(null,n,step,cljs.core.drop.call(null,step,s__16168)));
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
var temp__3974__auto____16170 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____16170)
{var s__16171 = temp__3974__auto____16170;
var p__16172 = cljs.core.take.call(null,n,s__16171);
if((n === cljs.core.count.call(null,p__16172)))
{return cljs.core.cons.call(null,p__16172,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__16171)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__16172,pad)));
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
var sentinel__16177 = cljs.core.lookup_sentinel;
var m__16178 = m;
var ks__16179 = cljs.core.seq.call(null,ks);
while(true){
if(ks__16179)
{var m__16180 = cljs.core._lookup.call(null,m__16178,cljs.core.first.call(null,ks__16179),sentinel__16177);
if((sentinel__16177 === m__16180))
{return not_found;
} else
{{
var G__16181 = sentinel__16177;
var G__16182 = m__16180;
var G__16183 = cljs.core.next.call(null,ks__16179);
sentinel__16177 = G__16181;
m__16178 = G__16182;
ks__16179 = G__16183;
continue;
}
}
} else
{return m__16178;
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
cljs.core.assoc_in = (function assoc_in(m,p__16184,v){
var vec__16189__16190 = p__16184;
var k__16191 = cljs.core.nth.call(null,vec__16189__16190,0,null);
var ks__16192 = cljs.core.nthnext.call(null,vec__16189__16190,1);
if(cljs.core.truth_(ks__16192))
{return cljs.core.assoc.call(null,m,k__16191,assoc_in.call(null,cljs.core._lookup.call(null,m,k__16191,null),ks__16192,v));
} else
{return cljs.core.assoc.call(null,m,k__16191,v);
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
var update_in__delegate = function (m,p__16193,f,args){
var vec__16198__16199 = p__16193;
var k__16200 = cljs.core.nth.call(null,vec__16198__16199,0,null);
var ks__16201 = cljs.core.nthnext.call(null,vec__16198__16199,1);
if(cljs.core.truth_(ks__16201))
{return cljs.core.assoc.call(null,m,k__16200,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__16200,null),ks__16201,f,args));
} else
{return cljs.core.assoc.call(null,m,k__16200,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__16200,null),args));
}
};
var update_in = function (m,p__16193,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__16193, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__16202){
var m = cljs.core.first(arglist__16202);
var p__16193 = cljs.core.first(cljs.core.next(arglist__16202));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__16202)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__16202)));
return update_in__delegate(m, p__16193, f, args);
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
var this__16205 = this;
var h__2281__auto____16206 = this__16205.__hash;
if(!((h__2281__auto____16206 == null)))
{return h__2281__auto____16206;
} else
{var h__2281__auto____16207 = cljs.core.hash_coll.call(null,coll);
this__16205.__hash = h__2281__auto____16207;
return h__2281__auto____16207;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__16208 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__16209 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__16210 = this;
var new_array__16211 = this__16210.array.slice();
(new_array__16211[k] = v);
return (new cljs.core.Vector(this__16210.meta,new_array__16211,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__16242 = null;
var G__16242__2 = (function (this_sym16212,k){
var this__16214 = this;
var this_sym16212__16215 = this;
var coll__16216 = this_sym16212__16215;
return coll__16216.cljs$core$ILookup$_lookup$arity$2(coll__16216,k);
});
var G__16242__3 = (function (this_sym16213,k,not_found){
var this__16214 = this;
var this_sym16213__16217 = this;
var coll__16218 = this_sym16213__16217;
return coll__16218.cljs$core$ILookup$_lookup$arity$3(coll__16218,k,not_found);
});
G__16242 = function(this_sym16213,k,not_found){
switch(arguments.length){
case 2:
return G__16242__2.call(this,this_sym16213,k);
case 3:
return G__16242__3.call(this,this_sym16213,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16242;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym16203,args16204){
var this__16219 = this;
return this_sym16203.call.apply(this_sym16203,[this_sym16203].concat(args16204.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__16220 = this;
var new_array__16221 = this__16220.array.slice();
new_array__16221.push(o);
return (new cljs.core.Vector(this__16220.meta,new_array__16221,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__16222 = this;
var this__16223 = this;
return cljs.core.pr_str.call(null,this__16223);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__16224 = this;
return cljs.core.ci_reduce.call(null,this__16224.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__16225 = this;
return cljs.core.ci_reduce.call(null,this__16225.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__16226 = this;
if((this__16226.array.length > 0))
{var vector_seq__16227 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__16226.array.length))
{return cljs.core.cons.call(null,(this__16226.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__16227.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__16228 = this;
return this__16228.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__16229 = this;
var count__16230 = this__16229.array.length;
if((count__16230 > 0))
{return (this__16229.array[(count__16230 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__16231 = this;
if((this__16231.array.length > 0))
{var new_array__16232 = this__16231.array.slice();
new_array__16232.pop();
return (new cljs.core.Vector(this__16231.meta,new_array__16232,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__16233 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__16234 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__16235 = this;
return (new cljs.core.Vector(meta,this__16235.array,this__16235.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__16236 = this;
return this__16236.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__16237 = this;
if((function (){var and__3822__auto____16238 = (0 <= n);
if(and__3822__auto____16238)
{return (n < this__16237.array.length);
} else
{return and__3822__auto____16238;
}
})())
{return (this__16237.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__16239 = this;
if((function (){var and__3822__auto____16240 = (0 <= n);
if(and__3822__auto____16240)
{return (n < this__16239.array.length);
} else
{return and__3822__auto____16240;
}
})())
{return (this__16239.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__16241 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__16241.meta);
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
var cnt__16244 = pv.cnt;
if((cnt__16244 < 32))
{return 0;
} else
{return (((cnt__16244 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__16250 = level;
var ret__16251 = node;
while(true){
if((ll__16250 === 0))
{return ret__16251;
} else
{var embed__16252 = ret__16251;
var r__16253 = cljs.core.pv_fresh_node.call(null,edit);
var ___16254 = cljs.core.pv_aset.call(null,r__16253,0,embed__16252);
{
var G__16255 = (ll__16250 - 5);
var G__16256 = r__16253;
ll__16250 = G__16255;
ret__16251 = G__16256;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__16262 = cljs.core.pv_clone_node.call(null,parent);
var subidx__16263 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__16262,subidx__16263,tailnode);
return ret__16262;
} else
{var child__16264 = cljs.core.pv_aget.call(null,parent,subidx__16263);
if(!((child__16264 == null)))
{var node_to_insert__16265 = push_tail.call(null,pv,(level - 5),child__16264,tailnode);
cljs.core.pv_aset.call(null,ret__16262,subidx__16263,node_to_insert__16265);
return ret__16262;
} else
{var node_to_insert__16266 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__16262,subidx__16263,node_to_insert__16266);
return ret__16262;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____16270 = (0 <= i);
if(and__3822__auto____16270)
{return (i < pv.cnt);
} else
{return and__3822__auto____16270;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__16271 = pv.root;
var level__16272 = pv.shift;
while(true){
if((level__16272 > 0))
{{
var G__16273 = cljs.core.pv_aget.call(null,node__16271,((i >>> level__16272) & 31));
var G__16274 = (level__16272 - 5);
node__16271 = G__16273;
level__16272 = G__16274;
continue;
}
} else
{return node__16271.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__16277 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__16277,(i & 31),val);
return ret__16277;
} else
{var subidx__16278 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__16277,subidx__16278,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__16278),i,val));
return ret__16277;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__16284 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__16285 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__16284));
if((function (){var and__3822__auto____16286 = (new_child__16285 == null);
if(and__3822__auto____16286)
{return (subidx__16284 === 0);
} else
{return and__3822__auto____16286;
}
})())
{return null;
} else
{var ret__16287 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__16287,subidx__16284,new_child__16285);
return ret__16287;
}
} else
{if((subidx__16284 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__16288 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__16288,subidx__16284,null);
return ret__16288;
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
var this__16291 = this;
return (new cljs.core.TransientVector(this__16291.cnt,this__16291.shift,cljs.core.tv_editable_root.call(null,this__16291.root),cljs.core.tv_editable_tail.call(null,this__16291.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__16292 = this;
var h__2281__auto____16293 = this__16292.__hash;
if(!((h__2281__auto____16293 == null)))
{return h__2281__auto____16293;
} else
{var h__2281__auto____16294 = cljs.core.hash_coll.call(null,coll);
this__16292.__hash = h__2281__auto____16294;
return h__2281__auto____16294;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__16295 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__16296 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__16297 = this;
if((function (){var and__3822__auto____16298 = (0 <= k);
if(and__3822__auto____16298)
{return (k < this__16297.cnt);
} else
{return and__3822__auto____16298;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__16299 = this__16297.tail.slice();
(new_tail__16299[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__16297.meta,this__16297.cnt,this__16297.shift,this__16297.root,new_tail__16299,null));
} else
{return (new cljs.core.PersistentVector(this__16297.meta,this__16297.cnt,this__16297.shift,cljs.core.do_assoc.call(null,coll,this__16297.shift,this__16297.root,k,v),this__16297.tail,null));
}
} else
{if((k === this__16297.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__16297.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__16347 = null;
var G__16347__2 = (function (this_sym16300,k){
var this__16302 = this;
var this_sym16300__16303 = this;
var coll__16304 = this_sym16300__16303;
return coll__16304.cljs$core$ILookup$_lookup$arity$2(coll__16304,k);
});
var G__16347__3 = (function (this_sym16301,k,not_found){
var this__16302 = this;
var this_sym16301__16305 = this;
var coll__16306 = this_sym16301__16305;
return coll__16306.cljs$core$ILookup$_lookup$arity$3(coll__16306,k,not_found);
});
G__16347 = function(this_sym16301,k,not_found){
switch(arguments.length){
case 2:
return G__16347__2.call(this,this_sym16301,k);
case 3:
return G__16347__3.call(this,this_sym16301,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16347;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym16289,args16290){
var this__16307 = this;
return this_sym16289.call.apply(this_sym16289,[this_sym16289].concat(args16290.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__16308 = this;
var step_init__16309 = [0,init];
var i__16310 = 0;
while(true){
if((i__16310 < this__16308.cnt))
{var arr__16311 = cljs.core.array_for.call(null,v,i__16310);
var len__16312 = arr__16311.length;
var init__16316 = (function (){var j__16313 = 0;
var init__16314 = (step_init__16309[1]);
while(true){
if((j__16313 < len__16312))
{var init__16315 = f.call(null,init__16314,(j__16313 + i__16310),(arr__16311[j__16313]));
if(cljs.core.reduced_QMARK_.call(null,init__16315))
{return init__16315;
} else
{{
var G__16348 = (j__16313 + 1);
var G__16349 = init__16315;
j__16313 = G__16348;
init__16314 = G__16349;
continue;
}
}
} else
{(step_init__16309[0] = len__16312);
(step_init__16309[1] = init__16314);
return init__16314;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__16316))
{return cljs.core.deref.call(null,init__16316);
} else
{{
var G__16350 = (i__16310 + (step_init__16309[0]));
i__16310 = G__16350;
continue;
}
}
} else
{return (step_init__16309[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__16317 = this;
if(((this__16317.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__16318 = this__16317.tail.slice();
new_tail__16318.push(o);
return (new cljs.core.PersistentVector(this__16317.meta,(this__16317.cnt + 1),this__16317.shift,this__16317.root,new_tail__16318,null));
} else
{var root_overflow_QMARK___16319 = ((this__16317.cnt >>> 5) > (1 << this__16317.shift));
var new_shift__16320 = ((root_overflow_QMARK___16319)?(this__16317.shift + 5):this__16317.shift);
var new_root__16322 = ((root_overflow_QMARK___16319)?(function (){var n_r__16321 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__16321,0,this__16317.root);
cljs.core.pv_aset.call(null,n_r__16321,1,cljs.core.new_path.call(null,null,this__16317.shift,(new cljs.core.VectorNode(null,this__16317.tail))));
return n_r__16321;
})():cljs.core.push_tail.call(null,coll,this__16317.shift,this__16317.root,(new cljs.core.VectorNode(null,this__16317.tail))));
return (new cljs.core.PersistentVector(this__16317.meta,(this__16317.cnt + 1),new_shift__16320,new_root__16322,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__16323 = this;
if((this__16323.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__16323.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__16324 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__16325 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__16326 = this;
var this__16327 = this;
return cljs.core.pr_str.call(null,this__16327);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__16328 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__16329 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__16330 = this;
if((this__16330.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__16331 = this;
return this__16331.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__16332 = this;
if((this__16332.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__16332.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__16333 = this;
if((this__16333.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__16333.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__16333.meta);
} else
{if((1 < (this__16333.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__16333.meta,(this__16333.cnt - 1),this__16333.shift,this__16333.root,this__16333.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__16334 = cljs.core.array_for.call(null,coll,(this__16333.cnt - 2));
var nr__16335 = cljs.core.pop_tail.call(null,coll,this__16333.shift,this__16333.root);
var new_root__16336 = (((nr__16335 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__16335);
var cnt_1__16337 = (this__16333.cnt - 1);
if((function (){var and__3822__auto____16338 = (5 < this__16333.shift);
if(and__3822__auto____16338)
{return (cljs.core.pv_aget.call(null,new_root__16336,1) == null);
} else
{return and__3822__auto____16338;
}
})())
{return (new cljs.core.PersistentVector(this__16333.meta,cnt_1__16337,(this__16333.shift - 5),cljs.core.pv_aget.call(null,new_root__16336,0),new_tail__16334,null));
} else
{return (new cljs.core.PersistentVector(this__16333.meta,cnt_1__16337,this__16333.shift,new_root__16336,new_tail__16334,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__16339 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__16340 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__16341 = this;
return (new cljs.core.PersistentVector(meta,this__16341.cnt,this__16341.shift,this__16341.root,this__16341.tail,this__16341.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__16342 = this;
return this__16342.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__16343 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__16344 = this;
if((function (){var and__3822__auto____16345 = (0 <= n);
if(and__3822__auto____16345)
{return (n < this__16344.cnt);
} else
{return and__3822__auto____16345;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__16346 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__16346.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__16351 = xs.length;
var xs__16352 = (((no_clone === true))?xs:xs.slice());
if((l__16351 < 32))
{return (new cljs.core.PersistentVector(null,l__16351,5,cljs.core.PersistentVector.EMPTY_NODE,xs__16352,null));
} else
{var node__16353 = xs__16352.slice(0,32);
var v__16354 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__16353,null));
var i__16355 = 32;
var out__16356 = cljs.core._as_transient.call(null,v__16354);
while(true){
if((i__16355 < l__16351))
{{
var G__16357 = (i__16355 + 1);
var G__16358 = cljs.core.conj_BANG_.call(null,out__16356,(xs__16352[i__16355]));
i__16355 = G__16357;
out__16356 = G__16358;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__16356);
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
vector.cljs$lang$applyTo = (function (arglist__16359){
var args = cljs.core.seq(arglist__16359);;
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
var this__16360 = this;
if(((this__16360.off + 1) < this__16360.node.length))
{var s__16361 = cljs.core.chunked_seq.call(null,this__16360.vec,this__16360.node,this__16360.i,(this__16360.off + 1));
if((s__16361 == null))
{return null;
} else
{return s__16361;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__16362 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__16363 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__16364 = this;
return (this__16364.node[this__16364.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__16365 = this;
if(((this__16365.off + 1) < this__16365.node.length))
{var s__16366 = cljs.core.chunked_seq.call(null,this__16365.vec,this__16365.node,this__16365.i,(this__16365.off + 1));
if((s__16366 == null))
{return cljs.core.List.EMPTY;
} else
{return s__16366;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__16367 = this;
var l__16368 = this__16367.node.length;
var s__16369 = ((((this__16367.i + l__16368) < cljs.core._count.call(null,this__16367.vec)))?cljs.core.chunked_seq.call(null,this__16367.vec,(this__16367.i + l__16368),0):null);
if((s__16369 == null))
{return null;
} else
{return s__16369;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__16370 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__16371 = this;
return cljs.core.chunked_seq.call(null,this__16371.vec,this__16371.node,this__16371.i,this__16371.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__16372 = this;
return this__16372.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__16373 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__16373.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__16374 = this;
return cljs.core.array_chunk.call(null,this__16374.node,this__16374.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__16375 = this;
var l__16376 = this__16375.node.length;
var s__16377 = ((((this__16375.i + l__16376) < cljs.core._count.call(null,this__16375.vec)))?cljs.core.chunked_seq.call(null,this__16375.vec,(this__16375.i + l__16376),0):null);
if((s__16377 == null))
{return cljs.core.List.EMPTY;
} else
{return s__16377;
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
var this__16380 = this;
var h__2281__auto____16381 = this__16380.__hash;
if(!((h__2281__auto____16381 == null)))
{return h__2281__auto____16381;
} else
{var h__2281__auto____16382 = cljs.core.hash_coll.call(null,coll);
this__16380.__hash = h__2281__auto____16382;
return h__2281__auto____16382;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__16383 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__16384 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__16385 = this;
var v_pos__16386 = (this__16385.start + key);
return (new cljs.core.Subvec(this__16385.meta,cljs.core._assoc.call(null,this__16385.v,v_pos__16386,val),this__16385.start,((this__16385.end > (v_pos__16386 + 1)) ? this__16385.end : (v_pos__16386 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__16412 = null;
var G__16412__2 = (function (this_sym16387,k){
var this__16389 = this;
var this_sym16387__16390 = this;
var coll__16391 = this_sym16387__16390;
return coll__16391.cljs$core$ILookup$_lookup$arity$2(coll__16391,k);
});
var G__16412__3 = (function (this_sym16388,k,not_found){
var this__16389 = this;
var this_sym16388__16392 = this;
var coll__16393 = this_sym16388__16392;
return coll__16393.cljs$core$ILookup$_lookup$arity$3(coll__16393,k,not_found);
});
G__16412 = function(this_sym16388,k,not_found){
switch(arguments.length){
case 2:
return G__16412__2.call(this,this_sym16388,k);
case 3:
return G__16412__3.call(this,this_sym16388,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16412;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym16378,args16379){
var this__16394 = this;
return this_sym16378.call.apply(this_sym16378,[this_sym16378].concat(args16379.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__16395 = this;
return (new cljs.core.Subvec(this__16395.meta,cljs.core._assoc_n.call(null,this__16395.v,this__16395.end,o),this__16395.start,(this__16395.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__16396 = this;
var this__16397 = this;
return cljs.core.pr_str.call(null,this__16397);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__16398 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__16399 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__16400 = this;
var subvec_seq__16401 = (function subvec_seq(i){
if((i === this__16400.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__16400.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__16401.call(null,this__16400.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__16402 = this;
return (this__16402.end - this__16402.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__16403 = this;
return cljs.core._nth.call(null,this__16403.v,(this__16403.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__16404 = this;
if((this__16404.start === this__16404.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__16404.meta,this__16404.v,this__16404.start,(this__16404.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__16405 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__16406 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__16407 = this;
return (new cljs.core.Subvec(meta,this__16407.v,this__16407.start,this__16407.end,this__16407.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__16408 = this;
return this__16408.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__16409 = this;
return cljs.core._nth.call(null,this__16409.v,(this__16409.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__16410 = this;
return cljs.core._nth.call(null,this__16410.v,(this__16410.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__16411 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__16411.meta);
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
var ret__16414 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__16414,0,tl.length);
return ret__16414;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__16418 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__16419 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__16418,subidx__16419,(((level === 5))?tail_node:(function (){var child__16420 = cljs.core.pv_aget.call(null,ret__16418,subidx__16419);
if(!((child__16420 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__16420,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__16418;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__16425 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__16426 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__16427 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__16425,subidx__16426));
if((function (){var and__3822__auto____16428 = (new_child__16427 == null);
if(and__3822__auto____16428)
{return (subidx__16426 === 0);
} else
{return and__3822__auto____16428;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__16425,subidx__16426,new_child__16427);
return node__16425;
}
} else
{if((subidx__16426 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__16425,subidx__16426,null);
return node__16425;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____16433 = (0 <= i);
if(and__3822__auto____16433)
{return (i < tv.cnt);
} else
{return and__3822__auto____16433;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__16434 = tv.root;
var node__16435 = root__16434;
var level__16436 = tv.shift;
while(true){
if((level__16436 > 0))
{{
var G__16437 = cljs.core.tv_ensure_editable.call(null,root__16434.edit,cljs.core.pv_aget.call(null,node__16435,((i >>> level__16436) & 31)));
var G__16438 = (level__16436 - 5);
node__16435 = G__16437;
level__16436 = G__16438;
continue;
}
} else
{return node__16435.arr;
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
var G__16478 = null;
var G__16478__2 = (function (this_sym16441,k){
var this__16443 = this;
var this_sym16441__16444 = this;
var coll__16445 = this_sym16441__16444;
return coll__16445.cljs$core$ILookup$_lookup$arity$2(coll__16445,k);
});
var G__16478__3 = (function (this_sym16442,k,not_found){
var this__16443 = this;
var this_sym16442__16446 = this;
var coll__16447 = this_sym16442__16446;
return coll__16447.cljs$core$ILookup$_lookup$arity$3(coll__16447,k,not_found);
});
G__16478 = function(this_sym16442,k,not_found){
switch(arguments.length){
case 2:
return G__16478__2.call(this,this_sym16442,k);
case 3:
return G__16478__3.call(this,this_sym16442,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16478;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym16439,args16440){
var this__16448 = this;
return this_sym16439.call.apply(this_sym16439,[this_sym16439].concat(args16440.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__16449 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__16450 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__16451 = this;
if(this__16451.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__16452 = this;
if((function (){var and__3822__auto____16453 = (0 <= n);
if(and__3822__auto____16453)
{return (n < this__16452.cnt);
} else
{return and__3822__auto____16453;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__16454 = this;
if(this__16454.root.edit)
{return this__16454.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__16455 = this;
if(this__16455.root.edit)
{if((function (){var and__3822__auto____16456 = (0 <= n);
if(and__3822__auto____16456)
{return (n < this__16455.cnt);
} else
{return and__3822__auto____16456;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__16455.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__16461 = (function go(level,node){
var node__16459 = cljs.core.tv_ensure_editable.call(null,this__16455.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__16459,(n & 31),val);
return node__16459;
} else
{var subidx__16460 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__16459,subidx__16460,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__16459,subidx__16460)));
return node__16459;
}
}).call(null,this__16455.shift,this__16455.root);
this__16455.root = new_root__16461;
return tcoll;
}
} else
{if((n === this__16455.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__16455.cnt)].join('')));
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
var this__16462 = this;
if(this__16462.root.edit)
{if((this__16462.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__16462.cnt))
{this__16462.cnt = 0;
return tcoll;
} else
{if((((this__16462.cnt - 1) & 31) > 0))
{this__16462.cnt = (this__16462.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__16463 = cljs.core.editable_array_for.call(null,tcoll,(this__16462.cnt - 2));
var new_root__16465 = (function (){var nr__16464 = cljs.core.tv_pop_tail.call(null,tcoll,this__16462.shift,this__16462.root);
if(!((nr__16464 == null)))
{return nr__16464;
} else
{return (new cljs.core.VectorNode(this__16462.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____16466 = (5 < this__16462.shift);
if(and__3822__auto____16466)
{return (cljs.core.pv_aget.call(null,new_root__16465,1) == null);
} else
{return and__3822__auto____16466;
}
})())
{var new_root__16467 = cljs.core.tv_ensure_editable.call(null,this__16462.root.edit,cljs.core.pv_aget.call(null,new_root__16465,0));
this__16462.root = new_root__16467;
this__16462.shift = (this__16462.shift - 5);
this__16462.cnt = (this__16462.cnt - 1);
this__16462.tail = new_tail__16463;
return tcoll;
} else
{this__16462.root = new_root__16465;
this__16462.cnt = (this__16462.cnt - 1);
this__16462.tail = new_tail__16463;
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
var this__16468 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__16469 = this;
if(this__16469.root.edit)
{if(((this__16469.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__16469.tail[(this__16469.cnt & 31)] = o);
this__16469.cnt = (this__16469.cnt + 1);
return tcoll;
} else
{var tail_node__16470 = (new cljs.core.VectorNode(this__16469.root.edit,this__16469.tail));
var new_tail__16471 = cljs.core.make_array.call(null,32);
(new_tail__16471[0] = o);
this__16469.tail = new_tail__16471;
if(((this__16469.cnt >>> 5) > (1 << this__16469.shift)))
{var new_root_array__16472 = cljs.core.make_array.call(null,32);
var new_shift__16473 = (this__16469.shift + 5);
(new_root_array__16472[0] = this__16469.root);
(new_root_array__16472[1] = cljs.core.new_path.call(null,this__16469.root.edit,this__16469.shift,tail_node__16470));
this__16469.root = (new cljs.core.VectorNode(this__16469.root.edit,new_root_array__16472));
this__16469.shift = new_shift__16473;
this__16469.cnt = (this__16469.cnt + 1);
return tcoll;
} else
{var new_root__16474 = cljs.core.tv_push_tail.call(null,tcoll,this__16469.shift,this__16469.root,tail_node__16470);
this__16469.root = new_root__16474;
this__16469.cnt = (this__16469.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__16475 = this;
if(this__16475.root.edit)
{this__16475.root.edit = null;
var len__16476 = (this__16475.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__16477 = cljs.core.make_array.call(null,len__16476);
cljs.core.array_copy.call(null,this__16475.tail,0,trimmed_tail__16477,0,len__16476);
return (new cljs.core.PersistentVector(null,this__16475.cnt,this__16475.shift,this__16475.root,trimmed_tail__16477,null));
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
var this__16479 = this;
var h__2281__auto____16480 = this__16479.__hash;
if(!((h__2281__auto____16480 == null)))
{return h__2281__auto____16480;
} else
{var h__2281__auto____16481 = cljs.core.hash_coll.call(null,coll);
this__16479.__hash = h__2281__auto____16481;
return h__2281__auto____16481;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__16482 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__16483 = this;
var this__16484 = this;
return cljs.core.pr_str.call(null,this__16484);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__16485 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__16486 = this;
return cljs.core._first.call(null,this__16486.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__16487 = this;
var temp__3971__auto____16488 = cljs.core.next.call(null,this__16487.front);
if(temp__3971__auto____16488)
{var f1__16489 = temp__3971__auto____16488;
return (new cljs.core.PersistentQueueSeq(this__16487.meta,f1__16489,this__16487.rear,null));
} else
{if((this__16487.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__16487.meta,this__16487.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__16490 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__16491 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__16491.front,this__16491.rear,this__16491.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__16492 = this;
return this__16492.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__16493 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__16493.meta);
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
var this__16494 = this;
var h__2281__auto____16495 = this__16494.__hash;
if(!((h__2281__auto____16495 == null)))
{return h__2281__auto____16495;
} else
{var h__2281__auto____16496 = cljs.core.hash_coll.call(null,coll);
this__16494.__hash = h__2281__auto____16496;
return h__2281__auto____16496;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__16497 = this;
if(cljs.core.truth_(this__16497.front))
{return (new cljs.core.PersistentQueue(this__16497.meta,(this__16497.count + 1),this__16497.front,cljs.core.conj.call(null,(function (){var or__3824__auto____16498 = this__16497.rear;
if(cljs.core.truth_(or__3824__auto____16498))
{return or__3824__auto____16498;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__16497.meta,(this__16497.count + 1),cljs.core.conj.call(null,this__16497.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__16499 = this;
var this__16500 = this;
return cljs.core.pr_str.call(null,this__16500);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__16501 = this;
var rear__16502 = cljs.core.seq.call(null,this__16501.rear);
if(cljs.core.truth_((function (){var or__3824__auto____16503 = this__16501.front;
if(cljs.core.truth_(or__3824__auto____16503))
{return or__3824__auto____16503;
} else
{return rear__16502;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__16501.front,cljs.core.seq.call(null,rear__16502),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__16504 = this;
return this__16504.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__16505 = this;
return cljs.core._first.call(null,this__16505.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__16506 = this;
if(cljs.core.truth_(this__16506.front))
{var temp__3971__auto____16507 = cljs.core.next.call(null,this__16506.front);
if(temp__3971__auto____16507)
{var f1__16508 = temp__3971__auto____16507;
return (new cljs.core.PersistentQueue(this__16506.meta,(this__16506.count - 1),f1__16508,this__16506.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__16506.meta,(this__16506.count - 1),cljs.core.seq.call(null,this__16506.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__16509 = this;
return cljs.core.first.call(null,this__16509.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__16510 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__16511 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__16512 = this;
return (new cljs.core.PersistentQueue(meta,this__16512.count,this__16512.front,this__16512.rear,this__16512.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__16513 = this;
return this__16513.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__16514 = this;
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
var this__16515 = this;
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
var len__16518 = array.length;
var i__16519 = 0;
while(true){
if((i__16519 < len__16518))
{if((k === (array[i__16519])))
{return i__16519;
} else
{{
var G__16520 = (i__16519 + incr);
i__16519 = G__16520;
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
var a__16523 = cljs.core.hash.call(null,a);
var b__16524 = cljs.core.hash.call(null,b);
if((a__16523 < b__16524))
{return -1;
} else
{if((a__16523 > b__16524))
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
var ks__16532 = m.keys;
var len__16533 = ks__16532.length;
var so__16534 = m.strobj;
var out__16535 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__16536 = 0;
var out__16537 = cljs.core.transient$.call(null,out__16535);
while(true){
if((i__16536 < len__16533))
{var k__16538 = (ks__16532[i__16536]);
{
var G__16539 = (i__16536 + 1);
var G__16540 = cljs.core.assoc_BANG_.call(null,out__16537,k__16538,(so__16534[k__16538]));
i__16536 = G__16539;
out__16537 = G__16540;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__16537,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__16546 = {};
var l__16547 = ks.length;
var i__16548 = 0;
while(true){
if((i__16548 < l__16547))
{var k__16549 = (ks[i__16548]);
(new_obj__16546[k__16549] = (obj[k__16549]));
{
var G__16550 = (i__16548 + 1);
i__16548 = G__16550;
continue;
}
} else
{}
break;
}
return new_obj__16546;
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
var this__16553 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__16554 = this;
var h__2281__auto____16555 = this__16554.__hash;
if(!((h__2281__auto____16555 == null)))
{return h__2281__auto____16555;
} else
{var h__2281__auto____16556 = cljs.core.hash_imap.call(null,coll);
this__16554.__hash = h__2281__auto____16556;
return h__2281__auto____16556;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__16557 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__16558 = this;
if((function (){var and__3822__auto____16559 = goog.isString(k);
if(and__3822__auto____16559)
{return !((cljs.core.scan_array.call(null,1,k,this__16558.keys) == null));
} else
{return and__3822__auto____16559;
}
})())
{return (this__16558.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__16560 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____16561 = (this__16560.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____16561)
{return or__3824__auto____16561;
} else
{return (this__16560.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__16560.keys) == null)))
{var new_strobj__16562 = cljs.core.obj_clone.call(null,this__16560.strobj,this__16560.keys);
(new_strobj__16562[k] = v);
return (new cljs.core.ObjMap(this__16560.meta,this__16560.keys,new_strobj__16562,(this__16560.update_count + 1),null));
} else
{var new_strobj__16563 = cljs.core.obj_clone.call(null,this__16560.strobj,this__16560.keys);
var new_keys__16564 = this__16560.keys.slice();
(new_strobj__16563[k] = v);
new_keys__16564.push(k);
return (new cljs.core.ObjMap(this__16560.meta,new_keys__16564,new_strobj__16563,(this__16560.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__16565 = this;
if((function (){var and__3822__auto____16566 = goog.isString(k);
if(and__3822__auto____16566)
{return !((cljs.core.scan_array.call(null,1,k,this__16565.keys) == null));
} else
{return and__3822__auto____16566;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__16588 = null;
var G__16588__2 = (function (this_sym16567,k){
var this__16569 = this;
var this_sym16567__16570 = this;
var coll__16571 = this_sym16567__16570;
return coll__16571.cljs$core$ILookup$_lookup$arity$2(coll__16571,k);
});
var G__16588__3 = (function (this_sym16568,k,not_found){
var this__16569 = this;
var this_sym16568__16572 = this;
var coll__16573 = this_sym16568__16572;
return coll__16573.cljs$core$ILookup$_lookup$arity$3(coll__16573,k,not_found);
});
G__16588 = function(this_sym16568,k,not_found){
switch(arguments.length){
case 2:
return G__16588__2.call(this,this_sym16568,k);
case 3:
return G__16588__3.call(this,this_sym16568,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16588;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym16551,args16552){
var this__16574 = this;
return this_sym16551.call.apply(this_sym16551,[this_sym16551].concat(args16552.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__16575 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__16576 = this;
var this__16577 = this;
return cljs.core.pr_str.call(null,this__16577);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__16578 = this;
if((this__16578.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__16541_SHARP_){
return cljs.core.vector.call(null,p1__16541_SHARP_,(this__16578.strobj[p1__16541_SHARP_]));
}),this__16578.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__16579 = this;
return this__16579.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__16580 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__16581 = this;
return (new cljs.core.ObjMap(meta,this__16581.keys,this__16581.strobj,this__16581.update_count,this__16581.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__16582 = this;
return this__16582.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__16583 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__16583.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__16584 = this;
if((function (){var and__3822__auto____16585 = goog.isString(k);
if(and__3822__auto____16585)
{return !((cljs.core.scan_array.call(null,1,k,this__16584.keys) == null));
} else
{return and__3822__auto____16585;
}
})())
{var new_keys__16586 = this__16584.keys.slice();
var new_strobj__16587 = cljs.core.obj_clone.call(null,this__16584.strobj,this__16584.keys);
new_keys__16586.splice(cljs.core.scan_array.call(null,1,k,new_keys__16586),1);
cljs.core.js_delete.call(null,new_strobj__16587,k);
return (new cljs.core.ObjMap(this__16584.meta,new_keys__16586,new_strobj__16587,(this__16584.update_count + 1),null));
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
var this__16592 = this;
var h__2281__auto____16593 = this__16592.__hash;
if(!((h__2281__auto____16593 == null)))
{return h__2281__auto____16593;
} else
{var h__2281__auto____16594 = cljs.core.hash_imap.call(null,coll);
this__16592.__hash = h__2281__auto____16594;
return h__2281__auto____16594;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__16595 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__16596 = this;
var bucket__16597 = (this__16596.hashobj[cljs.core.hash.call(null,k)]);
var i__16598 = (cljs.core.truth_(bucket__16597)?cljs.core.scan_array.call(null,2,k,bucket__16597):null);
if(cljs.core.truth_(i__16598))
{return (bucket__16597[(i__16598 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__16599 = this;
var h__16600 = cljs.core.hash.call(null,k);
var bucket__16601 = (this__16599.hashobj[h__16600]);
if(cljs.core.truth_(bucket__16601))
{var new_bucket__16602 = bucket__16601.slice();
var new_hashobj__16603 = goog.object.clone(this__16599.hashobj);
(new_hashobj__16603[h__16600] = new_bucket__16602);
var temp__3971__auto____16604 = cljs.core.scan_array.call(null,2,k,new_bucket__16602);
if(cljs.core.truth_(temp__3971__auto____16604))
{var i__16605 = temp__3971__auto____16604;
(new_bucket__16602[(i__16605 + 1)] = v);
return (new cljs.core.HashMap(this__16599.meta,this__16599.count,new_hashobj__16603,null));
} else
{new_bucket__16602.push(k,v);
return (new cljs.core.HashMap(this__16599.meta,(this__16599.count + 1),new_hashobj__16603,null));
}
} else
{var new_hashobj__16606 = goog.object.clone(this__16599.hashobj);
(new_hashobj__16606[h__16600] = [k,v]);
return (new cljs.core.HashMap(this__16599.meta,(this__16599.count + 1),new_hashobj__16606,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__16607 = this;
var bucket__16608 = (this__16607.hashobj[cljs.core.hash.call(null,k)]);
var i__16609 = (cljs.core.truth_(bucket__16608)?cljs.core.scan_array.call(null,2,k,bucket__16608):null);
if(cljs.core.truth_(i__16609))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__16634 = null;
var G__16634__2 = (function (this_sym16610,k){
var this__16612 = this;
var this_sym16610__16613 = this;
var coll__16614 = this_sym16610__16613;
return coll__16614.cljs$core$ILookup$_lookup$arity$2(coll__16614,k);
});
var G__16634__3 = (function (this_sym16611,k,not_found){
var this__16612 = this;
var this_sym16611__16615 = this;
var coll__16616 = this_sym16611__16615;
return coll__16616.cljs$core$ILookup$_lookup$arity$3(coll__16616,k,not_found);
});
G__16634 = function(this_sym16611,k,not_found){
switch(arguments.length){
case 2:
return G__16634__2.call(this,this_sym16611,k);
case 3:
return G__16634__3.call(this,this_sym16611,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16634;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym16590,args16591){
var this__16617 = this;
return this_sym16590.call.apply(this_sym16590,[this_sym16590].concat(args16591.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__16618 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__16619 = this;
var this__16620 = this;
return cljs.core.pr_str.call(null,this__16620);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__16621 = this;
if((this__16621.count > 0))
{var hashes__16622 = cljs.core.js_keys.call(null,this__16621.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__16589_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__16621.hashobj[p1__16589_SHARP_])));
}),hashes__16622);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__16623 = this;
return this__16623.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__16624 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__16625 = this;
return (new cljs.core.HashMap(meta,this__16625.count,this__16625.hashobj,this__16625.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__16626 = this;
return this__16626.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__16627 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__16627.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__16628 = this;
var h__16629 = cljs.core.hash.call(null,k);
var bucket__16630 = (this__16628.hashobj[h__16629]);
var i__16631 = (cljs.core.truth_(bucket__16630)?cljs.core.scan_array.call(null,2,k,bucket__16630):null);
if(cljs.core.not.call(null,i__16631))
{return coll;
} else
{var new_hashobj__16632 = goog.object.clone(this__16628.hashobj);
if((3 > bucket__16630.length))
{cljs.core.js_delete.call(null,new_hashobj__16632,h__16629);
} else
{var new_bucket__16633 = bucket__16630.slice();
new_bucket__16633.splice(i__16631,2);
(new_hashobj__16632[h__16629] = new_bucket__16633);
}
return (new cljs.core.HashMap(this__16628.meta,(this__16628.count - 1),new_hashobj__16632,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__16635 = ks.length;
var i__16636 = 0;
var out__16637 = cljs.core.HashMap.EMPTY;
while(true){
if((i__16636 < len__16635))
{{
var G__16638 = (i__16636 + 1);
var G__16639 = cljs.core.assoc.call(null,out__16637,(ks[i__16636]),(vs[i__16636]));
i__16636 = G__16638;
out__16637 = G__16639;
continue;
}
} else
{return out__16637;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__16643 = m.arr;
var len__16644 = arr__16643.length;
var i__16645 = 0;
while(true){
if((len__16644 <= i__16645))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__16643[i__16645]),k))
{return i__16645;
} else
{if("\uFDD0'else")
{{
var G__16646 = (i__16645 + 2);
i__16645 = G__16646;
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
var this__16649 = this;
return (new cljs.core.TransientArrayMap({},this__16649.arr.length,this__16649.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__16650 = this;
var h__2281__auto____16651 = this__16650.__hash;
if(!((h__2281__auto____16651 == null)))
{return h__2281__auto____16651;
} else
{var h__2281__auto____16652 = cljs.core.hash_imap.call(null,coll);
this__16650.__hash = h__2281__auto____16652;
return h__2281__auto____16652;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__16653 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__16654 = this;
var idx__16655 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__16655 === -1))
{return not_found;
} else
{return (this__16654.arr[(idx__16655 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__16656 = this;
var idx__16657 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__16657 === -1))
{if((this__16656.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__16656.meta,(this__16656.cnt + 1),(function (){var G__16658__16659 = this__16656.arr.slice();
G__16658__16659.push(k);
G__16658__16659.push(v);
return G__16658__16659;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__16656.arr[(idx__16657 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__16656.meta,this__16656.cnt,(function (){var G__16660__16661 = this__16656.arr.slice();
(G__16660__16661[(idx__16657 + 1)] = v);
return G__16660__16661;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__16662 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__16694 = null;
var G__16694__2 = (function (this_sym16663,k){
var this__16665 = this;
var this_sym16663__16666 = this;
var coll__16667 = this_sym16663__16666;
return coll__16667.cljs$core$ILookup$_lookup$arity$2(coll__16667,k);
});
var G__16694__3 = (function (this_sym16664,k,not_found){
var this__16665 = this;
var this_sym16664__16668 = this;
var coll__16669 = this_sym16664__16668;
return coll__16669.cljs$core$ILookup$_lookup$arity$3(coll__16669,k,not_found);
});
G__16694 = function(this_sym16664,k,not_found){
switch(arguments.length){
case 2:
return G__16694__2.call(this,this_sym16664,k);
case 3:
return G__16694__3.call(this,this_sym16664,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16694;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym16647,args16648){
var this__16670 = this;
return this_sym16647.call.apply(this_sym16647,[this_sym16647].concat(args16648.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__16671 = this;
var len__16672 = this__16671.arr.length;
var i__16673 = 0;
var init__16674 = init;
while(true){
if((i__16673 < len__16672))
{var init__16675 = f.call(null,init__16674,(this__16671.arr[i__16673]),(this__16671.arr[(i__16673 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__16675))
{return cljs.core.deref.call(null,init__16675);
} else
{{
var G__16695 = (i__16673 + 2);
var G__16696 = init__16675;
i__16673 = G__16695;
init__16674 = G__16696;
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
var this__16676 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__16677 = this;
var this__16678 = this;
return cljs.core.pr_str.call(null,this__16678);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__16679 = this;
if((this__16679.cnt > 0))
{var len__16680 = this__16679.arr.length;
var array_map_seq__16681 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__16680))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__16679.arr[i]),(this__16679.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__16681.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__16682 = this;
return this__16682.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__16683 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__16684 = this;
return (new cljs.core.PersistentArrayMap(meta,this__16684.cnt,this__16684.arr,this__16684.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__16685 = this;
return this__16685.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__16686 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16686.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__16687 = this;
var idx__16688 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__16688 >= 0))
{var len__16689 = this__16687.arr.length;
var new_len__16690 = (len__16689 - 2);
if((new_len__16690 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__16691 = cljs.core.make_array.call(null,new_len__16690);
var s__16692 = 0;
var d__16693 = 0;
while(true){
if((s__16692 >= len__16689))
{return (new cljs.core.PersistentArrayMap(this__16687.meta,(this__16687.cnt - 1),new_arr__16691,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__16687.arr[s__16692])))
{{
var G__16697 = (s__16692 + 2);
var G__16698 = d__16693;
s__16692 = G__16697;
d__16693 = G__16698;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__16691[d__16693] = (this__16687.arr[s__16692]));
(new_arr__16691[(d__16693 + 1)] = (this__16687.arr[(s__16692 + 1)]));
{
var G__16699 = (s__16692 + 2);
var G__16700 = (d__16693 + 2);
s__16692 = G__16699;
d__16693 = G__16700;
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
var len__16701 = cljs.core.count.call(null,ks);
var i__16702 = 0;
var out__16703 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__16702 < len__16701))
{{
var G__16704 = (i__16702 + 1);
var G__16705 = cljs.core.assoc_BANG_.call(null,out__16703,(ks[i__16702]),(vs[i__16702]));
i__16702 = G__16704;
out__16703 = G__16705;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__16703);
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
var this__16706 = this;
if(cljs.core.truth_(this__16706.editable_QMARK_))
{var idx__16707 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__16707 >= 0))
{(this__16706.arr[idx__16707] = (this__16706.arr[(this__16706.len - 2)]));
(this__16706.arr[(idx__16707 + 1)] = (this__16706.arr[(this__16706.len - 1)]));
var G__16708__16709 = this__16706.arr;
G__16708__16709.pop();
G__16708__16709.pop();
G__16708__16709;
this__16706.len = (this__16706.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__16710 = this;
if(cljs.core.truth_(this__16710.editable_QMARK_))
{var idx__16711 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__16711 === -1))
{if(((this__16710.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__16710.len = (this__16710.len + 2);
this__16710.arr.push(key);
this__16710.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__16710.len,this__16710.arr),key,val);
}
} else
{if((val === (this__16710.arr[(idx__16711 + 1)])))
{return tcoll;
} else
{(this__16710.arr[(idx__16711 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__16712 = this;
if(cljs.core.truth_(this__16712.editable_QMARK_))
{if((function (){var G__16713__16714 = o;
if(G__16713__16714)
{if((function (){var or__3824__auto____16715 = (G__16713__16714.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____16715)
{return or__3824__auto____16715;
} else
{return G__16713__16714.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__16713__16714.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__16713__16714);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__16713__16714);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__16716 = cljs.core.seq.call(null,o);
var tcoll__16717 = tcoll;
while(true){
var temp__3971__auto____16718 = cljs.core.first.call(null,es__16716);
if(cljs.core.truth_(temp__3971__auto____16718))
{var e__16719 = temp__3971__auto____16718;
{
var G__16725 = cljs.core.next.call(null,es__16716);
var G__16726 = tcoll__16717.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__16717,cljs.core.key.call(null,e__16719),cljs.core.val.call(null,e__16719));
es__16716 = G__16725;
tcoll__16717 = G__16726;
continue;
}
} else
{return tcoll__16717;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__16720 = this;
if(cljs.core.truth_(this__16720.editable_QMARK_))
{this__16720.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__16720.len,2),this__16720.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__16721 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__16722 = this;
if(cljs.core.truth_(this__16722.editable_QMARK_))
{var idx__16723 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__16723 === -1))
{return not_found;
} else
{return (this__16722.arr[(idx__16723 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__16724 = this;
if(cljs.core.truth_(this__16724.editable_QMARK_))
{return cljs.core.quot.call(null,this__16724.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__16729 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__16730 = 0;
while(true){
if((i__16730 < len))
{{
var G__16731 = cljs.core.assoc_BANG_.call(null,out__16729,(arr[i__16730]),(arr[(i__16730 + 1)]));
var G__16732 = (i__16730 + 2);
out__16729 = G__16731;
i__16730 = G__16732;
continue;
}
} else
{return out__16729;
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
var G__16737__16738 = arr.slice();
(G__16737__16738[i] = a);
return G__16737__16738;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__16739__16740 = arr.slice();
(G__16739__16740[i] = a);
(G__16739__16740[j] = b);
return G__16739__16740;
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
var new_arr__16742 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__16742,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__16742,(2 * i),(new_arr__16742.length - (2 * i)));
return new_arr__16742;
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
var editable__16745 = inode.ensure_editable(edit);
(editable__16745.arr[i] = a);
return editable__16745;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__16746 = inode.ensure_editable(edit);
(editable__16746.arr[i] = a);
(editable__16746.arr[j] = b);
return editable__16746;
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
var len__16753 = arr.length;
var i__16754 = 0;
var init__16755 = init;
while(true){
if((i__16754 < len__16753))
{var init__16758 = (function (){var k__16756 = (arr[i__16754]);
if(!((k__16756 == null)))
{return f.call(null,init__16755,k__16756,(arr[(i__16754 + 1)]));
} else
{var node__16757 = (arr[(i__16754 + 1)]);
if(!((node__16757 == null)))
{return node__16757.kv_reduce(f,init__16755);
} else
{return init__16755;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__16758))
{return cljs.core.deref.call(null,init__16758);
} else
{{
var G__16759 = (i__16754 + 2);
var G__16760 = init__16758;
i__16754 = G__16759;
init__16755 = G__16760;
continue;
}
}
} else
{return init__16755;
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
var this__16761 = this;
var inode__16762 = this;
if((this__16761.bitmap === bit))
{return null;
} else
{var editable__16763 = inode__16762.ensure_editable(e);
var earr__16764 = editable__16763.arr;
var len__16765 = earr__16764.length;
editable__16763.bitmap = (bit ^ editable__16763.bitmap);
cljs.core.array_copy.call(null,earr__16764,(2 * (i + 1)),earr__16764,(2 * i),(len__16765 - (2 * (i + 1))));
(earr__16764[(len__16765 - 2)] = null);
(earr__16764[(len__16765 - 1)] = null);
return editable__16763;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__16766 = this;
var inode__16767 = this;
var bit__16768 = (1 << ((hash >>> shift) & 0x01f));
var idx__16769 = cljs.core.bitmap_indexed_node_index.call(null,this__16766.bitmap,bit__16768);
if(((this__16766.bitmap & bit__16768) === 0))
{var n__16770 = cljs.core.bit_count.call(null,this__16766.bitmap);
if(((2 * n__16770) < this__16766.arr.length))
{var editable__16771 = inode__16767.ensure_editable(edit);
var earr__16772 = editable__16771.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__16772,(2 * idx__16769),earr__16772,(2 * (idx__16769 + 1)),(2 * (n__16770 - idx__16769)));
(earr__16772[(2 * idx__16769)] = key);
(earr__16772[((2 * idx__16769) + 1)] = val);
editable__16771.bitmap = (editable__16771.bitmap | bit__16768);
return editable__16771;
} else
{if((n__16770 >= 16))
{var nodes__16773 = cljs.core.make_array.call(null,32);
var jdx__16774 = ((hash >>> shift) & 0x01f);
(nodes__16773[jdx__16774] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__16775 = 0;
var j__16776 = 0;
while(true){
if((i__16775 < 32))
{if((((this__16766.bitmap >>> i__16775) & 1) === 0))
{{
var G__16829 = (i__16775 + 1);
var G__16830 = j__16776;
i__16775 = G__16829;
j__16776 = G__16830;
continue;
}
} else
{(nodes__16773[i__16775] = ((!(((this__16766.arr[j__16776]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__16766.arr[j__16776])),(this__16766.arr[j__16776]),(this__16766.arr[(j__16776 + 1)]),added_leaf_QMARK_):(this__16766.arr[(j__16776 + 1)])));
{
var G__16831 = (i__16775 + 1);
var G__16832 = (j__16776 + 2);
i__16775 = G__16831;
j__16776 = G__16832;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__16770 + 1),nodes__16773));
} else
{if("\uFDD0'else")
{var new_arr__16777 = cljs.core.make_array.call(null,(2 * (n__16770 + 4)));
cljs.core.array_copy.call(null,this__16766.arr,0,new_arr__16777,0,(2 * idx__16769));
(new_arr__16777[(2 * idx__16769)] = key);
(new_arr__16777[((2 * idx__16769) + 1)] = val);
cljs.core.array_copy.call(null,this__16766.arr,(2 * idx__16769),new_arr__16777,(2 * (idx__16769 + 1)),(2 * (n__16770 - idx__16769)));
added_leaf_QMARK_.val = true;
var editable__16778 = inode__16767.ensure_editable(edit);
editable__16778.arr = new_arr__16777;
editable__16778.bitmap = (editable__16778.bitmap | bit__16768);
return editable__16778;
} else
{return null;
}
}
}
} else
{var key_or_nil__16779 = (this__16766.arr[(2 * idx__16769)]);
var val_or_node__16780 = (this__16766.arr[((2 * idx__16769) + 1)]);
if((key_or_nil__16779 == null))
{var n__16781 = val_or_node__16780.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__16781 === val_or_node__16780))
{return inode__16767;
} else
{return cljs.core.edit_and_set.call(null,inode__16767,edit,((2 * idx__16769) + 1),n__16781);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__16779))
{if((val === val_or_node__16780))
{return inode__16767;
} else
{return cljs.core.edit_and_set.call(null,inode__16767,edit,((2 * idx__16769) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__16767,edit,(2 * idx__16769),null,((2 * idx__16769) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__16779,val_or_node__16780,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__16782 = this;
var inode__16783 = this;
return cljs.core.create_inode_seq.call(null,this__16782.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__16784 = this;
var inode__16785 = this;
var bit__16786 = (1 << ((hash >>> shift) & 0x01f));
if(((this__16784.bitmap & bit__16786) === 0))
{return inode__16785;
} else
{var idx__16787 = cljs.core.bitmap_indexed_node_index.call(null,this__16784.bitmap,bit__16786);
var key_or_nil__16788 = (this__16784.arr[(2 * idx__16787)]);
var val_or_node__16789 = (this__16784.arr[((2 * idx__16787) + 1)]);
if((key_or_nil__16788 == null))
{var n__16790 = val_or_node__16789.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__16790 === val_or_node__16789))
{return inode__16785;
} else
{if(!((n__16790 == null)))
{return cljs.core.edit_and_set.call(null,inode__16785,edit,((2 * idx__16787) + 1),n__16790);
} else
{if((this__16784.bitmap === bit__16786))
{return null;
} else
{if("\uFDD0'else")
{return inode__16785.edit_and_remove_pair(edit,bit__16786,idx__16787);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__16788))
{(removed_leaf_QMARK_[0] = true);
return inode__16785.edit_and_remove_pair(edit,bit__16786,idx__16787);
} else
{if("\uFDD0'else")
{return inode__16785;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__16791 = this;
var inode__16792 = this;
if((e === this__16791.edit))
{return inode__16792;
} else
{var n__16793 = cljs.core.bit_count.call(null,this__16791.bitmap);
var new_arr__16794 = cljs.core.make_array.call(null,(((n__16793 < 0))?4:(2 * (n__16793 + 1))));
cljs.core.array_copy.call(null,this__16791.arr,0,new_arr__16794,0,(2 * n__16793));
return (new cljs.core.BitmapIndexedNode(e,this__16791.bitmap,new_arr__16794));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__16795 = this;
var inode__16796 = this;
return cljs.core.inode_kv_reduce.call(null,this__16795.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__16797 = this;
var inode__16798 = this;
var bit__16799 = (1 << ((hash >>> shift) & 0x01f));
if(((this__16797.bitmap & bit__16799) === 0))
{return not_found;
} else
{var idx__16800 = cljs.core.bitmap_indexed_node_index.call(null,this__16797.bitmap,bit__16799);
var key_or_nil__16801 = (this__16797.arr[(2 * idx__16800)]);
var val_or_node__16802 = (this__16797.arr[((2 * idx__16800) + 1)]);
if((key_or_nil__16801 == null))
{return val_or_node__16802.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__16801))
{return cljs.core.PersistentVector.fromArray([key_or_nil__16801,val_or_node__16802], true);
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
var this__16803 = this;
var inode__16804 = this;
var bit__16805 = (1 << ((hash >>> shift) & 0x01f));
if(((this__16803.bitmap & bit__16805) === 0))
{return inode__16804;
} else
{var idx__16806 = cljs.core.bitmap_indexed_node_index.call(null,this__16803.bitmap,bit__16805);
var key_or_nil__16807 = (this__16803.arr[(2 * idx__16806)]);
var val_or_node__16808 = (this__16803.arr[((2 * idx__16806) + 1)]);
if((key_or_nil__16807 == null))
{var n__16809 = val_or_node__16808.inode_without((shift + 5),hash,key);
if((n__16809 === val_or_node__16808))
{return inode__16804;
} else
{if(!((n__16809 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__16803.bitmap,cljs.core.clone_and_set.call(null,this__16803.arr,((2 * idx__16806) + 1),n__16809)));
} else
{if((this__16803.bitmap === bit__16805))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__16803.bitmap ^ bit__16805),cljs.core.remove_pair.call(null,this__16803.arr,idx__16806)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__16807))
{return (new cljs.core.BitmapIndexedNode(null,(this__16803.bitmap ^ bit__16805),cljs.core.remove_pair.call(null,this__16803.arr,idx__16806)));
} else
{if("\uFDD0'else")
{return inode__16804;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__16810 = this;
var inode__16811 = this;
var bit__16812 = (1 << ((hash >>> shift) & 0x01f));
var idx__16813 = cljs.core.bitmap_indexed_node_index.call(null,this__16810.bitmap,bit__16812);
if(((this__16810.bitmap & bit__16812) === 0))
{var n__16814 = cljs.core.bit_count.call(null,this__16810.bitmap);
if((n__16814 >= 16))
{var nodes__16815 = cljs.core.make_array.call(null,32);
var jdx__16816 = ((hash >>> shift) & 0x01f);
(nodes__16815[jdx__16816] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__16817 = 0;
var j__16818 = 0;
while(true){
if((i__16817 < 32))
{if((((this__16810.bitmap >>> i__16817) & 1) === 0))
{{
var G__16833 = (i__16817 + 1);
var G__16834 = j__16818;
i__16817 = G__16833;
j__16818 = G__16834;
continue;
}
} else
{(nodes__16815[i__16817] = ((!(((this__16810.arr[j__16818]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__16810.arr[j__16818])),(this__16810.arr[j__16818]),(this__16810.arr[(j__16818 + 1)]),added_leaf_QMARK_):(this__16810.arr[(j__16818 + 1)])));
{
var G__16835 = (i__16817 + 1);
var G__16836 = (j__16818 + 2);
i__16817 = G__16835;
j__16818 = G__16836;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__16814 + 1),nodes__16815));
} else
{var new_arr__16819 = cljs.core.make_array.call(null,(2 * (n__16814 + 1)));
cljs.core.array_copy.call(null,this__16810.arr,0,new_arr__16819,0,(2 * idx__16813));
(new_arr__16819[(2 * idx__16813)] = key);
(new_arr__16819[((2 * idx__16813) + 1)] = val);
cljs.core.array_copy.call(null,this__16810.arr,(2 * idx__16813),new_arr__16819,(2 * (idx__16813 + 1)),(2 * (n__16814 - idx__16813)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__16810.bitmap | bit__16812),new_arr__16819));
}
} else
{var key_or_nil__16820 = (this__16810.arr[(2 * idx__16813)]);
var val_or_node__16821 = (this__16810.arr[((2 * idx__16813) + 1)]);
if((key_or_nil__16820 == null))
{var n__16822 = val_or_node__16821.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__16822 === val_or_node__16821))
{return inode__16811;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__16810.bitmap,cljs.core.clone_and_set.call(null,this__16810.arr,((2 * idx__16813) + 1),n__16822)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__16820))
{if((val === val_or_node__16821))
{return inode__16811;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__16810.bitmap,cljs.core.clone_and_set.call(null,this__16810.arr,((2 * idx__16813) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__16810.bitmap,cljs.core.clone_and_set.call(null,this__16810.arr,(2 * idx__16813),null,((2 * idx__16813) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__16820,val_or_node__16821,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__16823 = this;
var inode__16824 = this;
var bit__16825 = (1 << ((hash >>> shift) & 0x01f));
if(((this__16823.bitmap & bit__16825) === 0))
{return not_found;
} else
{var idx__16826 = cljs.core.bitmap_indexed_node_index.call(null,this__16823.bitmap,bit__16825);
var key_or_nil__16827 = (this__16823.arr[(2 * idx__16826)]);
var val_or_node__16828 = (this__16823.arr[((2 * idx__16826) + 1)]);
if((key_or_nil__16827 == null))
{return val_or_node__16828.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__16827))
{return val_or_node__16828;
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
var arr__16844 = array_node.arr;
var len__16845 = (2 * (array_node.cnt - 1));
var new_arr__16846 = cljs.core.make_array.call(null,len__16845);
var i__16847 = 0;
var j__16848 = 1;
var bitmap__16849 = 0;
while(true){
if((i__16847 < len__16845))
{if((function (){var and__3822__auto____16850 = !((i__16847 === idx));
if(and__3822__auto____16850)
{return !(((arr__16844[i__16847]) == null));
} else
{return and__3822__auto____16850;
}
})())
{(new_arr__16846[j__16848] = (arr__16844[i__16847]));
{
var G__16851 = (i__16847 + 1);
var G__16852 = (j__16848 + 2);
var G__16853 = (bitmap__16849 | (1 << i__16847));
i__16847 = G__16851;
j__16848 = G__16852;
bitmap__16849 = G__16853;
continue;
}
} else
{{
var G__16854 = (i__16847 + 1);
var G__16855 = j__16848;
var G__16856 = bitmap__16849;
i__16847 = G__16854;
j__16848 = G__16855;
bitmap__16849 = G__16856;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__16849,new_arr__16846));
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
var this__16857 = this;
var inode__16858 = this;
var idx__16859 = ((hash >>> shift) & 0x01f);
var node__16860 = (this__16857.arr[idx__16859]);
if((node__16860 == null))
{var editable__16861 = cljs.core.edit_and_set.call(null,inode__16858,edit,idx__16859,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__16861.cnt = (editable__16861.cnt + 1);
return editable__16861;
} else
{var n__16862 = node__16860.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__16862 === node__16860))
{return inode__16858;
} else
{return cljs.core.edit_and_set.call(null,inode__16858,edit,idx__16859,n__16862);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__16863 = this;
var inode__16864 = this;
return cljs.core.create_array_node_seq.call(null,this__16863.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__16865 = this;
var inode__16866 = this;
var idx__16867 = ((hash >>> shift) & 0x01f);
var node__16868 = (this__16865.arr[idx__16867]);
if((node__16868 == null))
{return inode__16866;
} else
{var n__16869 = node__16868.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__16869 === node__16868))
{return inode__16866;
} else
{if((n__16869 == null))
{if((this__16865.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__16866,edit,idx__16867);
} else
{var editable__16870 = cljs.core.edit_and_set.call(null,inode__16866,edit,idx__16867,n__16869);
editable__16870.cnt = (editable__16870.cnt - 1);
return editable__16870;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__16866,edit,idx__16867,n__16869);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__16871 = this;
var inode__16872 = this;
if((e === this__16871.edit))
{return inode__16872;
} else
{return (new cljs.core.ArrayNode(e,this__16871.cnt,this__16871.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__16873 = this;
var inode__16874 = this;
var len__16875 = this__16873.arr.length;
var i__16876 = 0;
var init__16877 = init;
while(true){
if((i__16876 < len__16875))
{var node__16878 = (this__16873.arr[i__16876]);
if(!((node__16878 == null)))
{var init__16879 = node__16878.kv_reduce(f,init__16877);
if(cljs.core.reduced_QMARK_.call(null,init__16879))
{return cljs.core.deref.call(null,init__16879);
} else
{{
var G__16898 = (i__16876 + 1);
var G__16899 = init__16879;
i__16876 = G__16898;
init__16877 = G__16899;
continue;
}
}
} else
{return null;
}
} else
{return init__16877;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__16880 = this;
var inode__16881 = this;
var idx__16882 = ((hash >>> shift) & 0x01f);
var node__16883 = (this__16880.arr[idx__16882]);
if(!((node__16883 == null)))
{return node__16883.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__16884 = this;
var inode__16885 = this;
var idx__16886 = ((hash >>> shift) & 0x01f);
var node__16887 = (this__16884.arr[idx__16886]);
if(!((node__16887 == null)))
{var n__16888 = node__16887.inode_without((shift + 5),hash,key);
if((n__16888 === node__16887))
{return inode__16885;
} else
{if((n__16888 == null))
{if((this__16884.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__16885,null,idx__16886);
} else
{return (new cljs.core.ArrayNode(null,(this__16884.cnt - 1),cljs.core.clone_and_set.call(null,this__16884.arr,idx__16886,n__16888)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__16884.cnt,cljs.core.clone_and_set.call(null,this__16884.arr,idx__16886,n__16888)));
} else
{return null;
}
}
}
} else
{return inode__16885;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__16889 = this;
var inode__16890 = this;
var idx__16891 = ((hash >>> shift) & 0x01f);
var node__16892 = (this__16889.arr[idx__16891]);
if((node__16892 == null))
{return (new cljs.core.ArrayNode(null,(this__16889.cnt + 1),cljs.core.clone_and_set.call(null,this__16889.arr,idx__16891,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__16893 = node__16892.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__16893 === node__16892))
{return inode__16890;
} else
{return (new cljs.core.ArrayNode(null,this__16889.cnt,cljs.core.clone_and_set.call(null,this__16889.arr,idx__16891,n__16893)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__16894 = this;
var inode__16895 = this;
var idx__16896 = ((hash >>> shift) & 0x01f);
var node__16897 = (this__16894.arr[idx__16896]);
if(!((node__16897 == null)))
{return node__16897.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__16902 = (2 * cnt);
var i__16903 = 0;
while(true){
if((i__16903 < lim__16902))
{if(cljs.core.key_test.call(null,key,(arr[i__16903])))
{return i__16903;
} else
{{
var G__16904 = (i__16903 + 2);
i__16903 = G__16904;
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
var this__16905 = this;
var inode__16906 = this;
if((hash === this__16905.collision_hash))
{var idx__16907 = cljs.core.hash_collision_node_find_index.call(null,this__16905.arr,this__16905.cnt,key);
if((idx__16907 === -1))
{if((this__16905.arr.length > (2 * this__16905.cnt)))
{var editable__16908 = cljs.core.edit_and_set.call(null,inode__16906,edit,(2 * this__16905.cnt),key,((2 * this__16905.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__16908.cnt = (editable__16908.cnt + 1);
return editable__16908;
} else
{var len__16909 = this__16905.arr.length;
var new_arr__16910 = cljs.core.make_array.call(null,(len__16909 + 2));
cljs.core.array_copy.call(null,this__16905.arr,0,new_arr__16910,0,len__16909);
(new_arr__16910[len__16909] = key);
(new_arr__16910[(len__16909 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__16906.ensure_editable_array(edit,(this__16905.cnt + 1),new_arr__16910);
}
} else
{if(((this__16905.arr[(idx__16907 + 1)]) === val))
{return inode__16906;
} else
{return cljs.core.edit_and_set.call(null,inode__16906,edit,(idx__16907 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__16905.collision_hash >>> shift) & 0x01f)),[null,inode__16906,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__16911 = this;
var inode__16912 = this;
return cljs.core.create_inode_seq.call(null,this__16911.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__16913 = this;
var inode__16914 = this;
var idx__16915 = cljs.core.hash_collision_node_find_index.call(null,this__16913.arr,this__16913.cnt,key);
if((idx__16915 === -1))
{return inode__16914;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__16913.cnt === 1))
{return null;
} else
{var editable__16916 = inode__16914.ensure_editable(edit);
var earr__16917 = editable__16916.arr;
(earr__16917[idx__16915] = (earr__16917[((2 * this__16913.cnt) - 2)]));
(earr__16917[(idx__16915 + 1)] = (earr__16917[((2 * this__16913.cnt) - 1)]));
(earr__16917[((2 * this__16913.cnt) - 1)] = null);
(earr__16917[((2 * this__16913.cnt) - 2)] = null);
editable__16916.cnt = (editable__16916.cnt - 1);
return editable__16916;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__16918 = this;
var inode__16919 = this;
if((e === this__16918.edit))
{return inode__16919;
} else
{var new_arr__16920 = cljs.core.make_array.call(null,(2 * (this__16918.cnt + 1)));
cljs.core.array_copy.call(null,this__16918.arr,0,new_arr__16920,0,(2 * this__16918.cnt));
return (new cljs.core.HashCollisionNode(e,this__16918.collision_hash,this__16918.cnt,new_arr__16920));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__16921 = this;
var inode__16922 = this;
return cljs.core.inode_kv_reduce.call(null,this__16921.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__16923 = this;
var inode__16924 = this;
var idx__16925 = cljs.core.hash_collision_node_find_index.call(null,this__16923.arr,this__16923.cnt,key);
if((idx__16925 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__16923.arr[idx__16925])))
{return cljs.core.PersistentVector.fromArray([(this__16923.arr[idx__16925]),(this__16923.arr[(idx__16925 + 1)])], true);
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
var this__16926 = this;
var inode__16927 = this;
var idx__16928 = cljs.core.hash_collision_node_find_index.call(null,this__16926.arr,this__16926.cnt,key);
if((idx__16928 === -1))
{return inode__16927;
} else
{if((this__16926.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__16926.collision_hash,(this__16926.cnt - 1),cljs.core.remove_pair.call(null,this__16926.arr,cljs.core.quot.call(null,idx__16928,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__16929 = this;
var inode__16930 = this;
if((hash === this__16929.collision_hash))
{var idx__16931 = cljs.core.hash_collision_node_find_index.call(null,this__16929.arr,this__16929.cnt,key);
if((idx__16931 === -1))
{var len__16932 = this__16929.arr.length;
var new_arr__16933 = cljs.core.make_array.call(null,(len__16932 + 2));
cljs.core.array_copy.call(null,this__16929.arr,0,new_arr__16933,0,len__16932);
(new_arr__16933[len__16932] = key);
(new_arr__16933[(len__16932 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__16929.collision_hash,(this__16929.cnt + 1),new_arr__16933));
} else
{if(cljs.core._EQ_.call(null,(this__16929.arr[idx__16931]),val))
{return inode__16930;
} else
{return (new cljs.core.HashCollisionNode(null,this__16929.collision_hash,this__16929.cnt,cljs.core.clone_and_set.call(null,this__16929.arr,(idx__16931 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__16929.collision_hash >>> shift) & 0x01f)),[null,inode__16930])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__16934 = this;
var inode__16935 = this;
var idx__16936 = cljs.core.hash_collision_node_find_index.call(null,this__16934.arr,this__16934.cnt,key);
if((idx__16936 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__16934.arr[idx__16936])))
{return (this__16934.arr[(idx__16936 + 1)]);
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
var this__16937 = this;
var inode__16938 = this;
if((e === this__16937.edit))
{this__16937.arr = array;
this__16937.cnt = count;
return inode__16938;
} else
{return (new cljs.core.HashCollisionNode(this__16937.edit,this__16937.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__16943 = cljs.core.hash.call(null,key1);
if((key1hash__16943 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__16943,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___16944 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__16943,key1,val1,added_leaf_QMARK___16944).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___16944);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__16945 = cljs.core.hash.call(null,key1);
if((key1hash__16945 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__16945,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___16946 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__16945,key1,val1,added_leaf_QMARK___16946).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___16946);
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
var this__16947 = this;
var h__2281__auto____16948 = this__16947.__hash;
if(!((h__2281__auto____16948 == null)))
{return h__2281__auto____16948;
} else
{var h__2281__auto____16949 = cljs.core.hash_coll.call(null,coll);
this__16947.__hash = h__2281__auto____16949;
return h__2281__auto____16949;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__16950 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__16951 = this;
var this__16952 = this;
return cljs.core.pr_str.call(null,this__16952);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__16953 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__16954 = this;
if((this__16954.s == null))
{return cljs.core.PersistentVector.fromArray([(this__16954.nodes[this__16954.i]),(this__16954.nodes[(this__16954.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__16954.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__16955 = this;
if((this__16955.s == null))
{return cljs.core.create_inode_seq.call(null,this__16955.nodes,(this__16955.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__16955.nodes,this__16955.i,cljs.core.next.call(null,this__16955.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__16956 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__16957 = this;
return (new cljs.core.NodeSeq(meta,this__16957.nodes,this__16957.i,this__16957.s,this__16957.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__16958 = this;
return this__16958.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__16959 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__16959.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__16966 = nodes.length;
var j__16967 = i;
while(true){
if((j__16967 < len__16966))
{if(!(((nodes[j__16967]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__16967,null,null));
} else
{var temp__3971__auto____16968 = (nodes[(j__16967 + 1)]);
if(cljs.core.truth_(temp__3971__auto____16968))
{var node__16969 = temp__3971__auto____16968;
var temp__3971__auto____16970 = node__16969.inode_seq();
if(cljs.core.truth_(temp__3971__auto____16970))
{var node_seq__16971 = temp__3971__auto____16970;
return (new cljs.core.NodeSeq(null,nodes,(j__16967 + 2),node_seq__16971,null));
} else
{{
var G__16972 = (j__16967 + 2);
j__16967 = G__16972;
continue;
}
}
} else
{{
var G__16973 = (j__16967 + 2);
j__16967 = G__16973;
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
var this__16974 = this;
var h__2281__auto____16975 = this__16974.__hash;
if(!((h__2281__auto____16975 == null)))
{return h__2281__auto____16975;
} else
{var h__2281__auto____16976 = cljs.core.hash_coll.call(null,coll);
this__16974.__hash = h__2281__auto____16976;
return h__2281__auto____16976;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__16977 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__16978 = this;
var this__16979 = this;
return cljs.core.pr_str.call(null,this__16979);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__16980 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__16981 = this;
return cljs.core.first.call(null,this__16981.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__16982 = this;
return cljs.core.create_array_node_seq.call(null,null,this__16982.nodes,this__16982.i,cljs.core.next.call(null,this__16982.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__16983 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__16984 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__16984.nodes,this__16984.i,this__16984.s,this__16984.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__16985 = this;
return this__16985.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__16986 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__16986.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__16993 = nodes.length;
var j__16994 = i;
while(true){
if((j__16994 < len__16993))
{var temp__3971__auto____16995 = (nodes[j__16994]);
if(cljs.core.truth_(temp__3971__auto____16995))
{var nj__16996 = temp__3971__auto____16995;
var temp__3971__auto____16997 = nj__16996.inode_seq();
if(cljs.core.truth_(temp__3971__auto____16997))
{var ns__16998 = temp__3971__auto____16997;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__16994 + 1),ns__16998,null));
} else
{{
var G__16999 = (j__16994 + 1);
j__16994 = G__16999;
continue;
}
}
} else
{{
var G__17000 = (j__16994 + 1);
j__16994 = G__17000;
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
var this__17003 = this;
return (new cljs.core.TransientHashMap({},this__17003.root,this__17003.cnt,this__17003.has_nil_QMARK_,this__17003.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__17004 = this;
var h__2281__auto____17005 = this__17004.__hash;
if(!((h__2281__auto____17005 == null)))
{return h__2281__auto____17005;
} else
{var h__2281__auto____17006 = cljs.core.hash_imap.call(null,coll);
this__17004.__hash = h__2281__auto____17006;
return h__2281__auto____17006;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__17007 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__17008 = this;
if((k == null))
{if(this__17008.has_nil_QMARK_)
{return this__17008.nil_val;
} else
{return not_found;
}
} else
{if((this__17008.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__17008.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__17009 = this;
if((k == null))
{if((function (){var and__3822__auto____17010 = this__17009.has_nil_QMARK_;
if(and__3822__auto____17010)
{return (v === this__17009.nil_val);
} else
{return and__3822__auto____17010;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__17009.meta,((this__17009.has_nil_QMARK_)?this__17009.cnt:(this__17009.cnt + 1)),this__17009.root,true,v,null));
}
} else
{var added_leaf_QMARK___17011 = (new cljs.core.Box(false));
var new_root__17012 = (((this__17009.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__17009.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___17011);
if((new_root__17012 === this__17009.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__17009.meta,((added_leaf_QMARK___17011.val)?(this__17009.cnt + 1):this__17009.cnt),new_root__17012,this__17009.has_nil_QMARK_,this__17009.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__17013 = this;
if((k == null))
{return this__17013.has_nil_QMARK_;
} else
{if((this__17013.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__17013.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__17036 = null;
var G__17036__2 = (function (this_sym17014,k){
var this__17016 = this;
var this_sym17014__17017 = this;
var coll__17018 = this_sym17014__17017;
return coll__17018.cljs$core$ILookup$_lookup$arity$2(coll__17018,k);
});
var G__17036__3 = (function (this_sym17015,k,not_found){
var this__17016 = this;
var this_sym17015__17019 = this;
var coll__17020 = this_sym17015__17019;
return coll__17020.cljs$core$ILookup$_lookup$arity$3(coll__17020,k,not_found);
});
G__17036 = function(this_sym17015,k,not_found){
switch(arguments.length){
case 2:
return G__17036__2.call(this,this_sym17015,k);
case 3:
return G__17036__3.call(this,this_sym17015,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17036;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym17001,args17002){
var this__17021 = this;
return this_sym17001.call.apply(this_sym17001,[this_sym17001].concat(args17002.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__17022 = this;
var init__17023 = ((this__17022.has_nil_QMARK_)?f.call(null,init,null,this__17022.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__17023))
{return cljs.core.deref.call(null,init__17023);
} else
{if(!((this__17022.root == null)))
{return this__17022.root.kv_reduce(f,init__17023);
} else
{if("\uFDD0'else")
{return init__17023;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__17024 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__17025 = this;
var this__17026 = this;
return cljs.core.pr_str.call(null,this__17026);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__17027 = this;
if((this__17027.cnt > 0))
{var s__17028 = ((!((this__17027.root == null)))?this__17027.root.inode_seq():null);
if(this__17027.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__17027.nil_val], true),s__17028);
} else
{return s__17028;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__17029 = this;
return this__17029.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17030 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__17031 = this;
return (new cljs.core.PersistentHashMap(meta,this__17031.cnt,this__17031.root,this__17031.has_nil_QMARK_,this__17031.nil_val,this__17031.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__17032 = this;
return this__17032.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__17033 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__17033.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__17034 = this;
if((k == null))
{if(this__17034.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__17034.meta,(this__17034.cnt - 1),this__17034.root,false,null,null));
} else
{return coll;
}
} else
{if((this__17034.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__17035 = this__17034.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__17035 === this__17034.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__17034.meta,(this__17034.cnt - 1),new_root__17035,this__17034.has_nil_QMARK_,this__17034.nil_val,null));
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
var len__17037 = ks.length;
var i__17038 = 0;
var out__17039 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__17038 < len__17037))
{{
var G__17040 = (i__17038 + 1);
var G__17041 = cljs.core.assoc_BANG_.call(null,out__17039,(ks[i__17038]),(vs[i__17038]));
i__17038 = G__17040;
out__17039 = G__17041;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__17039);
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
var this__17042 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__17043 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__17044 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__17045 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__17046 = this;
if((k == null))
{if(this__17046.has_nil_QMARK_)
{return this__17046.nil_val;
} else
{return null;
}
} else
{if((this__17046.root == null))
{return null;
} else
{return this__17046.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__17047 = this;
if((k == null))
{if(this__17047.has_nil_QMARK_)
{return this__17047.nil_val;
} else
{return not_found;
}
} else
{if((this__17047.root == null))
{return not_found;
} else
{return this__17047.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__17048 = this;
if(this__17048.edit)
{return this__17048.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__17049 = this;
var tcoll__17050 = this;
if(this__17049.edit)
{if((function (){var G__17051__17052 = o;
if(G__17051__17052)
{if((function (){var or__3824__auto____17053 = (G__17051__17052.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____17053)
{return or__3824__auto____17053;
} else
{return G__17051__17052.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__17051__17052.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__17051__17052);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__17051__17052);
}
})())
{return tcoll__17050.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__17054 = cljs.core.seq.call(null,o);
var tcoll__17055 = tcoll__17050;
while(true){
var temp__3971__auto____17056 = cljs.core.first.call(null,es__17054);
if(cljs.core.truth_(temp__3971__auto____17056))
{var e__17057 = temp__3971__auto____17056;
{
var G__17068 = cljs.core.next.call(null,es__17054);
var G__17069 = tcoll__17055.assoc_BANG_(cljs.core.key.call(null,e__17057),cljs.core.val.call(null,e__17057));
es__17054 = G__17068;
tcoll__17055 = G__17069;
continue;
}
} else
{return tcoll__17055;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__17058 = this;
var tcoll__17059 = this;
if(this__17058.edit)
{if((k == null))
{if((this__17058.nil_val === v))
{} else
{this__17058.nil_val = v;
}
if(this__17058.has_nil_QMARK_)
{} else
{this__17058.count = (this__17058.count + 1);
this__17058.has_nil_QMARK_ = true;
}
return tcoll__17059;
} else
{var added_leaf_QMARK___17060 = (new cljs.core.Box(false));
var node__17061 = (((this__17058.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__17058.root).inode_assoc_BANG_(this__17058.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___17060);
if((node__17061 === this__17058.root))
{} else
{this__17058.root = node__17061;
}
if(added_leaf_QMARK___17060.val)
{this__17058.count = (this__17058.count + 1);
} else
{}
return tcoll__17059;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__17062 = this;
var tcoll__17063 = this;
if(this__17062.edit)
{if((k == null))
{if(this__17062.has_nil_QMARK_)
{this__17062.has_nil_QMARK_ = false;
this__17062.nil_val = null;
this__17062.count = (this__17062.count - 1);
return tcoll__17063;
} else
{return tcoll__17063;
}
} else
{if((this__17062.root == null))
{return tcoll__17063;
} else
{var removed_leaf_QMARK___17064 = (new cljs.core.Box(false));
var node__17065 = this__17062.root.inode_without_BANG_(this__17062.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___17064);
if((node__17065 === this__17062.root))
{} else
{this__17062.root = node__17065;
}
if(cljs.core.truth_((removed_leaf_QMARK___17064[0])))
{this__17062.count = (this__17062.count - 1);
} else
{}
return tcoll__17063;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__17066 = this;
var tcoll__17067 = this;
if(this__17066.edit)
{this__17066.edit = null;
return (new cljs.core.PersistentHashMap(null,this__17066.count,this__17066.root,this__17066.has_nil_QMARK_,this__17066.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__17072 = node;
var stack__17073 = stack;
while(true){
if(!((t__17072 == null)))
{{
var G__17074 = ((ascending_QMARK_)?t__17072.left:t__17072.right);
var G__17075 = cljs.core.conj.call(null,stack__17073,t__17072);
t__17072 = G__17074;
stack__17073 = G__17075;
continue;
}
} else
{return stack__17073;
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
var this__17076 = this;
var h__2281__auto____17077 = this__17076.__hash;
if(!((h__2281__auto____17077 == null)))
{return h__2281__auto____17077;
} else
{var h__2281__auto____17078 = cljs.core.hash_coll.call(null,coll);
this__17076.__hash = h__2281__auto____17078;
return h__2281__auto____17078;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__17079 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__17080 = this;
var this__17081 = this;
return cljs.core.pr_str.call(null,this__17081);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__17082 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__17083 = this;
if((this__17083.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__17083.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__17084 = this;
return cljs.core.peek.call(null,this__17084.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__17085 = this;
var t__17086 = cljs.core.first.call(null,this__17085.stack);
var next_stack__17087 = cljs.core.tree_map_seq_push.call(null,((this__17085.ascending_QMARK_)?t__17086.right:t__17086.left),cljs.core.next.call(null,this__17085.stack),this__17085.ascending_QMARK_);
if(!((next_stack__17087 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__17087,this__17085.ascending_QMARK_,(this__17085.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17088 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__17089 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__17089.stack,this__17089.ascending_QMARK_,this__17089.cnt,this__17089.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__17090 = this;
return this__17090.meta;
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
{if((function (){var and__3822__auto____17092 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____17092)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____17092;
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
{if((function (){var and__3822__auto____17094 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____17094)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____17094;
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
var init__17098 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__17098))
{return cljs.core.deref.call(null,init__17098);
} else
{var init__17099 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__17098):init__17098);
if(cljs.core.reduced_QMARK_.call(null,init__17099))
{return cljs.core.deref.call(null,init__17099);
} else
{var init__17100 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__17099):init__17099);
if(cljs.core.reduced_QMARK_.call(null,init__17100))
{return cljs.core.deref.call(null,init__17100);
} else
{return init__17100;
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
var this__17103 = this;
var h__2281__auto____17104 = this__17103.__hash;
if(!((h__2281__auto____17104 == null)))
{return h__2281__auto____17104;
} else
{var h__2281__auto____17105 = cljs.core.hash_coll.call(null,coll);
this__17103.__hash = h__2281__auto____17105;
return h__2281__auto____17105;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__17106 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__17107 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__17108 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__17108.key,this__17108.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__17156 = null;
var G__17156__2 = (function (this_sym17109,k){
var this__17111 = this;
var this_sym17109__17112 = this;
var node__17113 = this_sym17109__17112;
return node__17113.cljs$core$ILookup$_lookup$arity$2(node__17113,k);
});
var G__17156__3 = (function (this_sym17110,k,not_found){
var this__17111 = this;
var this_sym17110__17114 = this;
var node__17115 = this_sym17110__17114;
return node__17115.cljs$core$ILookup$_lookup$arity$3(node__17115,k,not_found);
});
G__17156 = function(this_sym17110,k,not_found){
switch(arguments.length){
case 2:
return G__17156__2.call(this,this_sym17110,k);
case 3:
return G__17156__3.call(this,this_sym17110,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17156;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym17101,args17102){
var this__17116 = this;
return this_sym17101.call.apply(this_sym17101,[this_sym17101].concat(args17102.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__17117 = this;
return cljs.core.PersistentVector.fromArray([this__17117.key,this__17117.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__17118 = this;
return this__17118.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__17119 = this;
return this__17119.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__17120 = this;
var node__17121 = this;
return ins.balance_right(node__17121);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__17122 = this;
var node__17123 = this;
return (new cljs.core.RedNode(this__17122.key,this__17122.val,this__17122.left,this__17122.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__17124 = this;
var node__17125 = this;
return cljs.core.balance_right_del.call(null,this__17124.key,this__17124.val,this__17124.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__17126 = this;
var node__17127 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__17128 = this;
var node__17129 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__17129,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__17130 = this;
var node__17131 = this;
return cljs.core.balance_left_del.call(null,this__17130.key,this__17130.val,del,this__17130.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__17132 = this;
var node__17133 = this;
return ins.balance_left(node__17133);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__17134 = this;
var node__17135 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__17135,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__17157 = null;
var G__17157__0 = (function (){
var this__17136 = this;
var this__17138 = this;
return cljs.core.pr_str.call(null,this__17138);
});
G__17157 = function(){
switch(arguments.length){
case 0:
return G__17157__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17157;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__17139 = this;
var node__17140 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__17140,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__17141 = this;
var node__17142 = this;
return node__17142;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__17143 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__17144 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__17145 = this;
return cljs.core.list.call(null,this__17145.key,this__17145.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__17146 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__17147 = this;
return this__17147.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__17148 = this;
return cljs.core.PersistentVector.fromArray([this__17148.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__17149 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__17149.key,this__17149.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17150 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__17151 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__17151.key,this__17151.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__17152 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__17153 = this;
if((n === 0))
{return this__17153.key;
} else
{if((n === 1))
{return this__17153.val;
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
var this__17154 = this;
if((n === 0))
{return this__17154.key;
} else
{if((n === 1))
{return this__17154.val;
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
var this__17155 = this;
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
var this__17160 = this;
var h__2281__auto____17161 = this__17160.__hash;
if(!((h__2281__auto____17161 == null)))
{return h__2281__auto____17161;
} else
{var h__2281__auto____17162 = cljs.core.hash_coll.call(null,coll);
this__17160.__hash = h__2281__auto____17162;
return h__2281__auto____17162;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__17163 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__17164 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__17165 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__17165.key,this__17165.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__17213 = null;
var G__17213__2 = (function (this_sym17166,k){
var this__17168 = this;
var this_sym17166__17169 = this;
var node__17170 = this_sym17166__17169;
return node__17170.cljs$core$ILookup$_lookup$arity$2(node__17170,k);
});
var G__17213__3 = (function (this_sym17167,k,not_found){
var this__17168 = this;
var this_sym17167__17171 = this;
var node__17172 = this_sym17167__17171;
return node__17172.cljs$core$ILookup$_lookup$arity$3(node__17172,k,not_found);
});
G__17213 = function(this_sym17167,k,not_found){
switch(arguments.length){
case 2:
return G__17213__2.call(this,this_sym17167,k);
case 3:
return G__17213__3.call(this,this_sym17167,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17213;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym17158,args17159){
var this__17173 = this;
return this_sym17158.call.apply(this_sym17158,[this_sym17158].concat(args17159.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__17174 = this;
return cljs.core.PersistentVector.fromArray([this__17174.key,this__17174.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__17175 = this;
return this__17175.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__17176 = this;
return this__17176.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__17177 = this;
var node__17178 = this;
return (new cljs.core.RedNode(this__17177.key,this__17177.val,this__17177.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__17179 = this;
var node__17180 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__17181 = this;
var node__17182 = this;
return (new cljs.core.RedNode(this__17181.key,this__17181.val,this__17181.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__17183 = this;
var node__17184 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__17185 = this;
var node__17186 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__17186,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__17187 = this;
var node__17188 = this;
return (new cljs.core.RedNode(this__17187.key,this__17187.val,del,this__17187.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__17189 = this;
var node__17190 = this;
return (new cljs.core.RedNode(this__17189.key,this__17189.val,ins,this__17189.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__17191 = this;
var node__17192 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__17191.left))
{return (new cljs.core.RedNode(this__17191.key,this__17191.val,this__17191.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__17191.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__17191.right))
{return (new cljs.core.RedNode(this__17191.right.key,this__17191.right.val,(new cljs.core.BlackNode(this__17191.key,this__17191.val,this__17191.left,this__17191.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__17191.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__17192,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__17214 = null;
var G__17214__0 = (function (){
var this__17193 = this;
var this__17195 = this;
return cljs.core.pr_str.call(null,this__17195);
});
G__17214 = function(){
switch(arguments.length){
case 0:
return G__17214__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17214;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__17196 = this;
var node__17197 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__17196.right))
{return (new cljs.core.RedNode(this__17196.key,this__17196.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__17196.left,null)),this__17196.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__17196.left))
{return (new cljs.core.RedNode(this__17196.left.key,this__17196.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__17196.left.left,null)),(new cljs.core.BlackNode(this__17196.key,this__17196.val,this__17196.left.right,this__17196.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__17197,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__17198 = this;
var node__17199 = this;
return (new cljs.core.BlackNode(this__17198.key,this__17198.val,this__17198.left,this__17198.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__17200 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__17201 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__17202 = this;
return cljs.core.list.call(null,this__17202.key,this__17202.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__17203 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__17204 = this;
return this__17204.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__17205 = this;
return cljs.core.PersistentVector.fromArray([this__17205.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__17206 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__17206.key,this__17206.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17207 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__17208 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__17208.key,this__17208.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__17209 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__17210 = this;
if((n === 0))
{return this__17210.key;
} else
{if((n === 1))
{return this__17210.val;
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
var this__17211 = this;
if((n === 0))
{return this__17211.key;
} else
{if((n === 1))
{return this__17211.val;
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
var this__17212 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__17218 = comp.call(null,k,tree.key);
if((c__17218 === 0))
{(found[0] = tree);
return null;
} else
{if((c__17218 < 0))
{var ins__17219 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__17219 == null)))
{return tree.add_left(ins__17219);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__17220 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__17220 == null)))
{return tree.add_right(ins__17220);
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
{var app__17223 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__17223))
{return (new cljs.core.RedNode(app__17223.key,app__17223.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__17223.left,null)),(new cljs.core.RedNode(right.key,right.val,app__17223.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__17223,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__17224 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__17224))
{return (new cljs.core.RedNode(app__17224.key,app__17224.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__17224.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__17224.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__17224,right.right,null)));
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
{var c__17230 = comp.call(null,k,tree.key);
if((c__17230 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__17230 < 0))
{var del__17231 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____17232 = !((del__17231 == null));
if(or__3824__auto____17232)
{return or__3824__auto____17232;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__17231,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__17231,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__17233 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____17234 = !((del__17233 == null));
if(or__3824__auto____17234)
{return or__3824__auto____17234;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__17233);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__17233,null));
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
var tk__17237 = tree.key;
var c__17238 = comp.call(null,k,tk__17237);
if((c__17238 === 0))
{return tree.replace(tk__17237,v,tree.left,tree.right);
} else
{if((c__17238 < 0))
{return tree.replace(tk__17237,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__17237,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
var this__17241 = this;
var h__2281__auto____17242 = this__17241.__hash;
if(!((h__2281__auto____17242 == null)))
{return h__2281__auto____17242;
} else
{var h__2281__auto____17243 = cljs.core.hash_imap.call(null,coll);
this__17241.__hash = h__2281__auto____17243;
return h__2281__auto____17243;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__17244 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__17245 = this;
var n__17246 = coll.entry_at(k);
if(!((n__17246 == null)))
{return n__17246.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__17247 = this;
var found__17248 = [null];
var t__17249 = cljs.core.tree_map_add.call(null,this__17247.comp,this__17247.tree,k,v,found__17248);
if((t__17249 == null))
{var found_node__17250 = cljs.core.nth.call(null,found__17248,0);
if(cljs.core._EQ_.call(null,v,found_node__17250.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__17247.comp,cljs.core.tree_map_replace.call(null,this__17247.comp,this__17247.tree,k,v),this__17247.cnt,this__17247.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__17247.comp,t__17249.blacken(),(this__17247.cnt + 1),this__17247.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__17251 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__17285 = null;
var G__17285__2 = (function (this_sym17252,k){
var this__17254 = this;
var this_sym17252__17255 = this;
var coll__17256 = this_sym17252__17255;
return coll__17256.cljs$core$ILookup$_lookup$arity$2(coll__17256,k);
});
var G__17285__3 = (function (this_sym17253,k,not_found){
var this__17254 = this;
var this_sym17253__17257 = this;
var coll__17258 = this_sym17253__17257;
return coll__17258.cljs$core$ILookup$_lookup$arity$3(coll__17258,k,not_found);
});
G__17285 = function(this_sym17253,k,not_found){
switch(arguments.length){
case 2:
return G__17285__2.call(this,this_sym17253,k);
case 3:
return G__17285__3.call(this,this_sym17253,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17285;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym17239,args17240){
var this__17259 = this;
return this_sym17239.call.apply(this_sym17239,[this_sym17239].concat(args17240.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__17260 = this;
if(!((this__17260.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__17260.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__17261 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__17262 = this;
if((this__17262.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__17262.tree,false,this__17262.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__17263 = this;
var this__17264 = this;
return cljs.core.pr_str.call(null,this__17264);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__17265 = this;
var coll__17266 = this;
var t__17267 = this__17265.tree;
while(true){
if(!((t__17267 == null)))
{var c__17268 = this__17265.comp.call(null,k,t__17267.key);
if((c__17268 === 0))
{return t__17267;
} else
{if((c__17268 < 0))
{{
var G__17286 = t__17267.left;
t__17267 = G__17286;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__17287 = t__17267.right;
t__17267 = G__17287;
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
var this__17269 = this;
if((this__17269.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__17269.tree,ascending_QMARK_,this__17269.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__17270 = this;
if((this__17270.cnt > 0))
{var stack__17271 = null;
var t__17272 = this__17270.tree;
while(true){
if(!((t__17272 == null)))
{var c__17273 = this__17270.comp.call(null,k,t__17272.key);
if((c__17273 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__17271,t__17272),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__17273 < 0))
{{
var G__17288 = cljs.core.conj.call(null,stack__17271,t__17272);
var G__17289 = t__17272.left;
stack__17271 = G__17288;
t__17272 = G__17289;
continue;
}
} else
{{
var G__17290 = stack__17271;
var G__17291 = t__17272.right;
stack__17271 = G__17290;
t__17272 = G__17291;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__17273 > 0))
{{
var G__17292 = cljs.core.conj.call(null,stack__17271,t__17272);
var G__17293 = t__17272.right;
stack__17271 = G__17292;
t__17272 = G__17293;
continue;
}
} else
{{
var G__17294 = stack__17271;
var G__17295 = t__17272.left;
stack__17271 = G__17294;
t__17272 = G__17295;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__17271 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__17271,ascending_QMARK_,-1,null));
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
var this__17274 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__17275 = this;
return this__17275.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__17276 = this;
if((this__17276.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__17276.tree,true,this__17276.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__17277 = this;
return this__17277.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17278 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__17279 = this;
return (new cljs.core.PersistentTreeMap(this__17279.comp,this__17279.tree,this__17279.cnt,meta,this__17279.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__17280 = this;
return this__17280.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__17281 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__17281.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__17282 = this;
var found__17283 = [null];
var t__17284 = cljs.core.tree_map_remove.call(null,this__17282.comp,this__17282.tree,k,found__17283);
if((t__17284 == null))
{if((cljs.core.nth.call(null,found__17283,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__17282.comp,null,0,this__17282.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__17282.comp,t__17284.blacken(),(this__17282.cnt - 1),this__17282.meta,null));
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
var in__17298 = cljs.core.seq.call(null,keyvals);
var out__17299 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__17298)
{{
var G__17300 = cljs.core.nnext.call(null,in__17298);
var G__17301 = cljs.core.assoc_BANG_.call(null,out__17299,cljs.core.first.call(null,in__17298),cljs.core.second.call(null,in__17298));
in__17298 = G__17300;
out__17299 = G__17301;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__17299);
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
hash_map.cljs$lang$applyTo = (function (arglist__17302){
var keyvals = cljs.core.seq(arglist__17302);;
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
array_map.cljs$lang$applyTo = (function (arglist__17303){
var keyvals = cljs.core.seq(arglist__17303);;
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
var ks__17307 = [];
var obj__17308 = {};
var kvs__17309 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__17309)
{ks__17307.push(cljs.core.first.call(null,kvs__17309));
(obj__17308[cljs.core.first.call(null,kvs__17309)] = cljs.core.second.call(null,kvs__17309));
{
var G__17310 = cljs.core.nnext.call(null,kvs__17309);
kvs__17309 = G__17310;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__17307,obj__17308);
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
obj_map.cljs$lang$applyTo = (function (arglist__17311){
var keyvals = cljs.core.seq(arglist__17311);;
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
var in__17314 = cljs.core.seq.call(null,keyvals);
var out__17315 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__17314)
{{
var G__17316 = cljs.core.nnext.call(null,in__17314);
var G__17317 = cljs.core.assoc.call(null,out__17315,cljs.core.first.call(null,in__17314),cljs.core.second.call(null,in__17314));
in__17314 = G__17316;
out__17315 = G__17317;
continue;
}
} else
{return out__17315;
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
sorted_map.cljs$lang$applyTo = (function (arglist__17318){
var keyvals = cljs.core.seq(arglist__17318);;
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
var in__17321 = cljs.core.seq.call(null,keyvals);
var out__17322 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__17321)
{{
var G__17323 = cljs.core.nnext.call(null,in__17321);
var G__17324 = cljs.core.assoc.call(null,out__17322,cljs.core.first.call(null,in__17321),cljs.core.second.call(null,in__17321));
in__17321 = G__17323;
out__17322 = G__17324;
continue;
}
} else
{return out__17322;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__17325){
var comparator = cljs.core.first(arglist__17325);
var keyvals = cljs.core.rest(arglist__17325);
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
{return cljs.core.reduce.call(null,(function (p1__17326_SHARP_,p2__17327_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____17329 = p1__17326_SHARP_;
if(cljs.core.truth_(or__3824__auto____17329))
{return or__3824__auto____17329;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__17327_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__17330){
var maps = cljs.core.seq(arglist__17330);;
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
{var merge_entry__17338 = (function (m,e){
var k__17336 = cljs.core.first.call(null,e);
var v__17337 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__17336))
{return cljs.core.assoc.call(null,m,k__17336,f.call(null,cljs.core._lookup.call(null,m,k__17336,null),v__17337));
} else
{return cljs.core.assoc.call(null,m,k__17336,v__17337);
}
});
var merge2__17340 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__17338,(function (){var or__3824__auto____17339 = m1;
if(cljs.core.truth_(or__3824__auto____17339))
{return or__3824__auto____17339;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__17340,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__17341){
var f = cljs.core.first(arglist__17341);
var maps = cljs.core.rest(arglist__17341);
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
var ret__17346 = cljs.core.ObjMap.EMPTY;
var keys__17347 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__17347)
{var key__17348 = cljs.core.first.call(null,keys__17347);
var entry__17349 = cljs.core._lookup.call(null,map,key__17348,"\uFDD0'cljs.core/not-found");
{
var G__17350 = ((cljs.core.not_EQ_.call(null,entry__17349,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret__17346,key__17348,entry__17349):ret__17346);
var G__17351 = cljs.core.next.call(null,keys__17347);
ret__17346 = G__17350;
keys__17347 = G__17351;
continue;
}
} else
{return ret__17346;
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
var this__17355 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__17355.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__17356 = this;
var h__2281__auto____17357 = this__17356.__hash;
if(!((h__2281__auto____17357 == null)))
{return h__2281__auto____17357;
} else
{var h__2281__auto____17358 = cljs.core.hash_iset.call(null,coll);
this__17356.__hash = h__2281__auto____17358;
return h__2281__auto____17358;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__17359 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__17360 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__17360.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__17381 = null;
var G__17381__2 = (function (this_sym17361,k){
var this__17363 = this;
var this_sym17361__17364 = this;
var coll__17365 = this_sym17361__17364;
return coll__17365.cljs$core$ILookup$_lookup$arity$2(coll__17365,k);
});
var G__17381__3 = (function (this_sym17362,k,not_found){
var this__17363 = this;
var this_sym17362__17366 = this;
var coll__17367 = this_sym17362__17366;
return coll__17367.cljs$core$ILookup$_lookup$arity$3(coll__17367,k,not_found);
});
G__17381 = function(this_sym17362,k,not_found){
switch(arguments.length){
case 2:
return G__17381__2.call(this,this_sym17362,k);
case 3:
return G__17381__3.call(this,this_sym17362,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17381;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym17353,args17354){
var this__17368 = this;
return this_sym17353.call.apply(this_sym17353,[this_sym17353].concat(args17354.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__17369 = this;
return (new cljs.core.PersistentHashSet(this__17369.meta,cljs.core.assoc.call(null,this__17369.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__17370 = this;
var this__17371 = this;
return cljs.core.pr_str.call(null,this__17371);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__17372 = this;
return cljs.core.keys.call(null,this__17372.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__17373 = this;
return (new cljs.core.PersistentHashSet(this__17373.meta,cljs.core.dissoc.call(null,this__17373.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__17374 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17375 = this;
var and__3822__auto____17376 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____17376)
{var and__3822__auto____17377 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____17377)
{return cljs.core.every_QMARK_.call(null,(function (p1__17352_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__17352_SHARP_);
}),other);
} else
{return and__3822__auto____17377;
}
} else
{return and__3822__auto____17376;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__17378 = this;
return (new cljs.core.PersistentHashSet(meta,this__17378.hash_map,this__17378.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__17379 = this;
return this__17379.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__17380 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__17380.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__17382 = cljs.core.count.call(null,items);
var i__17383 = 0;
var out__17384 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__17383 < len__17382))
{{
var G__17385 = (i__17383 + 1);
var G__17386 = cljs.core.conj_BANG_.call(null,out__17384,(items[i__17383]));
i__17383 = G__17385;
out__17384 = G__17386;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__17384);
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
var G__17404 = null;
var G__17404__2 = (function (this_sym17390,k){
var this__17392 = this;
var this_sym17390__17393 = this;
var tcoll__17394 = this_sym17390__17393;
if((cljs.core._lookup.call(null,this__17392.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__17404__3 = (function (this_sym17391,k,not_found){
var this__17392 = this;
var this_sym17391__17395 = this;
var tcoll__17396 = this_sym17391__17395;
if((cljs.core._lookup.call(null,this__17392.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__17404 = function(this_sym17391,k,not_found){
switch(arguments.length){
case 2:
return G__17404__2.call(this,this_sym17391,k);
case 3:
return G__17404__3.call(this,this_sym17391,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17404;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym17388,args17389){
var this__17397 = this;
return this_sym17388.call.apply(this_sym17388,[this_sym17388].concat(args17389.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__17398 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__17399 = this;
if((cljs.core._lookup.call(null,this__17399.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__17400 = this;
return cljs.core.count.call(null,this__17400.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__17401 = this;
this__17401.transient_map = cljs.core.dissoc_BANG_.call(null,this__17401.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__17402 = this;
this__17402.transient_map = cljs.core.assoc_BANG_.call(null,this__17402.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__17403 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__17403.transient_map),null));
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
var this__17407 = this;
var h__2281__auto____17408 = this__17407.__hash;
if(!((h__2281__auto____17408 == null)))
{return h__2281__auto____17408;
} else
{var h__2281__auto____17409 = cljs.core.hash_iset.call(null,coll);
this__17407.__hash = h__2281__auto____17409;
return h__2281__auto____17409;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__17410 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__17411 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__17411.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__17437 = null;
var G__17437__2 = (function (this_sym17412,k){
var this__17414 = this;
var this_sym17412__17415 = this;
var coll__17416 = this_sym17412__17415;
return coll__17416.cljs$core$ILookup$_lookup$arity$2(coll__17416,k);
});
var G__17437__3 = (function (this_sym17413,k,not_found){
var this__17414 = this;
var this_sym17413__17417 = this;
var coll__17418 = this_sym17413__17417;
return coll__17418.cljs$core$ILookup$_lookup$arity$3(coll__17418,k,not_found);
});
G__17437 = function(this_sym17413,k,not_found){
switch(arguments.length){
case 2:
return G__17437__2.call(this,this_sym17413,k);
case 3:
return G__17437__3.call(this,this_sym17413,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17437;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym17405,args17406){
var this__17419 = this;
return this_sym17405.call.apply(this_sym17405,[this_sym17405].concat(args17406.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__17420 = this;
return (new cljs.core.PersistentTreeSet(this__17420.meta,cljs.core.assoc.call(null,this__17420.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__17421 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__17421.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__17422 = this;
var this__17423 = this;
return cljs.core.pr_str.call(null,this__17423);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__17424 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__17424.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__17425 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__17425.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__17426 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__17427 = this;
return cljs.core._comparator.call(null,this__17427.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__17428 = this;
return cljs.core.keys.call(null,this__17428.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__17429 = this;
return (new cljs.core.PersistentTreeSet(this__17429.meta,cljs.core.dissoc.call(null,this__17429.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__17430 = this;
return cljs.core.count.call(null,this__17430.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17431 = this;
var and__3822__auto____17432 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____17432)
{var and__3822__auto____17433 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____17433)
{return cljs.core.every_QMARK_.call(null,(function (p1__17387_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__17387_SHARP_);
}),other);
} else
{return and__3822__auto____17433;
}
} else
{return and__3822__auto____17432;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__17434 = this;
return (new cljs.core.PersistentTreeSet(meta,this__17434.tree_map,this__17434.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__17435 = this;
return this__17435.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__17436 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__17436.meta);
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
var G__17442__delegate = function (keys){
var in__17440 = cljs.core.seq.call(null,keys);
var out__17441 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__17440))
{{
var G__17443 = cljs.core.next.call(null,in__17440);
var G__17444 = cljs.core.conj_BANG_.call(null,out__17441,cljs.core.first.call(null,in__17440));
in__17440 = G__17443;
out__17441 = G__17444;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__17441);
}
break;
}
};
var G__17442 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__17442__delegate.call(this, keys);
};
G__17442.cljs$lang$maxFixedArity = 0;
G__17442.cljs$lang$applyTo = (function (arglist__17445){
var keys = cljs.core.seq(arglist__17445);;
return G__17442__delegate(keys);
});
G__17442.cljs$lang$arity$variadic = G__17442__delegate;
return G__17442;
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
sorted_set.cljs$lang$applyTo = (function (arglist__17446){
var keys = cljs.core.seq(arglist__17446);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__17448){
var comparator = cljs.core.first(arglist__17448);
var keys = cljs.core.rest(arglist__17448);
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
{var n__17454 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____17455 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____17455))
{var e__17456 = temp__3971__auto____17455;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__17456));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__17454,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__17447_SHARP_){
var temp__3971__auto____17457 = cljs.core.find.call(null,smap,p1__17447_SHARP_);
if(cljs.core.truth_(temp__3971__auto____17457))
{var e__17458 = temp__3971__auto____17457;
return cljs.core.second.call(null,e__17458);
} else
{return p1__17447_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__17488 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__17481,seen){
while(true){
var vec__17482__17483 = p__17481;
var f__17484 = cljs.core.nth.call(null,vec__17482__17483,0,null);
var xs__17485 = vec__17482__17483;
var temp__3974__auto____17486 = cljs.core.seq.call(null,xs__17485);
if(temp__3974__auto____17486)
{var s__17487 = temp__3974__auto____17486;
if(cljs.core.contains_QMARK_.call(null,seen,f__17484))
{{
var G__17489 = cljs.core.rest.call(null,s__17487);
var G__17490 = seen;
p__17481 = G__17489;
seen = G__17490;
continue;
}
} else
{return cljs.core.cons.call(null,f__17484,step.call(null,cljs.core.rest.call(null,s__17487),cljs.core.conj.call(null,seen,f__17484)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__17488.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__17493 = cljs.core.PersistentVector.EMPTY;
var s__17494 = s;
while(true){
if(cljs.core.next.call(null,s__17494))
{{
var G__17495 = cljs.core.conj.call(null,ret__17493,cljs.core.first.call(null,s__17494));
var G__17496 = cljs.core.next.call(null,s__17494);
ret__17493 = G__17495;
s__17494 = G__17496;
continue;
}
} else
{return cljs.core.seq.call(null,ret__17493);
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
{if((function (){var or__3824__auto____17499 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____17499)
{return or__3824__auto____17499;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__17500 = x.lastIndexOf("/");
if((i__17500 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__17500 + 1));
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
if((function (){var or__3824__auto____17503 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____17503)
{return or__3824__auto____17503;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__17504 = x.lastIndexOf("/");
if((i__17504 > -1))
{return cljs.core.subs.call(null,x,2,i__17504);
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
var map__17511 = cljs.core.ObjMap.EMPTY;
var ks__17512 = cljs.core.seq.call(null,keys);
var vs__17513 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____17514 = ks__17512;
if(and__3822__auto____17514)
{return vs__17513;
} else
{return and__3822__auto____17514;
}
})())
{{
var G__17515 = cljs.core.assoc.call(null,map__17511,cljs.core.first.call(null,ks__17512),cljs.core.first.call(null,vs__17513));
var G__17516 = cljs.core.next.call(null,ks__17512);
var G__17517 = cljs.core.next.call(null,vs__17513);
map__17511 = G__17515;
ks__17512 = G__17516;
vs__17513 = G__17517;
continue;
}
} else
{return map__17511;
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
var G__17520__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__17505_SHARP_,p2__17506_SHARP_){
return max_key.call(null,k,p1__17505_SHARP_,p2__17506_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__17520 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__17520__delegate.call(this, k, x, y, more);
};
G__17520.cljs$lang$maxFixedArity = 3;
G__17520.cljs$lang$applyTo = (function (arglist__17521){
var k = cljs.core.first(arglist__17521);
var x = cljs.core.first(cljs.core.next(arglist__17521));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__17521)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__17521)));
return G__17520__delegate(k, x, y, more);
});
G__17520.cljs$lang$arity$variadic = G__17520__delegate;
return G__17520;
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
var G__17522__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__17518_SHARP_,p2__17519_SHARP_){
return min_key.call(null,k,p1__17518_SHARP_,p2__17519_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__17522 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__17522__delegate.call(this, k, x, y, more);
};
G__17522.cljs$lang$maxFixedArity = 3;
G__17522.cljs$lang$applyTo = (function (arglist__17523){
var k = cljs.core.first(arglist__17523);
var x = cljs.core.first(cljs.core.next(arglist__17523));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__17523)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__17523)));
return G__17522__delegate(k, x, y, more);
});
G__17522.cljs$lang$arity$variadic = G__17522__delegate;
return G__17522;
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
var temp__3974__auto____17526 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____17526)
{var s__17527 = temp__3974__auto____17526;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__17527),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__17527)));
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
var temp__3974__auto____17530 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____17530)
{var s__17531 = temp__3974__auto____17530;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__17531))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__17531),take_while.call(null,pred,cljs.core.rest.call(null,s__17531)));
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
var comp__17533 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__17533.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__17545 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____17546 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____17546))
{var vec__17547__17548 = temp__3974__auto____17546;
var e__17549 = cljs.core.nth.call(null,vec__17547__17548,0,null);
var s__17550 = vec__17547__17548;
if(cljs.core.truth_(include__17545.call(null,e__17549)))
{return s__17550;
} else
{return cljs.core.next.call(null,s__17550);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__17545,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____17551 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____17551))
{var vec__17552__17553 = temp__3974__auto____17551;
var e__17554 = cljs.core.nth.call(null,vec__17552__17553,0,null);
var s__17555 = vec__17552__17553;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__17554))?s__17555:cljs.core.next.call(null,s__17555)));
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
var include__17567 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____17568 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____17568))
{var vec__17569__17570 = temp__3974__auto____17568;
var e__17571 = cljs.core.nth.call(null,vec__17569__17570,0,null);
var s__17572 = vec__17569__17570;
if(cljs.core.truth_(include__17567.call(null,e__17571)))
{return s__17572;
} else
{return cljs.core.next.call(null,s__17572);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__17567,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____17573 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____17573))
{var vec__17574__17575 = temp__3974__auto____17573;
var e__17576 = cljs.core.nth.call(null,vec__17574__17575,0,null);
var s__17577 = vec__17574__17575;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__17576))?s__17577:cljs.core.next.call(null,s__17577)));
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
var this__17578 = this;
var h__2281__auto____17579 = this__17578.__hash;
if(!((h__2281__auto____17579 == null)))
{return h__2281__auto____17579;
} else
{var h__2281__auto____17580 = cljs.core.hash_coll.call(null,rng);
this__17578.__hash = h__2281__auto____17580;
return h__2281__auto____17580;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__17581 = this;
if((this__17581.step > 0))
{if(((this__17581.start + this__17581.step) < this__17581.end))
{return (new cljs.core.Range(this__17581.meta,(this__17581.start + this__17581.step),this__17581.end,this__17581.step,null));
} else
{return null;
}
} else
{if(((this__17581.start + this__17581.step) > this__17581.end))
{return (new cljs.core.Range(this__17581.meta,(this__17581.start + this__17581.step),this__17581.end,this__17581.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__17582 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__17583 = this;
var this__17584 = this;
return cljs.core.pr_str.call(null,this__17584);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__17585 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__17586 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__17587 = this;
if((this__17587.step > 0))
{if((this__17587.start < this__17587.end))
{return rng;
} else
{return null;
}
} else
{if((this__17587.start > this__17587.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__17588 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__17588.end - this__17588.start) / this__17588.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__17589 = this;
return this__17589.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__17590 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__17590.meta,(this__17590.start + this__17590.step),this__17590.end,this__17590.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__17591 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__17592 = this;
return (new cljs.core.Range(meta,this__17592.start,this__17592.end,this__17592.step,this__17592.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__17593 = this;
return this__17593.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__17594 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__17594.start + (n * this__17594.step));
} else
{if((function (){var and__3822__auto____17595 = (this__17594.start > this__17594.end);
if(and__3822__auto____17595)
{return (this__17594.step === 0);
} else
{return and__3822__auto____17595;
}
})())
{return this__17594.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__17596 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__17596.start + (n * this__17596.step));
} else
{if((function (){var and__3822__auto____17597 = (this__17596.start > this__17596.end);
if(and__3822__auto____17597)
{return (this__17596.step === 0);
} else
{return and__3822__auto____17597;
}
})())
{return this__17596.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__17598 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__17598.meta);
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
var temp__3974__auto____17601 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____17601)
{var s__17602 = temp__3974__auto____17601;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__17602),take_nth.call(null,n,cljs.core.drop.call(null,n,s__17602)));
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
var temp__3974__auto____17609 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____17609)
{var s__17610 = temp__3974__auto____17609;
var fst__17611 = cljs.core.first.call(null,s__17610);
var fv__17612 = f.call(null,fst__17611);
var run__17613 = cljs.core.cons.call(null,fst__17611,cljs.core.take_while.call(null,(function (p1__17603_SHARP_){
return cljs.core._EQ_.call(null,fv__17612,f.call(null,p1__17603_SHARP_));
}),cljs.core.next.call(null,s__17610)));
return cljs.core.cons.call(null,run__17613,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__17613),s__17610))));
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
var temp__3971__auto____17628 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____17628)
{var s__17629 = temp__3971__auto____17628;
return reductions.call(null,f,cljs.core.first.call(null,s__17629),cljs.core.rest.call(null,s__17629));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____17630 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____17630)
{var s__17631 = temp__3974__auto____17630;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__17631)),cljs.core.rest.call(null,s__17631));
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
var G__17634 = null;
var G__17634__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__17634__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__17634__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__17634__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__17634__4 = (function() { 
var G__17635__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__17635 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__17635__delegate.call(this, x, y, z, args);
};
G__17635.cljs$lang$maxFixedArity = 3;
G__17635.cljs$lang$applyTo = (function (arglist__17636){
var x = cljs.core.first(arglist__17636);
var y = cljs.core.first(cljs.core.next(arglist__17636));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__17636)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__17636)));
return G__17635__delegate(x, y, z, args);
});
G__17635.cljs$lang$arity$variadic = G__17635__delegate;
return G__17635;
})()
;
G__17634 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__17634__0.call(this);
case 1:
return G__17634__1.call(this,x);
case 2:
return G__17634__2.call(this,x,y);
case 3:
return G__17634__3.call(this,x,y,z);
default:
return G__17634__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__17634.cljs$lang$maxFixedArity = 3;
G__17634.cljs$lang$applyTo = G__17634__4.cljs$lang$applyTo;
return G__17634;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__17637 = null;
var G__17637__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__17637__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__17637__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__17637__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__17637__4 = (function() { 
var G__17638__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__17638 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__17638__delegate.call(this, x, y, z, args);
};
G__17638.cljs$lang$maxFixedArity = 3;
G__17638.cljs$lang$applyTo = (function (arglist__17639){
var x = cljs.core.first(arglist__17639);
var y = cljs.core.first(cljs.core.next(arglist__17639));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__17639)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__17639)));
return G__17638__delegate(x, y, z, args);
});
G__17638.cljs$lang$arity$variadic = G__17638__delegate;
return G__17638;
})()
;
G__17637 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__17637__0.call(this);
case 1:
return G__17637__1.call(this,x);
case 2:
return G__17637__2.call(this,x,y);
case 3:
return G__17637__3.call(this,x,y,z);
default:
return G__17637__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__17637.cljs$lang$maxFixedArity = 3;
G__17637.cljs$lang$applyTo = G__17637__4.cljs$lang$applyTo;
return G__17637;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__17640 = null;
var G__17640__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__17640__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__17640__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__17640__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__17640__4 = (function() { 
var G__17641__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__17641 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__17641__delegate.call(this, x, y, z, args);
};
G__17641.cljs$lang$maxFixedArity = 3;
G__17641.cljs$lang$applyTo = (function (arglist__17642){
var x = cljs.core.first(arglist__17642);
var y = cljs.core.first(cljs.core.next(arglist__17642));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__17642)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__17642)));
return G__17641__delegate(x, y, z, args);
});
G__17641.cljs$lang$arity$variadic = G__17641__delegate;
return G__17641;
})()
;
G__17640 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__17640__0.call(this);
case 1:
return G__17640__1.call(this,x);
case 2:
return G__17640__2.call(this,x,y);
case 3:
return G__17640__3.call(this,x,y,z);
default:
return G__17640__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__17640.cljs$lang$maxFixedArity = 3;
G__17640.cljs$lang$applyTo = G__17640__4.cljs$lang$applyTo;
return G__17640;
})()
});
var juxt__4 = (function() { 
var G__17643__delegate = function (f,g,h,fs){
var fs__17633 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__17644 = null;
var G__17644__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__17614_SHARP_,p2__17615_SHARP_){
return cljs.core.conj.call(null,p1__17614_SHARP_,p2__17615_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__17633);
});
var G__17644__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__17616_SHARP_,p2__17617_SHARP_){
return cljs.core.conj.call(null,p1__17616_SHARP_,p2__17617_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__17633);
});
var G__17644__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__17618_SHARP_,p2__17619_SHARP_){
return cljs.core.conj.call(null,p1__17618_SHARP_,p2__17619_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__17633);
});
var G__17644__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__17620_SHARP_,p2__17621_SHARP_){
return cljs.core.conj.call(null,p1__17620_SHARP_,p2__17621_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__17633);
});
var G__17644__4 = (function() { 
var G__17645__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__17622_SHARP_,p2__17623_SHARP_){
return cljs.core.conj.call(null,p1__17622_SHARP_,cljs.core.apply.call(null,p2__17623_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__17633);
};
var G__17645 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__17645__delegate.call(this, x, y, z, args);
};
G__17645.cljs$lang$maxFixedArity = 3;
G__17645.cljs$lang$applyTo = (function (arglist__17646){
var x = cljs.core.first(arglist__17646);
var y = cljs.core.first(cljs.core.next(arglist__17646));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__17646)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__17646)));
return G__17645__delegate(x, y, z, args);
});
G__17645.cljs$lang$arity$variadic = G__17645__delegate;
return G__17645;
})()
;
G__17644 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__17644__0.call(this);
case 1:
return G__17644__1.call(this,x);
case 2:
return G__17644__2.call(this,x,y);
case 3:
return G__17644__3.call(this,x,y,z);
default:
return G__17644__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__17644.cljs$lang$maxFixedArity = 3;
G__17644.cljs$lang$applyTo = G__17644__4.cljs$lang$applyTo;
return G__17644;
})()
};
var G__17643 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__17643__delegate.call(this, f, g, h, fs);
};
G__17643.cljs$lang$maxFixedArity = 3;
G__17643.cljs$lang$applyTo = (function (arglist__17647){
var f = cljs.core.first(arglist__17647);
var g = cljs.core.first(cljs.core.next(arglist__17647));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__17647)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__17647)));
return G__17643__delegate(f, g, h, fs);
});
G__17643.cljs$lang$arity$variadic = G__17643__delegate;
return G__17643;
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
var G__17650 = cljs.core.next.call(null,coll);
coll = G__17650;
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
if(cljs.core.truth_((function (){var and__3822__auto____17649 = cljs.core.seq.call(null,coll);
if(and__3822__auto____17649)
{return (n > 0);
} else
{return and__3822__auto____17649;
}
})()))
{{
var G__17651 = (n - 1);
var G__17652 = cljs.core.next.call(null,coll);
n = G__17651;
coll = G__17652;
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
var matches__17654 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__17654),s))
{if((cljs.core.count.call(null,matches__17654) === 1))
{return cljs.core.first.call(null,matches__17654);
} else
{return cljs.core.vec.call(null,matches__17654);
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
var matches__17656 = re.exec(s);
if((matches__17656 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__17656) === 1))
{return cljs.core.first.call(null,matches__17656);
} else
{return cljs.core.vec.call(null,matches__17656);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__17661 = cljs.core.re_find.call(null,re,s);
var match_idx__17662 = s.search(re);
var match_str__17663 = ((cljs.core.coll_QMARK_.call(null,match_data__17661))?cljs.core.first.call(null,match_data__17661):match_data__17661);
var post_match__17664 = cljs.core.subs.call(null,s,(match_idx__17662 + cljs.core.count.call(null,match_str__17663)));
if(cljs.core.truth_(match_data__17661))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__17661,re_seq.call(null,re,post_match__17664));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__17671__17672 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___17673 = cljs.core.nth.call(null,vec__17671__17672,0,null);
var flags__17674 = cljs.core.nth.call(null,vec__17671__17672,1,null);
var pattern__17675 = cljs.core.nth.call(null,vec__17671__17672,2,null);
return (new RegExp(pattern__17675,flags__17674));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__17665_SHARP_){
return print_one.call(null,p1__17665_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____17685 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____17685))
{var and__3822__auto____17689 = (function (){var G__17686__17687 = obj;
if(G__17686__17687)
{if((function (){var or__3824__auto____17688 = (G__17686__17687.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____17688)
{return or__3824__auto____17688;
} else
{return G__17686__17687.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__17686__17687.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__17686__17687);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__17686__17687);
}
})();
if(cljs.core.truth_(and__3822__auto____17689))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____17689;
}
} else
{return and__3822__auto____17685;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____17690 = !((obj == null));
if(and__3822__auto____17690)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____17690;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__17691__17692 = obj;
if(G__17691__17692)
{if((function (){var or__3824__auto____17693 = (G__17691__17692.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____17693)
{return or__3824__auto____17693;
} else
{return G__17691__17692.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__17691__17692.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__17691__17692);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__17691__17692);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var sb__17713 = (new goog.string.StringBuffer());
var G__17714__17715 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__17714__17715)
{var string__17716 = cljs.core.first.call(null,G__17714__17715);
var G__17714__17717 = G__17714__17715;
while(true){
sb__17713.append(string__17716);
var temp__3974__auto____17718 = cljs.core.next.call(null,G__17714__17717);
if(temp__3974__auto____17718)
{var G__17714__17719 = temp__3974__auto____17718;
{
var G__17732 = cljs.core.first.call(null,G__17714__17719);
var G__17733 = G__17714__17719;
string__17716 = G__17732;
G__17714__17717 = G__17733;
continue;
}
} else
{}
break;
}
} else
{}
var G__17720__17721 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__17720__17721)
{var obj__17722 = cljs.core.first.call(null,G__17720__17721);
var G__17720__17723 = G__17720__17721;
while(true){
sb__17713.append(" ");
var G__17724__17725 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__17722,opts));
if(G__17724__17725)
{var string__17726 = cljs.core.first.call(null,G__17724__17725);
var G__17724__17727 = G__17724__17725;
while(true){
sb__17713.append(string__17726);
var temp__3974__auto____17728 = cljs.core.next.call(null,G__17724__17727);
if(temp__3974__auto____17728)
{var G__17724__17729 = temp__3974__auto____17728;
{
var G__17734 = cljs.core.first.call(null,G__17724__17729);
var G__17735 = G__17724__17729;
string__17726 = G__17734;
G__17724__17727 = G__17735;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____17730 = cljs.core.next.call(null,G__17720__17723);
if(temp__3974__auto____17730)
{var G__17720__17731 = temp__3974__auto____17730;
{
var G__17736 = cljs.core.first.call(null,G__17720__17731);
var G__17737 = G__17720__17731;
obj__17722 = G__17736;
G__17720__17723 = G__17737;
continue;
}
} else
{}
break;
}
} else
{}
return sb__17713;
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
var sb__17739 = cljs.core.pr_sb.call(null,objs,opts);
sb__17739.append("\n");
return [cljs.core.str(sb__17739)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var G__17758__17759 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__17758__17759)
{var string__17760 = cljs.core.first.call(null,G__17758__17759);
var G__17758__17761 = G__17758__17759;
while(true){
cljs.core.string_print.call(null,string__17760);
var temp__3974__auto____17762 = cljs.core.next.call(null,G__17758__17761);
if(temp__3974__auto____17762)
{var G__17758__17763 = temp__3974__auto____17762;
{
var G__17776 = cljs.core.first.call(null,G__17758__17763);
var G__17777 = G__17758__17763;
string__17760 = G__17776;
G__17758__17761 = G__17777;
continue;
}
} else
{}
break;
}
} else
{}
var G__17764__17765 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__17764__17765)
{var obj__17766 = cljs.core.first.call(null,G__17764__17765);
var G__17764__17767 = G__17764__17765;
while(true){
cljs.core.string_print.call(null," ");
var G__17768__17769 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__17766,opts));
if(G__17768__17769)
{var string__17770 = cljs.core.first.call(null,G__17768__17769);
var G__17768__17771 = G__17768__17769;
while(true){
cljs.core.string_print.call(null,string__17770);
var temp__3974__auto____17772 = cljs.core.next.call(null,G__17768__17771);
if(temp__3974__auto____17772)
{var G__17768__17773 = temp__3974__auto____17772;
{
var G__17778 = cljs.core.first.call(null,G__17768__17773);
var G__17779 = G__17768__17773;
string__17770 = G__17778;
G__17768__17771 = G__17779;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____17774 = cljs.core.next.call(null,G__17764__17767);
if(temp__3974__auto____17774)
{var G__17764__17775 = temp__3974__auto____17774;
{
var G__17780 = cljs.core.first.call(null,G__17764__17775);
var G__17781 = G__17764__17775;
obj__17766 = G__17780;
G__17764__17767 = G__17781;
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
pr_str.cljs$lang$applyTo = (function (arglist__17782){
var objs = cljs.core.seq(arglist__17782);;
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
prn_str.cljs$lang$applyTo = (function (arglist__17783){
var objs = cljs.core.seq(arglist__17783);;
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
pr.cljs$lang$applyTo = (function (arglist__17784){
var objs = cljs.core.seq(arglist__17784);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__17785){
var objs = cljs.core.seq(arglist__17785);;
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
print_str.cljs$lang$applyTo = (function (arglist__17786){
var objs = cljs.core.seq(arglist__17786);;
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
println.cljs$lang$applyTo = (function (arglist__17787){
var objs = cljs.core.seq(arglist__17787);;
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
println_str.cljs$lang$applyTo = (function (arglist__17788){
var objs = cljs.core.seq(arglist__17788);;
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
prn.cljs$lang$applyTo = (function (arglist__17789){
var objs = cljs.core.seq(arglist__17789);;
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
printf.cljs$lang$applyTo = (function (arglist__17790){
var fmt = cljs.core.first(arglist__17790);
var args = cljs.core.rest(arglist__17790);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__17791 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__17791,"{",", ","}",opts,coll);
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
var pr_pair__17792 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__17792,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__17793 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__17793,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____17794 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____17794))
{var nspc__17795 = temp__3974__auto____17794;
return [cljs.core.str(nspc__17795),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____17796 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____17796))
{var nspc__17797 = temp__3974__auto____17796;
return [cljs.core.str(nspc__17797),cljs.core.str("/")].join('');
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
var pr_pair__17798 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__17798,"{",", ","}",opts,coll);
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
var normalize__17800 = (function (n,len){
var ns__17799 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__17799) < len))
{{
var G__17802 = [cljs.core.str("0"),cljs.core.str(ns__17799)].join('');
ns__17799 = G__17802;
continue;
}
} else
{return ns__17799;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__17800.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__17800.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__17800.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__17800.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__17800.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__17800.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
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
var pr_pair__17801 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__17801,"{",", ","}",opts,coll);
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
var this__17803 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__17804 = this;
var G__17805__17806 = cljs.core.seq.call(null,this__17804.watches);
if(G__17805__17806)
{var G__17808__17810 = cljs.core.first.call(null,G__17805__17806);
var vec__17809__17811 = G__17808__17810;
var key__17812 = cljs.core.nth.call(null,vec__17809__17811,0,null);
var f__17813 = cljs.core.nth.call(null,vec__17809__17811,1,null);
var G__17805__17814 = G__17805__17806;
var G__17808__17815 = G__17808__17810;
var G__17805__17816 = G__17805__17814;
while(true){
var vec__17817__17818 = G__17808__17815;
var key__17819 = cljs.core.nth.call(null,vec__17817__17818,0,null);
var f__17820 = cljs.core.nth.call(null,vec__17817__17818,1,null);
var G__17805__17821 = G__17805__17816;
f__17820.call(null,key__17819,this$,oldval,newval);
var temp__3974__auto____17822 = cljs.core.next.call(null,G__17805__17821);
if(temp__3974__auto____17822)
{var G__17805__17823 = temp__3974__auto____17822;
{
var G__17830 = cljs.core.first.call(null,G__17805__17823);
var G__17831 = G__17805__17823;
G__17808__17815 = G__17830;
G__17805__17816 = G__17831;
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
var this__17824 = this;
return this$.watches = cljs.core.assoc.call(null,this__17824.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__17825 = this;
return this$.watches = cljs.core.dissoc.call(null,this__17825.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__17826 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__17826.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__17827 = this;
return this__17827.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__17828 = this;
return this__17828.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__17829 = this;
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
var G__17843__delegate = function (x,p__17832){
var map__17838__17839 = p__17832;
var map__17838__17840 = ((cljs.core.seq_QMARK_.call(null,map__17838__17839))?cljs.core.apply.call(null,cljs.core.hash_map,map__17838__17839):map__17838__17839);
var validator__17841 = cljs.core._lookup.call(null,map__17838__17840,"\uFDD0'validator",null);
var meta__17842 = cljs.core._lookup.call(null,map__17838__17840,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__17842,validator__17841,null));
};
var G__17843 = function (x,var_args){
var p__17832 = null;
if (goog.isDef(var_args)) {
  p__17832 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__17843__delegate.call(this, x, p__17832);
};
G__17843.cljs$lang$maxFixedArity = 1;
G__17843.cljs$lang$applyTo = (function (arglist__17844){
var x = cljs.core.first(arglist__17844);
var p__17832 = cljs.core.rest(arglist__17844);
return G__17843__delegate(x, p__17832);
});
G__17843.cljs$lang$arity$variadic = G__17843__delegate;
return G__17843;
})()
;
atom = function(x,var_args){
var p__17832 = var_args;
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
var temp__3974__auto____17848 = a.validator;
if(cljs.core.truth_(temp__3974__auto____17848))
{var validate__17849 = temp__3974__auto____17848;
if(cljs.core.truth_(validate__17849.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6440))))].join('')));
}
} else
{}
var old_value__17850 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__17850,new_value);
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
var G__17851__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__17851 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__17851__delegate.call(this, a, f, x, y, z, more);
};
G__17851.cljs$lang$maxFixedArity = 5;
G__17851.cljs$lang$applyTo = (function (arglist__17852){
var a = cljs.core.first(arglist__17852);
var f = cljs.core.first(cljs.core.next(arglist__17852));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__17852)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__17852))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__17852)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__17852)))));
return G__17851__delegate(a, f, x, y, z, more);
});
G__17851.cljs$lang$arity$variadic = G__17851__delegate;
return G__17851;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__17853){
var iref = cljs.core.first(arglist__17853);
var f = cljs.core.first(cljs.core.next(arglist__17853));
var args = cljs.core.rest(cljs.core.next(arglist__17853));
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
var this__17854 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__17854.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__17855 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__17855.state,(function (p__17856){
var map__17857__17858 = p__17856;
var map__17857__17859 = ((cljs.core.seq_QMARK_.call(null,map__17857__17858))?cljs.core.apply.call(null,cljs.core.hash_map,map__17857__17858):map__17857__17858);
var curr_state__17860 = map__17857__17859;
var done__17861 = cljs.core._lookup.call(null,map__17857__17859,"\uFDD0'done",null);
if(cljs.core.truth_(done__17861))
{return curr_state__17860;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__17855.f.call(null)});
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
var map__17882__17883 = options;
var map__17882__17884 = ((cljs.core.seq_QMARK_.call(null,map__17882__17883))?cljs.core.apply.call(null,cljs.core.hash_map,map__17882__17883):map__17882__17883);
var keywordize_keys__17885 = cljs.core._lookup.call(null,map__17882__17884,"\uFDD0'keywordize-keys",null);
var keyfn__17886 = (cljs.core.truth_(keywordize_keys__17885)?cljs.core.keyword:cljs.core.str);
var f__17901 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2551__auto____17900 = (function iter__17894(s__17895){
return (new cljs.core.LazySeq(null,false,(function (){
var s__17895__17898 = s__17895;
while(true){
if(cljs.core.seq.call(null,s__17895__17898))
{var k__17899 = cljs.core.first.call(null,s__17895__17898);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__17886.call(null,k__17899),thisfn.call(null,(x[k__17899]))], true),iter__17894.call(null,cljs.core.rest.call(null,s__17895__17898)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2551__auto____17900.call(null,cljs.core.js_keys.call(null,x));
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
return f__17901.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__17902){
var x = cljs.core.first(arglist__17902);
var options = cljs.core.rest(arglist__17902);
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
var mem__17907 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__17911__delegate = function (args){
var temp__3971__auto____17908 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__17907),args,null);
if(cljs.core.truth_(temp__3971__auto____17908))
{var v__17909 = temp__3971__auto____17908;
return v__17909;
} else
{var ret__17910 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__17907,cljs.core.assoc,args,ret__17910);
return ret__17910;
}
};
var G__17911 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__17911__delegate.call(this, args);
};
G__17911.cljs$lang$maxFixedArity = 0;
G__17911.cljs$lang$applyTo = (function (arglist__17912){
var args = cljs.core.seq(arglist__17912);;
return G__17911__delegate(args);
});
G__17911.cljs$lang$arity$variadic = G__17911__delegate;
return G__17911;
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
var ret__17914 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__17914))
{{
var G__17915 = ret__17914;
f = G__17915;
continue;
}
} else
{return ret__17914;
}
break;
}
});
var trampoline__2 = (function() { 
var G__17916__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__17916 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__17916__delegate.call(this, f, args);
};
G__17916.cljs$lang$maxFixedArity = 1;
G__17916.cljs$lang$applyTo = (function (arglist__17917){
var f = cljs.core.first(arglist__17917);
var args = cljs.core.rest(arglist__17917);
return G__17916__delegate(f, args);
});
G__17916.cljs$lang$arity$variadic = G__17916__delegate;
return G__17916;
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
var k__17919 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__17919,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__17919,cljs.core.PersistentVector.EMPTY),x));
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
var or__3824__auto____17928 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____17928)
{return or__3824__auto____17928;
} else
{var or__3824__auto____17929 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____17929)
{return or__3824__auto____17929;
} else
{var and__3822__auto____17930 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____17930)
{var and__3822__auto____17931 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____17931)
{var and__3822__auto____17932 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____17932)
{var ret__17933 = true;
var i__17934 = 0;
while(true){
if((function (){var or__3824__auto____17935 = cljs.core.not.call(null,ret__17933);
if(or__3824__auto____17935)
{return or__3824__auto____17935;
} else
{return (i__17934 === cljs.core.count.call(null,parent));
}
})())
{return ret__17933;
} else
{{
var G__17936 = isa_QMARK_.call(null,h,child.call(null,i__17934),parent.call(null,i__17934));
var G__17937 = (i__17934 + 1);
ret__17933 = G__17936;
i__17934 = G__17937;
continue;
}
}
break;
}
} else
{return and__3822__auto____17932;
}
} else
{return and__3822__auto____17931;
}
} else
{return and__3822__auto____17930;
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
var tp__17946 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__17947 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__17948 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__17949 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____17950 = ((cljs.core.contains_QMARK_.call(null,tp__17946.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__17948.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__17948.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__17946,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__17949.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__17947,parent,ta__17948),"\uFDD0'descendants":tf__17949.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__17948,tag,td__17947)});
})());
if(cljs.core.truth_(or__3824__auto____17950))
{return or__3824__auto____17950;
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
var parentMap__17955 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__17956 = (cljs.core.truth_(parentMap__17955.call(null,tag))?cljs.core.disj.call(null,parentMap__17955.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__17957 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__17956))?cljs.core.assoc.call(null,parentMap__17955,tag,childsParents__17956):cljs.core.dissoc.call(null,parentMap__17955,tag));
var deriv_seq__17958 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__17938_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__17938_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__17938_SHARP_),cljs.core.second.call(null,p1__17938_SHARP_)));
}),cljs.core.seq.call(null,newParents__17957)));
if(cljs.core.contains_QMARK_.call(null,parentMap__17955.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__17939_SHARP_,p2__17940_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__17939_SHARP_,p2__17940_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__17958));
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
var xprefs__17966 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____17968 = (cljs.core.truth_((function (){var and__3822__auto____17967 = xprefs__17966;
if(cljs.core.truth_(and__3822__auto____17967))
{return xprefs__17966.call(null,y);
} else
{return and__3822__auto____17967;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____17968))
{return or__3824__auto____17968;
} else
{var or__3824__auto____17970 = (function (){var ps__17969 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__17969) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__17969),prefer_table)))
{} else
{}
{
var G__17973 = cljs.core.rest.call(null,ps__17969);
ps__17969 = G__17973;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____17970))
{return or__3824__auto____17970;
} else
{var or__3824__auto____17972 = (function (){var ps__17971 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__17971) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__17971),y,prefer_table)))
{} else
{}
{
var G__17974 = cljs.core.rest.call(null,ps__17971);
ps__17971 = G__17974;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____17972))
{return or__3824__auto____17972;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____17976 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____17976))
{return or__3824__auto____17976;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__17994 = cljs.core.reduce.call(null,(function (be,p__17986){
var vec__17987__17988 = p__17986;
var k__17989 = cljs.core.nth.call(null,vec__17987__17988,0,null);
var ___17990 = cljs.core.nth.call(null,vec__17987__17988,1,null);
var e__17991 = vec__17987__17988;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__17989))
{var be2__17993 = (cljs.core.truth_((function (){var or__3824__auto____17992 = (be == null);
if(or__3824__auto____17992)
{return or__3824__auto____17992;
} else
{return cljs.core.dominates.call(null,k__17989,cljs.core.first.call(null,be),prefer_table);
}
})())?e__17991:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__17993),k__17989,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__17989),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__17993)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__17993;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__17994))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__17994));
return cljs.core.second.call(null,best_entry__17994);
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
if((function (){var and__3822__auto____17999 = mf;
if(and__3822__auto____17999)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____17999;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2452__auto____18000 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____18001 = (cljs.core._reset[goog.typeOf(x__2452__auto____18000)]);
if(or__3824__auto____18001)
{return or__3824__auto____18001;
} else
{var or__3824__auto____18002 = (cljs.core._reset["_"]);
if(or__3824__auto____18002)
{return or__3824__auto____18002;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____18007 = mf;
if(and__3822__auto____18007)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____18007;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2452__auto____18008 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____18009 = (cljs.core._add_method[goog.typeOf(x__2452__auto____18008)]);
if(or__3824__auto____18009)
{return or__3824__auto____18009;
} else
{var or__3824__auto____18010 = (cljs.core._add_method["_"]);
if(or__3824__auto____18010)
{return or__3824__auto____18010;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____18015 = mf;
if(and__3822__auto____18015)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____18015;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2452__auto____18016 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____18017 = (cljs.core._remove_method[goog.typeOf(x__2452__auto____18016)]);
if(or__3824__auto____18017)
{return or__3824__auto____18017;
} else
{var or__3824__auto____18018 = (cljs.core._remove_method["_"]);
if(or__3824__auto____18018)
{return or__3824__auto____18018;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____18023 = mf;
if(and__3822__auto____18023)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____18023;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2452__auto____18024 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____18025 = (cljs.core._prefer_method[goog.typeOf(x__2452__auto____18024)]);
if(or__3824__auto____18025)
{return or__3824__auto____18025;
} else
{var or__3824__auto____18026 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____18026)
{return or__3824__auto____18026;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____18031 = mf;
if(and__3822__auto____18031)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____18031;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2452__auto____18032 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____18033 = (cljs.core._get_method[goog.typeOf(x__2452__auto____18032)]);
if(or__3824__auto____18033)
{return or__3824__auto____18033;
} else
{var or__3824__auto____18034 = (cljs.core._get_method["_"]);
if(or__3824__auto____18034)
{return or__3824__auto____18034;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____18039 = mf;
if(and__3822__auto____18039)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____18039;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2452__auto____18040 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____18041 = (cljs.core._methods[goog.typeOf(x__2452__auto____18040)]);
if(or__3824__auto____18041)
{return or__3824__auto____18041;
} else
{var or__3824__auto____18042 = (cljs.core._methods["_"]);
if(or__3824__auto____18042)
{return or__3824__auto____18042;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____18047 = mf;
if(and__3822__auto____18047)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____18047;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2452__auto____18048 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____18049 = (cljs.core._prefers[goog.typeOf(x__2452__auto____18048)]);
if(or__3824__auto____18049)
{return or__3824__auto____18049;
} else
{var or__3824__auto____18050 = (cljs.core._prefers["_"]);
if(or__3824__auto____18050)
{return or__3824__auto____18050;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____18055 = mf;
if(and__3822__auto____18055)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____18055;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2452__auto____18056 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____18057 = (cljs.core._dispatch[goog.typeOf(x__2452__auto____18056)]);
if(or__3824__auto____18057)
{return or__3824__auto____18057;
} else
{var or__3824__auto____18058 = (cljs.core._dispatch["_"]);
if(or__3824__auto____18058)
{return or__3824__auto____18058;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__18061 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__18062 = cljs.core._get_method.call(null,mf,dispatch_val__18061);
if(cljs.core.truth_(target_fn__18062))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__18061)].join('')));
}
return cljs.core.apply.call(null,target_fn__18062,args);
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
var this__18063 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__18064 = this;
cljs.core.swap_BANG_.call(null,this__18064.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__18064.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__18064.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__18064.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__18065 = this;
cljs.core.swap_BANG_.call(null,this__18065.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__18065.method_cache,this__18065.method_table,this__18065.cached_hierarchy,this__18065.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__18066 = this;
cljs.core.swap_BANG_.call(null,this__18066.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__18066.method_cache,this__18066.method_table,this__18066.cached_hierarchy,this__18066.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__18067 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__18067.cached_hierarchy),cljs.core.deref.call(null,this__18067.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__18067.method_cache,this__18067.method_table,this__18067.cached_hierarchy,this__18067.hierarchy);
}
var temp__3971__auto____18068 = cljs.core.deref.call(null,this__18067.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____18068))
{var target_fn__18069 = temp__3971__auto____18068;
return target_fn__18069;
} else
{var temp__3971__auto____18070 = cljs.core.find_and_cache_best_method.call(null,this__18067.name,dispatch_val,this__18067.hierarchy,this__18067.method_table,this__18067.prefer_table,this__18067.method_cache,this__18067.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____18070))
{var target_fn__18071 = temp__3971__auto____18070;
return target_fn__18071;
} else
{return cljs.core.deref.call(null,this__18067.method_table).call(null,this__18067.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__18072 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__18072.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__18072.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__18072.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__18072.method_cache,this__18072.method_table,this__18072.cached_hierarchy,this__18072.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__18073 = this;
return cljs.core.deref.call(null,this__18073.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__18074 = this;
return cljs.core.deref.call(null,this__18074.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__18075 = this;
return cljs.core.do_dispatch.call(null,mf,this__18075.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__18077__delegate = function (_,args){
var self__18076 = this;
return cljs.core._dispatch.call(null,self__18076,args);
};
var G__18077 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__18077__delegate.call(this, _, args);
};
G__18077.cljs$lang$maxFixedArity = 1;
G__18077.cljs$lang$applyTo = (function (arglist__18078){
var _ = cljs.core.first(arglist__18078);
var args = cljs.core.rest(arglist__18078);
return G__18077__delegate(_, args);
});
G__18077.cljs$lang$arity$variadic = G__18077__delegate;
return G__18077;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__18079 = this;
return cljs.core._dispatch.call(null,self__18079,args);
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
var this__18080 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_18082,_){
var this__18081 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__18081.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__18083 = this;
var and__3822__auto____18084 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____18084)
{return (this__18083.uuid === other.uuid);
} else
{return and__3822__auto____18084;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__18085 = this;
var this__18086 = this;
return cljs.core.pr_str.call(null,this__18086);
});
cljs.core.UUID;
