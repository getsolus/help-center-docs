---
title: Packaging Practices
summary: Learning the best packaging practices
---

# Packaging Practices

The primary goal of `ypkg` is ease of maintenance. In order to do so we ensure packages in the binary repository adhere to a strict set of conventions and practices.

The next few sections will detail these.

## Package naming

The `ypkg` tool does not allow for custom subpackages or subpackage naming, and will enforce its own policy. This can be eased somewhat through the use of `patterns`, however the available subpackage names are limited.

We request you use (where possible) the upstream source name for your package. Subpackage names (when generated) are constructed by using the `name` value first, then applying the subpackage name as such:

`pkgname-$subpackage`

Subpackages are fully automatic with `ypkg`, and are created based on file patterns. All subpackages automatically depend on the main package, to ensure correct operation. In the following explanations, `$lib` is used to refer to the host library directory, i.e. `lib` or `lib64` (or `lib32` on `emul32` builds).

For the libraries / packages of the following programming languages, you should typically use the following template for it.

| Language | Prefix     | Example                                                                     |
| -------- | ---------- | --------------------------------------------------------------------------- |
| Haskell  | `haskell-` | `text-binary` would be `haskell-text-binary`                                |
| Perl     | `perl-`    | `algorithm-diff` would be `perl-algorithm-diff`                             |
| Python   | `python-`  | `wikipedia` would be `python-wikipedia` **even if only Python3 is enabled** |
| Ruby     | `ruby-`    | `gssapi` would be `ruby-gssapi`                                             |

### The devel subpackage

This is invariably created for packages that provide libraries and development headers. The following rules will result in files being placed in a `devel` subpackage:

```
/usr/include
/usr/$lib/lib*.so
/usr/$lib/lib*.a
/usr/share/man/man3
/usr/share/pkgconfig
/usr/$lib/pkgconfig
/usr/share/cmake
/usr/share/vala
```

