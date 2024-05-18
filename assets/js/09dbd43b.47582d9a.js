"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[9397],{54152:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=t(85893),n=t(11151);const i={title:"Boot Rescue",summary:"Troubleshooting the boot process for Solus"},r="Boot Rescue",l={id:"user/troubleshooting/boot-rescue",title:"Boot Rescue",description:"In this document, we will walk through restoring the ability to boot Solus.",source:"@site/docs/user/troubleshooting/boot-rescue.md",sourceDirName:"user/troubleshooting",slug:"/user/troubleshooting/boot-rescue",permalink:"/docs/user/troubleshooting/boot-rescue",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/troubleshooting/boot-rescue.md",tags:[],version:"current",lastUpdatedAt:171607565e4,frontMatter:{title:"Boot Rescue",summary:"Troubleshooting the boot process for Solus"},sidebar:"userSidebar",previous:{title:"Troubleshooting",permalink:"/docs/user/troubleshooting/"},next:{title:"Installation Issues",permalink:"/docs/user/troubleshooting/installation"}},a={},d=[{value:"Multi-booting",id:"multi-booting",level:2},{value:"An entry is present in /etc/fstab that is not present at boot time",id:"an-entry-is-present-in-etcfstab-that-is-not-present-at-boot-time",level:2},{value:"Incorrectly applied updates / disk changes",id:"incorrectly-applied-updates--disk-changes",level:2},{value:"Mounting your system",id:"mounting-your-system",level:3},{value:"Encrypted systems / LVM systems",id:"encrypted-systems--lvm-systems",level:4},{value:"UEFI",id:"uefi",level:4},{value:"Other partitions",id:"other-partitions",level:4},{value:"Chrooting to your Solus system",id:"chrooting-to-your-solus-system",level:3},{value:"Networking",id:"networking",level:3},{value:"Repairing packages",id:"repairing-packages",level:3},{value:"Correcting disks",id:"correcting-disks",level:3},{value:"Re-run system-wide configuration triggers",id:"re-run-system-wide-configuration-triggers",level:3},{value:"Regenerate UEFI boot entries",id:"regenerate-uefi-boot-entries",level:3},{value:"Unmounting your system",id:"unmounting-your-system",level:3}];function c(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"boot-rescue",children:"Boot Rescue"}),"\n",(0,o.jsx)(s.p,{children:"In this document, we will walk through restoring the ability to boot Solus."}),"\n",(0,o.jsx)(s.p,{children:"The inability to boot Solus can be attributed to various issues, such as:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:'Multi-booting with an other operating system that "owns" GRUB and fails to show Solus after an upgrade of Solus is performed.'}),"\n",(0,o.jsx)(s.li,{children:'Upgrades, such as to the kernel, that may not have applied correctly. In which case this could affect "legacy boot" (non-UEFI) or UEFI systems.'}),"\n",(0,o.jsx)(s.li,{children:"If a disk is added, removed or had its UUID / mount point change."}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:'NOTE: Most examples below use sdX as the drive name. If your system has nvme drives, substitute the appropriate name, for example "nvme0n1".'}),"\n",(0,o.jsx)(s.h2,{id:"multi-booting",children:"Multi-booting"}),"\n",(0,o.jsx)(s.p,{children:'Multi-booting is when you have multiple operating systems on the same device. Also referred to as "dual-booting" when only having two operating systems on the same device.'}),"\n",(0,o.jsxs)(s.p,{children:['The inability to access Solus in a multi-boot scenario typically applies to "legacy boot" (non-UEFI), where the other operating system owns GRUB, which is used booting itself and Solus. This can be resolved by accessing the other operating system and running ',(0,o.jsx)(s.code,{children:"sudo update-grub"}),"."]}),"\n",(0,o.jsx)(s.h2,{id:"an-entry-is-present-in-etcfstab-that-is-not-present-at-boot-time",children:"An entry is present in /etc/fstab that is not present at boot time"}),"\n",(0,o.jsx)(s.p,{children:'If you get to an emergency prompt when the system tries to boot, check /etc/fstab. Look for any entries that might refer to disks not present at boot, such as a USB drive or nfs mount. Try adding "noauto" and rebooting. A USB drive entry might look like:'}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"UUID=XXXXXX  /mnt/mydisk  exfat noauto,uid=1000,gid=1000,umask=0022  0  0\n"})}),"\n",(0,o.jsx)(s.h2,{id:"incorrectly-applied-updates--disk-changes",children:"Incorrectly applied updates / disk changes"}),"\n",(0,o.jsx)(s.p,{children:"In the case that updates have not been applied correctly by the system, the updates were interrupted, or the disks have changed, it may be possible to boot rescue the Solus system. To do so, you will need:"}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsx)(s.li,{children:"A Live ISO of Solus booted on your system"}),"\n",(0,o.jsx)(s.li,{children:"A terminal in that Live ISO opened"}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"mounting-your-system",children:"Mounting your system"}),"\n",(0,o.jsxs)(s.p,{children:["Whether you're using GRUB or UEFI, you will need to mount your Solus root (",(0,o.jsx)(s.code,{children:"/"}),") partition as the first step of performing a boot rescue. This is typically your primary partition, formatted as the filesystem type ",(0,o.jsx)(s.code,{children:"ext4"}),"."]}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["First we need to be the root user. Type: ",(0,o.jsx)(s.code,{children:"sudo su"})]}),"\n",(0,o.jsxs)(s.li,{children:["Next we make a directory where we will mount our local Solus system: ",(0,o.jsx)(s.code,{children:"mkdir /target"})]}),"\n",(0,o.jsxs)(s.li,{children:["Now, using ",(0,o.jsx)(s.code,{children:"lsblk"}),", determine the partition of the Solus system. We recommend checking the size of the partition listed and if it matches the size of your Solus install, use that. It will likely be something along the lines of ",(0,o.jsx)(s.code,{children:"sda#"})," or ",(0,o.jsx)(s.code,{children:"sdb#"}),". For NVME drives, the name will look like ",(0,o.jsx)(s.code,{children:"nvme0n1px"}),'\nNote: If you see "lvm" as the type, the system has LVM partitions. See the next section for how to mount them.']}),"\n",(0,o.jsxs)(s.li,{children:['If your root partition is of type sdX / nvme0n1x, replace the "sdX#" in the following command with the partition and mount to the target directory we created: ',(0,o.jsx)(s.code,{children:"mount /dev/sdX# /target"})]}),"\n"]}),"\n",(0,o.jsx)(s.h4,{id:"encrypted-systems--lvm-systems",children:"Encrypted systems / LVM systems"}),"\n",(0,o.jsx)(s.p,{children:"If you use LVM volumes on your system, the process for mounting the system is a little different.\nIf you use LUKS-based encryption, the process will involve decrypting your LUKS partition before mounting it to the correct location. To do this, note the sda / sdb device from the prior steps and follow the steps below:"}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["If the disk is encrypted, decrypt it by running ",(0,o.jsx)(s.code,{children:"cryptsetup luksOpen /dev/sdX# decrypted"}),", replacing ",(0,o.jsx)(s.code,{children:"X#"})," with the partition you identified, and enter your password when prompted."]}),"\n",(0,o.jsxs)(s.li,{children:["Next check the output of ",(0,o.jsx)(s.code,{children:"lsblk"}),". This will show you any LVM volumes. You should now see ",(0,o.jsx)(s.code,{children:"SolusSystem-Swap"})," and ",(0,o.jsx)(s.code,{children:"SolusSystem-Root"}),".\nFor non-encrypted volumes, you may see something like this. In this example, ",(0,o.jsx)(s.code,{children:"SolusSystem-Swap"})," and ",(0,o.jsx)(s.code,{children:"SolusSystem-Root"}),' are under "sda2":']}),"\n"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"NAME                   MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINT\nloop0                    7:0    0   1.3G  1 loop  /run/initramfs/squashfs\nloop1                    7:1    0   6.2G  1 loop  /run/rootfsbase\nsr0                   11:0    1  2.7G  0 rom  /run/initramfs/live\nzram0                251:0    0  7.8G  0 disk [SWAP]\nsda                  252:0    0   96G  0 disk\n\u251c\u2500sda1               252:1    0  287M  0 part\n\u2514\u2500sda2               252:2    0 69.7G  0 part\n  \u251c\u2500SolusSystem-Swap 253:0    0  3.7G  0 lvm\n  \u2514\u2500SolusSystem-Root 253:1    0   46G  0 lvm\n...\n"})}),"\n",(0,o.jsxs)(s.p,{children:["For decrypted volumes, the output should look similar to this, with ",(0,o.jsx)(s.code,{children:"SolusSystem-Swap"})," and ",(0,o.jsx)(s.code,{children:"SolusSystem-Root"}),' being under "decrypted":']}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"NAME                   MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINT\nloop0                    7:0    0   1.3G  1 loop  /run/initramfs/squashfs\nloop1                    7:1    0   6.2G  1 loop  /run/rootfsbase\nloop2                    7:2    0   6.2G  1 loop\n\u2514\u2500live-base            253:0    0   6.2G  1 dm\nsda                      8:0    0 238.5G  0 disk\n\u251c\u2500sda1                   8:1    0 488.3M  0 part\n\u2514\u2500sda2                   8:2    0   238G  0 part\n  \u2514\u2500decrypted          253:1    0   238G  0 crypt\n    \u251c\u2500SolusSystem-Swap 253:2    0   3.7G  0 lvm\n    \u2514\u2500SolusSystem-Root 253:3    0 234.3G  0 lvm\nsdb                      8:16   1   7.3G  0 disk\n\u251c\u2500sdb1                   8:17   1   1.4G  0 part  /run/initramfs/live\n\u2514\u2500sdb2                   8:18   1    40M  0 part\n"})}),"\n",(0,o.jsxs)(s.ol,{start:"3",children:["\n",(0,o.jsxs)(s.li,{children:["Mount ",(0,o.jsx)(s.code,{children:"SolusSystem-Root"})," by running ",(0,o.jsx)(s.code,{children:"mount /dev/mapper/SolusSystem-Root /target"})]}),"\n"]}),"\n",(0,o.jsx)(s.h4,{id:"uefi",children:"UEFI"}),"\n",(0,o.jsxs)(s.p,{children:["If your system uses UEFI as opposed to GRUB, you will also need to mount your EFI System Partition, otherwise referred to as ESP. If you followed our ",(0,o.jsx)(s.a,{href:"/docs/user/quick-start/installation/disks#uefi",children:"UEFI guide"})," during installation of Solus, then in all likelihood your ESP will be about 1GB in size. For an older installation, it may be around 512MB. If you're unsure of the partition, run the following, replacing X with the same letter during your mounting of your root file system, minus the number:"]}),"\n",(0,o.jsx)(s.p,{children:"For HDD / SDD drives:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"fdisk -o Device,Size,Type -l /dev/sdX\n"})}),"\n",(0,o.jsx)(s.p,{children:"For nvme drives:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"fdisk -o Device,Size,Type -l /dev/nvme0nX\n"})}),"\n",(0,o.jsx)(s.p,{children:"Your output may look something similar to:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"Device       Size Type\n/dev/sda1    512M EFI System\n/dev/sda2  111.3G Linux filesystem\n"})}),"\n",(0,o.jsxs)(s.p,{children:["Notice we have ",(0,o.jsx)(s.code,{children:"/dev/sda1"})," as the Device with the ",(0,o.jsx)(s.code,{children:"EFI System"})," type and roughly 500mb in size. This is the partition we will be mounting."]}),"\n",(0,o.jsxs)(s.p,{children:["With our ESP device known, let's go ahead and mount it, replacing ",(0,o.jsx)(s.code,{children:"sdX#"})," in the case below with our partition."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"mount /dev/sdX# /target/boot\n"})}),"\n",(0,o.jsx)(s.h4,{id:"other-partitions",children:"Other partitions"}),"\n",(0,o.jsx)(s.p,{children:"If your system has other specific partitions, such as a separate /home partition, they will also need to be mounted."}),"\n",(0,o.jsx)(s.h3,{id:"chrooting-to-your-solus-system",children:"Chrooting to your Solus system"}),"\n",(0,o.jsx)(s.p,{children:"To access your system and perform boot rescue, you will need to mount specific directories from the host system (in this case, our Live ISO), to our Solus system, and then chroot (change root) to the Solus system."}),"\n",(0,o.jsx)(s.p,{children:"First run the following commands:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"mount --types proc /proc /target/proc\nmount --rbind /dev /target/dev\nmount --rbind /sys /target/sys\nmount --make-rslave /target/dev\nmount --make-rslave /target/sys\n"})}),"\n",(0,o.jsxs)(s.p,{children:["Assuming all goes well, you should now be able to chroot into your Solus system by doing ",(0,o.jsx)(s.code,{children:"chroot /target"}),"."]}),"\n",(0,o.jsx)(s.h3,{id:"networking",children:"Networking"}),"\n",(0,o.jsxs)(s.p,{children:["To validate a working network connection (assuming a network connection is available in your live image), you can run ",(0,o.jsx)(s.code,{children:"ping google.com"})," in the chrooted environment. If you get responses from ",(0,o.jsx)(s.code,{children:"google.com"}),", you have a successful connection to the Internet. If you do not, try the following:"]}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["Exit the chroot by typing ",(0,o.jsx)(s.code,{children:"exit"})]}),"\n",(0,o.jsx)(s.li,{children:"Run"}),"\n"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"cp /run/systemd/resolve/stub-resolv.conf /target/run/systemd/resolve/\ncd /target/etc\nln -s ../run/systemd/resolve/stub-resolv.conf /target/etc/resolv.conf\n"})}),"\n",(0,o.jsxs)(s.ol,{start:"3",children:["\n",(0,o.jsxs)(s.li,{children:["Chroot back into ",(0,o.jsx)(s.code,{children:"/target"})," by running ",(0,o.jsx)(s.code,{children:"chroot /target"})," again."]}),"\n",(0,o.jsx)(s.li,{children:"Retry networking."}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"repairing-packages",children:"Repairing packages"}),"\n",(0,o.jsx)(s.p,{children:"In the event you had an incomplete upgrade, try the following commands:"}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.code,{children:"sudo eopkg rebuild-db"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.code,{children:"sudo eopkg up"})}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"sudo eopkg check | grep Broken | awk '{print $4}' | xargs sudo eopkg it --reinstall"}),'\nIf you see output that starts with "Usage", this means the system has no broken packages.']}),"\n",(0,o.jsxs)(s.li,{children:['Try reverting the latest package transaction (this should only be done if the first two steps, followed by the "Re-run System-Wide Configuration Triggers", failed to produce a successful bootup). See ',(0,o.jsx)(s.a,{href:"/docs/user/package-management/history-and-rollback",children:"our documentation on history and rollback"})," for more information, followed by re-applying your updates by running ",(0,o.jsx)(s.code,{children:"sudo eopkg up"}),"."]}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"correcting-disks",children:"Correcting disks"}),"\n",(0,o.jsx)(s.p,{children:"In the event that disk changes had caused the system to fail to boot, try the following in the chroot environment:"}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["Get the UUIDs of your partitions the system expects from ",(0,o.jsx)(s.code,{children:"/etc/fstab"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:["Compare this to the output of ",(0,o.jsx)(s.code,{children:"ls -lah /dev/disk/by-uuid"})]}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"re-run-system-wide-configuration-triggers",children:"Re-run system-wide configuration triggers"}),"\n",(0,o.jsx)(s.p,{children:"In the chroot environment, run the following command which will perform various configuration triggers to update your icon cache, update GRUB and EFI configuration, re-compile settings, and more."}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"sudo usysconf run -f\n"})}),"\n",(0,o.jsx)(s.h3,{id:"regenerate-uefi-boot-entries",children:"Regenerate UEFI boot entries"}),"\n",(0,o.jsx)(s.p,{children:"Run the following command, which will update the boot entries for your EFI menu:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"sudo clr-boot-manager update\n"})}),"\n",(0,o.jsxs)(s.p,{children:["After this, you should exit your chroot with ",(0,o.jsx)(s.code,{children:"exit"})," then reboot your system. In the event you are still unable to access Solus, please ",(0,o.jsx)(s.a,{href:"/docs/user/contributing/getting-involved",children:"contact us"}),"."]}),"\n",(0,o.jsx)(s.h3,{id:"unmounting-your-system",children:"Unmounting your system"}),"\n",(0,o.jsx)(s.p,{children:"In case further partition modifications are required, there's a series of steps that must be followed."}),"\n",(0,o.jsxs)(s.p,{children:["If you are still chrooted you have to exit the chroot environment by pressing ",(0,o.jsx)(s.code,{children:"Ctrl"})," + ",(0,o.jsx)(s.code,{children:"D"}),"."]}),"\n",(0,o.jsx)(s.p,{children:"Then proceed with unmounting the filesystem."}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"umount -R /target\n"})}),"\n",(0,o.jsx)(s.p,{children:"In case of having a LUKS-based encryption you'll have to deactivate your logical volumes plus volume groups and then close your LUKS partition."}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"lvchange -a n /dev/SolusSystem/Swap # `-a n` means `active: no`\nlvchange -a n /dev/SolusSystem/Root\nvgchange -a n SolusSystem\ncryptsetup luksClose decrypted\n"})})]})}function h(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>l,a:()=>r});var o=t(67294);const n={},i=o.createContext(n);function r(e){const s=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(i.Provider,{value:s},e.children)}}}]);