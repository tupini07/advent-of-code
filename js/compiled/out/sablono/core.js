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
var G__35849__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__35846 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__35847 = cljs.core.seq.call(null,vec__35846);
var first__35848 = cljs.core.first.call(null,seq__35847);
var seq__35847__$1 = cljs.core.next.call(null,seq__35847);
var tag = first__35848;
var body = seq__35847__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__35849 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35850__i = 0, G__35850__a = new Array(arguments.length -  0);
while (G__35850__i < G__35850__a.length) {G__35850__a[G__35850__i] = arguments[G__35850__i + 0]; ++G__35850__i;}
  args = new cljs.core.IndexedSeq(G__35850__a,0);
} 
return G__35849__delegate.call(this,args);};
G__35849.cljs$lang$maxFixedArity = 0;
G__35849.cljs$lang$applyTo = (function (arglist__35851){
var args = cljs.core.seq(arglist__35851);
return G__35849__delegate(args);
});
G__35849.cljs$core$IFn$_invoke$arity$variadic = G__35849__delegate;
return G__35849;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__25571__auto__ = (function sablono$core$update_arglists_$_iter__35856(s__35857){
return (new cljs.core.LazySeq(null,(function (){
var s__35857__$1 = s__35857;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__35857__$1);
if(temp__4657__auto__){
var s__35857__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35857__$2)){
var c__25569__auto__ = cljs.core.chunk_first.call(null,s__35857__$2);
var size__25570__auto__ = cljs.core.count.call(null,c__25569__auto__);
var b__35859 = cljs.core.chunk_buffer.call(null,size__25570__auto__);
if((function (){var i__35858 = (0);
while(true){
if((i__35858 < size__25570__auto__)){
var args = cljs.core._nth.call(null,c__25569__auto__,i__35858);
cljs.core.chunk_append.call(null,b__35859,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__35860 = (i__35858 + (1));
i__35858 = G__35860;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35859),sablono$core$update_arglists_$_iter__35856.call(null,cljs.core.chunk_rest.call(null,s__35857__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35859),null);
}
} else {
var args = cljs.core.first.call(null,s__35857__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__35856.call(null,cljs.core.rest.call(null,s__35857__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25571__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__25873__auto__ = [];
var len__25866__auto___35866 = arguments.length;
var i__25867__auto___35867 = (0);
while(true){
if((i__25867__auto___35867 < len__25866__auto___35866)){
args__25873__auto__.push((arguments[i__25867__auto___35867]));

var G__35868 = (i__25867__auto___35867 + (1));
i__25867__auto___35867 = G__35868;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__25571__auto__ = (function sablono$core$iter__35862(s__35863){
return (new cljs.core.LazySeq(null,(function (){
var s__35863__$1 = s__35863;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__35863__$1);
if(temp__4657__auto__){
var s__35863__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35863__$2)){
var c__25569__auto__ = cljs.core.chunk_first.call(null,s__35863__$2);
var size__25570__auto__ = cljs.core.count.call(null,c__25569__auto__);
var b__35865 = cljs.core.chunk_buffer.call(null,size__25570__auto__);
if((function (){var i__35864 = (0);
while(true){
if((i__35864 < size__25570__auto__)){
var style = cljs.core._nth.call(null,c__25569__auto__,i__35864);
cljs.core.chunk_append.call(null,b__35865,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__35869 = (i__35864 + (1));
i__35864 = G__35869;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35865),sablono$core$iter__35862.call(null,cljs.core.chunk_rest.call(null,s__35863__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35865),null);
}
} else {
var style = cljs.core.first.call(null,s__35863__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__35862.call(null,cljs.core.rest.call(null,s__35863__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25571__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq35861){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35861));
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
sablono.core.link_to35870 = (function sablono$core$link_to35870(var_args){
var args__25873__auto__ = [];
var len__25866__auto___35873 = arguments.length;
var i__25867__auto___35874 = (0);
while(true){
if((i__25867__auto___35874 < len__25866__auto___35873)){
args__25873__auto__.push((arguments[i__25867__auto___35874]));

var G__35875 = (i__25867__auto___35874 + (1));
i__25867__auto___35874 = G__35875;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((1) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to35870.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25874__auto__);
});

sablono.core.link_to35870.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to35870.cljs$lang$maxFixedArity = (1);

sablono.core.link_to35870.cljs$lang$applyTo = (function (seq35871){
var G__35872 = cljs.core.first.call(null,seq35871);
var seq35871__$1 = cljs.core.next.call(null,seq35871);
return sablono.core.link_to35870.cljs$core$IFn$_invoke$arity$variadic(G__35872,seq35871__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to35870);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to35876 = (function sablono$core$mail_to35876(var_args){
var args__25873__auto__ = [];
var len__25866__auto___35883 = arguments.length;
var i__25867__auto___35884 = (0);
while(true){
if((i__25867__auto___35884 < len__25866__auto___35883)){
args__25873__auto__.push((arguments[i__25867__auto___35884]));

var G__35885 = (i__25867__auto___35884 + (1));
i__25867__auto___35884 = G__35885;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((1) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to35876.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25874__auto__);
});

sablono.core.mail_to35876.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__35879){
var vec__35880 = p__35879;
var content = cljs.core.nth.call(null,vec__35880,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__24791__auto__ = content;
if(cljs.core.truth_(or__24791__auto__)){
return or__24791__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to35876.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to35876.cljs$lang$applyTo = (function (seq35877){
var G__35878 = cljs.core.first.call(null,seq35877);
var seq35877__$1 = cljs.core.next.call(null,seq35877);
return sablono.core.mail_to35876.cljs$core$IFn$_invoke$arity$variadic(G__35878,seq35877__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to35876);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list35886 = (function sablono$core$unordered_list35886(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__25571__auto__ = (function sablono$core$unordered_list35886_$_iter__35891(s__35892){
return (new cljs.core.LazySeq(null,(function (){
var s__35892__$1 = s__35892;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__35892__$1);
if(temp__4657__auto__){
var s__35892__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35892__$2)){
var c__25569__auto__ = cljs.core.chunk_first.call(null,s__35892__$2);
var size__25570__auto__ = cljs.core.count.call(null,c__25569__auto__);
var b__35894 = cljs.core.chunk_buffer.call(null,size__25570__auto__);
if((function (){var i__35893 = (0);
while(true){
if((i__35893 < size__25570__auto__)){
var x = cljs.core._nth.call(null,c__25569__auto__,i__35893);
cljs.core.chunk_append.call(null,b__35894,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__35895 = (i__35893 + (1));
i__35893 = G__35895;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35894),sablono$core$unordered_list35886_$_iter__35891.call(null,cljs.core.chunk_rest.call(null,s__35892__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35894),null);
}
} else {
var x = cljs.core.first.call(null,s__35892__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list35886_$_iter__35891.call(null,cljs.core.rest.call(null,s__35892__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25571__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list35886);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list35896 = (function sablono$core$ordered_list35896(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__25571__auto__ = (function sablono$core$ordered_list35896_$_iter__35901(s__35902){
return (new cljs.core.LazySeq(null,(function (){
var s__35902__$1 = s__35902;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__35902__$1);
if(temp__4657__auto__){
var s__35902__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35902__$2)){
var c__25569__auto__ = cljs.core.chunk_first.call(null,s__35902__$2);
var size__25570__auto__ = cljs.core.count.call(null,c__25569__auto__);
var b__35904 = cljs.core.chunk_buffer.call(null,size__25570__auto__);
if((function (){var i__35903 = (0);
while(true){
if((i__35903 < size__25570__auto__)){
var x = cljs.core._nth.call(null,c__25569__auto__,i__35903);
cljs.core.chunk_append.call(null,b__35904,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__35905 = (i__35903 + (1));
i__35903 = G__35905;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35904),sablono$core$ordered_list35896_$_iter__35901.call(null,cljs.core.chunk_rest.call(null,s__35902__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35904),null);
}
} else {
var x = cljs.core.first.call(null,s__35902__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list35896_$_iter__35901.call(null,cljs.core.rest.call(null,s__35902__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25571__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list35896);
/**
 * Create an image element.
 */
sablono.core.image35906 = (function sablono$core$image35906(var_args){
var args35907 = [];
var len__25866__auto___35910 = arguments.length;
var i__25867__auto___35911 = (0);
while(true){
if((i__25867__auto___35911 < len__25866__auto___35910)){
args35907.push((arguments[i__25867__auto___35911]));

var G__35912 = (i__25867__auto___35911 + (1));
i__25867__auto___35911 = G__35912;
continue;
} else {
}
break;
}

var G__35909 = args35907.length;
switch (G__35909) {
case 1:
return sablono.core.image35906.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image35906.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35907.length)].join('')));

}
});

sablono.core.image35906.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image35906.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image35906.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image35906);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__35914_SHARP_,p2__35915_SHARP_){
return [cljs.core.str(p1__35914_SHARP_),cljs.core.str("["),cljs.core.str(p2__35915_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__35916_SHARP_,p2__35917_SHARP_){
return [cljs.core.str(p1__35916_SHARP_),cljs.core.str("-"),cljs.core.str(p2__35917_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24791__auto__ = value;
if(cljs.core.truth_(or__24791__auto__)){
return or__24791__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field35918 = (function sablono$core$color_field35918(var_args){
var args35919 = [];
var len__25866__auto___35986 = arguments.length;
var i__25867__auto___35987 = (0);
while(true){
if((i__25867__auto___35987 < len__25866__auto___35986)){
args35919.push((arguments[i__25867__auto___35987]));

var G__35988 = (i__25867__auto___35987 + (1));
i__25867__auto___35987 = G__35988;
continue;
} else {
}
break;
}

var G__35921 = args35919.length;
switch (G__35921) {
case 1:
return sablono.core.color_field35918.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field35918.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35919.length)].join('')));

}
});

sablono.core.color_field35918.cljs$core$IFn$_invoke$arity$1 = (function (name__35833__auto__){
return sablono.core.color_field35918.call(null,name__35833__auto__,null);
});

sablono.core.color_field35918.cljs$core$IFn$_invoke$arity$2 = (function (name__35833__auto__,value__35834__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__35833__auto__,value__35834__auto__);
});

sablono.core.color_field35918.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field35918);

/**
 * Creates a date input field.
 */
sablono.core.date_field35922 = (function sablono$core$date_field35922(var_args){
var args35923 = [];
var len__25866__auto___35990 = arguments.length;
var i__25867__auto___35991 = (0);
while(true){
if((i__25867__auto___35991 < len__25866__auto___35990)){
args35923.push((arguments[i__25867__auto___35991]));

var G__35992 = (i__25867__auto___35991 + (1));
i__25867__auto___35991 = G__35992;
continue;
} else {
}
break;
}

var G__35925 = args35923.length;
switch (G__35925) {
case 1:
return sablono.core.date_field35922.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field35922.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35923.length)].join('')));

}
});

sablono.core.date_field35922.cljs$core$IFn$_invoke$arity$1 = (function (name__35833__auto__){
return sablono.core.date_field35922.call(null,name__35833__auto__,null);
});

sablono.core.date_field35922.cljs$core$IFn$_invoke$arity$2 = (function (name__35833__auto__,value__35834__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__35833__auto__,value__35834__auto__);
});

sablono.core.date_field35922.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field35922);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field35926 = (function sablono$core$datetime_field35926(var_args){
var args35927 = [];
var len__25866__auto___35994 = arguments.length;
var i__25867__auto___35995 = (0);
while(true){
if((i__25867__auto___35995 < len__25866__auto___35994)){
args35927.push((arguments[i__25867__auto___35995]));

var G__35996 = (i__25867__auto___35995 + (1));
i__25867__auto___35995 = G__35996;
continue;
} else {
}
break;
}

var G__35929 = args35927.length;
switch (G__35929) {
case 1:
return sablono.core.datetime_field35926.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field35926.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35927.length)].join('')));

}
});

sablono.core.datetime_field35926.cljs$core$IFn$_invoke$arity$1 = (function (name__35833__auto__){
return sablono.core.datetime_field35926.call(null,name__35833__auto__,null);
});

sablono.core.datetime_field35926.cljs$core$IFn$_invoke$arity$2 = (function (name__35833__auto__,value__35834__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__35833__auto__,value__35834__auto__);
});

sablono.core.datetime_field35926.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field35926);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field35930 = (function sablono$core$datetime_local_field35930(var_args){
var args35931 = [];
var len__25866__auto___35998 = arguments.length;
var i__25867__auto___35999 = (0);
while(true){
if((i__25867__auto___35999 < len__25866__auto___35998)){
args35931.push((arguments[i__25867__auto___35999]));

var G__36000 = (i__25867__auto___35999 + (1));
i__25867__auto___35999 = G__36000;
continue;
} else {
}
break;
}

var G__35933 = args35931.length;
switch (G__35933) {
case 1:
return sablono.core.datetime_local_field35930.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field35930.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35931.length)].join('')));

}
});

sablono.core.datetime_local_field35930.cljs$core$IFn$_invoke$arity$1 = (function (name__35833__auto__){
return sablono.core.datetime_local_field35930.call(null,name__35833__auto__,null);
});

sablono.core.datetime_local_field35930.cljs$core$IFn$_invoke$arity$2 = (function (name__35833__auto__,value__35834__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__35833__auto__,value__35834__auto__);
});

sablono.core.datetime_local_field35930.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field35930);

/**
 * Creates a email input field.
 */
sablono.core.email_field35934 = (function sablono$core$email_field35934(var_args){
var args35935 = [];
var len__25866__auto___36002 = arguments.length;
var i__25867__auto___36003 = (0);
while(true){
if((i__25867__auto___36003 < len__25866__auto___36002)){
args35935.push((arguments[i__25867__auto___36003]));

var G__36004 = (i__25867__auto___36003 + (1));
i__25867__auto___36003 = G__36004;
continue;
} else {
}
break;
}

var G__35937 = args35935.length;
switch (G__35937) {
case 1:
return sablono.core.email_field35934.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field35934.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35935.length)].join('')));

}
});

sablono.core.email_field35934.cljs$core$IFn$_invoke$arity$1 = (function (name__35833__auto__){
return sablono.core.email_field35934.call(null,name__35833__auto__,null);
});

sablono.core.email_field35934.cljs$core$IFn$_invoke$arity$2 = (function (name__35833__auto__,value__35834__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__35833__auto__,value__35834__auto__);
});

sablono.core.email_field35934.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field35934);

/**
 * Creates a file input field.
 */
sablono.core.file_field35938 = (function sablono$core$file_field35938(var_args){
var args35939 = [];
var len__25866__auto___36006 = arguments.length;
var i__25867__auto___36007 = (0);
while(true){
if((i__25867__auto___36007 < len__25866__auto___36006)){
args35939.push((arguments[i__25867__auto___36007]));

var G__36008 = (i__25867__auto___36007 + (1));
i__25867__auto___36007 = G__36008;
continue;
} else {
}
break;
}

var G__35941 = args35939.length;
switch (G__35941) {
case 1:
return sablono.core.file_field35938.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field35938.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35939.length)].join('')));

}
});

sablono.core.file_field35938.cljs$core$IFn$_invoke$arity$1 = (function (name__35833__auto__){
return sablono.core.file_field35938.call(null,name__35833__auto__,null);
});

sablono.core.file_field35938.cljs$core$IFn$_invoke$arity$2 = (function (name__35833__auto__,value__35834__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__35833__auto__,value__35834__auto__);
});

sablono.core.file_field35938.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field35938);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field35942 = (function sablono$core$hidden_field35942(var_args){
var args35943 = [];
var len__25866__auto___36010 = arguments.length;
var i__25867__auto___36011 = (0);
while(true){
if((i__25867__auto___36011 < len__25866__auto___36010)){
args35943.push((arguments[i__25867__auto___36011]));

var G__36012 = (i__25867__auto___36011 + (1));
i__25867__auto___36011 = G__36012;
continue;
} else {
}
break;
}

var G__35945 = args35943.length;
switch (G__35945) {
case 1:
return sablono.core.hidden_field35942.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field35942.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35943.length)].join('')));

}
});

sablono.core.hidden_field35942.cljs$core$IFn$_invoke$arity$1 = (function (name__35833__auto__){
return sablono.core.hidden_field35942.call(null,name__35833__auto__,null);
});

sablono.core.hidden_field35942.cljs$core$IFn$_invoke$arity$2 = (function (name__35833__auto__,value__35834__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__35833__auto__,value__35834__auto__);
});

sablono.core.hidden_field35942.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field35942);

/**
 * Creates a month input field.
 */
sablono.core.month_field35946 = (function sablono$core$month_field35946(var_args){
var args35947 = [];
var len__25866__auto___36014 = arguments.length;
var i__25867__auto___36015 = (0);
while(true){
if((i__25867__auto___36015 < len__25866__auto___36014)){
args35947.push((arguments[i__25867__auto___36015]));

var G__36016 = (i__25867__auto___36015 + (1));
i__25867__auto___36015 = G__36016;
continue;
} else {
}
break;
}

var G__35949 = args35947.length;
switch (G__35949) {
case 1:
return sablono.core.month_field35946.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field35946.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35947.length)].join('')));

}
});

sablono.core.month_field35946.cljs$core$IFn$_invoke$arity$1 = (function (name__35833__auto__){
return sablono.core.month_field35946.call(null,name__35833__auto__,null);
});

sablono.core.month_field35946.cljs$core$IFn$_invoke$arity$2 = (function (name__35833__auto__,value__35834__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__35833__auto__,value__35834__auto__);
});

sablono.core.month_field35946.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field35946);

/**
 * Creates a number input field.
 */
sablono.core.number_field35950 = (function sablono$core$number_field35950(var_args){
var args35951 = [];
var len__25866__auto___36018 = arguments.length;
var i__25867__auto___36019 = (0);
while(true){
if((i__25867__auto___36019 < len__25866__auto___36018)){
args35951.push((arguments[i__25867__auto___36019]));

var G__36020 = (i__25867__auto___36019 + (1));
i__25867__auto___36019 = G__36020;
continue;
} else {
}
break;
}

var G__35953 = args35951.length;
switch (G__35953) {
case 1:
return sablono.core.number_field35950.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field35950.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35951.length)].join('')));

}
});

sablono.core.number_field35950.cljs$core$IFn$_invoke$arity$1 = (function (name__35833__auto__){
return sablono.core.number_field35950.call(null,name__35833__auto__,null);
});

sablono.core.number_field35950.cljs$core$IFn$_invoke$arity$2 = (function (name__35833__auto__,value__35834__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__35833__auto__,value__35834__auto__);
});

sablono.core.number_field35950.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field35950);

/**
 * Creates a password input field.
 */
sablono.core.password_field35954 = (function sablono$core$password_field35954(var_args){
var args35955 = [];
var len__25866__auto___36022 = arguments.length;
var i__25867__auto___36023 = (0);
while(true){
if((i__25867__auto___36023 < len__25866__auto___36022)){
args35955.push((arguments[i__25867__auto___36023]));

var G__36024 = (i__25867__auto___36023 + (1));
i__25867__auto___36023 = G__36024;
continue;
} else {
}
break;
}

var G__35957 = args35955.length;
switch (G__35957) {
case 1:
return sablono.core.password_field35954.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field35954.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35955.length)].join('')));

}
});

sablono.core.password_field35954.cljs$core$IFn$_invoke$arity$1 = (function (name__35833__auto__){
return sablono.core.password_field35954.call(null,name__35833__auto__,null);
});

sablono.core.password_field35954.cljs$core$IFn$_invoke$arity$2 = (function (name__35833__auto__,value__35834__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__35833__auto__,value__35834__auto__);
});

sablono.core.password_field35954.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field35954);

