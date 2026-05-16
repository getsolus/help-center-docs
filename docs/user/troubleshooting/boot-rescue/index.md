---
title: Boot Rescue
summary: Troubleshooting the boot process for Solus
---

# Boot Rescue

When your Solus system fails to start up, several common issues might be the cause:

- On computers with multiple operating systems, another operating system controlling the startup sequence might not show Solus after a system update
- System updates (particularly kernel updates) that didn't complete properly on either legacy BIOS or UEFI systems
- Hardware changes such as adding or removing disks, or changes to disk identifiers (UUIDs) or mount points

This guide helps you diagnose your specific startup issue and provides instructions to restore access to your Solus system.

## Quick diagnosis

Identify your issue by selecting the scenario that matches your situation:

- [Solus does not appear in the startup menu](./solus-not-in-boot-menu.md)
- [I see an emergency shell or error message during startup](./emergency-shell-startup.mdx)
- [My system won't boot after an update](./system-not-working-after-update.mdx)
- [I changed hardware and now my system won't boot](./system-not-working-hardware-change.mdx)
