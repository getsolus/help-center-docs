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
sudo eopkg it git arcanist solbuild solbuild-config-unstable
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

## Setting up a Build Directory

Create a build directory to hold sub-directories with packaging files. Here we are using the name `solus-builds` and placing it in our home directory, but you can use whatever you prefer.

```bash
mkdir ~/solus-builds
cd solus-builds
```

### Setting up `common`

Next you need to set up `common`, a set of scripts that enables you to manage, build, check, and publish packages.

Run the following commands to clone the `common` repository and create the required symlinks. Do this inside `solus-builds`:

```bash
git clone https://github.com/getsolus/common.git
ln -sv common/Makefile.common .
ln -sv common/Makefile.toplevel Makefile
ln -sv common/Makefile.iso .
```

Your folder should look something similar to this:

```
└── solus-builds
   ├── common
   │  ├── *lots of stuff, not shown here*
   ├── Makefile -> common/Makefile.toplevel
   ├── Makefile.common -> common/Makefile.common
   └── Makefile.iso -> common/Makefile.iso
```

## Building Packages

With your new build environment set up, you can now build packages.

- [Your First Package](docs/packaging/your-first-package.md)
- [Updating an Existing Package](docs/packaging/updating-an-existing-package.md)
- [Creating a New Package](docs/packaging/creating-a-new-package.md)
