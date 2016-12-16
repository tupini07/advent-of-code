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
var or__24790__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24790__auto__){
return or__24790__auto__;
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
var or__24790__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29940_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29940_SHARP_));
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
var seq__29945 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29946 = null;
var count__29947 = (0);
var i__29948 = (0);
while(true){
if((i__29948 < count__29947)){
var n = cljs.core._nth.call(null,chunk__29946,i__29948);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29949 = seq__29945;
var G__29950 = chunk__29946;
var G__29951 = count__29947;
var G__29952 = (i__29948 + (1));
seq__29945 = G__29949;
chunk__29946 = G__29950;
count__29947 = G__29951;
i__29948 = G__29952;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29945);
if(temp__4657__auto__){
var seq__29945__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29945__$1)){
var c__25601__auto__ = cljs.core.chunk_first.call(null,seq__29945__$1);
var G__29953 = cljs.core.chunk_rest.call(null,seq__29945__$1);
var G__29954 = c__25601__auto__;
var G__29955 = cljs.core.count.call(null,c__25601__auto__);
var G__29956 = (0);
seq__29945 = G__29953;
chunk__29946 = G__29954;
count__29947 = G__29955;
i__29948 = G__29956;
continue;
} else {
var n = cljs.core.first.call(null,seq__29945__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29957 = cljs.core.next.call(null,seq__29945__$1);
var G__29958 = null;
var G__29959 = (0);
var G__29960 = (0);
seq__29945 = G__29957;
chunk__29946 = G__29958;
count__29947 = G__29959;
i__29948 = G__29960;
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

var seq__30011_30022 = cljs.core.seq.call(null,deps);
var chunk__30012_30023 = null;
var count__30013_30024 = (0);
var i__30014_30025 = (0);
while(true){
if((i__30014_30025 < count__30013_30024)){
var dep_30026 = cljs.core._nth.call(null,chunk__30012_30023,i__30014_30025);
topo_sort_helper_STAR_.call(null,dep_30026,(depth + (1)),state);

var G__30027 = seq__30011_30022;
var G__30028 = chunk__30012_30023;
var G__30029 = count__30013_30024;
var G__30030 = (i__30014_30025 + (1));
seq__30011_30022 = G__30027;
chunk__30012_30023 = G__30028;
count__30013_30024 = G__30029;
i__30014_30025 = G__30030;
continue;
} else {
var temp__4657__auto___30031 = cljs.core.seq.call(null,seq__30011_30022);
if(temp__4657__auto___30031){
var seq__30011_30032__$1 = temp__4657__auto___30031;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30011_30032__$1)){
var c__25601__auto___30033 = cljs.core.chunk_first.call(null,seq__30011_30032__$1);
var G__30034 = cljs.core.chunk_rest.call(null,seq__30011_30032__$1);
var G__30035 = c__25601__auto___30033;
var G__30036 = cljs.core.count.call(null,c__25601__auto___30033);
var G__30037 = (0);
seq__30011_30022 = G__30034;
chunk__30012_30023 = G__30035;
count__30013_30024 = G__30036;
i__30014_30025 = G__30037;
continue;
} else {
var dep_30038 = cljs.core.first.call(null,seq__30011_30032__$1);
topo_sort_helper_STAR_.call(null,dep_30038,(depth + (1)),state);

var G__30039 = cljs.core.next.call(null,seq__30011_30032__$1);
var G__30040 = null;
var G__30041 = (0);
var G__30042 = (0);
seq__30011_30022 = G__30039;
chunk__30012_30023 = G__30040;
count__30013_30024 = G__30041;
i__30014_30025 = G__30042;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30015){
var vec__30019 = p__30015;
var seq__30020 = cljs.core.seq.call(null,vec__30019);
var first__30021 = cljs.core.first.call(null,seq__30020);
var seq__30020__$1 = cljs.core.next.call(null,seq__30020);
var x = first__30021;
var xs = seq__30020__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30019,seq__30020,first__30021,seq__30020__$1,x,xs,get_deps__$1){
return (function (p1__29961_SHARP_){
return clojure.set.difference.call(null,p1__29961_SHARP_,x);
});})(vec__30019,seq__30020,first__30021,seq__30020__$1,x,xs,get_deps__$1))
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
var seq__30055 = cljs.core.seq.call(null,provides);
var chunk__30056 = null;
var count__30057 = (0);
var i__30058 = (0);
while(true){
if((i__30058 < count__30057)){
var prov = cljs.core._nth.call(null,chunk__30056,i__30058);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30059_30067 = cljs.core.seq.call(null,requires);
var chunk__30060_30068 = null;
var count__30061_30069 = (0);
var i__30062_30070 = (0);
while(true){
if((i__30062_30070 < count__30061_30069)){
var req_30071 = cljs.core._nth.call(null,chunk__30060_30068,i__30062_30070);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30071,prov);

var G__30072 = seq__30059_30067;
var G__30073 = chunk__30060_30068;
var G__30074 = count__30061_30069;
var G__30075 = (i__30062_30070 + (1));
seq__30059_30067 = G__30072;
chunk__30060_30068 = G__30073;
count__30061_30069 = G__30074;
i__30062_30070 = G__30075;
continue;
} else {
var temp__4657__auto___30076 = cljs.core.seq.call(null,seq__30059_30067);
if(temp__4657__auto___30076){
var seq__30059_30077__$1 = temp__4657__auto___30076;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30059_30077__$1)){
var c__25601__auto___30078 = cljs.core.chunk_first.call(null,seq__30059_30077__$1);
var G__30079 = cljs.core.chunk_rest.call(null,seq__30059_30077__$1);
var G__30080 = c__25601__auto___30078;
var G__30081 = cljs.core.count.call(null,c__25601__auto___30078);
var G__30082 = (0);
seq__30059_30067 = G__30079;
chunk__30060_30068 = G__30080;
count__30061_30069 = G__30081;
i__30062_30070 = G__30082;
continue;
} else {
var req_30083 = cljs.core.first.call(null,seq__30059_30077__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30083,prov);

var G__30084 = cljs.core.next.call(null,seq__30059_30077__$1);
var G__30085 = null;
var G__30086 = (0);
var G__30087 = (0);
seq__30059_30067 = G__30084;
chunk__30060_30068 = G__30085;
count__30061_30069 = G__30086;
i__30062_30070 = G__30087;
continue;
}
} else {
}
}
break;
}

