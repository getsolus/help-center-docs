+++
title = "Using USB connected MIDI Keyboards"
lastmod = "2018-10-33T12:50:00+01:00"
+++
# Using USB connected MIDI Keyboards

These instructions will guide you through how to set up and use a USB connected  MIDI Keyboard with Solus, for playing music. Please not that not all keyboards are deemed to be working, but further down there is a section with keyboards that have been suggested to be working.

## Initial testing of Keyboard

Make sure to have the keyboard plugged in and powered on in order for it to be visible to the MIDI drivers.
Then run `lsusb` in the terminal to make sure that the keyboard is recognized. Example for M-audio KeyRig 49:

```
Bus 002 Device 008: ID 0763:019b M-Audio KeyRig 49
```

Now use `aconnect -i` to list all MIDI input ports. The keyboard should show up in the list if it's working correctly. Example for M-audio KeyRig 49:

```
client 24: 'KeyRig 49' [type=kernel,card=2]
    0 'KeyRig 49 MIDI 1'
```

You will need the client number for your input device further down in the article, but please note that yours might have a different number.

## Verifying functionality

Run `aseqdump -p ##` but replace ## with your keyboards client number. If it's working correctly you should see inputs showing up on screen when pressing keys, such as:

```
Waiting for data. Press Ctrl+C to end.
Source  Event                  Ch  Data
 24:0   Pitch bend              0, value 0
 24:0   Note on                 0, note 71, velocity 79
 24:0   Note off                0, note 71
```

## Playing some real sounds

Now that we have made sure that the keyboard is working and recognized in Linux, we will want to actually play some sounds in our speakers. For this we are using FluidSynth as a software synthesizer to take the MIDI inputs and turn them in to sounds. It can be installed by running the following command:

```
sudo eopkg it fluidsynth
```

FluidSynth uses SoundFonts for the audio, so you need to download one from the internet if you don't already have any. A good recommendation for an open source one is fluid-soundfont which is released under the MIT license. Use the following command to download and extract it:

```
mkdir -p $HOME/sf2
wget http://http.debian.net/debian/pool/main/f/fluid-soundfont/fluid-soundfont_3.1.orig.tar.gz -O $HOME/sf2/fluid-soundfont.tar.gz
cd $HOME/sf2/ && tar xvf fluid-soundfont.tar.gz fluid-soundfont-3.1/FluidR3_GM.sf2 --strip=1
rm fluid-soundfont.tar.gz
```

Next up we'll want to start FluidSynth with ALSA as the audio backend and using the SoundFont2 file that we just downloaded. It will complain about not being able to set thread priority, but you can just ignore it or alternatively run it as sudo if needed:

```
fluidsynth -a alsa -s -g 1.5 $HOME/sf2/FluidR3_GM.sf2
```

Lastly open a new terminal and connect the keyboard to FluidSynth. This must be done when FluidSynth is running and you need to replace ## with your MIDI client number:

```
aconnect ##:0 128:0
```


# Compatible MIDI Keyboards

The following keyboards have been tested and/or suggested to function correctly by our users.

This list should not suggest that *only* such devices listed below are compatible with Solus, as there may be devices not listed below that are in fact compatible.

## M-audio

- M-Audio KeyRig 49
