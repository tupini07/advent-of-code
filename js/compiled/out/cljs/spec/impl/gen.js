// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__25397__auto__,writer__25398__auto__,opt__25399__auto__){
return cljs.core._write.call(null,writer__25398__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__25873__auto__ = [];
var len__25866__auto___31047 = arguments.length;
var i__25867__auto___31048 = (0);
while(true){
if((i__25867__auto___31048 < len__25866__auto___31047)){
args__25873__auto__.push((arguments[i__25867__auto___31048]));

var G__31049 = (i__25867__auto___31048 + (1));
i__25867__auto___31048 = G__31049;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq31046){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31046));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__25873__auto__ = [];
var len__25866__auto___31051 = arguments.length;
var i__25867__auto___31052 = (0);
while(true){
if((i__25867__auto___31052 < len__25866__auto___31051)){
args__25873__auto__.push((arguments[i__25867__auto___31052]));

var G__31053 = (i__25867__auto___31052 + (1));
i__25867__auto___31052 = G__31053;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq31050){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31050));
});

var g_QMARK__31054 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_31055 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__31054){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__31054))
,null));
var mkg_31056 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__31054,g_31055){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__31054,g_31055))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__31054,g_31055,mkg_31056){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__31054).call(null,x);
});})(g_QMARK__31054,g_31055,mkg_31056))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__31054,g_31055,mkg_31056){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_31056).call(null,gfn);
});})(g_QMARK__31054,g_31055,mkg_31056))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__31054,g_31055,mkg_31056){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_31055).call(null,generator);
});})(g_QMARK__31054,g_31055,mkg_31056))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__31018__auto___31075 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__31018__auto___31075){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__25873__auto__ = [];
var len__25866__auto___31076 = arguments.length;
var i__25867__auto___31077 = (0);
while(true){
if((i__25867__auto___31077 < len__25866__auto___31076)){
args__25873__auto__.push((arguments[i__25867__auto___31077]));

var G__31078 = (i__25867__auto___31077 + (1));
i__25867__auto___31077 = G__31078;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});})(g__31018__auto___31075))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31018__auto___31075){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31018__auto___31075),args);
});})(g__31018__auto___31075))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__31018__auto___31075){
return (function (seq31057){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31057));
});})(g__31018__auto___31075))
;


var g__31018__auto___31079 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__31018__auto___31079){
return (function cljs$spec$impl$gen$list(var_args){
var args__25873__auto__ = [];
var len__25866__auto___31080 = arguments.length;
var i__25867__auto___31081 = (0);
while(true){
if((i__25867__auto___31081 < len__25866__auto___31080)){
args__25873__auto__.push((arguments[i__25867__auto___31081]));

var G__31082 = (i__25867__auto___31081 + (1));
i__25867__auto___31081 = G__31082;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});})(g__31018__auto___31079))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31018__auto___31079){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31018__auto___31079),args);
});})(g__31018__auto___31079))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__31018__auto___31079){
return (function (seq31058){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31058));
});})(g__31018__auto___31079))
;


var g__31018__auto___31083 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__31018__auto___31083){
return (function cljs$spec$impl$gen$map(var_args){
var args__25873__auto__ = [];
var len__25866__auto___31084 = arguments.length;
var i__25867__auto___31085 = (0);
while(true){
if((i__25867__auto___31085 < len__25866__auto___31084)){
args__25873__auto__.push((arguments[i__25867__auto___31085]));

var G__31086 = (i__25867__auto___31085 + (1));
i__25867__auto___31085 = G__31086;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});})(g__31018__auto___31083))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31018__auto___31083){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31018__auto___31083),args);
});})(g__31018__auto___31083))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__31018__auto___31083){
return (function (seq31059){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31059));
});})(g__31018__auto___31083))
;


var g__31018__auto___31087 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__31018__auto___31087){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__25873__auto__ = [];
var len__25866__auto___31088 = arguments.length;
var i__25867__auto___31089 = (0);
while(true){
if((i__25867__auto___31089 < len__25866__auto___31088)){
args__25873__auto__.push((arguments[i__25867__auto___31089]));

var G__31090 = (i__25867__auto___31089 + (1));
i__25867__auto___31089 = G__31090;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});})(g__31018__auto___31087))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31018__auto___31087){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31018__auto___31087),args);
});})(g__31018__auto___31087))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__31018__auto___31087){
return (function (seq31060){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31060));
});})(g__31018__auto___31087))
;


