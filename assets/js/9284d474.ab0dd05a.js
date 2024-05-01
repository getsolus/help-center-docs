"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[7626],{39842:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=s(85893),t=s(11151);const r={title:"Gaming",summary:"Instructions for installing various gaming software on Solus"},a="Gaming",o={id:"user/software/gaming/index",title:"Gaming",description:"Heroes of Newerth",source:"@site/docs/user/software/gaming/index.md",sourceDirName:"user/software/gaming",slug:"/user/software/gaming/",permalink:"/docs/user/software/gaming/",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/software/gaming/index.md",tags:[],version:"current",lastUpdatedAt:171452225e4,frontMatter:{title:"Gaming",summary:"Instructions for installing various gaming software on Solus"},sidebar:"userSidebar",previous:{title:"Web Development",permalink:"/docs/user/software/development/web"},next:{title:"Localization",permalink:"/docs/category/localization"}},l={},d=[{value:"Heroes of Newerth",id:"heroes-of-newerth",level:2},{value:"Lutris",id:"lutris",level:2},{value:"About",id:"about",level:3},{value:"Minecraft",id:"minecraft",level:2},{value:"Installation",id:"installation",level:3},{value:"RetroArch",id:"retroarch",level:2},{value:"Installing the assets",id:"installing-the-assets",level:3},{value:"Steam",id:"steam",level:2},{value:"NVIDIA",id:"nvidia",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"gaming",children:"Gaming"}),"\n",(0,i.jsx)(n.h2,{id:"heroes-of-newerth",children:"Heroes of Newerth"}),"\n",(0,i.jsx)(n.p,{children:'First, install the latest version of HoN by downloading it and running "HoNClient.sh".'}),"\n",(0,i.jsx)(n.p,{children:"Assuming that you install to ~/HoN (default), you only need to run two commands:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo eopkg it gconf libgcrypt11 libglu\n"})}),"\n",(0,i.jsx)(n.p,{children:"That installs all of the dependencies that HoN needs."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"rm ~/HoN/libs-x86_64/{libcurl.so.4,libfreetype.so.6,libgcc_s.so.1,libgcrypt.so.11,libspeexdsp.so.1,libspeex.so.1,libstdc++.so.6,libudev.so.0}\n"})}),"\n",(0,i.jsx)(n.p,{children:"This removes all the libraries that conflict with the ones in Solus."}),"\n",(0,i.jsx)(n.h2,{id:"lutris",children:"Lutris"}),"\n",(0,i.jsxs)(n.p,{children:["Lutris is currently available via the Solus repository, as the ",(0,i.jsx)(n.code,{children:"lutris"})," package."]}),"\n",(0,i.jsx)(n.h3,{id:"about",children:"About"}),"\n",(0,i.jsx)(n.p,{children:"Lutris is an open gaming platform for Linux. It helps you install and manage your games in a unified interface. Their goal is to support every game which runs on Linux, from native to Windows games (via Wine) to emulators and browser games. The desktop application and the website are libre software, contributions are welcome!"}),"\n",(0,i.jsxs)(n.p,{children:["For more information you can visit their website at ",(0,i.jsx)(n.a,{href:"https://lutris.net",children:"lutris.net"}),". You can also see their list of games ",(0,i.jsx)(n.a,{href:"https://lutris.net/games/",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"minecraft",children:"Minecraft"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://www.minecraft.net",children:"Minecraft"}),' is a sandbox independent video game originally created by Swedish programmer Markus "Notch" Persson and later developed and published by the Swedish company Mojang.']}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Minecraft Screenshot",src:s(15528).Z+"",width:"1920",height:"1080"})}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.p,{children:"Install dependencies and download Minecraft:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo eopkg it gconf binutils\nwget https://launcher.mojang.com/download/Minecraft.deb\n"})}),"\n",(0,i.jsx)(n.p,{children:"Extract files and remove old archive:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo ar xf Minecraft.deb\nsudo tar xf data.tar.xz -C /\nsudo rm control.tar.xz data.tar.xz debian-binary Minecraft.deb\n"})}),"\n",(0,i.jsx)(n.p,{children:"Integrate the installed files into your system:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo usysconf run -f\n"})}),"\n",(0,i.jsx)(n.h2,{id:"retroarch",children:"RetroArch"}),"\n",(0,i.jsx)(n.p,{children:"RetroArch is a frontend for emulators, game engines and media players. It has all you need to run classic games through its polished graphical interface."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"RetroArch Screenshot",src:s(30963).Z+"",width:"960",height:"746"})}),"\n",(0,i.jsx)(n.h3,{id:"installing-the-assets",children:"Installing the assets"}),"\n",(0,i.jsx)(n.p,{children:'The assets are not packaged with RetroArch itself and have to be downloaded from inside the program. This can easily be done by going into the Online Updater from the Main Menu and selecting "Update Assets".'}),"\n",(0,i.jsx)(n.h2,{id:"steam",children:"Steam"}),"\n",(0,i.jsxs)(n.p,{children:["Steam is currently available via the Solus repository, as the ",(0,i.jsx)(n.code,{children:"steam"})," package."]}),"\n",(0,i.jsx)(n.h3,{id:"nvidia",children:"NVIDIA"}),"\n",(0,i.jsx)(n.p,{children:"For systems running NVIDIA graphics hardware, you will need to install the corresponding 32bit video driver for your card, listed below:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Current Gen: ",(0,i.jsx)(n.code,{children:"nvidia-glx-driver-32bit"})]}),"\n",(0,i.jsxs)(n.li,{children:["470 series: ",(0,i.jsx)(n.code,{children:"nvidia-470-glx-driver-32bit"})]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:'You can use our "Hardware Drivers" utility to find the right driver for your system.'})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},15528:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/minecraft-7079f00591b397a6d96d8b3603f5d05f.jpg"},30963:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/retroarch-9d687fb4c01f4d4f393f10b277b10e9c.jpg"},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>a});var i=s(67294);const t={},r=i.createContext(t);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);