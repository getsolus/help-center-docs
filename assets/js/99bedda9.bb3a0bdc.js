"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[8639],{48345:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>o,contentTitle:()=>d,default:()=>c,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var s=i(85893),n=i(11151);const t={title:"Hardware",summary:"Guide to using additional hardware on Solus"},d="Hardware",l={id:"user/hardware/index",title:"Hardware",description:"Preinstalled drivers",source:"@site/docs/user/hardware/index.md",sourceDirName:"user/hardware",slug:"/user/hardware/",permalink:"/docs/user/hardware/",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/hardware/index.md",tags:[],version:"current",lastUpdatedAt:1730909882e3,frontMatter:{title:"Hardware",summary:"Guide to using additional hardware on Solus"},sidebar:"userSidebar",previous:{title:"Tips and Tricks",permalink:"/docs/user/editions/xfce/tips-and-tricks"},next:{title:"Compatibility",permalink:"/docs/category/compatibility"}},o={},a=[{value:"Preinstalled drivers",id:"preinstalled-drivers",level:2},{value:"GPUs",id:"gpus",level:3},{value:"Proprietary drivers",id:"proprietary-drivers",level:2},{value:"Supported drivers",id:"supported-drivers",level:3}];function h(e){const r={h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"hardware",children:"Hardware"})}),"\n",(0,s.jsx)(r.h2,{id:"preinstalled-drivers",children:"Preinstalled drivers"}),"\n",(0,s.jsx)(r.p,{children:"The vast majority of hardware on Linux is supported by driver modules included with the Linux Kernel. This includes things like:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"CPUs (AMD, Intel)"}),"\n",(0,s.jsx)(r.li,{children:"Networking"}),"\n",(0,s.jsx)(r.li,{children:"PCI and PCI Express"}),"\n",(0,s.jsx)(r.li,{children:"Storage"}),"\n",(0,s.jsx)(r.li,{children:"USB"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"The purpose of this documentation is to help you find drivers for hardware that is not directly supported or requires additional configuration to be used on Solus."}),"\n",(0,s.jsx)(r.h3,{id:"gpus",children:"GPUs"}),"\n",(0,s.jsx)(r.p,{children:"The situations with GPU drivers on Linux is a little complicated. Each driver is actually broken up into multiple pieces:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Direct Rendering Manager (DRM)"}),"\nThis is the part of the driver provided by the Linux kernel and provides just enough functionality to allow other drivers to access the hardware and render to a connected display.\nLinux provides support for AMD, Intel, and NVIDIA GPUs in this basic capacity."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"OpenGL driver"}),"\nThis part of the driver is needed for OpenGL applications. AMD and Intel are fully supported on Linux through Mesa, and do not need further drivers."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Vulkan driver"}),"\nThis part of the driver is needed for Vulkan applications. AMD and Intel are fully supported on Linux through Mesa, and do not need further drivers."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Xorg driver"}),"\nIn order to expose certain features to the Xorg Server, AMD and Intel have additional drivers which may be needed for things like variable refresh rate or multiple display support."]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Unfortunately for NVIDIA users, the situation gets a little complicated. Linux has two sets of drivers for NVIDIA GPUs:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Nouveau"}),"\nThis is the open-source driver for NVIDIA GPUs. It consists of a DRM driver provided by the Linux kernel, OpenGL drivers (nvc0, nv50) from Mesa, and an Xorg driver (xorg-driver-video-nouveau).\nDevice support for these drivers has historically lagged behind the NVIDIA proprietary drivers and likely will not support newer hardware and does not include Vulkan support.\nPerformance of this driver also typically lags behind the proprietary drivers."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"NVIDIA proprietary drivers"}),"\nThis is the closed-source driver provided directly by NVIDIA. It consists of a DRM driver module for the kernel, OpenGL and Vulkan drivers for rendering, and additional drivers for extended features of the hardware.\nDevice support for these drivers is very good for newer hardware, but older devices will eventually become unsupported and require the Nouveau drivers instead.\nPerformance of this driver is typically the best available and is therefore highly desirable to gamers and content creators."]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"proprietary-drivers",children:"Proprietary drivers"}),"\n",(0,s.jsx)(r.p,{children:"Installing proprietary drivers may improve performance or certain features, however they are usually not necessary for normal daily usage. Solus provides a utility for installing drivers for detected hardware."}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"DoFlicky Screenshot",src:i(42202).Z+"",width:"497",height:"321"})}),"\n",(0,s.jsx)(r.p,{children:"If there are proprietary drivers that can be installed, they will show up in the box below the description. You can click the item you wish to install and click Install. If you are installing NVIDIA drivers, you may find it to be desirable to install the 32-bit driver as well, in the event you wish to use Steam or Wine."}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Note:"})," A reboot will be required to use the newly installed driver."]}),"\n",(0,s.jsx)(r.h3,{id:"supported-drivers",children:"Supported drivers"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Vendor"}),(0,s.jsx)(r.th,{children:"Drivers"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"ASUS"}),(0,s.jsx)(r.td,{children:"piper"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Broadcom"}),(0,s.jsx)(r.td,{children:"broadcom-sta"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Logitech"}),(0,s.jsx)(r.td,{children:"piper"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"NVIDIA"}),(0,s.jsx)(r.td,{children:"470, main series"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Razer"}),(0,s.jsx)(r.td,{children:"openrazer"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Roccat"}),(0,s.jsx)(r.td,{children:"piper"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"SteelSeries"}),(0,s.jsx)(r.td,{children:"piper"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"VMware"}),(0,s.jsx)(r.td,{children:"open-vm-tools"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Xbox"}),(0,s.jsx)(r.td,{children:"xone"})]})]})]})]})}function c(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},42202:(e,r,i)=>{i.d(r,{Z:()=>s});const s=i.p+"assets/images/doflicky-574dff562b460c3839fb6d47c7fa2d25.jpg"},11151:(e,r,i)=>{i.d(r,{Z:()=>l,a:()=>d});var s=i(67294);const n={},t=s.createContext(n);function d(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);