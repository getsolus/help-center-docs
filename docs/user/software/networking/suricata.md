---
title: Suricata
summary: A quick start guide to using Suricata on Solus
---

# Suricata

Suricata is a network Intrusion Detection System, Intrusion Prevention System, and Network Security Monitoring engine developed by the OISF and the Suricata community.

## Installation

To install Suricata on Solus, you must use `eopkg` from the command line.

```bash
sudo eopkg install suricata
```

## Configuration

Suricata requires some configuration before it will run. As with most packages on Solus, Suricata is [stateless](/docs/user/software/configuration_files). The default configuration files are located in `/usr/share/defaults/suricata`.

To begin configuring, first copy these files to `/etc/suricata`.

```bash
sudo cp -r /usr/share/defaults/suricata /etc/suricata
```

Give the Suricata system user permission to read files in this directory.

```bash
sudo chown -R suricata:suricata /etc/suricata
```

Feel free to change any configuration options at this point.

Next, you will need to create a file named `/etc/sysconfig/suricata`, and set a variable called `OPTIONS`. This file will be used by systemd to add parameters to the command to start Suricata. Copy the following text, and modify the variables to suit your system.

```ini
# The following parameters are the most commonly needed to configure
# suricata. A full list can be seen by running /usr/bin/suricata --help
# -c <path to configuration file>
# -i <network interface device>
# --user <acct name>
# --group <group name>
# Add options to be passed to the daemon
OPTIONS="-c /etc/suricata/suricata.yaml -i enp42s0 --user suricata "
```

### Adding rules

Our package ships with minimal rules. For Suricata to do its job, it must have better rules. Rules can be obtained from a couple places. One place you can get rules from is the Emerging Threats website. For example:

```bash
wget https://rules.emergingthreats.net/open/suricata/emerging.rules.tar.gz
sudo mkdir /etc/suricata/rules
sudo tar -xz -C /etc/suricata/rules/ --strip-components=1 -f emerging.rules.tar.gz
sudo chown -R suricata:suricata /etc/suricata/rules
```

Then, open `/etc/suricata/suricata.yaml` and search for a setting key named `rule-files`. Enable or disable individual rules as you see fit.

## Starting and stopping Suricata

:::warning
Suricata does not start on boot by default. You need to either start it manually, or configure it to start automatically.
:::

```bash
# Start Suricata manually
systemctl start suricata.service

# Check whether Suricata is running
systemctl status suricata.service

# Restart Suricata manually
systemctl restart suricata.service

# Stop Suricata manually
systemctl stop suricata.service
```

### Managing service autostart

To enable the systemd service so that it runs automatically, even after package upgrades, you need to create a [systemd preset](https://www.freedesktop.org/software/systemd/man/latest/systemd.preset.html).

```bash
# Create the directory if it doesn't exist
sudo mkdir -p /etc/systemd/system-preset

# Edit the new preset file
sudo nano /etc/systemd/system-preset/40-suricata.preset
```

In the preset file, paste the following.

```text
enable suricata.service
```

Save and close the file, then enable the service.

```bash
systemctl enable --now suricata.service
```

The service will now automatically start. To undo this, remove the preset file and disable the service.

```bash
sudo rm /etc/systemd/system-preset/40-suricata.preset
systemctl disable --now suricata.service
```