/**
 * Creates a range input field.
 */
sablono.core.range_field35958 = (function sablono$core$range_field35958(var_args){
var args35959 = [];
var len__25866__auto___36026 = arguments.length;
var i__25867__auto___36027 = (0);
while(true){
if((i__25867__auto___36027 < len__25866__auto___36026)){
args35959.push((arguments[i__25867__auto___36027]));

var G__36028 = (i__25867__auto___36027 + (1));
i__25867__auto___36027 = G__36028;
continue;
} else {
}
break;
}

var G__35961 = args35959.length;
switch (G__35961) {
case 1:
return sablono.core.range_field35958.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field35958.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35959.length)].join('')));

}
});

sablono.core.range_field35958.cljs$core$IFn$_invoke$arity$1 = (function (name__35833__auto__){
return sablono.core.range_field35958.call(null,name__35833__auto__,null);
});

sablono.core.range_field35958.cljs$core$IFn$_invoke$arity$2 = (function (name__35833__auto__,value__35834__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__35833__auto__,value__35834__auto__);
});

sablono.core.range_field35958.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field35958);

/**
 * Creates a search input field.
 */
sablono.core.search_field35962 = (function sablono$core$search_field35962(var_args){
var args35963 = [];
var len__25866__auto___36030 = arguments.length;
var i__25867__auto___36031 = (0);
while(true){
if((i__25867__auto___36031 < len__25866__auto___36030)){
args35963.push((arguments[i__25867__auto___36031]));

var G__36032 = (i__25867__auto___36031 + (1));
i__25867__auto___36031 = G__36032;
continue;
} else {
}
break;
}

var G__35965 = args35963.length;
switch (G__35965) {
case 1:
return sablono.core.search_field35962.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field35962.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35963.length)].join('')));

}
});

