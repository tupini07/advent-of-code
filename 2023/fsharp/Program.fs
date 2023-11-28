open Spectre.Console
open System


AnsiConsole.MarkupLine("Hello from [red]Spectre.Console[/]")

// Get pressed keys

let key = Console.ReadKey(true)
AnsiConsole.MarkupLine("You pressed [red]{0}[/]", key.KeyChar)

// playing around with tables
let table =
    let t = new Table()
    t.AddColumn("Name").AddColumn("Age") |> ignore
    t.AddRow(new Text("John"), new Text("42")) |> ignore

    t

AnsiConsole.Write(table)


// create an editable textarea
let textArea = new Table()
textArea.Width <- AnsiConsole.Profile.Width
textArea.AddColumn("2023-06-12") |> ignore

let mutable text = ""
let mutable cursorPos = 0

textArea.AddRow(new Text(text)) |> ignore

AnsiConsole
    .Live(textArea)
    .Start(fun ctx ->
        while true do
            let key: ConsoleKeyInfo = Console.ReadKey(true)
            let mutable newChar = ""

            match key.Key with
            | ConsoleKey.Enter ->
                newChar <- "\n"
                cursorPos <- cursorPos + 1
            | ConsoleKey.Backspace ->
                // need to delete at cursor
                if cursorPos > 0 then
                    text <- text.[0 .. cursorPos - 2] + text.[cursorPos..]
            | ConsoleKey.LeftArrow -> cursorPos <- cursorPos - 1
            | ConsoleKey.RightArrow -> cursorPos <- cursorPos + 1
            | ConsoleKey.Home -> cursorPos <- 0
            | ConsoleKey.End -> cursorPos <- text.Length
            | _ ->
                newChar <- key.KeyChar.ToString()
                cursorPos <- cursorPos + 1

            // clamp
            cursorPos <- Math.Max(0, cursorPos)
            cursorPos <- Math.Min(text.Length + 1, cursorPos)

            // add the new char at position before cursor
            text <- text.[0 .. cursorPos - 2] + newChar + text.[cursorPos - 1 ..]

            // need to add `[default on blue]{char at idx}[/]`
            // to the text
            let textC =
                if cursorPos = text.Length then
                    $"{text}[default on green] [/]"
                else
                    $"{text.[0 .. cursorPos - 1]}[default on green]{text.[cursorPos]}[/]{text.[cursorPos .. text.Length - 1]}"

            textArea.RemoveRow(0).AddRow(textC) |> ignore
            ctx.Refresh())
