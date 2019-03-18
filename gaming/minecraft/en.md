+++
title = "Minecraft"
lastmod = "2019-03-18T01:36:02+01:00"
+++
# Minecraft

[Minecraft](https://minecraft.net) is a sandbox independent video game originally created by Swedish programmer Markus "Notch" Persson and later developed and published by the Swedish company Mojang.

{{< altimg "minecraft.jpg" "help-center/gaming/minecraft/" >}}

## Installation

Install Java and download Minecraft:

``` bash
sudo eopkg it openjdk-8
sudo mkdir -p /opt/minecraft
sudo wget https://launcher.mojang.com/download/Minecraft.tar.gz -O /opt/minecraft/Minecraft.tar.gz
```

Extract files and remove old archive:
``` bash
sudo tar xvf /opt/minecraft/Minecraft.tar.gz --strip=1 -C /opt/minecraft/
sudo rm /opt/minecraft/Minecraft.tar.gz
```

#### Now we can create a desktop icon for it:

On Solus Budgie or GNOME:
``` bash
sudo gedit /usr/share/applications/minecraft.desktop
```
On Solus MATE:
``` bash
sudo pluma /usr/share/applications/minecraft.desktop
```

Paste in the following and save it:

``` ini
[Desktop Entry]
Version=1.0
Type=Application
Name=Minecraft
Comment=Minecraft Launcher
Icon=minecraft
Exec=/opt/minecraft/minecraft-launcher
Path=/opt/minecraft/
NoDisplay=false
Categories=Game;
StartupNotify=false
Terminal=false
```

### Budgie

If you are using Budgie, it may be necessary to update the entries in Budgie Menu. You can do so with:

``` bash
sudo update-desktop-database
```
