"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[1648],{4183:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var r=n(85893),o=n(11151);const l={title:"Boot Management",summary:"Guide to customizing the Solus boot process"},s="Boot Management",d={id:"user/quick-start/boot-management",title:"Boot Management",description:"clr-boot-manager",source:"@site/docs/user/quick-start/boot-management.md",sourceDirName:"user/quick-start",slug:"/user/quick-start/boot-management",permalink:"/docs/user/quick-start/boot-management",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/quick-start/boot-management.md",tags:[],version:"current",lastUpdatedAt:172973503e4,frontMatter:{title:"Boot Management",summary:"Guide to customizing the Solus boot process"},sidebar:"userSidebar",previous:{title:"Quick Start",permalink:"/docs/category/quick-start"},next:{title:"Default Applications",permalink:"/docs/user/quick-start/default-applications"}},i={},a=[{value:"clr-boot-manager",id:"clr-boot-manager",level:2},{value:"Open the boot menu",id:"open-the-boot-menu",level:3},{value:"Displaying the boot menu by default every boot",id:"displaying-the-boot-menu-by-default-every-boot",level:3},{value:"Adding kernel parameters",id:"adding-kernel-parameters",level:3},{value:"Kernels",id:"kernels",level:2},{value:"Installing a different kernel branch",id:"installing-a-different-kernel-branch",level:3},{value:"Change the default kernel branch to boot",id:"change-the-default-kernel-branch-to-boot",level:3}];function c(e){const t={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"boot-management",children:"Boot Management"})}),"\n",(0,r.jsx)(t.h2,{id:"clr-boot-manager",children:"clr-boot-manager"}),"\n",(0,r.jsxs)(t.p,{children:["Solus leverages ",(0,r.jsx)(t.code,{children:"clr-boot-manager"})," from the Clear Linux* project to manage its boot process.\nOn legacy BIOS systems, ",(0,r.jsx)(t.code,{children:"clr-boot-manager"})," will configure ",(0,r.jsx)(t.code,{children:"GRUB2"})," to properly boot your system.",(0,r.jsx)(t.br,{}),"\n","On modern UEFI systems, ",(0,r.jsx)(t.code,{children:"clr-boot-manager"})," will configure ",(0,r.jsx)(t.code,{children:"systemd-boot"})," instead.",(0,r.jsx)(t.br,{}),"\n","This means that any time we want to modify the boot process, ",(0,r.jsx)(t.code,{children:"clr-boot-manager"})," will be involved.",(0,r.jsx)(t.br,{}),"\n","Trying to modify the configurations manually may work temporarily, but will be overwritten eventually."]}),"\n",(0,r.jsx)(t.h3,{id:"open-the-boot-menu",children:"Open the boot menu"}),"\n",(0,r.jsx)(t.p,{children:"By default, EFI installs will not show the boot menu and boot directly into Solus. By hitting space bar (repeatedly) during boot, the boot menu will appear (it may take a couple of goes to get the timing right)."}),"\n",(0,r.jsx)(t.h3,{id:"displaying-the-boot-menu-by-default-every-boot",children:"Displaying the boot menu by default every boot"}),"\n",(0,r.jsx)(t.p,{children:"The following command will set the timeout of the boot loader to five seconds so that it appears by default:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"sudo clr-boot-manager set-timeout 5 && sudo clr-boot-manager update\n"})}),"\n",(0,r.jsx)(t.h3,{id:"adding-kernel-parameters",children:"Adding kernel parameters"}),"\n",(0,r.jsxs)(t.p,{children:["Kernel parameters can be appended to boot via creating a file for ",(0,r.jsx)(t.code,{children:"clr-boot-manager"})," to use when updating kernels. For example, to add ",(0,r.jsx)(t.code,{children:"nomodeset"})," to boot options, you would create a file in ",(0,r.jsx)(t.code,{children:"/etc/kernel/cmdline.d"})," (as sudo):"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"sudo mkdir -p /etc/kernel/cmdline.d\necho 'nomodeset' | sudo tee /etc/kernel/cmdline.d/40_nomodeset.conf\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The settings should be on one line with a space between them. You will need to run ",(0,r.jsx)(t.code,{children:"sudo clr-boot-manager update"})," for the options to be appended to boot."]}),"\n",(0,r.jsx)(t.h2,{id:"kernels",children:"Kernels"}),"\n",(0,r.jsx)(t.h3,{id:"installing-a-different-kernel-branch",children:"Installing a different kernel branch"}),"\n",(0,r.jsxs)(t.p,{children:["By default, Solus utilizes our linux-current kernel. The separate kernel branches can be added by installing the ",(0,r.jsx)(t.code,{children:"linux-lts"})," or ",(0,r.jsx)(t.code,{children:"linux-current"})," packages. Note that each kernel has separate module packages, so if you use these kernel modules, you'll need to install the one related to the kernel you are adding."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"linux-lts"}),(0,r.jsx)(t.th,{children:"linux-current"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"bbswitch"}),(0,r.jsx)(t.td,{children:"bbswitch-current"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"broadcom-sta"}),(0,r.jsx)(t.td,{children:"broadcom-sta-current"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"linux-lts-headers"}),(0,r.jsx)(t.td,{children:"linux-current-headers"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"nvidia-470-glx-driver"}),(0,r.jsx)(t.td,{children:"nvidia-470-glx-driver-current"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"nvidia-beta-driver"}),(0,r.jsx)(t.td,{children:"nvidia-beta-driver-current"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"nvidia-developer-driver"}),(0,r.jsx)(t.td,{children:"nvidia-developer-driver-current"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"nvidia-glx-driver"}),(0,r.jsx)(t.td,{children:"nvidia-glx-driver-current"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"openrazer"}),(0,r.jsx)(t.td,{children:"openrazer-current"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"rtl8852bu"}),(0,r.jsx)(t.td,{children:"rtl8852bu-current"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"v4l2loopback"}),(0,r.jsx)(t.td,{children:"v4l2loopback-current"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"vhba-module"}),(0,r.jsx)(t.td,{children:"vhba-module-current"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"virtualbox"}),(0,r.jsx)(t.td,{children:"virtualbox-current"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"xone"}),(0,r.jsx)(t.td,{children:"xone-current"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"change-the-default-kernel-branch-to-boot",children:"Change the default kernel branch to boot"}),"\n",(0,r.jsxs)(t.p,{children:["After successfully booting into a kernel from the ",(0,r.jsx)(t.code,{children:"current"})," or ",(0,r.jsx)(t.code,{children:"lts"})," branches running ",(0,r.jsx)(t.code,{children:"sudo clr-boot-manager update"})," will make the booted kernel branch the default boot option going forward."]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>s});var r=n(67294);const o={},l=r.createContext(o);function s(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);