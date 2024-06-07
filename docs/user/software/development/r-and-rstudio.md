---
title: R and RStudio
summary: Quick start guide for R and RStudio on Solus
---

# R and RStudio

Covers the basics of how to install R and RStudio on Solus and how to install required dependencies for installing additional CRAN libraries.

## Downloading R

It is recommended to download R before downloading RStudio. This can be accomplished easily in any of three ways.
**NOTE:** Both R and RStudio are available natively on Solus thanks to their amazing maintainers, it is not necessary to go to either software's respective website.

- The easiest way to do this is to search for "R" within the **Software Center**
- Alternatively you can enter the **Software Center**, select **Programming Languages & Tools**, then select **Programming** and scroll down until you see **r**. _The list itself is in alphabetical order so it will be near the bottom._
- The third option for installation is to open your terminal and enter the command `sudo eopkg it r`

## Downloading RStudio

The first step in setting up RStudio is to download and install it. This can be accomplished in the same ways as R in the prior step.

- The easiest way to do this is to search for "RStudio" within the **Software Center**
- Alternatively you can enter the **Software Center**, select **Programming Languages & Tools**, then select **Integrated Development Environments** and scroll down until you see **RStudio**. _The list itself is in alphabetical order so it will be near the bottom._
- The third option for installation is to open your terminal and enter the command `sudo eopkg it rstudio`

### How to use `install.packages()` on Solus

Unless you are only going to use base R functions, you will need to make use of `install.packages()` within R to install additional libraries. To use this function you need to install certain development packages which vary depending on the library you are trying to enable within R.

On other Linux distros (like Debian, Ubuntu, and Fedora) this is accomplished through the installation of r-devel. However since Solus does not have an r-devel package these dependencies have to be installed through other means.

There are three main Solus packages that will include many of the dependencies required that allow you to install most CRAN packages. These are `system.devel`, `curl-devel` and `fontconfig-devel`.

- `system.devel` is a component containing several packages and can **ONLY** be installed from within a terminal by running the command `sudo eopkg it -c system.devel`
- `curl-devel` and `fontconfig-devel` can be found by searching in the **Software Center** or by running the command `sudo eopkg it curl-devel fontconfig-devel`

Once these two Solus packages are installed `install.packages()` will work as usual within R for most packages like `tidyverse`.

If you try to install a CRAN library with `install.packages()` from within R and you are presented with an error that says `...exited with non zero exit status` this is most likely because one of the required dependencies, _which will be listed within the R console detailing the error_, is contained within a Solus devel package you have not yet installed.
