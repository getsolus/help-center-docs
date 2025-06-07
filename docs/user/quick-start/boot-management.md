---
title: Boot management
summary: Guide to customizing the Solus boot process
---

Solus uses `clr-boot-manager` from the Clear Linux project to handle all boot configuration. This tool automatically configures the appropriate boot loader based on your system type:

- Legacy BIOS systems: GRUB2
- Modern UEFI systems: `systemd-boot`

Because `clr-boot-manager` manages these configurations, any boot customizations must go through this tool rather than manual edits. If you try to modify the configurations manually, `clr-boot-manager` will overwrite your changes during the next system update.

## Access the boot menu

On systems with UEFI installations, the boot menu doesn't appear by default. To display the boot menu:

- Press the <kbd>Spacebar</kbd> key repeatedly as your computer starts. You may need several attempts to get the timing right.

## Display the boot menu by default

To make the boot menu appear automatically with a five-second timeout:

- Run the following command:

  ```bash
  sudo clr-boot-manager set-timeout 5 && sudo clr-boot-manager update
  ```

## Add kernel parameters

You can add kernel parameters by creating configuration files that `clr-boot-manager` uses when updating kernels. 

To add kernel parameters, do the following:

1. Create the configuration directory:

   ```bash
   sudo mkdir -p /etc/kernel/cmdline.d
   ```

1. Create a configuration file with your kernel parameter:

   ```bash
   echo 'parameter-name' | sudo tee /etc/kernel/cmdline.d/40_[description].conf
   ```

   For example, to add the `nomodeset` parameter:

   ```bash
   echo 'nomodeset' | sudo tee /etc/kernel/cmdline.d/40_nomodeset.conf
   ```

1. If you want to add multiple parameters, put them on one line with spaces between them in the configuration file. 

   For example:

   ```bash
   echo 'nomodeset quiet splash acpi=off' | sudo tee /etc/kernel/cmdline.d/40_multiple_params.conf
   ```

1. Apply the new kernel parameters:

   ```bash
   sudo clr-boot-manager update
   ```