---
title: Updating an Existing Package
summary: Updating an Existing Package
---

# Updating an Existing Package

This article will go over updating a package that is already in the Solus git repository.

The instructions below assume you have cloned the package's repository using the https link provided on the respective git page, [for example nano](https://github.com/solus-packages/nano). The process for submitting an updated package is the same as if it is a new package. Follow the steps [here](/docs/packaging/submitting-a-package).

## Bumping a package

Bumping a package is typically done when rebuilding against a changed dependency, such as `imagemagick` needing to be rebuilt if `libwebp` changes. Additionally, it is done if changes are being made to the package, such as additional new dependencies or other modifications.

This can be achieved by doing `make bump`, which increments the release number by 1.

## Updating a package

To update the package to a newer version, use the `yupdate` tool. This tool is located at `/usr/share/ypkg/yupdate.py` and while you can use it directly, we generally recommend setting an alias via your `.bashrc`, `.zshrc`, etc.

```bash
alias updatePackage='/usr/share/ypkg/yupdate.py'
```

This script takes two arguments, in the following order:

1. Version
2. Source URL

If you're updating the package to a newer version, naturally you would change both the version and source. If you're merely changing the source URL for the existing version, just pass the same version number and the new source URL.

Example:

```bash
/usr/share/ypkg/yupdate.py 1.0 https://example.com/example-1.0.tar.xz
```
