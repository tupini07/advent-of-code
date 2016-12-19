// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args27009 = [];
var len__25866__auto___27015 = arguments.length;
var i__25867__auto___27016 = (0);
while(true){
if((i__25867__auto___27016 < len__25866__auto___27015)){
args27009.push((arguments[i__25867__auto___27016]));

var G__27017 = (i__25867__auto___27016 + (1));
i__25867__auto___27016 = G__27017;
continue;
} else {
}
break;
}

var G__27011 = args27009.length;
switch (G__27011) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27009.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27012 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27012 = (function (f,blockable,meta27013){
this.f = f;
this.blockable = blockable;
this.meta27013 = meta27013;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27014,meta27013__$1){
var self__ = this;
var _27014__$1 = this;
return (new cljs.core.async.t_cljs$core$async27012(self__.f,self__.blockable,meta27013__$1));
});

cljs.core.async.t_cljs$core$async27012.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27014){
var self__ = this;
var _27014__$1 = this;
return self__.meta27013;
});

cljs.core.async.t_cljs$core$async27012.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27012.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27012.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27012.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27012.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27013","meta27013",621456578,null)], null);
});

cljs.core.async.t_cljs$core$async27012.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27012.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27012";

cljs.core.async.t_cljs$core$async27012.cljs$lang$ctorPrWriter = (function (this__25397__auto__,writer__25398__auto__,opt__25399__auto__){
return cljs.core._write.call(null,writer__25398__auto__,"cljs.core.async/t_cljs$core$async27012");
});

cljs.core.async.__GT_t_cljs$core$async27012 = (function cljs$core$async$__GT_t_cljs$core$async27012(f__$1,blockable__$1,meta27013){
return (new cljs.core.async.t_cljs$core$async27012(f__$1,blockable__$1,meta27013));
});

}

return (new cljs.core.async.t_cljs$core$async27012(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args27021 = [];
var len__25866__auto___27024 = arguments.length;
var i__25867__auto___27025 = (0);
while(true){
if((i__25867__auto___27025 < len__25866__auto___27024)){
args27021.push((arguments[i__25867__auto___27025]));

var G__27026 = (i__25867__auto___27025 + (1));
i__25867__auto___27025 = G__27026;
continue;
} else {
}
break;
}

var G__27023 = args27021.length;
switch (G__27023) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27021.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args27028 = [];
var len__25866__auto___27031 = arguments.length;
var i__25867__auto___27032 = (0);
while(true){
if((i__25867__auto___27032 < len__25866__auto___27031)){
args27028.push((arguments[i__25867__auto___27032]));

var G__27033 = (i__25867__auto___27032 + (1));
i__25867__auto___27032 = G__27033;
continue;
} else {
}
break;
}

var G__27030 = args27028.length;
switch (G__27030) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27028.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args27035 = [];
var len__25866__auto___27038 = arguments.length;
var i__25867__auto___27039 = (0);
while(true){
if((i__25867__auto___27039 < len__25866__auto___27038)){
args27035.push((arguments[i__25867__auto___27039]));

var G__27040 = (i__25867__auto___27039 + (1));
i__25867__auto___27039 = G__27040;
continue;
} else {
}
break;
}

var G__27037 = args27035.length;
switch (G__27037) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27035.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27042 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27042);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27042,ret){
return (function (){
return fn1.call(null,val_27042);
});})(val_27042,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args27043 = [];
var len__25866__auto___27046 = arguments.length;
var i__25867__auto___27047 = (0);
while(true){
if((i__25867__auto___27047 < len__25866__auto___27046)){
args27043.push((arguments[i__25867__auto___27047]));

var G__27048 = (i__25867__auto___27047 + (1));
i__25867__auto___27047 = G__27048;
continue;
} else {
}
break;
}

var G__27045 = args27043.length;
switch (G__27045) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27043.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25706__auto___27050 = n;
var x_27051 = (0);
while(true){
if((x_27051 < n__25706__auto___27050)){
(a[x_27051] = (0));

var G__27052 = (x_27051 + (1));
x_27051 = G__27052;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27053 = (i + (1));
i = G__27053;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27057 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27057 = (function (alt_flag,flag,meta27058){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27058 = meta27058;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27059,meta27058__$1){
var self__ = this;
var _27059__$1 = this;
return (new cljs.core.async.t_cljs$core$async27057(self__.alt_flag,self__.flag,meta27058__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27057.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27059){
var self__ = this;
var _27059__$1 = this;
return self__.meta27058;
});})(flag))
;

cljs.core.async.t_cljs$core$async27057.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27057.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27057.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27057.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27057.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27058","meta27058",139974010,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27057.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27057.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27057";

cljs.core.async.t_cljs$core$async27057.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25397__auto__,writer__25398__auto__,opt__25399__auto__){
return cljs.core._write.call(null,writer__25398__auto__,"cljs.core.async/t_cljs$core$async27057");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27057 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27057(alt_flag__$1,flag__$1,meta27058){
return (new cljs.core.async.t_cljs$core$async27057(alt_flag__$1,flag__$1,meta27058));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27057(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27063 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27063 = (function (alt_handler,flag,cb,meta27064){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27064 = meta27064;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27065,meta27064__$1){
var self__ = this;
var _27065__$1 = this;
return (new cljs.core.async.t_cljs$core$async27063(self__.alt_handler,self__.flag,self__.cb,meta27064__$1));
});

cljs.core.async.t_cljs$core$async27063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27065){
var self__ = this;
var _27065__$1 = this;
return self__.meta27064;
});

cljs.core.async.t_cljs$core$async27063.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27063.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27063.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27063.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27063.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27064","meta27064",-299085981,null)], null);
});

cljs.core.async.t_cljs$core$async27063.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27063.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27063";

cljs.core.async.t_cljs$core$async27063.cljs$lang$ctorPrWriter = (function (this__25397__auto__,writer__25398__auto__,opt__25399__auto__){
return cljs.core._write.call(null,writer__25398__auto__,"cljs.core.async/t_cljs$core$async27063");
});

cljs.core.async.__GT_t_cljs$core$async27063 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27063(alt_handler__$1,flag__$1,cb__$1,meta27064){
return (new cljs.core.async.t_cljs$core$async27063(alt_handler__$1,flag__$1,cb__$1,meta27064));
});

}

