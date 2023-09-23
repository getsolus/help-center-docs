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


## Fork the getsolus/packages Repository / Update Your Fork

### Create a Fork

If you had not yet done so already, fork [getsolus/packages](https://github.com/getsolus/packages) using the GitHub web UI or [`gh` cli tool](https://cli.github.com/manual/gh_repo_fork) from the `github-cli` package. It will be forked to `github.com/yourgithubaccount/packages`.

### Update a Fork

If you already have a fork of [getsolus/packages](https://github.com/getsolus/packages) in GitHub, log into GitHub. Make sure you're looking at the `main` branch. Check to see that your fork is up to date with the main repo it was forked from. If your fork indicates it is behind, use the "Sync fork" button to bring it up to date.

## Clone the package repo / update your clone

### Clone the repo

If you do not yet have a clone of your packages repo fork, change to your packaging directory and clone your fork. Then, switch to the directory of the package to update. For example:

```bash
cd ~/solus-builds
gh repo clone yourgithubaccount/packages
cd packages/packages/n/nano
```

### Update an existing clone

If you already have a local clone, you need to bring it up to date. To do so run:

```bash
cd ~/solus-builds/packages/n/nano
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

To update the package to a newer version, use the `yupdate` tool. This is located at `/usr/share/ypkg/yupdate.py`. We recommend setting an alias via your `.bashrc`, `.zshrc`, or method appropriate to your shell.

```bash
alias updatePackage='/usr/share/ypkg/yupdate.py'
```

This script takes two arguments, in the following order:

1. Version
2. Source URL

If you're updating the package to a newer version, naturally you would change both the version and source. If you're merely changing the source URL for the existing version, just pass the same version number and the new source URL.

Example:

```bash
/usr/share/ypkg/yupdate.py 1.0 https://example.com/example-1.0.tar.xz
```

## The `MAINTAINERS.md` File

There must be a file called `MAINTAINERS.md` using the template in [Maintainership](procedures/maintainership.md). Add it if it does not already exist. It should name the current maintainer(s) of the package.

## Build the package

After bumping or updating the package, build it by running `go-task`.
Once your package has built successfully, you will need to [test it](testing-a-package).

## Commit Your Changes

Check the [changes in your files](git-basics#check-the-changes-in-your-files).

[Add / remove files as necessary to the commit](git-basics.md). Then, **check your branch**.

Run `git status`. Make sure all the files you changed are staged, and that there are no untracked files. When all is well, run `git commit --cleanup=scissors`.

import GitCommitCleanup from './_git_commit_cleanup.md';

<GitCommitCleanup/>

### Commit message format for updated / bumped packages

There should be a meaningful summary line (which starts with the package name), a blank line, and then the rest of the commit message.

- Bullet point lists should start with a dash.
- Include a changelog with a brief list of updates from the upstream release notes, with no links.
- There may also be a section for Solus specific work (e.g. rebuild against x / rework to remove dependency).
- Optional: A link to the upstream release notes page.
- Include your Test Plan.

Here is an example in our standard format (make sure to check the box in the checklist):

```
foo: Update to 1.2.3

## Summary

Bugfixes:

- Fixed a crash
- Something else

Enhancements:

- Implemented a feature
- Error when encountering a thing

**Full release notes:**
- [1.2.3](https://github.com/foo/foo/releases/tag/v1.2.3)

## Test Plan

- Launched the application
- Exercised the UI
- Exercised some feature

## Checklist

- [] Package was built and tested against unstable
```

For more information on suitable commit messages, please check the [tooling central documentation](https://github.com/solus-project/tooling-central/blob/master/README.rst#using-git).

- If you want to link this pull request to an existing issue, simply mention it in your commit message (use the full URL): `The inclusion of <somepackage> fixes https://github.com/getsolus/packages/issues/123`
- If you need a change to depend on another change, mention it in the commit message too (use the full URL): `Depends on https://github.com/getsolus/packages/issues/234`

Next, you'll [submit a pull request for review](submitting-a-pull-request.md).
