# Minecraft

[Minecraft](https://minecraft.net) is a sandbox independent video game originally created by Swedish programmer Markus "Notch" Persson and later developed and published by the Swedish company Mojang.

![Minecraft](imgs/help-center/gaming/minecraft/minecraft.jpg)

## Installation

Install Java and Minecraft:

``` bash
sudo eopkg it openjdk-8
sudo mkdir -p /opt/minecraft
sudo wget https://s3.amazonaws.com/Minecraft.Download/launcher/Minecraft.jar -O /opt/minecraft/Minecraft.jar
```

Now we can create a desktop icon for it:

`sudo gedit /usr/share/applications/minecraft.desktop`

Paste in the following and save it:
```
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

Now run the following command to regenerate the Budgie menu.

`sudo update-desktop-database`

You know have a Minecraft entry in Budgie's menu.