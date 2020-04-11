+++
title = "Printer Compatibility"
lastmod = "2019-03-08T00:47:57+01:00"
+++
# Printer Compatibility

The following printers have been tested and/or suggested to function correctly by our users.

This list should not suggest that *only* such devices listed below are compatible with Solus, as there may be devices not listed below that are in fact compatible.

In order to install your printer you will have to open `Printer Configuration` from Gnome Settings and click on `Add a Printer`.  
The following dialogs will guide you to choose the appropriate driver for your device

## Models

### Brother

- Brother DCP-135C
- Brother DCP-1510
- Brother DCP-1512
- Brother DCP-1610W
- Brother DCP-7010
- Brother DCP-7060D
- Brother DCP-L2520DW
- Brother HL-1210W
- Brother HL-1212W
- Brother HL-2220
- Brother HL-L2315DW
- Brother HL-L2320D
- Brother HL-L2360D
- Brother HL-L2375DW
- Brother MFC-1910W
- Brother MFC-440CN
- Brother MFC-9130CW
- Brother MFC-9330CDW
- Brother MFC-J220
- Brother MFC-J480DW
- Brother MFC-L2700DW
- Brother MFC-L2703DW
- Brother MFC-L2740DW


**For newer Brother scanners you have to install the `brscan4` package.**

Should your printer not be on this list you can request your Printer here for inclusion [here](https://dev.getsol.us/T83)

### Canon

Some Canon printers requires you to install the `canon-ufriilt-common` package.

### Dell
#### Dell E310dw
- Get the official Dell driver package: https://downloads.dell.com/FOLDER03004762M/1/Printer_E310dw_Driver_Dell_A00_LINUX.zip
- Follow the steps of https://github.com/jtrefke/dell-e310dw-cups-printer-driver/blob/master/PKGBUILD

NOTE: This requires 32bit functionality. As I'm not exactly sure what is needed (I assume only glibc), I installed Steam to get 32bit support.

### Dymo

DYMO label makers & printers need the `dymo-cups-drivers` package to be installed.

### Epson

Some Epson printers will only work if you install the `epson-inkjet-printer-escpr` package.

### HP

If you own an HP printer you should install the `hplip` package in order to get your device working.
