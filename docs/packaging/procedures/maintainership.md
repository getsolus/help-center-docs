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

On the Solus side however, the community must not forget that maintainers are volunteers, which may or may not have a technical background. More experienced users are to engage new maintainers in a welcoming manner, e.g. by listing their errors and inviting them to fix them. (More on this in the [community guidelines](/docs/user/contributing/community-guidelines#development--issue-trackers))

The Solus Staff have the right to enforce certain practices, even when in contrast with maintainers' vision. It also has the right to ultimately accept or reject a patch.

## Stepping in

To officially step in as the maintainer of a package, a `MAINTAINERS.md` file must be provided for accepted packages that are not yet included in the repository, or if the package predates the policy of requiring one. Instead, if a previously maintained package is marked by Solus Staff as needing a new maintainer, the `MAINTAINERS.md` file must be updated.

## Updating a maintained package

The procedure varies depending on whether or not the individual is the maintainer.

### Maintainers

Maintainers are free to [update a package](/docs/packaging/updating-an-existing-package) at their will, unless otherwise indicated by Solus Staff.

### Non-maintainers

If a package is actively maintained, modifications should not occur and the individual should exercise patience when it comes to updates. In some cases, a maintainer may intentionally be holding back a package, or has simply not updated yet. If pertinent, the individual should file a [package update request](/docs/packaging/procedures/request-a-package-update). Alternatively, the individual can reach the maintainers or Solus Staff via the Solus Packaging room on [Matrix](/docs/user/contributing/getting-involved.md#matrix-chat) and ask permission to update the package. It is also possible to submit an update and attach a message to it clarifying the intention of updating the package, although this is a special case reserved to e.g. security updates.