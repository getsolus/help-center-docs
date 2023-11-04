---
title: Updating an Existing Package
summary: Updating an Existing Package
sidebar_position: 4
---

# Updating an Existing Package

This article will go over updating a package that is already in the Solus package repositories.

:::note

**Please [look to see if an issue has been filed](https://github.com/getsolus/packages/issues?q=label%3A%22Package+Request%22) for the software update**.
If there is an existing request, please add a link to it in your pull request. Ex:

```
This PR resolves software update request https://github.com/getsolus/packages/issues/123
```

:::

### Update your clone of the packages Repository

If you do not have a local clone set up yet, see [Prepare for Packaging](prepare-for-packaging.md#fork-the-getsoluspackages-repository)

Bring your local clone up to date. Run:

```bash
cd ~/solus-packages/packages/n/nano
git switch main
git pull
```

## Switch to a New Git Branch

It's always a good idea to switch to a new git branch before beginning packaging work. This will allow you to more easily separate your work from any new changes made to the package repository, which will allow you to more easily rebase any changes if needed.
Example:

```bash
git switch -c update_nano
```

## Bumping a Package

Bumping a package is typically done when rebuilding against a changed dependency, such as `imagemagick` needing to be rebuilt if `libwebp` changes. It is also done if changes are being made to the package, such as adding new dependencies or other modifications which aren't a version update.

This can be achieved by doing `go-task bump`, which increments the release number by 1.

## Updating a Package

To update the package to a newer version, use the `go-task update` command.

This command takes two arguments, in the following order:

1. Version
2. Source URL

If you're updating the package to a newer version, naturally you would change both the version and source. If you're merely changing the source URL for the existing version, just pass the same version number and the new source URL.

Example:

```bash
go-task update -- 1.0 https://example.com/example-1.0.tar.xz
```

## The `MAINTAINERS.md` File

There must be a file called `MAINTAINERS.md` using the template in [Maintainership](procedures/maintainership.md). Add it if it does not already exist. It should name the current maintainer(s) of the package.

## Build the package

After bumping or updating the package, build it by running `go-task`.
Once your package has built successfully, you will need to [test it](testing-a-package).

## Commit Your Changes

Check the [changes in your files](git-basics#check-the-changes-in-your-files).

[Add / remove files as necessary to the commit](git-basics.md). Then, **check your branch**.

Run `git status`. Make sure all the files you changed are staged, and that there are no untracked files. When all is well, run `git commit`.

### Commit message format for updated / bumped packages

There should be a meaningful summary line (which starts with the package name), a blank line, and then the rest of the commit message.

- Bullet point lists should start with a dash.
- Include a changelog with a brief list of updates from the upstream release notes, with no links.
- There may also be a section for Solus specific work (e.g. rebuild against x / rework to remove dependency).
- Optional: A link to the upstream release notes page.
- Include your Test Plan.

`git commit` on [an initialized repository](prepare-for-packaging.md#initialize-git-hooks) will automatically open your editor with the correct template.
Note that lines starting with a `#` will be ignored by Git and do not need to be removed.

Here is an example in our standard format:

```
foo: Update to 1.2.3

**Summary**

Bugfixes:

- Fixed a crash
- Something else

Enhancements:

- Implemented a feature
- Error when encountering a thing

Full release notes:

- [1.2.3](https://github.com/foo/foo/releases/tag/v1.2.3)

**Test Plan**

<!-- Short description of how the package was tested -->

**Checklist**

- [ ] Package was built and tested against unstable
```

For more information on suitable commit messages, please check the [tooling central documentation](https://github.com/solus-project/tooling-central/blob/master/README.rst#using-git).

Next, you'll [submit a pull request for review](submitting-a-pull-request.md).
