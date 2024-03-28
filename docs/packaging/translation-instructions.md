---
title: Translation instructions
summary: Instructions for translators
---

# Translation instructions

Users will arrive here from the "Translation instructions" link on Transifex.

Please join our [Matrix rooms](/docs/user/contributing/getting-involved.md#matrix-chat) if you have questions about our translation projects.

## Project specific instructions

### Solus Mate Transition Tool

[Transifex project link](https://app.transifex.com/solus/solus-mate-transition-tool/)

- Strings which include curly braces `{ }` should be translated leaving the curly braces, _and anything inside the braces_, untouched.
- Examples:
  - `{DE} Successfully installed, please reboot to continue.` translates to:
  - `{DE} Instalado exitosamente, reinicie para continuar.`
  - `Successfully Installed {}` translates to:
  - `Instalado exitosamente {}`
- Do not translate the following strings; leave them untouched:
  - `Packagekit`
  - `XDG_SESSION_DESKTOP`
- If a string includes a new-line character, be sure to include it in the same place in the translation.
