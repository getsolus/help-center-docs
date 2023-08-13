---
title: Creating a New Package
summary: Creating a New Package
---

# Creating a New Package

This page will take you through the steps required to build a new package on Solus. For this example, we will use the command line utility [tree](https://gitlab.com/OldManProgrammer/unix-tree), which is already packaged for Solus, but we will pretend like it's not.

## Create a new Package Directory

From within your build directory, create a new directory for the new package with the package name, and create the required Makefile within that directory:

```bash
mkdir tree
cd tree
echo "include ../Makefile.common" > Makefile
```

## Create the `package.yml` File

Create a skeleton `package.yml` file using the `yauto.py` script from `common` You will need a link to the source tarball.   
You can, of course, create your `package.yml` file entirely from scratch, but the script will give you a better starting point.

```bash
../common/Scripts/yauto.py https://gitlab.com/OldManProgrammer/unix-tree/-/archive/2.1.1/unix-tree-2.1.1.tar.gz
```

Consider creating an alias for this script in your `.bashrc` file.

```bash
alias fetchYml="$HOME/solus-builds/common/Scripts/yauto.py"
```

Now you should have a `package.yml` file that looks something like this:

```yaml
name       : unix-tree
version    : 2.1.1
release    : 1
source     :
    - https://gitlab.com/OldManProgrammer/unix-tree/-/archive/2.1.1/unix-tree-2.1.1.tar.gz : bcd2a0327ad40592a9c43e09a4d2ef834e6f17aa9a59012a5fb1007950b5eced
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

The `yauto.py` script has filled many fields for us, but not all of them will be right, and some of them are blank. Refer to the [package.yml page](docs/packaging/package.yml.md) to see how each field should be used.

For this example, we need to fix the following:

- The `license` is correct, so we remove the comment.
- Fill in `component`, `summary`, and `description`.
- Remove `builddeps`. This package has no builddeps beyond the ones already available for every package (the `system.devel` packages).
- The `setup` step is not required.
- We can't use the `%make_install` macro for this package, so the files are installed in there correct locations individually.

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

Understanding how to translate source code into a good `package.yml` file is the heart of packaging. If you are stumped, or have questions, **ask for help on [Matrix](/docs/user/contributing/getting-involved#matrix-chat).**

## Build the Package

Build the package:

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

All these files _except_ the `*eopkg` file should be included when you submit the package for review.
