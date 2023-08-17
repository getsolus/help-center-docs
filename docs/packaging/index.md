---
title: Prepare for Packaging
summary: Quick guide on getting your system set up for packaging on Solus
sidebar_position: 0
---

:::danger
We are currently in the process of migrating our source repositories from Phabricator to GitHub. Updating all facets of the documentation will take some time.
If you notice any issues feel free to file an issue or get in contact with us on our Matrix channels.
:::

# Prepare for Packaging

## Setting up Packager file

In order to utilise the build system, you must first set up a configuration file that has your packager details.

This file lives in the `.config/solus` folder of your home directory. You will need to create the `.config/solus` folder as well as the inner `packager` file. Inside the packager file, you need two keys, `Name` and `Email`. This is used when generating the machine file so that the packager details are stored within the resulting binary package.

```ini
[Packager]
Name=Your Name Here
Email=your.email@address
```

## Installing Development Tools

We need to install a few things in order to get started with packaging.
The main packages we need are provided by the `system.devel` component.

Namely:

- `ypkg` the program that actually builds packages
- `make` used by our build tools for scripting

```bash
sudo eopkg it -c system.devel
```

Additionally, we need a few more tools to carry out the packaging process:

- `git` is used for version control of the solus sources
- `solbuild` is a lightweight container environment for building packages repeatably
- `solbuild-config-unstable` sets up solbuild for working with the `unstable` repository

```bash
sudo eopkg it git solbuild solbuild-config-unstable
```

## Setting up a GitHub account
The solus source repositories for the package repository currently reside on [github.com/solus-packages](https://github.com/solus-packages). You will need a GitHub account to submit patches and file issues. You can create a GitHub account [here](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home).

## Setting Up solbuild

The `solbuild` tool must first be initialized with a base image. All builds thereafter will use this as a base, and construct a temporary overlay root to save on time and disk space in builds.

### Initializing solbuild

Next, you need to initialize solbuild via:

```bash
sudo solbuild init
```

This will take some time as it downloads and prepares the image.

### Updating solbuild

It is a good idea to keep the base image updated. It will help reduce build times by not having to repeatedly download updates to packages in the base image, and will strictly need to pull down the packages your build needs.

To update solbuild, run:

```bash
sudo solbuild update
```

## Setting up common

Next you need to set up `common`, a set of make scripts that enables you to more easily manage, build, check, and publish packages.

You need to clone the common repository with git by doing `git clone https://github.com/getsolus/common.git` in the same directory you will have sub-folders for packages you are building.

Next you need to set up symlinks. Do this from the same directory you executed the `git` command:

```bash
ln -sv common/Makefile.common .
ln -sv common/Makefile.toplevel Makefile
ln -sv common/Makefile.iso .
```

Next, inside the **folder** of the **package** you are building, run: `echo "include ../Makefile.common" > Makefile`

This will enable you to call `make` commands from inside the package folder.

Your folder should look something similar to this:

```
| common/
| your-package/
| - Makefile
| Makefile
| Makefile.common
| Makefile.iso
```

## Building packages (Solus only)

After setting up common, you can now build the package. Note that build dependencies and such will be installed locally (in the chroot environment).

```bash
make
```

You will be prompted to enter your password by sudo so dependencies may be downloaded and the necessary eopkg files may be generated.

Once you’ve achieved a successful build, the resulting `.eopkg` files will be moved to the current directory, along with the machine file, `pspec_*.xml` (currently `pspec_x86_64.xml`). We recommending checking the contents of your
generated eopkg file(s) to ensure everything is located in the appropriate locations. You can do this by using `lseopkg file_name.eopkg`.