var g__31018__auto___31091 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__31018__auto___31091){
return (function cljs$spec$impl$gen$set(var_args){
var args__25873__auto__ = [];
var len__25866__auto___31092 = arguments.length;
var i__25867__auto___31093 = (0);
while(true){
if((i__25867__auto___31093 < len__25866__auto___31092)){
args__25873__auto__.push((arguments[i__25867__auto___31093]));

var G__31094 = (i__25867__auto___31093 + (1));
i__25867__auto___31093 = G__31094;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});})(g__31018__auto___31091))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31018__auto___31091){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31018__auto___31091),args);
});})(g__31018__auto___31091))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__31018__auto___31091){
return (function (seq31061){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31061));
});})(g__31018__auto___31091))
;


var g__31018__auto___31095 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__31018__auto___31095){
return (function cljs$spec$impl$gen$vector(var_args){
var args__25873__auto__ = [];
var len__25866__auto___31096 = arguments.length;
var i__25867__auto___31097 = (0);
while(true){
if((i__25867__auto___31097 < len__25866__auto___31096)){
args__25873__auto__.push((arguments[i__25867__auto___31097]));

var G__31098 = (i__25867__auto___31097 + (1));
i__25867__auto___31097 = G__31098;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});})(g__31018__auto___31095))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31018__auto___31095){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31018__auto___31095),args);
});})(g__31018__auto___31095))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__31018__auto___31095){
return (function (seq31062){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31062));
});})(g__31018__auto___31095))
;


var g__31018__auto___31099 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__31018__auto___31099){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__25873__auto__ = [];
var len__25866__auto___31100 = arguments.length;
var i__25867__auto___31101 = (0);
while(true){
if((i__25867__auto___31101 < len__25866__auto___31100)){
args__25873__auto__.push((arguments[i__25867__auto___31101]));

var G__31102 = (i__25867__auto___31101 + (1));
i__25867__auto___31101 = G__31102;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});})(g__31018__auto___31099))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31018__auto___31099){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31018__auto___31099),args);
});})(g__31018__auto___31099))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__31018__auto___31099){
return (function (seq31063){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31063));
});})(g__31018__auto___31099))
;


var g__31018__auto___31103 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__31018__auto___31103){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__25873__auto__ = [];
var len__25866__auto___31104 = arguments.length;
var i__25867__auto___31105 = (0);
while(true){
if((i__25867__auto___31105 < len__25866__auto___31104)){
args__25873__auto__.push((arguments[i__25867__auto___31105]));

var G__31106 = (i__25867__auto___31105 + (1));
i__25867__auto___31105 = G__31106;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});})(g__31018__auto___31103))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31018__auto___31103){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31018__auto___31103),args);
});})(g__31018__auto___31103))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__31018__auto___31103){
return (function (seq31064){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31064));
});})(g__31018__auto___31103))
;


var g__31018__auto___31107 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__31018__auto___31107){
return (function cljs$spec$impl$gen$elements(var_args){
var args__25873__auto__ = [];
var len__25866__auto___31108 = arguments.length;
var i__25867__auto___31109 = (0);
while(true){
if((i__25867__auto___31109 < len__25866__auto___31108)){
args__25873__auto__.push((arguments[i__25867__auto___31109]));

var G__31110 = (i__25867__auto___31109 + (1));
i__25867__auto___31109 = G__31110;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});})(g__31018__auto___31107))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31018__auto___31107){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31018__auto___31107),args);
});})(g__31018__auto___31107))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__31018__auto___31107){
return (function (seq31065){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31065));
});})(g__31018__auto___31107))
;


var g__31018__auto___31111 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__31018__auto___31111){
return (function cljs$spec$impl$gen$bind(var_args){
var args__25873__auto__ = [];
var len__25866__auto___31112 = arguments.length;
var i__25867__auto___31113 = (0);
while(true){
if((i__25867__auto___31113 < len__25866__auto___31112)){
args__25873__auto__.push((arguments[i__25867__auto___31113]));

var G__31114 = (i__25867__auto___31113 + (1));
i__25867__auto___31113 = G__31114;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});})(g__31018__auto___31111))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31018__auto___31111){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31018__auto___31111),args);
});})(g__31018__auto___31111))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__31018__auto___31111){
return (function (seq31066){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31066));
});})(g__31018__auto___31111))
;


