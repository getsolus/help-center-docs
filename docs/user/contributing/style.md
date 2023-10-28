---
title: Solus Style Guide
summary: Guidance for writing Solus content
---

# Solus style guide

This page explains the style guides we try to follow when writing for Solus, mainly for the Help Center.

Solus needs a style guide to give clarity to our contributors and consistent experience for readers. But we don't want to write our own! We have surveyed the style guides written by other organizations and picked the parts we thought were valuable for Solus.

Remember that existing Help Center pages do not necessarily follow this guide; many pages were written before this page we wrote this guide.

## General writing style

Use the [Google developer documentation style guide](https://developers.google.com/style) for general writing style, grammar, and formatting.

Some useful pages:

- [Text formatting summary](https://developers.google.com/style/text-formatting)
- [Procedure](https://developers.google.com/style/procedures)
- [Timeless documentation](https://developers.google.com/style/timeless-documentation)
- [Word list](https://developers.google.com/style/word-list)

## Linux-specific terms

If you are unsure of how to use a common linux term, refer to the [Glossary of terms and conventions](https://redhat-documentation.github.io/supplementary-style-guide/#glossary-terms-conventions) from the _Red Hat supplementary style guide for documentation_

## Specific guidance

_In no particular order_

### Markdown formatting

- Write content using [markdown formatting](https://www.markdownguide.org/cheat-sheet/), use [Prettier](https://prettier.io/) to enforce consistent formatting.

### Spelling

- We prefer American spelling over British.

### Common Solus terms

- Solus
  - Prefer _Solus_ rather than _Solus Project_. Don't use _Solus OS_ or _Solus Linux_.
- Repo
  - Don't use _repo_ as a short form of _repository_, except in the case of _monorepo_.
  - Don't use _the repo(sitory)_  to mean _the packages repository_ or _the monorepo_. We have many repositories, be specific
- Dev Tracker
  - _Dev Tracker_ should not be used.

### Commands, code examples, package names

- Commands as part of a procedure (that user could copy directly) should be inside a code block, even if they are one line. This give's the user a "copy to clipboard" button:
- Commands as part of a procedure should always start be moving the user to the correct directory
- Code blocks should indicate the language used, for automatic syntax highlighting
    
    ````md
    ```bash
    cd  ~/path/to/directory
    sudo somecommand
    ```
    ````
- The first instance of a package name should match the name in the repository, and use in line code formatting (example: `nano`), subsequent uses can be in italics.

### Admonitions

This wording is taken from the _Red Hat guide_ [here](https://redhat-documentation.github.io/supplementary-style-guide/#admonitions).

Admonitions should draw the reader’s attention to certain information. Keep admonitions to a minimum, and avoid placing multiple admonitions close to one another. If multiple admonitions are necessary, restructure the information by moving the less-important statements into the flow of the main content. See the [Docusaurus documentation](https://docusaurus.io/docs/markdown-features/admonitions) to learn the correct syntax.