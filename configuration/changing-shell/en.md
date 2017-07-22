+++
title = "Changing Shell"
lastmod = "2017-05-25T18:19:11+03:00"
+++
# Changing Shell

When using a terminal session to perform command-line activities, a Unix shell is used to interpret commands. The default shell on Solus is Bash, however changing your shell may enable additional features and functionality.

Solus makes available other shells via our repository, with a full list available in `/usr/share/defaults/etc/shells`. Common shells, aside from Bash, are:

- Dash
- [Fish](https://fishshell.com/)
- [Zsh](http://zsh.sourceforge.net/)

## Installation

In order to use a shell different from Bash, you may need to install the respective package for the shell to be able to work. You will find thoses packages in the Software-Center within the *System utilities* category, or via the command-line with `sudo eopkg install <Name of the Shell>`.

Example:

``` bash
sudo eopkg install fish
```

## Switching

To switch to another shell, first install the appropriate package, followed by the command `chsh` (change shell) with `sudo` to change the shell for your user session.

Example:

``` bash
sudo chsh -s /bin/zsh $(whoami)
```
