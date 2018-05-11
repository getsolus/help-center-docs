+++
title = "Samba File Sharing"
lastmod = "2018-05-05T12:31:00+02:00"
+++

# Samba file sharing

Samba is the standard Windows interoperability suite of programs for Linux and Unix. Among other things, it allows Linux and Windows users to share files via the Common Internet File System (CIFS) protocol.

## Samba on Solus

To enable convenient file-sharing on Solus, we maintain a Solus-specific Samba configuration that out-of-the-box:

- Supports Samba usershare functionality
- Allows access only from RFC 1918 private network addresses
- Disables sharing of printers via Samba (you should use IPP via CUPS instead)
- Is set up as a standalone server which participates in the default MS Windows workgroup named WORKGROUP
- Enables sharing of $HOME folders (manual user account activation needed)

### How to start/stop Samba

Please note that Samba does NOT run on system boot by default. It needs to be manually started/configured to start automatically:

``` bash
# Start Samba manually
sudo systemctl start nmb smb

# Configure Samba to start automatically on each boot
sudo systemctl enable --now nmb smb

# Check whether Samba is running
sudo systemctl status nmb smb

# Stop Samba manually
sudo systemctl stop nmb smb

# Configure Samba to not start automatically on each boot
sudo systemctl disable nmb smb
```
 
## A brief introduction to the Samba usershare functionality

In order to support user-managed (as opposed to system-managed) shares, Samba provides the so-called *usershare* functionality, where users can define network shares without touching the traditional Samba configuration file.

### GUI - configuring shares via file manager plugins

The default Solus configuration was written with the `nautilus-share` (Budgie/GNOME) and `caja-share` (MATE) file manager plugins in mind. These plugins allows the user to share folders in an easy and convenient way.

All the user needs to do is to install either the `caja-extensions` package (which includes the `caja-share` plugin) or the `nautilus-share` package from the Software Center and enable the relevant Samba services. 

``` bash
sudo eopkg install nautilus-share
```

In order to load the newly installed file manager plugin, the user will need to log out of the current desktop session and log back in to a new desktop session, at which point the plugin in question will be ready for use.

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

## Managing Samba authentication for named users

Should the user `some_user` wish to access e.g. the *$HOME* directory via Samba, it is necessary to activate the `some_user` Samba login account.

Note that the `some_user` Samba account is separate from the `some_user` Linux user account, but they share the same *$HOME* directory.

``` bash
# Add the some_user account to the Samba login db
sudo smbpasswd -a some_user

# Activate some_user in the Samba login db
sudo smbpasswd -e some_user

# Try to log in to a running Samba instance as some_user and list shares
smbclient -U some_user -L localhost

# Disable some_user in the Samba login db
sudo smbpasswd -d some_user

# Remove some_user from the Samba login db
sudo smbpasswd -x some_user
```

See `man smbpasswd` for more details.

### Debugging Samba authentication issues

To help debug authentication issues, the Solus Samba configuration is by default set up with relatively verbose logging when it comes to authentication.

The Samba log files live in `/var/log/samba/`.

## Adding custom configuration parameters via `/etc/samba/smb.conf`

**CAUTION:** *From this point on, it is assumed that the user is familiar with the Samba documentation, including `man smb.conf`, and that the user has a basic understanding of Linux filesystem permissions.*

The default Solus-managed configuration (which lives in `/usr/share/defaults/samba/smb.conf` and will be overwritten on each Samba package update) is written such that it will attempt to include any configuration parameters present in `/etc/samba/smb.conf`.
  
Hence, any persistent user-managed parameters should be added to `/etc/samba/smb.conf` which will *never* be overwritten by the system package manager.

In addition, the Solus-controlled Samba configuration is written such that it is possible to override its default parameters simply by assigning a new value to the parameter in question in `/etc/samba/smb.conf`. From a technical perspective, any parameters added without a `[shared resource]` header will considered part of the `[global]` configuration section.

This way, it becomes possible to reset Samba to Solus working defaults simply by deleting or renaming  `/etc/samba/smb.conf`.

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

After adding a `[someshare]` section like in the above example, run `sudo testparm` to check that the newly included share does not contain syntax errors. Check out `man testparm` for more information about the `testparm` utility.

If testparm didn't spot any problems, restart Samba with `sudo systemctl restart smb`, which will activate the new configuration.

### Links to the official Samba documentation

Apart from the aforementioned `man smb.conf`, wiki.samba.org is your friend, specifically:

[https://wiki.samba.org/index.php/Setting_up_a_Share_Using_POSIX_ACLs]

and

[https://wiki.samba.org/index.php/Setting_up_Samba_as_a_Standalone_Server]

The default Solus Samba configuration is patterned on the above.


## Full manual control of Samba (recommended only for experienced Samba admins)

Full manual control of Samba can be achieved by completely bypassing the default Solus Samba configuration.

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
