---
title: Snap
summary: Working with snaps
---

# Snap

:::warning
Snaps may be [**removed from Solus in 2025**][2],
and are not fully confined in Solus with Linux kernel 6.9 and newer.
See the section on confinement below.
:::

[Snaps][1] are a way of installing third-party packages.
The `snapd` package installs the CLI client that can be used to install and run snaps.

## Confinement warning

Snaps are usually protected using `strict` confinement,
ensuring that snaps can't access more of your system than needed.
The `snap` command provided by Solus shows a warning when strict confinement is not available.
For example:

> WARNING: snap is running with partial confinement. Snaps may stop working in 2025. See https://help.getsol.us/docs/user/software/third-party/snap for details

We recommend [migrating to Flatpak](#migrating-to-flatpak) when possible.
The warning can be silenced by running `sudo snap hide-confinement-warning`.

## Migrating to Flatpak

The `unsnap` package can be used to migrate from snap to Flatpak.
While it does not actively remove user data in `~/snap` or `/var/lib/snapd`,
we cannot guarantee that no data gets removed on accident.
Please ensure you have system backups that include snap data.

Run `sudo unsnap` before migrating to see if all your snaps have known equivalents.
Look for lines containing `No equivalent flatpak for <name> found`.
Check out [this issue][3] if you encounter such snaps.

Running `sudo unsnap auto` will migrate as many snaps to Flatpak as possible.
It will also uninstall `snapd` if all snaps were migrated.

If `unsnap` is unable to find an equivalent Flatpak for a snap, you have the following options:

- Search for an equivalent Flatpak manually, and [report it][3] if possible.
- Install an equivalent tool from the package manager if possible.
- Uninstall the snap manually if it is not needed.

It is possible to rerun `sudo unsnap auto` to finish removing `snapd`.

[1]: https://snapcraft.io/
[2]: https://github.com/getsolus/packages/issues/325
[3]: https://github.com/getsolus/packages/issues/3282
