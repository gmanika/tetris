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
var x__6104 = (((x == null))?null:x);
if((p[goog.typeOf(x__6104)]))
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
var G__6105__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__6105 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6105__delegate.call(this, array, i, idxs);
};
G__6105.cljs$lang$maxFixedArity = 2;
G__6105.cljs$lang$applyTo = (function (arglist__6106){
var array = cljs.core.first(arglist__6106);
var i = cljs.core.first(cljs.core.next(arglist__6106));
var idxs = cljs.core.rest(cljs.core.next(arglist__6106));
return G__6105__delegate(array, i, idxs);
});
G__6105.cljs$lang$arity$variadic = G__6105__delegate;
return G__6105;
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
if((function (){var and__3822__auto____6191 = this$;
if(and__3822__auto____6191)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____6191;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2365__auto____6192 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6193 = (cljs.core._invoke[goog.typeOf(x__2365__auto____6192)]);
if(or__3824__auto____6193)
{return or__3824__auto____6193;
} else
{var or__3824__auto____6194 = (cljs.core._invoke["_"]);
if(or__3824__auto____6194)
{return or__3824__auto____6194;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____6195 = this$;
if(and__3822__auto____6195)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____6195;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__2365__auto____6196 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6197 = (cljs.core._invoke[goog.typeOf(x__2365__auto____6196)]);
if(or__3824__auto____6197)
{return or__3824__auto____6197;
} else
{var or__3824__auto____6198 = (cljs.core._invoke["_"]);
if(or__3824__auto____6198)
{return or__3824__auto____6198;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____6199 = this$;
if(and__3822__auto____6199)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____6199;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__2365__auto____6200 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6201 = (cljs.core._invoke[goog.typeOf(x__2365__auto____6200)]);
if(or__3824__auto____6201)
{return or__3824__auto____6201;
} else
{var or__3824__auto____6202 = (cljs.core._invoke["_"]);
if(or__3824__auto____6202)
{return or__3824__auto____6202;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____6203 = this$;
if(and__3822__auto____6203)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____6203;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__2365__auto____6204 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6205 = (cljs.core._invoke[goog.typeOf(x__2365__auto____6204)]);
if(or__3824__auto____6205)
{return or__3824__auto____6205;
} else
{var or__3824__auto____6206 = (cljs.core._invoke["_"]);
if(or__3824__auto____6206)
{return or__3824__auto____6206;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____6207 = this$;
if(and__3822__auto____6207)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____6207;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__2365__auto____6208 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6209 = (cljs.core._invoke[goog.typeOf(x__2365__auto____6208)]);
if(or__3824__auto____6209)
{return or__3824__auto____6209;
} else
{var or__3824__auto____6210 = (cljs.core._invoke["_"]);
if(or__3824__auto____6210)
{return or__3824__auto____6210;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____6211 = this$;
if(and__3822__auto____6211)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____6211;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__2365__auto____6212 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6213 = (cljs.core._invoke[goog.typeOf(x__2365__auto____6212)]);
if(or__3824__auto____6213)
{return or__3824__auto____6213;
} else
{var or__3824__auto____6214 = (cljs.core._invoke["_"]);
if(or__3824__auto____6214)
{return or__3824__auto____6214;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____6215 = this$;
if(and__3822__auto____6215)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____6215;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__2365__auto____6216 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6217 = (cljs.core._invoke[goog.typeOf(x__2365__auto____6216)]);
if(or__3824__auto____6217)
{return or__3824__auto____6217;
} else
{var or__3824__auto____6218 = (cljs.core._invoke["_"]);
if(or__3824__auto____6218)
{return or__3824__auto____6218;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____6219 = this$;
if(and__3822__auto____6219)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____6219;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__2365__auto____6220 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6221 = (cljs.core._invoke[goog.typeOf(x__2365__auto____6220)]);
if(or__3824__auto____6221)
{return or__3824__auto____6221;
} else
{var or__3824__auto____6222 = (cljs.core._invoke["_"]);
if(or__3824__auto____6222)
{return or__3824__auto____6222;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____6223 = this$;
if(and__3822__auto____6223)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____6223;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__2365__auto____6224 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6225 = (cljs.core._invoke[goog.typeOf(x__2365__auto____6224)]);
if(or__3824__auto____6225)
{return or__3824__auto____6225;
} else
{var or__3824__auto____6226 = (cljs.core._invoke["_"]);
if(or__3824__auto____6226)
{return or__3824__auto____6226;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____6227 = this$;
if(and__3822__auto____6227)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____6227;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__2365__auto____6228 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6229 = (cljs.core._invoke[goog.typeOf(x__2365__auto____6228)]);
if(or__3824__auto____6229)
{return or__3824__auto____6229;
} else
{var or__3824__auto____6230 = (cljs.core._invoke["_"]);
if(or__3824__auto____6230)
{return or__3824__auto____6230;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____6231 = this$;
if(and__3822__auto____6231)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____6231;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__2365__auto____6232 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6233 = (cljs.core._invoke[goog.typeOf(x__2365__auto____6232)]);
if(or__3824__auto____6233)
{return or__3824__auto____6233;
} else
{var or__3824__auto____6234 = (cljs.core._invoke["_"]);
if(or__3824__auto____6234)
{return or__3824__auto____6234;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____6235 = this$;
if(and__3822__auto____6235)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____6235;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__2365__auto____6236 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6237 = (cljs.core._invoke[goog.typeOf(x__2365__auto____6236)]);
if(or__3824__auto____6237)
{return or__3824__auto____6237;
} else
{var or__3824__auto____6238 = (cljs.core._invoke["_"]);
if(or__3824__auto____6238)
{return or__3824__auto____6238;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____6239 = this$;
if(and__3822__auto____6239)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____6239;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__2365__auto____6240 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6241 = (cljs.core._invoke[goog.typeOf(x__2365__auto____6240)]);
if(or__3824__auto____6241)
{return or__3824__auto____6241;
} else
{var or__3824__auto____6242 = (cljs.core._invoke["_"]);
if(or__3824__auto____6242)
{return or__3824__auto____6242;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____6243 = this$;
if(and__3822__auto____6243)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____6243;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__2365__auto____6244 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6245 = (cljs.core._invoke[goog.typeOf(x__2365__auto____6244)]);
if(or__3824__auto____6245)
{return or__3824__auto____6245;
} else
{var or__3824__auto____6246 = (cljs.core._invoke["_"]);
if(or__3824__auto____6246)
{return or__3824__auto____6246;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____6247 = this$;
if(and__3822__auto____6247)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____6247;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__2365__auto____6248 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6249 = (cljs.core._invoke[goog.typeOf(x__2365__auto____6248)]);
if(or__3824__auto____6249)
{return or__3824__auto____6249;
} else
{var or__3824__auto____6250 = (cljs.core._invoke["_"]);
if(or__3824__auto____6250)
{return or__3824__auto____6250;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____6251 = this$;
if(and__3822__auto____6251)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____6251;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__2365__auto____6252 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6253 = (cljs.core._invoke[goog.typeOf(x__2365__auto____6252)]);
if(or__3824__auto____6253)
{return or__3824__auto____6253;
} else
{var or__3824__auto____6254 = (cljs.core._invoke["_"]);
if(or__3824__auto____6254)
{return or__3824__auto____6254;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____6255 = this$;
if(and__3822__auto____6255)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____6255;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__2365__auto____6256 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6257 = (cljs.core._invoke[goog.typeOf(x__2365__auto____6256)]);
if(or__3824__auto____6257)
{return or__3824__auto____6257;
} else
{var or__3824__auto____6258 = (cljs.core._invoke["_"]);
if(or__3824__auto____6258)
{return or__3824__auto____6258;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____6259 = this$;
if(and__3822__auto____6259)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____6259;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__2365__auto____6260 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6261 = (cljs.core._invoke[goog.typeOf(x__2365__auto____6260)]);
if(or__3824__auto____6261)
{return or__3824__auto____6261;
} else
{var or__3824__auto____6262 = (cljs.core._invoke["_"]);
if(or__3824__auto____6262)
{return or__3824__auto____6262;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____6263 = this$;
if(and__3822__auto____6263)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____6263;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__2365__auto____6264 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6265 = (cljs.core._invoke[goog.typeOf(x__2365__auto____6264)]);
if(or__3824__auto____6265)
{return or__3824__auto____6265;
} else
{var or__3824__auto____6266 = (cljs.core._invoke["_"]);
if(or__3824__auto____6266)
{return or__3824__auto____6266;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____6267 = this$;
if(and__3822__auto____6267)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____6267;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__2365__auto____6268 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6269 = (cljs.core._invoke[goog.typeOf(x__2365__auto____6268)]);
if(or__3824__auto____6269)
{return or__3824__auto____6269;
} else
{var or__3824__auto____6270 = (cljs.core._invoke["_"]);
if(or__3824__auto____6270)
{return or__3824__auto____6270;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____6271 = this$;
if(and__3822__auto____6271)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____6271;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__2365__auto____6272 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6273 = (cljs.core._invoke[goog.typeOf(x__2365__auto____6272)]);
if(or__3824__auto____6273)
{return or__3824__auto____6273;
} else
{var or__3824__auto____6274 = (cljs.core._invoke["_"]);
if(or__3824__auto____6274)
{return or__3824__auto____6274;
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
if((function (){var and__3822__auto____6279 = coll;
if(and__3822__auto____6279)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____6279;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2365__auto____6280 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6281 = (cljs.core._count[goog.typeOf(x__2365__auto____6280)]);
if(or__3824__auto____6281)
{return or__3824__auto____6281;
} else
{var or__3824__auto____6282 = (cljs.core._count["_"]);
if(or__3824__auto____6282)
{return or__3824__auto____6282;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____6287 = coll;
if(and__3822__auto____6287)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____6287;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2365__auto____6288 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6289 = (cljs.core._empty[goog.typeOf(x__2365__auto____6288)]);
if(or__3824__auto____6289)
{return or__3824__auto____6289;
} else
{var or__3824__auto____6290 = (cljs.core._empty["_"]);
if(or__3824__auto____6290)
{return or__3824__auto____6290;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____6295 = coll;
if(and__3822__auto____6295)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____6295;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2365__auto____6296 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6297 = (cljs.core._conj[goog.typeOf(x__2365__auto____6296)]);
if(or__3824__auto____6297)
{return or__3824__auto____6297;
} else
{var or__3824__auto____6298 = (cljs.core._conj["_"]);
if(or__3824__auto____6298)
{return or__3824__auto____6298;
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
if((function (){var and__3822__auto____6307 = coll;
if(and__3822__auto____6307)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____6307;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2365__auto____6308 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6309 = (cljs.core._nth[goog.typeOf(x__2365__auto____6308)]);
if(or__3824__auto____6309)
{return or__3824__auto____6309;
} else
{var or__3824__auto____6310 = (cljs.core._nth["_"]);
if(or__3824__auto____6310)
{return or__3824__auto____6310;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____6311 = coll;
if(and__3822__auto____6311)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____6311;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__2365__auto____6312 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6313 = (cljs.core._nth[goog.typeOf(x__2365__auto____6312)]);
if(or__3824__auto____6313)
{return or__3824__auto____6313;
} else
{var or__3824__auto____6314 = (cljs.core._nth["_"]);
if(or__3824__auto____6314)
{return or__3824__auto____6314;
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
if((function (){var and__3822__auto____6319 = coll;
if(and__3822__auto____6319)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____6319;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2365__auto____6320 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6321 = (cljs.core._first[goog.typeOf(x__2365__auto____6320)]);
if(or__3824__auto____6321)
{return or__3824__auto____6321;
} else
{var or__3824__auto____6322 = (cljs.core._first["_"]);
if(or__3824__auto____6322)
{return or__3824__auto____6322;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____6327 = coll;
if(and__3822__auto____6327)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____6327;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2365__auto____6328 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6329 = (cljs.core._rest[goog.typeOf(x__2365__auto____6328)]);
if(or__3824__auto____6329)
{return or__3824__auto____6329;
} else
{var or__3824__auto____6330 = (cljs.core._rest["_"]);
if(or__3824__auto____6330)
{return or__3824__auto____6330;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____6335 = coll;
if(and__3822__auto____6335)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____6335;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2365__auto____6336 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6337 = (cljs.core._next[goog.typeOf(x__2365__auto____6336)]);
if(or__3824__auto____6337)
{return or__3824__auto____6337;
} else
{var or__3824__auto____6338 = (cljs.core._next["_"]);
if(or__3824__auto____6338)
{return or__3824__auto____6338;
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
if((function (){var and__3822__auto____6347 = o;
if(and__3822__auto____6347)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____6347;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2365__auto____6348 = (((o == null))?null:o);
return (function (){var or__3824__auto____6349 = (cljs.core._lookup[goog.typeOf(x__2365__auto____6348)]);
if(or__3824__auto____6349)
{return or__3824__auto____6349;
} else
{var or__3824__auto____6350 = (cljs.core._lookup["_"]);
if(or__3824__auto____6350)
{return or__3824__auto____6350;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____6351 = o;
if(and__3822__auto____6351)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____6351;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__2365__auto____6352 = (((o == null))?null:o);
return (function (){var or__3824__auto____6353 = (cljs.core._lookup[goog.typeOf(x__2365__auto____6352)]);
if(or__3824__auto____6353)
{return or__3824__auto____6353;
} else
{var or__3824__auto____6354 = (cljs.core._lookup["_"]);
if(or__3824__auto____6354)
{return or__3824__auto____6354;
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
if((function (){var and__3822__auto____6359 = coll;
if(and__3822__auto____6359)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____6359;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2365__auto____6360 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6361 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__2365__auto____6360)]);
if(or__3824__auto____6361)
{return or__3824__auto____6361;
} else
{var or__3824__auto____6362 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____6362)
{return or__3824__auto____6362;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____6367 = coll;
if(and__3822__auto____6367)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____6367;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2365__auto____6368 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6369 = (cljs.core._assoc[goog.typeOf(x__2365__auto____6368)]);
if(or__3824__auto____6369)
{return or__3824__auto____6369;
} else
{var or__3824__auto____6370 = (cljs.core._assoc["_"]);
if(or__3824__auto____6370)
{return or__3824__auto____6370;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____6375 = coll;
if(and__3822__auto____6375)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____6375;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2365__auto____6376 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6377 = (cljs.core._dissoc[goog.typeOf(x__2365__auto____6376)]);
if(or__3824__auto____6377)
{return or__3824__auto____6377;
} else
{var or__3824__auto____6378 = (cljs.core._dissoc["_"]);
if(or__3824__auto____6378)
{return or__3824__auto____6378;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____6383 = coll;
if(and__3822__auto____6383)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____6383;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2365__auto____6384 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6385 = (cljs.core._key[goog.typeOf(x__2365__auto____6384)]);
if(or__3824__auto____6385)
{return or__3824__auto____6385;
} else
{var or__3824__auto____6386 = (cljs.core._key["_"]);
if(or__3824__auto____6386)
{return or__3824__auto____6386;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____6391 = coll;
if(and__3822__auto____6391)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____6391;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2365__auto____6392 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6393 = (cljs.core._val[goog.typeOf(x__2365__auto____6392)]);
if(or__3824__auto____6393)
{return or__3824__auto____6393;
} else
{var or__3824__auto____6394 = (cljs.core._val["_"]);
if(or__3824__auto____6394)
{return or__3824__auto____6394;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____6399 = coll;
if(and__3822__auto____6399)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____6399;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2365__auto____6400 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6401 = (cljs.core._disjoin[goog.typeOf(x__2365__auto____6400)]);
if(or__3824__auto____6401)
{return or__3824__auto____6401;
} else
{var or__3824__auto____6402 = (cljs.core._disjoin["_"]);
if(or__3824__auto____6402)
{return or__3824__auto____6402;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____6407 = coll;
if(and__3822__auto____6407)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____6407;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2365__auto____6408 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6409 = (cljs.core._peek[goog.typeOf(x__2365__auto____6408)]);
if(or__3824__auto____6409)
{return or__3824__auto____6409;
} else
{var or__3824__auto____6410 = (cljs.core._peek["_"]);
if(or__3824__auto____6410)
{return or__3824__auto____6410;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____6415 = coll;
if(and__3822__auto____6415)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____6415;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2365__auto____6416 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6417 = (cljs.core._pop[goog.typeOf(x__2365__auto____6416)]);
if(or__3824__auto____6417)
{return or__3824__auto____6417;
} else
{var or__3824__auto____6418 = (cljs.core._pop["_"]);
if(or__3824__auto____6418)
{return or__3824__auto____6418;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____6423 = coll;
if(and__3822__auto____6423)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____6423;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2365__auto____6424 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6425 = (cljs.core._assoc_n[goog.typeOf(x__2365__auto____6424)]);
if(or__3824__auto____6425)
{return or__3824__auto____6425;
} else
{var or__3824__auto____6426 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____6426)
{return or__3824__auto____6426;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____6431 = o;
if(and__3822__auto____6431)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____6431;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2365__auto____6432 = (((o == null))?null:o);
return (function (){var or__3824__auto____6433 = (cljs.core._deref[goog.typeOf(x__2365__auto____6432)]);
if(or__3824__auto____6433)
{return or__3824__auto____6433;
} else
{var or__3824__auto____6434 = (cljs.core._deref["_"]);
if(or__3824__auto____6434)
{return or__3824__auto____6434;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____6439 = o;
if(and__3822__auto____6439)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____6439;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2365__auto____6440 = (((o == null))?null:o);
return (function (){var or__3824__auto____6441 = (cljs.core._deref_with_timeout[goog.typeOf(x__2365__auto____6440)]);
if(or__3824__auto____6441)
{return or__3824__auto____6441;
} else
{var or__3824__auto____6442 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____6442)
{return or__3824__auto____6442;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____6447 = o;
if(and__3822__auto____6447)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____6447;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2365__auto____6448 = (((o == null))?null:o);
return (function (){var or__3824__auto____6449 = (cljs.core._meta[goog.typeOf(x__2365__auto____6448)]);
if(or__3824__auto____6449)
{return or__3824__auto____6449;
} else
{var or__3824__auto____6450 = (cljs.core._meta["_"]);
if(or__3824__auto____6450)
{return or__3824__auto____6450;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____6455 = o;
if(and__3822__auto____6455)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____6455;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2365__auto____6456 = (((o == null))?null:o);
return (function (){var or__3824__auto____6457 = (cljs.core._with_meta[goog.typeOf(x__2365__auto____6456)]);
if(or__3824__auto____6457)
{return or__3824__auto____6457;
} else
{var or__3824__auto____6458 = (cljs.core._with_meta["_"]);
if(or__3824__auto____6458)
{return or__3824__auto____6458;
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
if((function (){var and__3822__auto____6467 = coll;
if(and__3822__auto____6467)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____6467;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2365__auto____6468 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6469 = (cljs.core._reduce[goog.typeOf(x__2365__auto____6468)]);
if(or__3824__auto____6469)
{return or__3824__auto____6469;
} else
{var or__3824__auto____6470 = (cljs.core._reduce["_"]);
if(or__3824__auto____6470)
{return or__3824__auto____6470;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____6471 = coll;
if(and__3822__auto____6471)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____6471;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__2365__auto____6472 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6473 = (cljs.core._reduce[goog.typeOf(x__2365__auto____6472)]);
if(or__3824__auto____6473)
{return or__3824__auto____6473;
} else
{var or__3824__auto____6474 = (cljs.core._reduce["_"]);
if(or__3824__auto____6474)
{return or__3824__auto____6474;
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
if((function (){var and__3822__auto____6479 = coll;
if(and__3822__auto____6479)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____6479;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2365__auto____6480 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6481 = (cljs.core._kv_reduce[goog.typeOf(x__2365__auto____6480)]);
if(or__3824__auto____6481)
{return or__3824__auto____6481;
} else
{var or__3824__auto____6482 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____6482)
{return or__3824__auto____6482;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____6487 = o;
if(and__3822__auto____6487)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____6487;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2365__auto____6488 = (((o == null))?null:o);
return (function (){var or__3824__auto____6489 = (cljs.core._equiv[goog.typeOf(x__2365__auto____6488)]);
if(or__3824__auto____6489)
{return or__3824__auto____6489;
} else
{var or__3824__auto____6490 = (cljs.core._equiv["_"]);
if(or__3824__auto____6490)
{return or__3824__auto____6490;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____6495 = o;
if(and__3822__auto____6495)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____6495;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2365__auto____6496 = (((o == null))?null:o);
return (function (){var or__3824__auto____6497 = (cljs.core._hash[goog.typeOf(x__2365__auto____6496)]);
if(or__3824__auto____6497)
{return or__3824__auto____6497;
} else
{var or__3824__auto____6498 = (cljs.core._hash["_"]);
if(or__3824__auto____6498)
{return or__3824__auto____6498;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____6503 = o;
if(and__3822__auto____6503)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____6503;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2365__auto____6504 = (((o == null))?null:o);
return (function (){var or__3824__auto____6505 = (cljs.core._seq[goog.typeOf(x__2365__auto____6504)]);
if(or__3824__auto____6505)
{return or__3824__auto____6505;
} else
{var or__3824__auto____6506 = (cljs.core._seq["_"]);
if(or__3824__auto____6506)
{return or__3824__auto____6506;
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
if((function (){var and__3822__auto____6511 = coll;
if(and__3822__auto____6511)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____6511;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2365__auto____6512 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6513 = (cljs.core._rseq[goog.typeOf(x__2365__auto____6512)]);
if(or__3824__auto____6513)
{return or__3824__auto____6513;
} else
{var or__3824__auto____6514 = (cljs.core._rseq["_"]);
if(or__3824__auto____6514)
{return or__3824__auto____6514;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____6519 = coll;
if(and__3822__auto____6519)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____6519;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2365__auto____6520 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6521 = (cljs.core._sorted_seq[goog.typeOf(x__2365__auto____6520)]);
if(or__3824__auto____6521)
{return or__3824__auto____6521;
} else
{var or__3824__auto____6522 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____6522)
{return or__3824__auto____6522;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____6527 = coll;
if(and__3822__auto____6527)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____6527;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2365__auto____6528 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6529 = (cljs.core._sorted_seq_from[goog.typeOf(x__2365__auto____6528)]);
if(or__3824__auto____6529)
{return or__3824__auto____6529;
} else
{var or__3824__auto____6530 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____6530)
{return or__3824__auto____6530;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____6535 = coll;
if(and__3822__auto____6535)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____6535;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2365__auto____6536 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6537 = (cljs.core._entry_key[goog.typeOf(x__2365__auto____6536)]);
if(or__3824__auto____6537)
{return or__3824__auto____6537;
} else
{var or__3824__auto____6538 = (cljs.core._entry_key["_"]);
if(or__3824__auto____6538)
{return or__3824__auto____6538;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____6543 = coll;
if(and__3822__auto____6543)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____6543;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2365__auto____6544 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6545 = (cljs.core._comparator[goog.typeOf(x__2365__auto____6544)]);
if(or__3824__auto____6545)
{return or__3824__auto____6545;
} else
{var or__3824__auto____6546 = (cljs.core._comparator["_"]);
if(or__3824__auto____6546)
{return or__3824__auto____6546;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____6551 = o;
if(and__3822__auto____6551)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____6551;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2365__auto____6552 = (((o == null))?null:o);
return (function (){var or__3824__auto____6553 = (cljs.core._pr_seq[goog.typeOf(x__2365__auto____6552)]);
if(or__3824__auto____6553)
{return or__3824__auto____6553;
} else
{var or__3824__auto____6554 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____6554)
{return or__3824__auto____6554;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____6559 = d;
if(and__3822__auto____6559)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____6559;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2365__auto____6560 = (((d == null))?null:d);
return (function (){var or__3824__auto____6561 = (cljs.core._realized_QMARK_[goog.typeOf(x__2365__auto____6560)]);
if(or__3824__auto____6561)
{return or__3824__auto____6561;
} else
{var or__3824__auto____6562 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____6562)
{return or__3824__auto____6562;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____6567 = this$;
if(and__3822__auto____6567)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____6567;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2365__auto____6568 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6569 = (cljs.core._notify_watches[goog.typeOf(x__2365__auto____6568)]);
if(or__3824__auto____6569)
{return or__3824__auto____6569;
} else
{var or__3824__auto____6570 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____6570)
{return or__3824__auto____6570;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____6575 = this$;
if(and__3822__auto____6575)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____6575;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2365__auto____6576 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6577 = (cljs.core._add_watch[goog.typeOf(x__2365__auto____6576)]);
if(or__3824__auto____6577)
{return or__3824__auto____6577;
} else
{var or__3824__auto____6578 = (cljs.core._add_watch["_"]);
if(or__3824__auto____6578)
{return or__3824__auto____6578;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____6583 = this$;
if(and__3822__auto____6583)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____6583;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2365__auto____6584 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6585 = (cljs.core._remove_watch[goog.typeOf(x__2365__auto____6584)]);
if(or__3824__auto____6585)
{return or__3824__auto____6585;
} else
{var or__3824__auto____6586 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____6586)
{return or__3824__auto____6586;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____6591 = coll;
if(and__3822__auto____6591)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____6591;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2365__auto____6592 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6593 = (cljs.core._as_transient[goog.typeOf(x__2365__auto____6592)]);
if(or__3824__auto____6593)
{return or__3824__auto____6593;
} else
{var or__3824__auto____6594 = (cljs.core._as_transient["_"]);
if(or__3824__auto____6594)
{return or__3824__auto____6594;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____6599 = tcoll;
if(and__3822__auto____6599)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____6599;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2365__auto____6600 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6601 = (cljs.core._conj_BANG_[goog.typeOf(x__2365__auto____6600)]);
if(or__3824__auto____6601)
{return or__3824__auto____6601;
} else
{var or__3824__auto____6602 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____6602)
{return or__3824__auto____6602;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____6607 = tcoll;
if(and__3822__auto____6607)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____6607;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2365__auto____6608 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6609 = (cljs.core._persistent_BANG_[goog.typeOf(x__2365__auto____6608)]);
if(or__3824__auto____6609)
{return or__3824__auto____6609;
} else
{var or__3824__auto____6610 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____6610)
{return or__3824__auto____6610;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____6615 = tcoll;
if(and__3822__auto____6615)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____6615;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2365__auto____6616 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6617 = (cljs.core._assoc_BANG_[goog.typeOf(x__2365__auto____6616)]);
if(or__3824__auto____6617)
{return or__3824__auto____6617;
} else
{var or__3824__auto____6618 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____6618)
{return or__3824__auto____6618;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____6623 = tcoll;
if(and__3822__auto____6623)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____6623;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2365__auto____6624 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6625 = (cljs.core._dissoc_BANG_[goog.typeOf(x__2365__auto____6624)]);
if(or__3824__auto____6625)
{return or__3824__auto____6625;
} else
{var or__3824__auto____6626 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____6626)
{return or__3824__auto____6626;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____6631 = tcoll;
if(and__3822__auto____6631)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____6631;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2365__auto____6632 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6633 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__2365__auto____6632)]);
if(or__3824__auto____6633)
{return or__3824__auto____6633;
} else
{var or__3824__auto____6634 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____6634)
{return or__3824__auto____6634;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____6639 = tcoll;
if(and__3822__auto____6639)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____6639;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2365__auto____6640 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6641 = (cljs.core._pop_BANG_[goog.typeOf(x__2365__auto____6640)]);
if(or__3824__auto____6641)
{return or__3824__auto____6641;
} else
{var or__3824__auto____6642 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____6642)
{return or__3824__auto____6642;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____6647 = tcoll;
if(and__3822__auto____6647)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____6647;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2365__auto____6648 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6649 = (cljs.core._disjoin_BANG_[goog.typeOf(x__2365__auto____6648)]);
if(or__3824__auto____6649)
{return or__3824__auto____6649;
} else
{var or__3824__auto____6650 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____6650)
{return or__3824__auto____6650;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____6655 = x;
if(and__3822__auto____6655)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____6655;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2365__auto____6656 = (((x == null))?null:x);
return (function (){var or__3824__auto____6657 = (cljs.core._compare[goog.typeOf(x__2365__auto____6656)]);
if(or__3824__auto____6657)
{return or__3824__auto____6657;
} else
{var or__3824__auto____6658 = (cljs.core._compare["_"]);
if(or__3824__auto____6658)
{return or__3824__auto____6658;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____6663 = coll;
if(and__3822__auto____6663)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____6663;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2365__auto____6664 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6665 = (cljs.core._drop_first[goog.typeOf(x__2365__auto____6664)]);
if(or__3824__auto____6665)
{return or__3824__auto____6665;
} else
{var or__3824__auto____6666 = (cljs.core._drop_first["_"]);
if(or__3824__auto____6666)
{return or__3824__auto____6666;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____6671 = coll;
if(and__3822__auto____6671)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____6671;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2365__auto____6672 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6673 = (cljs.core._chunked_first[goog.typeOf(x__2365__auto____6672)]);
if(or__3824__auto____6673)
{return or__3824__auto____6673;
} else
{var or__3824__auto____6674 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____6674)
{return or__3824__auto____6674;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____6679 = coll;
if(and__3822__auto____6679)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____6679;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2365__auto____6680 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6681 = (cljs.core._chunked_rest[goog.typeOf(x__2365__auto____6680)]);
if(or__3824__auto____6681)
{return or__3824__auto____6681;
} else
{var or__3824__auto____6682 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____6682)
{return or__3824__auto____6682;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____6687 = coll;
if(and__3822__auto____6687)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____6687;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2365__auto____6688 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6689 = (cljs.core._chunked_next[goog.typeOf(x__2365__auto____6688)]);
if(or__3824__auto____6689)
{return or__3824__auto____6689;
} else
{var or__3824__auto____6690 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____6690)
{return or__3824__auto____6690;
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
var or__3824__auto____6692 = (x === y);
if(or__3824__auto____6692)
{return or__3824__auto____6692;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__6693__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__6694 = y;
var G__6695 = cljs.core.first.call(null,more);
var G__6696 = cljs.core.next.call(null,more);
x = G__6694;
y = G__6695;
more = G__6696;
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
var G__6693 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6693__delegate.call(this, x, y, more);
};
G__6693.cljs$lang$maxFixedArity = 2;
G__6693.cljs$lang$applyTo = (function (arglist__6697){
var x = cljs.core.first(arglist__6697);
var y = cljs.core.first(cljs.core.next(arglist__6697));
var more = cljs.core.rest(cljs.core.next(arglist__6697));
return G__6693__delegate(x, y, more);
});
G__6693.cljs$lang$arity$variadic = G__6693__delegate;
return G__6693;
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
var G__6698 = null;
var G__6698__2 = (function (o,k){
return null;
});
var G__6698__3 = (function (o,k,not_found){
return not_found;
});
G__6698 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__6698__2.call(this,o,k);
case 3:
return G__6698__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6698;
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
var G__6699 = null;
var G__6699__2 = (function (_,f){
return f.call(null);
});
var G__6699__3 = (function (_,f,start){
return start;
});
G__6699 = function(_,f,start){
switch(arguments.length){
case 2:
return G__6699__2.call(this,_,f);
case 3:
return G__6699__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6699;
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
var G__6700 = null;
var G__6700__2 = (function (_,n){
return null;
});
var G__6700__3 = (function (_,n,not_found){
return not_found;
});
G__6700 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__6700__2.call(this,_,n);
case 3:
return G__6700__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6700;
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
var and__3822__auto____6701 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____6701)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____6701;
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
var cnt__6714 = cljs.core._count.call(null,cicoll);
if((cnt__6714 === 0))
{return f.call(null);
} else
{var val__6715 = cljs.core._nth.call(null,cicoll,0);
var n__6716 = 1;
while(true){
if((n__6716 < cnt__6714))
{var nval__6717 = f.call(null,val__6715,cljs.core._nth.call(null,cicoll,n__6716));
if(cljs.core.reduced_QMARK_.call(null,nval__6717))
{return cljs.core.deref.call(null,nval__6717);
} else
{{
var G__6726 = nval__6717;
var G__6727 = (n__6716 + 1);
val__6715 = G__6726;
n__6716 = G__6727;
continue;
}
}
} else
{return val__6715;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__6718 = cljs.core._count.call(null,cicoll);
var val__6719 = val;
var n__6720 = 0;
while(true){
if((n__6720 < cnt__6718))
{var nval__6721 = f.call(null,val__6719,cljs.core._nth.call(null,cicoll,n__6720));
if(cljs.core.reduced_QMARK_.call(null,nval__6721))
{return cljs.core.deref.call(null,nval__6721);
} else
{{
var G__6728 = nval__6721;
var G__6729 = (n__6720 + 1);
val__6719 = G__6728;
n__6720 = G__6729;
continue;
}
}
} else
{return val__6719;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__6722 = cljs.core._count.call(null,cicoll);
var val__6723 = val;
var n__6724 = idx;
while(true){
if((n__6724 < cnt__6722))
{var nval__6725 = f.call(null,val__6723,cljs.core._nth.call(null,cicoll,n__6724));
if(cljs.core.reduced_QMARK_.call(null,nval__6725))
{return cljs.core.deref.call(null,nval__6725);
} else
{{
var G__6730 = nval__6725;
var G__6731 = (n__6724 + 1);
val__6723 = G__6730;
n__6724 = G__6731;
continue;
}
}
} else
{return val__6723;
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
var cnt__6744 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__6745 = (arr[0]);
var n__6746 = 1;
while(true){
if((n__6746 < cnt__6744))
{var nval__6747 = f.call(null,val__6745,(arr[n__6746]));
if(cljs.core.reduced_QMARK_.call(null,nval__6747))
{return cljs.core.deref.call(null,nval__6747);
} else
{{
var G__6756 = nval__6747;
var G__6757 = (n__6746 + 1);
val__6745 = G__6756;
n__6746 = G__6757;
continue;
}
}
} else
{return val__6745;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__6748 = arr.length;
var val__6749 = val;
var n__6750 = 0;
while(true){
if((n__6750 < cnt__6748))
{var nval__6751 = f.call(null,val__6749,(arr[n__6750]));
if(cljs.core.reduced_QMARK_.call(null,nval__6751))
{return cljs.core.deref.call(null,nval__6751);
} else
{{
var G__6758 = nval__6751;
var G__6759 = (n__6750 + 1);
val__6749 = G__6758;
n__6750 = G__6759;
continue;
}
}
} else
{return val__6749;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__6752 = arr.length;
var val__6753 = val;
var n__6754 = idx;
while(true){
if((n__6754 < cnt__6752))
{var nval__6755 = f.call(null,val__6753,(arr[n__6754]));
if(cljs.core.reduced_QMARK_.call(null,nval__6755))
{return cljs.core.deref.call(null,nval__6755);
} else
{{
var G__6760 = nval__6755;
var G__6761 = (n__6754 + 1);
val__6753 = G__6760;
n__6754 = G__6761;
continue;
}
}
} else
{return val__6753;
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
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__2311__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6762 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__6763 = this;
if(((this__6763.i + 1) < this__6763.a.length))
{return (new cljs.core.IndexedSeq(this__6763.a,(this__6763.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6764 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__6765 = this;
var c__6766 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__6766 > 0))
{return (new cljs.core.RSeq(coll,(c__6766 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__6767 = this;
var this__6768 = this;
return cljs.core.pr_str.call(null,this__6768);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__6769 = this;
if(cljs.core.counted_QMARK_.call(null,this__6769.a))
{return cljs.core.ci_reduce.call(null,this__6769.a,f,(this__6769.a[this__6769.i]),(this__6769.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__6769.a[this__6769.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__6770 = this;
if(cljs.core.counted_QMARK_.call(null,this__6770.a))
{return cljs.core.ci_reduce.call(null,this__6770.a,f,start,this__6770.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__6771 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__6772 = this;
return (this__6772.a.length - this__6772.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__6773 = this;
return (this__6773.a[this__6773.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__6774 = this;
if(((this__6774.i + 1) < this__6774.a.length))
{return (new cljs.core.IndexedSeq(this__6774.a,(this__6774.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6775 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__6776 = this;
var i__6777 = (n + this__6776.i);
if((i__6777 < this__6776.a.length))
{return (this__6776.a[i__6777]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__6778 = this;
var i__6779 = (n + this__6778.i);
if((i__6779 < this__6778.a.length))
{return (this__6778.a[i__6779]);
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
var G__6780 = null;
var G__6780__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__6780__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__6780 = function(array,f,start){
switch(arguments.length){
case 2:
return G__6780__2.call(this,array,f);
case 3:
return G__6780__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6780;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__6781 = null;
var G__6781__2 = (function (array,k){
return (array[k]);
});
var G__6781__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__6781 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__6781__2.call(this,array,k);
case 3:
return G__6781__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6781;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__6782 = null;
var G__6782__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__6782__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__6782 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__6782__2.call(this,array,n);
case 3:
return G__6782__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6782;
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
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__2311__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6783 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6784 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__6785 = this;
var this__6786 = this;
return cljs.core.pr_str.call(null,this__6786);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6787 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__6788 = this;
return (this__6788.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__6789 = this;
return cljs.core._nth.call(null,this__6789.ci,this__6789.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6790 = this;
if((this__6790.i > 0))
{return (new cljs.core.RSeq(this__6790.ci,(this__6790.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6791 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__6792 = this;
return (new cljs.core.RSeq(this__6792.ci,this__6792.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6793 = this;
return this__6793.meta;
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
{if((function (){var G__6797__6798 = coll;
if(G__6797__6798)
{if((function (){var or__3824__auto____6799 = (G__6797__6798.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____6799)
{return or__3824__auto____6799;
} else
{return G__6797__6798.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__6797__6798.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__6797__6798);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__6797__6798);
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
{if((function (){var G__6804__6805 = coll;
if(G__6804__6805)
{if((function (){var or__3824__auto____6806 = (G__6804__6805.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____6806)
{return or__3824__auto____6806;
} else
{return G__6804__6805.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__6804__6805.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6804__6805);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6804__6805);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__6807 = cljs.core.seq.call(null,coll);
if((s__6807 == null))
{return null;
} else
{return cljs.core._first.call(null,s__6807);
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
{if((function (){var G__6812__6813 = coll;
if(G__6812__6813)
{if((function (){var or__3824__auto____6814 = (G__6812__6813.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____6814)
{return or__3824__auto____6814;
} else
{return G__6812__6813.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__6812__6813.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6812__6813);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6812__6813);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__6815 = cljs.core.seq.call(null,coll);
if(!((s__6815 == null)))
{return cljs.core._rest.call(null,s__6815);
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
{if((function (){var G__6819__6820 = coll;
if(G__6819__6820)
{if((function (){var or__3824__auto____6821 = (G__6819__6820.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____6821)
{return or__3824__auto____6821;
} else
{return G__6819__6820.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__6819__6820.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__6819__6820);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__6819__6820);
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
var sn__6823 = cljs.core.next.call(null,s);
if(!((sn__6823 == null)))
{{
var G__6824 = sn__6823;
s = G__6824;
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
var G__6825__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__6826 = conj.call(null,coll,x);
var G__6827 = cljs.core.first.call(null,xs);
var G__6828 = cljs.core.next.call(null,xs);
coll = G__6826;
x = G__6827;
xs = G__6828;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__6825 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6825__delegate.call(this, coll, x, xs);
};
G__6825.cljs$lang$maxFixedArity = 2;
G__6825.cljs$lang$applyTo = (function (arglist__6829){
var coll = cljs.core.first(arglist__6829);
var x = cljs.core.first(cljs.core.next(arglist__6829));
var xs = cljs.core.rest(cljs.core.next(arglist__6829));
return G__6825__delegate(coll, x, xs);
});
G__6825.cljs$lang$arity$variadic = G__6825__delegate;
return G__6825;
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
var s__6832 = cljs.core.seq.call(null,coll);
var acc__6833 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__6832))
{return (acc__6833 + cljs.core._count.call(null,s__6832));
} else
{{
var G__6834 = cljs.core.next.call(null,s__6832);
var G__6835 = (acc__6833 + 1);
s__6832 = G__6834;
acc__6833 = G__6835;
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
{if((function (){var G__6842__6843 = coll;
if(G__6842__6843)
{if((function (){var or__3824__auto____6844 = (G__6842__6843.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____6844)
{return or__3824__auto____6844;
} else
{return G__6842__6843.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__6842__6843.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6842__6843);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6842__6843);
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
{if((function (){var G__6845__6846 = coll;
if(G__6845__6846)
{if((function (){var or__3824__auto____6847 = (G__6845__6846.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____6847)
{return or__3824__auto____6847;
} else
{return G__6845__6846.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__6845__6846.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6845__6846);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6845__6846);
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
var G__6850__delegate = function (coll,k,v,kvs){
while(true){
var ret__6849 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__6851 = ret__6849;
var G__6852 = cljs.core.first.call(null,kvs);
var G__6853 = cljs.core.second.call(null,kvs);
var G__6854 = cljs.core.nnext.call(null,kvs);
coll = G__6851;
k = G__6852;
v = G__6853;
kvs = G__6854;
continue;
}
} else
{return ret__6849;
}
break;
}
};
var G__6850 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6850__delegate.call(this, coll, k, v, kvs);
};
G__6850.cljs$lang$maxFixedArity = 3;
G__6850.cljs$lang$applyTo = (function (arglist__6855){
var coll = cljs.core.first(arglist__6855);
var k = cljs.core.first(cljs.core.next(arglist__6855));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6855)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6855)));
return G__6850__delegate(coll, k, v, kvs);
});
G__6850.cljs$lang$arity$variadic = G__6850__delegate;
return G__6850;
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
var G__6858__delegate = function (coll,k,ks){
while(true){
var ret__6857 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__6859 = ret__6857;
var G__6860 = cljs.core.first.call(null,ks);
var G__6861 = cljs.core.next.call(null,ks);
coll = G__6859;
k = G__6860;
ks = G__6861;
continue;
}
} else
{return ret__6857;
}
break;
}
};
var G__6858 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6858__delegate.call(this, coll, k, ks);
};
G__6858.cljs$lang$maxFixedArity = 2;
G__6858.cljs$lang$applyTo = (function (arglist__6862){
var coll = cljs.core.first(arglist__6862);
var k = cljs.core.first(cljs.core.next(arglist__6862));
var ks = cljs.core.rest(cljs.core.next(arglist__6862));
return G__6858__delegate(coll, k, ks);
});
G__6858.cljs$lang$arity$variadic = G__6858__delegate;
return G__6858;
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
if((function (){var G__6866__6867 = o;
if(G__6866__6867)
{if((function (){var or__3824__auto____6868 = (G__6866__6867.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____6868)
{return or__3824__auto____6868;
} else
{return G__6866__6867.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__6866__6867.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__6866__6867);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__6866__6867);
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
var G__6871__delegate = function (coll,k,ks){
while(true){
var ret__6870 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__6872 = ret__6870;
var G__6873 = cljs.core.first.call(null,ks);
var G__6874 = cljs.core.next.call(null,ks);
coll = G__6872;
k = G__6873;
ks = G__6874;
continue;
}
} else
{return ret__6870;
}
break;
}
};
var G__6871 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6871__delegate.call(this, coll, k, ks);
};
G__6871.cljs$lang$maxFixedArity = 2;
G__6871.cljs$lang$applyTo = (function (arglist__6875){
var coll = cljs.core.first(arglist__6875);
var k = cljs.core.first(cljs.core.next(arglist__6875));
var ks = cljs.core.rest(cljs.core.next(arglist__6875));
return G__6871__delegate(coll, k, ks);
});
G__6871.cljs$lang$arity$variadic = G__6871__delegate;
return G__6871;
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
var h__6877 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__6877);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__6877;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__6879 = (cljs.core.string_hash_cache[k]);
if(!((h__6879 == null)))
{return h__6879;
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
if((function (){var and__3822__auto____6881 = goog.isString(o);
if(and__3822__auto____6881)
{return check_cache;
} else
{return and__3822__auto____6881;
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
{var G__6885__6886 = x;
if(G__6885__6886)
{if((function (){var or__3824__auto____6887 = (G__6885__6886.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____6887)
{return or__3824__auto____6887;
} else
{return G__6885__6886.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__6885__6886.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__6885__6886);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__6885__6886);
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
{var G__6891__6892 = x;
if(G__6891__6892)
{if((function (){var or__3824__auto____6893 = (G__6891__6892.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____6893)
{return or__3824__auto____6893;
} else
{return G__6891__6892.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__6891__6892.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__6891__6892);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__6891__6892);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__6897__6898 = x;
if(G__6897__6898)
{if((function (){var or__3824__auto____6899 = (G__6897__6898.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____6899)
{return or__3824__auto____6899;
} else
{return G__6897__6898.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__6897__6898.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__6897__6898);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__6897__6898);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__6903__6904 = x;
if(G__6903__6904)
{if((function (){var or__3824__auto____6905 = (G__6903__6904.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____6905)
{return or__3824__auto____6905;
} else
{return G__6903__6904.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__6903__6904.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__6903__6904);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__6903__6904);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__6909__6910 = x;
if(G__6909__6910)
{if((function (){var or__3824__auto____6911 = (G__6909__6910.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____6911)
{return or__3824__auto____6911;
} else
{return G__6909__6910.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__6909__6910.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__6909__6910);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__6909__6910);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__6915__6916 = x;
if(G__6915__6916)
{if((function (){var or__3824__auto____6917 = (G__6915__6916.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____6917)
{return or__3824__auto____6917;
} else
{return G__6915__6916.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__6915__6916.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6915__6916);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6915__6916);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__6921__6922 = x;
if(G__6921__6922)
{if((function (){var or__3824__auto____6923 = (G__6921__6922.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____6923)
{return or__3824__auto____6923;
} else
{return G__6921__6922.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__6921__6922.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6921__6922);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6921__6922);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__6927__6928 = x;
if(G__6927__6928)
{if((function (){var or__3824__auto____6929 = (G__6927__6928.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____6929)
{return or__3824__auto____6929;
} else
{return G__6927__6928.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__6927__6928.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__6927__6928);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__6927__6928);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__6933__6934 = x;
if(G__6933__6934)
{if((function (){var or__3824__auto____6935 = (G__6933__6934.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____6935)
{return or__3824__auto____6935;
} else
{return G__6933__6934.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__6933__6934.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__6933__6934);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__6933__6934);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__6939__6940 = x;
if(G__6939__6940)
{if(cljs.core.truth_((function (){var or__3824__auto____6941 = null;
if(cljs.core.truth_(or__3824__auto____6941))
{return or__3824__auto____6941;
} else
{return G__6939__6940.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__6939__6940.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__6939__6940);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__6939__6940);
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
var G__6942__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__6942 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6942__delegate.call(this, keyvals);
};
G__6942.cljs$lang$maxFixedArity = 0;
G__6942.cljs$lang$applyTo = (function (arglist__6943){
var keyvals = cljs.core.seq(arglist__6943);;
return G__6942__delegate(keyvals);
});
G__6942.cljs$lang$arity$variadic = G__6942__delegate;
return G__6942;
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
var keys__6945 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__6945.push(key);
}));
return keys__6945;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__6949 = i;
var j__6950 = j;
var len__6951 = len;
while(true){
if((len__6951 === 0))
{return to;
} else
{(to[j__6950] = (from[i__6949]));
{
var G__6952 = (i__6949 + 1);
var G__6953 = (j__6950 + 1);
var G__6954 = (len__6951 - 1);
i__6949 = G__6952;
j__6950 = G__6953;
len__6951 = G__6954;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__6958 = (i + (len - 1));
var j__6959 = (j + (len - 1));
var len__6960 = len;
while(true){
if((len__6960 === 0))
{return to;
} else
{(to[j__6959] = (from[i__6958]));
{
var G__6961 = (i__6958 - 1);
var G__6962 = (j__6959 - 1);
var G__6963 = (len__6960 - 1);
i__6958 = G__6961;
j__6959 = G__6962;
len__6960 = G__6963;
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
{var G__6967__6968 = s;
if(G__6967__6968)
{if((function (){var or__3824__auto____6969 = (G__6967__6968.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____6969)
{return or__3824__auto____6969;
} else
{return G__6967__6968.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__6967__6968.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6967__6968);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6967__6968);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__6973__6974 = s;
if(G__6973__6974)
{if((function (){var or__3824__auto____6975 = (G__6973__6974.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____6975)
{return or__3824__auto____6975;
} else
{return G__6973__6974.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__6973__6974.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__6973__6974);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__6973__6974);
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
var and__3822__auto____6978 = goog.isString(x);
if(and__3822__auto____6978)
{return !((function (){var or__3824__auto____6979 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____6979)
{return or__3824__auto____6979;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____6978;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____6981 = goog.isString(x);
if(and__3822__auto____6981)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____6981;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____6983 = goog.isString(x);
if(and__3822__auto____6983)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____6983;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____6988 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____6988)
{return or__3824__auto____6988;
} else
{var G__6989__6990 = f;
if(G__6989__6990)
{if((function (){var or__3824__auto____6991 = (G__6989__6990.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____6991)
{return or__3824__auto____6991;
} else
{return G__6989__6990.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__6989__6990.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__6989__6990);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__6989__6990);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____6993 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____6993)
{return (n == n.toFixed());
} else
{return and__3822__auto____6993;
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
if(cljs.core.truth_((function (){var and__3822__auto____6996 = coll;
if(cljs.core.truth_(and__3822__auto____6996))
{var and__3822__auto____6997 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____6997)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____6997;
}
} else
{return and__3822__auto____6996;
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
var G__7006__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__7002 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__7003 = more;
while(true){
var x__7004 = cljs.core.first.call(null,xs__7003);
var etc__7005 = cljs.core.next.call(null,xs__7003);
if(cljs.core.truth_(xs__7003))
{if(cljs.core.contains_QMARK_.call(null,s__7002,x__7004))
{return false;
} else
{{
var G__7007 = cljs.core.conj.call(null,s__7002,x__7004);
var G__7008 = etc__7005;
s__7002 = G__7007;
xs__7003 = G__7008;
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
var G__7006 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7006__delegate.call(this, x, y, more);
};
G__7006.cljs$lang$maxFixedArity = 2;
G__7006.cljs$lang$applyTo = (function (arglist__7009){
var x = cljs.core.first(arglist__7009);
var y = cljs.core.first(cljs.core.next(arglist__7009));
var more = cljs.core.rest(cljs.core.next(arglist__7009));
return G__7006__delegate(x, y, more);
});
G__7006.cljs$lang$arity$variadic = G__7006__delegate;
return G__7006;
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
{if((function (){var G__7013__7014 = x;
if(G__7013__7014)
{if(cljs.core.truth_((function (){var or__3824__auto____7015 = null;
if(cljs.core.truth_(or__3824__auto____7015))
{return or__3824__auto____7015;
} else
{return G__7013__7014.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__7013__7014.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__7013__7014);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__7013__7014);
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
var xl__7020 = cljs.core.count.call(null,xs);
var yl__7021 = cljs.core.count.call(null,ys);
if((xl__7020 < yl__7021))
{return -1;
} else
{if((xl__7020 > yl__7021))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__7020,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__7022 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____7023 = (d__7022 === 0);
if(and__3822__auto____7023)
{return ((n + 1) < len);
} else
{return and__3822__auto____7023;
}
})())
{{
var G__7024 = xs;
var G__7025 = ys;
var G__7026 = len;
var G__7027 = (n + 1);
xs = G__7024;
ys = G__7025;
len = G__7026;
n = G__7027;
continue;
}
} else
{return d__7022;
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
var r__7029 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__7029))
{return r__7029;
} else
{if(cljs.core.truth_(r__7029))
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
{var a__7031 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__7031,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__7031);
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
var temp__3971__auto____7037 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____7037)
{var s__7038 = temp__3971__auto____7037;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__7038),cljs.core.next.call(null,s__7038));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__7039 = val;
var coll__7040 = cljs.core.seq.call(null,coll);
while(true){
if(coll__7040)
{var nval__7041 = f.call(null,val__7039,cljs.core.first.call(null,coll__7040));
if(cljs.core.reduced_QMARK_.call(null,nval__7041))
{return cljs.core.deref.call(null,nval__7041);
} else
{{
var G__7042 = nval__7041;
var G__7043 = cljs.core.next.call(null,coll__7040);
val__7039 = G__7042;
coll__7040 = G__7043;
continue;
}
}
} else
{return val__7039;
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
var a__7045 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__7045);
return cljs.core.vec.call(null,a__7045);
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
if((function (){var G__7052__7053 = coll;
if(G__7052__7053)
{if((function (){var or__3824__auto____7054 = (G__7052__7053.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7054)
{return or__3824__auto____7054;
} else
{return G__7052__7053.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7052__7053.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7052__7053);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7052__7053);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__7055__7056 = coll;
if(G__7055__7056)
{if((function (){var or__3824__auto____7057 = (G__7055__7056.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7057)
{return or__3824__auto____7057;
} else
{return G__7055__7056.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7055__7056.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7055__7056);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7055__7056);
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
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__2311__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__7058 = this;
return this__7058.val;
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
var G__7059__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__7059 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7059__delegate.call(this, x, y, more);
};
G__7059.cljs$lang$maxFixedArity = 2;
G__7059.cljs$lang$applyTo = (function (arglist__7060){
var x = cljs.core.first(arglist__7060);
var y = cljs.core.first(cljs.core.next(arglist__7060));
var more = cljs.core.rest(cljs.core.next(arglist__7060));
return G__7059__delegate(x, y, more);
});
G__7059.cljs$lang$arity$variadic = G__7059__delegate;
return G__7059;
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
var G__7061__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__7061 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7061__delegate.call(this, x, y, more);
};
G__7061.cljs$lang$maxFixedArity = 2;
G__7061.cljs$lang$applyTo = (function (arglist__7062){
var x = cljs.core.first(arglist__7062);
var y = cljs.core.first(cljs.core.next(arglist__7062));
var more = cljs.core.rest(cljs.core.next(arglist__7062));
return G__7061__delegate(x, y, more);
});
G__7061.cljs$lang$arity$variadic = G__7061__delegate;
return G__7061;
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
var G__7063__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__7063 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7063__delegate.call(this, x, y, more);
};
G__7063.cljs$lang$maxFixedArity = 2;
G__7063.cljs$lang$applyTo = (function (arglist__7064){
var x = cljs.core.first(arglist__7064);
var y = cljs.core.first(cljs.core.next(arglist__7064));
var more = cljs.core.rest(cljs.core.next(arglist__7064));
return G__7063__delegate(x, y, more);
});
G__7063.cljs$lang$arity$variadic = G__7063__delegate;
return G__7063;
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
var G__7065__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__7065 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7065__delegate.call(this, x, y, more);
};
G__7065.cljs$lang$maxFixedArity = 2;
G__7065.cljs$lang$applyTo = (function (arglist__7066){
var x = cljs.core.first(arglist__7066);
var y = cljs.core.first(cljs.core.next(arglist__7066));
var more = cljs.core.rest(cljs.core.next(arglist__7066));
return G__7065__delegate(x, y, more);
});
G__7065.cljs$lang$arity$variadic = G__7065__delegate;
return G__7065;
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
var G__7067__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__7068 = y;
var G__7069 = cljs.core.first.call(null,more);
var G__7070 = cljs.core.next.call(null,more);
x = G__7068;
y = G__7069;
more = G__7070;
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
var G__7067 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7067__delegate.call(this, x, y, more);
};
G__7067.cljs$lang$maxFixedArity = 2;
G__7067.cljs$lang$applyTo = (function (arglist__7071){
var x = cljs.core.first(arglist__7071);
var y = cljs.core.first(cljs.core.next(arglist__7071));
var more = cljs.core.rest(cljs.core.next(arglist__7071));
return G__7067__delegate(x, y, more);
});
G__7067.cljs$lang$arity$variadic = G__7067__delegate;
return G__7067;
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
var G__7072__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__7073 = y;
var G__7074 = cljs.core.first.call(null,more);
var G__7075 = cljs.core.next.call(null,more);
x = G__7073;
y = G__7074;
more = G__7075;
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
var G__7072 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7072__delegate.call(this, x, y, more);
};
G__7072.cljs$lang$maxFixedArity = 2;
G__7072.cljs$lang$applyTo = (function (arglist__7076){
var x = cljs.core.first(arglist__7076);
var y = cljs.core.first(cljs.core.next(arglist__7076));
var more = cljs.core.rest(cljs.core.next(arglist__7076));
return G__7072__delegate(x, y, more);
});
G__7072.cljs$lang$arity$variadic = G__7072__delegate;
return G__7072;
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
var G__7077__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__7078 = y;
var G__7079 = cljs.core.first.call(null,more);
var G__7080 = cljs.core.next.call(null,more);
x = G__7078;
y = G__7079;
more = G__7080;
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
var G__7077 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7077__delegate.call(this, x, y, more);
};
G__7077.cljs$lang$maxFixedArity = 2;
G__7077.cljs$lang$applyTo = (function (arglist__7081){
var x = cljs.core.first(arglist__7081);
var y = cljs.core.first(cljs.core.next(arglist__7081));
var more = cljs.core.rest(cljs.core.next(arglist__7081));
return G__7077__delegate(x, y, more);
});
G__7077.cljs$lang$arity$variadic = G__7077__delegate;
return G__7077;
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
var G__7082__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__7083 = y;
var G__7084 = cljs.core.first.call(null,more);
var G__7085 = cljs.core.next.call(null,more);
x = G__7083;
y = G__7084;
more = G__7085;
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
var G__7082 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7082__delegate.call(this, x, y, more);
};
G__7082.cljs$lang$maxFixedArity = 2;
G__7082.cljs$lang$applyTo = (function (arglist__7086){
var x = cljs.core.first(arglist__7086);
var y = cljs.core.first(cljs.core.next(arglist__7086));
var more = cljs.core.rest(cljs.core.next(arglist__7086));
return G__7082__delegate(x, y, more);
});
G__7082.cljs$lang$arity$variadic = G__7082__delegate;
return G__7082;
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
var G__7087__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__7087 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7087__delegate.call(this, x, y, more);
};
G__7087.cljs$lang$maxFixedArity = 2;
G__7087.cljs$lang$applyTo = (function (arglist__7088){
var x = cljs.core.first(arglist__7088);
var y = cljs.core.first(cljs.core.next(arglist__7088));
var more = cljs.core.rest(cljs.core.next(arglist__7088));
return G__7087__delegate(x, y, more);
});
G__7087.cljs$lang$arity$variadic = G__7087__delegate;
return G__7087;
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
var G__7089__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__7089 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7089__delegate.call(this, x, y, more);
};
G__7089.cljs$lang$maxFixedArity = 2;
G__7089.cljs$lang$applyTo = (function (arglist__7090){
var x = cljs.core.first(arglist__7090);
var y = cljs.core.first(cljs.core.next(arglist__7090));
var more = cljs.core.rest(cljs.core.next(arglist__7090));
return G__7089__delegate(x, y, more);
});
G__7089.cljs$lang$arity$variadic = G__7089__delegate;
return G__7089;
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
var rem__7092 = (n % d);
return cljs.core.fix.call(null,((n - rem__7092) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__7094 = cljs.core.quot.call(null,n,d);
return (n - (d * q__7094));
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
var v__7097 = (v - ((v >> 1) & 1431655765));
var v__7098 = ((v__7097 & 858993459) + ((v__7097 >> 2) & 858993459));
return ((((v__7098 + (v__7098 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__7099__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__7100 = y;
var G__7101 = cljs.core.first.call(null,more);
var G__7102 = cljs.core.next.call(null,more);
x = G__7100;
y = G__7101;
more = G__7102;
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
var G__7099 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7099__delegate.call(this, x, y, more);
};
G__7099.cljs$lang$maxFixedArity = 2;
G__7099.cljs$lang$applyTo = (function (arglist__7103){
var x = cljs.core.first(arglist__7103);
var y = cljs.core.first(cljs.core.next(arglist__7103));
var more = cljs.core.rest(cljs.core.next(arglist__7103));
return G__7099__delegate(x, y, more);
});
G__7099.cljs$lang$arity$variadic = G__7099__delegate;
return G__7099;
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
var n__7107 = n;
var xs__7108 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7109 = xs__7108;
if(and__3822__auto____7109)
{return (n__7107 > 0);
} else
{return and__3822__auto____7109;
}
})()))
{{
var G__7110 = (n__7107 - 1);
var G__7111 = cljs.core.next.call(null,xs__7108);
n__7107 = G__7110;
xs__7108 = G__7111;
continue;
}
} else
{return xs__7108;
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
var G__7112__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7113 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__7114 = cljs.core.next.call(null,more);
sb = G__7113;
more = G__7114;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__7112 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7112__delegate.call(this, x, ys);
};
G__7112.cljs$lang$maxFixedArity = 1;
G__7112.cljs$lang$applyTo = (function (arglist__7115){
var x = cljs.core.first(arglist__7115);
var ys = cljs.core.rest(arglist__7115);
return G__7112__delegate(x, ys);
});
G__7112.cljs$lang$arity$variadic = G__7112__delegate;
return G__7112;
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
var G__7116__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7117 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__7118 = cljs.core.next.call(null,more);
sb = G__7117;
more = G__7118;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__7116 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7116__delegate.call(this, x, ys);
};
G__7116.cljs$lang$maxFixedArity = 1;
G__7116.cljs$lang$applyTo = (function (arglist__7119){
var x = cljs.core.first(arglist__7119);
var ys = cljs.core.rest(arglist__7119);
return G__7116__delegate(x, ys);
});
G__7116.cljs$lang$arity$variadic = G__7116__delegate;
return G__7116;
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
format.cljs$lang$applyTo = (function (arglist__7120){
var fmt = cljs.core.first(arglist__7120);
var args = cljs.core.rest(arglist__7120);
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__7123 = cljs.core.seq.call(null,x);
var ys__7124 = cljs.core.seq.call(null,y);
while(true){
if((xs__7123 == null))
{return (ys__7124 == null);
} else
{if((ys__7124 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__7123),cljs.core.first.call(null,ys__7124)))
{{
var G__7125 = cljs.core.next.call(null,xs__7123);
var G__7126 = cljs.core.next.call(null,ys__7124);
xs__7123 = G__7125;
ys__7124 = G__7126;
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
return cljs.core.reduce.call(null,(function (p1__7127_SHARP_,p2__7128_SHARP_){
return cljs.core.hash_combine.call(null,p1__7127_SHARP_,cljs.core.hash.call(null,p2__7128_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__7132 = 0;
var s__7133 = cljs.core.seq.call(null,m);
while(true){
if(s__7133)
{var e__7134 = cljs.core.first.call(null,s__7133);
{
var G__7135 = ((h__7132 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__7134)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__7134)))) % 4503599627370496);
var G__7136 = cljs.core.next.call(null,s__7133);
h__7132 = G__7135;
s__7133 = G__7136;
continue;
}
} else
{return h__7132;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__7140 = 0;
var s__7141 = cljs.core.seq.call(null,s);
while(true){
if(s__7141)
{var e__7142 = cljs.core.first.call(null,s__7141);
{
var G__7143 = ((h__7140 + cljs.core.hash.call(null,e__7142)) % 4503599627370496);
var G__7144 = cljs.core.next.call(null,s__7141);
h__7140 = G__7143;
s__7141 = G__7144;
continue;
}
} else
{return h__7140;
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
var G__7165__7166 = cljs.core.seq.call(null,fn_map);
if(G__7165__7166)
{var G__7168__7170 = cljs.core.first.call(null,G__7165__7166);
var vec__7169__7171 = G__7168__7170;
var key_name__7172 = cljs.core.nth.call(null,vec__7169__7171,0,null);
var f__7173 = cljs.core.nth.call(null,vec__7169__7171,1,null);
var G__7165__7174 = G__7165__7166;
var G__7168__7175 = G__7168__7170;
var G__7165__7176 = G__7165__7174;
while(true){
var vec__7177__7178 = G__7168__7175;
var key_name__7179 = cljs.core.nth.call(null,vec__7177__7178,0,null);
var f__7180 = cljs.core.nth.call(null,vec__7177__7178,1,null);
var G__7165__7181 = G__7165__7176;
var str_name__7182 = cljs.core.name.call(null,key_name__7179);
(obj[str_name__7182] = f__7180);
var temp__3974__auto____7183 = cljs.core.next.call(null,G__7165__7181);
if(temp__3974__auto____7183)
{var G__7165__7184 = temp__3974__auto____7183;
{
var G__7185 = cljs.core.first.call(null,G__7165__7184);
var G__7186 = G__7165__7184;
G__7168__7175 = G__7185;
G__7165__7176 = G__7186;
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
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__2311__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7187 = this;
var h__2194__auto____7188 = this__7187.__hash;
if(!((h__2194__auto____7188 == null)))
{return h__2194__auto____7188;
} else
{var h__2194__auto____7189 = cljs.core.hash_coll.call(null,coll);
this__7187.__hash = h__2194__auto____7189;
return h__2194__auto____7189;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7190 = this;
if((this__7190.count === 1))
{return null;
} else
{return this__7190.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7191 = this;
return (new cljs.core.List(this__7191.meta,o,coll,(this__7191.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__7192 = this;
var this__7193 = this;
return cljs.core.pr_str.call(null,this__7193);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7194 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7195 = this;
return this__7195.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7196 = this;
return this__7196.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7197 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7198 = this;
return this__7198.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7199 = this;
if((this__7199.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__7199.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7200 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7201 = this;
return (new cljs.core.List(meta,this__7201.first,this__7201.rest,this__7201.count,this__7201.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7202 = this;
return this__7202.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7203 = this;
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
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__2311__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7204 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7205 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7206 = this;
return (new cljs.core.List(this__7206.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__7207 = this;
var this__7208 = this;
return cljs.core.pr_str.call(null,this__7208);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7209 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7210 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7211 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7212 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7213 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7214 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7215 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7216 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7217 = this;
return this__7217.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7218 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__7222__7223 = coll;
if(G__7222__7223)
{if((function (){var or__3824__auto____7224 = (G__7222__7223.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____7224)
{return or__3824__auto____7224;
} else
{return G__7222__7223.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__7222__7223.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7222__7223);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7222__7223);
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
var G__7225__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__7225 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7225__delegate.call(this, x, y, z, items);
};
G__7225.cljs$lang$maxFixedArity = 3;
G__7225.cljs$lang$applyTo = (function (arglist__7226){
var x = cljs.core.first(arglist__7226);
var y = cljs.core.first(cljs.core.next(arglist__7226));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7226)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7226)));
return G__7225__delegate(x, y, z, items);
});
G__7225.cljs$lang$arity$variadic = G__7225__delegate;
return G__7225;
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
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__2311__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7227 = this;
var h__2194__auto____7228 = this__7227.__hash;
if(!((h__2194__auto____7228 == null)))
{return h__2194__auto____7228;
} else
{var h__2194__auto____7229 = cljs.core.hash_coll.call(null,coll);
this__7227.__hash = h__2194__auto____7229;
return h__2194__auto____7229;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7230 = this;
if((this__7230.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__7230.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7231 = this;
return (new cljs.core.Cons(null,o,coll,this__7231.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__7232 = this;
var this__7233 = this;
return cljs.core.pr_str.call(null,this__7233);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7234 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7235 = this;
return this__7235.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7236 = this;
if((this__7236.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__7236.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7237 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7238 = this;
return (new cljs.core.Cons(meta,this__7238.first,this__7238.rest,this__7238.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7239 = this;
return this__7239.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7240 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7240.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____7245 = (coll == null);
if(or__3824__auto____7245)
{return or__3824__auto____7245;
} else
{var G__7246__7247 = coll;
if(G__7246__7247)
{if((function (){var or__3824__auto____7248 = (G__7246__7247.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7248)
{return or__3824__auto____7248;
} else
{return G__7246__7247.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7246__7247.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7246__7247);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7246__7247);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__7252__7253 = x;
if(G__7252__7253)
{if((function (){var or__3824__auto____7254 = (G__7252__7253.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____7254)
{return or__3824__auto____7254;
} else
{return G__7252__7253.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__7252__7253.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7252__7253);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7252__7253);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__7255 = null;
var G__7255__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__7255__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__7255 = function(string,f,start){
switch(arguments.length){
case 2:
return G__7255__2.call(this,string,f);
case 3:
return G__7255__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7255;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__7256 = null;
var G__7256__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__7256__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__7256 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__7256__2.call(this,string,k);
case 3:
return G__7256__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7256;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__7257 = null;
var G__7257__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__7257__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__7257 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__7257__2.call(this,string,n);
case 3:
return G__7257__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7257;
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
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__2311__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function() {
var G__7269 = null;
var G__7269__2 = (function (this_sym7260,coll){
var this__7262 = this;
var this_sym7260__7263 = this;
var ___7264 = this_sym7260__7263;
if((coll == null))
{return null;
} else
{var strobj__7265 = coll.strobj;
if((strobj__7265 == null))
{return cljs.core._lookup.call(null,coll,this__7262.k,null);
} else
{return (strobj__7265[this__7262.k]);
}
}
});
var G__7269__3 = (function (this_sym7261,coll,not_found){
var this__7262 = this;
var this_sym7261__7266 = this;
var ___7267 = this_sym7261__7266;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__7262.k,not_found);
}
});
G__7269 = function(this_sym7261,coll,not_found){
switch(arguments.length){
case 2:
return G__7269__2.call(this,this_sym7261,coll);
case 3:
return G__7269__3.call(this,this_sym7261,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7269;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym7258,args7259){
var this__7268 = this;
return this_sym7258.call.apply(this_sym7258,[this_sym7258].concat(args7259.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__7278 = null;
var G__7278__2 = (function (this_sym7272,coll){
var this_sym7272__7274 = this;
var this__7275 = this_sym7272__7274;
return cljs.core._lookup.call(null,coll,this__7275.toString(),null);
});
var G__7278__3 = (function (this_sym7273,coll,not_found){
var this_sym7273__7276 = this;
var this__7277 = this_sym7273__7276;
return cljs.core._lookup.call(null,coll,this__7277.toString(),not_found);
});
G__7278 = function(this_sym7273,coll,not_found){
switch(arguments.length){
case 2:
return G__7278__2.call(this,this_sym7273,coll);
case 3:
return G__7278__3.call(this,this_sym7273,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7278;
})()
;
String.prototype.apply = (function (this_sym7270,args7271){
return this_sym7270.call.apply(this_sym7270,[this_sym7270].concat(args7271.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__7280 = lazy_seq.x;
if(lazy_seq.realized)
{return x__7280;
} else
{lazy_seq.x = x__7280.call(null);
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
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__2311__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7281 = this;
var h__2194__auto____7282 = this__7281.__hash;
if(!((h__2194__auto____7282 == null)))
{return h__2194__auto____7282;
} else
{var h__2194__auto____7283 = cljs.core.hash_coll.call(null,coll);
this__7281.__hash = h__2194__auto____7283;
return h__2194__auto____7283;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7284 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7285 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__7286 = this;
var this__7287 = this;
return cljs.core.pr_str.call(null,this__7287);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7288 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7289 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7290 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7291 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7292 = this;
return (new cljs.core.LazySeq(meta,this__7292.realized,this__7292.x,this__7292.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7293 = this;
return this__7293.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7294 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7294.meta);
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
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__2311__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7295 = this;
return this__7295.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__7296 = this;
var ___7297 = this;
(this__7296.buf[this__7296.end] = o);
return this__7296.end = (this__7296.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__7298 = this;
var ___7299 = this;
var ret__7300 = (new cljs.core.ArrayChunk(this__7298.buf,0,this__7298.end));
this__7298.buf = null;
return ret__7300;
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
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__2311__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7301 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__7301.arr[this__7301.off]),(this__7301.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7302 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__7302.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__7303 = this;
if((this__7303.off === this__7303.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__7303.arr,(this__7303.off + 1),this__7303.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__7304 = this;
return (this__7304.arr[(this__7304.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__7305 = this;
if((function (){var and__3822__auto____7306 = (i >= 0);
if(and__3822__auto____7306)
{return (i < (this__7305.end - this__7305.off));
} else
{return and__3822__auto____7306;
}
})())
{return (this__7305.arr[(this__7305.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7307 = this;
return (this__7307.end - this__7307.off);
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
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__2311__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__7308 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7309 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7310 = this;
return cljs.core._nth.call(null,this__7310.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7311 = this;
if((cljs.core._count.call(null,this__7311.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__7311.chunk),this__7311.more,this__7311.meta));
} else
{if((this__7311.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7311.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__7312 = this;
if((this__7312.more == null))
{return null;
} else
{return this__7312.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7313 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__7314 = this;
return (new cljs.core.ChunkedCons(this__7314.chunk,this__7314.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7315 = this;
return this__7315.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__7316 = this;
return this__7316.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__7317 = this;
if((this__7317.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7317.more;
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
if((function (){var G__7321__7322 = s;
if(G__7321__7322)
{if(cljs.core.truth_((function (){var or__3824__auto____7323 = null;
if(cljs.core.truth_(or__3824__auto____7323))
{return or__3824__auto____7323;
} else
{return G__7321__7322.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__7321__7322.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7321__7322);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7321__7322);
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
var ary__7326 = [];
var s__7327 = s;
while(true){
if(cljs.core.seq.call(null,s__7327))
{ary__7326.push(cljs.core.first.call(null,s__7327));
{
var G__7328 = cljs.core.next.call(null,s__7327);
s__7327 = G__7328;
continue;
}
} else
{return ary__7326;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__7332 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__7333 = 0;
var xs__7334 = cljs.core.seq.call(null,coll);
while(true){
if(xs__7334)
{(ret__7332[i__7333] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__7334)));
{
var G__7335 = (i__7333 + 1);
var G__7336 = cljs.core.next.call(null,xs__7334);
i__7333 = G__7335;
xs__7334 = G__7336;
continue;
}
} else
{}
break;
}
return ret__7332;
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
var a__7344 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7345 = cljs.core.seq.call(null,init_val_or_seq);
var i__7346 = 0;
var s__7347 = s__7345;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7348 = s__7347;
if(and__3822__auto____7348)
{return (i__7346 < size);
} else
{return and__3822__auto____7348;
}
})()))
{(a__7344[i__7346] = cljs.core.first.call(null,s__7347));
{
var G__7351 = (i__7346 + 1);
var G__7352 = cljs.core.next.call(null,s__7347);
i__7346 = G__7351;
s__7347 = G__7352;
continue;
}
} else
{return a__7344;
}
break;
}
} else
{var n__2529__auto____7349 = size;
var i__7350 = 0;
while(true){
if((i__7350 < n__2529__auto____7349))
{(a__7344[i__7350] = init_val_or_seq);
{
var G__7353 = (i__7350 + 1);
i__7350 = G__7353;
continue;
}
} else
{}
break;
}
return a__7344;
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
var a__7361 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7362 = cljs.core.seq.call(null,init_val_or_seq);
var i__7363 = 0;
var s__7364 = s__7362;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7365 = s__7364;
if(and__3822__auto____7365)
{return (i__7363 < size);
} else
{return and__3822__auto____7365;
}
})()))
{(a__7361[i__7363] = cljs.core.first.call(null,s__7364));
{
var G__7368 = (i__7363 + 1);
var G__7369 = cljs.core.next.call(null,s__7364);
i__7363 = G__7368;
s__7364 = G__7369;
continue;
}
} else
{return a__7361;
}
break;
}
} else
{var n__2529__auto____7366 = size;
var i__7367 = 0;
while(true){
if((i__7367 < n__2529__auto____7366))
{(a__7361[i__7367] = init_val_or_seq);
{
var G__7370 = (i__7367 + 1);
i__7367 = G__7370;
continue;
}
} else
{}
break;
}
return a__7361;
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
var a__7378 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7379 = cljs.core.seq.call(null,init_val_or_seq);
var i__7380 = 0;
var s__7381 = s__7379;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7382 = s__7381;
if(and__3822__auto____7382)
{return (i__7380 < size);
} else
{return and__3822__auto____7382;
}
})()))
{(a__7378[i__7380] = cljs.core.first.call(null,s__7381));
{
var G__7385 = (i__7380 + 1);
var G__7386 = cljs.core.next.call(null,s__7381);
i__7380 = G__7385;
s__7381 = G__7386;
continue;
}
} else
{return a__7378;
}
break;
}
} else
{var n__2529__auto____7383 = size;
var i__7384 = 0;
while(true){
if((i__7384 < n__2529__auto____7383))
{(a__7378[i__7384] = init_val_or_seq);
{
var G__7387 = (i__7384 + 1);
i__7384 = G__7387;
continue;
}
} else
{}
break;
}
return a__7378;
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
{var s__7392 = s;
var i__7393 = n;
var sum__7394 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7395 = (i__7393 > 0);
if(and__3822__auto____7395)
{return cljs.core.seq.call(null,s__7392);
} else
{return and__3822__auto____7395;
}
})()))
{{
var G__7396 = cljs.core.next.call(null,s__7392);
var G__7397 = (i__7393 - 1);
var G__7398 = (sum__7394 + 1);
s__7392 = G__7396;
i__7393 = G__7397;
sum__7394 = G__7398;
continue;
}
} else
{return sum__7394;
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
var s__7403 = cljs.core.seq.call(null,x);
if(s__7403)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__7403))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__7403),concat.call(null,cljs.core.chunk_rest.call(null,s__7403),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__7403),concat.call(null,cljs.core.rest.call(null,s__7403),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__7407__delegate = function (x,y,zs){
var cat__7406 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__7405 = cljs.core.seq.call(null,xys);
if(xys__7405)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__7405))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__7405),cat.call(null,cljs.core.chunk_rest.call(null,xys__7405),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__7405),cat.call(null,cljs.core.rest.call(null,xys__7405),zs));
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
return cat__7406.call(null,concat.call(null,x,y),zs);
};
var G__7407 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7407__delegate.call(this, x, y, zs);
};
G__7407.cljs$lang$maxFixedArity = 2;
G__7407.cljs$lang$applyTo = (function (arglist__7408){
var x = cljs.core.first(arglist__7408);
var y = cljs.core.first(cljs.core.next(arglist__7408));
var zs = cljs.core.rest(cljs.core.next(arglist__7408));
return G__7407__delegate(x, y, zs);
});
G__7407.cljs$lang$arity$variadic = G__7407__delegate;
return G__7407;
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
var G__7409__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__7409 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7409__delegate.call(this, a, b, c, d, more);
};
G__7409.cljs$lang$maxFixedArity = 4;
G__7409.cljs$lang$applyTo = (function (arglist__7410){
var a = cljs.core.first(arglist__7410);
var b = cljs.core.first(cljs.core.next(arglist__7410));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7410)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7410))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7410))));
return G__7409__delegate(a, b, c, d, more);
});
G__7409.cljs$lang$arity$variadic = G__7409__delegate;
return G__7409;
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
var args__7452 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__7453 = cljs.core._first.call(null,args__7452);
var args__7454 = cljs.core._rest.call(null,args__7452);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__7453);
} else
{return f.call(null,a__7453);
}
} else
{var b__7455 = cljs.core._first.call(null,args__7454);
var args__7456 = cljs.core._rest.call(null,args__7454);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__7453,b__7455);
} else
{return f.call(null,a__7453,b__7455);
}
} else
{var c__7457 = cljs.core._first.call(null,args__7456);
var args__7458 = cljs.core._rest.call(null,args__7456);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__7453,b__7455,c__7457);
} else
{return f.call(null,a__7453,b__7455,c__7457);
}
} else
{var d__7459 = cljs.core._first.call(null,args__7458);
var args__7460 = cljs.core._rest.call(null,args__7458);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__7453,b__7455,c__7457,d__7459);
} else
{return f.call(null,a__7453,b__7455,c__7457,d__7459);
}
} else
{var e__7461 = cljs.core._first.call(null,args__7460);
var args__7462 = cljs.core._rest.call(null,args__7460);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__7453,b__7455,c__7457,d__7459,e__7461);
} else
{return f.call(null,a__7453,b__7455,c__7457,d__7459,e__7461);
}
} else
{var f__7463 = cljs.core._first.call(null,args__7462);
var args__7464 = cljs.core._rest.call(null,args__7462);
if((argc === 6))
{if(f__7463.cljs$lang$arity$6)
{return f__7463.cljs$lang$arity$6(a__7453,b__7455,c__7457,d__7459,e__7461,f__7463);
} else
{return f__7463.call(null,a__7453,b__7455,c__7457,d__7459,e__7461,f__7463);
}
} else
{var g__7465 = cljs.core._first.call(null,args__7464);
var args__7466 = cljs.core._rest.call(null,args__7464);
if((argc === 7))
{if(f__7463.cljs$lang$arity$7)
{return f__7463.cljs$lang$arity$7(a__7453,b__7455,c__7457,d__7459,e__7461,f__7463,g__7465);
} else
{return f__7463.call(null,a__7453,b__7455,c__7457,d__7459,e__7461,f__7463,g__7465);
}
} else
{var h__7467 = cljs.core._first.call(null,args__7466);
var args__7468 = cljs.core._rest.call(null,args__7466);
if((argc === 8))
{if(f__7463.cljs$lang$arity$8)
{return f__7463.cljs$lang$arity$8(a__7453,b__7455,c__7457,d__7459,e__7461,f__7463,g__7465,h__7467);
} else
{return f__7463.call(null,a__7453,b__7455,c__7457,d__7459,e__7461,f__7463,g__7465,h__7467);
}
} else
{var i__7469 = cljs.core._first.call(null,args__7468);
var args__7470 = cljs.core._rest.call(null,args__7468);
if((argc === 9))
{if(f__7463.cljs$lang$arity$9)
{return f__7463.cljs$lang$arity$9(a__7453,b__7455,c__7457,d__7459,e__7461,f__7463,g__7465,h__7467,i__7469);
} else
{return f__7463.call(null,a__7453,b__7455,c__7457,d__7459,e__7461,f__7463,g__7465,h__7467,i__7469);
}
} else
{var j__7471 = cljs.core._first.call(null,args__7470);
var args__7472 = cljs.core._rest.call(null,args__7470);
if((argc === 10))
{if(f__7463.cljs$lang$arity$10)
{return f__7463.cljs$lang$arity$10(a__7453,b__7455,c__7457,d__7459,e__7461,f__7463,g__7465,h__7467,i__7469,j__7471);
} else
{return f__7463.call(null,a__7453,b__7455,c__7457,d__7459,e__7461,f__7463,g__7465,h__7467,i__7469,j__7471);
}
} else
{var k__7473 = cljs.core._first.call(null,args__7472);
var args__7474 = cljs.core._rest.call(null,args__7472);
if((argc === 11))
{if(f__7463.cljs$lang$arity$11)
{return f__7463.cljs$lang$arity$11(a__7453,b__7455,c__7457,d__7459,e__7461,f__7463,g__7465,h__7467,i__7469,j__7471,k__7473);
} else
{return f__7463.call(null,a__7453,b__7455,c__7457,d__7459,e__7461,f__7463,g__7465,h__7467,i__7469,j__7471,k__7473);
}
} else
{var l__7475 = cljs.core._first.call(null,args__7474);
var args__7476 = cljs.core._rest.call(null,args__7474);
if((argc === 12))
{if(f__7463.cljs$lang$arity$12)
{return f__7463.cljs$lang$arity$12(a__7453,b__7455,c__7457,d__7459,e__7461,f__7463,g__7465,h__7467,i__7469,j__7471,k__7473,l__7475);
} else
{return f__7463.call(null,a__7453,b__7455,c__7457,d__7459,e__7461,f__7463,g__7465,h__7467,i__7469,j__7471,k__7473,l__7475);
}
} else
{var m__7477 = cljs.core._first.call(null,args__7476);
var args__7478 = cljs.core._rest.call(null,args__7476);
if((argc === 13))
{if(f__7463.cljs$lang$arity$13)
{return f__7463.cljs$lang$arity$13(a__7453,b__7455,c__7457,d__7459,e__7461,f__7463,g__7465,h__7467,i__7469,j__7471,k__7473,l__7475,m__7477);
} else
{return f__7463.call(null,a__7453,b__7455,c__7457,d__7459,e__7461,f__7463,g__7465,h__7467,i__7469,j__7471,k__7473,l__7475,m__7477);
}
} else
{var n__7479 = cljs.core._first.call(null,args__7478);
var args__7480 = cljs.core._rest.call(null,args__7478);
if((argc === 14))
{if(f__7463.cljs$lang$arity$14)
{return f__7463.cljs$lang$arity$14(a__7453,b__7455,c__7457,d__7459,e__7461,f__7463,g__7465,h__7467,i__7469,j__7471,k__7473,l__7475,m__7477,n__7479);
} else
{return f__7463.call(null,a__7453,b__7455,c__7457,d__7459,e__7461,f__7463,g__7465,h__7467,i__7469,j__7471,k__7473,l__7475,m__7477,n__7479);
}
} else
{var o__7481 = cljs.core._first.call(null,args__7480);
var args__7482 = cljs.core._rest.call(null,args__7480);
if((argc === 15))
{if(f__7463.cljs$lang$arity$15)
{return f__7463.cljs$lang$arity$15(a__7453,b__7455,c__7457,d__7459,e__7461,f__7463,g__7465,h__7467,i__7469,j__7471,k__7473,l__7475,m__7477,n__7479,o__7481);
} else
{return f__7463.call(null,a__7453,b__7455,c__7457,d__7459,e__7461,f__7463,g__7465,h__7467,i__7469,j__7471,k__7473,l__7475,m__7477,n__7479,o__7481);
}
} else
{var p__7483 = cljs.core._first.call(null,args__7482);
var args__7484 = cljs.core._rest.call(null,args__7482);
if((argc === 16))
{if(f__7463.cljs$lang$arity$16)
{return f__7463.cljs$lang$arity$16(a__7453,b__7455,c__7457,d__7459,e__7461,f__7463,g__7465,h__7467,i__7469,j__7471,k__7473,l__7475,m__7477,n__7479,o__7481,p__7483);
} else
{return f__7463.call(null,a__7453,b__7455,c__7457,d__7459,e__7461,f__7463,g__7465,h__7467,i__7469,j__7471,k__7473,l__7475,m__7477,n__7479,o__7481,p__7483);
}
} else
{var q__7485 = cljs.core._first.call(null,args__7484);
var args__7486 = cljs.core._rest.call(null,args__7484);
if((argc === 17))
{if(f__7463.cljs$lang$arity$17)
{return f__7463.cljs$lang$arity$17(a__7453,b__7455,c__7457,d__7459,e__7461,f__7463,g__7465,h__7467,i__7469,j__7471,k__7473,l__7475,m__7477,n__7479,o__7481,p__7483,q__7485);
} else
{return f__7463.call(null,a__7453,b__7455,c__7457,d__7459,e__7461,f__7463,g__7465,h__7467,i__7469,j__7471,k__7473,l__7475,m__7477,n__7479,o__7481,p__7483,q__7485);
}
} else
{var r__7487 = cljs.core._first.call(null,args__7486);
var args__7488 = cljs.core._rest.call(null,args__7486);
if((argc === 18))
{if(f__7463.cljs$lang$arity$18)
{return f__7463.cljs$lang$arity$18(a__7453,b__7455,c__7457,d__7459,e__7461,f__7463,g__7465,h__7467,i__7469,j__7471,k__7473,l__7475,m__7477,n__7479,o__7481,p__7483,q__7485,r__7487);
} else
{return f__7463.call(null,a__7453,b__7455,c__7457,d__7459,e__7461,f__7463,g__7465,h__7467,i__7469,j__7471,k__7473,l__7475,m__7477,n__7479,o__7481,p__7483,q__7485,r__7487);
}
} else
{var s__7489 = cljs.core._first.call(null,args__7488);
var args__7490 = cljs.core._rest.call(null,args__7488);
if((argc === 19))
{if(f__7463.cljs$lang$arity$19)
{return f__7463.cljs$lang$arity$19(a__7453,b__7455,c__7457,d__7459,e__7461,f__7463,g__7465,h__7467,i__7469,j__7471,k__7473,l__7475,m__7477,n__7479,o__7481,p__7483,q__7485,r__7487,s__7489);
} else
{return f__7463.call(null,a__7453,b__7455,c__7457,d__7459,e__7461,f__7463,g__7465,h__7467,i__7469,j__7471,k__7473,l__7475,m__7477,n__7479,o__7481,p__7483,q__7485,r__7487,s__7489);
}
} else
{var t__7491 = cljs.core._first.call(null,args__7490);
var args__7492 = cljs.core._rest.call(null,args__7490);
if((argc === 20))
{if(f__7463.cljs$lang$arity$20)
{return f__7463.cljs$lang$arity$20(a__7453,b__7455,c__7457,d__7459,e__7461,f__7463,g__7465,h__7467,i__7469,j__7471,k__7473,l__7475,m__7477,n__7479,o__7481,p__7483,q__7485,r__7487,s__7489,t__7491);
} else
{return f__7463.call(null,a__7453,b__7455,c__7457,d__7459,e__7461,f__7463,g__7465,h__7467,i__7469,j__7471,k__7473,l__7475,m__7477,n__7479,o__7481,p__7483,q__7485,r__7487,s__7489,t__7491);
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
var fixed_arity__7507 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7508 = cljs.core.bounded_count.call(null,args,(fixed_arity__7507 + 1));
if((bc__7508 <= fixed_arity__7507))
{return cljs.core.apply_to.call(null,f,bc__7508,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__7509 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__7510 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7511 = cljs.core.bounded_count.call(null,arglist__7509,(fixed_arity__7510 + 1));
if((bc__7511 <= fixed_arity__7510))
{return cljs.core.apply_to.call(null,f,bc__7511,arglist__7509);
} else
{return f.cljs$lang$applyTo(arglist__7509);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7509));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__7512 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__7513 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7514 = cljs.core.bounded_count.call(null,arglist__7512,(fixed_arity__7513 + 1));
if((bc__7514 <= fixed_arity__7513))
{return cljs.core.apply_to.call(null,f,bc__7514,arglist__7512);
} else
{return f.cljs$lang$applyTo(arglist__7512);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7512));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__7515 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__7516 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7517 = cljs.core.bounded_count.call(null,arglist__7515,(fixed_arity__7516 + 1));
if((bc__7517 <= fixed_arity__7516))
{return cljs.core.apply_to.call(null,f,bc__7517,arglist__7515);
} else
{return f.cljs$lang$applyTo(arglist__7515);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7515));
}
});
var apply__6 = (function() { 
var G__7521__delegate = function (f,a,b,c,d,args){
var arglist__7518 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__7519 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7520 = cljs.core.bounded_count.call(null,arglist__7518,(fixed_arity__7519 + 1));
if((bc__7520 <= fixed_arity__7519))
{return cljs.core.apply_to.call(null,f,bc__7520,arglist__7518);
} else
{return f.cljs$lang$applyTo(arglist__7518);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7518));
}
};
var G__7521 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__7521__delegate.call(this, f, a, b, c, d, args);
};
G__7521.cljs$lang$maxFixedArity = 5;
G__7521.cljs$lang$applyTo = (function (arglist__7522){
var f = cljs.core.first(arglist__7522);
var a = cljs.core.first(cljs.core.next(arglist__7522));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7522)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7522))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7522)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7522)))));
return G__7521__delegate(f, a, b, c, d, args);
});
G__7521.cljs$lang$arity$variadic = G__7521__delegate;
return G__7521;
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
vary_meta.cljs$lang$applyTo = (function (arglist__7523){
var obj = cljs.core.first(arglist__7523);
var f = cljs.core.first(cljs.core.next(arglist__7523));
var args = cljs.core.rest(cljs.core.next(arglist__7523));
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
var G__7524__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__7524 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7524__delegate.call(this, x, y, more);
};
G__7524.cljs$lang$maxFixedArity = 2;
G__7524.cljs$lang$applyTo = (function (arglist__7525){
var x = cljs.core.first(arglist__7525);
var y = cljs.core.first(cljs.core.next(arglist__7525));
var more = cljs.core.rest(cljs.core.next(arglist__7525));
return G__7524__delegate(x, y, more);
});
G__7524.cljs$lang$arity$variadic = G__7524__delegate;
return G__7524;
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
var G__7526 = pred;
var G__7527 = cljs.core.next.call(null,coll);
pred = G__7526;
coll = G__7527;
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
{var or__3824__auto____7529 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____7529))
{return or__3824__auto____7529;
} else
{{
var G__7530 = pred;
var G__7531 = cljs.core.next.call(null,coll);
pred = G__7530;
coll = G__7531;
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
var G__7532 = null;
var G__7532__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__7532__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__7532__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__7532__3 = (function() { 
var G__7533__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__7533 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7533__delegate.call(this, x, y, zs);
};
G__7533.cljs$lang$maxFixedArity = 2;
G__7533.cljs$lang$applyTo = (function (arglist__7534){
var x = cljs.core.first(arglist__7534);
var y = cljs.core.first(cljs.core.next(arglist__7534));
var zs = cljs.core.rest(cljs.core.next(arglist__7534));
return G__7533__delegate(x, y, zs);
});
G__7533.cljs$lang$arity$variadic = G__7533__delegate;
return G__7533;
})()
;
G__7532 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__7532__0.call(this);
case 1:
return G__7532__1.call(this,x);
case 2:
return G__7532__2.call(this,x,y);
default:
return G__7532__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__7532.cljs$lang$maxFixedArity = 2;
G__7532.cljs$lang$applyTo = G__7532__3.cljs$lang$applyTo;
return G__7532;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__7535__delegate = function (args){
return x;
};
var G__7535 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7535__delegate.call(this, args);
};
G__7535.cljs$lang$maxFixedArity = 0;
G__7535.cljs$lang$applyTo = (function (arglist__7536){
var args = cljs.core.seq(arglist__7536);;
return G__7535__delegate(args);
});
G__7535.cljs$lang$arity$variadic = G__7535__delegate;
return G__7535;
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
var G__7543 = null;
var G__7543__0 = (function (){
return f.call(null,g.call(null));
});
var G__7543__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__7543__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__7543__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__7543__4 = (function() { 
var G__7544__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__7544 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7544__delegate.call(this, x, y, z, args);
};
G__7544.cljs$lang$maxFixedArity = 3;
G__7544.cljs$lang$applyTo = (function (arglist__7545){
var x = cljs.core.first(arglist__7545);
var y = cljs.core.first(cljs.core.next(arglist__7545));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7545)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7545)));
return G__7544__delegate(x, y, z, args);
});
G__7544.cljs$lang$arity$variadic = G__7544__delegate;
return G__7544;
})()
;
G__7543 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7543__0.call(this);
case 1:
return G__7543__1.call(this,x);
case 2:
return G__7543__2.call(this,x,y);
case 3:
return G__7543__3.call(this,x,y,z);
default:
return G__7543__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7543.cljs$lang$maxFixedArity = 3;
G__7543.cljs$lang$applyTo = G__7543__4.cljs$lang$applyTo;
return G__7543;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__7546 = null;
var G__7546__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__7546__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__7546__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__7546__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__7546__4 = (function() { 
var G__7547__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__7547 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7547__delegate.call(this, x, y, z, args);
};
G__7547.cljs$lang$maxFixedArity = 3;
G__7547.cljs$lang$applyTo = (function (arglist__7548){
var x = cljs.core.first(arglist__7548);
var y = cljs.core.first(cljs.core.next(arglist__7548));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7548)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7548)));
return G__7547__delegate(x, y, z, args);
});
G__7547.cljs$lang$arity$variadic = G__7547__delegate;
return G__7547;
})()
;
G__7546 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7546__0.call(this);
case 1:
return G__7546__1.call(this,x);
case 2:
return G__7546__2.call(this,x,y);
case 3:
return G__7546__3.call(this,x,y,z);
default:
return G__7546__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7546.cljs$lang$maxFixedArity = 3;
G__7546.cljs$lang$applyTo = G__7546__4.cljs$lang$applyTo;
return G__7546;
})()
});
var comp__4 = (function() { 
var G__7549__delegate = function (f1,f2,f3,fs){
var fs__7540 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__7550__delegate = function (args){
var ret__7541 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__7540),args);
var fs__7542 = cljs.core.next.call(null,fs__7540);
while(true){
if(fs__7542)
{{
var G__7551 = cljs.core.first.call(null,fs__7542).call(null,ret__7541);
var G__7552 = cljs.core.next.call(null,fs__7542);
ret__7541 = G__7551;
fs__7542 = G__7552;
continue;
}
} else
{return ret__7541;
}
break;
}
};
var G__7550 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7550__delegate.call(this, args);
};
G__7550.cljs$lang$maxFixedArity = 0;
G__7550.cljs$lang$applyTo = (function (arglist__7553){
var args = cljs.core.seq(arglist__7553);;
return G__7550__delegate(args);
});
G__7550.cljs$lang$arity$variadic = G__7550__delegate;
return G__7550;
})()
;
};
var G__7549 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7549__delegate.call(this, f1, f2, f3, fs);
};
G__7549.cljs$lang$maxFixedArity = 3;
G__7549.cljs$lang$applyTo = (function (arglist__7554){
var f1 = cljs.core.first(arglist__7554);
var f2 = cljs.core.first(cljs.core.next(arglist__7554));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7554)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7554)));
return G__7549__delegate(f1, f2, f3, fs);
});
G__7549.cljs$lang$arity$variadic = G__7549__delegate;
return G__7549;
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
var G__7555__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__7555 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7555__delegate.call(this, args);
};
G__7555.cljs$lang$maxFixedArity = 0;
G__7555.cljs$lang$applyTo = (function (arglist__7556){
var args = cljs.core.seq(arglist__7556);;
return G__7555__delegate(args);
});
G__7555.cljs$lang$arity$variadic = G__7555__delegate;
return G__7555;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__7557__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__7557 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7557__delegate.call(this, args);
};
G__7557.cljs$lang$maxFixedArity = 0;
G__7557.cljs$lang$applyTo = (function (arglist__7558){
var args = cljs.core.seq(arglist__7558);;
return G__7557__delegate(args);
});
G__7557.cljs$lang$arity$variadic = G__7557__delegate;
return G__7557;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__7559__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__7559 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7559__delegate.call(this, args);
};
G__7559.cljs$lang$maxFixedArity = 0;
G__7559.cljs$lang$applyTo = (function (arglist__7560){
var args = cljs.core.seq(arglist__7560);;
return G__7559__delegate(args);
});
G__7559.cljs$lang$arity$variadic = G__7559__delegate;
return G__7559;
})()
;
});
var partial__5 = (function() { 
var G__7561__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__7562__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__7562 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7562__delegate.call(this, args);
};
G__7562.cljs$lang$maxFixedArity = 0;
G__7562.cljs$lang$applyTo = (function (arglist__7563){
var args = cljs.core.seq(arglist__7563);;
return G__7562__delegate(args);
});
G__7562.cljs$lang$arity$variadic = G__7562__delegate;
return G__7562;
})()
;
};
var G__7561 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7561__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__7561.cljs$lang$maxFixedArity = 4;
G__7561.cljs$lang$applyTo = (function (arglist__7564){
var f = cljs.core.first(arglist__7564);
var arg1 = cljs.core.first(cljs.core.next(arglist__7564));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7564)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7564))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7564))));
return G__7561__delegate(f, arg1, arg2, arg3, more);
});
G__7561.cljs$lang$arity$variadic = G__7561__delegate;
return G__7561;
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
var G__7565 = null;
var G__7565__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__7565__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__7565__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__7565__4 = (function() { 
var G__7566__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__7566 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7566__delegate.call(this, a, b, c, ds);
};
G__7566.cljs$lang$maxFixedArity = 3;
G__7566.cljs$lang$applyTo = (function (arglist__7567){
var a = cljs.core.first(arglist__7567);
var b = cljs.core.first(cljs.core.next(arglist__7567));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7567)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7567)));
return G__7566__delegate(a, b, c, ds);
});
G__7566.cljs$lang$arity$variadic = G__7566__delegate;
return G__7566;
})()
;
G__7565 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__7565__1.call(this,a);
case 2:
return G__7565__2.call(this,a,b);
case 3:
return G__7565__3.call(this,a,b,c);
default:
return G__7565__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7565.cljs$lang$maxFixedArity = 3;
G__7565.cljs$lang$applyTo = G__7565__4.cljs$lang$applyTo;
return G__7565;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__7568 = null;
var G__7568__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7568__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__7568__4 = (function() { 
var G__7569__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__7569 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7569__delegate.call(this, a, b, c, ds);
};
G__7569.cljs$lang$maxFixedArity = 3;
G__7569.cljs$lang$applyTo = (function (arglist__7570){
var a = cljs.core.first(arglist__7570);
var b = cljs.core.first(cljs.core.next(arglist__7570));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7570)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7570)));
return G__7569__delegate(a, b, c, ds);
});
G__7569.cljs$lang$arity$variadic = G__7569__delegate;
return G__7569;
})()
;
G__7568 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7568__2.call(this,a,b);
case 3:
return G__7568__3.call(this,a,b,c);
default:
return G__7568__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7568.cljs$lang$maxFixedArity = 3;
G__7568.cljs$lang$applyTo = G__7568__4.cljs$lang$applyTo;
return G__7568;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__7571 = null;
var G__7571__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7571__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__7571__4 = (function() { 
var G__7572__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__7572 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7572__delegate.call(this, a, b, c, ds);
};
G__7572.cljs$lang$maxFixedArity = 3;
G__7572.cljs$lang$applyTo = (function (arglist__7573){
var a = cljs.core.first(arglist__7573);
var b = cljs.core.first(cljs.core.next(arglist__7573));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7573)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7573)));
return G__7572__delegate(a, b, c, ds);
});
G__7572.cljs$lang$arity$variadic = G__7572__delegate;
return G__7572;
})()
;
G__7571 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7571__2.call(this,a,b);
case 3:
return G__7571__3.call(this,a,b,c);
default:
return G__7571__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7571.cljs$lang$maxFixedArity = 3;
G__7571.cljs$lang$applyTo = G__7571__4.cljs$lang$applyTo;
return G__7571;
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
var mapi__7589 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7597 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7597)
{var s__7598 = temp__3974__auto____7597;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7598))
{var c__7599 = cljs.core.chunk_first.call(null,s__7598);
var size__7600 = cljs.core.count.call(null,c__7599);
var b__7601 = cljs.core.chunk_buffer.call(null,size__7600);
var n__2529__auto____7602 = size__7600;
var i__7603 = 0;
while(true){
if((i__7603 < n__2529__auto____7602))
{cljs.core.chunk_append.call(null,b__7601,f.call(null,(idx + i__7603),cljs.core._nth.call(null,c__7599,i__7603)));
{
var G__7604 = (i__7603 + 1);
i__7603 = G__7604;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7601),mapi.call(null,(idx + size__7600),cljs.core.chunk_rest.call(null,s__7598)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__7598)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__7598)));
}
} else
{return null;
}
}),null));
});
return mapi__7589.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7614 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7614)
{var s__7615 = temp__3974__auto____7614;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7615))
{var c__7616 = cljs.core.chunk_first.call(null,s__7615);
var size__7617 = cljs.core.count.call(null,c__7616);
var b__7618 = cljs.core.chunk_buffer.call(null,size__7617);
var n__2529__auto____7619 = size__7617;
var i__7620 = 0;
while(true){
if((i__7620 < n__2529__auto____7619))
{var x__7621 = f.call(null,cljs.core._nth.call(null,c__7616,i__7620));
if((x__7621 == null))
{} else
{cljs.core.chunk_append.call(null,b__7618,x__7621);
}
{
var G__7623 = (i__7620 + 1);
i__7620 = G__7623;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7618),keep.call(null,f,cljs.core.chunk_rest.call(null,s__7615)));
} else
{var x__7622 = f.call(null,cljs.core.first.call(null,s__7615));
if((x__7622 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__7615));
} else
{return cljs.core.cons.call(null,x__7622,keep.call(null,f,cljs.core.rest.call(null,s__7615)));
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
var keepi__7649 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7659 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7659)
{var s__7660 = temp__3974__auto____7659;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7660))
{var c__7661 = cljs.core.chunk_first.call(null,s__7660);
var size__7662 = cljs.core.count.call(null,c__7661);
var b__7663 = cljs.core.chunk_buffer.call(null,size__7662);
var n__2529__auto____7664 = size__7662;
var i__7665 = 0;
while(true){
if((i__7665 < n__2529__auto____7664))
{var x__7666 = f.call(null,(idx + i__7665),cljs.core._nth.call(null,c__7661,i__7665));
if((x__7666 == null))
{} else
{cljs.core.chunk_append.call(null,b__7663,x__7666);
}
{
var G__7668 = (i__7665 + 1);
i__7665 = G__7668;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7663),keepi.call(null,(idx + size__7662),cljs.core.chunk_rest.call(null,s__7660)));
} else
{var x__7667 = f.call(null,idx,cljs.core.first.call(null,s__7660));
if((x__7667 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__7660));
} else
{return cljs.core.cons.call(null,x__7667,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__7660)));
}
}
} else
{return null;
}
}),null));
});
return keepi__7649.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7754 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____7754))
{return p.call(null,y);
} else
{return and__3822__auto____7754;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7755 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____7755))
{var and__3822__auto____7756 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____7756))
{return p.call(null,z);
} else
{return and__3822__auto____7756;
}
} else
{return and__3822__auto____7755;
}
})());
});
var ep1__4 = (function() { 
var G__7825__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7757 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7757))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____7757;
}
})());
};
var G__7825 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7825__delegate.call(this, x, y, z, args);
};
G__7825.cljs$lang$maxFixedArity = 3;
G__7825.cljs$lang$applyTo = (function (arglist__7826){
var x = cljs.core.first(arglist__7826);
var y = cljs.core.first(cljs.core.next(arglist__7826));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7826)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7826)));
return G__7825__delegate(x, y, z, args);
});
G__7825.cljs$lang$arity$variadic = G__7825__delegate;
return G__7825;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7769 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7769))
{return p2.call(null,x);
} else
{return and__3822__auto____7769;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7770 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7770))
{var and__3822__auto____7771 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7771))
{var and__3822__auto____7772 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7772))
{return p2.call(null,y);
} else
{return and__3822__auto____7772;
}
} else
{return and__3822__auto____7771;
}
} else
{return and__3822__auto____7770;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7773 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7773))
{var and__3822__auto____7774 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7774))
{var and__3822__auto____7775 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____7775))
{var and__3822__auto____7776 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7776))
{var and__3822__auto____7777 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____7777))
{return p2.call(null,z);
} else
{return and__3822__auto____7777;
}
} else
{return and__3822__auto____7776;
}
} else
{return and__3822__auto____7775;
}
} else
{return and__3822__auto____7774;
}
} else
{return and__3822__auto____7773;
}
})());
});
var ep2__4 = (function() { 
var G__7827__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7778 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7778))
{return cljs.core.every_QMARK_.call(null,(function (p1__7624_SHARP_){
var and__3822__auto____7779 = p1.call(null,p1__7624_SHARP_);
if(cljs.core.truth_(and__3822__auto____7779))
{return p2.call(null,p1__7624_SHARP_);
} else
{return and__3822__auto____7779;
}
}),args);
} else
{return and__3822__auto____7778;
}
})());
};
var G__7827 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7827__delegate.call(this, x, y, z, args);
};
G__7827.cljs$lang$maxFixedArity = 3;
G__7827.cljs$lang$applyTo = (function (arglist__7828){
var x = cljs.core.first(arglist__7828);
var y = cljs.core.first(cljs.core.next(arglist__7828));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7828)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7828)));
return G__7827__delegate(x, y, z, args);
});
G__7827.cljs$lang$arity$variadic = G__7827__delegate;
return G__7827;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7798 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7798))
{var and__3822__auto____7799 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7799))
{return p3.call(null,x);
} else
{return and__3822__auto____7799;
}
} else
{return and__3822__auto____7798;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7800 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7800))
{var and__3822__auto____7801 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7801))
{var and__3822__auto____7802 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____7802))
{var and__3822__auto____7803 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7803))
{var and__3822__auto____7804 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____7804))
{return p3.call(null,y);
} else
{return and__3822__auto____7804;
}
} else
{return and__3822__auto____7803;
}
} else
{return and__3822__auto____7802;
}
} else
{return and__3822__auto____7801;
}
} else
{return and__3822__auto____7800;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7805 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7805))
{var and__3822__auto____7806 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7806))
{var and__3822__auto____7807 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____7807))
{var and__3822__auto____7808 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7808))
{var and__3822__auto____7809 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____7809))
{var and__3822__auto____7810 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____7810))
{var and__3822__auto____7811 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____7811))
{var and__3822__auto____7812 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____7812))
{return p3.call(null,z);
} else
{return and__3822__auto____7812;
}
} else
{return and__3822__auto____7811;
}
} else
{return and__3822__auto____7810;
}
} else
{return and__3822__auto____7809;
}
} else
{return and__3822__auto____7808;
}
} else
{return and__3822__auto____7807;
}
} else
{return and__3822__auto____7806;
}
} else
{return and__3822__auto____7805;
}
})());
});
var ep3__4 = (function() { 
var G__7829__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7813 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7813))
{return cljs.core.every_QMARK_.call(null,(function (p1__7625_SHARP_){
var and__3822__auto____7814 = p1.call(null,p1__7625_SHARP_);
if(cljs.core.truth_(and__3822__auto____7814))
{var and__3822__auto____7815 = p2.call(null,p1__7625_SHARP_);
if(cljs.core.truth_(and__3822__auto____7815))
{return p3.call(null,p1__7625_SHARP_);
} else
{return and__3822__auto____7815;
}
} else
{return and__3822__auto____7814;
}
}),args);
} else
{return and__3822__auto____7813;
}
})());
};
var G__7829 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7829__delegate.call(this, x, y, z, args);
};
G__7829.cljs$lang$maxFixedArity = 3;
G__7829.cljs$lang$applyTo = (function (arglist__7830){
var x = cljs.core.first(arglist__7830);
var y = cljs.core.first(cljs.core.next(arglist__7830));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7830)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7830)));
return G__7829__delegate(x, y, z, args);
});
G__7829.cljs$lang$arity$variadic = G__7829__delegate;
return G__7829;
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
var G__7831__delegate = function (p1,p2,p3,ps){
var ps__7816 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__7626_SHARP_){
return p1__7626_SHARP_.call(null,x);
}),ps__7816);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__7627_SHARP_){
var and__3822__auto____7821 = p1__7627_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____7821))
{return p1__7627_SHARP_.call(null,y);
} else
{return and__3822__auto____7821;
}
}),ps__7816);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__7628_SHARP_){
var and__3822__auto____7822 = p1__7628_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____7822))
{var and__3822__auto____7823 = p1__7628_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____7823))
{return p1__7628_SHARP_.call(null,z);
} else
{return and__3822__auto____7823;
}
} else
{return and__3822__auto____7822;
}
}),ps__7816);
});
var epn__4 = (function() { 
var G__7832__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7824 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7824))
{return cljs.core.every_QMARK_.call(null,(function (p1__7629_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__7629_SHARP_,args);
}),ps__7816);
} else
{return and__3822__auto____7824;
}
})());
};
var G__7832 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7832__delegate.call(this, x, y, z, args);
};
G__7832.cljs$lang$maxFixedArity = 3;
G__7832.cljs$lang$applyTo = (function (arglist__7833){
var x = cljs.core.first(arglist__7833);
var y = cljs.core.first(cljs.core.next(arglist__7833));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7833)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7833)));
return G__7832__delegate(x, y, z, args);
});
G__7832.cljs$lang$arity$variadic = G__7832__delegate;
return G__7832;
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
var G__7831 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7831__delegate.call(this, p1, p2, p3, ps);
};
G__7831.cljs$lang$maxFixedArity = 3;
G__7831.cljs$lang$applyTo = (function (arglist__7834){
var p1 = cljs.core.first(arglist__7834);
var p2 = cljs.core.first(cljs.core.next(arglist__7834));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7834)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7834)));
return G__7831__delegate(p1, p2, p3, ps);
});
G__7831.cljs$lang$arity$variadic = G__7831__delegate;
return G__7831;
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
var or__3824__auto____7915 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____7915))
{return or__3824__auto____7915;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____7916 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____7916))
{return or__3824__auto____7916;
} else
{var or__3824__auto____7917 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____7917))
{return or__3824__auto____7917;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__7986__delegate = function (x,y,z,args){
var or__3824__auto____7918 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____7918))
{return or__3824__auto____7918;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__7986 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7986__delegate.call(this, x, y, z, args);
};
G__7986.cljs$lang$maxFixedArity = 3;
G__7986.cljs$lang$applyTo = (function (arglist__7987){
var x = cljs.core.first(arglist__7987);
var y = cljs.core.first(cljs.core.next(arglist__7987));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7987)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7987)));
return G__7986__delegate(x, y, z, args);
});
G__7986.cljs$lang$arity$variadic = G__7986__delegate;
return G__7986;
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
var or__3824__auto____7930 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7930))
{return or__3824__auto____7930;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____7931 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7931))
{return or__3824__auto____7931;
} else
{var or__3824__auto____7932 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____7932))
{return or__3824__auto____7932;
} else
{var or__3824__auto____7933 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7933))
{return or__3824__auto____7933;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____7934 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7934))
{return or__3824__auto____7934;
} else
{var or__3824__auto____7935 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____7935))
{return or__3824__auto____7935;
} else
{var or__3824__auto____7936 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____7936))
{return or__3824__auto____7936;
} else
{var or__3824__auto____7937 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7937))
{return or__3824__auto____7937;
} else
{var or__3824__auto____7938 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____7938))
{return or__3824__auto____7938;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__7988__delegate = function (x,y,z,args){
var or__3824__auto____7939 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____7939))
{return or__3824__auto____7939;
} else
{return cljs.core.some.call(null,(function (p1__7669_SHARP_){
var or__3824__auto____7940 = p1.call(null,p1__7669_SHARP_);
if(cljs.core.truth_(or__3824__auto____7940))
{return or__3824__auto____7940;
} else
{return p2.call(null,p1__7669_SHARP_);
}
}),args);
}
};
var G__7988 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7988__delegate.call(this, x, y, z, args);
};
G__7988.cljs$lang$maxFixedArity = 3;
G__7988.cljs$lang$applyTo = (function (arglist__7989){
var x = cljs.core.first(arglist__7989);
var y = cljs.core.first(cljs.core.next(arglist__7989));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7989)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7989)));
return G__7988__delegate(x, y, z, args);
});
G__7988.cljs$lang$arity$variadic = G__7988__delegate;
return G__7988;
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
var or__3824__auto____7959 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7959))
{return or__3824__auto____7959;
} else
{var or__3824__auto____7960 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7960))
{return or__3824__auto____7960;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____7961 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7961))
{return or__3824__auto____7961;
} else
{var or__3824__auto____7962 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7962))
{return or__3824__auto____7962;
} else
{var or__3824__auto____7963 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____7963))
{return or__3824__auto____7963;
} else
{var or__3824__auto____7964 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____7964))
{return or__3824__auto____7964;
} else
{var or__3824__auto____7965 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____7965))
{return or__3824__auto____7965;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____7966 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7966))
{return or__3824__auto____7966;
} else
{var or__3824__auto____7967 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7967))
{return or__3824__auto____7967;
} else
{var or__3824__auto____7968 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____7968))
{return or__3824__auto____7968;
} else
{var or__3824__auto____7969 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____7969))
{return or__3824__auto____7969;
} else
{var or__3824__auto____7970 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____7970))
{return or__3824__auto____7970;
} else
{var or__3824__auto____7971 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____7971))
{return or__3824__auto____7971;
} else
{var or__3824__auto____7972 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____7972))
{return or__3824__auto____7972;
} else
{var or__3824__auto____7973 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____7973))
{return or__3824__auto____7973;
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
var G__7990__delegate = function (x,y,z,args){
var or__3824__auto____7974 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____7974))
{return or__3824__auto____7974;
} else
{return cljs.core.some.call(null,(function (p1__7670_SHARP_){
var or__3824__auto____7975 = p1.call(null,p1__7670_SHARP_);
if(cljs.core.truth_(or__3824__auto____7975))
{return or__3824__auto____7975;
} else
{var or__3824__auto____7976 = p2.call(null,p1__7670_SHARP_);
if(cljs.core.truth_(or__3824__auto____7976))
{return or__3824__auto____7976;
} else
{return p3.call(null,p1__7670_SHARP_);
}
}
}),args);
}
};
var G__7990 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7990__delegate.call(this, x, y, z, args);
};
G__7990.cljs$lang$maxFixedArity = 3;
G__7990.cljs$lang$applyTo = (function (arglist__7991){
var x = cljs.core.first(arglist__7991);
var y = cljs.core.first(cljs.core.next(arglist__7991));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7991)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7991)));
return G__7990__delegate(x, y, z, args);
});
G__7990.cljs$lang$arity$variadic = G__7990__delegate;
return G__7990;
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
var G__7992__delegate = function (p1,p2,p3,ps){
var ps__7977 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__7671_SHARP_){
return p1__7671_SHARP_.call(null,x);
}),ps__7977);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__7672_SHARP_){
var or__3824__auto____7982 = p1__7672_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____7982))
{return or__3824__auto____7982;
} else
{return p1__7672_SHARP_.call(null,y);
}
}),ps__7977);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__7673_SHARP_){
var or__3824__auto____7983 = p1__7673_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____7983))
{return or__3824__auto____7983;
} else
{var or__3824__auto____7984 = p1__7673_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____7984))
{return or__3824__auto____7984;
} else
{return p1__7673_SHARP_.call(null,z);
}
}
}),ps__7977);
});
var spn__4 = (function() { 
var G__7993__delegate = function (x,y,z,args){
var or__3824__auto____7985 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____7985))
{return or__3824__auto____7985;
} else
{return cljs.core.some.call(null,(function (p1__7674_SHARP_){
return cljs.core.some.call(null,p1__7674_SHARP_,args);
}),ps__7977);
}
};
var G__7993 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7993__delegate.call(this, x, y, z, args);
};
G__7993.cljs$lang$maxFixedArity = 3;
G__7993.cljs$lang$applyTo = (function (arglist__7994){
var x = cljs.core.first(arglist__7994);
var y = cljs.core.first(cljs.core.next(arglist__7994));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7994)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7994)));
return G__7993__delegate(x, y, z, args);
});
G__7993.cljs$lang$arity$variadic = G__7993__delegate;
return G__7993;
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
var G__7992 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7992__delegate.call(this, p1, p2, p3, ps);
};
G__7992.cljs$lang$maxFixedArity = 3;
G__7992.cljs$lang$applyTo = (function (arglist__7995){
var p1 = cljs.core.first(arglist__7995);
var p2 = cljs.core.first(cljs.core.next(arglist__7995));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7995)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7995)));
return G__7992__delegate(p1, p2, p3, ps);
});
G__7992.cljs$lang$arity$variadic = G__7992__delegate;
return G__7992;
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
var temp__3974__auto____8014 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8014)
{var s__8015 = temp__3974__auto____8014;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8015))
{var c__8016 = cljs.core.chunk_first.call(null,s__8015);
var size__8017 = cljs.core.count.call(null,c__8016);
var b__8018 = cljs.core.chunk_buffer.call(null,size__8017);
var n__2529__auto____8019 = size__8017;
var i__8020 = 0;
while(true){
if((i__8020 < n__2529__auto____8019))
{cljs.core.chunk_append.call(null,b__8018,f.call(null,cljs.core._nth.call(null,c__8016,i__8020)));
{
var G__8032 = (i__8020 + 1);
i__8020 = G__8032;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8018),map.call(null,f,cljs.core.chunk_rest.call(null,s__8015)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__8015)),map.call(null,f,cljs.core.rest.call(null,s__8015)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8021 = cljs.core.seq.call(null,c1);
var s2__8022 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____8023 = s1__8021;
if(and__3822__auto____8023)
{return s2__8022;
} else
{return and__3822__auto____8023;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8021),cljs.core.first.call(null,s2__8022)),map.call(null,f,cljs.core.rest.call(null,s1__8021),cljs.core.rest.call(null,s2__8022)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8024 = cljs.core.seq.call(null,c1);
var s2__8025 = cljs.core.seq.call(null,c2);
var s3__8026 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____8027 = s1__8024;
if(and__3822__auto____8027)
{var and__3822__auto____8028 = s2__8025;
if(and__3822__auto____8028)
{return s3__8026;
} else
{return and__3822__auto____8028;
}
} else
{return and__3822__auto____8027;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8024),cljs.core.first.call(null,s2__8025),cljs.core.first.call(null,s3__8026)),map.call(null,f,cljs.core.rest.call(null,s1__8024),cljs.core.rest.call(null,s2__8025),cljs.core.rest.call(null,s3__8026)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__8033__delegate = function (f,c1,c2,c3,colls){
var step__8031 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8030 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8030))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__8030),step.call(null,map.call(null,cljs.core.rest,ss__8030)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__7835_SHARP_){
return cljs.core.apply.call(null,f,p1__7835_SHARP_);
}),step__8031.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__8033 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8033__delegate.call(this, f, c1, c2, c3, colls);
};
G__8033.cljs$lang$maxFixedArity = 4;
G__8033.cljs$lang$applyTo = (function (arglist__8034){
var f = cljs.core.first(arglist__8034);
var c1 = cljs.core.first(cljs.core.next(arglist__8034));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8034)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8034))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8034))));
return G__8033__delegate(f, c1, c2, c3, colls);
});
G__8033.cljs$lang$arity$variadic = G__8033__delegate;
return G__8033;
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
{var temp__3974__auto____8037 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8037)
{var s__8038 = temp__3974__auto____8037;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__8038),take.call(null,(n - 1),cljs.core.rest.call(null,s__8038)));
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
var step__8044 = (function (n,coll){
while(true){
var s__8042 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____8043 = (n > 0);
if(and__3822__auto____8043)
{return s__8042;
} else
{return and__3822__auto____8043;
}
})()))
{{
var G__8045 = (n - 1);
var G__8046 = cljs.core.rest.call(null,s__8042);
n = G__8045;
coll = G__8046;
continue;
}
} else
{return s__8042;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8044.call(null,n,coll);
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
var s__8049 = cljs.core.seq.call(null,coll);
var lead__8050 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__8050)
{{
var G__8051 = cljs.core.next.call(null,s__8049);
var G__8052 = cljs.core.next.call(null,lead__8050);
s__8049 = G__8051;
lead__8050 = G__8052;
continue;
}
} else
{return s__8049;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__8058 = (function (pred,coll){
while(true){
var s__8056 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____8057 = s__8056;
if(and__3822__auto____8057)
{return pred.call(null,cljs.core.first.call(null,s__8056));
} else
{return and__3822__auto____8057;
}
})()))
{{
var G__8059 = pred;
var G__8060 = cljs.core.rest.call(null,s__8056);
pred = G__8059;
coll = G__8060;
continue;
}
} else
{return s__8056;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8058.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8063 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8063)
{var s__8064 = temp__3974__auto____8063;
return cljs.core.concat.call(null,s__8064,cycle.call(null,s__8064));
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
var s1__8069 = cljs.core.seq.call(null,c1);
var s2__8070 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____8071 = s1__8069;
if(and__3822__auto____8071)
{return s2__8070;
} else
{return and__3822__auto____8071;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__8069),cljs.core.cons.call(null,cljs.core.first.call(null,s2__8070),interleave.call(null,cljs.core.rest.call(null,s1__8069),cljs.core.rest.call(null,s2__8070))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__8073__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8072 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8072))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__8072),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__8072)));
} else
{return null;
}
}),null));
};
var G__8073 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8073__delegate.call(this, c1, c2, colls);
};
G__8073.cljs$lang$maxFixedArity = 2;
G__8073.cljs$lang$applyTo = (function (arglist__8074){
var c1 = cljs.core.first(arglist__8074);
var c2 = cljs.core.first(cljs.core.next(arglist__8074));
var colls = cljs.core.rest(cljs.core.next(arglist__8074));
return G__8073__delegate(c1, c2, colls);
});
G__8073.cljs$lang$arity$variadic = G__8073__delegate;
return G__8073;
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
var cat__8084 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____8082 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____8082)
{var coll__8083 = temp__3971__auto____8082;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__8083),cat.call(null,cljs.core.rest.call(null,coll__8083),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__8084.call(null,null,colls);
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
var G__8085__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__8085 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8085__delegate.call(this, f, coll, colls);
};
G__8085.cljs$lang$maxFixedArity = 2;
G__8085.cljs$lang$applyTo = (function (arglist__8086){
var f = cljs.core.first(arglist__8086);
var coll = cljs.core.first(cljs.core.next(arglist__8086));
var colls = cljs.core.rest(cljs.core.next(arglist__8086));
return G__8085__delegate(f, coll, colls);
});
G__8085.cljs$lang$arity$variadic = G__8085__delegate;
return G__8085;
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
var temp__3974__auto____8096 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8096)
{var s__8097 = temp__3974__auto____8096;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8097))
{var c__8098 = cljs.core.chunk_first.call(null,s__8097);
var size__8099 = cljs.core.count.call(null,c__8098);
var b__8100 = cljs.core.chunk_buffer.call(null,size__8099);
var n__2529__auto____8101 = size__8099;
var i__8102 = 0;
while(true){
if((i__8102 < n__2529__auto____8101))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__8098,i__8102))))
{cljs.core.chunk_append.call(null,b__8100,cljs.core._nth.call(null,c__8098,i__8102));
} else
{}
{
var G__8105 = (i__8102 + 1);
i__8102 = G__8105;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8100),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__8097)));
} else
{var f__8103 = cljs.core.first.call(null,s__8097);
var r__8104 = cljs.core.rest.call(null,s__8097);
if(cljs.core.truth_(pred.call(null,f__8103)))
{return cljs.core.cons.call(null,f__8103,filter.call(null,pred,r__8104));
} else
{return filter.call(null,pred,r__8104);
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
var walk__8108 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__8108.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__8106_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__8106_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__8112__8113 = to;
if(G__8112__8113)
{if((function (){var or__3824__auto____8114 = (G__8112__8113.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____8114)
{return or__3824__auto____8114;
} else
{return G__8112__8113.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__8112__8113.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__8112__8113);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__8112__8113);
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
var G__8115__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__8115 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8115__delegate.call(this, f, c1, c2, c3, colls);
};
G__8115.cljs$lang$maxFixedArity = 4;
G__8115.cljs$lang$applyTo = (function (arglist__8116){
var f = cljs.core.first(arglist__8116);
var c1 = cljs.core.first(cljs.core.next(arglist__8116));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8116)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8116))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8116))));
return G__8115__delegate(f, c1, c2, c3, colls);
});
G__8115.cljs$lang$arity$variadic = G__8115__delegate;
return G__8115;
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
var temp__3974__auto____8123 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8123)
{var s__8124 = temp__3974__auto____8123;
var p__8125 = cljs.core.take.call(null,n,s__8124);
if((n === cljs.core.count.call(null,p__8125)))
{return cljs.core.cons.call(null,p__8125,partition.call(null,n,step,cljs.core.drop.call(null,step,s__8124)));
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
var temp__3974__auto____8126 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8126)
{var s__8127 = temp__3974__auto____8126;
var p__8128 = cljs.core.take.call(null,n,s__8127);
if((n === cljs.core.count.call(null,p__8128)))
{return cljs.core.cons.call(null,p__8128,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__8127)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__8128,pad)));
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
var sentinel__8133 = cljs.core.lookup_sentinel;
var m__8134 = m;
var ks__8135 = cljs.core.seq.call(null,ks);
while(true){
if(ks__8135)
{var m__8136 = cljs.core._lookup.call(null,m__8134,cljs.core.first.call(null,ks__8135),sentinel__8133);
if((sentinel__8133 === m__8136))
{return not_found;
} else
{{
var G__8137 = sentinel__8133;
var G__8138 = m__8136;
var G__8139 = cljs.core.next.call(null,ks__8135);
sentinel__8133 = G__8137;
m__8134 = G__8138;
ks__8135 = G__8139;
continue;
}
}
} else
{return m__8134;
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
cljs.core.assoc_in = (function assoc_in(m,p__8140,v){
var vec__8145__8146 = p__8140;
var k__8147 = cljs.core.nth.call(null,vec__8145__8146,0,null);
var ks__8148 = cljs.core.nthnext.call(null,vec__8145__8146,1);
if(cljs.core.truth_(ks__8148))
{return cljs.core.assoc.call(null,m,k__8147,assoc_in.call(null,cljs.core._lookup.call(null,m,k__8147,null),ks__8148,v));
} else
{return cljs.core.assoc.call(null,m,k__8147,v);
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
var update_in__delegate = function (m,p__8149,f,args){
var vec__8154__8155 = p__8149;
var k__8156 = cljs.core.nth.call(null,vec__8154__8155,0,null);
var ks__8157 = cljs.core.nthnext.call(null,vec__8154__8155,1);
if(cljs.core.truth_(ks__8157))
{return cljs.core.assoc.call(null,m,k__8156,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__8156,null),ks__8157,f,args));
} else
{return cljs.core.assoc.call(null,m,k__8156,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__8156,null),args));
}
};
var update_in = function (m,p__8149,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__8149, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__8158){
var m = cljs.core.first(arglist__8158);
var p__8149 = cljs.core.first(cljs.core.next(arglist__8158));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8158)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8158)));
return update_in__delegate(m, p__8149, f, args);
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
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__2311__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8161 = this;
var h__2194__auto____8162 = this__8161.__hash;
if(!((h__2194__auto____8162 == null)))
{return h__2194__auto____8162;
} else
{var h__2194__auto____8163 = cljs.core.hash_coll.call(null,coll);
this__8161.__hash = h__2194__auto____8163;
return h__2194__auto____8163;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8164 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8165 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8166 = this;
var new_array__8167 = this__8166.array.slice();
(new_array__8167[k] = v);
return (new cljs.core.Vector(this__8166.meta,new_array__8167,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__8198 = null;
var G__8198__2 = (function (this_sym8168,k){
var this__8170 = this;
var this_sym8168__8171 = this;
var coll__8172 = this_sym8168__8171;
return coll__8172.cljs$core$ILookup$_lookup$arity$2(coll__8172,k);
});
var G__8198__3 = (function (this_sym8169,k,not_found){
var this__8170 = this;
var this_sym8169__8173 = this;
var coll__8174 = this_sym8169__8173;
return coll__8174.cljs$core$ILookup$_lookup$arity$3(coll__8174,k,not_found);
});
G__8198 = function(this_sym8169,k,not_found){
switch(arguments.length){
case 2:
return G__8198__2.call(this,this_sym8169,k);
case 3:
return G__8198__3.call(this,this_sym8169,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8198;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym8159,args8160){
var this__8175 = this;
return this_sym8159.call.apply(this_sym8159,[this_sym8159].concat(args8160.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8176 = this;
var new_array__8177 = this__8176.array.slice();
new_array__8177.push(o);
return (new cljs.core.Vector(this__8176.meta,new_array__8177,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__8178 = this;
var this__8179 = this;
return cljs.core.pr_str.call(null,this__8179);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8180 = this;
return cljs.core.ci_reduce.call(null,this__8180.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8181 = this;
return cljs.core.ci_reduce.call(null,this__8181.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8182 = this;
if((this__8182.array.length > 0))
{var vector_seq__8183 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__8182.array.length))
{return cljs.core.cons.call(null,(this__8182.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__8183.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8184 = this;
return this__8184.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8185 = this;
var count__8186 = this__8185.array.length;
if((count__8186 > 0))
{return (this__8185.array[(count__8186 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8187 = this;
if((this__8187.array.length > 0))
{var new_array__8188 = this__8187.array.slice();
new_array__8188.pop();
return (new cljs.core.Vector(this__8187.meta,new_array__8188,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8189 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8190 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8191 = this;
return (new cljs.core.Vector(meta,this__8191.array,this__8191.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8192 = this;
return this__8192.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8193 = this;
if((function (){var and__3822__auto____8194 = (0 <= n);
if(and__3822__auto____8194)
{return (n < this__8193.array.length);
} else
{return and__3822__auto____8194;
}
})())
{return (this__8193.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8195 = this;
if((function (){var and__3822__auto____8196 = (0 <= n);
if(and__3822__auto____8196)
{return (n < this__8195.array.length);
} else
{return and__3822__auto____8196;
}
})())
{return (this__8195.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8197 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8197.meta);
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
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__2312__auto__){
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
var cnt__8200 = pv.cnt;
if((cnt__8200 < 32))
{return 0;
} else
{return (((cnt__8200 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__8206 = level;
var ret__8207 = node;
while(true){
if((ll__8206 === 0))
{return ret__8207;
} else
{var embed__8208 = ret__8207;
var r__8209 = cljs.core.pv_fresh_node.call(null,edit);
var ___8210 = cljs.core.pv_aset.call(null,r__8209,0,embed__8208);
{
var G__8211 = (ll__8206 - 5);
var G__8212 = r__8209;
ll__8206 = G__8211;
ret__8207 = G__8212;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__8218 = cljs.core.pv_clone_node.call(null,parent);
var subidx__8219 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__8218,subidx__8219,tailnode);
return ret__8218;
} else
{var child__8220 = cljs.core.pv_aget.call(null,parent,subidx__8219);
if(!((child__8220 == null)))
{var node_to_insert__8221 = push_tail.call(null,pv,(level - 5),child__8220,tailnode);
cljs.core.pv_aset.call(null,ret__8218,subidx__8219,node_to_insert__8221);
return ret__8218;
} else
{var node_to_insert__8222 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__8218,subidx__8219,node_to_insert__8222);
return ret__8218;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____8226 = (0 <= i);
if(and__3822__auto____8226)
{return (i < pv.cnt);
} else
{return and__3822__auto____8226;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__8227 = pv.root;
var level__8228 = pv.shift;
while(true){
if((level__8228 > 0))
{{
var G__8229 = cljs.core.pv_aget.call(null,node__8227,((i >>> level__8228) & 31));
var G__8230 = (level__8228 - 5);
node__8227 = G__8229;
level__8228 = G__8230;
continue;
}
} else
{return node__8227.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__8233 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__8233,(i & 31),val);
return ret__8233;
} else
{var subidx__8234 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8233,subidx__8234,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8234),i,val));
return ret__8233;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__8240 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8241 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8240));
if((function (){var and__3822__auto____8242 = (new_child__8241 == null);
if(and__3822__auto____8242)
{return (subidx__8240 === 0);
} else
{return and__3822__auto____8242;
}
})())
{return null;
} else
{var ret__8243 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8243,subidx__8240,new_child__8241);
return ret__8243;
}
} else
{if((subidx__8240 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__8244 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8244,subidx__8240,null);
return ret__8244;
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
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__2311__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8247 = this;
return (new cljs.core.TransientVector(this__8247.cnt,this__8247.shift,cljs.core.tv_editable_root.call(null,this__8247.root),cljs.core.tv_editable_tail.call(null,this__8247.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8248 = this;
var h__2194__auto____8249 = this__8248.__hash;
if(!((h__2194__auto____8249 == null)))
{return h__2194__auto____8249;
} else
{var h__2194__auto____8250 = cljs.core.hash_coll.call(null,coll);
this__8248.__hash = h__2194__auto____8250;
return h__2194__auto____8250;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8251 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8252 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8253 = this;
if((function (){var and__3822__auto____8254 = (0 <= k);
if(and__3822__auto____8254)
{return (k < this__8253.cnt);
} else
{return and__3822__auto____8254;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__8255 = this__8253.tail.slice();
(new_tail__8255[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__8253.meta,this__8253.cnt,this__8253.shift,this__8253.root,new_tail__8255,null));
} else
{return (new cljs.core.PersistentVector(this__8253.meta,this__8253.cnt,this__8253.shift,cljs.core.do_assoc.call(null,coll,this__8253.shift,this__8253.root,k,v),this__8253.tail,null));
}
} else
{if((k === this__8253.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__8253.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__8303 = null;
var G__8303__2 = (function (this_sym8256,k){
var this__8258 = this;
var this_sym8256__8259 = this;
var coll__8260 = this_sym8256__8259;
return coll__8260.cljs$core$ILookup$_lookup$arity$2(coll__8260,k);
});
var G__8303__3 = (function (this_sym8257,k,not_found){
var this__8258 = this;
var this_sym8257__8261 = this;
var coll__8262 = this_sym8257__8261;
return coll__8262.cljs$core$ILookup$_lookup$arity$3(coll__8262,k,not_found);
});
G__8303 = function(this_sym8257,k,not_found){
switch(arguments.length){
case 2:
return G__8303__2.call(this,this_sym8257,k);
case 3:
return G__8303__3.call(this,this_sym8257,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8303;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym8245,args8246){
var this__8263 = this;
return this_sym8245.call.apply(this_sym8245,[this_sym8245].concat(args8246.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__8264 = this;
var step_init__8265 = [0,init];
var i__8266 = 0;
while(true){
if((i__8266 < this__8264.cnt))
{var arr__8267 = cljs.core.array_for.call(null,v,i__8266);
var len__8268 = arr__8267.length;
var init__8272 = (function (){var j__8269 = 0;
var init__8270 = (step_init__8265[1]);
while(true){
if((j__8269 < len__8268))
{var init__8271 = f.call(null,init__8270,(j__8269 + i__8266),(arr__8267[j__8269]));
if(cljs.core.reduced_QMARK_.call(null,init__8271))
{return init__8271;
} else
{{
var G__8304 = (j__8269 + 1);
var G__8305 = init__8271;
j__8269 = G__8304;
init__8270 = G__8305;
continue;
}
}
} else
{(step_init__8265[0] = len__8268);
(step_init__8265[1] = init__8270);
return init__8270;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__8272))
{return cljs.core.deref.call(null,init__8272);
} else
{{
var G__8306 = (i__8266 + (step_init__8265[0]));
i__8266 = G__8306;
continue;
}
}
} else
{return (step_init__8265[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8273 = this;
if(((this__8273.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__8274 = this__8273.tail.slice();
new_tail__8274.push(o);
return (new cljs.core.PersistentVector(this__8273.meta,(this__8273.cnt + 1),this__8273.shift,this__8273.root,new_tail__8274,null));
} else
{var root_overflow_QMARK___8275 = ((this__8273.cnt >>> 5) > (1 << this__8273.shift));
var new_shift__8276 = ((root_overflow_QMARK___8275)?(this__8273.shift + 5):this__8273.shift);
var new_root__8278 = ((root_overflow_QMARK___8275)?(function (){var n_r__8277 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__8277,0,this__8273.root);
cljs.core.pv_aset.call(null,n_r__8277,1,cljs.core.new_path.call(null,null,this__8273.shift,(new cljs.core.VectorNode(null,this__8273.tail))));
return n_r__8277;
})():cljs.core.push_tail.call(null,coll,this__8273.shift,this__8273.root,(new cljs.core.VectorNode(null,this__8273.tail))));
return (new cljs.core.PersistentVector(this__8273.meta,(this__8273.cnt + 1),new_shift__8276,new_root__8278,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8279 = this;
if((this__8279.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__8279.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__8280 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__8281 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__8282 = this;
var this__8283 = this;
return cljs.core.pr_str.call(null,this__8283);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8284 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8285 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8286 = this;
if((this__8286.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8287 = this;
return this__8287.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8288 = this;
if((this__8288.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__8288.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8289 = this;
if((this__8289.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8289.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8289.meta);
} else
{if((1 < (this__8289.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__8289.meta,(this__8289.cnt - 1),this__8289.shift,this__8289.root,this__8289.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__8290 = cljs.core.array_for.call(null,coll,(this__8289.cnt - 2));
var nr__8291 = cljs.core.pop_tail.call(null,coll,this__8289.shift,this__8289.root);
var new_root__8292 = (((nr__8291 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__8291);
var cnt_1__8293 = (this__8289.cnt - 1);
if((function (){var and__3822__auto____8294 = (5 < this__8289.shift);
if(and__3822__auto____8294)
{return (cljs.core.pv_aget.call(null,new_root__8292,1) == null);
} else
{return and__3822__auto____8294;
}
})())
{return (new cljs.core.PersistentVector(this__8289.meta,cnt_1__8293,(this__8289.shift - 5),cljs.core.pv_aget.call(null,new_root__8292,0),new_tail__8290,null));
} else
{return (new cljs.core.PersistentVector(this__8289.meta,cnt_1__8293,this__8289.shift,new_root__8292,new_tail__8290,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8295 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8296 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8297 = this;
return (new cljs.core.PersistentVector(meta,this__8297.cnt,this__8297.shift,this__8297.root,this__8297.tail,this__8297.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8298 = this;
return this__8298.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8299 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8300 = this;
if((function (){var and__3822__auto____8301 = (0 <= n);
if(and__3822__auto____8301)
{return (n < this__8300.cnt);
} else
{return and__3822__auto____8301;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8302 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8302.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__8307 = xs.length;
var xs__8308 = (((no_clone === true))?xs:xs.slice());
if((l__8307 < 32))
{return (new cljs.core.PersistentVector(null,l__8307,5,cljs.core.PersistentVector.EMPTY_NODE,xs__8308,null));
} else
{var node__8309 = xs__8308.slice(0,32);
var v__8310 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__8309,null));
var i__8311 = 32;
var out__8312 = cljs.core._as_transient.call(null,v__8310);
while(true){
if((i__8311 < l__8307))
{{
var G__8313 = (i__8311 + 1);
var G__8314 = cljs.core.conj_BANG_.call(null,out__8312,(xs__8308[i__8311]));
i__8311 = G__8313;
out__8312 = G__8314;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8312);
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
vector.cljs$lang$applyTo = (function (arglist__8315){
var args = cljs.core.seq(arglist__8315);;
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
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__2311__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8316 = this;
if(((this__8316.off + 1) < this__8316.node.length))
{var s__8317 = cljs.core.chunked_seq.call(null,this__8316.vec,this__8316.node,this__8316.i,(this__8316.off + 1));
if((s__8317 == null))
{return null;
} else
{return s__8317;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8318 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8319 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8320 = this;
return (this__8320.node[this__8320.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8321 = this;
if(((this__8321.off + 1) < this__8321.node.length))
{var s__8322 = cljs.core.chunked_seq.call(null,this__8321.vec,this__8321.node,this__8321.i,(this__8321.off + 1));
if((s__8322 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8322;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__8323 = this;
var l__8324 = this__8323.node.length;
var s__8325 = ((((this__8323.i + l__8324) < cljs.core._count.call(null,this__8323.vec)))?cljs.core.chunked_seq.call(null,this__8323.vec,(this__8323.i + l__8324),0):null);
if((s__8325 == null))
{return null;
} else
{return s__8325;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8326 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__8327 = this;
return cljs.core.chunked_seq.call(null,this__8327.vec,this__8327.node,this__8327.i,this__8327.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__8328 = this;
return this__8328.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8329 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8329.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__8330 = this;
return cljs.core.array_chunk.call(null,this__8330.node,this__8330.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__8331 = this;
var l__8332 = this__8331.node.length;
var s__8333 = ((((this__8331.i + l__8332) < cljs.core._count.call(null,this__8331.vec)))?cljs.core.chunked_seq.call(null,this__8331.vec,(this__8331.i + l__8332),0):null);
if((s__8333 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8333;
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
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__2311__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8336 = this;
var h__2194__auto____8337 = this__8336.__hash;
if(!((h__2194__auto____8337 == null)))
{return h__2194__auto____8337;
} else
{var h__2194__auto____8338 = cljs.core.hash_coll.call(null,coll);
this__8336.__hash = h__2194__auto____8338;
return h__2194__auto____8338;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8339 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8340 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__8341 = this;
var v_pos__8342 = (this__8341.start + key);
return (new cljs.core.Subvec(this__8341.meta,cljs.core._assoc.call(null,this__8341.v,v_pos__8342,val),this__8341.start,((this__8341.end > (v_pos__8342 + 1)) ? this__8341.end : (v_pos__8342 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__8368 = null;
var G__8368__2 = (function (this_sym8343,k){
var this__8345 = this;
var this_sym8343__8346 = this;
var coll__8347 = this_sym8343__8346;
return coll__8347.cljs$core$ILookup$_lookup$arity$2(coll__8347,k);
});
var G__8368__3 = (function (this_sym8344,k,not_found){
var this__8345 = this;
var this_sym8344__8348 = this;
var coll__8349 = this_sym8344__8348;
return coll__8349.cljs$core$ILookup$_lookup$arity$3(coll__8349,k,not_found);
});
G__8368 = function(this_sym8344,k,not_found){
switch(arguments.length){
case 2:
return G__8368__2.call(this,this_sym8344,k);
case 3:
return G__8368__3.call(this,this_sym8344,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8368;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym8334,args8335){
var this__8350 = this;
return this_sym8334.call.apply(this_sym8334,[this_sym8334].concat(args8335.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8351 = this;
return (new cljs.core.Subvec(this__8351.meta,cljs.core._assoc_n.call(null,this__8351.v,this__8351.end,o),this__8351.start,(this__8351.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__8352 = this;
var this__8353 = this;
return cljs.core.pr_str.call(null,this__8353);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8354 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8355 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8356 = this;
var subvec_seq__8357 = (function subvec_seq(i){
if((i === this__8356.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__8356.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__8357.call(null,this__8356.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8358 = this;
return (this__8358.end - this__8358.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8359 = this;
return cljs.core._nth.call(null,this__8359.v,(this__8359.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8360 = this;
if((this__8360.start === this__8360.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__8360.meta,this__8360.v,this__8360.start,(this__8360.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8361 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8362 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8363 = this;
return (new cljs.core.Subvec(meta,this__8363.v,this__8363.start,this__8363.end,this__8363.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8364 = this;
return this__8364.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8365 = this;
return cljs.core._nth.call(null,this__8365.v,(this__8365.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8366 = this;
return cljs.core._nth.call(null,this__8366.v,(this__8366.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8367 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8367.meta);
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
var ret__8370 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__8370,0,tl.length);
return ret__8370;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__8374 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__8375 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8374,subidx__8375,(((level === 5))?tail_node:(function (){var child__8376 = cljs.core.pv_aget.call(null,ret__8374,subidx__8375);
if(!((child__8376 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__8376,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__8374;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__8381 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__8382 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8383 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__8381,subidx__8382));
if((function (){var and__3822__auto____8384 = (new_child__8383 == null);
if(and__3822__auto____8384)
{return (subidx__8382 === 0);
} else
{return and__3822__auto____8384;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__8381,subidx__8382,new_child__8383);
return node__8381;
}
} else
{if((subidx__8382 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__8381,subidx__8382,null);
return node__8381;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____8389 = (0 <= i);
if(and__3822__auto____8389)
{return (i < tv.cnt);
} else
{return and__3822__auto____8389;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__8390 = tv.root;
var node__8391 = root__8390;
var level__8392 = tv.shift;
while(true){
if((level__8392 > 0))
{{
var G__8393 = cljs.core.tv_ensure_editable.call(null,root__8390.edit,cljs.core.pv_aget.call(null,node__8391,((i >>> level__8392) & 31)));
var G__8394 = (level__8392 - 5);
node__8391 = G__8393;
level__8392 = G__8394;
continue;
}
} else
{return node__8391.arr;
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
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__2311__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__8434 = null;
var G__8434__2 = (function (this_sym8397,k){
var this__8399 = this;
var this_sym8397__8400 = this;
var coll__8401 = this_sym8397__8400;
return coll__8401.cljs$core$ILookup$_lookup$arity$2(coll__8401,k);
});
var G__8434__3 = (function (this_sym8398,k,not_found){
var this__8399 = this;
var this_sym8398__8402 = this;
var coll__8403 = this_sym8398__8402;
return coll__8403.cljs$core$ILookup$_lookup$arity$3(coll__8403,k,not_found);
});
G__8434 = function(this_sym8398,k,not_found){
switch(arguments.length){
case 2:
return G__8434__2.call(this,this_sym8398,k);
case 3:
return G__8434__3.call(this,this_sym8398,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8434;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym8395,args8396){
var this__8404 = this;
return this_sym8395.call.apply(this_sym8395,[this_sym8395].concat(args8396.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8405 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8406 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8407 = this;
if(this__8407.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8408 = this;
if((function (){var and__3822__auto____8409 = (0 <= n);
if(and__3822__auto____8409)
{return (n < this__8408.cnt);
} else
{return and__3822__auto____8409;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8410 = this;
if(this__8410.root.edit)
{return this__8410.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__8411 = this;
if(this__8411.root.edit)
{if((function (){var and__3822__auto____8412 = (0 <= n);
if(and__3822__auto____8412)
{return (n < this__8411.cnt);
} else
{return and__3822__auto____8412;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__8411.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__8417 = (function go(level,node){
var node__8415 = cljs.core.tv_ensure_editable.call(null,this__8411.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__8415,(n & 31),val);
return node__8415;
} else
{var subidx__8416 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__8415,subidx__8416,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__8415,subidx__8416)));
return node__8415;
}
}).call(null,this__8411.shift,this__8411.root);
this__8411.root = new_root__8417;
return tcoll;
}
} else
{if((n === this__8411.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__8411.cnt)].join('')));
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
var this__8418 = this;
if(this__8418.root.edit)
{if((this__8418.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8418.cnt))
{this__8418.cnt = 0;
return tcoll;
} else
{if((((this__8418.cnt - 1) & 31) > 0))
{this__8418.cnt = (this__8418.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__8419 = cljs.core.editable_array_for.call(null,tcoll,(this__8418.cnt - 2));
var new_root__8421 = (function (){var nr__8420 = cljs.core.tv_pop_tail.call(null,tcoll,this__8418.shift,this__8418.root);
if(!((nr__8420 == null)))
{return nr__8420;
} else
{return (new cljs.core.VectorNode(this__8418.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____8422 = (5 < this__8418.shift);
if(and__3822__auto____8422)
{return (cljs.core.pv_aget.call(null,new_root__8421,1) == null);
} else
{return and__3822__auto____8422;
}
})())
{var new_root__8423 = cljs.core.tv_ensure_editable.call(null,this__8418.root.edit,cljs.core.pv_aget.call(null,new_root__8421,0));
this__8418.root = new_root__8423;
this__8418.shift = (this__8418.shift - 5);
this__8418.cnt = (this__8418.cnt - 1);
this__8418.tail = new_tail__8419;
return tcoll;
} else
{this__8418.root = new_root__8421;
this__8418.cnt = (this__8418.cnt - 1);
this__8418.tail = new_tail__8419;
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
var this__8424 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8425 = this;
if(this__8425.root.edit)
{if(((this__8425.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__8425.tail[(this__8425.cnt & 31)] = o);
this__8425.cnt = (this__8425.cnt + 1);
return tcoll;
} else
{var tail_node__8426 = (new cljs.core.VectorNode(this__8425.root.edit,this__8425.tail));
var new_tail__8427 = cljs.core.make_array.call(null,32);
(new_tail__8427[0] = o);
this__8425.tail = new_tail__8427;
if(((this__8425.cnt >>> 5) > (1 << this__8425.shift)))
{var new_root_array__8428 = cljs.core.make_array.call(null,32);
var new_shift__8429 = (this__8425.shift + 5);
(new_root_array__8428[0] = this__8425.root);
(new_root_array__8428[1] = cljs.core.new_path.call(null,this__8425.root.edit,this__8425.shift,tail_node__8426));
this__8425.root = (new cljs.core.VectorNode(this__8425.root.edit,new_root_array__8428));
this__8425.shift = new_shift__8429;
this__8425.cnt = (this__8425.cnt + 1);
return tcoll;
} else
{var new_root__8430 = cljs.core.tv_push_tail.call(null,tcoll,this__8425.shift,this__8425.root,tail_node__8426);
this__8425.root = new_root__8430;
this__8425.cnt = (this__8425.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8431 = this;
if(this__8431.root.edit)
{this__8431.root.edit = null;
var len__8432 = (this__8431.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__8433 = cljs.core.make_array.call(null,len__8432);
cljs.core.array_copy.call(null,this__8431.tail,0,trimmed_tail__8433,0,len__8432);
return (new cljs.core.PersistentVector(null,this__8431.cnt,this__8431.shift,this__8431.root,trimmed_tail__8433,null));
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
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__2311__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8435 = this;
var h__2194__auto____8436 = this__8435.__hash;
if(!((h__2194__auto____8436 == null)))
{return h__2194__auto____8436;
} else
{var h__2194__auto____8437 = cljs.core.hash_coll.call(null,coll);
this__8435.__hash = h__2194__auto____8437;
return h__2194__auto____8437;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8438 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__8439 = this;
var this__8440 = this;
return cljs.core.pr_str.call(null,this__8440);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8441 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8442 = this;
return cljs.core._first.call(null,this__8442.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8443 = this;
var temp__3971__auto____8444 = cljs.core.next.call(null,this__8443.front);
if(temp__3971__auto____8444)
{var f1__8445 = temp__3971__auto____8444;
return (new cljs.core.PersistentQueueSeq(this__8443.meta,f1__8445,this__8443.rear,null));
} else
{if((this__8443.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__8443.meta,this__8443.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8446 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8447 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__8447.front,this__8447.rear,this__8447.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8448 = this;
return this__8448.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8449 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8449.meta);
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
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__2311__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8450 = this;
var h__2194__auto____8451 = this__8450.__hash;
if(!((h__2194__auto____8451 == null)))
{return h__2194__auto____8451;
} else
{var h__2194__auto____8452 = cljs.core.hash_coll.call(null,coll);
this__8450.__hash = h__2194__auto____8452;
return h__2194__auto____8452;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8453 = this;
if(cljs.core.truth_(this__8453.front))
{return (new cljs.core.PersistentQueue(this__8453.meta,(this__8453.count + 1),this__8453.front,cljs.core.conj.call(null,(function (){var or__3824__auto____8454 = this__8453.rear;
if(cljs.core.truth_(or__3824__auto____8454))
{return or__3824__auto____8454;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__8453.meta,(this__8453.count + 1),cljs.core.conj.call(null,this__8453.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__8455 = this;
var this__8456 = this;
return cljs.core.pr_str.call(null,this__8456);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8457 = this;
var rear__8458 = cljs.core.seq.call(null,this__8457.rear);
if(cljs.core.truth_((function (){var or__3824__auto____8459 = this__8457.front;
if(cljs.core.truth_(or__3824__auto____8459))
{return or__3824__auto____8459;
} else
{return rear__8458;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__8457.front,cljs.core.seq.call(null,rear__8458),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8460 = this;
return this__8460.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8461 = this;
return cljs.core._first.call(null,this__8461.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8462 = this;
if(cljs.core.truth_(this__8462.front))
{var temp__3971__auto____8463 = cljs.core.next.call(null,this__8462.front);
if(temp__3971__auto____8463)
{var f1__8464 = temp__3971__auto____8463;
return (new cljs.core.PersistentQueue(this__8462.meta,(this__8462.count - 1),f1__8464,this__8462.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__8462.meta,(this__8462.count - 1),cljs.core.seq.call(null,this__8462.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8465 = this;
return cljs.core.first.call(null,this__8465.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8466 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8467 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8468 = this;
return (new cljs.core.PersistentQueue(meta,this__8468.count,this__8468.front,this__8468.rear,this__8468.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8469 = this;
return this__8469.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8470 = this;
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
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__2311__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__8471 = this;
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
var len__8474 = array.length;
var i__8475 = 0;
while(true){
if((i__8475 < len__8474))
{if((k === (array[i__8475])))
{return i__8475;
} else
{{
var G__8476 = (i__8475 + incr);
i__8475 = G__8476;
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
var a__8479 = cljs.core.hash.call(null,a);
var b__8480 = cljs.core.hash.call(null,b);
if((a__8479 < b__8480))
{return -1;
} else
{if((a__8479 > b__8480))
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
var ks__8488 = m.keys;
var len__8489 = ks__8488.length;
var so__8490 = m.strobj;
var out__8491 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__8492 = 0;
var out__8493 = cljs.core.transient$.call(null,out__8491);
while(true){
if((i__8492 < len__8489))
{var k__8494 = (ks__8488[i__8492]);
{
var G__8495 = (i__8492 + 1);
var G__8496 = cljs.core.assoc_BANG_.call(null,out__8493,k__8494,(so__8490[k__8494]));
i__8492 = G__8495;
out__8493 = G__8496;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__8493,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__8502 = {};
var l__8503 = ks.length;
var i__8504 = 0;
while(true){
if((i__8504 < l__8503))
{var k__8505 = (ks[i__8504]);
(new_obj__8502[k__8505] = (obj[k__8505]));
{
var G__8506 = (i__8504 + 1);
i__8504 = G__8506;
continue;
}
} else
{}
break;
}
return new_obj__8502;
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
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__2311__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8509 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8510 = this;
var h__2194__auto____8511 = this__8510.__hash;
if(!((h__2194__auto____8511 == null)))
{return h__2194__auto____8511;
} else
{var h__2194__auto____8512 = cljs.core.hash_imap.call(null,coll);
this__8510.__hash = h__2194__auto____8512;
return h__2194__auto____8512;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8513 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8514 = this;
if((function (){var and__3822__auto____8515 = goog.isString(k);
if(and__3822__auto____8515)
{return !((cljs.core.scan_array.call(null,1,k,this__8514.keys) == null));
} else
{return and__3822__auto____8515;
}
})())
{return (this__8514.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8516 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____8517 = (this__8516.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____8517)
{return or__3824__auto____8517;
} else
{return (this__8516.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__8516.keys) == null)))
{var new_strobj__8518 = cljs.core.obj_clone.call(null,this__8516.strobj,this__8516.keys);
(new_strobj__8518[k] = v);
return (new cljs.core.ObjMap(this__8516.meta,this__8516.keys,new_strobj__8518,(this__8516.update_count + 1),null));
} else
{var new_strobj__8519 = cljs.core.obj_clone.call(null,this__8516.strobj,this__8516.keys);
var new_keys__8520 = this__8516.keys.slice();
(new_strobj__8519[k] = v);
new_keys__8520.push(k);
return (new cljs.core.ObjMap(this__8516.meta,new_keys__8520,new_strobj__8519,(this__8516.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8521 = this;
if((function (){var and__3822__auto____8522 = goog.isString(k);
if(and__3822__auto____8522)
{return !((cljs.core.scan_array.call(null,1,k,this__8521.keys) == null));
} else
{return and__3822__auto____8522;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__8544 = null;
var G__8544__2 = (function (this_sym8523,k){
var this__8525 = this;
var this_sym8523__8526 = this;
var coll__8527 = this_sym8523__8526;
return coll__8527.cljs$core$ILookup$_lookup$arity$2(coll__8527,k);
});
var G__8544__3 = (function (this_sym8524,k,not_found){
var this__8525 = this;
var this_sym8524__8528 = this;
var coll__8529 = this_sym8524__8528;
return coll__8529.cljs$core$ILookup$_lookup$arity$3(coll__8529,k,not_found);
});
G__8544 = function(this_sym8524,k,not_found){
switch(arguments.length){
case 2:
return G__8544__2.call(this,this_sym8524,k);
case 3:
return G__8544__3.call(this,this_sym8524,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8544;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym8507,args8508){
var this__8530 = this;
return this_sym8507.call.apply(this_sym8507,[this_sym8507].concat(args8508.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8531 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__8532 = this;
var this__8533 = this;
return cljs.core.pr_str.call(null,this__8533);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8534 = this;
if((this__8534.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__8497_SHARP_){
return cljs.core.vector.call(null,p1__8497_SHARP_,(this__8534.strobj[p1__8497_SHARP_]));
}),this__8534.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8535 = this;
return this__8535.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8536 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8537 = this;
return (new cljs.core.ObjMap(meta,this__8537.keys,this__8537.strobj,this__8537.update_count,this__8537.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8538 = this;
return this__8538.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8539 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__8539.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8540 = this;
if((function (){var and__3822__auto____8541 = goog.isString(k);
if(and__3822__auto____8541)
{return !((cljs.core.scan_array.call(null,1,k,this__8540.keys) == null));
} else
{return and__3822__auto____8541;
}
})())
{var new_keys__8542 = this__8540.keys.slice();
var new_strobj__8543 = cljs.core.obj_clone.call(null,this__8540.strobj,this__8540.keys);
new_keys__8542.splice(cljs.core.scan_array.call(null,1,k,new_keys__8542),1);
cljs.core.js_delete.call(null,new_strobj__8543,k);
return (new cljs.core.ObjMap(this__8540.meta,new_keys__8542,new_strobj__8543,(this__8540.update_count + 1),null));
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
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__2311__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8548 = this;
var h__2194__auto____8549 = this__8548.__hash;
if(!((h__2194__auto____8549 == null)))
{return h__2194__auto____8549;
} else
{var h__2194__auto____8550 = cljs.core.hash_imap.call(null,coll);
this__8548.__hash = h__2194__auto____8550;
return h__2194__auto____8550;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8551 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8552 = this;
var bucket__8553 = (this__8552.hashobj[cljs.core.hash.call(null,k)]);
var i__8554 = (cljs.core.truth_(bucket__8553)?cljs.core.scan_array.call(null,2,k,bucket__8553):null);
if(cljs.core.truth_(i__8554))
{return (bucket__8553[(i__8554 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8555 = this;
var h__8556 = cljs.core.hash.call(null,k);
var bucket__8557 = (this__8555.hashobj[h__8556]);
if(cljs.core.truth_(bucket__8557))
{var new_bucket__8558 = bucket__8557.slice();
var new_hashobj__8559 = goog.object.clone(this__8555.hashobj);
(new_hashobj__8559[h__8556] = new_bucket__8558);
var temp__3971__auto____8560 = cljs.core.scan_array.call(null,2,k,new_bucket__8558);
if(cljs.core.truth_(temp__3971__auto____8560))
{var i__8561 = temp__3971__auto____8560;
(new_bucket__8558[(i__8561 + 1)] = v);
return (new cljs.core.HashMap(this__8555.meta,this__8555.count,new_hashobj__8559,null));
} else
{new_bucket__8558.push(k,v);
return (new cljs.core.HashMap(this__8555.meta,(this__8555.count + 1),new_hashobj__8559,null));
}
} else
{var new_hashobj__8562 = goog.object.clone(this__8555.hashobj);
(new_hashobj__8562[h__8556] = [k,v]);
return (new cljs.core.HashMap(this__8555.meta,(this__8555.count + 1),new_hashobj__8562,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8563 = this;
var bucket__8564 = (this__8563.hashobj[cljs.core.hash.call(null,k)]);
var i__8565 = (cljs.core.truth_(bucket__8564)?cljs.core.scan_array.call(null,2,k,bucket__8564):null);
if(cljs.core.truth_(i__8565))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__8590 = null;
var G__8590__2 = (function (this_sym8566,k){
var this__8568 = this;
var this_sym8566__8569 = this;
var coll__8570 = this_sym8566__8569;
return coll__8570.cljs$core$ILookup$_lookup$arity$2(coll__8570,k);
});
var G__8590__3 = (function (this_sym8567,k,not_found){
var this__8568 = this;
var this_sym8567__8571 = this;
var coll__8572 = this_sym8567__8571;
return coll__8572.cljs$core$ILookup$_lookup$arity$3(coll__8572,k,not_found);
});
G__8590 = function(this_sym8567,k,not_found){
switch(arguments.length){
case 2:
return G__8590__2.call(this,this_sym8567,k);
case 3:
return G__8590__3.call(this,this_sym8567,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8590;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym8546,args8547){
var this__8573 = this;
return this_sym8546.call.apply(this_sym8546,[this_sym8546].concat(args8547.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8574 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__8575 = this;
var this__8576 = this;
return cljs.core.pr_str.call(null,this__8576);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8577 = this;
if((this__8577.count > 0))
{var hashes__8578 = cljs.core.js_keys.call(null,this__8577.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__8545_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__8577.hashobj[p1__8545_SHARP_])));
}),hashes__8578);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8579 = this;
return this__8579.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8580 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8581 = this;
return (new cljs.core.HashMap(meta,this__8581.count,this__8581.hashobj,this__8581.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8582 = this;
return this__8582.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8583 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__8583.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8584 = this;
var h__8585 = cljs.core.hash.call(null,k);
var bucket__8586 = (this__8584.hashobj[h__8585]);
var i__8587 = (cljs.core.truth_(bucket__8586)?cljs.core.scan_array.call(null,2,k,bucket__8586):null);
if(cljs.core.not.call(null,i__8587))
{return coll;
} else
{var new_hashobj__8588 = goog.object.clone(this__8584.hashobj);
if((3 > bucket__8586.length))
{cljs.core.js_delete.call(null,new_hashobj__8588,h__8585);
} else
{var new_bucket__8589 = bucket__8586.slice();
new_bucket__8589.splice(i__8587,2);
(new_hashobj__8588[h__8585] = new_bucket__8589);
}
return (new cljs.core.HashMap(this__8584.meta,(this__8584.count - 1),new_hashobj__8588,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__8591 = ks.length;
var i__8592 = 0;
var out__8593 = cljs.core.HashMap.EMPTY;
while(true){
if((i__8592 < len__8591))
{{
var G__8594 = (i__8592 + 1);
var G__8595 = cljs.core.assoc.call(null,out__8593,(ks[i__8592]),(vs[i__8592]));
i__8592 = G__8594;
out__8593 = G__8595;
continue;
}
} else
{return out__8593;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__8599 = m.arr;
var len__8600 = arr__8599.length;
var i__8601 = 0;
while(true){
if((len__8600 <= i__8601))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__8599[i__8601]),k))
{return i__8601;
} else
{if("\uFDD0'else")
{{
var G__8602 = (i__8601 + 2);
i__8601 = G__8602;
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
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__2311__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8605 = this;
return (new cljs.core.TransientArrayMap({},this__8605.arr.length,this__8605.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8606 = this;
var h__2194__auto____8607 = this__8606.__hash;
if(!((h__2194__auto____8607 == null)))
{return h__2194__auto____8607;
} else
{var h__2194__auto____8608 = cljs.core.hash_imap.call(null,coll);
this__8606.__hash = h__2194__auto____8608;
return h__2194__auto____8608;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8609 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8610 = this;
var idx__8611 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8611 === -1))
{return not_found;
} else
{return (this__8610.arr[(idx__8611 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8612 = this;
var idx__8613 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8613 === -1))
{if((this__8612.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__8612.meta,(this__8612.cnt + 1),(function (){var G__8614__8615 = this__8612.arr.slice();
G__8614__8615.push(k);
G__8614__8615.push(v);
return G__8614__8615;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__8612.arr[(idx__8613 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__8612.meta,this__8612.cnt,(function (){var G__8616__8617 = this__8612.arr.slice();
(G__8616__8617[(idx__8613 + 1)] = v);
return G__8616__8617;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8618 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__8650 = null;
var G__8650__2 = (function (this_sym8619,k){
var this__8621 = this;
var this_sym8619__8622 = this;
var coll__8623 = this_sym8619__8622;
return coll__8623.cljs$core$ILookup$_lookup$arity$2(coll__8623,k);
});
var G__8650__3 = (function (this_sym8620,k,not_found){
var this__8621 = this;
var this_sym8620__8624 = this;
var coll__8625 = this_sym8620__8624;
return coll__8625.cljs$core$ILookup$_lookup$arity$3(coll__8625,k,not_found);
});
G__8650 = function(this_sym8620,k,not_found){
switch(arguments.length){
case 2:
return G__8650__2.call(this,this_sym8620,k);
case 3:
return G__8650__3.call(this,this_sym8620,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8650;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym8603,args8604){
var this__8626 = this;
return this_sym8603.call.apply(this_sym8603,[this_sym8603].concat(args8604.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__8627 = this;
var len__8628 = this__8627.arr.length;
var i__8629 = 0;
var init__8630 = init;
while(true){
if((i__8629 < len__8628))
{var init__8631 = f.call(null,init__8630,(this__8627.arr[i__8629]),(this__8627.arr[(i__8629 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__8631))
{return cljs.core.deref.call(null,init__8631);
} else
{{
var G__8651 = (i__8629 + 2);
var G__8652 = init__8631;
i__8629 = G__8651;
init__8630 = G__8652;
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
var this__8632 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__8633 = this;
var this__8634 = this;
return cljs.core.pr_str.call(null,this__8634);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8635 = this;
if((this__8635.cnt > 0))
{var len__8636 = this__8635.arr.length;
var array_map_seq__8637 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__8636))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__8635.arr[i]),(this__8635.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__8637.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8638 = this;
return this__8638.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8639 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8640 = this;
return (new cljs.core.PersistentArrayMap(meta,this__8640.cnt,this__8640.arr,this__8640.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8641 = this;
return this__8641.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8642 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8642.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8643 = this;
var idx__8644 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8644 >= 0))
{var len__8645 = this__8643.arr.length;
var new_len__8646 = (len__8645 - 2);
if((new_len__8646 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__8647 = cljs.core.make_array.call(null,new_len__8646);
var s__8648 = 0;
var d__8649 = 0;
while(true){
if((s__8648 >= len__8645))
{return (new cljs.core.PersistentArrayMap(this__8643.meta,(this__8643.cnt - 1),new_arr__8647,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__8643.arr[s__8648])))
{{
var G__8653 = (s__8648 + 2);
var G__8654 = d__8649;
s__8648 = G__8653;
d__8649 = G__8654;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__8647[d__8649] = (this__8643.arr[s__8648]));
(new_arr__8647[(d__8649 + 1)] = (this__8643.arr[(s__8648 + 1)]));
{
var G__8655 = (s__8648 + 2);
var G__8656 = (d__8649 + 2);
s__8648 = G__8655;
d__8649 = G__8656;
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
var len__8657 = cljs.core.count.call(null,ks);
var i__8658 = 0;
var out__8659 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__8658 < len__8657))
{{
var G__8660 = (i__8658 + 1);
var G__8661 = cljs.core.assoc_BANG_.call(null,out__8659,(ks[i__8658]),(vs[i__8658]));
i__8658 = G__8660;
out__8659 = G__8661;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8659);
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
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__2311__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__8662 = this;
if(cljs.core.truth_(this__8662.editable_QMARK_))
{var idx__8663 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__8663 >= 0))
{(this__8662.arr[idx__8663] = (this__8662.arr[(this__8662.len - 2)]));
(this__8662.arr[(idx__8663 + 1)] = (this__8662.arr[(this__8662.len - 1)]));
var G__8664__8665 = this__8662.arr;
G__8664__8665.pop();
G__8664__8665.pop();
G__8664__8665;
this__8662.len = (this__8662.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8666 = this;
if(cljs.core.truth_(this__8666.editable_QMARK_))
{var idx__8667 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__8667 === -1))
{if(((this__8666.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__8666.len = (this__8666.len + 2);
this__8666.arr.push(key);
this__8666.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__8666.len,this__8666.arr),key,val);
}
} else
{if((val === (this__8666.arr[(idx__8667 + 1)])))
{return tcoll;
} else
{(this__8666.arr[(idx__8667 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8668 = this;
if(cljs.core.truth_(this__8668.editable_QMARK_))
{if((function (){var G__8669__8670 = o;
if(G__8669__8670)
{if((function (){var or__3824__auto____8671 = (G__8669__8670.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____8671)
{return or__3824__auto____8671;
} else
{return G__8669__8670.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__8669__8670.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8669__8670);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8669__8670);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__8672 = cljs.core.seq.call(null,o);
var tcoll__8673 = tcoll;
while(true){
var temp__3971__auto____8674 = cljs.core.first.call(null,es__8672);
if(cljs.core.truth_(temp__3971__auto____8674))
{var e__8675 = temp__3971__auto____8674;
{
var G__8681 = cljs.core.next.call(null,es__8672);
var G__8682 = tcoll__8673.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__8673,cljs.core.key.call(null,e__8675),cljs.core.val.call(null,e__8675));
es__8672 = G__8681;
tcoll__8673 = G__8682;
continue;
}
} else
{return tcoll__8673;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8676 = this;
if(cljs.core.truth_(this__8676.editable_QMARK_))
{this__8676.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__8676.len,2),this__8676.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__8677 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__8678 = this;
if(cljs.core.truth_(this__8678.editable_QMARK_))
{var idx__8679 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__8679 === -1))
{return not_found;
} else
{return (this__8678.arr[(idx__8679 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__8680 = this;
if(cljs.core.truth_(this__8680.editable_QMARK_))
{return cljs.core.quot.call(null,this__8680.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__8685 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__8686 = 0;
while(true){
if((i__8686 < len))
{{
var G__8687 = cljs.core.assoc_BANG_.call(null,out__8685,(arr[i__8686]),(arr[(i__8686 + 1)]));
var G__8688 = (i__8686 + 2);
out__8685 = G__8687;
i__8686 = G__8688;
continue;
}
} else
{return out__8685;
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
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__2312__auto__){
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
var G__8693__8694 = arr.slice();
(G__8693__8694[i] = a);
return G__8693__8694;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__8695__8696 = arr.slice();
(G__8695__8696[i] = a);
(G__8695__8696[j] = b);
return G__8695__8696;
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
var new_arr__8698 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__8698,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__8698,(2 * i),(new_arr__8698.length - (2 * i)));
return new_arr__8698;
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
var editable__8701 = inode.ensure_editable(edit);
(editable__8701.arr[i] = a);
return editable__8701;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__8702 = inode.ensure_editable(edit);
(editable__8702.arr[i] = a);
(editable__8702.arr[j] = b);
return editable__8702;
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
var len__8709 = arr.length;
var i__8710 = 0;
var init__8711 = init;
while(true){
if((i__8710 < len__8709))
{var init__8714 = (function (){var k__8712 = (arr[i__8710]);
if(!((k__8712 == null)))
{return f.call(null,init__8711,k__8712,(arr[(i__8710 + 1)]));
} else
{var node__8713 = (arr[(i__8710 + 1)]);
if(!((node__8713 == null)))
{return node__8713.kv_reduce(f,init__8711);
} else
{return init__8711;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__8714))
{return cljs.core.deref.call(null,init__8714);
} else
{{
var G__8715 = (i__8710 + 2);
var G__8716 = init__8714;
i__8710 = G__8715;
init__8711 = G__8716;
continue;
}
}
} else
{return init__8711;
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
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__2311__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__8717 = this;
var inode__8718 = this;
if((this__8717.bitmap === bit))
{return null;
} else
{var editable__8719 = inode__8718.ensure_editable(e);
var earr__8720 = editable__8719.arr;
var len__8721 = earr__8720.length;
editable__8719.bitmap = (bit ^ editable__8719.bitmap);
cljs.core.array_copy.call(null,earr__8720,(2 * (i + 1)),earr__8720,(2 * i),(len__8721 - (2 * (i + 1))));
(earr__8720[(len__8721 - 2)] = null);
(earr__8720[(len__8721 - 1)] = null);
return editable__8719;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__8722 = this;
var inode__8723 = this;
var bit__8724 = (1 << ((hash >>> shift) & 0x01f));
var idx__8725 = cljs.core.bitmap_indexed_node_index.call(null,this__8722.bitmap,bit__8724);
if(((this__8722.bitmap & bit__8724) === 0))
{var n__8726 = cljs.core.bit_count.call(null,this__8722.bitmap);
if(((2 * n__8726) < this__8722.arr.length))
{var editable__8727 = inode__8723.ensure_editable(edit);
var earr__8728 = editable__8727.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__8728,(2 * idx__8725),earr__8728,(2 * (idx__8725 + 1)),(2 * (n__8726 - idx__8725)));
(earr__8728[(2 * idx__8725)] = key);
(earr__8728[((2 * idx__8725) + 1)] = val);
editable__8727.bitmap = (editable__8727.bitmap | bit__8724);
return editable__8727;
} else
{if((n__8726 >= 16))
{var nodes__8729 = cljs.core.make_array.call(null,32);
var jdx__8730 = ((hash >>> shift) & 0x01f);
(nodes__8729[jdx__8730] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__8731 = 0;
var j__8732 = 0;
while(true){
if((i__8731 < 32))
{if((((this__8722.bitmap >>> i__8731) & 1) === 0))
{{
var G__8785 = (i__8731 + 1);
var G__8786 = j__8732;
i__8731 = G__8785;
j__8732 = G__8786;
continue;
}
} else
{(nodes__8729[i__8731] = ((!(((this__8722.arr[j__8732]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__8722.arr[j__8732])),(this__8722.arr[j__8732]),(this__8722.arr[(j__8732 + 1)]),added_leaf_QMARK_):(this__8722.arr[(j__8732 + 1)])));
{
var G__8787 = (i__8731 + 1);
var G__8788 = (j__8732 + 2);
i__8731 = G__8787;
j__8732 = G__8788;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__8726 + 1),nodes__8729));
} else
{if("\uFDD0'else")
{var new_arr__8733 = cljs.core.make_array.call(null,(2 * (n__8726 + 4)));
cljs.core.array_copy.call(null,this__8722.arr,0,new_arr__8733,0,(2 * idx__8725));
(new_arr__8733[(2 * idx__8725)] = key);
(new_arr__8733[((2 * idx__8725) + 1)] = val);
cljs.core.array_copy.call(null,this__8722.arr,(2 * idx__8725),new_arr__8733,(2 * (idx__8725 + 1)),(2 * (n__8726 - idx__8725)));
added_leaf_QMARK_.val = true;
var editable__8734 = inode__8723.ensure_editable(edit);
editable__8734.arr = new_arr__8733;
editable__8734.bitmap = (editable__8734.bitmap | bit__8724);
return editable__8734;
} else
{return null;
}
}
}
} else
{var key_or_nil__8735 = (this__8722.arr[(2 * idx__8725)]);
var val_or_node__8736 = (this__8722.arr[((2 * idx__8725) + 1)]);
if((key_or_nil__8735 == null))
{var n__8737 = val_or_node__8736.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8737 === val_or_node__8736))
{return inode__8723;
} else
{return cljs.core.edit_and_set.call(null,inode__8723,edit,((2 * idx__8725) + 1),n__8737);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8735))
{if((val === val_or_node__8736))
{return inode__8723;
} else
{return cljs.core.edit_and_set.call(null,inode__8723,edit,((2 * idx__8725) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__8723,edit,(2 * idx__8725),null,((2 * idx__8725) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__8735,val_or_node__8736,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__8738 = this;
var inode__8739 = this;
return cljs.core.create_inode_seq.call(null,this__8738.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__8740 = this;
var inode__8741 = this;
var bit__8742 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8740.bitmap & bit__8742) === 0))
{return inode__8741;
} else
{var idx__8743 = cljs.core.bitmap_indexed_node_index.call(null,this__8740.bitmap,bit__8742);
var key_or_nil__8744 = (this__8740.arr[(2 * idx__8743)]);
var val_or_node__8745 = (this__8740.arr[((2 * idx__8743) + 1)]);
if((key_or_nil__8744 == null))
{var n__8746 = val_or_node__8745.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__8746 === val_or_node__8745))
{return inode__8741;
} else
{if(!((n__8746 == null)))
{return cljs.core.edit_and_set.call(null,inode__8741,edit,((2 * idx__8743) + 1),n__8746);
} else
{if((this__8740.bitmap === bit__8742))
{return null;
} else
{if("\uFDD0'else")
{return inode__8741.edit_and_remove_pair(edit,bit__8742,idx__8743);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8744))
{(removed_leaf_QMARK_[0] = true);
return inode__8741.edit_and_remove_pair(edit,bit__8742,idx__8743);
} else
{if("\uFDD0'else")
{return inode__8741;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__8747 = this;
var inode__8748 = this;
if((e === this__8747.edit))
{return inode__8748;
} else
{var n__8749 = cljs.core.bit_count.call(null,this__8747.bitmap);
var new_arr__8750 = cljs.core.make_array.call(null,(((n__8749 < 0))?4:(2 * (n__8749 + 1))));
cljs.core.array_copy.call(null,this__8747.arr,0,new_arr__8750,0,(2 * n__8749));
return (new cljs.core.BitmapIndexedNode(e,this__8747.bitmap,new_arr__8750));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__8751 = this;
var inode__8752 = this;
return cljs.core.inode_kv_reduce.call(null,this__8751.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__8753 = this;
var inode__8754 = this;
var bit__8755 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8753.bitmap & bit__8755) === 0))
{return not_found;
} else
{var idx__8756 = cljs.core.bitmap_indexed_node_index.call(null,this__8753.bitmap,bit__8755);
var key_or_nil__8757 = (this__8753.arr[(2 * idx__8756)]);
var val_or_node__8758 = (this__8753.arr[((2 * idx__8756) + 1)]);
if((key_or_nil__8757 == null))
{return val_or_node__8758.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8757))
{return cljs.core.PersistentVector.fromArray([key_or_nil__8757,val_or_node__8758], true);
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
var this__8759 = this;
var inode__8760 = this;
var bit__8761 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8759.bitmap & bit__8761) === 0))
{return inode__8760;
} else
{var idx__8762 = cljs.core.bitmap_indexed_node_index.call(null,this__8759.bitmap,bit__8761);
var key_or_nil__8763 = (this__8759.arr[(2 * idx__8762)]);
var val_or_node__8764 = (this__8759.arr[((2 * idx__8762) + 1)]);
if((key_or_nil__8763 == null))
{var n__8765 = val_or_node__8764.inode_without((shift + 5),hash,key);
if((n__8765 === val_or_node__8764))
{return inode__8760;
} else
{if(!((n__8765 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__8759.bitmap,cljs.core.clone_and_set.call(null,this__8759.arr,((2 * idx__8762) + 1),n__8765)));
} else
{if((this__8759.bitmap === bit__8761))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__8759.bitmap ^ bit__8761),cljs.core.remove_pair.call(null,this__8759.arr,idx__8762)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8763))
{return (new cljs.core.BitmapIndexedNode(null,(this__8759.bitmap ^ bit__8761),cljs.core.remove_pair.call(null,this__8759.arr,idx__8762)));
} else
{if("\uFDD0'else")
{return inode__8760;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__8766 = this;
var inode__8767 = this;
var bit__8768 = (1 << ((hash >>> shift) & 0x01f));
var idx__8769 = cljs.core.bitmap_indexed_node_index.call(null,this__8766.bitmap,bit__8768);
if(((this__8766.bitmap & bit__8768) === 0))
{var n__8770 = cljs.core.bit_count.call(null,this__8766.bitmap);
if((n__8770 >= 16))
{var nodes__8771 = cljs.core.make_array.call(null,32);
var jdx__8772 = ((hash >>> shift) & 0x01f);
(nodes__8771[jdx__8772] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__8773 = 0;
var j__8774 = 0;
while(true){
if((i__8773 < 32))
{if((((this__8766.bitmap >>> i__8773) & 1) === 0))
{{
var G__8789 = (i__8773 + 1);
var G__8790 = j__8774;
i__8773 = G__8789;
j__8774 = G__8790;
continue;
}
} else
{(nodes__8771[i__8773] = ((!(((this__8766.arr[j__8774]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__8766.arr[j__8774])),(this__8766.arr[j__8774]),(this__8766.arr[(j__8774 + 1)]),added_leaf_QMARK_):(this__8766.arr[(j__8774 + 1)])));
{
var G__8791 = (i__8773 + 1);
var G__8792 = (j__8774 + 2);
i__8773 = G__8791;
j__8774 = G__8792;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__8770 + 1),nodes__8771));
} else
{var new_arr__8775 = cljs.core.make_array.call(null,(2 * (n__8770 + 1)));
cljs.core.array_copy.call(null,this__8766.arr,0,new_arr__8775,0,(2 * idx__8769));
(new_arr__8775[(2 * idx__8769)] = key);
(new_arr__8775[((2 * idx__8769) + 1)] = val);
cljs.core.array_copy.call(null,this__8766.arr,(2 * idx__8769),new_arr__8775,(2 * (idx__8769 + 1)),(2 * (n__8770 - idx__8769)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__8766.bitmap | bit__8768),new_arr__8775));
}
} else
{var key_or_nil__8776 = (this__8766.arr[(2 * idx__8769)]);
var val_or_node__8777 = (this__8766.arr[((2 * idx__8769) + 1)]);
if((key_or_nil__8776 == null))
{var n__8778 = val_or_node__8777.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8778 === val_or_node__8777))
{return inode__8767;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__8766.bitmap,cljs.core.clone_and_set.call(null,this__8766.arr,((2 * idx__8769) + 1),n__8778)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8776))
{if((val === val_or_node__8777))
{return inode__8767;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__8766.bitmap,cljs.core.clone_and_set.call(null,this__8766.arr,((2 * idx__8769) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__8766.bitmap,cljs.core.clone_and_set.call(null,this__8766.arr,(2 * idx__8769),null,((2 * idx__8769) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__8776,val_or_node__8777,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__8779 = this;
var inode__8780 = this;
var bit__8781 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8779.bitmap & bit__8781) === 0))
{return not_found;
} else
{var idx__8782 = cljs.core.bitmap_indexed_node_index.call(null,this__8779.bitmap,bit__8781);
var key_or_nil__8783 = (this__8779.arr[(2 * idx__8782)]);
var val_or_node__8784 = (this__8779.arr[((2 * idx__8782) + 1)]);
if((key_or_nil__8783 == null))
{return val_or_node__8784.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8783))
{return val_or_node__8784;
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
var arr__8800 = array_node.arr;
var len__8801 = (2 * (array_node.cnt - 1));
var new_arr__8802 = cljs.core.make_array.call(null,len__8801);
var i__8803 = 0;
var j__8804 = 1;
var bitmap__8805 = 0;
while(true){
if((i__8803 < len__8801))
{if((function (){var and__3822__auto____8806 = !((i__8803 === idx));
if(and__3822__auto____8806)
{return !(((arr__8800[i__8803]) == null));
} else
{return and__3822__auto____8806;
}
})())
{(new_arr__8802[j__8804] = (arr__8800[i__8803]));
{
var G__8807 = (i__8803 + 1);
var G__8808 = (j__8804 + 2);
var G__8809 = (bitmap__8805 | (1 << i__8803));
i__8803 = G__8807;
j__8804 = G__8808;
bitmap__8805 = G__8809;
continue;
}
} else
{{
var G__8810 = (i__8803 + 1);
var G__8811 = j__8804;
var G__8812 = bitmap__8805;
i__8803 = G__8810;
j__8804 = G__8811;
bitmap__8805 = G__8812;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__8805,new_arr__8802));
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
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__2311__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__8813 = this;
var inode__8814 = this;
var idx__8815 = ((hash >>> shift) & 0x01f);
var node__8816 = (this__8813.arr[idx__8815]);
if((node__8816 == null))
{var editable__8817 = cljs.core.edit_and_set.call(null,inode__8814,edit,idx__8815,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__8817.cnt = (editable__8817.cnt + 1);
return editable__8817;
} else
{var n__8818 = node__8816.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8818 === node__8816))
{return inode__8814;
} else
{return cljs.core.edit_and_set.call(null,inode__8814,edit,idx__8815,n__8818);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__8819 = this;
var inode__8820 = this;
return cljs.core.create_array_node_seq.call(null,this__8819.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__8821 = this;
var inode__8822 = this;
var idx__8823 = ((hash >>> shift) & 0x01f);
var node__8824 = (this__8821.arr[idx__8823]);
if((node__8824 == null))
{return inode__8822;
} else
{var n__8825 = node__8824.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__8825 === node__8824))
{return inode__8822;
} else
{if((n__8825 == null))
{if((this__8821.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__8822,edit,idx__8823);
} else
{var editable__8826 = cljs.core.edit_and_set.call(null,inode__8822,edit,idx__8823,n__8825);
editable__8826.cnt = (editable__8826.cnt - 1);
return editable__8826;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__8822,edit,idx__8823,n__8825);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__8827 = this;
var inode__8828 = this;
if((e === this__8827.edit))
{return inode__8828;
} else
{return (new cljs.core.ArrayNode(e,this__8827.cnt,this__8827.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__8829 = this;
var inode__8830 = this;
var len__8831 = this__8829.arr.length;
var i__8832 = 0;
var init__8833 = init;
while(true){
if((i__8832 < len__8831))
{var node__8834 = (this__8829.arr[i__8832]);
if(!((node__8834 == null)))
{var init__8835 = node__8834.kv_reduce(f,init__8833);
if(cljs.core.reduced_QMARK_.call(null,init__8835))
{return cljs.core.deref.call(null,init__8835);
} else
{{
var G__8854 = (i__8832 + 1);
var G__8855 = init__8835;
i__8832 = G__8854;
init__8833 = G__8855;
continue;
}
}
} else
{return null;
}
} else
{return init__8833;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__8836 = this;
var inode__8837 = this;
var idx__8838 = ((hash >>> shift) & 0x01f);
var node__8839 = (this__8836.arr[idx__8838]);
if(!((node__8839 == null)))
{return node__8839.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__8840 = this;
var inode__8841 = this;
var idx__8842 = ((hash >>> shift) & 0x01f);
var node__8843 = (this__8840.arr[idx__8842]);
if(!((node__8843 == null)))
{var n__8844 = node__8843.inode_without((shift + 5),hash,key);
if((n__8844 === node__8843))
{return inode__8841;
} else
{if((n__8844 == null))
{if((this__8840.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__8841,null,idx__8842);
} else
{return (new cljs.core.ArrayNode(null,(this__8840.cnt - 1),cljs.core.clone_and_set.call(null,this__8840.arr,idx__8842,n__8844)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__8840.cnt,cljs.core.clone_and_set.call(null,this__8840.arr,idx__8842,n__8844)));
} else
{return null;
}
}
}
} else
{return inode__8841;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__8845 = this;
var inode__8846 = this;
var idx__8847 = ((hash >>> shift) & 0x01f);
var node__8848 = (this__8845.arr[idx__8847]);
if((node__8848 == null))
{return (new cljs.core.ArrayNode(null,(this__8845.cnt + 1),cljs.core.clone_and_set.call(null,this__8845.arr,idx__8847,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__8849 = node__8848.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8849 === node__8848))
{return inode__8846;
} else
{return (new cljs.core.ArrayNode(null,this__8845.cnt,cljs.core.clone_and_set.call(null,this__8845.arr,idx__8847,n__8849)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__8850 = this;
var inode__8851 = this;
var idx__8852 = ((hash >>> shift) & 0x01f);
var node__8853 = (this__8850.arr[idx__8852]);
if(!((node__8853 == null)))
{return node__8853.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__8858 = (2 * cnt);
var i__8859 = 0;
while(true){
if((i__8859 < lim__8858))
{if(cljs.core.key_test.call(null,key,(arr[i__8859])))
{return i__8859;
} else
{{
var G__8860 = (i__8859 + 2);
i__8859 = G__8860;
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
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__2311__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__8861 = this;
var inode__8862 = this;
if((hash === this__8861.collision_hash))
{var idx__8863 = cljs.core.hash_collision_node_find_index.call(null,this__8861.arr,this__8861.cnt,key);
if((idx__8863 === -1))
{if((this__8861.arr.length > (2 * this__8861.cnt)))
{var editable__8864 = cljs.core.edit_and_set.call(null,inode__8862,edit,(2 * this__8861.cnt),key,((2 * this__8861.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__8864.cnt = (editable__8864.cnt + 1);
return editable__8864;
} else
{var len__8865 = this__8861.arr.length;
var new_arr__8866 = cljs.core.make_array.call(null,(len__8865 + 2));
cljs.core.array_copy.call(null,this__8861.arr,0,new_arr__8866,0,len__8865);
(new_arr__8866[len__8865] = key);
(new_arr__8866[(len__8865 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__8862.ensure_editable_array(edit,(this__8861.cnt + 1),new_arr__8866);
}
} else
{if(((this__8861.arr[(idx__8863 + 1)]) === val))
{return inode__8862;
} else
{return cljs.core.edit_and_set.call(null,inode__8862,edit,(idx__8863 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__8861.collision_hash >>> shift) & 0x01f)),[null,inode__8862,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__8867 = this;
var inode__8868 = this;
return cljs.core.create_inode_seq.call(null,this__8867.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__8869 = this;
var inode__8870 = this;
var idx__8871 = cljs.core.hash_collision_node_find_index.call(null,this__8869.arr,this__8869.cnt,key);
if((idx__8871 === -1))
{return inode__8870;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__8869.cnt === 1))
{return null;
} else
{var editable__8872 = inode__8870.ensure_editable(edit);
var earr__8873 = editable__8872.arr;
(earr__8873[idx__8871] = (earr__8873[((2 * this__8869.cnt) - 2)]));
(earr__8873[(idx__8871 + 1)] = (earr__8873[((2 * this__8869.cnt) - 1)]));
(earr__8873[((2 * this__8869.cnt) - 1)] = null);
(earr__8873[((2 * this__8869.cnt) - 2)] = null);
editable__8872.cnt = (editable__8872.cnt - 1);
return editable__8872;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__8874 = this;
var inode__8875 = this;
if((e === this__8874.edit))
{return inode__8875;
} else
{var new_arr__8876 = cljs.core.make_array.call(null,(2 * (this__8874.cnt + 1)));
cljs.core.array_copy.call(null,this__8874.arr,0,new_arr__8876,0,(2 * this__8874.cnt));
return (new cljs.core.HashCollisionNode(e,this__8874.collision_hash,this__8874.cnt,new_arr__8876));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__8877 = this;
var inode__8878 = this;
return cljs.core.inode_kv_reduce.call(null,this__8877.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__8879 = this;
var inode__8880 = this;
var idx__8881 = cljs.core.hash_collision_node_find_index.call(null,this__8879.arr,this__8879.cnt,key);
if((idx__8881 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__8879.arr[idx__8881])))
{return cljs.core.PersistentVector.fromArray([(this__8879.arr[idx__8881]),(this__8879.arr[(idx__8881 + 1)])], true);
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
var this__8882 = this;
var inode__8883 = this;
var idx__8884 = cljs.core.hash_collision_node_find_index.call(null,this__8882.arr,this__8882.cnt,key);
if((idx__8884 === -1))
{return inode__8883;
} else
{if((this__8882.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__8882.collision_hash,(this__8882.cnt - 1),cljs.core.remove_pair.call(null,this__8882.arr,cljs.core.quot.call(null,idx__8884,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__8885 = this;
var inode__8886 = this;
if((hash === this__8885.collision_hash))
{var idx__8887 = cljs.core.hash_collision_node_find_index.call(null,this__8885.arr,this__8885.cnt,key);
if((idx__8887 === -1))
{var len__8888 = this__8885.arr.length;
var new_arr__8889 = cljs.core.make_array.call(null,(len__8888 + 2));
cljs.core.array_copy.call(null,this__8885.arr,0,new_arr__8889,0,len__8888);
(new_arr__8889[len__8888] = key);
(new_arr__8889[(len__8888 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__8885.collision_hash,(this__8885.cnt + 1),new_arr__8889));
} else
{if(cljs.core._EQ_.call(null,(this__8885.arr[idx__8887]),val))
{return inode__8886;
} else
{return (new cljs.core.HashCollisionNode(null,this__8885.collision_hash,this__8885.cnt,cljs.core.clone_and_set.call(null,this__8885.arr,(idx__8887 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__8885.collision_hash >>> shift) & 0x01f)),[null,inode__8886])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__8890 = this;
var inode__8891 = this;
var idx__8892 = cljs.core.hash_collision_node_find_index.call(null,this__8890.arr,this__8890.cnt,key);
if((idx__8892 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__8890.arr[idx__8892])))
{return (this__8890.arr[(idx__8892 + 1)]);
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
var this__8893 = this;
var inode__8894 = this;
if((e === this__8893.edit))
{this__8893.arr = array;
this__8893.cnt = count;
return inode__8894;
} else
{return (new cljs.core.HashCollisionNode(this__8893.edit,this__8893.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__8899 = cljs.core.hash.call(null,key1);
if((key1hash__8899 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__8899,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___8900 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__8899,key1,val1,added_leaf_QMARK___8900).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___8900);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__8901 = cljs.core.hash.call(null,key1);
if((key1hash__8901 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__8901,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___8902 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__8901,key1,val1,added_leaf_QMARK___8902).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___8902);
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
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__2311__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8903 = this;
var h__2194__auto____8904 = this__8903.__hash;
if(!((h__2194__auto____8904 == null)))
{return h__2194__auto____8904;
} else
{var h__2194__auto____8905 = cljs.core.hash_coll.call(null,coll);
this__8903.__hash = h__2194__auto____8905;
return h__2194__auto____8905;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8906 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__8907 = this;
var this__8908 = this;
return cljs.core.pr_str.call(null,this__8908);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__8909 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8910 = this;
if((this__8910.s == null))
{return cljs.core.PersistentVector.fromArray([(this__8910.nodes[this__8910.i]),(this__8910.nodes[(this__8910.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__8910.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8911 = this;
if((this__8911.s == null))
{return cljs.core.create_inode_seq.call(null,this__8911.nodes,(this__8911.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__8911.nodes,this__8911.i,cljs.core.next.call(null,this__8911.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8912 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8913 = this;
return (new cljs.core.NodeSeq(meta,this__8913.nodes,this__8913.i,this__8913.s,this__8913.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8914 = this;
return this__8914.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8915 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8915.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__8922 = nodes.length;
var j__8923 = i;
while(true){
if((j__8923 < len__8922))
{if(!(((nodes[j__8923]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__8923,null,null));
} else
{var temp__3971__auto____8924 = (nodes[(j__8923 + 1)]);
if(cljs.core.truth_(temp__3971__auto____8924))
{var node__8925 = temp__3971__auto____8924;
var temp__3971__auto____8926 = node__8925.inode_seq();
if(cljs.core.truth_(temp__3971__auto____8926))
{var node_seq__8927 = temp__3971__auto____8926;
return (new cljs.core.NodeSeq(null,nodes,(j__8923 + 2),node_seq__8927,null));
} else
{{
var G__8928 = (j__8923 + 2);
j__8923 = G__8928;
continue;
}
}
} else
{{
var G__8929 = (j__8923 + 2);
j__8923 = G__8929;
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
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__2311__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8930 = this;
var h__2194__auto____8931 = this__8930.__hash;
if(!((h__2194__auto____8931 == null)))
{return h__2194__auto____8931;
} else
{var h__2194__auto____8932 = cljs.core.hash_coll.call(null,coll);
this__8930.__hash = h__2194__auto____8932;
return h__2194__auto____8932;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8933 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__8934 = this;
var this__8935 = this;
return cljs.core.pr_str.call(null,this__8935);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__8936 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8937 = this;
return cljs.core.first.call(null,this__8937.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8938 = this;
return cljs.core.create_array_node_seq.call(null,null,this__8938.nodes,this__8938.i,cljs.core.next.call(null,this__8938.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8939 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8940 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__8940.nodes,this__8940.i,this__8940.s,this__8940.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8941 = this;
return this__8941.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8942 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8942.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__8949 = nodes.length;
var j__8950 = i;
while(true){
if((j__8950 < len__8949))
{var temp__3971__auto____8951 = (nodes[j__8950]);
if(cljs.core.truth_(temp__3971__auto____8951))
{var nj__8952 = temp__3971__auto____8951;
var temp__3971__auto____8953 = nj__8952.inode_seq();
if(cljs.core.truth_(temp__3971__auto____8953))
{var ns__8954 = temp__3971__auto____8953;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__8950 + 1),ns__8954,null));
} else
{{
var G__8955 = (j__8950 + 1);
j__8950 = G__8955;
continue;
}
}
} else
{{
var G__8956 = (j__8950 + 1);
j__8950 = G__8956;
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
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__2311__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8959 = this;
return (new cljs.core.TransientHashMap({},this__8959.root,this__8959.cnt,this__8959.has_nil_QMARK_,this__8959.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8960 = this;
var h__2194__auto____8961 = this__8960.__hash;
if(!((h__2194__auto____8961 == null)))
{return h__2194__auto____8961;
} else
{var h__2194__auto____8962 = cljs.core.hash_imap.call(null,coll);
this__8960.__hash = h__2194__auto____8962;
return h__2194__auto____8962;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8963 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8964 = this;
if((k == null))
{if(this__8964.has_nil_QMARK_)
{return this__8964.nil_val;
} else
{return not_found;
}
} else
{if((this__8964.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__8964.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8965 = this;
if((k == null))
{if((function (){var and__3822__auto____8966 = this__8965.has_nil_QMARK_;
if(and__3822__auto____8966)
{return (v === this__8965.nil_val);
} else
{return and__3822__auto____8966;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__8965.meta,((this__8965.has_nil_QMARK_)?this__8965.cnt:(this__8965.cnt + 1)),this__8965.root,true,v,null));
}
} else
{var added_leaf_QMARK___8967 = (new cljs.core.Box(false));
var new_root__8968 = (((this__8965.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__8965.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___8967);
if((new_root__8968 === this__8965.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__8965.meta,((added_leaf_QMARK___8967.val)?(this__8965.cnt + 1):this__8965.cnt),new_root__8968,this__8965.has_nil_QMARK_,this__8965.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8969 = this;
if((k == null))
{return this__8969.has_nil_QMARK_;
} else
{if((this__8969.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__8969.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__8992 = null;
var G__8992__2 = (function (this_sym8970,k){
var this__8972 = this;
var this_sym8970__8973 = this;
var coll__8974 = this_sym8970__8973;
return coll__8974.cljs$core$ILookup$_lookup$arity$2(coll__8974,k);
});
var G__8992__3 = (function (this_sym8971,k,not_found){
var this__8972 = this;
var this_sym8971__8975 = this;
var coll__8976 = this_sym8971__8975;
return coll__8976.cljs$core$ILookup$_lookup$arity$3(coll__8976,k,not_found);
});
G__8992 = function(this_sym8971,k,not_found){
switch(arguments.length){
case 2:
return G__8992__2.call(this,this_sym8971,k);
case 3:
return G__8992__3.call(this,this_sym8971,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8992;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym8957,args8958){
var this__8977 = this;
return this_sym8957.call.apply(this_sym8957,[this_sym8957].concat(args8958.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__8978 = this;
var init__8979 = ((this__8978.has_nil_QMARK_)?f.call(null,init,null,this__8978.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__8979))
{return cljs.core.deref.call(null,init__8979);
} else
{if(!((this__8978.root == null)))
{return this__8978.root.kv_reduce(f,init__8979);
} else
{if("\uFDD0'else")
{return init__8979;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8980 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__8981 = this;
var this__8982 = this;
return cljs.core.pr_str.call(null,this__8982);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8983 = this;
if((this__8983.cnt > 0))
{var s__8984 = ((!((this__8983.root == null)))?this__8983.root.inode_seq():null);
if(this__8983.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__8983.nil_val], true),s__8984);
} else
{return s__8984;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8985 = this;
return this__8985.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8986 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8987 = this;
return (new cljs.core.PersistentHashMap(meta,this__8987.cnt,this__8987.root,this__8987.has_nil_QMARK_,this__8987.nil_val,this__8987.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8988 = this;
return this__8988.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8989 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__8989.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8990 = this;
if((k == null))
{if(this__8990.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__8990.meta,(this__8990.cnt - 1),this__8990.root,false,null,null));
} else
{return coll;
}
} else
{if((this__8990.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__8991 = this__8990.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__8991 === this__8990.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__8990.meta,(this__8990.cnt - 1),new_root__8991,this__8990.has_nil_QMARK_,this__8990.nil_val,null));
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
var len__8993 = ks.length;
var i__8994 = 0;
var out__8995 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__8994 < len__8993))
{{
var G__8996 = (i__8994 + 1);
var G__8997 = cljs.core.assoc_BANG_.call(null,out__8995,(ks[i__8994]),(vs[i__8994]));
i__8994 = G__8996;
out__8995 = G__8997;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8995);
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
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__2311__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__8998 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8999 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__9000 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9001 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9002 = this;
if((k == null))
{if(this__9002.has_nil_QMARK_)
{return this__9002.nil_val;
} else
{return null;
}
} else
{if((this__9002.root == null))
{return null;
} else
{return this__9002.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9003 = this;
if((k == null))
{if(this__9003.has_nil_QMARK_)
{return this__9003.nil_val;
} else
{return not_found;
}
} else
{if((this__9003.root == null))
{return not_found;
} else
{return this__9003.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9004 = this;
if(this__9004.edit)
{return this__9004.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__9005 = this;
var tcoll__9006 = this;
if(this__9005.edit)
{if((function (){var G__9007__9008 = o;
if(G__9007__9008)
{if((function (){var or__3824__auto____9009 = (G__9007__9008.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____9009)
{return or__3824__auto____9009;
} else
{return G__9007__9008.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9007__9008.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9007__9008);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9007__9008);
}
})())
{return tcoll__9006.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__9010 = cljs.core.seq.call(null,o);
var tcoll__9011 = tcoll__9006;
while(true){
var temp__3971__auto____9012 = cljs.core.first.call(null,es__9010);
if(cljs.core.truth_(temp__3971__auto____9012))
{var e__9013 = temp__3971__auto____9012;
{
var G__9024 = cljs.core.next.call(null,es__9010);
var G__9025 = tcoll__9011.assoc_BANG_(cljs.core.key.call(null,e__9013),cljs.core.val.call(null,e__9013));
es__9010 = G__9024;
tcoll__9011 = G__9025;
continue;
}
} else
{return tcoll__9011;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__9014 = this;
var tcoll__9015 = this;
if(this__9014.edit)
{if((k == null))
{if((this__9014.nil_val === v))
{} else
{this__9014.nil_val = v;
}
if(this__9014.has_nil_QMARK_)
{} else
{this__9014.count = (this__9014.count + 1);
this__9014.has_nil_QMARK_ = true;
}
return tcoll__9015;
} else
{var added_leaf_QMARK___9016 = (new cljs.core.Box(false));
var node__9017 = (((this__9014.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9014.root).inode_assoc_BANG_(this__9014.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___9016);
if((node__9017 === this__9014.root))
{} else
{this__9014.root = node__9017;
}
if(added_leaf_QMARK___9016.val)
{this__9014.count = (this__9014.count + 1);
} else
{}
return tcoll__9015;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__9018 = this;
var tcoll__9019 = this;
if(this__9018.edit)
{if((k == null))
{if(this__9018.has_nil_QMARK_)
{this__9018.has_nil_QMARK_ = false;
this__9018.nil_val = null;
this__9018.count = (this__9018.count - 1);
return tcoll__9019;
} else
{return tcoll__9019;
}
} else
{if((this__9018.root == null))
{return tcoll__9019;
} else
{var removed_leaf_QMARK___9020 = (new cljs.core.Box(false));
var node__9021 = this__9018.root.inode_without_BANG_(this__9018.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___9020);
if((node__9021 === this__9018.root))
{} else
{this__9018.root = node__9021;
}
if(cljs.core.truth_((removed_leaf_QMARK___9020[0])))
{this__9018.count = (this__9018.count - 1);
} else
{}
return tcoll__9019;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__9022 = this;
var tcoll__9023 = this;
if(this__9022.edit)
{this__9022.edit = null;
return (new cljs.core.PersistentHashMap(null,this__9022.count,this__9022.root,this__9022.has_nil_QMARK_,this__9022.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__9028 = node;
var stack__9029 = stack;
while(true){
if(!((t__9028 == null)))
{{
var G__9030 = ((ascending_QMARK_)?t__9028.left:t__9028.right);
var G__9031 = cljs.core.conj.call(null,stack__9029,t__9028);
t__9028 = G__9030;
stack__9029 = G__9031;
continue;
}
} else
{return stack__9029;
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
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__2311__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9032 = this;
var h__2194__auto____9033 = this__9032.__hash;
if(!((h__2194__auto____9033 == null)))
{return h__2194__auto____9033;
} else
{var h__2194__auto____9034 = cljs.core.hash_coll.call(null,coll);
this__9032.__hash = h__2194__auto____9034;
return h__2194__auto____9034;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9035 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__9036 = this;
var this__9037 = this;
return cljs.core.pr_str.call(null,this__9037);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9038 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9039 = this;
if((this__9039.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__9039.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__9040 = this;
return cljs.core.peek.call(null,this__9040.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__9041 = this;
var t__9042 = cljs.core.first.call(null,this__9041.stack);
var next_stack__9043 = cljs.core.tree_map_seq_push.call(null,((this__9041.ascending_QMARK_)?t__9042.right:t__9042.left),cljs.core.next.call(null,this__9041.stack),this__9041.ascending_QMARK_);
if(!((next_stack__9043 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__9043,this__9041.ascending_QMARK_,(this__9041.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9044 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9045 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__9045.stack,this__9045.ascending_QMARK_,this__9045.cnt,this__9045.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9046 = this;
return this__9046.meta;
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
{if((function (){var and__3822__auto____9048 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____9048)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____9048;
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
{if((function (){var and__3822__auto____9050 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____9050)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____9050;
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
var init__9054 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__9054))
{return cljs.core.deref.call(null,init__9054);
} else
{var init__9055 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__9054):init__9054);
if(cljs.core.reduced_QMARK_.call(null,init__9055))
{return cljs.core.deref.call(null,init__9055);
} else
{var init__9056 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__9055):init__9055);
if(cljs.core.reduced_QMARK_.call(null,init__9056))
{return cljs.core.deref.call(null,init__9056);
} else
{return init__9056;
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
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__2311__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9059 = this;
var h__2194__auto____9060 = this__9059.__hash;
if(!((h__2194__auto____9060 == null)))
{return h__2194__auto____9060;
} else
{var h__2194__auto____9061 = cljs.core.hash_coll.call(null,coll);
this__9059.__hash = h__2194__auto____9061;
return h__2194__auto____9061;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9062 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9063 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9064 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__9064.key,this__9064.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__9112 = null;
var G__9112__2 = (function (this_sym9065,k){
var this__9067 = this;
var this_sym9065__9068 = this;
var node__9069 = this_sym9065__9068;
return node__9069.cljs$core$ILookup$_lookup$arity$2(node__9069,k);
});
var G__9112__3 = (function (this_sym9066,k,not_found){
var this__9067 = this;
var this_sym9066__9070 = this;
var node__9071 = this_sym9066__9070;
return node__9071.cljs$core$ILookup$_lookup$arity$3(node__9071,k,not_found);
});
G__9112 = function(this_sym9066,k,not_found){
switch(arguments.length){
case 2:
return G__9112__2.call(this,this_sym9066,k);
case 3:
return G__9112__3.call(this,this_sym9066,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9112;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym9057,args9058){
var this__9072 = this;
return this_sym9057.call.apply(this_sym9057,[this_sym9057].concat(args9058.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9073 = this;
return cljs.core.PersistentVector.fromArray([this__9073.key,this__9073.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9074 = this;
return this__9074.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9075 = this;
return this__9075.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__9076 = this;
var node__9077 = this;
return ins.balance_right(node__9077);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__9078 = this;
var node__9079 = this;
return (new cljs.core.RedNode(this__9078.key,this__9078.val,this__9078.left,this__9078.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__9080 = this;
var node__9081 = this;
return cljs.core.balance_right_del.call(null,this__9080.key,this__9080.val,this__9080.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__9082 = this;
var node__9083 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__9084 = this;
var node__9085 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__9085,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__9086 = this;
var node__9087 = this;
return cljs.core.balance_left_del.call(null,this__9086.key,this__9086.val,del,this__9086.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__9088 = this;
var node__9089 = this;
return ins.balance_left(node__9089);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__9090 = this;
var node__9091 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__9091,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__9113 = null;
var G__9113__0 = (function (){
var this__9092 = this;
var this__9094 = this;
return cljs.core.pr_str.call(null,this__9094);
});
G__9113 = function(){
switch(arguments.length){
case 0:
return G__9113__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9113;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__9095 = this;
var node__9096 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9096,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__9097 = this;
var node__9098 = this;
return node__9098;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9099 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9100 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9101 = this;
return cljs.core.list.call(null,this__9101.key,this__9101.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9102 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9103 = this;
return this__9103.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9104 = this;
return cljs.core.PersistentVector.fromArray([this__9104.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9105 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__9105.key,this__9105.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9106 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9107 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9107.key,this__9107.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9108 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9109 = this;
if((n === 0))
{return this__9109.key;
} else
{if((n === 1))
{return this__9109.val;
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
var this__9110 = this;
if((n === 0))
{return this__9110.key;
} else
{if((n === 1))
{return this__9110.val;
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
var this__9111 = this;
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
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__2311__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9116 = this;
var h__2194__auto____9117 = this__9116.__hash;
if(!((h__2194__auto____9117 == null)))
{return h__2194__auto____9117;
} else
{var h__2194__auto____9118 = cljs.core.hash_coll.call(null,coll);
this__9116.__hash = h__2194__auto____9118;
return h__2194__auto____9118;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9119 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9120 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9121 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__9121.key,this__9121.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__9169 = null;
var G__9169__2 = (function (this_sym9122,k){
var this__9124 = this;
var this_sym9122__9125 = this;
var node__9126 = this_sym9122__9125;
return node__9126.cljs$core$ILookup$_lookup$arity$2(node__9126,k);
});
var G__9169__3 = (function (this_sym9123,k,not_found){
var this__9124 = this;
var this_sym9123__9127 = this;
var node__9128 = this_sym9123__9127;
return node__9128.cljs$core$ILookup$_lookup$arity$3(node__9128,k,not_found);
});
G__9169 = function(this_sym9123,k,not_found){
switch(arguments.length){
case 2:
return G__9169__2.call(this,this_sym9123,k);
case 3:
return G__9169__3.call(this,this_sym9123,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9169;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym9114,args9115){
var this__9129 = this;
return this_sym9114.call.apply(this_sym9114,[this_sym9114].concat(args9115.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9130 = this;
return cljs.core.PersistentVector.fromArray([this__9130.key,this__9130.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9131 = this;
return this__9131.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9132 = this;
return this__9132.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__9133 = this;
var node__9134 = this;
return (new cljs.core.RedNode(this__9133.key,this__9133.val,this__9133.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__9135 = this;
var node__9136 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__9137 = this;
var node__9138 = this;
return (new cljs.core.RedNode(this__9137.key,this__9137.val,this__9137.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__9139 = this;
var node__9140 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__9141 = this;
var node__9142 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__9142,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__9143 = this;
var node__9144 = this;
return (new cljs.core.RedNode(this__9143.key,this__9143.val,del,this__9143.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__9145 = this;
var node__9146 = this;
return (new cljs.core.RedNode(this__9145.key,this__9145.val,ins,this__9145.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__9147 = this;
var node__9148 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9147.left))
{return (new cljs.core.RedNode(this__9147.key,this__9147.val,this__9147.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__9147.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9147.right))
{return (new cljs.core.RedNode(this__9147.right.key,this__9147.right.val,(new cljs.core.BlackNode(this__9147.key,this__9147.val,this__9147.left,this__9147.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__9147.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__9148,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__9170 = null;
var G__9170__0 = (function (){
var this__9149 = this;
var this__9151 = this;
return cljs.core.pr_str.call(null,this__9151);
});
G__9170 = function(){
switch(arguments.length){
case 0:
return G__9170__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9170;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__9152 = this;
var node__9153 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9152.right))
{return (new cljs.core.RedNode(this__9152.key,this__9152.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9152.left,null)),this__9152.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9152.left))
{return (new cljs.core.RedNode(this__9152.left.key,this__9152.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9152.left.left,null)),(new cljs.core.BlackNode(this__9152.key,this__9152.val,this__9152.left.right,this__9152.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9153,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__9154 = this;
var node__9155 = this;
return (new cljs.core.BlackNode(this__9154.key,this__9154.val,this__9154.left,this__9154.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9156 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9157 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9158 = this;
return cljs.core.list.call(null,this__9158.key,this__9158.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9159 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9160 = this;
return this__9160.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9161 = this;
return cljs.core.PersistentVector.fromArray([this__9161.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9162 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__9162.key,this__9162.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9163 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9164 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9164.key,this__9164.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9165 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9166 = this;
if((n === 0))
{return this__9166.key;
} else
{if((n === 1))
{return this__9166.val;
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
var this__9167 = this;
if((n === 0))
{return this__9167.key;
} else
{if((n === 1))
{return this__9167.val;
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
var this__9168 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__9174 = comp.call(null,k,tree.key);
if((c__9174 === 0))
{(found[0] = tree);
return null;
} else
{if((c__9174 < 0))
{var ins__9175 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__9175 == null)))
{return tree.add_left(ins__9175);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__9176 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__9176 == null)))
{return tree.add_right(ins__9176);
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
{var app__9179 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9179))
{return (new cljs.core.RedNode(app__9179.key,app__9179.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__9179.left,null)),(new cljs.core.RedNode(right.key,right.val,app__9179.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__9179,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__9180 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9180))
{return (new cljs.core.RedNode(app__9180.key,app__9180.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__9180.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__9180.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__9180,right.right,null)));
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
{var c__9186 = comp.call(null,k,tree.key);
if((c__9186 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__9186 < 0))
{var del__9187 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____9188 = !((del__9187 == null));
if(or__3824__auto____9188)
{return or__3824__auto____9188;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__9187,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__9187,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__9189 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____9190 = !((del__9189 == null));
if(or__3824__auto____9190)
{return or__3824__auto____9190;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__9189);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__9189,null));
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
var tk__9193 = tree.key;
var c__9194 = comp.call(null,k,tk__9193);
if((c__9194 === 0))
{return tree.replace(tk__9193,v,tree.left,tree.right);
} else
{if((c__9194 < 0))
{return tree.replace(tk__9193,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__9193,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__2311__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9197 = this;
var h__2194__auto____9198 = this__9197.__hash;
if(!((h__2194__auto____9198 == null)))
{return h__2194__auto____9198;
} else
{var h__2194__auto____9199 = cljs.core.hash_imap.call(null,coll);
this__9197.__hash = h__2194__auto____9199;
return h__2194__auto____9199;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9200 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9201 = this;
var n__9202 = coll.entry_at(k);
if(!((n__9202 == null)))
{return n__9202.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9203 = this;
var found__9204 = [null];
var t__9205 = cljs.core.tree_map_add.call(null,this__9203.comp,this__9203.tree,k,v,found__9204);
if((t__9205 == null))
{var found_node__9206 = cljs.core.nth.call(null,found__9204,0);
if(cljs.core._EQ_.call(null,v,found_node__9206.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9203.comp,cljs.core.tree_map_replace.call(null,this__9203.comp,this__9203.tree,k,v),this__9203.cnt,this__9203.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9203.comp,t__9205.blacken(),(this__9203.cnt + 1),this__9203.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9207 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__9241 = null;
var G__9241__2 = (function (this_sym9208,k){
var this__9210 = this;
var this_sym9208__9211 = this;
var coll__9212 = this_sym9208__9211;
return coll__9212.cljs$core$ILookup$_lookup$arity$2(coll__9212,k);
});
var G__9241__3 = (function (this_sym9209,k,not_found){
var this__9210 = this;
var this_sym9209__9213 = this;
var coll__9214 = this_sym9209__9213;
return coll__9214.cljs$core$ILookup$_lookup$arity$3(coll__9214,k,not_found);
});
G__9241 = function(this_sym9209,k,not_found){
switch(arguments.length){
case 2:
return G__9241__2.call(this,this_sym9209,k);
case 3:
return G__9241__3.call(this,this_sym9209,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9241;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym9195,args9196){
var this__9215 = this;
return this_sym9195.call.apply(this_sym9195,[this_sym9195].concat(args9196.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9216 = this;
if(!((this__9216.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__9216.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9217 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9218 = this;
if((this__9218.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9218.tree,false,this__9218.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__9219 = this;
var this__9220 = this;
return cljs.core.pr_str.call(null,this__9220);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__9221 = this;
var coll__9222 = this;
var t__9223 = this__9221.tree;
while(true){
if(!((t__9223 == null)))
{var c__9224 = this__9221.comp.call(null,k,t__9223.key);
if((c__9224 === 0))
{return t__9223;
} else
{if((c__9224 < 0))
{{
var G__9242 = t__9223.left;
t__9223 = G__9242;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__9243 = t__9223.right;
t__9223 = G__9243;
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
var this__9225 = this;
if((this__9225.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9225.tree,ascending_QMARK_,this__9225.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9226 = this;
if((this__9226.cnt > 0))
{var stack__9227 = null;
var t__9228 = this__9226.tree;
while(true){
if(!((t__9228 == null)))
{var c__9229 = this__9226.comp.call(null,k,t__9228.key);
if((c__9229 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__9227,t__9228),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__9229 < 0))
{{
var G__9244 = cljs.core.conj.call(null,stack__9227,t__9228);
var G__9245 = t__9228.left;
stack__9227 = G__9244;
t__9228 = G__9245;
continue;
}
} else
{{
var G__9246 = stack__9227;
var G__9247 = t__9228.right;
stack__9227 = G__9246;
t__9228 = G__9247;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__9229 > 0))
{{
var G__9248 = cljs.core.conj.call(null,stack__9227,t__9228);
var G__9249 = t__9228.right;
stack__9227 = G__9248;
t__9228 = G__9249;
continue;
}
} else
{{
var G__9250 = stack__9227;
var G__9251 = t__9228.left;
stack__9227 = G__9250;
t__9228 = G__9251;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__9227 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__9227,ascending_QMARK_,-1,null));
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
var this__9230 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9231 = this;
return this__9231.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9232 = this;
if((this__9232.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9232.tree,true,this__9232.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9233 = this;
return this__9233.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9234 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9235 = this;
return (new cljs.core.PersistentTreeMap(this__9235.comp,this__9235.tree,this__9235.cnt,meta,this__9235.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9236 = this;
return this__9236.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9237 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__9237.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9238 = this;
var found__9239 = [null];
var t__9240 = cljs.core.tree_map_remove.call(null,this__9238.comp,this__9238.tree,k,found__9239);
if((t__9240 == null))
{if((cljs.core.nth.call(null,found__9239,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9238.comp,null,0,this__9238.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9238.comp,t__9240.blacken(),(this__9238.cnt - 1),this__9238.meta,null));
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
var in__9254 = cljs.core.seq.call(null,keyvals);
var out__9255 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__9254)
{{
var G__9256 = cljs.core.nnext.call(null,in__9254);
var G__9257 = cljs.core.assoc_BANG_.call(null,out__9255,cljs.core.first.call(null,in__9254),cljs.core.second.call(null,in__9254));
in__9254 = G__9256;
out__9255 = G__9257;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9255);
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
hash_map.cljs$lang$applyTo = (function (arglist__9258){
var keyvals = cljs.core.seq(arglist__9258);;
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
array_map.cljs$lang$applyTo = (function (arglist__9259){
var keyvals = cljs.core.seq(arglist__9259);;
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
var ks__9263 = [];
var obj__9264 = {};
var kvs__9265 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__9265)
{ks__9263.push(cljs.core.first.call(null,kvs__9265));
(obj__9264[cljs.core.first.call(null,kvs__9265)] = cljs.core.second.call(null,kvs__9265));
{
var G__9266 = cljs.core.nnext.call(null,kvs__9265);
kvs__9265 = G__9266;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__9263,obj__9264);
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
obj_map.cljs$lang$applyTo = (function (arglist__9267){
var keyvals = cljs.core.seq(arglist__9267);;
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
var in__9270 = cljs.core.seq.call(null,keyvals);
var out__9271 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__9270)
{{
var G__9272 = cljs.core.nnext.call(null,in__9270);
var G__9273 = cljs.core.assoc.call(null,out__9271,cljs.core.first.call(null,in__9270),cljs.core.second.call(null,in__9270));
in__9270 = G__9272;
out__9271 = G__9273;
continue;
}
} else
{return out__9271;
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
sorted_map.cljs$lang$applyTo = (function (arglist__9274){
var keyvals = cljs.core.seq(arglist__9274);;
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
var in__9277 = cljs.core.seq.call(null,keyvals);
var out__9278 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__9277)
{{
var G__9279 = cljs.core.nnext.call(null,in__9277);
var G__9280 = cljs.core.assoc.call(null,out__9278,cljs.core.first.call(null,in__9277),cljs.core.second.call(null,in__9277));
in__9277 = G__9279;
out__9278 = G__9280;
continue;
}
} else
{return out__9278;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__9281){
var comparator = cljs.core.first(arglist__9281);
var keyvals = cljs.core.rest(arglist__9281);
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
{return cljs.core.reduce.call(null,(function (p1__9282_SHARP_,p2__9283_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____9285 = p1__9282_SHARP_;
if(cljs.core.truth_(or__3824__auto____9285))
{return or__3824__auto____9285;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__9283_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__9286){
var maps = cljs.core.seq(arglist__9286);;
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
{var merge_entry__9294 = (function (m,e){
var k__9292 = cljs.core.first.call(null,e);
var v__9293 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__9292))
{return cljs.core.assoc.call(null,m,k__9292,f.call(null,cljs.core._lookup.call(null,m,k__9292,null),v__9293));
} else
{return cljs.core.assoc.call(null,m,k__9292,v__9293);
}
});
var merge2__9296 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__9294,(function (){var or__3824__auto____9295 = m1;
if(cljs.core.truth_(or__3824__auto____9295))
{return or__3824__auto____9295;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__9296,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__9297){
var f = cljs.core.first(arglist__9297);
var maps = cljs.core.rest(arglist__9297);
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
var ret__9302 = cljs.core.ObjMap.EMPTY;
var keys__9303 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__9303)
{var key__9304 = cljs.core.first.call(null,keys__9303);
var entry__9305 = cljs.core._lookup.call(null,map,key__9304,"\uFDD0'cljs.core/not-found");
{
var G__9306 = ((cljs.core.not_EQ_.call(null,entry__9305,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret__9302,key__9304,entry__9305):ret__9302);
var G__9307 = cljs.core.next.call(null,keys__9303);
ret__9302 = G__9306;
keys__9303 = G__9307;
continue;
}
} else
{return ret__9302;
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
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__2311__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9311 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__9311.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9312 = this;
var h__2194__auto____9313 = this__9312.__hash;
if(!((h__2194__auto____9313 == null)))
{return h__2194__auto____9313;
} else
{var h__2194__auto____9314 = cljs.core.hash_iset.call(null,coll);
this__9312.__hash = h__2194__auto____9314;
return h__2194__auto____9314;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9315 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9316 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9316.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__9337 = null;
var G__9337__2 = (function (this_sym9317,k){
var this__9319 = this;
var this_sym9317__9320 = this;
var coll__9321 = this_sym9317__9320;
return coll__9321.cljs$core$ILookup$_lookup$arity$2(coll__9321,k);
});
var G__9337__3 = (function (this_sym9318,k,not_found){
var this__9319 = this;
var this_sym9318__9322 = this;
var coll__9323 = this_sym9318__9322;
return coll__9323.cljs$core$ILookup$_lookup$arity$3(coll__9323,k,not_found);
});
G__9337 = function(this_sym9318,k,not_found){
switch(arguments.length){
case 2:
return G__9337__2.call(this,this_sym9318,k);
case 3:
return G__9337__3.call(this,this_sym9318,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9337;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym9309,args9310){
var this__9324 = this;
return this_sym9309.call.apply(this_sym9309,[this_sym9309].concat(args9310.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9325 = this;
return (new cljs.core.PersistentHashSet(this__9325.meta,cljs.core.assoc.call(null,this__9325.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__9326 = this;
var this__9327 = this;
return cljs.core.pr_str.call(null,this__9327);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9328 = this;
return cljs.core.keys.call(null,this__9328.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9329 = this;
return (new cljs.core.PersistentHashSet(this__9329.meta,cljs.core.dissoc.call(null,this__9329.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9330 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9331 = this;
var and__3822__auto____9332 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9332)
{var and__3822__auto____9333 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9333)
{return cljs.core.every_QMARK_.call(null,(function (p1__9308_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9308_SHARP_);
}),other);
} else
{return and__3822__auto____9333;
}
} else
{return and__3822__auto____9332;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9334 = this;
return (new cljs.core.PersistentHashSet(meta,this__9334.hash_map,this__9334.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9335 = this;
return this__9335.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9336 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__9336.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__9338 = cljs.core.count.call(null,items);
var i__9339 = 0;
var out__9340 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__9339 < len__9338))
{{
var G__9341 = (i__9339 + 1);
var G__9342 = cljs.core.conj_BANG_.call(null,out__9340,(items[i__9339]));
i__9339 = G__9341;
out__9340 = G__9342;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9340);
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
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__2311__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__9360 = null;
var G__9360__2 = (function (this_sym9346,k){
var this__9348 = this;
var this_sym9346__9349 = this;
var tcoll__9350 = this_sym9346__9349;
if((cljs.core._lookup.call(null,this__9348.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__9360__3 = (function (this_sym9347,k,not_found){
var this__9348 = this;
var this_sym9347__9351 = this;
var tcoll__9352 = this_sym9347__9351;
if((cljs.core._lookup.call(null,this__9348.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__9360 = function(this_sym9347,k,not_found){
switch(arguments.length){
case 2:
return G__9360__2.call(this,this_sym9347,k);
case 3:
return G__9360__3.call(this,this_sym9347,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9360;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym9344,args9345){
var this__9353 = this;
return this_sym9344.call.apply(this_sym9344,[this_sym9344].concat(args9345.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__9354 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__9355 = this;
if((cljs.core._lookup.call(null,this__9355.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9356 = this;
return cljs.core.count.call(null,this__9356.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__9357 = this;
this__9357.transient_map = cljs.core.dissoc_BANG_.call(null,this__9357.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9358 = this;
this__9358.transient_map = cljs.core.assoc_BANG_.call(null,this__9358.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9359 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__9359.transient_map),null));
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
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__2311__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9363 = this;
var h__2194__auto____9364 = this__9363.__hash;
if(!((h__2194__auto____9364 == null)))
{return h__2194__auto____9364;
} else
{var h__2194__auto____9365 = cljs.core.hash_iset.call(null,coll);
this__9363.__hash = h__2194__auto____9365;
return h__2194__auto____9365;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9366 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9367 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9367.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__9393 = null;
var G__9393__2 = (function (this_sym9368,k){
var this__9370 = this;
var this_sym9368__9371 = this;
var coll__9372 = this_sym9368__9371;
return coll__9372.cljs$core$ILookup$_lookup$arity$2(coll__9372,k);
});
var G__9393__3 = (function (this_sym9369,k,not_found){
var this__9370 = this;
var this_sym9369__9373 = this;
var coll__9374 = this_sym9369__9373;
return coll__9374.cljs$core$ILookup$_lookup$arity$3(coll__9374,k,not_found);
});
G__9393 = function(this_sym9369,k,not_found){
switch(arguments.length){
case 2:
return G__9393__2.call(this,this_sym9369,k);
case 3:
return G__9393__3.call(this,this_sym9369,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9393;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym9361,args9362){
var this__9375 = this;
return this_sym9361.call.apply(this_sym9361,[this_sym9361].concat(args9362.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9376 = this;
return (new cljs.core.PersistentTreeSet(this__9376.meta,cljs.core.assoc.call(null,this__9376.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9377 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__9377.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__9378 = this;
var this__9379 = this;
return cljs.core.pr_str.call(null,this__9379);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__9380 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__9380.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9381 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__9381.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__9382 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9383 = this;
return cljs.core._comparator.call(null,this__9383.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9384 = this;
return cljs.core.keys.call(null,this__9384.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9385 = this;
return (new cljs.core.PersistentTreeSet(this__9385.meta,cljs.core.dissoc.call(null,this__9385.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9386 = this;
return cljs.core.count.call(null,this__9386.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9387 = this;
var and__3822__auto____9388 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9388)
{var and__3822__auto____9389 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9389)
{return cljs.core.every_QMARK_.call(null,(function (p1__9343_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9343_SHARP_);
}),other);
} else
{return and__3822__auto____9389;
}
} else
{return and__3822__auto____9388;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9390 = this;
return (new cljs.core.PersistentTreeSet(meta,this__9390.tree_map,this__9390.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9391 = this;
return this__9391.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9392 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__9392.meta);
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
var G__9398__delegate = function (keys){
var in__9396 = cljs.core.seq.call(null,keys);
var out__9397 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__9396))
{{
var G__9399 = cljs.core.next.call(null,in__9396);
var G__9400 = cljs.core.conj_BANG_.call(null,out__9397,cljs.core.first.call(null,in__9396));
in__9396 = G__9399;
out__9397 = G__9400;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9397);
}
break;
}
};
var G__9398 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9398__delegate.call(this, keys);
};
G__9398.cljs$lang$maxFixedArity = 0;
G__9398.cljs$lang$applyTo = (function (arglist__9401){
var keys = cljs.core.seq(arglist__9401);;
return G__9398__delegate(keys);
});
G__9398.cljs$lang$arity$variadic = G__9398__delegate;
return G__9398;
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
sorted_set.cljs$lang$applyTo = (function (arglist__9402){
var keys = cljs.core.seq(arglist__9402);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__9404){
var comparator = cljs.core.first(arglist__9404);
var keys = cljs.core.rest(arglist__9404);
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
{var n__9410 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____9411 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____9411))
{var e__9412 = temp__3971__auto____9411;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__9412));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__9410,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__9403_SHARP_){
var temp__3971__auto____9413 = cljs.core.find.call(null,smap,p1__9403_SHARP_);
if(cljs.core.truth_(temp__3971__auto____9413))
{var e__9414 = temp__3971__auto____9413;
return cljs.core.second.call(null,e__9414);
} else
{return p1__9403_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__9444 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__9437,seen){
while(true){
var vec__9438__9439 = p__9437;
var f__9440 = cljs.core.nth.call(null,vec__9438__9439,0,null);
var xs__9441 = vec__9438__9439;
var temp__3974__auto____9442 = cljs.core.seq.call(null,xs__9441);
if(temp__3974__auto____9442)
{var s__9443 = temp__3974__auto____9442;
if(cljs.core.contains_QMARK_.call(null,seen,f__9440))
{{
var G__9445 = cljs.core.rest.call(null,s__9443);
var G__9446 = seen;
p__9437 = G__9445;
seen = G__9446;
continue;
}
} else
{return cljs.core.cons.call(null,f__9440,step.call(null,cljs.core.rest.call(null,s__9443),cljs.core.conj.call(null,seen,f__9440)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__9444.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__9449 = cljs.core.PersistentVector.EMPTY;
var s__9450 = s;
while(true){
if(cljs.core.next.call(null,s__9450))
{{
var G__9451 = cljs.core.conj.call(null,ret__9449,cljs.core.first.call(null,s__9450));
var G__9452 = cljs.core.next.call(null,s__9450);
ret__9449 = G__9451;
s__9450 = G__9452;
continue;
}
} else
{return cljs.core.seq.call(null,ret__9449);
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
{if((function (){var or__3824__auto____9455 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9455)
{return or__3824__auto____9455;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9456 = x.lastIndexOf("/");
if((i__9456 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__9456 + 1));
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
if((function (){var or__3824__auto____9459 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9459)
{return or__3824__auto____9459;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9460 = x.lastIndexOf("/");
if((i__9460 > -1))
{return cljs.core.subs.call(null,x,2,i__9460);
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
var map__9467 = cljs.core.ObjMap.EMPTY;
var ks__9468 = cljs.core.seq.call(null,keys);
var vs__9469 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____9470 = ks__9468;
if(and__3822__auto____9470)
{return vs__9469;
} else
{return and__3822__auto____9470;
}
})())
{{
var G__9471 = cljs.core.assoc.call(null,map__9467,cljs.core.first.call(null,ks__9468),cljs.core.first.call(null,vs__9469));
var G__9472 = cljs.core.next.call(null,ks__9468);
var G__9473 = cljs.core.next.call(null,vs__9469);
map__9467 = G__9471;
ks__9468 = G__9472;
vs__9469 = G__9473;
continue;
}
} else
{return map__9467;
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
var G__9476__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9461_SHARP_,p2__9462_SHARP_){
return max_key.call(null,k,p1__9461_SHARP_,p2__9462_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__9476 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9476__delegate.call(this, k, x, y, more);
};
G__9476.cljs$lang$maxFixedArity = 3;
G__9476.cljs$lang$applyTo = (function (arglist__9477){
var k = cljs.core.first(arglist__9477);
var x = cljs.core.first(cljs.core.next(arglist__9477));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9477)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9477)));
return G__9476__delegate(k, x, y, more);
});
G__9476.cljs$lang$arity$variadic = G__9476__delegate;
return G__9476;
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
var G__9478__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9474_SHARP_,p2__9475_SHARP_){
return min_key.call(null,k,p1__9474_SHARP_,p2__9475_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__9478 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9478__delegate.call(this, k, x, y, more);
};
G__9478.cljs$lang$maxFixedArity = 3;
G__9478.cljs$lang$applyTo = (function (arglist__9479){
var k = cljs.core.first(arglist__9479);
var x = cljs.core.first(cljs.core.next(arglist__9479));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9479)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9479)));
return G__9478__delegate(k, x, y, more);
});
G__9478.cljs$lang$arity$variadic = G__9478__delegate;
return G__9478;
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
var temp__3974__auto____9482 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9482)
{var s__9483 = temp__3974__auto____9482;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__9483),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__9483)));
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
var temp__3974__auto____9486 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9486)
{var s__9487 = temp__3974__auto____9486;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__9487))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9487),take_while.call(null,pred,cljs.core.rest.call(null,s__9487)));
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
var comp__9489 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__9489.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__9501 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____9502 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____9502))
{var vec__9503__9504 = temp__3974__auto____9502;
var e__9505 = cljs.core.nth.call(null,vec__9503__9504,0,null);
var s__9506 = vec__9503__9504;
if(cljs.core.truth_(include__9501.call(null,e__9505)))
{return s__9506;
} else
{return cljs.core.next.call(null,s__9506);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9501,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9507 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____9507))
{var vec__9508__9509 = temp__3974__auto____9507;
var e__9510 = cljs.core.nth.call(null,vec__9508__9509,0,null);
var s__9511 = vec__9508__9509;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__9510))?s__9511:cljs.core.next.call(null,s__9511)));
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
var include__9523 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____9524 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____9524))
{var vec__9525__9526 = temp__3974__auto____9524;
var e__9527 = cljs.core.nth.call(null,vec__9525__9526,0,null);
var s__9528 = vec__9525__9526;
if(cljs.core.truth_(include__9523.call(null,e__9527)))
{return s__9528;
} else
{return cljs.core.next.call(null,s__9528);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9523,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9529 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____9529))
{var vec__9530__9531 = temp__3974__auto____9529;
var e__9532 = cljs.core.nth.call(null,vec__9530__9531,0,null);
var s__9533 = vec__9530__9531;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__9532))?s__9533:cljs.core.next.call(null,s__9533)));
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
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__2311__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__9534 = this;
var h__2194__auto____9535 = this__9534.__hash;
if(!((h__2194__auto____9535 == null)))
{return h__2194__auto____9535;
} else
{var h__2194__auto____9536 = cljs.core.hash_coll.call(null,rng);
this__9534.__hash = h__2194__auto____9536;
return h__2194__auto____9536;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__9537 = this;
if((this__9537.step > 0))
{if(((this__9537.start + this__9537.step) < this__9537.end))
{return (new cljs.core.Range(this__9537.meta,(this__9537.start + this__9537.step),this__9537.end,this__9537.step,null));
} else
{return null;
}
} else
{if(((this__9537.start + this__9537.step) > this__9537.end))
{return (new cljs.core.Range(this__9537.meta,(this__9537.start + this__9537.step),this__9537.end,this__9537.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__9538 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__9539 = this;
var this__9540 = this;
return cljs.core.pr_str.call(null,this__9540);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__9541 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__9542 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__9543 = this;
if((this__9543.step > 0))
{if((this__9543.start < this__9543.end))
{return rng;
} else
{return null;
}
} else
{if((this__9543.start > this__9543.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__9544 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__9544.end - this__9544.start) / this__9544.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__9545 = this;
return this__9545.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__9546 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__9546.meta,(this__9546.start + this__9546.step),this__9546.end,this__9546.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__9547 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__9548 = this;
return (new cljs.core.Range(meta,this__9548.start,this__9548.end,this__9548.step,this__9548.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__9549 = this;
return this__9549.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__9550 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9550.start + (n * this__9550.step));
} else
{if((function (){var and__3822__auto____9551 = (this__9550.start > this__9550.end);
if(and__3822__auto____9551)
{return (this__9550.step === 0);
} else
{return and__3822__auto____9551;
}
})())
{return this__9550.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__9552 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9552.start + (n * this__9552.step));
} else
{if((function (){var and__3822__auto____9553 = (this__9552.start > this__9552.end);
if(and__3822__auto____9553)
{return (this__9552.step === 0);
} else
{return and__3822__auto____9553;
}
})())
{return this__9552.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__9554 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9554.meta);
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
var temp__3974__auto____9557 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9557)
{var s__9558 = temp__3974__auto____9557;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__9558),take_nth.call(null,n,cljs.core.drop.call(null,n,s__9558)));
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
var temp__3974__auto____9565 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9565)
{var s__9566 = temp__3974__auto____9565;
var fst__9567 = cljs.core.first.call(null,s__9566);
var fv__9568 = f.call(null,fst__9567);
var run__9569 = cljs.core.cons.call(null,fst__9567,cljs.core.take_while.call(null,(function (p1__9559_SHARP_){
return cljs.core._EQ_.call(null,fv__9568,f.call(null,p1__9559_SHARP_));
}),cljs.core.next.call(null,s__9566)));
return cljs.core.cons.call(null,run__9569,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__9569),s__9566))));
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
var temp__3971__auto____9584 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____9584)
{var s__9585 = temp__3971__auto____9584;
return reductions.call(null,f,cljs.core.first.call(null,s__9585),cljs.core.rest.call(null,s__9585));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9586 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9586)
{var s__9587 = temp__3974__auto____9586;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__9587)),cljs.core.rest.call(null,s__9587));
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
var G__9590 = null;
var G__9590__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__9590__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__9590__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__9590__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__9590__4 = (function() { 
var G__9591__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__9591 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9591__delegate.call(this, x, y, z, args);
};
G__9591.cljs$lang$maxFixedArity = 3;
G__9591.cljs$lang$applyTo = (function (arglist__9592){
var x = cljs.core.first(arglist__9592);
var y = cljs.core.first(cljs.core.next(arglist__9592));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9592)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9592)));
return G__9591__delegate(x, y, z, args);
});
G__9591.cljs$lang$arity$variadic = G__9591__delegate;
return G__9591;
})()
;
G__9590 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9590__0.call(this);
case 1:
return G__9590__1.call(this,x);
case 2:
return G__9590__2.call(this,x,y);
case 3:
return G__9590__3.call(this,x,y,z);
default:
return G__9590__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9590.cljs$lang$maxFixedArity = 3;
G__9590.cljs$lang$applyTo = G__9590__4.cljs$lang$applyTo;
return G__9590;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__9593 = null;
var G__9593__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__9593__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__9593__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__9593__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__9593__4 = (function() { 
var G__9594__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__9594 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9594__delegate.call(this, x, y, z, args);
};
G__9594.cljs$lang$maxFixedArity = 3;
G__9594.cljs$lang$applyTo = (function (arglist__9595){
var x = cljs.core.first(arglist__9595);
var y = cljs.core.first(cljs.core.next(arglist__9595));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9595)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9595)));
return G__9594__delegate(x, y, z, args);
});
G__9594.cljs$lang$arity$variadic = G__9594__delegate;
return G__9594;
})()
;
G__9593 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9593__0.call(this);
case 1:
return G__9593__1.call(this,x);
case 2:
return G__9593__2.call(this,x,y);
case 3:
return G__9593__3.call(this,x,y,z);
default:
return G__9593__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9593.cljs$lang$maxFixedArity = 3;
G__9593.cljs$lang$applyTo = G__9593__4.cljs$lang$applyTo;
return G__9593;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__9596 = null;
var G__9596__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__9596__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__9596__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__9596__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__9596__4 = (function() { 
var G__9597__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__9597 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9597__delegate.call(this, x, y, z, args);
};
G__9597.cljs$lang$maxFixedArity = 3;
G__9597.cljs$lang$applyTo = (function (arglist__9598){
var x = cljs.core.first(arglist__9598);
var y = cljs.core.first(cljs.core.next(arglist__9598));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9598)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9598)));
return G__9597__delegate(x, y, z, args);
});
G__9597.cljs$lang$arity$variadic = G__9597__delegate;
return G__9597;
})()
;
G__9596 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9596__0.call(this);
case 1:
return G__9596__1.call(this,x);
case 2:
return G__9596__2.call(this,x,y);
case 3:
return G__9596__3.call(this,x,y,z);
default:
return G__9596__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9596.cljs$lang$maxFixedArity = 3;
G__9596.cljs$lang$applyTo = G__9596__4.cljs$lang$applyTo;
return G__9596;
})()
});
var juxt__4 = (function() { 
var G__9599__delegate = function (f,g,h,fs){
var fs__9589 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__9600 = null;
var G__9600__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__9570_SHARP_,p2__9571_SHARP_){
return cljs.core.conj.call(null,p1__9570_SHARP_,p2__9571_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__9589);
});
var G__9600__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__9572_SHARP_,p2__9573_SHARP_){
return cljs.core.conj.call(null,p1__9572_SHARP_,p2__9573_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__9589);
});
var G__9600__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__9574_SHARP_,p2__9575_SHARP_){
return cljs.core.conj.call(null,p1__9574_SHARP_,p2__9575_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__9589);
});
var G__9600__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__9576_SHARP_,p2__9577_SHARP_){
return cljs.core.conj.call(null,p1__9576_SHARP_,p2__9577_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__9589);
});
var G__9600__4 = (function() { 
var G__9601__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__9578_SHARP_,p2__9579_SHARP_){
return cljs.core.conj.call(null,p1__9578_SHARP_,cljs.core.apply.call(null,p2__9579_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__9589);
};
var G__9601 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9601__delegate.call(this, x, y, z, args);
};
G__9601.cljs$lang$maxFixedArity = 3;
G__9601.cljs$lang$applyTo = (function (arglist__9602){
var x = cljs.core.first(arglist__9602);
var y = cljs.core.first(cljs.core.next(arglist__9602));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9602)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9602)));
return G__9601__delegate(x, y, z, args);
});
G__9601.cljs$lang$arity$variadic = G__9601__delegate;
return G__9601;
})()
;
G__9600 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9600__0.call(this);
case 1:
return G__9600__1.call(this,x);
case 2:
return G__9600__2.call(this,x,y);
case 3:
return G__9600__3.call(this,x,y,z);
default:
return G__9600__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9600.cljs$lang$maxFixedArity = 3;
G__9600.cljs$lang$applyTo = G__9600__4.cljs$lang$applyTo;
return G__9600;
})()
};
var G__9599 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9599__delegate.call(this, f, g, h, fs);
};
G__9599.cljs$lang$maxFixedArity = 3;
G__9599.cljs$lang$applyTo = (function (arglist__9603){
var f = cljs.core.first(arglist__9603);
var g = cljs.core.first(cljs.core.next(arglist__9603));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9603)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9603)));
return G__9599__delegate(f, g, h, fs);
});
G__9599.cljs$lang$arity$variadic = G__9599__delegate;
return G__9599;
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
var G__9606 = cljs.core.next.call(null,coll);
coll = G__9606;
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
if(cljs.core.truth_((function (){var and__3822__auto____9605 = cljs.core.seq.call(null,coll);
if(and__3822__auto____9605)
{return (n > 0);
} else
{return and__3822__auto____9605;
}
})()))
{{
var G__9607 = (n - 1);
var G__9608 = cljs.core.next.call(null,coll);
n = G__9607;
coll = G__9608;
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
var matches__9610 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__9610),s))
{if((cljs.core.count.call(null,matches__9610) === 1))
{return cljs.core.first.call(null,matches__9610);
} else
{return cljs.core.vec.call(null,matches__9610);
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
var matches__9612 = re.exec(s);
if((matches__9612 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__9612) === 1))
{return cljs.core.first.call(null,matches__9612);
} else
{return cljs.core.vec.call(null,matches__9612);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__9617 = cljs.core.re_find.call(null,re,s);
var match_idx__9618 = s.search(re);
var match_str__9619 = ((cljs.core.coll_QMARK_.call(null,match_data__9617))?cljs.core.first.call(null,match_data__9617):match_data__9617);
var post_match__9620 = cljs.core.subs.call(null,s,(match_idx__9618 + cljs.core.count.call(null,match_str__9619)));
if(cljs.core.truth_(match_data__9617))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__9617,re_seq.call(null,re,post_match__9620));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__9627__9628 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___9629 = cljs.core.nth.call(null,vec__9627__9628,0,null);
var flags__9630 = cljs.core.nth.call(null,vec__9627__9628,1,null);
var pattern__9631 = cljs.core.nth.call(null,vec__9627__9628,2,null);
return (new RegExp(pattern__9631,flags__9630));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__9621_SHARP_){
return print_one.call(null,p1__9621_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____9641 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____9641))
{var and__3822__auto____9645 = (function (){var G__9642__9643 = obj;
if(G__9642__9643)
{if((function (){var or__3824__auto____9644 = (G__9642__9643.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____9644)
{return or__3824__auto____9644;
} else
{return G__9642__9643.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__9642__9643.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9642__9643);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9642__9643);
}
})();
if(cljs.core.truth_(and__3822__auto____9645))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____9645;
}
} else
{return and__3822__auto____9641;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____9646 = !((obj == null));
if(and__3822__auto____9646)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____9646;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__9647__9648 = obj;
if(G__9647__9648)
{if((function (){var or__3824__auto____9649 = (G__9647__9648.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____9649)
{return or__3824__auto____9649;
} else
{return G__9647__9648.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__9647__9648.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__9647__9648);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__9647__9648);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var sb__9669 = (new goog.string.StringBuffer());
var G__9670__9671 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__9670__9671)
{var string__9672 = cljs.core.first.call(null,G__9670__9671);
var G__9670__9673 = G__9670__9671;
while(true){
sb__9669.append(string__9672);
var temp__3974__auto____9674 = cljs.core.next.call(null,G__9670__9673);
if(temp__3974__auto____9674)
{var G__9670__9675 = temp__3974__auto____9674;
{
var G__9688 = cljs.core.first.call(null,G__9670__9675);
var G__9689 = G__9670__9675;
string__9672 = G__9688;
G__9670__9673 = G__9689;
continue;
}
} else
{}
break;
}
} else
{}
var G__9676__9677 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__9676__9677)
{var obj__9678 = cljs.core.first.call(null,G__9676__9677);
var G__9676__9679 = G__9676__9677;
while(true){
sb__9669.append(" ");
var G__9680__9681 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__9678,opts));
if(G__9680__9681)
{var string__9682 = cljs.core.first.call(null,G__9680__9681);
var G__9680__9683 = G__9680__9681;
while(true){
sb__9669.append(string__9682);
var temp__3974__auto____9684 = cljs.core.next.call(null,G__9680__9683);
if(temp__3974__auto____9684)
{var G__9680__9685 = temp__3974__auto____9684;
{
var G__9690 = cljs.core.first.call(null,G__9680__9685);
var G__9691 = G__9680__9685;
string__9682 = G__9690;
G__9680__9683 = G__9691;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____9686 = cljs.core.next.call(null,G__9676__9679);
if(temp__3974__auto____9686)
{var G__9676__9687 = temp__3974__auto____9686;
{
var G__9692 = cljs.core.first.call(null,G__9676__9687);
var G__9693 = G__9676__9687;
obj__9678 = G__9692;
G__9676__9679 = G__9693;
continue;
}
} else
{}
break;
}
} else
{}
return sb__9669;
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
var sb__9695 = cljs.core.pr_sb.call(null,objs,opts);
sb__9695.append("\n");
return [cljs.core.str(sb__9695)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var G__9714__9715 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__9714__9715)
{var string__9716 = cljs.core.first.call(null,G__9714__9715);
var G__9714__9717 = G__9714__9715;
while(true){
cljs.core.string_print.call(null,string__9716);
var temp__3974__auto____9718 = cljs.core.next.call(null,G__9714__9717);
if(temp__3974__auto____9718)
{var G__9714__9719 = temp__3974__auto____9718;
{
var G__9732 = cljs.core.first.call(null,G__9714__9719);
var G__9733 = G__9714__9719;
string__9716 = G__9732;
G__9714__9717 = G__9733;
continue;
}
} else
{}
break;
}
} else
{}
var G__9720__9721 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__9720__9721)
{var obj__9722 = cljs.core.first.call(null,G__9720__9721);
var G__9720__9723 = G__9720__9721;
while(true){
cljs.core.string_print.call(null," ");
var G__9724__9725 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__9722,opts));
if(G__9724__9725)
{var string__9726 = cljs.core.first.call(null,G__9724__9725);
var G__9724__9727 = G__9724__9725;
while(true){
cljs.core.string_print.call(null,string__9726);
var temp__3974__auto____9728 = cljs.core.next.call(null,G__9724__9727);
if(temp__3974__auto____9728)
{var G__9724__9729 = temp__3974__auto____9728;
{
var G__9734 = cljs.core.first.call(null,G__9724__9729);
var G__9735 = G__9724__9729;
string__9726 = G__9734;
G__9724__9727 = G__9735;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____9730 = cljs.core.next.call(null,G__9720__9723);
if(temp__3974__auto____9730)
{var G__9720__9731 = temp__3974__auto____9730;
{
var G__9736 = cljs.core.first.call(null,G__9720__9731);
var G__9737 = G__9720__9731;
obj__9722 = G__9736;
G__9720__9723 = G__9737;
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
pr_str.cljs$lang$applyTo = (function (arglist__9738){
var objs = cljs.core.seq(arglist__9738);;
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
prn_str.cljs$lang$applyTo = (function (arglist__9739){
var objs = cljs.core.seq(arglist__9739);;
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
pr.cljs$lang$applyTo = (function (arglist__9740){
var objs = cljs.core.seq(arglist__9740);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__9741){
var objs = cljs.core.seq(arglist__9741);;
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
print_str.cljs$lang$applyTo = (function (arglist__9742){
var objs = cljs.core.seq(arglist__9742);;
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
println.cljs$lang$applyTo = (function (arglist__9743){
var objs = cljs.core.seq(arglist__9743);;
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
println_str.cljs$lang$applyTo = (function (arglist__9744){
var objs = cljs.core.seq(arglist__9744);;
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
prn.cljs$lang$applyTo = (function (arglist__9745){
var objs = cljs.core.seq(arglist__9745);;
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
printf.cljs$lang$applyTo = (function (arglist__9746){
var fmt = cljs.core.first(arglist__9746);
var args = cljs.core.rest(arglist__9746);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9747 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9747,"{",", ","}",opts,coll);
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
var pr_pair__9748 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9748,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9749 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9749,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____9750 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____9750))
{var nspc__9751 = temp__3974__auto____9750;
return [cljs.core.str(nspc__9751),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____9752 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____9752))
{var nspc__9753 = temp__3974__auto____9752;
return [cljs.core.str(nspc__9753),cljs.core.str("/")].join('');
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
var pr_pair__9754 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9754,"{",", ","}",opts,coll);
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
var normalize__9756 = (function (n,len){
var ns__9755 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__9755) < len))
{{
var G__9758 = [cljs.core.str("0"),cljs.core.str(ns__9755)].join('');
ns__9755 = G__9758;
continue;
}
} else
{return ns__9755;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__9756.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__9756.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__9756.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__9756.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__9756.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__9756.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
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
var pr_pair__9757 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9757,"{",", ","}",opts,coll);
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
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__2311__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__9759 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__9760 = this;
var G__9761__9762 = cljs.core.seq.call(null,this__9760.watches);
if(G__9761__9762)
{var G__9764__9766 = cljs.core.first.call(null,G__9761__9762);
var vec__9765__9767 = G__9764__9766;
var key__9768 = cljs.core.nth.call(null,vec__9765__9767,0,null);
var f__9769 = cljs.core.nth.call(null,vec__9765__9767,1,null);
var G__9761__9770 = G__9761__9762;
var G__9764__9771 = G__9764__9766;
var G__9761__9772 = G__9761__9770;
while(true){
var vec__9773__9774 = G__9764__9771;
var key__9775 = cljs.core.nth.call(null,vec__9773__9774,0,null);
var f__9776 = cljs.core.nth.call(null,vec__9773__9774,1,null);
var G__9761__9777 = G__9761__9772;
f__9776.call(null,key__9775,this$,oldval,newval);
var temp__3974__auto____9778 = cljs.core.next.call(null,G__9761__9777);
if(temp__3974__auto____9778)
{var G__9761__9779 = temp__3974__auto____9778;
{
var G__9786 = cljs.core.first.call(null,G__9761__9779);
var G__9787 = G__9761__9779;
G__9764__9771 = G__9786;
G__9761__9772 = G__9787;
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
var this__9780 = this;
return this$.watches = cljs.core.assoc.call(null,this__9780.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__9781 = this;
return this$.watches = cljs.core.dissoc.call(null,this__9781.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__9782 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__9782.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__9783 = this;
return this__9783.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__9784 = this;
return this__9784.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__9785 = this;
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
var G__9799__delegate = function (x,p__9788){
var map__9794__9795 = p__9788;
var map__9794__9796 = ((cljs.core.seq_QMARK_.call(null,map__9794__9795))?cljs.core.apply.call(null,cljs.core.hash_map,map__9794__9795):map__9794__9795);
var validator__9797 = cljs.core._lookup.call(null,map__9794__9796,"\uFDD0'validator",null);
var meta__9798 = cljs.core._lookup.call(null,map__9794__9796,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__9798,validator__9797,null));
};
var G__9799 = function (x,var_args){
var p__9788 = null;
if (goog.isDef(var_args)) {
  p__9788 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9799__delegate.call(this, x, p__9788);
};
G__9799.cljs$lang$maxFixedArity = 1;
G__9799.cljs$lang$applyTo = (function (arglist__9800){
var x = cljs.core.first(arglist__9800);
var p__9788 = cljs.core.rest(arglist__9800);
return G__9799__delegate(x, p__9788);
});
G__9799.cljs$lang$arity$variadic = G__9799__delegate;
return G__9799;
})()
;
atom = function(x,var_args){
var p__9788 = var_args;
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
var temp__3974__auto____9804 = a.validator;
if(cljs.core.truth_(temp__3974__auto____9804))
{var validate__9805 = temp__3974__auto____9804;
if(cljs.core.truth_(validate__9805.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6440))))].join('')));
}
} else
{}
var old_value__9806 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__9806,new_value);
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
var G__9807__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__9807 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__9807__delegate.call(this, a, f, x, y, z, more);
};
G__9807.cljs$lang$maxFixedArity = 5;
G__9807.cljs$lang$applyTo = (function (arglist__9808){
var a = cljs.core.first(arglist__9808);
var f = cljs.core.first(cljs.core.next(arglist__9808));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9808)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9808))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9808)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9808)))));
return G__9807__delegate(a, f, x, y, z, more);
});
G__9807.cljs$lang$arity$variadic = G__9807__delegate;
return G__9807;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__9809){
var iref = cljs.core.first(arglist__9809);
var f = cljs.core.first(cljs.core.next(arglist__9809));
var args = cljs.core.rest(cljs.core.next(arglist__9809));
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
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__2311__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__9810 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__9810.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__9811 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__9811.state,(function (p__9812){
var map__9813__9814 = p__9812;
var map__9813__9815 = ((cljs.core.seq_QMARK_.call(null,map__9813__9814))?cljs.core.apply.call(null,cljs.core.hash_map,map__9813__9814):map__9813__9814);
var curr_state__9816 = map__9813__9815;
var done__9817 = cljs.core._lookup.call(null,map__9813__9815,"\uFDD0'done",null);
if(cljs.core.truth_(done__9817))
{return curr_state__9816;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__9811.f.call(null)});
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
var map__9838__9839 = options;
var map__9838__9840 = ((cljs.core.seq_QMARK_.call(null,map__9838__9839))?cljs.core.apply.call(null,cljs.core.hash_map,map__9838__9839):map__9838__9839);
var keywordize_keys__9841 = cljs.core._lookup.call(null,map__9838__9840,"\uFDD0'keywordize-keys",null);
var keyfn__9842 = (cljs.core.truth_(keywordize_keys__9841)?cljs.core.keyword:cljs.core.str);
var f__9857 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2464__auto____9856 = (function iter__9850(s__9851){
return (new cljs.core.LazySeq(null,false,(function (){
var s__9851__9854 = s__9851;
while(true){
if(cljs.core.seq.call(null,s__9851__9854))
{var k__9855 = cljs.core.first.call(null,s__9851__9854);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__9842.call(null,k__9855),thisfn.call(null,(x[k__9855]))], true),iter__9850.call(null,cljs.core.rest.call(null,s__9851__9854)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2464__auto____9856.call(null,cljs.core.js_keys.call(null,x));
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
return f__9857.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__9858){
var x = cljs.core.first(arglist__9858);
var options = cljs.core.rest(arglist__9858);
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
var mem__9863 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__9867__delegate = function (args){
var temp__3971__auto____9864 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__9863),args,null);
if(cljs.core.truth_(temp__3971__auto____9864))
{var v__9865 = temp__3971__auto____9864;
return v__9865;
} else
{var ret__9866 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__9863,cljs.core.assoc,args,ret__9866);
return ret__9866;
}
};
var G__9867 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9867__delegate.call(this, args);
};
G__9867.cljs$lang$maxFixedArity = 0;
G__9867.cljs$lang$applyTo = (function (arglist__9868){
var args = cljs.core.seq(arglist__9868);;
return G__9867__delegate(args);
});
G__9867.cljs$lang$arity$variadic = G__9867__delegate;
return G__9867;
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
var ret__9870 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__9870))
{{
var G__9871 = ret__9870;
f = G__9871;
continue;
}
} else
{return ret__9870;
}
break;
}
});
var trampoline__2 = (function() { 
var G__9872__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__9872 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9872__delegate.call(this, f, args);
};
G__9872.cljs$lang$maxFixedArity = 1;
G__9872.cljs$lang$applyTo = (function (arglist__9873){
var f = cljs.core.first(arglist__9873);
var args = cljs.core.rest(arglist__9873);
return G__9872__delegate(f, args);
});
G__9872.cljs$lang$arity$variadic = G__9872__delegate;
return G__9872;
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
var k__9875 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__9875,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__9875,cljs.core.PersistentVector.EMPTY),x));
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
var or__3824__auto____9884 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____9884)
{return or__3824__auto____9884;
} else
{var or__3824__auto____9885 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____9885)
{return or__3824__auto____9885;
} else
{var and__3822__auto____9886 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____9886)
{var and__3822__auto____9887 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____9887)
{var and__3822__auto____9888 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____9888)
{var ret__9889 = true;
var i__9890 = 0;
while(true){
if((function (){var or__3824__auto____9891 = cljs.core.not.call(null,ret__9889);
if(or__3824__auto____9891)
{return or__3824__auto____9891;
} else
{return (i__9890 === cljs.core.count.call(null,parent));
}
})())
{return ret__9889;
} else
{{
var G__9892 = isa_QMARK_.call(null,h,child.call(null,i__9890),parent.call(null,i__9890));
var G__9893 = (i__9890 + 1);
ret__9889 = G__9892;
i__9890 = G__9893;
continue;
}
}
break;
}
} else
{return and__3822__auto____9888;
}
} else
{return and__3822__auto____9887;
}
} else
{return and__3822__auto____9886;
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
var tp__9902 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__9903 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__9904 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__9905 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____9906 = ((cljs.core.contains_QMARK_.call(null,tp__9902.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__9904.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__9904.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__9902,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__9905.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__9903,parent,ta__9904),"\uFDD0'descendants":tf__9905.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__9904,tag,td__9903)});
})());
if(cljs.core.truth_(or__3824__auto____9906))
{return or__3824__auto____9906;
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
var parentMap__9911 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__9912 = (cljs.core.truth_(parentMap__9911.call(null,tag))?cljs.core.disj.call(null,parentMap__9911.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__9913 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__9912))?cljs.core.assoc.call(null,parentMap__9911,tag,childsParents__9912):cljs.core.dissoc.call(null,parentMap__9911,tag));
var deriv_seq__9914 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__9894_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__9894_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__9894_SHARP_),cljs.core.second.call(null,p1__9894_SHARP_)));
}),cljs.core.seq.call(null,newParents__9913)));
if(cljs.core.contains_QMARK_.call(null,parentMap__9911.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__9895_SHARP_,p2__9896_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__9895_SHARP_,p2__9896_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__9914));
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
var xprefs__9922 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____9924 = (cljs.core.truth_((function (){var and__3822__auto____9923 = xprefs__9922;
if(cljs.core.truth_(and__3822__auto____9923))
{return xprefs__9922.call(null,y);
} else
{return and__3822__auto____9923;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____9924))
{return or__3824__auto____9924;
} else
{var or__3824__auto____9926 = (function (){var ps__9925 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__9925) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__9925),prefer_table)))
{} else
{}
{
var G__9929 = cljs.core.rest.call(null,ps__9925);
ps__9925 = G__9929;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____9926))
{return or__3824__auto____9926;
} else
{var or__3824__auto____9928 = (function (){var ps__9927 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__9927) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__9927),y,prefer_table)))
{} else
{}
{
var G__9930 = cljs.core.rest.call(null,ps__9927);
ps__9927 = G__9930;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____9928))
{return or__3824__auto____9928;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____9932 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____9932))
{return or__3824__auto____9932;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__9950 = cljs.core.reduce.call(null,(function (be,p__9942){
var vec__9943__9944 = p__9942;
var k__9945 = cljs.core.nth.call(null,vec__9943__9944,0,null);
var ___9946 = cljs.core.nth.call(null,vec__9943__9944,1,null);
var e__9947 = vec__9943__9944;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__9945))
{var be2__9949 = (cljs.core.truth_((function (){var or__3824__auto____9948 = (be == null);
if(or__3824__auto____9948)
{return or__3824__auto____9948;
} else
{return cljs.core.dominates.call(null,k__9945,cljs.core.first.call(null,be),prefer_table);
}
})())?e__9947:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__9949),k__9945,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__9945),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__9949)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__9949;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__9950))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__9950));
return cljs.core.second.call(null,best_entry__9950);
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
if((function (){var and__3822__auto____9955 = mf;
if(and__3822__auto____9955)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____9955;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2365__auto____9956 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____9957 = (cljs.core._reset[goog.typeOf(x__2365__auto____9956)]);
if(or__3824__auto____9957)
{return or__3824__auto____9957;
} else
{var or__3824__auto____9958 = (cljs.core._reset["_"]);
if(or__3824__auto____9958)
{return or__3824__auto____9958;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____9963 = mf;
if(and__3822__auto____9963)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____9963;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2365__auto____9964 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____9965 = (cljs.core._add_method[goog.typeOf(x__2365__auto____9964)]);
if(or__3824__auto____9965)
{return or__3824__auto____9965;
} else
{var or__3824__auto____9966 = (cljs.core._add_method["_"]);
if(or__3824__auto____9966)
{return or__3824__auto____9966;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____9971 = mf;
if(and__3822__auto____9971)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____9971;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2365__auto____9972 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____9973 = (cljs.core._remove_method[goog.typeOf(x__2365__auto____9972)]);
if(or__3824__auto____9973)
{return or__3824__auto____9973;
} else
{var or__3824__auto____9974 = (cljs.core._remove_method["_"]);
if(or__3824__auto____9974)
{return or__3824__auto____9974;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____9979 = mf;
if(and__3822__auto____9979)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____9979;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2365__auto____9980 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____9981 = (cljs.core._prefer_method[goog.typeOf(x__2365__auto____9980)]);
if(or__3824__auto____9981)
{return or__3824__auto____9981;
} else
{var or__3824__auto____9982 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____9982)
{return or__3824__auto____9982;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____9987 = mf;
if(and__3822__auto____9987)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____9987;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2365__auto____9988 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____9989 = (cljs.core._get_method[goog.typeOf(x__2365__auto____9988)]);
if(or__3824__auto____9989)
{return or__3824__auto____9989;
} else
{var or__3824__auto____9990 = (cljs.core._get_method["_"]);
if(or__3824__auto____9990)
{return or__3824__auto____9990;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____9995 = mf;
if(and__3822__auto____9995)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____9995;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2365__auto____9996 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____9997 = (cljs.core._methods[goog.typeOf(x__2365__auto____9996)]);
if(or__3824__auto____9997)
{return or__3824__auto____9997;
} else
{var or__3824__auto____9998 = (cljs.core._methods["_"]);
if(or__3824__auto____9998)
{return or__3824__auto____9998;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____10003 = mf;
if(and__3822__auto____10003)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____10003;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2365__auto____10004 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10005 = (cljs.core._prefers[goog.typeOf(x__2365__auto____10004)]);
if(or__3824__auto____10005)
{return or__3824__auto____10005;
} else
{var or__3824__auto____10006 = (cljs.core._prefers["_"]);
if(or__3824__auto____10006)
{return or__3824__auto____10006;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____10011 = mf;
if(and__3822__auto____10011)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____10011;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2365__auto____10012 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10013 = (cljs.core._dispatch[goog.typeOf(x__2365__auto____10012)]);
if(or__3824__auto____10013)
{return or__3824__auto____10013;
} else
{var or__3824__auto____10014 = (cljs.core._dispatch["_"]);
if(or__3824__auto____10014)
{return or__3824__auto____10014;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__10017 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__10018 = cljs.core._get_method.call(null,mf,dispatch_val__10017);
if(cljs.core.truth_(target_fn__10018))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__10017)].join('')));
}
return cljs.core.apply.call(null,target_fn__10018,args);
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
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__2311__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10019 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__10020 = this;
cljs.core.swap_BANG_.call(null,this__10020.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10020.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10020.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10020.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__10021 = this;
cljs.core.swap_BANG_.call(null,this__10021.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__10021.method_cache,this__10021.method_table,this__10021.cached_hierarchy,this__10021.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__10022 = this;
cljs.core.swap_BANG_.call(null,this__10022.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__10022.method_cache,this__10022.method_table,this__10022.cached_hierarchy,this__10022.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__10023 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__10023.cached_hierarchy),cljs.core.deref.call(null,this__10023.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__10023.method_cache,this__10023.method_table,this__10023.cached_hierarchy,this__10023.hierarchy);
}
var temp__3971__auto____10024 = cljs.core.deref.call(null,this__10023.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____10024))
{var target_fn__10025 = temp__3971__auto____10024;
return target_fn__10025;
} else
{var temp__3971__auto____10026 = cljs.core.find_and_cache_best_method.call(null,this__10023.name,dispatch_val,this__10023.hierarchy,this__10023.method_table,this__10023.prefer_table,this__10023.method_cache,this__10023.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____10026))
{var target_fn__10027 = temp__3971__auto____10026;
return target_fn__10027;
} else
{return cljs.core.deref.call(null,this__10023.method_table).call(null,this__10023.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__10028 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__10028.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__10028.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__10028.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__10028.method_cache,this__10028.method_table,this__10028.cached_hierarchy,this__10028.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__10029 = this;
return cljs.core.deref.call(null,this__10029.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__10030 = this;
return cljs.core.deref.call(null,this__10030.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__10031 = this;
return cljs.core.do_dispatch.call(null,mf,this__10031.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__10033__delegate = function (_,args){
var self__10032 = this;
return cljs.core._dispatch.call(null,self__10032,args);
};
var G__10033 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10033__delegate.call(this, _, args);
};
G__10033.cljs$lang$maxFixedArity = 1;
G__10033.cljs$lang$applyTo = (function (arglist__10034){
var _ = cljs.core.first(arglist__10034);
var args = cljs.core.rest(arglist__10034);
return G__10033__delegate(_, args);
});
G__10033.cljs$lang$arity$variadic = G__10033__delegate;
return G__10033;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__10035 = this;
return cljs.core._dispatch.call(null,self__10035,args);
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
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__2311__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10036 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_10038,_){
var this__10037 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__10037.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__10039 = this;
var and__3822__auto____10040 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____10040)
{return (this__10039.uuid === other.uuid);
} else
{return and__3822__auto____10040;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__10041 = this;
var this__10042 = this;
return cljs.core.pr_str.call(null,this__10042);
});
cljs.core.UUID;
