+++
title = "Java"
+++
# Java

This article covers obtaining open source Java as well as Oracle Java.

## Installation

If you are looking for OpenJDK or OpenJRE, install `openjdk-8` from the repository. The instructions below are for Oracle Java.

You can set up Java by following the instructions below:

## JRE

Grab the Java Runtime Environment (JRE) as `.tar.gz` from the [Oracle Download Page](http://www.oracle.com/technetwork/java/javase/downloads/jre8-downloads-2133155.html).

Extract JRE and move it to /opt:

``` bash
cd ~/Downloads
tar xf jre-8u121-linux-x64.tar.gz
sudo mv jre1.8.0_121 /opt/
sudo ln -svf /opt/jre1.8.0_121/bin/java /usr/bin/java
```

To enable Java in Firefox:

``` bash
mkdir -p ~/.mozilla/plugins
ln -s /opt/jre1.8.0_121/lib/amd64/libnpjp2.so ~/.mozilla/plugins/libnpjp2.so
```

## JDK

Grab the Java Development Kit (JDK) as `.tar.gz` from the [Oracle Download Page](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html).

Extract JDK and move it to /opt:

``` bash
cd ~/Downloads
tar xf jdk-8u121-linux-x64.tar.gz
sudo mv jdk1.8.0_121 /opt/
sudo ln -svf /opt/jdk1.8.0_121/bin/java /usr/bin/java
```

To enable Java in Firefox:

``` bash
mkdir -p ~/.mozilla/plugins
ln -s /opt/jdk1.8.0_121/jre/lib/amd64/libnpjp2.so ~/.mozilla/plugins/libnpjp2.so
```