var g__31018__auto___31115 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__31018__auto___31115){
return (function cljs$spec$impl$gen$choose(var_args){
var args__25873__auto__ = [];
var len__25866__auto___31116 = arguments.length;
var i__25867__auto___31117 = (0);
while(true){
if((i__25867__auto___31117 < len__25866__auto___31116)){
args__25873__auto__.push((arguments[i__25867__auto___31117]));

var G__31118 = (i__25867__auto___31117 + (1));
i__25867__auto___31117 = G__31118;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});})(g__31018__auto___31115))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31018__auto___31115){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31018__auto___31115),args);
});})(g__31018__auto___31115))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__31018__auto___31115){
return (function (seq31067){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31067));
});})(g__31018__auto___31115))
;


var g__31018__auto___31119 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__31018__auto___31119){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__25873__auto__ = [];
var len__25866__auto___31120 = arguments.length;
var i__25867__auto___31121 = (0);
while(true){
if((i__25867__auto___31121 < len__25866__auto___31120)){
args__25873__auto__.push((arguments[i__25867__auto___31121]));

var G__31122 = (i__25867__auto___31121 + (1));
i__25867__auto___31121 = G__31122;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});})(g__31018__auto___31119))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31018__auto___31119){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31018__auto___31119),args);
});})(g__31018__auto___31119))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__31018__auto___31119){
return (function (seq31068){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31068));
});})(g__31018__auto___31119))
;


var g__31018__auto___31123 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__31018__auto___31123){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__25873__auto__ = [];
var len__25866__auto___31124 = arguments.length;
var i__25867__auto___31125 = (0);
while(true){
if((i__25867__auto___31125 < len__25866__auto___31124)){
args__25873__auto__.push((arguments[i__25867__auto___31125]));

var G__31126 = (i__25867__auto___31125 + (1));
i__25867__auto___31125 = G__31126;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});})(g__31018__auto___31123))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31018__auto___31123){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31018__auto___31123),args);
});})(g__31018__auto___31123))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__31018__auto___31123){
return (function (seq31069){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31069));
});})(g__31018__auto___31123))
;


var g__31018__auto___31127 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__31018__auto___31127){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__25873__auto__ = [];
var len__25866__auto___31128 = arguments.length;
var i__25867__auto___31129 = (0);
while(true){
if((i__25867__auto___31129 < len__25866__auto___31128)){
args__25873__auto__.push((arguments[i__25867__auto___31129]));

var G__31130 = (i__25867__auto___31129 + (1));
i__25867__auto___31129 = G__31130;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});})(g__31018__auto___31127))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31018__auto___31127){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31018__auto___31127),args);
});})(g__31018__auto___31127))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__31018__auto___31127){
return (function (seq31070){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31070));
});})(g__31018__auto___31127))
;


var g__31018__auto___31131 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__31018__auto___31131){
return (function cljs$spec$impl$gen$sample(var_args){
var args__25873__auto__ = [];
var len__25866__auto___31132 = arguments.length;
var i__25867__auto___31133 = (0);
while(true){
if((i__25867__auto___31133 < len__25866__auto___31132)){
args__25873__auto__.push((arguments[i__25867__auto___31133]));

var G__31134 = (i__25867__auto___31133 + (1));
i__25867__auto___31133 = G__31134;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});})(g__31018__auto___31131))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31018__auto___31131){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31018__auto___31131),args);
});})(g__31018__auto___31131))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__31018__auto___31131){
return (function (seq31071){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31071));
});})(g__31018__auto___31131))
;


var g__31018__auto___31135 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__31018__auto___31135){
return (function cljs$spec$impl$gen$return(var_args){
var args__25873__auto__ = [];
var len__25866__auto___31136 = arguments.length;
var i__25867__auto___31137 = (0);
while(true){
if((i__25867__auto___31137 < len__25866__auto___31136)){
args__25873__auto__.push((arguments[i__25867__auto___31137]));

var G__31138 = (i__25867__auto___31137 + (1));
i__25867__auto___31137 = G__31138;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});})(g__31018__auto___31135))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31018__auto___31135){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31018__auto___31135),args);
});})(g__31018__auto___31135))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__31018__auto___31135){
return (function (seq31072){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31072));
});})(g__31018__auto___31135))
;


