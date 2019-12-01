+++
title = "Building Android"
lastmod = "2019-06-12T01:15:41+03:00"
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
sudo eopkg it curl-devel git gnupg gperf libgcc-32bit libxslt-devel lzop ncurses-32bit-devel ncurses-devel readline-32bit-devel rsync schedtool sdl1-devel squashfs-tools unzip vboot-utils vim wxwidgets-devel zip zlib-32bit-devel
```

Not a build dependency, but you'll definitely want ADB and Fastboot capabilities if you're developing for AOSP.
``` bash
sudo eopkg it android-tools
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

### ADB udev rules
To allow ADB to work properly with most Android devices, udev rules need to be set up. M0Rf30 has compiled a comprehensive list of them so we'll use his [here](https://raw.githubusercontent.com/M0Rf30/android-udev-rules/master/51-android.rules).
Create the file "51-android.rules" within /etc/udev/rules.d/ and copy the udev rules from the link above into it. If you don't feel comfortable pasting hundreds of udev lines at random you can sort through the list and find what pertains specifically to your device.
Be sure to set the permissions for the file once you're done with:
``` bash
sudo chmod 644 /etc/udev/rules.d/51-android.rules && sudo chown root /etc/udev/rules.d/51-android.rules
```
Reload the udev rules by executing:
``` bash
sudo usysconf run -f
```

## More Information

Google has provided build instructions for building AOSP on Ubuntu and MacOS, you may find additional useful information there, not stated here.

https://source.android.com/source/requirements

If your device is supported by LineageOS you can choose your device and follow the device specific build instructions at the LineageOS Wiki.

https://wiki.lineageos.org/devices/
