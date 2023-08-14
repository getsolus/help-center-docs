---
title: Diff to Pull Request
summary: How to make your Phabricator diff a GitHub Pull Request
---

# Open Diffs

All but a few open package diffs on Phabricator were merged before the migration to GitHub. But what about the ones that weren't merged? Luckily, it should be a pretty straightforward process to turn your changes into a Pull Request on GitHub.

This article will use our [Bottom](https://github.com/solus-packages/bottom) package as an example.

To make the process even easier, we recommend installing `github-cli` (`sudo eopkg it github-cli`) to make working with GitHub a breeze.

## Setup

It would be a good idea to change the name of the directory to avoid a naming conflict when you fork and clone the new repository.

```bash
cd ~/solus-builds # Change this to wherever your package build directory is
mv bottom bottom-old
```

The first step will be to fork the new GitHub repo. You can do this via GitHub's website, or via the command line. We'll use the command line here to help streamline the process.

```bash
gh repo fork --clone solus-packages/bottom
```

This will create a fork of the Solus package under your user, in my case `EbonJaeger/bottom`. The command will also create a remote called `upstream` pointing to the repository in the `solus-packages` organization to make updating your copy easier, and the `--clone` option clones the fork to your disk.

## Moving Your Commit

Now to move your committed changes from the old repo to the new. Let's create a new branch in the newly cloned repository to work in. While not strictly necessary, it's a good practice to get in the habit of doing.

```bash
cd bottom
git switch -c example-package-bump
```

Next, extract your commit from your old copy of the repository using `git format-patch`. Replace `bottom-old` below with the directory of your old repo.

```bash
git --git-dir=../bottom-old/.git format-patch -k -1 --stdout HEAD | git am -3 -k
```

> **Breakdown:** This will take the latest commit from the repository passed to the `--git-dir` option as a patch, send it to *stdout*, and is applied to the current repository by piping it to `git am`, falling back to a three-way-merge if for some reason there is a merge conflict when applying the patch.

Once this is complete, you can verify the operation with `git status` and `git log` to see that the commit was applied.

Push the commit to your fork on GitHub with `git push`.

## Creating a Pull Request

You can now open a Pull Request as normal. This can be done from the website or from the command line:

```bash
gh pr create --repo solus-packages/bottom
```
