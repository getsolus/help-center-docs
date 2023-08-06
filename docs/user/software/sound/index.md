---
title: Sound
summary: Configuration of sound systems on Solus
---

# Sound

Solus comes with PulseAudio configured by default.
It is possible to switch to PipeWire manually using the instructions below.

## PipeWire

PipeWire is a multimedia framework aimed to replace PulseAudio.
Installing it can be done by installing PipeWire and WirePlumber:

```console
sudo eopkg it pipewire wireplumber
```

Subsequently enable the user services, and disable PulseAudio (without sudo!):

```console
systemctl --user enable --now pipewire.socket pipewire-pulse.socket wireplumber.service
systemctl --user mask app-pulseaudio@autostart.service
```

You should now be using PipeWire. This can be verified using:

```
pactl info | grep '^Server Name'
```

Which should show something like the following:

```
Server Name: PulseAudio (on PipeWire 0.3.71)
```

Try logging out and in again if your system has not switched yet.
