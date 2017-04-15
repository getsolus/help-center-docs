+++
title = "Apache (httpd)"
+++
# Apache (httpd) Web Server

Solus provides httpd for web developers to test locally before uploading their work. Below are installation instructions for installing httpd:

## Install

httpd can be installed either from the Software Center or via terminal:

``` bash
sudo eopkg install httpd
```

Configuration must be copied from /usr/share/defaults/httpd/httpd.conf into /etc/ and then edited to your liking. The default location for www documents in /var/www/

Commands for managing the httpd via systemd systemctl:

``` bash
sudo systemctl enable httpd # enable on startup
sudo systemctl start httpd # start the web server
sudo systemctl stop httpd # stop the web server
```
