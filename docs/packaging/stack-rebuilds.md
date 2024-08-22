---
title: Rebuilding a stack
summary: Rebuilding a stack of package dependencies
---

# Rebuilding a stack

In packaging, a stack is a package and the packages that depend on it. Most commonly, this refers to libraries, such as the Poppler stack, but other software can be referred to a stack as well. One example is the GNOME stack, which includes the libraries and applications that are the core of the GNOME desktop environment. Packages that depend on another package are called that package's _reverse dependencies_. When updating a library, one has to be mindful of its reverse dependencies, and if they will need to be rebuilt after updating the library.

:::note

If you haven't already, you will need to [set up a local repository](advanced-config/local-repository.md) to do stack rebuilds.

:::

## Updating the library

Go through the steps in [Updating an Existing Package](updating-an-existing-package.md) as normal, but instead of running `go-task build`, run `go-task build-localcp`. This will automatically copy the produced package files to your local repository for use in future builds.

## What are symbols?

Updating a library often means also building its reverse dependencies against the new version due to dynamic linking. Libraries are distributed as shared object, or `.so`, files, which contain the code symbols that other software can use. These files are usually versioned, such as `libpoppler.so.140`. This version is called the "so version". When a piece of software is built, it is _linked_ to the versioned libraries and code symbols that it uses.

When the developers of a library release a new update, they may decide to bump the `.so` version, and code symbols are added and/or removed from the library. If this happens, but its reverse dependencies are not rebuilt after updating, they will try to use the old shared object file and symbols. Because they no longer exist, however, the program will crash when it tries to open them. Rebuilding the stack ensures that every piece of software is pointing to the correct version of its dependencies.

## Checking if rebuilds are necessary

That's where the `abi_*` files in the package repository come in. `abi_libs` and `abi_symbols` list the libraries and code symbols provided by a package, while `abi_used_libs` and `abi_used_symbols` list what libraries and symbols the package links to. After updating a package that has `abi_libs` and `abi_symbols` files, run `git diff` on them and check for two things:

1. Changes in the `.so` version
2. Removed lines in `abi_symbols`

If either of these conditions are true, then all reverse dependencies of that package need to be rebuilt.

:::note

Sometimes, packages in a stack are rebuilt even though the above conditions are not met. These are called Safety Rebuilds.

:::

## Finding reverse dependencies

In most cases, all of the required rebuilds can be found by running `eopkg info <package>` and looking at the Reverse Dependencies line, thanks to our tooling's automatic dependency detection. This doesn't always work, though, such as with `abseil-cpp`. In that case, you can use a tool like RipGrep to find all of the packages that link against the library you're updating, for example:

```bash
# Run in the root of the Solus package repository on your system
rg "absl" packages/*/*/abi_used_libs
```

## Rebuild the stack

For each package in the stack, follow this procedure:

1. Bump the package

   ```bash
   go-task bump
   ```

2. Make sure there are no unwanted changes

   ```bash
   git diff .
   ```

3. Build the package using packages in your local repository

   ```bash
   go-task build-local
   ```

4. [Commit your changes](updating-an-existing-package.md#commit-your-changes). Use this format for your commit message:

   ```git
   package: Rebuild for other-package
   ```

   Do this in the same git branch as the library update.

Once all packages in the stack have been rebuilt, [submit a pull request for review](submitting-a-pull-request.mdx). If changes are requested, see [this section](submitting-a-pull-request.mdx#amending-a-pull-request-with-multiple-commits) about amending a pull request with multiple commits.
