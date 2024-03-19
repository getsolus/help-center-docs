"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[4278],{75081:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=s(85893),n=s(11151);const o={title:"Prepare for Packaging",summary:"Quick guide on getting your system set up for packaging on Solus",sidebar_position:1},r="Prepare for packaging",a={id:"packaging/prepare-for-packaging",title:"Prepare for Packaging",description:"Switch to the Unstable repository",source:"@site/docs/packaging/prepare-for-packaging.md",sourceDirName:"packaging",slug:"/packaging/prepare-for-packaging",permalink:"/docs/packaging/prepare-for-packaging",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/packaging/prepare-for-packaging.md",tags:[],version:"current",lastUpdatedAt:1710869286,formattedLastUpdatedAt:"Mar 19, 2024",sidebarPosition:1,frontMatter:{title:"Prepare for Packaging",summary:"Quick guide on getting your system set up for packaging on Solus",sidebar_position:1},sidebar:"packagingSidebar",previous:{title:"Packaging Overview",permalink:"/docs/packaging/"},next:{title:"Update Your Development Environment",permalink:"/docs/packaging/update-dev-environment"}},l={},c=[{value:"Switch to the Unstable repository",id:"switch-to-the-unstable-repository",level:2},{value:"Setting up the packager file",id:"setting-up-the-packager-file",level:2},{value:"Installing development tools",id:"installing-development-tools",level:2},{value:"Setting up a GitHub account and Git",id:"setting-up-a-github-account-and-git",level:2},{value:"Configure <code>github-cli</code>.",id:"configure-github-cli",level:3},{value:"Git identity setup",id:"git-identity-setup",level:3},{value:"Setting up solbuild",id:"setting-up-solbuild",level:2},{value:"Updating solbuild",id:"updating-solbuild",level:3},{value:"Fork the getsolus/packages Repository",id:"fork-the-getsoluspackages-repository",level:2},{value:"Clone Your forked package repository",id:"clone-your-forked-package-repository",level:2},{value:"Initialize git hooks",id:"initialize-git-hooks",level:2},{value:"Set up repository helper functions (Optional)",id:"set-up-repository-helper-functions-optional",level:2},{value:"bash",id:"bash",level:3},{value:"fish",id:"fish",level:3},{value:"zsh",id:"zsh",level:3},{value:"Building packages",id:"building-packages",level:2}];function d(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"prepare-for-packaging",children:"Prepare for packaging"}),"\n",(0,t.jsx)(i.h2,{id:"switch-to-the-unstable-repository",children:"Switch to the Unstable repository"}),"\n",(0,t.jsx)(i.p,{children:'Packages need to be built and tested against the "unstable" repository. If you don\'t want to switch your primary system to unstable, you can do your packaging work in a VM. We have Virtual Machine Manager in the repos.'}),"\n",(0,t.jsxs)(i.p,{children:["Refer to ",(0,t.jsx)(i.a,{href:"/docs/user/package-management/repo-management",children:"Repository Management"})," to see how to add and switch to unstable."]}),"\n",(0,t.jsx)(i.h2,{id:"setting-up-the-packager-file",children:"Setting up the packager file"}),"\n",(0,t.jsx)(i.p,{children:"In order to utilize the build system, you must first set up a configuration file that has your packager details."}),"\n",(0,t.jsxs)(i.p,{children:["This file lives in the ",(0,t.jsx)(i.code,{children:".config/solus"})," folder of your home directory. You will need to create the ",(0,t.jsx)(i.code,{children:".config/solus"})," folder as well as the inner ",(0,t.jsx)(i.code,{children:"packager"})," file. Inside the packager file, you need two keys, ",(0,t.jsx)(i.code,{children:"Name"})," and ",(0,t.jsx)(i.code,{children:"Email"}),". This is used when generating the machine file so that the packager details are stored within the resulting binary package."]}),"\n",(0,t.jsxs)(i.p,{children:["Name and email address are mandatory. You must use your real first and last name(s) for accountability purposes.\nA ",(0,t.jsx)(i.a,{href:"/docs/user/contributing/getting-involved#matrix-chat",children:"Matrix"})," contact is optional but recommended."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-ini",children:"[Packager]\nName=Your Name Here\nEmail=your.email@address\nMatrix=@username:matrix.org\n"})}),"\n",(0,t.jsx)(i.h2,{id:"installing-development-tools",children:"Installing development tools"}),"\n",(0,t.jsx)(i.p,{children:"We need to install a few things in order to get started with packaging:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"go-task"})," is used by our build tools for scripting"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"git"})," is used for version control of the solus sources"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"github-cli"})," is used to make working with GitHub easier"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"jq"})," is used by our optional Helper Functions"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"solbuild"})," is a lightweight container environment for building packages repeatably"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"solbuild-config-unstable"})," sets up solbuild for working with the ",(0,t.jsx)(i.code,{children:"unstable"})," repository"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"ypkg"})," is the program that actually builds packages"]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"sudo eopkg it go-task git github-cli jq solbuild solbuild-config-unstable ypkg\n"})}),"\n",(0,t.jsx)(i.h2,{id:"setting-up-a-github-account-and-git",children:"Setting up a GitHub account and Git"}),"\n",(0,t.jsxs)(i.p,{children:["The Solus source repositories for the package repository currently reside on ",(0,t.jsx)(i.a,{href:"https://github.com/getsolus/packages",children:"github.com/getsolus/packages"}),". You will need a GitHub account to submit patches and file issues. You can create a GitHub account ",(0,t.jsx)(i.a,{href:"https://github.com/signup",children:"here"}),". Note that you will also need to set up ",(0,t.jsx)(i.a,{href:"https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa",children:"2FA"})," (two factor authentication) for your account."]}),"\n",(0,t.jsxs)(i.h3,{id:"configure-github-cli",children:["Configure ",(0,t.jsx)(i.code,{children:"github-cli"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["Once you have a GitHub account, you need to configure ",(0,t.jsx)(i.code,{children:"github-cli"})," to work with it. At minimum, you need to run ",(0,t.jsx)(i.code,{children:"gh auth login"}),". Have your GitHub credentials and 2FA (two factor authentication) mechanism at hand."]}),"\n",(0,t.jsxs)(i.p,{children:["See the ",(0,t.jsx)(i.a,{href:"https://docs.github.com/en/github-cli/github-cli/quickstart",children:"GitHub CLI quickstart"})," for some common uses of the tool."]}),"\n",(0,t.jsx)(i.h3,{id:"git-identity-setup",children:"Git identity setup"}),"\n",(0,t.jsxs)(i.p,{children:["If you have not used git before, you should set your git identity in your global git config file (",(0,t.jsx)(i.code,{children:"~/.gitconfig"}),"). Use the following commands:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:'git config --global user.name "John Doe"\ngit config --global user.email johndoe@example.com\n'})}),"\n",(0,t.jsxs)(i.p,{children:["See the ",(0,t.jsx)(i.a,{href:"https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup",children:"Git Book"})," for more first-time setup options."]}),"\n",(0,t.jsx)(i.h2,{id:"setting-up-solbuild",children:"Setting up solbuild"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"solbuild"})," tool must first be initialized with a base image. All builds thereafter will use this as a base, and construct a temporary overlay root to save on time and disk space in builds."]}),"\n",(0,t.jsx)(i.p,{children:"Initialize solbuild via:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"sudo solbuild init\n"})}),"\n",(0,t.jsx)(i.p,{children:"This will take some time as it downloads and prepares the image."}),"\n",(0,t.jsx)(i.h3,{id:"updating-solbuild",children:"Updating solbuild"}),"\n",(0,t.jsx)(i.p,{children:"It is a good idea to keep the base image updated. It will help reduce build times by not having to repeatedly download updates to packages in the base image, and will strictly need to pull down the packages your build needs."}),"\n",(0,t.jsx)(i.p,{children:"To update solbuild, run:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"sudo solbuild update\n"})}),"\n",(0,t.jsx)(i.h2,{id:"fork-the-getsoluspackages-repository",children:"Fork the getsolus/packages Repository"}),"\n",(0,t.jsxs)(i.p,{children:["Create your own fork of ",(0,t.jsx)(i.a,{href:"https://github.com/getsolus/packages",children:"getsolus/packages"})," using the GitHub web UI or ",(0,t.jsxs)(i.a,{href:"https://cli.github.com/manual/gh_repo_fork",children:[(0,t.jsx)(i.code,{children:"gh"})," cli tool"]})," from the ",(0,t.jsx)(i.code,{children:"github-cli"})," package. It will be forked to ",(0,t.jsx)(i.code,{children:"github.com/yourgithubaccount/packages"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"clone-your-forked-package-repository",children:"Clone Your forked package repository"}),"\n",(0,t.jsxs)(i.p,{children:["Create a local clone of the package repository you just forked. Here we are using the name ",(0,t.jsx)(i.code,{children:"solus-packages"})," and cloning it into our home directoy. The rest of the documentation will presume this structure. You can choose a different name and path but will have to make sure to replace it in every command that refers to the ",(0,t.jsx)(i.code,{children:"solus-packages"})," directory."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"gh repo clone packages ~/solus-packages\n"})}),"\n",(0,t.jsx)(i.h2,{id:"initialize-git-hooks",children:"Initialize git hooks"}),"\n",(0,t.jsx)(i.p,{children:"Initialize Git hooks for working with the repository by running:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"go-task -d ~/solus-packages init\n"})}),"\n",(0,t.jsx)(i.p,{children:"This makes it easy to create commits in the correct format, and will warn you about issues with changes you commit."}),"\n",(0,t.jsx)(i.h2,{id:"set-up-repository-helper-functions-optional",children:"Set up repository helper functions (Optional)"}),"\n",(0,t.jsx)(i.p,{children:"The helper functions are a collection of shell scripts that help you navigate the packages repository more quickly, and perform some specialized searches."}),"\n",(0,t.jsx)(i.p,{children:"After cloning your repository, create a symlink to source the helper functions for your shell. Then, start a new instance of the shell."}),"\n",(0,t.jsx)(i.h3,{id:"bash",children:"bash"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"mkdir -p ~/.bashrc.d\nln -s ~/solus-packages/common/Scripts/helpers.sh ~/.bashrc.d/solus-monorepo-helpers.sh\n"})}),"\n",(0,t.jsx)(i.h3,{id:"fish",children:"fish"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"mkdir -p ~/.config/fish/conf.d\nln -s ~/solus-packages/common/Scripts/helpers.fish ~/.config/fish/conf.d/solus.fish\n"})}),"\n",(0,t.jsx)(i.h3,{id:"zsh",children:"zsh"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:'mkdir -p ~/.zshrc.d\nprintf "\\nfpath=(~/.zshrc.d \\$fpath)" >> ~/.zshrc\nsource ~/.zshrc\nln -s ~/solus-packages/common/Scripts/helpers.zsh ~/.zshrc.d/solus-monorepo-helpers.zsh\n'})}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.p,{children:"You should now have the following available from your shell:"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Function"}),(0,t.jsx)(i.th,{children:"Description"}),(0,t.jsx)(i.th,{children:"Usage"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.strong,{children:"cpesearch"})}),(0,t.jsxs)(i.td,{children:["Search for CPE Names for packages. For use when writing the ",(0,t.jsx)(i.a,{href:"/docs/packaging/monitoring.yml",children:(0,t.jsx)(i.code,{children:"monitoring.yml"})})," file for a package"]}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"cpesearch search-term"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.strong,{children:"goroot"})}),(0,t.jsx)(i.td,{children:"When in the solus monorepo, change directory to the root directory of the git repository."}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"goroot"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.strong,{children:"gotopkg"})}),(0,t.jsxs)(i.td,{children:["Change directory to any solus package. You can type part of the package name then double press ",(0,t.jsx)(i.code,{children:"Tab"})," to get autocompletion for this function."]}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"gotopkg firefox"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.strong,{children:"gotosoluspkgs"})}),(0,t.jsx)(i.td,{children:"Change directory to the solus monorepo from anywhere on the filesystem."}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"gotosoluspkgs"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.strong,{children:"whatprovides"})}),(0,t.jsxs)(i.td,{children:["Find out what package provides a library by reading the ",(0,t.jsx)(i.code,{children:"abi_libs"})," files."]}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"whatprovides libfoobar.so.1."})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.strong,{children:"whatuses"})}),(0,t.jsxs)(i.td,{children:["Find out what packages use a library by reading the ",(0,t.jsx)(i.code,{children:"abi_used_libs"})," files."]}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"whatuses libfoobar.so.1"})})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"building-packages",children:"Building packages"}),"\n",(0,t.jsxs)(i.p,{children:["Your system is now set up for package work.\nIf you are new to packaging, see ",(0,t.jsx)(i.a,{href:"/docs/packaging/your-first-package-update",children:"Your First Package Update"}),"."]})]})}function h(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,i,s)=>{s.d(i,{Z:()=>a,a:()=>r});var t=s(67294);const n={},o=t.createContext(n);function r(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);