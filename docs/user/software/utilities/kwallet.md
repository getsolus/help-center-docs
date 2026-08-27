---
title: KDE Wallet
summary: A quick introduction to using KWallet on Solus
---

# KDE Wallet and SSH keys

In KDE Plasma, the KDE Wallet is responsible for securely storing and supplying user credentials to the various KDE applications that request them. It is unlocked when you log in.

When using SSH keys with passphrases (see [working with SSH key passphrases][1]) they can be unlocked automatically when the passwords are stored in KWallet. To do so, click the checkbox to remember the password when you are prompted to unlock the key.

## Troubleshooting

If you do not see the password prompt, it is possible that something is either wrong with the SSH agent and/or the password prompt utility. To see if they are configured correctly, check the output of the following command:

```console
echo $SSH_AUTH_SOCK $SSH_ASKPASS $SSH_ASKPASS_REQUIRE
```

It should show:

```
/run/user/1000/ssh-agent.socket /usr/bin/ksshaskpass prefer
```

You can try manually forcing the password prompt with:

```bash
env SSH_ASKPASS=/usr/bin/ksshaskpass \
    SSH_ASKPASS_REQUIRE=force \
    ssh-add
```

Please file an issue on [our issue tracker][2] if the problem persists.

[1]: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases
[2]: https://issues.getsol.us
