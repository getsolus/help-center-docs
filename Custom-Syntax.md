# Custom Syntax

This document highlights custom Markdown syntax that is implemented (or is planned to be implemented) throughout the User Guide Markdown as well as the parser.

All of these custom syntax will result in DOM elements with specific styling / attributes via our parser.

## Blocks

### Basics

Each "block" is either a start or end block.

- Custom syntax that is the start of a block begins with `syntax.start`
- Custom syntax that is the end of a block **is** `syntax.end`

Each block syntax begins with `{{ ` and ends with `}}`.

**Example:**

``` markdown
{{ syntax.start:float-left }}
Content
{{ syntax.end }}
```

### Parsing

When parsing the syntax as DOM elements:
1. `syntax.start` blocks are parsed as `<div data-userguide-styling="n">` where `n` is the proceeding syntax after `syntax.start`
2. `syntax.end` blocks are parsed as `</div>`

**Example:**

``` html
<div data-userguide-styling="float-left">
Content
</div>
```

## Syntax

Each syntax below exempts the start / end block.

### Alignment

Description | Syntax
----- | -----
Floats content to left, allows text wrapping | `float-left`
Floats content to right, allows text wrapping | `float-right`
Centers content, no text wrapping | `center`

Float left syntax is usually not necessary but may be useful when the inner content is an image.

### Note

Sometimes having blocks of textual content that are intended to be subtle notes before or after more important content is needed. These notes are done via the `note` syntax.

**Example:**

``` markdown
{{ syntax.start:note }}
This is a note.
{{ syntax.end }}
```