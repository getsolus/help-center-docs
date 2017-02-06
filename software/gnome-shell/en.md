# Gnome Shell

Solus offers GNOME Shell as an alternative to the Budgie desktop environment. Below are installation instructions for installing GNOME Shell and necessary components:

## Install

Switch to TTY1 (Ctrl Alt F1) and login.

``` bash
sudo eopkg install gdm gnome-shell gnome-shell-extensions
```

You must also disable lightdm and enable gdm

``` bash
sudo systemctl disable lightdm
sudo systemctl stop lightdm
sudo systemctl enable gdm
sudo systemctl start gdm
```