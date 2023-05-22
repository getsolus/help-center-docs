---
title: Web Development
summary: Solus specific help for different web development tools
---

# Web Development

Many of the Solus contributors over the years have been involved in Web development of some kind. We try our best to provide up-to-date and stable versions of all of the most frequently used tools. This list features how to get started with some of the most popular web tools on Solus.

# Servers

## caddy

Solus provides the caddy web server and proxy to users and developers who want to test their web applications before setting them to production.

Remember that Solus is not a server operating system: any usage outside local testing is discouraged.

### Installation

caddy is available in the `caddy` package. It can be installed from the [Software Center](/docs/user/package-management/basics#installing-software) or via terminal:

```bash
sudo eopkg install caddy
```

### Usage

#### Configuration

caddy, like many other packages in the Solus repository, is [stateless](https://clearlinux.org/features/stateless). That means the package gets installed with a vendored configuration out-of-the-box which can be customized, or even overridden, by a privileged user.

caddy can use any valid configuration by reloading it via the cli. For automatic HTTPS users may need to generate their own certs and to add them at their `Caddyfile`s. For PHP FastCGI support `php` needs to be also installed and with the `php-fpm` service also running. Reloading with the `/usr/share/caddy/Caddyfile` reverts caddy to its original settings. More documentation about caddy is available at their [website](https://caddyserver.com/docs/).

#### Management

Basic caddy management is done via `systemd` and the cli, using the following commands:

```bash
sudo systemctl enable --now caddy # To enable nginx on startup and run it immediately.
caddy reload --config /etc/caddy/Caddyfile # To reload caddy with an specified configuration.
sudo systemctl stop caddy   # To stop caddy.
```

More details about `systemctl` are available [at this address](https://www.freedesktop.org/software/systemd/man/systemctl.html).

## httpd (Apache)

Solus provides httpd (otherwise referred to as Apache) web server for web developers to test locally before uploading their work.

### Installation

httpd can be installed either from the Software Center or via terminal:

```bash
sudo eopkg install httpd
```

### Usage

#### Configuration and DocumentRoot

Unlike most other operating systems, the httpd provided in Solus is [stateless](https://clearlinux.org/features/stateless), enabling us to provide out-of-the-box vendor configuration via `/usr/share/defaults/httpd/`, while still enabling the system administrator (_or a user with the appropriate permissions_) to override the vendor configuration via the system-wide configuration location, `/etc`.

Therefore, to make modifications to httpd's configuration, you must first create the directories `/etc/httpd/conf.d/` and create your own \*.conf files, which will override the vendor-provided configuration files.

**Note:** Modification of the **vendor** configuration files may result in your changes being overwritten during the next update to httpd.

By default, httpd's DocumentRoot is set to `/var/www/`, thus files you desire to be accessible via your httpd server must be copied to that location.

#### PHP Support

To get PHP working, install it from the Software Center or via terminal:

```bash
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

Now, to load the changes, run:

```bash
sudo systemctl restart httpd && sudo systemctl restart php-fpm
```

#### Management

Managing httpd is done via systemd, using the following commands:

```bash
sudo systemctl enable httpd # Enable on startup
sudo systemctl start httpd # Start the web server
sudo systemctl stop httpd # Stop the web server
```

## nginx

Solus provides the nginx web server and proxy to users and developers who want to test their web applications before setting them to production.

Remember that Solus is not a server operating system: any usage outside the local testing is discouraged.

### Installation

nginx is available in the `nginx` package. It can be installed from the [Software Center](/docs/user/package-management/basics#installing-software) or via terminal:

```bash
sudo eopkg install nginx
```

### Usage

#### Configuration

nginx, as many other packages in the Solus repository, is [stateless](https://clearlinux.org/features/stateless). That means the package gets installed with a vendored configuration out-of-the-box which can be customized, or even overridden, by a privileged user. The default location for nginx config files is in `/usr/share/defaults/nginx/`

nginx on Solus is designed to read users' configuration files from `/etc/nginx/conf.d/` and `/etc/nginx/sites-enabled`. You may copy the default config files from `/usr/share/defaults/nginx/` and modify them to suit your needs. It is also possible to manually create these directories and put personal files in there to customize nginx's behavior. To revert back to the original settings, just delete `/etc/nginx/`.

#### Management

Basic nginx management is done via systemd, using the following commands:

```bash
sudo systemctl enable --now nginx # To enable nginx on startup and run it immediately.
sudo systemctl stop nginx   # To stop nginx.
```

More details about `systemctl` are available [at this address](https://www.freedesktop.org/software/systemd/man/systemctl.html).

# Container Management

## Vagrant

Vagrant is a tool for building complete development environments. You can use providers listed below with Vagrant, which itself is installable via the `vagrant` package.

### Providers

- **Docker:** You can use Docker as a provider for Vagrant. You can install Docker via the `docker` package.

- **VirtualBox:** You can use VirtualBox as a provider by following the "Solus As Host" instructions [here](/docs/user/software/virtualization/virtualbox#solus-as-host).
