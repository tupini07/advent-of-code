import { createElement } from "react";
import { RouterModule_encodeParts } from "../../fable_modules/Feliz.Router.4.0.0/Router.fs.js";
import { ofArray, singleton } from "../../fable_modules/fable-library.4.5.0/List.js";
import { Interop_reactApi } from "../../fable_modules/Feliz.2.7.0/Interop.fs.js";

export function render() {
    let elms;
    const elms_1 = singleton((elms = ofArray([createElement("h1", {
        className: "title",
        children: "About page!",
    }), createElement("a", {
        href: RouterModule_encodeParts(singleton("/"), 1),
        children: "Go home 😅",
    }), createElement("p", {
        children: ["Note that I shamelessly stole the design and style from the official website of the Advent of Code."],
    })]), createElement("div", {
        className: "container",
        children: Interop_reactApi.Children.toArray(Array.from(elms)),
    })));
    return createElement("section", {
        className: "section",
        children: Interop_reactApi.Children.toArray(Array.from(elms_1)),
    });
}

