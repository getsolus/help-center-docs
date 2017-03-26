+++
title = "Modifying Grub"
+++
# Modifying Grub

In this document, we walk over several scenarios where you may need to access, modify, or repair GRUB.

## Scenarios

### Multi-Booting

Multi-booting is when you have multiple operating systems on a single computing device, such as a desktop or a laptop. Also referred to as "dual-booting" when only having two operating systems on the same computing device.

#### Unable to access other OSes

There are instances where Solus or another operating system may be rendered inaccessible, such as system updates that result in an update Linux kernel. If you are using Solus as your primary operating system and no longer can access another operating system via GRUB (*or it simply doesn't show up in the menu*) then run `sudo update-grub` via Solus.

#### Unable to access Solus

If you are unable to access Solus after an update to it and you have multiple operating systems installed on your computing device, please go to the other operating systems and run `sudo update-grub`.

If these other operating systems are **not** Linux-based, such as Windows, please defer to the Solus Update Issues section.

### Solus Update Issues

There are some circumstances in which updating Solus could fail to update its GRUB. These issues primarily affect individuals running the Unstable repos and rarely affect the majority of users, but in the event you are unable to access Solus and it "owns" GRUB, then you will need to use the "chroot" (change root) method via a Live ISO (preferably of Solus) to fix your host Solus install.

**Requirements:**

1. A Live ISO of a Linux distribution booted on your system
2. A terminal in that Live ISO opened

**Steps:**

1. First we need to be root as the user. Type: `sudo su`
2. Next we make a directory where we will mount our local Solus system: `mkdir /target`
3. Now, using `lsblk`, determine the `/dev/sdX#` partition of the Solus system. We recommend checking the size of the partition listed and if it matches the size of your Solus install, using that. It will likely be something along the lines of `/dev/sdb#` or `/dev/sda#`.
4. Once found, replace the "sdX#" in the following command with the partition and mount to the target directory we created: `mount /dev/sdX# /target`
5. Next we will mount several other directories:

``` bash
mount --bind /proc /target/proc
mount --bind /dev /target/dev
mount --bind /sys /target/sys
```

6. Assuming all goes well, you should be able to do: `chroot /target`
7. Once in the chroot, run `sudo clr-boot-manager update`.
