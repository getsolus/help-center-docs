+++
title = "Samba file sharing"
lastmod = "2018-04-01T12:00:00+02:00"
aliases = ["/articles/software/samba/en/"]
+++

# Samba file sharing

Samba is the standard Windows interoperability suite of programs for Linux and Unix. Among other things, it allows Linux and Windows users to share files via the Common Internet File System (CIFS) protocol.

## Overview

To enable convenient file-sharing on Solus, we maintain a solus-specific Samba configuration that supports samba usershare functionality.

### A brief introduction to the Samba usershare functionality

In order to support user-managed (as opposed to system-managed) shares, Samba provides the so-called usershare functionality, where users can define network shares without touching the traditional samba configuration file.

### GUI - configuring shares via nautilus-share

The default solus-configuration was written with the nautilus-share file manager plugin in mind.

This plugin allows the user to share folders in an easy and convenient way.

All the user needs to do is to install the nautilus-share package from the Software Center and enable the relevant samba services.

``` sudo eopkg install nautilus-share
    sudo systemctl enable --now smb
```

In order for the nautilus-share plugin to be loaded, the user will need to log out of the current desktop session and log back in to a new desktop session, at which point the nautilus-share plugin will be loaded and ready for use.

### CLI - using the net usershare command

(needs an example)

## Adding system shares via /etc/samba/smb.conf

The default solus-managed configuration is written such that it will attempt to include any configuration directives present in ```/etc/samba/smb.conf```.

By default, it supports $HOME shares and is configured to participate in the WORKGROUP windows workgroup.

### Example -- anynomous, read-only share

```
```

## Full manual control of samba (recommended only for experienced samba admins)

CAUTION: From this point on, this guide assumes that you know what you're doing.

Full manual control of samba can be achieved by bypassing the default solus samba configuration.

In the samba manual page (```man 8 samba```), it is shown how the compiled-in default config file can be overridden by specifying the ```--configfile=<somepath>``` flag during invocation of samba.

To use the traditional ```/etc/samba/smb.conf``` configuration file, edit the ```/etc/sysconfig/samba``` file to look like so:

```
## Path:           Network/Samba
## Description:    Samba process options
## Type:           string
## Default:        ""
## ServiceRestart: samba
SAMBAOPTIONS=""
## Type:           string
## Default:        ""
## ServiceRestart: smb
SMBDOPTIONS="--configfile=/etc/samba/smb.conf"
## Type:           string
## Default:        ""
## ServiceRestart: nmb
NMBDOPTIONS="--configfile=/etc/samba/smb.conf"
## Type:           string
## Default:        ""
## ServiceRestart: winbind
WINBINDOPTIONS=""

```

