---
title: Wireshark
summary: A quick start guide to Wireshark on Solus
---

# Wireshark

[Wireshark](https://www.wireshark.org/) is a widely-used network protocol analyzer that lets you see what’s happening on a network at a microscopic level.

## Installation

Wireshark can be installed either from the Software Center or via terminal:

```bash
sudo eopkg it wireshark
```

## Use wireshark as a non-root user

For security reasons, it is strongly unadvised to run Wireshark as root. To capture packets as non-root user, execute these commands:

```bash
sudo gpasswd -a $USER wireshark
sudo setcap cap_dac_override,cap_net_admin,cap_net_raw+eip /usr/bin/dumpcap
```

## Usage

Wireshark [User’s Guide](https://www.wireshark.org/docs/wsug_html_chunked/) and [learning material](https://www.wireshark.org/docs/) are available on [https://wireshark.org](https://wireshark.org).
