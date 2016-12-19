// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24791__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24791__auto__){
return or__24791__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24791__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24791__auto__)){
return or__24791__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29941_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29941_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__29946 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29947 = null;
var count__29948 = (0);
var i__29949 = (0);
while(true){
if((i__29949 < count__29948)){
var n = cljs.core._nth.call(null,chunk__29947,i__29949);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29950 = seq__29946;
var G__29951 = chunk__29947;
var G__29952 = count__29948;
var G__29953 = (i__29949 + (1));
seq__29946 = G__29950;
chunk__29947 = G__29951;
count__29948 = G__29952;
i__29949 = G__29953;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29946);
if(temp__4657__auto__){
var seq__29946__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29946__$1)){
var c__25602__auto__ = cljs.core.chunk_first.call(null,seq__29946__$1);
var G__29954 = cljs.core.chunk_rest.call(null,seq__29946__$1);
var G__29955 = c__25602__auto__;
var G__29956 = cljs.core.count.call(null,c__25602__auto__);
var G__29957 = (0);
seq__29946 = G__29954;
chunk__29947 = G__29955;
count__29948 = G__29956;
i__29949 = G__29957;
continue;
} else {
var n = cljs.core.first.call(null,seq__29946__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29958 = cljs.core.next.call(null,seq__29946__$1);
var G__29959 = null;
var G__29960 = (0);
var G__29961 = (0);
seq__29946 = G__29958;
chunk__29947 = G__29959;
count__29948 = G__29960;
i__29949 = G__29961;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__30012_30023 = cljs.core.seq.call(null,deps);
var chunk__30013_30024 = null;
var count__30014_30025 = (0);
var i__30015_30026 = (0);
while(true){
if((i__30015_30026 < count__30014_30025)){
var dep_30027 = cljs.core._nth.call(null,chunk__30013_30024,i__30015_30026);
topo_sort_helper_STAR_.call(null,dep_30027,(depth + (1)),state);

var G__30028 = seq__30012_30023;
var G__30029 = chunk__30013_30024;
var G__30030 = count__30014_30025;
var G__30031 = (i__30015_30026 + (1));
seq__30012_30023 = G__30028;
chunk__30013_30024 = G__30029;
count__30014_30025 = G__30030;
i__30015_30026 = G__30031;
continue;
} else {
var temp__4657__auto___30032 = cljs.core.seq.call(null,seq__30012_30023);
if(temp__4657__auto___30032){
var seq__30012_30033__$1 = temp__4657__auto___30032;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30012_30033__$1)){
var c__25602__auto___30034 = cljs.core.chunk_first.call(null,seq__30012_30033__$1);
var G__30035 = cljs.core.chunk_rest.call(null,seq__30012_30033__$1);
var G__30036 = c__25602__auto___30034;
var G__30037 = cljs.core.count.call(null,c__25602__auto___30034);
var G__30038 = (0);
seq__30012_30023 = G__30035;
chunk__30013_30024 = G__30036;
count__30014_30025 = G__30037;
i__30015_30026 = G__30038;
continue;
} else {
var dep_30039 = cljs.core.first.call(null,seq__30012_30033__$1);
topo_sort_helper_STAR_.call(null,dep_30039,(depth + (1)),state);

var G__30040 = cljs.core.next.call(null,seq__30012_30033__$1);
var G__30041 = null;
var G__30042 = (0);
var G__30043 = (0);
seq__30012_30023 = G__30040;
chunk__30013_30024 = G__30041;
count__30014_30025 = G__30042;
i__30015_30026 = G__30043;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30016){
var vec__30020 = p__30016;
var seq__30021 = cljs.core.seq.call(null,vec__30020);
var first__30022 = cljs.core.first.call(null,seq__30021);
var seq__30021__$1 = cljs.core.next.call(null,seq__30021);
var x = first__30022;
var xs = seq__30021__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30020,seq__30021,first__30022,seq__30021__$1,x,xs,get_deps__$1){
return (function (p1__29962_SHARP_){
return clojure.set.difference.call(null,p1__29962_SHARP_,x);
});})(vec__30020,seq__30021,first__30022,seq__30021__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__30056 = cljs.core.seq.call(null,provides);
var chunk__30057 = null;
var count__30058 = (0);
var i__30059 = (0);
while(true){
if((i__30059 < count__30058)){
var prov = cljs.core._nth.call(null,chunk__30057,i__30059);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30060_30068 = cljs.core.seq.call(null,requires);
var chunk__30061_30069 = null;
var count__30062_30070 = (0);
var i__30063_30071 = (0);
while(true){
if((i__30063_30071 < count__30062_30070)){
var req_30072 = cljs.core._nth.call(null,chunk__30061_30069,i__30063_30071);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30072,prov);

var G__30073 = seq__30060_30068;
var G__30074 = chunk__30061_30069;
var G__30075 = count__30062_30070;
var G__30076 = (i__30063_30071 + (1));
seq__30060_30068 = G__30073;
chunk__30061_30069 = G__30074;
count__30062_30070 = G__30075;
i__30063_30071 = G__30076;
continue;
} else {
var temp__4657__auto___30077 = cljs.core.seq.call(null,seq__30060_30068);
if(temp__4657__auto___30077){
var seq__30060_30078__$1 = temp__4657__auto___30077;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30060_30078__$1)){
var c__25602__auto___30079 = cljs.core.chunk_first.call(null,seq__30060_30078__$1);
var G__30080 = cljs.core.chunk_rest.call(null,seq__30060_30078__$1);
var G__30081 = c__25602__auto___30079;
var G__30082 = cljs.core.count.call(null,c__25602__auto___30079);
var G__30083 = (0);
seq__30060_30068 = G__30080;
chunk__30061_30069 = G__30081;
count__30062_30070 = G__30082;
i__30063_30071 = G__30083;
continue;
} else {
var req_30084 = cljs.core.first.call(null,seq__30060_30078__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30084,prov);

var G__30085 = cljs.core.next.call(null,seq__30060_30078__$1);
var G__30086 = null;
var G__30087 = (0);
var G__30088 = (0);
seq__30060_30068 = G__30085;
chunk__30061_30069 = G__30086;
count__30062_30070 = G__30087;
i__30063_30071 = G__30088;
continue;
}
} else {
}
}
break;
}

var G__30089 = seq__30056;
var G__30090 = chunk__30057;
var G__30091 = count__30058;
var G__30092 = (i__30059 + (1));
seq__30056 = G__30089;
chunk__30057 = G__30090;
count__30058 = G__30091;
i__30059 = G__30092;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30056);
if(temp__4657__auto__){
var seq__30056__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30056__$1)){
var c__25602__auto__ = cljs.core.chunk_first.call(null,seq__30056__$1);
var G__30093 = cljs.core.chunk_rest.call(null,seq__30056__$1);
var G__30094 = c__25602__auto__;
var G__30095 = cljs.core.count.call(null,c__25602__auto__);
var G__30096 = (0);
seq__30056 = G__30093;
chunk__30057 = G__30094;
count__30058 = G__30095;
i__30059 = G__30096;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30056__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30064_30097 = cljs.core.seq.call(null,requires);
var chunk__30065_30098 = null;
var count__30066_30099 = (0);
var i__30067_30100 = (0);
while(true){
if((i__30067_30100 < count__30066_30099)){
var req_30101 = cljs.core._nth.call(null,chunk__30065_30098,i__30067_30100);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30101,prov);

var G__30102 = seq__30064_30097;
var G__30103 = chunk__30065_30098;
var G__30104 = count__30066_30099;
var G__30105 = (i__30067_30100 + (1));
seq__30064_30097 = G__30102;
chunk__30065_30098 = G__30103;
count__30066_30099 = G__30104;
i__30067_30100 = G__30105;
continue;
} else {
var temp__4657__auto___30106__$1 = cljs.core.seq.call(null,seq__30064_30097);
if(temp__4657__auto___30106__$1){
var seq__30064_30107__$1 = temp__4657__auto___30106__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30064_30107__$1)){
var c__25602__auto___30108 = cljs.core.chunk_first.call(null,seq__30064_30107__$1);
var G__30109 = cljs.core.chunk_rest.call(null,seq__30064_30107__$1);
var G__30110 = c__25602__auto___30108;
var G__30111 = cljs.core.count.call(null,c__25602__auto___30108);
var G__30112 = (0);
seq__30064_30097 = G__30109;
chunk__30065_30098 = G__30110;
count__30066_30099 = G__30111;
i__30067_30100 = G__30112;
continue;
} else {
var req_30113 = cljs.core.first.call(null,seq__30064_30107__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30113,prov);

var G__30114 = cljs.core.next.call(null,seq__30064_30107__$1);
var G__30115 = null;
var G__30116 = (0);
var G__30117 = (0);
seq__30064_30097 = G__30114;
chunk__30065_30098 = G__30115;
count__30066_30099 = G__30116;
i__30067_30100 = G__30117;
continue;
}
} else {
}
}
break;
}

