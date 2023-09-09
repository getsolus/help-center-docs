---
title: Creating a New Package
summary: Creating a Package For Inclusion in the Repo
sidebar_position: 3
---

# Creating a New Package

This page will take you through the steps required to build a new package for the Solus repo. For this example, we will use the command line utility [tree](https://gitlab.com/OldManProgrammer/unix-tree), which is already packaged for Solus, but we will pretend like it's not.

:::note

**Please [look to see if an issue has been filed](https://github.com/getsolus/packages/issues?q=label%3A%22Package+Request%22) for the software or library you intend to package**. If there is an existing request, please add a link to it in your pull request. Ex:

```
Software request https://github.com/getsolus/packages/issues/123
```

:::

## Fork the getsolus/packages repo

1. Fork the repo [getsolus/packages](https://github.com/getsolus/packages) using the GitHub web UI or  [`gh` cli tool](https://cli.github.com/manual/gh_repo_fork) from the `github-cli` package. It will be forked to `github.com/yourgithubaccount/packages`.
   If you had already cloned this repo, make sure to update it with `git pull`.
2. From within your packaging directory, clone the fork. For example `gh repo clone yourgithubaccount/packages`.
3. Create a new branch in this repo. For example: `git switch -c add_tree`.

## Create a New Package Directory

From within your packaging directory, create a new directory for the new package. Use the package name as the directory name. Then, create the required Makefile within that directory.

```bash
mkdir tree
cd tree
echo "include ../Makefile.common" > Makefile
```

## Initialize the Git Repo

Initialize the folder as a git repository and switch to a new branch.  This will allow you to more easily separate your work from any new changes made to the package repository, which will allow you to more easily rebase any changes if needed.

Example:

``` bash
git init
git switch -c my-branch
```

## Create the `package.yml` File

You will need a link to the most recent source tarball for this from the software's website.

Create a skeleton `package.yml` file using the script `common/Scripts/yauto.py` and the link for the tarball. For example:

```bash
../common/Scripts/yauto.py https://gitlab.com/OldManProgrammer/unix-tree/-/archive/2.1.1/unix-tree-2.1.1.tar.gz
```

Consider creating an alias for this script in your `.bashrc` file (or equivalent for your preferred shell).

```bash
alias fetchYml="$HOME/solus-builds/common/Scripts/yauto.py"
```

:::note
You can, of course, create your `package.yml` file entirely from scratch, but the script will give you a better starting point. We recommend using the script.
:::

Now you should have a `package.yml` file that looks something like this:

```yaml
name       : unix-tree
version    : 2.1.1
release    : 1
source     :
    - https://gitlab.com/OldManProgrammer/unix-tree/-/archive/2.1.1/unix-tree-2.1.1.tar.gz : bcd2a0327ad40592a9c43e09a4d2ef834e6f17aa9a59012a5fb1007950b5eced
homepage   : PLEASE FILL ME IN
license    : GPL-2.0-or-later # CHECK ME
component  : PLEASE FILL ME IN
summary    : PLEASE FILL ME IN
description: |
    PLEASE FILL ME IN
builddeps  :
setup      : |
    %configure
build      : |
    %make
install    : |
    %make_install
```

The `yauto.py` script has filled many fields for us, but not all of them will be right, and some of them need to be filled in. Refer to the [package.yml page](docs/packaging/package.yml.md) to see how each field should be used.

For this example, we need to fix the following:

- The name needs to be `tree`, so update it.
- The `license` is correct, so we remove the comment.
- Fill in `homepage`, `component`, `summary`, and `description`.
- Remove `builddeps`. This package has no build dependencies beyond the ones already available for every package (the `system.devel` packages).
- The `setup` step is not required, remove it.
- In the `install` key, we can't use the `%make_install` macro for this package. The files are installed in their correct locations individually.

After updating the file, it will now look like:

```yaml
name       : tree
version    : 2.1.1
release    : 1
source     :
    - https://gitlab.com/OldManProgrammer/unix-tree/-/archive/2.1.1/unix-tree-2.1.1.tar.gz : bcd2a0327ad40592a9c43e09a4d2ef834e6f17aa9a59012a5fb1007950b5eced
homepage   : https://gitlab.com/OldManProgrammer/unix-tree
license    : GPL-2.0-or-later
component  : system.utils
summary    : list contents of directories in a tree-like format.
description: |
    Tree is a recursive directory listing command that produces a depth indented listing of files, which is colorized ala dircolors if the LS_COLORS environment variable is set and output is to tty
build      : |
    %make
install    : |
    install -Dm00664 $workdir/doc/tree.1 $installdir/usr/share/man/man1/tree.1
    install -Dm00755 $workdir/tree $installdir/usr/bin/tree
```

To read more about finding and including dependencies and other parts of `package.yml` please see [Packaging Practices](packaging-practices.md).

Understanding how to translate source code into a good `package.yml` file is the heart of packaging. If you are stumped, or have questions, **ask for help in our Solus Packaging room on [Matrix](/docs/user/contributing/getting-involved#matrix-chat).**

## Create The `MAINTAINERS.md` File

You must add a file called `MAINTAINERS.md` using the template in [Maintainership](procedures/maintainership.md). Solus uses this to track the primary maintainer(s) for each package.

## Build the Package

Build the package with:

```bash
make
```

Once the build completes, your directory should now include the following files:

```text
├── abi_used_libs
├── abi_used_symbols
├── Makefile
├── package.yml
├── pspec_x86_64.xml
└── tree-2.1.1-1-1-x86_64.eopkg
```

All these files _except_ the `*eopkg` file should be included in your pull request.

## Commit your Changes

**Check your branch**

Get the status of the branch with `git status`. Make sure all the files you changed are staged, and that there are no untracked files. The git status should say your branch is clean.

Now that you've tested and reviewed your change, when you're happy with it, it's time to commit your changes with `git commit`.

Make sure you provide a meaningful summary (with the package name) and a separate body to your commit message.

There should be a summary line, a blank line, and then the rest of the commit message. Bullet point lists should start with a dash.

Here is an example in our standard format:

```
Initial inclusion of the tree package

## Test Plan

- Launched the application
- Exercised the UI
- Exercised some feature
```

For more information on suitable commit messages, please check the [tooling central documentation](https://github.com/solus-project/tooling-central/blob/master/README.rst#using-git).

- If you want to link this pull request to an existing package request, simply mention it in your commit message (use the full URL): `The inclusion of <somepackage> resolves https://github.com/getsolus/packages/issues/123`
- If you need a change to depend on another change, mention it in the commit message too (use the full URL): `Depends on https://github.com/getsolus/packages/issues/234`

## Submitting a Pull Request for Review

In the package folder, run `git push`.

:::note
If you've created your own branch, the cli tool will prompt you with a new command to create and push to a remote branch matching the local one.
:::

Once the commit is successfully pushed, you'll notice that a URL will be provided that will immediately allow you to create a pull request with your changes.
Open the link, double check everything, then create the pull request!

## Updating a Pull Request That Needs Changes

### Updating files

TODO: remove git amend / git push --force?
That's easy. **Don't make a new commit**. Make any relevant changes to your local branch, adding and removing as before, but this time run: `git commit --amend`.

This will amend your original changes, and you can submit the updated commit with `git push`.

A new editor session will open, where you can provide details about the changes you've made between the last revision and the newly amended one. This comment will help reviewers to see what you've changed, to streamline the process of getting your patch into Solus.

The web interface will automatically update with the latest commit. Once accepted, your pull request will be merged, and someone on the Solus Team will issue a build.

:::note
- If you have already created a new commit, run `git rebase -i HEAD~2` to squash the commits, change the commit message to the same commit message as the original, removing any suggested commit message from git itself.
:::

### Updating Task Information

If you forgot information such as a test plan, you can run resolve this by:

1. Edit your commit message with `git commit --amend` as well as editing the pull request on the GitHub web interface. <-- TODO: GitHub PR Templates
2. Next, you will see an editor session for providing a message indicating the change, for example "Added a test plan."

After this editor session, the updated patch will be automatically uploaded, the web UI will automatically update, and no new tasks will be created.