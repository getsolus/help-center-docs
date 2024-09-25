"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[6225],{53058:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=n(85893),s=n(11151);const r={title:"Mice and Touchpads",summary:"Guide to using and configuring input devices on Solus"},a="Mice and Touchpads",c={id:"user/hardware/peripherals/mice-and-touchpads",title:"Mice and Touchpads",description:"ASUS, Logitech, Roccat, SteelSeries",source:"@site/docs/user/hardware/peripherals/mice-and-touchpads.md",sourceDirName:"user/hardware/peripherals",slug:"/user/hardware/peripherals/mice-and-touchpads",permalink:"/docs/user/hardware/peripherals/mice-and-touchpads",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/hardware/peripherals/mice-and-touchpads.md",tags:[],version:"current",lastUpdatedAt:1727275172e3,frontMatter:{title:"Mice and Touchpads",summary:"Guide to using and configuring input devices on Solus"},sidebar:"userSidebar",previous:{title:"Peripherals",permalink:"/docs/category/peripherals"},next:{title:"MIDI Keyboards",permalink:"/docs/user/hardware/peripherals/midi-keyboard"}},o={},d=[{value:"ASUS, Logitech, Roccat, SteelSeries",id:"asus-logitech-roccat-steelseries",level:2},{value:"Razer",id:"razer",level:2},{value:"Synaptics",id:"synaptics",level:2},{value:"Setup",id:"setup",level:3},{value:"Revert configuration",id:"revert-configuration",level:3}];function l(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"mice-and-touchpads",children:"Mice and Touchpads"})}),"\n",(0,t.jsx)(i.h2,{id:"asus-logitech-roccat-steelseries",children:"ASUS, Logitech, Roccat, SteelSeries"}),"\n",(0,t.jsxs)(i.p,{children:["TODO: Quick tutorial on installing ",(0,t.jsx)(i.code,{children:"piper"})," with a screenshot. And point them at the official documentation."]}),"\n",(0,t.jsx)(i.h2,{id:"razer",children:"Razer"}),"\n",(0,t.jsxs)(i.p,{children:["TODO: Quick tutorial on installing ",(0,t.jsx)(i.code,{children:"polychromatic"})," with a screenshot. And point them at the official documentation."]}),"\n",(0,t.jsx)(i.h2,{id:"synaptics",children:"Synaptics"}),"\n",(0,t.jsx)(i.p,{children:"These instructions describe how to use the the synaptics driver instead of the default libinput driver to manage your touchpad. You might try this if:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"libinput doesn't allow for two-finger scrolling"}),"\n",(0,t.jsx)(i.li,{children:"libinput doesn't supports edge scrolling or vice versa"}),"\n",(0,t.jsx)(i.li,{children:"You want to take advantage of the extended configurability of the synaptics driver"}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"NOTE:"})," The synaptics driver will only be used for your touchpad and libinput will be used for all other input devices."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"NOTE:"})," That the synaptics driver is in maintenance mode and libinput is the preferred driver and also sees active development."]}),"\n",(0,t.jsx)(i.h3,{id:"setup",children:"Setup"}),"\n",(0,t.jsx)(i.p,{children:"To get started open up a terminal and install the synaptics driver."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"sudo eopkg it xorg-driver-input-synaptics\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Then, copy the default synaptics config file to the ",(0,t.jsx)(i.code,{children:"/etc/"})," directory."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"sudo cp /usr/share/X11/xorg.conf.d/50-synaptics.conf /etc/X11/xorg.conf.d/90-synaptics.conf\n"})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"NOTE:"})," The /etc/ directory has a higher priority over the default config location and will ensure the synaptics driver gets loaded first, additionally by copying to /etc/ first it will avoid a three-way merge issue if you wish the edit the config file directly."]}),"\n",(0,t.jsx)(i.p,{children:"Reboot your machine then verify the synaptics driver is in use:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"cat /var/log/Xorg.0.log | grep \"Using input driver 'synaptics' for\"\n"})}),"\n",(0,t.jsx)(i.p,{children:"If it returns a result, then success! The synaptics driver is in use instead of libinput for your Touchpad."}),"\n",(0,t.jsx)(i.h3,{id:"revert-configuration",children:"Revert configuration"}),"\n",(0,t.jsx)(i.p,{children:"If you wish to switch back to using libinput:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"sudo rm /etc/X11/xorg.conf.d/90-synaptics.conf\nsudo eopkg rm xorg-driver-input-synaptics\n"})})]})}function h(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>c,a:()=>a});var t=n(67294);const s={},r=t.createContext(s);function a(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);