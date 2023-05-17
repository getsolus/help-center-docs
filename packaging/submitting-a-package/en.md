+++
title = "Submitting the Package"
lastmod = "2023-05-17T18:12:03-05:00"
+++
# Submitting the Package

This article will walk you through submitting a patch for a package for review and inclusion in the Solus repository.

When contributing patches to Solus, please note that we do not accept the upload of binary files (i.e. `.eopkg`).
All repository packages are built by a dedicated build server, from the source files provided in your patch upload.

At minimum, your patch will include changes for the following:

- `package.yml`
- `pspec_*.xml`

If any additional files were required for the build, then you must also include the `files/` directory.
If you are creating a new package, you will also need to include a `Makefile` containing the following text:

```
include ../Makefile.common
```

Lastly, many package builds may result in the generation of an ABI report. These files start with `abi_*` and must also
be included, as they allow simple tracking of changes to symbols and dependencies.

For all patch submissions you must be using the `arcanist` utility to communicate with the [Solus Developer Portal](https://dev.getsol.us/)

## Prior to Patch Submission

Prior to submitting a patch, please ensure you are checking the following:

- There is not an existing patch already provided by others.
- If you are submitting a patch for the inclusion of software in the repo, that the package your patch pertains to has a corresponding package request that is **accepted for inclusion** or is a dependency of a package that has been accepted into the repository.

Please refrain from submitting a patch for the following instances:

- For a package that is yet to be accepted for inclusion by a member of the Triage Team. We welcome you to politely reach out via the package request task or [Matrix](/articles/contributing/getting-involved/en) if you deem the review of the request to be time-sensitive in nature.
- If your patch is a Work In Progress / WIP. Completed patches or patches which have a request for comments are accepted, however for request for comments please ensure your patch title contains `[RFC]`. WIP patches just clutter Differential and make patch review by the team more time consuming and introduces unnecessary work.

## Setting up Arcanist

In three easy steps, you can set up arcanist for the first time:

``` bash
sudo eopkg it arcanist
arc set-config default https://dev.getsol.us
arc install-certificate
```

On the third step you will be given a unique link to log into the Developer Portal, to create a `Conduit API Token`. This
token will be used to allow the CLI `arc` utility to communicate with Phabricator.

## Creating the patch

### Manipulating files with Git

#### Adding files

For every file you change or add, you must let git know about them: `git add someFile`

#### Removing files

For files that must be removed, you must do so using git: `git rm someFile`

#### Renaming

Likewise, for renaming a file, you must do so via git: `git mv someFile someFileName2`

### Commit

Once you're happy with your change, and you have verified locally that it works by having first built and
installed it, it's time to commit your changes with `git commit`.

Make sure you provide a meaningful summary and a separate body to your commit message. For more information
on suitable commit messages, please check the [tooling central documentation](https://github.com/solus-project/tooling-central/blob/master/README.rst#using-git).

- If you want to link this patch to an issue on the Developer portal, simply mention it in your commit message: `The inclusion of <somepackage> fixes T1234`
- If you need a change to depend on another change, mention it in the commit message too: `Depends on D5`

### Submitting for Review

Now you have your git commit, it's time to send it to us for review. Using the CLI again, simply issue: `arc diff`

A new editor session will open, where you can provide additional details. Note that the default reviewer will be assigned after you submit, so it is not necessary to specify anyone here. If you are updating an existing package, please be sure to include a summarized changelog (or a link to the changelog provided upstream) and a test plan indicating that you've installed and run the package. Once you're finished, save and exit the editor (`CTRL+O` + `CTRL+X` for nano), and the patch will then be uploaded. You'll be presented with the Differential URL, and a review will happen as soon as possible.

## Updating a patch that needs changes

### Updating files

That's easy. **Don't make a new commit**, just make any relevant changes to your local tree, adding + removing as before, but this time run: `git commit --amend`.

This will amend your original changes, and you can submit the patch once more with `arc diff`.

A new editor session will open, where you can provide details about the changes you've made between the last revision and the newly amended one. This comment will help reviewers to see what you've changed, to streamline the process of getting your patch into Solus.

The web UI will automatically update with the latest patch, without having to create any new tasks. Once accepted, your patch will be merged, and a build will be issued.

**Notes:**

- If you have already created a new commit, run `git rebase -i HEAD~2` to squash the commits, change the commit message to the same commit message as the original, removing any suggested commit message from git itself.
- If you are concerned with `arc diff` creating a new Differential, you can run `arc diff --update DXXXXX`, changing `XXXXX` to the number assign to your initial Differential.
  - If you have created a new Differential already, you can abandon it and update your previous differential by choosing the Add Action section below the web-based patch GUI, then choose "Abandon Revision", then click Submit.

### Updating Task Information

If you forgot information such as a test plan, you can run resolve this by:

1. Running `arc diff --edit`. This will open up an editor session, where you can edit the information.
2. Next, you will see an editor session for providing a message indicating the change, for example "Added a test plan."

After this editor session, the updated patch will be automatically uploaded, the web UI will automatically update, and no new tasks will be created.

## Maintainership

Submission directly to a repository is only possible for maintainers. As a maintainer you may freely push to your package(s) and initiate builds for them, which will be pushed to the unstable repository. You can watch builds [here](https://build.getsol.us/)

Pushing changes is not possible unless you have maintainer access. The same is also true of `make publish`.

To request maintainer rights for a repository, it is expected that some level of contribution/maintenance has already happened by way of testing/patching, and there is reasonable trust demonstrated to "hand the keys" 
over to a repository.

Currently, the request mechanism is [contact Solus Staff on Matrix](/articles/contributing/getting-involved/en). It is far easier to grant access to active community members than those unknown to the project.

Finally, note that the management reserve the right to revoke access at any time, in order to preserve project safety and integrity.
