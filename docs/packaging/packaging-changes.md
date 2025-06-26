---
title: Packaging Changes
summary: Changes to packaging environment and instructions
sidebar_position: 7
---

# Packaging Changes

This page is meant to serve as a changelog of sorts for the Solus packaging environment and the packaging instructions. Refer to specific help pages for more details.

- This list is not exhaustive
- This list is in _reverse chronological order_ (newest first)

## 2025

### June

#### gui and private headers are splitted out from `qt6-base`

- `Qt::CorePrivate` is now provided by `qt6-base-private-devel`
- `Qt::Gui` is now provided by `qt6-base-gui`

### April

#### `pip3` and setuptools debundled from `python3`

- pip3 and the python module setuptools are no longer provided by `python3`
- `python-setuptools` now provides the py3 version of setuptools instead of the py2 version
- `pip` now provides the py3 version of pip instead of the py2 version
- A temporary package `python2-setuptools` provides the py2 version of setuptools pending full python2 deprecation
- A temporary package `pip2` provides the py2 version of pip pending full python2 deprecation

#### PEP517 is now the preferred method to build python modules

- The `%python3_setup` macro now attempts to build python modules with PEP517 if a pyproject.toml file is found, it will fallback to setuptools otherwise
- The `%python3_install` macro now attempts to install python modules with PEP517 if a pyproject.toml file is found, it will fallback to setuptools otherwise
- If a python module contains a pyproject.toml file and now fails to build it'll minimally need `python-build` and `python-installer`. Then, it'll need the python build system,
  in ~90% of cases it'll be `python-setuptools`, and, `python-wheel` may also be required. Note, however, there are several valid python build systems such as `python-flit-core`, `python-poetry`,
  `meson-python` as well as others that may be used in place of `python-setuptools`. However, in the majority of cases only `python-build`, `python-installer` and `python-setuptools` are required
- If a python module doesn't contain a pyproject.toml file and instead contains a setup.py file it'll need `python-setuptools` as a build dependency

### January

#### `monitoring.yml` changed to `monitoring.yaml`

- The file extension used by `monitoring.yml` was changed to `monitoring.yaml`
- This allows us to use some Serpent OS tooling and share the `monitoring.yaml` files

## 2024

### December

#### New go-task functionality to check for package updates

- To use it, run `go-task updatecheck`
- Makes use of the `ent` tool. See https://github.com/serpent-os/ent
- Only checks packages with `monitoring.yaml` files
- `ent` has been added to the packaging requirements in [Prepare for Packaging](docs/packaging/prepare-for-packaging.md)

#### Mandatory rss field in monitoring.yaml

- The `rss` field is now mandatory in monitoring.yaml files. See the updated [monitoring.yaml page](docs/packaging/monitoring.yaml.md)

### November

#### AppStream metainfo is required for all graphical applications in the Solus repository

- All packages providing a graphical application must include AppStream metainfo. For details see [AppStream metainfo page](/docs/packaging/appstream-metainfo.md)

#### Add Sync Notes checkbox to PR template

- The PR template now contains a checkbox used to recommend its inclusion into the next Sync Notes post

#### Update solbuild images for eopkg/solbuild changes

- The solbuild images have been refreshed due to extensive changes to both `solbuild` itself and `eopkg` (see [here](https://github.com/getsolus/packages/pull/4063) and [here](https://github.com/getsolus/packages/pull/3850) for details)
- Packagers should re-initialize their solbuild images using `go-task solbuild-reset`

### October

#### Add check for monitoring.yaml

- Commits are now checked for `monitoring.yaml` files and their inclusion is strongly recommended. See [monitoring.yaml page](docs/packaging/monitoring.yaml.md)

#### Add check for included static libraries

- Commits are now checked for included static libraries
- Packages with necessary static libraries have to be added to the allow-list in `common/CI/config.yaml` in the `packages` repository

#### Pre-filled commit titles for package inclusions and "No functional change"

- Commit titles for package inclusion are now created with pre-filled version information (for example, "nano: Add at v1.2.3")
- For "No functional change" commits with no changes to the `pspec_x86_64.xml` "[NFC]" is automatically added to the commit title

### August

#### Pre-filled commit titles for package updates

- Commit titles for package updates are now created with pre-filled version information (for example, "nano: Update to 1.2.3")

### June

#### New go-task functionality to list packages without AppStream metadata

- To use it, run `go-task check-appstream-progress`
- Packages that should be ignored can be added to the list in `common/Scripts/appstream_ignored_packages.txt` in the `packages` repository

### May

#### New go-task functionality to clean local repository

- Removes all `.eopkg` files in the `solbuild` local repository and refreshes the index
- To use it, run `go-task clean-local`

#### Remove 'Test Plan' and 'Checklist' from commit messages

- These are no longer needed in commit messages.
- They must still be included in the pull request description.

#### Add Rust macros to package.yml

- We now have macros for building Rust packages. Example: `%cargo_build`. Rust packages should be switched to use the new macros as they are updated.
- See the "Rust (cargo) actionable macros" section on the [package.yml page](/docs/packaging/package.yml#rust-cargo-actionable-macros).

#### Add guidance for SourceForge sources in package.yml

- We now require SourceForge sources used in `package.yml` files to follow a specific format.
- See the [package.yml page](/docs/packaging/package.yml#source-key).

### February

#### Begin adding `monitoring.yaml` to packages

- A new per-package file was introduced: `monitoring.yaml`. Used to monitor packages for releases and security advisories; see [monitoring.yaml](docs/packaging/monitoring.yaml.md).
- This is not enforced by automatic checks yet, but we may ask that it be added.

## 2023

### October

#### Adding `checkdeps` in `package.yml`

- A new type of packaging dependency was added: `checkdeps`. They behave the same as `builddeps`, except they are not considered when determining build order for automatic builds. See the [package.yml page](/docs/packaging/package.yml).

#### Git hooks

- Run `go-task init` to initialize Git hooks for the packages repository. See [Prepare for packaging](prepare-for-packaging.md#initialize-git-hooks-for-linting).
- Use `git commit` for committing packaging changes and fill in the template shown.
  It is no longer required to manually copy-paste the template or use `git commit --cleanup=scissors`.

#### Requiring `homepage` in `package.yml`

- The `homepage` key in `package.yml` has become mandatory. Use the address to the upstream source repository (eg: the GitHub page) if a package does not have a homepage.
- This is enforced by checks on all pull requests.

#### Recommending amending commits in Pull Requests

- Amending commits and force pushing the changes works better with our build tooling.
  - It was thought that abandoning this practice would be okay, but it turns out not to be the case.

### September

#### Switch to asterisk bolding for PR template

- The initial PR template for the `packages` repository used markdown header styling (`## Heading text`), but `solus-sc` does not render that styling, so the template was changed to asterisk bolding (`**Heading text**`)
- https://github.com/getsolus/packages/pull/366

#### Switching From `make` to `go-task`

- All packaging actions are now handled by `go-task` rather than `make`.
  - Building a package can be done using `go-task` rather than `make`.
  - Commands are the same: `make local`, for example, is replaced by `go-task local`.
  - You can see all available commands by either browsing to `Taskfile.yml` in the [`packages` repository](https://github.com/getsolus/packages/blob/main/Taskfile.yml) OR running `go-task -l` somewhere in your updated clone of the packages git monorepo.
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
