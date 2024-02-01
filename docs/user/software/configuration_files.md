---
title: Configuration File Locations
summary: Location of configuration files on Solus
---

# Configuration File Locations

These are the standard locations on a Solus installation for software configuration files.

:::note

Solus uses a "stateless" system configuration. For what that means see the [Clear Linux Guide to Stateless Configuration](https://www.clearlinux.org/clear-linux-documentation/reference/manpages/stateless.7.html).

:::

| Type                                                                    | Applies to              | Location(s)                        | Priority |
| ----------------------------------------------------------------------- | ----------------------- | ---------------------------------- | -------- |
| **User**<br />- preserved during package updates                        | Per-user                | `~/.config/`<br />`~/`<br />others | Highest  |
| **System**<br />- preserved during package updates                      | All users on the system | `/etc/`                            |          |
| **OS provided** (aka defaults)<br />- **overridden** by package updates | All users on the system | `/usr/share/defaults/`             | Lowest   |

A user configuration file overrides the system configuration, and the system configuration overrides the OS provided configuration. If no user configuration is provided, then the system configuration is used, and if no system configuration is provided, then the OS provided configuration is used.

Different software expects user configuration files in different places. Many software packages store these under the `XDG_CONFIG_HOME` directory: `~/.config`. Some applications insist on placing them straight into the home directory. For example the `fish` shell uses the `~/.config/fish` directory to store user configurations, while the `bash` shell uses the `~/.bashrc` configuration file straight from the home directory. Consult documentation before customizing software to ensure you put things in the right place.

Some common configuration files:

| Software                                           | Configuration files                                     |
| -------------------------------------------------- | ------------------------------------------------------- |
| apcupsd                                            | `/etc/changeme`                                         |
| cups                                               | `/etc/cups/`                                            |
| [samba](/docs/user/software/networking/samba)      | `/etc/samba/smb.conf`<br />`/usr/share/defaults/samba/` |
| pam                                                | `/etc/pam.d/`<br />`/usr/share/defaults/etc/pam.d/`     |
| ssh                                                | `$HOME/.ssh/`<br />`/usr/share/defaults/etc/ssh/`       |
| ssl                                                | `/etc/ssl/`<br />`/usr/share/defaults/etc/ssl/`         |
| [tigervnc](/docs/user/software/networking/tigervnc) | `$HOME/.vnc/xstartup`                                   |
| [xrdp](/docs/user/software/networking/xrdp)         | `/etc/X11/Xwrapper.config`                              |
