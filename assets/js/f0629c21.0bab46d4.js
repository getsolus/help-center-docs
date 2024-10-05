"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[3375],{53126:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var s=o(85893),i=o(11151);const t={title:"Open Broadcaster Software (OBS)",summary:"A quick start guide to OBS on Solus"},l="Open Broadcaster Software (OBS)",r={id:"user/software/web/obs",title:"Open Broadcaster Software (OBS)",description:"This article covers the installation of OBS Studio as well as the use of third-party plugins.",source:"@site/docs/user/software/web/obs.md",sourceDirName:"user/software/web",slug:"/user/software/web/obs",permalink:"/docs/user/software/web/obs",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/software/web/obs.md",tags:[],version:"current",lastUpdatedAt:172813881e4,frontMatter:{title:"Open Broadcaster Software (OBS)",summary:"A quick start guide to OBS on Solus"},sidebar:"userSidebar",previous:{title:"Web",permalink:"/docs/category/web"},next:{title:"Troubleshooting",permalink:"/docs/user/troubleshooting/"}},a={},d=[{value:"Installation",id:"installation",level:2},{value:"Virtual camera",id:"virtual-camera",level:2},{value:"Plugins",id:"plugins",level:2},{value:"Known working plugins",id:"known-working-plugins",level:3},{value:"Input Overlay",id:"input-overlay",level:4}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"open-broadcaster-software-obs",children:"Open Broadcaster Software (OBS)"})}),"\n",(0,s.jsx)(n.p,{children:"This article covers the installation of OBS Studio as well as the use of third-party plugins."}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.p,{children:["To install OBS Studio, either open up the Software Center and type ",(0,s.jsx)(n.code,{children:"obs-studio"})," into the Search section or run the following command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo eopkg install obs-studio\n"})}),"\n",(0,s.jsx)(n.h2,{id:"virtual-camera",children:"Virtual camera"}),"\n",(0,s.jsx)(n.p,{children:'OBS includes a virtual webcam device which can be used to send your OBS stream to video conferencing programs. In order to use this on Solus, you must first install from our repository a separate kernel module that is responsible for creating the necessary "loopback" device. There are two versions of this software available in the repository, you must choose the version that corresponds to the kernel you have installed.'}),"\n",(0,s.jsx)(n.p,{children:"To find out which kernel is installed, run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"uname -r\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This should return a version which ends in ",(0,s.jsx)(n.code,{children:".current"})," or ",(0,s.jsx)(n.code,{children:".lts"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:['If you are running the "current" kernel, install ',(0,s.jsx)(n.code,{children:"v4l2loopback-current"}),": ",(0,s.jsx)(n.code,{children:"sudo eopkg install v4l2loopback-current"})]}),"\n",(0,s.jsxs)(n.li,{children:['If you are running the "lts" kernel, install ',(0,s.jsx)(n.code,{children:"v4l2loopback"}),": ",(0,s.jsx)(n.code,{children:"sudo eopkg install v4l2loopback"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Once v4l2loopback is installed, reboot your computer. Next time you start OBS, it will prompt you for your password to set up v4l2loopback. After that, the virtual camera should be available as a webcam in other programs."}),"\n",(0,s.jsx)(n.h2,{id:"plugins",children:"Plugins"}),"\n",(0,s.jsxs)(n.p,{children:["All OBS Studio plugins should be installed into their own respective folders inside the ",(0,s.jsx)(n.code,{children:"~/.config/obs-studio/plugins"})," folder. If this folder does not exist for you, you'll need to create it before copying plugins into it."]}),"\n",(0,s.jsx)(n.p,{children:"When installing a plugin, the directory tree should look something like the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"plugins\n\u2514\u2500\u2500 plugin-name\n    \u251c\u2500\u2500 bin\n    \u2502\xa0\xa0 \u2514\u2500\u2500 64bit\n    \u2502\xa0\xa0     \u2514\u2500\u2500 filename.so\n    \u251c\u2500\u2500 data\n    \u2502\xa0\xa0 \u2514\u2500\u2500 locale\n    \u2502\xa0\xa0     \u2514\u2500\u2500 en-US.ini\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In essence, you should have ",(0,s.jsx)(n.code,{children:"bin/64bit"})," folders inside the plugin folder, with any shared object plugin files inside that. As OBS Studio for Solus only supports 64-bit, the plugin ",(0,s.jsx)(n.strong,{children:"must"})," support 64-bit as well."]}),"\n",(0,s.jsxs)(n.p,{children:["Additionally, the plugin may come with additional files or folders, such as locale information. That locale information should be located in ",(0,s.jsx)(n.code,{children:"data/locale"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Most Linux-supporting plugins should provide pre-compiled tarballs or zip files that you can extract to get a pre-made / ready folder structure that you can simply copy / paste into ",(0,s.jsx)(n.code,{children:"~/.config/obs-studio/plugins"})]}),"\n",(0,s.jsx)(n.h3,{id:"known-working-plugins",children:"Known working plugins"}),"\n",(0,s.jsx)(n.h4,{id:"input-overlay",children:"Input Overlay"}),"\n",(0,s.jsxs)(n.p,{children:["The Input Overlay plugin enables you to show an input overlay of your gamepad, mouse, or keyboard. Pre-compiled release files are available on the Releases section of the ",(0,s.jsx)(n.a,{href:"https://github.com/univrsal/input-overlay",children:"developer's website"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"To install Input Overlay, download the input-overlay-vNUM.zip file from their releases page, where NUM is the latest release number, such as 4.4."}),"\n",(0,s.jsx)(n.p,{children:"Next, we'll install a library necessary to use the Input Overlay plugin, as well as an unzip tool to make the installation process easier. Run the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo eopkg install libuiohook unzip\n"})}),"\n",(0,s.jsx)(n.p,{children:"Next, click on the zip file in your File Manager to open up the Extract tool (such as File Roller). You will be presented with contents like the following."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Input Overlay Zip",src:o(45594).Z+"",width:"770",height:"348"})}),"\n",(0,s.jsxs)(n.p,{children:["Let's extract this to our Downloads folder to make the process of copying the contents we need more easily. Click the Extract button in the image indicated above. This will present you with a file dialog. Navigate to the Downloads folder and click Extract. This will create a folder, likely called something similar to ",(0,s.jsx)(n.code,{children:"input-overlay.v4.4"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Next let's run the following commands in the Terminal. The commands below will:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Remove our zip file to make our directory renaming more reliable."}),"\n",(0,s.jsx)(n.li,{children:"Move our extracted input overlay in our Downloads directory to one which is without a version number, to make it easier for future commands."}),"\n",(0,s.jsx)(n.li,{children:"Extract all the preset zips and remove their zip files"}),"\n",(0,s.jsxs)(n.li,{children:["Create an ",(0,s.jsx)(n.code,{children:"input-overlay"})," folder in ",(0,s.jsx)(n.code,{children:"~/.config/obs-studio/plugins"})," as well as creating the ",(0,s.jsx)(n.code,{children:"plugins"})," folder if needed."]}),"\n",(0,s.jsx)(n.li,{children:"Copy over the necessary and recommended folders and files to our input-overlay plugin folder."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'rm ~/Downloads/input-overlay*.zip\nmv ~/Downloads/input-overlay.v* ~/Downloads/input-overlay\ncd ~/Downloads/input-overlay/presets\nfor file in `ls *.zip`; do unzip "${file}" -d "${file:0:-4}"; done\nrm *.zip\nmkdir -p ~/.config/obs-studio/plugins/input-overlay\ncp -R ~/Downloads/input-overlay/plugin-linux/* ~/.config/obs-studio/plugins/input-overlay/\ncp -R ~/Downloads/input-overlay/presets ~/.config/obs-studio/plugins/input-overlay/\n'})}),"\n",(0,s.jsx)(n.p,{children:"Now the Input Overlay source is available to us as a source (if you have OBS Studio already open, restart it), as shown in the below screenshot."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Input Overlay: Source Menu",src:o(27549).Z+"",width:"1000",height:"600"})}),"\n",(0,s.jsx)(n.p,{children:"Upon clicking on this source, we'll be presented with the usual add / use existing source dialog."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Input Overlay: Add Existing Source",src:o(52985).Z+"",width:"791",height:"540"})}),"\n",(0,s.jsx)(n.p,{children:"After naming a source, such as \"Mouse\", click OK and you'll be presented with a dialog that looks similar to below. Do note that yours will be empty by default, as you've not yet selected an Overlay image file and Layout config file yet."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Input Overlay: Main Source",src:o(1515).Z+"",width:"1032",height:"783"})}),"\n",(0,s.jsxs)(n.p,{children:["This is where the presets come in handy. Click the Browse button for Overlay image file and navigate to ",(0,s.jsx)(n.code,{children:".config/obs-studio/plugins/presets"})," and then the respective preset you want, such as mouse, and then the PNG within it. ",(0,s.jsx)(n.strong,{children:"You will need to enable hidden files"})," in the file dialog by using the keyboard combination ",(0,s.jsx)(n.code,{children:"Ctrl+H"})," to see ",(0,s.jsx)(n.code,{children:".config"})]}),"\n",(0,s.jsxs)(n.p,{children:["Next, do the same for Layout config overlay, but instead go to the same folder as your PNG and select the ",(0,s.jsx)(n.code,{children:"ini"})," file."]}),"\n",(0,s.jsx)(n.p,{children:'If you\'re using a mouse or gamepad, be sure to check the "Mouse overlay" or "Gamepad overlay" boxes respectively and tweak settings as you see fit.'})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},52985:(e,n,o)=>{o.d(n,{Z:()=>s});const s=o.p+"assets/images/input-overlay-source-add-existing-d472cc90ae7590dd14f41fa8e7a249d5.jpg"},1515:(e,n,o)=>{o.d(n,{Z:()=>s});const s=o.p+"assets/images/input-overlay-source-main-8fdfb8ec5ad7ba5006f03737eebcc8c8.jpg"},27549:(e,n,o)=>{o.d(n,{Z:()=>s});const s=o.p+"assets/images/input-overlay-source-menu-ef421b6d9afa2c80e8f2c84e15adb843.jpg"},45594:(e,n,o)=>{o.d(n,{Z:()=>s});const s=o.p+"assets/images/input-overlay-zip-12cbf3b807ebdf130723291e940f425d.jpg"},11151:(e,n,o)=>{o.d(n,{Z:()=>r,a:()=>l});var s=o(67294);const i={},t=s.createContext(i);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);