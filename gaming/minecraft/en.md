+++
title = "Minecraft"
+++
# Minecraft

[Minecraft](https://minecraft.net) is a sandbox independent video game originally created by Swedish programmer Markus "Notch" Persson and later developed and published by the Swedish company Mojang.

{{< altimg "minecraft.jpg" "help-center/gaming/minecraft/" >}}

## Installation

Install Java and Minecraft:

``` bash
sudo eopkg it openjdk-8
sudo mkdir -p /opt/minecraft
sudo wget https://s3.amazonaws.com/Minecraft.Download/launcher/Minecraft.jar -O /opt/minecraft/Minecraft.jar
```

Now we can create a desktop icon for it:

``` bash
sudo gedit /usr/share/applications/minecraft.desktop
```

Paste in the following and save it:

``` ini
[Desktop Entry]
Version=1.0
Type=Application
Name=Minecraft
Comment=Minecraft Launcher
Icon=minecraft
Exec=java -jar Minecraft.jar
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