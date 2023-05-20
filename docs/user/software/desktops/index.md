---
title: Desktops
summary: Quick guides on switching between or installing additional Desktop Environments on Solus
date: 2022-12-16
---

# Desktop Environments

Solus offers a [multitude of desktop environments](/solus/experiences/), ranging from the feature-rich and modern Budgie to the traditional MATE experience. It is recommended to use the ISO for a specific desktop environment but it is possible to install them afterwards if you wish to do try one out.

WARNING: Do NOT attempt to install ANY other desktop environments next to KDE Plasma Desktop. This scenario is NOT supported and you will be told so in no uncertain terms if asking for support.

## Budgie

The flagship desktop environment / experience of Solus is Budgie. If you have installed either our MATE or GNOME editions, you can try out and install Budgie by running the following command:

``` bash
# Do NOT attempt to do this if you are running the KDE Plasma Desktop version of Solus!
sudo eopkg install -c desktop.budgie
```

## Gnome Shell

Solus offers a GNOME Shell experience that ships out-of-the-box with a variety of extensions. If you have installed either our Budgie or MATE editions, you can try out and install GNOME Shell by running the following commands:

``` bash
# Do NOT attempt to do this if you are running the KDE Plasma Desktop version of Solus!
sudo eopkg rm lightdm
sudo eopkg install gdm gnome-shell gnome-desktop-branding-fortitude
```

## MATE

Solus offers the MATE desktop environment / experience, tailored to advanced users and older hardware, as well as shipping with our modern menu called [Brisk Menu](https://github.com/getsolus/brisk-menu). If you have installed either our Budgie or GNOME editions, you can try out and install MATE by running the following command:

``` bash
# Do NOT attempt to do this if you are running the KDE Plasma Desktop version of Solus!
sudo eopkg install -c desktop.mate
```

## i3

Solus offers i3 as a tiling window manager. Users wanting to try i3 can install it by running the following command:

``` bash
# Do NOT attempt to do this if you are running the KDE Plasma Desktop version of Solus!
sudo eopkg install i3
```

If you want to use i3 with support for GNOME Settings Daemon and other GNOME functionality, follow the instructions for installation of GNOME Shell, then choose GNOME+i3 at the login screen to use it.

For more information about tiling window managers, click [here](https:/.wikipedia.org/wiki/Tiling_window_manager).
