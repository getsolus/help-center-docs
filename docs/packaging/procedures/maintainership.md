---
title: Maintainership
summary: Package maintainership
date: 2022-12-16
---

# Maintainership

The role of a maintainer is to update package(s) on a regular basis, while following Solus packaging and consistency standards.

## Commitment

Each new package which is going to land in the Solus repository must have one or more maintainers. These individuals commit to:

- Update the package reasonably regularly, unless there are valid reasons to hold it back
- Ensure the [packaging file](/docs/packaging/package.yml) adheres to the Solus [standards](/docs/packaging/packaging-practices)
- Ensure the application or library is consistent with the Operating System aesthetics, file system conventions and the Solus philosophy in general

On the Solus side however, the community must not forget that maintainers are volunteers, which may or may not have a technical background. More experiencied users are to engage newcoming maintainers in a welcoming manner, e.g. by listing their errors and inviting them to fix them. (More on this in the [community guidelines](/docs/user/contributing/community-guidelines#development--issue-trackers))

The Core Team has the right to enforce certain practices, even when in contrast with maintainers' vision. It also has the right to ultimately accept or reject a patch.

## Stepping in

To officially step in as the maintainer of a package, a `MAINTAINERS.md` file must be provided for accepted packages that are not yet included in the repository, or if the package predates the policy of requiring one. Instead, if a previously maintained package is marked by the Solus team as needing a new maintainer, the `MAINTAINERS.md` file must be updated.

## Updating a maintained package

The procedure varies depending on whether or not the individual is the maintainer.

### Maintainers

Maintainers are free to [update a package](/docs/packaging/updating-an-existing-package) at their will, unless otherwise indicated by the Core Team.

### Non-maintainers

If a package is actively maintained, modifications should not occur and the individual should exercise patience when it comes to the updating of software. In some cases, a maintainer may intentionally be holding back a package, or has simply not updated yet. If pertinent, the individual should file a [package update request](/docs/packaging/procedures/request-a-package-update). Alternatively, the individual can reach the maintainers or the Core Team on Matrix and ask permission to update the package. It is also possible to submit a patch and attach a message to it clarifying the intention of updating the package, although this is a special case reserved to e.g. security updates and the patch is likely to be rejected.

## Template

Presented here is the `MAINTAINERS.md` file. This file must be provided verbatim alongside the other patch contents, and filled in with the maintainers' personal information. An Matrix contact is optional but recommended, but an e-mail address is mandatory. Similar to the `.solus/packager` file used for packaging, the maintainers listed in `MAINTAINERS.md` must use their real first and last name(s) for accountability purposes.

The contact information section is a YAML list. If needed, more elements may be added, each per maintainer. Do not edit the file in any other way, including spacing, except _Name_, _Surname_ and _REPLACEME_ placeholders.

```
This file is used to indicate responsibility for the maintenance of this package. Individuals on this list should be the sole modifiers of the package, excluding cases where the Solus Team may need to perform necessary rebuilds, upgrades, or security fixes. This list should not be used for any direct contact usage. If you believe this package requires a package update, follow documentation from https://getsol.us/docs/packaging/procedures/request-a-package-update. In the event this package no longer becomes sufficiently maintained, Core Team reserves the right to request a new maintainer or remove this package from the repository.

- Name Surname
  - Matrix: REPLACEME
  - Email: REPLACEME
```
