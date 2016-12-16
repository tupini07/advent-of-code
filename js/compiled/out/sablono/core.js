// Compiled by ClojureScript 1.9.229 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__39413__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__39410 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__39411 = cljs.core.seq.call(null,vec__39410);
var first__39412 = cljs.core.first.call(null,seq__39411);
var seq__39411__$1 = cljs.core.next.call(null,seq__39411);
var tag = first__39412;
var body = seq__39411__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__39413 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39414__i = 0, G__39414__a = new Array(arguments.length -  0);
while (G__39414__i < G__39414__a.length) {G__39414__a[G__39414__i] = arguments[G__39414__i + 0]; ++G__39414__i;}
  args = new cljs.core.IndexedSeq(G__39414__a,0);
} 
return G__39413__delegate.call(this,args);};
G__39413.cljs$lang$maxFixedArity = 0;
G__39413.cljs$lang$applyTo = (function (arglist__39415){
var args = cljs.core.seq(arglist__39415);
return G__39413__delegate(args);
});
G__39413.cljs$core$IFn$_invoke$arity$variadic = G__39413__delegate;
return G__39413;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__25570__auto__ = (function sablono$core$update_arglists_$_iter__39420(s__39421){
return (new cljs.core.LazySeq(null,(function (){
var s__39421__$1 = s__39421;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__39421__$1);
if(temp__4657__auto__){
var s__39421__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39421__$2)){
var c__25568__auto__ = cljs.core.chunk_first.call(null,s__39421__$2);
var size__25569__auto__ = cljs.core.count.call(null,c__25568__auto__);
var b__39423 = cljs.core.chunk_buffer.call(null,size__25569__auto__);
if((function (){var i__39422 = (0);
while(true){
if((i__39422 < size__25569__auto__)){
var args = cljs.core._nth.call(null,c__25568__auto__,i__39422);
cljs.core.chunk_append.call(null,b__39423,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__39424 = (i__39422 + (1));
i__39422 = G__39424;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39423),sablono$core$update_arglists_$_iter__39420.call(null,cljs.core.chunk_rest.call(null,s__39421__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39423),null);
}
} else {
var args = cljs.core.first.call(null,s__39421__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__39420.call(null,cljs.core.rest.call(null,s__39421__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25570__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__25872__auto__ = [];
var len__25865__auto___39430 = arguments.length;
var i__25866__auto___39431 = (0);
while(true){
if((i__25866__auto___39431 < len__25865__auto___39430)){
args__25872__auto__.push((arguments[i__25866__auto___39431]));

var G__39432 = (i__25866__auto___39431 + (1));
i__25866__auto___39431 = G__39432;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__25570__auto__ = (function sablono$core$iter__39426(s__39427){
return (new cljs.core.LazySeq(null,(function (){
var s__39427__$1 = s__39427;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__39427__$1);
if(temp__4657__auto__){
var s__39427__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39427__$2)){
var c__25568__auto__ = cljs.core.chunk_first.call(null,s__39427__$2);
var size__25569__auto__ = cljs.core.count.call(null,c__25568__auto__);
var b__39429 = cljs.core.chunk_buffer.call(null,size__25569__auto__);
if((function (){var i__39428 = (0);
while(true){
if((i__39428 < size__25569__auto__)){
var style = cljs.core._nth.call(null,c__25568__auto__,i__39428);
cljs.core.chunk_append.call(null,b__39429,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__39433 = (i__39428 + (1));
i__39428 = G__39433;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39429),sablono$core$iter__39426.call(null,cljs.core.chunk_rest.call(null,s__39427__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39429),null);
}
} else {
var style = cljs.core.first.call(null,s__39427__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__39426.call(null,cljs.core.rest.call(null,s__39427__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25570__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq39425){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39425));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to39434 = (function sablono$core$link_to39434(var_args){
var args__25872__auto__ = [];
var len__25865__auto___39437 = arguments.length;
var i__25866__auto___39438 = (0);
while(true){
if((i__25866__auto___39438 < len__25865__auto___39437)){
args__25872__auto__.push((arguments[i__25866__auto___39438]));

var G__39439 = (i__25866__auto___39438 + (1));
i__25866__auto___39438 = G__39439;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to39434.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

sablono.core.link_to39434.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to39434.cljs$lang$maxFixedArity = (1);

sablono.core.link_to39434.cljs$lang$applyTo = (function (seq39435){
var G__39436 = cljs.core.first.call(null,seq39435);
var seq39435__$1 = cljs.core.next.call(null,seq39435);
return sablono.core.link_to39434.cljs$core$IFn$_invoke$arity$variadic(G__39436,seq39435__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to39434);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to39440 = (function sablono$core$mail_to39440(var_args){
var args__25872__auto__ = [];
var len__25865__auto___39447 = arguments.length;
var i__25866__auto___39448 = (0);
while(true){
if((i__25866__auto___39448 < len__25865__auto___39447)){
args__25872__auto__.push((arguments[i__25866__auto___39448]));

var G__39449 = (i__25866__auto___39448 + (1));
i__25866__auto___39448 = G__39449;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to39440.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

sablono.core.mail_to39440.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__39443){
var vec__39444 = p__39443;
var content = cljs.core.nth.call(null,vec__39444,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__24790__auto__ = content;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to39440.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to39440.cljs$lang$applyTo = (function (seq39441){
var G__39442 = cljs.core.first.call(null,seq39441);
var seq39441__$1 = cljs.core.next.call(null,seq39441);
return sablono.core.mail_to39440.cljs$core$IFn$_invoke$arity$variadic(G__39442,seq39441__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to39440);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list39450 = (function sablono$core$unordered_list39450(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__25570__auto__ = (function sablono$core$unordered_list39450_$_iter__39455(s__39456){
return (new cljs.core.LazySeq(null,(function (){
var s__39456__$1 = s__39456;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__39456__$1);
if(temp__4657__auto__){
var s__39456__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39456__$2)){
var c__25568__auto__ = cljs.core.chunk_first.call(null,s__39456__$2);
var size__25569__auto__ = cljs.core.count.call(null,c__25568__auto__);
var b__39458 = cljs.core.chunk_buffer.call(null,size__25569__auto__);
if((function (){var i__39457 = (0);
while(true){
if((i__39457 < size__25569__auto__)){
var x = cljs.core._nth.call(null,c__25568__auto__,i__39457);
cljs.core.chunk_append.call(null,b__39458,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__39459 = (i__39457 + (1));
i__39457 = G__39459;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39458),sablono$core$unordered_list39450_$_iter__39455.call(null,cljs.core.chunk_rest.call(null,s__39456__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39458),null);
}
} else {
var x = cljs.core.first.call(null,s__39456__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list39450_$_iter__39455.call(null,cljs.core.rest.call(null,s__39456__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25570__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list39450);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list39460 = (function sablono$core$ordered_list39460(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__25570__auto__ = (function sablono$core$ordered_list39460_$_iter__39465(s__39466){
return (new cljs.core.LazySeq(null,(function (){
var s__39466__$1 = s__39466;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__39466__$1);
if(temp__4657__auto__){
var s__39466__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39466__$2)){
var c__25568__auto__ = cljs.core.chunk_first.call(null,s__39466__$2);
var size__25569__auto__ = cljs.core.count.call(null,c__25568__auto__);
var b__39468 = cljs.core.chunk_buffer.call(null,size__25569__auto__);
if((function (){var i__39467 = (0);
while(true){
if((i__39467 < size__25569__auto__)){
var x = cljs.core._nth.call(null,c__25568__auto__,i__39467);
cljs.core.chunk_append.call(null,b__39468,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__39469 = (i__39467 + (1));
i__39467 = G__39469;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39468),sablono$core$ordered_list39460_$_iter__39465.call(null,cljs.core.chunk_rest.call(null,s__39466__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39468),null);
}
} else {
var x = cljs.core.first.call(null,s__39466__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list39460_$_iter__39465.call(null,cljs.core.rest.call(null,s__39466__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25570__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list39460);
/**
 * Create an image element.
 */
sablono.core.image39470 = (function sablono$core$image39470(var_args){
var args39471 = [];
var len__25865__auto___39474 = arguments.length;
var i__25866__auto___39475 = (0);
while(true){
if((i__25866__auto___39475 < len__25865__auto___39474)){
args39471.push((arguments[i__25866__auto___39475]));

var G__39476 = (i__25866__auto___39475 + (1));
i__25866__auto___39475 = G__39476;
continue;
} else {
}
break;
}

var G__39473 = args39471.length;
switch (G__39473) {
case 1:
return sablono.core.image39470.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image39470.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39471.length)].join('')));

}
});

sablono.core.image39470.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image39470.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image39470.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image39470);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__39478_SHARP_,p2__39479_SHARP_){
return [cljs.core.str(p1__39478_SHARP_),cljs.core.str("["),cljs.core.str(p2__39479_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__39480_SHARP_,p2__39481_SHARP_){
return [cljs.core.str(p1__39480_SHARP_),cljs.core.str("-"),cljs.core.str(p2__39481_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24790__auto__ = value;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field39482 = (function sablono$core$color_field39482(var_args){
var args39483 = [];
var len__25865__auto___39550 = arguments.length;
var i__25866__auto___39551 = (0);
while(true){
if((i__25866__auto___39551 < len__25865__auto___39550)){
args39483.push((arguments[i__25866__auto___39551]));

var G__39552 = (i__25866__auto___39551 + (1));
i__25866__auto___39551 = G__39552;
continue;
} else {
}
break;
}

var G__39485 = args39483.length;
switch (G__39485) {
case 1:
return sablono.core.color_field39482.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field39482.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39483.length)].join('')));

}
});

sablono.core.color_field39482.cljs$core$IFn$_invoke$arity$1 = (function (name__39131__auto__){
return sablono.core.color_field39482.call(null,name__39131__auto__,null);
});

sablono.core.color_field39482.cljs$core$IFn$_invoke$arity$2 = (function (name__39131__auto__,value__39132__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__39131__auto__,value__39132__auto__);
});

sablono.core.color_field39482.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field39482);

/**
 * Creates a date input field.
 */
sablono.core.date_field39486 = (function sablono$core$date_field39486(var_args){
var args39487 = [];
var len__25865__auto___39554 = arguments.length;
var i__25866__auto___39555 = (0);
while(true){
if((i__25866__auto___39555 < len__25865__auto___39554)){
args39487.push((arguments[i__25866__auto___39555]));

var G__39556 = (i__25866__auto___39555 + (1));
i__25866__auto___39555 = G__39556;
continue;
} else {
}
break;
}

var G__39489 = args39487.length;
switch (G__39489) {
case 1:
return sablono.core.date_field39486.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field39486.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39487.length)].join('')));

}
});

sablono.core.date_field39486.cljs$core$IFn$_invoke$arity$1 = (function (name__39131__auto__){
return sablono.core.date_field39486.call(null,name__39131__auto__,null);
});

sablono.core.date_field39486.cljs$core$IFn$_invoke$arity$2 = (function (name__39131__auto__,value__39132__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__39131__auto__,value__39132__auto__);
});

sablono.core.date_field39486.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field39486);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field39490 = (function sablono$core$datetime_field39490(var_args){
var args39491 = [];
var len__25865__auto___39558 = arguments.length;
var i__25866__auto___39559 = (0);
while(true){
if((i__25866__auto___39559 < len__25865__auto___39558)){
args39491.push((arguments[i__25866__auto___39559]));

var G__39560 = (i__25866__auto___39559 + (1));
i__25866__auto___39559 = G__39560;
continue;
} else {
}
break;
}

var G__39493 = args39491.length;
switch (G__39493) {
case 1:
return sablono.core.datetime_field39490.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field39490.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39491.length)].join('')));

}
});

sablono.core.datetime_field39490.cljs$core$IFn$_invoke$arity$1 = (function (name__39131__auto__){
return sablono.core.datetime_field39490.call(null,name__39131__auto__,null);
});

sablono.core.datetime_field39490.cljs$core$IFn$_invoke$arity$2 = (function (name__39131__auto__,value__39132__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__39131__auto__,value__39132__auto__);
});

sablono.core.datetime_field39490.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field39490);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field39494 = (function sablono$core$datetime_local_field39494(var_args){
var args39495 = [];
var len__25865__auto___39562 = arguments.length;
var i__25866__auto___39563 = (0);
while(true){
if((i__25866__auto___39563 < len__25865__auto___39562)){
args39495.push((arguments[i__25866__auto___39563]));

var G__39564 = (i__25866__auto___39563 + (1));
i__25866__auto___39563 = G__39564;
continue;
} else {
}
break;
}

var G__39497 = args39495.length;
switch (G__39497) {
case 1:
return sablono.core.datetime_local_field39494.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field39494.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39495.length)].join('')));

}
});

sablono.core.datetime_local_field39494.cljs$core$IFn$_invoke$arity$1 = (function (name__39131__auto__){
return sablono.core.datetime_local_field39494.call(null,name__39131__auto__,null);
});

sablono.core.datetime_local_field39494.cljs$core$IFn$_invoke$arity$2 = (function (name__39131__auto__,value__39132__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__39131__auto__,value__39132__auto__);
});

sablono.core.datetime_local_field39494.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field39494);

/**
 * Creates a email input field.
 */
sablono.core.email_field39498 = (function sablono$core$email_field39498(var_args){
var args39499 = [];
var len__25865__auto___39566 = arguments.length;
var i__25866__auto___39567 = (0);
while(true){
if((i__25866__auto___39567 < len__25865__auto___39566)){
args39499.push((arguments[i__25866__auto___39567]));

var G__39568 = (i__25866__auto___39567 + (1));
i__25866__auto___39567 = G__39568;
continue;
} else {
}
break;
}

var G__39501 = args39499.length;
switch (G__39501) {
case 1:
return sablono.core.email_field39498.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field39498.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39499.length)].join('')));

}
});

sablono.core.email_field39498.cljs$core$IFn$_invoke$arity$1 = (function (name__39131__auto__){
return sablono.core.email_field39498.call(null,name__39131__auto__,null);
});

sablono.core.email_field39498.cljs$core$IFn$_invoke$arity$2 = (function (name__39131__auto__,value__39132__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__39131__auto__,value__39132__auto__);
});

sablono.core.email_field39498.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field39498);

/**
 * Creates a file input field.
 */
sablono.core.file_field39502 = (function sablono$core$file_field39502(var_args){
var args39503 = [];
var len__25865__auto___39570 = arguments.length;
var i__25866__auto___39571 = (0);
while(true){
if((i__25866__auto___39571 < len__25865__auto___39570)){
args39503.push((arguments[i__25866__auto___39571]));

var G__39572 = (i__25866__auto___39571 + (1));
i__25866__auto___39571 = G__39572;
continue;
} else {
}
break;
}

var G__39505 = args39503.length;
switch (G__39505) {
case 1:
return sablono.core.file_field39502.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field39502.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39503.length)].join('')));

}
});

sablono.core.file_field39502.cljs$core$IFn$_invoke$arity$1 = (function (name__39131__auto__){
return sablono.core.file_field39502.call(null,name__39131__auto__,null);
});

sablono.core.file_field39502.cljs$core$IFn$_invoke$arity$2 = (function (name__39131__auto__,value__39132__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__39131__auto__,value__39132__auto__);
});

sablono.core.file_field39502.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field39502);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field39506 = (function sablono$core$hidden_field39506(var_args){
var args39507 = [];
var len__25865__auto___39574 = arguments.length;
var i__25866__auto___39575 = (0);
while(true){
if((i__25866__auto___39575 < len__25865__auto___39574)){
args39507.push((arguments[i__25866__auto___39575]));

var G__39576 = (i__25866__auto___39575 + (1));
i__25866__auto___39575 = G__39576;
continue;
} else {
}
break;
}

var G__39509 = args39507.length;
switch (G__39509) {
case 1:
return sablono.core.hidden_field39506.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field39506.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39507.length)].join('')));

}
});

sablono.core.hidden_field39506.cljs$core$IFn$_invoke$arity$1 = (function (name__39131__auto__){
return sablono.core.hidden_field39506.call(null,name__39131__auto__,null);
});

sablono.core.hidden_field39506.cljs$core$IFn$_invoke$arity$2 = (function (name__39131__auto__,value__39132__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__39131__auto__,value__39132__auto__);
});

sablono.core.hidden_field39506.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field39506);

/**
 * Creates a month input field.
 */
sablono.core.month_field39510 = (function sablono$core$month_field39510(var_args){
var args39511 = [];
var len__25865__auto___39578 = arguments.length;
var i__25866__auto___39579 = (0);
while(true){
if((i__25866__auto___39579 < len__25865__auto___39578)){
args39511.push((arguments[i__25866__auto___39579]));

var G__39580 = (i__25866__auto___39579 + (1));
i__25866__auto___39579 = G__39580;
continue;
} else {
}
break;
}

var G__39513 = args39511.length;
switch (G__39513) {
case 1:
return sablono.core.month_field39510.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field39510.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39511.length)].join('')));

}
});

sablono.core.month_field39510.cljs$core$IFn$_invoke$arity$1 = (function (name__39131__auto__){
return sablono.core.month_field39510.call(null,name__39131__auto__,null);
});

sablono.core.month_field39510.cljs$core$IFn$_invoke$arity$2 = (function (name__39131__auto__,value__39132__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__39131__auto__,value__39132__auto__);
});

sablono.core.month_field39510.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field39510);

/**
 * Creates a number input field.
 */
sablono.core.number_field39514 = (function sablono$core$number_field39514(var_args){
var args39515 = [];
var len__25865__auto___39582 = arguments.length;
var i__25866__auto___39583 = (0);
while(true){
if((i__25866__auto___39583 < len__25865__auto___39582)){
args39515.push((arguments[i__25866__auto___39583]));

var G__39584 = (i__25866__auto___39583 + (1));
i__25866__auto___39583 = G__39584;
continue;
} else {
}
break;
}

var G__39517 = args39515.length;
switch (G__39517) {
case 1:
return sablono.core.number_field39514.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field39514.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39515.length)].join('')));

}
});

sablono.core.number_field39514.cljs$core$IFn$_invoke$arity$1 = (function (name__39131__auto__){
return sablono.core.number_field39514.call(null,name__39131__auto__,null);
});

sablono.core.number_field39514.cljs$core$IFn$_invoke$arity$2 = (function (name__39131__auto__,value__39132__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__39131__auto__,value__39132__auto__);
});

sablono.core.number_field39514.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field39514);

/**
 * Creates a password input field.
 */
sablono.core.password_field39518 = (function sablono$core$password_field39518(var_args){
var args39519 = [];
var len__25865__auto___39586 = arguments.length;
var i__25866__auto___39587 = (0);
while(true){
if((i__25866__auto___39587 < len__25865__auto___39586)){
args39519.push((arguments[i__25866__auto___39587]));

var G__39588 = (i__25866__auto___39587 + (1));
i__25866__auto___39587 = G__39588;
continue;
} else {
}
break;
}

var G__39521 = args39519.length;
switch (G__39521) {
case 1:
return sablono.core.password_field39518.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field39518.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39519.length)].join('')));

}
});

sablono.core.password_field39518.cljs$core$IFn$_invoke$arity$1 = (function (name__39131__auto__){
return sablono.core.password_field39518.call(null,name__39131__auto__,null);
});

sablono.core.password_field39518.cljs$core$IFn$_invoke$arity$2 = (function (name__39131__auto__,value__39132__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__39131__auto__,value__39132__auto__);
});

sablono.core.password_field39518.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field39518);

/**
 * Creates a range input field.
 */
sablono.core.range_field39522 = (function sablono$core$range_field39522(var_args){
var args39523 = [];
var len__25865__auto___39590 = arguments.length;
var i__25866__auto___39591 = (0);
while(true){
if((i__25866__auto___39591 < len__25865__auto___39590)){
args39523.push((arguments[i__25866__auto___39591]));

var G__39592 = (i__25866__auto___39591 + (1));
i__25866__auto___39591 = G__39592;
continue;
} else {
}
break;
}

var G__39525 = args39523.length;
switch (G__39525) {
case 1:
return sablono.core.range_field39522.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field39522.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39523.length)].join('')));

}
});

