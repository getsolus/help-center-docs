---
title: Sound
summary: Configuration of sound systems on Solus
---

# Sound

Solus comes with Pipewire configured by default.

## Pipewire as a JACK Replacement

Install `pipewire-jack` by executing the following command:

```bash
sudo eopkg it pipewire-jack
```

Currently, using `pipewire-jack` as a `JACK` replacement is not as smooth as one would think. You need to do some manual configuration to get JACK apps to behave appropriately.

### Issues to be fixed

With no configuration, `pipewire` doesn't switch to the appropriate sample rate for the project.

![Pipewire Rates Issue](ardour-pipewire-rates-issue.png)

### Configuration


1. Open the terminal and input the following commands:

```bash
cd .config/
mkdir -p pipewire/pipewire.conf.d/
sudo cp /usr/share/pipewire/pipewire.conf.avail/10-rates.conf pipewire/pipewire.conf.d/
sudo cp /usr/share/pipewire/jack.conf pipewire/
sudo chown yourUserName:yourUserName pipewire/jack.conf pipewire/pipewire.conf.d/10-rates.conf
```

2. Open the `jack.conf` in your text editor and:

    1. Search for `node.rate`.
    2. Uncomment `node.rate`.
    3. Input the sample rate you wish JACK applications to open with after the `1/`.
    Common rates: 44100, 48000, 88200, 96000.

    Without this Pipewire doesn't dynamically adjust the sample rate for you whenever a JACK application opens.

![jack.conf change gif](config-change.gif)

3. Reboot your system.

:::note
After applying the configuration, there are delays of up to 2 seconds when beginning to play audio due to the `10-rates.conf` that allows `Pipewire` to change sample rates dynamically. 

After the sample rate is set, there are no delays.
:::

### Not Done Yet

Enable the pro audio sound configuration for our card to avoid pops and crackles (also known as [Xruns](https://alsa.opensrc.org/Xruns)).

**On Budgie**: Install `pavucontrol`.

```bash
sudo eopkg it pavucontrol
```

Open `pavucontrol`, go to the **Configuration** tab and select the **Pro Audio** option from the dropdown menu for your card.

![Pavucontrol Config Change](pavu-config.gif)

**On KDE**: Go to the `Audio` section of system settings. Select the **Pro Audio** option from the dropdown menu for your card.

All is done! Happy audio production!!

### Limits

If this is annoying you

![Ardour warning about the limited amount of locked memory](ulimits.png)

You can adjust it by configuring the `limits.conf`. In this case we'll be using the `limits.d` for simplicity.

Input the commands below

```bash
sudo mkdir -p /etc/security/limits.d/
echo "@audio   -  memlock    unlimited" | sudo tee -a /etc/security/limits.d/audio.conf
```

**On Budgie**: Log out and log back in for changes to take effect

**On KDE**: Reboot the system
