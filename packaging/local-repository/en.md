+++
title = "Packaging Using a Local Repository"
+++
# Packaging Using a Local Repository

This guide walks you through the steps to utilise locally built `.eopkg's` that are not yet in the Solus repository within solbuild.

We assume you have worked through the [packaging](https://solus-project.com/articles/packaging/building-a-package/en/) material for creating a package with solbuild.

## Install the local profile

``` bash
sudo eopkg install solbuild-config-local-unstable
```

You will also need to ensure that your common directory is fully up to date. Run `git pull` from within the common directory to receive the latest updates.

## Utilising the local repository

Solbuild has had support for local repos since its creation. Improvements have been made to make it simple for contributors to test fixes out of the repo without having to wait for each patch to be merged. To include `.eopkg` files within a build, they need to be copied to the local repo directory `/var/lib/solbuild/local`

With the `.eopkg` files now present in the local repo, we can make use of them in solbuild by running `make local` rather than `make`. This will index the local repository and prioritise their use over what is available in the Solus unstable repository.

## Best practices when working with a local repository

There are some important things to know when working with local repositories, as they may lead to issues later on.

- It will use your version of a package from the local repo regardless of whether there's a higher release in the Solus repository. Therefore you should only use `make local` when required and also remove old packages from the local repo when no longer needed.
- If the package is already installed in the solbuild image, the release must be higher for it to be installed.