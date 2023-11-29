open Elmish
open Elmish.React
open Feliz
open Feliz.Router

type State =
  { CurrentUrl: string list }

type Msg =
  | UrlChanged of string list


let init() =
  { CurrentUrl = Router.currentUrl() }

let update (msg: Msg) (state: State): State =
  match msg with
  | UrlChanged url ->
    { state with CurrentUrl = url }

let render (state: State) (dispatch: Msg -> unit) =
  let activePage =
    match state.CurrentUrl with
    | [ ] -> HomePage.render ()
    | [ "about" ] -> AboutPage.render ()
    | _ -> Html.h1 "Not Found"

  let page =
    [
      HeaderComponent.render ()
      Html.main [activePage]
    ]

  React.router [
    router.onUrlChanged (UrlChanged >> dispatch)
    router.children page 
  ]

Program.mkSimple init update render
|> Program.withReactSynchronous "elmish-app"
|> Program.run