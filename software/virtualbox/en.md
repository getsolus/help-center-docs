+++
title = "VirtualBox"
+++
# VirtualBox

[VirtualBox](https://virtualbox.org) is an x86 virtualization software package developed by Sun Microsystems.

## Solus as Guest 

Make sure you have the necessary packages installed: 

``` bash
sudo eopkg upgrade
sudo eopkg install gcc make autoconf binutils kernel-headers xorg-server-devel
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

**Note:** For each kernel update you will need to rebuild the Virtualbox Modules. So simply remount the ISO and run the instructions again.

## Solus as Host 

Download the latest [VirtualBox Installer](https://www.virtualbox.org/wiki/Linux_Downloads) - [direct link](http://download.virtualbox.org/virtualbox/5.1.12/VirtualBox-5.1.14-112924-Linux_amd64.run) (5.1.14) right click link and Save As. 
Now install the dependencies and VirtualBox like so:

``` bash
sudo eopkg it -c system.devel
sudo eopkg it kernel-headers
sudo sh ~/Downloads/VirtualBox-5.1.14-112924-Linux_amd64.run
```

Replace version number of file with the one you download.
