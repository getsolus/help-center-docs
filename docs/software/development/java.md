---
title: Java
summary: A quick guide to Java development on Solus
date: 2022-12-16
---

# Java

This article covers obtaining open source Java (otherwise known as OpenJDK). In this article, two abbreviations will be used to refer to components of the Java software suite:

- JRE (Java Runtime Environment)
- JDK (Java Development Kit)

## Installing OpenJDK

Solus currently offers two Java versions in the repository, and these versions can be installed alongside one another. For ease of maintenance, Solus only includes LTS versions of OpenJDK. Those who require the absolute newest version of the JDK, or other non-LTS versions, should look to other methods of installation (such as [sdkman](https://sdkman.io/)).

### OpenJDK 11

OpenJDK 11 is included in the repository as `openjdk-11`. It includes the JRE, the JDK, and OpenJFX, all in one package. The majority of Java packages in Solus currently use OpenJDK 11, and this is the recommended version if you need Java but aren't sure which version you should install. If the software you use doesn't work with OpenJDK 11, you should use OpenJDK 8 instead.

Once `openjdk-11` is installed, you'll be able to find all of its components at `/usr/lib64/openjdk-11`. This is the path you should set `JAVA_HOME` to for use with Java software not packaged by Solus if you want them to use JDK 11.

### OpenJDK 8

OpenJDK 8 is included in the repository as `openjdk-8` for the JRE and JDK, and `openjfx-8` for the implementation of JavaFX. Once it's installed, its components can be found at `/usr/lib64/openjdk-8`. This is the path you should set `JAVA_HOME` to for use with Java software not packaged by Solus if you want them to use JDK 8.

## Running Java Applications

Once a Java version has been installed, you might notice that running jar files in the terminal via `java -jar foo.jar` doesn't work. This is because Solus uses a stateless configuration for its Java packages so as to avoid conflicts between different installed versions, and thus there is no `java` command on the `PATH` by default. To amend this, there are multiple possible solutions, each of which should be used for certain scenarios.

- Create a .desktop file and specify `env JAVA_HOME=/path/to/jdk` in `Exec` (best for GUIs)
- Create a script that sets `JAVA_HOME` before running the application
- Symlink the `java` executable from within `/path/to/jdk/bin` into `/usr/bin`
- Add `/path/to/jdk/bin` to your PATH
