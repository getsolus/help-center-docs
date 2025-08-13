---
title: Brother
summary: Configure Brother printers and scanners on Solus.
---

Many Brother printers and scanners work out of the box on Solus. If your device doesn't work, try installing the drivers available in the Solus repository.

## Install printer drivers

The Solus repository provides brlaser, an open-source driver for many Brother monochrome laser printers and multi-function devices. You can see the compatible models in [the official brlaser GitHub repository](https://github.com/Owl-Maintain/brlaser#supported-printers).

To install the printer drivers for your Brother device, do the following:

1. Install `brlaser` through Discover (Solus Plasma), GNOME Software, or by running the following command:

    ```bash
    sudo eopkg install brlaser
    ```

2. Verify that your printer works correctly.
3. If your printer still doesn't work, use Discover or GNOME Software to search for a driver package that matches your printer's model number. 

    The Solus repository includes drivers for many specific Brother printers. For example, the `brother-mfc1910w` package provides drivers for the MFC-1910W model.

4.  If you can't find a driver for your printer, you can request a new package for it.

## Install scanner drivers

Newer Brother devices might need the `brscan4` package for the scanner to work properly. To install the scanner drivers for your Brother device, do the following:

1.  Install `brscan4` through Discover (Solus Plasma), GNOME Software, or by running the following command:

   ```bash
   sudo eopkg install brscan4
   ```

2. If you connected your scanner through a local network (LAN), tell the SANE backend the IP address of your scanner by running the following command:

   ```bash
   brsaneconfig4 -a name=SCANNER model=MODEL_NAME ip=IP_ADDRESS
   ```

   Replace the following:

   - `MODEL_NAME`: The model of your scanner. For example, `MFC-1910W`.
   - `IP_ADDRESS`: The IP address of your scanner.

   :::tip
   Make sure your scanner has a static IP address.
   :::
