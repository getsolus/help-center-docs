+++
title = "Desktop Environments"
lastmod = "2017-07-22T16:28:23+03:00"
aliases = ["/articles/software/gnome-shell/en/"]
+++
# Desktop Environments

Solus offers a [multitude of desktop environments](/solus/experiences/), ranging from the feature-rich and modern Budgie to the traditional MATE experience.

## Budgie

The flagship desktop environment / experience of Solus is Budgie. If you have installed either our MATE or GNOME editions, you can try out and install Budgie by running the following command:

``` bash
sudo eopkg install -c desktop.budgie
```

## Gnome Shell

Solus offers a GNOME Shell experience that ships out-of-the-box with a variety of extensions. If you have installed either our Budgie or MATE editions, you can try out and install GNOME Shell by running the following commands:

``` bash
sudo eopkg rm lightdm
sudo eopkg install gdm gnome-shell gnome-desktop-branding
```

## MATE

Solus offers the MATE desktop environment / experience, tailored to advanced users and older hardware, as well as shipping with our modern menu called [Brisk Menu](https://github.com/solus-project/brisk-menu). If you have installed either our Budgie or GNOME editions, you can try out and install MATE by running the following command:

``` bash
sudo eopkg install -c desktop.mate
```