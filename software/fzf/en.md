+++
title = "fzf"
lastmod = "2019-10-07T15:55:50+02:00"
+++

# fzf

[fzf](https://github.com/junegunn/fzf) is a general-purpose command-line fuzzy finder. It can be used as an interactive Unix filter with any list: files, command history, processes, hostnames, bookmarks, git commits, etc.

## Installation

The fzf project consists of the following components: an `fzf` executable, an `fzf-tmux` script for launching fzf in a tmux pane, shell extensions (including key bindings and command-line fuzzy auto-completion), and a vim/Neovim plugin file. They are all available in the `fzf` package in the Software Center or via eopkg in a terminal:

``` bash
sudo eopkg it fzf
```

The shell extensions are not enabled by default after the `fzf` package is installed. The procedures to enable these features are described below. For more tips and examples on the usage of `fzf`, visit its [github](https://github.com/junegunn/fzf) and [wiki](https://github.com/junegunn/fzf/wiki/examples) pages.

## Fuzzy Auto-Completion

[Fuzzy completion](https://github.com/junegunn/fzf#fuzzy-completion-for-bash-and-zsh) for files and directories can be triggered by a trigger sequence (`**` by default) followed by the `TAB` key for `bash` and `zsh`. To enable this feature, add the following lines to the shell configuration file depending on the shell you use (`~/.bashrc` for `bash` and `~/.zshrc` for `zsh`).

### Bash

``` bash
FZF_COMPLETION_FILE=/usr/share/bash-completion/completions/fzf
[[ -f $FZF_COMPLETION_FILE ]] && source $FZF_COMPLETION_FILE
```

### Zsh

``` bash
FZF_COMPLETION_FILE=/usr/share/zsh/site-functions/_fzf
[[ -f $FZF_COMPLETION_FILE ]] && source $FZF_COMPLETION_FILE
```

## Key Bindings

`fzf` can use specific [key bindings](https://github.com/junegunn/fzf#key-bindings-for-command-line) to trigger a search over a list of files, command history and directories and paste the result onto the command-line. Follow these steps to set up the key bindings for your favorite shell.

### Bash

Add the following content to `~/.bashrc`

``` bash
FZF_KEYBINDING_FILE=/usr/share/fzf/key-bindings.bash
[[ -f $FZF_KEYBINDING_FILE ]] && source $FZF_KEYBINDING_FILE
```

### Fish

First create the following directory if it does not already exist

``` bash
mkdir -p $HOME/.config/fish/functions
```

`cd` into this directory and make a file `fish_user_key_bindings.fish` with the following content

``` bash
function fish_user_key_bindings
  fzf_key_bindings
end
```

Then create the following symlink

``` bash
ln -s /usr/share/fzf/key-bindings.fish $HOME/.config/fish/functions/fzf_key_bindings.fish
```

### Zsh

Add the following content to `~/.zshrc`

``` bash
FZF_KEYBINDING_FILE=/usr/share/fzf/key-bindings.zsh
[[ -f $FZF_KEYBINDING_FILE ]] && source $FZF_KEYBINDING_FILE
```
