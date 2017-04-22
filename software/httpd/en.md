+++
title = "httpd (Apache)"
+++
# httpd (Apache)

Solus provides httpd (otherwise referred to as Apache) web server for web developers to test locally before uploading their work.

## Installation

httpd can be installed either from the Software Center or via terminal:

``` bash
sudo eopkg install httpd
```

## Usage

### Configuration and DocumentRoot

As we supply a default vendor configuration in `/usr/share/defaults/httpd/`, to make modifications to httpd's configuration, you must first create the directory `/etc/httpd/conf.d/`, copy `/usr/share/defaults/httpd/httpd.conf` to `/etc/httpd/conf.d/httpd.conf`, and make modifications to the file in `/etc/httpd/`. If you modify the default vendor configuration instead it will be overwritten with the next update.

By default, httpd's DocumentRoot is set to `/var/www/`, thus files you desire to be accessible via your httpd server must be copied to that location.

### Management

Managing httpd is done via systemd, using the following commands:

``` bash
sudo systemctl enable httpd # Enable on startup
sudo systemctl start httpd # Start the web server
sudo systemctl stop httpd # Stop the web server
```
