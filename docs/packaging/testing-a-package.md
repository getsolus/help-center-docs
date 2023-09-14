---
title: Testing a Package
summary: Testing a Package
sidebar_position: 5
---

# Testing a Package

After building a package, it must be tested against the unstable repo before a pull request can be submitted. Each pull request requires you to explain how you tested the package to make sure things work as expected.

You will use the .eopkg file(s) created by the build process for testing.

## Install the `.eopkg` Files
To install your new package, run the following command in the directory where you built the package. Include **all** `.eopkg` files that were built.

```bash
sudo eopkg it *.eopkg
```

Testing need not be very complicated. The goal is to ensure the package will reliably work for our users. Testing effort will depend on how complex the software is. At minimum, you want to ensure the application launches, and performs basic functionality as expected.

For example, if you were updating a text editor, you would want to make sure you can open, create and save files. If you know of issues the package has had in the past, it's a good idea to test that as well to make sure there are no regressions. There are plenty of historical pull requests to review if you want more detail.

## For Updated Packages: Return to the Repository Version

It is a good idea to uninstall the package you built, and return to the repository version, once you are done testing. To do this, run the following command on the main application. For example, if you just built `tree`:

```bash
sudo eopkg it --reinstall tree
```

## Remove the `.eopkg` Files

Before you can submit your pull request, you need to remove the `.eopkg` files. All repository packages are built by a dedicated build server from the source files provided in your pull request.

To remove these files, run:

```bash
make clean
```

