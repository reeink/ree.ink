# Astro Lithe

![Astro Lithe Header](/public/header.svg)

## Features

- Fast and lightweight powered by [Astro](https://astro.build)
- Lithe and minimalistic design
- PWA support
- Dark mode

## Online Demo

- `main` branch: <https://astro-lithe.pages.dev>
- `dev` branch: <https://dev.astro-lithe.pages.dev>
- any branch or commit: `https://[branch|commit].pages.dev`

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [pnpm](https://pnpm.io/)

### Installation

1. Clone the repo

```sh
git clone https://github.com/sperjar/astro-lithe.git
```
2. Install NPM packages

```sh
pnpm install
```

3. Start the dev server

```sh
pnpm dev
```

4. Write your posts in `src/content/posts`

5. Build the site

```sh
pnpm build
```

6. Preview the built site

```sh
pnpm preview
```

### Deployment

- Using your git repo in [Cloudflare Pages](https://pages.cloudflare.com)
- Config `build.command` to `npm install -g pnpm && pnpm install && pnpm build`
- Config Environment Variables `NODE_VERSION` to `16.13.0`
- Confirm the build and deploy
