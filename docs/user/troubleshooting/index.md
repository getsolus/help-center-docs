---
title: Troubleshooting
summary: Basic troubleshooting for some of the most common Solus problems.
date: 2022-12-16
---

# Troubleshooting Common Issues

This guide provides some basic troubleshooting instructions for when you have an issue in Solus. Before reporting bugs, it is important to validate your Solus installation doesn't suffer from missing files or disk corruption. Also ensuring the system is fully up to date as the bug may have already been fixed.

First of all performa a full system update `sudo eopkg up` (or via the Software Center). Then validate that packages are installed correctly and aren't missing files: (run this once, it will take some time and may not show much output)

``` bash
sudo eopkg check | grep Broken | awk '{print $4}' | xargs sudo eopkg it --reinstall
```

Then reboot the system to make sure the issue still persists on a clean system.



## Issues with Software Center or eopkg

### Can't install updates

If eopkg is interrupted, the database may become corrupted. When updating you will see a message similar to:

`30973, 'BDB0087 DB_RUNRECOVERY: Fatal error, run database recovery - BDB0061 PANIC: Invalid argument'`

To run database recovery, run `sudo eopkg rdb` in the terminal and then updates should function correctly.

### eopkg check shows broken packages

`eopkg check` checks the sha256sums of files on disk versus what was originally installed by the original .eopkg file. In some cases (for example .pyc files), these files will be modified in the normal operation of Solus. If after reinstalling a package it remains broken, then it's likely nothing to worry about (there are no exceptions made in `eopkg check` for files that are expected to change from use). When reinstalling broken packages, (per above) it only needs to be run once.



## Updated system and having issues

### Boot into previous kernel

`clr-boot-manager` by default retains the latest installed kernel, plus the currently running kernel. This means that when you receive a kernel update, there are two kernels to boot into. Sometimes there are regressions that occur in the kernel, so you are able to boot into the previous kernel if the update has caused any hardware issues (for example failing to suspend when it worked previously). When booting via EFI, the boot menu can be shown by hitting space (repeatedly) during boot.

### Reverting updates

If booting into the previous kernel doesn't solve the issue, there may be an issue with the package updates. It is possible to [revert the updates](/docs/user/quick-start/package-management/history-and-rollback/) (this would also confirm that the issue is in the selected updates).

## Boot Failure

If Solus partially boots, you can generally get to a TTY using `Ctrl+Alt+F2` to login and be able to run commands just like using a terminal. This enables you to run some commands to identify or resolve the issue.

### Display manager won't start

A common cause of not being able to boot is due to installing the nvidia drivers, but not booting into the latest kernel (the only kernel which has the drivers installed). Also ensure you have the correct driver version installed for your kernel. You can check if you have booted into the latest kernel by comparing the installed package with the booted kernel (instructions for both kernels)

``` bash
eopkg info linux-lts | head -n2; uname -a
```

``` bash
eopkg info linux-current | head -n2; uname -a
```

If the kernel version and release don't match from lines 2 and 3 of the output, then you aren't booting into the latest kernel and this is the likely cause of X not loading (particularly if you just installed the drivers). A couple of common reasons are:

 - On a grub machine, a common cause for not booting the latest kernel is due to Solus not being the boot loader on the MBR. Make sure you are booting via the Solus boot loader (if possible), or update grub on the distro that own the boot loader, see [Legacy/BIOS installation](/docs/user/troubleshooting/installation-issues#legacy-bios-installation).

 - Another possibility is that the `ESP` has run out of space so the kernel cannot be copied over to it. You can debug why this isn't happening via `sudo CBM_DEBUG=1 clr-boot-manager update`. This will output all information on the process, where it may be failing, or that it is working correctly.

If these two steps fail, you can't revert the installation of the drivers via [History and Rollback](/docs/user/quick-start/package-management/history-and-rollback)

### No Solus boot loader

If the Solus boot loader is not functioning (this has been known to be broken by the odd update of a certain OS), the boot loader can be recreated via [Boot Rescue](/quick-start/troubleshooting/boot/)

## Long boot time

There are a number of factors that can contribute to a long boot time. The boot up messages can be viewed to look for any timeouts by looking at the timestamped journal.

``` bash
sudo journalctl -b
```

Notable commands to check the boot time are: `systemd-analyze` (note that the firmware time is prior to Solus boot, so outside of our control) and `systemd-analyze critical-chain`.

### Timeout on partition mount (90s)

If information about a device changes (UUID or mount path `/dev/sda`), this can cause systemd to time out for 90 seconds creating a long boot process. Most frequently this happens with the swap file which can be shared across distros. Most of the devices mounted on boot will appear in `/etc/fstab` or be a parameter in a file where configuring resume `cat /etc/kernel/cmdline.d/*`.

`cat /proc/cmdline` will show what parameters the kernel has booted with.

If the devices don't match up with what's listed in `ls /dev/disk/*/*` then it will cause a 90s timeout while it waits to see if it can be found. To fix this, you will need to remove the reference to the UUID or device path that no longer exists, or correct it to the new UUID label.
