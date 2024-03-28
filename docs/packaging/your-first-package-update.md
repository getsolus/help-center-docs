---
title: Your First Package Update
summary: An example of how to build a package that exists in the Solus repos for new packagers.
---

# Your First Package Update

This page will guide you through the steps required to build your first package. This is really a test to make sure that your [build environment is set up correctly](docs/packaging/prepare-for-packaging.md). You will clone an existing package, build it, then install it, and finally remove it.

## Cloning and building `nano`

For this example we will use the text editor `nano`.

Change to your packaging directory. Your directory may have a different name or location:

```bash
cd ~/solus-packages
```

Switch to the directory containing the `nano` recipe:

```bash
cd packages/n/nano
```

Alternatively, if you've set up the [Monorepo Helper Functions](/docs/packaging/prepare-for-packaging#set-up-repository-helper-functions-optional) you can replace the above to steps by these simple commands:n

```bash
gotosoluspkgs
gotopkg nano
```

Increase the release number by one ("bump" the package) and then check the results:

```bash
go-task bump
git diff
```

You should see output from git similar to the following:

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

You will be prompted to enter your password by sudo, and the `solbuild` tool will build the package.
If the build is successful, you will have a `nano` package file with a name like `nano-7.2-161-1-x86_64.eopkg`. Run the `ls` tool to check the exact name:

```bash
$ ls
abi_used_libs     files       package.yml
abi_used_symbols  nano-7.2-162-1-x86_64.eopkg  pspec_x86_64.xml
```

Congratulations! You have successfully built your first package on Solus.

## Installing Your New `nano` Package

To install your new `nano` package, run the following command. Your filename will probably be slightly different.

This is done so you can test that the package works as expected. Each package submission will require you to describe what testing you did.

```bash
sudo eopkg it nano-7.2-162-1-x86_64.eopkg
```

Testing `nano` is pretty easy. Testing other packages may be more complicated, depending on what they do.

To test your newly built `nano` package, simply run it on command line, then make sure you can edit and save a file.

## Returning to the Repository version (optional)

It is a good idea to remove the package you built, and return to the repository version, once you are done testing.

```bash
sudo eopkg it --reinstall nano
```
