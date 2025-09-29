---
title: Remove old kernels
summary: Manage and remove old kernels to free up space on the boot partition.
---
You might need to remove old kernels for various reasons:

- The boot partition is too small for multiple kernel versions
- [`clr-boot-manager`](https://github.com/getsolus/clr-boot-manager) not automatically cleaning up old entries
- Custom or testing kernels installed that won't be automatically removed

If the boot partition of your system is full, updates might fail and you might not be able to install new kernels.

:::tip

Keep at least 2-3 versions: your current kernel and the most recent previous version as a backup.

:::

To remove old kernels, do the following:

1. Check which kernel you're currently running.

   ```bash
   uname -r
   ```

   This command displays the version of the currently running kernel. For example:
   
   ```
   6.6.8-290.current
   ```
   
   Make note of this version.

1. Mount the boot partition.

   ```bash
   sudo clr-boot-manager mount-boot
   ```

1. Check the partition's usage.

   ```bash
   sudo du -d1 -h /boot
   df -h
   ```

   The commands display the disk usage of directories in `/boot` in human-readable format, and show overall disk space usage including the boot partition.

1. List the installed kernels.

   ```bash
   sudo clr-boot-manager list-kernels
   ```

   The command shows the installed kernels. For example:

   ```
   com.solus-project.current.6.6.8-290
   com.solus-project.current.6.6.7-289
   com.solus-project.current.6.6.6-288
   ```

1. Remove the kernels you don't need.

   :::danger Warning
   
   Never remove the kernel your system is using. This is the version you noted in step 1.
   
   :::

   ```bash
   sudo clr-boot-manager remove-kernel <kernel-name>
   ```

   Replace `<kernel-name>` with the specific kernel version to remove. For example:

   ```bash
   sudo clr-boot-manager remove-kernel com.solus-project.current.6.6.6-288
   ```

1. Verify that space has been freed on the boot partition.

   ```bash
   df -h
   ```
