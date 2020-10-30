+++
title = "Configuring a SteelSeries headset"
lastmod = "2020-10-29T01:52:45+00:00"
+++
# Configuring a SteelSeries headset

1. First find the correct hardware information for your headset (here's what it looks like for mine). For mine I had to use the one with "USB Hub" in the name.
```bash
❯ lsusb |grep -i steel                                                                                   
Bus 003 Device 005: ID 1038:1294 SteelSeries ApS
Bus 003 Device 006: ID 1038:1290 SteelSeries ApS General Purpose USB Hub # This is the one I use
```

Note the numbers after "ID", here's what you'll use them for

    1038 - idVendor
    1290 - idProduct

If you're unsure, just pick one of the entries. If it doesn't work, try the other one.

2. You'll need to create a file as root in `/etc/udev/rules.d`
The filename is `90-pulseaudio-steelseries-arctis.rules`
In this example I'm using the file editor nano but you can use whatever editor you like.

```bash
cd /etc/udev/rules.d
nano 90-pulseaudio-steelseries-arctis.rules
```

3. The contents of the file will be as follows, copy & paste this in. Substitute the correct number after idProduct.

```
SUBSYSTEM=="sound", ACTION=="change", KERNEL=="card*", SUBSYSTEMS=="usb", ATTRS{idVendor}=="1038", ATTRS{idProduct}=="1290", ENV{PULSE_PROFILE_SET}="steelseries-arctis-usb-audio.conf"
```

4. Reboot the system (just re-loading the udev rules didn't make the new settings show up for me).
Look in your audio device settings. You should now have a device with "Arctic" in the name (mine is Arctic Pro Wireless). It should have various entries for mono and stereo. 

5. If you want to test it out, listen to a stereo track with some decent left / right separation. I've used "Bohemian Rhapsody" by Queen. Around the 3:10 mark the vocals separate between the left and right channels.



This is adapated from [documentation aimed at Ubuntu](https://brokkr.net/2018/05/22/fixing-the-steelseries-arctis-7-outputs-on-ubuntu-18-04-pulseaudio-11/)
