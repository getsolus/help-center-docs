---
title: Migrating Existing Repos to GitHub
summary: Migrate Your Existing Repos From Phab to GitHub
---

# How To Migrate Pre-existing Repos and `common` to GitHub

:::info
This is intended for people who have cloned package repos from Phabricator in the past. The information below will help you migrate your `common` repo and existing repo clones to work with our GitHub.
:::

This document assumes your packages are stored under the folder `~/solus-builds`, adjust the commands to match the directory name on your system.

People who have set up repos before the migration to GitHub will have git remote URLs pointing to dev.getsol.us. To see if this is the case, change to the common directory, and run the following to double check:

``` bash
cd ~/solus-builds/common
❯ git remote -v
origin  https://dev.getsol.us/source/common.git (fetch)
origin  https://dev.getsol.us/source/common.git (push)

```

You will need to make sure you are on the master branch and update the git remote URLs:

```bash
cd ~/solus-builds/common
git switch master
git remote set-url origin https://github.com/getsolus/common
git remote set-url --push origin git@github.com:getsolus/common.git
git pull
git status
```

The output should indicate you are up to date with origin/master and that your working tree is clean. If not, please reach out to the Solus Packaging team on [Matrix](/docs/user/contributing/getting-involved.md#matrix-chat).

Next, run this script to update all repos from Phab to GitHub:

```bash
cd ..
./common/switch_repo_domains
```