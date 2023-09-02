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

## Create a New Package Directory

From within your packaging directory, create a new directory for the new package with the package name, then create the required Makefile within that directory:

```bash
mkdir tree
cd tree
echo "include ../Makefile.common" > Makefile
```

:::note
We recommend making the name of the package directory match the name of the package.
:::

## Initialize Git Repo

Initialize the folder as a git repository and switch to a new branch.  This will allow you to more easily separate your work from an new changes made to the package repository, which will allow you to more easily rebase any changes if needed.

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

## Build the Package

Build the package (`tree` uses `make`, other packages may use another command):

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
Next, you'll [test the package and submit a pull request for review](submitting-a-package.md).