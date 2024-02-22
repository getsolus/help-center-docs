---
title: Local Repository
summary: Packaging using a local repository
---

# Packaging using a local repository

This guide walks you through the steps necessary to tell `solbuild` how to use your locally built `.eopkg` files that are not yet in the Solus repository.

:::note
It is not necessary to use a local repository to test most package submissions. The easier and recommended way is to install the `eopkg` files created when a package is built. This procedure is intended for use with stack upgrades, rebuilds, or new packages that need new dependencies that are not yet in the repository.
:::

We assume you have worked through the [packaging](/docs/packaging) material for creating a package with `solbuild`.

## Install the local profile

```bash
sudo eopkg install solbuild-config-local-unstable
```

You will also need to ensure that your repository is fully up to date. See [Update Your Development Environment](/docs/packaging/update-dev-environment.md)

## Using the local repository

### Copying .eopkg files to the local repository

To use your locally built `.eopkg` files as a dependencies for another package, you must copy the regular package file, and any accompanying `-devel` packages to the local repository directory `/var/lib/solbuild/local`.

For example, building the package `libcmis` produces the packages `libcmis` and `libcmis-devel`. Both should be copied to the local repository to build other packages against `libcmis`

To copy all `.eopkg` files within a directory to the local repository, use the following command:

```bash
sudo cp *.eopkg /var/lib/solbuild/local
```

### Using the local repository to build a package

With the `.eopkg` files now present in the local repository, you can use them to build a package by running `go-task build-local`, rather than just `go-task`, and `solbuild` will prefer your packages over packages found in the Solus repository.

Every time you run `go-task build-local`, all `eopkg` files in the local repository will be re-indexed.

### Best practices when working with a solbuild local repository

There are some important things to know when working with local repositories, as they may lead to issues later on.

- `solbuild` will use your version of a package from the local repository regardless of whether there's a higher release in the Solus repository. Therefore you should only use `go-task build-local` when required and also remove old packages from the local repository when they are no longer needed.
- If the package is already installed in the `solbuild` image, the release must be higher for it to be installed.

## Installing packages from the local repository index

`eopkg` supports resolving packages from more than one repository. This can be used to configure `eopkg` to prefer installing local repository packages over packages from the Solus repository.

This requires an existing local repository index. If you have used the command `go-task build-local`, then an index was created automatically. Otherwise, you must create one.

### Creating or updating the local repository index

To generate or refresh the `eopkg` index in `/var/lib/solbuild/local`, use the following command:

```bash
sudo eopkg index --skip-signing /var/lib/solbuild/local/ --output /var/lib/solbuild/local/eopkg-index.xml
```

Or, if you have our [helper functions](/docs/packaging/prepare-for-packaging#set-up-repository-helper-functions-optional) set up, you get the same result by running:

```bash
localrepo_reindex
```

Keep in mind that the index needs to be refreshed whenever you add or remove locally built packages to your local repository. Otherwise, `eopkg` won't know that new packages are available or have been removed from the local repository.

### Package resolution priority in eopkg

`eopkg` will always prefer packages from the topmost repository listed with `eopkg lr`.

In other words, if a package exists both in the local repository and the Solus repository, `eopkg` will only consider the package from the first repository listed with `eopkg lr` _regardless of its release number_.

### Adding the local repository index to the eopkg repository database

The easiest way to add the local repository index to the list of repositories known to `eopkg`, in the correct order, is to add the local repository and then _re-add_ the official Solus repository:

1. First, let's list the repositories currently known to `eopkg` with `eopkg lr`. This should produce output similar to:

```
Solus [active]
   https://cdn.getsol.us/repo/unstable/eopkg-index.xml.xz
```

2. Now the repositories need to be added to account for the desired dependency resolution order:

```bash
sudo eopkg ar Local /var/lib/solbuild/local/eopkg-index.xml.xz
sudo eopkg ar Solus https://cdn.getsol.us/repo/unstable/eopkg-index.xml.xz
```

This should yield output similar to:

```
$ sudo eopkg ar Local /var/lib/solbuild/local/eopkg-index.xml.xz
Repo Local added to system.
Updating repository: Local
Package database updated.
$ sudo eopkg ar Solus https://cdn.getsol.us/repo/unstable/eopkg-index.xml.xz
Repo already present with name Solus and same URL. Removing first.
Repo Solus added to system.
Updating repository: Solus
eopkg-index.xml.xz.sha1sum     (40.0  B)100%    765.61 KB/s [00:00:00] [complete]
eopkg-index.xml.xz             (2.1 MB)100%    914.38 KB/s [00:00:01] [complete]
Package database updated.
```

3. Check that the dependency resolution order is correct so that packages from the local `solbuild` repository are preferred over the upstream Solus repository.

`eopkg lr` should yield output similar to:

```
$ eopkg lr
Local [active]
   /var/lib/solbuild/local/eopkg-index.xml.xz
Solus [active]
   https://cdn.getsol.us/repo/unstable/eopkg-index.xml.xz
```

#### Disabling the local solbuild repository in eopkg

To reset the system to use only packages from the official Solus repository, disable the "Local" `eopkg` repository using the command `sudo eopkg disable-repo Local`.

The output should look similar to:

```
$ sudo eopkg disable-repo Local
$ sudo eopkg lr
Local [inactive]
   /var/lib/solbuild/local/eopkg-index.xml.xz
Solus [active]
   https://cdn.getsol.us/repo/unstable/eopkg-index.xml.xz
```

The "Local" `eopkg` repository can be re-enabled with `sudo eopkg enable-repo Local`.

```
$ sudo eopkg enable-repo Local
$ sudo eopkg lr
Local [active]
   /var/lib/solbuild/local/eopkg-index.xml.xz
Solus [active]
   https://cdn.getsol.us/repo/unstable/eopkg-index.xml.xz
```

## Closing thoughts

Congratulations on making it this far! Your system should now be ready for convenient deployment and testing of locally built packages.
