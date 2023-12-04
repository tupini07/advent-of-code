import { singleton, append, delay, toList } from "../../fable_modules/fable-library.4.5.0/Seq.js";
import { createElement } from "react";
import { renderClearCookie, renderGetCookie, isCookieSet } from "../components/GetCookieSession.js";
import { ofArray, singleton as singleton_1, initialize } from "../../fable_modules/fable-library.4.5.0/List.js";
import { createObj } from "../../fable_modules/fable-library.4.5.0/Util.js";
import { RouterModule_encodeParts } from "../../fable_modules/Feliz.Router.4.0.0/Router.fs.js";
import { printf, toText } from "../../fable_modules/fable-library.4.5.0/String.js";
import { Interop_reactApi } from "../../fable_modules/Feliz.2.7.0/Interop.fs.js";

export function render() {
    const children_2 = toList(delay(() => append(singleton(createElement("p", {
        children: ["Hi, some stuff here. Work in progress."],
    })), delay(() => (!isCookieSet() ? singleton(renderGetCookie()) : append(singleton(renderClearCookie()), delay(() => {
        let children;
        return singleton((children = initialize(25, (i) => {
            let elems;
            const day = (i + 1) | 0;
            const key = `day-${day}-ol`;
            return createElement("li", {
                key: key,
                children: createElement("a", createObj(ofArray([["href", RouterModule_encodeParts(singleton_1(toText(printf("/day/%d"))(day)), 1)], (elems = [toText(printf("Day %d"))(day)], ["children", Interop_reactApi.Children.toArray(Array.from(elems))])]))),
            });
        }), createElement("ol", {
            children: Interop_reactApi.Children.toArray(Array.from(children)),
        })));
    })))))));
    return createElement("div", {
        children: Interop_reactApi.Children.toArray(Array.from(children_2)),
    });
}

