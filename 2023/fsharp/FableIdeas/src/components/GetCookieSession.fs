[<RequireQualifiedAccess>]
module GetCookieSession

open Fable
open Feliz

// session=53616c7465645f5f8022f843bf848f37c0059788d4d00661a9e4472f66bd7cd828c131e504ec85ca4831a3505d9706076f0e6d1b466953593e8485da8bd8f147

let mutable private State = {|
  Cookie = ""
|}

let isCookieSet () =
  let cookie = Browser.Dom.window.localStorage.getItem("aoc_session")
  null <> cookie && cookie.Length > 0

let renderClearCookie () =
  Html.div [
    Html.hr []
    Html.p [Html.text "Cookie is set → "; Html.code [Html.text (Browser.Dom.window.localStorage.getItem("aoc_session"))]]
    Html.button [
      prop.onClick (fun _ -> 
        Browser.Dom.window.localStorage.removeItem("aoc_session")
        Browser.Dom.window.location.reload())
      prop.children [
        Html.text "Clear Cookie"
      ]
    ]
    Html.hr []
  ]

let renderGetCookie () =
  // if we're rendering then it means the cookie is NOT set and we need to ask
  // the user for it so we can set it for them
  
  let onTextChange (e: Browser.Types.Event) =
    let target = e.target :?> Browser.Types.HTMLInputElement
    State <- {| State with Cookie = target.value |}

  let setCookieClick (e: Browser.Types.Event) =
    // strip "session=" from the beginning of the cookie value if present
    let cookie = 
      if State.Cookie.StartsWith("session=") then
        State.Cookie.Substring(8)
      else
        State.Cookie

    Browser.Dom.window.localStorage.setItem("aoc_session", cookie)
    Browser.Dom.window.location.reload()

  Html.div [
    Html.p "Hi, some stuff here. Work in progress."
    Html.p "Please enter your session cookie:"
    Html.input [
      prop.type' "text"
      prop.onChange onTextChange
    ]
    Html.button [
      prop.text "Set Cookie"
      prop.onClick setCookieClick
    ]
  ]

    