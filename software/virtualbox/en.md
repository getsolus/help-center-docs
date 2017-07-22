+++
title = "VirtualBox"
lastmod = "2017-07-22T16:28:23+03:00"
+++
# VirtualBox

[VirtualBox](https://virtualbox.org) is an x86 virtualization software package developed by Sun Microsystems.

## Solus as Guest

Make sure you have the necessary packages installed:

``` bash
sudo eopkg upgrade
sudo eopkg install gcc make autoconf binutils linux-lts-headers xorg-server-devel
```

Reboot your system first so that it's all up to date.

Now, download the [Guest Additions](http://download.virtualbox.org/virtualbox/) as an `.iso` file and mount it from VirtualBox's menu. Then in the guest machine do the following (this will also reboot your system):

``` bash
 sudo mkdir -p /mnt/cdrom
 sudo mount -t iso9660 -o ro /dev/cdrom /mnt/cdrom
 cd /mnt/cdrom
 sudo sh VBoxLinuxAdditions.run
 sudo reboot
```

**Note:** For each kernel update you will need to rebuild the VirtualBox Modules. So simply remount the ISO and run the instructions again.

### Clipboard Sharing, Copy & Paste, Drag & Drop

By default, the VirtualBox modules for those VirtualBox features are not loaded/enabled, therefore the features simply do not work if selected in the Guest.
If you want that these features do work properly automatically, without starting the corresponding VBoxClient yourself, you can use xdg to autostart VBoxClient thus enabling the features.

/usr/bin/VBoxClient-all:
``` bash
#!/bin/sh
## @file
# Start the Guest Additions X11 Client
#

#
# Copyright (C) 2007-2012 Oracle Corporation
#
# This file is part of VirtualBox Open Source Edition (OSE), as
# available from http://www.virtualbox.org. This file is free software;
# you can redistribute it and/or modify it under the terms of the GNU
# General Public License (GPL) as published by the Free Software
# Foundation, in version 2 as it comes in the "COPYING" file of the
# VirtualBox OSE distribution. VirtualBox OSE is distributed in the
# hope that it will be useful, but WITHOUT ANY WARRANTY of any kind.
#

# Sanity check: if non-writeable PID-files are present in the user home
# directory VBoxClient will fail to start.
for i in $HOME/.vboxclient-*.pid; do
    test -w $i || rm -f $i
done

if ! test -c /dev/vboxguest 2>/dev/null; then
   # Do not start if the kernel module is not present.
   notify-send "VBoxClient: the VirtualBox kernel service is not running.  Exiting."
elif test -z "${SSH_CONNECTION}"; then
   # This script can also be triggered by a connection over SSH, which is not
   # what we had in mind, so we do not start VBoxClient in that case.  We do
   # not use "exit" here as this script is "source"d, not executed.
  /usr/bin/VBoxClient --clipboard
  /usr/bin/VBoxClient --checkhostversion
  /usr/bin/VBoxClient --display
  /usr/bin/VBoxClient --seamless
  /usr/bin/VBoxClient --draganddrop
fi
```

You need to make the file executable in order for this to work:
``` bash
sudo chmod +x /usr/bin/VBoxClient-all
```

/etc/xdg/autostart/vboxclient.desktop:
``` bash
[Desktop Entry]
Type=Application
Encoding=UTF-8
Version=1.0
Name=vboxclient
Name[C]=vboxclient
Comment[C]=VirtualBox User Session Services
Comment=VirtualBox User Session Services
Comment[it]=Servizi di sessione utente di VirtualBox
Comment[pl]=UsÅ‚ugi sesji uÅ¼ytkownika VirtualBox
Exec=/usr/bin/VBoxClient-all
X-GNOME-Autostart-enabled=true
X-KDE-autostart-after=panel
```

## Solus as Host

Download the latest [VirtualBox Installer](https://www.virtualbox.org/wiki/Linux_Downloads) - [direct link](http://download.virtualbox.org/virtualbox/5.1.24/VirtualBox-5.1.24-117012-Linux_amd64.run) (5.1.24) right click link and Save As.
Now install the dependencies and VirtualBox like so:

``` bash
sudo eopkg it -c system.devel
sudo eopkg it linux-lts-headers
sudo sh ~/Downloads/VirtualBox-5.1.24-117012-Linux_amd64.run
```

Replace the version number of the file with the one you downloaded.
