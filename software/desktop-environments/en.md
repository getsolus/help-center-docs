+++
title = "Desktop Environments"
lastmod = "2020-04-01T19:44:25-04:00"
+++
# Desktop Environments

Solus offers a [multitude of desktop environments](/solus/experiences/), ranging from the feature-rich and modern Budgie to the traditional MATE experience. It is recommended to use the ISO for a specific desktop environment but it is possible to install them afterwards if you wish to do try one out.  

## Budgie

The flagship desktop environment / experience of Solus is Budgie. If you have installed either our MATE or GNOME editions, you can try out and install Budgie by running the following command:

``` bash
sudo eopkg install -c desktop.budgie
```

## Gnome Shell

Solus offers a GNOME Shell experience that ships out-of-the-box with a variety of extensions. If you have installed either our Budgie or MATE editions, you can try out and install GNOME Shell by running the following commands:

``` bash
sudo eopkg rm lightdm
sudo eopkg install gdm gnome-shell gnome-desktop-branding-fortitude
```

## MATE

Solus offers the MATE desktop environment / experience, tailored to advanced users and older hardware, as well as shipping with our modern menu called [Brisk Menu](https://github.com/getsolus/brisk-menu). If you have installed either our Budgie or GNOME editions, you can try out and install MATE by running the following command:

``` bash
sudo eopkg install -c desktop.mate
```

## Plasma

Solus offers the KDE Plasma desktop environment / experience, which is a powerful and highly customizable desktop environment built with Qt and the KDE framework. KDE Plasma can be installed by running the following command:

``` bash
sudo eopkg install -c desktop.kde.core
```

## i3

Solus offers i3 as a tiling window manager. Users wanting to try i3 can install it by running the following command:

``` bash
sudo eopkg install i3
```

If you want to use i3 with support for GNOME Settings Daemon and other GNOME functionality, follow the instructions for installation of GNOME Shell, then choose GNOME+i3 at the login screen to use it.

For more information about tiling window managers, click [here](https://en.wikipedia.org/wiki/Tiling_window_manager).
