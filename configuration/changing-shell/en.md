+++
title = "Changing Shell"
+++
# Changing Shell

When using a terminal session to do stuff from the command-line you're in fact using a Shell. It is an interpreter with an interface for users to interact with. It undertands what you write and processes the command and its related tasks.

A Unix shell is a command-line interpreter that provides an interface and functionalities for your terminal, one of the most fundamental tool in a Operative System.
With a shell you are able to do a lot of tasks from the command-line :
  - Listing files in a directory with the command `ls`
  - Creating a directory with the command `mkdir`
  - Moving a file with `mv`
  - Launching a software from the command-line (`firefox` for example)
  - And a lot more useful things that you can do with a graphical interface


The most known and used shell in Linux is *bash* as it comes installed and activated on most distribution out-of-the-box.

Other shells exist, such as :
  - Dash
  - Fish
  - Zsh
  
A list of available shells on Solus is in `/usr/share/defaults/etc/shells`.

In order to use a shell different from _Bash_ you will have to install the proper package for the shell to be able to work. You will find thoses packages in the Software-Center within the _System utilities_ category.  
You can also install those packages from the command-line with `sudo eopkg install <Name of the Shell>`:

Example:
```
sudo eopkg install fish
```

If you want to switch from *bash* to another shell in your terminal you have to use the command `chsh` to do that (alongside installing the proper package for your shell).

The command is used with `sudo` rights to change the shell for your user session.

Example:
````
sudo chsh -s /bin/zsh $(whoami)
```
