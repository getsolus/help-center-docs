+++
title = "TigerVNC"
lastmod = "2021-07-30T21:39:38-05:00"
+++
# TigerVNC

TigerVNC is a high-performance implementation of the VNC protocol, which allows you to control/view desktops remotely over the internet.

## Installation

TigerVNC can be installed either from the Software Center or via terminal. The terminal command to run it is:

``` bash
sudo eopkg install tigervnc
```

## Usage

### Initial setup of vncserver

For the initial setup of vncserver for TigerVNC, open a terminal and run:

``` bash
vncserver
```
You will be asked to provide a **password**, and if you'd like, a separate **view-only mode password** (optional). Enter these values according to your preference.

After the initial setup you have to stop the vncserver process so you can edit the configuration file. Please type inside the terminal:

``` bash
vncserver -kill :1
```

### Configuration for your desktop environment

Every desktop environment needs a different setup. You will find the vncserver config file under `$HOME/.vnc/xstartup`. Open the file with your desired editor. Add the following information. You don't have to add lines that are already there. Leave the rest of the contents of the file as-is.

#### Budgie

``` bash
#!/bin/bash

unset SESSION_MANAGER
unset DBUS_SESSION_BUS_ADDRESS

gnome-session --session=budgie-desktop &
budgie-wm &
budgie-panel &
```

#### GNOME

``` bash
#!/bin/bash

unset SESSION_MANAGER
unset DBUS_SESSION_BUS_ADDRESS
export XKL_XMODMAP_DISABLE=1

gnome-session &
gnome-panel &
gnome-settings-daemon &
metacity &
nautilus &
```
#### MATE

``` bash
#!/bin/bash

unset SESSION_MANAGER
unset DBUS_SESSION_BUS_ADDRESS

mate-session &
mate-panel &
```

#### Plasma

Plasma desktop is not supported at the moment. Please use the software `x11vnc` for VNC server support on Plasma.

### Restart and connect to vncserver

To start the VNC server again, please type this in a terminal:

``` bash
vncserver -kill :1
```

To connect to the VNC server, enter the IP address or hostname, and the default port of 5901 in your VNC client (for instance, Remmina). Example:

192.123.123.21:5901