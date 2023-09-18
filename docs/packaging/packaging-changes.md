# Packaging Changes

This document is meant as a changelog of sorts for packaging practices. Refer to specific help pages for more details.

- This list is not exhaustive
- This list is in _reverse chronological order_ (newest first)

## Upcoming

_These items are not mandatory yet, and are subject to change_

#### `makefile` -> `go-task`

- All packaging action are now handled by `go-task` rather than `make`.
  - Example: `make` to build a package is replaced with `go-task build`.
  - Most commands are otherwise the same: `make local`, for example, is replaced by `go-task local`.
  - You can see all available commands at `common/Taskfile.yml`
- Packagers should install `go-task` on their machines if they have not already
- The `Makefile` included with every package is no longer required. Please delete it from a package when updating, and do not include it when making the initial commit of a new package

#### `homepage` in `package.yml`

- The `homepage` key in `package.yml`will become mandatory. If a package does not have a homepage, use the address for the upstream source.
- We are exploring how to enforce this; for now we will ask nicely.

## 2023

### September

#### GitHub Monorepo Migration

- Packages were moved from the multirepo setup to a monorepo: `github.com/getsolus/packages` Now packagers only need to clone/fork one repository for all packages.
- The recommended migration strategy is to fork this repository and start with a clean clone. Any local changes to packages should be moved over manually.
- Packagers should now title commits like `packagename: Action`; for example: `nano: Update to 9.0`. Generic titles like `Update to 9.0` should not be used, except for rebuilds.
- Packagers should use the pull request template for package updates, filling out the Summary and Test Plan sections as usual.

### August

#### Initial GitHub migration from old Phabricator Dev Tracker

- The new multi-repo setup for packages is under `github.com/solus-packages` organization, packages are now updated with PRs to individual repositories.
- Issues were migrated to `github.com/getsolus/packages` from Phabricator. _Closed issues were not migrated._
- A read-only instance of the old Dev Tracker is available at <phab.getsol.us>. _This will eventually be shut down._

### April

Repository index was moved to `cdn.getsol.us`.

## 2022 and Earlier

Not included in this list.
