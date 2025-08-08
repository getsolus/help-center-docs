---
title: Printers and Scanners
summary: Guide to using printers and scanners on Solus
---

## Printers

Many printers and scanners work out-of the box on Solus. If yours doesn't work, try installing any of the drivers available in the software repository.

The following table lists the printer drivers available in the Solus packages repository:

| Brand   | Driver packages              |
| ------- | ---------------------------- |
| Canon   | `canon-ufriilt-common`       |
| Dymo    | `dymo-cups-driver`           |
| Epson   | `epson-inkjet-printer-escpr` |
| HP      | `hplip`                      |

### Configure Brother printers

1. Install `brlaser`.

   _brlaser_ is an open-source driver for many Brother monochrome laser printers and multi-function devices. Compatible models are listed in the [official GitHub repository](https://github.com/Owl-Maintain/brlaser#supported-printers).

   To install `brlaser`, do any of the following:
   
   - Install the package from the software center.
   - Run the following command:

     ```bash
     sudo eopkg install brlaser
     ```

2. Verify that your printer works correctly.
3. If your printer still doesn't work, install the package for your specific printer.

   The software repository includes drivers for many Brother printers. For example, `brother-mfc1910w` provides drivers for the MFC-1910w.

4. If your printer not be on this list, and the generic `brlaser` driver does not work, request your printer for inclusion in the [Solus package repository](https://github.com/getsolus/packages/issues/212). 

# Scanners

## Brother

You can connect your Brother scanner via USB or LAN to be able to scan. To get newer Brother scanners to work you will have to install the package `brscan4`

### Network scanner

If your scanner is networked, you need to tell `saned` the IP of your printer. It's advised to always give your printer the same IP inside your network (that is, a static IP address). Run the following command to accomplish this:

```bash
brsaneconfig4 -a name=SCANNER model=$MODEL ip=$IPOFYOURSCANNER
```
