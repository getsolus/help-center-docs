---
title: Hardware
summary: Guide to using additional hardware on Solus
---

# Hardware

## Preinstalled Drivers

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
  This is the part of the driver provided by the Linux Kernel and provides just enough functionality to allow other drivers to access the hardware and render to a connected display.  
  Linux provides support for AMD, Intel, and Nvidia GPUs in this basic capacity.
- **OpenGL Driver**  
  This part of the driver is needed for OpenGL applications. AMD and Intel are fully supported on Linux through Mesa, and do not need further drivers.
- **Vulkan Driver**  
  This part of the driver is needed for Vulkan applications. AMD and Intel are fully supported on Linux through Mesa, and do not need further drivers.
- **Xorg Driver**  
  In order to expose certain features to the Xorg Server, AMD and Intel have additional drivers which may be needed for things like variable refresh rate or multiple display support.

Unfortunately for Nvidia users, the situation gets a little complicate. Linux has two sets of drivers for Nvidia GPUs:

- **Nouveau**  
  This is the open-source driver for Nvidia GPUs. It consists of a DRM Driver provided by the Linux Kernel, OpenGL Drivers (nvc0, nv50) from Mesa, and an Xorg Driver (xorg-driver-video-nouveau).  
  Device support for these drivers has historically lagged behind the Nvidia proprietary drivers and likely will not support newer hardware and does not include Vulkan support.  
  Performance of this driver also typically lags behind the proprietary drivers.
- **Nvidia Proprietary Drivers**
  This is the closed-source driver provided directly from Nvidia. It consists of a DRM driver module for the kernel, OpenGL and Vulkan drivers for rendering, and additional drivers for extended features of the hardware.  
  Device support for these drivers is very good for newer hardware, but older devices will eventually become unsupported and require the Nouveau drivers instead.  
  Performance of this driver is typically the best available and is therefore highly desirable to gamers and content creators.

## Proprietary Drivers

Installing proprietary drivers may improve performance or certain features, however they are usually not necessary for normal daily usage. Solus provides a utility for installing drivers for detected hardware.

![DoFlicky Screenshot](doflicky.jpg)

If there are proprietary drivers that can be installed, they will show up in the box below the description. You can click the item you wish to install and click Install. If you are installing NVIDIA drivers, you may find it to be desirable to install the 32-bit driver as well, in the event you wish to use Steam or WINE.

**Note:** A reboot will be required to use the newly installed driver.

### Supported Drivers

| Vendor      | Drivers                     |
| ----------- | --------------------------- |
| Asus        | piper                       |
| Broadcom    | broadcom-sta                |
| Logitech    | piper                       |
| Nvidia      | 390, 370, Stable, Developer |
| Razer       | openrazer                   |
| Roccat      | piper                       |
| SteelSeries | piper                       |
| VMWare      | open-vm-tools               |
| XBox        | xone                        |
