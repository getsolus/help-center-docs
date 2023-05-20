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

## Running Locally

`npm install`
`npm start`

# Generate a static site

`npm run build`
`npm run serve`

This is needed to test searching

## Publishing to https://help.getsol.us (via GH Pages)

Ensure that you can successfully generate a static site as above.

Then, when you're ready to deploy, run the following:

`USE_SSH=true npm run deploy`

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
