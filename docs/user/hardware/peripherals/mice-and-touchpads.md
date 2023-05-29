---
title: Mice and Touchpads
summary: Guide to using and configuring input devices on Solus
---

# Mice and Touchpads

## Asus, Logitech, Roccat, SteelSeries

TODO: Quick tutorial on installing `piper` with a screenshot. And point them at the official documentation.

## Razer

TODO: Quick tutorial on installing `polychromatic` with a screenshot. And point them at the official documentation.

## Synaptics

These instructions describe how to use the the synaptics driver instead of the default libinput driver to manage your touchpad. You might try this if:

- libinput doesn't allow for two-finger scrolling
- libinput doesn't supports edge scrolling or vice versa
- You want to take advantage of the extended configurability of the synaptics driver

**NOTE:** The synaptics driver will only be used for your touchpad and libinput will be used for all other input devices.

**NOTE:** That the synaptics driver is in maintenance mode and libinput is the preferred driver and also sees active development.

### Setup

To get started open up a terminal and install the synaptics driver.

```bash
sudo eopkg it xorg-driver-input-synaptics
```

Then, copy the default synaptics config file to the `/etc/` directory.

```bash
sudo cp /usr/share/X11/xorg.conf.d/50-synaptics.conf /etc/X11/xorg.conf.d/90-synaptics.conf
```

**NOTE:** The /etc/ directory has a higher priority over the default config location and will ensure the synaptics driver gets loaded first, additionally by copying to /etc/ first it will avoid a three-way merge issue if you wish the edit the config file directly.

Reboot your machine then verify the synaptics driver is in use:

```bash
cat /var/log/Xorg.0.log | grep "Using input driver 'synaptics' for"
```

If it returns a result, then success! The synaptics driver is in use instead of libinput for your Touchpad.

### Revert Configuration

If you wish to switch back to using libinput:

```
sudo rm /etc/X11/xorg.conf.d/90-synaptics.conf
sudo eopkg rm xorg-driver-input-synaptics
```
