goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('goog.json');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.EventType');
goog.require('goog.net.XhrIo');
goog.require('clojure.browser.event');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__6294){
var vec__6295__6296 = p__6294;
var k__6297 = cljs.core.nth.call(null,vec__6295__6296,0,null);
var v__6298 = cljs.core.nth.call(null,vec__6295__6296,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__6297.toLowerCase()),v__6298], true);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__1 = (function (this$){
if((function (){var and__3822__auto____6315 = this$;
if(and__3822__auto____6315)
{return this$.clojure$browser$net$IConnection$connect$arity$1;
} else
{return and__3822__auto____6315;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$1(this$);
} else
{var x__2365__auto____6316 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6317 = (clojure.browser.net.connect[goog.typeOf(x__2365__auto____6316)]);
if(or__3824__auto____6317)
{return or__3824__auto____6317;
} else
{var or__3824__auto____6318 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____6318)
{return or__3824__auto____6318;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__2 = (function (this$,opt1){
if((function (){var and__3822__auto____6319 = this$;
if(and__3822__auto____6319)
{return this$.clojure$browser$net$IConnection$connect$arity$2;
} else
{return and__3822__auto____6319;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$2(this$,opt1);
} else
{var x__2365__auto____6320 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6321 = (clojure.browser.net.connect[goog.typeOf(x__2365__auto____6320)]);
if(or__3824__auto____6321)
{return or__3824__auto____6321;
} else
{var or__3824__auto____6322 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____6322)
{return or__3824__auto____6322;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__3 = (function (this$,opt1,opt2){
if((function (){var and__3822__auto____6323 = this$;
if(and__3822__auto____6323)
{return this$.clojure$browser$net$IConnection$connect$arity$3;
} else
{return and__3822__auto____6323;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$3(this$,opt1,opt2);
} else
{var x__2365__auto____6324 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6325 = (clojure.browser.net.connect[goog.typeOf(x__2365__auto____6324)]);
if(or__3824__auto____6325)
{return or__3824__auto____6325;
} else
{var or__3824__auto____6326 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____6326)
{return or__3824__auto____6326;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__4 = (function (this$,opt1,opt2,opt3){
if((function (){var and__3822__auto____6327 = this$;
if(and__3822__auto____6327)
{return this$.clojure$browser$net$IConnection$connect$arity$4;
} else
{return and__3822__auto____6327;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$4(this$,opt1,opt2,opt3);
} else
{var x__2365__auto____6328 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6329 = (clojure.browser.net.connect[goog.typeOf(x__2365__auto____6328)]);
if(or__3824__auto____6329)
{return or__3824__auto____6329;
} else
{var or__3824__auto____6330 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____6330)
{return or__3824__auto____6330;
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
if((function (){var and__3822__auto____6351 = this$;
if(and__3822__auto____6351)
{return this$.clojure$browser$net$IConnection$transmit$arity$2;
} else
{return and__3822__auto____6351;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$2(this$,opt);
} else
{var x__2365__auto____6352 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6353 = (clojure.browser.net.transmit[goog.typeOf(x__2365__auto____6352)]);
if(or__3824__auto____6353)
{return or__3824__auto____6353;
} else
{var or__3824__auto____6354 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____6354)
{return or__3824__auto____6354;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__3 = (function (this$,opt,opt2){
if((function (){var and__3822__auto____6355 = this$;
if(and__3822__auto____6355)
{return this$.clojure$browser$net$IConnection$transmit$arity$3;
} else
{return and__3822__auto____6355;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$3(this$,opt,opt2);
} else
{var x__2365__auto____6356 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6357 = (clojure.browser.net.transmit[goog.typeOf(x__2365__auto____6356)]);
if(or__3824__auto____6357)
{return or__3824__auto____6357;
} else
{var or__3824__auto____6358 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____6358)
{return or__3824__auto____6358;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__4 = (function (this$,opt,opt2,opt3){
if((function (){var and__3822__auto____6359 = this$;
if(and__3822__auto____6359)
{return this$.clojure$browser$net$IConnection$transmit$arity$4;
} else
{return and__3822__auto____6359;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$4(this$,opt,opt2,opt3);
} else
{var x__2365__auto____6360 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6361 = (clojure.browser.net.transmit[goog.typeOf(x__2365__auto____6360)]);
if(or__3824__auto____6361)
{return or__3824__auto____6361;
} else
{var or__3824__auto____6362 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____6362)
{return or__3824__auto____6362;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__5 = (function (this$,opt,opt2,opt3,opt4){
if((function (){var and__3822__auto____6363 = this$;
if(and__3822__auto____6363)
{return this$.clojure$browser$net$IConnection$transmit$arity$5;
} else
{return and__3822__auto____6363;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$5(this$,opt,opt2,opt3,opt4);
} else
{var x__2365__auto____6364 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6365 = (clojure.browser.net.transmit[goog.typeOf(x__2365__auto____6364)]);
if(or__3824__auto____6365)
{return or__3824__auto____6365;
} else
{var or__3824__auto____6366 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____6366)
{return or__3824__auto____6366;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__6 = (function (this$,opt,opt2,opt3,opt4,opt5){
if((function (){var and__3822__auto____6367 = this$;
if(and__3822__auto____6367)
{return this$.clojure$browser$net$IConnection$transmit$arity$6;
} else
{return and__3822__auto____6367;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$6(this$,opt,opt2,opt3,opt4,opt5);
} else
{var x__2365__auto____6368 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6369 = (clojure.browser.net.transmit[goog.typeOf(x__2365__auto____6368)]);
if(or__3824__auto____6369)
{return or__3824__auto____6369;
} else
{var or__3824__auto____6370 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____6370)
{return or__3824__auto____6370;
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
if((function (){var and__3822__auto____6375 = this$;
if(and__3822__auto____6375)
{return this$.clojure$browser$net$IConnection$close$arity$1;
} else
{return and__3822__auto____6375;
}
})())
{return this$.clojure$browser$net$IConnection$close$arity$1(this$);
} else
{var x__2365__auto____6376 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6377 = (clojure.browser.net.close[goog.typeOf(x__2365__auto____6376)]);
if(or__3824__auto____6377)
{return or__3824__auto____6377;
} else
{var or__3824__auto____6378 = (clojure.browser.net.close["_"]);
if(or__3824__auto____6378)
{return or__3824__auto____6378;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types$arity$1 = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__6379){
var vec__6380__6381 = p__6379;
var k__6382 = cljs.core.nth.call(null,vec__6380__6381,0,null);
var v__6383 = cljs.core.nth.call(null,vec__6380__6381,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__6382.toLowerCase()),v__6383], true);
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
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__6384){
var vec__6385__6386 = p__6384;
var k__6387 = cljs.core.nth.call(null,vec__6385__6386,0,null);
var v__6388 = cljs.core.nth.call(null,vec__6385__6386,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__6387.toLowerCase()),v__6388], true);
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
if((function (){var and__3822__auto____6397 = this$;
if(and__3822__auto____6397)
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3;
} else
{return and__3822__auto____6397;
}
})())
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3(this$,service_name,fn);
} else
{var x__2365__auto____6398 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6399 = (clojure.browser.net.register_service[goog.typeOf(x__2365__auto____6398)]);
if(or__3824__auto____6399)
{return or__3824__auto____6399;
} else
{var or__3824__auto____6400 = (clojure.browser.net.register_service["_"]);
if(or__3824__auto____6400)
{return or__3824__auto____6400;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__4 = (function (this$,service_name,fn,encode_json_QMARK_){
if((function (){var and__3822__auto____6401 = this$;
if(and__3822__auto____6401)
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4;
} else
{return and__3822__auto____6401;
}
})())
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4(this$,service_name,fn,encode_json_QMARK_);
} else
{var x__2365__auto____6402 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6403 = (clojure.browser.net.register_service[goog.typeOf(x__2365__auto____6402)]);
if(or__3824__auto____6403)
{return or__3824__auto____6403;
} else
{var or__3824__auto____6404 = (clojure.browser.net.register_service["_"]);
if(or__3824__auto____6404)
{return or__3824__auto____6404;
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
var temp__3974__auto____6416 = (new goog.Uri(window.location.href)).getParameterValue("xpc");
if(cljs.core.truth_(temp__3974__auto____6416))
{var config__6417 = temp__3974__auto____6416;
return (new goog.net.xpc.CrossPageChannel(goog.json.parse(config__6417)));
} else
{return null;
}
});
var xpc_connection__1 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__6418){
var vec__6419__6420 = p__6418;
var k__6421 = cljs.core.nth.call(null,vec__6419__6420,0,null);
var v__6422 = cljs.core.nth.call(null,vec__6419__6420,1,null);
var temp__3971__auto____6423 = cljs.core._lookup.call(null,clojure.browser.net.xpc_config_fields,k__6421,null);
if(cljs.core.truth_(temp__3971__auto____6423))
{var field__6424 = temp__3971__auto____6423;
var G__6425__6426 = sum;
(G__6425__6426[field__6424] = v__6422);
return G__6425__6426;
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
