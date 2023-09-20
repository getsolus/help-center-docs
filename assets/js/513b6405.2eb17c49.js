"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[4278],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),g=i,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||r;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},2402:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=a(7462),i=(a(7294),a(3905));const r={title:"Prepare for Packaging",summary:"Quick guide on getting your system set up for packaging on Solus",sidebar_position:1},o="Prepare for Packaging",l={unversionedId:"packaging/prepare-for-packaging",id:"packaging/prepare-for-packaging",title:"Prepare for Packaging",description:"Switch to the Unstable Repository",source:"@site/docs/packaging/prepare-for-packaging.md",sourceDirName:"packaging",slug:"/packaging/prepare-for-packaging",permalink:"/docs/packaging/prepare-for-packaging",draft:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/packaging/prepare-for-packaging.md",tags:[],version:"current",lastUpdatedAt:1695222528,formattedLastUpdatedAt:"Sep 20, 2023",sidebarPosition:1,frontMatter:{title:"Prepare for Packaging",summary:"Quick guide on getting your system set up for packaging on Solus",sidebar_position:1},sidebar:"packagingSidebar",previous:{title:"Packaging Overview",permalink:"/docs/packaging/"},next:{title:"Update Your Development Environment",permalink:"/docs/packaging/update-dev-environment"}},s={},u=[{value:"Switch to the Unstable Repository",id:"switch-to-the-unstable-repository",level:2},{value:"Setting up the Packager file",id:"setting-up-the-packager-file",level:2},{value:"Installing Development Tools",id:"installing-development-tools",level:2},{value:"Setting up a GitHub account",id:"setting-up-a-github-account",level:2},{value:"Configure <code>github-cli</code>.",id:"configure-github-cli",level:3},{value:"Setting up solbuild",id:"setting-up-solbuild",level:2},{value:"Updating solbuild",id:"updating-solbuild",level:3},{value:"Setting up a Build Directory",id:"setting-up-a-build-directory",level:2},{value:"Recommended aliases",id:"recommended-aliases",level:2},{value:"Building Packages",id:"building-packages",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"prepare-for-packaging"},"Prepare for Packaging"),(0,i.kt)("h2",{id:"switch-to-the-unstable-repository"},"Switch to the Unstable Repository"),(0,i.kt)("p",null,'Packages need to be built and tested against the "unstable" repository. If you don\'t want to switch your primary system to unstable, you can do your packaging work in a VM. We have Virtual Machine Manager in the repos.'),(0,i.kt)("p",null,"Refer to ",(0,i.kt)("a",{parentName:"p",href:"docs/user/package-management/repo-management"},"Repository Management")," to see how to add and switch to unstable."),(0,i.kt)("h2",{id:"setting-up-the-packager-file"},"Setting up the Packager file"),(0,i.kt)("p",null,"In order to utilize the build system, you must first set up a configuration file that has your packager details."),(0,i.kt)("p",null,"This file lives in the ",(0,i.kt)("inlineCode",{parentName:"p"},".config/solus")," folder of your home directory. You will need to create the ",(0,i.kt)("inlineCode",{parentName:"p"},".config/solus")," folder as well as the inner ",(0,i.kt)("inlineCode",{parentName:"p"},"packager")," file. Inside the packager file, you need two keys, ",(0,i.kt)("inlineCode",{parentName:"p"},"Name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Email"),". This is used when generating the machine file so that the packager details are stored within the resulting binary package."),(0,i.kt)("p",null,"Name and email address are mandatory. You must use your real first and last name(s) for accountability purposes.\nA ",(0,i.kt)("a",{parentName:"p",href:"/docs/user/contributing/getting-involved#matrix-chat"},"Matrix")," contact is optional but recommended."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[Packager]\nName=Your Name Here\nEmail=your.email@address\nMatrix=@username.matrix.org\n")),(0,i.kt)("h2",{id:"installing-development-tools"},"Installing Development Tools"),(0,i.kt)("p",null,"We need to install a few things in order to get started with packaging:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"go-task")," is used by our build tools for scripting"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"git")," is used for version control of the solus sources"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"github-cli")," is used to make working with GitHub easier"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"solbuild")," is a lightweight container environment for building packages repeatably"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"solbuild-config-unstable")," sets up solbuild for working with the ",(0,i.kt)("inlineCode",{parentName:"li"},"unstable")," repository"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ypkg")," is the program that actually builds packages")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg it go-task git github-cli solbuild solbuild-config-unstable ypkg\n")),(0,i.kt)("h2",{id:"setting-up-a-github-account"},"Setting up a GitHub account"),(0,i.kt)("p",null,"The Solus source repositories for the package repository currently reside on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/getsolus/packages"},"github.com/getsolus/packages"),". You will need a GitHub account to submit patches and file issues. You can create a GitHub account ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/signup"},"here"),". Note that you will also need to set up ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa"},"2FA")," (two factor authentication) for your account."),(0,i.kt)("h3",{id:"configure-github-cli"},"Configure ",(0,i.kt)("inlineCode",{parentName:"h3"},"github-cli"),"."),(0,i.kt)("p",null,"Once you have a GitHub account, you need to configure ",(0,i.kt)("inlineCode",{parentName:"p"},"github-cli")," to work with it. At minimum, you need to run ",(0,i.kt)("inlineCode",{parentName:"p"},"gh auth login"),". Have your GitHub credentials and 2FA (two factor authentication) mechanism at hand."),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/github-cli/github-cli/quickstart"},"GitHub CLI quickstart")," for some common uses of the tool."),(0,i.kt)("h2",{id:"setting-up-solbuild"},"Setting up solbuild"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"solbuild")," tool must first be initialized with a base image. All builds thereafter will use this as a base, and construct a temporary overlay root to save on time and disk space in builds."),(0,i.kt)("p",null,"Initialize solbuild via:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo solbuild init\n")),(0,i.kt)("p",null,"This will take some time as it downloads and prepares the image."),(0,i.kt)("h3",{id:"updating-solbuild"},"Updating solbuild"),(0,i.kt)("p",null,"It is a good idea to keep the base image updated. It will help reduce build times by not having to repeatedly download updates to packages in the base image, and will strictly need to pull down the packages your build needs."),(0,i.kt)("p",null,"To update solbuild, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo solbuild update\n")),(0,i.kt)("h2",{id:"setting-up-a-build-directory"},"Setting up a Build Directory"),(0,i.kt)("p",null,"Create a packaging directory to hold sub-directories with packaging files. Here we are using the name ",(0,i.kt)("inlineCode",{parentName:"p"},"solus-builds")," and placing it in our home directory, but you can use whatever you prefer."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir ~/solus-builds\ncd solus-builds\n")),(0,i.kt)("h2",{id:"recommended-aliases"},"Recommended aliases"),(0,i.kt)("p",null,"Consider creating these aliases in your ",(0,i.kt)("inlineCode",{parentName:"p"},".bashrc")," file (or equivalent for the zsh or fish shell)."),(0,i.kt)("p",null,"The script ",(0,i.kt)("inlineCode",{parentName:"p"},"common/Scripts/yauto.py")," is used to create an initial ",(0,i.kt)("inlineCode",{parentName:"p"},"package.yml")," file for packages that aren't yet in the repository."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'alias fetchYml="$HOME/solus-builds/common/Scripts/yauto.py"\n')),(0,i.kt)("p",null,"The script ",(0,i.kt)("inlineCode",{parentName:"p"},"common/Scripts/epcsearch.py")," is used to find packages that satisfy build dependencies."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"alias epcsearch='~/packaging/common/Scripts/epcsearch.py'\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"yupdate")," tool is used when updating packages."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"alias updatePackage='/usr/share/ypkg/yupdate.py'\n")),(0,i.kt)("h2",{id:"building-packages"},"Building Packages"),(0,i.kt)("p",null,"Your system is now set up for package work.\nIf you are new to packaging, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/packaging/your-first-package-update"},"Your First Package Update"),"."))}d.isMDXComponent=!0}}]);