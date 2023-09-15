---
title: Git Basics
summary: Basic git commands for packaging
---

# Git Basics

## Working with branches

The recommended way to switch branches is `git switch`.
To create a new branch use `git switch -c`.

## Keeping your branch up to date with the master branch

If there any new changes to the repository whilst you are still working on your branch you need to [sync your fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork).
Run `git fetch`, and `git rebase origin/master` to pull the changes in.
You will need to fix any conflicts manually.
You can check your branch against master with `git diff origin/master..my-branch`.

## Adding files

For every file you change or add, you must let git know about it: `git add someFile`

## Removing files

For files that need to be removed, you must do so using git: `git rm someFile`

## Renaming files

Likewise, for renaming a file, you must do so via git: `git mv someFile someFileName2`

## Check the changes in your files

It's a good idea to review the changes you have made to each file. This is to make sure you're committing what you intend and to make sure it looks good. Do this before adding changed files.

To diff them all at once, useful for small changes, use `git diff`.
To diff each file one at a time run `git diff filename` on each one.

## Commit your changes

**Check your branch**

Get the status of the branch with `git status`. Make sure all the files you changed are staged, and that there are no untracked files. The git status should say your branch is clean.

Now that you've tested and reviewed your change, when you're happy with it, it's time to commit your changes with `git commit`.

## Deleting your branch after a pull request is merged

Once your pull request has been accepted you can delete your working branches.
First, change to the package directory, switch to the master branch, then delete your local and the remote branches.

```bash
cd /home/solus-builds/package
git switch master
git branch -D my-branch
git push -d origin my-branch
```