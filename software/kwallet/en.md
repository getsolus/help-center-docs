+++
title = "KDE Wallet and SSH keys"
lastmod = "2019-09-17T55:50:00+02:00"
+++
# KDE Wallet and SSH keys

In KDE Plasma, the KDE Wallet is responsible for securely storing and supplying user credentials to the various KDE applications that request them.

Out of the box, the Solus KDE Plasma Desktop is already configured to use the KDE Wallet PAM module, which unlocks the KDE Wallet on session login.

However, additional configuration is needed to make the KDE Wallet manage SSH key passphrases.

## Prerequisites

This document assumes that you are familiar with utilising SSH key passphrases.

For more information, see [working with SSH key passphrases](https://help.github.com/en/articles/working-with-ssh-key-passphrases)

## The `SSH_ASKPASS` environment variable

The `SSH_ASKPASS` environment variable tells the SSH subsystem which application to use when prompting the user for SSH key passphrases.

On the Solus KDE Plasma Desktop spin, `ksshaskpass` is installed out of the box and `SSH_ASKPASS` is set to `ksshaskpass` in the file `/usr/share/xdg/plasma-workspace/env/50-solus-defaults.sh` by default.

## Create `~/.config/autostart-scripts/ssh-add.sh` 

The contents of `~/.config/autostart-scripts/ssh-add.sh` should reflect the SSH keys you want to manage using the KDE Wallet.

### Example

Below is an example of the contents of `.config/autostart-scripts/ssh-add.sh`:

```
#!/bin/sh

ssh-add $HOME/.ssh/id_rsa $HOME/.ssh/solus_id_rsa </dev/null
```

After creating this file, you will need to make it executable:

`chmod a+x ~/.config/autostart-scripts/ssh-add.sh`

## Re-log to test your changes

After logging out and back in, you should now be prompted by the KDE Wallet to input your SSH key passphrases.

## Unlock SSH key passphrases automatically on login

KDE Wallet supports automatically unlocking your SSH key passphrases on login.

For this to work, your KDE Wallet password needs to be identical to your login password.
