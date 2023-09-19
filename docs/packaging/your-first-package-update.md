---
title: Your First Package Update
summary: An example of how to build a package that exists in the Solus repos for new packagers.
---

# Your First Package Update

This page will guide you through the steps required to build your first package update. This is really a test to make sure that your [build environment is set up correctly](docs/packaging/prepare-for-packaging.mdx).

We will use the `nano` package for this. You'll fork the packages repository, clone it locally, build `nano`, install and test it, and finally remove the built `.eopkg`.

## Fork the getsolus/packages Repository / Update Your Fork

### Create a Fork

If you had not yet done so already, fork [getsolus/packages](https://github.com/getsolus/packages) using the GitHub web UI or [`gh` cli tool](https://cli.github.com/manual/gh_repo_fork) from the `github-cli` package. It will be forked to `github.com/yourgithubaccount/packages`.

### Update a Fork

If you already have a fork of [getsolus/packages](https://github.com/getsolus/packages) in GitHub, log into GitHub. Make sure you're looking at the main branch. Check to see that your fork is up to date with the main repo it was forked from. If your fork indicates it is behind, use the "Sync fork" button to bring it up to date.

## Clone the `packages` Repo / Update Your Clone

### Clone the `packages` repo

If you do not yet have a local clone of your packages fork, change to your packaging directory. Then, clone your fork and switch to its directory. For example:

```bash
cd ~/solus-builds
gh repo clone yourgithubaccount/packages
cd packages/packages/n/nano
```

## Building `nano`

Increase the release number by one ("bump" the package) and then check the results:

```bash
go-task bump
git diff
```

You should see output from git similar to the following (the version and release number may be different):

```diff
diff --git a/package.yml b/package.yml
index 2ff1756..4bc344c 100644
--- a/package.yml
+++ b/package.yml
@@ -1,6 +1,6 @@
 name       : nano
 version    : '7.2'
-release    : 161
+release    : 162
 source     :
     - https://www.nano-editor.org/dist/v7/nano-7.2.tar.xz : 86f3442768bd2873cec693f83cdf80b4b444ad3cc14760b74361474fc87a4526
 homepage   : https://www.nano-editor.org
```

Next, build the package:

```bash
go-task
```

You will be prompted to enter your password by `sudo`, and the `solbuild` tool will build the package.
If the build is successful, you will have a `nano` package file with a name like `nano-7.2-161-1-x86_64.eopkg`. Run the `ls` tool to check the exact name:

```bash
ls

abi_used_libs     files       package.yml
abi_used_symbols  nano-7.2-162-1-x86_64.eopkg  pspec_x86_64.xml
```

Congratulations! You have successfully built your first package on Solus.

## Installing Your New `nano` Package

To install your new `nano` package, run the following command. Your filename will probably be slightly different.

This is done so you can test that the package works as expected. Each pull request will require you to describe what testing you did.

```bash
sudo eopkg it nano-7.2-162-1-x86_64.eopkg
```

Testing `nano` is pretty easy. Testing other packages may be more complicated, depending on what they do.

To test your newly built `nano` package, simply run it on command line, then make sure you can edit and save a file.

## Remove the `.eopkg` File

Once testing is done, you can remove the `.eopkg` file. You will need to do this before submitting a pull request on any package. To do this, run:

```bash
go-task clean
```

## Returning to the Repository version (optional)

It is a good idea to remove the package you built, and return to the repository version, once you are done testing.

```bash
sudo eopkg it --reinstall nano
```