var g__31018__auto___31139 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__31018__auto___31139){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__25873__auto__ = [];
var len__25866__auto___31140 = arguments.length;
var i__25867__auto___31141 = (0);
while(true){
if((i__25867__auto___31141 < len__25866__auto___31140)){
args__25873__auto__.push((arguments[i__25867__auto___31141]));

var G__31142 = (i__25867__auto___31141 + (1));
i__25867__auto___31141 = G__31142;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});})(g__31018__auto___31139))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31018__auto___31139){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31018__auto___31139),args);
});})(g__31018__auto___31139))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__31018__auto___31139){
return (function (seq31073){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31073));
});})(g__31018__auto___31139))
;


var g__31018__auto___31143 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__31018__auto___31143){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__25873__auto__ = [];
var len__25866__auto___31144 = arguments.length;
var i__25867__auto___31145 = (0);
while(true){
if((i__25867__auto___31145 < len__25866__auto___31144)){
args__25873__auto__.push((arguments[i__25867__auto___31145]));

var G__31146 = (i__25867__auto___31145 + (1));
i__25867__auto___31145 = G__31146;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});})(g__31018__auto___31143))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31018__auto___31143){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31018__auto___31143),args);
});})(g__31018__auto___31143))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__31018__auto___31143){
return (function (seq31074){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31074));
});})(g__31018__auto___31143))
;

var g__31031__auto___31168 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__31031__auto___31168){
return (function cljs$spec$impl$gen$any(var_args){
var args__25873__auto__ = [];
var len__25866__auto___31169 = arguments.length;
var i__25867__auto___31170 = (0);
while(true){
if((i__25867__auto___31170 < len__25866__auto___31169)){
args__25873__auto__.push((arguments[i__25867__auto___31170]));

var G__31171 = (i__25867__auto___31170 + (1));
i__25867__auto___31170 = G__31171;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});})(g__31031__auto___31168))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31031__auto___31168){
return (function (args){
return cljs.core.deref.call(null,g__31031__auto___31168);
});})(g__31031__auto___31168))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__31031__auto___31168){
return (function (seq31147){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31147));
});})(g__31031__auto___31168))
;


var g__31031__auto___31172 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__31031__auto___31172){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__25873__auto__ = [];
var len__25866__auto___31173 = arguments.length;
var i__25867__auto___31174 = (0);
while(true){
if((i__25867__auto___31174 < len__25866__auto___31173)){
args__25873__auto__.push((arguments[i__25867__auto___31174]));

var G__31175 = (i__25867__auto___31174 + (1));
i__25867__auto___31174 = G__31175;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});})(g__31031__auto___31172))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31031__auto___31172){
return (function (args){
return cljs.core.deref.call(null,g__31031__auto___31172);
});})(g__31031__auto___31172))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__31031__auto___31172){
return (function (seq31148){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31148));
});})(g__31031__auto___31172))
;


var g__31031__auto___31176 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__31031__auto___31176){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__25873__auto__ = [];
var len__25866__auto___31177 = arguments.length;
var i__25867__auto___31178 = (0);
while(true){
if((i__25867__auto___31178 < len__25866__auto___31177)){
args__25873__auto__.push((arguments[i__25867__auto___31178]));

var G__31179 = (i__25867__auto___31178 + (1));
i__25867__auto___31178 = G__31179;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});})(g__31031__auto___31176))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31031__auto___31176){
return (function (args){
return cljs.core.deref.call(null,g__31031__auto___31176);
});})(g__31031__auto___31176))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__31031__auto___31176){
return (function (seq31149){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31149));
});})(g__31031__auto___31176))
;


var g__31031__auto___31180 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__31031__auto___31180){
return (function cljs$spec$impl$gen$char(var_args){
var args__25873__auto__ = [];
var len__25866__auto___31181 = arguments.length;
var i__25867__auto___31182 = (0);
while(true){
if((i__25867__auto___31182 < len__25866__auto___31181)){
args__25873__auto__.push((arguments[i__25867__auto___31182]));

var G__31183 = (i__25867__auto___31182 + (1));
i__25867__auto___31182 = G__31183;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});})(g__31031__auto___31180))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31031__auto___31180){
return (function (args){
return cljs.core.deref.call(null,g__31031__auto___31180);
});})(g__31031__auto___31180))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__31031__auto___31180){
return (function (seq31150){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31150));
});})(g__31031__auto___31180))
;


