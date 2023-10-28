---
title: Command Line
summary: Installation and configuration of popular command line programs on Solus
---

# Command Line

## Changing Shell

When using a terminal session to perform command-line activities, a Unix shell is used to interpret commands. The default shell on Solus is Bash, however changing your shell may enable additional features and functionality.

Solus makes available other shells via our repository, with a full list available in `/usr/share/defaults/etc/shells`. Common shells, aside from Bash, are:

- [Dash](http://gondor.apana.org.au/~herbert/dash/)
- [Fish](https://fishshell.com/)
- [Zsh](http://zsh.sourceforge.io/)

### Installation

In order to use a shell different from Bash, you may need to install the respective package for the shell to be able to work. You will find those packages in the Software-Center within the _System utilities_ category, or via the command-line with `sudo eopkg install <Name of the Shell>`.

Example:

```bash
sudo eopkg install fish
```

### Switching

To switch to another shell, first install the appropriate package, followed by the command `chsh` (change shell) to change the shell for your user session, using the path provided in `/usr/share/defaults/etc/shells`. Lastly you need to log out and back in again for the change to take effect.

Example:

- For Zsh: `chsh -s /bin/zsh`

- For Fish: `chsh -s /usr/bin/fish`

### Troubleshooting

If the default shell is not changed, you must add the shell to `/etc/shells` via the command `sh` with `sudo`.

Example:

- For Zsh: `echo "/bin/zsh" | sudo tee -a /etc/shells`

- For Fish: `echo "/usr/bin/fish" | sudo tee -a /etc/shells`

## fzf

[fzf](https://github.com/junegunn/fzf) is a general-purpose command-line fuzzy finder. It can be used as an interactive Unix filter with any list: files, command history, processes, hostnames, bookmarks, git commits, etc.

### Installation

The fzf project consists of the following components: an `fzf` executable, an `fzf-tmux` script for launching fzf in a tmux pane, shell extensions (including key bindings and command-line fuzzy auto-completion), and a vim/Neovim plugin file. They are all available in the `fzf` package in the Software Center or via eopkg in a terminal:

```bash
sudo eopkg it fzf
```

The shell extensions are not enabled by default after the `fzf` package is installed. The procedures to enable these features are described below. For more tips and examples on the usage of `fzf`, visit its [github](https://github.com/junegunn/fzf) and [wiki](https://github.com/junegunn/fzf/wiki/examples) pages.

### Fuzzy Auto-Completion

[Fuzzy completion](https://github.com/junegunn/fzf#fuzzy-completion-for-bash-and-zsh) for files and directories can be triggered by a trigger sequence (`**` by default) followed by the `TAB` key for `bash` and `zsh`. To enable this feature, add the following lines to the shell configuration file depending on the shell you use (`~/.bashrc` for `bash` and `~/.zshrc` for `zsh`).

#### Bash

```bash
FZF_COMPLETION_FILE=/usr/share/bash-completion/completions/fzf
[[ -f $FZF_COMPLETION_FILE ]] && source $FZF_COMPLETION_FILE
```

#### Zsh

```bash
FZF_COMPLETION_FILE=/usr/share/zsh/site-functions/_fzf
[[ -f $FZF_COMPLETION_FILE ]] && source $FZF_COMPLETION_FILE
```

### Key Bindings

`fzf` can use specific [key bindings](https://github.com/junegunn/fzf#key-bindings-for-command-line) to trigger a search over a list of files, command history and directories and paste the result onto the command-line. Follow these steps to set up the key bindings for your favorite shell.

#### Bash

Add the following content to `~/.bashrc`:

```bash
FZF_KEYBINDING_FILE=/usr/share/fzf/key-bindings.bash
[[ -f $FZF_KEYBINDING_FILE ]] && source $FZF_KEYBINDING_FILE
```

#### Fish

First create the following directory if it does not already exist:

```bash
mkdir -p $HOME/.config/fish/functions
```

`cd` into this directory and make a file `fish_user_key_bindings.fish` with the following content:

```bash
function fish_user_key_bindings
  fzf_key_bindings
end
```

Then create the following symlink:

```bash
ln -s /usr/share/fzf/key-bindings.fish $HOME/.config/fish/functions/fzf_key_bindings.fish
```

#### Zsh

Add the following content to `~/.zshrc`:

```bash
FZF_KEYBINDING_FILE=/usr/share/fzf/key-bindings.zsh
[[ -f $FZF_KEYBINDING_FILE ]] && source $FZF_KEYBINDING_FILE
```

## Powerline Shell Prompt

[Powerline](https://github.com/powerline) is a statusline plugin for vim, and provides statuslines and prompts for several other applications, including zsh, bash, tmux, IPython, Awesome and Qtile.

### Installation

Powerline has two components, the plugin system itself `powerline` and the
fonts `powerline-fonts`. Both are available in the Software Center or via `eopkg` in a terminal:

```bash
sudo eopkg it powerline powerline-fonts
```

To get powerline working inside your terminal, you need to add the following commands to the `.bashrc` inside your `$HOME` directory.

### Shell Prompts

The Powerline daemon is not running automatically by any of the bindings. It is advised to add the following before any other powerline-related code in the shell configuration file

```bash
powerline-daemon -q
```

#### Bash

```bash
powerline-daemon -q
POWERLINE_BASH_CONTINUATION=1
POWERLINE_BASH_SELECT=1
source /usr/lib/python3.10/site-packages/powerline/bindings/bash/powerline.sh
```

#### Busybox and dash

```bash
source /usr/lib/python3.10/site-packages/powerline/bindings/shell/powerline.sh
```

#### Fish

```bash
source /usr/lib/python3.10/site-packages/powerline/bindings/fish/powerline-setup.fish
```

#### Zsh

```bash
source /usr/lib/python3.10/site-packages/powerline/bindings/zsh/powerline.zsh
```

Read more about powerline on its [docs website](https://powerline.readthedocs.io/en/master/usage.html#shell-prompts-requirements)
