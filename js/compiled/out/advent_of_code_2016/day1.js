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
 * Return an array with all the points we travers from a starting point
 */
advent_of_code_2016.day1.path_points = (function advent_of_code_2016$day1$path_points(strt,cmp,op,amnt){
advent_of_code_2016.day1.h_next_point = (function advent_of_code_2016$day1$path_points_$_h_next_point(this_point){
return advent_of_code_2016$day1$path_points.call(null,this_point,cmp,op,(amnt - (1)));
});

if((amnt === (0))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [strt], null);
} else {
var x = cljs.core.first.call(null,strt);
var y = cljs.core.last.call(null,strt);
var xi = op.call(null,x);
var yi = op.call(null,y);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [strt], null),((cljs.core._EQ_.call(null,cmp,new cljs.core.Symbol(null,"x","x",-555367584,null)))?advent_of_code_2016.day1.h_next_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xi,y], null)):((cljs.core._EQ_.call(null,cmp,new cljs.core.Symbol(null,"y","y",-117328249,null)))?advent_of_code_2016.day1.h_next_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,yi], null)):null)));
}
});
/**
 * Given a direction 'left or right', magnitude and initial position and initial direction calculate next point.
 * Returns an array with 
 * [next-x next-y next-direction modified-component operator-used]
 */
advent_of_code_2016.day1.next_point = (function advent_of_code_2016$day1$next_point(indir,lor,mag,x,y){
if(cljs.core._EQ_.call(null,indir,"N")){
if(cljs.core._EQ_.call(null,lor,"L")){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - mag),y,"W",new cljs.core.Symbol(null,"x","x",-555367584,null),cljs.core.dec], null);
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + mag),y,"E",new cljs.core.Symbol(null,"x","x",-555367584,null),cljs.core.inc], null);
}
} else {
if(cljs.core._EQ_.call(null,indir,"E")){
if(cljs.core._EQ_.call(null,lor,"L")){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + mag),"N",new cljs.core.Symbol(null,"y","y",-117328249,null),cljs.core.inc], null);
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - mag),"S",new cljs.core.Symbol(null,"y","y",-117328249,null),cljs.core.dec], null);
}
} else {
if(cljs.core._EQ_.call(null,indir,"S")){
if(cljs.core._EQ_.call(null,lor,"L")){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + mag),y,"E",new cljs.core.Symbol(null,"x","x",-555367584,null),cljs.core.inc], null);
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - mag),y,"W",new cljs.core.Symbol(null,"x","x",-555367584,null),cljs.core.dec], null);
}
} else {
if(cljs.core._EQ_.call(null,indir,"W")){
if(cljs.core._EQ_.call(null,lor,"L")){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - mag),"S",new cljs.core.Symbol(null,"y","y",-117328249,null),cljs.core.dec], null);
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + mag),"N",new cljs.core.Symbol(null,"y","y",-117328249,null),cljs.core.inc], null);
}
} else {
return null;
}
}
}
}
});
/**
 * Takes the directions 'L1, R5, R3...' and computes the end position in a cartesian system. Returns [xpos, ypos, dir] where dir is the direction we are facing
 */
advent_of_code_2016.day1.calc_end_position = (function advent_of_code_2016$day1$calc_end_position(directs){
return cljs.core.reduce.call(null,(function (p1__26387_SHARP_,p2__26386_SHARP_){
var vec__26397 = p2__26386_SHARP_;
var seq__26398 = cljs.core.seq.call(null,vec__26397);
var first__26399 = cljs.core.first.call(null,seq__26398);
var seq__26398__$1 = cljs.core.next.call(null,seq__26398);
var dir = first__26399;
var amnt = seq__26398__$1;
var amnt__$1 = (cljs.core.apply.call(null,cljs.core.str,amnt) | (0));
var vec__26400 = p1__26387_SHARP_;
var x = cljs.core.nth.call(null,vec__26400,(0),null);
var y = cljs.core.nth.call(null,vec__26400,(1),null);
var idr = cljs.core.nth.call(null,vec__26400,(2),null);
var points = cljs.core.nth.call(null,vec__26400,(3),null);
var vec__26403 = advent_of_code_2016.day1.next_point.call(null,idr,dir,amnt__$1,x,y);
var nx = cljs.core.nth.call(null,vec__26403,(0),null);
var ny = cljs.core.nth.call(null,vec__26403,(1),null);
var ndir = cljs.core.nth.call(null,vec__26403,(2),null);
var cmp = cljs.core.nth.call(null,vec__26403,(3),null);
var op = cljs.core.nth.call(null,vec__26403,(4),null);
var path = cljs.core.into.call(null,points,advent_of_code_2016.day1.path_points.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cmp,op,(amnt__$1 - (1))));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx,ny,ndir,path], null);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),"N",cljs.core.PersistentVector.EMPTY], null),directs);
});
advent_of_code_2016.day1.solution_1 = (function advent_of_code_2016$day1$solution_1(directs){

return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,advent_of_code_2016.day1.abs,cljs.core.take.call(null,(2),advent_of_code_2016.day1.calc_end_position.call(null,directs))));
});
advent_of_code_2016.day1.solution_2 = (function advent_of_code_2016$day1$solution_2(directs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,advent_of_code_2016.day1.abs,cljs.core.ffirst.call(null,cljs.core.filter.call(null,(function (p__26410){
var vec__26411 = p__26410;
var seq__26412 = cljs.core.seq.call(null,vec__26411);
var first__26413 = cljs.core.first.call(null,seq__26412);
var seq__26412__$1 = cljs.core.next.call(null,seq__26412);
var x = first__26413;
var xs = seq__26412__$1;
return cljs.core.set.call(null,xs).call(null,x);
}),cljs.core.reductions.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.last.call(null,advent_of_code_2016.day1.calc_end_position.call(null,directs)))))));
});
advent_of_code_2016.day1.get_input = (function advent_of_code_2016$day1$get_input(){

return clojure.string.split.call(null,document.getElementById("inpt").value,/, /);
});
advent_of_code_2016.day1.set_result_BANG_ = (function advent_of_code_2016$day1$set_result_BANG_(val){
return document.getElementById("result").innerHTML = [cljs.core.str("Result => "),cljs.core.str(val)].join('');
});
advent_of_code_2016.day1.display = (function advent_of_code_2016$day1$display(){
return React.createElement("div",null,React.createElement("h1",null,"Solution for day 1"),sablono.interpreter.create_element.call(null,"input",({"type": "text", "id": "inpt"})),React.createElement("div",({"id": "result"})),React.createElement("div",null,React.createElement("a",({"href": "#", "onClick": (function (){
return advent_of_code_2016.day1.set_result_BANG_.call(null,advent_of_code_2016.day1.solution_1.call(null,advent_of_code_2016.day1.get_input.call(null)));
})}),"Solve Part 1")),React.createElement("div",null,React.createElement("a",({"href": "#", "onClick": (function (){
return advent_of_code_2016.day1.set_result_BANG_.call(null,advent_of_code_2016.day1.solution_2.call(null,advent_of_code_2016.day1.get_input.call(null)));
})}),"Solve Part 2")));
});

//# sourceMappingURL=day1.js.map?rel=1482184876160