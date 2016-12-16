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
var x__25453__auto__ = (((value == null))?null:value);
var m__25454__auto__ = (devtools.format._header[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,value);
} else {
var m__25454__auto____$1 = (devtools.format._header["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,value);
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
var x__25453__auto__ = (((value == null))?null:value);
var m__25454__auto__ = (devtools.format._has_body[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,value);
} else {
var m__25454__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,value);
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
var x__25453__auto__ = (((value == null))?null:value);
var m__25454__auto__ = (devtools.format._body[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,value);
} else {
var m__25454__auto____$1 = (devtools.format._body["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,value);
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
var o__35340__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__35340__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__35340__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__35340__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__35339__auto__ = temp__4657__auto____$2;
return goog.object.get(o__35339__auto__,"make_template");
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
var o__35340__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__35340__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__35340__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__35340__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__35339__auto__ = temp__4657__auto____$2;
return goog.object.get(o__35339__auto__,"make_group");
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
var o__35340__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__35340__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__35340__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__35340__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__35339__auto__ = temp__4657__auto____$2;
return goog.object.get(o__35339__auto__,"make_reference");
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
var o__35340__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__35340__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__35340__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__35340__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__35339__auto__ = temp__4657__auto____$2;
return goog.object.get(o__35339__auto__,"make_surrogate");
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
var o__35340__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__35340__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__35340__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__35340__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__35339__auto__ = temp__4657__auto____$2;
return goog.object.get(o__35339__auto__,"render_markup");
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
var o__35340__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__35340__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__35340__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__35340__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__35339__auto__ = temp__4657__auto____$2;
return goog.object.get(o__35339__auto__,"_LT_header_GT_");
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
var o__35340__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__35340__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__35340__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__35340__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__35339__auto__ = temp__4657__auto____$2;
return goog.object.get(o__35339__auto__,"_LT_standard_body_GT_");
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
var args__25872__auto__ = [];
var len__25865__auto___35361 = arguments.length;
var i__25866__auto___35362 = (0);
while(true){
if((i__25866__auto___35362 < len__25865__auto___35361)){
args__25872__auto__.push((arguments[i__25866__auto___35362]));

var G__35363 = (i__25866__auto___35362 + (1));
i__25866__auto___35362 = G__35363;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq35360){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35360));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__25872__auto__ = [];
var len__25865__auto___35365 = arguments.length;
var i__25866__auto___35366 = (0);
while(true){
if((i__25866__auto___35366 < len__25865__auto___35365)){
args__25872__auto__.push((arguments[i__25866__auto___35366]));

var G__35367 = (i__25866__auto___35366 + (1));
i__25866__auto___35366 = G__35367;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq35364){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35364));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__25872__auto__ = [];
var len__25865__auto___35369 = arguments.length;
var i__25866__auto___35370 = (0);
while(true){
if((i__25866__auto___35370 < len__25865__auto___35369)){
args__25872__auto__.push((arguments[i__25866__auto___35370]));

var G__35371 = (i__25866__auto___35370 + (1));
i__25866__auto___35370 = G__35371;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq35368){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35368));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__25872__auto__ = [];
var len__25865__auto___35373 = arguments.length;
var i__25866__auto___35374 = (0);
while(true){
if((i__25866__auto___35374 < len__25865__auto___35373)){
args__25872__auto__.push((arguments[i__25866__auto___35374]));

var G__35375 = (i__25866__auto___35374 + (1));
i__25866__auto___35374 = G__35375;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq35372){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35372));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__25872__auto__ = [];
var len__25865__auto___35377 = arguments.length;
var i__25866__auto___35378 = (0);
while(true){
if((i__25866__auto___35378 < len__25865__auto___35377)){
args__25872__auto__.push((arguments[i__25866__auto___35378]));

var G__35379 = (i__25866__auto___35378 + (1));
i__25866__auto___35378 = G__35379;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq35376){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35376));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__25872__auto__ = [];
var len__25865__auto___35381 = arguments.length;
var i__25866__auto___35382 = (0);
while(true){
if((i__25866__auto___35382 < len__25865__auto___35381)){
args__25872__auto__.push((arguments[i__25866__auto___35382]));

var G__35383 = (i__25866__auto___35382 + (1));
i__25866__auto___35382 = G__35383;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq35380){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35380));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__25872__auto__ = [];
var len__25865__auto___35385 = arguments.length;
var i__25866__auto___35386 = (0);
while(true){
if((i__25866__auto___35386 < len__25865__auto___35385)){
args__25872__auto__.push((arguments[i__25866__auto___35386]));

var G__35387 = (i__25866__auto___35386 + (1));
i__25866__auto___35386 = G__35387;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq35384){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35384));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__25872__auto__ = [];
var len__25865__auto___35395 = arguments.length;
var i__25866__auto___35396 = (0);
while(true){
if((i__25866__auto___35396 < len__25865__auto___35395)){
args__25872__auto__.push((arguments[i__25866__auto___35396]));

var G__35397 = (i__25866__auto___35396 + (1));
i__25866__auto___35396 = G__35397;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__35391){
var vec__35392 = p__35391;
var state_override = cljs.core.nth.call(null,vec__35392,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__35392,state_override){
return (function (p1__35388_SHARP_){
return cljs.core.merge.call(null,p1__35388_SHARP_,state_override);
});})(vec__35392,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq35389){
var G__35390 = cljs.core.first.call(null,seq35389);
var seq35389__$1 = cljs.core.next.call(null,seq35389);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__35390,seq35389__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__25872__auto__ = [];
var len__25865__auto___35399 = arguments.length;
var i__25866__auto___35400 = (0);
while(true){
if((i__25866__auto___35400 < len__25865__auto___35399)){
args__25872__auto__.push((arguments[i__25866__auto___35400]));

var G__35401 = (i__25866__auto___35400 + (1));
i__25866__auto___35400 = G__35401;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq35398){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35398));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__25872__auto__ = [];
var len__25865__auto___35404 = arguments.length;
var i__25866__auto___35405 = (0);
while(true){
if((i__25866__auto___35405 < len__25865__auto___35404)){
args__25872__auto__.push((arguments[i__25866__auto___35405]));

var G__35406 = (i__25866__auto___35405 + (1));
i__25866__auto___35405 = G__35406;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq35402){
var G__35403 = cljs.core.first.call(null,seq35402);
var seq35402__$1 = cljs.core.next.call(null,seq35402);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__35403,seq35402__$1);
});


//# sourceMappingURL=format.js.map?rel=1481854542933