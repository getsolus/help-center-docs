+++
title = "Java"
lastmod = "2019-03-26T19:50:48+01:00"
+++
# Java

This article covers obtaining open source Java as well as Oracle Java.

## Installation

If you are looking for OpenJDK or OpenJRE, install `openjdk-8` from the repository. The instructions below are for Oracle Java.

You can set up Java by following the instructions below:

## JRE

Grab the latest Java Runtime Environment (JRE) as `.tar.gz` from the [Oracle Download Page](https://www.oracle.com/technetwork/java/javase/downloads/jre8-downloads-2133155.html).

Extract JRE and move it to /opt:

``` bash
cd ~/Downloads
tar xf jre-8u*-linux-x64.tar.gz
sudo mkdir -p /opt
sudo rm -rf /opt/jre1.8.0_*
sudo mv jre1.8.0_* /opt/
sudo ln -svf /opt/jre1.8.0_*/bin/java /usr/bin/java
```

## JDK

Grab the latest Java Development Kit (JDK) as `.tar.gz` from the [Oracle Download Page](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html).

Extract JDK and move it to /opt:

``` bash
cd ~/Downloads
tar xf jdk-8u*-linux-x64.tar.gz
sudo mkdir -p /opt
sudo rm -rf /opt/jdk1.8.0_*
sudo mv jdk1.8.0_* /opt/
sudo ln -svf /opt/jdk1.8.0_*/bin/java /usr/bin/java
```
