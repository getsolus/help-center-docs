"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[3624],{58194:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var s=o(85893),n=o(11151);const i={title:"Installation Issues",summary:"Troubleshooting the Solus installation process"},l="Installation Issues",a={id:"user/troubleshooting/installation",title:"Installation Issues",description:"This article covers various issues that you may come across during installation of Solus.",source:"@site/docs/user/troubleshooting/installation.md",sourceDirName:"user/troubleshooting",slug:"/user/troubleshooting/installation",permalink:"/docs/user/troubleshooting/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/troubleshooting/installation.md",tags:[],version:"current",lastUpdatedAt:1714518504e3,frontMatter:{title:"Installation Issues",summary:"Troubleshooting the Solus installation process"},sidebar:"userSidebar",previous:{title:"Boot Rescue",permalink:"/docs/user/troubleshooting/boot-rescue"},next:{title:"Plasma Troubleshooting",permalink:"/docs/user/troubleshooting/plasma"}},r={},u=[{value:"Can&#39;t install in EFI mode",id:"cant-install-in-efi-mode",level:2},{value:"I can&#39;t boot into Solus after installation!",id:"i-cant-boot-into-solus-after-installation",level:2},{value:"Legacy/BIOS installation",id:"legacybios-installation",level:3},{value:"EFI",id:"efi",level:3}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"installation-issues",children:"Installation Issues"}),"\n",(0,s.jsx)(t.p,{children:"This article covers various issues that you may come across during installation of Solus."}),"\n",(0,s.jsx)(t.h2,{id:"cant-install-in-efi-mode",children:"Can't install in EFI mode"}),"\n",(0,s.jsxs)(t.p,{children:["The live ISO will attempt to install Solus by the same method it was booted. If it is unable to install the boot loader to the ESP, then it is likely booted in legacy mode. Ensure that the ISO has been created via a ",(0,s.jsx)(t.a,{href:"/docs/user/quick-start/installation",children:"supported method"})," and that an EFI boot is selected from the boot options."]}),"\n",(0,s.jsxs)(t.p,{children:["You can check whether the Solus ISO has booted in EFI mode by checking the for the existence of ",(0,s.jsx)(t.code,{children:"ls /sys/firmware/efi"})," (if it's not found, then it's booted in legacy mode)."]}),"\n",(0,s.jsx)(t.h2,{id:"i-cant-boot-into-solus-after-installation",children:"I can't boot into Solus after installation!"}),"\n",(0,s.jsx)(t.p,{children:"There are some misunderstandings with how legacy and EFI boot works (usually implemented as UEFI). These sections cover the common misconceptions."}),"\n",(0,s.jsx)(t.h3,{id:"legacybios-installation",children:"Legacy/BIOS installation"}),"\n",(0,s.jsx)(t.p,{children:"Legacy installations on Solus use the Grub boot loader on an MBR disk. Only one boot loader can be used on an MBR disk, so if you haven't installed the Solus boot loader on the MBR, you will need to boot into the other OS and update grub prior to being able to boot Solus. This will also be required on each update of the kernel to ensure you're booting in the latest release."}),"\n",(0,s.jsx)(t.h3,{id:"efi",children:"EFI"}),"\n",(0,s.jsxs)(t.p,{children:["EFI allows for multiple boot loaders to be installed, which means you can boot the Solus boot loader directly. To ensure you are booting Solus you need to boot ",(0,s.jsx)(t.code,{children:"Linux Boot Manager"})," from the EFI options. Common keys for bringing up a boot menu or the options during boot are hitting ",(0,s.jsx)(t.code,{children:"Esc/F2/F9/F10/F11/F12"})," during boot (this differs per motherboard). If a boot loader for another OS is not listed in the menu, then it is not correctly registered (and therefore not installed correctly). You can make the Solus boot menu appear via ",(0,s.jsx)(t.a,{href:"/docs/user/quick-start/boot-management#displaying-the-boot-menu-by-default-every-boot",children:"Displaying the Solus boot menu on boot"})," which should be able to boot windows (as it's registered with UEFI properly) as well as Solus, but not other systems."]})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>l});var s=o(67294);const n={},i=s.createContext(n);function l(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);