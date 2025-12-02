---
title: Package YAML
summary: Learning the package.yml packaging format
---

# `package.yml`

Each package is generated from a single build file named `package.yml`. This file is sometimes also called a "recipe" since it provides steps for building a package. It provides all of the required metadata for the package manager, plus the packaging steps involved to produce a package. This file follows the YAML specification.

## Format

All `package.yml` files **must** be valid YAML.

The file is organised into a key→value hierarchy. The `ypkg` tool parses a `package.yml` file to build the corresponding package in a declarative manner. As such, most of the keys are simple strings, lists or nested key→value pairs. A special case consists in the packaging steps, which are scripts.

An example file follows:

<!-- prettier-ignore -->
```yaml
name       : nano
version    : 2.9.5
release    : 96
source     :
    - https://www.nano-editor.org/dist/v2.9/nano-2.9.5.tar.xz: 7b8d181cb57f42fa86a380bb9ad46abab859b60383607f731b65a9077f4b4e19
homepage   : https://www.nano-editor.org
license    : GPL-3.0-or-later
summary    : Small, friendly text editor inspired by Pico
component  : system.devel
description: |
    GNU nano is an easy-to-use text editor originally designed as a replacement for Pico, the ncurses-based editor from the non-free mailer package Pine (itself now available under the Apache License as Alpine).
setup      : |
    %patch -p1 -i $pkgfiles/0001-Use-a-stateless-configuration.patch
    %reconfigure --enable-utf8 --docdir=/usr/share/doc/nano
build      : |
    %make
install    : |
    %make_install
    install -D -m 00644 $pkgfiles/nanorc $installdir/usr/share/defaults/nano/nanorc
    install -D -m 00644 $pkgfiles/git.nanorc $installdir/usr/share/nano/git.nanorc
    # https://github.com/scopatz/nanorc
    for rcFile in $pkgfiles/nanorc-extras/*.nanorc; do
        install -m 00644 $rcFile $installdir/usr/share/nano
    done
```

## Keys

Not all fields in `package.yml` are mandatory, but a small selection are. Below is the complete list of the available fields.

### Mandatory keys

