+++
title = "Using USB connected MIDI Keyboards"
lastmod = "2019-04-14T11:20:00+01:00"
+++
# Using USB connected MIDI Keyboards

These instructions will guide you through how to set up and use a USB-connected MIDI Keyboard on Solus. This will easily let you use the keyboard to play music with a wide set of instruments.

## Installing required software

First we'll need to install `qsynth` and `qjackctl` using the following command:

``` bash
sudo eopkg it qsynth qjackctl
```

Then we want to install a soundfont in order to get sounds and instruments that play when you press the keys on the keyboard.

``` bash
mkdir -p $HOME/soundfonts
wget http://http.debian.net/debian/pool/main/f/fluid-soundfont/fluid-soundfont_3.1.orig.tar.gz -O $HOME/soundfonts/fluid-soundfont.tar.gz
cd $HOME/soundfonts && tar xvf fluid-soundfont.tar.gz fluid-soundfont-3.1/FluidR3_GM.sf2 --strip=1
rm fluid-soundfont.tar.gz
```

## Setting up the soundfonts in qsynth

In order to use the soundfonts we need to open up `qsynth` and set the soundfont `FluidR3_GM.sf2` (or any other soundfont) to be used. You do this by pressing `Setup...` and navigating to `Soundfonts`. In there you just click open and select your soundfont (should be placed in `~/soundfonts/`).

{{< altimg "qsynth-soundfont.jpg" "help-center/hardware/midi-keyboard/" >}}

## Connecting the keyboard

At this stage you need to first verify that the keyboard is plugged in and turned on. Now we just need to open up `qjackctl` to connect the keyboard on a software level. In `qjackctl` you press on `Graph` and drag the keyboard's output to the input called `FLUID Synth` (Your keyboard name will probably differ from the on in the image below). This step will need to be done every time you disconnect or turn off you keyboard.

{{< altimg "qjackctl-connect.jpg" "help-center/hardware/midi-keyboard/" >}}

You should now be ready to play on the keyboard using `qsynth`.

## Keyboard compatibility

The following keyboards have been tested and/or suggested to function correctly by our users.

This list should not suggest that *only* such devices listed below are compatible with Solus, as there may be devices not listed below that are in fact compatible.

### M-audio

- KeyRig 49
