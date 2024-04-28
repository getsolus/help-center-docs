---
title: Web Development
summary: Install and configure different web development tools on Solus.
---

# Web Development

# Servers

Solus provides multiple web servers for local testing of web applications.

:::caution Important

**Solus is not a server operating system**. Usage of server packages outside local testing is not recommended.

:::

## Caddy

Caddy is installed with a default configuration that you can customize as needed.

### Installation

To install `caddy`, use the Software Center or execute the following command:

```bash
sudo eopkg install caddy
```

### Configuration

You can configure Caddy using a _Caddyfile_, a text file that contains configuration directives. The default Caddyfile is located at `/usr/share/caddy/Caddyfile`.

To reload Caddy with a new configuration file, use the following command:

```bash
caddy reload --config /path/to/new/caddyfile
```

For more information, see the Caddy documentation at [https://caddyserver.com/docs/](https://caddyserver.com/docs/).

#### Management

You can use the following commands to manage Caddy:

- Enable Caddy on startup and start immediately after enabling: `sudo systemctl enable --now caddy`
- Stop Caddy: `sudo systemctl stop caddy`

## httpd (Apache)

httpd (Apache) is installed with a default configuration that you can customize as needed.

### Installation

To install `httpd`, use the Software Center or execute the following command:

```bash
sudo eopkg install httpd
```

### Usage

#### Configuration and DocumentRoot

The default configuration files for Apache are located in the `/usr/share/defaults/httpd/` directory. To override the default configuration, create a new file with the `.conf` extension in the `/etc/httpd/conf.d` directory.

:::caution Important

If you modify the configuration files located in the `/usr/share/defaults/httpd/` folder, your changes might be overwritten during a system update.

:::

The document root is the directory where Apache serves files from. By default, the document root is `/var/www/`.

#### Enabling PHP support

1. Install `php` from the Software Center or execute the following command: `sudo eopkg install php`.
2. Create a new `/etc/httpd/conf.d/php.conf` file with the following contents:

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

3. Execute the following command: `sudo systemctl restart httpd && sudo systemctl restart php-fpm`

#### Management

You can use the following commands to manage httpd:

- Enable httpd on startup: `sudo systemctl enable httpd`.
- Start the web server: `sudo systemctl start httpd`
- Stop the web server: `sudo systemctl stop httpd`

## nginx

nginx is installed with a default configuration that you can customize as needed.

### Installation

To install `nginx`, use the Software Center or execute the following command:

```bash
sudo eopkg install nginx
```

### Usage

#### Configuration

Nginx's configuration files are located in the `/usr/share/defaults/nginx/` directory. To override the default configuration, you can create configuration files in the `/etc/nginx/conf.d/` or the `/etc/nginx/sites-enabled` folders.

:::tip

To revert back to the original settings, delete the `/etc/nginx/` folder.

:::

#### Management

You can use the following commands to manage nginx:

- Enable nginx on startup and start immediately after enabling: `sudo systemctl enable --now nginx`
- Stop nginx: `sudo systemctl stop nginx`
