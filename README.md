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

> [!NOTE]
> there is a hit counter feature that will by default attempt to write to `/data/site-data.db`. if you would like it to Not do that (because it will most likely crash due to that directory not existing), then set the `DB_PATH` environment variable to an existing folder of your choosing.

## build as a container

there is an included `Containerfile` for building the site as a container for deployment! that's how i have deployed it myself. you can build _that_ with:

```sh
pnpm build:podman
```

or, if you are using Docker

```sh
pnpm build:docker
```

this will create an image tagged `loim-dev-svelte`!

> [!NOTE]
> you will most likely want to mount a volume inside the container at `/data` to persist the hit counter!
