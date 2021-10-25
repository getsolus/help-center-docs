+++
title = "Boot Management"
lastmod = "2021-10-25T18:43:28+02:00"
+++
# Boot Management

This article will walk you through various ways of managing the booting of your system.

## Bring up the boot menu with no timeout set?

By default, EFI installs will not show the boot menu and boot directly into Solus. By hitting space bar (repeatedly) during boot, the boot menu will appear (it may take a couple of goes to get the timing right).

## Appending kernel parameters to Solus boot

Kernel parameters can be appended to boot via creating a file for `clr-boot-manager` to use when updating kernels. For example, to add `nomodeset` to boot options, you would create a file in `/etc/kernel/cmdline.d` (as sudo):

```
echo 'nomodeset' | sudo tee /etc/kernel/cmdline.d/40_nomodeset.conf
```

The settings should be on one line with a space between them. You will need to run `sudo clr-boot-manager update` for the options to be appended to boot.

## Displaying the Solus boot menu by default on boot

The following command will set the timeout of the boot loader so that it appears by default.

```
sudo clr-boot-manager set-timeout 5 && sudo clr-boot-manager update
```

## Installing an alternative kernel

By default, Solus utilizes our linux-current kernel. The separate kernel branches can be added by installing the `linux-lts` or `linux-current` packages. Note that each kernel has separate module packages, so if you use these kernel modules, you'll need to install the one related to the kernel you are adding.

|linux-lts               |linux-current                   |
|------------------------|--------------------------------|
|bbswitch                |bbswitch-current                |
|broadcom-sta            |broadcom-sta-current            |
|linux-lts-headers       |linux-current-headers           |
|nvidia-390-glx-driver   |nvidia-390-glx-driver-current   |
|nvidia-beta-driver      |nvidia-beta-driver-current      |
|nvidia-developer-driver |nvidia-developer-driver-current |
|nvidia-glx-driver       |nvidia-glx-driver-current       |
|openrazer               |openrazer-current               |
|v4l2loopback            |v4l2loopback-current            |
|vhba-module             |vhba-module-current             |

### Change the default kernel branch to boot

After successfully booting into a kernel from the `current` or `lts` branches running `sudo clr-boot-manager update` will make the booted kernel branch the default boot option going forward.
