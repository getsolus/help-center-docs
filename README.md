<p align="center">
  <a href="https://getsol.us">
    <img src="https://getsol.us/imgs/logo.png" alt="Solus logo"/>
  </a>
</p>

# Help Center documentation

This is the repository for Solus's [Help Center](https://help.getsol.us/) documentation. You can help us improve the Solus experience by:

- Contributing documentation on new topics.
- Editing existing documentation for formatting, spelling and punctuation, and conformance with our [style guide](https://help.getsol.us/docs/user/contributing/style).
- Working on fixes for [existing issues](https://github.com/getsolus/help-center-docs/issues).
- Identifying and reporting new issues.

## Getting started

To get started developing our Docusaurus instance, or writing documentation, first [fork this project](https://github.com/getsolus/help-center-docs/fork) so you can submit pull requests for your changes.

This project is written using [TypeScript](https://www.typescriptlang.org) and [React](https://reactjs.org), with content written in Markdown or [MDX](https://mdxjs.com/). To facilitate development, we use `nvm` and `yarn`.

Please lint and spellcheck your contributions before creating a pull request. We recommend VS Code with the "prettier" extension for linting, and [Code Spell Checker](https://cspell.org/) (`cspell`) for spelling.

### Content formatting and spelling

- Writing style should follow our [style guide](https://help.getsol.us/docs/user/contributing/style)
- This project includes `prettier` for markdown and code formatting
  - Command: `go-task lint`
- This project includes Cspell for spell-checking, and has a custom wordlist `.cspell-allowed-wordlist.txt`
  - Command: `go-task spellcheck`
  - Note that we use American spelling
  - If you use vscode with the Code Spell Checker extension, the custom dictionary will be used
  - You can tidy the allowed-wordlist with `go-task tidy-words`

### NVM

To set up `nvm`, the Node Version Manager, follow the instructions listed [here](https://github.com/nvm-sh/nvm#readme). We recommend [setting up their shell integration](https://github.com/nvm-sh/nvm#deeper-shell-integration) as well, so you can automatically switch to the correct Node version when working on this project. Otherwise, ensure you run `nvm use`. This project requires the "current" supported release series of Node.

You can validate you are using the latest by running `node --version`. Your version should be at least 19.x.

### Yarn

This project makes use of [Yarn](https://yarnpkg.com/) for its package management. After setting up nvm and ensuring you are running the latest Node, run:

```
corepack enable
```

### Installing dependencies

To install the required dependencies, run: `yarn`

### Starting Docusaurus

To start the live reloading Docusaurus, run: `yarn start`

### Other useful commands

- Clear local build cache: `yarn clear`
- Linting: `yarn lint`
- Updating translation files: `yarn write-translations`
- Validate build: `yarn build`
- Run validated build: `yarn serve`

## Publishing to https://help.getsol.us (via GH Pages)

Ensure that you can successfully generate a static site as above.

Then, when you're ready to deploy, run the following:

`go-task deploy`

This obviously assumes that you have ssh push access to the `help-center-docs` repository and are using `remote.origin.url=git@github.com:getsolus/help-center-docs.git` (as listed by `git config -l`).

## Contributing

### Multi-lingual documents

Note that multi-lingual documents are not yet supported on our Help Center. When it does, we'll be happy to accept non-English language documents.

## Licenses

### Build system

Files relating to the parsing / build system are licensed under GPL-2.0. For the full text, view LICENSE.txt.

### Markdown

The Markdown files in this repository are licensed under the Creative Commons By-NC-SA 4.0 License. For the full text, view LICENSE-MD.txt. Solus Project is considered the sole rights holder of these works.

### Media assets

- Solus logo copyright and licensing information is provided on our [Brand Guidelines page](https://getsol.us/branding).
- Non-logo assets are licensed under Creative Commons By-NC-SA 4.0 License. For the full text, view LICENSE-MD.txt. Solus Project is considered the sole rights holder of these works.
