"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[9873],{30836:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var i=o(85893),s=o(11151);const t={title:"Desktops",summary:"Quick guides on switching between or installing additional Desktop Environments on Solus"},a="Desktop Environments",r={id:"user/software/desktops/index",title:"Desktops",description:"Solus offers a multitude of desktop environments, ranging from the feature-rich and modern Budgie to the traditional XFCE experience. It is recommended to use the ISO for a specific desktop environment but it is possible to install them afterwards if you wish to do try one out.",source:"@site/docs/user/software/desktops/index.md",sourceDirName:"user/software/desktops",slug:"/user/software/desktops/",permalink:"/docs/user/software/desktops/",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/software/desktops/index.md",tags:[],version:"current",lastUpdatedAt:1716664515e3,frontMatter:{title:"Desktops",summary:"Quick guides on switching between or installing additional Desktop Environments on Solus"},sidebar:"userSidebar",previous:{title:"Configuration File Locations",permalink:"/docs/user/software/configuration_files"},next:{title:"Development",permalink:"/docs/user/software/development/"}},l={},d=[{value:"Budgie",id:"budgie",level:2},{value:"GNOME Shell",id:"gnome-shell",level:2},{value:"MATE",id:"mate",level:2},{value:"XFCE",id:"xfce",level:2},{value:"Tiling window managers",id:"tiling-window-managers",level:2},{value:"i3",id:"i3",level:3},{value:"Sway",id:"sway",level:3},{value:"Stacking window manager",id:"stacking-window-manager",level:2},{value:"Labwc",id:"labwc",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"desktop-environments",children:"Desktop Environments"}),"\n",(0,i.jsxs)(n.p,{children:["Solus offers a ",(0,i.jsx)(n.a,{href:"https://getsol.us/solus/experiences/",children:"multitude of desktop environments"}),", ranging from the feature-rich and modern Budgie to the traditional XFCE experience. It is recommended to use the ISO for a specific desktop environment but it is possible to install them afterwards if you wish to do try one out."]}),"\n",(0,i.jsx)(n.p,{children:"WARNING: Do NOT attempt to install ANY other desktop environments next to KDE Plasma Desktop. This scenario is NOT supported and you will be told so in no uncertain terms if asking for support."}),"\n",(0,i.jsx)(n.h2,{id:"budgie",children:"Budgie"}),"\n",(0,i.jsx)(n.p,{children:"The flagship desktop environment / experience of Solus is Budgie. If you have installed either our GNOME or XFCE editions, you can try out and install Budgie by running the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Do NOT attempt to do this if you are running the KDE Plasma Desktop version of Solus!\nsudo eopkg install -c desktop.budgie\n"})}),"\n",(0,i.jsx)(n.h2,{id:"gnome-shell",children:"GNOME Shell"}),"\n",(0,i.jsx)(n.p,{children:"Solus offers a GNOME Shell experience that ships out-of-the-box with a variety of extensions. If you have installed either our Budgie or XFCE editions, you can try out and install GNOME Shell by running the following commands:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Do NOT attempt to do this if you are running the KDE Plasma Desktop version of Solus!\nsudo eopkg install gdm gnome-shell gnome-desktop-branding\n"})}),"\n",(0,i.jsx)(n.h2,{id:"mate",children:"MATE"}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"We plan to deprecate the MATE Desktop, for a similar experience, consider XFCE."})}),"\n",(0,i.jsxs)(n.p,{children:["Solus offers the MATE desktop environment / experience, tailored to advanced users and older hardware, as well as shipping with our modern menu called ",(0,i.jsx)(n.a,{href:"https://github.com/getsolus/brisk-menu",children:"Brisk Menu"}),". If you have installed either our Budgie or GNOME editions, you can try out and install MATE by running the following command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Do NOT attempt to do this if you are running the KDE Plasma Desktop version of Solus!\nsudo eopkg install -c desktop.mate\n"})}),"\n",(0,i.jsx)(n.h2,{id:"xfce",children:"XFCE"}),"\n",(0,i.jsx)(n.p,{children:"Solus offers the XFCE desktop environment for users preferring a more lightweight experience. It is recommended for existing MATE users. You can install XFCE with the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Do NOT attempt to do this if you are running the KDE Plasma Desktop version of Solus!\nsudo eopkg install -c desktop.xfce\n"})}),"\n",(0,i.jsx)(n.h2,{id:"tiling-window-managers",children:"Tiling window managers"}),"\n",(0,i.jsx)(n.h3,{id:"i3",children:"i3"}),"\n",(0,i.jsx)(n.p,{children:"Solus offers i3 as a tiling window manager. Users wanting to try i3 can install it by running the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Do NOT attempt to do this if you are running the KDE Plasma Desktop version of Solus!\nsudo eopkg install i3\n"})}),"\n",(0,i.jsx)(n.p,{children:"If you want to use i3 with support for GNOME Settings Daemon and other GNOME functionality, follow the instructions for installation of GNOME Shell, then choose GNOME+i3 at the login screen to use it."}),"\n",(0,i.jsx)(n.h3,{id:"sway",children:"Sway"}),"\n",(0,i.jsx)(n.p,{children:"Solus offers Sway as a Wayland-only tiling window manager. You can install it with the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo eopkg install sway\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Sway expects users to do some configuration, refer to the ",(0,i.jsx)(n.a,{href:"https://github.com/swaywm/sway/wiki",children:"Sway Wiki"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["For more information about tiling window managers, click ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Tiling_window_manager",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"stacking-window-manager",children:"Stacking window manager"}),"\n",(0,i.jsx)(n.h3,{id:"labwc",children:"Labwc"}),"\n",(0,i.jsx)(n.p,{children:"Solus offers Labwc as a Wayland-only stacking window manager. You can install it with the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo eopkg install labwc\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Labwc expects users to do some configuration, refer to the ",(0,i.jsx)(n.a,{href:"https://labwc.github.io/",children:"Labwc wiki"})]}),"\n",(0,i.jsxs)(n.p,{children:["For more information about stacking window managers, click ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Stacking_window_manager",children:"here"})]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>r,a:()=>a});var i=o(67294);const s={},t=i.createContext(s);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);