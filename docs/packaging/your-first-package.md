---
title: Your First Package
summary: Your First Package
---

# Your First Package

This page will guide you through the steps required to build your first package. This is really a test to make sure that your [build environment is set up correctly](docs/packaging/index.md). You will clone an existing package, build it, then install it, and finally remove it.

## Cloning and building `nano`

For this example we will use the text editor `nano`.

Move to your build directory. Your directory may have a different name or location:

```bash
cd ~/solus-builds
```

Clone the `nano` repository, then move into it:
The `make nano.clone` command will clone the `nano` package repository `https://github.com/solus-packages/nano`

```bash
make nano.clone
cd nano
```

Increase the release number by one ("bump" the package) and then check the results:

```bash
make bump
git diff
```

You should see an output from git:

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
make
```


You will be prompted to enter your password by sudo and the `solbuild` tool will build the package.  
If the build is successful, you will have a `nano` package file with a name like `nano-7.2-161-1-x86_64.eopkg`. Run the `ls` tool to check:

```bash
ls

abi_used_libs     files       package.yml
abi_used_symbols  Makefile  nano-7.2-162-1-x86_64.eopkg  pspec_x86_64.xml
```

Congratulations! You have successfully built your first package on Solus.

## Installing Your New nano Package (optional)

To install your new `nano` package, run the following command. Your filename will probably be slightly different.

```bash
sudo eopkg it nano-7.2-162-1-x86_64.eopkg
```

## Returning to the Repository version (optional)

It is a good idea to remove your new package and return to the repository version once you are done testing your new package.

```bash
sudo eopkg it --reinstall nano
```
