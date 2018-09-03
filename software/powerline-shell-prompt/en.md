+++
title = "Powerline Shell Prompt"
lastmod = "2018-09-03T23:19:59+02:00"
+++
# Powerline Shell Prompt

[Powerline](https://github.com/powerline) is a statusline plugin for vim, and provides statuslines and prompts for several other applications, including zsh, bash, tmux, IPython, Awesome and Qtile.

## Installation 

Powerline has two components, the plugin system itself ([powerline](https://dev.solus-project.com/source/powerline/)) and the 
fonts ([powerline-fonts](https://dev.solus-project.com/source/powerline-fonts/)). Both are available in the Software Center or via eopkg in a terminal:

``` bash
sudo eopkg it powerline powerline-fonts
```
To get powerline working inside your terminal, you need to add the following commands to the `.bashrc` inside your `$HOME` directory.

## Shell prompts

The Powerline daemon is not running automatically by any of the bindings. It is advised to add

``` bash
powerline-daemon -q
```
before any other powerline-related code in the shell configuration file

## Bash prompt

Since without powerline daemon bash bindings are very slow PS2 (continuation) and PS3 (select) prompts are not set up. Thus it is advised to use

``` bash
powerline-daemon -q
POWERLINE_BASH_CONTINUATION=1
POWERLINE_BASH_SELECT=1
source /usr/lib/python3.6/site-packages/powerline/bindings/bash/powerline.sh
```

## Zsh prompt

``` bash
source /usr/lib/python3.6/site-packages/powerline/bindings/zsh/powerline.zsh
```

## Fish prompt

``` bash
source /usr/lib/python3.6/site-packages/powerline/bindings/fish/powerline-setup.fish
```

## Busybox and dash prompt

``` bash
source /usr/lib/python3.6/site-packages/powerline/bindings/shell/powerline.sh
```

Read more about powerline inside the Docs [Link](https://powerline.readthedocs.io/en/master/usage/shell-prompts.html#)