sablono.core.search_field35962.cljs$core$IFn$_invoke$arity$1 = (function (name__35833__auto__){
return sablono.core.search_field35962.call(null,name__35833__auto__,null);
});

sablono.core.search_field35962.cljs$core$IFn$_invoke$arity$2 = (function (name__35833__auto__,value__35834__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__35833__auto__,value__35834__auto__);
});

sablono.core.search_field35962.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field35962);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field35966 = (function sablono$core$tel_field35966(var_args){
var args35967 = [];
var len__25866__auto___36034 = arguments.length;
var i__25867__auto___36035 = (0);
while(true){
if((i__25867__auto___36035 < len__25866__auto___36034)){
args35967.push((arguments[i__25867__auto___36035]));

var G__36036 = (i__25867__auto___36035 + (1));
i__25867__auto___36035 = G__36036;
continue;
} else {
}
break;
}

var G__35969 = args35967.length;
switch (G__35969) {
case 1:
return sablono.core.tel_field35966.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field35966.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35967.length)].join('')));

}
});

sablono.core.tel_field35966.cljs$core$IFn$_invoke$arity$1 = (function (name__35833__auto__){
return sablono.core.tel_field35966.call(null,name__35833__auto__,null);
});

sablono.core.tel_field35966.cljs$core$IFn$_invoke$arity$2 = (function (name__35833__auto__,value__35834__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__35833__auto__,value__35834__auto__);
});