sablono.core.range_field39522.cljs$core$IFn$_invoke$arity$1 = (function (name__39131__auto__){
return sablono.core.range_field39522.call(null,name__39131__auto__,null);
});

sablono.core.range_field39522.cljs$core$IFn$_invoke$arity$2 = (function (name__39131__auto__,value__39132__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__39131__auto__,value__39132__auto__);
});

sablono.core.range_field39522.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field39522);

/**
 * Creates a search input field.
 */
sablono.core.search_field39526 = (function sablono$core$search_field39526(var_args){
var args39527 = [];
var len__25865__auto___39594 = arguments.length;
var i__25866__auto___39595 = (0);
while(true){
if((i__25866__auto___39595 < len__25865__auto___39594)){
args39527.push((arguments[i__25866__auto___39595]));

var G__39596 = (i__25866__auto___39595 + (1));
i__25866__auto___39595 = G__39596;
continue;
} else {
}
break;
}

var G__39529 = args39527.length;
switch (G__39529) {
case 1:
return sablono.core.search_field39526.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field39526.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39527.length)].join('')));

}
});

sablono.core.search_field39526.cljs$core$IFn$_invoke$arity$1 = (function (name__39131__auto__){
return sablono.core.search_field39526.call(null,name__39131__auto__,null);
});

