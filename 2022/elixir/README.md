# Advent of Code 2022 in Elixir

I'm using this to learn Elixir, so don't expect the best code 😅 Any pointers or
comments are welcome though.

Based on [this](https://github.com/mhanberg/advent-of-code-elixir-starter)
starter template.

## Usage

There is a module for each day under `lib/advent_of_code`. Each module has a
`part1` and `part2` function that must be implemented. There is a test module
for each day under `test/advent_of_code`.

There is a single mix task that can be used to run any of the two parts of any
day:

```bash
mix day <day> <part> [-b]
```

The `-b` flag will run the solution through Benchee to get a benchmark.

This mix task will automatically ensure that the input for the day is downloaded
and passed to the actual _part_ function.

### Input Retriever

This starter comes with a module that will automatically get your inputs so you
don't have to mess with copy/pasting. Don't worry, it automatically caches your
inputs to your machine so you don't have to worry about slamming the Advent of
Code server. You will need to configure it with your cookie and make sure to
enable it. You can do this by creating a `config/secrets.exs` file containing
the following:

```elixir
import Config

config :advent_of_code, AdventOfCode.Input,
  allow_network?: true,
  session_cookie: "..." # yours will be longer
```

### Get started coding with zero configuration

#### Using Visual Studio Code

1. [Install Docker Desktop](https://www.docker.com/products/docker-desktop)
1. Open project directory in VS Code
1. Press F1, and select `Remote-Containers: Reopen in Container...`
1. Wait a few minutes as it pulls image down and builds Dev Conatiner Docker
   image (this should only need to happen once unless you modify the Dockerfile)
   1. You can see progress of the build by clicking `Starting Dev Container
(show log): Building image` that appears in bottom right corner
   1. During the build process it will also automatically run `mix deps.get`
1. Once complete VS Code will connect your running Dev Container and will feel
   like your doing local development
1. If you would like to use a specific version of Elixir change the `VARIANT`
   version in `.devcontainer/devcontainer.json`
1. If you would like more information about VS Code Dev Containers check out the
   [dev container
   documentation](https://code.visualstudio.com/docs/remote/create-dev-container/?WT.mc_id=AZ-MVP-5003399)

#### Compatible with Github Codespaces

1. If you dont have Github Codespaces beta access, sign up for the beta
   https://github.com/features/codespaces/signup
1. On GitHub, navigate to the main page of the repository.
1. Under the repository name, use the Code drop-down menu, and select Open with
   Codespaces.
1. If you already have a codespace for the branch, click New codespace.
