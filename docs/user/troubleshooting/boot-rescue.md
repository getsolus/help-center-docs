---
title: Boot Rescue
summary: Troubleshooting the boot process for Solus
date: 2023-01-06
---

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

#### Encrypted Systems

If you use LUKS-based encryption, the process will involve decrypting your LUKS partition and mounting it to the correct location. To do this, note the sda / sdb device from step #3 and follow the steps below:

1. Decrypt the drive by running `cryptsetup luksOpen /dev/sdX# decrypted`, replacing `X#` with the partition from step #3, and enter your password when prompted.
2. Double check the output of `lsblk`. You should now see under "decrypted" `SolusSystem-Swap` and `SolusSystem-Root`.
3. Mount `SolusSystem-Root` by running `mount /dev/mapper/SolusSystem-Root /target`

Your lsblk output should be similar to the one listed below:

``` bash
NAME                   MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINT
loop0                    7:0    0   1.3G  1 loop  /run/initramfs/squashfs
loop1                    7:1    0   6.2G  1 loop  /run/rootfsbase
loop2                    7:2    0   6.2G  1 loop  
└─live-base            253:0    0   6.2G  1 dm    
sda                      8:0    0 238.5G  0 disk  
├─sda1                   8:1    0 488.3M  0 part  
└─sda2                   8:2    0   238G  0 part  
  └─decrypted          253:1    0   238G  0 crypt 
    ├─SolusSystem-Swap 253:2    0   3.7G  0 lvm   
    └─SolusSystem-Root 253:3    0 234.3G  0 lvm   
sdb                      8:16   1   7.3G  0 disk  
├─sdb1                   8:17   1   1.4G  0 part  /run/initramfs/live
└─sdb2                   8:18   1    40M  0 part
```

#### UEFI

If your system uses UEFI as opposed to GRUB, you will also need to mount your EFI System Partition, otherwise referred to as ESP. If you followed our [UEFI guide](/docs/user/quick-start/installation/disks) during installation of Solus, then in all likelihood your ESP will be about 500mb in size. If you're unsure of the partition, run the following, replacing X with the same letter during your mounting of your root file system, minus the number:

```bash
fdisk -o Device,Size,Type -l /dev/sdX
```

Your output may look something similar to:

``` bash
Device       Size Type
/dev/sda1    512M EFI System
/dev/sda2  111.3G Linux filesystem
```

Notice we have `/dev/sda1` as the Device with the `EFI System` type and roughly 500mb in size. This is the partition we will be mounting.

With our ESP device known, let's go ahead and mount it, replacing `sdX#` in the case below with our partition.

``` bash
mount /dev/sdX# /target/boot
```

### Chrooting to your Solus system

To access your system and perform boot rescue, you will need to mount specific directories from the host system (in this case, our Live ISO), to our Solus system, and then chroot (change root) to the Solus system.

First run the following commands:


``` bash
mount --types proc /proc /target/proc
mount --rbind /dev /target/dev
mount --rbind /sys /target/sys
mount --make-rslave /target/dev
mount --make-rslave /target/sys
```

Assuming all goes well, you should now be able to chroot into your Solus system by doing `chroot /target`.

### Networking

To validate a working network connection (assuming a network connection is available in your live image), you can run `ping google.com` in the chrooted environment. If you get responses from `google.com`, you have a successful connection to the Internet. If you do not, try the following:

1. Exit the chroot by typing `exit`
2. Run `cp /etc/resolv.conf /target/etc/`
3. Chroot back into `/target` by running `chroot /target` again.
4. Retry networking.

### Repairing Packages

In the event you had an incomplete upgrade, try the following commands:

1. `sudo eopkg up`
2. `sudo eopkg check | grep Broken | awk '{print $4}' | xargs sudo eopkg it --reinstall`
3. Try reverting the latest package transaction (this should only be done if the first two steps, followed by the "Re-run System-Wide Configuration Triggers", failed to produce a successful bootup). See [our documentation on history and rollback](/docs/user/package-management/history-and-rollback) for more information, followed by re-applying your updates by running `sudo eopkg up`.

### Re-run System-Wide Configuration Triggers

In the chroot environment, run the following command which will perform various configuration triggers to update your icon cache, update GRUB and EFI configuration, re-compile settings, and more.

```
sudo usysconf run -f
```

After this, you should exit your chroot with `exit` then reboot your system. In the event you are still unable to access Solus, please [contact us](/docs/user/contributing/getting-involved).

### Unmounting your system

In case further partition modifications are required, there's a series of steps that must be followed.

If you are still chrooted you have to exit the chroot environment by pressing `Ctrl` + `D`.

Then proceed with unmounting the filesystem.

``` bash
umount -R /target
```

In case of having a LUKS-based encryption you'll have to deactivate your logical volumes plus volume groups and then close your LUKS partition.

``` bash
lvchange -a n /dev/SolusSystem/Swap # `-a n` means `active: no`
lvchange -a n /dev/SolusSystem/Root
vgchange -a n SolusSystem
cryptsetup luksClose decrypted
```