sablono.core.search_field39526.cljs$core$IFn$_invoke$arity$2 = (function (name__39131__auto__,value__39132__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__39131__auto__,value__39132__auto__);
});

sablono.core.search_field39526.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field39526);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field39530 = (function sablono$core$tel_field39530(var_args){
var args39531 = [];
var len__25865__auto___39598 = arguments.length;
var i__25866__auto___39599 = (0);
while(true){
if((i__25866__auto___39599 < len__25865__auto___39598)){
args39531.push((arguments[i__25866__auto___39599]));

var G__39600 = (i__25866__auto___39599 + (1));
i__25866__auto___39599 = G__39600;
continue;
} else {
}
break;
}

var G__39533 = args39531.length;
switch (G__39533) {
case 1:
return sablono.core.tel_field39530.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field39530.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39531.length)].join('')));

}
});

sablono.core.tel_field39530.cljs$core$IFn$_invoke$arity$1 = (function (name__39131__auto__){
return sablono.core.tel_field39530.call(null,name__39131__auto__,null);
});

sablono.core.tel_field39530.cljs$core$IFn$_invoke$arity$2 = (function (name__39131__auto__,value__39132__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__39131__auto__,value__39132__auto__);
});

sablono.core.tel_field39530.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field39530);

/**
 * Creates a text input field.
 */
