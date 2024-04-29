---
title: Hardware
summary: Guide to using additional hardware on Solus
---

# Hardware

## Preinstalled drivers

The vast majority of hardware on Linux is supported by driver modules included with the Linux Kernel. This includes things like:

- CPUs (AMD, Intel)
- Networking
- PCI and PCI Express
- Storage
- USB

The purpose of this documentation is to help you find drivers for hardware that is not directly supported or requires additional configuration to be used on Solus.

### GPUs

The situations with GPU drivers on Linux is a little complicated. Each driver is actually broken up into multiple pieces:

- **Direct Rendering Manager (DRM)**
  This is the part of the driver provided by the Linux kernel and provides just enough functionality to allow other drivers to access the hardware and render to a connected display.
  Linux provides support for AMD, Intel, and NVIDIA GPUs in this basic capacity.
- **OpenGL driver**
  This part of the driver is needed for OpenGL applications. AMD and Intel are fully supported on Linux through Mesa, and do not need further drivers.
- **Vulkan driver**
  This part of the driver is needed for Vulkan applications. AMD and Intel are fully supported on Linux through Mesa, and do not need further drivers.
- **Xorg driver**
  In order to expose certain features to the Xorg Server, AMD and Intel have additional drivers which may be needed for things like variable refresh rate or multiple display support.

Unfortunately for NVIDIA users, the situation gets a little complicated. Linux has two sets of drivers for NVIDIA GPUs:

- **Nouveau**
  This is the open-source driver for NVIDIA GPUs. It consists of a DRM driver provided by the Linux kernel, OpenGL drivers (nvc0, nv50) from Mesa, and an Xorg driver (xorg-driver-video-nouveau).
  Device support for these drivers has historically lagged behind the NVIDIA proprietary drivers and likely will not support newer hardware and does not include Vulkan support.
  Performance of this driver also typically lags behind the proprietary drivers.
- **NVIDIA proprietary drivers**
  This is the closed-source driver provided directly by NVIDIA. It consists of a DRM driver module for the kernel, OpenGL and Vulkan drivers for rendering, and additional drivers for extended features of the hardware.
  Device support for these drivers is very good for newer hardware, but older devices will eventually become unsupported and require the Nouveau drivers instead.
  Performance of this driver is typically the best available and is therefore highly desirable to gamers and content creators.

## Proprietary drivers

Installing proprietary drivers may improve performance or certain features, however they are usually not necessary for normal daily usage. Solus provides a utility for installing drivers for detected hardware.

![DoFlicky Screenshot](doflicky.jpg)

If there are proprietary drivers that can be installed, they will show up in the box below the description. You can click the item you wish to install and click Install. If you are installing NVIDIA drivers, you may find it to be desirable to install the 32-bit driver as well, in the event you wish to use Steam or Wine.

**Note:** A reboot will be required to use the newly installed driver.

### Supported drivers

| Vendor      | Drivers          |
| ----------- | ---------------- |
| ASUS        | piper            |
| Broadcom    | broadcom-sta     |
| Logitech    | piper            |
| NVIDIA      | 470, main series |
| Razer       | openrazer        |
| Roccat      | piper            |
| SteelSeries | piper            |
| VMware      | open-vm-tools    |
| Xbox        | xone             |
