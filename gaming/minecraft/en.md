+++
title = "Minecraft"
lastmod = "2020-04-27T20:35:51+02:00"
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

Integrate the files into your system
``` bash
sudo usysconf run icon-caches desktop-files -f
```