sablono.core.text_field39534 = (function sablono$core$text_field39534(var_args){
var args39535 = [];
var len__25865__auto___39602 = arguments.length;
var i__25866__auto___39603 = (0);
while(true){
if((i__25866__auto___39603 < len__25865__auto___39602)){
args39535.push((arguments[i__25866__auto___39603]));

var G__39604 = (i__25866__auto___39603 + (1));
i__25866__auto___39603 = G__39604;
continue;
} else {
}
break;
}

var G__39537 = args39535.length;
switch (G__39537) {
case 1:
return sablono.core.text_field39534.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field39534.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39535.length)].join('')));

}
});

sablono.core.text_field39534.cljs$core$IFn$_invoke$arity$1 = (function (name__39131__auto__){
return sablono.core.text_field39534.call(null,name__39131__auto__,null);
});

sablono.core.text_field39534.cljs$core$IFn$_invoke$arity$2 = (function (name__39131__auto__,value__39132__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__39131__auto__,value__39132__auto__);
});

sablono.core.text_field39534.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field39534);

/**
 * Creates a time input field.
 */
sablono.core.time_field39538 = (function sablono$core$time_field39538(var_args){
var args39539 = [];
var len__25865__auto___39606 = arguments.length;
var i__25866__auto___39607 = (0);
while(true){
if((i__25866__auto___39607 < len__25865__auto___39606)){
args39539.push((arguments[i__25866__auto___39607]));

var G__39608 = (i__25866__auto___39607 + (1));
i__25866__auto___39607 = G__39608;
continue;
} else {
}
break;
}

var G__39541 = args39539.length;
switch (G__39541) {
case 1:
return sablono.core.time_field39538.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field39538.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39539.length)].join('')));

}
});

