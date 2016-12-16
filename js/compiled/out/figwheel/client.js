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
var args34463 = [];
var len__25865__auto___34466 = arguments.length;
var i__25866__auto___34467 = (0);
while(true){
if((i__25866__auto___34467 < len__25865__auto___34466)){
args34463.push((arguments[i__25866__auto___34467]));

var G__34468 = (i__25866__auto___34467 + (1));
i__25866__auto___34467 = G__34468;
continue;
} else {
}
break;
}

var G__34465 = args34463.length;
switch (G__34465) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34463.length)].join('')));

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
var args__25872__auto__ = [];
var len__25865__auto___34471 = arguments.length;
var i__25866__auto___34472 = (0);
while(true){
if((i__25866__auto___34472 < len__25865__auto___34471)){
args__25872__auto__.push((arguments[i__25866__auto___34472]));

var G__34473 = (i__25866__auto___34472 + (1));
i__25866__auto___34472 = G__34473;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq34470){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34470));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25872__auto__ = [];
var len__25865__auto___34475 = arguments.length;
var i__25866__auto___34476 = (0);
while(true){
if((i__25866__auto___34476 < len__25865__auto___34475)){
args__25872__auto__.push((arguments[i__25866__auto___34476]));

var G__34477 = (i__25866__auto___34476 + (1));
i__25866__auto___34476 = G__34477;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq34474){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34474));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__34478 = cljs.core._EQ_;
var expr__34479 = (function (){var or__24790__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e34482){if((e34482 instanceof Error)){
var e = e34482;
return false;
} else {
throw e34482;

}
}})();
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__34478.call(null,"true",expr__34479))){
return true;
} else {
if(cljs.core.truth_(pred__34478.call(null,"false",expr__34479))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__34479)].join('')));
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
}catch (e34484){if((e34484 instanceof Error)){
var e = e34484;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e34484;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__34485){
var map__34488 = p__34485;
var map__34488__$1 = ((((!((map__34488 == null)))?((((map__34488.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34488.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34488):map__34488);
var message = cljs.core.get.call(null,map__34488__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__34488__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24790__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24778__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24778__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24778__auto__;
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
var c__26963__auto___34650 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26963__auto___34650,ch){
return (function (){
var f__26964__auto__ = (function (){var switch__26851__auto__ = ((function (c__26963__auto___34650,ch){
return (function (state_34619){
var state_val_34620 = (state_34619[(1)]);
if((state_val_34620 === (7))){
var inst_34615 = (state_34619[(2)]);
var state_34619__$1 = state_34619;
var statearr_34621_34651 = state_34619__$1;
(statearr_34621_34651[(2)] = inst_34615);

(statearr_34621_34651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34620 === (1))){
var state_34619__$1 = state_34619;
var statearr_34622_34652 = state_34619__$1;
(statearr_34622_34652[(2)] = null);

(statearr_34622_34652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34620 === (4))){
var inst_34572 = (state_34619[(7)]);
var inst_34572__$1 = (state_34619[(2)]);
var state_34619__$1 = (function (){var statearr_34623 = state_34619;
(statearr_34623[(7)] = inst_34572__$1);

return statearr_34623;
})();
if(cljs.core.truth_(inst_34572__$1)){
var statearr_34624_34653 = state_34619__$1;
(statearr_34624_34653[(1)] = (5));

} else {
var statearr_34625_34654 = state_34619__$1;
(statearr_34625_34654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34620 === (15))){
var inst_34579 = (state_34619[(8)]);
var inst_34594 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34579);
var inst_34595 = cljs.core.first.call(null,inst_34594);
var inst_34596 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_34595);
var inst_34597 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_34596)].join('');
var inst_34598 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_34597);
var state_34619__$1 = state_34619;
var statearr_34626_34655 = state_34619__$1;
(statearr_34626_34655[(2)] = inst_34598);

(statearr_34626_34655[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34620 === (13))){
var inst_34603 = (state_34619[(2)]);
var state_34619__$1 = state_34619;
var statearr_34627_34656 = state_34619__$1;
(statearr_34627_34656[(2)] = inst_34603);

(statearr_34627_34656[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34620 === (6))){
var state_34619__$1 = state_34619;
var statearr_34628_34657 = state_34619__$1;
(statearr_34628_34657[(2)] = null);

(statearr_34628_34657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34620 === (17))){
var inst_34601 = (state_34619[(2)]);
var state_34619__$1 = state_34619;
var statearr_34629_34658 = state_34619__$1;
(statearr_34629_34658[(2)] = inst_34601);

(statearr_34629_34658[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34620 === (3))){
var inst_34617 = (state_34619[(2)]);
var state_34619__$1 = state_34619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34619__$1,inst_34617);
} else {
if((state_val_34620 === (12))){
var inst_34578 = (state_34619[(9)]);
var inst_34592 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_34578,opts);
var state_34619__$1 = state_34619;
if(cljs.core.truth_(inst_34592)){
var statearr_34630_34659 = state_34619__$1;
(statearr_34630_34659[(1)] = (15));

} else {
var statearr_34631_34660 = state_34619__$1;
(statearr_34631_34660[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34620 === (2))){
var state_34619__$1 = state_34619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34619__$1,(4),ch);
} else {
if((state_val_34620 === (11))){
var inst_34579 = (state_34619[(8)]);
var inst_34584 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34585 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_34579);
var inst_34586 = cljs.core.async.timeout.call(null,(1000));
var inst_34587 = [inst_34585,inst_34586];
var inst_34588 = (new cljs.core.PersistentVector(null,2,(5),inst_34584,inst_34587,null));
var state_34619__$1 = state_34619;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34619__$1,(14),inst_34588);
} else {
if((state_val_34620 === (9))){
var inst_34579 = (state_34619[(8)]);
var inst_34605 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_34606 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34579);
var inst_34607 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34606);
var inst_34608 = [cljs.core.str("Not loading: "),cljs.core.str(inst_34607)].join('');
var inst_34609 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_34608);
var state_34619__$1 = (function (){var statearr_34632 = state_34619;
(statearr_34632[(10)] = inst_34605);

return statearr_34632;
})();
var statearr_34633_34661 = state_34619__$1;
(statearr_34633_34661[(2)] = inst_34609);

(statearr_34633_34661[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34620 === (5))){
var inst_34572 = (state_34619[(7)]);
var inst_34574 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34575 = (new cljs.core.PersistentArrayMap(null,2,inst_34574,null));
var inst_34576 = (new cljs.core.PersistentHashSet(null,inst_34575,null));
var inst_34577 = figwheel.client.focus_msgs.call(null,inst_34576,inst_34572);
var inst_34578 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_34577);
var inst_34579 = cljs.core.first.call(null,inst_34577);
var inst_34580 = figwheel.client.autoload_QMARK_.call(null);
var state_34619__$1 = (function (){var statearr_34634 = state_34619;
(statearr_34634[(8)] = inst_34579);

(statearr_34634[(9)] = inst_34578);

return statearr_34634;
})();
if(cljs.core.truth_(inst_34580)){
var statearr_34635_34662 = state_34619__$1;
(statearr_34635_34662[(1)] = (8));

} else {
var statearr_34636_34663 = state_34619__$1;
(statearr_34636_34663[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34620 === (14))){
var inst_34590 = (state_34619[(2)]);
var state_34619__$1 = state_34619;
var statearr_34637_34664 = state_34619__$1;
(statearr_34637_34664[(2)] = inst_34590);

(statearr_34637_34664[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34620 === (16))){
var state_34619__$1 = state_34619;
var statearr_34638_34665 = state_34619__$1;
(statearr_34638_34665[(2)] = null);

(statearr_34638_34665[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34620 === (10))){
var inst_34611 = (state_34619[(2)]);
var state_34619__$1 = (function (){var statearr_34639 = state_34619;
(statearr_34639[(11)] = inst_34611);

return statearr_34639;
})();
var statearr_34640_34666 = state_34619__$1;
(statearr_34640_34666[(2)] = null);

(statearr_34640_34666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34620 === (8))){
var inst_34578 = (state_34619[(9)]);
var inst_34582 = figwheel.client.reload_file_state_QMARK_.call(null,inst_34578,opts);
var state_34619__$1 = state_34619;
if(cljs.core.truth_(inst_34582)){
var statearr_34641_34667 = state_34619__$1;
(statearr_34641_34667[(1)] = (11));

} else {
var statearr_34642_34668 = state_34619__$1;
(statearr_34642_34668[(1)] = (12));

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
});})(c__26963__auto___34650,ch))
;
return ((function (switch__26851__auto__,c__26963__auto___34650,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26852__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26852__auto____0 = (function (){
var statearr_34646 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34646[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26852__auto__);

(statearr_34646[(1)] = (1));

return statearr_34646;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26852__auto____1 = (function (state_34619){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_34619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e34647){if((e34647 instanceof Object)){
var ex__26855__auto__ = e34647;
var statearr_34648_34669 = state_34619;
(statearr_34648_34669[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34670 = state_34619;
state_34619 = G__34670;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26852__auto__ = function(state_34619){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26852__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26852__auto____1.call(this,state_34619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26852__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26852__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26963__auto___34650,ch))
})();
var state__26965__auto__ = (function (){var statearr_34649 = f__26964__auto__.call(null);
(statearr_34649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26963__auto___34650);

return statearr_34649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26965__auto__);
});})(c__26963__auto___34650,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__34671_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34671_SHARP_));
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
var base_path_34674 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_34674){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e34673){if((e34673 instanceof Error)){
var e = e34673;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_34674], null));
} else {
var e = e34673;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_34674))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__34675){
var map__34684 = p__34675;
var map__34684__$1 = ((((!((map__34684 == null)))?((((map__34684.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34684.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34684):map__34684);
var opts = map__34684__$1;
var build_id = cljs.core.get.call(null,map__34684__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__34684,map__34684__$1,opts,build_id){
return (function (p__34686){
var vec__34687 = p__34686;
var seq__34688 = cljs.core.seq.call(null,vec__34687);
var first__34689 = cljs.core.first.call(null,seq__34688);
var seq__34688__$1 = cljs.core.next.call(null,seq__34688);
var map__34690 = first__34689;
var map__34690__$1 = ((((!((map__34690 == null)))?((((map__34690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34690):map__34690);
var msg = map__34690__$1;
var msg_name = cljs.core.get.call(null,map__34690__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34688__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__34687,seq__34688,first__34689,seq__34688__$1,map__34690,map__34690__$1,msg,msg_name,_,map__34684,map__34684__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__34687,seq__34688,first__34689,seq__34688__$1,map__34690,map__34690__$1,msg,msg_name,_,map__34684,map__34684__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__34684,map__34684__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__34698){
var vec__34699 = p__34698;
var seq__34700 = cljs.core.seq.call(null,vec__34699);
var first__34701 = cljs.core.first.call(null,seq__34700);
var seq__34700__$1 = cljs.core.next.call(null,seq__34700);
var map__34702 = first__34701;
var map__34702__$1 = ((((!((map__34702 == null)))?((((map__34702.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34702.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34702):map__34702);
var msg = map__34702__$1;
var msg_name = cljs.core.get.call(null,map__34702__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34700__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__34704){
var map__34716 = p__34704;
var map__34716__$1 = ((((!((map__34716 == null)))?((((map__34716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34716):map__34716);
var on_compile_warning = cljs.core.get.call(null,map__34716__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__34716__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__34716,map__34716__$1,on_compile_warning,on_compile_fail){
return (function (p__34718){
var vec__34719 = p__34718;
var seq__34720 = cljs.core.seq.call(null,vec__34719);
var first__34721 = cljs.core.first.call(null,seq__34720);
var seq__34720__$1 = cljs.core.next.call(null,seq__34720);
var map__34722 = first__34721;
var map__34722__$1 = ((((!((map__34722 == null)))?((((map__34722.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34722.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34722):map__34722);
var msg = map__34722__$1;
var msg_name = cljs.core.get.call(null,map__34722__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34720__$1;
var pred__34724 = cljs.core._EQ_;
var expr__34725 = msg_name;
if(cljs.core.truth_(pred__34724.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34725))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34724.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34725))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__34716,map__34716__$1,on_compile_warning,on_compile_fail))
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
var c__26963__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26963__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26964__auto__ = (function (){var switch__26851__auto__ = ((function (c__26963__auto__,msg_hist,msg_names,msg){
return (function (state_34953){
var state_val_34954 = (state_34953[(1)]);
if((state_val_34954 === (7))){
var inst_34873 = (state_34953[(2)]);
var state_34953__$1 = state_34953;
if(cljs.core.truth_(inst_34873)){
var statearr_34955_35005 = state_34953__$1;
(statearr_34955_35005[(1)] = (8));

} else {
var statearr_34956_35006 = state_34953__$1;
(statearr_34956_35006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34954 === (20))){
var inst_34947 = (state_34953[(2)]);
var state_34953__$1 = state_34953;
var statearr_34957_35007 = state_34953__$1;
(statearr_34957_35007[(2)] = inst_34947);

(statearr_34957_35007[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34954 === (27))){
var inst_34943 = (state_34953[(2)]);
var state_34953__$1 = state_34953;
var statearr_34958_35008 = state_34953__$1;
(statearr_34958_35008[(2)] = inst_34943);

(statearr_34958_35008[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34954 === (1))){
var inst_34866 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_34953__$1 = state_34953;
if(cljs.core.truth_(inst_34866)){
var statearr_34959_35009 = state_34953__$1;
(statearr_34959_35009[(1)] = (2));

} else {
var statearr_34960_35010 = state_34953__$1;
(statearr_34960_35010[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34954 === (24))){
var inst_34945 = (state_34953[(2)]);
var state_34953__$1 = state_34953;
var statearr_34961_35011 = state_34953__$1;
(statearr_34961_35011[(2)] = inst_34945);

(statearr_34961_35011[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34954 === (4))){
var inst_34951 = (state_34953[(2)]);
var state_34953__$1 = state_34953;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34953__$1,inst_34951);
} else {
if((state_val_34954 === (15))){
var inst_34949 = (state_34953[(2)]);
var state_34953__$1 = state_34953;
var statearr_34962_35012 = state_34953__$1;
(statearr_34962_35012[(2)] = inst_34949);

(statearr_34962_35012[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34954 === (21))){
var inst_34902 = (state_34953[(2)]);
var inst_34903 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34904 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34903);
var state_34953__$1 = (function (){var statearr_34963 = state_34953;
(statearr_34963[(7)] = inst_34902);

return statearr_34963;
})();
var statearr_34964_35013 = state_34953__$1;
(statearr_34964_35013[(2)] = inst_34904);

(statearr_34964_35013[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34954 === (31))){
var inst_34932 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_34953__$1 = state_34953;
if(cljs.core.truth_(inst_34932)){
var statearr_34965_35014 = state_34953__$1;
(statearr_34965_35014[(1)] = (34));

} else {
var statearr_34966_35015 = state_34953__$1;
(statearr_34966_35015[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34954 === (32))){
var inst_34941 = (state_34953[(2)]);
var state_34953__$1 = state_34953;
var statearr_34967_35016 = state_34953__$1;
(statearr_34967_35016[(2)] = inst_34941);

(statearr_34967_35016[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34954 === (33))){
var inst_34928 = (state_34953[(2)]);
var inst_34929 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34930 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34929);
var state_34953__$1 = (function (){var statearr_34968 = state_34953;
(statearr_34968[(8)] = inst_34928);

return statearr_34968;
})();
var statearr_34969_35017 = state_34953__$1;
(statearr_34969_35017[(2)] = inst_34930);

(statearr_34969_35017[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34954 === (13))){
var inst_34887 = figwheel.client.heads_up.clear.call(null);
var state_34953__$1 = state_34953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34953__$1,(16),inst_34887);
} else {
if((state_val_34954 === (22))){
var inst_34908 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34909 = figwheel.client.heads_up.append_warning_message.call(null,inst_34908);
var state_34953__$1 = state_34953;
var statearr_34970_35018 = state_34953__$1;
(statearr_34970_35018[(2)] = inst_34909);

(statearr_34970_35018[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34954 === (36))){
var inst_34939 = (state_34953[(2)]);
var state_34953__$1 = state_34953;
var statearr_34971_35019 = state_34953__$1;
(statearr_34971_35019[(2)] = inst_34939);

(statearr_34971_35019[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34954 === (29))){
var inst_34919 = (state_34953[(2)]);
var inst_34920 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34921 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34920);
var state_34953__$1 = (function (){var statearr_34972 = state_34953;
(statearr_34972[(9)] = inst_34919);

return statearr_34972;
})();
var statearr_34973_35020 = state_34953__$1;
(statearr_34973_35020[(2)] = inst_34921);

(statearr_34973_35020[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34954 === (6))){
var inst_34868 = (state_34953[(10)]);
var state_34953__$1 = state_34953;
var statearr_34974_35021 = state_34953__$1;
(statearr_34974_35021[(2)] = inst_34868);

(statearr_34974_35021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34954 === (28))){
var inst_34915 = (state_34953[(2)]);
var inst_34916 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34917 = figwheel.client.heads_up.display_warning.call(null,inst_34916);
var state_34953__$1 = (function (){var statearr_34975 = state_34953;
(statearr_34975[(11)] = inst_34915);

return statearr_34975;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34953__$1,(29),inst_34917);
} else {
if((state_val_34954 === (25))){
var inst_34913 = figwheel.client.heads_up.clear.call(null);
var state_34953__$1 = state_34953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34953__$1,(28),inst_34913);
} else {
if((state_val_34954 === (34))){
var inst_34934 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34953__$1 = state_34953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34953__$1,(37),inst_34934);
} else {
if((state_val_34954 === (17))){
var inst_34893 = (state_34953[(2)]);
var inst_34894 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34895 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34894);
var state_34953__$1 = (function (){var statearr_34976 = state_34953;
(statearr_34976[(12)] = inst_34893);

return statearr_34976;
})();
var statearr_34977_35022 = state_34953__$1;
(statearr_34977_35022[(2)] = inst_34895);

(statearr_34977_35022[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34954 === (3))){
var inst_34885 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_34953__$1 = state_34953;
if(cljs.core.truth_(inst_34885)){
var statearr_34978_35023 = state_34953__$1;
(statearr_34978_35023[(1)] = (13));

} else {
var statearr_34979_35024 = state_34953__$1;
(statearr_34979_35024[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34954 === (12))){
var inst_34881 = (state_34953[(2)]);
var state_34953__$1 = state_34953;
var statearr_34980_35025 = state_34953__$1;
(statearr_34980_35025[(2)] = inst_34881);

(statearr_34980_35025[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34954 === (2))){
var inst_34868 = (state_34953[(10)]);
var inst_34868__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_34953__$1 = (function (){var statearr_34981 = state_34953;
(statearr_34981[(10)] = inst_34868__$1);

return statearr_34981;
})();
if(cljs.core.truth_(inst_34868__$1)){
var statearr_34982_35026 = state_34953__$1;
(statearr_34982_35026[(1)] = (5));

} else {
var statearr_34983_35027 = state_34953__$1;
(statearr_34983_35027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34954 === (23))){
var inst_34911 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_34953__$1 = state_34953;
if(cljs.core.truth_(inst_34911)){
var statearr_34984_35028 = state_34953__$1;
(statearr_34984_35028[(1)] = (25));

} else {
var statearr_34985_35029 = state_34953__$1;
(statearr_34985_35029[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34954 === (35))){
var state_34953__$1 = state_34953;
var statearr_34986_35030 = state_34953__$1;
(statearr_34986_35030[(2)] = null);

(statearr_34986_35030[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34954 === (19))){
var inst_34906 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_34953__$1 = state_34953;
if(cljs.core.truth_(inst_34906)){
var statearr_34987_35031 = state_34953__$1;
(statearr_34987_35031[(1)] = (22));

} else {
var statearr_34988_35032 = state_34953__$1;
(statearr_34988_35032[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34954 === (11))){
var inst_34877 = (state_34953[(2)]);
var state_34953__$1 = state_34953;
var statearr_34989_35033 = state_34953__$1;
(statearr_34989_35033[(2)] = inst_34877);

(statearr_34989_35033[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34954 === (9))){
var inst_34879 = figwheel.client.heads_up.clear.call(null);
var state_34953__$1 = state_34953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34953__$1,(12),inst_34879);
} else {
if((state_val_34954 === (5))){
var inst_34870 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_34953__$1 = state_34953;
var statearr_34990_35034 = state_34953__$1;
(statearr_34990_35034[(2)] = inst_34870);

(statearr_34990_35034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34954 === (14))){
var inst_34897 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_34953__$1 = state_34953;
if(cljs.core.truth_(inst_34897)){
var statearr_34991_35035 = state_34953__$1;
(statearr_34991_35035[(1)] = (18));

} else {
var statearr_34992_35036 = state_34953__$1;
(statearr_34992_35036[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34954 === (26))){
var inst_34923 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_34953__$1 = state_34953;
if(cljs.core.truth_(inst_34923)){
var statearr_34993_35037 = state_34953__$1;
(statearr_34993_35037[(1)] = (30));

} else {
var statearr_34994_35038 = state_34953__$1;
(statearr_34994_35038[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34954 === (16))){
var inst_34889 = (state_34953[(2)]);
var inst_34890 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34891 = figwheel.client.heads_up.display_exception.call(null,inst_34890);
var state_34953__$1 = (function (){var statearr_34995 = state_34953;
(statearr_34995[(13)] = inst_34889);

return statearr_34995;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34953__$1,(17),inst_34891);
} else {
if((state_val_34954 === (30))){
var inst_34925 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34926 = figwheel.client.heads_up.display_warning.call(null,inst_34925);
var state_34953__$1 = state_34953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34953__$1,(33),inst_34926);
} else {
if((state_val_34954 === (10))){
var inst_34883 = (state_34953[(2)]);
var state_34953__$1 = state_34953;
var statearr_34996_35039 = state_34953__$1;
(statearr_34996_35039[(2)] = inst_34883);

(statearr_34996_35039[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34954 === (18))){
var inst_34899 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34900 = figwheel.client.heads_up.display_exception.call(null,inst_34899);
var state_34953__$1 = state_34953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34953__$1,(21),inst_34900);
} else {
if((state_val_34954 === (37))){
var inst_34936 = (state_34953[(2)]);
var state_34953__$1 = state_34953;
var statearr_34997_35040 = state_34953__$1;
(statearr_34997_35040[(2)] = inst_34936);

(statearr_34997_35040[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34954 === (8))){
var inst_34875 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34953__$1 = state_34953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34953__$1,(11),inst_34875);
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
});})(c__26963__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26851__auto__,c__26963__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto____0 = (function (){
var statearr_35001 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35001[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto__);

(statearr_35001[(1)] = (1));

return statearr_35001;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto____1 = (function (state_34953){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_34953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e35002){if((e35002 instanceof Object)){
var ex__26855__auto__ = e35002;
var statearr_35003_35041 = state_34953;
(statearr_35003_35041[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35042 = state_34953;
state_34953 = G__35042;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto__ = function(state_34953){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto____1.call(this,state_34953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26963__auto__,msg_hist,msg_names,msg))
})();
var state__26965__auto__ = (function (){var statearr_35004 = f__26964__auto__.call(null);
(statearr_35004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26963__auto__);

return statearr_35004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26965__auto__);
});})(c__26963__auto__,msg_hist,msg_names,msg))
);

return c__26963__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26963__auto___35105 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26963__auto___35105,ch){
return (function (){
var f__26964__auto__ = (function (){var switch__26851__auto__ = ((function (c__26963__auto___35105,ch){
return (function (state_35088){
var state_val_35089 = (state_35088[(1)]);
if((state_val_35089 === (1))){
var state_35088__$1 = state_35088;
var statearr_35090_35106 = state_35088__$1;
(statearr_35090_35106[(2)] = null);

(statearr_35090_35106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35089 === (2))){
var state_35088__$1 = state_35088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35088__$1,(4),ch);
} else {
if((state_val_35089 === (3))){
var inst_35086 = (state_35088[(2)]);
var state_35088__$1 = state_35088;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35088__$1,inst_35086);
} else {
if((state_val_35089 === (4))){
var inst_35076 = (state_35088[(7)]);
var inst_35076__$1 = (state_35088[(2)]);
var state_35088__$1 = (function (){var statearr_35091 = state_35088;
(statearr_35091[(7)] = inst_35076__$1);

return statearr_35091;
})();
if(cljs.core.truth_(inst_35076__$1)){
var statearr_35092_35107 = state_35088__$1;
(statearr_35092_35107[(1)] = (5));

} else {
var statearr_35093_35108 = state_35088__$1;
(statearr_35093_35108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35089 === (5))){
var inst_35076 = (state_35088[(7)]);
var inst_35078 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35076);
var state_35088__$1 = state_35088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35088__$1,(8),inst_35078);
} else {
if((state_val_35089 === (6))){
var state_35088__$1 = state_35088;
var statearr_35094_35109 = state_35088__$1;
(statearr_35094_35109[(2)] = null);

(statearr_35094_35109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35089 === (7))){
var inst_35084 = (state_35088[(2)]);
var state_35088__$1 = state_35088;
var statearr_35095_35110 = state_35088__$1;
(statearr_35095_35110[(2)] = inst_35084);

(statearr_35095_35110[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35089 === (8))){
var inst_35080 = (state_35088[(2)]);
var state_35088__$1 = (function (){var statearr_35096 = state_35088;
(statearr_35096[(8)] = inst_35080);

return statearr_35096;
})();
var statearr_35097_35111 = state_35088__$1;
(statearr_35097_35111[(2)] = null);

(statearr_35097_35111[(1)] = (2));


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
});})(c__26963__auto___35105,ch))
;
return ((function (switch__26851__auto__,c__26963__auto___35105,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26852__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26852__auto____0 = (function (){
var statearr_35101 = [null,null,null,null,null,null,null,null,null];
(statearr_35101[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26852__auto__);

(statearr_35101[(1)] = (1));

return statearr_35101;
});
var figwheel$client$heads_up_plugin_$_state_machine__26852__auto____1 = (function (state_35088){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_35088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e35102){if((e35102 instanceof Object)){
var ex__26855__auto__ = e35102;
var statearr_35103_35112 = state_35088;
(statearr_35103_35112[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35113 = state_35088;
state_35088 = G__35113;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26852__auto__ = function(state_35088){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26852__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26852__auto____1.call(this,state_35088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26852__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26852__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26963__auto___35105,ch))
})();
var state__26965__auto__ = (function (){var statearr_35104 = f__26964__auto__.call(null);
(statearr_35104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26963__auto___35105);

return statearr_35104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26965__auto__);
});})(c__26963__auto___35105,ch))
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
var c__26963__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26963__auto__){
return (function (){
var f__26964__auto__ = (function (){var switch__26851__auto__ = ((function (c__26963__auto__){
return (function (state_35134){
var state_val_35135 = (state_35134[(1)]);
if((state_val_35135 === (1))){
var inst_35129 = cljs.core.async.timeout.call(null,(3000));
var state_35134__$1 = state_35134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35134__$1,(2),inst_35129);
} else {
if((state_val_35135 === (2))){
var inst_35131 = (state_35134[(2)]);
var inst_35132 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35134__$1 = (function (){var statearr_35136 = state_35134;
(statearr_35136[(7)] = inst_35131);

return statearr_35136;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35134__$1,inst_35132);
} else {
return null;
}
}
});})(c__26963__auto__))
;
return ((function (switch__26851__auto__,c__26963__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26852__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26852__auto____0 = (function (){
var statearr_35140 = [null,null,null,null,null,null,null,null];
(statearr_35140[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26852__auto__);

(statearr_35140[(1)] = (1));

return statearr_35140;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26852__auto____1 = (function (state_35134){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_35134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e35141){if((e35141 instanceof Object)){
var ex__26855__auto__ = e35141;
var statearr_35142_35144 = state_35134;
(statearr_35142_35144[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35141;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35145 = state_35134;
state_35134 = G__35145;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26852__auto__ = function(state_35134){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26852__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26852__auto____1.call(this,state_35134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26852__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26852__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26963__auto__))
})();
var state__26965__auto__ = (function (){var statearr_35143 = f__26964__auto__.call(null);
(statearr_35143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26963__auto__);

return statearr_35143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26965__auto__);
});})(c__26963__auto__))
);

return c__26963__auto__;
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
var c__26963__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26963__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__26964__auto__ = (function (){var switch__26851__auto__ = ((function (c__26963__auto__,figwheel_version,temp__4657__auto__){
return (function (state_35168){
var state_val_35169 = (state_35168[(1)]);
if((state_val_35169 === (1))){
var inst_35162 = cljs.core.async.timeout.call(null,(2000));
var state_35168__$1 = state_35168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35168__$1,(2),inst_35162);
} else {
if((state_val_35169 === (2))){
var inst_35164 = (state_35168[(2)]);
var inst_35165 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_35166 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35165);
var state_35168__$1 = (function (){var statearr_35170 = state_35168;
(statearr_35170[(7)] = inst_35164);

return statearr_35170;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35168__$1,inst_35166);
} else {
return null;
}
}
});})(c__26963__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__26851__auto__,c__26963__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto____0 = (function (){
var statearr_35174 = [null,null,null,null,null,null,null,null];
(statearr_35174[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto__);

(statearr_35174[(1)] = (1));

return statearr_35174;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto____1 = (function (state_35168){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_35168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e35175){if((e35175 instanceof Object)){
var ex__26855__auto__ = e35175;
var statearr_35176_35178 = state_35168;
(statearr_35176_35178[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35179 = state_35168;
state_35168 = G__35179;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto__ = function(state_35168){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto____1.call(this,state_35168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26963__auto__,figwheel_version,temp__4657__auto__))
})();
var state__26965__auto__ = (function (){var statearr_35177 = f__26964__auto__.call(null);
(statearr_35177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26963__auto__);

return statearr_35177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26965__auto__);
});})(c__26963__auto__,figwheel_version,temp__4657__auto__))
);

return c__26963__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35180){
var map__35184 = p__35180;
var map__35184__$1 = ((((!((map__35184 == null)))?((((map__35184.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35184.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35184):map__35184);
var file = cljs.core.get.call(null,map__35184__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35184__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35184__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35186 = "";
var G__35186__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__35186),cljs.core.str("file "),cljs.core.str(file)].join(''):G__35186);
var G__35186__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__35186__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__35186__$1);
if(cljs.core.truth_((function (){var and__24778__auto__ = line;
if(cljs.core.truth_(and__24778__auto__)){
return column;
} else {
return and__24778__auto__;
}
})())){
return [cljs.core.str(G__35186__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__35186__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35187){
var map__35194 = p__35187;
var map__35194__$1 = ((((!((map__35194 == null)))?((((map__35194.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35194.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35194):map__35194);
var ed = map__35194__$1;
var formatted_exception = cljs.core.get.call(null,map__35194__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__35194__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35194__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35196_35200 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35197_35201 = null;
var count__35198_35202 = (0);
var i__35199_35203 = (0);
while(true){
if((i__35199_35203 < count__35198_35202)){
var msg_35204 = cljs.core._nth.call(null,chunk__35197_35201,i__35199_35203);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35204);

var G__35205 = seq__35196_35200;
var G__35206 = chunk__35197_35201;
var G__35207 = count__35198_35202;
var G__35208 = (i__35199_35203 + (1));
seq__35196_35200 = G__35205;
chunk__35197_35201 = G__35206;
count__35198_35202 = G__35207;
i__35199_35203 = G__35208;
continue;
} else {
var temp__4657__auto___35209 = cljs.core.seq.call(null,seq__35196_35200);
if(temp__4657__auto___35209){
var seq__35196_35210__$1 = temp__4657__auto___35209;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35196_35210__$1)){
var c__25601__auto___35211 = cljs.core.chunk_first.call(null,seq__35196_35210__$1);
var G__35212 = cljs.core.chunk_rest.call(null,seq__35196_35210__$1);
var G__35213 = c__25601__auto___35211;
var G__35214 = cljs.core.count.call(null,c__25601__auto___35211);
var G__35215 = (0);
seq__35196_35200 = G__35212;
chunk__35197_35201 = G__35213;
count__35198_35202 = G__35214;
i__35199_35203 = G__35215;
continue;
} else {
var msg_35216 = cljs.core.first.call(null,seq__35196_35210__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35216);

var G__35217 = cljs.core.next.call(null,seq__35196_35210__$1);
var G__35218 = null;
var G__35219 = (0);
var G__35220 = (0);
seq__35196_35200 = G__35217;
chunk__35197_35201 = G__35218;
count__35198_35202 = G__35219;
i__35199_35203 = G__35220;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35221){
var map__35224 = p__35221;
var map__35224__$1 = ((((!((map__35224 == null)))?((((map__35224.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35224.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35224):map__35224);
var w = map__35224__$1;
var message = cljs.core.get.call(null,map__35224__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__24778__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24778__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24778__auto__;
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
var seq__35236 = cljs.core.seq.call(null,plugins);
var chunk__35237 = null;
var count__35238 = (0);
var i__35239 = (0);
while(true){
if((i__35239 < count__35238)){
var vec__35240 = cljs.core._nth.call(null,chunk__35237,i__35239);
var k = cljs.core.nth.call(null,vec__35240,(0),null);
var plugin = cljs.core.nth.call(null,vec__35240,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35246 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35236,chunk__35237,count__35238,i__35239,pl_35246,vec__35240,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35246.call(null,msg_hist);
});})(seq__35236,chunk__35237,count__35238,i__35239,pl_35246,vec__35240,k,plugin))
);
} else {
}

var G__35247 = seq__35236;
var G__35248 = chunk__35237;
var G__35249 = count__35238;
var G__35250 = (i__35239 + (1));
seq__35236 = G__35247;
chunk__35237 = G__35248;
count__35238 = G__35249;
i__35239 = G__35250;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35236);
if(temp__4657__auto__){
var seq__35236__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35236__$1)){
var c__25601__auto__ = cljs.core.chunk_first.call(null,seq__35236__$1);
var G__35251 = cljs.core.chunk_rest.call(null,seq__35236__$1);
var G__35252 = c__25601__auto__;
var G__35253 = cljs.core.count.call(null,c__25601__auto__);
var G__35254 = (0);
seq__35236 = G__35251;
chunk__35237 = G__35252;
count__35238 = G__35253;
i__35239 = G__35254;
continue;
} else {
var vec__35243 = cljs.core.first.call(null,seq__35236__$1);
var k = cljs.core.nth.call(null,vec__35243,(0),null);
var plugin = cljs.core.nth.call(null,vec__35243,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35255 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35236,chunk__35237,count__35238,i__35239,pl_35255,vec__35243,k,plugin,seq__35236__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35255.call(null,msg_hist);
});})(seq__35236,chunk__35237,count__35238,i__35239,pl_35255,vec__35243,k,plugin,seq__35236__$1,temp__4657__auto__))
);
} else {
}

var G__35256 = cljs.core.next.call(null,seq__35236__$1);
var G__35257 = null;
var G__35258 = (0);
var G__35259 = (0);
seq__35236 = G__35256;
chunk__35237 = G__35257;
count__35238 = G__35258;
i__35239 = G__35259;
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
var args35260 = [];
var len__25865__auto___35267 = arguments.length;
var i__25866__auto___35268 = (0);
while(true){
if((i__25866__auto___35268 < len__25865__auto___35267)){
args35260.push((arguments[i__25866__auto___35268]));

var G__35269 = (i__25866__auto___35268 + (1));
i__25866__auto___35268 = G__35269;
continue;
} else {
}
break;
}

var G__35262 = args35260.length;
switch (G__35262) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35260.length)].join('')));

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

var seq__35263_35271 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__35264_35272 = null;
var count__35265_35273 = (0);
var i__35266_35274 = (0);
while(true){
if((i__35266_35274 < count__35265_35273)){
var msg_35275 = cljs.core._nth.call(null,chunk__35264_35272,i__35266_35274);
figwheel.client.socket.handle_incoming_message.call(null,msg_35275);

var G__35276 = seq__35263_35271;
var G__35277 = chunk__35264_35272;
var G__35278 = count__35265_35273;
var G__35279 = (i__35266_35274 + (1));
seq__35263_35271 = G__35276;
chunk__35264_35272 = G__35277;
count__35265_35273 = G__35278;
i__35266_35274 = G__35279;
continue;
} else {
var temp__4657__auto___35280 = cljs.core.seq.call(null,seq__35263_35271);
if(temp__4657__auto___35280){
var seq__35263_35281__$1 = temp__4657__auto___35280;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35263_35281__$1)){
var c__25601__auto___35282 = cljs.core.chunk_first.call(null,seq__35263_35281__$1);
var G__35283 = cljs.core.chunk_rest.call(null,seq__35263_35281__$1);
var G__35284 = c__25601__auto___35282;
var G__35285 = cljs.core.count.call(null,c__25601__auto___35282);
var G__35286 = (0);
seq__35263_35271 = G__35283;
chunk__35264_35272 = G__35284;
count__35265_35273 = G__35285;
i__35266_35274 = G__35286;
continue;
} else {
var msg_35287 = cljs.core.first.call(null,seq__35263_35281__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_35287);

var G__35288 = cljs.core.next.call(null,seq__35263_35281__$1);
var G__35289 = null;
var G__35290 = (0);
var G__35291 = (0);
seq__35263_35271 = G__35288;
chunk__35264_35272 = G__35289;
count__35265_35273 = G__35290;
i__35266_35274 = G__35291;
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
var args__25872__auto__ = [];
var len__25865__auto___35296 = arguments.length;
var i__25866__auto___35297 = (0);
while(true){
if((i__25866__auto___35297 < len__25865__auto___35296)){
args__25872__auto__.push((arguments[i__25866__auto___35297]));

var G__35298 = (i__25866__auto___35297 + (1));
i__25866__auto___35297 = G__35298;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35293){
var map__35294 = p__35293;
var map__35294__$1 = ((((!((map__35294 == null)))?((((map__35294.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35294.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35294):map__35294);
var opts = map__35294__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35292){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35292));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e35300){if((e35300 instanceof Error)){
var e = e35300;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e35300;

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
return (function (p__35304){
var map__35305 = p__35304;
var map__35305__$1 = ((((!((map__35305 == null)))?((((map__35305.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35305.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35305):map__35305);
var msg_name = cljs.core.get.call(null,map__35305__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1481854542118