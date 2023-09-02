---
title: Submitting a Package for Review
summary: Submitting a Package for Review
sidebar_position: 5
---

# Testing the Package and Submitting a Pull Request for Review

Please refrain from submitting a pull request for the following instances:

- For a package that is yet to be accepted for inclusion by a member of the Solus Staff team. Search [open package requests](https://github.com/getsolus/packages/issues?q=label%3A%22Package+Request%22) to see if there is an open request for the package.
  We welcome you to politely reach out via the package request issue or our Support room on [Matrix](/docs/user/contributing/getting-involved#matrix-chat) if you deem the review of the request to be time-sensitive in nature.
- If your pull request is a Work In Progress / WIP. Pull requests that are completed or are marked as *request for comments* (RFC) are accepted. For RFC request please ensure your patch title contains `[RFC]` and is marked as 'draft'. WIP patches clutter the issue tracker and make patch review by Solus Staff more time consuming and introduces unnecessary work.

## Test Your Package

After you ran `make` (or the appropriate command for the package) you now have `.eopkg` files in the package directory. Each pull request requires you to explain how you tested the package to make sure things work as expected. These files allow us to perform that testing.

### Install the `.eopkg` Files
To install your new package, run the following command in the directory where you built the package. Include **all** `.eopkg` files that were built.

```bash
sudo eopkg it *.eopkg
```

Testing need not be very complicated. The goal is to ensure the package will reliably work for our users. Testing effort will depend on how complex the software is. At minimum, you want to ensure the application launches, and performs basic functionality as expected.

For example, if you were updating a text editor, you would want to make sure you can open, create and save files. If you know of issues the package has had in the past, it's a good idea to test that as well to make sure there are no regressions. There are plenty of historical pull requests to review if you want more detail.

### Returning to the Repository Version (optional but recommended)

It is a good idea to remove the package you built, and return to the repository version, once you are done testing. To do this, run the following command on the main application. Example:

```bash
sudo eopkg it --reinstall nano
```

### Remove the `.eopkg` Files

Before you can submit your pull request, you need to remove the `.eopkg` files. They are not accepted in package pull requests. All repository packages are built by a dedicated build server from the source files provided in your pull request.

To remove them, run:

```bash
make clean
```

## Package Review

### Verify Necessary Files Are Included

At minimum, your pull request will include changes for the following files:

- `package.yml`
- `pspec_*.xml`

Double check the `package.yml` to make sure the builddeps are in the right order, and that it otherwise adheres to the [standards](package.yml.md) Solus has set.

If any additional files were required for the build, then you must also include the `files/` directory. See [Packaging Practices](packaging-practices.md) for more detail.
If you are creating a new package, you will also need to include a `Makefile` containing the following text:

```
include ../Makefile.common
```

Lastly, many package builds may result in the generation of an ABI report. These files start with `abi_*` and must also be included, as they allow simple tracking of changes to symbols and dependencies.

## Creating the Pull Request

### Manipulating Files With Git

#### Working with branches

- If necessary, you can checkout the master branch by running `git switch master`, and switch back to your branch by running `git switch my-branch`
- If there any new changes to the repository whilst you are still working on your branch you can run `git pull origin master --rebase` to pull the changes then manually fixup any conflicts. You can check your branch against master with `git diff master..my-branch`.
- Once your pull request has been accepted you can delete your local branch by running `git branch -D my-branch` and `git push -d origin my-branch` to delete the remote branch.

#### Check your changes

It's a good idea to review the changes you have made to each file. This is to make sure you're committing what you intend and to make sure it looks good. Do this before adding changed files.

To diff them all at once, useful for small changes, use `git diff`.
To diff each file one at a time run `git diff filename` on each one.

#### Adding files

For every file you change or add, you must let git know about it: `git add someFile`

#### Removing files

For files that must be removed, you must do so using git: `git rm someFile`

#### Renaming

Likewise, for renaming a file, you must do so via git: `git mv someFile someFileName2`

### Commit your Changes

**Check your branch**

Get the status of the branch with `git status`. Make sure all the files you changed are staged, and that there are no untracked files. The git status should say your branch is clean.

Now that you've tested and reviewed your change, when you're happy with it, it's time to commit your changes with `git commit`.

Make sure you provide a meaningful summary (with the package name) and a separate body to your commit message. Package update details should come from the upstream project release notes, and contain no links. There may also be a section for Solus specific work.

There should be a summary line, a blank line, and then the rest of the commit message. Bullet point lists should start with a dash.

Here is an example in our standard format:

```
Update foo to 1.2.3

**Changelog**

Bugfixes:

- Fixed a crash
- Something else

Enhancements:

- Implemented a feature
- Error when encountering a thing

**Full release notes:**
- [1.2.3](https://github.com/foo/foo/releases/tag/v1.2.3)

## Test Plan

- Launched the application
- Exercised the UI
- Exercised some feature
```

For more information on suitable commit messages, please check the [tooling central documentation](https://github.com/solus-project/tooling-central/blob/master/README.rst#using-git).

- If you want to link this pull request to an existing issue, simply mention it in your commit message: `The inclusion of <somepackage> fixes #1234`
- If you need a change to depend on another change, mention it in the commit message too: `Depends on #123`

### Submitting the Pull Request for Review

Now that you have your changed committed, it's time to send it to us for review by submitting a pull request to the GitHub repository.

You will first need to fork the repository. You can do this either from the GitHub web interface, or by using the [`gh` cli tool](https://cli.github.com/manual/gh_repo_fork) from the `github-cli` package.

Next, change your push url to the one that matches your fork. For example:

If you forked `github.com/solus-packages/nano`, it would be forked to `github.com/mygithubaccount/nano`. You would set the push url with:

`git remote set-url --push origin https://github.com/mygithubaccount/nano`

Finally, run `git push`.

:::note
If you've created your own branch, the cli tool will prompt you with a new command to create and push to a remote branch matching the local one.
:::

Once the commit is successfully pushed, you'll notice that a URL will be provided that will immediately allow you to create a pull request with your changes.
Open the link, double check everything, then create the pull request!

## Updating a Pull Request That Needs Changes

### Updating files

That's easy. **Don't make a new commit**, just make any relevant changes to your local tree, adding + removing as before, but this time run: `git commit --amend`.

This will amend your original changes, and you can submit the updated commit with `git push --force`.

A new editor session will open, where you can provide details about the changes you've made between the last revision and the newly amended one. This comment will help reviewers to see what you've changed, to streamline the process of getting your patch into Solus.

The web interface will automatically update with the latest patch. Once accepted, your patch will be merged, and a build will be issued.

:::note
- If you have already created a new commit, run `git rebase -i HEAD~2` to squash the commits, change the commit message to the same commit message as the original, removing any suggested commit message from git itself.
:::

### Updating Task Information

If you forgot information such as a test plan, you can run resolve this by:

1. Edit your commit message with `git commit --amend` as well as editing the pull request on the GitHub web interface. <-- TODO: GitHub PR Templates
2. Next, you will see an editor session for providing a message indicating the change, for example "Added a test plan."

After this editor session, the updated patch will be automatically uploaded, the web UI will automatically update, and no new tasks will be created.

## Maintainership

Submission directly to a repository is only possible for maintainers. As a maintainer you may freely push to your package(s) and initiate builds for them, which will be pushed to the unstable repository. You can watch builds [here](https://build.getsol.us/)

Pushing changes is not possible unless you have maintainer access. The same is also true of `make publish`.

To request maintainer rights for a repository, it is expected that some level of contribution/maintenance has already happened by way of testing/patching, and there is reasonable trust demonstrated to "hand the keys" over to a repository.

Currently, the request mechanism is [to contact Solus Staff on matrix in the Packaging room](/docs/user/contributing/getting-involved#matrix-chat).

Finally, note that the management reserve the right to revoke access at any time, in order to preserve project safety and integrity.
