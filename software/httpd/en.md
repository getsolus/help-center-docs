+++
title = "httpd (Apache)"
lastmod = "2017-04-23T18:37:45+03:00"
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

### PHP Support

To get PHP working, install it from the Software Center or via terminal:

``` bash
sudo eopkg install php
```

Because PHP is loaded via FPM and FastCGI and not via an Apache module, to enable PHP you must create a new file, `/etc/httpd/conf.d/php.conf`, with the following lines:

```
LoadModule proxy_module lib64/httpd/mod_proxy.so
LoadModule proxy_fcgi_module lib64/httpd/mod_proxy_fcgi.so
<FilesMatch \.php$>
SetHandler "proxy:fcgi://127.0.0.1:9000"
</FilesMatch>
<IfModule dir_module>
DirectoryIndex index.php index.html
</IfModule>
```

[More info here](https://solus-project.com/forums/viewtopic.php?f=11&t=7440&p=21756#p21756).

### Management

Managing httpd is done via systemd, using the following commands:

``` bash
sudo systemctl enable httpd # Enable on startup
sudo systemctl start httpd # Start the web server
sudo systemctl stop httpd # Stop the web server
```
