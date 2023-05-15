+++
title = "How to use the synaptics driver for your TouchPad"
lastmod = "2023-05-15T13:48:28-05:00"
+++

# How to use the synaptics driver for your TouchPad

This article describes how to use the the synaptics driver instead of the default libinput driver to manage your touchpad. An example of when you'll want to do is; When libinput doesn't allow for two-finger scrolling and only supports edge scrolling or vice versa; Or when you want to take advantage of the extended configurability of the synaptics driver.

Note that synaptics driver will only be used for your touchpad and libinput will be used for all other input devices.

Note also that the synaptics driver is in maintenance mode and libinput is the preferred driver and also sees active development.

To get started open up a terminal and install the synaptics driver.
```
sudo eopkg it xorg-driver-input-synaptics
```

Then, copy the default synaptics config file to the `/etc/` directory.
```
sudo cp /usr/share/X11/xorg.conf.d/50-synaptics.conf /etc/X11/xorg.conf.d/90-synaptics.conf
```

<em>The /etc/ directory has a higher priority over the default config location and will ensure the synaptics driver gets loaded first, additionally by copying to /etc/ first it will avoid a three-way merge issue if you wish the edit the config file directly.</em>

Lastly, reboot your machine.

After rebooting to verify the synaptics driver is in use, run:
```
cat /var/log/Xorg.0.log | grep "Using input driver 'synaptics' for"
```
If it returns a result, then success! The synaptics driver is in use instead of libinput for your Touchpad.

If you wish to switch back to using libinput:
```
sudo rm /etc/X11/xorg.conf.d/90-synaptics.conf 
sudo eopkg rm xorg-driver-input-synaptics 
```

