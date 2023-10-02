---
title: Update Your Development Environment
summary: Update your development environment before working on a package
sidebar_position: 2
---

# Update Your Development Environment

Always make sure your development environment and system are up to date before beginning work on a package

1. Update your fork of the getsolus/packages Repository.
2. Update your local clone of your fork.
3. Update the solbuild base image `sudo solbuild update`
4. Update the system.

## Update Your Fork of the getsolus/packages Repository

If you already have a fork of [getsolus/packages](https://github.com/getsolus/packages) in GitHub, log into GitHub. Make sure you're looking at the `main` branch. Check to see that your fork is up to date with the main repo it was forked from. If your fork indicates it is behind, use the "Sync fork" button to bring it up to date.

## Update Your Local Clone of Your Fork

If you already have a local clone, you need to bring it up to date. To do so run:

```bash
cd ~/solus-builds/packages
git switch main
git pull
```

## Update `solbuild` and the System

```bash
sudo solbuild update
sudo eopkg up
```

Next, you can either [Submit a New Package](creating-a-new-package.md) or [Update an Existing Package](updating-an-existing-package.md)
