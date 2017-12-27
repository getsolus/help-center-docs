+++
title = "Installation Issues"
lastmod = "2017-09-22T20:13:14+03:00"
+++
# Installation Issues

This article covers various issues that you may come across during installation of Solus.

## Can't install in EFI mode

The live ISO will attempt to install Solus by the same method it was booted. If it is unable to install the boot loader to the ESP, then it is likely booted in legacy mode. Ensure that the ISO has been created via a [supported method](/articles/installation/preparing-to-install/en/) and that an EFI boot is selected from the boot options.

You can check whether the Solus ISO has booted in EFI mode by checking the for the existence of `ls /sys/firmware/efi` (if it's not found, then it's booted in legacy mode).

## I can't boot into Solus after installation!

There are some misunderstandings with how legacy and EFI boot works (usually implemented as UEFI). These sections cover the common misconceptions.

### Legacy/BIOS installation

Legacy installations on Solus use the Grub boot loader on an MBR disk. Only one boot loader can be used on an MBR disk, so if you haven't installed the Solus boot loader on the MBR, you will need to boot into the other OS and update grub prior to being able to boot Solus. This will also be required on each update of the kernel to ensure you're booting in the latest release.

### EFI

EFI allows for multiple boot loaders to be installed, which means you can boot the Solus boot loader directly. To ensure you are booting Solus you need to boot `Linux Boot Manager` from the EFI options. Common keys for bringing up a boot menu or the options during boot are hitting `Esc/F2/F9/F10/F11/F12` during boot (this differs per motherboard). If a boot loader for another OS is not listed in the menu, then it is not correctly registered (and therefore not installed correctly). You can make the Solus boot menu appear via [Displaying the Solus boot menu on boot](/articles/troubleshooting/boot-management/en/#displaying-the-solus-boot-menu-by-default-on-boot) which should be able to boot windows (as it's registered with UEFI properly) as well as Solus, but not other systems.

#### Badly Implemented UEFI

UEFI normally should allow user to change the boot configuration and let them prioritize their OS of choice but some manufacturers have badly implimented UEFI (HP Pavilion G6, for example) such UEFI are hard-coded to boot straight into Windows 10 ignoring the user configuration.

Please continue to the guide below only if you are sure that you have installed Solus and Windows 10 both in UEFI mode, you can easily check it by disabling the legacy boot in your boot manager (by pressing `esc/ f2/ f9/ f10/ f11/f12` during starting of boot)and booting into `linux` and `windows 10`. if you successfuly boot in both you are all set.

##### PREREQUISITES -

1. Disable Secureboot
2. Make Sure Both linux and windows 10 are in UEFI mode (method mentioned above)

##### PROCEDURE - 

TRY ANY ONE OF THE METHOD MENTIONED BELOW - 

###### INSTALLING rEFInd FOR FLASHDRIVE ON EXTERNAL USB (EASIEST, BUT SLOW)

CAUTION!
THIS WILL SCAN FOR EFI FILES ON EVERY BOOT SO THIS BOOTLOADER WILL LOAD SLOWER THAN OTHER METHODS MENTIONED BELOW BY AROUND 1-2 SECONDS.

STEP 1:
GET LATEST VERSION OF rEFInd FOR FLASHDRIVE FROM OFFICIAL WEBSITE [HERE](https://sourceforge.net/projects/refind/files/0.11.2/refind-flashdrive-0.11.2.zip/download)

STEP 2:
FORMAT YOUR FLASHDRIVE FOR GPT PARTITION TABLE USING GPARTED TOOL.

2.1
select right device from upper right corner (be extra careful, you will loose entire data from the selected device)
AND NOTE THE DEVICE (sdx) where x is your device.
2.2
(Device --> Create Partition Table..)
2.3
Select GPT from the list
2.4 
OK!

STEP 3:
EXTRACT THE REFIND FLASHDRIVE FOLDER 

STEP 4:
OPEN THE EXTRACTED REFIND - FLASHDRIVE FOLDER

4.1
(right click --> open terminal here)

4.2
enter following command as Administrator in terminal-
`sudo dd if=refind-flashdrive-0.11.2.img of=/dev/sdx` where x is your device as noted in gparted.

STEP 5:
ENTER THE FLASHDRIVE IN THE USB PORT OF YOUR MACHINE

STEP 6:
ENTER INTO BOOTMANAGER AND CHANGE UEFI BOOT ORDER BY PRIORITIZING YOUR USB FLASH DRIVE.

STEP 7:
REBOOT!

YOU WILL BE PRESENTED WITH A MENU, SELECT goofibootx64.efi (OR SIMILAR OPTION ON 32 BIT MACHINES). MAKE SURE THE FLASHDRIVE IS CONNECTED TO THE SYSTEM WHENEVER YOU BOOT.

NOTE: 
you can gain all the remaining space on the flashdrive by creating a new partition (preferably, fat32) on the unallocated space on your flashdrive.



