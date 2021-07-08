+++
title = "xrdp"
lastmod = "2020-05-14T08:53:00-07:00"
+++
# xrdp

xrdp provides a graphical login to remote machines using Microsoft Remote Desktop Protocol (RDP). xrdp accepts connections from a variety of RDP clients: FreeRDP, rdesktop, NeutrinoRDP and Microsoft Remote Desktop Client (for Windows, Mac OS, iOS and Android).

## Installation

Solus has an xrdp integration package for each Desktop Environment that will install the correct configuration for that DE. Install the respective package for your DE.

- `xrdp-budgie-integration`
- `xrdp-gnome-integration`
- `xrdp-mate-integration`
- `xrdp-plasma-integration`

This package will also install the `xrdp` and `xorgxrdp` packages.

## Configuration

The following file needs to be created, if it doesn't already exist, with the following contents.

```bash
❯ cat /etc/X11/Xwrapper.config

allowed_users=anybody
```

## Start / Stop xrdp

Please note that xrdp does NOT run on system boot by default. It needs to be manually started/configured to start automatically:

``` bash
# Start xrdp manually
sudo systemctl start xrdp

# Configure xrdp to start automatically on each boot and immediately start the service
sudo systemctl enable --now xrdp

# Check whether xrdp is running
sudo systemctl status xrdp

# Restart xrdp manually
sudo systemctl restart xrdp

# Stop xrdp manually
sudo systemctl stop xrdp

# Configure xrdp to not start automatically on each boot and immediately stop the service
sudo systemctl disable --now xrdp
```
