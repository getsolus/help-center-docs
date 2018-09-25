+++
title = "Powerline Shell Prompt"
lastmod = "2018-09-25T15:55:50+02:00"
+++
# Powerline Shell Prompt

[Powerline](https://github.com/powerline) is a statusline plugin for vim, and provides statuslines and prompts for several other applications, including zsh, bash, tmux, IPython, Awesome and Qtile.

## Installation 

Powerline has two components, the plugin system itself ([powerline](https://dev.getsol.us/source/powerline/)) and the 
fonts ([powerline-fonts](https://dev.getsol.us/source/powerline-fonts/)). Both are available in the Software Center or via eopkg in a terminal:

``` bash
sudo eopkg it powerline powerline-fonts
```
To get powerline working inside your terminal, you need to add the following commands to the `.bashrc` inside your `$HOME` directory.

## Shell Prompts

The Powerline daemon is not running automatically by any of the bindings. It is advised to add the following before any other powerline-related code in the shell configuration file

``` bash
powerline-daemon -q
```
### Bash 

Since without powerline daemon bash bindings are very slow PS2 (continuation) and PS3 (select) prompts are not set up. Thus it is advised to use

``` bash
powerline-daemon -q
POWERLINE_BASH_CONTINUATION=1
POWERLINE_BASH_SELECT=1
source /usr/lib/python3.6/site-packages/powerline/bindings/bash/powerline.sh
```

### Busybox and dash 

``` bash
source /usr/lib/python3.6/site-packages/powerline/bindings/shell/powerline.sh
```

### Fish 

``` bash
source /usr/lib/python3.6/site-packages/powerline/bindings/fish/powerline-setup.fish
```

### Zsh 

``` bash
source /usr/lib/python3.6/site-packages/powerline/bindings/zsh/powerline.zsh
```

Read more about powerline inside the Docs [Link](https://powerline.readthedocs.io/en/master/usage/shell-prompts.html#)
