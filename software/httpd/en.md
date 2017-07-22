+++
title = "httpd (Apache)"
lastmod = "2017-07-22T16:28:23+03:00"
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

Unlike most other operating systems, the httpd provided in Solus is [stateless](https://clearlinux.org/features/stateless), enabling us to provide out-of-the-box vendor configuration via `/usr/share/defaults/httpd/`, while still enabling the system administrator (*or a user with the appropriate permissions*) to override the vendor configuration via the system-wide configuration location, `/etc`.

Therefore, to make modifications to httpd's configuration, you must first create the directories `/etc/httpd/conf.d/` and create your own *.conf files, which will override the vendor-provided configuration files. 

**Note:** Modification of the **vendor** configuration files may result in your changes being overwritten during the next update to httpd.

By default, httpd's DocumentRoot is set to `/var/www/`, thus files you desire to be accessible via your httpd server must be copied to that location.

### Management

Managing httpd is done via systemd, using the following commands:

``` bash
sudo systemctl enable httpd # Enable on startup
sudo systemctl start httpd # Start the web server
sudo systemctl stop httpd # Stop the web server
```
