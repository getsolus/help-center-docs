+++
title = "Minecraft"
lastmod = "2021-10-24T23:21:25+02:00"
+++
# Minecraft

[Minecraft](https://minecraft.net) is a sandbox independent video game originally created by Swedish programmer Markus "Notch" Persson and later developed and published by the Swedish company Mojang.

{{< altimg "minecraft.jpg" "help-center/gaming/minecraft/" >}}

## Installation

Install dependencies and download Minecraft:

``` bash
sudo eopkg it openjdk-8 gconf binutils
wget https://launcher.mojang.com/download/Minecraft.deb
```

Extract files and remove old archive:

``` bash
sudo ar xf Minecraft.deb
sudo tar xf data.tar.xz -C /
sudo rm control.tar.gz data.tar.xz debian-binary Minecraft.deb
```

#### Now edit the desktop file to integrate openjdk-8 environment:

On Solus Budgie or Gnome:

``` bash
sudo gedit /usr/share/applications/minecraft-launcher.desktop
```

On Solus Mate:

``` bash
sudo pluma /usr/share/applications/minecraft-launcher.desktop
```

On Solus Plasma:

``` bash
kate /usr/share/applications/minecraft-launcher.desktop
```

Now edit inside the desktop file the Exec path to the following

``` bash
Exec=env JAVA_HOME=/usr/lib64/openjdk-8 /usr/bin/minecraft-launcher
```

#### Integration the installed files into your system:

``` bash
sudo usysconf run -f
```