var G__30118 = cljs.core.next.call(null,seq__30056__$1);
var G__30119 = null;
var G__30120 = (0);
var G__30121 = (0);
seq__30056 = G__30118;
chunk__30057 = G__30119;
count__30058 = G__30120;
i__30059 = G__30121;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__30126_30130 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30127_30131 = null;
var count__30128_30132 = (0);
var i__30129_30133 = (0);
while(true){
if((i__30129_30133 < count__30128_30132)){
var ns_30134 = cljs.core._nth.call(null,chunk__30127_30131,i__30129_30133);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30134);

var G__30135 = seq__30126_30130;
var G__30136 = chunk__30127_30131;
var G__30137 = count__30128_30132;
var G__30138 = (i__30129_30133 + (1));
seq__30126_30130 = G__30135;
chunk__30127_30131 = G__30136;
count__30128_30132 = G__30137;
i__30129_30133 = G__30138;
continue;
} else {
var temp__4657__auto___30139 = cljs.core.seq.call(null,seq__30126_30130);
if(temp__4657__auto___30139){
var seq__30126_30140__$1 = temp__4657__auto___30139;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30126_30140__$1)){
var c__25602__auto___30141 = cljs.core.chunk_first.call(null,seq__30126_30140__$1);
var G__30142 = cljs.core.chunk_rest.call(null,seq__30126_30140__$1);
var G__30143 = c__25602__auto___30141;
var G__30144 = cljs.core.count.call(null,c__25602__auto___30141);
var G__30145 = (0);
seq__30126_30130 = G__30142;
chunk__30127_30131 = G__30143;
count__30128_30132 = G__30144;
i__30129_30133 = G__30145;
continue;
} else {
var ns_30146 = cljs.core.first.call(null,seq__30126_30140__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30146);

var G__30147 = cljs.core.next.call(null,seq__30126_30140__$1);
var G__30148 = null;
var G__30149 = (0);
var G__30150 = (0);
seq__30126_30130 = G__30147;
chunk__30127_30131 = G__30148;
count__30128_30132 = G__30149;
i__30129_30133 = G__30150;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__24791__auto__ = goog.require__;
if(cljs.core.truth_(or__24791__auto__)){
return or__24791__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__30151__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30151 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30152__i = 0, G__30152__a = new Array(arguments.length -  0);
while (G__30152__i < G__30152__a.length) {G__30152__a[G__30152__i] = arguments[G__30152__i + 0]; ++G__30152__i;}
  args = new cljs.core.IndexedSeq(G__30152__a,0);
} 
return G__30151__delegate.call(this,args);};
G__30151.cljs$lang$maxFixedArity = 0;
G__30151.cljs$lang$applyTo = (function (arglist__30153){
var args = cljs.core.seq(arglist__30153);
return G__30151__delegate(args);
});
G__30151.cljs$core$IFn$_invoke$arity$variadic = G__30151__delegate;
return G__30151;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30155 = cljs.core._EQ_;
var expr__30156 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30155.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30156))){
var path_parts = ((function (pred__30155,expr__30156){
return (function (p1__30154_SHARP_){
return clojure.string.split.call(null,p1__30154_SHARP_,/[\/\\]/);
});})(pred__30155,expr__30156))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__30155,expr__30156){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30158){if((e30158 instanceof Error)){
var e = e30158;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30158;

}
}})());
});
;})(path_parts,sep,root,pred__30155,expr__30156))
} else {
if(cljs.core.truth_(pred__30155.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30156))){
return ((function (pred__30155,expr__30156){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__30155,expr__30156){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__30155,expr__30156))
);

return deferred.addErrback(((function (deferred,pred__30155,expr__30156){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__30155,expr__30156))
);
});
;})(pred__30155,expr__30156))
} else {
return ((function (pred__30155,expr__30156){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30155,expr__30156))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30159,callback){
var map__30162 = p__30159;
var map__30162__$1 = ((((!((map__30162 == null)))?((((map__30162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30162):map__30162);
var file_msg = map__30162__$1;
var request_url = cljs.core.get.call(null,map__30162__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30162,map__30162__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30162,map__30162__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__26964__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto__){
return (function (){
var f__26965__auto__ = (function (){var switch__26851__auto__ = ((function (c__26964__auto__){
return (function (state_30186){
var state_val_30187 = (state_30186[(1)]);
if((state_val_30187 === (7))){
var inst_30182 = (state_30186[(2)]);
var state_30186__$1 = state_30186;
var statearr_30188_30208 = state_30186__$1;
(statearr_30188_30208[(2)] = inst_30182);

(statearr_30188_30208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30187 === (1))){
var state_30186__$1 = state_30186;
var statearr_30189_30209 = state_30186__$1;
(statearr_30189_30209[(2)] = null);

(statearr_30189_30209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30187 === (4))){
var inst_30166 = (state_30186[(7)]);
var inst_30166__$1 = (state_30186[(2)]);
var state_30186__$1 = (function (){var statearr_30190 = state_30186;
(statearr_30190[(7)] = inst_30166__$1);

return statearr_30190;
})();
if(cljs.core.truth_(inst_30166__$1)){
var statearr_30191_30210 = state_30186__$1;
(statearr_30191_30210[(1)] = (5));

} else {
var statearr_30192_30211 = state_30186__$1;
(statearr_30192_30211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30187 === (6))){
var state_30186__$1 = state_30186;
var statearr_30193_30212 = state_30186__$1;
(statearr_30193_30212[(2)] = null);

(statearr_30193_30212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30187 === (3))){
var inst_30184 = (state_30186[(2)]);
var state_30186__$1 = state_30186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30186__$1,inst_30184);
} else {
if((state_val_30187 === (2))){
var state_30186__$1 = state_30186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30186__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30187 === (11))){
var inst_30178 = (state_30186[(2)]);
var state_30186__$1 = (function (){var statearr_30194 = state_30186;
(statearr_30194[(8)] = inst_30178);

return statearr_30194;
})();
var statearr_30195_30213 = state_30186__$1;
(statearr_30195_30213[(2)] = null);

(statearr_30195_30213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30187 === (9))){
var inst_30170 = (state_30186[(9)]);
var inst_30172 = (state_30186[(10)]);
var inst_30174 = inst_30172.call(null,inst_30170);
var state_30186__$1 = state_30186;
var statearr_30196_30214 = state_30186__$1;
(statearr_30196_30214[(2)] = inst_30174);

(statearr_30196_30214[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30187 === (5))){
var inst_30166 = (state_30186[(7)]);
var inst_30168 = figwheel.client.file_reloading.blocking_load.call(null,inst_30166);
var state_30186__$1 = state_30186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30186__$1,(8),inst_30168);
} else {
if((state_val_30187 === (10))){
var inst_30170 = (state_30186[(9)]);
var inst_30176 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30170);
var state_30186__$1 = state_30186;
var statearr_30197_30215 = state_30186__$1;
(statearr_30197_30215[(2)] = inst_30176);

(statearr_30197_30215[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30187 === (8))){
var inst_30172 = (state_30186[(10)]);
var inst_30166 = (state_30186[(7)]);
var inst_30170 = (state_30186[(2)]);
var inst_30171 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30172__$1 = cljs.core.get.call(null,inst_30171,inst_30166);
var state_30186__$1 = (function (){var statearr_30198 = state_30186;
(statearr_30198[(9)] = inst_30170);

(statearr_30198[(10)] = inst_30172__$1);

return statearr_30198;
})();
if(cljs.core.truth_(inst_30172__$1)){
var statearr_30199_30216 = state_30186__$1;
(statearr_30199_30216[(1)] = (9));

} else {
var statearr_30200_30217 = state_30186__$1;
(statearr_30200_30217[(1)] = (10));

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
});})(c__26964__auto__))
;
return ((function (switch__26851__auto__,c__26964__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26852__auto__ = null;
var figwheel$client$file_reloading$state_machine__26852__auto____0 = (function (){
var statearr_30204 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30204[(0)] = figwheel$client$file_reloading$state_machine__26852__auto__);

(statearr_30204[(1)] = (1));

return statearr_30204;
});
var figwheel$client$file_reloading$state_machine__26852__auto____1 = (function (state_30186){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_30186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e30205){if((e30205 instanceof Object)){
var ex__26855__auto__ = e30205;
var statearr_30206_30218 = state_30186;
(statearr_30206_30218[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30219 = state_30186;
state_30186 = G__30219;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26852__auto__ = function(state_30186){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26852__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26852__auto____1.call(this,state_30186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26852__auto____0;
figwheel$client$file_reloading$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26852__auto____1;
return figwheel$client$file_reloading$state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26964__auto__))
})();
var state__26966__auto__ = (function (){var statearr_30207 = f__26965__auto__.call(null);
(statearr_30207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26964__auto__);

return statearr_30207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto__))
);

return c__26964__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30220,callback){
var map__30223 = p__30220;
var map__30223__$1 = ((((!((map__30223 == null)))?((((map__30223.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30223.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30223):map__30223);
var file_msg = map__30223__$1;
var namespace = cljs.core.get.call(null,map__30223__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30223,map__30223__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30223,map__30223__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30225){
var map__30228 = p__30225;
var map__30228__$1 = ((((!((map__30228 == null)))?((((map__30228.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30228.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30228):map__30228);
var file_msg = map__30228__$1;
var namespace = cljs.core.get.call(null,map__30228__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24779__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__24779__auto__){
var or__24791__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24791__auto__)){
return or__24791__auto__;
} else {
var or__24791__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24791__auto____$1)){
return or__24791__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24779__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30230,callback){
var map__30233 = p__30230;
var map__30233__$1 = ((((!((map__30233 == null)))?((((map__30233.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30233.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30233):map__30233);
var file_msg = map__30233__$1;
var request_url = cljs.core.get.call(null,map__30233__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30233__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__26964__auto___30337 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto___30337,out){
return (function (){
var f__26965__auto__ = (function (){var switch__26851__auto__ = ((function (c__26964__auto___30337,out){
return (function (state_30319){
var state_val_30320 = (state_30319[(1)]);
if((state_val_30320 === (1))){
var inst_30293 = cljs.core.seq.call(null,files);
var inst_30294 = cljs.core.first.call(null,inst_30293);
var inst_30295 = cljs.core.next.call(null,inst_30293);
var inst_30296 = files;
var state_30319__$1 = (function (){var statearr_30321 = state_30319;
(statearr_30321[(7)] = inst_30294);

(statearr_30321[(8)] = inst_30296);

(statearr_30321[(9)] = inst_30295);

return statearr_30321;
})();
var statearr_30322_30338 = state_30319__$1;
(statearr_30322_30338[(2)] = null);

(statearr_30322_30338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (2))){
var inst_30302 = (state_30319[(10)]);
var inst_30296 = (state_30319[(8)]);
var inst_30301 = cljs.core.seq.call(null,inst_30296);
var inst_30302__$1 = cljs.core.first.call(null,inst_30301);
var inst_30303 = cljs.core.next.call(null,inst_30301);
var inst_30304 = (inst_30302__$1 == null);
var inst_30305 = cljs.core.not.call(null,inst_30304);
var state_30319__$1 = (function (){var statearr_30323 = state_30319;
(statearr_30323[(11)] = inst_30303);

(statearr_30323[(10)] = inst_30302__$1);

return statearr_30323;
})();
if(inst_30305){
var statearr_30324_30339 = state_30319__$1;
(statearr_30324_30339[(1)] = (4));

} else {
var statearr_30325_30340 = state_30319__$1;
(statearr_30325_30340[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (3))){
var inst_30317 = (state_30319[(2)]);
var state_30319__$1 = state_30319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30319__$1,inst_30317);
} else {
if((state_val_30320 === (4))){
var inst_30302 = (state_30319[(10)]);
var inst_30307 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30302);
var state_30319__$1 = state_30319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30319__$1,(7),inst_30307);
} else {
if((state_val_30320 === (5))){
var inst_30313 = cljs.core.async.close_BANG_.call(null,out);
var state_30319__$1 = state_30319;
var statearr_30326_30341 = state_30319__$1;
(statearr_30326_30341[(2)] = inst_30313);

(statearr_30326_30341[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (6))){
var inst_30315 = (state_30319[(2)]);
var state_30319__$1 = state_30319;
var statearr_30327_30342 = state_30319__$1;
(statearr_30327_30342[(2)] = inst_30315);

(statearr_30327_30342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (7))){
var inst_30303 = (state_30319[(11)]);
var inst_30309 = (state_30319[(2)]);
var inst_30310 = cljs.core.async.put_BANG_.call(null,out,inst_30309);
var inst_30296 = inst_30303;
var state_30319__$1 = (function (){var statearr_30328 = state_30319;
(statearr_30328[(12)] = inst_30310);

(statearr_30328[(8)] = inst_30296);

return statearr_30328;
})();
var statearr_30329_30343 = state_30319__$1;
(statearr_30329_30343[(2)] = null);

(statearr_30329_30343[(1)] = (2));


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
});})(c__26964__auto___30337,out))
;
return ((function (switch__26851__auto__,c__26964__auto___30337,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto____0 = (function (){
var statearr_30333 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30333[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto__);

(statearr_30333[(1)] = (1));

return statearr_30333;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto____1 = (function (state_30319){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_30319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e30334){if((e30334 instanceof Object)){
var ex__26855__auto__ = e30334;
var statearr_30335_30344 = state_30319;
(statearr_30335_30344[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30334;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30345 = state_30319;
state_30319 = G__30345;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto__ = function(state_30319){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto____1.call(this,state_30319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26964__auto___30337,out))
})();
var state__26966__auto__ = (function (){var statearr_30336 = f__26965__auto__.call(null);
(statearr_30336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26964__auto___30337);

return statearr_30336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto___30337,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30346,opts){
var map__30350 = p__30346;
var map__30350__$1 = ((((!((map__30350 == null)))?((((map__30350.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30350.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30350):map__30350);
var eval_body__$1 = cljs.core.get.call(null,map__30350__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30350__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24779__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24779__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24779__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30352){var e = e30352;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30353_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30353_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30362){
var vec__30363 = p__30362;
var k = cljs.core.nth.call(null,vec__30363,(0),null);
var v = cljs.core.nth.call(null,vec__30363,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30366){
var vec__30367 = p__30366;
var k = cljs.core.nth.call(null,vec__30367,(0),null);
var v = cljs.core.nth.call(null,vec__30367,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30373,p__30374){
var map__30621 = p__30373;
var map__30621__$1 = ((((!((map__30621 == null)))?((((map__30621.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30621.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30621):map__30621);
var opts = map__30621__$1;
var before_jsload = cljs.core.get.call(null,map__30621__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30621__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30621__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30622 = p__30374;
var map__30622__$1 = ((((!((map__30622 == null)))?((((map__30622.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30622.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30622):map__30622);
var msg = map__30622__$1;
var files = cljs.core.get.call(null,map__30622__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30622__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30622__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26964__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto__,map__30621,map__30621__$1,opts,before_jsload,on_jsload,reload_dependents,map__30622,map__30622__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26965__auto__ = (function (){var switch__26851__auto__ = ((function (c__26964__auto__,map__30621,map__30621__$1,opts,before_jsload,on_jsload,reload_dependents,map__30622,map__30622__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30775){
var state_val_30776 = (state_30775[(1)]);
if((state_val_30776 === (7))){
var inst_30637 = (state_30775[(7)]);
var inst_30639 = (state_30775[(8)]);
var inst_30636 = (state_30775[(9)]);
var inst_30638 = (state_30775[(10)]);
var inst_30644 = cljs.core._nth.call(null,inst_30637,inst_30639);
var inst_30645 = figwheel.client.file_reloading.eval_body.call(null,inst_30644,opts);
var inst_30646 = (inst_30639 + (1));
var tmp30777 = inst_30637;
var tmp30778 = inst_30636;
var tmp30779 = inst_30638;
var inst_30636__$1 = tmp30778;
var inst_30637__$1 = tmp30777;
var inst_30638__$1 = tmp30779;
var inst_30639__$1 = inst_30646;
var state_30775__$1 = (function (){var statearr_30780 = state_30775;
(statearr_30780[(7)] = inst_30637__$1);

(statearr_30780[(8)] = inst_30639__$1);

(statearr_30780[(9)] = inst_30636__$1);

(statearr_30780[(11)] = inst_30645);

(statearr_30780[(10)] = inst_30638__$1);

return statearr_30780;
})();
var statearr_30781_30867 = state_30775__$1;
(statearr_30781_30867[(2)] = null);

(statearr_30781_30867[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (20))){
var inst_30679 = (state_30775[(12)]);
var inst_30687 = figwheel.client.file_reloading.sort_files.call(null,inst_30679);
var state_30775__$1 = state_30775;
var statearr_30782_30868 = state_30775__$1;
(statearr_30782_30868[(2)] = inst_30687);

(statearr_30782_30868[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (27))){
var state_30775__$1 = state_30775;
var statearr_30783_30869 = state_30775__$1;
(statearr_30783_30869[(2)] = null);

(statearr_30783_30869[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (1))){
var inst_30628 = (state_30775[(13)]);
var inst_30625 = before_jsload.call(null,files);
var inst_30626 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30627 = (function (){return ((function (inst_30628,inst_30625,inst_30626,state_val_30776,c__26964__auto__,map__30621,map__30621__$1,opts,before_jsload,on_jsload,reload_dependents,map__30622,map__30622__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30370_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30370_SHARP_);
});
;})(inst_30628,inst_30625,inst_30626,state_val_30776,c__26964__auto__,map__30621,map__30621__$1,opts,before_jsload,on_jsload,reload_dependents,map__30622,map__30622__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30628__$1 = cljs.core.filter.call(null,inst_30627,files);
var inst_30629 = cljs.core.not_empty.call(null,inst_30628__$1);
var state_30775__$1 = (function (){var statearr_30784 = state_30775;
(statearr_30784[(13)] = inst_30628__$1);

(statearr_30784[(14)] = inst_30626);

(statearr_30784[(15)] = inst_30625);

return statearr_30784;
})();
if(cljs.core.truth_(inst_30629)){
var statearr_30785_30870 = state_30775__$1;
(statearr_30785_30870[(1)] = (2));

} else {
var statearr_30786_30871 = state_30775__$1;
(statearr_30786_30871[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (24))){
var state_30775__$1 = state_30775;
var statearr_30787_30872 = state_30775__$1;
(statearr_30787_30872[(2)] = null);

(statearr_30787_30872[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (39))){
var inst_30729 = (state_30775[(16)]);
var state_30775__$1 = state_30775;
var statearr_30788_30873 = state_30775__$1;
(statearr_30788_30873[(2)] = inst_30729);

(statearr_30788_30873[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (46))){
var inst_30770 = (state_30775[(2)]);
var state_30775__$1 = state_30775;
var statearr_30789_30874 = state_30775__$1;
(statearr_30789_30874[(2)] = inst_30770);

(statearr_30789_30874[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (4))){
var inst_30673 = (state_30775[(2)]);
var inst_30674 = cljs.core.List.EMPTY;
var inst_30675 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30674);
var inst_30676 = (function (){return ((function (inst_30673,inst_30674,inst_30675,state_val_30776,c__26964__auto__,map__30621,map__30621__$1,opts,before_jsload,on_jsload,reload_dependents,map__30622,map__30622__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30371_SHARP_){
var and__24779__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30371_SHARP_);
if(cljs.core.truth_(and__24779__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30371_SHARP_));
} else {
return and__24779__auto__;
}
});
;})(inst_30673,inst_30674,inst_30675,state_val_30776,c__26964__auto__,map__30621,map__30621__$1,opts,before_jsload,on_jsload,reload_dependents,map__30622,map__30622__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30677 = cljs.core.filter.call(null,inst_30676,files);
var inst_30678 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30679 = cljs.core.concat.call(null,inst_30677,inst_30678);
var state_30775__$1 = (function (){var statearr_30790 = state_30775;
(statearr_30790[(17)] = inst_30675);

(statearr_30790[(18)] = inst_30673);

(statearr_30790[(12)] = inst_30679);

return statearr_30790;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30791_30875 = state_30775__$1;
(statearr_30791_30875[(1)] = (16));

} else {
var statearr_30792_30876 = state_30775__$1;
(statearr_30792_30876[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (15))){
var inst_30663 = (state_30775[(2)]);
var state_30775__$1 = state_30775;
var statearr_30793_30877 = state_30775__$1;
(statearr_30793_30877[(2)] = inst_30663);

(statearr_30793_30877[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (21))){
var inst_30689 = (state_30775[(19)]);
var inst_30689__$1 = (state_30775[(2)]);
var inst_30690 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30689__$1);
var state_30775__$1 = (function (){var statearr_30794 = state_30775;
(statearr_30794[(19)] = inst_30689__$1);

return statearr_30794;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30775__$1,(22),inst_30690);
} else {
if((state_val_30776 === (31))){
var inst_30773 = (state_30775[(2)]);
var state_30775__$1 = state_30775;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30775__$1,inst_30773);
} else {
if((state_val_30776 === (32))){
var inst_30729 = (state_30775[(16)]);
var inst_30734 = inst_30729.cljs$lang$protocol_mask$partition0$;
var inst_30735 = (inst_30734 & (64));
var inst_30736 = inst_30729.cljs$core$ISeq$;
var inst_30737 = (inst_30735) || (inst_30736);
var state_30775__$1 = state_30775;
if(cljs.core.truth_(inst_30737)){
var statearr_30795_30878 = state_30775__$1;
(statearr_30795_30878[(1)] = (35));

} else {
var statearr_30796_30879 = state_30775__$1;
(statearr_30796_30879[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (40))){
var inst_30750 = (state_30775[(20)]);
var inst_30749 = (state_30775[(2)]);
var inst_30750__$1 = cljs.core.get.call(null,inst_30749,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30751 = cljs.core.get.call(null,inst_30749,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30752 = cljs.core.not_empty.call(null,inst_30750__$1);
var state_30775__$1 = (function (){var statearr_30797 = state_30775;
(statearr_30797[(21)] = inst_30751);

(statearr_30797[(20)] = inst_30750__$1);

return statearr_30797;
})();
if(cljs.core.truth_(inst_30752)){
var statearr_30798_30880 = state_30775__$1;
(statearr_30798_30880[(1)] = (41));

} else {
var statearr_30799_30881 = state_30775__$1;
(statearr_30799_30881[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (33))){
var state_30775__$1 = state_30775;
var statearr_30800_30882 = state_30775__$1;
(statearr_30800_30882[(2)] = false);

(statearr_30800_30882[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (13))){
var inst_30649 = (state_30775[(22)]);
var inst_30653 = cljs.core.chunk_first.call(null,inst_30649);
var inst_30654 = cljs.core.chunk_rest.call(null,inst_30649);
var inst_30655 = cljs.core.count.call(null,inst_30653);
var inst_30636 = inst_30654;
var inst_30637 = inst_30653;
var inst_30638 = inst_30655;
var inst_30639 = (0);
var state_30775__$1 = (function (){var statearr_30801 = state_30775;
(statearr_30801[(7)] = inst_30637);

(statearr_30801[(8)] = inst_30639);

(statearr_30801[(9)] = inst_30636);

(statearr_30801[(10)] = inst_30638);

return statearr_30801;
})();
var statearr_30802_30883 = state_30775__$1;
(statearr_30802_30883[(2)] = null);

(statearr_30802_30883[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (22))){
var inst_30697 = (state_30775[(23)]);
var inst_30692 = (state_30775[(24)]);
var inst_30689 = (state_30775[(19)]);
var inst_30693 = (state_30775[(25)]);
var inst_30692__$1 = (state_30775[(2)]);
var inst_30693__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30692__$1);
var inst_30694 = (function (){var all_files = inst_30689;
var res_SINGLEQUOTE_ = inst_30692__$1;
var res = inst_30693__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30697,inst_30692,inst_30689,inst_30693,inst_30692__$1,inst_30693__$1,state_val_30776,c__26964__auto__,map__30621,map__30621__$1,opts,before_jsload,on_jsload,reload_dependents,map__30622,map__30622__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30372_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30372_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30697,inst_30692,inst_30689,inst_30693,inst_30692__$1,inst_30693__$1,state_val_30776,c__26964__auto__,map__30621,map__30621__$1,opts,before_jsload,on_jsload,reload_dependents,map__30622,map__30622__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30695 = cljs.core.filter.call(null,inst_30694,inst_30692__$1);
var inst_30696 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30697__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30696);
var inst_30698 = cljs.core.not_empty.call(null,inst_30697__$1);
var state_30775__$1 = (function (){var statearr_30803 = state_30775;
(statearr_30803[(23)] = inst_30697__$1);

(statearr_30803[(24)] = inst_30692__$1);

(statearr_30803[(25)] = inst_30693__$1);

(statearr_30803[(26)] = inst_30695);

return statearr_30803;
})();
if(cljs.core.truth_(inst_30698)){
var statearr_30804_30884 = state_30775__$1;
(statearr_30804_30884[(1)] = (23));

} else {
var statearr_30805_30885 = state_30775__$1;
(statearr_30805_30885[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (36))){
var state_30775__$1 = state_30775;
var statearr_30806_30886 = state_30775__$1;
(statearr_30806_30886[(2)] = false);

(statearr_30806_30886[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (41))){
var inst_30750 = (state_30775[(20)]);
var inst_30754 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30755 = cljs.core.map.call(null,inst_30754,inst_30750);
var inst_30756 = cljs.core.pr_str.call(null,inst_30755);
var inst_30757 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30756)].join('');
var inst_30758 = figwheel.client.utils.log.call(null,inst_30757);
var state_30775__$1 = state_30775;
var statearr_30807_30887 = state_30775__$1;
(statearr_30807_30887[(2)] = inst_30758);

(statearr_30807_30887[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (43))){
var inst_30751 = (state_30775[(21)]);
var inst_30761 = (state_30775[(2)]);
var inst_30762 = cljs.core.not_empty.call(null,inst_30751);
var state_30775__$1 = (function (){var statearr_30808 = state_30775;
(statearr_30808[(27)] = inst_30761);

return statearr_30808;
})();
if(cljs.core.truth_(inst_30762)){
var statearr_30809_30888 = state_30775__$1;
(statearr_30809_30888[(1)] = (44));

} else {
var statearr_30810_30889 = state_30775__$1;
(statearr_30810_30889[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (29))){
var inst_30697 = (state_30775[(23)]);
var inst_30692 = (state_30775[(24)]);
var inst_30689 = (state_30775[(19)]);
var inst_30693 = (state_30775[(25)]);
var inst_30729 = (state_30775[(16)]);
var inst_30695 = (state_30775[(26)]);
var inst_30725 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30728 = (function (){var all_files = inst_30689;
var res_SINGLEQUOTE_ = inst_30692;
var res = inst_30693;
var files_not_loaded = inst_30695;
var dependencies_that_loaded = inst_30697;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30697,inst_30692,inst_30689,inst_30693,inst_30729,inst_30695,inst_30725,state_val_30776,c__26964__auto__,map__30621,map__30621__$1,opts,before_jsload,on_jsload,reload_dependents,map__30622,map__30622__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30727){
var map__30811 = p__30727;
var map__30811__$1 = ((((!((map__30811 == null)))?((((map__30811.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30811.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30811):map__30811);
var namespace = cljs.core.get.call(null,map__30811__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30697,inst_30692,inst_30689,inst_30693,inst_30729,inst_30695,inst_30725,state_val_30776,c__26964__auto__,map__30621,map__30621__$1,opts,before_jsload,on_jsload,reload_dependents,map__30622,map__30622__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30729__$1 = cljs.core.group_by.call(null,inst_30728,inst_30695);
var inst_30731 = (inst_30729__$1 == null);
var inst_30732 = cljs.core.not.call(null,inst_30731);
var state_30775__$1 = (function (){var statearr_30813 = state_30775;
(statearr_30813[(28)] = inst_30725);

(statearr_30813[(16)] = inst_30729__$1);

return statearr_30813;
})();
if(inst_30732){
var statearr_30814_30890 = state_30775__$1;
(statearr_30814_30890[(1)] = (32));

} else {
var statearr_30815_30891 = state_30775__$1;
(statearr_30815_30891[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (44))){
var inst_30751 = (state_30775[(21)]);
var inst_30764 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30751);
var inst_30765 = cljs.core.pr_str.call(null,inst_30764);
var inst_30766 = [cljs.core.str("not required: "),cljs.core.str(inst_30765)].join('');
var inst_30767 = figwheel.client.utils.log.call(null,inst_30766);
var state_30775__$1 = state_30775;
var statearr_30816_30892 = state_30775__$1;
(statearr_30816_30892[(2)] = inst_30767);

(statearr_30816_30892[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (6))){
var inst_30670 = (state_30775[(2)]);
var state_30775__$1 = state_30775;
var statearr_30817_30893 = state_30775__$1;
(statearr_30817_30893[(2)] = inst_30670);

(statearr_30817_30893[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (28))){
var inst_30695 = (state_30775[(26)]);
var inst_30722 = (state_30775[(2)]);
var inst_30723 = cljs.core.not_empty.call(null,inst_30695);
var state_30775__$1 = (function (){var statearr_30818 = state_30775;
(statearr_30818[(29)] = inst_30722);

return statearr_30818;
})();
if(cljs.core.truth_(inst_30723)){
var statearr_30819_30894 = state_30775__$1;
(statearr_30819_30894[(1)] = (29));

} else {
var statearr_30820_30895 = state_30775__$1;
(statearr_30820_30895[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (25))){
var inst_30693 = (state_30775[(25)]);
var inst_30709 = (state_30775[(2)]);
var inst_30710 = cljs.core.not_empty.call(null,inst_30693);
var state_30775__$1 = (function (){var statearr_30821 = state_30775;
(statearr_30821[(30)] = inst_30709);

return statearr_30821;
})();
if(cljs.core.truth_(inst_30710)){
var statearr_30822_30896 = state_30775__$1;
(statearr_30822_30896[(1)] = (26));

} else {
var statearr_30823_30897 = state_30775__$1;
(statearr_30823_30897[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (34))){
var inst_30744 = (state_30775[(2)]);
var state_30775__$1 = state_30775;
if(cljs.core.truth_(inst_30744)){
var statearr_30824_30898 = state_30775__$1;
(statearr_30824_30898[(1)] = (38));

} else {
var statearr_30825_30899 = state_30775__$1;
(statearr_30825_30899[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (17))){
var state_30775__$1 = state_30775;
var statearr_30826_30900 = state_30775__$1;
(statearr_30826_30900[(2)] = recompile_dependents);

(statearr_30826_30900[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (3))){
var state_30775__$1 = state_30775;
var statearr_30827_30901 = state_30775__$1;
(statearr_30827_30901[(2)] = null);

(statearr_30827_30901[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (12))){
var inst_30666 = (state_30775[(2)]);
var state_30775__$1 = state_30775;
var statearr_30828_30902 = state_30775__$1;
(statearr_30828_30902[(2)] = inst_30666);

(statearr_30828_30902[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (2))){
var inst_30628 = (state_30775[(13)]);
var inst_30635 = cljs.core.seq.call(null,inst_30628);
var inst_30636 = inst_30635;
var inst_30637 = null;
var inst_30638 = (0);
var inst_30639 = (0);
var state_30775__$1 = (function (){var statearr_30829 = state_30775;
(statearr_30829[(7)] = inst_30637);

(statearr_30829[(8)] = inst_30639);

(statearr_30829[(9)] = inst_30636);

(statearr_30829[(10)] = inst_30638);

return statearr_30829;
})();
var statearr_30830_30903 = state_30775__$1;
(statearr_30830_30903[(2)] = null);

(statearr_30830_30903[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (23))){
var inst_30697 = (state_30775[(23)]);
var inst_30692 = (state_30775[(24)]);
var inst_30689 = (state_30775[(19)]);
var inst_30693 = (state_30775[(25)]);
var inst_30695 = (state_30775[(26)]);
var inst_30700 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30702 = (function (){var all_files = inst_30689;
var res_SINGLEQUOTE_ = inst_30692;
var res = inst_30693;
var files_not_loaded = inst_30695;
var dependencies_that_loaded = inst_30697;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30697,inst_30692,inst_30689,inst_30693,inst_30695,inst_30700,state_val_30776,c__26964__auto__,map__30621,map__30621__$1,opts,before_jsload,on_jsload,reload_dependents,map__30622,map__30622__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30701){
var map__30831 = p__30701;
var map__30831__$1 = ((((!((map__30831 == null)))?((((map__30831.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30831.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30831):map__30831);
var request_url = cljs.core.get.call(null,map__30831__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30697,inst_30692,inst_30689,inst_30693,inst_30695,inst_30700,state_val_30776,c__26964__auto__,map__30621,map__30621__$1,opts,before_jsload,on_jsload,reload_dependents,map__30622,map__30622__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30703 = cljs.core.reverse.call(null,inst_30697);
var inst_30704 = cljs.core.map.call(null,inst_30702,inst_30703);
var inst_30705 = cljs.core.pr_str.call(null,inst_30704);
var inst_30706 = figwheel.client.utils.log.call(null,inst_30705);
var state_30775__$1 = (function (){var statearr_30833 = state_30775;
(statearr_30833[(31)] = inst_30700);

return statearr_30833;
})();
var statearr_30834_30904 = state_30775__$1;
(statearr_30834_30904[(2)] = inst_30706);

(statearr_30834_30904[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (35))){
var state_30775__$1 = state_30775;
var statearr_30835_30905 = state_30775__$1;
(statearr_30835_30905[(2)] = true);

(statearr_30835_30905[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (19))){
var inst_30679 = (state_30775[(12)]);
var inst_30685 = figwheel.client.file_reloading.expand_files.call(null,inst_30679);
var state_30775__$1 = state_30775;
var statearr_30836_30906 = state_30775__$1;
(statearr_30836_30906[(2)] = inst_30685);

(statearr_30836_30906[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (11))){
var state_30775__$1 = state_30775;
var statearr_30837_30907 = state_30775__$1;
(statearr_30837_30907[(2)] = null);

(statearr_30837_30907[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (9))){
var inst_30668 = (state_30775[(2)]);
var state_30775__$1 = state_30775;
var statearr_30838_30908 = state_30775__$1;
(statearr_30838_30908[(2)] = inst_30668);

(statearr_30838_30908[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (5))){
var inst_30639 = (state_30775[(8)]);
var inst_30638 = (state_30775[(10)]);
var inst_30641 = (inst_30639 < inst_30638);
var inst_30642 = inst_30641;
var state_30775__$1 = state_30775;
if(cljs.core.truth_(inst_30642)){
var statearr_30839_30909 = state_30775__$1;
(statearr_30839_30909[(1)] = (7));

} else {
var statearr_30840_30910 = state_30775__$1;
(statearr_30840_30910[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (14))){
var inst_30649 = (state_30775[(22)]);
var inst_30658 = cljs.core.first.call(null,inst_30649);
var inst_30659 = figwheel.client.file_reloading.eval_body.call(null,inst_30658,opts);
var inst_30660 = cljs.core.next.call(null,inst_30649);
var inst_30636 = inst_30660;
var inst_30637 = null;
var inst_30638 = (0);
var inst_30639 = (0);
var state_30775__$1 = (function (){var statearr_30841 = state_30775;
(statearr_30841[(7)] = inst_30637);

(statearr_30841[(8)] = inst_30639);

(statearr_30841[(9)] = inst_30636);

(statearr_30841[(32)] = inst_30659);

(statearr_30841[(10)] = inst_30638);

return statearr_30841;
})();
var statearr_30842_30911 = state_30775__$1;
(statearr_30842_30911[(2)] = null);

(statearr_30842_30911[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (45))){
var state_30775__$1 = state_30775;
var statearr_30843_30912 = state_30775__$1;
(statearr_30843_30912[(2)] = null);

(statearr_30843_30912[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (26))){
var inst_30697 = (state_30775[(23)]);
var inst_30692 = (state_30775[(24)]);
var inst_30689 = (state_30775[(19)]);
var inst_30693 = (state_30775[(25)]);
var inst_30695 = (state_30775[(26)]);
var inst_30712 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30714 = (function (){var all_files = inst_30689;
var res_SINGLEQUOTE_ = inst_30692;
var res = inst_30693;
var files_not_loaded = inst_30695;
var dependencies_that_loaded = inst_30697;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30697,inst_30692,inst_30689,inst_30693,inst_30695,inst_30712,state_val_30776,c__26964__auto__,map__30621,map__30621__$1,opts,before_jsload,on_jsload,reload_dependents,map__30622,map__30622__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30713){
var map__30844 = p__30713;
var map__30844__$1 = ((((!((map__30844 == null)))?((((map__30844.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30844.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30844):map__30844);
var namespace = cljs.core.get.call(null,map__30844__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30844__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30697,inst_30692,inst_30689,inst_30693,inst_30695,inst_30712,state_val_30776,c__26964__auto__,map__30621,map__30621__$1,opts,before_jsload,on_jsload,reload_dependents,map__30622,map__30622__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30715 = cljs.core.map.call(null,inst_30714,inst_30693);
var inst_30716 = cljs.core.pr_str.call(null,inst_30715);
var inst_30717 = figwheel.client.utils.log.call(null,inst_30716);
var inst_30718 = (function (){var all_files = inst_30689;
var res_SINGLEQUOTE_ = inst_30692;
var res = inst_30693;
var files_not_loaded = inst_30695;
var dependencies_that_loaded = inst_30697;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30697,inst_30692,inst_30689,inst_30693,inst_30695,inst_30712,inst_30714,inst_30715,inst_30716,inst_30717,state_val_30776,c__26964__auto__,map__30621,map__30621__$1,opts,before_jsload,on_jsload,reload_dependents,map__30622,map__30622__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30697,inst_30692,inst_30689,inst_30693,inst_30695,inst_30712,inst_30714,inst_30715,inst_30716,inst_30717,state_val_30776,c__26964__auto__,map__30621,map__30621__$1,opts,before_jsload,on_jsload,reload_dependents,map__30622,map__30622__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30719 = setTimeout(inst_30718,(10));
var state_30775__$1 = (function (){var statearr_30846 = state_30775;
(statearr_30846[(33)] = inst_30712);

(statearr_30846[(34)] = inst_30717);

return statearr_30846;
})();
var statearr_30847_30913 = state_30775__$1;
(statearr_30847_30913[(2)] = inst_30719);

(statearr_30847_30913[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (16))){
var state_30775__$1 = state_30775;
var statearr_30848_30914 = state_30775__$1;
(statearr_30848_30914[(2)] = reload_dependents);

(statearr_30848_30914[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (38))){
var inst_30729 = (state_30775[(16)]);
var inst_30746 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30729);
var state_30775__$1 = state_30775;
var statearr_30849_30915 = state_30775__$1;
(statearr_30849_30915[(2)] = inst_30746);

(statearr_30849_30915[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (30))){
var state_30775__$1 = state_30775;
var statearr_30850_30916 = state_30775__$1;
(statearr_30850_30916[(2)] = null);

(statearr_30850_30916[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (10))){
var inst_30649 = (state_30775[(22)]);
var inst_30651 = cljs.core.chunked_seq_QMARK_.call(null,inst_30649);
var state_30775__$1 = state_30775;
if(inst_30651){
var statearr_30851_30917 = state_30775__$1;
(statearr_30851_30917[(1)] = (13));

} else {
var statearr_30852_30918 = state_30775__$1;
(statearr_30852_30918[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (18))){
var inst_30683 = (state_30775[(2)]);
var state_30775__$1 = state_30775;
if(cljs.core.truth_(inst_30683)){
var statearr_30853_30919 = state_30775__$1;
(statearr_30853_30919[(1)] = (19));

} else {
var statearr_30854_30920 = state_30775__$1;
(statearr_30854_30920[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (42))){
var state_30775__$1 = state_30775;
var statearr_30855_30921 = state_30775__$1;
(statearr_30855_30921[(2)] = null);

(statearr_30855_30921[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (37))){
var inst_30741 = (state_30775[(2)]);
var state_30775__$1 = state_30775;
var statearr_30856_30922 = state_30775__$1;
(statearr_30856_30922[(2)] = inst_30741);

(statearr_30856_30922[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (8))){
var inst_30636 = (state_30775[(9)]);
var inst_30649 = (state_30775[(22)]);
var inst_30649__$1 = cljs.core.seq.call(null,inst_30636);
var state_30775__$1 = (function (){var statearr_30857 = state_30775;
(statearr_30857[(22)] = inst_30649__$1);

return statearr_30857;
})();
if(inst_30649__$1){
var statearr_30858_30923 = state_30775__$1;
(statearr_30858_30923[(1)] = (10));

} else {
var statearr_30859_30924 = state_30775__$1;
(statearr_30859_30924[(1)] = (11));

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
});})(c__26964__auto__,map__30621,map__30621__$1,opts,before_jsload,on_jsload,reload_dependents,map__30622,map__30622__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26851__auto__,c__26964__auto__,map__30621,map__30621__$1,opts,before_jsload,on_jsload,reload_dependents,map__30622,map__30622__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto____0 = (function (){
var statearr_30863 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30863[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto__);

(statearr_30863[(1)] = (1));

return statearr_30863;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto____1 = (function (state_30775){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_30775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e30864){if((e30864 instanceof Object)){
var ex__26855__auto__ = e30864;
var statearr_30865_30925 = state_30775;
(statearr_30865_30925[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30926 = state_30775;
state_30775 = G__30926;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto__ = function(state_30775){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto____1.call(this,state_30775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26964__auto__,map__30621,map__30621__$1,opts,before_jsload,on_jsload,reload_dependents,map__30622,map__30622__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26966__auto__ = (function (){var statearr_30866 = f__26965__auto__.call(null);
(statearr_30866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26964__auto__);

return statearr_30866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto__,map__30621,map__30621__$1,opts,before_jsload,on_jsload,reload_dependents,map__30622,map__30622__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26964__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30929,link){
var map__30932 = p__30929;
var map__30932__$1 = ((((!((map__30932 == null)))?((((map__30932.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30932.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30932):map__30932);
var file = cljs.core.get.call(null,map__30932__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__30932,map__30932__$1,file){
return (function (p1__30927_SHARP_,p2__30928_SHARP_){
if(cljs.core._EQ_.call(null,p1__30927_SHARP_,p2__30928_SHARP_)){
return p1__30927_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__30932,map__30932__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30938){
var map__30939 = p__30938;
var map__30939__$1 = ((((!((map__30939 == null)))?((((map__30939.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30939.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30939):map__30939);
var match_length = cljs.core.get.call(null,map__30939__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30939__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30934_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30934_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args30941 = [];
var len__25866__auto___30944 = arguments.length;
var i__25867__auto___30945 = (0);
while(true){
if((i__25867__auto___30945 < len__25866__auto___30944)){
args30941.push((arguments[i__25867__auto___30945]));

var G__30946 = (i__25867__auto___30945 + (1));
i__25867__auto___30945 = G__30946;
continue;
} else {
}
break;
}

var G__30943 = args30941.length;
switch (G__30943) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30941.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30948_SHARP_,p2__30949_SHARP_){
return cljs.core.assoc.call(null,p1__30948_SHARP_,cljs.core.get.call(null,p2__30949_SHARP_,key),p2__30949_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__30950){
var map__30953 = p__30950;
var map__30953__$1 = ((((!((map__30953 == null)))?((((map__30953.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30953.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30953):map__30953);
var f_data = map__30953__$1;
var file = cljs.core.get.call(null,map__30953__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30955,p__30956){
var map__30965 = p__30955;
var map__30965__$1 = ((((!((map__30965 == null)))?((((map__30965.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30965.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30965):map__30965);
var opts = map__30965__$1;
var on_cssload = cljs.core.get.call(null,map__30965__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30966 = p__30956;
var map__30966__$1 = ((((!((map__30966 == null)))?((((map__30966.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30966.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30966):map__30966);
var files_msg = map__30966__$1;
var files = cljs.core.get.call(null,map__30966__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__30969_30973 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__30970_30974 = null;
var count__30971_30975 = (0);
var i__30972_30976 = (0);
while(true){
if((i__30972_30976 < count__30971_30975)){
var f_30977 = cljs.core._nth.call(null,chunk__30970_30974,i__30972_30976);
figwheel.client.file_reloading.reload_css_file.call(null,f_30977);

var G__30978 = seq__30969_30973;
var G__30979 = chunk__30970_30974;
var G__30980 = count__30971_30975;
var G__30981 = (i__30972_30976 + (1));
seq__30969_30973 = G__30978;
chunk__30970_30974 = G__30979;
count__30971_30975 = G__30980;
i__30972_30976 = G__30981;
continue;
} else {
var temp__4657__auto___30982 = cljs.core.seq.call(null,seq__30969_30973);
if(temp__4657__auto___30982){
var seq__30969_30983__$1 = temp__4657__auto___30982;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30969_30983__$1)){
var c__25602__auto___30984 = cljs.core.chunk_first.call(null,seq__30969_30983__$1);
var G__30985 = cljs.core.chunk_rest.call(null,seq__30969_30983__$1);
var G__30986 = c__25602__auto___30984;
var G__30987 = cljs.core.count.call(null,c__25602__auto___30984);
var G__30988 = (0);
seq__30969_30973 = G__30985;
chunk__30970_30974 = G__30986;
count__30971_30975 = G__30987;
i__30972_30976 = G__30988;
continue;
} else {
var f_30989 = cljs.core.first.call(null,seq__30969_30983__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_30989);

var G__30990 = cljs.core.next.call(null,seq__30969_30983__$1);
var G__30991 = null;
var G__30992 = (0);
var G__30993 = (0);
seq__30969_30973 = G__30990;
chunk__30970_30974 = G__30991;
count__30971_30975 = G__30992;
i__30972_30976 = G__30993;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__30965,map__30965__$1,opts,on_cssload,map__30966,map__30966__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__30965,map__30965__$1,opts,on_cssload,map__30966,map__30966__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1481924972910