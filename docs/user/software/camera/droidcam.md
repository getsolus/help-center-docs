---
title: DroidCam
summary: Quick Start guide to DroidCam on Solus
---

# DroidCam

[DroidCam](https://www.dev47apps.com/) turns your phone or tablet into a webcam for your computer. You can use it with video conferencing programs like Zoom, MS Teams, and Skype.

## Before Installation

DroidCam relies on the v4l2loopback kernel module. So you need to install `v4l2loopback` or `v4l2loopback-current` depending of which kernel is installed on your computer. To find out which kernel is installed, run:

```bash
uname -r
```

This should return a version which ends in `.current` or `.lts`.

- If you are running the "current" kernel, install `v4l2loopback-current`:

```bash
sudo eopkg install v4l2loopback-current
```

- If you are running the "lts" kernel, install `v4l2loopback`:

```bash
sudo eopkg install v4l2loopback
```

After the kernel module is installed, continue to installation steps.

## Installation

DroidCam can be installed from Software Center or via terminal :

```bash
sudo eopkg it droidcam
```

Once DroidCam is installed, reboot your system. Now DroidCam is ready to use.

## Usage

To start pairing your phone or tablet with your computer, you can follow steps provided by this [guide](https://www.dev47apps.com/droidcam/connect/) from the DroidCam developer.
