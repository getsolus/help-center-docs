---
title: Add a different kernel branch
summary: Install and switch between kernel branches in Solus.
---

Solus offers two kernel types: the current kernel (`linux-current`) and the LTS (Long-Term Support) kernel (`linux-lts`).

By default, Solus uses the `linux-current` kernel. You can switch between kernel branches at any time.

To install and switch to a different kernel branch, follow these steps:

1. Install the desired kernel branch:

   - Current kernel

     ```
	  sudo eopkg install linux-current
	  ```

   - LTS kernel
	 
	  ```
	  sudo eopkg install linux-lts
	  ```

1. Install the necessary kernel modules of the kernel branch you want to try.

   Each kernel branch has its own set of module packages. If you use hardware or features that require specific kernel modules (for example, NVIDIA graphics cards or VirtualBox), you must also install the corresponding module package for the new kernel branch.

   The following table lists the kernel modules of each branch:

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
   | rtl8852bu               | rtl8852bu-current               |
   | v4l2loopback            | v4l2loopback-current            |
   | vhba-module             | vhba-module-current             |
   | virtualbox              | virtualbox-current              |
   | xone                    | xone-current                    |

1. Restart your computer.

1. Select the new kernel branch from the boot menu when your computer restarts.

   :::warning Important

   On systems with UEFI installations, the boot menu doesn't appear by default.
   
   To display the boot menu, press the <kbd>Spacebar</kbd> key repeatedly as your computer starts.

   :::

1. After you successfully boot with the new kernel, set it as the default to ensure Solus uses it for future startups:

   ```
   sudo clr-boot-manager update
   ```