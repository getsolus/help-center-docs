---
title: Release Processes
summary: Release Processes
---

# Release Processes

This post is intended as both information to users, and guidelines for developers and contributors of Solus. Solus employs a formal architecture to enable the curated rolling release model, which is made possible through the use of ferryd, solbuild and a split-repository model.

## Repository staging

All package builds for Solus, updates or otherwise, will always enter the `unstable` repository first. Consequently, all Solus developers and contributors should ensure `solbuild` is configured to use the unstable target. As and when the weekly stabilisation efforts have completed, the `unstable` repository will be pulled into `shannon`, the stable target.

This effectively means that `shannon` is a rolling snapshot of `unstable`. Note that the weekly sync will not make each repository match identically - the **tip** of every package in `unstable` will be merged into `shannon`. This ensures that the `shannon` update path is cost-efficient in terms of package availability, and that the delta packages provided on `shannon` match the true update path for those users. Lastly, this also ensures that there are no unintended packages arriving in shannon from older builds.

Solus installations always default to the `shannon` repository, making shannon the published distribution, and `unstable` the development distribution.

## Weekly Sync - Every Friday

At minimum there shall be one sync per week - this will always be on a Friday. As a result, users are never more than a few days away from unstable. This allows packagers to make deeper changes to Solus and still have time to stabilise the repository before releasing changes on the Friday.

Given the high volume of changes within Solus in any sync window, the Friday sync should be viewed more as a release than a simple sync. All developers and contributors should try their best to ensure that their changes do not introduce regressions, and that existing update paths are **always respected**.

Minor syncs during the week, and correctional syncs shortly after the Friday-sync, are permitted assuming they do not introduce breaking changes to shannon. These may include minor packaging changes, security updates, etc.

## Package deprecation

There are times when a package may need to be deprecated or even renamed. Packagers owning these changes must first communicate the need to ensure a coordinated deprecation.

Deprecated packages will remove themselves from the users systems as the first operation in an update or package install using the package manager, once marked as `Obsolete` in the index.

### Deprecating a package

Follow these steps to submit a package for deprecation:

0. Fork and clone the `solus-sc` repo [on Github](https://github.com/getsolus/solus-sc), and/or create a new branch
1. Edit `repo_data/distribution.xml.in`
2. Add the package you wish to deprecate at the end of the `<Obsoletes>` section
3. Run the `repo_data/merged_repos.sh` script
4. Commit and push your changes to your repo/branch
5. Open a Pull Request on Github

If a deprecation depends on a packaging change landing before it can be properly deprecated without undesireable side effects on user systems, the GitHub deprecation Pull Request MUST link to the packaging change and declare it as a dependency for deprecation.

### Undeprecating a package

The above steps also apply to undeprecating a package, with the following additions:

1. Before making changes, the package repository must be reactivated
2. In Step 2, remove the package from the list instead of adding it
3. After the `solus-sc` pull request has been merged, ask a Solus Staff member to index the repo with `ferryctl index unstable` (or do it yourself if you have the ability)
4. Bump or update the package

## Major stack changes

Large stack upgrades should begin as closely to the last Friday sync as possible, to ensure there is plenty of time for the work to be completed, integrated, and tested for regressions.
