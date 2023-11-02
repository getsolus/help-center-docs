"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[7626],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,g=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3612:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={title:"Gaming",summary:"Instructions for installing various gaming software on Solus"},o="Gaming",l={unversionedId:"user/software/gaming/index",id:"user/software/gaming/index",title:"Gaming",description:"Heroes of Newerth",source:"@site/docs/user/software/gaming/index.md",sourceDirName:"user/software/gaming",slug:"/user/software/gaming/",permalink:"/docs/user/software/gaming/",draft:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/software/gaming/index.md",tags:[],version:"current",lastUpdatedAt:1698939564,formattedLastUpdatedAt:"Nov 2, 2023",frontMatter:{title:"Gaming",summary:"Instructions for installing various gaming software on Solus"},sidebar:"userSidebar",previous:{title:"Web Development",permalink:"/docs/user/software/development/web"},next:{title:"Localization",permalink:"/docs/category/localization"}},s={},u=[{value:"Heroes of Newerth",id:"heroes-of-newerth",level:2},{value:"Lutris",id:"lutris",level:2},{value:"About",id:"about",level:3},{value:"Minecraft",id:"minecraft",level:2},{value:"Installation",id:"installation",level:3},{value:"Retroarch",id:"retroarch",level:2},{value:"Installing the assets",id:"installing-the-assets",level:3},{value:"Steam",id:"steam",level:2},{value:"NVIDIA",id:"nvidia",level:3}],d={toc:u},c="wrapper";function p(e){let{components:t,...i}=e;return(0,a.kt)(c,(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gaming"},"Gaming"),(0,a.kt)("h2",{id:"heroes-of-newerth"},"Heroes of Newerth"),(0,a.kt)("p",null,'First, install the latest version of HoN by downloading it and running "HoNClient.sh".'),(0,a.kt)("p",null,"Assuming that you install to ~/HoN (default), you only need to run two commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg it gconf libgcrypt11 libglu\n")),(0,a.kt)("p",null,"That installs all of the dependencies that HoN needs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"rm ~/HoN/libs-x86_64/{libcurl.so.4,libfreetype.so.6,libgcc_s.so.1,libgcrypt.so.11,libspeexdsp.so.1,libspeex.so.1,libstdc++.so.6,libudev.so.0}\n")),(0,a.kt)("p",null,"This removes all the libraries that conflict with the ones in Solus."),(0,a.kt)("h2",{id:"lutris"},"Lutris"),(0,a.kt)("p",null,"Lutris is currently available via the Solus repository, as the ",(0,a.kt)("inlineCode",{parentName:"p"},"lutris")," package."),(0,a.kt)("h3",{id:"about"},"About"),(0,a.kt)("p",null,"Lutris is an open gaming platform for Linux. It helps you install and manage your games in a unified interface. Their goal is to support every game which runs on Linux, from native to Windows games (via Wine) to emulators and browser games. The desktop application and the website are libre software, contributions are welcome!"),(0,a.kt)("p",null,"For more information you can visit their website at ",(0,a.kt)("a",{parentName:"p",href:"https://lutris.net"},"lutris.net"),". You can also see their list of games ",(0,a.kt)("a",{parentName:"p",href:"https://lutris.net/games/"},"here"),"."),(0,a.kt)("h2",{id:"minecraft"},"Minecraft"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.minecraft.net"},"Minecraft"),' is a sandbox independent video game originally created by Swedish programmer Markus "Notch" Persson and later developed and published by the Swedish company Mojang.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Minecraft Screenshot",src:n(5528).Z,width:"1920",height:"1080"})),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Install dependencies and download Minecraft:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg it gconf binutils\nwget https://launcher.mojang.com/download/Minecraft.deb\n")),(0,a.kt)("p",null,"Extract files and remove old archive:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ar xf Minecraft.deb\nsudo tar xf data.tar.xz -C /\nsudo rm control.tar.xz data.tar.xz debian-binary Minecraft.deb\n")),(0,a.kt)("p",null,"Integrate the installed files into your system:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo usysconf run -f\n")),(0,a.kt)("h2",{id:"retroarch"},"Retroarch"),(0,a.kt)("p",null,"Retroarch is a frontend for emulators, game engines and media players. It has all you need to run classic games through its polished graphical interface."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Retroarch Screenshot",src:n(963).Z,width:"960",height:"746"})),(0,a.kt)("h3",{id:"installing-the-assets"},"Installing the assets"),(0,a.kt)("p",null,'The assets are not packaged with Retroarch itself and have to be downloaded from inside the program. This can easily be done by going into the Online Updater from the Main Menu and selecting "Update Assets".'),(0,a.kt)("h2",{id:"steam"},"Steam"),(0,a.kt)("p",null,"Steam is currently available via the Solus repository, as the ",(0,a.kt)("inlineCode",{parentName:"p"},"steam")," package."),(0,a.kt)("h3",{id:"nvidia"},"NVIDIA"),(0,a.kt)("p",null,"For systems running NVIDIA graphics hardware, you will need to install the corresponding 32bit video driver for your card, listed below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Current Gen: ",(0,a.kt)("inlineCode",{parentName:"li"},"nvidia-glx-driver-32bit")),(0,a.kt)("li",{parentName:"ul"},"470 series: ",(0,a.kt)("inlineCode",{parentName:"li"},"nvidia-470-glx-driver-32bit"))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},'You can use our "Hardware Drivers" utility to find the right driver for your system.')))}p.isMDXComponent=!0},5528:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/minecraft-7079f00591b397a6d96d8b3603f5d05f.jpg"},963:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/retroarch-9d687fb4c01f4d4f393f10b277b10e9c.jpg"}}]);