---
title: Updating an Existing Package
summary: Updating an Existing Package
sidebar_position: 4
---

# Updating an Existing Package

This article will go over updating a package that is already in the Solus git repository.

The instructions below assume you have cloned the package's repository. The easiest way to do this is (substitute the actual package name):

```bash
git make package-name.clone
```

Alternatively, you may use the https link provided on the respective git page, [for example nano](https://github.com/solus-packages/nano).


:::note

**Please [look to see if an issue has been filed](https://github.com/getsolus/packages/issues?q=label%3A%22Package+Request%22) for the software update**.
If there is an existing request, please add a link to it in your pull request. Ex:

```
Software update request https://github.com/getsolus/packages/issues/123
```

:::

## Update Your GitHub Fork

If you have a fork of the package in GitHub, from previous updates, log into GitHub. Make sure you're looking at the master branch & that your fork is up to date with the repo it was forked from. If your fork indicates it is behind, use the "Sync fork" button to bring it up to date.

You will also need to bring your local copy of that fork up to date. To do so run:

```bash
cd /home/solus-builds/package-name
git pull
```

## Switch to a New Git Branch

It's always a good idea to switch to a new git branch before beginning packaging work. This will allow you to more easily separate your work from an new changes made to the package repository, which will allow you to more easily rebase any changes if needed.
Example:

```bash
git switch -c update_mypackage_versionnum
```

## Bumping a package

Bumping a package is typically done when rebuilding against a changed dependency, such as `imagemagick` needing to be rebuilt if `libwebp` changes. Additionally, it is done if changes are being made to the package, such as additional new dependencies or other modifications.

This can be achieved by doing `make bump`, which increments the release number by 1.

## Updating a package

To update the package to a newer version, use the `yupdate` tool. This is located at `/usr/share/ypkg/yupdate.py`. We recommend setting an alias via your `.bashrc`, `.zshrc`, etc.

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

## Building a package

After bumping or updating the package, build it by running:

```bash
make
```

Next, you'll [test the package and submit a pull request for review](submitting-a-package.md).