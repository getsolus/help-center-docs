+++
title = "Third Party"
lastmod = "2021-01-14T01:48:54+01:00"
+++
# Third Party

The following applications are provided via our 3rd Party Repository to facilitate the installation and usage of them. These applications cannot be included in the primary repository due to licensing issues.

Alongside the following commands, you may also find some of these applications via the Third Party section on our Software Center.

If these instructions fail to work please [file an issue](https://github.com/getsolus/3rd-Party). To upgrade once installed simply run the commands again. If there is a new version it will be installed.

## Browsers

### Google Chrome

``` bash
sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/network/web/browser/google-chrome-stable/pspec.xml
sudo eopkg it google-chrome-*.eopkg;sudo rm google-chrome-*.eopkg
```

### Google Chrome (Beta)

``` bash
sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/network/web/browser/google-chrome-beta/pspec.xml
sudo eopkg it google-chrome-*.eopkg;sudo rm google-chrome-*.eopkg
```

### Google Chrome (Dev/Unstable)

``` bash
sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/network/web/browser/google-chrome-unstable/pspec.xml
sudo eopkg it google-chrome-*.eopkg;sudo rm google-chrome-*.eopkg
```

## Communication 

### Franz

``` bash
sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/network/im/franz/pspec.xml
sudo eopkg it franz*.eopkg;sudo rm franz*.eopkg
```

### Google Talk Browser Plugin

``` bash
sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/network/im/google-talkplugin/pspec.xml
sudo eopkg it google-talkplugin*.eopkg;sudo rm google-talkplugin*.eopkg
```

### Skype for Linux

``` bash
sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/network/im/skype/pspec.xml
sudo eopkg it skype*.eopkg;sudo rm *.eopkg
```

### Slack

``` bash
sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/network/im/slack-desktop/pspec.xml
sudo eopkg it slack-desktop*.eopkg;sudo rm slack-desktop*.eopkg
```

### Viber

``` bash
sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/network/im/viber/pspec.xml
sudo eopkg it viber*.eopkg;sudo rm *.eopkg
```

## Multimedia

### Bitwig Studio

``` bash
sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/multimedia/music/bitwig-studio/pspec.xml
sudo eopkg it bitwig-studio*.eopkg;sudo rm bitwig-studio*.eopkg
```

### OcenAudio

``` bash
sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/multimedia/music/ocenaudio/pspec.xml
sudo eopkg it ocenaudio*.eopkg;sudo rm ocenaudio*.eopkg
```

### Pixeluvo

``` bash
sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/multimedia/graphics/pixeluvo/pspec.xml
sudo eopkg it pixeluvo*.eopkg;sudo rm pixeluvo*.eopkg
```

### Plex Media Server

``` bash
sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/multimedia/video/plexmediaserver/pspec.xml
sudo eopkg it plexmediaserver-*.eopkg;sudo rm plexmediaserver-*.eopkg
sudo systemd-tmpfiles --create
sudo systemctl start plexmediaserver.service
```

**Note:** Optionally have it start on boot:

``` bash
sudo systemctl enable plexmediaserver.service
```

### Sunvox

``` bash
sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/multimedia/music/sunvox/pspec.xml
sudo eopkg it sunvox*.eopkg;sudo rm sunvox*.eopkg
```

### Spotify

``` bash
sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/multimedia/music/spotify/pspec.xml
sudo eopkg it spotify*.eopkg;sudo rm spotify*.eopkg
```

## Network

### AnyDesk

``` bash
sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/network/util/anydesk/pspec.xml
sudo eopkg it anydesk*.eopkg;sudo rm anydesk*.eopkg
```

### Insync

``` bash
sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/network/download/insync/pspec.xml
sudo eopkg it insync*.eopkg;sudo rm insync*.eopkg
```

### Spideroak

``` bash
sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/network/download/spideroak/pspec.xml
sudo eopkg it spideroak*.eopkg;sudo rm spideroak*.eopkg
```

### Synology Cloud Station Drive

``` bash
sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/network/download/synology-cloud-station-drive/pspec.xml
sudo eopkg it synology-cloud-station-drive*.eopkg;sudo rm synology-cloud-station-drive*.eopkg
```

### TeamViewer

``` bash
sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/network/util/teamviewer/pspec.xml
sudo eopkg it teamviewer*.eopkg;sudo rm teamviewer*.eopkg
sudo systemctl start teamviewerd.service
```

## Office

### Mendeley Desktop

``` bash
sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/office/mendeleydesktop/pspec.xml
sudo eopkg it mendeleydesktop*.eopkg;sudo rm mendeleydesktop*.eopkg
```

### Microsoft Core Fonts

``` bash
sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/desktop/font/mscorefonts/pspec.xml
sudo eopkg it mscorefonts*.eopkg;sudo rm mscorefonts*.eopkg
```

### Moneydance

``` bash
sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/office/moneydance/pspec.xml
sudo eopkg it moneydance*.eopkg;sudo rm moneydance*.eopkg
```

### PomoDoneApp

``` bash
sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/office/pomodoneapp/pspec.xml
sudo eopkg it pomodoneapp*.eopkg;sudo rm pomodoneapp*.eopkg
```

### Scrivener

``` bash
sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/office/scrivener/pspec.xml
sudo eopkg it scrivener*.eopkg;sudo rm scrivener*.eopkg
```

## Programming

### Android Studio

``` bash
sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/programming/android-studio/pspec.xml
sudo eopkg it android-studio*.eopkg;sudo rm android-studio*.eopkg
```

### CLion

``` bash
sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/programming/clion/pspec.xml
sudo eopkg it clion*.eopkg;sudo rm clion*.eopkg
```

### Datagrip

``` bash
sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/programming/datagrip/pspec.xml
sudo eopkg it datagrip*.eopkg;sudo rm datagrip*.eopkg
```

### Git Kraken

``` bash
sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/programming/gitkraken/pspec.xml
sudo eopkg it gitkraken*.eopkg;sudo rm gitkraken*.eopkg
```

### IDEA

``` bash
sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/programming/idea/pspec.xml
sudo eopkg it idea*.eopkg;sudo rm idea*.eopkg
```

### PHPStorm

``` bash
sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/programming/phpstorm/pspec.xml
sudo eopkg it phpstorm*.eopkg;sudo rm phpstorm*.eopkg
```

### Pycharm

``` bash
sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/programming/pycharm/pspec.xml
sudo eopkg it pycharm*.eopkg;sudo rm pycharm*.eopkg
```

### Rider

``` bash
sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/programming/rider/pspec.xml
sudo eopkg it rider*.eopkg;sudo rm rider*.eopkg
```

### RubyMine

``` bash
sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/programming/rubymine/pspec.xml
sudo eopkg it rubymine*.eopkg;sudo rm rubymine*.eopkg
```

### Sublime Text 3

``` bash
sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/programming/sublime-text-3/pspec.xml
sudo eopkg it sublime*.eopkg;sudo rm sublime*.eopkg
```

### WebStorm

``` bash
sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/programming/webstorm/pspec.xml
sudo eopkg it webstorm*.eopkg;sudo rm webstorm*.eopkg
```

## Security

### Enpass

``` bash
sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/security/enpass/pspec.xml
sudo eopkg it enpass*.eopkg;sudo rm enpass*.eopkg
```

## Other

### Google Earth

``` bash
sudo eopkg bi --ignore-safety https://raw.githubusercontent.com/getsolus/3rd-party/master/network/web/google-earth/pspec.xml
sudo eopkg it google-earth*.eopkg;sudo rm google-earth*.eopkg
```
