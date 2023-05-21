# Help Center Documentation

This is the repository for Solus's Help Center documentation. This repository exists to help facilitate and encourage community contributions to improving our documentation and enabling an easier user experience for everyone.

Stumbled on this repo and have no idea what any of this is? Check out the [Solus](https://getsol.us) operating system!

## Updating local repos after docusarus switch

```
git branch -m master old-help-center
git branch -m docusarus master
git fetch origin
git branch -u origin/master master
git remote set-head origin -a
```

## Getting Started

To get started developing our Docusaurus instance, or writing documentation, first [fork this project](https://github.com/getsolus/help-center-docs/fork) in order to submit pull requests for your changes

This project is written using [TypeScript](https://www.typescriptlang.org) and [React](https://reactjs.org), with some documentation being Markdown or [MDX](https://mdxjs.com/). To facilitate development, we use nvm and Yarn.

### NVM

To set up nvm, the Node Version Manager, follow the instructions listed [here](https://github.com/nvm-sh/nvm#readme). We recommend [setting up their shell integration](https://github.com/nvm-sh/nvm#deeper-shell-integration) as well, so you can automatically switch to the correct Node version when working on this project. Otherwise, ensure you run `nvm use`. This project requires the "current" supported release series of Node.

You can validate you are using the latest by running `node --version`. Your version should be at least 19.x.

### Yarn

This project makes use of [Yarn](https://yarnpkg.com/) for its package management. After setting up nvm and ensuring you are running the latest Node, run:

```
corepack enable
```

### Installing Dependencies

To install the required dependencies, run: `yarn`

### Starting Docusaurus

To start the live reloading Docusaurus, run: `yarn start`

### Other Useful Commands

- Clear local build cache: `yarn clear`
- Linting: `yarn lint`
- Updating translation files: `yarn write-translations`
- Validate build: `yarn build`
- Run validated build: `yarn serve`

## Publishing to https://help.getsol.us (via GH Pages)

Ensure that you can successfully generate a static site as above.

Then, when you're ready to deploy, run the following:

`USE_SSH=true yarn run deploy`

This obviously assumes that you have ssh push access to the help-center-docs repo and are using `remote.origin.url=git@github.com:getsolus/help-center-docs.git` (as listed by `git config -l`).

## Contributing

### Updating an Article

When updating an article, remember to update the date.

### Multi-Lingual Documents

Note that multi-lingual documents are not yet supported on our Help Center. When it does, we'll be happy to accept non-English language documents.

## Licenses

### Build System

Files relating to the parsing / build system are licensed under GPL-2.0. For the full text, view LICENSE.txt.

### Markdown

The Markdown files in this repository are licensed under the Creative Commons By-NC-SA 4.0 License. For the full text, view LICENSE-MD.txt. Solus Project is considered the sole rights holder of these works.

### Media Assets

- Solus logo copyright and licensing information is provided on our [Brand Guidelines page](https://getsol.us/branding).
- Non-logo assets are licensed under Creative Commons By-NC-SA 4.0 License. For the full text, view LICENSE-MD.txt. Solus Project is considered the sole rights holder of these works.
