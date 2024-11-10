---
title: Requesting a Package Update
summary: Boohoo, your favorite package is outdated!
---

# Requesting A Package Update

Packages updates are typically provided by the community or dedicated package maintainers. If we are not shipping the latest stable release of a package, however, you can let us know.

**First, please [look to see if an update request has already been filed](https://github.com/getsolus/packages/issues?q=sort%3Aupdated-desc+is%3Aopen+label%3A%22Package%3A+Update+Request%22) for the software or library you require**.

If there isn't an existing request, you can use the link below to request a package update. Note that updates solely for a new version number, platform-specific updates (such as to macOS or Windows) which aren't relevant, or solely translation updates, are generally not accepted or not prioritized.

You will be asked in the form to provide the following information:

- Title: `Update $packagename to $version` (Example: `Update nano to 2.9.7`)
- Description: Explanation as to the value-add of updating this package.
- Link to source tarball/zip file. Note: `master.zip` files **are not permitted**. We require versioned tarballs, for example: "1.2.3.tar.gz".

Please put this into a new [issue](https://github.com/getsolus/packages/issues/new?assignees=&labels=Package%3A+Update+Request&projects=&template=request-package-update.yml).
