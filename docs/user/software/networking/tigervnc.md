---
title: TigerVNC
summary: A quick start guide to using TigerVNC on Solus
date: 2022-12-16
---

# TigerVNC

TigerVNC is a high-performance implementation of the VNC protocol, which allows you to control/view desktops remotely over the internet.

## Installation

TigerVNC can be installed either from the Software Center or via terminal. The terminal command to run it is:

```bash
sudo eopkg install tigervnc
```

## Usage

### Initial setup of vncserver

For the initial setup of vncserver for TigerVNC you have to open a terminal and run:

```bash
vncserver
```

While this setup you will be asked for setting up a **password** and if you'd like to setup a **view-only mode**, please do it accordingly your desire.

After the initial setup you have to stop the vncserver process, for this please type inside the terminal

```bash
vncserver -kill :1
```

### Configuration for your desktops

Every Desktop needs a different Setup, you find the vncserver config under`$HOME/.vnc/xstartup` open the file with your desired editor and change bash script inside the file with the following information for your Desktop.

### Budgie

```bash
#!/bin/bash

unset SESSION_MANAGER
unset DBUS_SESSION_BUS_ADDRESS

gnome-session --session=budgie-desktop &
budgie-wm &
budgie-panel &
```

### GNOME

```bash
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

### MATE

```bash
#!/bin/bash

unset SESSION_MANAGER
unset DBUS_SESSION_BUS_ADDRESS

mate-session &
mate-panel &
```

### Plasma

Plasma desktop is not supported at the moment. Please use the software `x11vnc` for vncserver support on Plasma.
