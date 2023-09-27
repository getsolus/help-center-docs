---
title: Prepare for Packaging
summary: Quick guide on getting your system set up for packaging on Solus
sidebar_position: 1
---

# Prepare for Packaging

## Switch to the Unstable Repository

Packages need to be built and tested against the "unstable" repository. If you don't want to switch your primary system to unstable, you can do your packaging work in a VM. We have Virtual Machine Manager in the repos.

Refer to [Repository Management](docs/user/package-management/repo-management) to see how to add and switch to unstable.

## Setting up the Packager file

In order to utilize the build system, you must first set up a configuration file that has your packager details.

This file lives in the `.config/solus` folder of your home directory. You will need to create the `.config/solus` folder as well as the inner `packager` file. Inside the packager file, you need two keys, `Name` and `Email`. This is used when generating the machine file so that the packager details are stored within the resulting binary package.

Name and email address are mandatory. You must use your real first and last name(s) for accountability purposes.
A [Matrix](/docs/user/contributing/getting-involved#matrix-chat) contact is optional but recommended.

```ini
[Packager]
Name=Your Name Here
Email=your.email@address
Matrix=@username.matrix.org
```

## Installing Development Tools

We need to install a few things in order to get started with packaging:

- `go-task` is used by our build tools for scripting
- `git` is used for version control of the solus sources
- `github-cli` is used to make working with GitHub easier
- `solbuild` is a lightweight container environment for building packages repeatably
- `solbuild-config-unstable` sets up solbuild for working with the `unstable` repository
- `ypkg` is the program that actually builds packages

```bash
sudo eopkg it go-task git github-cli solbuild solbuild-config-unstable ypkg
```

## Setting up a GitHub account

The Solus source repositories for the package repository currently reside on [github.com/getsolus/packages](https://github.com/getsolus/packages). You will need a GitHub account to submit patches and file issues. You can create a GitHub account [here](https://github.com/signup). Note that you will also need to set up [2FA](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa) (two factor authentication) for your account.

### Configure `github-cli`.

Once you have a GitHub account, you need to configure `github-cli` to work with it. At minimum, you need to run `gh auth login`. Have your GitHub credentials and 2FA (two factor authentication) mechanism at hand.

See the [GitHub CLI quickstart](https://docs.github.com/en/github-cli/github-cli/quickstart) for some common uses of the tool.

## Setting up solbuild

The `solbuild` tool must first be initialized with a base image. All builds thereafter will use this as a base, and construct a temporary overlay root to save on time and disk space in builds.

Initialize solbuild via:

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

Create a packaging directory to hold sub-directories with packaging files. Here we are using the name `solus-builds` and placing it in our home directory, but you can use whatever you prefer.

```bash
mkdir ~/solus-builds
cd solus-builds
```

## Fork the getsolus/packages Repository

Create your own fork of [getsolus/packages](https://github.com/getsolus/packages) using the GitHub web UI or [`gh` cli tool](https://cli.github.com/manual/gh_repo_fork) from the `github-cli` package. It will be forked to `github.com/yourgithubaccount/packages`.

## Clone Your Forked Package Repository

Create a local clone of the package repository you just forked

```bash
cd ~/solus-builds
gh repo clone yourgithubaccount/packages
```

## Building Packages

Your system is now set up for package work.
If you are new to packaging, see [Your First Package Update](your-first-package-update.md).
