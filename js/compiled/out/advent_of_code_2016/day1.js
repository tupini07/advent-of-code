// Compiled by ClojureScript 1.9.229 {}
goog.provide('advent_of_code_2016.day1');
goog.require('cljs.core');
goog.require('sablono.core');
advent_of_code_2016.day1.abs = (function advent_of_code_2016$day1$abs(x){
if((x < (0))){
return (- x);
} else {
return x;

}
});
/**
 * Takes the directions 'L1, R5, R3...' and computes the end position in a cartesian system. Returns [xpos, ypos, dir] where dir is the direction we are facing
 */
advent_of_code_2016.day1.calc_end_position = (function advent_of_code_2016$day1$calc_end_position(directs){
return cljs.core.reduce.call(null,(function (p1__35216_SHARP_,p2__35215_SHARP_){
var vec__35223 = p2__35215_SHARP_;
var seq__35224 = cljs.core.seq.call(null,vec__35223);
var first__35225 = cljs.core.first.call(null,seq__35224);
var seq__35224__$1 = cljs.core.next.call(null,seq__35224);
var dir = first__35225;
var amnt = seq__35224__$1;
var amnt__$1 = (cljs.core.apply.call(null,cljs.core.str,amnt) | (0));
var vec__35226 = p1__35216_SHARP_;
var x = cljs.core.nth.call(null,vec__35226,(0),null);
var y = cljs.core.nth.call(null,vec__35226,(1),null);
var idr = cljs.core.nth.call(null,vec__35226,(2),null);
if(cljs.core._EQ_.call(null,idr,"N")){
if(cljs.core._EQ_.call(null,dir,"L")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - amnt__$1),y,"W"], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + amnt__$1),y,"E"], null);
}
} else {
if(cljs.core._EQ_.call(null,idr,"E")){
if(cljs.core._EQ_.call(null,dir,"L")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + amnt__$1),"N"], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - amnt__$1),"S"], null);
}
} else {
if(cljs.core._EQ_.call(null,idr,"S")){
if(cljs.core._EQ_.call(null,dir,"L")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + amnt__$1),y,"E"], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - amnt__$1),y,"W"], null);
}
} else {
if(cljs.core._EQ_.call(null,idr,"W")){
if(cljs.core._EQ_.call(null,dir,"L")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - amnt__$1),"S"], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + amnt__$1),"N"], null);
}
} else {
return null;
}
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),"N"], null),directs);
});
advent_of_code_2016.day1.solution = (function advent_of_code_2016$day1$solution(directs){

return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,advent_of_code_2016.day1.abs,cljs.core.take.call(null,(2),advent_of_code_2016.day1.calc_end_position.call(null,directs))));
});
advent_of_code_2016.day1.get_input = (function advent_of_code_2016$day1$get_input(){

return clojure.string.split.call(null,document.getElementById("inpt").value,/, /);
});
advent_of_code_2016.day1.set_result_BANG_ = (function advent_of_code_2016$day1$set_result_BANG_(res){
return document.getElementById("result").innerHTML = [cljs.core.str("Result => "),cljs.core.str(res)].join('');
});
advent_of_code_2016.day1.display = (function advent_of_code_2016$day1$display(){
return React.createElement("div",null,React.createElement("h1",null,"Solution for day 1"),sablono.interpreter.create_element.call(null,"input",({"type": "text", "id": "inpt"})),React.createElement("div",null,React.createElement("a",({"href": "#", "onClick": (function (){
return advent_of_code_2016.day1.set_result_BANG_.call(null,advent_of_code_2016.day1.solution.call(null,advent_of_code_2016.day1.get_input.call(null)));
})}),"Solve")),React.createElement("div",({"id": "result"})));
});

//# sourceMappingURL=day1.js.map?rel=1481924317334