---
title: eopkg is dead, long live eopkg
description: Welcome to the Solus Development Log.
slug: eopkg-is-dead-long-live-eopkg
authors:
  - name: David Harder
    title: Solus Staff
    url: https://github.com/davidjharder
    image_url: https://avatars.githubusercontent.com/u/23007135?v=4
tags: [eopkg, devlog, moss, solus]
hide_table_of_contents: false
---

Close watchers of our [packages repository](https://github.com/getsolus/packages) may have noticed some strange looking items:

- [Initial inclusion of eopkg4-bin](https://github.com/getsolus/packages/pull/1305)
- [Testing the eopkg4-bin package](https://github.com/getsolus/packages/issues/1316) Warning: Minions GIF

It's a long story.

Our package manager `eopkg` is written in Python2. Python2 was originally planned to hit end-of-life all the way back in 2015! So Solus contributors past and present have wrestled with three thorny issues:

- Do we really want to just port `eopkg` to python3? Surely we could build something newer and shinier.
- How exactly do we want to port `eopkg` to Python3? (We'll call this ported version `eopkg3` for short)
- How do make sure `eopkg3` works even if something goes wrong with the Python3 libraries on someone's machine?

Here's the plan to solve this: Ikey and friends over at Serpent OS are actively building a new package manager [*moss*](https://github.com/serpent-os/moss) that we are excited about. And they're building it with Solus in mind as an eventual user. This will be our fix for the first problem. In the meantime, we're taking a pragmatic approach to the last two issues so that (frankly) we can do more exciting things. 

Sheepman, Livingsilver, and others completed a [direct Python3 port](https://github.com/getsolus/eopkg/commits/python3), which we never expect our users to actually run directly like a traditional Python program. Instead, that port will be compiled into a *binary* using [nuitka](https://nuitka.net/doc/download.html). We're calling this compiled `eopkg3` binary `eopkg4-bin` for now. Critically, this binary will have *no dependencies* other than `libc`. If we can successfully swap `eopkg` with `eopkg4-bin` on user's machines, then we've solved the last issue: Python3 can be updated without worrying about also wrecking the package manager. Got it?

But what about Python2? Well, now that Evan and Joey have seen off a [successful ISO release](https://getsol.us/2024/01/08/solus-4-5-released/) with a `calamares` based installer, we can cross `os-installer` [off the list](https://github.com/getsolus/packages/issues/270). And `eopkg4-bin` will let us cross off a whole bunch more. The rest of that list is a story for another day.
