# loim-dev-svelte

hello! this is my personal website :)

## develop for yourself

this is a fairly standard node project --- clone, install, and run:

```sh
git clone git@github.com:loimabean/loim-dev-svelte.git
cd loim-dev-svelte
pnpm i
pnpm dev
```

and then if you'd like to build for release:

```sh
pnpm build
```

## build as a container

there is an included `Containerfile` for building the site as a container for deployment! that's how i have deployed it myself. you can build _that_ with:

```sh
podman build
```

or, if you are using Docker

```sh
docker build
```
