---
title: Submitting a Pull Request for Review
summary: Submitting a Pull Request for Review
sidebar_position: 6
---

# Submitting a Pull Request for Review

Please refrain from submitting a pull request for the following instances:

- For a package that is yet to be accepted for inclusion by a member of the Solus Staff team. Search [open package requests](https://github.com/getsolus/packages/issues?q=label%3A%22Package+Request%22) to see if there is an open request for the package.
  We welcome you to politely reach out via the package request issue or our Support room on [Matrix](/docs/user/contributing/getting-involved#matrix-chat) if you deem the review of the request to be time-sensitive in nature.
- If your pull request is a Work In Progress / WIP. Pull requests that are completed or are marked as *request for comments* (RFC) are accepted. For RFC request please ensure your patch title contains `[RFC]` and is marked as 'draft'. WIP patches clutter the issue tracker and make patch review by Solus Staff more time consuming and introduces unnecessary work.

## Final Branch Review

At minimum, your pull request will include changes for the following files:

- `package.yml`
- `pspec_*.xml`

It will also include these files:

- `Makefile`
- `MAINTAINERS.md`

Double check the `package.yml` to make sure the builddeps are in the right order, and that it otherwise adheres to the [standards](package.yml.md) Solus has set.

If any additional files were required for the build, then you must also include the `files/` directory. See [Packaging Practices](packaging-practices.md) for more detail.

Many package builds may result in the automatic generation of an ABI report. These files start with `abi_*` and must also be included, as they allow simple tracking of changes to symbols and dependencies.

Take a final look over your commit message to make sure it has all the necessary information, and that the formatting is good. You can use this, which will show the most recent commit:

```bash
git log -1
```

## Creating the Pull Request

In the package folder, run `git push`.

:::note

If you've created your own branch, as recommended, the cli tool will show you a new command to create and push to a remote branch matching the local one. Run this.

:::

Once the commit is successfully pushed, you'll notice that a URL will be provided that will immediately allow you to create a pull request with your changes.

Run `git status` one last time to make sure your branch is clean. If it is, open the link, double check everything, and create the pull request!

## Amending a New Pull Request

There may be times you need to make minor changes after submitting the pull request. For instance, you see something that needs correcting. You may update your pull request with a new commit and push, as with any other change. We recommend keeping this to a minimum after submitting your PR so that reviewers aren't working with old information.

:::note

Previously, with Phabricator. we required amending your commit. This is no longer necessary and is not recommended.

:::

## Updating a Pull Request That Has Changes Requested

Your pull request will be reviewed, and changes may be requested. This is normal. It's to ensure the quality of the packages in our repository and to make sure each PR adheres to our standards.

Make any relevant changes to your local branch. Add or remove files as needed, and commit. In the new commit message, describe the changes you've made between the last revision and the new one.
Ex: "Updated the build order in package.yml as requested".

This helps reviewers see what you've changed, to streamline the process of getting your work merged.

Submit the updated commit with `git push`. The web interface will automatically update with the latest changes.

## After the Pull Request is Accepted

Once your pull request is accepted and merged, someone on the Solus Team will issue a build. Your new / updated package will be published to the unstable repos.

At this point you may [delete the local and remote branches](git-basics#deleting-your-branch-after-a-pull-request-is-merged) for this pull request.