var g__31031__auto___31184 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__31031__auto___31184){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__25873__auto__ = [];
var len__25866__auto___31185 = arguments.length;
var i__25867__auto___31186 = (0);
while(true){
if((i__25867__auto___31186 < len__25866__auto___31185)){
args__25873__auto__.push((arguments[i__25867__auto___31186]));

var G__31187 = (i__25867__auto___31186 + (1));
i__25867__auto___31186 = G__31187;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});})(g__31031__auto___31184))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31031__auto___31184){
return (function (args){
return cljs.core.deref.call(null,g__31031__auto___31184);
});})(g__31031__auto___31184))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__31031__auto___31184){
return (function (seq31151){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31151));
});})(g__31031__auto___31184))
;


var g__31031__auto___31188 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__31031__auto___31188){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__25873__auto__ = [];
var len__25866__auto___31189 = arguments.length;
var i__25867__auto___31190 = (0);
while(true){
if((i__25867__auto___31190 < len__25866__auto___31189)){
args__25873__auto__.push((arguments[i__25867__auto___31190]));

var G__31191 = (i__25867__auto___31190 + (1));
i__25867__auto___31190 = G__31191;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});})(g__31031__auto___31188))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31031__auto___31188){
return (function (args){
return cljs.core.deref.call(null,g__31031__auto___31188);
});})(g__31031__auto___31188))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__31031__auto___31188){
return (function (seq31152){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31152));
});})(g__31031__auto___31188))
;


var g__31031__auto___31192 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__31031__auto___31192){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__25873__auto__ = [];
var len__25866__auto___31193 = arguments.length;
var i__25867__auto___31194 = (0);
while(true){
if((i__25867__auto___31194 < len__25866__auto___31193)){
args__25873__auto__.push((arguments[i__25867__auto___31194]));

var G__31195 = (i__25867__auto___31194 + (1));
i__25867__auto___31194 = G__31195;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});})(g__31031__auto___31192))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31031__auto___31192){
return (function (args){
return cljs.core.deref.call(null,g__31031__auto___31192);
});})(g__31031__auto___31192))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__31031__auto___31192){
return (function (seq31153){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31153));
});})(g__31031__auto___31192))
;


var g__31031__auto___31196 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__31031__auto___31196){
return (function cljs$spec$impl$gen$double(var_args){
var args__25873__auto__ = [];
var len__25866__auto___31197 = arguments.length;
var i__25867__auto___31198 = (0);
while(true){
if((i__25867__auto___31198 < len__25866__auto___31197)){
args__25873__auto__.push((arguments[i__25867__auto___31198]));

var G__31199 = (i__25867__auto___31198 + (1));
i__25867__auto___31198 = G__31199;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});})(g__31031__auto___31196))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31031__auto___31196){
return (function (args){
return cljs.core.deref.call(null,g__31031__auto___31196);
});})(g__31031__auto___31196))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__31031__auto___31196){
return (function (seq31154){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31154));
});})(g__31031__auto___31196))
;


var g__31031__auto___31200 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__31031__auto___31200){
return (function cljs$spec$impl$gen$int(var_args){
var args__25873__auto__ = [];
var len__25866__auto___31201 = arguments.length;
var i__25867__auto___31202 = (0);
while(true){
if((i__25867__auto___31202 < len__25866__auto___31201)){
args__25873__auto__.push((arguments[i__25867__auto___31202]));

var G__31203 = (i__25867__auto___31202 + (1));
i__25867__auto___31202 = G__31203;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});})(g__31031__auto___31200))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31031__auto___31200){
return (function (args){
return cljs.core.deref.call(null,g__31031__auto___31200);
});})(g__31031__auto___31200))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__31031__auto___31200){
return (function (seq31155){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31155));
});})(g__31031__auto___31200))
;


var g__31031__auto___31204 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__31031__auto___31204){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__25873__auto__ = [];
var len__25866__auto___31205 = arguments.length;
var i__25867__auto___31206 = (0);
while(true){
if((i__25867__auto___31206 < len__25866__auto___31205)){
args__25873__auto__.push((arguments[i__25867__auto___31206]));

var G__31207 = (i__25867__auto___31206 + (1));
i__25867__auto___31206 = G__31207;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});})(g__31031__auto___31204))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31031__auto___31204){
return (function (args){
return cljs.core.deref.call(null,g__31031__auto___31204);
});})(g__31031__auto___31204))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__31031__auto___31204){
return (function (seq31156){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31156));
});})(g__31031__auto___31204))
;


