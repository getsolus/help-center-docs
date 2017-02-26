+++
title = "Heroes of Newerth"
+++
# Heroes of Newerth

First, install the latest version of HoN by downloading it and running "HoNClient.sh".

Assuming that you install to ~/HoN (default), you only need to run two commands:

``` bash
sudo eopkg it gconf libgcrypt11
```

That installs all of the dependencies that HoN needs.

``` bash
rm ~/HoN/libs-x86_64/{libcurl.so.4,libfreetype.so.6,libgcc_s.so.1,libgcrypt.so.11,libspeexdsp.so.1,libspeex.so.1,libstdc++.so.6,libudev.so.0}
```

This removes all the libraries that conflict with the ones in Solus.