sablono.core.tel_field35966.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field35966);

/**
 * Creates a text input field.
 */
sablono.core.text_field35970 = (function sablono$core$text_field35970(var_args){
var args35971 = [];
var len__25866__auto___36038 = arguments.length;
var i__25867__auto___36039 = (0);
while(true){
if((i__25867__auto___36039 < len__25866__auto___36038)){
args35971.push((arguments[i__25867__auto___36039]));

var G__36040 = (i__25867__auto___36039 + (1));
i__25867__auto___36039 = G__36040;
continue;
} else {
}
break;
}

var G__35973 = args35971.length;
switch (G__35973) {
case 1:
return sablono.core.text_field35970.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field35970.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35971.length)].join('')));

}
});

sablono.core.text_field35970.cljs$core$IFn$_invoke$arity$1 = (function (name__35833__auto__){
return sablono.core.text_field35970.call(null,name__35833__auto__,null);
});

sablono.core.text_field35970.cljs$core$IFn$_invoke$arity$2 = (function (name__35833__auto__,value__35834__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__35833__auto__,value__35834__auto__);
});

sablono.core.text_field35970.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field35970);

/**
 * Creates a time input field.
 */
sablono.core.time_field35974 = (function sablono$core$time_field35974(var_args){
var args35975 = [];
var len__25866__auto___36042 = arguments.length;
var i__25867__auto___36043 = (0);
while(true){
if((i__25867__auto___36043 < len__25866__auto___36042)){
args35975.push((arguments[i__25867__auto___36043]));

var G__36044 = (i__25867__auto___36043 + (1));
i__25867__auto___36043 = G__36044;
continue;
} else {
}
break;
}

var G__35977 = args35975.length;
switch (G__35977) {
case 1:
return sablono.core.time_field35974.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field35974.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35975.length)].join('')));

}
});

