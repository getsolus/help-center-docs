+++
title = "iOS Support"
lastmod = "2018-07-19T08:40:00+01:00"
+++
# iOS Support

Historically, iOS support on Linux has been quirky and typically done via partial implementations, such as [libimobiledevice](https://www.libimobiledevice.org/) and [libgpod](http://www.gtkpod.org/libgpod/). As software that Solus provides 
leverages these implementations, it is likely that if you have an Apple device running an iOS version newer than 4.3.x, you will not be able to utilize it for the synchronizing of content such as music and video.

## Checking Compatibility 

### Rhythmbox 

You can check if your device is capable of synchronization of content such as music and video by using the Rhythmbox music player. If your iOS device does not appear in the left sidepane, your device is likely not supported.

### Advanced 

You can further check by:

1. Installing `libideviceactivation` via the Software Center or running `sudo eopkg install libideviceactivation`
2. Rebooting.
3. Running the following command: `sudo ideviceinfo -q com.apple.mobile.iTunes -k DBVersion` **while your iOS device is plugged in**.

What this command does is query the device to obtain the version of its database. If the version is **greater than 4**, your device is not capable of synchronizing music and video. You may notice it appear in Files / Nautilus as "Documents of DeviceName", however this typically only provides a limited set of data from applications.

## Mounting in Nautilus 

You can attempt mounting in Nautilus by first running `systemctl start usbmuxd` then `imount` (without sudo). If it's successful, it will show up as "DeviceName" and you'll have access to content such as music, photos, etc.

**Note:** You may need to restart after installing libideviceactivation before imount works.
