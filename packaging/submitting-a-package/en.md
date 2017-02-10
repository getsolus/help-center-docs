## Submitting the Package 

Once you’ve achieved a successful build, the resulting `.eopkg` files will be moved to the current directory, along with the machine file, `pspec_*.xml` (currently `pspec_x86_64.xml`). We recommending checking the contents of your 
generated eopkg file(s) to ensure everything is located in the appropriate locations. You can do this by using `lseopkg file_name.eopkg`.

### Patches 

When sending patches to include your package in our repo, note that we do not accept binary files. We will need the `package.yml`, the `pspec_*.xml`, the `Makefile`, any ABI files generated, as well as the `files/` directory if applicable included within 
the patch. These patches are required to be [git format patches](https://git-scm.com/docs/git-format-patch) and submitted to the Patch Submissions Tag, in Maniphest, on our [Developer Portal](https://dev.solus-project.com).

To generate a patch, first ensure your package directory is a git repo by running `git init`. Next, use `git add filename` to add files, where filename is, for example, the package.yml. Next, do `git commit` and write an appropriate commit message, 
such as "Initial commit of packagename".

Once a git commit is made, use `git format-patch -n1` to create a .patch file.

### Maintainership 

Submission directly to a repository is only possible for maintainers. As a maintainer you may freely push to your package(s) and initiate builds for them, which will be pushed to the unstable repository. You can watch builds [here](https://build.solus-project.com/).

Pushing changes is not possible unless you have maintainer access. The same is also true of `make publish`.

To request maintainer rights for a repository, it is expected that some level of contribution/maintenance has already happened by way of testing/patching, and there is reasonable trust demonstrated to "hand the keys" over to a repository.

Currently, the request mechanism [contact Ikey on IRC](/articles/contributing/getting-involved/en). It is far easier to grant access to active community members than those unknown to the project.

Finally, note that the management reserve the right to revoke access at any time, in order to preserve project safety and integrity.