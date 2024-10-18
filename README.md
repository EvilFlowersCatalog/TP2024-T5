# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm install
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment


Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```
Windows
```
cmd /C 'set "GIT_USER=<GITHUB_USERNAME>" && yarn deploy'
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


### Adding content

You can add content to these categories:

For `records` go to:

```
/blog
```

and create a new folder named `YYYY-MM-DD-name-of-record` and then add a file with a new record.

To update information about authors go to:

```
/blog/authors.yml
```

For `documentation` go to:

```
/docs/documentation
```

and create a new folder or add a new file to an existing folder. If you create a new folder don't forget to update the sidebar in `sidebars.ts`.

For `sprints` go to:

```
/docs/sprints
```

and create a new folder or add a new file to an existing folder. If you create a new folder don't forget to update the sidebar in `sidebars.ts`.
