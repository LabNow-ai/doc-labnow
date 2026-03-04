# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npx pnpm i
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

Important for i18n:
- `docusaurus start` serves a single locale in dev mode.
- To run English dev: `npm run start:en`
- To run Chinese dev: `npm run start:zh-CN`
- To verify real multi-locale routes like `/zh-CN/` and `/zh-CN/docs/intro`, use: `npm run preview:i18n`

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### i18n content workflow (`en` + `zh-CN`)

This project uses Docusaurus i18n with:

- default locale: `en`
- secondary locale: `zh-CN`

When adding new content, keep both locales in sync:

- English docs: `i18n/en/docusaurus-plugin-content-docs/current/...`
- Chinese docs: `i18n/zh-CN/docusaurus-plugin-content-docs/current/...`
- English blog: `i18n/en/docusaurus-plugin-content-blog/...`
- Chinese blog: `i18n/zh-CN/docusaurus-plugin-content-blog/...`

Recommended practice:

- Create Chinese and English versions together for every new doc/blog post.
- Keep the same relative path/filename across locales to make maintenance easier.

### Deployment

```bash
# Using SSH:
$ USE_SSH=true npm run deploy

# Not using SSH:
$ GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
