+++
title = "Moving to GetSolus"
lastmod = "2018-09-20T21:44:59+03:00"
+++
# Moving to GetSolus

This document walks the end user through moving their developer related tooling and repositories over to GetSolus (`dev.getsol.us`).

## Arcanist

This migration requires setting up Arcanist again. You can do this by running the following commands.

Firstly, you will need to set the new arc default to the GetSolus URL.

``` bash
arc set-config default https://dev.getsol.us
```

Next, you will need to install the certificate. This will also prompt you to make a new conduit key and add it. This is done by:

``` bash
arc install-certificate
```

## Solbuild Images

We have issued a new solbuild release (1.4.3) as well as new solbuild images which set a new images URI to a `getsol.us` address. While performing a normal solbuild up will provide the necessary upgrade to the pisi package in the image to point to our new repositories, the new solbuild images have a modified set of packages, with a multitude of packages being demoted from `system.base` and `system.devel` components since our last update to the images. These packages would not otherwise be removed and therefore builds against an image locally may not be reflective of the set of packages that are defined on the builder's solbuild.

To perform this upgrade, first ensure you have performed the latest updates to your system and have package release 24 of `solbuild`. This has a new image clearing flag that we'll be utilizing in the instructions below.

Regardless of whether we're using the `main` image (uses the shannon repo and generally not recommended for most package builds) or `unstable`, you first need to clear your caches, including images (using our new `--images` / `-i` flag on `delete-cache` / `dc`).

``` bash
sudo solbuild dc -ai
```

Finally we must re-initialize our solbuild images:

- For main profile (not recommended, uses shannon repo rather than unstable) run: `sudo solbuild init -p main-x86_64`
- For unstable profile (recommended, uses unstable repo to ensure latest changes to packages are applied) run: `sudo solbuild init -p unstable-x86_64`

## Updating Repo URIs

As a result of us changing from `dev.solus-project.com` to `dev.getsol.us`, as well as changes to our SSH pushurls, you will need to ensure that all of your repositories are pointed to the new URLs to perform clones, pushing, etc.

We have written a script that should update most, if not all, of your cloned repositories to point to the new URLs. To run this script, you need to ensure you are using the `common` repository from `dev.getsol.us`. You can ensure this is the case by running the following commands in the parent directory of the `common` folder, where **all** your other repositories (like nano) should be:

``` bash
rm -rf common
git clone http://dev.getsol.us/source/common.git
```

Next, run the following command in the same directory as the one listed above:

``` bash
./common/switch_repo_domains
```

This command will go through every directory and change the following URLs in the respective `.git/config` files:

- `http://dev.solus-project.com/` will change to `https://dev.getsol.us/` (*Notice it forces https*)
- `https://dev.solus-project.com/` will change to `https://dev.getsol.us/`
- `ssh://vcs@dev.solus-project.com/` will change to `ssh://vcs@dev.getsol.us:2222/`

This command will also output a report at the end, indicating any directories which it failed to modify. If you have directories containing packages which you have not submitted to our development tracker, such as work-in-progress items, these may appear on this list.

**Note:** In the event the above utility does not work as intended on your system, you may need to remove and reclone your repositories.