---
title: Installation Issues
summary: Troubleshooting the Solus installation process
date: 2023-01-07
---

# Installation Issues

This article covers various issues that you may come across during installation of Solus.

## Can't install in EFI mode

The live ISO will attempt to install Solus by the same method it was booted. If it is unable to install the boot loader to the ESP, then it is likely booted in legacy mode. Ensure that the ISO has been created via a [supported method](/docs/user/installation/preparing-to-install) and that an EFI boot is selected from the boot options.

You can check whether the Solus ISO has booted in EFI mode by checking the for the existence of `ls /sys/firmware/efi` (if it's not found, then it's booted in legacy mode).

## I can't boot into Solus after installation!

There are some misunderstandings with how legacy and EFI boot works (usually implemented as UEFI). These sections cover the common misconceptions.

### Legacy/BIOS installation

Legacy installations on Solus use the Grub boot loader on an MBR disk. Only one boot loader can be used on an MBR disk, so if you haven't installed the Solus boot loader on the MBR, you will need to boot into the other OS and update grub prior to being able to boot Solus. This will also be required on each update of the kernel to ensure you're booting in the latest release.

### EFI

EFI allows for multiple boot loaders to be installed, which means you can boot the Solus boot loader directly. To ensure you are booting Solus you need to boot `Linux Boot Manager` from the EFI options. Common keys for bringing up a boot menu or the options during boot are hitting `Esc/F2/F9/F10/F11/F12` during boot (this differs per motherboard). If a boot loader for another OS is not listed in the menu, then it is not correctly registered (and therefore not installed correctly). You can make the Solus boot menu appear via [Displaying the Solus boot menu on boot](/docs/user/troubleshooting/boot-management#displaying-the-solus-boot-menu-by-default-on-boot) which should be able to boot windows (as it's registered with UEFI properly) as well as Solus, but not other systems.
