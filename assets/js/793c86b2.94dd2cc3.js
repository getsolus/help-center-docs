"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[168],{3905:(e,n,t)=>{t.d(n,{Zo:()=>h,kt:()=>c});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var r=a.createContext({}),p=function(e){var n=a.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},h=function(e){var n=p(e.components);return a.createElement(r.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,r=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=l,c=u["".concat(r,".").concat(m)]||u[m]||d[m]||i;return t?a.createElement(c,o(o({ref:n},h),{},{components:t})):a.createElement(c,o({ref:n},h))}));function c(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var r in n)hasOwnProperty.call(n,r)&&(s[r]=n[r]);s.originalType=e,s[u]="string"==typeof e?e:l,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},868:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=t(7462),l=(t(7294),t(3905));const i={title:"Command Line",summary:"Installation and configuration of popular command line programs on Solus"},o="Command Line",s={unversionedId:"user/software/command-line/index",id:"user/software/command-line/index",title:"Command Line",description:"Changing Shell",source:"@site/docs/user/software/command-line/index.md",sourceDirName:"user/software/command-line",slug:"/user/software/command-line/",permalink:"/docs/user/software/command-line/",draft:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/software/command-line/index.md",tags:[],version:"current",lastUpdatedAt:1689378257,formattedLastUpdatedAt:"Jul 14, 2023",frontMatter:{title:"Command Line",summary:"Installation and configuration of popular command line programs on Solus"},sidebar:"userSidebar",previous:{title:"Software",permalink:"/docs/category/software"},next:{title:"Desktops",permalink:"/docs/user/software/desktops/"}},r={},p=[{value:"Changing Shell",id:"changing-shell",level:2},{value:"Installation",id:"installation",level:3},{value:"Switching",id:"switching",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"fzf",id:"fzf",level:2},{value:"Installation",id:"installation-1",level:3},{value:"Fuzzy Auto-Completion",id:"fuzzy-auto-completion",level:3},{value:"Bash",id:"bash",level:4},{value:"Zsh",id:"zsh",level:4},{value:"Key Bindings",id:"key-bindings",level:3},{value:"Bash",id:"bash-1",level:4},{value:"Fish",id:"fish",level:4},{value:"Zsh",id:"zsh-1",level:4},{value:"Powerline Shell Prompt",id:"powerline-shell-prompt",level:2},{value:"Installation",id:"installation-2",level:3},{value:"Shell Prompts",id:"shell-prompts",level:3},{value:"Bash",id:"bash-2",level:4},{value:"Busybox and dash",id:"busybox-and-dash",level:4},{value:"Fish",id:"fish-1",level:4},{value:"Zsh",id:"zsh-2",level:4}],h={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,l.kt)(u,(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"command-line"},"Command Line"),(0,l.kt)("h2",{id:"changing-shell"},"Changing Shell"),(0,l.kt)("p",null,"When using a terminal session to perform command-line activities, a Unix shell is used to interpret commands. The default shell on Solus is Bash, however changing your shell may enable additional features and functionality."),(0,l.kt)("p",null,"Solus makes available other shells via our repository, with a full list available in ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/share/defaults/etc/shells"),". Common shells, aside from Bash, are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://gondor.apana.org.au/~herbert/dash/"},"Dash")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://fishshell.com/"},"Fish")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://zsh.sourceforge.net/"},"Zsh"))),(0,l.kt)("h3",{id:"installation"},"Installation"),(0,l.kt)("p",null,"In order to use a shell different from Bash, you may need to install the respective package for the shell to be able to work. You will find those packages in the Software-Center within the ",(0,l.kt)("em",{parentName:"p"},"System utilities")," category, or via the command-line with ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo eopkg install <Name of the Shell>"),"."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg install fish\n")),(0,l.kt)("h3",{id:"switching"},"Switching"),(0,l.kt)("p",null,"To switch to another shell, first install the appropriate package, followed by the command ",(0,l.kt)("inlineCode",{parentName:"p"},"chsh")," (change shell) to change the shell for your user session, using the path provided in ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/share/defaults/etc/shells"),". Lastly you need to log out and back in again for the change to take effect."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For Zsh: ",(0,l.kt)("inlineCode",{parentName:"p"},"chsh -s /bin/zsh"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For Fish: ",(0,l.kt)("inlineCode",{parentName:"p"},"chsh -s /usr/bin/fish")))),(0,l.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,l.kt)("p",null,"If the default shell is not changed, you must add the shell to ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/shells")," via the command ",(0,l.kt)("inlineCode",{parentName:"p"},"sh")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo"),"."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For Zsh: ",(0,l.kt)("inlineCode",{parentName:"p"},'echo "/bin/zsh" | sudo tee -a /etc/shells'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For Fish: ",(0,l.kt)("inlineCode",{parentName:"p"},'echo "/usr/bin/fish" | sudo tee -a /etc/shells')))),(0,l.kt)("h2",{id:"fzf"},"fzf"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/junegunn/fzf"},"fzf")," is a general-purpose command-line fuzzy finder. It can be used as an interactive Unix filter with any list: files, command history, processes, hostnames, bookmarks, git commits, etc."),(0,l.kt)("h3",{id:"installation-1"},"Installation"),(0,l.kt)("p",null,"The fzf project consists of the following components: an ",(0,l.kt)("inlineCode",{parentName:"p"},"fzf")," executable, an ",(0,l.kt)("inlineCode",{parentName:"p"},"fzf-tmux")," script for launching fzf in a tmux pane, shell extensions (including key bindings and command-line fuzzy auto-completion), and a vim/Neovim plugin file. They are all available in the ",(0,l.kt)("inlineCode",{parentName:"p"},"fzf")," package in the Software Center or via eopkg in a terminal:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg it fzf\n")),(0,l.kt)("p",null,"The shell extensions are not enabled by default after the ",(0,l.kt)("inlineCode",{parentName:"p"},"fzf")," package is installed. The procedures to enable these features are described below. For more tips and examples on the usage of ",(0,l.kt)("inlineCode",{parentName:"p"},"fzf"),", visit its ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/junegunn/fzf"},"github")," and ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/junegunn/fzf/wiki/examples"},"wiki")," pages."),(0,l.kt)("h3",{id:"fuzzy-auto-completion"},"Fuzzy Auto-Completion"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/junegunn/fzf#fuzzy-completion-for-bash-and-zsh"},"Fuzzy completion")," for files and directories can be triggered by a trigger sequence (",(0,l.kt)("inlineCode",{parentName:"p"},"**")," by default) followed by the ",(0,l.kt)("inlineCode",{parentName:"p"},"TAB")," key for ",(0,l.kt)("inlineCode",{parentName:"p"},"bash")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"zsh"),". To enable this feature, add the following lines to the shell configuration file depending on the shell you use (",(0,l.kt)("inlineCode",{parentName:"p"},"~/.bashrc")," for ",(0,l.kt)("inlineCode",{parentName:"p"},"bash")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.zshrc")," for ",(0,l.kt)("inlineCode",{parentName:"p"},"zsh"),")."),(0,l.kt)("h4",{id:"bash"},"Bash"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"FZF_COMPLETION_FILE=/usr/share/bash-completion/completions/fzf\n[[ -f $FZF_COMPLETION_FILE ]] && source $FZF_COMPLETION_FILE\n")),(0,l.kt)("h4",{id:"zsh"},"Zsh"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"FZF_COMPLETION_FILE=/usr/share/zsh/site-functions/_fzf\n[[ -f $FZF_COMPLETION_FILE ]] && source $FZF_COMPLETION_FILE\n")),(0,l.kt)("h3",{id:"key-bindings"},"Key Bindings"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"fzf")," can use specific ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/junegunn/fzf#key-bindings-for-command-line"},"key bindings")," to trigger a search over a list of files, command history and directories and paste the result onto the command-line. Follow these steps to set up the key bindings for your favorite shell."),(0,l.kt)("h4",{id:"bash-1"},"Bash"),(0,l.kt)("p",null,"Add the following content to ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.bashrc"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"FZF_KEYBINDING_FILE=/usr/share/fzf/key-bindings.bash\n[[ -f $FZF_KEYBINDING_FILE ]] && source $FZF_KEYBINDING_FILE\n")),(0,l.kt)("h4",{id:"fish"},"Fish"),(0,l.kt)("p",null,"First create the following directory if it does not already exist:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p $HOME/.config/fish/functions\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"cd")," into this directory and make a file ",(0,l.kt)("inlineCode",{parentName:"p"},"fish_user_key_bindings.fish")," with the following content:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"function fish_user_key_bindings\n  fzf_key_bindings\nend\n")),(0,l.kt)("p",null,"Then create the following symlink:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ln -s /usr/share/fzf/key-bindings.fish $HOME/.config/fish/functions/fzf_key_bindings.fish\n")),(0,l.kt)("h4",{id:"zsh-1"},"Zsh"),(0,l.kt)("p",null,"Add the following content to ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.zshrc"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"FZF_KEYBINDING_FILE=/usr/share/fzf/key-bindings.zsh\n[[ -f $FZF_KEYBINDING_FILE ]] && source $FZF_KEYBINDING_FILE\n")),(0,l.kt)("h2",{id:"powerline-shell-prompt"},"Powerline Shell Prompt"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/powerline"},"Powerline")," is a statusline plugin for vim, and provides statuslines and prompts for several other applications, including zsh, bash, tmux, IPython, Awesome and Qtile."),(0,l.kt)("h3",{id:"installation-2"},"Installation"),(0,l.kt)("p",null,"Powerline has two components, the plugin system itself (",(0,l.kt)("a",{parentName:"p",href:"https://dev.getsol.us/source/powerline/"},"powerline"),") and the\nfonts (",(0,l.kt)("a",{parentName:"p",href:"https://dev.getsol.us/source/powerline-fonts/"},"powerline-fonts"),"). Both are available in the Software Center or via eopkg in a terminal:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg it powerline powerline-fonts\n")),(0,l.kt)("p",null,"To get powerline working inside your terminal, you need to add the following commands to the ",(0,l.kt)("inlineCode",{parentName:"p"},".bashrc")," inside your ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME")," directory."),(0,l.kt)("h3",{id:"shell-prompts"},"Shell Prompts"),(0,l.kt)("p",null,"The Powerline daemon is not running automatically by any of the bindings. It is advised to add the following before any other powerline-related code in the shell configuration file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"powerline-daemon -q\n")),(0,l.kt)("h4",{id:"bash-2"},"Bash"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"powerline-daemon -q\nPOWERLINE_BASH_CONTINUATION=1\nPOWERLINE_BASH_SELECT=1\nsource /usr/lib/python3.10/site-packages/powerline/bindings/bash/powerline.sh\n")),(0,l.kt)("h4",{id:"busybox-and-dash"},"Busybox and dash"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"source /usr/lib/python3.10/site-packages/powerline/bindings/shell/powerline.sh\n")),(0,l.kt)("h4",{id:"fish-1"},"Fish"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"source /usr/lib/python3.10/site-packages/powerline/bindings/fish/powerline-setup.fish\n")),(0,l.kt)("h4",{id:"zsh-2"},"Zsh"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"source /usr/lib/python3.10/site-packages/powerline/bindings/zsh/powerline.zsh\n")),(0,l.kt)("p",null,"Read more about powerline on its ",(0,l.kt)("a",{parentName:"p",href:"https://powerline.readthedocs.io/en/master/usage.html#shell-prompts-requirements"},"docs website")))}d.isMDXComponent=!0}}]);