sablono.core.time_field39538.cljs$core$IFn$_invoke$arity$1 = (function (name__39131__auto__){
return sablono.core.time_field39538.call(null,name__39131__auto__,null);
});

sablono.core.time_field39538.cljs$core$IFn$_invoke$arity$2 = (function (name__39131__auto__,value__39132__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__39131__auto__,value__39132__auto__);
});

sablono.core.time_field39538.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field39538);

/**
 * Creates a url input field.
 */
sablono.core.url_field39542 = (function sablono$core$url_field39542(var_args){
var args39543 = [];
var len__25865__auto___39610 = arguments.length;
var i__25866__auto___39611 = (0);
while(true){
if((i__25866__auto___39611 < len__25865__auto___39610)){
args39543.push((arguments[i__25866__auto___39611]));

var G__39612 = (i__25866__auto___39611 + (1));
i__25866__auto___39611 = G__39612;
continue;
} else {
}
break;
}

var G__39545 = args39543.length;
switch (G__39545) {
case 1:
return sablono.core.url_field39542.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field39542.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39543.length)].join('')));

}
});

sablono.core.url_field39542.cljs$core$IFn$_invoke$arity$1 = (function (name__39131__auto__){
return sablono.core.url_field39542.call(null,name__39131__auto__,null);
});

