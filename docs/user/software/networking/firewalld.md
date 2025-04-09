---
title: Firewalld
summary: A quick start guide to using firewalld on Solus
---

# Firewalld

firewalld provides a dynamically managed firewall with support for network or firewall zones to define the trust level of network connections or interfaces. It has support for IPv4, IPv6 firewall settings, and for Ethernet bridges, and a separation of runtime and permanent configuration options. It also provides an interface for services or applications to add `iptables` and `nftables` rules directly.

## Install firewalld

To install firewalld on Solus, search for "firewalld" in GNOME Software or KDE Discover, or use the command line:

```bash
sudo eopkg install firewalld
```

There are two optional packages that you can choose to install, as well:

- `firewalld-config`: A graphical configuration program to configure your firewall setup.
- `firewalld-applet`: A system tray icon to show the current firewall status. It works with any desktop that supports a system tray via StatusNotifier.

## Configure firewalld

As of $SYNC_DATE, our firewalld package is [Stateless](/docs/user/software/configuration_files). These are the default configuration file locations for firewalld:

| Package          | Default Location                                   |
|------------------|----------------------------------------------------|
| firewalld        | `/usr/share/defaults/firewalld/firewalld.conf` |
| firewalld-applet | `/usr/share/defaults/firewall/applet.conf`     |

### Graphical tool

The graphical configuration tool, if installed, only modifies the runtime configuration. After ensuring that your changes work, save the configuration to the permanent configuration by clicking "Options" in the top menu bar, and clicking "Runtime to Permanent".

### Manual configuration

To modify the firewall configuration manually, copy the default file to `/etc/firewalld/firewalld.conf` or `/etc/firewall/applet.conf`, and make your changes. If you want to use a graphical tool, install the `firewalld-config` package, and search for Firewall in your desktop's applications menu, or run `firewall-config` from the command line.

### Start firewalld

The firewalld service starts automatically on system boot.

If installed, the firewall applet will start automatically when logging in to your desktop.