var g__31031__auto___31208 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__31031__auto___31208){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__25873__auto__ = [];
var len__25866__auto___31209 = arguments.length;
var i__25867__auto___31210 = (0);
while(true){
if((i__25867__auto___31210 < len__25866__auto___31209)){
args__25873__auto__.push((arguments[i__25867__auto___31210]));

var G__31211 = (i__25867__auto___31210 + (1));
i__25867__auto___31210 = G__31211;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});})(g__31031__auto___31208))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31031__auto___31208){
return (function (args){
return cljs.core.deref.call(null,g__31031__auto___31208);
});})(g__31031__auto___31208))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__31031__auto___31208){
return (function (seq31157){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31157));
});})(g__31031__auto___31208))
;


var g__31031__auto___31212 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__31031__auto___31212){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__25873__auto__ = [];
var len__25866__auto___31213 = arguments.length;
var i__25867__auto___31214 = (0);
while(true){
if((i__25867__auto___31214 < len__25866__auto___31213)){
args__25873__auto__.push((arguments[i__25867__auto___31214]));

var G__31215 = (i__25867__auto___31214 + (1));
i__25867__auto___31214 = G__31215;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});})(g__31031__auto___31212))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31031__auto___31212){
return (function (args){
return cljs.core.deref.call(null,g__31031__auto___31212);
});})(g__31031__auto___31212))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__31031__auto___31212){
return (function (seq31158){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31158));
});})(g__31031__auto___31212))
;


var g__31031__auto___31216 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__31031__auto___31216){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__25873__auto__ = [];
var len__25866__auto___31217 = arguments.length;
var i__25867__auto___31218 = (0);
while(true){
if((i__25867__auto___31218 < len__25866__auto___31217)){
args__25873__auto__.push((arguments[i__25867__auto___31218]));

var G__31219 = (i__25867__auto___31218 + (1));
i__25867__auto___31218 = G__31219;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});})(g__31031__auto___31216))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31031__auto___31216){
return (function (args){
return cljs.core.deref.call(null,g__31031__auto___31216);
});})(g__31031__auto___31216))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__31031__auto___31216){
return (function (seq31159){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31159));
});})(g__31031__auto___31216))
;


var g__31031__auto___31220 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__31031__auto___31220){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__25873__auto__ = [];
var len__25866__auto___31221 = arguments.length;
var i__25867__auto___31222 = (0);
while(true){
if((i__25867__auto___31222 < len__25866__auto___31221)){
args__25873__auto__.push((arguments[i__25867__auto___31222]));

var G__31223 = (i__25867__auto___31222 + (1));
i__25867__auto___31222 = G__31223;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});})(g__31031__auto___31220))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31031__auto___31220){
return (function (args){
return cljs.core.deref.call(null,g__31031__auto___31220);
});})(g__31031__auto___31220))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__31031__auto___31220){
return (function (seq31160){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31160));
});})(g__31031__auto___31220))
;


var g__31031__auto___31224 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__31031__auto___31224){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__25873__auto__ = [];
var len__25866__auto___31225 = arguments.length;
var i__25867__auto___31226 = (0);
while(true){
if((i__25867__auto___31226 < len__25866__auto___31225)){
args__25873__auto__.push((arguments[i__25867__auto___31226]));

var G__31227 = (i__25867__auto___31226 + (1));
i__25867__auto___31226 = G__31227;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});})(g__31031__auto___31224))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31031__auto___31224){
return (function (args){
return cljs.core.deref.call(null,g__31031__auto___31224);
});})(g__31031__auto___31224))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__31031__auto___31224){
return (function (seq31161){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31161));
});})(g__31031__auto___31224))
;


var g__31031__auto___31228 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__31031__auto___31228){
return (function cljs$spec$impl$gen$string(var_args){
var args__25873__auto__ = [];
var len__25866__auto___31229 = arguments.length;
var i__25867__auto___31230 = (0);
while(true){
if((i__25867__auto___31230 < len__25866__auto___31229)){
args__25873__auto__.push((arguments[i__25867__auto___31230]));

var G__31231 = (i__25867__auto___31230 + (1));
i__25867__auto___31230 = G__31231;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});})(g__31031__auto___31228))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31031__auto___31228){
return (function (args){
return cljs.core.deref.call(null,g__31031__auto___31228);
});})(g__31031__auto___31228))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__31031__auto___31228){
return (function (seq31162){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31162));
});})(g__31031__auto___31228))
;


