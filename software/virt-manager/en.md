+++
title = "Virtual Machine Manager"
lastmod = "2017-08-09T16:16:58+01:00"
+++
# virt-manager

[virt-manager](https://virt-manager.org/) The virt-manager application is a desktop user interface for managing virtual machines through libvirt.

## Getting Started

Make sure you have the necessary packages installed:

``` bash
sudo eopkg upgrade
sudo eopkg install virt-manager
```

## After installation

You will need to start libvirtd or you will receive an error:

``` bash
sudo systemctl enable libvirtd
sudo systemctl start libvirtd
```

This will make sure libvirtd starts on boot and also starts it for you to use straight away.