sablono.core.url_field39542.cljs$core$IFn$_invoke$arity$2 = (function (name__39131__auto__,value__39132__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__39131__auto__,value__39132__auto__);
});

sablono.core.url_field39542.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field39542);

/**
 * Creates a week input field.
 */
sablono.core.week_field39546 = (function sablono$core$week_field39546(var_args){
var args39547 = [];
var len__25865__auto___39614 = arguments.length;
var i__25866__auto___39615 = (0);
while(true){
if((i__25866__auto___39615 < len__25865__auto___39614)){
args39547.push((arguments[i__25866__auto___39615]));

var G__39616 = (i__25866__auto___39615 + (1));
i__25866__auto___39615 = G__39616;
continue;
} else {
}
break;
}

var G__39549 = args39547.length;
switch (G__39549) {
case 1:
return sablono.core.week_field39546.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field39546.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39547.length)].join('')));

}
});

sablono.core.week_field39546.cljs$core$IFn$_invoke$arity$1 = (function (name__39131__auto__){
return sablono.core.week_field39546.call(null,name__39131__auto__,null);
});

sablono.core.week_field39546.cljs$core$IFn$_invoke$arity$2 = (function (name__39131__auto__,value__39132__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__39131__auto__,value__39132__auto__);
});

sablono.core.week_field39546.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field39546);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box39618 = (function sablono$core$check_box39618(var_args){
var args39619 = [];
var len__25865__auto___39622 = arguments.length;
var i__25866__auto___39623 = (0);
while(true){
if((i__25866__auto___39623 < len__25865__auto___39622)){
args39619.push((arguments[i__25866__auto___39623]));

var G__39624 = (i__25866__auto___39623 + (1));
i__25866__auto___39623 = G__39624;
continue;
} else {
}
break;
}

var G__39621 = args39619.length;
switch (G__39621) {
case 1:
return sablono.core.check_box39618.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box39618.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box39618.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39619.length)].join('')));

}
});

