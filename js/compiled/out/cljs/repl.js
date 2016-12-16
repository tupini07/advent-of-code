// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32310){
var map__32335 = p__32310;
var map__32335__$1 = ((((!((map__32335 == null)))?((((map__32335.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32335.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32335):map__32335);
var m = map__32335__$1;
var n = cljs.core.get.call(null,map__32335__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__32335__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32337_32359 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32338_32360 = null;
var count__32339_32361 = (0);
var i__32340_32362 = (0);
while(true){
if((i__32340_32362 < count__32339_32361)){
var f_32363 = cljs.core._nth.call(null,chunk__32338_32360,i__32340_32362);
cljs.core.println.call(null,"  ",f_32363);

var G__32364 = seq__32337_32359;
var G__32365 = chunk__32338_32360;
var G__32366 = count__32339_32361;
var G__32367 = (i__32340_32362 + (1));
seq__32337_32359 = G__32364;
chunk__32338_32360 = G__32365;
count__32339_32361 = G__32366;
i__32340_32362 = G__32367;
continue;
} else {
var temp__4657__auto___32368 = cljs.core.seq.call(null,seq__32337_32359);
if(temp__4657__auto___32368){
var seq__32337_32369__$1 = temp__4657__auto___32368;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32337_32369__$1)){
var c__25601__auto___32370 = cljs.core.chunk_first.call(null,seq__32337_32369__$1);
var G__32371 = cljs.core.chunk_rest.call(null,seq__32337_32369__$1);
var G__32372 = c__25601__auto___32370;
var G__32373 = cljs.core.count.call(null,c__25601__auto___32370);
var G__32374 = (0);
seq__32337_32359 = G__32371;
chunk__32338_32360 = G__32372;
count__32339_32361 = G__32373;
i__32340_32362 = G__32374;
continue;
} else {
var f_32375 = cljs.core.first.call(null,seq__32337_32369__$1);
cljs.core.println.call(null,"  ",f_32375);

var G__32376 = cljs.core.next.call(null,seq__32337_32369__$1);
var G__32377 = null;
var G__32378 = (0);
var G__32379 = (0);
seq__32337_32359 = G__32376;
chunk__32338_32360 = G__32377;
count__32339_32361 = G__32378;
i__32340_32362 = G__32379;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32380 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24790__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32380);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32380)))?cljs.core.second.call(null,arglists_32380):arglists_32380));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32341_32381 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32342_32382 = null;
var count__32343_32383 = (0);
var i__32344_32384 = (0);
while(true){
if((i__32344_32384 < count__32343_32383)){
var vec__32345_32385 = cljs.core._nth.call(null,chunk__32342_32382,i__32344_32384);
var name_32386 = cljs.core.nth.call(null,vec__32345_32385,(0),null);
var map__32348_32387 = cljs.core.nth.call(null,vec__32345_32385,(1),null);
var map__32348_32388__$1 = ((((!((map__32348_32387 == null)))?((((map__32348_32387.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32348_32387.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32348_32387):map__32348_32387);
var doc_32389 = cljs.core.get.call(null,map__32348_32388__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32390 = cljs.core.get.call(null,map__32348_32388__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32386);

cljs.core.println.call(null," ",arglists_32390);

if(cljs.core.truth_(doc_32389)){
cljs.core.println.call(null," ",doc_32389);
} else {
}

var G__32391 = seq__32341_32381;
var G__32392 = chunk__32342_32382;
var G__32393 = count__32343_32383;
var G__32394 = (i__32344_32384 + (1));
seq__32341_32381 = G__32391;
chunk__32342_32382 = G__32392;
count__32343_32383 = G__32393;
i__32344_32384 = G__32394;
continue;
} else {
var temp__4657__auto___32395 = cljs.core.seq.call(null,seq__32341_32381);
if(temp__4657__auto___32395){
var seq__32341_32396__$1 = temp__4657__auto___32395;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32341_32396__$1)){
var c__25601__auto___32397 = cljs.core.chunk_first.call(null,seq__32341_32396__$1);
var G__32398 = cljs.core.chunk_rest.call(null,seq__32341_32396__$1);
var G__32399 = c__25601__auto___32397;
var G__32400 = cljs.core.count.call(null,c__25601__auto___32397);
var G__32401 = (0);
seq__32341_32381 = G__32398;
chunk__32342_32382 = G__32399;
count__32343_32383 = G__32400;
i__32344_32384 = G__32401;
continue;
} else {
var vec__32350_32402 = cljs.core.first.call(null,seq__32341_32396__$1);
var name_32403 = cljs.core.nth.call(null,vec__32350_32402,(0),null);
var map__32353_32404 = cljs.core.nth.call(null,vec__32350_32402,(1),null);
var map__32353_32405__$1 = ((((!((map__32353_32404 == null)))?((((map__32353_32404.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32353_32404.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32353_32404):map__32353_32404);
var doc_32406 = cljs.core.get.call(null,map__32353_32405__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32407 = cljs.core.get.call(null,map__32353_32405__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32403);

cljs.core.println.call(null," ",arglists_32407);

if(cljs.core.truth_(doc_32406)){
cljs.core.println.call(null," ",doc_32406);
} else {
}

var G__32408 = cljs.core.next.call(null,seq__32341_32396__$1);
var G__32409 = null;
var G__32410 = (0);
var G__32411 = (0);
seq__32341_32381 = G__32408;
chunk__32342_32382 = G__32409;
count__32343_32383 = G__32410;
i__32344_32384 = G__32411;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__32355 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32356 = null;
var count__32357 = (0);
var i__32358 = (0);
while(true){
if((i__32358 < count__32357)){
var role = cljs.core._nth.call(null,chunk__32356,i__32358);
var temp__4657__auto___32412__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___32412__$1)){
var spec_32413 = temp__4657__auto___32412__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_32413));
} else {
}

var G__32414 = seq__32355;
var G__32415 = chunk__32356;
var G__32416 = count__32357;
var G__32417 = (i__32358 + (1));
seq__32355 = G__32414;
chunk__32356 = G__32415;
count__32357 = G__32416;
i__32358 = G__32417;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__32355);
if(temp__4657__auto____$1){
var seq__32355__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32355__$1)){
var c__25601__auto__ = cljs.core.chunk_first.call(null,seq__32355__$1);
var G__32418 = cljs.core.chunk_rest.call(null,seq__32355__$1);
var G__32419 = c__25601__auto__;
var G__32420 = cljs.core.count.call(null,c__25601__auto__);
var G__32421 = (0);
seq__32355 = G__32418;
chunk__32356 = G__32419;
count__32357 = G__32420;
i__32358 = G__32421;
continue;
} else {
var role = cljs.core.first.call(null,seq__32355__$1);
var temp__4657__auto___32422__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___32422__$2)){
var spec_32423 = temp__4657__auto___32422__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_32423));
} else {
}

var G__32424 = cljs.core.next.call(null,seq__32355__$1);
var G__32425 = null;
var G__32426 = (0);
var G__32427 = (0);
seq__32355 = G__32424;
chunk__32356 = G__32425;
count__32357 = G__32426;
i__32358 = G__32427;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1481854536153