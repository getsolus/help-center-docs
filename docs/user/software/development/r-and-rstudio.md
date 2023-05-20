---
title: R and Rstudio
summary: Quick start guide for R and Rstudio on Solus
date: 2022-12-16
---

# R and Rstudio

Covers the basics of how to install R and Rstudio on Solus and also covers how to install required dependencies for installing additional CRAN libraries.


## Downloading R

It is recommended to download R before downloading Rstudio. This can be accomplished easily in any of three ways.
**NOTE:** Both R and Rstudio are available natively on Solus thanks to their amazing maintainers, it is not necessary to go to either softwares' respective website.

- The easiest way to do this is to search for R within the **Software Center**
- Alternatively you can enter the **Software Center**, select **Programming Languages & Tools**, then select **Programming** and scroll down until you see **r**. *The list itself is in alphabetical order so it will be near the bottom.*
- The third option for install is to open your terminal and enter the command ```sudo eopkg it r```


## Downloading Rstudio

The first step in setting up Rstudio is to download and install it. This can be accomplished in the same ways as R in the prior step.

- The easiest way to do this is to search for Rstudio within the **Software Center**
- Alternatively you can enter the **Software Center**, select **Programming Languages & Tools**, then select **Integrated Development Environments** and scroll down until you see **r**. *The list itself is in alphabetical order so it will be near the bottom.*
- The third option for install is to open your terminal and enter the command ```sudo eopkg it rstudio```


### How to use ```install.package()``` on Solus

Unless you are only going to use base R functions, you will need to make use of ```install.package()``` within R to install additional libraries. To use this function within R you need to install certain development packages which vary depending on the library you are trying to enable within R.

On other linux distros (like debian, ubuntu, and fedora) this is accomplished through the installation of r-devel. However since Solus does not have an r-devel package these dependencies have to be installed through other means.

There two main solus packages that will include many of the dependencies required that allow you to install most R CRAN packages. These are ```system.devel``` and ```curl-devel```.

 - ```system.devel``` can **ONLY** be installed from within terminal by running the command ```sudo eopkg it -c system.devel```
 - ```curl-devel``` can be found by searching in the **Software Center** or by running the command ```sudo eopkg it curl-devel```


 Once these two Solus packages are installed ```install.package()``` will work as usual within R for most packages like ```tidyverse```.

 If when you try to install a CRAN library with ```install.package()``` from within R and you are presented with an error that says ```...exited with non zero exit status``` this is most likely because one of the required dependencies, *which will be listed within the R console detailing the error*, is contained within a Solus devel package you have not yet installed.

 #### Additional Discovered Dependencies

 This section should be edited to help future users to know what Solus devel packages are needed to install additional, more specialized CRAN packages.

 - To successfully run ```install.package("RCurl")``` within R requires ```nghttp2-devel```, ```libssh2-devel```, and ```kerberos-devel``` to be installed from the Solus **Software Center**