For the full list of rules see [here](https://github.com/getsolus/ypkg/blob/v34/ypkg2/packages.py#L166-L254).

Note that for some packages, `/usr/$lib/lib*.so` files are not symlinks. In this instance, the main package will be broken with no library files present. This can quickly be determined by looking at the resulting `pspec_*.xml` file generated after running the build.
If this happens, simply override with `patterns` or set `libsplit` to “false”.

**A note on static archives**: Unless it is absolutely unavoidable, you should disable static libraries within your build. This is usually fixed by adding `--disable-static` to your configure routine. If `*.a` files are shown in your packaging request, it will be questioned, as they can pose a greater security risk if packages link against these static archives.

### The docs subpackage

Currently there is only one pattern which is forced into a `docs` subpackage:

```
/usr/share/gtk-doc/html
```

If required, you can use `patterns` to move other files into the `docs` subpackage, reducing the size of the main package.

### The 32bit subpackage

This subpackage is only generated during an `emul32` build. The following paths will automatically be placed into a `32bit` subpackage

```
/usr/lib32/lib*.so
/usr/lib32/lib*.so.*
/usr/lib32/lib*.a
```

Note the same static archive rules apply to `32bit` packages. These packages aren’t as heavily split as we try to discourage their use, though they must be provided in some instances.

### The utils subpackage

This is not an automatic subpackage, you must use `patterns` to utilize it. It is provided for instances that it may not be suitable to have binaries present, i.e. for a library package.

## Maintenance

When submitting a changed `package.yml`, it must be accompanied by its corresponding `pspec_*.xml` file, which was generated at build time. This machine file allows the repository maintainers to evaluate the package condition.

When providing a new version of a package, or a fix, always ensure you increment the `release` number by 1. This ensures that users of your package are correctly updated to the latest version.

Never submit a package without having first tested it, and ensuring it builds within `solbuild`, a clean chroot environment.

## Licenses

All new packages or updates to packages should abide by the [SPDX 3.x](https://spdx.org/licenses/) definitions, with the following policy:

- `-only` licenses, such as `GPL-2.0-only`, should **only be declared** as such when the upstream explicitly states "only", otherwise it should always be `-or-later`.

License files that are present in an upstream project must also be installed with the package. This can be easily done with the `%install_license` macro. The macro will install any files passed to it to the system licenses directory, `$installdir/usr/share/licenses/$package/`. The files passed to the macro are expected to be relative to the project's source root.

```yaml
install    : |
    %ninja_install
    %install_license LICENSE
    %install_license LICENSES/*
```

## Build dependencies

:::note
Build dependencies in a `package.yml` should be ordered according to the following rules:

1. `pkgconfig32` dependencies before `pkgconfig` dependencies
2. `pkgconfig` dependencies before explicitly named dependencies
3. Each of these groups in so-called ASCIIbetical order (that is, alphabetical order with all uppercase letters before lowercase letters, and digits/punctuation before letters, [see here](https://en.wikipedia.org/wiki/ASCII#Character_order))

Example:

<!-- prettier-ignore -->
```yaml
builddeps  :
    - pkgconfig32(dri)
    - pkgconfig(MYGUI)
    - pkgconfig(Qt5Core)
    - pkgconfig(ayatana-appindicator-0.1)
    - pkgconfig(gtk+-3.0)
    - The-Powder-Toy
    - abcMIDI
    - abcm2ps
    - git
    - python-poetry
    - swig
```

:::

### Background

Most software packages that you build will, in one way or another, depend on another software package to provide specific functionality. This is usually achieved by using a library.

Any package that is submitted to our repositories is always built in a clean chroot environment. Therefore, any dependencies required to build that package in a reproducible and sane fashion must be listed.

This is achieved by populating the `builddeps` key with a list of build dependencies. We support two kinds of build dependencies: explicitly named, or `pkgconfig` dependencies.

We prefer the use of `pkgconfig` dependencies. Most modern software will use the `pkg-config` tool (package configuration) to determine which files are required to build the current software. This may include compiler flags, library to link against and where the package headers are located.

An obvious advantage to supporting `pkgconfig` dependencies is that there is a 1:1 mapping between the name requested by the build and the name used within the `package.yml`. Instead of trying to hunt down the package providing that dependency, you simply list the same name. Any package in the repository will export information about the `.pc` files (for `pkg-config`) it contains, enabling you to use those as a build dependency.

A secondary advantage is that this allows for easily switching or replacing a providing package. When no `pkgconfig` name is available (some packages do not provide these, or it doesn’t make sense for them to), you may use the explicit package name. Always ensure you select the correct package, i.e. the `-devel` subpackage. This provides the necessary symlinks and headers to build packages.

### Finding what package provides a pkgconfig dependency (if any)

You can use `go-task` to find packages that satisfy `pkgconfig` dependencies. It can search for multiple dependencies at once.

As an example, if you know a package has the build dependencies `Qt5Core` and `Qt6Core`, you would run:

```bash
go-task pkgconfig -- Qt5Core Qt6Core
```

This will output:

```bash
pkgconfig(Qt5Core) found in: qt5-base-devel
pkgconfig(Qt6Core) found in: qt6-base-devel
```

You can also determine if there are `pkgconfigs` available from a `-devel` package by doing `eopkg info (name)` and looking for the `Provides` key.

Example:

```bash
eopkg info libgtk-3-devel
```

In output:

```bash
Provides: pkgconfig(gtk+-3.0) pkgconfig(gdk-3.0) pkgconfig(gdk-wayland-3.0) pkgconfig(gail-3.0) pkgconfig(gdk-x11-3.0) pkgconfig(gtk+-unix-print-3.0)
pkgconfig(gtk+-wayland-3.0) pkgconfig(gtk+-x11-3.0)
```

### Using pkgconfig dependencies

In the `builddeps` list, use the `pkgconfig(name)` syntax. For example, to add `gtk+-3.0` to the build dependencies, you would do the following:

<!-- prettier-ignore -->
```yaml
builddeps:
    - pkgconfig(gtk+-3.0)
```

At build time the appropriate provider package is selected, in this instance `libgtk-3-devel`

### Using explicitly named dependencies

When there is not a `pkgconfig` dependency available, use an explicitly named dependency.
Simply list the package name.

:::note
When a `pkgconfig` dependency is available you will be asked to use that instead.
:::

Example:

<!-- prettier-ignore -->
```yaml
builddeps:
    - stk-devel
```

## Runtime dependencies

Runtime dependencies are extra packages that a package needs in order to function correctly. A common example of this is other libraries. Solus `eopkg` packages will automatically add any binary dependencies at runtime, so that you do not have to.

All `devel` subpackages automatically depend on their parent package. On top of this, if they provide a `.pc` pkg-config file, we export this information, and automatically determine the packages this particular package would need to be able to build against correctly. As such, the majority of dependencies for builds are automatically resolved.

In certain instances, binary dependencies aren’t enough. An example of this might be an extra Python package, or a font, something that is not accounted for by binary checks.

To account for this, you may add extra explicit runtime dependencies to your package. These are taken from the optional `rundeps` ypkg key.

This key uses the `dict(s)` type, and the default key is the current package `name`. You may express a different subpackage to apply dependencies to by using that name as a key, i.e. `devel`, or `docs`.

This would add the “python-gobject” runtime dependency to the main package:

<!-- prettier-ignore -->
```yaml
rundeps:
    - python-gobject
```

This would add the same dependency, as well as adding it to the `devel` subpackage:

<!-- prettier-ignore -->
```yaml
rundeps:
    - python-gobject
    - devel: python-gobject
```

Remember this uses the `dict(s)` type, which is very flexible. You can equally express this as follows (adding more deps as an example):

<!-- prettier-ignore -->
```yaml
rundeps:
    - python-gobject
    - devel:
        - somepackage
        - someotherpackage
```

## Check dependencies

Check dependencies are a special kind of build dependency reserved for automatic package testing by `solbuild`. Check dependencies should only be used during the `check` build phase.
When a package is part of an automatic build sequence, these dependencies will **not** be considered when determining build order.

### Example

The package `cbindgen` includes `cython` in `checkdeps` to run tests in the `check` phase.

See the [cbindgen package.yml file](https://github.com/getsolus/packages/blob/main/packages/c/cbindgen/package.yml).

## Patching / extra files

Files that may be required during the build can be accessed via the `$pkgfiles` variable. Note that you must store your files in the `./files` directory relative to your `package.yml`.

Both patches and extra files (such as systemd units) are stored in this directory. Note that if your patch is to address a **CVE**, you must use the following naming scheme: `./files/security/cve-xxxx-xxxx.patch`, where `xxxx-xxxx` is replaced with the full CVE ID. Complying with this simple rule ensures that we can know at any time the security status of packages when using tools such as `cve-check-tool`.

Solus tooling allows the use of `./files/security/cve-xxxx-xxxx.nopatch` (which isn't applied in the build) to indicate that a CVE has been validated as not applicable to the Solus package. This can be because another patch resolves this CVE, or there is a false positive via `cve-check-tool`. The contents of the file can describe why it doesn't apply without requiring a patch (for example, "Resolved by cve-xxxx-xxxx.patch").

### Applying a patch

It is common practice to apply the patch file(s) within the `setup` section of your build staging. We can achieve this using the `%patch` macro, and the `$pkgfiles` variable. In this example, the required file is located at `./files/0002-Sample-commit-2.patch`

```bash
%patch -p1 -i $pkgfiles/0002-Sample-commit-2.patch
```

Note you use the macro as you would normally use the `patch` command, however use of the macro ensures it performs a clean batch-mode patch.

If you are using compressed patches, i.e. for the `bash` or `readline` packages, you can pipe the call through `zcat` or similar:

```bash
zcat $pkgfiles/bash43-032.gz | %patch -p0
```

#### Handling multiple patches

In the event you need to apply multiple patches, such as a multitude of CVE patches, it may be sensible to use our `%apply_patches` macro, which will apply all the patches listed in a `series` file in your package's `./files` folder. Example below:

```bash
security/cve-xxxx-xxxx.patch
fix-silliness.patch
```

Both of the files above will be applied using stripping number `-p1`. If you need to use a different stripping number, like `-p4`, you can write:

```bash
security/cve-xxxx-xxxx.patch -p4
fix-silliness.patch
```

## Installing extra files

We recommend using patches where possible first, as they ensure correct maintenance and will be updated across package versions. If you must install extra files into the directory, please use the `install` command, ensuring you set the correct permissions. Again, files are accessible from the `./files` directory, relative to `package.yml`.

This is an example of installing a custom profile file, seen in the `bash` package:

```bash
install -m 0644 $pkgfiles/profile $installdir/etc/profile
```

## Patterns

In most instances, `ypkg` will assign the correct location for files, whether it be in the main `name` package, or a subpackage. However, there may be instances where the default does not match the intended behaviour.

In these instances, it is possible to override the default assignment by way of patterns. These are simply a list of paths or globs to ensure a particular file, or set of files, end up in the desired package.

The `patterns` key expects a `dict(s)` argument. The default key for each pattern is assumed to be the `name` of the package, so omitting the name would place files into the main package. The value should be a path or pattern you wish to match, ensuring files go to a specific location.

### Naming

There are two ways to name a pattern. Say you have a package named `foo`, and you want to create a subpackage `foo-bar`. You can do this by creating a pattern with the key `bar`. The name of the key will be appended to the name of the package.

<!-- prettier-ignore -->
```yaml
name       : foo
patterns   :
    - bar :
        - [ ... ]
```

If you don't want the name of the subpackage to start with the name of the main package, you can do that, too. Keys starting with a `^` character will not prepend the base package name to the name of the subpackage. If you want to create a package named `bar` from the `foo` package, it would look like this:

<!-- prettier-ignore -->
```yaml
name       : foo
patterns   :
    - ^bar :
        - [ ... ]
```

### Customizing subpackages

Often with subpackages, you will want a different component, summary, description, license, or runtime dependencies than the base package. This can be accomplished by turning the keys keys you want to change into lists of `dict(s)`. The key for each entry follows the same rules as the `patterns` key outlined above.

If you have package `foo` and subpackage `foo-bar`, changing the properties would look like this:

<!-- prettier-ignore -->
```yaml
name       : foo
license    :
    - bar : MIT
    - Apache-2.0
component  :
    - bar : desktop
    - desktop.library
summary    :
    - bar : This summary applies to the bar subpackage
    - This summary applies to the foo package
rundeps    :
    - bar :
        - foo
patterns   :
    - bar :
        - [ ... ]
```

:::note

Usually, packages will automatically depend on created subpackages by default. Consider making the subpackages depend on the base package instead by adding it as a runtime dependency.

:::

### Examples

In this example from `libjpeg-turbo`, we move all documentation into the `docs` subpackage:

<!-- prettier-ignore -->
```yaml
patterns   :
    - docs : [/usr/share/man]
```

This example, taken from the `wayland` package, ensures the binaries from `/usr/bin` and the directory `/usr/share/wayland` are located in the `devel` subpackage:

<!-- prettier-ignore -->
```yaml
patterns   :
    - devel :
        - /usr/bin
        - /usr/share/wayland
```

To create a header-only package, like `spirv-headers`, create a pattern that matches all files. This can also be used in cases where you don't want any automatically-generated subpackages.

<!-- prettier-ignore -->
```yaml
patterns   :
    - /*
```

## Replace / rename

In some situations, it may be required to replace one package with another, or to rename an existing package. In these instances you should coordinate with a repository maintainer to ensure the replaced package is marked **Obsolete** within the index. This will ensure correct upgrade paths for users.

Note that to retire a package, you must also coordinate with a repository maintainer. An **Obsolete** package is removed by the package manager when the user upgrades. As such, correct upgrade paths need to be established.

The `replaces` ypkg key uses the `dict(s)` type, and the default key is assumed to be the current package `name`.

In this example, we rename the `libgeoclue*` packages to use the correct names, and ensure a working upgrade path.

<!-- prettier-ignore -->
```yaml
replaces:
    - devel: libgeoclue-devel
    - libgeoclue
```

The `name` of this package is `geoclue`, and the new package names are now:

- `geoclue`
- `geoclue-devel`

Given the `replaces` values above, `geoclue` now replaces `libgeoclue`, and `geoclue-devel` replaces `libgeoclue-devel`. This is entirely transparent to the user, with a seamless update replacing the old packages with the new renamed packages.

The repository maintainer marked the old names as **Obsolete** in the index.
