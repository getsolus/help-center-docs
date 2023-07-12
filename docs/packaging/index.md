---
title: Prepare for Packaging
summary: Quick guide on getting your system set up for packaging on Solus
sidebar_position: 0
---

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
- `arcanist` is required to submit patches for packages to the [Solus Dev Tracker](https://dev.getsol.us)
- `solbuild` is a lightweight container environment for building packages repeatably
- `solbuild-config-unstable` sets up solbuild for working with the `unstable` repository

```bash
sudo eopkg it git arcanist solbuild solbuild-config-unstable
```

## Setting up a Dev Tracker Account

The [Solus Dev Tracker](https://dev.getsol.us) is where all packaging patches are submitted and reviewed. It runs [Phabricator](https://www.phacility.com/phabricator/), and we use `arcanist` to submit patches directly from the command line.

To submit patches you will need an account. [Register a new Phabricator account](https://dev.getsol.us/auth/start/), or log in with a Github account.

### Setting up Arcanist

In three easy steps, you can set up arcanist for the first time:

```bash
sudo eopkg it arcanist
arc set-config default https://dev.getsol.us
arc install-certificate
```

On the third step you will be given a unique link to log into the Dev Tracker, to create a `Conduit API Token`. This
token will be used to allow the CLI `arc` utility to communicate with the Dev Tracker.

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

You need to clone the common repository with git by doing `git clone https://dev.getsol.us/source/common.git` in the same directory you will have sub-folders for packages you are building.

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
