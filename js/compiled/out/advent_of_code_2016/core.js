// Compiled by ClojureScript 1.9.229 {}
goog.provide('advent_of_code_2016.core');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('advent_of_code_2016.day1');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof advent_of_code_2016.core.app_state !== 'undefined'){
} else {
advent_of_code_2016.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"displayed","displayed",-436192586),advent_of_code_2016.day1.display], null));
}
advent_of_code_2016.core.change_problem_BANG_ = (function advent_of_code_2016$core$change_problem_BANG_(dspl){
return cljs.core.swap_BANG_.call(null,advent_of_code_2016.core.app_state,(function (p1__35235_SHARP_){
return cljs.core.update.call(null,p1__35235_SHARP_,new cljs.core.Keyword(null,"displayed","displayed",-436192586),dspl);
}));
});
advent_of_code_2016.core.disp_manager = (function advent_of_code_2016$core$disp_manager(){
return React.createElement("div",null,React.createElement("div",({"style": ({"width": "20%", "float": "left", "padding-right": "20px"})}),React.createElement("h2",null,"Select problem you would like solution for"),React.createElement("a",({"href": "#", "onClick": (function (){
return advent_of_code_2016.core.change_problem_BANG_.call(null,advent_of_code_2016.day1.display);
})}),"Day 1")),React.createElement("div",({"style": ({"border": "3px dashed", "float": "right", "width": "75%", "padding": "20px"})}),sablono.interpreter.interpret.call(null,cljs.core.deref.call(null,advent_of_code_2016.core.app_state).call(null,new cljs.core.Keyword(null,"displayed","displayed",-436192586)).call(null))));
});
advent_of_code_2016.core.render_BANG_ = (function advent_of_code_2016$core$render_BANG_(){
return ReactDOM.render(advent_of_code_2016.core.disp_manager.call(null),document.getElementById("app"));
});
advent_of_code_2016.core.on_js_reload = (function advent_of_code_2016$core$on_js_reload(){
return null;
});
cljs.core.add_watch.call(null,advent_of_code_2016.core.app_state,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (_,___$1,___$2,___$3){
return advent_of_code_2016.core.render_BANG_.call(null);
}));
advent_of_code_2016.core.render_BANG_.call(null);

//# sourceMappingURL=core.js.map?rel=1481924317403