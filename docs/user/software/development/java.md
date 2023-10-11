---
title: Java
summary: Learn how to install, run, and manage Java on Solus.
---

# Java

Solus includes multiple LTS versions of Java in the repositories. You can install more than one version in your system at once.

:::tip

If you need to install different versions of Java, use alternative installation methods such as [_SDKMAN!_](https://sdkman.io/).

:::

All Java packages in the Solus repositories include the _Java Runtime Environment_ (JRE) and the _Java Development Kit_ (JDK).

The following table lists the versions of Java available in the Solus repositories.

| Version | Package name | Installation directory  | Included components | Notes                 |
| ------- | ------------ | ----------------------- | ------------------- | --------------------- |
| Java 8  | `openjdk-8`  | `/usr/lib64/openjdk-8`  | JRE, JDK            | See _openjdk-8_ below |
| Java 11 | `openjdk-11` | `/usr/lib64/openjdk-11` | JRE, JDK, OpenJFX   |                       |
| Java 17 | `openjdk-17` | `/usr/lib64/openjdk-17` | JRE, JDK            |                       |

## Running Java Applications

:::caution Important

Solus does not add Java to the `PATH` environment variable by default.

:::

There are multiple ways to execute Java applications in Solus:

- Create a .desktop file, then add `env JAVA_HOME=/path/to/jdk/bin` to Exec.
- Create a script that sets `JAVA_HOME` before running the application.
- Symlink the java executable from `/path/to/jdk/bin` to `/usr/bin`.
- Add `/path/to/jdk/bin` to your PATH environment variable.

## openjdk-8

:::danger Important

openjdk-8 is scheduled for removal in the near future. It is not recommended that you use it today.

:::
