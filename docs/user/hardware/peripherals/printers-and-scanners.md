---
title: Printers and Scanners
summary: Guide to using printers and scanners on Solus
---

# Printers and Scanners

# Printers

## Drivers

Many printers will work out-of the box on Solus. If yours doesn't, you should try installing additional drivers.

| Brand | Driver Package(s)          |
| ----- | -------------------------- |
| Canon | canon-ufriilt-common       |
| Dymo  | dymo-cups-driver           |
| Epson | epson-inkjet-printer-escpr |
| HP    | hplip                      |

### Brother

Brother drivers are distributed by Brother for a single printer only. Because of this, you will need to install the package for your specific printer.

For example, `brother-mfc1910w` provides drivers for the MFC-1910w.

## Compatibility

The following printers have been tested and/or suggested to function correctly by our users.

This list should not suggest that _only_ such devices listed below are compatible with Solus, as there may be devices not listed below that are in fact compatible.

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

Should your printer not be on this list you can request your Printer here for inclusion [here](https://dev.getsol.us/T83)

# Scanners

## Brother

You can connect your Brother scanner via USB or LAN to be able to scan. To get newer Brother scanners to work you will have to install the package `brscan4`

### Network Scanner

If your scanner is networks, you need to tell `saned` the IP of your printer. It's advised to give your printer always the same IP inside your Network (ie. Static IP Address). Run the following command to accomplish this:

```bash
brsaneconfig4 -a name=SCANNER model=$MODEL ip=$IPOFYOURSCANNER
```
