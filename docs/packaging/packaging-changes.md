---
title: Packaging Changes
summary: Changes to packaging environment and instructions
sidebar_position: 7
---

# Packaging Changes

This page is meant to serve as a changelog of sorts for the Solus packaging environment and the packaging instructions. Refer to specific help pages for more details.

- This list is not exhaustive
- This list is in _reverse chronological order_ (newest first)

## Upcoming

_These items are not mandatory yet, and are subject to change_

#### Requiring `homepage` in `package.yml`

- The `homepage` key in `package.yml` will become mandatory. If a package does not have a homepage, use the address for the upstream source.
- We are exploring how to enforce this; for now we will ask nicely.

## 2023

### September

#### Switching From `make` to `go-task`

- All packaging actions are now handled by `go-task` rather than `make`.
  - Building a package can be done using `go-task` rather than `make`.
  - Commands are the same: `make local`, for example, is replaced by `go-task local`.
  - You can see all available commands by browsing to `Taskfile.ymml` in the `packages` repo at [`common/Taskfile.yml`](https://github.com/getsolus/packages/blob/main/common/Taskfile.yml).
- Packagers should install `go-task` on their machines if they have not already.
- The `Makefile` included with every package is no longer required. Please delete it from a package when updating, and do not include it when making the initial commit of a new package.

#### GitHub Monorepo Migration

- Packages were moved from the initial multirepo setup to the `packages` monorepo: [github.com/getsolus/packages](https://github.com/getsolus/packages) Now packagers only need to clone/fork one repository for all packages.
- The recommended migration strategy is to fork this repository and start with a clean clone. Any local changes to packages should be moved over manually.
- Packagers should now title commits like `packagename: Action`; for example: `nano: Update to 9.0`. Generic titles like `Update to 9.0` should not be used, except for rebuilds.
- Packagers should use the pull request template for package updates, filling out the Summary and Test Plan sections as usual.

### August

#### Initial GitHub Migration from old Phabricator Dev Tracker

- _This change was superseded by the later monorepo migration._
- The new multirepo setup for packages was under `github.com/solus-packages` organization, packages were updated with PRs to individual repositories.
- Issues were migrated to `github.com/getsolus/packages` from Phabricator. _Closed issues were not migrated._
- A read-only instance of the old Dev Tracker is available at [phab.getsol.us](https://phab.getsol.us). _This will eventually be shut down._

### April

The repository index was moved to `cdn.getsol.us`.

## 2022 and Earlier

Not included in this list.
