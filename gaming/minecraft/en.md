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
ar xf Minecraft.deb
sudo tar xf data.tar.xz -C /
rm control.tar.gz data.tar.xz debian-binary Minecraft.deb
```

### Budgie

If you are using Budgie, it may be necessary to update the entries in Budgie Menu. You can do so with:

``` bash
sudo update-desktop-database
```
