+++
title = "Lazarus IDE"
+++
# Lazarus IDE

[Lazarus](https://www.lazarus-ide.org/) is a Delphi compatible cross-platform IDE for Rapid Application Development. It has variety of components ready for use and a graphical form designer to easily create complex graphical user interfaces.

## Getting Started

Make sure you have the necessary packages installed:

``` bash
sudo eopkg upgrade
sudo eopkg install lazarus
```

### Installing FPC Source

First, determine the version of `fpc` that you have installed:

``` bash
fpc -h
```

Now go to [FreePascal on SourceForge](https://sourceforge.net/projects/freepascal/files/Source/) and download the corresponding archive `fpc-<version>.source.tar.gz`.

Once you have the archive, unpack it into a directory of your choosing by using either the `tar` command or a graphical program. This tutorial uses `~/Development/fpc-3.0.2` to store the source files.

Now that you have the source files, open **Lazarus IDE**. You should be presented with a window like this one:

{{< altimg "lazarus_config.png" "help-center/software/lazarus/" >}}

From the ***FPC Sources*** tab, ***Browse*** to the directory where you unpacked the source. Confirm your selection and then press ***Start IDE***.

That's it! You are now ready to use Lazarus IDE to develop GUI applications.