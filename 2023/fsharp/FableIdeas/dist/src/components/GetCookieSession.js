import { defaultOf } from "../../fable_modules/fable-library.4.5.0/Util.js";
import { createElement } from "react";
import { ofArray, singleton } from "../../fable_modules/fable-library.4.5.0/List.js";
import { Interop_reactApi } from "../../fable_modules/Feliz.2.7.0/Interop.fs.js";
import { substring } from "../../fable_modules/fable-library.4.5.0/String.js";

let State = {
    Cookie: "",
};

export function isCookieSet() {
    const cookie = window.localStorage.getItem("aoc_session");
    if (defaultOf() !== cookie) {
        return cookie.length > 0;
    }
    else {
        return false;
    }
}

export function renderClearCookie() {
    let children_2, children;
    const children_4 = ofArray([createElement("hr", {}), (children_2 = ofArray(["Cookie is set → ", (children = singleton(window.localStorage.getItem("aoc_session")), createElement("code", {
        children: Interop_reactApi.Children.toArray(Array.from(children)),
    }))]), createElement("p", {
        children: Interop_reactApi.Children.toArray(Array.from(children_2)),
    })), createElement("button", {
        onClick: (_arg) => {
            window.localStorage.removeItem("aoc_session");
            window.location.reload();
        },
        children: Interop_reactApi.Children.toArray(["Clear Cookie"]),
    }), createElement("hr", {})]);
    return createElement("div", {
        children: Interop_reactApi.Children.toArray(Array.from(children_4)),
    });
}

export function renderGetCookie() {
    const onTextChange = (e) => {
        const target = e.target;
        State = {
            Cookie: target.value,
        };
    };
    const setCookieClick = (e_1) => {
        const cookie = (State.Cookie.indexOf("session=") === 0) ? substring(State.Cookie, 8) : State.Cookie;
        window.localStorage.setItem("aoc_session", cookie);
        window.location.reload();
    };
    const children = ofArray([createElement("p", {
        children: ["Hi, some stuff here. Work in progress."],
    }), createElement("p", {
        children: ["Please enter your session cookie:"],
    }), createElement("input", {
        type: "text",
        onChange: onTextChange,
    }), createElement("button", {
        children: "Set Cookie",
        onClick: (arg) => {
            setCookieClick(arg);
        },
    })]);
    return createElement("div", {
        children: Interop_reactApi.Children.toArray(Array.from(children)),
    });
}

