import { Union, Record } from "../fable_modules/fable-library.4.5.0/Types.js";
import { union_type, record_type, list_type, string_type } from "../fable_modules/fable-library.4.5.0/Reflection.js";
import { RouterModule_router, RouterModule_urlSegments } from "../fable_modules/Feliz.Router.4.0.0/Router.fs.js";
import { render as render_1 } from "./pages/HomePage.js";
import { render as render_2 } from "./pages/AboutPage.js";
import { createElement } from "react";
import * as react from "react";
import { ofArray, tail, head, isEmpty } from "../fable_modules/fable-library.4.5.0/List.js";
import { render as render_3 } from "./components/HeaderComponent.js";
import { Interop_reactApi } from "../fable_modules/Feliz.2.7.0/Interop.fs.js";
import { ProgramModule_mkSimple, ProgramModule_run } from "../fable_modules/Fable.Elmish.4.0.0/program.fs.js";
import { Program_withReactSynchronous } from "../fable_modules/Fable.Elmish.React.4.0.0/react.fs.js";

export class State extends Record {
    constructor(CurrentUrl) {
        super();
        this.CurrentUrl = CurrentUrl;
    }
}

export function State_$reflection() {
    return record_type("Program.State", [], State, () => [["CurrentUrl", list_type(string_type)]]);
}

export class Msg extends Union {
    constructor(Item) {
        super();
        this.tag = 0;
        this.fields = [Item];
    }
    cases() {
        return ["UrlChanged"];
    }
}

export function Msg_$reflection() {
    return union_type("Program.Msg", [], Msg, () => [[["Item", list_type(string_type)]]]);
}

export function init() {
    return new State(RouterModule_urlSegments(window.location.hash, 1));
}

export function update(msg, state) {
    const url = msg.fields[0];
    return new State(url);
}

export function render(state, dispatch) {
    let activePage;
    const matchValue = state.CurrentUrl;
    let matchResult;
    if (!isEmpty(matchValue)) {
        if (head(matchValue) === "about") {
            if (isEmpty(tail(matchValue))) {
                matchResult = 1;
            }
            else {
                matchResult = 2;
            }
        }
        else {
            matchResult = 2;
        }
    }
    else {
        matchResult = 0;
    }
    switch (matchResult) {
        case 0: {
            activePage = render_1();
            break;
        }
        case 1: {
            activePage = render_2();
            break;
        }
        default:
            activePage = createElement("h1", {
                children: ["Not Found"],
            });
    }
    const page = ofArray([render_3(), createElement("main", {
        children: Interop_reactApi.Children.toArray([activePage]),
    })]);
    return RouterModule_router({
        onUrlChanged: (arg) => {
            dispatch(new Msg(arg));
        },
        application: react.createElement(react.Fragment, {}, ...page),
    });
}

ProgramModule_run(Program_withReactSynchronous("elmish-app", ProgramModule_mkSimple(init, update, render)));