sablono.core.check_box39618.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box39618.call(null,name,null);
});

sablono.core.check_box39618.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box39618.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box39618.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24790__auto__ = value;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box39618.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box39618);
/**
 * Creates a radio button.
 */
sablono.core.radio_button39626 = (function sablono$core$radio_button39626(var_args){
var args39627 = [];
var len__25865__auto___39630 = arguments.length;
var i__25866__auto___39631 = (0);
while(true){
if((i__25866__auto___39631 < len__25865__auto___39630)){
args39627.push((arguments[i__25866__auto___39631]));

var G__39632 = (i__25866__auto___39631 + (1));
i__25866__auto___39631 = G__39632;
continue;
} else {
}
break;
}

var G__39629 = args39627.length;
switch (G__39629) {
case 1:
return sablono.core.radio_button39626.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button39626.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button39626.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39627.length)].join('')));

}
});

sablono.core.radio_button39626.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button39626.call(null,group,null);
});

sablono.core.radio_button39626.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button39626.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button39626.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24790__auto__ = value;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button39626.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button39626);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options39634 = (function sablono$core$select_options39634(coll){
var iter__25570__auto__ = (function sablono$core$select_options39634_$_iter__39651(s__39652){
return (new cljs.core.LazySeq(null,(function (){
var s__39652__$1 = s__39652;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__39652__$1);
if(temp__4657__auto__){
var s__39652__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39652__$2)){
var c__25568__auto__ = cljs.core.chunk_first.call(null,s__39652__$2);
var size__25569__auto__ = cljs.core.count.call(null,c__25568__auto__);
var b__39654 = cljs.core.chunk_buffer.call(null,size__25569__auto__);
if((function (){var i__39653 = (0);
while(true){
if((i__39653 < size__25569__auto__)){
var x = cljs.core._nth.call(null,c__25568__auto__,i__39653);
cljs.core.chunk_append.call(null,b__39654,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__39661 = x;
var text = cljs.core.nth.call(null,vec__39661,(0),null);
var val = cljs.core.nth.call(null,vec__39661,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__39661,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options39634.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__39667 = (i__39653 + (1));
i__39653 = G__39667;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39654),sablono$core$select_options39634_$_iter__39651.call(null,cljs.core.chunk_rest.call(null,s__39652__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39654),null);
}
} else {
var x = cljs.core.first.call(null,s__39652__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__39664 = x;
var text = cljs.core.nth.call(null,vec__39664,(0),null);
var val = cljs.core.nth.call(null,vec__39664,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__39664,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options39634.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options39634_$_iter__39651.call(null,cljs.core.rest.call(null,s__39652__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25570__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options39634);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down39668 = (function sablono$core$drop_down39668(var_args){
var args39669 = [];
var len__25865__auto___39672 = arguments.length;
var i__25866__auto___39673 = (0);
while(true){
if((i__25866__auto___39673 < len__25865__auto___39672)){
args39669.push((arguments[i__25866__auto___39673]));

var G__39674 = (i__25866__auto___39673 + (1));
i__25866__auto___39673 = G__39674;
continue;
} else {
}
break;
}

var G__39671 = args39669.length;
switch (G__39671) {
case 2:
return sablono.core.drop_down39668.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down39668.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39669.length)].join('')));

}
});

sablono.core.drop_down39668.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down39668.call(null,name,options,null);
});

sablono.core.drop_down39668.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down39668.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down39668);
/**
 * Creates a text area element.
 */
sablono.core.text_area39676 = (function sablono$core$text_area39676(var_args){
var args39677 = [];
var len__25865__auto___39680 = arguments.length;
var i__25866__auto___39681 = (0);
while(true){
if((i__25866__auto___39681 < len__25865__auto___39680)){
args39677.push((arguments[i__25866__auto___39681]));

var G__39682 = (i__25866__auto___39681 + (1));
i__25866__auto___39681 = G__39682;
continue;
} else {
}
break;
}

var G__39679 = args39677.length;
switch (G__39679) {
case 1:
return sablono.core.text_area39676.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area39676.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39677.length)].join('')));

}
});

sablono.core.text_area39676.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area39676.call(null,name,null);
});

sablono.core.text_area39676.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24790__auto__ = value;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area39676.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area39676);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label39684 = (function sablono$core$label39684(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label39684);
/**
 * Creates a submit button.
 */
sablono.core.submit_button39685 = (function sablono$core$submit_button39685(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button39685);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button39686 = (function sablono$core$reset_button39686(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button39686);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to39687 = (function sablono$core$form_to39687(var_args){
var args__25872__auto__ = [];
var len__25865__auto___39694 = arguments.length;
var i__25866__auto___39695 = (0);
while(true){
if((i__25866__auto___39695 < len__25865__auto___39694)){
args__25872__auto__.push((arguments[i__25866__auto___39695]));

var G__39696 = (i__25866__auto___39695 + (1));
i__25866__auto___39695 = G__39696;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to39687.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

sablono.core.form_to39687.cljs$core$IFn$_invoke$arity$variadic = (function (p__39690,body){
var vec__39691 = p__39690;
var method = cljs.core.nth.call(null,vec__39691,(0),null);
var action = cljs.core.nth.call(null,vec__39691,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to39687.cljs$lang$maxFixedArity = (1);

sablono.core.form_to39687.cljs$lang$applyTo = (function (seq39688){
var G__39689 = cljs.core.first.call(null,seq39688);
var seq39688__$1 = cljs.core.next.call(null,seq39688);
return sablono.core.form_to39687.cljs$core$IFn$_invoke$arity$variadic(G__39689,seq39688__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to39687);

//# sourceMappingURL=core.js.map?rel=1481854736595