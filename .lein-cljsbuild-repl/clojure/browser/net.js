goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('goog.json');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.EventType');
goog.require('goog.net.XhrIo');
goog.require('clojure.browser.event');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__18107){
var vec__18108__18109 = p__18107;
var k__18110 = cljs.core.nth.call(null,vec__18108__18109,0,null);
var v__18111 = cljs.core.nth.call(null,vec__18108__18109,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__18110.toLowerCase()),v__18111], true);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__1 = (function (this$){
if((function (){var and__3822__auto____18128 = this$;
if(and__3822__auto____18128)
{return this$.clojure$browser$net$IConnection$connect$arity$1;
} else
{return and__3822__auto____18128;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$1(this$);
} else
{var x__2452__auto____18129 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____18130 = (clojure.browser.net.connect[goog.typeOf(x__2452__auto____18129)]);
if(or__3824__auto____18130)
{return or__3824__auto____18130;
} else
{var or__3824__auto____18131 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____18131)
{return or__3824__auto____18131;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__2 = (function (this$,opt1){
if((function (){var and__3822__auto____18132 = this$;
if(and__3822__auto____18132)
{return this$.clojure$browser$net$IConnection$connect$arity$2;
} else
{return and__3822__auto____18132;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$2(this$,opt1);
} else
{var x__2452__auto____18133 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____18134 = (clojure.browser.net.connect[goog.typeOf(x__2452__auto____18133)]);
if(or__3824__auto____18134)
{return or__3824__auto____18134;
} else
{var or__3824__auto____18135 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____18135)
{return or__3824__auto____18135;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__3 = (function (this$,opt1,opt2){
if((function (){var and__3822__auto____18136 = this$;
if(and__3822__auto____18136)
{return this$.clojure$browser$net$IConnection$connect$arity$3;
} else
{return and__3822__auto____18136;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$3(this$,opt1,opt2);
} else
{var x__2452__auto____18137 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____18138 = (clojure.browser.net.connect[goog.typeOf(x__2452__auto____18137)]);
if(or__3824__auto____18138)
{return or__3824__auto____18138;
} else
{var or__3824__auto____18139 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____18139)
{return or__3824__auto____18139;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__4 = (function (this$,opt1,opt2,opt3){
if((function (){var and__3822__auto____18140 = this$;
if(and__3822__auto____18140)
{return this$.clojure$browser$net$IConnection$connect$arity$4;
} else
{return and__3822__auto____18140;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$4(this$,opt1,opt2,opt3);
} else
{var x__2452__auto____18141 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____18142 = (clojure.browser.net.connect[goog.typeOf(x__2452__auto____18141)]);
if(or__3824__auto____18142)
{return or__3824__auto____18142;
} else
{var or__3824__auto____18143 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____18143)
{return or__3824__auto____18143;
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
if((function (){var and__3822__auto____18164 = this$;
if(and__3822__auto____18164)
{return this$.clojure$browser$net$IConnection$transmit$arity$2;
} else
{return and__3822__auto____18164;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$2(this$,opt);
} else
{var x__2452__auto____18165 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____18166 = (clojure.browser.net.transmit[goog.typeOf(x__2452__auto____18165)]);
if(or__3824__auto____18166)
{return or__3824__auto____18166;
} else
{var or__3824__auto____18167 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____18167)
{return or__3824__auto____18167;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__3 = (function (this$,opt,opt2){
if((function (){var and__3822__auto____18168 = this$;
if(and__3822__auto____18168)
{return this$.clojure$browser$net$IConnection$transmit$arity$3;
} else
{return and__3822__auto____18168;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$3(this$,opt,opt2);
} else
{var x__2452__auto____18169 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____18170 = (clojure.browser.net.transmit[goog.typeOf(x__2452__auto____18169)]);
if(or__3824__auto____18170)
{return or__3824__auto____18170;
} else
{var or__3824__auto____18171 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____18171)
{return or__3824__auto____18171;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__4 = (function (this$,opt,opt2,opt3){
if((function (){var and__3822__auto____18172 = this$;
if(and__3822__auto____18172)
{return this$.clojure$browser$net$IConnection$transmit$arity$4;
} else
{return and__3822__auto____18172;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$4(this$,opt,opt2,opt3);
} else
{var x__2452__auto____18173 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____18174 = (clojure.browser.net.transmit[goog.typeOf(x__2452__auto____18173)]);
if(or__3824__auto____18174)
{return or__3824__auto____18174;
} else
{var or__3824__auto____18175 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____18175)
{return or__3824__auto____18175;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__5 = (function (this$,opt,opt2,opt3,opt4){
if((function (){var and__3822__auto____18176 = this$;
if(and__3822__auto____18176)
{return this$.clojure$browser$net$IConnection$transmit$arity$5;
} else
{return and__3822__auto____18176;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$5(this$,opt,opt2,opt3,opt4);
} else
{var x__2452__auto____18177 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____18178 = (clojure.browser.net.transmit[goog.typeOf(x__2452__auto____18177)]);
if(or__3824__auto____18178)
{return or__3824__auto____18178;
} else
{var or__3824__auto____18179 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____18179)
{return or__3824__auto____18179;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__6 = (function (this$,opt,opt2,opt3,opt4,opt5){
if((function (){var and__3822__auto____18180 = this$;
if(and__3822__auto____18180)
{return this$.clojure$browser$net$IConnection$transmit$arity$6;
} else
{return and__3822__auto____18180;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$6(this$,opt,opt2,opt3,opt4,opt5);
} else
{var x__2452__auto____18181 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____18182 = (clojure.browser.net.transmit[goog.typeOf(x__2452__auto____18181)]);
if(or__3824__auto____18182)
{return or__3824__auto____18182;
} else
{var or__3824__auto____18183 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____18183)
{return or__3824__auto____18183;
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
if((function (){var and__3822__auto____18188 = this$;
if(and__3822__auto____18188)
{return this$.clojure$browser$net$IConnection$close$arity$1;
} else
{return and__3822__auto____18188;
}
})())
{return this$.clojure$browser$net$IConnection$close$arity$1(this$);
} else
{var x__2452__auto____18189 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____18190 = (clojure.browser.net.close[goog.typeOf(x__2452__auto____18189)]);
if(or__3824__auto____18190)
{return or__3824__auto____18190;
} else
{var or__3824__auto____18191 = (clojure.browser.net.close["_"]);
if(or__3824__auto____18191)
{return or__3824__auto____18191;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types$arity$1 = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__18192){
var vec__18193__18194 = p__18192;
var k__18195 = cljs.core.nth.call(null,vec__18193__18194,0,null);
var v__18196 = cljs.core.nth.call(null,vec__18193__18194,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__18195.toLowerCase()),v__18196], true);
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
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__18197){
var vec__18198__18199 = p__18197;
var k__18200 = cljs.core.nth.call(null,vec__18198__18199,0,null);
var v__18201 = cljs.core.nth.call(null,vec__18198__18199,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__18200.toLowerCase()),v__18201], true);
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
if((function (){var and__3822__auto____18210 = this$;
if(and__3822__auto____18210)
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3;
} else
{return and__3822__auto____18210;
}
})())
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3(this$,service_name,fn);
} else
{var x__2452__auto____18211 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____18212 = (clojure.browser.net.register_service[goog.typeOf(x__2452__auto____18211)]);
if(or__3824__auto____18212)
{return or__3824__auto____18212;
} else
{var or__3824__auto____18213 = (clojure.browser.net.register_service["_"]);
if(or__3824__auto____18213)
{return or__3824__auto____18213;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__4 = (function (this$,service_name,fn,encode_json_QMARK_){
if((function (){var and__3822__auto____18214 = this$;
if(and__3822__auto____18214)
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4;
} else
{return and__3822__auto____18214;
}
})())
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4(this$,service_name,fn,encode_json_QMARK_);
} else
{var x__2452__auto____18215 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____18216 = (clojure.browser.net.register_service[goog.typeOf(x__2452__auto____18215)]);
if(or__3824__auto____18216)
{return or__3824__auto____18216;
} else
{var or__3824__auto____18217 = (clojure.browser.net.register_service["_"]);
if(or__3824__auto____18217)
{return or__3824__auto____18217;
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
var temp__3974__auto____18229 = (new goog.Uri(window.location.href)).getParameterValue("xpc");
if(cljs.core.truth_(temp__3974__auto____18229))
{var config__18230 = temp__3974__auto____18229;
return (new goog.net.xpc.CrossPageChannel(goog.json.parse(config__18230)));
} else
{return null;
}
});
var xpc_connection__1 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__18231){
var vec__18232__18233 = p__18231;
var k__18234 = cljs.core.nth.call(null,vec__18232__18233,0,null);
var v__18235 = cljs.core.nth.call(null,vec__18232__18233,1,null);
var temp__3971__auto____18236 = cljs.core._lookup.call(null,clojure.browser.net.xpc_config_fields,k__18234,null);
if(cljs.core.truth_(temp__3971__auto____18236))
{var field__18237 = temp__3971__auto____18236;
var G__18238__18239 = sum;
(G__18238__18239[field__18237] = v__18235);
return G__18238__18239;
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
