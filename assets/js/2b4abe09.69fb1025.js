"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[2413],{55717:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>h});var s=t(85893),n=t(11151);const i={title:"Troubleshooting",summary:"Basic troubleshooting for some of the most common Solus problems."},r="Troubleshooting Common Issues",a={id:"user/troubleshooting/index",title:"Troubleshooting",description:"This guide provides some basic troubleshooting instructions for when you have an issue in Solus. Before reporting bugs, it is important to check that your Solus installation is not missing files, or suffering from a corrupted disk. You should also ensure your system is fully up to date as the bug may have already been fixed.",source:"@site/docs/user/troubleshooting/index.md",sourceDirName:"user/troubleshooting",slug:"/user/troubleshooting/",permalink:"/docs/user/troubleshooting/",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/troubleshooting/index.md",tags:[],version:"current",lastUpdatedAt:171586666e4,frontMatter:{title:"Troubleshooting",summary:"Basic troubleshooting for some of the most common Solus problems."},sidebar:"userSidebar",previous:{title:"Open Broadcaster Software (OBS)",permalink:"/docs/user/software/web/obs"},next:{title:"Boot Rescue",permalink:"/docs/user/troubleshooting/boot-rescue"}},l={},h=[{value:"Issues with Software Center or eopkg",id:"issues-with-software-center-or-eopkg",level:2},{value:"Can&#39;t install updates",id:"cant-install-updates",level:3},{value:"eopkg check shows broken packages",id:"eopkg-check-shows-broken-packages",level:3},{value:"Updated system and having issues",id:"updated-system-and-having-issues",level:2},{value:"Broken UI with Chromium applications",id:"broken-ui-with-chromium-applications",level:3},{value:"Boot into previous kernel",id:"boot-into-previous-kernel",level:3},{value:"Reverting updates",id:"reverting-updates",level:3},{value:"Boot failure",id:"boot-failure",level:2},{value:"Display manager won&#39;t start",id:"display-manager-wont-start",level:3},{value:"No Solus boot loader",id:"no-solus-boot-loader",level:3},{value:"Long boot time",id:"long-boot-time",level:2},{value:"Timeout on partition mount (90s)",id:"timeout-on-partition-mount-90s",level:3}];function c(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h1,{id:"troubleshooting-common-issues",children:"Troubleshooting Common Issues"}),"\n",(0,s.jsx)(o.p,{children:"This guide provides some basic troubleshooting instructions for when you have an issue in Solus. Before reporting bugs, it is important to check that your Solus installation is not missing files, or suffering from a corrupted disk. You should also ensure your system is fully up to date as the bug may have already been fixed."}),"\n",(0,s.jsxs)(o.p,{children:["First, perform a full system update on command line with ",(0,s.jsx)(o.code,{children:"sudo eopkg up"})," (or using the Software Center)."]}),"\n",(0,s.jsx)(o.p,{children:"Next, validate that packages are installed correctly and aren't missing files. Run this once, it will take some time. If there are no broken packages on your system, there will be no output. Otherwise, you will see packages be reinstalled."}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"sudo eopkg check | grep Broken | awk '{print $4}' | xargs -r sudo eopkg it --reinstall\n"})}),"\n",(0,s.jsx)(o.p,{children:"Reboot the system and see if the issue is resolved."}),"\n",(0,s.jsx)(o.h2,{id:"issues-with-software-center-or-eopkg",children:"Issues with Software Center or eopkg"}),"\n",(0,s.jsx)(o.h3,{id:"cant-install-updates",children:"Can't install updates"}),"\n",(0,s.jsx)(o.p,{children:"If eopkg is interrupted, the database may become corrupted. When updating you will see a message similar to:"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.code,{children:"30973, 'BDB0087 DB_RUNRECOVERY: Fatal error, run database recovery - BDB0061 PANIC: Invalid argument'"})}),"\n",(0,s.jsxs)(o.p,{children:["To run database recovery, run ",(0,s.jsx)(o.code,{children:"sudo eopkg rdb"})," in the terminal and then updates should function correctly."]}),"\n",(0,s.jsx)(o.h3,{id:"eopkg-check-shows-broken-packages",children:"eopkg check shows broken packages"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.code,{children:"eopkg check"})," checks the sha256sums of files on disk versus what was originally installed by the original .eopkg file. In some cases (for example .pyc files), these files will be modified in the normal operation of Solus. If after reinstalling a package it remains broken, then it's likely nothing to worry about (there are no exceptions made in ",(0,s.jsx)(o.code,{children:"eopkg check"})," for files that are expected to change from use). When reinstalling broken packages, (per above) it only needs to be run once."]}),"\n",(0,s.jsx)(o.h2,{id:"updated-system-and-having-issues",children:"Updated system and having issues"}),"\n",(0,s.jsx)(o.h3,{id:"broken-ui-with-chromium-applications",children:"Broken UI with Chromium applications"}),"\n",(0,s.jsxs)(o.p,{children:["There is an ",(0,s.jsx)(o.a,{href:"https://issues.chromium.org/issues/40267041",children:"upstream bug"})," with Chromium that causes it to try to use an invalid shader cache instead of rebuilding it, crashing the GPU process. The issue is now fixed in Chromium, but it may take some time for applications to update their Chromium version."]}),"\n",(0,s.jsx)(o.p,{children:"To fix applications exhibiting this problem, run these commands to remove the shader cache:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"find ~/.cache -name GPUCache -exec rm -rv {} +\nfind ~/.config -name GPUCache -exec rm -rv {} +\n"})}),"\n",(0,s.jsx)(o.p,{children:"And restart the application."}),"\n",(0,s.jsx)(o.h3,{id:"boot-into-previous-kernel",children:"Boot into previous kernel"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.code,{children:"clr-boot-manager"})," by default retains the latest installed kernel, plus the currently running kernel. This means that when you receive a kernel update, there are two kernels to boot into. Sometimes there are regressions that occur in the kernel, so you are able to boot into the previous kernel if the update has caused any hardware issues (for example failing to suspend when it worked previously). When booting via EFI, the boot menu can be shown by hitting space (repeatedly) during boot."]}),"\n",(0,s.jsx)(o.h3,{id:"reverting-updates",children:"Reverting updates"}),"\n",(0,s.jsxs)(o.p,{children:["If booting into the previous kernel doesn't solve the issue, there may be an issue with the package updates. It is possible to ",(0,s.jsx)(o.a,{href:"/docs/user/package-management/history-and-rollback",children:"revert the updates"})," (this would also confirm that the issue is in the selected updates)."]}),"\n",(0,s.jsx)(o.h2,{id:"boot-failure",children:"Boot failure"}),"\n",(0,s.jsxs)(o.p,{children:["If Solus partially boots, you can generally get to a TTY using ",(0,s.jsx)(o.code,{children:"Ctrl+Alt+F2"})," to login and be able to run commands just like using a terminal. This enables you to run some commands to identify or resolve the issue."]}),"\n",(0,s.jsx)(o.h3,{id:"display-manager-wont-start",children:"Display manager won't start"}),"\n",(0,s.jsx)(o.p,{children:"A common cause of not being able to boot is due to installing the nvidia drivers, but not booting into the latest kernel (the only kernel which has the drivers installed). Also ensure you have the correct driver version installed for your kernel. You can check if you have booted into the latest kernel by comparing the installed package with the booted kernel (instructions for both kernels)"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"eopkg info linux-lts | head -n2; uname -a\n"})}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"eopkg info linux-current | head -n2; uname -a\n"})}),"\n",(0,s.jsx)(o.p,{children:"If the kernel version and release don't match from lines 2 and 3 of the output, then you aren't booting into the latest kernel and this is the likely cause of X not loading (particularly if you just installed the drivers). A couple of common reasons are:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:["On a grub machine, a common cause for not booting the latest kernel is due to Solus not being the boot loader on the MBR. Make sure you are booting via the Solus boot loader (if possible), or update grub on the distro that own the boot loader, see ",(0,s.jsx)(o.a,{href:"/docs/user/troubleshooting/installation#legacybios-installation",children:"Legacy/BIOS installation"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:["Another possibility is that the ",(0,s.jsx)(o.code,{children:"ESP"})," has run out of space so the kernel cannot be copied over to it. You can debug why this isn't happening via ",(0,s.jsx)(o.code,{children:"sudo CBM_DEBUG=1 clr-boot-manager update"}),". This will output all information on the process, where it may be failing, or that it is working correctly."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["If these two steps fail, you can't revert the installation of the drivers via ",(0,s.jsx)(o.a,{href:"/docs/user/package-management/history-and-rollback",children:"History and Rollback"})]}),"\n",(0,s.jsx)(o.h3,{id:"no-solus-boot-loader",children:"No Solus boot loader"}),"\n",(0,s.jsxs)(o.p,{children:["If the Solus boot loader is not functioning (this has been known to be broken by the odd update of a certain OS), the boot loader can be recreated via ",(0,s.jsx)(o.a,{href:"/docs/user/troubleshooting/boot-rescue",children:"Boot Rescue"})]}),"\n",(0,s.jsx)(o.h2,{id:"long-boot-time",children:"Long boot time"}),"\n",(0,s.jsx)(o.p,{children:"There are a number of factors that can contribute to a long boot time. The boot up messages can be viewed to look for any timeouts by looking at the timestamped journal."}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"sudo journalctl -b\n"})}),"\n",(0,s.jsxs)(o.p,{children:["Notable commands to check the boot time are: ",(0,s.jsx)(o.code,{children:"systemd-analyze"})," (note that the firmware time is prior to Solus boot, so outside of our control) and ",(0,s.jsx)(o.code,{children:"systemd-analyze critical-chain"}),"."]}),"\n",(0,s.jsx)(o.h3,{id:"timeout-on-partition-mount-90s",children:"Timeout on partition mount (90s)"}),"\n",(0,s.jsxs)(o.p,{children:["If information about a device changes (UUID or mount path ",(0,s.jsx)(o.code,{children:"/dev/sda"}),"), this can cause systemd to time out for 90 seconds creating a long boot process. Most frequently this happens with the swap file which can be shared across distros. Most of the devices mounted on boot will appear in ",(0,s.jsx)(o.code,{children:"/etc/fstab"})," or be a parameter in a file where configuring resume ",(0,s.jsx)(o.code,{children:"cat /etc/kernel/cmdline.d/*"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.code,{children:"cat /proc/cmdline"})," will show what parameters the kernel has booted with."]}),"\n",(0,s.jsxs)(o.p,{children:["If the devices don't match up with what's listed in ",(0,s.jsx)(o.code,{children:"ls /dev/disk/*/*"})," then it will cause a 90s timeout while it waits to see if it can be found. To fix this, you will need to remove the reference to the UUID or device path that no longer exists, or correct it to the new UUID label."]})]})}function d(e={}){const{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,o,t)=>{t.d(o,{Z:()=>a,a:()=>r});var s=t(67294);const n={},i=s.createContext(n);function r(e){const o=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(i.Provider,{value:o},e.children)}}}]);