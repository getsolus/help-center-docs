+++
title = "caddy"
lastmod = "2021-02-01T15:20:50-03:00"
+++
# caddy

Solus provides the caddy web server and proxy to users and developers who want to test their web applications before setting them to production.

Remember that Solus is not a server operating system: any usage outside local testing is discouraged.

## Installation

caddy is available in the `caddy` package. It can be installed from the [Software Center](https://getsol.us/articles/common-tasks/installing-and-updating-software/en/) or via terminal:

```bash
sudo eopkg install caddy
```

## Usage

### Configuration

caddy, as many other packages in the Solus repository, is [stateless](https://clearlinux.org/features/stateless). That means the package gets installed with a vendored configuration out-of-the-box which can be customized, or even overridden, by a privileged user.

caddy can use any valid configuration by reloading it via the cli. For automatic HTTPS users may need to generate their own certs and to add them at their `Caddyfile`s. For PHP FastCGI support `php` needs to be also installed and with the `php-fpm` service also running. Reloading with the `/usr/share/caddy/Caddyfile` reverts caddy to its original settings. More documentation about caddy is available at their [website](https://caddyserver.com/docs/).

### Management

Basic caddy management is done via `systemd` and the cli, using the following commands:

```bash
sudo systemctl enable --now caddy # To enable nginx on startup and run it immediately.
caddy reload --config /etc/caddy/Caddyfile # To reload caddy with an specified configuration.
sudo systemctl stop caddy   # To stop caddy.
```

More details about `systemctl` are available [at this address](https://www.freedesktop.org/software/systemd/man/systemctl.html). 
