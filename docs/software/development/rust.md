---
title: Rust
summary: A quick guide to getting set up for Rust development on Solus
date: 2022-12-16
---

# Rust

There are two ways to install Rust. This article explains how they differ and which one should be used, according to users' needs.

Rust can be obtained by:
 - Installing the `rustup` package, then installing any Rust target and/or tool using `rustup` itself
 - Installing the `rust` package

Users should prefer the `rustup` way, since it gives the freedom to install any tools and targets, including nightly versions and debugging utilities, although it may require editing the `PATH` variable depending on your shell setup. According to the official Rust [installation guide](https://www.rust-lang.org/tools/install):

> It is customary for Rust developers to include `~/.cargo/bin` in their `PATH `environment variable. During installation rustup will attempt to configure the `PATH`. Because of differences between platforms, command shells, and bugs in rustup, the modifications to `PATH` may not take effect until the console is restarted, or the user is logged out, or it may not succeed at all.

The `rust` package, in fact, is present in the Solus repository for building packages that depend on it and it is not intended to be used by the final user, although it is possible and supported. Users that want to use the `rust` package for their projects will be limited to the targets and tools that Solus needs to support, namely x86_64 and i686 Linux targets and `cargo`. On the other hand, the `rust` package is ready to use after its installation with no extra configurations.

Either way, it is also recommended to install our `system.devel` component, which is typically required for compiling. See our documentation for it [here](/software/development/base-development-tools).

As a final note, it is possible to [configure](https://rust-lang.github.io/rustup/installation/package-managers.html) `rustup` to use the system toolchain. This setup is **discouraged** unless aimed at developing applications targeting Solus itself.
