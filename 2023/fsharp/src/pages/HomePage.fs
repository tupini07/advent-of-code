[<RequireQualifiedAccess>]
module HomePage

open Feliz
open Feliz.Bulma
open Feliz.Router



let render () =
  Html.div [    
    Html.p "Hi, some stuff here. Work in progress."

    Html.ol 
      (List.init 25 (fun i ->
          let day = i + 1
          Html.li (Html.a [
              prop.href (Router.format (sprintf "/day/%d" day))
              prop.children [
                  Html.text (sprintf "Day %d" day)
              ]
          ])
      ))
  ]
