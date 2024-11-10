---
title: Requesting a Package
summary: Requesting a new package
---

# Requesting A Package

If you think Solus is missing a package that would be useful, you can let us know using our Issue Tracker.

## Steps to request a new package

1. [Look to see if an issue has already been filed](https://github.com/getsolus/packages/issues?q=sort%3Aupdated-desc+is%3Aopen+label%3A%22Package%3A+Addition+Request%22) for the package you want. If there is already request for your package, please do not open another issue. Instead, add your comments to the existing issue.
2. Skim our [Package inclusion policy](/docs/packaging/procedures/package-inclusion.md) to make sure your request won't be rejected.
3. Open a new [issue](https://github.com/getsolus/packages/issues/new?assignees=&labels=Package%3A+Addition+Request%2CPriority%3A+Wishlist&projects=&template=request-new-package.yml&title=What%27s+the+package+name%3F) for your package using the _Request a new package_ template. The template will ask you for the following information. Please complete as much as you can.
   - Name
   - Homepage
   - Why should this be included in the repository? If we already offer similar packages in our repository **or third party repository**, please tell us what your new package does that our existing packages do not (_How is it different or better_).
   - Are we allowed to distribute it?
     - For Solus to distribute the package it must use a license found on the [SPDX License List](https://spdx.org/licenses/), or Solus must be given permission to redistribute it by the owner.
   - What kind of user will use this package, and how many users do you think will use this package?
   - Link to source tarball/zip file. This must point to a stable, versioned source, for example: `1.2.3.tar.gz` or `packagename-1.2.3`. Nightlies, snapshots and pre-releases are not allowed.
4. Wait for Solus Staff to approve or reject your request.