sablono.core.time_field35974.cljs$core$IFn$_invoke$arity$1 = (function (name__35833__auto__){
return sablono.core.time_field35974.call(null,name__35833__auto__,null);
});

sablono.core.time_field35974.cljs$core$IFn$_invoke$arity$2 = (function (name__35833__auto__,value__35834__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__35833__auto__,value__35834__auto__);
});

sablono.core.time_field35974.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field35974);

/**
 * Creates a url input field.
 */
sablono.core.url_field35978 = (function sablono$core$url_field35978(var_args){
var args35979 = [];
var len__25866__auto___36046 = arguments.length;
var i__25867__auto___36047 = (0);
while(true){
if((i__25867__auto___36047 < len__25866__auto___36046)){
args35979.push((arguments[i__25867__auto___36047]));

var G__36048 = (i__25867__auto___36047 + (1));
i__25867__auto___36047 = G__36048;
continue;
} else {
}
break;
}

var G__35981 = args35979.length;
switch (G__35981) {
case 1:
return sablono.core.url_field35978.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field35978.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35979.length)].join('')));

}
});

sablono.core.url_field35978.cljs$core$IFn$_invoke$arity$1 = (function (name__35833__auto__){
return sablono.core.url_field35978.call(null,name__35833__auto__,null);
});

