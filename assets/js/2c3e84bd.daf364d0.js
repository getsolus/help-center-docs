"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[8157],{89541:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=i(85893),s=i(11151);const o={title:"Disk Partitioning",summary:"Overview of the partitioning that the installer can perform"},r="Disk Partitioning",a={id:"user/quick-start/installation/disks",title:"Disk Partitioning",description:"Solus provides multiple ways you can install onto your system.",source:"@site/docs/user/quick-start/installation/disks.md",sourceDirName:"user/quick-start/installation",slug:"/user/quick-start/installation/disks",permalink:"/docs/user/quick-start/installation/disks",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/quick-start/installation/disks.md",tags:[],version:"current",lastUpdatedAt:1712526756e3,frontMatter:{title:"Disk Partitioning",summary:"Overview of the partitioning that the installer can perform"},sidebar:"userSidebar",previous:{title:"Preparing to Install",permalink:"/docs/user/quick-start/installation/"},next:{title:"Booting with Secure Boot Enabled",permalink:"/docs/user/quick-start/installation/secure-boot"}},l={},c=[{value:"UEFI",id:"uefi",level:2}];function u(t){const e={br:"br",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"disk-partitioning",children:"Disk Partitioning"}),"\n",(0,n.jsx)(e.p,{children:"Solus provides multiple ways you can install onto your system."}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Whole Drive"}),(0,n.jsx)(e.br,{}),"\n","Solus can take up the entire drive, using traditional root partitions, or with LVM-managed root partitions."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Multi-boot"}),(0,n.jsx)(e.br,{}),"\n","You can install Solus next to your existing operating system, such as Windows. ",(0,n.jsx)(e.em,{children:"If you have multiple operating systems installed, we will choose the largest option."})]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Manual Partitioning"}),(0,n.jsx)(e.br,{}),"\n","You can manually configure your system. This is only recommend for advanced users which may desire to have a dedicated ",(0,n.jsx)(e.code,{children:"/home"})," partition. Note that if you manually configure your system, you will need to restart the Installer for those changes to apply appropriately.\n",(0,n.jsx)(e.strong,{children:"Note:"})," Legacy (BIOS) must use MBR partition table while Unified EFI (UEFI) must use GPT partition table."]}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"Alongside these options, we also provide the ability to use full-disk encryption. For the obvious reason of it being full-disk, this assumes you are installing Solus onto the entire drive."}),"\n",(0,n.jsx)(e.h2,{id:"uefi",children:"UEFI"}),"\n",(0,n.jsx)(e.p,{children:"If you are using a system with UEFI, you may need to create a EFI System Partition, also referred to as an ESP. This is not necessary if you are enabling Solus to install onto the entire disk."}),"\n",(0,n.jsxs)(e.p,{children:["To create an EFI System Partition, open up GParted and create a FAT32 partition that is 1GB in size. Next, right-click on the partition and click Manage Flags. On the Manage Flags section, enable the ",(0,n.jsx)(e.code,{children:"boot"})," and ",(0,n.jsx)(e.code,{children:"esp"})," flags."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Notes:"})}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:'Your system must be booted using Unified EFI (UEFI) mode, as opposed to a "legacy (BIOS) mode".'}),"\n",(0,n.jsx)(e.li,{children:"Your disk is required to be GPT formatted."}),"\n",(0,n.jsx)(e.li,{children:"If you cannot see your SSD drive, set the SATA configuration to AHCI."}),"\n"]})]})}function d(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(u,{...t})}):u(t)}},11151:(t,e,i)=>{i.d(e,{Z:()=>a,a:()=>r});var n=i(67294);const s={},o=n.createContext(s);function r(t){const e=n.useContext(o);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),n.createElement(o.Provider,{value:e},t.children)}}}]);