var G__30088 = seq__30055;
var G__30089 = chunk__30056;
var G__30090 = count__30057;
var G__30091 = (i__30058 + (1));
seq__30055 = G__30088;
chunk__30056 = G__30089;
count__30057 = G__30090;
i__30058 = G__30091;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30055);
if(temp__4657__auto__){
var seq__30055__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30055__$1)){
var c__25601__auto__ = cljs.core.chunk_first.call(null,seq__30055__$1);
var G__30092 = cljs.core.chunk_rest.call(null,seq__30055__$1);
var G__30093 = c__25601__auto__;
var G__30094 = cljs.core.count.call(null,c__25601__auto__);
var G__30095 = (0);
seq__30055 = G__30092;
chunk__30056 = G__30093;
count__30057 = G__30094;
i__30058 = G__30095;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30055__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30063_30096 = cljs.core.seq.call(null,requires);
var chunk__30064_30097 = null;
var count__30065_30098 = (0);
var i__30066_30099 = (0);
while(true){
if((i__30066_30099 < count__30065_30098)){
var req_30100 = cljs.core._nth.call(null,chunk__30064_30097,i__30066_30099);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30100,prov);

var G__30101 = seq__30063_30096;
var G__30102 = chunk__30064_30097;
var G__30103 = count__30065_30098;
var G__30104 = (i__30066_30099 + (1));
seq__30063_30096 = G__30101;
chunk__30064_30097 = G__30102;
count__30065_30098 = G__30103;
i__30066_30099 = G__30104;
continue;
} else {
var temp__4657__auto___30105__$1 = cljs.core.seq.call(null,seq__30063_30096);
if(temp__4657__auto___30105__$1){
var seq__30063_30106__$1 = temp__4657__auto___30105__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30063_30106__$1)){
var c__25601__auto___30107 = cljs.core.chunk_first.call(null,seq__30063_30106__$1);
var G__30108 = cljs.core.chunk_rest.call(null,seq__30063_30106__$1);
var G__30109 = c__25601__auto___30107;
var G__30110 = cljs.core.count.call(null,c__25601__auto___30107);
var G__30111 = (0);
seq__30063_30096 = G__30108;
chunk__30064_30097 = G__30109;
count__30065_30098 = G__30110;
i__30066_30099 = G__30111;
continue;
} else {
var req_30112 = cljs.core.first.call(null,seq__30063_30106__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30112,prov);

var G__30113 = cljs.core.next.call(null,seq__30063_30106__$1);
var G__30114 = null;
var G__30115 = (0);
var G__30116 = (0);
seq__30063_30096 = G__30113;
chunk__30064_30097 = G__30114;
count__30065_30098 = G__30115;
i__30066_30099 = G__30116;
continue;
}
} else {
}
}
break;
}

