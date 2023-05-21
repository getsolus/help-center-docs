---
title: Local Repository
summary: Packaging Using a Local Repository
date: 2022-12-16
---

# Packaging Using a Local Repository

This guide walks you through the steps necessary to tell solbuild how to utilise locally built `.eopkg's` that are not yet in the Solus repository.

We assume you have worked through the [packaging](/docs/packaging) material for creating a package with solbuild.

## Install the local profile

```bash
sudo eopkg install solbuild-config-local-unstable
```

You will also need to ensure that your common directory is fully up to date. Run `git pull` from within the common directory to receive the latest updates.

## Utilising the local repository

Solbuild has had support for local repos since its creation.

Improvements have been made to make it simple for contributors to test fixes out of the repo without having to wait for each patch to be merged. To include `.eopkg` files within a build, they need to be copied to the local repo directory `/var/lib/solbuild/local`.

Note that you will need both the regular package and the `-devel` package if you want to build another package against them using `pkgconfig()` in the `package.yml file`.

With the `.eopkg` files now present in the local repo, we can make use of them in solbuild by running `make local` rather than `make`. This will index the local repository and prioritise their use over what is available in the Solus unstable repository.

## Best practices when working with a solbuild local repository

There are some important things to know when working with local repositories, as they may lead to issues later on.

- Solbuild will use your version of a package from the local repo regardless of whether there's a higher release in the Solus repository. Therefore you should only use `make local` when required and also remove old packages from the local repo when no longer needed.
- If the package is already installed in the solbuild image, the release must be higher for it to be installed.

## Eopkg and local repositories

As alluded to above, eopkg supports resolving packages from more than one repository.

In practice, this can be leveraged to make the developer workflow more convenient by ensuring that eopkg pulls from the local solbuild repository.

### Generating an eopkg index for the local solbuild repository

Before packages from the local solbuild repository can be resolved, an eopkg index file needs to be created.

As mentioned earlier, the local solbuild repo installed by the `solbuild-config-local-unstable` package lives in `/var/lib/solbuild/local`.

To generate or refresh the eopkg index in `/var/lib/solbuild/local`, simply run:

`sudo eopkg index --skip-signing /var/lib/solbuild/local/ --output /var/lib/solbuild/local/eopkg-index.xml`

### A note on package resolution priority

It bears repeating that in its current incarnation, eopkg will always prefer packages from the topmost repository listed with `eopkg lr`.

In other words, if a package exists both in the local solbuild repository and the official upstream Solus repository, eopkg will only consider the package from the first repository listed with `eopkg lr` _regardless of its release number_.

### Adding the local solbuild repo to the eopkg repository database

The easiest way to add the local solbuild repo to the list of repositories known to eopkg is to add the local solbuild repo and then _re-add_ the official Solus repo.

#### Checking the currently known eopkg repositories

But first, let's list the repositories currently known to eopkg with `eopkg lr` -- this should produce output similar to:

```
Solus [active]
   https://mirrors.rit.edu/solus/packages/unstable/eopkg-index.xml.xz
```

#### Adding repositories in the correct order

Now the repositories need to be added to account for the desired dependency resolution order:

```
sudo eopkg ar Local /var/lib/solbuild/local/eopkg-index.xml.xz
sudo eopkg ar Solus https://mirrors.rit.edu/solus/packages/unstable/eopkg-index.xml.xz
```

This should yield output similar to:

```
$ sudo eopkg ar Local /var/lib/solbuild/local/eopkg-index.xml.xz
Repo Local added to system.
Updating repository: Local
Package database updated.
$ sudo eopkg ar Solus https://mirrors.rit.edu/solus/packages/unstable/eopkg-index.xml.xz
Repo already present with name Solus and same URL. Removing first.
Repo Solus added to system.
Updating repository: Solus
eopkg-index.xml.xz.sha1sum     (40.0  B)100%    765.61 KB/s [00:00:00] [complete]
eopkg-index.xml.xz             (2.1 MB)100%    914.38 KB/s [00:00:01] [complete]
Package database updated.
```

#### Re-checking the currently known eopkg repositories

All that is left now is to check that the dependency resolution order is correct so that packages from the local solbuild repository are preferred over the upstream Solus repository.

Thus, `eopkg lr` should yield output similar to:

```
$ eopkg lr
Local [active]
   /var/lib/solbuild/local/eopkg-index.xml.xz
Solus [active]
   https://mirrors.rit.edu/solus/packages/unstable/eopkg-index.xml.xz
```

#### Disabling the local solbuild repository in eopkg

To reset the system to use packages from the official Solus repository exclusively, the `Local` eopkg repository can be disabled with the command `sudo eopkg disable-repo Local`.

The output should look similar to:

```
$ sudo eopkg disable-repo Local
$ sudo eopkg lr
Local [inactive]
   /var/lib/solbuild/local/eopkg-index.xml.xz
Solus [active]
   https://mirrors.rit.edu/solus/packages/unstable/eopkg-index.xml.xz
```

The `Local` eopkg repository can be re-enabled with `sudo eopkg enable-repo Local`.

```
$ sudo eopkg enable-repo Local
$ sudo eopkg lr
Local [active]
   /var/lib/solbuild/local/eopkg-index.xml.xz
Solus [active]
   https://mirrors.rit.edu/solus/packages/unstable/eopkg-index.xml.xz
```

## Closing thoughts

Congratulations on making it this far! Your system should now be ready for convenient deployment and testing of locally built packages.

Note that packages not present in the local solbuild repository will be fetched from the upstream official Solus (unstable) repository.

Finally, keep in mind that the eopkg index needs to be refreshed whenever you add or remove locally built packages to your local solbuild repository -- otherwise eopkg won't know that new packages are available / have been removed from the repository.
