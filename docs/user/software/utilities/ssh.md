---
title: SSH
summary: Quick Start guide to SSH on Solus
---

Solus uses [OpenSSH](https://www.openssh.org/) for remote login over the SSH protocol.

## Installation

OpenSSH is installed as a part of the base operating system. The OpenSSH server (`sshd`), however, is not installed on Solus by default, as this is a desktop-focused operating system.

To install the SSH server, install the `openssh-server` package.

```bash
eopkg install openssh-server
```

## Usage

For more information about how to use OpenSSH, check out their [online user manual](https://www.openssh.org/manual.html).

### Automatically start `sshd`

By default, the `sshd` service does not automatically start on Solus. If you want the server to start automatically, install the `openssh-server-preset` package.

```bash
eopkg install openssh-server-preset
```

## Default configuration

Solus ships some default configurations for OpenSSH and the OpenSSH server. Our packages also support configuration snippets that can be placed in the respective directories for `openssh` and `openssh-server`. Configuration file names must end in `.conf`.

1. `/etc/ssh/ssh_config.d/`
2. `/etc/ssh/sshd.config.d/`

### SSH

The default SSH configuration sends a keep-alive packet every 120 seconds.

### SSH Server

The default `sshd` configuration sets a couple of options.

1. PAM is to be used by default.
2. `COLORTERM` is added to the accepted environment.
3. `PrintMotd` is set to off. It is recommended to use `pam_motd` in `/etc/pam.d/sshd` instead of `PrintMotd`.
