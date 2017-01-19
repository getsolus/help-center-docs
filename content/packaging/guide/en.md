## Packaging Guide

This guide is aimed at those wishing to either maintain existing packages, or contribute packaging, to the Solus repositories.

We assume you already have a working knowledge of Linux based systems, and are already comfortable with compiling software from source.

### Supported targets  

You may either build natively on your Solus installation using the `ypkg` tool directly, or or on supported distributions in a chroot environment via the `solbuild` tool. Please note that in order to use `solbuild` from other distributions, your
kernel must support `overlayfs`, which must be enabled and loaded.

### Overview  

Solus uses the `eopkg` package manager, which creates `.eopkg` binary packages. Internally an eopkg file contains a `metadata.xml` file, describing the package in full, along with file contents, plus an `install.tar.xz`

In order to directly build a `.eopkg`, the developer must complete a `package.yml` file, to describe the build steps involved and the metadata. However, as this is more of a machine format, we opted for a meta-build format to ensure packaging 
was both simple and rules based.

To this end, we use `ypkg`. This uses a YAML format file, which simply contains relevant package information, and the build steps. The tool will decide upon the relevant subpackages upon build completion, and then pass the packaging step 
to `eopkg` at the end.

Macros are made available to the developer to ensure the package uses the relevant distribution options, and that the resulting package is compliant with the specific distribution rules.

The key difference between `ypkg` and traditional package building systems, is that the developer has very little choice about the naming of packages and subpackages. Automatic rules are applied to ensure the correct level of splitting occurs, freeing 
the developer from hours of arduous packaging reducing the entire process to what is essentially a highly organised document with embedded shell scripts.