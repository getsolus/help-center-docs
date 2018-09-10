+++
title = "Moving to GetSolus"
lastmod = "2018-09-10T21:35:07+03:00"
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