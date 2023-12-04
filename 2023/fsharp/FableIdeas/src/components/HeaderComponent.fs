[<RequireQualifiedAccess>]
module HeaderComponent

open Feliz
open Feliz.Bulma
open Feliz.Router

let render () =
  Html.header [
    Html.div [
      Html.h1 [
        prop.className "title-global"
        prop.children [
          Html.a [
            prop.href (Router.format "/")
            prop.children [
              Html.text "Advent of Code 2023 🎄"
            ]
          ]
        ]
      ]
      Html.nav [
        Html.ul [
          Html.li (Html.a [
              prop.href (Router.format "/about")
              prop.children [
                Html.text "[About]"
              ]
            ])
        ]
      ]
    ]
    Html.hr []
  ]
