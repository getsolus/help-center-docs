+++
title = "Powerline Shell Prompt"
lastmod = "2018-08-16T22:15:40+02:00"
+++
# Powerline Shell Prompt

[Powerline](https://github.com/powerline) is a statusline plugin for vim, and provides statuslines and prompts for several other applications, including zsh, bash, tmux, IPython, Awesome and Qtile.

## Installation 

Powerline has two components, the plugin system itself ([powerline](https://dev.solus-project.com/source/powerline/)) and the 
fonts ([powerline-fonts](https://dev.solus-project.com/source/powerline-fonts/)). Both are available in the Software Center or via eopkg in a terminal:

``` bash
sudo eopkg it powerline powerline-fonts
```

## Shell Setup 

Note: this is setup per-user.

``` bash
echo "source /usr/lib/python3.6/site-packages/powerline/bindings/bash/powerline.sh" >> ~/.bashrc
```
