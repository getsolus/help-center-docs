+++
title = "Package.yml"
lastmod = "2020-05-04T18:12:41+02:00"
+++
# Package.yml

All packages consist of a single build file, which provides all of the required metadata for the package manager, plus the build steps involved to produce a package. This follows the YAML specification.

## Format

All `package.yml` files **must** be valid YAML.

As can be seen in the example below, the file is organised into a key-&gt;value hierarchy. Some values may be required to be in a list format, whereas most are simple strings. The build step sections are all considered optional, however if you do not 
perform *any* steps, then no package is generated. Each of these keys contains content that will be placed within a script and executed within a controlled environment to perform the package build. To all intents and purposes, they are bash scripts 
with a predefined environment.

An example file follows:

``` yaml
name       : nano
version    : 2.9.5
release    : 96
source     :
    - https://www.nano-editor.org/dist/v2.9/nano-2.9.5.tar.xz : 7b8d181cb57f42fa86a380bb9ad46abab859b60383607f731b65a9077f4b4e19
license    : GPL-3.0-or-later
summary    : Small, friendly text editor inspired by Pico
component  : system.devel
description: |
    GNU nano is an easy-to-use text editor originally designed as a replacement for Pico, the ncurses-based editor from the non-free mailer package Pine (itself now available under the Apache License as Alpine).
setup      : |
    %patch -p1 < $pkgfiles/0001-Use-a-stateless-configuration.patch
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

Not all fields in `package.yml` are mandatory, but a small selection are. They are listed below. Note that `string(s)` indicates that it is possible to use a `list` of strings, or one single `string`

`dict` refers to a `key : value` split in YAML, and `dict(s)` refers to a list of `dict`s

### Mandatory Keys

Key Name | Type | Description
---- | ---- | ----
**name** | `string` | The name of the package. This is also used as the base of all sub-package names. Unless unavoidable, this should match the upstream name
**version** | `string` | The version of the currently packaged software. This is taken from the tarball in most cases.
**release** | `integer` | Specifies the current release number. Updates in the package number are based on this `release` number, *not* the `version` number. As such, to release an update to users, this number must be incremented by one.
**license** | `string(s)` | Valid upstream license(s). Try to ensure these use [SPDX identifiers](https://spdx.org/licenses/).
**source** | `dict(s)` | Upstream source location (i.e. tarball), with the valid `sha256sum` as a value
**component** | `string` | Component / group of packages this package belongs to. Check available components via `eopkg lc`
**summary** | `string` | Brief package summary, or display name
**description** | `string` | More extensive description of the software, usually taken from the vendor website

### Optional, supported keys

Key Name | Type | Description
---- | ---- | ----
**clang** | `bool` | Set to `no` if this package cannot be built with Clang
**extract** | `bool` | Set to `no` to disable automatic source extraction.
**autodep** | `bool` | Set to `no` to disable automatic binary dependency resolution at build time
**emul32** | `bool` | Set to `yes` to enable an `-m32` build (32-bit libs)
**libsplit** | `bool` | Set to `no` to disable splitting of libraries into `devel` sub-packages
**optimize** | `list` | Specify preset keys to modify compiler and linker flags during build. You can learn more [here](/articles/packaging/package.yml/en/#optimize-values).
**builddeps** | `list` | Specify build dependencies for the package. You can learn more [here](/articles/packaging/packaging-practices/en/#build-dependencies).
**rundeps** | `dict(s)` | Specify further runtime dependencies for the packages. You can learn more [here](/articles/packaging/packaging-practices/en/#runtime-dependencies).
**replaces** | `dict(s)` | Replace one package with another, used when renaming or deprecating packages for clean upgrade paths
**patterns** | `dict(s)` | Allows fine grained control over file placement within the package or sub-packages. Useful for packages that are development only (i.e. `/usr/bin` files)
**environment** | `unicode` | Specify code that will be exported to all build steps of the build (i.e. exporting variables for the entire build).
**networking** | `bool` | Set to `yes` to enable networking within solbuild
**homepage** | `string` | Provides a link to the package's hompage in the software center.

### Build step keys, optional

Note that each step in itself is optional, however all can be used. The value of each of these keys is merged into a build script that is executed for each stage of the build.

Step Name | Description
---- | ----
**setup** | Performed after the source extraction. This is the correct place to perform any `configure` routine, or to `patch` the sources.
**build** | Use this step to run the build portion, i.e. `make`
**install** | This is where you should install the files into the final packaging directory, i.e. `make install`
**check** | This is where tests / checking should occur, i.e. `make check`
**profile** | This is where profiling tests should be specified. `ypkg` will handle setting flags to generate profiling data and using that data for an optimized build.


## Optimize values

One or more optimize values can be specified in a list with the optimize key in the `package.yml` file. Several values can override or conflict with each other and should be used only where they provide a performance benefit, or fix a bug in the package or build.

Optimize Value | Description
---- | ----
**speed** | Optimise the package for performance `-O3` plus other flags.
**size** | Optimize the package build to minimize size `-Os`. Not supported with clang.
**no-bind-now** | Configure the package to disable certain flags, where RELRO is unsupported.
**no-symbolic** | Disable `-Wl,-Bsymbolic-functions` linker flag.
**unroll-loops** | Enable `-funroll-loops`. Use this sparingly, only when it provides proven benefit.
**runpath** | Enable `-Wl,--enable-new-dtags` to make linker use RUNPATH's instead of RPATH's.
**avx256** | Disables `-mprefer-vector-width=128` in avx2 builds.
**thin-lto** | Enable Thin Link Time Optimization `-flto=thin` with a supported linker.
**lto** | Enable Link Time Optimization `-flto`.

## Macros

To further assist in packaging, a number of macros are available. These are simply shorthand ways to perform a normal build operation. They also ensure that the resulting package is consistent. These macros are only available in our build steps, as they are substituted within the script before execution.

### Usage

Macros are prefixed with `%`, and are substituted before your script is executed. Macros ending with `%` are used to provide directory names or build values, to the script.

``` bash
# Run the configure macro with the given arguments
%configure --disable-static
```

### Actionable Macros

Macro | Description
---- | ----
**%autogen** | Runs autogen with our `%CONFOPTS%` to create a configure script then proceeds to run `%configure`.
**%cmake** | Configure cmake project with the distribution specific options, such as prefix and release type.
**%cmake_ninja** | Configure cmake project with ninja so it can be used with `%ninja_build`, `%ninja_install` and `%ninja_check` macros.
**%configure** | Runs `./configure` with our `%CONFOPTS%` variable macro.
**%make** | Runs the `make` command with the job count specified in `eopkg.conf`
**%make_install** | Perform a `make install`, using the `DESTDIR` variant. Should work for the vast majority of packages.
**%patch** | Sane patch macro to run in batch mode and not contaminate source tree on failure
**%apply_patches** | Applies all patches listed in the `series` file in `./files` folder.
**%reconfigure** | Updates build scripts such as `./configure` and proceeds to run `%configure`.

### Haskell Actionable Macros

Macro | Description
---- | ----
**%cabal_configure** | Runs cabal configure with prefix, libdir, etc. and ensures the necessary package.conf.d is copied to the correct location.
**%cabal_build** | Runs cabal build with `%JOBS%`
**%cabal_install** | Runs cabal copy to `$installdir`
**%cabal_register** | Runs cabal register to generate a pkg-config for package and version, then installs the conf file.

### Ninja Actionable Macros

Macro | Description
---- | ----
**%meson_configure** | Runs meson with our CFLAGS and appropriate flags such as libdir.
**%ninja_build** | Runs ninja and passes our `%JOBS%` variable. This macro obsoletes *%meson_build*.
**%ninja_install** | Runs meson install and passed the appropriate `DESTDIR` and `%JOBS%` variable. This macro obsoletes *%meson_install*.
**%ninja_check** | Runs ninja test and passes our `%JOBS%` variable. This macro obsoletes *%meson_check*.

### Perl Actionable Macros

Macro | Description
---- | ----
**%perl_setup** | Runs Perl setup scripts Build.pl or Makefile.pl with the appropriate variable flags.
**%perl_build** | Runs Perl build scripts or attempts `%make`.
**%perl_install** | Runs Perl install scripts or attempts `%make_install`.

### Python Actionable Macros

Macro | Description
---- | ----
**%python_setup** | Runs the build portion of a setup.py using python2.
**%python_install** | Runs the install portion of a setup.py, to the appropriate root, using python2.
**%python_test** | Without argument, runs the test portion of setup.py. With a `.py` script, execute the script with python2. With something else execute the command "as it is". ([More info](https://github.com/getsolus/ypkg/pull/1))
**%python_compile** | Compiles `*.py` files using python2. This is only useful where the build doesn't compile them already (indicated by availability of `*.pyc` files).
**%python3_setup** | Runs the build portion of a setup.py using python3.
**%python3_install** | Runs the install portion of a setup.py, to the appropriate root, using python3.
**%python3_test** | Without argument, runs the test portion of setup.py. With a `.py` script, execute the script with python3. With something else execute the command "as it is". ([More info](https://github.com/getsolus/ypkg/pull/1))
**%python3_compile** | Compiles `*.py` files using python3. This is only useful where the build doesn't compile them already (indicated by availability of `*.pyc` files).

### Ruby Actionable Macros

Macro | Description
---- | ----
**%gem_build** | Runs gem build.
**%gem_install** | Runs gem install with the appropriate parameters.

### Qt Actionable Macros

Macro | Description
---- | ----
**%qmake** | Runs qmake for Qt5 with the appropriate make flags.
**%qmake4** | Runs qmake for Qt4, as well as adding the necessary MOC, RCC, and UIC flags since those Qt4 executables end in -qt4.
**%qml_cache** | Compiles `*.qml` files into `*.qmlc` so they are compiled ahead of time.

### Waf Actionable Macros

Macro | Description
---- | ----
**%waf_configure** | Runs waf configure with prefix.
**%waf_build** | Runs waf and passes our `%JOBS%` variable.
**%waf_install** | Runs waf install and passed the appropriate `destdir` and `%JOBS%` variable

### Variable Macros

Macro | Description
---- | ----
**%ARCH%** | Indicates the current build architecture.
**%CC%** | C compiler
**%CFLAGS%** | cflags as set in `eopkg.conf`
**%CONFOPTS%** | Flags / options for configuration, such as `--prefix=%PREFIX%`. [Full List.](https://github.com/getsolus/ypkg/blob/master/ypkg2/rc.yml#L327-L329)
**%CXX%** | C++ compiler
**%CXXFLAGS%** | cxxflags as set in `eopkg.conf`
**%JOBS%** | jobs, as set in `eopkg.conf`
**%LDFLAGS%** | ldflags as set in `eopkg.conf`
**%LIBSUFFIX%** | Library suffix (either 32 for 32-bit or 64 for 64-bit)
**%PREFIX%** | Hard-coded prefix `/usr`
**%YJOBS%** | Job count without `-j` as set in `eopkg.conf`
**%installroot%** | Hard-coded install directory
**%libdir%** | The distribution’s default library directory, i.e. `/usr/lib64` (Alters for `emul32`)
**%version%** | Version of the package, as specified in the version key.
**%workdir%** | Hard-coded work directory (source tree)

## Variables

A set of variables are exported in our build stages. These are used to provide context and structure to the scripts.

Variable | Description
---- | ----
**$CFLAGS** | cflags as set in `eopkg.conf`
**$CXXFLAGS** | cxxflags as set in `eopkg.conf`
**$LDFLAGS** | ldflags as set in `eopkg.conf`
**$CC** | C compiler
**$CXX** | C++ compiler
**$EMUL32BUILD** | Set only when compiling in `emul32` mode
**$installdir** | The install directory, i.e. where files are installed to for packaging
**$pkgfiles** | Refers to the `./files` directory relative to the `package.yml` file
**$sources** | Refers to the directory where your source files are stored e.g. `$sources/nano.tar.gz`
**$workdir** | The work, or source, directory of the package build

## Types

The `package.yml` file uses native YAML types, however for the sake of clarity an explanation of how they are used within the context of `ypkg` is provided below.

### string

This is simply text, which does not need to be quoted.

### integer

Whole, positive number, used in the `release` field.

### list

A YAML list (or array) can be expressed in multiple ways. A short array-notation would look like this:

`[one, two, three]`

They can also be expressed like this:

``` yaml
- First Value
- Second Value
- Third Value
```

### dict

Known as an associative array, this is key to value mapping. These are separated by a colon (`:`), the token on the left is taken to be a key, and the token on the right is the value.

`SomeKey: Some Value`

Note that each `ypkg key` in the YAML file is actually a dict.

### dict(s)

This is a combination of the `list` type, the `dict` type and some assumptions. We primarily make use of this to express advanced information within the package. These permit you to provide no key, and a value only. 
In this instance, the key is assumed to be the package `name`:

`- some value`

An explicit key, usually a sub-package name:

`- somekey: somevalue`

A mix of both:

``` yaml
- somevalue
- somekey: another value
```

The values may also be expressed in list form, still using the same default key logic:

``` yaml
- [one,two, three]
- somekey: [one,two, three]
- key:
    - value one
    - value two
    - value three
```