sablono.core.url_field35978.cljs$core$IFn$_invoke$arity$2 = (function (name__35833__auto__,value__35834__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__35833__auto__,value__35834__auto__);
});

sablono.core.url_field35978.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field35978);

/**
 * Creates a week input field.
 */
sablono.core.week_field35982 = (function sablono$core$week_field35982(var_args){
var args35983 = [];
var len__25866__auto___36050 = arguments.length;
var i__25867__auto___36051 = (0);
while(true){
if((i__25867__auto___36051 < len__25866__auto___36050)){
args35983.push((arguments[i__25867__auto___36051]));

var G__36052 = (i__25867__auto___36051 + (1));
i__25867__auto___36051 = G__36052;
continue;
} else {
}
break;
}

var G__35985 = args35983.length;
switch (G__35985) {
case 1:
return sablono.core.week_field35982.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field35982.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35983.length)].join('')));

}
});

sablono.core.week_field35982.cljs$core$IFn$_invoke$arity$1 = (function (name__35833__auto__){
return sablono.core.week_field35982.call(null,name__35833__auto__,null);
});

sablono.core.week_field35982.cljs$core$IFn$_invoke$arity$2 = (function (name__35833__auto__,value__35834__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__35833__auto__,value__35834__auto__);
});

sablono.core.week_field35982.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field35982);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box36054 = (function sablono$core$check_box36054(var_args){
var args36055 = [];
var len__25866__auto___36058 = arguments.length;
var i__25867__auto___36059 = (0);
while(true){
if((i__25867__auto___36059 < len__25866__auto___36058)){
args36055.push((arguments[i__25867__auto___36059]));

var G__36060 = (i__25867__auto___36059 + (1));
i__25867__auto___36059 = G__36060;
continue;
} else {
}
break;
}

var G__36057 = args36055.length;
switch (G__36057) {
case 1:
return sablono.core.check_box36054.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box36054.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box36054.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36055.length)].join('')));

}
});

