+++
title = "Powerline Shell Prompt"
+++
# Powerline Shell Prompt

[Powerline](https://github.com/powerline) is a statusline plugin for vim, and provides statuslines and prompts for several other applications, including zsh, bash, tmux, IPython, Awesome and Qtile.

## Installation 

Powerline has two components, the plugin system itself ([powerline](https://git.solus-project.com/packages/powerline/)) and the 
fonts ([powerline-fonts](https://git.solus-project.com/packages/powerline-fonts)). Both are available in the Software Center or via eopkg in a terminal:

``` bash
sudo eopkg it powerline powerline-fonts
```

## Shell Setup 

Note: this is setup per-user.

``` bash
echo "source /usr/lib/python2.7/site-packages/powerline/bindings/bash/powerline.sh" >> ~/.bashrc
```
