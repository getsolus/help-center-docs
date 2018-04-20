+++
title = "Samba File Sharing"
lastmod = "2018-04-20T22:10:16+02:00"
+++
# Samba file sharing

Samba is the standard Windows interoperability suite of programs for Linux and Unix. Among other things, it allows Linux and Windows users to share files via the Common Internet File System (CIFS) protocol.

## Overview

To enable convenient file-sharing on Solus, we maintain a Solus-specific Samba configuration that supports Samba usershare functionality out-of-the-box.

### A brief introduction to the Samba usershare functionality

In order to support user-managed (as opposed to system-managed) shares, Samba provides the so-called *usershare* functionality, where users can define network shares without touching the traditional Samba configuration file.

### GUI - configuring shares via nautilus-share/caja-share

The default Solus configuration was written with the `nautilus-share` (GNOME/Budige) and `caja-share` (MATE) file manager plugin in mind. This plugin allows the user to share folders in an easy and convenient way.

All the user needs to do is to install either the `nautilus-share` or `caja-extensions` package from the Software Center and enable the relevant Samba services.

``` bash
sudo eopkg install nautilus-share
sudo systemctl enable --now smb
```

In order for the `nautilus-share`/`caja-share` plugin to be loaded, the user will need to log out of the current desktop session and log back in to a new desktop session, at which point the plugin will be ready for use.

Simply right-clicking a folder will now show an option to share it.

### CLI - using the net usershare command

Excerpt from the `man smb.conf` manual page:

```
net usershare add sharename path [comment] [acl] [guest_ok=[y|n]]
    To create or modify (overwrite) a user defined share.

net usershare delete sharename
    To delete a user defined share.

net usershare list wildcard-sharename
    To list user defined shares.

net usershare info wildcard-sharename
    To print information about user defined shares.
```

## Adding system shares via /etc/samba/smb.conf

The default Solus-managed configuration is written such that it will attempt to include any configuration directives present in `/etc/samba/smb.conf`.

By default, the Solus-managed configuration enables *$HOME* shares and is configured to participate in the WORKGROUP windows workgroup.

**CAUTION:** *From this point on, it is assumed that the user is familiar with the Samba documentation, including `man smb.conf`, and that the user has a basic understanding of Linux filesystem permissions.*

### Example -- anonymous, read-write share outside of *$HOME*

``` ini
# Contents of /etc/samba/smb.conf
#   if ^^ exists, it is automatically loaded by the Solus-controlled default config
#   residing in /usr/share/defaults/samba/smb.conf 
# 
# Create a "//servername/someshare" share where anonymous users have read and write access
#
# ';' denotes a comment, which is typically used for config statements
[other]
path = /mnt/someshare
# allow anonymous access
guest ok = Yes
# ONLY allow anonymous access (don't allow both guest and system user access)
guest only = Yes
# allow write access
read only = No
# This is an example of how to limit access to the share to known IPs
;hosts deny = ALL
;hosts allow = 127.0.0.1 192.168.1.0/24
# share config end   
```

After adding a system-managed share like in the above example, run `sudo testparm` to check that the newly included share does not contain syntax errors. Check out `man testparm` for more information about the `testparm` utility.

In the above case, it is assumed that the user has chosen a suitable method for making `/mnt/someshare` writeable by guest users.

## Full manual control of Samba (recommended only for experienced Samba admins)

Full manual control of Samba can be achieved by bypassing the default Solus Samba configuration.

In the Samba manual page (`man 8 samba`), it is shown how the compiled-in default config file can be overridden by specifying the `--configfile=<somepath>` flag during invocation of Samba.

To use the traditional `/etc/samba/smb.conf` configuration file exclusively (thus bypassing the Solus configuration), edit the `/etc/sysconfig/samba` file to look like so:

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