sablono.core.check_box36054.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box36054.call(null,name,null);
});

sablono.core.check_box36054.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box36054.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box36054.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24791__auto__ = value;
if(cljs.core.truth_(or__24791__auto__)){
return or__24791__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box36054.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box36054);
/**
 * Creates a radio button.
 */
sablono.core.radio_button36062 = (function sablono$core$radio_button36062(var_args){
var args36063 = [];
var len__25866__auto___36066 = arguments.length;
var i__25867__auto___36067 = (0);
while(true){
if((i__25867__auto___36067 < len__25866__auto___36066)){
args36063.push((arguments[i__25867__auto___36067]));

var G__36068 = (i__25867__auto___36067 + (1));
i__25867__auto___36067 = G__36068;
continue;
} else {
}
break;
}

var G__36065 = args36063.length;
switch (G__36065) {
case 1:
return sablono.core.radio_button36062.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button36062.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button36062.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36063.length)].join('')));

}
});

sablono.core.radio_button36062.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button36062.call(null,group,null);
});

sablono.core.radio_button36062.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button36062.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button36062.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24791__auto__ = value;
if(cljs.core.truth_(or__24791__auto__)){
return or__24791__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button36062.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button36062);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options36070 = (function sablono$core$select_options36070(coll){
var iter__25571__auto__ = (function sablono$core$select_options36070_$_iter__36087(s__36088){
return (new cljs.core.LazySeq(null,(function (){
var s__36088__$1 = s__36088;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36088__$1);
if(temp__4657__auto__){
var s__36088__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36088__$2)){
var c__25569__auto__ = cljs.core.chunk_first.call(null,s__36088__$2);
var size__25570__auto__ = cljs.core.count.call(null,c__25569__auto__);
var b__36090 = cljs.core.chunk_buffer.call(null,size__25570__auto__);
if((function (){var i__36089 = (0);
while(true){
if((i__36089 < size__25570__auto__)){
var x = cljs.core._nth.call(null,c__25569__auto__,i__36089);
cljs.core.chunk_append.call(null,b__36090,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__36097 = x;
var text = cljs.core.nth.call(null,vec__36097,(0),null);
var val = cljs.core.nth.call(null,vec__36097,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__36097,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options36070.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__36103 = (i__36089 + (1));
i__36089 = G__36103;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36090),sablono$core$select_options36070_$_iter__36087.call(null,cljs.core.chunk_rest.call(null,s__36088__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36090),null);
}
} else {
var x = cljs.core.first.call(null,s__36088__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__36100 = x;
var text = cljs.core.nth.call(null,vec__36100,(0),null);
var val = cljs.core.nth.call(null,vec__36100,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__36100,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options36070.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options36070_$_iter__36087.call(null,cljs.core.rest.call(null,s__36088__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25571__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options36070);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down36104 = (function sablono$core$drop_down36104(var_args){
var args36105 = [];
var len__25866__auto___36108 = arguments.length;
var i__25867__auto___36109 = (0);
while(true){
if((i__25867__auto___36109 < len__25866__auto___36108)){
args36105.push((arguments[i__25867__auto___36109]));

var G__36110 = (i__25867__auto___36109 + (1));
i__25867__auto___36109 = G__36110;
continue;
} else {
}
break;
}

var G__36107 = args36105.length;
switch (G__36107) {
case 2:
return sablono.core.drop_down36104.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down36104.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36105.length)].join('')));

}
});

sablono.core.drop_down36104.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down36104.call(null,name,options,null);
});

sablono.core.drop_down36104.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down36104.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down36104);
/**
 * Creates a text area element.
 */
sablono.core.text_area36112 = (function sablono$core$text_area36112(var_args){
var args36113 = [];
var len__25866__auto___36116 = arguments.length;
var i__25867__auto___36117 = (0);
while(true){
if((i__25867__auto___36117 < len__25866__auto___36116)){
args36113.push((arguments[i__25867__auto___36117]));

var G__36118 = (i__25867__auto___36117 + (1));
i__25867__auto___36117 = G__36118;
continue;
} else {
}
break;
}

var G__36115 = args36113.length;
switch (G__36115) {
case 1:
return sablono.core.text_area36112.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area36112.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36113.length)].join('')));

}
});

sablono.core.text_area36112.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area36112.call(null,name,null);
});

sablono.core.text_area36112.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24791__auto__ = value;
if(cljs.core.truth_(or__24791__auto__)){
return or__24791__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area36112.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area36112);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label36120 = (function sablono$core$label36120(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label36120);
/**
 * Creates a submit button.
 */
sablono.core.submit_button36121 = (function sablono$core$submit_button36121(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button36121);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button36122 = (function sablono$core$reset_button36122(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button36122);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to36123 = (function sablono$core$form_to36123(var_args){
var args__25873__auto__ = [];
var len__25866__auto___36130 = arguments.length;
var i__25867__auto___36131 = (0);
while(true){
if((i__25867__auto___36131 < len__25866__auto___36130)){
args__25873__auto__.push((arguments[i__25867__auto___36131]));

var G__36132 = (i__25867__auto___36131 + (1));
i__25867__auto___36131 = G__36132;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((1) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to36123.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25874__auto__);
});

sablono.core.form_to36123.cljs$core$IFn$_invoke$arity$variadic = (function (p__36126,body){
var vec__36127 = p__36126;
var method = cljs.core.nth.call(null,vec__36127,(0),null);
var action = cljs.core.nth.call(null,vec__36127,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to36123.cljs$lang$maxFixedArity = (1);

sablono.core.form_to36123.cljs$lang$applyTo = (function (seq36124){
var G__36125 = cljs.core.first.call(null,seq36124);
var seq36124__$1 = cljs.core.next.call(null,seq36124);
return sablono.core.form_to36123.cljs$core$IFn$_invoke$arity$variadic(G__36125,seq36124__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to36123);

//# sourceMappingURL=core.js.map?rel=1481924984677