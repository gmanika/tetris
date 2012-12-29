goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('goog.json');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.EventType');
goog.require('goog.net.XhrIo');
goog.require('clojure.browser.event');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__10301){
var vec__10302__10303 = p__10301;
var k__10304 = cljs.core.nth.call(null,vec__10302__10303,0,null);
var v__10305 = cljs.core.nth.call(null,vec__10302__10303,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__10304.toLowerCase()),v__10305], true);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__1 = (function (this$){
if((function (){var and__3822__auto____10322 = this$;
if(and__3822__auto____10322)
{return this$.clojure$browser$net$IConnection$connect$arity$1;
} else
{return and__3822__auto____10322;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$1(this$);
} else
{var x__2452__auto____10323 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10324 = (clojure.browser.net.connect[goog.typeOf(x__2452__auto____10323)]);
if(or__3824__auto____10324)
{return or__3824__auto____10324;
} else
{var or__3824__auto____10325 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____10325)
{return or__3824__auto____10325;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__2 = (function (this$,opt1){
if((function (){var and__3822__auto____10326 = this$;
if(and__3822__auto____10326)
{return this$.clojure$browser$net$IConnection$connect$arity$2;
} else
{return and__3822__auto____10326;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$2(this$,opt1);
} else
{var x__2452__auto____10327 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10328 = (clojure.browser.net.connect[goog.typeOf(x__2452__auto____10327)]);
if(or__3824__auto____10328)
{return or__3824__auto____10328;
} else
{var or__3824__auto____10329 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____10329)
{return or__3824__auto____10329;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__3 = (function (this$,opt1,opt2){
if((function (){var and__3822__auto____10330 = this$;
if(and__3822__auto____10330)
{return this$.clojure$browser$net$IConnection$connect$arity$3;
} else
{return and__3822__auto____10330;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$3(this$,opt1,opt2);
} else
{var x__2452__auto____10331 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10332 = (clojure.browser.net.connect[goog.typeOf(x__2452__auto____10331)]);
if(or__3824__auto____10332)
{return or__3824__auto____10332;
} else
{var or__3824__auto____10333 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____10333)
{return or__3824__auto____10333;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__4 = (function (this$,opt1,opt2,opt3){
if((function (){var and__3822__auto____10334 = this$;
if(and__3822__auto____10334)
{return this$.clojure$browser$net$IConnection$connect$arity$4;
} else
{return and__3822__auto____10334;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$4(this$,opt1,opt2,opt3);
} else
{var x__2452__auto____10335 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10336 = (clojure.browser.net.connect[goog.typeOf(x__2452__auto____10335)]);
if(or__3824__auto____10336)
{return or__3824__auto____10336;
} else
{var or__3824__auto____10337 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____10337)
{return or__3824__auto____10337;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2,opt3);
}
});
connect = function(this$,opt1,opt2,opt3){
switch(arguments.length){
case 1:
return connect__1.call(this,this$);
case 2:
return connect__2.call(this,this$,opt1);
case 3:
return connect__3.call(this,this$,opt1,opt2);
case 4:
return connect__4.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
connect.cljs$lang$arity$1 = connect__1;
connect.cljs$lang$arity$2 = connect__2;
connect.cljs$lang$arity$3 = connect__3;
connect.cljs$lang$arity$4 = connect__4;
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__2 = (function (this$,opt){
if((function (){var and__3822__auto____10358 = this$;
if(and__3822__auto____10358)
{return this$.clojure$browser$net$IConnection$transmit$arity$2;
} else
{return and__3822__auto____10358;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$2(this$,opt);
} else
{var x__2452__auto____10359 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10360 = (clojure.browser.net.transmit[goog.typeOf(x__2452__auto____10359)]);
if(or__3824__auto____10360)
{return or__3824__auto____10360;
} else
{var or__3824__auto____10361 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____10361)
{return or__3824__auto____10361;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__3 = (function (this$,opt,opt2){
if((function (){var and__3822__auto____10362 = this$;
if(and__3822__auto____10362)
{return this$.clojure$browser$net$IConnection$transmit$arity$3;
} else
{return and__3822__auto____10362;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$3(this$,opt,opt2);
} else
{var x__2452__auto____10363 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10364 = (clojure.browser.net.transmit[goog.typeOf(x__2452__auto____10363)]);
if(or__3824__auto____10364)
{return or__3824__auto____10364;
} else
{var or__3824__auto____10365 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____10365)
{return or__3824__auto____10365;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__4 = (function (this$,opt,opt2,opt3){
if((function (){var and__3822__auto____10366 = this$;
if(and__3822__auto____10366)
{return this$.clojure$browser$net$IConnection$transmit$arity$4;
} else
{return and__3822__auto____10366;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$4(this$,opt,opt2,opt3);
} else
{var x__2452__auto____10367 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10368 = (clojure.browser.net.transmit[goog.typeOf(x__2452__auto____10367)]);
if(or__3824__auto____10368)
{return or__3824__auto____10368;
} else
{var or__3824__auto____10369 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____10369)
{return or__3824__auto____10369;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__5 = (function (this$,opt,opt2,opt3,opt4){
if((function (){var and__3822__auto____10370 = this$;
if(and__3822__auto____10370)
{return this$.clojure$browser$net$IConnection$transmit$arity$5;
} else
{return and__3822__auto____10370;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$5(this$,opt,opt2,opt3,opt4);
} else
{var x__2452__auto____10371 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10372 = (clojure.browser.net.transmit[goog.typeOf(x__2452__auto____10371)]);
if(or__3824__auto____10372)
{return or__3824__auto____10372;
} else
{var or__3824__auto____10373 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____10373)
{return or__3824__auto____10373;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__6 = (function (this$,opt,opt2,opt3,opt4,opt5){
if((function (){var and__3822__auto____10374 = this$;
if(and__3822__auto____10374)
{return this$.clojure$browser$net$IConnection$transmit$arity$6;
} else
{return and__3822__auto____10374;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$6(this$,opt,opt2,opt3,opt4,opt5);
} else
{var x__2452__auto____10375 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10376 = (clojure.browser.net.transmit[goog.typeOf(x__2452__auto____10375)]);
if(or__3824__auto____10376)
{return or__3824__auto____10376;
} else
{var or__3824__auto____10377 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____10377)
{return or__3824__auto____10377;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4,opt5);
}
});
transmit = function(this$,opt,opt2,opt3,opt4,opt5){
switch(arguments.length){
case 2:
return transmit__2.call(this,this$,opt);
case 3:
return transmit__3.call(this,this$,opt,opt2);
case 4:
return transmit__4.call(this,this$,opt,opt2,opt3);
case 5:
return transmit__5.call(this,this$,opt,opt2,opt3,opt4);
case 6:
return transmit__6.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
transmit.cljs$lang$arity$2 = transmit__2;
transmit.cljs$lang$arity$3 = transmit__3;
transmit.cljs$lang$arity$4 = transmit__4;
transmit.cljs$lang$arity$5 = transmit__5;
transmit.cljs$lang$arity$6 = transmit__6;
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if((function (){var and__3822__auto____10382 = this$;
if(and__3822__auto____10382)
{return this$.clojure$browser$net$IConnection$close$arity$1;
} else
{return and__3822__auto____10382;
}
})())
{return this$.clojure$browser$net$IConnection$close$arity$1(this$);
} else
{var x__2452__auto____10383 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10384 = (clojure.browser.net.close[goog.typeOf(x__2452__auto____10383)]);
if(or__3824__auto____10384)
{return or__3824__auto____10384;
} else
{var or__3824__auto____10385 = (clojure.browser.net.close["_"]);
if(or__3824__auto____10385)
{return or__3824__auto____10385;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types$arity$1 = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__10386){
var vec__10387__10388 = p__10386;
var k__10389 = cljs.core.nth.call(null,vec__10387__10388,0,null);
var v__10390 = cljs.core.nth.call(null,vec__10387__10388,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__10389.toLowerCase()),v__10390], true);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$2 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$3 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$4 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$5 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$6 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__10391){
var vec__10392__10393 = p__10391;
var k__10394 = cljs.core.nth.call(null,vec__10392__10393,0,null);
var v__10395 = cljs.core.nth.call(null,vec__10392__10393,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__10394.toLowerCase()),v__10395], true);
}),cljs.core.js__GT_clj.call(null,goog.net.xpc.CfgFields)));
/**
* Returns an XhrIo connection
*/
clojure.browser.net.xhr_connection = (function xhr_connection(){
return (new goog.net.XhrIo());
});
clojure.browser.net.ICrossPageChannel = {};
clojure.browser.net.register_service = (function() {
var register_service = null;
var register_service__3 = (function (this$,service_name,fn){
if((function (){var and__3822__auto____10404 = this$;
if(and__3822__auto____10404)
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3;
} else
{return and__3822__auto____10404;
}
})())
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3(this$,service_name,fn);
} else
{var x__2452__auto____10405 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10406 = (clojure.browser.net.register_service[goog.typeOf(x__2452__auto____10405)]);
if(or__3824__auto____10406)
{return or__3824__auto____10406;
} else
{var or__3824__auto____10407 = (clojure.browser.net.register_service["_"]);
if(or__3824__auto____10407)
{return or__3824__auto____10407;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__4 = (function (this$,service_name,fn,encode_json_QMARK_){
if((function (){var and__3822__auto____10408 = this$;
if(and__3822__auto____10408)
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4;
} else
{return and__3822__auto____10408;
}
})())
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4(this$,service_name,fn,encode_json_QMARK_);
} else
{var x__2452__auto____10409 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10410 = (clojure.browser.net.register_service[goog.typeOf(x__2452__auto____10409)]);
if(or__3824__auto____10410)
{return or__3824__auto____10410;
} else
{var or__3824__auto____10411 = (clojure.browser.net.register_service["_"]);
if(or__3824__auto____10411)
{return or__3824__auto____10411;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn,encode_json_QMARK_);
}
});
register_service = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case 3:
return register_service__3.call(this,this$,service_name,fn);
case 4:
return register_service__4.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
register_service.cljs$lang$arity$3 = register_service__3;
register_service.cljs$lang$arity$4 = register_service__4;
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$1 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$2 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$3 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$4 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$transmit$arity$3 = (function (this$,service_name,payload){
return this$.send(cljs.core.name.call(null,service_name),payload);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$close$arity$1 = (function (this$){
return this$.close(cljs.core.List.EMPTY);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service$arity$3 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service$arity$4 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
/**
* When passed with a config hash-map, returns a parent
* CrossPageChannel object. Keys in the config hash map are downcased
* versions of the goog.net.xpc.CfgFields enum keys,
* e.g. goog.net.xpc.CfgFields.PEER_URI becomes :peer_uri in the config
* hash.
* 
* When passed with no args, creates a child CrossPageChannel object,
* and the config is automatically taken from the URL param 'xpc', as
* per the CrossPageChannel API.
*/
clojure.browser.net.xpc_connection = (function() {
var xpc_connection = null;
var xpc_connection__0 = (function (){
var temp__3974__auto____10423 = (new goog.Uri(window.location.href)).getParameterValue("xpc");
if(cljs.core.truth_(temp__3974__auto____10423))
{var config__10424 = temp__3974__auto____10423;
return (new goog.net.xpc.CrossPageChannel(goog.json.parse(config__10424)));
} else
{return null;
}
});
var xpc_connection__1 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__10425){
var vec__10426__10427 = p__10425;
var k__10428 = cljs.core.nth.call(null,vec__10426__10427,0,null);
var v__10429 = cljs.core.nth.call(null,vec__10426__10427,1,null);
var temp__3971__auto____10430 = cljs.core._lookup.call(null,clojure.browser.net.xpc_config_fields,k__10428,null);
if(cljs.core.truth_(temp__3971__auto____10430))
{var field__10431 = temp__3971__auto____10430;
var G__10432__10433 = sum;
(G__10432__10433[field__10431] = v__10429);
return G__10432__10433;
} else
{return sum;
}
}),{},config)));
});
xpc_connection = function(config){
switch(arguments.length){
case 0:
return xpc_connection__0.call(this);
case 1:
return xpc_connection__1.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
xpc_connection.cljs$lang$arity$0 = xpc_connection__0;
xpc_connection.cljs$lang$arity$1 = xpc_connection__1;
return xpc_connection;
})()
;