| Key Name        | Type        | Description                                                                                                                                                                                                         |
| --------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **name**        | `string`    | The name of the package. This is also used as the base of all sub-package names. Unless unavoidable, this should match the upstream name.                                                                           |
| **version**     | `string`    | The version of the currently packaged software. This is taken from the tarball in most cases.                                                                                                                       |
| **release**     | `integer`   | Specifies the current release number. Updates in the package number are based on this `release` number, _not_ the `version` number. As such, to release an update to users, this number must be incremented by one. |
| **source**      | `dict(s)`   | See [source key](/docs/packaging/package.yml#source-key) below.                                                                                                                                                     |
| **homepage**    | `string`    | Provides a link to the package's homepage, used in the Software Center.                                                                                                                                             |
| **license**     | `string(s)` | Valid upstream license(s). Try to ensure these use [SPDX identifiers](https://spdx.org/licenses/).                                                                                                                  |
| **summary**     | `string`    | Brief package summary, or display name.                                                                                                                                                                             |
| **component**   | `string`    | Component / group of packages this package belongs to. Check available components via `eopkg lc`.                                                                                                                   |
| **description** | `string`    | More extensive description of the software, usually taken from the vendor website.                                                                                                                                  |

#### "source" key

- Tarball source
  - Upstream source URL to the source code archive (often called the "tarball"), followed by the `sha256sum` for the tarball, as a value.
  - Example: `https://www.nano-editor.org/dist/v7/nano-7.2.tar.xz : 86f3442768bd2873cec693f83cdf80b4b444ad3cc14760b74361474fc87a4526`
  - Tarball sources are preferred over git sources, whenever possible, because git tags can be changed to point to different commits.
- Git source
  - Git repository URL prefixed with `git|`, followed by the git tag or commit hash, as a value.
  - Example: `git|https://github.com/getsolus/solus-sc.git : 6e786b3e86982272717ca4bed4f783fc43a678f3`
- Multiple sources
  - If multiple sources are listed, only the first source will be copied from the `$sources` directory to the `$workdir` directory.
- Renaming sources
  - If the file resulting from the source download needs to be renamed (often to avoid a name that would conflict with another source), add the preferred name to the URL as a URI fragment.
  - Example: `https://github.com/docker/cli/archive/refs/tags/v25.0.3.tar.gz#docker-cli.tar.gz : 04ad0cea992a65db20cb1b0dbf6d1ce32c705ce879de51b22095fe8d28030815`
  - This renames the downloaded file from `v25.0.3.tar.gz` to `docker-cli.tar.gz`.
- SourceForge sources
  - A proper SourceForge source looks like this, using `hplip` as an example: `https://sourceforge.net/projects/hplip/files/hplip/3.24.4/hplip-3.24.4.tar.gz`
    - This URL begins with `https://sourceforge.net/`, not `https://downloads.sourceforge.net/`, or some other mirror.
    - This URL has a path beginning with `/projects/$project_name/`
    - This URL does _not_ have a trailing `/download`, you may have to remove this by hand.
  - The correct SourceForge tarball URLs are found under the "Files" tab, then often within a directory, when starting from a project homepage on SourceForge.

### Optional, supported keys

| Key Name        | Type        | Description                                                                                                                                                                                                                                                                           |
| --------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **clang**       | `bool`      | Set to `true` if this package benefits from being built with Clang.                                                                                                                                                                                                                   |
| **extract**     | `bool`      | Set to `false` to disable automatic source extraction.                                                                                                                                                                                                                                |
| **autodep**     | `bool`      | Set to `false` to disable automatic binary dependency resolution at build time.                                                                                                                                                                                                       |
| **emul32**      | `bool`      | Set to `true` to enable an `-m32` build (32-bit libs).                                                                                                                                                                                                                                |
| **libsplit**    | `bool`      | Set to `false` to disable splitting of libraries into `devel` sub-packages.                                                                                                                                                                                                           |
| **devel**       | `bool`      | Set to `true` to place the `-devel` sub-package into the `system.devel` component.                                                                                                                                                                                                    |
| **conflicts**   | `string(s)` | Specify packages that cannot be installed together with this one.                                                                                                                                                                                                                     |
| **optimize**    | `list`      | Specify preset keys to modify compiler and linker flags during build. You can learn more [here](/docs/packaging/package.yml#optimize-values).                                                                                                                                         |
| **builddeps**   | `list`      | Specify build dependencies for the package. You can learn more [here](/docs/packaging/packaging-practices#build-dependencies).                                                                                                                                                        |
| **rundeps**     | `dict(s)`   | Specify further runtime dependencies for the packages. You can learn more [here](/docs/packaging/packaging-practices#runtime-dependencies).                                                                                                                                           |
| **checkdeps**   | `dict(s)`   | Specify build dependencies for the package which will _not_ be considered when determining build order for automatic builds. These dependencies should only be used during the `check` build phase. You can learn more [here](/docs/packaging/packaging-practices#check-dependencies) |
| **replaces**    | `dict(s)`   | Replace one package with another, used when renaming or deprecating packages for clean upgrade paths.                                                                                                                                                                                 |
| **patterns**    | `dict(s)`   | Allows fine grained control over file placement within the package or sub-packages. Useful for packages that are development only (i.e. `/usr/bin` files). You can learn more [here](/docs/packaging/packaging-practices#patterns).                                                   |
| **environment** | `unicode`   | Specify code that will be exported to all packaging steps of the build (i.e. exporting variables for the entire build).                                                                                                                                                               |
| **networking**  | `bool`      | Set to `true` to enable networking within solbuild.                                                                                                                                                                                                                                   |

### Packaging step keys, optional

The packaging steps are all considered optional, however the absence of the `install` step will result in no package generated. Each of these keys contains content that will be placed within a script and executed within a controlled environment to perform the package build. For all intents and purposes, they are Bash scripts with a predefined environment.

| Step Name   | Description                                                                                                                                                |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **setup**   | Performed after the source extraction. This is the correct place to perform any `configure` routine, or to `patch` the sources.                            |
| **build**   | Use this step to run the build portion, for example, `make`.                                                                                               |
| **install** | This is where you should install the files into the final packaging directory, for example, `make install`.                                                |
| **check**   | This is where tests / checking should occur, for example, `make check`.                                                                                    |
| **profile** | This is where profiling tests should be specified. `ypkg` will handle setting flags to generate profiling data and using that data for an optimized build. |

## Optimize values

One or more optimize values can be specified in a list with the `optimize` key in the `package.yml` file. Several values can override or conflict with each other and should be used only where they provide a performance benefit, or fix a bug in the package or build.

| Optimize Value                  | Description                                                                                                                                       |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| **speed**                       | Optimizes the package for performance `-O3` plus other flags.                                                                                     |
| **size**                        | Optimizes the package build to minimize size `-Os`. Not supported with clang.                                                                     |
| **no-bind-now**                 | Configures the package to disable certain flags, where RELRO is unsupported.                                                                      |
| **no-symbolic**                 | Disables `-Wl,-Bsymbolic-functions` linker flag.                                                                                                  |
| **unroll-loops**                | Enables `-funroll-loops`. Use this sparingly, only when it provides proven benefit.                                                               |
| **runpath**                     | Enables `-Wl,--enable-new-dtags` to make linker use RUNPATH's instead of RPATH's.                                                                 |
| **avx256**                      | Disables `-mprefer-vector-width=128` in avx2 builds.                                                                                              |
| **thin-lto**                    | Enables Thin Link Time Optimization `-flto=thin` with a supported linker.                                                                         |
| **lto**                         | Enables Link Time Optimization `-flto`.                                                                                                           |
| **icf-safe**                    | Enables safe Identical Cold Folding `--icf=safe`. `function-sections` is recommended when not using clang. Uses gold linker when not using clang. |
| **icf-all**                     | Enables Identical Cold Folding `--icf=all`. `function-sections` is recommended when not using clang. Uses gold linker when not using clang.       |
| **polly**                       | Enables polyhedral optimizations for the clang toolchain.                                                                                         |
| **function-sections**           | Generate a separate ELF section for each function. Recommended with ICF when not using clang.                                                     |
| **no-reorder-blocks-partition** | Disables block partition reordering with the gcc toolchain. Provided to facilitate BOLT'ed binaries/libraries.                                    |
| **emit-relocs**                 | Instructs the linker to emit relocations. Provided to facilitate BOLT'ed binaries/libraries.                                                      |

## Macros

To further assist in packaging, a number of macros are available. These are simply shorthand ways to perform a normal build operation. They also ensure that the resulting package is consistent. These macros are only available in our packaging steps, as they are substituted within the script before execution.

### Usage

Macros are prefixed with `%`, and are substituted before your script is executed. Macros ending with `%` are used to provide directory names or build values to the script.

```bash
# Run the configure macro with the given arguments
%configure --disable-static
```

### Actionable macros

| Macro                         | Description                                                                                                                               |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **%autogen**                  | Runs autogen with our `%CONFOPTS%` to create a configure script then proceeds to run `%configure`.                                        |
| **%cmake**                    | Configures a CMake project with the distribution specific options, such as prefix and release type.                                       |
| **%cmake_ninja**              | Configures a CMake project with ninja so it can be used with `%ninja_build`, `%ninja_install` and `%ninja_check` macros.                  |
| **%configure**                | Runs `./configure` with our `%CONFOPTS%` variable macro.                                                                                  |
| **%configure_no_runstatedir** | Runs `%configure` without the `--runstatedir` option. Use if you encounter `configure: error: unrecognized option: '--runstatedir=/run'`. |
| **%make**                     | Runs the `make` command with the job count specified in `eopkg.conf` ([more info](advanced-config/eopkg-configuration.md)).               |
| **%make_install**             | Performs a `make install`, using the `DESTDIR` variant. Should work for the vast majority of packages.                                    |
| **%patch**                    | Sane patch macro to run in batch mode and not contaminate source tree on failure.                                                         |
| **%apply_patches**            | Applies all patches listed in the `series` file in `./files` folder.                                                                      |
| **%reconfigure**              | Updates build scripts such as `./configure` and proceeds to run `%configure`.                                                             |
| **%symlink_check**            | Checks for broken symlinks in the install directory and aborts the build if any are found. Must run after install macros.                 |

### Haskell actionable macros

| Macro                  | Description                                                                                                                       |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **%cabal_configure**   | Configures a Cabal project that requires online dependencies, like a Cargo-style build                                            |
| **%haskell_configure** | Runs `runhaskell configure` with prefix, libdir, etc. and ensures the necessary package.conf.d is copied to the correct location. |
| **%haskell_build**     | Runs `runhaskell build` with `%JOBS%`.                                                                                            |
| **%haskell_install**   | Runs `runhaskell copy` to `$installdir`.                                                                                          |
| **%haskell_register**  | Runs `runhaskell register` to generate a pkg-config for package and version, then installs the conf file.                         |

Existing Haskell packages may use the old `cabal_build`, `cabal_install`, `cabal_register` macros. Please use the new `haskell_*` macros instead.

### Ninja actionable macros

| Macro                | Description                                                                                                             |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **%meson_configure** | Runs `meson` with our CFLAGS and appropriate flags such as `libdir`.                                                    |
| **%ninja_build**     | Runs `ninja` and passes our `%JOBS%` variable. This macro obsoletes _%meson_build_.                                     |
| **%ninja_install**   | Runs `ninja install` and passes the appropriate `DESTDIR` and `%JOBS%` variable. This macro obsoletes _%meson_install_. |
| **%ninja_check**     | Runs `ninja test` and passes our `%JOBS%` variable. This macro obsoletes _%meson_check_.                                |

### Perl actionable macros

| Macro             | Description                                                                              |
| ----------------- | ---------------------------------------------------------------------------------------- |
| **%perl_setup**   | Runs Perl setup scripts `Build.pl` or `Makefile.pl` with the appropriate variable flags. |
| **%perl_build**   | Runs Perl build scripts or attempts `%make`.                                             |
| **%perl_install** | Runs Perl install scripts or attempts `%make_install`.                                   |

### Python actionable macros

| Macro                | Description                                                                                                                                                                                                           |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **%python_setup**    | Runs the build portion of a setup.py using python2.                                                                                                                                                                   |
| **%python_install**  | Runs the install portion of a setup.py, to the appropriate root, using python2.                                                                                                                                       |
| **%python_test**     | Without argument, runs the test portion of setup.py. With a `.py` script, execute the script with python2. With something else execute the command "as it is". ([More info](https://github.com/getsolus/ypkg/pull/1)) |
| **%python_compile**  | Compiles `*.py` files using python2. This is only useful where the build doesn't compile them already (indicated by availability of `*.pyc` files).                                                                   |
| **%python3_setup**   | Runs the build portion of a setup.py using python3.                                                                                                                                                                   |
| **%python3_install** | Runs the install portion of a setup.py, to the appropriate root, using python3.                                                                                                                                       |
| **%python3_test**    | Without argument, runs the test portion of setup.py. With a `.py` script, execute the script with python3. With something else execute the command "as it is". ([More info](https://github.com/getsolus/ypkg/pull/1)) |
| **%python3_compile** | Compiles `*.py` files using python3. This is only useful where the build doesn't compile them already (indicated by availability of `*.pyc` files).                                                                   |

### Ruby actionable macros

| Macro            | Description                                         |
| ---------------- | --------------------------------------------------- |
| **%gem_build**   | Runs `gem build`.                                   |
| **%gem_install** | Runs `gem install` with the appropriate parameters. |

### Rust (cargo) actionable macros

| Macro              | Description                                                                      |
| ------------------ | -------------------------------------------------------------------------------- |
| **%cargo_fetch**   | Runs `cargo fetch --locked` to get dependencies.                                 |
| **%cargo_build**   | Runs `cargo build` with some additional flags.                                   |
| **%cargo_install** | Installs the built binary to `/usr/bin/PACKAGE-NAME`, OR to `/usr/bin/ARGUMENT`. |
| **%cargo_test**    | Runs `cargo test` with some additional flags.                                    |

### Qt actionable macros

| Macro           | Description                                                                                                            |
| --------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **%qmake**      | Runs `qmake` for Qt5 with the appropriate make flags.                                                                  |
| **%qmake4**     | Runs `qmake` for Qt4, as well as adding the necessary MOC, RCC, and UIC flags since those Qt4 executables end in -qt4. |
| **%qml_cache**  | Compiles `*.qml` files into `*.qmlc` so they are compiled ahead of time.                                               |
| **%qml6_cache** | Same as `%qml_cache`, but for Qt6.                                                                                     |

### Waf actionable macros

| Macro              | Description                                                                    |
| ------------------ | ------------------------------------------------------------------------------ |
| **%waf_configure** | Runs `waf configure` with prefix.                                              |
| **%waf_build**     | Runs `waf` and passes our `%JOBS%` variable.                                   |
| **%waf_install**   | Runs `waf install` and passes the appropriate `destdir` and `%JOBS%` variable. |

### BOLT actionable macros

BOLT is a post-link optimizer developed to speed up large applications. You will need to run a workload after instrumenting a binary or library. Think of it as post-link profile guided optimization.

| Macro           | Description                                                                                                                                             |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **%bolt_instr** | Instrument a binary or library with llvm-bolt. Requires it to be built with `emit-relocs`, as well as `no-reorder-blocks-partition` if not using clang. |
| **%bolt_merge** | Merge fdata profiles into a single file after running a workload with a BOLT instrumented binary.                                                       |
| **%bolt_opt**   | Optimize a binary using BOLT after running `%bolt_merge`.                                                                                               |

### Variable macros

| Macro                        | Description                                                                                                                                    |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **%ARCH%**                   | Indicates the current build architecture.                                                                                                      |
| **%CC%**                     | C compiler.                                                                                                                                    |
| **%CFLAGS%**                 | cflags as set in `eopkg.conf`.                                                                                                                 |
| **%CONFOPTS%**               | Flags / options for configuration, such as `--prefix=%PREFIX%`. [Full List.](https://github.com/getsolus/ypkg/blob/v33/ypkg2/rc.yml#L446-L458) |
| **%CXX%**                    | C++ compiler.                                                                                                                                  |
| **%CXXFLAGS%**               | cxxflags as set in `eopkg.conf`.                                                                                                               |
| **%JOBS%**                   | jobs, as set in `eopkg.conf`.                                                                                                                  |
| **%LDFLAGS%**                | ldflags as set in `eopkg.conf`.                                                                                                                |
| **%LIBSUFFIX%**              | Library suffix (either 32 for 32-bit or 64 for 64-bit).                                                                                        |
| **%PREFIX%**                 | Hard-coded prefix `/usr`.                                                                                                                      |
| **%YJOBS%**                  | Job count without `-j` as set in `eopkg.conf`.                                                                                                 |
| **%installroot%**            | Hard-coded install directory.                                                                                                                  |
| **%libdir%**                 | The distribution’s default library directory, i.e. `/usr/lib64` (Alters for `emul32`).                                                         |
| **%version%**                | Version of the package, as specified in the `version` key.                                                                                     |
| **%workdir%**                | Hard-coded work directory (source tree).                                                                                                       |
| **%kernel_version_lts%**     | Version of the `linux-lts` kernel.                                                                                                             |
| **%kernel_version_current%** | Version of the `linux-current` kernel.                                                                                                         |
| **%python2_version%**        | Version of the `python` (Python 2) distribution.                                                                                               |
| **%python3_version%**        | Version of the `python3` distribution.                                                                                                         |

## Variables

A set of variables are exported in our build stages. These are used to provide context and structure to the scripts.

| Variable           | Description                                                                                      |
| ------------------ | ------------------------------------------------------------------------------------------------ |
| **$CFLAGS**        | cflags as set in `eopkg.conf`.                                                                   |
| **$CXXFLAGS**      | cxxflags as set in `eopkg.conf`.                                                                 |
| **$LDFLAGS**       | ldflags as set in `eopkg.conf`.                                                                  |
| **$CC**            | C compiler.                                                                                      |
| **$CXX**           | C++ compiler.                                                                                    |
| **$EMUL32BUILD**   | Set only when compiling in `emul32` mode.                                                        |
| **$AVX2BUILD**     | Set only when compiling in `avx2` mode.                                                          |
| **$PGO_GEN_BUILD** | Set during the instrumentation phase of a PGO build.                                             |
| **$PGO_USE_BUILD** | Set during the use phase of a PGO build.                                                         |
| **$installdir**    | The install directory, i.e. where files are installed to for packaging.                          |
| **$pkgfiles**      | Refers to the `./files` directory relative to the `package.yml` file.                            |
| **$sources**       | Refers to the directory where your source files are stored, for example, `$sources/nano.tar.gz`. |
| **$workdir**       | The work, or source, directory of the package build.                                             |
| **$version**       | The version number of the package build as specified in the `version` field.                     |

## Types

The `package.yml` file uses native YAML types, however it follows syntactic conventions and may accept multiple value types for a given key.

### string

This is simply text, which does not need to be quoted.

### string(s)

Indicates that it is possible to use a `list` of strings, or one single `string`.

### integer

Whole, positive number, used in the `release` field.

### list

A YAML list (or array) can be expressed in multiple ways. A short array-notation would look like this:

`[one, two, three]`

They can also be expressed like this:

```yaml
- First Value
- Second Value
- Third Value
```

### dict

Known as an associative array, this is key to value mapping. These are separated by a colon (`:`), the token on the left is taken to be a key, and the token on the right is the value.

`SomeKey: Some Value`

Note that each `ypkg key` in the YAML file is actually a dict.

### dict(s)

`dict(s)` consists of a list of `dict`s and some assumptions. We primarily make use of this to express advanced information within the package. These permit you to provide no key, and a value only.
In this instance, the key is implicitly assumed to be the package name (for example, `nano`):

`- some value`

An explicit key, usually a sub-package name:

`- somekey: somevalue`

A mix of both:

```yaml
- somevalue
- somekey: another value
```

The values may also be expressed in list form, still using the same default key logic:

```yaml
- [one, two, three]
- somekey: [one, two, three]
- key:
    - value one
    - value two
    - value three
```

## Packaging practices

The concepts in this document merely expose the syntax of a `package.yml` file. Solus adheres to strict packaging practices and conventions which packagers must follow. They are explained in the [Packaging Practices](/docs/packaging/packaging-practices) article.
