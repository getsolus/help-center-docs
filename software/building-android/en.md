+++
title = "Building Android"
+++
# Building Android™ on Solus

This article covers building the [Android Open Source Project](https://www.android.com/) (AOSP) on Solus, the instructions can also be tweaked to also install forks of Android such as [LineageOS](https://lineageos.org/).

Note that Solus is not an officially supported Linux distribution for building Android.

## Prerequisites

Before we can start we need to setup our build environment ready for building Android. You'll need a minimum of `100GB` of free space to download and compile Android.

### Installing Build Dependencies

Android 7 (Nougat) and Android 8 (Oreo) require OpenJDK 8. Android 5 (Lollipop) and Android 6 (Marshmallow) require OpenJDK 7 which is not currently in the repository.

To install OpenJDK 8 run:

``` bash
sudo eopkg it openjdk-8-devel  
```

Next we need to install packages from the `system.devel` component, these provide common build tools for general software development.

``` bash
sudo eopkg it -c system.devel 
```

Now we'll need to install the rest of the required build dependencies.

``` bash
sudo eopkg it curl-devel git gnupg gperf libgcc-32bit libxslt-devel lzop ncurses-32bit-devel ncurses-devel readline-32bit-devel rsync schedtool sdl1-devel squashfs-tools unzip wxwidgets-devel zip zlib-32bit-devel
```

### Installing the `repo` Tool

`repo` is a tool from Google to manage multiple git repositories. We'll need to install it to download the Android source code.

``` bash
mkdir ~/bin 
curl https://storage.googleapis.com/git-repo-downloads/repo > ~/bin/repo 
chmod a+x ~/bin/repo 
```

We now need to export `~/bin` to our PATH so we can run `repo` from any directory. Paste the following into your `~/.bashrc` file.

``` bash
if [ -d "$HOME/bin" ] ; then
    PATH="$HOME/bin:$PATH"
fi
```

Run `source ~/.bashrc` for the changes to apply.

Now our build environment is prepared, we can download the source code.

## Downloading the Source Code

First we need to create a directory where we want to download Android.

``` bash
mkdir ~/android && cd ~/android
```

Next we'll need to initialize the repository with what version of Android you want to build. You can find a list of versions you can checkout [here](https://source.android.com/source/build-numbers#source-code-tags-and-builds).

``` bash
repo init -u https://android.googlesource.com/platform/manifest -b android-8.0.0_r34 
```

Now we can finally download the source code, this will take a long time and depends on the speed of your internet connection. The `-j` option downloads as many repos simultaneously as you have processor cores, and, the `-c` option only downloads the current branch.

``` bash
repo sync -j `nproc` -c
```

*If you have a slow or unreliable internet connection using `j 1` may be more reliable.*

## Building Android

Once the source has finished downloading we can build Android. The following commands will not build android for any specific device. For building Android specifically for your device you'll need to find additional instructions.

``` bash
source build/envsetup.sh
lunch full-eng
make -j`nproc`
```

## Tips & Tricks

There are a number of quality of life improvements you can do to improve your experience of building Android.

### Using ccache to Speed Up Subsequent Builds

ccache will cache compiler files after the initial compile to speed up subsequent builds, for building any large project more than once it's a must enable.

In your `~/.bashrc` file add the following to specify to use ccache.

``` bash
export USE_CCACHE=1
```

You'll also need to specific the max amount of disk space you want ccache to use, where `10G` corresponds to 10GB.

``` bash
prebuilts/misc/linux-x86/ccache/ccache -M 10G
```

Additionally you can specify which directory you want the ccache to reside, this can be helpful if you have an additional disk drive. Normally ccache resides at `~/.ccache`.

``` bash
export CCACHE_DIR=/<path_of_your_choice>/.ccache 
```

If you're struggling for disk space you can turn on ccache compression to increase the number of files it can cache for a very minor performance penalty. Paste the following into your `~/.bashrc` file to enable.

``` bash
export CCACHE_COMPRESS=1
```

*After making changes to your `~/.bashrc` file, remember to run `source ~/.bashrc` for changes to take effect.*

## More Information

Google has provided build instructions for building AOSP on Ubuntu and MacOS, you may find additional useful information there, not stated here.

https://source.android.com/source/requirements

If your device is supported by LineageOS you can choose your device and follow the device specific build instructions at the LineageOS Wiki.

https://wiki.lineageos.org/devices/
