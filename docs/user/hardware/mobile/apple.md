---
title: Apple
summary: Quick guide to working with Apple devices on Solus
---

# Apple

Solus provides iOS support via [libimobiledevice](https://www.libimobiledevice.org/) and [libgpod](https://github.com/fadingred/libgpod/).

Please note that the below mentioned installation instructions do not guarantee functional iOS features such as content synchronization (music) or file copying.

This support can be exposed via your file manager (such as Nautilus) upon connecting your iOS device or music players such as Rhythmbox.

## Installation

To ensure you have the required software for iOS support, install `libideviceactivation` via the Software Center or terminal:

```bash
sudo eopkg install libideviceactivation
```

**NOTE:** It is recommended that you reboot your system after this installation.

## File Management

TODO: Tutorial on file access and syncing
