"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[9873],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?o.createElement(f,s(s({ref:t},p),{},{components:n})):o.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:r,s[1]=a;for(var u=2;u<i;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9409:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const i={title:"Desktops",summary:"Quick guides on switching between or installing additional Desktop Environments on Solus"},s="Desktop Environments",a={unversionedId:"user/software/desktops/index",id:"user/software/desktops/index",title:"Desktops",description:"Solus offers a multitude of desktop environments, ranging from the feature-rich and modern Budgie to the traditional MATE experience. It is recommended to use the ISO for a specific desktop environment but it is possible to install them afterwards if you wish to do try one out.",source:"@site/docs/user/software/desktops/index.md",sourceDirName:"user/software/desktops",slug:"/user/software/desktops/",permalink:"/docs/user/software/desktops/",draft:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/software/desktops/index.md",tags:[],version:"current",frontMatter:{title:"Desktops",summary:"Quick guides on switching between or installing additional Desktop Environments on Solus"},sidebar:"userSidebar",previous:{title:"Configuration File Locations",permalink:"/docs/user/software/configuration_files"},next:{title:"Development",permalink:"/docs/user/software/development/"}},l={},u=[{value:"Budgie",id:"budgie",level:2},{value:"Gnome Shell",id:"gnome-shell",level:2},{value:"MATE",id:"mate",level:2},{value:"i3",id:"i3",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"desktop-environments"},"Desktop Environments"),(0,r.kt)("p",null,"Solus offers a ",(0,r.kt)("a",{parentName:"p",href:"https://getsol.us/solus/experiences/"},"multitude of desktop environments"),", ranging from the feature-rich and modern Budgie to the traditional MATE experience. It is recommended to use the ISO for a specific desktop environment but it is possible to install them afterwards if you wish to do try one out."),(0,r.kt)("p",null,"WARNING: Do NOT attempt to install ANY other desktop environments next to KDE Plasma Desktop. This scenario is NOT supported and you will be told so in no uncertain terms if asking for support."),(0,r.kt)("h2",{id:"budgie"},"Budgie"),(0,r.kt)("p",null,"The flagship desktop environment / experience of Solus is Budgie. If you have installed either our MATE or GNOME editions, you can try out and install Budgie by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Do NOT attempt to do this if you are running the KDE Plasma Desktop version of Solus!\nsudo eopkg install -c desktop.budgie\n")),(0,r.kt)("h2",{id:"gnome-shell"},"Gnome Shell"),(0,r.kt)("p",null,"Solus offers a GNOME Shell experience that ships out-of-the-box with a variety of extensions. If you have installed either our Budgie or MATE editions, you can try out and install GNOME Shell by running the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Do NOT attempt to do this if you are running the KDE Plasma Desktop version of Solus!\nsudo eopkg install gdm gnome-shell gnome-desktop-branding\n")),(0,r.kt)("h2",{id:"mate"},"MATE"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"We plan to deprecate the MATE Desktop, we will instead ship an edition with Xfce in the near future. See the Solus 4.4 blog post ",(0,r.kt)("a",{parentName:"p",href:"https://getsol.us/2023/07/08/solus-4-4-released/"},"here"))),(0,r.kt)("p",null,"Solus offers the MATE desktop environment / experience, tailored to advanced users and older hardware, as well as shipping with our modern menu called ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/getsolus/brisk-menu"},"Brisk Menu"),". If you have installed either our Budgie or GNOME editions, you can try out and install MATE by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Do NOT attempt to do this if you are running the KDE Plasma Desktop version of Solus!\nsudo eopkg install -c desktop.mate\n")),(0,r.kt)("h2",{id:"i3"},"i3"),(0,r.kt)("p",null,"Solus offers i3 as a tiling window manager. Users wanting to try i3 can install it by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Do NOT attempt to do this if you are running the KDE Plasma Desktop version of Solus!\nsudo eopkg install i3\n")),(0,r.kt)("p",null,"If you want to use i3 with support for GNOME Settings Daemon and other GNOME functionality, follow the instructions for installation of GNOME Shell, then choose GNOME+i3 at the login screen to use it."),(0,r.kt)("p",null,"For more information about tiling window managers, click ",(0,r.kt)("a",{parentName:"p",href:"https:/en.wikipedia.org/wiki/Tiling_window_manager"},"here"),"."))}c.isMDXComponent=!0}}]);