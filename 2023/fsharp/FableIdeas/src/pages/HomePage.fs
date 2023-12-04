[<RequireQualifiedAccess>]
module HomePage

open Feliz
open Feliz.Bulma
open Feliz.Router



let render () =
  Html.div [    
    Html.p "Hi, some stuff here. Work in progress."

    if not (GetCookieSession.isCookieSet ()) then
      GetCookieSession.renderGetCookie ()
    else
      GetCookieSession.renderClearCookie ()

      Html.ol 
        (List.init 25 (fun i ->
            let day = i + 1
            let key: string = $"day-{day}-ol"
            Html.li [
                prop.key key 
                prop.children (Html.a [
                  prop.href (Router.format (sprintf "/day/%d" day))
                  prop.children [
                      Html.text (sprintf "Day %d" day)
                  ]
                ])
            ]
        ))
  ]
