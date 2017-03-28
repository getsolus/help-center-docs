+++
title = "Boot Rescue"
aliases = ["/articles/configuration/modifying-grub/"]
+++
# Boot Rescue

In this document, we will walk through restoring the ability to boot Solus.

The inability to boot Solus can be attributed to various issues, such as:

- Multi-booting with an other operating system that "owns" GRUB and fails to show Solus after an upgrade of Solus is performed.
- Upgrades, such as to the kernel, that may not have applied correctly. In which case this could affect "legacy boot" (non-UEFI) or UEFI systems.

## Multi-Booting

Multi-booting is when you have multiple operating systems on the same device. Also referred to as "dual-booting" when only having two operating systems on the same device.

The inability to access Solus in a multi-boot scenario typically applies to "legacy boot" (non-UEFI), where the other operating system owns GRUB, which is used booting itself and Solus. This can be resolved by accessing the other operating system and running `sudo update-grub`.

## Incorrectly Applied Updates

In the case that updates have not been applied correctly by the system or the updates were interrupted, it may be possible to boot rescue the Solus system. To do so, you will need:

1. A Live ISO of Solus booted on your system
2. A terminal in that Live ISO opened

### Mounting your system

Whether you're using GRUB or UEFI, you will need to mount your Solus root (`/`) partition as the first step of performing a boot rescue. This is typically your primary partition, formatted as the filesystem type `ext4`.

1. First we need to be root as the user. Type: `sudo su`
2. Next we make a directory where we will mount our local Solus system: `mkdir /target`
3. Now, using `lsblk`, determine the `/dev/sdX#` partition of the Solus system. We recommend checking the size of the partition listed and if it matches the size of your Solus install, use that. It will likely be something along the lines of `/dev/sdb#` or `/dev/sda#`.
4. Once found, replace the "sdX#" in the following command with the partition and mount to the target directory we created: `mount /dev/sdX# /target`

#### UEFI

If your system uses UEFI as opposed to GRUB, you will also need to mount your EFI System Partition, otherwise referred to as ESP. If you followed our [UEFI guide](/articles/installation/disks) during installation of Solus, then in all likelihood your ESP will be about 500mb in size. If you're unsure of the partition, run the following, replacing X with the same letter during your mounting of your root file system, minus the number:

```bash
fdisk -o Device,Size,Type -l /dev/sdX
```

Your output may look something similiar to:

``` bash
Device       Size Type
/dev/sda1    450M Windows recovery environment
/dev/sda2     99M EFI System
/dev/sda3     16M Microsoft reserved
/dev/sda4  136.1G Microsoft basic data
/dev/sda5    7.8G Linux swap
/dev/sda6   78.6G Linux filesystem
/dev/sda7    537M EFI System
```

Notice we have `/dev/sda7` as the Device with the `EFI System` type and roughly 500mb in size. This is the partition we will be mounting.

With our ESP device known, let's go ahead and mount it, replacing `sdX#` in the case below with our partition.

``` bash
mount /dev/sdX# /target/boot/efi
```

### Chrooting to your Solus system

To access your system and perform boot rescue, you will need to mount specific directories from the host system (in this case, our Live ISO), to our Solus system, and then chroot (change root) to the Solus system.

First run the following commands:


``` bash
mount --bind /proc /target/proc
mount --bind /dev /target/dev
mount --bind /sys /target/sys
```

Assuming all goes well, you should now be able to chroot into your Solus system by doing `chroot /target`

Once in the chroot, run the following command, which will generate the necessary GRUB configuration files, EFI loader files, etc.

```
sudo clr-boot-manager update
```

After this, you should exit your chroot with `exit` then reboot your system. In the event you are still unable to access Solus, please [contact us](/help-center/contact/).