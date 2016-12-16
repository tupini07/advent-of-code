goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('advent_of_code_2016.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__36169__delegate = function (x){
if(cljs.core.truth_(advent_of_code_2016.core.on_js_reload)){
return cljs.core.apply.call(null,advent_of_code_2016.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'advent-of-code-2016.core/on-js-reload' is missing");
}
};
var G__36169 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__36170__i = 0, G__36170__a = new Array(arguments.length -  0);
while (G__36170__i < G__36170__a.length) {G__36170__a[G__36170__i] = arguments[G__36170__i + 0]; ++G__36170__i;}
  x = new cljs.core.IndexedSeq(G__36170__a,0);
} 
return G__36169__delegate.call(this,x);};
G__36169.cljs$lang$maxFixedArity = 0;
G__36169.cljs$lang$applyTo = (function (arglist__36171){
var x = cljs.core.seq(arglist__36171);
return G__36169__delegate(x);
});
G__36169.cljs$core$IFn$_invoke$arity$variadic = G__36169__delegate;
return G__36169;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
