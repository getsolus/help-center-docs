---
title: Solus Style Guide
summary: Guidance for writing Solus content
---

# Solus style guide

Solus needs a style guide to give clarity to our contributors and a consistent experience for readers. But we don't want to write our own! We surveyed existing style guides, and we picked parts that were more suitable for our content.

:::note

Existing help center topics might not follow our style guide yet.

:::

## General writing style

Use the [Google developer documentation style guide](https://developers.google.com/style) for general writing style, grammar, and formatting.

Some useful pages:

- [Text formatting summary](https://developers.google.com/style/text-formatting)
- [Procedures](https://developers.google.com/style/procedures)
- [Timeless documentation](https://developers.google.com/style/timeless-documentation)
- [Word list](https://developers.google.com/style/word-list)

## Linux-specific terms

If you are unsure of how to use a common Linux term, refer to the [Glossary of terms and conventions](https://redhat-documentation.github.io/supplementary-style-guide/#glossary-terms-conventions) from the _Red Hat supplementary style guide for documentation_

## Specific guidance

_In alphabetical order, not order of importance._

### Admonitions

This section is based on the [Red Hat supplementary style guide](https://redhat-documentation.github.io/supplementary-style-guide/#admonitions).

Admonitions should draw the reader’s attention to certain information. Keep admonitions to a minimum, and avoid placing multiple admonitions close to one another. If multiple admonitions are necessary, restructure the information by moving the less-important statements into the flow of the main content. See the [Docusaurus documentation](https://docusaurus.io/docs/markdown-features/admonitions) to learn the correct syntax.

| Type      | Description                                                                                                                                                                                                                         |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Note      | Additional guidance or advice that improves product configuration, performance, or supportability                                                                                                                                   |
| Tip       | Recommendations, suggestions, and alternative methods that might not be obvious. Tips are not essential to using the product.                                                                                                       |
| Info      | General information about the topic at hand that may be useful or relevant to user.                                                                                                                                                 |
| Important | Advisory information essential to the completion of a task or default configuration settings. Users must not disregard this information.                                                                                            |
| Warning   | Information that warns the user to proceed with caution. Warning emphasizes a course of action’s potential downsides.                                                                                                               |
| Danger    | Information about imminent system damage, data loss, or a support-related issue if the user disregards this admonition. If available, offer information to avoid the problem in the future or state where to find more information. |

## Code blocks

Code blocks must indicate the programming language of the code snippet.

````md
```js
console.log("Hello, world!");
```
````

### Commands

- Commands as part of procedures must be inside code blocks with `bash` as the language type. This ensures users get a "copy to clipboard" button.
- When needed, indicate the directory where users need to move before executing the command.

  ````md
  ```bash
  cd  ~/path/to/directory
  sudo somecommand
  ```
  ````

### Common Solus terms

- Solus
  - Prefer _Solus_ rather than _Solus Project_. Don't use _Solus OS_ or _Solus Linux_.
  - The names of the different editions of Solus are:
    - Solus Budgie
    - Solus GNOME
    - Solus Plasma
    - Solus XFCE
- Repositories
  - Avoid using terms such as _repo_, or _monorepo_, use the specific repository name instead.
  - Example: "The packages repository", instead of "The monorepo".
- Dev Tracker
  - Avoid using the term _Dev Tracker_.
  - Example: "The packages issue tracker", instead of "The dev tracker"
- eopkg
  - If you're referring to the application or package, use "`eopkg`" with inline code formatting (see below)
  - If you're referring to package files, use "`.eopkg`" with inline code formatting, including the period but no wildcard

### Markdown formatting

Write content using [Markdown formatting](https://www.markdownguide.org/cheat-sheet/), use [Prettier](https://prettier.io/) to enforce consistent formatting.

## Package names

- The name of packages in the Solus repository must use inline code formatting.

```md
To install `caddy`, use the Software Center or execute the following command:
```

- When referring to the name of a product or project, use the name the authors use.

Examples: _RetroArch_, and _Code::Blocks_

### Spelling

We prefer American spelling over British spelling. When in doubt about the spelling of a word, see the [Merriam-Webster dictionary](https://www.merriam-webster.com/).
