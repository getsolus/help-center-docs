---
title: Samba File Sharing
summary: A quick start guide to Samba on Solus
---

# Samba file sharing

Samba is the standard Windows interoperability suite of programs for Linux and Unix. Among other things, it allows Linux, macOS and Windows users to share files via the Server Message Block (SMB) protocol.

## Samba on Solus

To enable convenient file-sharing on Solus, we maintain a Solus-specific Samba configuration that out-of-the-box:

- Supports Samba usershare functionality
- Enables sharing of _$HOME_ folders (manual user account activation needed)
- Is set up as a standalone server using the SMB2.0.2 protocol and up (>= Windows Vista/Server 2008)
- Advertises itself via _Avahi_ aka _Apple Bonjour_ / _mDNS_ / _zeroconf_ for macOS compatibility
- Advertises itself via _wsdd_ aka _Web Services Discovery Daemon_ for Windows 7+ compatibility
- Disables sharing of printers via Samba (use IPP via CUPS instead)
- Allows access only from IPv4 and IPv6 private and link-local (non-internet-routable) addresses

As of Samba 4.7.x, Solus disables the old, deprecated and insecure original SMB1/CIFS protocol by default.

For more information on this choice, please read [this post regarding SMB1](https://techcommunity.microsoft.com/t5/storage-at-microsoft/stop-using-smb1/ba-p/425858).

As of Samba 4.11.x, the SMB1/CIFS protocol is officially deprecated upstream.

### How to start/stop Samba

Please note that Samba does NOT run on system boot by default. It needs to be manually started/configured to start automatically:

```bash
# Start Samba manually
sudo systemctl start smb

# Configure Samba to start automatically on each boot and immediately start the service
sudo systemctl enable --now smb

# Check whether Samba is running
sudo systemctl status smb

# Restart Samba manually
sudo systemctl restart smb

# Stop Samba manually
sudo systemctl stop smb

# Configure Samba to not start automatically on each boot and immediately stop the service
sudo systemctl disable --now smb
```

### Enabling Windows 7+ network discovery support

The Web Services Discovery protocol is used by Windows 7+ clients to discover shares on other computers. Solus now includes the _wsdd_ service which provides support for the Web Services Discovery protocol.

When restarting wsdd, it may be necessary to also restart Samba.

```bash
# Start wsdd manually (depends on the smb service)
sudo systemctl start wsdd

# Configure wsdd to start automatically on each boot and immediately start the service
sudo systemctl enable --now wsdd

# Check whether wsdd is running
sudo systemctl status wsdd

# Restart wsdd and Samba
sudo systemctl restart wsdd smb

# Stop wsdd manually
sudo systemctl stop wsdd

# Configure wsdd to not start automatically on each boot and immediately stop the service
sudo systemctl disable --now wsdd
```

For more details on managing services on Solus with _systemctl_, see `man systemctl` which is part of the systemd system and service manager.

### Accessing Samba via IPv6

In order to access a running Solus Samba server instance via IPv6, first verify that all relevant hosts (including the Samba host) are configured with an IPv6 link-local address.

This can be verified in a terminal:

```
$ ip addr

2: enp2s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 14:da:e9:10:f9:c7 brd ff:ff:ff:ff:ff:ff
    inet 192.168.147.233/24 brd 192.168.147.255 scope global dynamic noprefixroute enp2s0
       valid_lft 5066sec preferred_lft 5066sec
    inet6 fe80::d555:a50f:1aea:c944/64 scope link noprefixroute
       valid_lft forever preferred_lft forever
```

In the above example, the name of the relevant network device is `enp2s0`. Note how the line starting with `inet6` contains an IPv6 address which begins with fe80:: and contains `scope link`.

Ensure that Samba has been started on the host and then query the running local Samba instance with the following command, using the IPv6 address and interface as show by the output of `ip addr`:

```
$ smbclient -N -L //fe80::d555:a50f:1aea:c944%enp2s0
```

The output might look something like this:

```
Unable to initialize messaging context
Anonymous login successful

        Sharename       Type      Comment
        ---------       ----      -------
        eopkgs          Disk
        IPC$            IPC       IPC Service (Samba server (version: 4.10.11, protocol: SMB3_11))
        Public          Disk
fe80::d555:a50f:1aea:c944%enp2s0 is an IPv6 address -- no workgroup available
```

Make sure to change the IPv6 address and interface name (`fe80::d555:a50f:1aea:c944` and `enp2s0` respectively in the above example) to the real address and interface name of the Samba host in question.

## A brief introduction to the Samba usershare functionality

In order to support user-managed (as opposed to system-managed) shares, Samba provides the so-called _usershare_ functionality, where users can define network shares without touching the traditional Samba configuration file.

### GUI - configuring shares via file manager plugins

The default Solus configuration was written with the `nemo-share` (Budgie), `nautilus-share` (GNOME), `kdenetwork-filesharing` (KDE) and `caja-share` (MATE) file manager plugins in mind. These plugins allow the user to share folders in an easy and convenient way.

All you need to do is to install either the `caja-extensions` package (which includes the `caja-share` plugin), the `kdenetwork-filesharing` package, the `nautilus-share` package or the `nemo-share` package from the Software Center and enable the relevant Samba services.

```bash
# Budgie
sudo eopkg install nemo-share

#GNOME
sudo eopkg install nautilus-share

# KDE
sudo eopkg install kdenetwork-filesharing

# MATE
sudo eopkg install caja-extensions
```

In order to load the newly installed file manager plugin, you will need to log out of the current desktop session and log back in to a new desktop session, at which point the plugin in question will be ready for use.

Afterwards, simply right-clicking a folder and clicking _properties_ will now show an option to share it, as well as whether to allow Read/Write permissions to your users or guest access.

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

## Managing Samba authentication for named users

Should the user `some_user` wish to access e.g. the _$HOME_ directory via Samba, it is necessary to enable the `some_user` Samba account.

Note that the `some_user` Samba account is separate from the `some_user` Linux user account, but they share the same _$HOME_ directory.

```bash
# Add the some_user account to the Samba login db
sudo smbpasswd -a some_user

# Enable the some_user account in the Samba login db
sudo smbpasswd -e some_user

# Try to log in to a running Samba instance as some_user and list shares
smbclient -U some_user -L localhost

# Disable the some_user account in the Samba login db
sudo smbpasswd -d some_user

# Remove the some_user account from the Samba login db
sudo smbpasswd -x some_user
```

See `man smbpasswd` for more details.

### Debugging Samba authentication issues

To help debug authentication issues, the Solus Samba configuration is by default set up with relatively verbose logging when it comes to authentication and protocol negotiation.

The Samba log files live in the `/var/log/samba/` directory.

## Adding custom configuration parameters via `/etc/samba/smb.conf`

**CAUTION:** _From this point on, it is assumed that the user is familiar with the Samba documentation, including `man smb.conf`, and that the user has a basic understanding of Linux filesystem permissions._

The default Solus-managed configuration (which lives in `/usr/share/defaults/samba/smb.conf` and will be overwritten on each Samba package update) is written such that it will attempt to include any configuration parameters present in `/etc/samba/smb.conf`.

Hence, any persistent user-managed parameters should be added to `/etc/samba/smb.conf` which will _never_ be overwritten by the system package manager.

In addition, the Solus-controlled Samba configuration is written such that it is possible to override its default parameters simply by assigning a new value to the parameter in question in `/etc/samba/smb.conf`. From a technical perspective, any parameters added without a `[shared resource]` header will considered part of the `[global]` configuration section.

This way, simply deleting or renaming `/etc/samba/smb.conf` and restarting Samba with `sudo systemctl restart smb` will reset the configuration to the known working default Solus configuration.

### Example -- anonymous, read-write share outside of _$HOME_

```ini
# Contents of /etc/samba/smb.conf:
#
# If /etc/samba/smb.conf exists, it is automatically loaded by the Solus-
# controlled default config residing in /usr/share/defaults/samba/smb.conf
#
# The following configuration creates a "//servername/someshare" share where
# anonymous users have read and write access.
#
# ';' also denotes a comment (typically used for configuration parameters)
#
[someshare]
path = /mnt/someshare
# allow anonymous access
guest ok = Yes
# ONLY allow anonymous access (don't allow both guest and system user access)
;guest only = Yes
# allow write access
read only = No
# This is an example of how to limit access to the share to known IPs
;hosts deny = ALL
;hosts allow = 127.0.0.1 192.168.1.0/24
# share config end
```

In the above example, it is assumed that the user has chosen a suitable method for making `/mnt/someshare` writeable by guest users.

After adding a `[someshare]` section like in the above example, run `sudo testparm` to check that the newly included share does not contain syntax errors. Check out `man testparm` for more information about the _testparm_ utility.

If _testparm_ didn't spot any problems, restart Samba with `sudo systemctl restart smb`, which will activate the new configuration.

### Links to the official Samba documentation

Apart from the aforementioned `man smb.conf`, wiki.samba.org is your friend, specifically:

- https://wiki.samba.org/index.php/Setting_up_a_Share_Using_POSIX_ACLs
- https://wiki.samba.org/index.php/Setting_up_Samba_as_a_Standalone_Server

The default Solus Samba configuration is patterned on the above.

## Full manual control of Samba (recommended only for experienced Samba admins)

Full manual control of Samba can be achieved by completely bypassing the default Solus Samba configuration.

In the _smbd_ manual page (`man 8 smbd`), it is shown how the compiled-in default config file can be overridden by specifying the `--configfile=<somepath>` flag during startup.

To use the traditional `/etc/samba/smb.conf` configuration file exclusively (thus bypassing the Solus configuration), edit the `/etc/sysconfig/samba` file to look like so:

```bash
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
