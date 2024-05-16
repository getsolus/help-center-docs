"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[168],{36891:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>h,toc:()=>t});var i=s(85893),l=s(11151);const o={title:"Command Line",summary:"Installation and configuration of popular command line programs on Solus"},a="Command Line",h={id:"user/software/command-line/index",title:"Command Line",description:"Changing Shell",source:"@site/docs/user/software/command-line/index.md",sourceDirName:"user/software/command-line",slug:"/user/software/command-line/",permalink:"/docs/user/software/command-line/",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/software/command-line/index.md",tags:[],version:"current",lastUpdatedAt:171586666e4,frontMatter:{title:"Command Line",summary:"Installation and configuration of popular command line programs on Solus"},sidebar:"userSidebar",previous:{title:"DroidCam",permalink:"/docs/user/software/camera/droidcam"},next:{title:"Configuration File Locations",permalink:"/docs/user/software/configuration_files"}},r={},t=[{value:"Changing Shell",id:"changing-shell",level:2},{value:"Installation",id:"installation",level:3},{value:"Switching",id:"switching",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"fzf",id:"fzf",level:2},{value:"Installation",id:"installation-1",level:3},{value:"Fuzzy Auto-Completion",id:"fuzzy-auto-completion",level:3},{value:"Bash",id:"bash",level:4},{value:"Zsh",id:"zsh",level:4},{value:"Key Bindings",id:"key-bindings",level:3},{value:"Bash",id:"bash-1",level:4},{value:"Fish",id:"fish",level:4},{value:"Zsh",id:"zsh-1",level:4},{value:"Powerline Shell Prompt",id:"powerline-shell-prompt",level:2},{value:"Installation",id:"installation-2",level:3},{value:"Shell Prompts",id:"shell-prompts",level:3},{value:"Bash",id:"bash-2",level:4},{value:"Busybox and dash",id:"busybox-and-dash",level:4},{value:"Fish",id:"fish-1",level:4},{value:"Zsh",id:"zsh-2",level:4}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"command-line",children:"Command Line"}),"\n",(0,i.jsx)(n.h2,{id:"changing-shell",children:"Changing Shell"}),"\n",(0,i.jsx)(n.p,{children:"When using a terminal session to perform command-line activities, a Unix shell is used to interpret commands. The default shell on Solus is Bash, however changing your shell may enable additional features and functionality."}),"\n",(0,i.jsxs)(n.p,{children:["Solus makes available other shells via our repository, with a full list available in ",(0,i.jsx)(n.code,{children:"/usr/share/defaults/etc/shells"}),". Common shells, aside from Bash, are:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"http://gondor.apana.org.au/~herbert/dash/",children:"DASH"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://fishshell.com/",children:"fish"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://zsh.sourceforge.io/",children:"zsh"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(n.p,{children:["In order to use a shell different from Bash, you may need to install the respective package for the shell to be able to work. You will find those packages in the Software Center within the ",(0,i.jsx)(n.em,{children:"System utilities"})," category, or via the command-line with ",(0,i.jsx)(n.code,{children:"sudo eopkg install <Name of the Shell>"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo eopkg install fish\n"})}),"\n",(0,i.jsx)(n.h3,{id:"switching",children:"Switching"}),"\n",(0,i.jsxs)(n.p,{children:["To switch to another shell, first install the appropriate package, followed by the command ",(0,i.jsx)(n.code,{children:"chsh"})," (change shell) to change the shell for your user session, using the path provided in ",(0,i.jsx)(n.code,{children:"/usr/share/defaults/etc/shells"}),". Lastly you need to log out and back in again for the change to take effect."]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For zsh: ",(0,i.jsx)(n.code,{children:"chsh -s /bin/zsh"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For fish: ",(0,i.jsx)(n.code,{children:"chsh -s /usr/bin/fish"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,i.jsxs)(n.p,{children:["If the default shell is not changed, you must add the shell to ",(0,i.jsx)(n.code,{children:"/etc/shells"})," via the command ",(0,i.jsx)(n.code,{children:"sh"})," with ",(0,i.jsx)(n.code,{children:"sudo"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For zsh: ",(0,i.jsx)(n.code,{children:'echo "/bin/zsh" | sudo tee -a /etc/shells'})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For fish: ",(0,i.jsx)(n.code,{children:'echo "/usr/bin/fish" | sudo tee -a /etc/shells'})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"fzf",children:"fzf"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/junegunn/fzf",children:"fzf"})," is a general-purpose command-line fuzzy finder. It can be used as an interactive Unix filter with any list: files, command history, processes, hostnames, bookmarks, git commits, etc."]}),"\n",(0,i.jsx)(n.h3,{id:"installation-1",children:"Installation"}),"\n",(0,i.jsxs)(n.p,{children:["The fzf project consists of the following components: an ",(0,i.jsx)(n.code,{children:"fzf"})," executable, an ",(0,i.jsx)(n.code,{children:"fzf-tmux"})," script for launching fzf in a tmux pane, shell extensions (including key bindings and command-line fuzzy auto-completion), and a vim/Neovim plugin file. They are all available in the ",(0,i.jsx)(n.code,{children:"fzf"})," package in the Software Center or via eopkg in a terminal:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo eopkg it fzf\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The shell extensions are not enabled by default after the ",(0,i.jsx)(n.code,{children:"fzf"})," package is installed. The procedures to enable these features are described below. For more tips and examples on the usage of ",(0,i.jsx)(n.code,{children:"fzf"}),", visit its ",(0,i.jsx)(n.a,{href:"https://github.com/junegunn/fzf",children:"GitHub repository"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/junegunn/fzf/wiki/examples",children:"Wiki pages"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"fuzzy-auto-completion",children:"Fuzzy Auto-Completion"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/junegunn/fzf#fuzzy-completion-for-bash-and-zsh",children:"Fuzzy completion"})," for files and directories can be triggered by a trigger sequence (",(0,i.jsx)(n.code,{children:"**"})," by default) followed by the ",(0,i.jsx)(n.code,{children:"TAB"})," key for ",(0,i.jsx)(n.code,{children:"bash"})," and ",(0,i.jsx)(n.code,{children:"zsh"}),". To enable this feature, add the following lines to the shell configuration file depending on the shell you use (",(0,i.jsx)(n.code,{children:"~/.bashrc"})," for ",(0,i.jsx)(n.code,{children:"bash"})," and ",(0,i.jsx)(n.code,{children:"~/.zshrc"})," for ",(0,i.jsx)(n.code,{children:"zsh"}),")."]}),"\n",(0,i.jsx)(n.h4,{id:"bash",children:"Bash"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"FZF_COMPLETION_FILE=/usr/share/bash-completion/completions/fzf\n[[ -f $FZF_COMPLETION_FILE ]] && source $FZF_COMPLETION_FILE\n"})}),"\n",(0,i.jsx)(n.h4,{id:"zsh",children:"Zsh"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"FZF_COMPLETION_FILE=/usr/share/zsh/site-functions/_fzf\n[[ -f $FZF_COMPLETION_FILE ]] && source $FZF_COMPLETION_FILE\n"})}),"\n",(0,i.jsx)(n.h3,{id:"key-bindings",children:"Key Bindings"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"fzf"})," can use specific ",(0,i.jsx)(n.a,{href:"https://github.com/junegunn/fzf#key-bindings-for-command-line",children:"key bindings"})," to trigger a search over a list of files, command history and directories and paste the result onto the command-line. Follow these steps to set up the key bindings for your favorite shell."]}),"\n",(0,i.jsx)(n.h4,{id:"bash-1",children:"Bash"}),"\n",(0,i.jsxs)(n.p,{children:["Add the following content to ",(0,i.jsx)(n.code,{children:"~/.bashrc"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"FZF_KEYBINDING_FILE=/usr/share/fzf/key-bindings.bash\n[[ -f $FZF_KEYBINDING_FILE ]] && source $FZF_KEYBINDING_FILE\n"})}),"\n",(0,i.jsx)(n.h4,{id:"fish",children:"Fish"}),"\n",(0,i.jsx)(n.p,{children:"First create the following directory if it does not already exist:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mkdir -p $HOME/.config/fish/functions\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"cd"})," into this directory and make a file ",(0,i.jsx)(n.code,{children:"fish_user_key_bindings.fish"})," with the following content:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"function fish_user_key_bindings\n  fzf_key_bindings\nend\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then create the following symlink:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ln -s /usr/share/fzf/key-bindings.fish $HOME/.config/fish/functions/fzf_key_bindings.fish\n"})}),"\n",(0,i.jsx)(n.h4,{id:"zsh-1",children:"Zsh"}),"\n",(0,i.jsxs)(n.p,{children:["Add the following content to ",(0,i.jsx)(n.code,{children:"~/.zshrc"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"FZF_KEYBINDING_FILE=/usr/share/fzf/key-bindings.zsh\n[[ -f $FZF_KEYBINDING_FILE ]] && source $FZF_KEYBINDING_FILE\n"})}),"\n",(0,i.jsx)(n.h2,{id:"powerline-shell-prompt",children:"Powerline Shell Prompt"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/powerline",children:"Powerline"})," is a statusline plugin for vim, and provides statuslines and prompts for several other applications, including zsh, bash, tmux, IPython, Awesome and Qtile."]}),"\n",(0,i.jsx)(n.h3,{id:"installation-2",children:"Installation"}),"\n",(0,i.jsxs)(n.p,{children:["Powerline has two components, the plugin system itself ",(0,i.jsx)(n.code,{children:"powerline"})," and the\nfonts ",(0,i.jsx)(n.code,{children:"powerline-fonts"}),". Both are available in the Software Center or via ",(0,i.jsx)(n.code,{children:"eopkg"})," in a terminal:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo eopkg it powerline powerline-fonts\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To get powerline working inside your terminal, you need to add the following commands to the ",(0,i.jsx)(n.code,{children:".bashrc"})," inside your ",(0,i.jsx)(n.code,{children:"$HOME"})," directory."]}),"\n",(0,i.jsx)(n.h3,{id:"shell-prompts",children:"Shell Prompts"}),"\n",(0,i.jsx)(n.p,{children:"The Powerline daemon is not running automatically by any of the bindings. It is advised to add the following before any other powerline-related code in the shell configuration file"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"powerline-daemon -q\n"})}),"\n",(0,i.jsx)(n.h4,{id:"bash-2",children:"Bash"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"powerline-daemon -q\nPOWERLINE_BASH_CONTINUATION=1\nPOWERLINE_BASH_SELECT=1\nsource /usr/lib/python3.11/site-packages/powerline/bindings/bash/powerline.sh\n"})}),"\n",(0,i.jsx)(n.h4,{id:"busybox-and-dash",children:"Busybox and dash"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"source /usr/lib/python3.11/site-packages/powerline/bindings/shell/powerline.sh\n"})}),"\n",(0,i.jsx)(n.h4,{id:"fish-1",children:"Fish"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'set fish_function_path $fish_function_path "/usr/lib/python3.11/site-packages/powerline/bindings/fish/"\n'})}),"\n",(0,i.jsx)(n.h4,{id:"zsh-2",children:"Zsh"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"source /usr/lib/python3.11/site-packages/powerline/bindings/zsh/powerline.zsh\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Read more about powerline on its ",(0,i.jsx)(n.a,{href:"https://powerline.readthedocs.io/en/master/usage.html#shell-prompts-requirements",children:"docs website"})]})]})}function c(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>h,a:()=>a});var i=s(67294);const l={},o=i.createContext(l);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function h(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);