var g__31031__auto___31232 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__31031__auto___31232){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__25873__auto__ = [];
var len__25866__auto___31233 = arguments.length;
var i__25867__auto___31234 = (0);
while(true){
if((i__25867__auto___31234 < len__25866__auto___31233)){
args__25873__auto__.push((arguments[i__25867__auto___31234]));

var G__31235 = (i__25867__auto___31234 + (1));
i__25867__auto___31234 = G__31235;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});})(g__31031__auto___31232))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31031__auto___31232){
return (function (args){
return cljs.core.deref.call(null,g__31031__auto___31232);
});})(g__31031__auto___31232))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__31031__auto___31232){
return (function (seq31163){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31163));
});})(g__31031__auto___31232))
;


var g__31031__auto___31236 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__31031__auto___31236){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__25873__auto__ = [];
var len__25866__auto___31237 = arguments.length;
var i__25867__auto___31238 = (0);
while(true){
if((i__25867__auto___31238 < len__25866__auto___31237)){
args__25873__auto__.push((arguments[i__25867__auto___31238]));

var G__31239 = (i__25867__auto___31238 + (1));
i__25867__auto___31238 = G__31239;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});})(g__31031__auto___31236))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31031__auto___31236){
return (function (args){
return cljs.core.deref.call(null,g__31031__auto___31236);
});})(g__31031__auto___31236))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__31031__auto___31236){
return (function (seq31164){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31164));
});})(g__31031__auto___31236))
;


var g__31031__auto___31240 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__31031__auto___31240){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__25873__auto__ = [];
var len__25866__auto___31241 = arguments.length;
var i__25867__auto___31242 = (0);
while(true){
if((i__25867__auto___31242 < len__25866__auto___31241)){
args__25873__auto__.push((arguments[i__25867__auto___31242]));

var G__31243 = (i__25867__auto___31242 + (1));
i__25867__auto___31242 = G__31243;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});})(g__31031__auto___31240))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31031__auto___31240){
return (function (args){
return cljs.core.deref.call(null,g__31031__auto___31240);
});})(g__31031__auto___31240))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__31031__auto___31240){
return (function (seq31165){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31165));
});})(g__31031__auto___31240))
;


var g__31031__auto___31244 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__31031__auto___31244){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__25873__auto__ = [];
var len__25866__auto___31245 = arguments.length;
var i__25867__auto___31246 = (0);
while(true){
if((i__25867__auto___31246 < len__25866__auto___31245)){
args__25873__auto__.push((arguments[i__25867__auto___31246]));

var G__31247 = (i__25867__auto___31246 + (1));
i__25867__auto___31246 = G__31247;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});})(g__31031__auto___31244))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31031__auto___31244){
return (function (args){
return cljs.core.deref.call(null,g__31031__auto___31244);
});})(g__31031__auto___31244))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__31031__auto___31244){
return (function (seq31166){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31166));
});})(g__31031__auto___31244))
;


var g__31031__auto___31248 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__31031__auto___31248){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__25873__auto__ = [];
var len__25866__auto___31249 = arguments.length;
var i__25867__auto___31250 = (0);
while(true){
if((i__25867__auto___31250 < len__25866__auto___31249)){
args__25873__auto__.push((arguments[i__25867__auto___31250]));

var G__31251 = (i__25867__auto___31250 + (1));
i__25867__auto___31250 = G__31251;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});})(g__31031__auto___31248))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31031__auto___31248){
return (function (args){
return cljs.core.deref.call(null,g__31031__auto___31248);
});})(g__31031__auto___31248))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__31031__auto___31248){
return (function (seq31167){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31167));
});})(g__31031__auto___31248))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__25873__auto__ = [];
var len__25866__auto___31254 = arguments.length;
var i__25867__auto___31255 = (0);
while(true){
if((i__25867__auto___31255 < len__25866__auto___31254)){
args__25873__auto__.push((arguments[i__25867__auto___31255]));

var G__31256 = (i__25867__auto___31255 + (1));
i__25867__auto___31255 = G__31256;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__31252_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__31252_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq31253){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31253));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__31257_SHARP_){
return (new Date(p1__31257_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1481924973905