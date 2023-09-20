---
title: Packaging Overview
summary: Steps for setting up a packaging environment and submitting packages
sidebar_position: 0
---

# Packaging Overview

This is the overall workflow for creating or updating a package.

## Development Environment Preparation

1. [Prepare for Packaging](prepare-for-packaging.md)
2. Review the [requirements for the package.yml file](docs/packaging/package.yml.md).
3. Also review our [Packaging Practices](docs/packaging/packaging-practices.md).

## Prior to Building a Package

Please check the following:

- Search [open package requests](https://github.com/getsolus/packages/issues?q=label%3A%22Package+Request%22) to see if there is one for the package. If there isn't an existing issue, go ahead and submit your pull request. If there is already a pull request, please check its status to avoid duplicating work.
- If you are submitting a pull request for the inclusion of software in the repo, the package has a corresponding package request that is **accepted for inclusion** or is a dependency of a package that has been accepted into the repository.

## Building Packages

1. [Update your development environment](update-dev-environment.md)
2. Prepare the package directory and build the package
  * For a new package that does not yet exist in the repos see [Creating a New Package](creating-a-new-package.md)
  * For updating a package that already is in the repos see [Updating an Existing Package](updating-an-existing-package.md)
3. [Test the Package](testing-a-package.md)
4. [Submit a Pull Request for Review](submitting-a-pull-request.md)