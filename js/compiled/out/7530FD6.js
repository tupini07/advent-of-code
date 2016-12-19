goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('advent_of_code_2016.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__40474__delegate = function (x){
if(cljs.core.truth_(advent_of_code_2016.core.on_js_reload)){
return cljs.core.apply.call(null,advent_of_code_2016.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'advent-of-code-2016.core/on-js-reload' is missing");
}
};
var G__40474 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__40475__i = 0, G__40475__a = new Array(arguments.length -  0);
while (G__40475__i < G__40475__a.length) {G__40475__a[G__40475__i] = arguments[G__40475__i + 0]; ++G__40475__i;}
  x = new cljs.core.IndexedSeq(G__40475__a,0);
} 
return G__40474__delegate.call(this,x);};
G__40474.cljs$lang$maxFixedArity = 0;
G__40474.cljs$lang$applyTo = (function (arglist__40476){
var x = cljs.core.seq(arglist__40476);
return G__40474__delegate(x);
});
G__40474.cljs$core$IFn$_invoke$arity$variadic = G__40474__delegate;
return G__40474;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));