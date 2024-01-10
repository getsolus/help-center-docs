---
title: Desktops
summary: Quick guides on switching between or installing additional Desktop Environments on Solus
---

# Desktop Environments

Solus offers a [multitude of desktop environments](https://getsol.us/solus/experiences/), ranging from the feature-rich and modern Budgie to the traditional MATE experience. It is recommended to use the ISO for a specific desktop environment but it is possible to install them afterwards if you wish to do try one out.

WARNING: Do NOT attempt to install ANY other desktop environments next to KDE Plasma Desktop. This scenario is NOT supported and you will be told so in no uncertain terms if asking for support.

## Budgie

The flagship desktop environment / experience of Solus is Budgie. If you have installed either our MATE or GNOME editions, you can try out and install Budgie by running the following command:

```bash
# Do NOT attempt to do this if you are running the KDE Plasma Desktop version of Solus!
sudo eopkg install -c desktop.budgie
```

## Gnome Shell

Solus offers a GNOME Shell experience that ships out-of-the-box with a variety of extensions. If you have installed either our Budgie or MATE editions, you can try out and install GNOME Shell by running the following commands:

```bash
# Do NOT attempt to do this if you are running the KDE Plasma Desktop version of Solus!
sudo eopkg install gdm gnome-shell gnome-desktop-branding
```

## MATE

:::caution

We plan to deprecate the MATE Desktop, for a similar experience, consider XFCE.

:::

Solus offers the MATE desktop environment / experience, tailored to advanced users and older hardware, as well as shipping with our modern menu called [Brisk Menu](https://github.com/getsolus/brisk-menu). If you have installed either our Budgie or GNOME editions, you can try out and install MATE by running the following command:

```bash
# Do NOT attempt to do this if you are running the KDE Plasma Desktop version of Solus!
sudo eopkg install -c desktop.mate
```

## XFCE

Solus offers the XFCE desktop environment for users preferring a more lightweight experience. It is recommended for existing MATE users. You can install XFCE with the following command:

```
# Do NOT attempt to do this if you are running the KDE Plasma Desktop version of Solus!
sudo eopkg install -c desktop.xfce
```

## Tiling window managers

### i3

Solus offers i3 as a tiling window manager. Users wanting to try i3 can install it by running the following command:

```bash
# Do NOT attempt to do this if you are running the KDE Plasma Desktop version of Solus!
sudo eopkg install i3
```

If you want to use i3 with support for GNOME Settings Daemon and other GNOME functionality, follow the instructions for installation of GNOME Shell, then choose GNOME+i3 at the login screen to use it.

### Sway

Solus offers Sway as a Wayland-only tiling window manager. You can install it with the following command:

```bash
sudo eopkg install sway
```

Sway expects users to do some configuration, refer to the [Sway Wiki](https://github.com/swaywm/sway/wiki).

For more information about tiling window managers, click [here](https:/en.wikipedia.org/wiki/Tiling_window_manager).
