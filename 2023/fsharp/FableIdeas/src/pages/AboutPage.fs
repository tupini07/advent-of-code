[<RequireQualifiedAccess>]
module AboutPage

open Feliz
open Feliz.Bulma
open Feliz.Router


let render () =
  Bulma.section [
    Bulma.container [
      Bulma.title "About page!"

      Html.a [
        prop.href (Router.format "/")
        prop.text "Go home 😅"
      ]

      Html.p "Note that I shamelessly stole the design and style from the official website of the Advent of Code."
    ]
  ]