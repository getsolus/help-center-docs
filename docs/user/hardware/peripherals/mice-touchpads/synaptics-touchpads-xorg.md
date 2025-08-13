---
title: Synaptics touchpads (X.Org)
summary: Configure synaptics touchpads on systems that use X.Org.
---

:::warning[Important]

- If you are using a Wayland session, ignore this article. This guide is only for systems that still use X.org sessions.

- The Synaptics driver described in this article (`xorg-driver-input-synaptics`) is no longer developed. Use at your own risk.

:::

By default, Solus supports Synaptics touchpads (usng libinput). However, in systems that use X.org, libinput might not:

- allow two-finger scrolling.
- support edge scrolling.

You can install `xorg-driver-input-synaptics` (legacy Synaptics driver) to fix those issues. Solus uses the legacy Synaptics driver for your touchpad only. All other devices still use libinput.

## Install the Synaptics driver for X.org sessions

Configure the legacy Synaptics driver:

1. Install `xorg-driver-input-synaptics` through Discover (Solus Plasma), GNOME Software, or by running the following command:

   ```bash
   sudo eopkg it xorg-driver-input-synaptics
   ```

2. Copy the default synaptics config file to the `/etc/` directory.

   ```bash
   sudo cp /usr/share/X11/xorg.conf.d/50-synaptics.conf /etc/X11/xorg.conf.d/90-synaptics.conf
   ```

   Copying the file to `/etc/` ensures the synaptics driver gets loaded first and avoids a three-way merge issue if you wish the edit the config file directly.

3. Restart your computer.
4. Verify the synaptics driver is in use by running the following command

   ```bash
   cat /var/log/Xorg.0.log | grep "Using input driver 'synaptics' for"
   ```

   If the command displays a message like the following one, the legacy Synaptics driver is installed correctly.

   ```bash
   [    15.123] (II) Using input driver 'synaptics' for 'SynPS/2 Synaptics TouchPad'
   ```


## Remove the Synaptics driver for X.org sessions

- To remove the Synaptics driver and go back to libinput, run the following commands:

  ```bash
  sudo rm /etc/X11/xorg.conf.d/90-synaptics.conf
  sudo eopkg rm xorg-driver-input-synaptics
  ```