var G__30117 = cljs.core.next.call(null,seq__30055__$1);
var G__30118 = null;
var G__30119 = (0);
var G__30120 = (0);
seq__30055 = G__30117;
chunk__30056 = G__30118;
count__30057 = G__30119;
i__30058 = G__30120;
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
var seq__30125_30129 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30126_30130 = null;
var count__30127_30131 = (0);
var i__30128_30132 = (0);
while(true){
if((i__30128_30132 < count__30127_30131)){
var ns_30133 = cljs.core._nth.call(null,chunk__30126_30130,i__30128_30132);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30133);

var G__30134 = seq__30125_30129;
var G__30135 = chunk__30126_30130;
var G__30136 = count__30127_30131;
var G__30137 = (i__30128_30132 + (1));
seq__30125_30129 = G__30134;
chunk__30126_30130 = G__30135;
count__30127_30131 = G__30136;
i__30128_30132 = G__30137;
continue;
} else {
var temp__4657__auto___30138 = cljs.core.seq.call(null,seq__30125_30129);
if(temp__4657__auto___30138){
var seq__30125_30139__$1 = temp__4657__auto___30138;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30125_30139__$1)){
var c__25601__auto___30140 = cljs.core.chunk_first.call(null,seq__30125_30139__$1);
var G__30141 = cljs.core.chunk_rest.call(null,seq__30125_30139__$1);
var G__30142 = c__25601__auto___30140;
var G__30143 = cljs.core.count.call(null,c__25601__auto___30140);
var G__30144 = (0);
seq__30125_30129 = G__30141;
chunk__30126_30130 = G__30142;
count__30127_30131 = G__30143;
i__30128_30132 = G__30144;
continue;
} else {
var ns_30145 = cljs.core.first.call(null,seq__30125_30139__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30145);

var G__30146 = cljs.core.next.call(null,seq__30125_30139__$1);
var G__30147 = null;
var G__30148 = (0);
var G__30149 = (0);
seq__30125_30129 = G__30146;
chunk__30126_30130 = G__30147;
count__30127_30131 = G__30148;
i__30128_30132 = G__30149;
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
goog.require_figwheel_backup_ = (function (){var or__24790__auto__ = goog.require__;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
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
var G__30150__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30150 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30151__i = 0, G__30151__a = new Array(arguments.length -  0);
while (G__30151__i < G__30151__a.length) {G__30151__a[G__30151__i] = arguments[G__30151__i + 0]; ++G__30151__i;}
  args = new cljs.core.IndexedSeq(G__30151__a,0);
} 
return G__30150__delegate.call(this,args);};
G__30150.cljs$lang$maxFixedArity = 0;
G__30150.cljs$lang$applyTo = (function (arglist__30152){
var args = cljs.core.seq(arglist__30152);
return G__30150__delegate(args);
});
G__30150.cljs$core$IFn$_invoke$arity$variadic = G__30150__delegate;
return G__30150;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30154 = cljs.core._EQ_;
var expr__30155 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30154.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30155))){
var path_parts = ((function (pred__30154,expr__30155){
return (function (p1__30153_SHARP_){
return clojure.string.split.call(null,p1__30153_SHARP_,/[\/\\]/);
});})(pred__30154,expr__30155))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__30154,expr__30155){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30157){if((e30157 instanceof Error)){
var e = e30157;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30157;

}
}})());
});
;})(path_parts,sep,root,pred__30154,expr__30155))
} else {
if(cljs.core.truth_(pred__30154.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30155))){
return ((function (pred__30154,expr__30155){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__30154,expr__30155){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__30154,expr__30155))
);

return deferred.addErrback(((function (deferred,pred__30154,expr__30155){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__30154,expr__30155))
);
});
;})(pred__30154,expr__30155))
} else {
return ((function (pred__30154,expr__30155){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30154,expr__30155))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30158,callback){
var map__30161 = p__30158;
var map__30161__$1 = ((((!((map__30161 == null)))?((((map__30161.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30161.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30161):map__30161);
var file_msg = map__30161__$1;
var request_url = cljs.core.get.call(null,map__30161__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30161,map__30161__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30161,map__30161__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__26963__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26963__auto__){
return (function (){
var f__26964__auto__ = (function (){var switch__26851__auto__ = ((function (c__26963__auto__){
return (function (state_30185){
var state_val_30186 = (state_30185[(1)]);
if((state_val_30186 === (7))){
var inst_30181 = (state_30185[(2)]);
var state_30185__$1 = state_30185;
var statearr_30187_30207 = state_30185__$1;
(statearr_30187_30207[(2)] = inst_30181);

(statearr_30187_30207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30186 === (1))){
var state_30185__$1 = state_30185;
var statearr_30188_30208 = state_30185__$1;
(statearr_30188_30208[(2)] = null);

(statearr_30188_30208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30186 === (4))){
var inst_30165 = (state_30185[(7)]);
var inst_30165__$1 = (state_30185[(2)]);
var state_30185__$1 = (function (){var statearr_30189 = state_30185;
(statearr_30189[(7)] = inst_30165__$1);

return statearr_30189;
})();
if(cljs.core.truth_(inst_30165__$1)){
var statearr_30190_30209 = state_30185__$1;
(statearr_30190_30209[(1)] = (5));

} else {
var statearr_30191_30210 = state_30185__$1;
(statearr_30191_30210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30186 === (6))){
var state_30185__$1 = state_30185;
var statearr_30192_30211 = state_30185__$1;
(statearr_30192_30211[(2)] = null);

(statearr_30192_30211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30186 === (3))){
var inst_30183 = (state_30185[(2)]);
var state_30185__$1 = state_30185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30185__$1,inst_30183);
} else {
if((state_val_30186 === (2))){
var state_30185__$1 = state_30185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30185__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30186 === (11))){
var inst_30177 = (state_30185[(2)]);
var state_30185__$1 = (function (){var statearr_30193 = state_30185;
(statearr_30193[(8)] = inst_30177);

return statearr_30193;
})();
var statearr_30194_30212 = state_30185__$1;
(statearr_30194_30212[(2)] = null);

(statearr_30194_30212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30186 === (9))){
var inst_30169 = (state_30185[(9)]);
var inst_30171 = (state_30185[(10)]);
var inst_30173 = inst_30171.call(null,inst_30169);
var state_30185__$1 = state_30185;
var statearr_30195_30213 = state_30185__$1;
(statearr_30195_30213[(2)] = inst_30173);

(statearr_30195_30213[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30186 === (5))){
var inst_30165 = (state_30185[(7)]);
var inst_30167 = figwheel.client.file_reloading.blocking_load.call(null,inst_30165);
var state_30185__$1 = state_30185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30185__$1,(8),inst_30167);
} else {
if((state_val_30186 === (10))){
var inst_30169 = (state_30185[(9)]);
var inst_30175 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30169);
var state_30185__$1 = state_30185;
var statearr_30196_30214 = state_30185__$1;
(statearr_30196_30214[(2)] = inst_30175);

(statearr_30196_30214[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30186 === (8))){
var inst_30171 = (state_30185[(10)]);
var inst_30165 = (state_30185[(7)]);
var inst_30169 = (state_30185[(2)]);
var inst_30170 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30171__$1 = cljs.core.get.call(null,inst_30170,inst_30165);
var state_30185__$1 = (function (){var statearr_30197 = state_30185;
(statearr_30197[(9)] = inst_30169);

(statearr_30197[(10)] = inst_30171__$1);

return statearr_30197;
})();
if(cljs.core.truth_(inst_30171__$1)){
var statearr_30198_30215 = state_30185__$1;
(statearr_30198_30215[(1)] = (9));

} else {
var statearr_30199_30216 = state_30185__$1;
(statearr_30199_30216[(1)] = (10));

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
});})(c__26963__auto__))
;
return ((function (switch__26851__auto__,c__26963__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26852__auto__ = null;
var figwheel$client$file_reloading$state_machine__26852__auto____0 = (function (){
var statearr_30203 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30203[(0)] = figwheel$client$file_reloading$state_machine__26852__auto__);

(statearr_30203[(1)] = (1));

return statearr_30203;
});
var figwheel$client$file_reloading$state_machine__26852__auto____1 = (function (state_30185){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_30185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e30204){if((e30204 instanceof Object)){
var ex__26855__auto__ = e30204;
var statearr_30205_30217 = state_30185;
(statearr_30205_30217[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30218 = state_30185;
state_30185 = G__30218;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26852__auto__ = function(state_30185){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26852__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26852__auto____1.call(this,state_30185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26852__auto____0;
figwheel$client$file_reloading$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26852__auto____1;
return figwheel$client$file_reloading$state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26963__auto__))
})();
var state__26965__auto__ = (function (){var statearr_30206 = f__26964__auto__.call(null);
(statearr_30206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26963__auto__);

return statearr_30206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26965__auto__);
});})(c__26963__auto__))
);

return c__26963__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30219,callback){
var map__30222 = p__30219;
var map__30222__$1 = ((((!((map__30222 == null)))?((((map__30222.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30222.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30222):map__30222);
var file_msg = map__30222__$1;
var namespace = cljs.core.get.call(null,map__30222__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30222,map__30222__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30222,map__30222__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30224){
var map__30227 = p__30224;
var map__30227__$1 = ((((!((map__30227 == null)))?((((map__30227.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30227.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30227):map__30227);
var file_msg = map__30227__$1;
var namespace = cljs.core.get.call(null,map__30227__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24778__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__24778__auto__){
var or__24790__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
var or__24790__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24790__auto____$1)){
return or__24790__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24778__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30229,callback){
var map__30232 = p__30229;
var map__30232__$1 = ((((!((map__30232 == null)))?((((map__30232.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30232.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30232):map__30232);
var file_msg = map__30232__$1;
var request_url = cljs.core.get.call(null,map__30232__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30232__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__26963__auto___30336 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26963__auto___30336,out){
return (function (){
var f__26964__auto__ = (function (){var switch__26851__auto__ = ((function (c__26963__auto___30336,out){
return (function (state_30318){
var state_val_30319 = (state_30318[(1)]);
if((state_val_30319 === (1))){
var inst_30292 = cljs.core.seq.call(null,files);
var inst_30293 = cljs.core.first.call(null,inst_30292);
var inst_30294 = cljs.core.next.call(null,inst_30292);
var inst_30295 = files;
var state_30318__$1 = (function (){var statearr_30320 = state_30318;
(statearr_30320[(7)] = inst_30293);

(statearr_30320[(8)] = inst_30294);

(statearr_30320[(9)] = inst_30295);

return statearr_30320;
})();
var statearr_30321_30337 = state_30318__$1;
(statearr_30321_30337[(2)] = null);

(statearr_30321_30337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30319 === (2))){
var inst_30301 = (state_30318[(10)]);
var inst_30295 = (state_30318[(9)]);
var inst_30300 = cljs.core.seq.call(null,inst_30295);
var inst_30301__$1 = cljs.core.first.call(null,inst_30300);
var inst_30302 = cljs.core.next.call(null,inst_30300);
var inst_30303 = (inst_30301__$1 == null);
var inst_30304 = cljs.core.not.call(null,inst_30303);
var state_30318__$1 = (function (){var statearr_30322 = state_30318;
(statearr_30322[(10)] = inst_30301__$1);

(statearr_30322[(11)] = inst_30302);

return statearr_30322;
})();
if(inst_30304){
var statearr_30323_30338 = state_30318__$1;
(statearr_30323_30338[(1)] = (4));

} else {
var statearr_30324_30339 = state_30318__$1;
(statearr_30324_30339[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30319 === (3))){
var inst_30316 = (state_30318[(2)]);
var state_30318__$1 = state_30318;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30318__$1,inst_30316);
} else {
if((state_val_30319 === (4))){
var inst_30301 = (state_30318[(10)]);
var inst_30306 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30301);
var state_30318__$1 = state_30318;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30318__$1,(7),inst_30306);
} else {
if((state_val_30319 === (5))){
var inst_30312 = cljs.core.async.close_BANG_.call(null,out);
var state_30318__$1 = state_30318;
var statearr_30325_30340 = state_30318__$1;
(statearr_30325_30340[(2)] = inst_30312);

(statearr_30325_30340[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30319 === (6))){
var inst_30314 = (state_30318[(2)]);
var state_30318__$1 = state_30318;
var statearr_30326_30341 = state_30318__$1;
(statearr_30326_30341[(2)] = inst_30314);

(statearr_30326_30341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30319 === (7))){
var inst_30302 = (state_30318[(11)]);
var inst_30308 = (state_30318[(2)]);
var inst_30309 = cljs.core.async.put_BANG_.call(null,out,inst_30308);
var inst_30295 = inst_30302;
var state_30318__$1 = (function (){var statearr_30327 = state_30318;
(statearr_30327[(12)] = inst_30309);

(statearr_30327[(9)] = inst_30295);

return statearr_30327;
})();
var statearr_30328_30342 = state_30318__$1;
(statearr_30328_30342[(2)] = null);

(statearr_30328_30342[(1)] = (2));


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
});})(c__26963__auto___30336,out))
;
return ((function (switch__26851__auto__,c__26963__auto___30336,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto____0 = (function (){
var statearr_30332 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30332[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto__);

(statearr_30332[(1)] = (1));

return statearr_30332;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto____1 = (function (state_30318){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_30318);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e30333){if((e30333 instanceof Object)){
var ex__26855__auto__ = e30333;
var statearr_30334_30343 = state_30318;
(statearr_30334_30343[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30318);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30344 = state_30318;
state_30318 = G__30344;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto__ = function(state_30318){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto____1.call(this,state_30318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26963__auto___30336,out))
})();
var state__26965__auto__ = (function (){var statearr_30335 = f__26964__auto__.call(null);
(statearr_30335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26963__auto___30336);

return statearr_30335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26965__auto__);
});})(c__26963__auto___30336,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30345,opts){
var map__30349 = p__30345;
var map__30349__$1 = ((((!((map__30349 == null)))?((((map__30349.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30349.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30349):map__30349);
var eval_body__$1 = cljs.core.get.call(null,map__30349__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30349__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24778__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24778__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24778__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30351){var e = e30351;
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
return (function (p1__30352_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30352_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__30361){
var vec__30362 = p__30361;
var k = cljs.core.nth.call(null,vec__30362,(0),null);
var v = cljs.core.nth.call(null,vec__30362,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30365){
var vec__30366 = p__30365;
var k = cljs.core.nth.call(null,vec__30366,(0),null);
var v = cljs.core.nth.call(null,vec__30366,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30372,p__30373){
var map__30620 = p__30372;
var map__30620__$1 = ((((!((map__30620 == null)))?((((map__30620.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30620.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30620):map__30620);
var opts = map__30620__$1;
var before_jsload = cljs.core.get.call(null,map__30620__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30620__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30620__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30621 = p__30373;
var map__30621__$1 = ((((!((map__30621 == null)))?((((map__30621.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30621.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30621):map__30621);
var msg = map__30621__$1;
var files = cljs.core.get.call(null,map__30621__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30621__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30621__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26963__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26963__auto__,map__30620,map__30620__$1,opts,before_jsload,on_jsload,reload_dependents,map__30621,map__30621__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26964__auto__ = (function (){var switch__26851__auto__ = ((function (c__26963__auto__,map__30620,map__30620__$1,opts,before_jsload,on_jsload,reload_dependents,map__30621,map__30621__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30774){
var state_val_30775 = (state_30774[(1)]);
if((state_val_30775 === (7))){
var inst_30637 = (state_30774[(7)]);
var inst_30636 = (state_30774[(8)]);
var inst_30635 = (state_30774[(9)]);
var inst_30638 = (state_30774[(10)]);
var inst_30643 = cljs.core._nth.call(null,inst_30636,inst_30638);
var inst_30644 = figwheel.client.file_reloading.eval_body.call(null,inst_30643,opts);
var inst_30645 = (inst_30638 + (1));
var tmp30776 = inst_30637;
var tmp30777 = inst_30636;
var tmp30778 = inst_30635;
var inst_30635__$1 = tmp30778;
var inst_30636__$1 = tmp30777;
var inst_30637__$1 = tmp30776;
var inst_30638__$1 = inst_30645;
var state_30774__$1 = (function (){var statearr_30779 = state_30774;
(statearr_30779[(7)] = inst_30637__$1);

(statearr_30779[(11)] = inst_30644);

(statearr_30779[(8)] = inst_30636__$1);

(statearr_30779[(9)] = inst_30635__$1);

(statearr_30779[(10)] = inst_30638__$1);

return statearr_30779;
})();
var statearr_30780_30866 = state_30774__$1;
(statearr_30780_30866[(2)] = null);

(statearr_30780_30866[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (20))){
var inst_30678 = (state_30774[(12)]);
var inst_30686 = figwheel.client.file_reloading.sort_files.call(null,inst_30678);
var state_30774__$1 = state_30774;
var statearr_30781_30867 = state_30774__$1;
(statearr_30781_30867[(2)] = inst_30686);

(statearr_30781_30867[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (27))){
var state_30774__$1 = state_30774;
var statearr_30782_30868 = state_30774__$1;
(statearr_30782_30868[(2)] = null);

(statearr_30782_30868[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (1))){
var inst_30627 = (state_30774[(13)]);
var inst_30624 = before_jsload.call(null,files);
var inst_30625 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30626 = (function (){return ((function (inst_30627,inst_30624,inst_30625,state_val_30775,c__26963__auto__,map__30620,map__30620__$1,opts,before_jsload,on_jsload,reload_dependents,map__30621,map__30621__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30369_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30369_SHARP_);
});
;})(inst_30627,inst_30624,inst_30625,state_val_30775,c__26963__auto__,map__30620,map__30620__$1,opts,before_jsload,on_jsload,reload_dependents,map__30621,map__30621__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30627__$1 = cljs.core.filter.call(null,inst_30626,files);
var inst_30628 = cljs.core.not_empty.call(null,inst_30627__$1);
var state_30774__$1 = (function (){var statearr_30783 = state_30774;
(statearr_30783[(14)] = inst_30625);

(statearr_30783[(15)] = inst_30624);

(statearr_30783[(13)] = inst_30627__$1);

return statearr_30783;
})();
if(cljs.core.truth_(inst_30628)){
var statearr_30784_30869 = state_30774__$1;
(statearr_30784_30869[(1)] = (2));

} else {
var statearr_30785_30870 = state_30774__$1;
(statearr_30785_30870[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (24))){
var state_30774__$1 = state_30774;
var statearr_30786_30871 = state_30774__$1;
(statearr_30786_30871[(2)] = null);

(statearr_30786_30871[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (39))){
var inst_30728 = (state_30774[(16)]);
var state_30774__$1 = state_30774;
var statearr_30787_30872 = state_30774__$1;
(statearr_30787_30872[(2)] = inst_30728);

(statearr_30787_30872[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (46))){
var inst_30769 = (state_30774[(2)]);
var state_30774__$1 = state_30774;
var statearr_30788_30873 = state_30774__$1;
(statearr_30788_30873[(2)] = inst_30769);

(statearr_30788_30873[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (4))){
var inst_30672 = (state_30774[(2)]);
var inst_30673 = cljs.core.List.EMPTY;
var inst_30674 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30673);
var inst_30675 = (function (){return ((function (inst_30672,inst_30673,inst_30674,state_val_30775,c__26963__auto__,map__30620,map__30620__$1,opts,before_jsload,on_jsload,reload_dependents,map__30621,map__30621__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30370_SHARP_){
var and__24778__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30370_SHARP_);
if(cljs.core.truth_(and__24778__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30370_SHARP_));
} else {
return and__24778__auto__;
}
});
;})(inst_30672,inst_30673,inst_30674,state_val_30775,c__26963__auto__,map__30620,map__30620__$1,opts,before_jsload,on_jsload,reload_dependents,map__30621,map__30621__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30676 = cljs.core.filter.call(null,inst_30675,files);
var inst_30677 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30678 = cljs.core.concat.call(null,inst_30676,inst_30677);
var state_30774__$1 = (function (){var statearr_30789 = state_30774;
(statearr_30789[(12)] = inst_30678);

(statearr_30789[(17)] = inst_30674);

(statearr_30789[(18)] = inst_30672);

return statearr_30789;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30790_30874 = state_30774__$1;
(statearr_30790_30874[(1)] = (16));

} else {
var statearr_30791_30875 = state_30774__$1;
(statearr_30791_30875[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (15))){
var inst_30662 = (state_30774[(2)]);
var state_30774__$1 = state_30774;
var statearr_30792_30876 = state_30774__$1;
(statearr_30792_30876[(2)] = inst_30662);

(statearr_30792_30876[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (21))){
var inst_30688 = (state_30774[(19)]);
var inst_30688__$1 = (state_30774[(2)]);
var inst_30689 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30688__$1);
var state_30774__$1 = (function (){var statearr_30793 = state_30774;
(statearr_30793[(19)] = inst_30688__$1);

return statearr_30793;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30774__$1,(22),inst_30689);
} else {
if((state_val_30775 === (31))){
var inst_30772 = (state_30774[(2)]);
var state_30774__$1 = state_30774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30774__$1,inst_30772);
} else {
if((state_val_30775 === (32))){
var inst_30728 = (state_30774[(16)]);
var inst_30733 = inst_30728.cljs$lang$protocol_mask$partition0$;
var inst_30734 = (inst_30733 & (64));
var inst_30735 = inst_30728.cljs$core$ISeq$;
var inst_30736 = (inst_30734) || (inst_30735);
var state_30774__$1 = state_30774;
if(cljs.core.truth_(inst_30736)){
var statearr_30794_30877 = state_30774__$1;
(statearr_30794_30877[(1)] = (35));

} else {
var statearr_30795_30878 = state_30774__$1;
(statearr_30795_30878[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (40))){
var inst_30749 = (state_30774[(20)]);
var inst_30748 = (state_30774[(2)]);
var inst_30749__$1 = cljs.core.get.call(null,inst_30748,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30750 = cljs.core.get.call(null,inst_30748,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30751 = cljs.core.not_empty.call(null,inst_30749__$1);
var state_30774__$1 = (function (){var statearr_30796 = state_30774;
(statearr_30796[(21)] = inst_30750);

(statearr_30796[(20)] = inst_30749__$1);

return statearr_30796;
})();
if(cljs.core.truth_(inst_30751)){
var statearr_30797_30879 = state_30774__$1;
(statearr_30797_30879[(1)] = (41));

} else {
var statearr_30798_30880 = state_30774__$1;
(statearr_30798_30880[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (33))){
var state_30774__$1 = state_30774;
var statearr_30799_30881 = state_30774__$1;
(statearr_30799_30881[(2)] = false);

(statearr_30799_30881[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (13))){
var inst_30648 = (state_30774[(22)]);
var inst_30652 = cljs.core.chunk_first.call(null,inst_30648);
var inst_30653 = cljs.core.chunk_rest.call(null,inst_30648);
var inst_30654 = cljs.core.count.call(null,inst_30652);
var inst_30635 = inst_30653;
var inst_30636 = inst_30652;
var inst_30637 = inst_30654;
var inst_30638 = (0);
var state_30774__$1 = (function (){var statearr_30800 = state_30774;
(statearr_30800[(7)] = inst_30637);

(statearr_30800[(8)] = inst_30636);

(statearr_30800[(9)] = inst_30635);

(statearr_30800[(10)] = inst_30638);

return statearr_30800;
})();
var statearr_30801_30882 = state_30774__$1;
(statearr_30801_30882[(2)] = null);

(statearr_30801_30882[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (22))){
var inst_30692 = (state_30774[(23)]);
var inst_30688 = (state_30774[(19)]);
var inst_30691 = (state_30774[(24)]);
var inst_30696 = (state_30774[(25)]);
var inst_30691__$1 = (state_30774[(2)]);
var inst_30692__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30691__$1);
var inst_30693 = (function (){var all_files = inst_30688;
var res_SINGLEQUOTE_ = inst_30691__$1;
var res = inst_30692__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30692,inst_30688,inst_30691,inst_30696,inst_30691__$1,inst_30692__$1,state_val_30775,c__26963__auto__,map__30620,map__30620__$1,opts,before_jsload,on_jsload,reload_dependents,map__30621,map__30621__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30371_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30371_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30692,inst_30688,inst_30691,inst_30696,inst_30691__$1,inst_30692__$1,state_val_30775,c__26963__auto__,map__30620,map__30620__$1,opts,before_jsload,on_jsload,reload_dependents,map__30621,map__30621__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30694 = cljs.core.filter.call(null,inst_30693,inst_30691__$1);
var inst_30695 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30696__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30695);
var inst_30697 = cljs.core.not_empty.call(null,inst_30696__$1);
var state_30774__$1 = (function (){var statearr_30802 = state_30774;
(statearr_30802[(26)] = inst_30694);

(statearr_30802[(23)] = inst_30692__$1);

(statearr_30802[(24)] = inst_30691__$1);

(statearr_30802[(25)] = inst_30696__$1);

return statearr_30802;
})();
if(cljs.core.truth_(inst_30697)){
var statearr_30803_30883 = state_30774__$1;
(statearr_30803_30883[(1)] = (23));

} else {
var statearr_30804_30884 = state_30774__$1;
(statearr_30804_30884[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (36))){
var state_30774__$1 = state_30774;
var statearr_30805_30885 = state_30774__$1;
(statearr_30805_30885[(2)] = false);

(statearr_30805_30885[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (41))){
var inst_30749 = (state_30774[(20)]);
var inst_30753 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30754 = cljs.core.map.call(null,inst_30753,inst_30749);
var inst_30755 = cljs.core.pr_str.call(null,inst_30754);
var inst_30756 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30755)].join('');
var inst_30757 = figwheel.client.utils.log.call(null,inst_30756);
var state_30774__$1 = state_30774;
var statearr_30806_30886 = state_30774__$1;
(statearr_30806_30886[(2)] = inst_30757);

(statearr_30806_30886[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (43))){
var inst_30750 = (state_30774[(21)]);
var inst_30760 = (state_30774[(2)]);
var inst_30761 = cljs.core.not_empty.call(null,inst_30750);
var state_30774__$1 = (function (){var statearr_30807 = state_30774;
(statearr_30807[(27)] = inst_30760);

return statearr_30807;
})();
if(cljs.core.truth_(inst_30761)){
var statearr_30808_30887 = state_30774__$1;
(statearr_30808_30887[(1)] = (44));

} else {
var statearr_30809_30888 = state_30774__$1;
(statearr_30809_30888[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (29))){
var inst_30728 = (state_30774[(16)]);
var inst_30694 = (state_30774[(26)]);
var inst_30692 = (state_30774[(23)]);
var inst_30688 = (state_30774[(19)]);
var inst_30691 = (state_30774[(24)]);
var inst_30696 = (state_30774[(25)]);
var inst_30724 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30727 = (function (){var all_files = inst_30688;
var res_SINGLEQUOTE_ = inst_30691;
var res = inst_30692;
var files_not_loaded = inst_30694;
var dependencies_that_loaded = inst_30696;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30728,inst_30694,inst_30692,inst_30688,inst_30691,inst_30696,inst_30724,state_val_30775,c__26963__auto__,map__30620,map__30620__$1,opts,before_jsload,on_jsload,reload_dependents,map__30621,map__30621__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30726){
var map__30810 = p__30726;
var map__30810__$1 = ((((!((map__30810 == null)))?((((map__30810.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30810.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30810):map__30810);
var namespace = cljs.core.get.call(null,map__30810__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30728,inst_30694,inst_30692,inst_30688,inst_30691,inst_30696,inst_30724,state_val_30775,c__26963__auto__,map__30620,map__30620__$1,opts,before_jsload,on_jsload,reload_dependents,map__30621,map__30621__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30728__$1 = cljs.core.group_by.call(null,inst_30727,inst_30694);
var inst_30730 = (inst_30728__$1 == null);
var inst_30731 = cljs.core.not.call(null,inst_30730);
var state_30774__$1 = (function (){var statearr_30812 = state_30774;
(statearr_30812[(16)] = inst_30728__$1);

(statearr_30812[(28)] = inst_30724);

return statearr_30812;
})();
if(inst_30731){
var statearr_30813_30889 = state_30774__$1;
(statearr_30813_30889[(1)] = (32));

} else {
var statearr_30814_30890 = state_30774__$1;
(statearr_30814_30890[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (44))){
var inst_30750 = (state_30774[(21)]);
var inst_30763 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30750);
var inst_30764 = cljs.core.pr_str.call(null,inst_30763);
var inst_30765 = [cljs.core.str("not required: "),cljs.core.str(inst_30764)].join('');
var inst_30766 = figwheel.client.utils.log.call(null,inst_30765);
var state_30774__$1 = state_30774;
var statearr_30815_30891 = state_30774__$1;
(statearr_30815_30891[(2)] = inst_30766);

(statearr_30815_30891[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (6))){
var inst_30669 = (state_30774[(2)]);
var state_30774__$1 = state_30774;
var statearr_30816_30892 = state_30774__$1;
(statearr_30816_30892[(2)] = inst_30669);

(statearr_30816_30892[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (28))){
var inst_30694 = (state_30774[(26)]);
var inst_30721 = (state_30774[(2)]);
var inst_30722 = cljs.core.not_empty.call(null,inst_30694);
var state_30774__$1 = (function (){var statearr_30817 = state_30774;
(statearr_30817[(29)] = inst_30721);

return statearr_30817;
})();
if(cljs.core.truth_(inst_30722)){
var statearr_30818_30893 = state_30774__$1;
(statearr_30818_30893[(1)] = (29));

} else {
var statearr_30819_30894 = state_30774__$1;
(statearr_30819_30894[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (25))){
var inst_30692 = (state_30774[(23)]);
var inst_30708 = (state_30774[(2)]);
var inst_30709 = cljs.core.not_empty.call(null,inst_30692);
var state_30774__$1 = (function (){var statearr_30820 = state_30774;
(statearr_30820[(30)] = inst_30708);

return statearr_30820;
})();
if(cljs.core.truth_(inst_30709)){
var statearr_30821_30895 = state_30774__$1;
(statearr_30821_30895[(1)] = (26));

} else {
var statearr_30822_30896 = state_30774__$1;
(statearr_30822_30896[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (34))){
var inst_30743 = (state_30774[(2)]);
var state_30774__$1 = state_30774;
if(cljs.core.truth_(inst_30743)){
var statearr_30823_30897 = state_30774__$1;
(statearr_30823_30897[(1)] = (38));

} else {
var statearr_30824_30898 = state_30774__$1;
(statearr_30824_30898[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (17))){
var state_30774__$1 = state_30774;
var statearr_30825_30899 = state_30774__$1;
(statearr_30825_30899[(2)] = recompile_dependents);

(statearr_30825_30899[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (3))){
var state_30774__$1 = state_30774;
var statearr_30826_30900 = state_30774__$1;
(statearr_30826_30900[(2)] = null);

(statearr_30826_30900[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (12))){
var inst_30665 = (state_30774[(2)]);
var state_30774__$1 = state_30774;
var statearr_30827_30901 = state_30774__$1;
(statearr_30827_30901[(2)] = inst_30665);

(statearr_30827_30901[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (2))){
var inst_30627 = (state_30774[(13)]);
var inst_30634 = cljs.core.seq.call(null,inst_30627);
var inst_30635 = inst_30634;
var inst_30636 = null;
var inst_30637 = (0);
var inst_30638 = (0);
var state_30774__$1 = (function (){var statearr_30828 = state_30774;
(statearr_30828[(7)] = inst_30637);

(statearr_30828[(8)] = inst_30636);

(statearr_30828[(9)] = inst_30635);

(statearr_30828[(10)] = inst_30638);

return statearr_30828;
})();
var statearr_30829_30902 = state_30774__$1;
(statearr_30829_30902[(2)] = null);

(statearr_30829_30902[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (23))){
var inst_30694 = (state_30774[(26)]);
var inst_30692 = (state_30774[(23)]);
var inst_30688 = (state_30774[(19)]);
var inst_30691 = (state_30774[(24)]);
var inst_30696 = (state_30774[(25)]);
var inst_30699 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30701 = (function (){var all_files = inst_30688;
var res_SINGLEQUOTE_ = inst_30691;
var res = inst_30692;
var files_not_loaded = inst_30694;
var dependencies_that_loaded = inst_30696;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30694,inst_30692,inst_30688,inst_30691,inst_30696,inst_30699,state_val_30775,c__26963__auto__,map__30620,map__30620__$1,opts,before_jsload,on_jsload,reload_dependents,map__30621,map__30621__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30700){
var map__30830 = p__30700;
var map__30830__$1 = ((((!((map__30830 == null)))?((((map__30830.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30830.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30830):map__30830);
var request_url = cljs.core.get.call(null,map__30830__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30694,inst_30692,inst_30688,inst_30691,inst_30696,inst_30699,state_val_30775,c__26963__auto__,map__30620,map__30620__$1,opts,before_jsload,on_jsload,reload_dependents,map__30621,map__30621__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30702 = cljs.core.reverse.call(null,inst_30696);
var inst_30703 = cljs.core.map.call(null,inst_30701,inst_30702);
var inst_30704 = cljs.core.pr_str.call(null,inst_30703);
var inst_30705 = figwheel.client.utils.log.call(null,inst_30704);
var state_30774__$1 = (function (){var statearr_30832 = state_30774;
(statearr_30832[(31)] = inst_30699);

return statearr_30832;
})();
var statearr_30833_30903 = state_30774__$1;
(statearr_30833_30903[(2)] = inst_30705);

(statearr_30833_30903[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (35))){
var state_30774__$1 = state_30774;
var statearr_30834_30904 = state_30774__$1;
(statearr_30834_30904[(2)] = true);

(statearr_30834_30904[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (19))){
var inst_30678 = (state_30774[(12)]);
var inst_30684 = figwheel.client.file_reloading.expand_files.call(null,inst_30678);
var state_30774__$1 = state_30774;
var statearr_30835_30905 = state_30774__$1;
(statearr_30835_30905[(2)] = inst_30684);

(statearr_30835_30905[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (11))){
var state_30774__$1 = state_30774;
var statearr_30836_30906 = state_30774__$1;
(statearr_30836_30906[(2)] = null);

(statearr_30836_30906[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (9))){
var inst_30667 = (state_30774[(2)]);
var state_30774__$1 = state_30774;
var statearr_30837_30907 = state_30774__$1;
(statearr_30837_30907[(2)] = inst_30667);

(statearr_30837_30907[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (5))){
var inst_30637 = (state_30774[(7)]);
var inst_30638 = (state_30774[(10)]);
var inst_30640 = (inst_30638 < inst_30637);
var inst_30641 = inst_30640;
var state_30774__$1 = state_30774;
if(cljs.core.truth_(inst_30641)){
var statearr_30838_30908 = state_30774__$1;
(statearr_30838_30908[(1)] = (7));

} else {
var statearr_30839_30909 = state_30774__$1;
(statearr_30839_30909[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (14))){
var inst_30648 = (state_30774[(22)]);
var inst_30657 = cljs.core.first.call(null,inst_30648);
var inst_30658 = figwheel.client.file_reloading.eval_body.call(null,inst_30657,opts);
var inst_30659 = cljs.core.next.call(null,inst_30648);
var inst_30635 = inst_30659;
var inst_30636 = null;
var inst_30637 = (0);
var inst_30638 = (0);
var state_30774__$1 = (function (){var statearr_30840 = state_30774;
(statearr_30840[(7)] = inst_30637);

(statearr_30840[(8)] = inst_30636);

(statearr_30840[(9)] = inst_30635);

(statearr_30840[(32)] = inst_30658);

(statearr_30840[(10)] = inst_30638);

return statearr_30840;
})();
var statearr_30841_30910 = state_30774__$1;
(statearr_30841_30910[(2)] = null);

(statearr_30841_30910[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (45))){
var state_30774__$1 = state_30774;
var statearr_30842_30911 = state_30774__$1;
(statearr_30842_30911[(2)] = null);

(statearr_30842_30911[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (26))){
var inst_30694 = (state_30774[(26)]);
var inst_30692 = (state_30774[(23)]);
var inst_30688 = (state_30774[(19)]);
var inst_30691 = (state_30774[(24)]);
var inst_30696 = (state_30774[(25)]);
var inst_30711 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30713 = (function (){var all_files = inst_30688;
var res_SINGLEQUOTE_ = inst_30691;
var res = inst_30692;
var files_not_loaded = inst_30694;
var dependencies_that_loaded = inst_30696;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30694,inst_30692,inst_30688,inst_30691,inst_30696,inst_30711,state_val_30775,c__26963__auto__,map__30620,map__30620__$1,opts,before_jsload,on_jsload,reload_dependents,map__30621,map__30621__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30712){
var map__30843 = p__30712;
var map__30843__$1 = ((((!((map__30843 == null)))?((((map__30843.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30843.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30843):map__30843);
var namespace = cljs.core.get.call(null,map__30843__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30843__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30694,inst_30692,inst_30688,inst_30691,inst_30696,inst_30711,state_val_30775,c__26963__auto__,map__30620,map__30620__$1,opts,before_jsload,on_jsload,reload_dependents,map__30621,map__30621__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30714 = cljs.core.map.call(null,inst_30713,inst_30692);
var inst_30715 = cljs.core.pr_str.call(null,inst_30714);
var inst_30716 = figwheel.client.utils.log.call(null,inst_30715);
var inst_30717 = (function (){var all_files = inst_30688;
var res_SINGLEQUOTE_ = inst_30691;
var res = inst_30692;
var files_not_loaded = inst_30694;
var dependencies_that_loaded = inst_30696;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30694,inst_30692,inst_30688,inst_30691,inst_30696,inst_30711,inst_30713,inst_30714,inst_30715,inst_30716,state_val_30775,c__26963__auto__,map__30620,map__30620__$1,opts,before_jsload,on_jsload,reload_dependents,map__30621,map__30621__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30694,inst_30692,inst_30688,inst_30691,inst_30696,inst_30711,inst_30713,inst_30714,inst_30715,inst_30716,state_val_30775,c__26963__auto__,map__30620,map__30620__$1,opts,before_jsload,on_jsload,reload_dependents,map__30621,map__30621__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30718 = setTimeout(inst_30717,(10));
var state_30774__$1 = (function (){var statearr_30845 = state_30774;
(statearr_30845[(33)] = inst_30711);

(statearr_30845[(34)] = inst_30716);

return statearr_30845;
})();
var statearr_30846_30912 = state_30774__$1;
(statearr_30846_30912[(2)] = inst_30718);

(statearr_30846_30912[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (16))){
var state_30774__$1 = state_30774;
var statearr_30847_30913 = state_30774__$1;
(statearr_30847_30913[(2)] = reload_dependents);

(statearr_30847_30913[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (38))){
var inst_30728 = (state_30774[(16)]);
var inst_30745 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30728);
var state_30774__$1 = state_30774;
var statearr_30848_30914 = state_30774__$1;
(statearr_30848_30914[(2)] = inst_30745);

(statearr_30848_30914[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (30))){
var state_30774__$1 = state_30774;
var statearr_30849_30915 = state_30774__$1;
(statearr_30849_30915[(2)] = null);

(statearr_30849_30915[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (10))){
var inst_30648 = (state_30774[(22)]);
var inst_30650 = cljs.core.chunked_seq_QMARK_.call(null,inst_30648);
var state_30774__$1 = state_30774;
if(inst_30650){
var statearr_30850_30916 = state_30774__$1;
(statearr_30850_30916[(1)] = (13));

} else {
var statearr_30851_30917 = state_30774__$1;
(statearr_30851_30917[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (18))){
var inst_30682 = (state_30774[(2)]);
var state_30774__$1 = state_30774;
if(cljs.core.truth_(inst_30682)){
var statearr_30852_30918 = state_30774__$1;
(statearr_30852_30918[(1)] = (19));

} else {
var statearr_30853_30919 = state_30774__$1;
(statearr_30853_30919[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (42))){
var state_30774__$1 = state_30774;
var statearr_30854_30920 = state_30774__$1;
(statearr_30854_30920[(2)] = null);

(statearr_30854_30920[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (37))){
var inst_30740 = (state_30774[(2)]);
var state_30774__$1 = state_30774;
var statearr_30855_30921 = state_30774__$1;
(statearr_30855_30921[(2)] = inst_30740);

(statearr_30855_30921[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (8))){
var inst_30635 = (state_30774[(9)]);
var inst_30648 = (state_30774[(22)]);
var inst_30648__$1 = cljs.core.seq.call(null,inst_30635);
var state_30774__$1 = (function (){var statearr_30856 = state_30774;
(statearr_30856[(22)] = inst_30648__$1);

return statearr_30856;
})();
if(inst_30648__$1){
var statearr_30857_30922 = state_30774__$1;
(statearr_30857_30922[(1)] = (10));

} else {
var statearr_30858_30923 = state_30774__$1;
(statearr_30858_30923[(1)] = (11));

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
});})(c__26963__auto__,map__30620,map__30620__$1,opts,before_jsload,on_jsload,reload_dependents,map__30621,map__30621__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26851__auto__,c__26963__auto__,map__30620,map__30620__$1,opts,before_jsload,on_jsload,reload_dependents,map__30621,map__30621__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto____0 = (function (){
var statearr_30862 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30862[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto__);

(statearr_30862[(1)] = (1));

return statearr_30862;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto____1 = (function (state_30774){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_30774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e30863){if((e30863 instanceof Object)){
var ex__26855__auto__ = e30863;
var statearr_30864_30924 = state_30774;
(statearr_30864_30924[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30925 = state_30774;
state_30774 = G__30925;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto__ = function(state_30774){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto____1.call(this,state_30774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26963__auto__,map__30620,map__30620__$1,opts,before_jsload,on_jsload,reload_dependents,map__30621,map__30621__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26965__auto__ = (function (){var statearr_30865 = f__26964__auto__.call(null);
(statearr_30865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26963__auto__);

return statearr_30865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26965__auto__);
});})(c__26963__auto__,map__30620,map__30620__$1,opts,before_jsload,on_jsload,reload_dependents,map__30621,map__30621__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26963__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30928,link){
var map__30931 = p__30928;
var map__30931__$1 = ((((!((map__30931 == null)))?((((map__30931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30931):map__30931);
var file = cljs.core.get.call(null,map__30931__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__30931,map__30931__$1,file){
return (function (p1__30926_SHARP_,p2__30927_SHARP_){
if(cljs.core._EQ_.call(null,p1__30926_SHARP_,p2__30927_SHARP_)){
return p1__30926_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__30931,map__30931__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30937){
var map__30938 = p__30937;
var map__30938__$1 = ((((!((map__30938 == null)))?((((map__30938.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30938.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30938):map__30938);
var match_length = cljs.core.get.call(null,map__30938__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30938__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30933_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30933_SHARP_);
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
var args30940 = [];
var len__25865__auto___30943 = arguments.length;
var i__25866__auto___30944 = (0);
while(true){
if((i__25866__auto___30944 < len__25865__auto___30943)){
args30940.push((arguments[i__25866__auto___30944]));

var G__30945 = (i__25866__auto___30944 + (1));
i__25866__auto___30944 = G__30945;
continue;
} else {
}
break;
}

var G__30942 = args30940.length;
switch (G__30942) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30940.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30947_SHARP_,p2__30948_SHARP_){
return cljs.core.assoc.call(null,p1__30947_SHARP_,cljs.core.get.call(null,p2__30948_SHARP_,key),p2__30948_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__30949){
var map__30952 = p__30949;
var map__30952__$1 = ((((!((map__30952 == null)))?((((map__30952.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30952.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30952):map__30952);
var f_data = map__30952__$1;
var file = cljs.core.get.call(null,map__30952__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30954,p__30955){
var map__30964 = p__30954;
var map__30964__$1 = ((((!((map__30964 == null)))?((((map__30964.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30964.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30964):map__30964);
var opts = map__30964__$1;
var on_cssload = cljs.core.get.call(null,map__30964__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30965 = p__30955;
var map__30965__$1 = ((((!((map__30965 == null)))?((((map__30965.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30965.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30965):map__30965);
var files_msg = map__30965__$1;
var files = cljs.core.get.call(null,map__30965__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__30968_30972 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__30969_30973 = null;
var count__30970_30974 = (0);
var i__30971_30975 = (0);
while(true){
if((i__30971_30975 < count__30970_30974)){
var f_30976 = cljs.core._nth.call(null,chunk__30969_30973,i__30971_30975);
figwheel.client.file_reloading.reload_css_file.call(null,f_30976);

var G__30977 = seq__30968_30972;
var G__30978 = chunk__30969_30973;
var G__30979 = count__30970_30974;
var G__30980 = (i__30971_30975 + (1));
seq__30968_30972 = G__30977;
chunk__30969_30973 = G__30978;
count__30970_30974 = G__30979;
i__30971_30975 = G__30980;
continue;
} else {
var temp__4657__auto___30981 = cljs.core.seq.call(null,seq__30968_30972);
if(temp__4657__auto___30981){
var seq__30968_30982__$1 = temp__4657__auto___30981;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30968_30982__$1)){
var c__25601__auto___30983 = cljs.core.chunk_first.call(null,seq__30968_30982__$1);
var G__30984 = cljs.core.chunk_rest.call(null,seq__30968_30982__$1);
var G__30985 = c__25601__auto___30983;
var G__30986 = cljs.core.count.call(null,c__25601__auto___30983);
var G__30987 = (0);
seq__30968_30972 = G__30984;
chunk__30969_30973 = G__30985;
count__30970_30974 = G__30986;
i__30971_30975 = G__30987;
continue;
} else {
var f_30988 = cljs.core.first.call(null,seq__30968_30982__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_30988);

var G__30989 = cljs.core.next.call(null,seq__30968_30982__$1);
var G__30990 = null;
var G__30991 = (0);
var G__30992 = (0);
seq__30968_30972 = G__30989;
chunk__30969_30973 = G__30990;
count__30970_30974 = G__30991;
i__30971_30975 = G__30992;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__30964,map__30964__$1,opts,on_cssload,map__30965,map__30965__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__30964,map__30964__$1,opts,on_cssload,map__30965,map__30965__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1481854531971