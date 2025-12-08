---
title: Graphics cards
summary: Guide to using graphics cards on Solus.
---

Most AMD and Intel graphics cards work automatically on Solus. If your system displays correctly and applications run well, you usually do not need to install anything else.

Solus has an open-source driver for NVIDIA cards (Nouveau) which is appropriate for basic usage. If you want to use your NVIDIA card to play games or for other compute tasks, install the proprietary NVIDIA driver for best performance.

## Overview of GPU drivers in Linux

Linux graphics drivers are split into components that do different jobs:

| Component                      | Description                                                                                                                           |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| Direct rendering manager (DRM) | Kernel component that controls the hardware. Provides a low-level interface for rendering and display                                 |
| User-space renderers           | OpenGL and Vulkan libraries that applications use to render. The Mesa project provides OpenGL and Vulkan for most Intel and AMD GPUs. |
| Display server drivers         | Exposes certain features to the X.Org server. Wayland compositors typically use DRM and Mesa directly.                                |
