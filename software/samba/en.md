+++
title = "Samba File Sharing"
lastmod = "2018-07-04T16:09:00+02:00"
+++
# Samba file sharing

Samba is the standard Windows interoperability suite of programs for Linux and Unix. Among other things, it allows Linux, macOS and Windows users to share files via the Server Message Block (SMB) protocol.

## Samba on Solus

To enable convenient file-sharing on Solus, we maintain a Solus-specific Samba configuration that out-of-the-box:

- Supports Samba usershare functionality
- Enables sharing of *$HOME* folders (manual user account activation needed)
- Is set up as a standalone server using the SMB2.10 protocol and up (>= Win 7)
- Advertises itself via *Avahi* aka *Apple Bonjour* / *mDNS* / *zeroconf*
- Disables sharing of printers via Samba (use IPP via CUPS instead)
- Allows access only from RFC 1918 private network addresses

As of Samba 4.7.x, Solus disables the old, deprecated and insecure original SMB1/CIFS protocol by default.

For more information on this choice, please read [this post regarding SMB1](https://blogs.technet.microsoft.com/filecab/2016/09/16/stop-using-smb1/).

### How to start/stop Samba

Please note that Samba does NOT run on system boot by default. It needs to be manually started/configured to start automatically:

``` bash
# Start Samba manually
sudo systemctl start smb

# Configure Samba to start automatically on each boot and immediately start the service
sudo systemctl enable --now smb

# Check whether Samba is running
sudo systemctl status smb

# Stop Samba manually
sudo systemctl stop smb

# Configure Samba to not start automatically on each boot and immediately stop the service
sudo systemctl disable --now smb
```

For more details on managing services on Solus with *systemctl*, see `man systemctl` which is part of the systemd system and service manager.

## A brief introduction to the Samba usershare functionality

In order to support user-managed (as opposed to system-managed) shares, Samba provides the so-called *usershare* functionality, where users can define network shares without touching the traditional Samba configuration file.

### GUI - configuring shares via file manager plugins

The default Solus configuration was written with the `nautilus-share` (Budgie/GNOME), `kdenetwork-filesharing` (KDE) and `caja-share` (MATE) file manager plugins in mind. These plugins allow the user to share folders in an easy and convenient way.

All the user needs to do is to install either the `caja-extensions` package (which includes the `caja-share` plugin), the `kdenetwork-filesharing` package or the `nautilus-share` package from the Software Center and enable the relevant Samba services. 

``` bash
# Budgie/GNOME
sudo eopkg install nautilus-share

# KDE
sudo eopkg install kdenetwork-filesharing

# MATE
sudo eopkg install caja-extensions
```

In order to load the newly installed file manager plugin, the user will need to log out of the current desktop session and log back in to a new desktop session, at which point the plugin in question will be ready for use.

Simply right-clicking a folder and clicking *properties* will now show an option to share it.

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

Should the user `some_user` wish to access e.g. the *$HOME* directory via Samba, it is necessary to enable the `some_user` Samba account.

Note that the `some_user` Samba account is separate from the `some_user` Linux user account, but they share the same *$HOME* directory.

``` bash
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

**CAUTION:** *From this point on, it is assumed that the user is familiar with the Samba documentation, including `man smb.conf`, and that the user has a basic understanding of Linux filesystem permissions.*

The default Solus-managed configuration (which lives in `/usr/share/defaults/samba/smb.conf` and will be overwritten on each Samba package update) is written such that it will attempt to include any configuration parameters present in `/etc/samba/smb.conf`.
  
Hence, any persistent user-managed parameters should be added to `/etc/samba/smb.conf` which will *never* be overwritten by the system package manager.

In addition, the Solus-controlled Samba configuration is written such that it is possible to override its default parameters simply by assigning a new value to the parameter in question in `/etc/samba/smb.conf`. From a technical perspective, any parameters added without a `[shared resource]` header will considered part of the `[global]` configuration section.

This way, simply deleting or renaming  `/etc/samba/smb.conf` and restarting Samba with `sudo systemctl restart smb` will reset the configuration to the known working default Solus configuration.

### Example -- anonymous, read-write share outside of *$HOME*

``` ini
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

After adding a `[someshare]` section like in the above example, run `sudo testparm` to check that the newly included share does not contain syntax errors. Check out `man testparm` for more information about the *testparm* utility.

If *testparm* didn't spot any problems, restart Samba with `sudo systemctl restart smb`, which will activate the new configuration.

### Links to the official Samba documentation

Apart from the aforementioned `man smb.conf`, wiki.samba.org is your friend, specifically:

- https://wiki.samba.org/index.php/Setting_up_a_Share_Using_POSIX_ACLs
- https://wiki.samba.org/index.php/Setting_up_Samba_as_a_Standalone_Server

The default Solus Samba configuration is patterned on the above.

## Enabling legacy SMB1/CIFS protocol support

**CAUTION:** Enabling SMB1/CIFS is **not** recommended unless the security implications of doing so are properly understood.

Enabling legacy SMB1/CIFS protocol support is as simple as adding (some or all of) the following configuration parameters to `/etc/samba/smb.conf`

``` ini
# Contents of /etc/samba/smb.conf:
#
# If /etc/samba/smb.conf exists, it is automatically loaded by the Solus-
# controlled default config residing in /usr/share/defaults/samba/smb.conf 
# 
# The following configuration re-enables the deprecated, insecure SMB1 protocol 
#
# ';' also denotes a comment (typically used for configuration parameters)
#
    # Allow access to SMB1 shares on other servers
    client ipc min protocol = NT1
    client min protocol = NT1
    
    # Allow access to shares on other servers ONLY via SMB1
    client ipc max protocol = NT1
    client max protocol = NT1
    
    # Allow access to shares on this Samba instance via SMB1
    server min protocol = NT1
    
    # Allow access to shares on this Samba instance ONLY via SMB1
    server max protocol = NT1
```

Additionally, the user can choose to enable the *nmb.service*, which is a server that understands and can reply to NetBIOS over IP name service requests, like those produced by SMB/CIFS clients such as Windows 95/98/ME, Windows NT, Windows 2000, Windows XP and LanManager clients. It also participates in the browsing protocols which make up the Windows "Network Neighborhood" view.

```
# Start nmb.service manually
sudo systemctl start nmb

# Configure nmb.service to start automatically on each boot and immediately start the service
sudo systemctl enable --now nmb

# Check whether nmb.service is running
sudo systemctl status nmb

# Stop nmb.service manually
sudo systemctl stop nmb

# Configure nmb.service to not start automatically on each boot and immediately stop the service
sudo systemctl disable --now nmb
```

For more details on the *nmb.service*, see `man nmbd`.

## Full manual control of Samba (recommended only for experienced Samba admins)

Full manual control of Samba can be achieved by completely bypassing the default Solus Samba configuration.

In the *smbd* manual page (`man 8 smbd`), it is shown how the compiled-in default config file can be overridden by specifying the `--configfile=<somepath>` flag during startup.

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
