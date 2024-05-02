---
title: Boot Management
summary: Guide to customizing the Solus boot process
---

# Boot Management

## clr-boot-manager

Solus leverages `clr-boot-manager` from the Clear Linux\* project to manage its boot process.
On legacy BIOS systems, `clr-boot-manager` will configure `GRUB2` to properly boot your system.  
On modern UEFI systems, `clr-boot-manager` will configure `systemd-boot` instead.  
This means that any time we want to modify the boot process, `clr-boot-manager` will be involved.  
Trying to modify the configurations manually may work temporarily, but will be overwritten eventually.

### Open the boot menu

By default, EFI installs will not show the boot menu and boot directly into Solus. By hitting space bar (repeatedly) during boot, the boot menu will appear (it may take a couple of goes to get the timing right).

### Displaying the boot menu by default every boot

The following command will set the timeout of the boot loader to five seconds so that it appears by default:

```bash
sudo clr-boot-manager set-timeout 5 && sudo clr-boot-manager update
```

### Adding kernel parameters

Kernel parameters can be appended to boot via creating a file for `clr-boot-manager` to use when updating kernels. For example, to add `nomodeset` to boot options, you would create a file in `/etc/kernel/cmdline.d` (as sudo):

```bash
sudo mkdir -p /etc/kernel/cmdline.d
echo 'nomodeset' | sudo tee /etc/kernel/cmdline.d/40_nomodeset.conf
```

The settings should be on one line with a space between them. You will need to run `sudo clr-boot-manager update` for the options to be appended to boot.

## Kernels

### Installing a different kernel branch

By default, Solus utilizes our linux-current kernel. The separate kernel branches can be added by installing the `linux-lts` or `linux-current` packages. Note that each kernel has separate module packages, so if you use these kernel modules, you'll need to install the one related to the kernel you are adding.

| linux-lts               | linux-current                   |
| ----------------------- | ------------------------------- |
| bbswitch                | bbswitch-current                |
| broadcom-sta            | broadcom-sta-current            |
| linux-lts-headers       | linux-current-headers           |
| nvidia-470-glx-driver   | nvidia-470-glx-driver-current   |
| nvidia-beta-driver      | nvidia-beta-driver-current      |
| nvidia-developer-driver | nvidia-developer-driver-current |
| nvidia-glx-driver       | nvidia-glx-driver-current       |
| openrazer               | openrazer-current               |
| v4l2loopback            | v4l2loopback-current            |
| vhba-module             | vhba-module-current             |
| virtualbox              | virtualbox-current              |

### Change the default kernel branch to boot

After successfully booting into a kernel from the `current` or `lts` branches running `sudo clr-boot-manager update` will make the booted kernel branch the default boot option going forward.
