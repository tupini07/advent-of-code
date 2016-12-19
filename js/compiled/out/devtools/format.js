// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.format');
goog.require('cljs.core');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__25454__auto__ = (((value == null))?null:value);
var m__25455__auto__ = (devtools.format._header[goog.typeOf(x__25454__auto__)]);
if(!((m__25455__auto__ == null))){
return m__25455__auto__.call(null,value);
} else {
var m__25455__auto____$1 = (devtools.format._header["_"]);
if(!((m__25455__auto____$1 == null))){
return m__25455__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__25454__auto__ = (((value == null))?null:value);
var m__25455__auto__ = (devtools.format._has_body[goog.typeOf(x__25454__auto__)]);
if(!((m__25455__auto__ == null))){
return m__25455__auto__.call(null,value);
} else {
var m__25455__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__25455__auto____$1 == null))){
return m__25455__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__25454__auto__ = (((value == null))?null:value);
var m__25455__auto__ = (devtools.format._body[goog.typeOf(x__25454__auto__)]);
if(!((m__25455__auto__ == null))){
return m__25455__auto__.call(null,value);
} else {
var m__25455__auto____$1 = (devtools.format._body["_"]);
if(!((m__25455__auto____$1 == null))){
return m__25455__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__36191__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__36191__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__36191__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__36191__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__36190__auto__ = temp__4657__auto____$2;
return goog.object.get(o__36190__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__36191__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__36191__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__36191__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__36191__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__36190__auto__ = temp__4657__auto____$2;
return goog.object.get(o__36190__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__36191__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__36191__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__36191__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__36191__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__36190__auto__ = temp__4657__auto____$2;
return goog.object.get(o__36190__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__36191__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__36191__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__36191__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__36191__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__36190__auto__ = temp__4657__auto____$2;
return goog.object.get(o__36190__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__36191__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__36191__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__36191__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__36191__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__36190__auto__ = temp__4657__auto____$2;
return goog.object.get(o__36190__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__36191__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__36191__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__36191__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__36191__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__36190__auto__ = temp__4657__auto____$2;
return goog.object.get(o__36190__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__36191__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__36191__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__36191__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__36191__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__36190__auto__ = temp__4657__auto____$2;
return goog.object.get(o__36190__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__25873__auto__ = [];
var len__25866__auto___36212 = arguments.length;
var i__25867__auto___36213 = (0);
while(true){
if((i__25867__auto___36213 < len__25866__auto___36212)){
args__25873__auto__.push((arguments[i__25867__auto___36213]));

var G__36214 = (i__25867__auto___36213 + (1));
i__25867__auto___36213 = G__36214;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq36211){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36211));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__25873__auto__ = [];
var len__25866__auto___36216 = arguments.length;
var i__25867__auto___36217 = (0);
while(true){
if((i__25867__auto___36217 < len__25866__auto___36216)){
args__25873__auto__.push((arguments[i__25867__auto___36217]));

var G__36218 = (i__25867__auto___36217 + (1));
i__25867__auto___36217 = G__36218;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq36215){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36215));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__25873__auto__ = [];
var len__25866__auto___36220 = arguments.length;
var i__25867__auto___36221 = (0);
while(true){
if((i__25867__auto___36221 < len__25866__auto___36220)){
args__25873__auto__.push((arguments[i__25867__auto___36221]));

var G__36222 = (i__25867__auto___36221 + (1));
i__25867__auto___36221 = G__36222;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq36219){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36219));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__25873__auto__ = [];
var len__25866__auto___36224 = arguments.length;
var i__25867__auto___36225 = (0);
while(true){
if((i__25867__auto___36225 < len__25866__auto___36224)){
args__25873__auto__.push((arguments[i__25867__auto___36225]));

var G__36226 = (i__25867__auto___36225 + (1));
i__25867__auto___36225 = G__36226;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq36223){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36223));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__25873__auto__ = [];
var len__25866__auto___36228 = arguments.length;
var i__25867__auto___36229 = (0);
while(true){
if((i__25867__auto___36229 < len__25866__auto___36228)){
args__25873__auto__.push((arguments[i__25867__auto___36229]));

var G__36230 = (i__25867__auto___36229 + (1));
i__25867__auto___36229 = G__36230;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq36227){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36227));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__25873__auto__ = [];
var len__25866__auto___36232 = arguments.length;
var i__25867__auto___36233 = (0);
while(true){
if((i__25867__auto___36233 < len__25866__auto___36232)){
args__25873__auto__.push((arguments[i__25867__auto___36233]));

var G__36234 = (i__25867__auto___36233 + (1));
i__25867__auto___36233 = G__36234;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq36231){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36231));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__25873__auto__ = [];
var len__25866__auto___36236 = arguments.length;
var i__25867__auto___36237 = (0);
while(true){
if((i__25867__auto___36237 < len__25866__auto___36236)){
args__25873__auto__.push((arguments[i__25867__auto___36237]));

var G__36238 = (i__25867__auto___36237 + (1));
i__25867__auto___36237 = G__36238;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq36235){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36235));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__25873__auto__ = [];
var len__25866__auto___36246 = arguments.length;
var i__25867__auto___36247 = (0);
while(true){
if((i__25867__auto___36247 < len__25866__auto___36246)){
args__25873__auto__.push((arguments[i__25867__auto___36247]));

var G__36248 = (i__25867__auto___36247 + (1));
i__25867__auto___36247 = G__36248;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((1) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25874__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__36242){
var vec__36243 = p__36242;
var state_override = cljs.core.nth.call(null,vec__36243,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__36243,state_override){
return (function (p1__36239_SHARP_){
return cljs.core.merge.call(null,p1__36239_SHARP_,state_override);
});})(vec__36243,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq36240){
var G__36241 = cljs.core.first.call(null,seq36240);
var seq36240__$1 = cljs.core.next.call(null,seq36240);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__36241,seq36240__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__25873__auto__ = [];
var len__25866__auto___36250 = arguments.length;
var i__25867__auto___36251 = (0);
while(true){
if((i__25867__auto___36251 < len__25866__auto___36250)){
args__25873__auto__.push((arguments[i__25867__auto___36251]));

var G__36252 = (i__25867__auto___36251 + (1));
i__25867__auto___36251 = G__36252;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq36249){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36249));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__25873__auto__ = [];
var len__25866__auto___36255 = arguments.length;
var i__25867__auto___36256 = (0);
while(true){
if((i__25867__auto___36256 < len__25866__auto___36255)){
args__25873__auto__.push((arguments[i__25867__auto___36256]));

var G__36257 = (i__25867__auto___36256 + (1));
i__25867__auto___36256 = G__36257;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((1) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25874__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq36253){
var G__36254 = cljs.core.first.call(null,seq36253);
var seq36253__$1 = cljs.core.next.call(null,seq36253);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__36254,seq36253__$1);
});


//# sourceMappingURL=format.js.map?rel=1481924985576