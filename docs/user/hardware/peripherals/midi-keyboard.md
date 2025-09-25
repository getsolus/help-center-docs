---
title: MIDI Keyboards
summary: Install and configure MIDI keyboards on Solus.
---

Solus is compatible with a wide variety of USB MIDI keyboards. To configure your MIDI keyboard in Solus, do the following:

1. Install the following packages:

   | Package           | Description                                       |
   | ----------------- | ------------------------------------------------- |
   | `qsynth`          | A frontend for `fluidsynth`                       |
   | `qjackctl`        | A controller for the JACK audio server            |
   | `fluid-soundfont` | An open source soundfont to use with `fluidsynth` |

   You can install the packages through Discover (Solus Plasma), GNOME Software, or by running the following command:

   ```bash
   sudo eopkg it qsynth qjackctl fluid-soundfont
   ```
2. Set up a soundfont in Qsynth.

   Qsynth needs soundfonts to produce audio when it receives MIDI input.

   1. Open Qsynth.
   2. Go to **Setup...** > **Soundfonts** > **Open...**.
   3. Select the soundfont you want to set up.
   4. Click **OK**

   ![QSynth SoundFont](qsynth-soundfont.jpg)

3. Connect the keyboard into your computer.

   Make sure the keyboard is on.

4. Enable the keyboard using QjackCtl.

   :::warning[Important]
   
   You need to do this step every time you disconnect or turn off your keyboard.
   
   :::

   1. Open QjackCtl.
   2. Click **Graph**.
   3. Drag the output of your keyboard to the input called **FLUID Synth**.

   ![QJackCtl Connect](qjackctl-connect.jpg)


You can now use Qsynth to play on your keyboard.