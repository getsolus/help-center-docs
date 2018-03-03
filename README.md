# Help Center Documentation

This is the repository for Solus's Help Center documentation. This repository exists to help facilitate and encourage community contributions to improving our documentation and enabling an easier user experience for everyone.

Stumbled on this repo and have no idea what any of this is? Check out the [Solus](https://solus-project.com) operating system!

## Contributing

### Updating an Article

When updating an article, remember to update the `lastmod` key / value in the TOML header. You can get the ISO 8601 formatted string by doing:

``` bash
date --iso-8601=seconds
```

A TOML header is indicated by the following example contents at the top of a file:

```
+++
title = "Example File"
lastmod = "2018-03-03T14:41:12+02:00"
+++
```

### Multi-Lingual Documents

Note that multi-lingual documents are not yet supported on our Help Center. When it does, we'll be happy to accept non-English language documents.

## Licenses

### Build System

Files relating to the parsing / build system are licensed under GPL-2.0. For the full text, view LICENSE.txt.

### Markdown

The Markdown files in this repository are licensed under the Creative Commons By-NC-SA 4.0 License. For the full text, view LICENSE-MD.txt. Solus Project is considered the sole rights holder of these works.

### Media Assets

- Solus logo copyright and licensing information is provided on our [Brand Guidelines page](https://solus-project.com/branding).
- Non-logo assets are licensed under Creative Commons By-NC-SA 4.0 License. For the full text, view LICENSE-MD.txt. Solus Project is considered the sole rights holder of these works.