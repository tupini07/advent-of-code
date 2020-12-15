help:
	echo potato

run:
	stack run -- ../input 4

build: lint
	stack build

lint:
	hlint app src || true

watcher:
	stack build --test --no-run-tests --file-watch

ghci:
	stack ghci