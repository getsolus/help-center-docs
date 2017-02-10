---
title: Disks
---
# Disks

Solus provides multiple ways you can install onto your system.

1. Solus can take up the entire drive.
2. You can install Solus next to your existing operating system, such as Windows. *If you have multiple operating systems 
installed, we will choose the largest option.*
3. You can manually configure your system. This is only recommend for advanced users which may desire to have a 
dedicated `/home` partition. Note that if you manually configure your system, you will need to restart the Installer for those 
changes to apply appropriately.

Alongside these options, we also provide the ability to use full-disk encryption. For the obvious reason of it being full-disk, this 
assumes you are installing Solus onto the entire drive.


## UEFI

If you are using a system with UEFI, you may need to create a EFI System Partition, also referred to as an ESP. This is not necessary if 
you are enabling Solus to install onto the entire disk.

To create an EFI System Partition, open up GParted and create a FAT32 partition that is 512MB in size. Next, right-click on the partition and click 
Manage Flags. On the Manage Flags section, enable the `boot` flag.

Note: Your disk is also required to be GPT formatted.