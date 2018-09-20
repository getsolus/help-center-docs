+++
title = "Configuring Brother Scanner"
lastmod = "2018-09-20T13:50:40+02:00"
+++

# Configuring Brother Scanner

You can connect your Brother scanner via USB or LAN to be able to scan

## USB

To get the scanner of newer Brother scanners to work you have to install the package `brscan4`

## LAN

For the Scanner to work of LAN you have to tell 'saned' the IP of your printer, it's advised to give your printer always the same IP inside your Network.

Please run inside a terminal the following command

``` bash
brsaneconfig4 -a name=SCANNER model=$MODEL ip=$IPOFYOURSCANNER
```

