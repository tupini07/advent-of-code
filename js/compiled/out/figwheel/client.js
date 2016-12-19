// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args34464 = [];
var len__25866__auto___34467 = arguments.length;
var i__25867__auto___34468 = (0);
while(true){
if((i__25867__auto___34468 < len__25866__auto___34467)){
args34464.push((arguments[i__25867__auto___34468]));

var G__34469 = (i__25867__auto___34468 + (1));
i__25867__auto___34468 = G__34469;
continue;
} else {
}
break;
}

var G__34466 = args34464.length;
switch (G__34466) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34464.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__25873__auto__ = [];
var len__25866__auto___34472 = arguments.length;
var i__25867__auto___34473 = (0);
while(true){
if((i__25867__auto___34473 < len__25866__auto___34472)){
args__25873__auto__.push((arguments[i__25867__auto___34473]));

var G__34474 = (i__25867__auto___34473 + (1));
i__25867__auto___34473 = G__34474;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq34471){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34471));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25873__auto__ = [];
var len__25866__auto___34476 = arguments.length;
var i__25867__auto___34477 = (0);
while(true){
if((i__25867__auto___34477 < len__25866__auto___34476)){
args__25873__auto__.push((arguments[i__25867__auto___34477]));

var G__34478 = (i__25867__auto___34477 + (1));
i__25867__auto___34477 = G__34478;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq34475){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34475));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__34479 = cljs.core._EQ_;
var expr__34480 = (function (){var or__24791__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e34483){if((e34483 instanceof Error)){
var e = e34483;
return false;
} else {
throw e34483;

}
}})();
if(cljs.core.truth_(or__24791__auto__)){
return or__24791__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__34479.call(null,"true",expr__34480))){
return true;
} else {
if(cljs.core.truth_(pred__34479.call(null,"false",expr__34480))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__34480)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e34485){if((e34485 instanceof Error)){
var e = e34485;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e34485;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__34486){
var map__34489 = p__34486;
var map__34489__$1 = ((((!((map__34489 == null)))?((((map__34489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34489):map__34489);
var message = cljs.core.get.call(null,map__34489__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__34489__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24791__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24791__auto__)){
return or__24791__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24779__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24779__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24779__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__26964__auto___34651 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto___34651,ch){
return (function (){
var f__26965__auto__ = (function (){var switch__26851__auto__ = ((function (c__26964__auto___34651,ch){
return (function (state_34620){
var state_val_34621 = (state_34620[(1)]);
if((state_val_34621 === (7))){
var inst_34616 = (state_34620[(2)]);
var state_34620__$1 = state_34620;
var statearr_34622_34652 = state_34620__$1;
(statearr_34622_34652[(2)] = inst_34616);

(statearr_34622_34652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34621 === (1))){
var state_34620__$1 = state_34620;
var statearr_34623_34653 = state_34620__$1;
(statearr_34623_34653[(2)] = null);

(statearr_34623_34653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34621 === (4))){
var inst_34573 = (state_34620[(7)]);
var inst_34573__$1 = (state_34620[(2)]);
var state_34620__$1 = (function (){var statearr_34624 = state_34620;
(statearr_34624[(7)] = inst_34573__$1);

return statearr_34624;
})();
if(cljs.core.truth_(inst_34573__$1)){
var statearr_34625_34654 = state_34620__$1;
(statearr_34625_34654[(1)] = (5));

} else {
var statearr_34626_34655 = state_34620__$1;
(statearr_34626_34655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34621 === (15))){
var inst_34580 = (state_34620[(8)]);
var inst_34595 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34580);
var inst_34596 = cljs.core.first.call(null,inst_34595);
var inst_34597 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_34596);
var inst_34598 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_34597)].join('');
var inst_34599 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_34598);
var state_34620__$1 = state_34620;
var statearr_34627_34656 = state_34620__$1;
(statearr_34627_34656[(2)] = inst_34599);

(statearr_34627_34656[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34621 === (13))){
var inst_34604 = (state_34620[(2)]);
var state_34620__$1 = state_34620;
var statearr_34628_34657 = state_34620__$1;
(statearr_34628_34657[(2)] = inst_34604);

(statearr_34628_34657[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34621 === (6))){
var state_34620__$1 = state_34620;
var statearr_34629_34658 = state_34620__$1;
(statearr_34629_34658[(2)] = null);

(statearr_34629_34658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34621 === (17))){
var inst_34602 = (state_34620[(2)]);
var state_34620__$1 = state_34620;
var statearr_34630_34659 = state_34620__$1;
(statearr_34630_34659[(2)] = inst_34602);

(statearr_34630_34659[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34621 === (3))){
var inst_34618 = (state_34620[(2)]);
var state_34620__$1 = state_34620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34620__$1,inst_34618);
} else {
if((state_val_34621 === (12))){
var inst_34579 = (state_34620[(9)]);
var inst_34593 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_34579,opts);
var state_34620__$1 = state_34620;
if(cljs.core.truth_(inst_34593)){
var statearr_34631_34660 = state_34620__$1;
(statearr_34631_34660[(1)] = (15));

} else {
var statearr_34632_34661 = state_34620__$1;
(statearr_34632_34661[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34621 === (2))){
var state_34620__$1 = state_34620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34620__$1,(4),ch);
} else {
if((state_val_34621 === (11))){
var inst_34580 = (state_34620[(8)]);
var inst_34585 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34586 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_34580);
var inst_34587 = cljs.core.async.timeout.call(null,(1000));
var inst_34588 = [inst_34586,inst_34587];
var inst_34589 = (new cljs.core.PersistentVector(null,2,(5),inst_34585,inst_34588,null));
var state_34620__$1 = state_34620;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34620__$1,(14),inst_34589);
} else {
if((state_val_34621 === (9))){
var inst_34580 = (state_34620[(8)]);
var inst_34606 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_34607 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34580);
var inst_34608 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34607);
var inst_34609 = [cljs.core.str("Not loading: "),cljs.core.str(inst_34608)].join('');
var inst_34610 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_34609);
var state_34620__$1 = (function (){var statearr_34633 = state_34620;
(statearr_34633[(10)] = inst_34606);

return statearr_34633;
})();
var statearr_34634_34662 = state_34620__$1;
(statearr_34634_34662[(2)] = inst_34610);

(statearr_34634_34662[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34621 === (5))){
var inst_34573 = (state_34620[(7)]);
var inst_34575 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34576 = (new cljs.core.PersistentArrayMap(null,2,inst_34575,null));
var inst_34577 = (new cljs.core.PersistentHashSet(null,inst_34576,null));
var inst_34578 = figwheel.client.focus_msgs.call(null,inst_34577,inst_34573);
var inst_34579 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_34578);
var inst_34580 = cljs.core.first.call(null,inst_34578);
var inst_34581 = figwheel.client.autoload_QMARK_.call(null);
var state_34620__$1 = (function (){var statearr_34635 = state_34620;
(statearr_34635[(9)] = inst_34579);

(statearr_34635[(8)] = inst_34580);

return statearr_34635;
})();
if(cljs.core.truth_(inst_34581)){
var statearr_34636_34663 = state_34620__$1;
(statearr_34636_34663[(1)] = (8));

} else {
var statearr_34637_34664 = state_34620__$1;
(statearr_34637_34664[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34621 === (14))){
var inst_34591 = (state_34620[(2)]);
var state_34620__$1 = state_34620;
var statearr_34638_34665 = state_34620__$1;
(statearr_34638_34665[(2)] = inst_34591);

(statearr_34638_34665[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34621 === (16))){
var state_34620__$1 = state_34620;
var statearr_34639_34666 = state_34620__$1;
(statearr_34639_34666[(2)] = null);

(statearr_34639_34666[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34621 === (10))){
var inst_34612 = (state_34620[(2)]);
var state_34620__$1 = (function (){var statearr_34640 = state_34620;
(statearr_34640[(11)] = inst_34612);

return statearr_34640;
})();
var statearr_34641_34667 = state_34620__$1;
(statearr_34641_34667[(2)] = null);

(statearr_34641_34667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34621 === (8))){
var inst_34579 = (state_34620[(9)]);
var inst_34583 = figwheel.client.reload_file_state_QMARK_.call(null,inst_34579,opts);
var state_34620__$1 = state_34620;
if(cljs.core.truth_(inst_34583)){
var statearr_34642_34668 = state_34620__$1;
(statearr_34642_34668[(1)] = (11));

} else {
var statearr_34643_34669 = state_34620__$1;
(statearr_34643_34669[(1)] = (12));

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
});})(c__26964__auto___34651,ch))
;
return ((function (switch__26851__auto__,c__26964__auto___34651,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26852__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26852__auto____0 = (function (){
var statearr_34647 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34647[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26852__auto__);

(statearr_34647[(1)] = (1));

return statearr_34647;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26852__auto____1 = (function (state_34620){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_34620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e34648){if((e34648 instanceof Object)){
var ex__26855__auto__ = e34648;
var statearr_34649_34670 = state_34620;
(statearr_34649_34670[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34671 = state_34620;
state_34620 = G__34671;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26852__auto__ = function(state_34620){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26852__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26852__auto____1.call(this,state_34620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26852__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26852__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26964__auto___34651,ch))
})();
var state__26966__auto__ = (function (){var statearr_34650 = f__26965__auto__.call(null);
(statearr_34650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26964__auto___34651);

return statearr_34650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto___34651,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__34672_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34672_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_34675 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_34675){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e34674){if((e34674 instanceof Error)){
var e = e34674;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_34675], null));
} else {
var e = e34674;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_34675))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__34676){
var map__34685 = p__34676;
var map__34685__$1 = ((((!((map__34685 == null)))?((((map__34685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34685):map__34685);
var opts = map__34685__$1;
var build_id = cljs.core.get.call(null,map__34685__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__34685,map__34685__$1,opts,build_id){
return (function (p__34687){
var vec__34688 = p__34687;
var seq__34689 = cljs.core.seq.call(null,vec__34688);
var first__34690 = cljs.core.first.call(null,seq__34689);
var seq__34689__$1 = cljs.core.next.call(null,seq__34689);
var map__34691 = first__34690;
var map__34691__$1 = ((((!((map__34691 == null)))?((((map__34691.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34691.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34691):map__34691);
var msg = map__34691__$1;
var msg_name = cljs.core.get.call(null,map__34691__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34689__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__34688,seq__34689,first__34690,seq__34689__$1,map__34691,map__34691__$1,msg,msg_name,_,map__34685,map__34685__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__34688,seq__34689,first__34690,seq__34689__$1,map__34691,map__34691__$1,msg,msg_name,_,map__34685,map__34685__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__34685,map__34685__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__34699){
var vec__34700 = p__34699;
var seq__34701 = cljs.core.seq.call(null,vec__34700);
var first__34702 = cljs.core.first.call(null,seq__34701);
var seq__34701__$1 = cljs.core.next.call(null,seq__34701);
var map__34703 = first__34702;
var map__34703__$1 = ((((!((map__34703 == null)))?((((map__34703.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34703.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34703):map__34703);
var msg = map__34703__$1;
var msg_name = cljs.core.get.call(null,map__34703__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34701__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__34705){
var map__34717 = p__34705;
var map__34717__$1 = ((((!((map__34717 == null)))?((((map__34717.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34717.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34717):map__34717);
var on_compile_warning = cljs.core.get.call(null,map__34717__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__34717__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__34717,map__34717__$1,on_compile_warning,on_compile_fail){
return (function (p__34719){
var vec__34720 = p__34719;
var seq__34721 = cljs.core.seq.call(null,vec__34720);
var first__34722 = cljs.core.first.call(null,seq__34721);
var seq__34721__$1 = cljs.core.next.call(null,seq__34721);
var map__34723 = first__34722;
var map__34723__$1 = ((((!((map__34723 == null)))?((((map__34723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34723):map__34723);
var msg = map__34723__$1;
var msg_name = cljs.core.get.call(null,map__34723__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34721__$1;
var pred__34725 = cljs.core._EQ_;
var expr__34726 = msg_name;
if(cljs.core.truth_(pred__34725.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34726))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34725.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34726))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__34717,map__34717__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__26964__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26965__auto__ = (function (){var switch__26851__auto__ = ((function (c__26964__auto__,msg_hist,msg_names,msg){
return (function (state_34954){
var state_val_34955 = (state_34954[(1)]);
if((state_val_34955 === (7))){
var inst_34874 = (state_34954[(2)]);
var state_34954__$1 = state_34954;
if(cljs.core.truth_(inst_34874)){
var statearr_34956_35006 = state_34954__$1;
(statearr_34956_35006[(1)] = (8));

} else {
var statearr_34957_35007 = state_34954__$1;
(statearr_34957_35007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34955 === (20))){
var inst_34948 = (state_34954[(2)]);
var state_34954__$1 = state_34954;
var statearr_34958_35008 = state_34954__$1;
(statearr_34958_35008[(2)] = inst_34948);

(statearr_34958_35008[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34955 === (27))){
var inst_34944 = (state_34954[(2)]);
var state_34954__$1 = state_34954;
var statearr_34959_35009 = state_34954__$1;
(statearr_34959_35009[(2)] = inst_34944);

(statearr_34959_35009[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34955 === (1))){
var inst_34867 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_34954__$1 = state_34954;
if(cljs.core.truth_(inst_34867)){
var statearr_34960_35010 = state_34954__$1;
(statearr_34960_35010[(1)] = (2));

} else {
var statearr_34961_35011 = state_34954__$1;
(statearr_34961_35011[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34955 === (24))){
var inst_34946 = (state_34954[(2)]);
var state_34954__$1 = state_34954;
var statearr_34962_35012 = state_34954__$1;
(statearr_34962_35012[(2)] = inst_34946);

(statearr_34962_35012[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34955 === (4))){
var inst_34952 = (state_34954[(2)]);
var state_34954__$1 = state_34954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34954__$1,inst_34952);
} else {
if((state_val_34955 === (15))){
var inst_34950 = (state_34954[(2)]);
var state_34954__$1 = state_34954;
var statearr_34963_35013 = state_34954__$1;
(statearr_34963_35013[(2)] = inst_34950);

(statearr_34963_35013[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34955 === (21))){
var inst_34903 = (state_34954[(2)]);
var inst_34904 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34905 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34904);
var state_34954__$1 = (function (){var statearr_34964 = state_34954;
(statearr_34964[(7)] = inst_34903);

return statearr_34964;
})();
var statearr_34965_35014 = state_34954__$1;
(statearr_34965_35014[(2)] = inst_34905);

(statearr_34965_35014[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34955 === (31))){
var inst_34933 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_34954__$1 = state_34954;
if(cljs.core.truth_(inst_34933)){
var statearr_34966_35015 = state_34954__$1;
(statearr_34966_35015[(1)] = (34));

} else {
var statearr_34967_35016 = state_34954__$1;
(statearr_34967_35016[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34955 === (32))){
var inst_34942 = (state_34954[(2)]);
var state_34954__$1 = state_34954;
var statearr_34968_35017 = state_34954__$1;
(statearr_34968_35017[(2)] = inst_34942);

(statearr_34968_35017[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34955 === (33))){
var inst_34929 = (state_34954[(2)]);
var inst_34930 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34931 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34930);
var state_34954__$1 = (function (){var statearr_34969 = state_34954;
(statearr_34969[(8)] = inst_34929);

return statearr_34969;
})();
var statearr_34970_35018 = state_34954__$1;
(statearr_34970_35018[(2)] = inst_34931);

(statearr_34970_35018[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34955 === (13))){
var inst_34888 = figwheel.client.heads_up.clear.call(null);
var state_34954__$1 = state_34954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34954__$1,(16),inst_34888);
} else {
if((state_val_34955 === (22))){
var inst_34909 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34910 = figwheel.client.heads_up.append_warning_message.call(null,inst_34909);
var state_34954__$1 = state_34954;
var statearr_34971_35019 = state_34954__$1;
(statearr_34971_35019[(2)] = inst_34910);

(statearr_34971_35019[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34955 === (36))){
var inst_34940 = (state_34954[(2)]);
var state_34954__$1 = state_34954;
var statearr_34972_35020 = state_34954__$1;
(statearr_34972_35020[(2)] = inst_34940);

(statearr_34972_35020[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34955 === (29))){
var inst_34920 = (state_34954[(2)]);
var inst_34921 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34922 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34921);
var state_34954__$1 = (function (){var statearr_34973 = state_34954;
(statearr_34973[(9)] = inst_34920);

return statearr_34973;
})();
var statearr_34974_35021 = state_34954__$1;
(statearr_34974_35021[(2)] = inst_34922);

(statearr_34974_35021[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34955 === (6))){
var inst_34869 = (state_34954[(10)]);
var state_34954__$1 = state_34954;
var statearr_34975_35022 = state_34954__$1;
(statearr_34975_35022[(2)] = inst_34869);

(statearr_34975_35022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34955 === (28))){
var inst_34916 = (state_34954[(2)]);
var inst_34917 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34918 = figwheel.client.heads_up.display_warning.call(null,inst_34917);
var state_34954__$1 = (function (){var statearr_34976 = state_34954;
(statearr_34976[(11)] = inst_34916);

return statearr_34976;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34954__$1,(29),inst_34918);
} else {
if((state_val_34955 === (25))){
var inst_34914 = figwheel.client.heads_up.clear.call(null);
var state_34954__$1 = state_34954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34954__$1,(28),inst_34914);
} else {
if((state_val_34955 === (34))){
var inst_34935 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34954__$1 = state_34954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34954__$1,(37),inst_34935);
} else {
if((state_val_34955 === (17))){
var inst_34894 = (state_34954[(2)]);
var inst_34895 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34896 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34895);
var state_34954__$1 = (function (){var statearr_34977 = state_34954;
(statearr_34977[(12)] = inst_34894);

return statearr_34977;
})();
var statearr_34978_35023 = state_34954__$1;
(statearr_34978_35023[(2)] = inst_34896);

(statearr_34978_35023[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34955 === (3))){
var inst_34886 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_34954__$1 = state_34954;
if(cljs.core.truth_(inst_34886)){
var statearr_34979_35024 = state_34954__$1;
(statearr_34979_35024[(1)] = (13));

} else {
var statearr_34980_35025 = state_34954__$1;
(statearr_34980_35025[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34955 === (12))){
var inst_34882 = (state_34954[(2)]);
var state_34954__$1 = state_34954;
var statearr_34981_35026 = state_34954__$1;
(statearr_34981_35026[(2)] = inst_34882);

(statearr_34981_35026[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34955 === (2))){
var inst_34869 = (state_34954[(10)]);
var inst_34869__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_34954__$1 = (function (){var statearr_34982 = state_34954;
(statearr_34982[(10)] = inst_34869__$1);

return statearr_34982;
})();
if(cljs.core.truth_(inst_34869__$1)){
var statearr_34983_35027 = state_34954__$1;
(statearr_34983_35027[(1)] = (5));

} else {
var statearr_34984_35028 = state_34954__$1;
(statearr_34984_35028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34955 === (23))){
var inst_34912 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_34954__$1 = state_34954;
if(cljs.core.truth_(inst_34912)){
var statearr_34985_35029 = state_34954__$1;
(statearr_34985_35029[(1)] = (25));

} else {
var statearr_34986_35030 = state_34954__$1;
(statearr_34986_35030[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34955 === (35))){
var state_34954__$1 = state_34954;
var statearr_34987_35031 = state_34954__$1;
(statearr_34987_35031[(2)] = null);

(statearr_34987_35031[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34955 === (19))){
var inst_34907 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_34954__$1 = state_34954;
if(cljs.core.truth_(inst_34907)){
var statearr_34988_35032 = state_34954__$1;
(statearr_34988_35032[(1)] = (22));

} else {
var statearr_34989_35033 = state_34954__$1;
(statearr_34989_35033[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34955 === (11))){
var inst_34878 = (state_34954[(2)]);
var state_34954__$1 = state_34954;
var statearr_34990_35034 = state_34954__$1;
(statearr_34990_35034[(2)] = inst_34878);

(statearr_34990_35034[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34955 === (9))){
var inst_34880 = figwheel.client.heads_up.clear.call(null);
var state_34954__$1 = state_34954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34954__$1,(12),inst_34880);
} else {
if((state_val_34955 === (5))){
var inst_34871 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_34954__$1 = state_34954;
var statearr_34991_35035 = state_34954__$1;
(statearr_34991_35035[(2)] = inst_34871);

(statearr_34991_35035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34955 === (14))){
var inst_34898 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_34954__$1 = state_34954;
if(cljs.core.truth_(inst_34898)){
var statearr_34992_35036 = state_34954__$1;
(statearr_34992_35036[(1)] = (18));

} else {
var statearr_34993_35037 = state_34954__$1;
(statearr_34993_35037[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34955 === (26))){
var inst_34924 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_34954__$1 = state_34954;
if(cljs.core.truth_(inst_34924)){
var statearr_34994_35038 = state_34954__$1;
(statearr_34994_35038[(1)] = (30));

} else {
var statearr_34995_35039 = state_34954__$1;
(statearr_34995_35039[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34955 === (16))){
var inst_34890 = (state_34954[(2)]);
var inst_34891 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34892 = figwheel.client.heads_up.display_exception.call(null,inst_34891);
var state_34954__$1 = (function (){var statearr_34996 = state_34954;
(statearr_34996[(13)] = inst_34890);

return statearr_34996;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34954__$1,(17),inst_34892);
} else {
if((state_val_34955 === (30))){
var inst_34926 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34927 = figwheel.client.heads_up.display_warning.call(null,inst_34926);
var state_34954__$1 = state_34954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34954__$1,(33),inst_34927);
} else {
if((state_val_34955 === (10))){
var inst_34884 = (state_34954[(2)]);
var state_34954__$1 = state_34954;
var statearr_34997_35040 = state_34954__$1;
(statearr_34997_35040[(2)] = inst_34884);

(statearr_34997_35040[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34955 === (18))){
var inst_34900 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34901 = figwheel.client.heads_up.display_exception.call(null,inst_34900);
var state_34954__$1 = state_34954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34954__$1,(21),inst_34901);
} else {
if((state_val_34955 === (37))){
var inst_34937 = (state_34954[(2)]);
var state_34954__$1 = state_34954;
var statearr_34998_35041 = state_34954__$1;
(statearr_34998_35041[(2)] = inst_34937);

(statearr_34998_35041[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34955 === (8))){
var inst_34876 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34954__$1 = state_34954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34954__$1,(11),inst_34876);
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
});})(c__26964__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26851__auto__,c__26964__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto____0 = (function (){
var statearr_35002 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35002[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto__);

(statearr_35002[(1)] = (1));

return statearr_35002;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto____1 = (function (state_34954){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_34954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e35003){if((e35003 instanceof Object)){
var ex__26855__auto__ = e35003;
var statearr_35004_35042 = state_34954;
(statearr_35004_35042[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35043 = state_34954;
state_34954 = G__35043;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto__ = function(state_34954){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto____1.call(this,state_34954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26964__auto__,msg_hist,msg_names,msg))
})();
var state__26966__auto__ = (function (){var statearr_35005 = f__26965__auto__.call(null);
(statearr_35005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26964__auto__);

return statearr_35005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto__,msg_hist,msg_names,msg))
);

return c__26964__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26964__auto___35106 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto___35106,ch){
return (function (){
var f__26965__auto__ = (function (){var switch__26851__auto__ = ((function (c__26964__auto___35106,ch){
return (function (state_35089){
var state_val_35090 = (state_35089[(1)]);
if((state_val_35090 === (1))){
var state_35089__$1 = state_35089;
var statearr_35091_35107 = state_35089__$1;
(statearr_35091_35107[(2)] = null);

(statearr_35091_35107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (2))){
var state_35089__$1 = state_35089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35089__$1,(4),ch);
} else {
if((state_val_35090 === (3))){
var inst_35087 = (state_35089[(2)]);
var state_35089__$1 = state_35089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35089__$1,inst_35087);
} else {
if((state_val_35090 === (4))){
var inst_35077 = (state_35089[(7)]);
var inst_35077__$1 = (state_35089[(2)]);
var state_35089__$1 = (function (){var statearr_35092 = state_35089;
(statearr_35092[(7)] = inst_35077__$1);

return statearr_35092;
})();
if(cljs.core.truth_(inst_35077__$1)){
var statearr_35093_35108 = state_35089__$1;
(statearr_35093_35108[(1)] = (5));

} else {
var statearr_35094_35109 = state_35089__$1;
(statearr_35094_35109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (5))){
var inst_35077 = (state_35089[(7)]);
var inst_35079 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35077);
var state_35089__$1 = state_35089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35089__$1,(8),inst_35079);
} else {
if((state_val_35090 === (6))){
var state_35089__$1 = state_35089;
var statearr_35095_35110 = state_35089__$1;
(statearr_35095_35110[(2)] = null);

(statearr_35095_35110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (7))){
var inst_35085 = (state_35089[(2)]);
var state_35089__$1 = state_35089;
var statearr_35096_35111 = state_35089__$1;
(statearr_35096_35111[(2)] = inst_35085);

(statearr_35096_35111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (8))){
var inst_35081 = (state_35089[(2)]);
var state_35089__$1 = (function (){var statearr_35097 = state_35089;
(statearr_35097[(8)] = inst_35081);

return statearr_35097;
})();
var statearr_35098_35112 = state_35089__$1;
(statearr_35098_35112[(2)] = null);

(statearr_35098_35112[(1)] = (2));


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
});})(c__26964__auto___35106,ch))
;
return ((function (switch__26851__auto__,c__26964__auto___35106,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26852__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26852__auto____0 = (function (){
var statearr_35102 = [null,null,null,null,null,null,null,null,null];
(statearr_35102[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26852__auto__);

(statearr_35102[(1)] = (1));

return statearr_35102;
});
var figwheel$client$heads_up_plugin_$_state_machine__26852__auto____1 = (function (state_35089){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_35089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e35103){if((e35103 instanceof Object)){
var ex__26855__auto__ = e35103;
var statearr_35104_35113 = state_35089;
(statearr_35104_35113[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35114 = state_35089;
state_35089 = G__35114;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26852__auto__ = function(state_35089){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26852__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26852__auto____1.call(this,state_35089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26852__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26852__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26964__auto___35106,ch))
})();
var state__26966__auto__ = (function (){var statearr_35105 = f__26965__auto__.call(null);
(statearr_35105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26964__auto___35106);

return statearr_35105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto___35106,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26964__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto__){
return (function (){
var f__26965__auto__ = (function (){var switch__26851__auto__ = ((function (c__26964__auto__){
return (function (state_35135){
var state_val_35136 = (state_35135[(1)]);
if((state_val_35136 === (1))){
var inst_35130 = cljs.core.async.timeout.call(null,(3000));
var state_35135__$1 = state_35135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35135__$1,(2),inst_35130);
} else {
if((state_val_35136 === (2))){
var inst_35132 = (state_35135[(2)]);
var inst_35133 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35135__$1 = (function (){var statearr_35137 = state_35135;
(statearr_35137[(7)] = inst_35132);

return statearr_35137;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35135__$1,inst_35133);
} else {
return null;
}
}
});})(c__26964__auto__))
;
return ((function (switch__26851__auto__,c__26964__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26852__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26852__auto____0 = (function (){
var statearr_35141 = [null,null,null,null,null,null,null,null];
(statearr_35141[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26852__auto__);

(statearr_35141[(1)] = (1));

return statearr_35141;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26852__auto____1 = (function (state_35135){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_35135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e35142){if((e35142 instanceof Object)){
var ex__26855__auto__ = e35142;
var statearr_35143_35145 = state_35135;
(statearr_35143_35145[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35146 = state_35135;
state_35135 = G__35146;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26852__auto__ = function(state_35135){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26852__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26852__auto____1.call(this,state_35135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26852__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26852__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26964__auto__))
})();
var state__26966__auto__ = (function (){var statearr_35144 = f__26965__auto__.call(null);
(statearr_35144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26964__auto__);

return statearr_35144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto__))
);

return c__26964__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26964__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__26965__auto__ = (function (){var switch__26851__auto__ = ((function (c__26964__auto__,figwheel_version,temp__4657__auto__){
return (function (state_35169){
var state_val_35170 = (state_35169[(1)]);
if((state_val_35170 === (1))){
var inst_35163 = cljs.core.async.timeout.call(null,(2000));
var state_35169__$1 = state_35169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35169__$1,(2),inst_35163);
} else {
if((state_val_35170 === (2))){
var inst_35165 = (state_35169[(2)]);
var inst_35166 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_35167 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35166);
var state_35169__$1 = (function (){var statearr_35171 = state_35169;
(statearr_35171[(7)] = inst_35165);

return statearr_35171;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35169__$1,inst_35167);
} else {
return null;
}
}
});})(c__26964__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__26851__auto__,c__26964__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto____0 = (function (){
var statearr_35175 = [null,null,null,null,null,null,null,null];
(statearr_35175[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto__);

(statearr_35175[(1)] = (1));

return statearr_35175;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto____1 = (function (state_35169){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_35169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e35176){if((e35176 instanceof Object)){
var ex__26855__auto__ = e35176;
var statearr_35177_35179 = state_35169;
(statearr_35177_35179[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35180 = state_35169;
state_35169 = G__35180;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto__ = function(state_35169){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto____1.call(this,state_35169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26964__auto__,figwheel_version,temp__4657__auto__))
})();
var state__26966__auto__ = (function (){var statearr_35178 = f__26965__auto__.call(null);
(statearr_35178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26964__auto__);

return statearr_35178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto__,figwheel_version,temp__4657__auto__))
);

return c__26964__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35181){
var map__35185 = p__35181;
var map__35185__$1 = ((((!((map__35185 == null)))?((((map__35185.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35185.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35185):map__35185);
var file = cljs.core.get.call(null,map__35185__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35185__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35185__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35187 = "";
var G__35187__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__35187),cljs.core.str("file "),cljs.core.str(file)].join(''):G__35187);
var G__35187__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__35187__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__35187__$1);
if(cljs.core.truth_((function (){var and__24779__auto__ = line;
if(cljs.core.truth_(and__24779__auto__)){
return column;
} else {
return and__24779__auto__;
}
})())){
return [cljs.core.str(G__35187__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__35187__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35188){
var map__35195 = p__35188;
var map__35195__$1 = ((((!((map__35195 == null)))?((((map__35195.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35195.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35195):map__35195);
var ed = map__35195__$1;
var formatted_exception = cljs.core.get.call(null,map__35195__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__35195__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35195__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35197_35201 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35198_35202 = null;
var count__35199_35203 = (0);
var i__35200_35204 = (0);
while(true){
if((i__35200_35204 < count__35199_35203)){
var msg_35205 = cljs.core._nth.call(null,chunk__35198_35202,i__35200_35204);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35205);

var G__35206 = seq__35197_35201;
var G__35207 = chunk__35198_35202;
var G__35208 = count__35199_35203;
var G__35209 = (i__35200_35204 + (1));
seq__35197_35201 = G__35206;
chunk__35198_35202 = G__35207;
count__35199_35203 = G__35208;
i__35200_35204 = G__35209;
continue;
} else {
var temp__4657__auto___35210 = cljs.core.seq.call(null,seq__35197_35201);
if(temp__4657__auto___35210){
var seq__35197_35211__$1 = temp__4657__auto___35210;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35197_35211__$1)){
var c__25602__auto___35212 = cljs.core.chunk_first.call(null,seq__35197_35211__$1);
var G__35213 = cljs.core.chunk_rest.call(null,seq__35197_35211__$1);
var G__35214 = c__25602__auto___35212;
var G__35215 = cljs.core.count.call(null,c__25602__auto___35212);
var G__35216 = (0);
seq__35197_35201 = G__35213;
chunk__35198_35202 = G__35214;
count__35199_35203 = G__35215;
i__35200_35204 = G__35216;
continue;
} else {
var msg_35217 = cljs.core.first.call(null,seq__35197_35211__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35217);

var G__35218 = cljs.core.next.call(null,seq__35197_35211__$1);
var G__35219 = null;
var G__35220 = (0);
var G__35221 = (0);
seq__35197_35201 = G__35218;
chunk__35198_35202 = G__35219;
count__35199_35203 = G__35220;
i__35200_35204 = G__35221;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35222){
var map__35225 = p__35222;
var map__35225__$1 = ((((!((map__35225 == null)))?((((map__35225.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35225.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35225):map__35225);
var w = map__35225__$1;
var message = cljs.core.get.call(null,map__35225__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources\\public\\js\\compiled\\out\\figwheel\\client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources\\public\\js\\compiled\\out\\figwheel\\client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24779__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24779__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24779__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__35237 = cljs.core.seq.call(null,plugins);
var chunk__35238 = null;
var count__35239 = (0);
var i__35240 = (0);
while(true){
if((i__35240 < count__35239)){
var vec__35241 = cljs.core._nth.call(null,chunk__35238,i__35240);
var k = cljs.core.nth.call(null,vec__35241,(0),null);
var plugin = cljs.core.nth.call(null,vec__35241,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35247 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35237,chunk__35238,count__35239,i__35240,pl_35247,vec__35241,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35247.call(null,msg_hist);
});})(seq__35237,chunk__35238,count__35239,i__35240,pl_35247,vec__35241,k,plugin))
);
} else {
}

var G__35248 = seq__35237;
var G__35249 = chunk__35238;
var G__35250 = count__35239;
var G__35251 = (i__35240 + (1));
seq__35237 = G__35248;
chunk__35238 = G__35249;
count__35239 = G__35250;
i__35240 = G__35251;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35237);
if(temp__4657__auto__){
var seq__35237__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35237__$1)){
var c__25602__auto__ = cljs.core.chunk_first.call(null,seq__35237__$1);
var G__35252 = cljs.core.chunk_rest.call(null,seq__35237__$1);
var G__35253 = c__25602__auto__;
var G__35254 = cljs.core.count.call(null,c__25602__auto__);
var G__35255 = (0);
seq__35237 = G__35252;
chunk__35238 = G__35253;
count__35239 = G__35254;
i__35240 = G__35255;
continue;
} else {
var vec__35244 = cljs.core.first.call(null,seq__35237__$1);
var k = cljs.core.nth.call(null,vec__35244,(0),null);
var plugin = cljs.core.nth.call(null,vec__35244,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35256 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35237,chunk__35238,count__35239,i__35240,pl_35256,vec__35244,k,plugin,seq__35237__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35256.call(null,msg_hist);
});})(seq__35237,chunk__35238,count__35239,i__35240,pl_35256,vec__35244,k,plugin,seq__35237__$1,temp__4657__auto__))
);
} else {
}

var G__35257 = cljs.core.next.call(null,seq__35237__$1);
var G__35258 = null;
var G__35259 = (0);
var G__35260 = (0);
seq__35237 = G__35257;
chunk__35238 = G__35258;
count__35239 = G__35259;
i__35240 = G__35260;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args35261 = [];
var len__25866__auto___35268 = arguments.length;
var i__25867__auto___35269 = (0);
while(true){
if((i__25867__auto___35269 < len__25866__auto___35268)){
args35261.push((arguments[i__25867__auto___35269]));

var G__35270 = (i__25867__auto___35269 + (1));
i__25867__auto___35269 = G__35270;
continue;
} else {
}
break;
}

var G__35263 = args35261.length;
switch (G__35263) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35261.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__35264_35272 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__35265_35273 = null;
var count__35266_35274 = (0);
var i__35267_35275 = (0);
while(true){
if((i__35267_35275 < count__35266_35274)){
var msg_35276 = cljs.core._nth.call(null,chunk__35265_35273,i__35267_35275);
figwheel.client.socket.handle_incoming_message.call(null,msg_35276);

var G__35277 = seq__35264_35272;
var G__35278 = chunk__35265_35273;
var G__35279 = count__35266_35274;
var G__35280 = (i__35267_35275 + (1));
seq__35264_35272 = G__35277;
chunk__35265_35273 = G__35278;
count__35266_35274 = G__35279;
i__35267_35275 = G__35280;
continue;
} else {
var temp__4657__auto___35281 = cljs.core.seq.call(null,seq__35264_35272);
if(temp__4657__auto___35281){
var seq__35264_35282__$1 = temp__4657__auto___35281;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35264_35282__$1)){
var c__25602__auto___35283 = cljs.core.chunk_first.call(null,seq__35264_35282__$1);
var G__35284 = cljs.core.chunk_rest.call(null,seq__35264_35282__$1);
var G__35285 = c__25602__auto___35283;
var G__35286 = cljs.core.count.call(null,c__25602__auto___35283);
var G__35287 = (0);
seq__35264_35272 = G__35284;
chunk__35265_35273 = G__35285;
count__35266_35274 = G__35286;
i__35267_35275 = G__35287;
continue;
} else {
var msg_35288 = cljs.core.first.call(null,seq__35264_35282__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_35288);

var G__35289 = cljs.core.next.call(null,seq__35264_35282__$1);
var G__35290 = null;
var G__35291 = (0);
var G__35292 = (0);
seq__35264_35272 = G__35289;
chunk__35265_35273 = G__35290;
count__35266_35274 = G__35291;
i__35267_35275 = G__35292;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25873__auto__ = [];
var len__25866__auto___35297 = arguments.length;
var i__25867__auto___35298 = (0);
while(true){
if((i__25867__auto___35298 < len__25866__auto___35297)){
args__25873__auto__.push((arguments[i__25867__auto___35298]));

var G__35299 = (i__25867__auto___35298 + (1));
i__25867__auto___35298 = G__35299;
continue;
} else {
}
break;
}

var argseq__25874__auto__ = ((((0) < args__25873__auto__.length))?(new cljs.core.IndexedSeq(args__25873__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25874__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35294){
var map__35295 = p__35294;
var map__35295__$1 = ((((!((map__35295 == null)))?((((map__35295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35295):map__35295);
var opts = map__35295__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35293){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35293));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e35301){if((e35301 instanceof Error)){
var e = e35301;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e35301;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__35305){
var map__35306 = p__35305;
var map__35306__$1 = ((((!((map__35306 == null)))?((((map__35306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35306):map__35306);
var msg_name = cljs.core.get.call(null,map__35306__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1481924982997