return (new cljs.core.async.t_cljs$core$async27063(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27066_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27066_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27067_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27067_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24791__auto__ = wport;
if(cljs.core.truth_(or__24791__auto__)){
return or__24791__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27068 = (i + (1));
i = G__27068;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24791__auto__ = ret;
if(cljs.core.truth_(or__24791__auto__)){
return or__24791__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24779__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24779__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24779__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__25873__auto__ = [];
var len__25866__auto___27074 = arguments.length;
var i__25867__auto___27075 = (0);
while(true){
if((i__25867__auto___27075 < len__25866__auto___27074)){
args__25873__auto__.push((arguments[i__25867__auto___27075]));

var G__27076 = (i__25867__auto___27075 + (1));
i__25867__auto___27075 = G__27076;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((1) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25874__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27071){
var map__27072 = p__27071;
var map__27072__$1 = ((((!((map__27072 == null)))?((((map__27072.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27072.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27072):map__27072);
var opts = map__27072__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27069){
var G__27070 = cljs.core.first.call(null,seq27069);
var seq27069__$1 = cljs.core.next.call(null,seq27069);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27070,seq27069__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args27077 = [];
var len__25866__auto___27127 = arguments.length;
var i__25867__auto___27128 = (0);
while(true){
if((i__25867__auto___27128 < len__25866__auto___27127)){
args27077.push((arguments[i__25867__auto___27128]));

var G__27129 = (i__25867__auto___27128 + (1));
i__25867__auto___27128 = G__27129;
continue;
} else {
}
break;
}

var G__27079 = args27077.length;
switch (G__27079) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27077.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26964__auto___27131 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto___27131){
return (function (){
var f__26965__auto__ = (function (){var switch__26851__auto__ = ((function (c__26964__auto___27131){
return (function (state_27103){
var state_val_27104 = (state_27103[(1)]);
if((state_val_27104 === (7))){
var inst_27099 = (state_27103[(2)]);
var state_27103__$1 = state_27103;
var statearr_27105_27132 = state_27103__$1;
(statearr_27105_27132[(2)] = inst_27099);

(statearr_27105_27132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (1))){
var state_27103__$1 = state_27103;
var statearr_27106_27133 = state_27103__$1;
(statearr_27106_27133[(2)] = null);

(statearr_27106_27133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (4))){
var inst_27082 = (state_27103[(7)]);
var inst_27082__$1 = (state_27103[(2)]);
var inst_27083 = (inst_27082__$1 == null);
var state_27103__$1 = (function (){var statearr_27107 = state_27103;
(statearr_27107[(7)] = inst_27082__$1);

return statearr_27107;
})();
if(cljs.core.truth_(inst_27083)){
var statearr_27108_27134 = state_27103__$1;
(statearr_27108_27134[(1)] = (5));

} else {
var statearr_27109_27135 = state_27103__$1;
(statearr_27109_27135[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (13))){
var state_27103__$1 = state_27103;
var statearr_27110_27136 = state_27103__$1;
(statearr_27110_27136[(2)] = null);

(statearr_27110_27136[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (6))){
var inst_27082 = (state_27103[(7)]);
var state_27103__$1 = state_27103;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27103__$1,(11),to,inst_27082);
} else {
if((state_val_27104 === (3))){
var inst_27101 = (state_27103[(2)]);
var state_27103__$1 = state_27103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27103__$1,inst_27101);
} else {
if((state_val_27104 === (12))){
var state_27103__$1 = state_27103;
var statearr_27111_27137 = state_27103__$1;
(statearr_27111_27137[(2)] = null);

(statearr_27111_27137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (2))){
var state_27103__$1 = state_27103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27103__$1,(4),from);
} else {
if((state_val_27104 === (11))){
var inst_27092 = (state_27103[(2)]);
var state_27103__$1 = state_27103;
if(cljs.core.truth_(inst_27092)){
var statearr_27112_27138 = state_27103__$1;
(statearr_27112_27138[(1)] = (12));

} else {
var statearr_27113_27139 = state_27103__$1;
(statearr_27113_27139[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (9))){
var state_27103__$1 = state_27103;
var statearr_27114_27140 = state_27103__$1;
(statearr_27114_27140[(2)] = null);

(statearr_27114_27140[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (5))){
var state_27103__$1 = state_27103;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27115_27141 = state_27103__$1;
(statearr_27115_27141[(1)] = (8));

} else {
var statearr_27116_27142 = state_27103__$1;
(statearr_27116_27142[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (14))){
var inst_27097 = (state_27103[(2)]);
var state_27103__$1 = state_27103;
var statearr_27117_27143 = state_27103__$1;
(statearr_27117_27143[(2)] = inst_27097);

(statearr_27117_27143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (10))){
var inst_27089 = (state_27103[(2)]);
var state_27103__$1 = state_27103;
var statearr_27118_27144 = state_27103__$1;
(statearr_27118_27144[(2)] = inst_27089);

(statearr_27118_27144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27104 === (8))){
var inst_27086 = cljs.core.async.close_BANG_.call(null,to);
var state_27103__$1 = state_27103;
var statearr_27119_27145 = state_27103__$1;
(statearr_27119_27145[(2)] = inst_27086);

(statearr_27119_27145[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__26964__auto___27131))
;
return ((function (switch__26851__auto__,c__26964__auto___27131){
return (function() {
var cljs$core$async$state_machine__26852__auto__ = null;
var cljs$core$async$state_machine__26852__auto____0 = (function (){
var statearr_27123 = [null,null,null,null,null,null,null,null];
(statearr_27123[(0)] = cljs$core$async$state_machine__26852__auto__);

(statearr_27123[(1)] = (1));

return statearr_27123;
});
var cljs$core$async$state_machine__26852__auto____1 = (function (state_27103){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_27103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e27124){if((e27124 instanceof Object)){
var ex__26855__auto__ = e27124;
var statearr_27125_27146 = state_27103;
(statearr_27125_27146[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27147 = state_27103;
state_27103 = G__27147;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$state_machine__26852__auto__ = function(state_27103){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26852__auto____1.call(this,state_27103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26852__auto____0;
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26852__auto____1;
return cljs$core$async$state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26964__auto___27131))
})();
var state__26966__auto__ = (function (){var statearr_27126 = f__26965__auto__.call(null);
(statearr_27126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26964__auto___27131);

return statearr_27126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto___27131))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27335){
var vec__27336 = p__27335;
var v = cljs.core.nth.call(null,vec__27336,(0),null);
var p = cljs.core.nth.call(null,vec__27336,(1),null);
var job = vec__27336;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26964__auto___27522 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto___27522,res,vec__27336,v,p,job,jobs,results){
return (function (){
var f__26965__auto__ = (function (){var switch__26851__auto__ = ((function (c__26964__auto___27522,res,vec__27336,v,p,job,jobs,results){
return (function (state_27343){
var state_val_27344 = (state_27343[(1)]);
if((state_val_27344 === (1))){
var state_27343__$1 = state_27343;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27343__$1,(2),res,v);
} else {
if((state_val_27344 === (2))){
var inst_27340 = (state_27343[(2)]);
var inst_27341 = cljs.core.async.close_BANG_.call(null,res);
var state_27343__$1 = (function (){var statearr_27345 = state_27343;
(statearr_27345[(7)] = inst_27340);

return statearr_27345;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27343__$1,inst_27341);
} else {
return null;
}
}
});})(c__26964__auto___27522,res,vec__27336,v,p,job,jobs,results))
;
return ((function (switch__26851__auto__,c__26964__auto___27522,res,vec__27336,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0 = (function (){
var statearr_27349 = [null,null,null,null,null,null,null,null];
(statearr_27349[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__);

(statearr_27349[(1)] = (1));

return statearr_27349;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1 = (function (state_27343){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_27343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e27350){if((e27350 instanceof Object)){
var ex__26855__auto__ = e27350;
var statearr_27351_27523 = state_27343;
(statearr_27351_27523[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27524 = state_27343;
state_27343 = G__27524;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__ = function(state_27343){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1.call(this,state_27343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26964__auto___27522,res,vec__27336,v,p,job,jobs,results))
})();
var state__26966__auto__ = (function (){var statearr_27352 = f__26965__auto__.call(null);
(statearr_27352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26964__auto___27522);

return statearr_27352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto___27522,res,vec__27336,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27353){
var vec__27354 = p__27353;
var v = cljs.core.nth.call(null,vec__27354,(0),null);
var p = cljs.core.nth.call(null,vec__27354,(1),null);
var job = vec__27354;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25706__auto___27525 = n;
var __27526 = (0);
while(true){
if((__27526 < n__25706__auto___27525)){
var G__27357_27527 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27357_27527) {
case "compute":
var c__26964__auto___27529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27526,c__26964__auto___27529,G__27357_27527,n__25706__auto___27525,jobs,results,process,async){
return (function (){
var f__26965__auto__ = (function (){var switch__26851__auto__ = ((function (__27526,c__26964__auto___27529,G__27357_27527,n__25706__auto___27525,jobs,results,process,async){
return (function (state_27370){
var state_val_27371 = (state_27370[(1)]);
if((state_val_27371 === (1))){
var state_27370__$1 = state_27370;
var statearr_27372_27530 = state_27370__$1;
(statearr_27372_27530[(2)] = null);

(statearr_27372_27530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27371 === (2))){
var state_27370__$1 = state_27370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27370__$1,(4),jobs);
} else {
if((state_val_27371 === (3))){
var inst_27368 = (state_27370[(2)]);
var state_27370__$1 = state_27370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27370__$1,inst_27368);
} else {
if((state_val_27371 === (4))){
var inst_27360 = (state_27370[(2)]);
var inst_27361 = process.call(null,inst_27360);
var state_27370__$1 = state_27370;
if(cljs.core.truth_(inst_27361)){
var statearr_27373_27531 = state_27370__$1;
(statearr_27373_27531[(1)] = (5));

} else {
var statearr_27374_27532 = state_27370__$1;
(statearr_27374_27532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27371 === (5))){
var state_27370__$1 = state_27370;
var statearr_27375_27533 = state_27370__$1;
(statearr_27375_27533[(2)] = null);

(statearr_27375_27533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27371 === (6))){
var state_27370__$1 = state_27370;
var statearr_27376_27534 = state_27370__$1;
(statearr_27376_27534[(2)] = null);

(statearr_27376_27534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27371 === (7))){
var inst_27366 = (state_27370[(2)]);
var state_27370__$1 = state_27370;
var statearr_27377_27535 = state_27370__$1;
(statearr_27377_27535[(2)] = inst_27366);

(statearr_27377_27535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27526,c__26964__auto___27529,G__27357_27527,n__25706__auto___27525,jobs,results,process,async))
;
return ((function (__27526,switch__26851__auto__,c__26964__auto___27529,G__27357_27527,n__25706__auto___27525,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0 = (function (){
var statearr_27381 = [null,null,null,null,null,null,null];
(statearr_27381[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__);

(statearr_27381[(1)] = (1));

return statearr_27381;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1 = (function (state_27370){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_27370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e27382){if((e27382 instanceof Object)){
var ex__26855__auto__ = e27382;
var statearr_27383_27536 = state_27370;
(statearr_27383_27536[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27537 = state_27370;
state_27370 = G__27537;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__ = function(state_27370){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1.call(this,state_27370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__;
})()
;})(__27526,switch__26851__auto__,c__26964__auto___27529,G__27357_27527,n__25706__auto___27525,jobs,results,process,async))
})();
var state__26966__auto__ = (function (){var statearr_27384 = f__26965__auto__.call(null);
(statearr_27384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26964__auto___27529);

return statearr_27384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(__27526,c__26964__auto___27529,G__27357_27527,n__25706__auto___27525,jobs,results,process,async))
);


break;
case "async":
var c__26964__auto___27538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27526,c__26964__auto___27538,G__27357_27527,n__25706__auto___27525,jobs,results,process,async){
return (function (){
var f__26965__auto__ = (function (){var switch__26851__auto__ = ((function (__27526,c__26964__auto___27538,G__27357_27527,n__25706__auto___27525,jobs,results,process,async){
return (function (state_27397){
var state_val_27398 = (state_27397[(1)]);
if((state_val_27398 === (1))){
var state_27397__$1 = state_27397;
var statearr_27399_27539 = state_27397__$1;
(statearr_27399_27539[(2)] = null);

(statearr_27399_27539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (2))){
var state_27397__$1 = state_27397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27397__$1,(4),jobs);
} else {
if((state_val_27398 === (3))){
var inst_27395 = (state_27397[(2)]);
var state_27397__$1 = state_27397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27397__$1,inst_27395);
} else {
if((state_val_27398 === (4))){
var inst_27387 = (state_27397[(2)]);
var inst_27388 = async.call(null,inst_27387);
var state_27397__$1 = state_27397;
if(cljs.core.truth_(inst_27388)){
var statearr_27400_27540 = state_27397__$1;
(statearr_27400_27540[(1)] = (5));

} else {
var statearr_27401_27541 = state_27397__$1;
(statearr_27401_27541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (5))){
var state_27397__$1 = state_27397;
var statearr_27402_27542 = state_27397__$1;
(statearr_27402_27542[(2)] = null);

(statearr_27402_27542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (6))){
var state_27397__$1 = state_27397;
var statearr_27403_27543 = state_27397__$1;
(statearr_27403_27543[(2)] = null);

(statearr_27403_27543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (7))){
var inst_27393 = (state_27397[(2)]);
var state_27397__$1 = state_27397;
var statearr_27404_27544 = state_27397__$1;
(statearr_27404_27544[(2)] = inst_27393);

(statearr_27404_27544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27526,c__26964__auto___27538,G__27357_27527,n__25706__auto___27525,jobs,results,process,async))
;
return ((function (__27526,switch__26851__auto__,c__26964__auto___27538,G__27357_27527,n__25706__auto___27525,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0 = (function (){
var statearr_27408 = [null,null,null,null,null,null,null];
(statearr_27408[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__);

(statearr_27408[(1)] = (1));

return statearr_27408;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1 = (function (state_27397){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_27397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e27409){if((e27409 instanceof Object)){
var ex__26855__auto__ = e27409;
var statearr_27410_27545 = state_27397;
(statearr_27410_27545[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27546 = state_27397;
state_27397 = G__27546;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__ = function(state_27397){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1.call(this,state_27397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__;
})()
;})(__27526,switch__26851__auto__,c__26964__auto___27538,G__27357_27527,n__25706__auto___27525,jobs,results,process,async))
})();
var state__26966__auto__ = (function (){var statearr_27411 = f__26965__auto__.call(null);
(statearr_27411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26964__auto___27538);

return statearr_27411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(__27526,c__26964__auto___27538,G__27357_27527,n__25706__auto___27525,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27547 = (__27526 + (1));
__27526 = G__27547;
continue;
} else {
}
break;
}

var c__26964__auto___27548 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto___27548,jobs,results,process,async){
return (function (){
var f__26965__auto__ = (function (){var switch__26851__auto__ = ((function (c__26964__auto___27548,jobs,results,process,async){
return (function (state_27433){
var state_val_27434 = (state_27433[(1)]);
if((state_val_27434 === (1))){
var state_27433__$1 = state_27433;
var statearr_27435_27549 = state_27433__$1;
(statearr_27435_27549[(2)] = null);

(statearr_27435_27549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27434 === (2))){
var state_27433__$1 = state_27433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27433__$1,(4),from);
} else {
if((state_val_27434 === (3))){
var inst_27431 = (state_27433[(2)]);
var state_27433__$1 = state_27433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27433__$1,inst_27431);
} else {
if((state_val_27434 === (4))){
var inst_27414 = (state_27433[(7)]);
var inst_27414__$1 = (state_27433[(2)]);
var inst_27415 = (inst_27414__$1 == null);
var state_27433__$1 = (function (){var statearr_27436 = state_27433;
(statearr_27436[(7)] = inst_27414__$1);

return statearr_27436;
})();
if(cljs.core.truth_(inst_27415)){
var statearr_27437_27550 = state_27433__$1;
(statearr_27437_27550[(1)] = (5));

} else {
var statearr_27438_27551 = state_27433__$1;
(statearr_27438_27551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27434 === (5))){
var inst_27417 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27433__$1 = state_27433;
var statearr_27439_27552 = state_27433__$1;
(statearr_27439_27552[(2)] = inst_27417);

(statearr_27439_27552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27434 === (6))){
var inst_27414 = (state_27433[(7)]);
var inst_27419 = (state_27433[(8)]);
var inst_27419__$1 = cljs.core.async.chan.call(null,(1));
var inst_27420 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27421 = [inst_27414,inst_27419__$1];
var inst_27422 = (new cljs.core.PersistentVector(null,2,(5),inst_27420,inst_27421,null));
var state_27433__$1 = (function (){var statearr_27440 = state_27433;
(statearr_27440[(8)] = inst_27419__$1);

return statearr_27440;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27433__$1,(8),jobs,inst_27422);
} else {
if((state_val_27434 === (7))){
var inst_27429 = (state_27433[(2)]);
var state_27433__$1 = state_27433;
var statearr_27441_27553 = state_27433__$1;
(statearr_27441_27553[(2)] = inst_27429);

(statearr_27441_27553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27434 === (8))){
var inst_27419 = (state_27433[(8)]);
var inst_27424 = (state_27433[(2)]);
var state_27433__$1 = (function (){var statearr_27442 = state_27433;
(statearr_27442[(9)] = inst_27424);

return statearr_27442;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27433__$1,(9),results,inst_27419);
} else {
if((state_val_27434 === (9))){
var inst_27426 = (state_27433[(2)]);
var state_27433__$1 = (function (){var statearr_27443 = state_27433;
(statearr_27443[(10)] = inst_27426);

return statearr_27443;
})();
var statearr_27444_27554 = state_27433__$1;
(statearr_27444_27554[(2)] = null);

(statearr_27444_27554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__26964__auto___27548,jobs,results,process,async))
;
return ((function (switch__26851__auto__,c__26964__auto___27548,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0 = (function (){
var statearr_27448 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27448[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__);

(statearr_27448[(1)] = (1));

return statearr_27448;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1 = (function (state_27433){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_27433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e27449){if((e27449 instanceof Object)){
var ex__26855__auto__ = e27449;
var statearr_27450_27555 = state_27433;
(statearr_27450_27555[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27556 = state_27433;
state_27433 = G__27556;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__ = function(state_27433){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1.call(this,state_27433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26964__auto___27548,jobs,results,process,async))
})();
var state__26966__auto__ = (function (){var statearr_27451 = f__26965__auto__.call(null);
(statearr_27451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26964__auto___27548);

return statearr_27451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto___27548,jobs,results,process,async))
);


var c__26964__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto__,jobs,results,process,async){
return (function (){
var f__26965__auto__ = (function (){var switch__26851__auto__ = ((function (c__26964__auto__,jobs,results,process,async){
return (function (state_27489){
var state_val_27490 = (state_27489[(1)]);
if((state_val_27490 === (7))){
var inst_27485 = (state_27489[(2)]);
var state_27489__$1 = state_27489;
var statearr_27491_27557 = state_27489__$1;
(statearr_27491_27557[(2)] = inst_27485);

(statearr_27491_27557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (20))){
var state_27489__$1 = state_27489;
var statearr_27492_27558 = state_27489__$1;
(statearr_27492_27558[(2)] = null);

(statearr_27492_27558[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (1))){
var state_27489__$1 = state_27489;
var statearr_27493_27559 = state_27489__$1;
(statearr_27493_27559[(2)] = null);

(statearr_27493_27559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (4))){
var inst_27454 = (state_27489[(7)]);
var inst_27454__$1 = (state_27489[(2)]);
var inst_27455 = (inst_27454__$1 == null);
var state_27489__$1 = (function (){var statearr_27494 = state_27489;
(statearr_27494[(7)] = inst_27454__$1);

return statearr_27494;
})();
if(cljs.core.truth_(inst_27455)){
var statearr_27495_27560 = state_27489__$1;
(statearr_27495_27560[(1)] = (5));

} else {
var statearr_27496_27561 = state_27489__$1;
(statearr_27496_27561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (15))){
var inst_27467 = (state_27489[(8)]);
var state_27489__$1 = state_27489;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27489__$1,(18),to,inst_27467);
} else {
if((state_val_27490 === (21))){
var inst_27480 = (state_27489[(2)]);
var state_27489__$1 = state_27489;
var statearr_27497_27562 = state_27489__$1;
(statearr_27497_27562[(2)] = inst_27480);

(statearr_27497_27562[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (13))){
var inst_27482 = (state_27489[(2)]);
var state_27489__$1 = (function (){var statearr_27498 = state_27489;
(statearr_27498[(9)] = inst_27482);

return statearr_27498;
})();
var statearr_27499_27563 = state_27489__$1;
(statearr_27499_27563[(2)] = null);

(statearr_27499_27563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (6))){
var inst_27454 = (state_27489[(7)]);
var state_27489__$1 = state_27489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27489__$1,(11),inst_27454);
} else {
if((state_val_27490 === (17))){
var inst_27475 = (state_27489[(2)]);
var state_27489__$1 = state_27489;
if(cljs.core.truth_(inst_27475)){
var statearr_27500_27564 = state_27489__$1;
(statearr_27500_27564[(1)] = (19));

} else {
var statearr_27501_27565 = state_27489__$1;
(statearr_27501_27565[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (3))){
var inst_27487 = (state_27489[(2)]);
var state_27489__$1 = state_27489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27489__$1,inst_27487);
} else {
if((state_val_27490 === (12))){
var inst_27464 = (state_27489[(10)]);
var state_27489__$1 = state_27489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27489__$1,(14),inst_27464);
} else {
if((state_val_27490 === (2))){
var state_27489__$1 = state_27489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27489__$1,(4),results);
} else {
if((state_val_27490 === (19))){
var state_27489__$1 = state_27489;
var statearr_27502_27566 = state_27489__$1;
(statearr_27502_27566[(2)] = null);

(statearr_27502_27566[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (11))){
var inst_27464 = (state_27489[(2)]);
var state_27489__$1 = (function (){var statearr_27503 = state_27489;
(statearr_27503[(10)] = inst_27464);

return statearr_27503;
})();
var statearr_27504_27567 = state_27489__$1;
(statearr_27504_27567[(2)] = null);

(statearr_27504_27567[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (9))){
var state_27489__$1 = state_27489;
var statearr_27505_27568 = state_27489__$1;
(statearr_27505_27568[(2)] = null);

(statearr_27505_27568[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (5))){
var state_27489__$1 = state_27489;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27506_27569 = state_27489__$1;
(statearr_27506_27569[(1)] = (8));

} else {
var statearr_27507_27570 = state_27489__$1;
(statearr_27507_27570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (14))){
var inst_27467 = (state_27489[(8)]);
var inst_27469 = (state_27489[(11)]);
var inst_27467__$1 = (state_27489[(2)]);
var inst_27468 = (inst_27467__$1 == null);
var inst_27469__$1 = cljs.core.not.call(null,inst_27468);
var state_27489__$1 = (function (){var statearr_27508 = state_27489;
(statearr_27508[(8)] = inst_27467__$1);

(statearr_27508[(11)] = inst_27469__$1);

return statearr_27508;
})();
if(inst_27469__$1){
var statearr_27509_27571 = state_27489__$1;
(statearr_27509_27571[(1)] = (15));

} else {
var statearr_27510_27572 = state_27489__$1;
(statearr_27510_27572[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (16))){
var inst_27469 = (state_27489[(11)]);
var state_27489__$1 = state_27489;
var statearr_27511_27573 = state_27489__$1;
(statearr_27511_27573[(2)] = inst_27469);

(statearr_27511_27573[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (10))){
var inst_27461 = (state_27489[(2)]);
var state_27489__$1 = state_27489;
var statearr_27512_27574 = state_27489__$1;
(statearr_27512_27574[(2)] = inst_27461);

(statearr_27512_27574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (18))){
var inst_27472 = (state_27489[(2)]);
var state_27489__$1 = state_27489;
var statearr_27513_27575 = state_27489__$1;
(statearr_27513_27575[(2)] = inst_27472);

(statearr_27513_27575[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (8))){
var inst_27458 = cljs.core.async.close_BANG_.call(null,to);
var state_27489__$1 = state_27489;
var statearr_27514_27576 = state_27489__$1;
(statearr_27514_27576[(2)] = inst_27458);

(statearr_27514_27576[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__26964__auto__,jobs,results,process,async))
;
return ((function (switch__26851__auto__,c__26964__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0 = (function (){
var statearr_27518 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27518[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__);

(statearr_27518[(1)] = (1));

return statearr_27518;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1 = (function (state_27489){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_27489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e27519){if((e27519 instanceof Object)){
var ex__26855__auto__ = e27519;
var statearr_27520_27577 = state_27489;
(statearr_27520_27577[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27519;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27578 = state_27489;
state_27489 = G__27578;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__ = function(state_27489){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1.call(this,state_27489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26964__auto__,jobs,results,process,async))
})();
var state__26966__auto__ = (function (){var statearr_27521 = f__26965__auto__.call(null);
(statearr_27521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26964__auto__);

return statearr_27521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto__,jobs,results,process,async))
);

return c__26964__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args27579 = [];
var len__25866__auto___27582 = arguments.length;
var i__25867__auto___27583 = (0);
while(true){
if((i__25867__auto___27583 < len__25866__auto___27582)){
args27579.push((arguments[i__25867__auto___27583]));

var G__27584 = (i__25867__auto___27583 + (1));
i__25867__auto___27583 = G__27584;
continue;
} else {
}
break;
}

var G__27581 = args27579.length;
switch (G__27581) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27579.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args27586 = [];
var len__25866__auto___27589 = arguments.length;
var i__25867__auto___27590 = (0);
while(true){
if((i__25867__auto___27590 < len__25866__auto___27589)){
args27586.push((arguments[i__25867__auto___27590]));

var G__27591 = (i__25867__auto___27590 + (1));
i__25867__auto___27590 = G__27591;
continue;
} else {
}
break;
}

var G__27588 = args27586.length;
switch (G__27588) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27586.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args27593 = [];
var len__25866__auto___27646 = arguments.length;
var i__25867__auto___27647 = (0);
while(true){
if((i__25867__auto___27647 < len__25866__auto___27646)){
args27593.push((arguments[i__25867__auto___27647]));

var G__27648 = (i__25867__auto___27647 + (1));
i__25867__auto___27647 = G__27648;
continue;
} else {
}
break;
}

var G__27595 = args27593.length;
switch (G__27595) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27593.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__26964__auto___27650 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto___27650,tc,fc){
return (function (){
var f__26965__auto__ = (function (){var switch__26851__auto__ = ((function (c__26964__auto___27650,tc,fc){
return (function (state_27621){
var state_val_27622 = (state_27621[(1)]);
if((state_val_27622 === (7))){
var inst_27617 = (state_27621[(2)]);
var state_27621__$1 = state_27621;
var statearr_27623_27651 = state_27621__$1;
(statearr_27623_27651[(2)] = inst_27617);

(statearr_27623_27651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (1))){
var state_27621__$1 = state_27621;
var statearr_27624_27652 = state_27621__$1;
(statearr_27624_27652[(2)] = null);

(statearr_27624_27652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (4))){
var inst_27598 = (state_27621[(7)]);
var inst_27598__$1 = (state_27621[(2)]);
var inst_27599 = (inst_27598__$1 == null);
var state_27621__$1 = (function (){var statearr_27625 = state_27621;
(statearr_27625[(7)] = inst_27598__$1);

return statearr_27625;
})();
if(cljs.core.truth_(inst_27599)){
var statearr_27626_27653 = state_27621__$1;
(statearr_27626_27653[(1)] = (5));

} else {
var statearr_27627_27654 = state_27621__$1;
(statearr_27627_27654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (13))){
var state_27621__$1 = state_27621;
var statearr_27628_27655 = state_27621__$1;
(statearr_27628_27655[(2)] = null);

(statearr_27628_27655[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (6))){
var inst_27598 = (state_27621[(7)]);
var inst_27604 = p.call(null,inst_27598);
var state_27621__$1 = state_27621;
if(cljs.core.truth_(inst_27604)){
var statearr_27629_27656 = state_27621__$1;
(statearr_27629_27656[(1)] = (9));

} else {
var statearr_27630_27657 = state_27621__$1;
(statearr_27630_27657[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (3))){
var inst_27619 = (state_27621[(2)]);
var state_27621__$1 = state_27621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27621__$1,inst_27619);
} else {
if((state_val_27622 === (12))){
var state_27621__$1 = state_27621;
var statearr_27631_27658 = state_27621__$1;
(statearr_27631_27658[(2)] = null);

(statearr_27631_27658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (2))){
var state_27621__$1 = state_27621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27621__$1,(4),ch);
} else {
if((state_val_27622 === (11))){
var inst_27598 = (state_27621[(7)]);
var inst_27608 = (state_27621[(2)]);
var state_27621__$1 = state_27621;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27621__$1,(8),inst_27608,inst_27598);
} else {
if((state_val_27622 === (9))){
var state_27621__$1 = state_27621;
var statearr_27632_27659 = state_27621__$1;
(statearr_27632_27659[(2)] = tc);

(statearr_27632_27659[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (5))){
var inst_27601 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27602 = cljs.core.async.close_BANG_.call(null,fc);
var state_27621__$1 = (function (){var statearr_27633 = state_27621;
(statearr_27633[(8)] = inst_27601);

return statearr_27633;
})();
var statearr_27634_27660 = state_27621__$1;
(statearr_27634_27660[(2)] = inst_27602);

(statearr_27634_27660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (14))){
var inst_27615 = (state_27621[(2)]);
var state_27621__$1 = state_27621;
var statearr_27635_27661 = state_27621__$1;
(statearr_27635_27661[(2)] = inst_27615);

(statearr_27635_27661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (10))){
var state_27621__$1 = state_27621;
var statearr_27636_27662 = state_27621__$1;
(statearr_27636_27662[(2)] = fc);

(statearr_27636_27662[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (8))){
var inst_27610 = (state_27621[(2)]);
var state_27621__$1 = state_27621;
if(cljs.core.truth_(inst_27610)){
var statearr_27637_27663 = state_27621__$1;
(statearr_27637_27663[(1)] = (12));

} else {
var statearr_27638_27664 = state_27621__$1;
(statearr_27638_27664[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__26964__auto___27650,tc,fc))
;
return ((function (switch__26851__auto__,c__26964__auto___27650,tc,fc){
return (function() {
var cljs$core$async$state_machine__26852__auto__ = null;
var cljs$core$async$state_machine__26852__auto____0 = (function (){
var statearr_27642 = [null,null,null,null,null,null,null,null,null];
(statearr_27642[(0)] = cljs$core$async$state_machine__26852__auto__);

(statearr_27642[(1)] = (1));

return statearr_27642;
});
var cljs$core$async$state_machine__26852__auto____1 = (function (state_27621){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_27621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e27643){if((e27643 instanceof Object)){
var ex__26855__auto__ = e27643;
var statearr_27644_27665 = state_27621;
(statearr_27644_27665[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27666 = state_27621;
state_27621 = G__27666;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$state_machine__26852__auto__ = function(state_27621){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26852__auto____1.call(this,state_27621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26852__auto____0;
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26852__auto____1;
return cljs$core$async$state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26964__auto___27650,tc,fc))
})();
var state__26966__auto__ = (function (){var statearr_27645 = f__26965__auto__.call(null);
(statearr_27645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26964__auto___27650);

return statearr_27645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto___27650,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__26964__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto__){
return (function (){
var f__26965__auto__ = (function (){var switch__26851__auto__ = ((function (c__26964__auto__){
return (function (state_27730){
var state_val_27731 = (state_27730[(1)]);
if((state_val_27731 === (7))){
var inst_27726 = (state_27730[(2)]);
var state_27730__$1 = state_27730;
var statearr_27732_27753 = state_27730__$1;
(statearr_27732_27753[(2)] = inst_27726);

(statearr_27732_27753[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27731 === (1))){
var inst_27710 = init;
var state_27730__$1 = (function (){var statearr_27733 = state_27730;
(statearr_27733[(7)] = inst_27710);

return statearr_27733;
})();
var statearr_27734_27754 = state_27730__$1;
(statearr_27734_27754[(2)] = null);

(statearr_27734_27754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27731 === (4))){
var inst_27713 = (state_27730[(8)]);
var inst_27713__$1 = (state_27730[(2)]);
var inst_27714 = (inst_27713__$1 == null);
var state_27730__$1 = (function (){var statearr_27735 = state_27730;
(statearr_27735[(8)] = inst_27713__$1);

return statearr_27735;
})();
if(cljs.core.truth_(inst_27714)){
var statearr_27736_27755 = state_27730__$1;
(statearr_27736_27755[(1)] = (5));

} else {
var statearr_27737_27756 = state_27730__$1;
(statearr_27737_27756[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27731 === (6))){
var inst_27713 = (state_27730[(8)]);
var inst_27710 = (state_27730[(7)]);
var inst_27717 = (state_27730[(9)]);
var inst_27717__$1 = f.call(null,inst_27710,inst_27713);
var inst_27718 = cljs.core.reduced_QMARK_.call(null,inst_27717__$1);
var state_27730__$1 = (function (){var statearr_27738 = state_27730;
(statearr_27738[(9)] = inst_27717__$1);

return statearr_27738;
})();
if(inst_27718){
var statearr_27739_27757 = state_27730__$1;
(statearr_27739_27757[(1)] = (8));

} else {
var statearr_27740_27758 = state_27730__$1;
(statearr_27740_27758[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27731 === (3))){
var inst_27728 = (state_27730[(2)]);
var state_27730__$1 = state_27730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27730__$1,inst_27728);
} else {
if((state_val_27731 === (2))){
var state_27730__$1 = state_27730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27730__$1,(4),ch);
} else {
if((state_val_27731 === (9))){
var inst_27717 = (state_27730[(9)]);
var inst_27710 = inst_27717;
var state_27730__$1 = (function (){var statearr_27741 = state_27730;
(statearr_27741[(7)] = inst_27710);

return statearr_27741;
})();
var statearr_27742_27759 = state_27730__$1;
(statearr_27742_27759[(2)] = null);

(statearr_27742_27759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27731 === (5))){
var inst_27710 = (state_27730[(7)]);
var state_27730__$1 = state_27730;
var statearr_27743_27760 = state_27730__$1;
(statearr_27743_27760[(2)] = inst_27710);

(statearr_27743_27760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27731 === (10))){
var inst_27724 = (state_27730[(2)]);
var state_27730__$1 = state_27730;
var statearr_27744_27761 = state_27730__$1;
(statearr_27744_27761[(2)] = inst_27724);

(statearr_27744_27761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27731 === (8))){
var inst_27717 = (state_27730[(9)]);
var inst_27720 = cljs.core.deref.call(null,inst_27717);
var state_27730__$1 = state_27730;
var statearr_27745_27762 = state_27730__$1;
(statearr_27745_27762[(2)] = inst_27720);

(statearr_27745_27762[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__26964__auto__))
;
return ((function (switch__26851__auto__,c__26964__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26852__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26852__auto____0 = (function (){
var statearr_27749 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27749[(0)] = cljs$core$async$reduce_$_state_machine__26852__auto__);

(statearr_27749[(1)] = (1));

return statearr_27749;
});
var cljs$core$async$reduce_$_state_machine__26852__auto____1 = (function (state_27730){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_27730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e27750){if((e27750 instanceof Object)){
var ex__26855__auto__ = e27750;
var statearr_27751_27763 = state_27730;
(statearr_27751_27763[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27764 = state_27730;
state_27730 = G__27764;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26852__auto__ = function(state_27730){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26852__auto____1.call(this,state_27730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26852__auto____0;
cljs$core$async$reduce_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26852__auto____1;
return cljs$core$async$reduce_$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26964__auto__))
})();
var state__26966__auto__ = (function (){var statearr_27752 = f__26965__auto__.call(null);
(statearr_27752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26964__auto__);

return statearr_27752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto__))
);

return c__26964__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args27765 = [];
var len__25866__auto___27817 = arguments.length;
var i__25867__auto___27818 = (0);
while(true){
if((i__25867__auto___27818 < len__25866__auto___27817)){
args27765.push((arguments[i__25867__auto___27818]));

var G__27819 = (i__25867__auto___27818 + (1));
i__25867__auto___27818 = G__27819;
continue;
} else {
}
break;
}

var G__27767 = args27765.length;
switch (G__27767) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27765.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26964__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto__){
return (function (){
var f__26965__auto__ = (function (){var switch__26851__auto__ = ((function (c__26964__auto__){
return (function (state_27792){
var state_val_27793 = (state_27792[(1)]);
if((state_val_27793 === (7))){
var inst_27774 = (state_27792[(2)]);
var state_27792__$1 = state_27792;
var statearr_27794_27821 = state_27792__$1;
(statearr_27794_27821[(2)] = inst_27774);

(statearr_27794_27821[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27793 === (1))){
var inst_27768 = cljs.core.seq.call(null,coll);
var inst_27769 = inst_27768;
var state_27792__$1 = (function (){var statearr_27795 = state_27792;
(statearr_27795[(7)] = inst_27769);

return statearr_27795;
})();
var statearr_27796_27822 = state_27792__$1;
(statearr_27796_27822[(2)] = null);

(statearr_27796_27822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27793 === (4))){
var inst_27769 = (state_27792[(7)]);
var inst_27772 = cljs.core.first.call(null,inst_27769);
var state_27792__$1 = state_27792;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27792__$1,(7),ch,inst_27772);
} else {
if((state_val_27793 === (13))){
var inst_27786 = (state_27792[(2)]);
var state_27792__$1 = state_27792;
var statearr_27797_27823 = state_27792__$1;
(statearr_27797_27823[(2)] = inst_27786);

(statearr_27797_27823[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27793 === (6))){
var inst_27777 = (state_27792[(2)]);
var state_27792__$1 = state_27792;
if(cljs.core.truth_(inst_27777)){
var statearr_27798_27824 = state_27792__$1;
(statearr_27798_27824[(1)] = (8));

} else {
var statearr_27799_27825 = state_27792__$1;
(statearr_27799_27825[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27793 === (3))){
var inst_27790 = (state_27792[(2)]);
var state_27792__$1 = state_27792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27792__$1,inst_27790);
} else {
if((state_val_27793 === (12))){
var state_27792__$1 = state_27792;
var statearr_27800_27826 = state_27792__$1;
(statearr_27800_27826[(2)] = null);

(statearr_27800_27826[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27793 === (2))){
var inst_27769 = (state_27792[(7)]);
var state_27792__$1 = state_27792;
if(cljs.core.truth_(inst_27769)){
var statearr_27801_27827 = state_27792__$1;
(statearr_27801_27827[(1)] = (4));

} else {
var statearr_27802_27828 = state_27792__$1;
(statearr_27802_27828[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27793 === (11))){
var inst_27783 = cljs.core.async.close_BANG_.call(null,ch);
var state_27792__$1 = state_27792;
var statearr_27803_27829 = state_27792__$1;
(statearr_27803_27829[(2)] = inst_27783);

(statearr_27803_27829[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27793 === (9))){
var state_27792__$1 = state_27792;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27804_27830 = state_27792__$1;
(statearr_27804_27830[(1)] = (11));

} else {
var statearr_27805_27831 = state_27792__$1;
(statearr_27805_27831[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27793 === (5))){
var inst_27769 = (state_27792[(7)]);
var state_27792__$1 = state_27792;
var statearr_27806_27832 = state_27792__$1;
(statearr_27806_27832[(2)] = inst_27769);

(statearr_27806_27832[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27793 === (10))){
var inst_27788 = (state_27792[(2)]);
var state_27792__$1 = state_27792;
var statearr_27807_27833 = state_27792__$1;
(statearr_27807_27833[(2)] = inst_27788);

(statearr_27807_27833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27793 === (8))){
var inst_27769 = (state_27792[(7)]);
var inst_27779 = cljs.core.next.call(null,inst_27769);
var inst_27769__$1 = inst_27779;
var state_27792__$1 = (function (){var statearr_27808 = state_27792;
(statearr_27808[(7)] = inst_27769__$1);

return statearr_27808;
})();
var statearr_27809_27834 = state_27792__$1;
(statearr_27809_27834[(2)] = null);

(statearr_27809_27834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__26964__auto__))
;
return ((function (switch__26851__auto__,c__26964__auto__){
return (function() {
var cljs$core$async$state_machine__26852__auto__ = null;
var cljs$core$async$state_machine__26852__auto____0 = (function (){
var statearr_27813 = [null,null,null,null,null,null,null,null];
(statearr_27813[(0)] = cljs$core$async$state_machine__26852__auto__);

(statearr_27813[(1)] = (1));

return statearr_27813;
});
var cljs$core$async$state_machine__26852__auto____1 = (function (state_27792){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_27792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e27814){if((e27814 instanceof Object)){
var ex__26855__auto__ = e27814;
var statearr_27815_27835 = state_27792;
(statearr_27815_27835[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27836 = state_27792;
state_27792 = G__27836;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$state_machine__26852__auto__ = function(state_27792){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26852__auto____1.call(this,state_27792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26852__auto____0;
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26852__auto____1;
return cljs$core$async$state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26964__auto__))
})();
var state__26966__auto__ = (function (){var statearr_27816 = f__26965__auto__.call(null);
(statearr_27816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26964__auto__);

return statearr_27816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto__))
);

return c__26964__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25454__auto__ = (((_ == null))?null:_);
var m__25455__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25454__auto__)]);
if(!((m__25455__auto__ == null))){
return m__25455__auto__.call(null,_);
} else {
var m__25455__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25455__auto____$1 == null))){
return m__25455__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25454__auto__ = (((m == null))?null:m);
var m__25455__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25454__auto__)]);
if(!((m__25455__auto__ == null))){
return m__25455__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25455__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25455__auto____$1 == null))){
return m__25455__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25454__auto__ = (((m == null))?null:m);
var m__25455__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25454__auto__)]);
if(!((m__25455__auto__ == null))){
return m__25455__auto__.call(null,m,ch);
} else {
var m__25455__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25455__auto____$1 == null))){
return m__25455__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25454__auto__ = (((m == null))?null:m);
var m__25455__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25454__auto__)]);
if(!((m__25455__auto__ == null))){
return m__25455__auto__.call(null,m);
} else {
var m__25455__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25455__auto____$1 == null))){
return m__25455__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28062 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28062 = (function (mult,ch,cs,meta28063){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28063 = meta28063;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28064,meta28063__$1){
var self__ = this;
var _28064__$1 = this;
return (new cljs.core.async.t_cljs$core$async28062(self__.mult,self__.ch,self__.cs,meta28063__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28062.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28064){
var self__ = this;
var _28064__$1 = this;
return self__.meta28063;
});})(cs))
;

cljs.core.async.t_cljs$core$async28062.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28062.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28062.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28062.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28062.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28062.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28062.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28063","meta28063",-422337069,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28062.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28062.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28062";

cljs.core.async.t_cljs$core$async28062.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25397__auto__,writer__25398__auto__,opt__25399__auto__){
return cljs.core._write.call(null,writer__25398__auto__,"cljs.core.async/t_cljs$core$async28062");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28062 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28062(mult__$1,ch__$1,cs__$1,meta28063){
return (new cljs.core.async.t_cljs$core$async28062(mult__$1,ch__$1,cs__$1,meta28063));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28062(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__26964__auto___28287 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto___28287,cs,m,dchan,dctr,done){
return (function (){
var f__26965__auto__ = (function (){var switch__26851__auto__ = ((function (c__26964__auto___28287,cs,m,dchan,dctr,done){
return (function (state_28199){
var state_val_28200 = (state_28199[(1)]);
if((state_val_28200 === (7))){
var inst_28195 = (state_28199[(2)]);
var state_28199__$1 = state_28199;
var statearr_28201_28288 = state_28199__$1;
(statearr_28201_28288[(2)] = inst_28195);

(statearr_28201_28288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (20))){
var inst_28098 = (state_28199[(7)]);
var inst_28110 = cljs.core.first.call(null,inst_28098);
var inst_28111 = cljs.core.nth.call(null,inst_28110,(0),null);
var inst_28112 = cljs.core.nth.call(null,inst_28110,(1),null);
var state_28199__$1 = (function (){var statearr_28202 = state_28199;
(statearr_28202[(8)] = inst_28111);

return statearr_28202;
})();
if(cljs.core.truth_(inst_28112)){
var statearr_28203_28289 = state_28199__$1;
(statearr_28203_28289[(1)] = (22));

} else {
var statearr_28204_28290 = state_28199__$1;
(statearr_28204_28290[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (27))){
var inst_28147 = (state_28199[(9)]);
var inst_28140 = (state_28199[(10)]);
var inst_28067 = (state_28199[(11)]);
var inst_28142 = (state_28199[(12)]);
var inst_28147__$1 = cljs.core._nth.call(null,inst_28140,inst_28142);
var inst_28148 = cljs.core.async.put_BANG_.call(null,inst_28147__$1,inst_28067,done);
var state_28199__$1 = (function (){var statearr_28205 = state_28199;
(statearr_28205[(9)] = inst_28147__$1);

return statearr_28205;
})();
if(cljs.core.truth_(inst_28148)){
var statearr_28206_28291 = state_28199__$1;
(statearr_28206_28291[(1)] = (30));

} else {
var statearr_28207_28292 = state_28199__$1;
(statearr_28207_28292[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (1))){
var state_28199__$1 = state_28199;
var statearr_28208_28293 = state_28199__$1;
(statearr_28208_28293[(2)] = null);

(statearr_28208_28293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (24))){
var inst_28098 = (state_28199[(7)]);
var inst_28117 = (state_28199[(2)]);
var inst_28118 = cljs.core.next.call(null,inst_28098);
var inst_28076 = inst_28118;
var inst_28077 = null;
var inst_28078 = (0);
var inst_28079 = (0);
var state_28199__$1 = (function (){var statearr_28209 = state_28199;
(statearr_28209[(13)] = inst_28076);

(statearr_28209[(14)] = inst_28079);

(statearr_28209[(15)] = inst_28117);

(statearr_28209[(16)] = inst_28077);

(statearr_28209[(17)] = inst_28078);

return statearr_28209;
})();
var statearr_28210_28294 = state_28199__$1;
(statearr_28210_28294[(2)] = null);

(statearr_28210_28294[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (39))){
var state_28199__$1 = state_28199;
var statearr_28214_28295 = state_28199__$1;
(statearr_28214_28295[(2)] = null);

(statearr_28214_28295[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (4))){
var inst_28067 = (state_28199[(11)]);
var inst_28067__$1 = (state_28199[(2)]);
var inst_28068 = (inst_28067__$1 == null);
var state_28199__$1 = (function (){var statearr_28215 = state_28199;
(statearr_28215[(11)] = inst_28067__$1);

return statearr_28215;
})();
if(cljs.core.truth_(inst_28068)){
var statearr_28216_28296 = state_28199__$1;
(statearr_28216_28296[(1)] = (5));

} else {
var statearr_28217_28297 = state_28199__$1;
(statearr_28217_28297[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (15))){
var inst_28076 = (state_28199[(13)]);
var inst_28079 = (state_28199[(14)]);
var inst_28077 = (state_28199[(16)]);
var inst_28078 = (state_28199[(17)]);
var inst_28094 = (state_28199[(2)]);
var inst_28095 = (inst_28079 + (1));
var tmp28211 = inst_28076;
var tmp28212 = inst_28077;
var tmp28213 = inst_28078;
var inst_28076__$1 = tmp28211;
var inst_28077__$1 = tmp28212;
var inst_28078__$1 = tmp28213;
var inst_28079__$1 = inst_28095;
var state_28199__$1 = (function (){var statearr_28218 = state_28199;
(statearr_28218[(13)] = inst_28076__$1);

(statearr_28218[(18)] = inst_28094);

(statearr_28218[(14)] = inst_28079__$1);

(statearr_28218[(16)] = inst_28077__$1);

(statearr_28218[(17)] = inst_28078__$1);

return statearr_28218;
})();
var statearr_28219_28298 = state_28199__$1;
(statearr_28219_28298[(2)] = null);

(statearr_28219_28298[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (21))){
var inst_28121 = (state_28199[(2)]);
var state_28199__$1 = state_28199;
var statearr_28223_28299 = state_28199__$1;
(statearr_28223_28299[(2)] = inst_28121);

(statearr_28223_28299[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (31))){
var inst_28147 = (state_28199[(9)]);
var inst_28151 = done.call(null,null);
var inst_28152 = cljs.core.async.untap_STAR_.call(null,m,inst_28147);
var state_28199__$1 = (function (){var statearr_28224 = state_28199;
(statearr_28224[(19)] = inst_28151);

return statearr_28224;
})();
var statearr_28225_28300 = state_28199__$1;
(statearr_28225_28300[(2)] = inst_28152);

(statearr_28225_28300[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (32))){
var inst_28139 = (state_28199[(20)]);
var inst_28140 = (state_28199[(10)]);
var inst_28141 = (state_28199[(21)]);
var inst_28142 = (state_28199[(12)]);
var inst_28154 = (state_28199[(2)]);
var inst_28155 = (inst_28142 + (1));
var tmp28220 = inst_28139;
var tmp28221 = inst_28140;
var tmp28222 = inst_28141;
var inst_28139__$1 = tmp28220;
var inst_28140__$1 = tmp28221;
var inst_28141__$1 = tmp28222;
var inst_28142__$1 = inst_28155;
var state_28199__$1 = (function (){var statearr_28226 = state_28199;
(statearr_28226[(22)] = inst_28154);

(statearr_28226[(20)] = inst_28139__$1);

(statearr_28226[(10)] = inst_28140__$1);

(statearr_28226[(21)] = inst_28141__$1);

(statearr_28226[(12)] = inst_28142__$1);

return statearr_28226;
})();
var statearr_28227_28301 = state_28199__$1;
(statearr_28227_28301[(2)] = null);

(statearr_28227_28301[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (40))){
var inst_28167 = (state_28199[(23)]);
var inst_28171 = done.call(null,null);
var inst_28172 = cljs.core.async.untap_STAR_.call(null,m,inst_28167);
var state_28199__$1 = (function (){var statearr_28228 = state_28199;
(statearr_28228[(24)] = inst_28171);

return statearr_28228;
})();
var statearr_28229_28302 = state_28199__$1;
(statearr_28229_28302[(2)] = inst_28172);

(statearr_28229_28302[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (33))){
var inst_28158 = (state_28199[(25)]);
var inst_28160 = cljs.core.chunked_seq_QMARK_.call(null,inst_28158);
var state_28199__$1 = state_28199;
if(inst_28160){
var statearr_28230_28303 = state_28199__$1;
(statearr_28230_28303[(1)] = (36));

} else {
var statearr_28231_28304 = state_28199__$1;
(statearr_28231_28304[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (13))){
var inst_28088 = (state_28199[(26)]);
var inst_28091 = cljs.core.async.close_BANG_.call(null,inst_28088);
var state_28199__$1 = state_28199;
var statearr_28232_28305 = state_28199__$1;
(statearr_28232_28305[(2)] = inst_28091);

(statearr_28232_28305[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (22))){
var inst_28111 = (state_28199[(8)]);
var inst_28114 = cljs.core.async.close_BANG_.call(null,inst_28111);
var state_28199__$1 = state_28199;
var statearr_28233_28306 = state_28199__$1;
(statearr_28233_28306[(2)] = inst_28114);

(statearr_28233_28306[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (36))){
var inst_28158 = (state_28199[(25)]);
var inst_28162 = cljs.core.chunk_first.call(null,inst_28158);
var inst_28163 = cljs.core.chunk_rest.call(null,inst_28158);
var inst_28164 = cljs.core.count.call(null,inst_28162);
var inst_28139 = inst_28163;
var inst_28140 = inst_28162;
var inst_28141 = inst_28164;
var inst_28142 = (0);
var state_28199__$1 = (function (){var statearr_28234 = state_28199;
(statearr_28234[(20)] = inst_28139);

(statearr_28234[(10)] = inst_28140);

(statearr_28234[(21)] = inst_28141);

(statearr_28234[(12)] = inst_28142);

return statearr_28234;
})();
var statearr_28235_28307 = state_28199__$1;
(statearr_28235_28307[(2)] = null);

(statearr_28235_28307[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (41))){
var inst_28158 = (state_28199[(25)]);
var inst_28174 = (state_28199[(2)]);
var inst_28175 = cljs.core.next.call(null,inst_28158);
var inst_28139 = inst_28175;
var inst_28140 = null;
var inst_28141 = (0);
var inst_28142 = (0);
var state_28199__$1 = (function (){var statearr_28236 = state_28199;
(statearr_28236[(20)] = inst_28139);

(statearr_28236[(10)] = inst_28140);

(statearr_28236[(21)] = inst_28141);

(statearr_28236[(27)] = inst_28174);

(statearr_28236[(12)] = inst_28142);

return statearr_28236;
})();
var statearr_28237_28308 = state_28199__$1;
(statearr_28237_28308[(2)] = null);

(statearr_28237_28308[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (43))){
var state_28199__$1 = state_28199;
var statearr_28238_28309 = state_28199__$1;
(statearr_28238_28309[(2)] = null);

(statearr_28238_28309[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (29))){
var inst_28183 = (state_28199[(2)]);
var state_28199__$1 = state_28199;
var statearr_28239_28310 = state_28199__$1;
(statearr_28239_28310[(2)] = inst_28183);

(statearr_28239_28310[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (44))){
var inst_28192 = (state_28199[(2)]);
var state_28199__$1 = (function (){var statearr_28240 = state_28199;
(statearr_28240[(28)] = inst_28192);

return statearr_28240;
})();
var statearr_28241_28311 = state_28199__$1;
(statearr_28241_28311[(2)] = null);

(statearr_28241_28311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (6))){
var inst_28131 = (state_28199[(29)]);
var inst_28130 = cljs.core.deref.call(null,cs);
var inst_28131__$1 = cljs.core.keys.call(null,inst_28130);
var inst_28132 = cljs.core.count.call(null,inst_28131__$1);
var inst_28133 = cljs.core.reset_BANG_.call(null,dctr,inst_28132);
var inst_28138 = cljs.core.seq.call(null,inst_28131__$1);
var inst_28139 = inst_28138;
var inst_28140 = null;
var inst_28141 = (0);
var inst_28142 = (0);
var state_28199__$1 = (function (){var statearr_28242 = state_28199;
(statearr_28242[(20)] = inst_28139);

(statearr_28242[(29)] = inst_28131__$1);

(statearr_28242[(10)] = inst_28140);

(statearr_28242[(21)] = inst_28141);

(statearr_28242[(12)] = inst_28142);

(statearr_28242[(30)] = inst_28133);

return statearr_28242;
})();
var statearr_28243_28312 = state_28199__$1;
(statearr_28243_28312[(2)] = null);

(statearr_28243_28312[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (28))){
var inst_28139 = (state_28199[(20)]);
var inst_28158 = (state_28199[(25)]);
var inst_28158__$1 = cljs.core.seq.call(null,inst_28139);
var state_28199__$1 = (function (){var statearr_28244 = state_28199;
(statearr_28244[(25)] = inst_28158__$1);

return statearr_28244;
})();
if(inst_28158__$1){
var statearr_28245_28313 = state_28199__$1;
(statearr_28245_28313[(1)] = (33));

} else {
var statearr_28246_28314 = state_28199__$1;
(statearr_28246_28314[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (25))){
var inst_28141 = (state_28199[(21)]);
var inst_28142 = (state_28199[(12)]);
var inst_28144 = (inst_28142 < inst_28141);
var inst_28145 = inst_28144;
var state_28199__$1 = state_28199;
if(cljs.core.truth_(inst_28145)){
var statearr_28247_28315 = state_28199__$1;
(statearr_28247_28315[(1)] = (27));

} else {
var statearr_28248_28316 = state_28199__$1;
(statearr_28248_28316[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (34))){
var state_28199__$1 = state_28199;
var statearr_28249_28317 = state_28199__$1;
(statearr_28249_28317[(2)] = null);

(statearr_28249_28317[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (17))){
var state_28199__$1 = state_28199;
var statearr_28250_28318 = state_28199__$1;
(statearr_28250_28318[(2)] = null);

(statearr_28250_28318[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (3))){
var inst_28197 = (state_28199[(2)]);
var state_28199__$1 = state_28199;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28199__$1,inst_28197);
} else {
if((state_val_28200 === (12))){
var inst_28126 = (state_28199[(2)]);
var state_28199__$1 = state_28199;
var statearr_28251_28319 = state_28199__$1;
(statearr_28251_28319[(2)] = inst_28126);

(statearr_28251_28319[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (2))){
var state_28199__$1 = state_28199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28199__$1,(4),ch);
} else {
if((state_val_28200 === (23))){
var state_28199__$1 = state_28199;
var statearr_28252_28320 = state_28199__$1;
(statearr_28252_28320[(2)] = null);

(statearr_28252_28320[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (35))){
var inst_28181 = (state_28199[(2)]);
var state_28199__$1 = state_28199;
var statearr_28253_28321 = state_28199__$1;
(statearr_28253_28321[(2)] = inst_28181);

(statearr_28253_28321[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (19))){
var inst_28098 = (state_28199[(7)]);
var inst_28102 = cljs.core.chunk_first.call(null,inst_28098);
var inst_28103 = cljs.core.chunk_rest.call(null,inst_28098);
var inst_28104 = cljs.core.count.call(null,inst_28102);
var inst_28076 = inst_28103;
var inst_28077 = inst_28102;
var inst_28078 = inst_28104;
var inst_28079 = (0);
var state_28199__$1 = (function (){var statearr_28254 = state_28199;
(statearr_28254[(13)] = inst_28076);

(statearr_28254[(14)] = inst_28079);

(statearr_28254[(16)] = inst_28077);

(statearr_28254[(17)] = inst_28078);

return statearr_28254;
})();
var statearr_28255_28322 = state_28199__$1;
(statearr_28255_28322[(2)] = null);

(statearr_28255_28322[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (11))){
var inst_28076 = (state_28199[(13)]);
var inst_28098 = (state_28199[(7)]);
var inst_28098__$1 = cljs.core.seq.call(null,inst_28076);
var state_28199__$1 = (function (){var statearr_28256 = state_28199;
(statearr_28256[(7)] = inst_28098__$1);

return statearr_28256;
})();
if(inst_28098__$1){
var statearr_28257_28323 = state_28199__$1;
(statearr_28257_28323[(1)] = (16));

} else {
var statearr_28258_28324 = state_28199__$1;
(statearr_28258_28324[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (9))){
var inst_28128 = (state_28199[(2)]);
var state_28199__$1 = state_28199;
var statearr_28259_28325 = state_28199__$1;
(statearr_28259_28325[(2)] = inst_28128);

(statearr_28259_28325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (5))){
var inst_28074 = cljs.core.deref.call(null,cs);
var inst_28075 = cljs.core.seq.call(null,inst_28074);
var inst_28076 = inst_28075;
var inst_28077 = null;
var inst_28078 = (0);
var inst_28079 = (0);
var state_28199__$1 = (function (){var statearr_28260 = state_28199;
(statearr_28260[(13)] = inst_28076);

(statearr_28260[(14)] = inst_28079);

(statearr_28260[(16)] = inst_28077);

(statearr_28260[(17)] = inst_28078);

return statearr_28260;
})();
var statearr_28261_28326 = state_28199__$1;
(statearr_28261_28326[(2)] = null);

(statearr_28261_28326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (14))){
var state_28199__$1 = state_28199;
var statearr_28262_28327 = state_28199__$1;
(statearr_28262_28327[(2)] = null);

(statearr_28262_28327[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (45))){
var inst_28189 = (state_28199[(2)]);
var state_28199__$1 = state_28199;
var statearr_28263_28328 = state_28199__$1;
(statearr_28263_28328[(2)] = inst_28189);

(statearr_28263_28328[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (26))){
var inst_28131 = (state_28199[(29)]);
var inst_28185 = (state_28199[(2)]);
var inst_28186 = cljs.core.seq.call(null,inst_28131);
var state_28199__$1 = (function (){var statearr_28264 = state_28199;
(statearr_28264[(31)] = inst_28185);

return statearr_28264;
})();
if(inst_28186){
var statearr_28265_28329 = state_28199__$1;
(statearr_28265_28329[(1)] = (42));

} else {
var statearr_28266_28330 = state_28199__$1;
(statearr_28266_28330[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (16))){
var inst_28098 = (state_28199[(7)]);
var inst_28100 = cljs.core.chunked_seq_QMARK_.call(null,inst_28098);
var state_28199__$1 = state_28199;
if(inst_28100){
var statearr_28267_28331 = state_28199__$1;
(statearr_28267_28331[(1)] = (19));

} else {
var statearr_28268_28332 = state_28199__$1;
(statearr_28268_28332[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (38))){
var inst_28178 = (state_28199[(2)]);
var state_28199__$1 = state_28199;
var statearr_28269_28333 = state_28199__$1;
(statearr_28269_28333[(2)] = inst_28178);

(statearr_28269_28333[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (30))){
var state_28199__$1 = state_28199;
var statearr_28270_28334 = state_28199__$1;
(statearr_28270_28334[(2)] = null);

(statearr_28270_28334[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (10))){
var inst_28079 = (state_28199[(14)]);
var inst_28077 = (state_28199[(16)]);
var inst_28087 = cljs.core._nth.call(null,inst_28077,inst_28079);
var inst_28088 = cljs.core.nth.call(null,inst_28087,(0),null);
var inst_28089 = cljs.core.nth.call(null,inst_28087,(1),null);
var state_28199__$1 = (function (){var statearr_28271 = state_28199;
(statearr_28271[(26)] = inst_28088);

return statearr_28271;
})();
if(cljs.core.truth_(inst_28089)){
var statearr_28272_28335 = state_28199__$1;
(statearr_28272_28335[(1)] = (13));

} else {
var statearr_28273_28336 = state_28199__$1;
(statearr_28273_28336[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (18))){
var inst_28124 = (state_28199[(2)]);
var state_28199__$1 = state_28199;
var statearr_28274_28337 = state_28199__$1;
(statearr_28274_28337[(2)] = inst_28124);

(statearr_28274_28337[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (42))){
var state_28199__$1 = state_28199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28199__$1,(45),dchan);
} else {
if((state_val_28200 === (37))){
var inst_28167 = (state_28199[(23)]);
var inst_28067 = (state_28199[(11)]);
var inst_28158 = (state_28199[(25)]);
var inst_28167__$1 = cljs.core.first.call(null,inst_28158);
var inst_28168 = cljs.core.async.put_BANG_.call(null,inst_28167__$1,inst_28067,done);
var state_28199__$1 = (function (){var statearr_28275 = state_28199;
(statearr_28275[(23)] = inst_28167__$1);

return statearr_28275;
})();
if(cljs.core.truth_(inst_28168)){
var statearr_28276_28338 = state_28199__$1;
(statearr_28276_28338[(1)] = (39));

} else {
var statearr_28277_28339 = state_28199__$1;
(statearr_28277_28339[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (8))){
var inst_28079 = (state_28199[(14)]);
var inst_28078 = (state_28199[(17)]);
var inst_28081 = (inst_28079 < inst_28078);
var inst_28082 = inst_28081;
var state_28199__$1 = state_28199;
if(cljs.core.truth_(inst_28082)){
var statearr_28278_28340 = state_28199__$1;
(statearr_28278_28340[(1)] = (10));

} else {
var statearr_28279_28341 = state_28199__$1;
(statearr_28279_28341[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
});})(c__26964__auto___28287,cs,m,dchan,dctr,done))
;
return ((function (switch__26851__auto__,c__26964__auto___28287,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26852__auto__ = null;
var cljs$core$async$mult_$_state_machine__26852__auto____0 = (function (){
var statearr_28283 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28283[(0)] = cljs$core$async$mult_$_state_machine__26852__auto__);

(statearr_28283[(1)] = (1));

return statearr_28283;
});
var cljs$core$async$mult_$_state_machine__26852__auto____1 = (function (state_28199){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_28199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e28284){if((e28284 instanceof Object)){
var ex__26855__auto__ = e28284;
var statearr_28285_28342 = state_28199;
(statearr_28285_28342[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28343 = state_28199;
state_28199 = G__28343;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26852__auto__ = function(state_28199){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26852__auto____1.call(this,state_28199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26852__auto____0;
cljs$core$async$mult_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26852__auto____1;
return cljs$core$async$mult_$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26964__auto___28287,cs,m,dchan,dctr,done))
})();
var state__26966__auto__ = (function (){var statearr_28286 = f__26965__auto__.call(null);
(statearr_28286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26964__auto___28287);

return statearr_28286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto___28287,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args28344 = [];
var len__25866__auto___28347 = arguments.length;
var i__25867__auto___28348 = (0);
while(true){
if((i__25867__auto___28348 < len__25866__auto___28347)){
args28344.push((arguments[i__25867__auto___28348]));

var G__28349 = (i__25867__auto___28348 + (1));
i__25867__auto___28348 = G__28349;
continue;
} else {
}
break;
}

var G__28346 = args28344.length;
switch (G__28346) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28344.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25454__auto__ = (((m == null))?null:m);
var m__25455__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25454__auto__)]);
if(!((m__25455__auto__ == null))){
return m__25455__auto__.call(null,m,ch);
} else {
var m__25455__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25455__auto____$1 == null))){
return m__25455__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25454__auto__ = (((m == null))?null:m);
var m__25455__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25454__auto__)]);
if(!((m__25455__auto__ == null))){
return m__25455__auto__.call(null,m,ch);
} else {
var m__25455__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25455__auto____$1 == null))){
return m__25455__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25454__auto__ = (((m == null))?null:m);
var m__25455__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25454__auto__)]);
if(!((m__25455__auto__ == null))){
return m__25455__auto__.call(null,m);
} else {
var m__25455__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25455__auto____$1 == null))){
return m__25455__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25454__auto__ = (((m == null))?null:m);
var m__25455__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25454__auto__)]);
if(!((m__25455__auto__ == null))){
return m__25455__auto__.call(null,m,state_map);
} else {
var m__25455__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25455__auto____$1 == null))){
return m__25455__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25454__auto__ = (((m == null))?null:m);
var m__25455__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25454__auto__)]);
if(!((m__25455__auto__ == null))){
return m__25455__auto__.call(null,m,mode);
} else {
var m__25455__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25455__auto____$1 == null))){
return m__25455__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25873__auto__ = [];
var len__25866__auto___28361 = arguments.length;
var i__25867__auto___28362 = (0);
while(true){
if((i__25867__auto___28362 < len__25866__auto___28361)){
args__25873__auto__.push((arguments[i__25867__auto___28362]));

var G__28363 = (i__25867__auto___28362 + (1));
i__25867__auto___28362 = G__28363;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((3) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25874__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28355){
var map__28356 = p__28355;
var map__28356__$1 = ((((!((map__28356 == null)))?((((map__28356.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28356.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28356):map__28356);
var opts = map__28356__$1;
var statearr_28358_28364 = state;
(statearr_28358_28364[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__28356,map__28356__$1,opts){
return (function (val){
var statearr_28359_28365 = state;
(statearr_28359_28365[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28356,map__28356__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_28360_28366 = state;
(statearr_28360_28366[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28351){
var G__28352 = cljs.core.first.call(null,seq28351);
var seq28351__$1 = cljs.core.next.call(null,seq28351);
var G__28353 = cljs.core.first.call(null,seq28351__$1);
var seq28351__$2 = cljs.core.next.call(null,seq28351__$1);
var G__28354 = cljs.core.first.call(null,seq28351__$2);
var seq28351__$3 = cljs.core.next.call(null,seq28351__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28352,G__28353,G__28354,seq28351__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28532 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28532 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28533){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28533 = meta28533;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28534,meta28533__$1){
var self__ = this;
var _28534__$1 = this;
return (new cljs.core.async.t_cljs$core$async28532(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28533__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28532.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28534){
var self__ = this;
var _28534__$1 = this;
return self__.meta28533;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28532.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28532.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28532.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async28532.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28532.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28532.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28532.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28532.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28532.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28533","meta28533",-567408945,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28532.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28532.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28532";

cljs.core.async.t_cljs$core$async28532.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25397__auto__,writer__25398__auto__,opt__25399__auto__){
return cljs.core._write.call(null,writer__25398__auto__,"cljs.core.async/t_cljs$core$async28532");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28532 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28532(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28533){
return (new cljs.core.async.t_cljs$core$async28532(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28533));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28532(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26964__auto___28697 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto___28697,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26965__auto__ = (function (){var switch__26851__auto__ = ((function (c__26964__auto___28697,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28634){
var state_val_28635 = (state_28634[(1)]);
if((state_val_28635 === (7))){
var inst_28550 = (state_28634[(2)]);
var state_28634__$1 = state_28634;
var statearr_28636_28698 = state_28634__$1;
(statearr_28636_28698[(2)] = inst_28550);

(statearr_28636_28698[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (20))){
var inst_28562 = (state_28634[(7)]);
var state_28634__$1 = state_28634;
var statearr_28637_28699 = state_28634__$1;
(statearr_28637_28699[(2)] = inst_28562);

(statearr_28637_28699[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (27))){
var state_28634__$1 = state_28634;
var statearr_28638_28700 = state_28634__$1;
(statearr_28638_28700[(2)] = null);

(statearr_28638_28700[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (1))){
var inst_28538 = (state_28634[(8)]);
var inst_28538__$1 = calc_state.call(null);
var inst_28540 = (inst_28538__$1 == null);
var inst_28541 = cljs.core.not.call(null,inst_28540);
var state_28634__$1 = (function (){var statearr_28639 = state_28634;
(statearr_28639[(8)] = inst_28538__$1);

return statearr_28639;
})();
if(inst_28541){
var statearr_28640_28701 = state_28634__$1;
(statearr_28640_28701[(1)] = (2));

} else {
var statearr_28641_28702 = state_28634__$1;
(statearr_28641_28702[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (24))){
var inst_28608 = (state_28634[(9)]);
var inst_28585 = (state_28634[(10)]);
var inst_28594 = (state_28634[(11)]);
var inst_28608__$1 = inst_28585.call(null,inst_28594);
var state_28634__$1 = (function (){var statearr_28642 = state_28634;
(statearr_28642[(9)] = inst_28608__$1);

return statearr_28642;
})();
if(cljs.core.truth_(inst_28608__$1)){
var statearr_28643_28703 = state_28634__$1;
(statearr_28643_28703[(1)] = (29));

} else {
var statearr_28644_28704 = state_28634__$1;
(statearr_28644_28704[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (4))){
var inst_28553 = (state_28634[(2)]);
var state_28634__$1 = state_28634;
if(cljs.core.truth_(inst_28553)){
var statearr_28645_28705 = state_28634__$1;
(statearr_28645_28705[(1)] = (8));

} else {
var statearr_28646_28706 = state_28634__$1;
(statearr_28646_28706[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (15))){
var inst_28579 = (state_28634[(2)]);
var state_28634__$1 = state_28634;
if(cljs.core.truth_(inst_28579)){
var statearr_28647_28707 = state_28634__$1;
(statearr_28647_28707[(1)] = (19));

} else {
var statearr_28648_28708 = state_28634__$1;
(statearr_28648_28708[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (21))){
var inst_28584 = (state_28634[(12)]);
var inst_28584__$1 = (state_28634[(2)]);
var inst_28585 = cljs.core.get.call(null,inst_28584__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28586 = cljs.core.get.call(null,inst_28584__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28587 = cljs.core.get.call(null,inst_28584__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28634__$1 = (function (){var statearr_28649 = state_28634;
(statearr_28649[(13)] = inst_28586);

(statearr_28649[(10)] = inst_28585);

(statearr_28649[(12)] = inst_28584__$1);

return statearr_28649;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28634__$1,(22),inst_28587);
} else {
if((state_val_28635 === (31))){
var inst_28616 = (state_28634[(2)]);
var state_28634__$1 = state_28634;
if(cljs.core.truth_(inst_28616)){
var statearr_28650_28709 = state_28634__$1;
(statearr_28650_28709[(1)] = (32));

} else {
var statearr_28651_28710 = state_28634__$1;
(statearr_28651_28710[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (32))){
var inst_28593 = (state_28634[(14)]);
var state_28634__$1 = state_28634;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28634__$1,(35),out,inst_28593);
} else {
if((state_val_28635 === (33))){
var inst_28584 = (state_28634[(12)]);
var inst_28562 = inst_28584;
var state_28634__$1 = (function (){var statearr_28652 = state_28634;
(statearr_28652[(7)] = inst_28562);

return statearr_28652;
})();
var statearr_28653_28711 = state_28634__$1;
(statearr_28653_28711[(2)] = null);

(statearr_28653_28711[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (13))){
var inst_28562 = (state_28634[(7)]);
var inst_28569 = inst_28562.cljs$lang$protocol_mask$partition0$;
var inst_28570 = (inst_28569 & (64));
var inst_28571 = inst_28562.cljs$core$ISeq$;
var inst_28572 = (inst_28570) || (inst_28571);
var state_28634__$1 = state_28634;
if(cljs.core.truth_(inst_28572)){
var statearr_28654_28712 = state_28634__$1;
(statearr_28654_28712[(1)] = (16));

} else {
var statearr_28655_28713 = state_28634__$1;
(statearr_28655_28713[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (22))){
var inst_28593 = (state_28634[(14)]);
var inst_28594 = (state_28634[(11)]);
var inst_28592 = (state_28634[(2)]);
var inst_28593__$1 = cljs.core.nth.call(null,inst_28592,(0),null);
var inst_28594__$1 = cljs.core.nth.call(null,inst_28592,(1),null);
var inst_28595 = (inst_28593__$1 == null);
var inst_28596 = cljs.core._EQ_.call(null,inst_28594__$1,change);
var inst_28597 = (inst_28595) || (inst_28596);
var state_28634__$1 = (function (){var statearr_28656 = state_28634;
(statearr_28656[(14)] = inst_28593__$1);

(statearr_28656[(11)] = inst_28594__$1);

return statearr_28656;
})();
if(cljs.core.truth_(inst_28597)){
var statearr_28657_28714 = state_28634__$1;
(statearr_28657_28714[(1)] = (23));

} else {
var statearr_28658_28715 = state_28634__$1;
(statearr_28658_28715[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (36))){
var inst_28584 = (state_28634[(12)]);
var inst_28562 = inst_28584;
var state_28634__$1 = (function (){var statearr_28659 = state_28634;
(statearr_28659[(7)] = inst_28562);

return statearr_28659;
})();
var statearr_28660_28716 = state_28634__$1;
(statearr_28660_28716[(2)] = null);

(statearr_28660_28716[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (29))){
var inst_28608 = (state_28634[(9)]);
var state_28634__$1 = state_28634;
var statearr_28661_28717 = state_28634__$1;
(statearr_28661_28717[(2)] = inst_28608);

(statearr_28661_28717[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (6))){
var state_28634__$1 = state_28634;
var statearr_28662_28718 = state_28634__$1;
(statearr_28662_28718[(2)] = false);

(statearr_28662_28718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (28))){
var inst_28604 = (state_28634[(2)]);
var inst_28605 = calc_state.call(null);
var inst_28562 = inst_28605;
var state_28634__$1 = (function (){var statearr_28663 = state_28634;
(statearr_28663[(15)] = inst_28604);

(statearr_28663[(7)] = inst_28562);

return statearr_28663;
})();
var statearr_28664_28719 = state_28634__$1;
(statearr_28664_28719[(2)] = null);

(statearr_28664_28719[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (25))){
var inst_28630 = (state_28634[(2)]);
var state_28634__$1 = state_28634;
var statearr_28665_28720 = state_28634__$1;
(statearr_28665_28720[(2)] = inst_28630);

(statearr_28665_28720[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (34))){
var inst_28628 = (state_28634[(2)]);
var state_28634__$1 = state_28634;
var statearr_28666_28721 = state_28634__$1;
(statearr_28666_28721[(2)] = inst_28628);

(statearr_28666_28721[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (17))){
var state_28634__$1 = state_28634;
var statearr_28667_28722 = state_28634__$1;
(statearr_28667_28722[(2)] = false);

(statearr_28667_28722[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (3))){
var state_28634__$1 = state_28634;
var statearr_28668_28723 = state_28634__$1;
(statearr_28668_28723[(2)] = false);

(statearr_28668_28723[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (12))){
var inst_28632 = (state_28634[(2)]);
var state_28634__$1 = state_28634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28634__$1,inst_28632);
} else {
if((state_val_28635 === (2))){
var inst_28538 = (state_28634[(8)]);
var inst_28543 = inst_28538.cljs$lang$protocol_mask$partition0$;
var inst_28544 = (inst_28543 & (64));
var inst_28545 = inst_28538.cljs$core$ISeq$;
var inst_28546 = (inst_28544) || (inst_28545);
var state_28634__$1 = state_28634;
if(cljs.core.truth_(inst_28546)){
var statearr_28669_28724 = state_28634__$1;
(statearr_28669_28724[(1)] = (5));

} else {
var statearr_28670_28725 = state_28634__$1;
(statearr_28670_28725[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (23))){
var inst_28593 = (state_28634[(14)]);
var inst_28599 = (inst_28593 == null);
var state_28634__$1 = state_28634;
if(cljs.core.truth_(inst_28599)){
var statearr_28671_28726 = state_28634__$1;
(statearr_28671_28726[(1)] = (26));

} else {
var statearr_28672_28727 = state_28634__$1;
(statearr_28672_28727[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (35))){
var inst_28619 = (state_28634[(2)]);
var state_28634__$1 = state_28634;
if(cljs.core.truth_(inst_28619)){
var statearr_28673_28728 = state_28634__$1;
(statearr_28673_28728[(1)] = (36));

} else {
var statearr_28674_28729 = state_28634__$1;
(statearr_28674_28729[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (19))){
var inst_28562 = (state_28634[(7)]);
var inst_28581 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28562);
var state_28634__$1 = state_28634;
var statearr_28675_28730 = state_28634__$1;
(statearr_28675_28730[(2)] = inst_28581);

(statearr_28675_28730[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (11))){
var inst_28562 = (state_28634[(7)]);
var inst_28566 = (inst_28562 == null);
var inst_28567 = cljs.core.not.call(null,inst_28566);
var state_28634__$1 = state_28634;
if(inst_28567){
var statearr_28676_28731 = state_28634__$1;
(statearr_28676_28731[(1)] = (13));

} else {
var statearr_28677_28732 = state_28634__$1;
(statearr_28677_28732[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (9))){
var inst_28538 = (state_28634[(8)]);
var state_28634__$1 = state_28634;
var statearr_28678_28733 = state_28634__$1;
(statearr_28678_28733[(2)] = inst_28538);

(statearr_28678_28733[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (5))){
var state_28634__$1 = state_28634;
var statearr_28679_28734 = state_28634__$1;
(statearr_28679_28734[(2)] = true);

(statearr_28679_28734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (14))){
var state_28634__$1 = state_28634;
var statearr_28680_28735 = state_28634__$1;
(statearr_28680_28735[(2)] = false);

(statearr_28680_28735[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (26))){
var inst_28594 = (state_28634[(11)]);
var inst_28601 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28594);
var state_28634__$1 = state_28634;
var statearr_28681_28736 = state_28634__$1;
(statearr_28681_28736[(2)] = inst_28601);

(statearr_28681_28736[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (16))){
var state_28634__$1 = state_28634;
var statearr_28682_28737 = state_28634__$1;
(statearr_28682_28737[(2)] = true);

(statearr_28682_28737[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (38))){
var inst_28624 = (state_28634[(2)]);
var state_28634__$1 = state_28634;
var statearr_28683_28738 = state_28634__$1;
(statearr_28683_28738[(2)] = inst_28624);

(statearr_28683_28738[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (30))){
var inst_28586 = (state_28634[(13)]);
var inst_28585 = (state_28634[(10)]);
var inst_28594 = (state_28634[(11)]);
var inst_28611 = cljs.core.empty_QMARK_.call(null,inst_28585);
var inst_28612 = inst_28586.call(null,inst_28594);
var inst_28613 = cljs.core.not.call(null,inst_28612);
var inst_28614 = (inst_28611) && (inst_28613);
var state_28634__$1 = state_28634;
var statearr_28684_28739 = state_28634__$1;
(statearr_28684_28739[(2)] = inst_28614);

(statearr_28684_28739[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (10))){
var inst_28538 = (state_28634[(8)]);
var inst_28558 = (state_28634[(2)]);
var inst_28559 = cljs.core.get.call(null,inst_28558,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28560 = cljs.core.get.call(null,inst_28558,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28561 = cljs.core.get.call(null,inst_28558,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28562 = inst_28538;
var state_28634__$1 = (function (){var statearr_28685 = state_28634;
(statearr_28685[(16)] = inst_28560);

(statearr_28685[(17)] = inst_28559);

(statearr_28685[(18)] = inst_28561);

(statearr_28685[(7)] = inst_28562);

return statearr_28685;
})();
var statearr_28686_28740 = state_28634__$1;
(statearr_28686_28740[(2)] = null);

(statearr_28686_28740[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (18))){
var inst_28576 = (state_28634[(2)]);
var state_28634__$1 = state_28634;
var statearr_28687_28741 = state_28634__$1;
(statearr_28687_28741[(2)] = inst_28576);

(statearr_28687_28741[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (37))){
var state_28634__$1 = state_28634;
var statearr_28688_28742 = state_28634__$1;
(statearr_28688_28742[(2)] = null);

(statearr_28688_28742[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (8))){
var inst_28538 = (state_28634[(8)]);
var inst_28555 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28538);
var state_28634__$1 = state_28634;
var statearr_28689_28743 = state_28634__$1;
(statearr_28689_28743[(2)] = inst_28555);

(statearr_28689_28743[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__26964__auto___28697,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26851__auto__,c__26964__auto___28697,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26852__auto__ = null;
var cljs$core$async$mix_$_state_machine__26852__auto____0 = (function (){
var statearr_28693 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28693[(0)] = cljs$core$async$mix_$_state_machine__26852__auto__);

(statearr_28693[(1)] = (1));

return statearr_28693;
});
var cljs$core$async$mix_$_state_machine__26852__auto____1 = (function (state_28634){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_28634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e28694){if((e28694 instanceof Object)){
var ex__26855__auto__ = e28694;
var statearr_28695_28744 = state_28634;
(statearr_28695_28744[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28745 = state_28634;
state_28634 = G__28745;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26852__auto__ = function(state_28634){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26852__auto____1.call(this,state_28634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26852__auto____0;
cljs$core$async$mix_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26852__auto____1;
return cljs$core$async$mix_$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26964__auto___28697,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26966__auto__ = (function (){var statearr_28696 = f__26965__auto__.call(null);
(statearr_28696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26964__auto___28697);

return statearr_28696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto___28697,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25454__auto__ = (((p == null))?null:p);
var m__25455__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25454__auto__)]);
if(!((m__25455__auto__ == null))){
return m__25455__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25455__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25455__auto____$1 == null))){
return m__25455__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25454__auto__ = (((p == null))?null:p);
var m__25455__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25454__auto__)]);
if(!((m__25455__auto__ == null))){
return m__25455__auto__.call(null,p,v,ch);
} else {
var m__25455__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25455__auto____$1 == null))){
return m__25455__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args28746 = [];
var len__25866__auto___28749 = arguments.length;
var i__25867__auto___28750 = (0);
while(true){
if((i__25867__auto___28750 < len__25866__auto___28749)){
args28746.push((arguments[i__25867__auto___28750]));

var G__28751 = (i__25867__auto___28750 + (1));
i__25867__auto___28750 = G__28751;
continue;
} else {
}
break;
}

var G__28748 = args28746.length;
switch (G__28748) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28746.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25454__auto__ = (((p == null))?null:p);
var m__25455__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25454__auto__)]);
if(!((m__25455__auto__ == null))){
return m__25455__auto__.call(null,p);
} else {
var m__25455__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25455__auto____$1 == null))){
return m__25455__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25454__auto__ = (((p == null))?null:p);
var m__25455__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25454__auto__)]);
if(!((m__25455__auto__ == null))){
return m__25455__auto__.call(null,p,v);
} else {
var m__25455__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25455__auto____$1 == null))){
return m__25455__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args28754 = [];
var len__25866__auto___28879 = arguments.length;
var i__25867__auto___28880 = (0);
while(true){
if((i__25867__auto___28880 < len__25866__auto___28879)){
args28754.push((arguments[i__25867__auto___28880]));

var G__28881 = (i__25867__auto___28880 + (1));
i__25867__auto___28880 = G__28881;
continue;
} else {
}
break;
}

var G__28756 = args28754.length;
switch (G__28756) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28754.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24791__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24791__auto__)){
return or__24791__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24791__auto__,mults){
return (function (p1__28753_SHARP_){
if(cljs.core.truth_(p1__28753_SHARP_.call(null,topic))){
return p1__28753_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28753_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24791__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28757 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28757 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28758){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28758 = meta28758;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28759,meta28758__$1){
var self__ = this;
var _28759__$1 = this;
return (new cljs.core.async.t_cljs$core$async28757(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28758__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28757.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28759){
var self__ = this;
var _28759__$1 = this;
return self__.meta28758;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28757.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28757.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28757.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async28757.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28757.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28757.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28757.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28757.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28758","meta28758",1202138674,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28757.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28757.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28757";

cljs.core.async.t_cljs$core$async28757.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25397__auto__,writer__25398__auto__,opt__25399__auto__){
return cljs.core._write.call(null,writer__25398__auto__,"cljs.core.async/t_cljs$core$async28757");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async28757 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28757(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28758){
return (new cljs.core.async.t_cljs$core$async28757(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28758));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28757(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26964__auto___28883 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto___28883,mults,ensure_mult,p){
return (function (){
var f__26965__auto__ = (function (){var switch__26851__auto__ = ((function (c__26964__auto___28883,mults,ensure_mult,p){
return (function (state_28831){
var state_val_28832 = (state_28831[(1)]);
if((state_val_28832 === (7))){
var inst_28827 = (state_28831[(2)]);
var state_28831__$1 = state_28831;
var statearr_28833_28884 = state_28831__$1;
(statearr_28833_28884[(2)] = inst_28827);

(statearr_28833_28884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28832 === (20))){
var state_28831__$1 = state_28831;
var statearr_28834_28885 = state_28831__$1;
(statearr_28834_28885[(2)] = null);

(statearr_28834_28885[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28832 === (1))){
var state_28831__$1 = state_28831;
var statearr_28835_28886 = state_28831__$1;
(statearr_28835_28886[(2)] = null);

(statearr_28835_28886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28832 === (24))){
var inst_28810 = (state_28831[(7)]);
var inst_28819 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28810);
var state_28831__$1 = state_28831;
var statearr_28836_28887 = state_28831__$1;
(statearr_28836_28887[(2)] = inst_28819);

(statearr_28836_28887[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28832 === (4))){
var inst_28762 = (state_28831[(8)]);
var inst_28762__$1 = (state_28831[(2)]);
var inst_28763 = (inst_28762__$1 == null);
var state_28831__$1 = (function (){var statearr_28837 = state_28831;
(statearr_28837[(8)] = inst_28762__$1);

return statearr_28837;
})();
if(cljs.core.truth_(inst_28763)){
var statearr_28838_28888 = state_28831__$1;
(statearr_28838_28888[(1)] = (5));

} else {
var statearr_28839_28889 = state_28831__$1;
(statearr_28839_28889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28832 === (15))){
var inst_28804 = (state_28831[(2)]);
var state_28831__$1 = state_28831;
var statearr_28840_28890 = state_28831__$1;
(statearr_28840_28890[(2)] = inst_28804);

(statearr_28840_28890[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28832 === (21))){
var inst_28824 = (state_28831[(2)]);
var state_28831__$1 = (function (){var statearr_28841 = state_28831;
(statearr_28841[(9)] = inst_28824);

return statearr_28841;
})();
var statearr_28842_28891 = state_28831__$1;
(statearr_28842_28891[(2)] = null);

(statearr_28842_28891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28832 === (13))){
var inst_28786 = (state_28831[(10)]);
var inst_28788 = cljs.core.chunked_seq_QMARK_.call(null,inst_28786);
var state_28831__$1 = state_28831;
if(inst_28788){
var statearr_28843_28892 = state_28831__$1;
(statearr_28843_28892[(1)] = (16));

} else {
var statearr_28844_28893 = state_28831__$1;
(statearr_28844_28893[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28832 === (22))){
var inst_28816 = (state_28831[(2)]);
var state_28831__$1 = state_28831;
if(cljs.core.truth_(inst_28816)){
var statearr_28845_28894 = state_28831__$1;
(statearr_28845_28894[(1)] = (23));

} else {
var statearr_28846_28895 = state_28831__$1;
(statearr_28846_28895[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28832 === (6))){
var inst_28812 = (state_28831[(11)]);
var inst_28762 = (state_28831[(8)]);
var inst_28810 = (state_28831[(7)]);
var inst_28810__$1 = topic_fn.call(null,inst_28762);
var inst_28811 = cljs.core.deref.call(null,mults);
var inst_28812__$1 = cljs.core.get.call(null,inst_28811,inst_28810__$1);
var state_28831__$1 = (function (){var statearr_28847 = state_28831;
(statearr_28847[(11)] = inst_28812__$1);

(statearr_28847[(7)] = inst_28810__$1);

return statearr_28847;
})();
if(cljs.core.truth_(inst_28812__$1)){
var statearr_28848_28896 = state_28831__$1;
(statearr_28848_28896[(1)] = (19));

} else {
var statearr_28849_28897 = state_28831__$1;
(statearr_28849_28897[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28832 === (25))){
var inst_28821 = (state_28831[(2)]);
var state_28831__$1 = state_28831;
var statearr_28850_28898 = state_28831__$1;
(statearr_28850_28898[(2)] = inst_28821);

(statearr_28850_28898[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28832 === (17))){
var inst_28786 = (state_28831[(10)]);
var inst_28795 = cljs.core.first.call(null,inst_28786);
var inst_28796 = cljs.core.async.muxch_STAR_.call(null,inst_28795);
var inst_28797 = cljs.core.async.close_BANG_.call(null,inst_28796);
var inst_28798 = cljs.core.next.call(null,inst_28786);
var inst_28772 = inst_28798;
var inst_28773 = null;
var inst_28774 = (0);
var inst_28775 = (0);
var state_28831__$1 = (function (){var statearr_28851 = state_28831;
(statearr_28851[(12)] = inst_28773);

(statearr_28851[(13)] = inst_28775);

(statearr_28851[(14)] = inst_28774);

(statearr_28851[(15)] = inst_28797);

(statearr_28851[(16)] = inst_28772);

return statearr_28851;
})();
var statearr_28852_28899 = state_28831__$1;
(statearr_28852_28899[(2)] = null);

(statearr_28852_28899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28832 === (3))){
var inst_28829 = (state_28831[(2)]);
var state_28831__$1 = state_28831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28831__$1,inst_28829);
} else {
if((state_val_28832 === (12))){
var inst_28806 = (state_28831[(2)]);
var state_28831__$1 = state_28831;
var statearr_28853_28900 = state_28831__$1;
(statearr_28853_28900[(2)] = inst_28806);

(statearr_28853_28900[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28832 === (2))){
var state_28831__$1 = state_28831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28831__$1,(4),ch);
} else {
if((state_val_28832 === (23))){
var state_28831__$1 = state_28831;
var statearr_28854_28901 = state_28831__$1;
(statearr_28854_28901[(2)] = null);

(statearr_28854_28901[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28832 === (19))){
var inst_28812 = (state_28831[(11)]);
var inst_28762 = (state_28831[(8)]);
var inst_28814 = cljs.core.async.muxch_STAR_.call(null,inst_28812);
var state_28831__$1 = state_28831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28831__$1,(22),inst_28814,inst_28762);
} else {
if((state_val_28832 === (11))){
var inst_28786 = (state_28831[(10)]);
var inst_28772 = (state_28831[(16)]);
var inst_28786__$1 = cljs.core.seq.call(null,inst_28772);
var state_28831__$1 = (function (){var statearr_28855 = state_28831;
(statearr_28855[(10)] = inst_28786__$1);

return statearr_28855;
})();
if(inst_28786__$1){
var statearr_28856_28902 = state_28831__$1;
(statearr_28856_28902[(1)] = (13));

} else {
var statearr_28857_28903 = state_28831__$1;
(statearr_28857_28903[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28832 === (9))){
var inst_28808 = (state_28831[(2)]);
var state_28831__$1 = state_28831;
var statearr_28858_28904 = state_28831__$1;
(statearr_28858_28904[(2)] = inst_28808);

(statearr_28858_28904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28832 === (5))){
var inst_28769 = cljs.core.deref.call(null,mults);
var inst_28770 = cljs.core.vals.call(null,inst_28769);
var inst_28771 = cljs.core.seq.call(null,inst_28770);
var inst_28772 = inst_28771;
var inst_28773 = null;
var inst_28774 = (0);
var inst_28775 = (0);
var state_28831__$1 = (function (){var statearr_28859 = state_28831;
(statearr_28859[(12)] = inst_28773);

(statearr_28859[(13)] = inst_28775);

(statearr_28859[(14)] = inst_28774);

(statearr_28859[(16)] = inst_28772);

return statearr_28859;
})();
var statearr_28860_28905 = state_28831__$1;
(statearr_28860_28905[(2)] = null);

(statearr_28860_28905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28832 === (14))){
var state_28831__$1 = state_28831;
var statearr_28864_28906 = state_28831__$1;
(statearr_28864_28906[(2)] = null);

(statearr_28864_28906[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28832 === (16))){
var inst_28786 = (state_28831[(10)]);
var inst_28790 = cljs.core.chunk_first.call(null,inst_28786);
var inst_28791 = cljs.core.chunk_rest.call(null,inst_28786);
var inst_28792 = cljs.core.count.call(null,inst_28790);
var inst_28772 = inst_28791;
var inst_28773 = inst_28790;
var inst_28774 = inst_28792;
var inst_28775 = (0);
var state_28831__$1 = (function (){var statearr_28865 = state_28831;
(statearr_28865[(12)] = inst_28773);

(statearr_28865[(13)] = inst_28775);

(statearr_28865[(14)] = inst_28774);

(statearr_28865[(16)] = inst_28772);

return statearr_28865;
})();
var statearr_28866_28907 = state_28831__$1;
(statearr_28866_28907[(2)] = null);

(statearr_28866_28907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28832 === (10))){
var inst_28773 = (state_28831[(12)]);
var inst_28775 = (state_28831[(13)]);
var inst_28774 = (state_28831[(14)]);
var inst_28772 = (state_28831[(16)]);
var inst_28780 = cljs.core._nth.call(null,inst_28773,inst_28775);
var inst_28781 = cljs.core.async.muxch_STAR_.call(null,inst_28780);
var inst_28782 = cljs.core.async.close_BANG_.call(null,inst_28781);
var inst_28783 = (inst_28775 + (1));
var tmp28861 = inst_28773;
var tmp28862 = inst_28774;
var tmp28863 = inst_28772;
var inst_28772__$1 = tmp28863;
var inst_28773__$1 = tmp28861;
var inst_28774__$1 = tmp28862;
var inst_28775__$1 = inst_28783;
var state_28831__$1 = (function (){var statearr_28867 = state_28831;
(statearr_28867[(12)] = inst_28773__$1);

(statearr_28867[(13)] = inst_28775__$1);

(statearr_28867[(17)] = inst_28782);

(statearr_28867[(14)] = inst_28774__$1);

(statearr_28867[(16)] = inst_28772__$1);

return statearr_28867;
})();
var statearr_28868_28908 = state_28831__$1;
(statearr_28868_28908[(2)] = null);

(statearr_28868_28908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28832 === (18))){
var inst_28801 = (state_28831[(2)]);
var state_28831__$1 = state_28831;
var statearr_28869_28909 = state_28831__$1;
(statearr_28869_28909[(2)] = inst_28801);

(statearr_28869_28909[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28832 === (8))){
var inst_28775 = (state_28831[(13)]);
var inst_28774 = (state_28831[(14)]);
var inst_28777 = (inst_28775 < inst_28774);
var inst_28778 = inst_28777;
var state_28831__$1 = state_28831;
if(cljs.core.truth_(inst_28778)){
var statearr_28870_28910 = state_28831__$1;
(statearr_28870_28910[(1)] = (10));

} else {
var statearr_28871_28911 = state_28831__$1;
(statearr_28871_28911[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
});})(c__26964__auto___28883,mults,ensure_mult,p))
;
return ((function (switch__26851__auto__,c__26964__auto___28883,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26852__auto__ = null;
var cljs$core$async$state_machine__26852__auto____0 = (function (){
var statearr_28875 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28875[(0)] = cljs$core$async$state_machine__26852__auto__);

(statearr_28875[(1)] = (1));

return statearr_28875;
});
var cljs$core$async$state_machine__26852__auto____1 = (function (state_28831){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_28831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e28876){if((e28876 instanceof Object)){
var ex__26855__auto__ = e28876;
var statearr_28877_28912 = state_28831;
(statearr_28877_28912[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28913 = state_28831;
state_28831 = G__28913;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$state_machine__26852__auto__ = function(state_28831){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26852__auto____1.call(this,state_28831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26852__auto____0;
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26852__auto____1;
return cljs$core$async$state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26964__auto___28883,mults,ensure_mult,p))
})();
var state__26966__auto__ = (function (){var statearr_28878 = f__26965__auto__.call(null);
(statearr_28878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26964__auto___28883);

return statearr_28878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto___28883,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args28914 = [];
var len__25866__auto___28917 = arguments.length;
var i__25867__auto___28918 = (0);
while(true){
if((i__25867__auto___28918 < len__25866__auto___28917)){
args28914.push((arguments[i__25867__auto___28918]));

var G__28919 = (i__25867__auto___28918 + (1));
i__25867__auto___28918 = G__28919;
continue;
} else {
}
break;
}

var G__28916 = args28914.length;
switch (G__28916) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28914.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args28921 = [];
var len__25866__auto___28924 = arguments.length;
var i__25867__auto___28925 = (0);
while(true){
if((i__25867__auto___28925 < len__25866__auto___28924)){
args28921.push((arguments[i__25867__auto___28925]));

var G__28926 = (i__25867__auto___28925 + (1));
i__25867__auto___28925 = G__28926;
continue;
} else {
}
break;
}

var G__28923 = args28921.length;
switch (G__28923) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28921.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args28928 = [];
var len__25866__auto___28999 = arguments.length;
var i__25867__auto___29000 = (0);
while(true){
if((i__25867__auto___29000 < len__25866__auto___28999)){
args28928.push((arguments[i__25867__auto___29000]));

var G__29001 = (i__25867__auto___29000 + (1));
i__25867__auto___29000 = G__29001;
continue;
} else {
}
break;
}

var G__28930 = args28928.length;
switch (G__28930) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28928.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__26964__auto___29003 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto___29003,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26965__auto__ = (function (){var switch__26851__auto__ = ((function (c__26964__auto___29003,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28969){
var state_val_28970 = (state_28969[(1)]);
if((state_val_28970 === (7))){
var state_28969__$1 = state_28969;
var statearr_28971_29004 = state_28969__$1;
(statearr_28971_29004[(2)] = null);

(statearr_28971_29004[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28970 === (1))){
var state_28969__$1 = state_28969;
var statearr_28972_29005 = state_28969__$1;
(statearr_28972_29005[(2)] = null);

(statearr_28972_29005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28970 === (4))){
var inst_28933 = (state_28969[(7)]);
var inst_28935 = (inst_28933 < cnt);
var state_28969__$1 = state_28969;
if(cljs.core.truth_(inst_28935)){
var statearr_28973_29006 = state_28969__$1;
(statearr_28973_29006[(1)] = (6));

} else {
var statearr_28974_29007 = state_28969__$1;
(statearr_28974_29007[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28970 === (15))){
var inst_28965 = (state_28969[(2)]);
var state_28969__$1 = state_28969;
var statearr_28975_29008 = state_28969__$1;
(statearr_28975_29008[(2)] = inst_28965);

(statearr_28975_29008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28970 === (13))){
var inst_28958 = cljs.core.async.close_BANG_.call(null,out);
var state_28969__$1 = state_28969;
var statearr_28976_29009 = state_28969__$1;
(statearr_28976_29009[(2)] = inst_28958);

(statearr_28976_29009[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28970 === (6))){
var state_28969__$1 = state_28969;
var statearr_28977_29010 = state_28969__$1;
(statearr_28977_29010[(2)] = null);

(statearr_28977_29010[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28970 === (3))){
var inst_28967 = (state_28969[(2)]);
var state_28969__$1 = state_28969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28969__$1,inst_28967);
} else {
if((state_val_28970 === (12))){
var inst_28955 = (state_28969[(8)]);
var inst_28955__$1 = (state_28969[(2)]);
var inst_28956 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28955__$1);
var state_28969__$1 = (function (){var statearr_28978 = state_28969;
(statearr_28978[(8)] = inst_28955__$1);

return statearr_28978;
})();
if(cljs.core.truth_(inst_28956)){
var statearr_28979_29011 = state_28969__$1;
(statearr_28979_29011[(1)] = (13));

} else {
var statearr_28980_29012 = state_28969__$1;
(statearr_28980_29012[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28970 === (2))){
var inst_28932 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28933 = (0);
var state_28969__$1 = (function (){var statearr_28981 = state_28969;
(statearr_28981[(9)] = inst_28932);

(statearr_28981[(7)] = inst_28933);

return statearr_28981;
})();
var statearr_28982_29013 = state_28969__$1;
(statearr_28982_29013[(2)] = null);

(statearr_28982_29013[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28970 === (11))){
var inst_28933 = (state_28969[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28969,(10),Object,null,(9));
var inst_28942 = chs__$1.call(null,inst_28933);
var inst_28943 = done.call(null,inst_28933);
var inst_28944 = cljs.core.async.take_BANG_.call(null,inst_28942,inst_28943);
var state_28969__$1 = state_28969;
var statearr_28983_29014 = state_28969__$1;
(statearr_28983_29014[(2)] = inst_28944);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28969__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28970 === (9))){
var inst_28933 = (state_28969[(7)]);
var inst_28946 = (state_28969[(2)]);
var inst_28947 = (inst_28933 + (1));
var inst_28933__$1 = inst_28947;
var state_28969__$1 = (function (){var statearr_28984 = state_28969;
(statearr_28984[(7)] = inst_28933__$1);

(statearr_28984[(10)] = inst_28946);

return statearr_28984;
})();
var statearr_28985_29015 = state_28969__$1;
(statearr_28985_29015[(2)] = null);

(statearr_28985_29015[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28970 === (5))){
var inst_28953 = (state_28969[(2)]);
var state_28969__$1 = (function (){var statearr_28986 = state_28969;
(statearr_28986[(11)] = inst_28953);

return statearr_28986;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28969__$1,(12),dchan);
} else {
if((state_val_28970 === (14))){
var inst_28955 = (state_28969[(8)]);
var inst_28960 = cljs.core.apply.call(null,f,inst_28955);
var state_28969__$1 = state_28969;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28969__$1,(16),out,inst_28960);
} else {
if((state_val_28970 === (16))){
var inst_28962 = (state_28969[(2)]);
var state_28969__$1 = (function (){var statearr_28987 = state_28969;
(statearr_28987[(12)] = inst_28962);

return statearr_28987;
})();
var statearr_28988_29016 = state_28969__$1;
(statearr_28988_29016[(2)] = null);

(statearr_28988_29016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28970 === (10))){
var inst_28937 = (state_28969[(2)]);
var inst_28938 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28969__$1 = (function (){var statearr_28989 = state_28969;
(statearr_28989[(13)] = inst_28937);

return statearr_28989;
})();
var statearr_28990_29017 = state_28969__$1;
(statearr_28990_29017[(2)] = inst_28938);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28969__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28970 === (8))){
var inst_28951 = (state_28969[(2)]);
var state_28969__$1 = state_28969;
var statearr_28991_29018 = state_28969__$1;
(statearr_28991_29018[(2)] = inst_28951);

(statearr_28991_29018[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__26964__auto___29003,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26851__auto__,c__26964__auto___29003,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26852__auto__ = null;
var cljs$core$async$state_machine__26852__auto____0 = (function (){
var statearr_28995 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28995[(0)] = cljs$core$async$state_machine__26852__auto__);

(statearr_28995[(1)] = (1));

return statearr_28995;
});
var cljs$core$async$state_machine__26852__auto____1 = (function (state_28969){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_28969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e28996){if((e28996 instanceof Object)){
var ex__26855__auto__ = e28996;
var statearr_28997_29019 = state_28969;
(statearr_28997_29019[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29020 = state_28969;
state_28969 = G__29020;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$state_machine__26852__auto__ = function(state_28969){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26852__auto____1.call(this,state_28969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26852__auto____0;
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26852__auto____1;
return cljs$core$async$state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26964__auto___29003,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26966__auto__ = (function (){var statearr_28998 = f__26965__auto__.call(null);
(statearr_28998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26964__auto___29003);

return statearr_28998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto___29003,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args29022 = [];
var len__25866__auto___29080 = arguments.length;
var i__25867__auto___29081 = (0);
while(true){
if((i__25867__auto___29081 < len__25866__auto___29080)){
args29022.push((arguments[i__25867__auto___29081]));

var G__29082 = (i__25867__auto___29081 + (1));
i__25867__auto___29081 = G__29082;
continue;
} else {
}
break;
}

var G__29024 = args29022.length;
switch (G__29024) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29022.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26964__auto___29084 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto___29084,out){
return (function (){
var f__26965__auto__ = (function (){var switch__26851__auto__ = ((function (c__26964__auto___29084,out){
return (function (state_29056){
var state_val_29057 = (state_29056[(1)]);
if((state_val_29057 === (7))){
var inst_29035 = (state_29056[(7)]);
var inst_29036 = (state_29056[(8)]);
var inst_29035__$1 = (state_29056[(2)]);
var inst_29036__$1 = cljs.core.nth.call(null,inst_29035__$1,(0),null);
var inst_29037 = cljs.core.nth.call(null,inst_29035__$1,(1),null);
var inst_29038 = (inst_29036__$1 == null);
var state_29056__$1 = (function (){var statearr_29058 = state_29056;
(statearr_29058[(9)] = inst_29037);

(statearr_29058[(7)] = inst_29035__$1);

(statearr_29058[(8)] = inst_29036__$1);

return statearr_29058;
})();
if(cljs.core.truth_(inst_29038)){
var statearr_29059_29085 = state_29056__$1;
(statearr_29059_29085[(1)] = (8));

} else {
var statearr_29060_29086 = state_29056__$1;
(statearr_29060_29086[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (1))){
var inst_29025 = cljs.core.vec.call(null,chs);
var inst_29026 = inst_29025;
var state_29056__$1 = (function (){var statearr_29061 = state_29056;
(statearr_29061[(10)] = inst_29026);

return statearr_29061;
})();
var statearr_29062_29087 = state_29056__$1;
(statearr_29062_29087[(2)] = null);

(statearr_29062_29087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (4))){
var inst_29026 = (state_29056[(10)]);
var state_29056__$1 = state_29056;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29056__$1,(7),inst_29026);
} else {
if((state_val_29057 === (6))){
var inst_29052 = (state_29056[(2)]);
var state_29056__$1 = state_29056;
var statearr_29063_29088 = state_29056__$1;
(statearr_29063_29088[(2)] = inst_29052);

(statearr_29063_29088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (3))){
var inst_29054 = (state_29056[(2)]);
var state_29056__$1 = state_29056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29056__$1,inst_29054);
} else {
if((state_val_29057 === (2))){
var inst_29026 = (state_29056[(10)]);
var inst_29028 = cljs.core.count.call(null,inst_29026);
var inst_29029 = (inst_29028 > (0));
var state_29056__$1 = state_29056;
if(cljs.core.truth_(inst_29029)){
var statearr_29065_29089 = state_29056__$1;
(statearr_29065_29089[(1)] = (4));

} else {
var statearr_29066_29090 = state_29056__$1;
(statearr_29066_29090[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (11))){
var inst_29026 = (state_29056[(10)]);
var inst_29045 = (state_29056[(2)]);
var tmp29064 = inst_29026;
var inst_29026__$1 = tmp29064;
var state_29056__$1 = (function (){var statearr_29067 = state_29056;
(statearr_29067[(11)] = inst_29045);

(statearr_29067[(10)] = inst_29026__$1);

return statearr_29067;
})();
var statearr_29068_29091 = state_29056__$1;
(statearr_29068_29091[(2)] = null);

(statearr_29068_29091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (9))){
var inst_29036 = (state_29056[(8)]);
var state_29056__$1 = state_29056;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29056__$1,(11),out,inst_29036);
} else {
if((state_val_29057 === (5))){
var inst_29050 = cljs.core.async.close_BANG_.call(null,out);
var state_29056__$1 = state_29056;
var statearr_29069_29092 = state_29056__$1;
(statearr_29069_29092[(2)] = inst_29050);

(statearr_29069_29092[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (10))){
var inst_29048 = (state_29056[(2)]);
var state_29056__$1 = state_29056;
var statearr_29070_29093 = state_29056__$1;
(statearr_29070_29093[(2)] = inst_29048);

(statearr_29070_29093[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (8))){
var inst_29037 = (state_29056[(9)]);
var inst_29035 = (state_29056[(7)]);
var inst_29026 = (state_29056[(10)]);
var inst_29036 = (state_29056[(8)]);
var inst_29040 = (function (){var cs = inst_29026;
var vec__29031 = inst_29035;
var v = inst_29036;
var c = inst_29037;
return ((function (cs,vec__29031,v,c,inst_29037,inst_29035,inst_29026,inst_29036,state_val_29057,c__26964__auto___29084,out){
return (function (p1__29021_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29021_SHARP_);
});
;})(cs,vec__29031,v,c,inst_29037,inst_29035,inst_29026,inst_29036,state_val_29057,c__26964__auto___29084,out))
})();
var inst_29041 = cljs.core.filterv.call(null,inst_29040,inst_29026);
var inst_29026__$1 = inst_29041;
var state_29056__$1 = (function (){var statearr_29071 = state_29056;
(statearr_29071[(10)] = inst_29026__$1);

return statearr_29071;
})();
var statearr_29072_29094 = state_29056__$1;
(statearr_29072_29094[(2)] = null);

(statearr_29072_29094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__26964__auto___29084,out))
;
return ((function (switch__26851__auto__,c__26964__auto___29084,out){
return (function() {
var cljs$core$async$state_machine__26852__auto__ = null;
var cljs$core$async$state_machine__26852__auto____0 = (function (){
var statearr_29076 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29076[(0)] = cljs$core$async$state_machine__26852__auto__);

(statearr_29076[(1)] = (1));

return statearr_29076;
});
var cljs$core$async$state_machine__26852__auto____1 = (function (state_29056){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_29056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e29077){if((e29077 instanceof Object)){
var ex__26855__auto__ = e29077;
var statearr_29078_29095 = state_29056;
(statearr_29078_29095[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29096 = state_29056;
state_29056 = G__29096;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$state_machine__26852__auto__ = function(state_29056){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26852__auto____1.call(this,state_29056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26852__auto____0;
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26852__auto____1;
return cljs$core$async$state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26964__auto___29084,out))
})();
var state__26966__auto__ = (function (){var statearr_29079 = f__26965__auto__.call(null);
(statearr_29079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26964__auto___29084);

return statearr_29079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto___29084,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args29097 = [];
var len__25866__auto___29146 = arguments.length;
var i__25867__auto___29147 = (0);
while(true){
if((i__25867__auto___29147 < len__25866__auto___29146)){
args29097.push((arguments[i__25867__auto___29147]));

var G__29148 = (i__25867__auto___29147 + (1));
i__25867__auto___29147 = G__29148;
continue;
} else {
}
break;
}

var G__29099 = args29097.length;
switch (G__29099) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29097.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26964__auto___29150 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto___29150,out){
return (function (){
var f__26965__auto__ = (function (){var switch__26851__auto__ = ((function (c__26964__auto___29150,out){
return (function (state_29123){
var state_val_29124 = (state_29123[(1)]);
if((state_val_29124 === (7))){
var inst_29105 = (state_29123[(7)]);
var inst_29105__$1 = (state_29123[(2)]);
var inst_29106 = (inst_29105__$1 == null);
var inst_29107 = cljs.core.not.call(null,inst_29106);
var state_29123__$1 = (function (){var statearr_29125 = state_29123;
(statearr_29125[(7)] = inst_29105__$1);

return statearr_29125;
})();
if(inst_29107){
var statearr_29126_29151 = state_29123__$1;
(statearr_29126_29151[(1)] = (8));

} else {
var statearr_29127_29152 = state_29123__$1;
(statearr_29127_29152[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (1))){
var inst_29100 = (0);
var state_29123__$1 = (function (){var statearr_29128 = state_29123;
(statearr_29128[(8)] = inst_29100);

return statearr_29128;
})();
var statearr_29129_29153 = state_29123__$1;
(statearr_29129_29153[(2)] = null);

(statearr_29129_29153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (4))){
var state_29123__$1 = state_29123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29123__$1,(7),ch);
} else {
if((state_val_29124 === (6))){
var inst_29118 = (state_29123[(2)]);
var state_29123__$1 = state_29123;
var statearr_29130_29154 = state_29123__$1;
(statearr_29130_29154[(2)] = inst_29118);

(statearr_29130_29154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (3))){
var inst_29120 = (state_29123[(2)]);
var inst_29121 = cljs.core.async.close_BANG_.call(null,out);
var state_29123__$1 = (function (){var statearr_29131 = state_29123;
(statearr_29131[(9)] = inst_29120);

return statearr_29131;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29123__$1,inst_29121);
} else {
if((state_val_29124 === (2))){
var inst_29100 = (state_29123[(8)]);
var inst_29102 = (inst_29100 < n);
var state_29123__$1 = state_29123;
if(cljs.core.truth_(inst_29102)){
var statearr_29132_29155 = state_29123__$1;
(statearr_29132_29155[(1)] = (4));

} else {
var statearr_29133_29156 = state_29123__$1;
(statearr_29133_29156[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (11))){
var inst_29100 = (state_29123[(8)]);
var inst_29110 = (state_29123[(2)]);
var inst_29111 = (inst_29100 + (1));
var inst_29100__$1 = inst_29111;
var state_29123__$1 = (function (){var statearr_29134 = state_29123;
(statearr_29134[(8)] = inst_29100__$1);

(statearr_29134[(10)] = inst_29110);

return statearr_29134;
})();
var statearr_29135_29157 = state_29123__$1;
(statearr_29135_29157[(2)] = null);

(statearr_29135_29157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (9))){
var state_29123__$1 = state_29123;
var statearr_29136_29158 = state_29123__$1;
(statearr_29136_29158[(2)] = null);

(statearr_29136_29158[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (5))){
var state_29123__$1 = state_29123;
var statearr_29137_29159 = state_29123__$1;
(statearr_29137_29159[(2)] = null);

(statearr_29137_29159[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (10))){
var inst_29115 = (state_29123[(2)]);
var state_29123__$1 = state_29123;
var statearr_29138_29160 = state_29123__$1;
(statearr_29138_29160[(2)] = inst_29115);

(statearr_29138_29160[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (8))){
var inst_29105 = (state_29123[(7)]);
var state_29123__$1 = state_29123;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29123__$1,(11),out,inst_29105);
} else {
return null;
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
});})(c__26964__auto___29150,out))
;
return ((function (switch__26851__auto__,c__26964__auto___29150,out){
return (function() {
var cljs$core$async$state_machine__26852__auto__ = null;
var cljs$core$async$state_machine__26852__auto____0 = (function (){
var statearr_29142 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29142[(0)] = cljs$core$async$state_machine__26852__auto__);

(statearr_29142[(1)] = (1));

return statearr_29142;
});
var cljs$core$async$state_machine__26852__auto____1 = (function (state_29123){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_29123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e29143){if((e29143 instanceof Object)){
var ex__26855__auto__ = e29143;
var statearr_29144_29161 = state_29123;
(statearr_29144_29161[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29162 = state_29123;
state_29123 = G__29162;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$state_machine__26852__auto__ = function(state_29123){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26852__auto____1.call(this,state_29123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26852__auto____0;
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26852__auto____1;
return cljs$core$async$state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26964__auto___29150,out))
})();
var state__26966__auto__ = (function (){var statearr_29145 = f__26965__auto__.call(null);
(statearr_29145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26964__auto___29150);

return statearr_29145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto___29150,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29170 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29170 = (function (map_LT_,f,ch,meta29171){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29171 = meta29171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29172,meta29171__$1){
var self__ = this;
var _29172__$1 = this;
return (new cljs.core.async.t_cljs$core$async29170(self__.map_LT_,self__.f,self__.ch,meta29171__$1));
});

cljs.core.async.t_cljs$core$async29170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29172){
var self__ = this;
var _29172__$1 = this;
return self__.meta29171;
});

cljs.core.async.t_cljs$core$async29170.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29170.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29170.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29170.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29170.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29173 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29173 = (function (map_LT_,f,ch,meta29171,_,fn1,meta29174){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29171 = meta29171;
this._ = _;
this.fn1 = fn1;
this.meta29174 = meta29174;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29175,meta29174__$1){
var self__ = this;
var _29175__$1 = this;
return (new cljs.core.async.t_cljs$core$async29173(self__.map_LT_,self__.f,self__.ch,self__.meta29171,self__._,self__.fn1,meta29174__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29173.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29175){
var self__ = this;
var _29175__$1 = this;
return self__.meta29174;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29173.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29173.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29173.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29173.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29163_SHARP_){
return f1.call(null,(((p1__29163_SHARP_ == null))?null:self__.f.call(null,p1__29163_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29173.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29171","meta29171",-581820706,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29170","cljs.core.async/t_cljs$core$async29170",-869426687,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29174","meta29174",1357026741,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29173.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29173.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29173";

cljs.core.async.t_cljs$core$async29173.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25397__auto__,writer__25398__auto__,opt__25399__auto__){
return cljs.core._write.call(null,writer__25398__auto__,"cljs.core.async/t_cljs$core$async29173");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29173 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29173(map_LT___$1,f__$1,ch__$1,meta29171__$1,___$2,fn1__$1,meta29174){
return (new cljs.core.async.t_cljs$core$async29173(map_LT___$1,f__$1,ch__$1,meta29171__$1,___$2,fn1__$1,meta29174));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29173(self__.map_LT_,self__.f,self__.ch,self__.meta29171,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24779__auto__ = ret;
if(cljs.core.truth_(and__24779__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24779__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29170.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29170.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29171","meta29171",-581820706,null)], null);
});

cljs.core.async.t_cljs$core$async29170.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29170.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29170";

cljs.core.async.t_cljs$core$async29170.cljs$lang$ctorPrWriter = (function (this__25397__auto__,writer__25398__auto__,opt__25399__auto__){
return cljs.core._write.call(null,writer__25398__auto__,"cljs.core.async/t_cljs$core$async29170");
});

cljs.core.async.__GT_t_cljs$core$async29170 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29170(map_LT___$1,f__$1,ch__$1,meta29171){
return (new cljs.core.async.t_cljs$core$async29170(map_LT___$1,f__$1,ch__$1,meta29171));
});

}

return (new cljs.core.async.t_cljs$core$async29170(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29179 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29179 = (function (map_GT_,f,ch,meta29180){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29180 = meta29180;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29181,meta29180__$1){
var self__ = this;
var _29181__$1 = this;
return (new cljs.core.async.t_cljs$core$async29179(self__.map_GT_,self__.f,self__.ch,meta29180__$1));
});

cljs.core.async.t_cljs$core$async29179.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29181){
var self__ = this;
var _29181__$1 = this;
return self__.meta29180;
});

cljs.core.async.t_cljs$core$async29179.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29179.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29179.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29179.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29179.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29179.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29179.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29180","meta29180",2013276251,null)], null);
});

cljs.core.async.t_cljs$core$async29179.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29179.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29179";

cljs.core.async.t_cljs$core$async29179.cljs$lang$ctorPrWriter = (function (this__25397__auto__,writer__25398__auto__,opt__25399__auto__){
return cljs.core._write.call(null,writer__25398__auto__,"cljs.core.async/t_cljs$core$async29179");
});

cljs.core.async.__GT_t_cljs$core$async29179 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29179(map_GT___$1,f__$1,ch__$1,meta29180){
return (new cljs.core.async.t_cljs$core$async29179(map_GT___$1,f__$1,ch__$1,meta29180));
});

}

return (new cljs.core.async.t_cljs$core$async29179(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29185 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29185 = (function (filter_GT_,p,ch,meta29186){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29186 = meta29186;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29187,meta29186__$1){
var self__ = this;
var _29187__$1 = this;
return (new cljs.core.async.t_cljs$core$async29185(self__.filter_GT_,self__.p,self__.ch,meta29186__$1));
});

cljs.core.async.t_cljs$core$async29185.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29187){
var self__ = this;
var _29187__$1 = this;
return self__.meta29186;
});

cljs.core.async.t_cljs$core$async29185.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29185.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29185.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29185.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29185.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29185.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29185.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29185.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29186","meta29186",533334270,null)], null);
});

cljs.core.async.t_cljs$core$async29185.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29185.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29185";

cljs.core.async.t_cljs$core$async29185.cljs$lang$ctorPrWriter = (function (this__25397__auto__,writer__25398__auto__,opt__25399__auto__){
return cljs.core._write.call(null,writer__25398__auto__,"cljs.core.async/t_cljs$core$async29185");
});

cljs.core.async.__GT_t_cljs$core$async29185 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29185(filter_GT___$1,p__$1,ch__$1,meta29186){
return (new cljs.core.async.t_cljs$core$async29185(filter_GT___$1,p__$1,ch__$1,meta29186));
});

}

return (new cljs.core.async.t_cljs$core$async29185(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args29188 = [];
var len__25866__auto___29232 = arguments.length;
var i__25867__auto___29233 = (0);
while(true){
if((i__25867__auto___29233 < len__25866__auto___29232)){
args29188.push((arguments[i__25867__auto___29233]));

var G__29234 = (i__25867__auto___29233 + (1));
i__25867__auto___29233 = G__29234;
continue;
} else {
}
break;
}

var G__29190 = args29188.length;
switch (G__29190) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29188.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26964__auto___29236 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto___29236,out){
return (function (){
var f__26965__auto__ = (function (){var switch__26851__auto__ = ((function (c__26964__auto___29236,out){
return (function (state_29211){
var state_val_29212 = (state_29211[(1)]);
if((state_val_29212 === (7))){
var inst_29207 = (state_29211[(2)]);
var state_29211__$1 = state_29211;
var statearr_29213_29237 = state_29211__$1;
(statearr_29213_29237[(2)] = inst_29207);

(statearr_29213_29237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (1))){
var state_29211__$1 = state_29211;
var statearr_29214_29238 = state_29211__$1;
(statearr_29214_29238[(2)] = null);

(statearr_29214_29238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (4))){
var inst_29193 = (state_29211[(7)]);
var inst_29193__$1 = (state_29211[(2)]);
var inst_29194 = (inst_29193__$1 == null);
var state_29211__$1 = (function (){var statearr_29215 = state_29211;
(statearr_29215[(7)] = inst_29193__$1);

return statearr_29215;
})();
if(cljs.core.truth_(inst_29194)){
var statearr_29216_29239 = state_29211__$1;
(statearr_29216_29239[(1)] = (5));

} else {
var statearr_29217_29240 = state_29211__$1;
(statearr_29217_29240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (6))){
var inst_29193 = (state_29211[(7)]);
var inst_29198 = p.call(null,inst_29193);
var state_29211__$1 = state_29211;
if(cljs.core.truth_(inst_29198)){
var statearr_29218_29241 = state_29211__$1;
(statearr_29218_29241[(1)] = (8));

} else {
var statearr_29219_29242 = state_29211__$1;
(statearr_29219_29242[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (3))){
var inst_29209 = (state_29211[(2)]);
var state_29211__$1 = state_29211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29211__$1,inst_29209);
} else {
if((state_val_29212 === (2))){
var state_29211__$1 = state_29211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29211__$1,(4),ch);
} else {
if((state_val_29212 === (11))){
var inst_29201 = (state_29211[(2)]);
var state_29211__$1 = state_29211;
var statearr_29220_29243 = state_29211__$1;
(statearr_29220_29243[(2)] = inst_29201);

(statearr_29220_29243[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (9))){
var state_29211__$1 = state_29211;
var statearr_29221_29244 = state_29211__$1;
(statearr_29221_29244[(2)] = null);

(statearr_29221_29244[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (5))){
var inst_29196 = cljs.core.async.close_BANG_.call(null,out);
var state_29211__$1 = state_29211;
var statearr_29222_29245 = state_29211__$1;
(statearr_29222_29245[(2)] = inst_29196);

(statearr_29222_29245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (10))){
var inst_29204 = (state_29211[(2)]);
var state_29211__$1 = (function (){var statearr_29223 = state_29211;
(statearr_29223[(8)] = inst_29204);

return statearr_29223;
})();
var statearr_29224_29246 = state_29211__$1;
(statearr_29224_29246[(2)] = null);

(statearr_29224_29246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (8))){
var inst_29193 = (state_29211[(7)]);
var state_29211__$1 = state_29211;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29211__$1,(11),out,inst_29193);
} else {
return null;
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
});})(c__26964__auto___29236,out))
;
return ((function (switch__26851__auto__,c__26964__auto___29236,out){
return (function() {
var cljs$core$async$state_machine__26852__auto__ = null;
var cljs$core$async$state_machine__26852__auto____0 = (function (){
var statearr_29228 = [null,null,null,null,null,null,null,null,null];
(statearr_29228[(0)] = cljs$core$async$state_machine__26852__auto__);

(statearr_29228[(1)] = (1));

return statearr_29228;
});
var cljs$core$async$state_machine__26852__auto____1 = (function (state_29211){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_29211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e29229){if((e29229 instanceof Object)){
var ex__26855__auto__ = e29229;
var statearr_29230_29247 = state_29211;
(statearr_29230_29247[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29248 = state_29211;
state_29211 = G__29248;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$state_machine__26852__auto__ = function(state_29211){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26852__auto____1.call(this,state_29211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26852__auto____0;
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26852__auto____1;
return cljs$core$async$state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26964__auto___29236,out))
})();
var state__26966__auto__ = (function (){var statearr_29231 = f__26965__auto__.call(null);
(statearr_29231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26964__auto___29236);

return statearr_29231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto___29236,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29249 = [];
var len__25866__auto___29252 = arguments.length;
var i__25867__auto___29253 = (0);
while(true){
if((i__25867__auto___29253 < len__25866__auto___29252)){
args29249.push((arguments[i__25867__auto___29253]));

var G__29254 = (i__25867__auto___29253 + (1));
i__25867__auto___29253 = G__29254;
continue;
} else {
}
break;
}

var G__29251 = args29249.length;
switch (G__29251) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29249.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__26964__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto__){
return (function (){
var f__26965__auto__ = (function (){var switch__26851__auto__ = ((function (c__26964__auto__){
return (function (state_29421){
var state_val_29422 = (state_29421[(1)]);
if((state_val_29422 === (7))){
var inst_29417 = (state_29421[(2)]);
var state_29421__$1 = state_29421;
var statearr_29423_29464 = state_29421__$1;
(statearr_29423_29464[(2)] = inst_29417);

(statearr_29423_29464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (20))){
var inst_29387 = (state_29421[(7)]);
var inst_29398 = (state_29421[(2)]);
var inst_29399 = cljs.core.next.call(null,inst_29387);
var inst_29373 = inst_29399;
var inst_29374 = null;
var inst_29375 = (0);
var inst_29376 = (0);
var state_29421__$1 = (function (){var statearr_29424 = state_29421;
(statearr_29424[(8)] = inst_29374);

(statearr_29424[(9)] = inst_29375);

(statearr_29424[(10)] = inst_29398);

(statearr_29424[(11)] = inst_29373);

(statearr_29424[(12)] = inst_29376);

return statearr_29424;
})();
var statearr_29425_29465 = state_29421__$1;
(statearr_29425_29465[(2)] = null);

(statearr_29425_29465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (1))){
var state_29421__$1 = state_29421;
var statearr_29426_29466 = state_29421__$1;
(statearr_29426_29466[(2)] = null);

(statearr_29426_29466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (4))){
var inst_29362 = (state_29421[(13)]);
var inst_29362__$1 = (state_29421[(2)]);
var inst_29363 = (inst_29362__$1 == null);
var state_29421__$1 = (function (){var statearr_29427 = state_29421;
(statearr_29427[(13)] = inst_29362__$1);

return statearr_29427;
})();
if(cljs.core.truth_(inst_29363)){
var statearr_29428_29467 = state_29421__$1;
(statearr_29428_29467[(1)] = (5));

} else {
var statearr_29429_29468 = state_29421__$1;
(statearr_29429_29468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (15))){
var state_29421__$1 = state_29421;
var statearr_29433_29469 = state_29421__$1;
(statearr_29433_29469[(2)] = null);

(statearr_29433_29469[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (21))){
var state_29421__$1 = state_29421;
var statearr_29434_29470 = state_29421__$1;
(statearr_29434_29470[(2)] = null);

(statearr_29434_29470[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (13))){
var inst_29374 = (state_29421[(8)]);
var inst_29375 = (state_29421[(9)]);
var inst_29373 = (state_29421[(11)]);
var inst_29376 = (state_29421[(12)]);
var inst_29383 = (state_29421[(2)]);
var inst_29384 = (inst_29376 + (1));
var tmp29430 = inst_29374;
var tmp29431 = inst_29375;
var tmp29432 = inst_29373;
var inst_29373__$1 = tmp29432;
var inst_29374__$1 = tmp29430;
var inst_29375__$1 = tmp29431;
var inst_29376__$1 = inst_29384;
var state_29421__$1 = (function (){var statearr_29435 = state_29421;
(statearr_29435[(8)] = inst_29374__$1);

(statearr_29435[(9)] = inst_29375__$1);

(statearr_29435[(14)] = inst_29383);

(statearr_29435[(11)] = inst_29373__$1);

(statearr_29435[(12)] = inst_29376__$1);

return statearr_29435;
})();
var statearr_29436_29471 = state_29421__$1;
(statearr_29436_29471[(2)] = null);

(statearr_29436_29471[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (22))){
var state_29421__$1 = state_29421;
var statearr_29437_29472 = state_29421__$1;
(statearr_29437_29472[(2)] = null);

(statearr_29437_29472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (6))){
var inst_29362 = (state_29421[(13)]);
var inst_29371 = f.call(null,inst_29362);
var inst_29372 = cljs.core.seq.call(null,inst_29371);
var inst_29373 = inst_29372;
var inst_29374 = null;
var inst_29375 = (0);
var inst_29376 = (0);
var state_29421__$1 = (function (){var statearr_29438 = state_29421;
(statearr_29438[(8)] = inst_29374);

(statearr_29438[(9)] = inst_29375);

(statearr_29438[(11)] = inst_29373);

(statearr_29438[(12)] = inst_29376);

return statearr_29438;
})();
var statearr_29439_29473 = state_29421__$1;
(statearr_29439_29473[(2)] = null);

(statearr_29439_29473[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (17))){
var inst_29387 = (state_29421[(7)]);
var inst_29391 = cljs.core.chunk_first.call(null,inst_29387);
var inst_29392 = cljs.core.chunk_rest.call(null,inst_29387);
var inst_29393 = cljs.core.count.call(null,inst_29391);
var inst_29373 = inst_29392;
var inst_29374 = inst_29391;
var inst_29375 = inst_29393;
var inst_29376 = (0);
var state_29421__$1 = (function (){var statearr_29440 = state_29421;
(statearr_29440[(8)] = inst_29374);

(statearr_29440[(9)] = inst_29375);

(statearr_29440[(11)] = inst_29373);

(statearr_29440[(12)] = inst_29376);

return statearr_29440;
})();
var statearr_29441_29474 = state_29421__$1;
(statearr_29441_29474[(2)] = null);

(statearr_29441_29474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (3))){
var inst_29419 = (state_29421[(2)]);
var state_29421__$1 = state_29421;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29421__$1,inst_29419);
} else {
if((state_val_29422 === (12))){
var inst_29407 = (state_29421[(2)]);
var state_29421__$1 = state_29421;
var statearr_29442_29475 = state_29421__$1;
(statearr_29442_29475[(2)] = inst_29407);

(statearr_29442_29475[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (2))){
var state_29421__$1 = state_29421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29421__$1,(4),in$);
} else {
if((state_val_29422 === (23))){
var inst_29415 = (state_29421[(2)]);
var state_29421__$1 = state_29421;
var statearr_29443_29476 = state_29421__$1;
(statearr_29443_29476[(2)] = inst_29415);

(statearr_29443_29476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (19))){
var inst_29402 = (state_29421[(2)]);
var state_29421__$1 = state_29421;
var statearr_29444_29477 = state_29421__$1;
(statearr_29444_29477[(2)] = inst_29402);

(statearr_29444_29477[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (11))){
var inst_29387 = (state_29421[(7)]);
var inst_29373 = (state_29421[(11)]);
var inst_29387__$1 = cljs.core.seq.call(null,inst_29373);
var state_29421__$1 = (function (){var statearr_29445 = state_29421;
(statearr_29445[(7)] = inst_29387__$1);

return statearr_29445;
})();
if(inst_29387__$1){
var statearr_29446_29478 = state_29421__$1;
(statearr_29446_29478[(1)] = (14));

} else {
var statearr_29447_29479 = state_29421__$1;
(statearr_29447_29479[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (9))){
var inst_29409 = (state_29421[(2)]);
var inst_29410 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29421__$1 = (function (){var statearr_29448 = state_29421;
(statearr_29448[(15)] = inst_29409);

return statearr_29448;
})();
if(cljs.core.truth_(inst_29410)){
var statearr_29449_29480 = state_29421__$1;
(statearr_29449_29480[(1)] = (21));

} else {
var statearr_29450_29481 = state_29421__$1;
(statearr_29450_29481[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (5))){
var inst_29365 = cljs.core.async.close_BANG_.call(null,out);
var state_29421__$1 = state_29421;
var statearr_29451_29482 = state_29421__$1;
(statearr_29451_29482[(2)] = inst_29365);

(statearr_29451_29482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (14))){
var inst_29387 = (state_29421[(7)]);
var inst_29389 = cljs.core.chunked_seq_QMARK_.call(null,inst_29387);
var state_29421__$1 = state_29421;
if(inst_29389){
var statearr_29452_29483 = state_29421__$1;
(statearr_29452_29483[(1)] = (17));

} else {
var statearr_29453_29484 = state_29421__$1;
(statearr_29453_29484[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (16))){
var inst_29405 = (state_29421[(2)]);
var state_29421__$1 = state_29421;
var statearr_29454_29485 = state_29421__$1;
(statearr_29454_29485[(2)] = inst_29405);

(statearr_29454_29485[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (10))){
var inst_29374 = (state_29421[(8)]);
var inst_29376 = (state_29421[(12)]);
var inst_29381 = cljs.core._nth.call(null,inst_29374,inst_29376);
var state_29421__$1 = state_29421;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29421__$1,(13),out,inst_29381);
} else {
if((state_val_29422 === (18))){
var inst_29387 = (state_29421[(7)]);
var inst_29396 = cljs.core.first.call(null,inst_29387);
var state_29421__$1 = state_29421;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29421__$1,(20),out,inst_29396);
} else {
if((state_val_29422 === (8))){
var inst_29375 = (state_29421[(9)]);
var inst_29376 = (state_29421[(12)]);
var inst_29378 = (inst_29376 < inst_29375);
var inst_29379 = inst_29378;
var state_29421__$1 = state_29421;
if(cljs.core.truth_(inst_29379)){
var statearr_29455_29486 = state_29421__$1;
(statearr_29455_29486[(1)] = (10));

} else {
var statearr_29456_29487 = state_29421__$1;
(statearr_29456_29487[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
});})(c__26964__auto__))
;
return ((function (switch__26851__auto__,c__26964__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26852__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26852__auto____0 = (function (){
var statearr_29460 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29460[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26852__auto__);

(statearr_29460[(1)] = (1));

return statearr_29460;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26852__auto____1 = (function (state_29421){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_29421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e29461){if((e29461 instanceof Object)){
var ex__26855__auto__ = e29461;
var statearr_29462_29488 = state_29421;
(statearr_29462_29488[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29489 = state_29421;
state_29421 = G__29489;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26852__auto__ = function(state_29421){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26852__auto____1.call(this,state_29421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26852__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26852__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26964__auto__))
})();
var state__26966__auto__ = (function (){var statearr_29463 = f__26965__auto__.call(null);
(statearr_29463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26964__auto__);

return statearr_29463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto__))
);

return c__26964__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29490 = [];
var len__25866__auto___29493 = arguments.length;
var i__25867__auto___29494 = (0);
while(true){
if((i__25867__auto___29494 < len__25866__auto___29493)){
args29490.push((arguments[i__25867__auto___29494]));

var G__29495 = (i__25867__auto___29494 + (1));
i__25867__auto___29494 = G__29495;
continue;
} else {
}
break;
}

var G__29492 = args29490.length;
switch (G__29492) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29490.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args29497 = [];
var len__25866__auto___29500 = arguments.length;
var i__25867__auto___29501 = (0);
while(true){
if((i__25867__auto___29501 < len__25866__auto___29500)){
args29497.push((arguments[i__25867__auto___29501]));

var G__29502 = (i__25867__auto___29501 + (1));
i__25867__auto___29501 = G__29502;
continue;
} else {
}
break;
}

var G__29499 = args29497.length;
switch (G__29499) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29497.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args29504 = [];
var len__25866__auto___29555 = arguments.length;
var i__25867__auto___29556 = (0);
while(true){
if((i__25867__auto___29556 < len__25866__auto___29555)){
args29504.push((arguments[i__25867__auto___29556]));

var G__29557 = (i__25867__auto___29556 + (1));
i__25867__auto___29556 = G__29557;
continue;
} else {
}
break;
}

var G__29506 = args29504.length;
switch (G__29506) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29504.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26964__auto___29559 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto___29559,out){
return (function (){
var f__26965__auto__ = (function (){var switch__26851__auto__ = ((function (c__26964__auto___29559,out){
return (function (state_29530){
var state_val_29531 = (state_29530[(1)]);
if((state_val_29531 === (7))){
var inst_29525 = (state_29530[(2)]);
var state_29530__$1 = state_29530;
var statearr_29532_29560 = state_29530__$1;
(statearr_29532_29560[(2)] = inst_29525);

(statearr_29532_29560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29531 === (1))){
var inst_29507 = null;
var state_29530__$1 = (function (){var statearr_29533 = state_29530;
(statearr_29533[(7)] = inst_29507);

return statearr_29533;
})();
var statearr_29534_29561 = state_29530__$1;
(statearr_29534_29561[(2)] = null);

(statearr_29534_29561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29531 === (4))){
var inst_29510 = (state_29530[(8)]);
var inst_29510__$1 = (state_29530[(2)]);
var inst_29511 = (inst_29510__$1 == null);
var inst_29512 = cljs.core.not.call(null,inst_29511);
var state_29530__$1 = (function (){var statearr_29535 = state_29530;
(statearr_29535[(8)] = inst_29510__$1);

return statearr_29535;
})();
if(inst_29512){
var statearr_29536_29562 = state_29530__$1;
(statearr_29536_29562[(1)] = (5));

} else {
var statearr_29537_29563 = state_29530__$1;
(statearr_29537_29563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29531 === (6))){
var state_29530__$1 = state_29530;
var statearr_29538_29564 = state_29530__$1;
(statearr_29538_29564[(2)] = null);

(statearr_29538_29564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29531 === (3))){
var inst_29527 = (state_29530[(2)]);
var inst_29528 = cljs.core.async.close_BANG_.call(null,out);
var state_29530__$1 = (function (){var statearr_29539 = state_29530;
(statearr_29539[(9)] = inst_29527);

return statearr_29539;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29530__$1,inst_29528);
} else {
if((state_val_29531 === (2))){
var state_29530__$1 = state_29530;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29530__$1,(4),ch);
} else {
if((state_val_29531 === (11))){
var inst_29510 = (state_29530[(8)]);
var inst_29519 = (state_29530[(2)]);
var inst_29507 = inst_29510;
var state_29530__$1 = (function (){var statearr_29540 = state_29530;
(statearr_29540[(7)] = inst_29507);

(statearr_29540[(10)] = inst_29519);

return statearr_29540;
})();
var statearr_29541_29565 = state_29530__$1;
(statearr_29541_29565[(2)] = null);

(statearr_29541_29565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29531 === (9))){
var inst_29510 = (state_29530[(8)]);
var state_29530__$1 = state_29530;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29530__$1,(11),out,inst_29510);
} else {
if((state_val_29531 === (5))){
var inst_29507 = (state_29530[(7)]);
var inst_29510 = (state_29530[(8)]);
var inst_29514 = cljs.core._EQ_.call(null,inst_29510,inst_29507);
var state_29530__$1 = state_29530;
if(inst_29514){
var statearr_29543_29566 = state_29530__$1;
(statearr_29543_29566[(1)] = (8));

} else {
var statearr_29544_29567 = state_29530__$1;
(statearr_29544_29567[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29531 === (10))){
var inst_29522 = (state_29530[(2)]);
var state_29530__$1 = state_29530;
var statearr_29545_29568 = state_29530__$1;
(statearr_29545_29568[(2)] = inst_29522);

(statearr_29545_29568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29531 === (8))){
var inst_29507 = (state_29530[(7)]);
var tmp29542 = inst_29507;
var inst_29507__$1 = tmp29542;
var state_29530__$1 = (function (){var statearr_29546 = state_29530;
(statearr_29546[(7)] = inst_29507__$1);

return statearr_29546;
})();
var statearr_29547_29569 = state_29530__$1;
(statearr_29547_29569[(2)] = null);

(statearr_29547_29569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__26964__auto___29559,out))
;
return ((function (switch__26851__auto__,c__26964__auto___29559,out){
return (function() {
var cljs$core$async$state_machine__26852__auto__ = null;
var cljs$core$async$state_machine__26852__auto____0 = (function (){
var statearr_29551 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29551[(0)] = cljs$core$async$state_machine__26852__auto__);

(statearr_29551[(1)] = (1));

return statearr_29551;
});
var cljs$core$async$state_machine__26852__auto____1 = (function (state_29530){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_29530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e29552){if((e29552 instanceof Object)){
var ex__26855__auto__ = e29552;
var statearr_29553_29570 = state_29530;
(statearr_29553_29570[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29571 = state_29530;
state_29530 = G__29571;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$state_machine__26852__auto__ = function(state_29530){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26852__auto____1.call(this,state_29530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26852__auto____0;
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26852__auto____1;
return cljs$core$async$state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26964__auto___29559,out))
})();
var state__26966__auto__ = (function (){var statearr_29554 = f__26965__auto__.call(null);
(statearr_29554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26964__auto___29559);

return statearr_29554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto___29559,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29572 = [];
var len__25866__auto___29642 = arguments.length;
var i__25867__auto___29643 = (0);
while(true){
if((i__25867__auto___29643 < len__25866__auto___29642)){
args29572.push((arguments[i__25867__auto___29643]));

var G__29644 = (i__25867__auto___29643 + (1));
i__25867__auto___29643 = G__29644;
continue;
} else {
}
break;
}

var G__29574 = args29572.length;
switch (G__29574) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29572.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26964__auto___29646 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto___29646,out){
return (function (){
var f__26965__auto__ = (function (){var switch__26851__auto__ = ((function (c__26964__auto___29646,out){
return (function (state_29612){
var state_val_29613 = (state_29612[(1)]);
if((state_val_29613 === (7))){
var inst_29608 = (state_29612[(2)]);
var state_29612__$1 = state_29612;
var statearr_29614_29647 = state_29612__$1;
(statearr_29614_29647[(2)] = inst_29608);

(statearr_29614_29647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29613 === (1))){
var inst_29575 = (new Array(n));
var inst_29576 = inst_29575;
var inst_29577 = (0);
var state_29612__$1 = (function (){var statearr_29615 = state_29612;
(statearr_29615[(7)] = inst_29577);

(statearr_29615[(8)] = inst_29576);

return statearr_29615;
})();
var statearr_29616_29648 = state_29612__$1;
(statearr_29616_29648[(2)] = null);

(statearr_29616_29648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29613 === (4))){
var inst_29580 = (state_29612[(9)]);
var inst_29580__$1 = (state_29612[(2)]);
var inst_29581 = (inst_29580__$1 == null);
var inst_29582 = cljs.core.not.call(null,inst_29581);
var state_29612__$1 = (function (){var statearr_29617 = state_29612;
(statearr_29617[(9)] = inst_29580__$1);

return statearr_29617;
})();
if(inst_29582){
var statearr_29618_29649 = state_29612__$1;
(statearr_29618_29649[(1)] = (5));

} else {
var statearr_29619_29650 = state_29612__$1;
(statearr_29619_29650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29613 === (15))){
var inst_29602 = (state_29612[(2)]);
var state_29612__$1 = state_29612;
var statearr_29620_29651 = state_29612__$1;
(statearr_29620_29651[(2)] = inst_29602);

(statearr_29620_29651[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29613 === (13))){
var state_29612__$1 = state_29612;
var statearr_29621_29652 = state_29612__$1;
(statearr_29621_29652[(2)] = null);

(statearr_29621_29652[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29613 === (6))){
var inst_29577 = (state_29612[(7)]);
var inst_29598 = (inst_29577 > (0));
var state_29612__$1 = state_29612;
if(cljs.core.truth_(inst_29598)){
var statearr_29622_29653 = state_29612__$1;
(statearr_29622_29653[(1)] = (12));

} else {
var statearr_29623_29654 = state_29612__$1;
(statearr_29623_29654[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29613 === (3))){
var inst_29610 = (state_29612[(2)]);
var state_29612__$1 = state_29612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29612__$1,inst_29610);
} else {
if((state_val_29613 === (12))){
var inst_29576 = (state_29612[(8)]);
var inst_29600 = cljs.core.vec.call(null,inst_29576);
var state_29612__$1 = state_29612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29612__$1,(15),out,inst_29600);
} else {
if((state_val_29613 === (2))){
var state_29612__$1 = state_29612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29612__$1,(4),ch);
} else {
if((state_val_29613 === (11))){
var inst_29592 = (state_29612[(2)]);
var inst_29593 = (new Array(n));
var inst_29576 = inst_29593;
var inst_29577 = (0);
var state_29612__$1 = (function (){var statearr_29624 = state_29612;
(statearr_29624[(10)] = inst_29592);

(statearr_29624[(7)] = inst_29577);

(statearr_29624[(8)] = inst_29576);

return statearr_29624;
})();
var statearr_29625_29655 = state_29612__$1;
(statearr_29625_29655[(2)] = null);

(statearr_29625_29655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29613 === (9))){
var inst_29576 = (state_29612[(8)]);
var inst_29590 = cljs.core.vec.call(null,inst_29576);
var state_29612__$1 = state_29612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29612__$1,(11),out,inst_29590);
} else {
if((state_val_29613 === (5))){
var inst_29585 = (state_29612[(11)]);
var inst_29577 = (state_29612[(7)]);
var inst_29580 = (state_29612[(9)]);
var inst_29576 = (state_29612[(8)]);
var inst_29584 = (inst_29576[inst_29577] = inst_29580);
var inst_29585__$1 = (inst_29577 + (1));
var inst_29586 = (inst_29585__$1 < n);
var state_29612__$1 = (function (){var statearr_29626 = state_29612;
(statearr_29626[(11)] = inst_29585__$1);

(statearr_29626[(12)] = inst_29584);

return statearr_29626;
})();
if(cljs.core.truth_(inst_29586)){
var statearr_29627_29656 = state_29612__$1;
(statearr_29627_29656[(1)] = (8));

} else {
var statearr_29628_29657 = state_29612__$1;
(statearr_29628_29657[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29613 === (14))){
var inst_29605 = (state_29612[(2)]);
var inst_29606 = cljs.core.async.close_BANG_.call(null,out);
var state_29612__$1 = (function (){var statearr_29630 = state_29612;
(statearr_29630[(13)] = inst_29605);

return statearr_29630;
})();
var statearr_29631_29658 = state_29612__$1;
(statearr_29631_29658[(2)] = inst_29606);

(statearr_29631_29658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29613 === (10))){
var inst_29596 = (state_29612[(2)]);
var state_29612__$1 = state_29612;
var statearr_29632_29659 = state_29612__$1;
(statearr_29632_29659[(2)] = inst_29596);

(statearr_29632_29659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29613 === (8))){
var inst_29585 = (state_29612[(11)]);
var inst_29576 = (state_29612[(8)]);
var tmp29629 = inst_29576;
var inst_29576__$1 = tmp29629;
var inst_29577 = inst_29585;
var state_29612__$1 = (function (){var statearr_29633 = state_29612;
(statearr_29633[(7)] = inst_29577);

(statearr_29633[(8)] = inst_29576__$1);

return statearr_29633;
})();
var statearr_29634_29660 = state_29612__$1;
(statearr_29634_29660[(2)] = null);

(statearr_29634_29660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__26964__auto___29646,out))
;
return ((function (switch__26851__auto__,c__26964__auto___29646,out){
return (function() {
var cljs$core$async$state_machine__26852__auto__ = null;
var cljs$core$async$state_machine__26852__auto____0 = (function (){
var statearr_29638 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29638[(0)] = cljs$core$async$state_machine__26852__auto__);

(statearr_29638[(1)] = (1));

return statearr_29638;
});
var cljs$core$async$state_machine__26852__auto____1 = (function (state_29612){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_29612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e29639){if((e29639 instanceof Object)){
var ex__26855__auto__ = e29639;
var statearr_29640_29661 = state_29612;
(statearr_29640_29661[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29662 = state_29612;
state_29612 = G__29662;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$state_machine__26852__auto__ = function(state_29612){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26852__auto____1.call(this,state_29612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26852__auto____0;
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26852__auto____1;
return cljs$core$async$state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26964__auto___29646,out))
})();
var state__26966__auto__ = (function (){var statearr_29641 = f__26965__auto__.call(null);
(statearr_29641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26964__auto___29646);

return statearr_29641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto___29646,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args29663 = [];
var len__25866__auto___29737 = arguments.length;
var i__25867__auto___29738 = (0);
while(true){
if((i__25867__auto___29738 < len__25866__auto___29737)){
args29663.push((arguments[i__25867__auto___29738]));

var G__29739 = (i__25867__auto___29738 + (1));
i__25867__auto___29738 = G__29739;
continue;
} else {
}
break;
}

var G__29665 = args29663.length;
switch (G__29665) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29663.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26964__auto___29741 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto___29741,out){
return (function (){
var f__26965__auto__ = (function (){var switch__26851__auto__ = ((function (c__26964__auto___29741,out){
return (function (state_29707){
var state_val_29708 = (state_29707[(1)]);
if((state_val_29708 === (7))){
var inst_29703 = (state_29707[(2)]);
var state_29707__$1 = state_29707;
var statearr_29709_29742 = state_29707__$1;
(statearr_29709_29742[(2)] = inst_29703);

(statearr_29709_29742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29708 === (1))){
var inst_29666 = [];
var inst_29667 = inst_29666;
var inst_29668 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29707__$1 = (function (){var statearr_29710 = state_29707;
(statearr_29710[(7)] = inst_29667);

(statearr_29710[(8)] = inst_29668);

return statearr_29710;
})();
var statearr_29711_29743 = state_29707__$1;
(statearr_29711_29743[(2)] = null);

(statearr_29711_29743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29708 === (4))){
var inst_29671 = (state_29707[(9)]);
var inst_29671__$1 = (state_29707[(2)]);
var inst_29672 = (inst_29671__$1 == null);
var inst_29673 = cljs.core.not.call(null,inst_29672);
var state_29707__$1 = (function (){var statearr_29712 = state_29707;
(statearr_29712[(9)] = inst_29671__$1);

return statearr_29712;
})();
if(inst_29673){
var statearr_29713_29744 = state_29707__$1;
(statearr_29713_29744[(1)] = (5));

} else {
var statearr_29714_29745 = state_29707__$1;
(statearr_29714_29745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29708 === (15))){
var inst_29697 = (state_29707[(2)]);
var state_29707__$1 = state_29707;
var statearr_29715_29746 = state_29707__$1;
(statearr_29715_29746[(2)] = inst_29697);

(statearr_29715_29746[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29708 === (13))){
var state_29707__$1 = state_29707;
var statearr_29716_29747 = state_29707__$1;
(statearr_29716_29747[(2)] = null);

(statearr_29716_29747[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29708 === (6))){
var inst_29667 = (state_29707[(7)]);
var inst_29692 = inst_29667.length;
var inst_29693 = (inst_29692 > (0));
var state_29707__$1 = state_29707;
if(cljs.core.truth_(inst_29693)){
var statearr_29717_29748 = state_29707__$1;
(statearr_29717_29748[(1)] = (12));

} else {
var statearr_29718_29749 = state_29707__$1;
(statearr_29718_29749[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29708 === (3))){
var inst_29705 = (state_29707[(2)]);
var state_29707__$1 = state_29707;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29707__$1,inst_29705);
} else {
if((state_val_29708 === (12))){
var inst_29667 = (state_29707[(7)]);
var inst_29695 = cljs.core.vec.call(null,inst_29667);
var state_29707__$1 = state_29707;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29707__$1,(15),out,inst_29695);
} else {
if((state_val_29708 === (2))){
var state_29707__$1 = state_29707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29707__$1,(4),ch);
} else {
if((state_val_29708 === (11))){
var inst_29675 = (state_29707[(10)]);
var inst_29671 = (state_29707[(9)]);
var inst_29685 = (state_29707[(2)]);
var inst_29686 = [];
var inst_29687 = inst_29686.push(inst_29671);
var inst_29667 = inst_29686;
var inst_29668 = inst_29675;
var state_29707__$1 = (function (){var statearr_29719 = state_29707;
(statearr_29719[(11)] = inst_29687);

(statearr_29719[(12)] = inst_29685);

(statearr_29719[(7)] = inst_29667);

(statearr_29719[(8)] = inst_29668);

return statearr_29719;
})();
var statearr_29720_29750 = state_29707__$1;
(statearr_29720_29750[(2)] = null);

(statearr_29720_29750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29708 === (9))){
var inst_29667 = (state_29707[(7)]);
var inst_29683 = cljs.core.vec.call(null,inst_29667);
var state_29707__$1 = state_29707;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29707__$1,(11),out,inst_29683);
} else {
if((state_val_29708 === (5))){
var inst_29675 = (state_29707[(10)]);
var inst_29668 = (state_29707[(8)]);
var inst_29671 = (state_29707[(9)]);
var inst_29675__$1 = f.call(null,inst_29671);
var inst_29676 = cljs.core._EQ_.call(null,inst_29675__$1,inst_29668);
var inst_29677 = cljs.core.keyword_identical_QMARK_.call(null,inst_29668,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29678 = (inst_29676) || (inst_29677);
var state_29707__$1 = (function (){var statearr_29721 = state_29707;
(statearr_29721[(10)] = inst_29675__$1);

return statearr_29721;
})();
if(cljs.core.truth_(inst_29678)){
var statearr_29722_29751 = state_29707__$1;
(statearr_29722_29751[(1)] = (8));

} else {
var statearr_29723_29752 = state_29707__$1;
(statearr_29723_29752[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29708 === (14))){
var inst_29700 = (state_29707[(2)]);
var inst_29701 = cljs.core.async.close_BANG_.call(null,out);
var state_29707__$1 = (function (){var statearr_29725 = state_29707;
(statearr_29725[(13)] = inst_29700);

return statearr_29725;
})();
var statearr_29726_29753 = state_29707__$1;
(statearr_29726_29753[(2)] = inst_29701);

(statearr_29726_29753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29708 === (10))){
var inst_29690 = (state_29707[(2)]);
var state_29707__$1 = state_29707;
var statearr_29727_29754 = state_29707__$1;
(statearr_29727_29754[(2)] = inst_29690);

(statearr_29727_29754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29708 === (8))){
var inst_29675 = (state_29707[(10)]);
var inst_29667 = (state_29707[(7)]);
var inst_29671 = (state_29707[(9)]);
var inst_29680 = inst_29667.push(inst_29671);
var tmp29724 = inst_29667;
var inst_29667__$1 = tmp29724;
var inst_29668 = inst_29675;
var state_29707__$1 = (function (){var statearr_29728 = state_29707;
(statearr_29728[(14)] = inst_29680);

(statearr_29728[(7)] = inst_29667__$1);

(statearr_29728[(8)] = inst_29668);

return statearr_29728;
})();
var statearr_29729_29755 = state_29707__$1;
(statearr_29729_29755[(2)] = null);

(statearr_29729_29755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__26964__auto___29741,out))
;
return ((function (switch__26851__auto__,c__26964__auto___29741,out){
return (function() {
var cljs$core$async$state_machine__26852__auto__ = null;
var cljs$core$async$state_machine__26852__auto____0 = (function (){
var statearr_29733 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29733[(0)] = cljs$core$async$state_machine__26852__auto__);

(statearr_29733[(1)] = (1));

return statearr_29733;
});
var cljs$core$async$state_machine__26852__auto____1 = (function (state_29707){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_29707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e29734){if((e29734 instanceof Object)){
var ex__26855__auto__ = e29734;
var statearr_29735_29756 = state_29707;
(statearr_29735_29756[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29757 = state_29707;
state_29707 = G__29757;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$state_machine__26852__auto__ = function(state_29707){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26852__auto____1.call(this,state_29707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26852__auto____0;
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26852__auto____1;
return cljs$core$async$state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26964__auto___29741,out))
})();
var state__26966__auto__ = (function (){var statearr_29736 = f__26965__auto__.call(null);
(statearr_29736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26964__auto___29741);

return statearr_29736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto___29741,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1481924970315