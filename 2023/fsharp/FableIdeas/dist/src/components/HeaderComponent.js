import { createElement } from "react";
import { createObj } from "../../fable_modules/fable-library.4.5.0/Util.js";
import { RouterModule_encodeParts } from "../../fable_modules/Feliz.Router.4.0.0/Router.fs.js";
import { ofArray, singleton } from "../../fable_modules/fable-library.4.5.0/List.js";
import { Interop_reactApi } from "../../fable_modules/Feliz.2.7.0/Interop.fs.js";

export function render() {
    let children_4, elems_1, children_2, children;
    const children_6 = ofArray([(children_4 = ofArray([createElement("h1", createObj(ofArray([["className", "title-global"], (elems_1 = [createElement("a", {
        href: RouterModule_encodeParts(singleton("/"), 1),
        children: Interop_reactApi.Children.toArray(["Advent of Code 2023 🎄"]),
    })], ["children", Interop_reactApi.Children.toArray(Array.from(elems_1))])]))), (children_2 = singleton((children = singleton(createElement("li", {
        children: [createElement("a", {
            href: RouterModule_encodeParts(singleton("/about"), 1),
            children: Interop_reactApi.Children.toArray(["[About]"]),
        })],
    })), createElement("ul", {
        children: Interop_reactApi.Children.toArray(Array.from(children)),
    }))), createElement("nav", {
        children: Interop_reactApi.Children.toArray(Array.from(children_2)),
    }))]), createElement("div", {
        children: Interop_reactApi.Children.toArray(Array.from(children_4)),
    })), createElement("hr", {})]);
    return createElement("header", {
        children: Interop_reactApi.Children.toArray(Array.from(children_6)),
    });
}

