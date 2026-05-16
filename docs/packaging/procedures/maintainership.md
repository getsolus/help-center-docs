---
title: Maintainership
summary: Package maintainership
---

# Maintainership

The role of a maintainer is to update package(s) on a regular basis, while following Solus packaging and consistency standards.

## Commitment

Each new package which is going to land in the Solus repository must have one or more maintainers. These individuals commit to:

- Update the package reasonably regularly, unless there are valid reasons to hold it back
- Ensure the [packaging file](/docs/packaging/package.yml) adheres to the Solus [standards](/docs/packaging/packaging-practices)
- Ensure the application or library is consistent with the Operating System aesthetics, file system conventions and the Solus philosophy in general

The Solus community must not forget that maintainers are volunteers, who may or may not have a technical background. More experienced users are to engage new maintainers in a welcoming manner, e.g. by listing their errors and inviting them to fix them. (More on this in the [community guidelines](/docs/user/contributing/community-guidelines#repositories-and-issue-trackers))

The Solus Staff have the right to enforce certain practices, even when in contrast with maintainers' vision. It also has the right to ultimately accept or reject a patch.

## Becoming the maintainer of a package

To officially step in as the maintainer of a new package, a `MAINTAINERS.md` file must be provided for packages that have an approved package addition request, but are not yet included in the repository. If a previously maintained package is marked by Solus Staff as needing a new maintainer, the `MAINTAINERS.md` file must be updated.

## Updating a maintained package

This procedure varies, depending on whether or not the person wanting to update the package is one of its maintainers.

### For the package maintainer(s)

Maintainers listed in `MAINTAINERS.md` are free to [update a package](/docs/packaging/updating-an-existing-package) at their discretion, unless otherwise indicated by Solus Staff.

### For non-maintainers

If a package is actively maintained, individuals who are not one of its maintainers should not submit updates. Rather, they should exercise patience. In some cases, a maintainer may be intentionally holding back a package, or has simply not updated it yet. If pertinent, the individual who wants the update should file a [package update request](/docs/packaging/procedures/request-a-package-update). Alternatively, they can ask the maintainers via their provided contact information, or Solus Staff via the Solus Packaging room on [Matrix](/docs/user/contributing/getting-involved#matrix-chat) for permission to update the package. Note: When contacting a maintainer on Matrix, it's preferred to mention them in the Packaging room before trying to send private messages. For special circumstances, such as with security updates, it's possible to submit an update with a message in the PR clarifying the author's intention in updating the package.

## Template for the `MAINTAINERS.md` file

Presented here is the `MAINTAINERS.md` file. This file must be provided verbatim alongside the other patch contents, and filled in with the maintainers' personal information. A [Matrix](/docs/user/contributing/getting-involved#matrix-chat) contact is optional but recommended, while an email address is mandatory. Similar to the `.solus/packager` file used for packaging, the maintainers listed in `MAINTAINERS.md` must use their real first and last name(s) for accountability purposes.

The contact information section is a YAML list. If needed, more elements may be added, each per maintainer. Do not edit the file in any other way, including spacing, except _Name_, _Surname_ and _REPLACEME_ placeholders.

```
This file is used to indicate primary maintainership for this package. A package may list more than one maintainer to avoid bus factor issues. People on this list may be considered “subject-matter experts”. Please note that Solus Staff may need to perform necessary rebuilds, upgrades, or security fixes as part of the normal maintenance of the Solus package repository. If you believe this package requires an update, follow documentation from https://help.getsol.us/docs/packaging/procedures/request-a-package-update. In the event that this package becomes insufficiently maintained, the Solus Staff reserves the right to request a new maintainer, or deprecate and remove this package from the repository entirely.

- Name Surname
  - Matrix: REPLACEME
  - Email: REPLACEME
```
