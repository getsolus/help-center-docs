+++
title = "Changing Shell"
+++
# Changing Shell

A Unix shell is a command-line interpreter or shell that provides a traditional user interface for the Unix operating system and for Unix-like systems.
Users direct the operation of the computer by entering commands as text for a command line interpreter to execute or by creating text scripts of one or more such commands.

A Unix shell is a command-line interpreter that provides an interface and functionalities for your terminal. The most known and used shell in Linux is *bash* as it comes installed and activated on most distribution out-of-the-box.

Other shells exist, such as :
  - Dash
  - Fish
  - Zsh
  
A list of available shells on Solus is in `/usr/share/defaults/etc/shells`.

If you want to switch from *bash* to another shell in your terminal you have to use the command `chsh` to do that (alongside installing the proper package for your shell).

The command is used with `sudo` rights to change the shell for your user session.

Exemple:
````
sudo chsh -s /bin/zsh $(whoami)
```
