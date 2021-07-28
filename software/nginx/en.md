+++
title = "nginx"
lastmod = "2020-04-10T19:32:19+02:00"
+++
# nginx

Solus provides the nginx web server and proxy to users and developers who want to test their web applications before setting them to production.

Remember that Solus is not a server operating system: any usage outside the local testing is discouraged.

## Installation

nginx is available in the `nginx` package. It can be installed from the [Software Center](https://getsol.us/articles/common-tasks/installing-and-updating-software/en/) or via terminal:

```bash
sudo eopkg install nginx
```

## Usage

### Configuration

nginx, as many other packages in the Solus repository, is [stateless](https://clearlinux.org/features/stateless). That means the package gets installed with a vendored configuration out-of-the-box which can be customized, or even overridden, by a privileged user. The default location for nginx config files is in `/usr/share/defaults/nginx/`

nginx on Solus is designed to read users' configuration files from `/etc/nginx/conf.d/` and `/etc/nginx/sites-enabled`. You may copy the default config files from `/usr/share/defaults/nginx/` and modify them to suit your needs. It is also possible to manually create these directories and put personal files in there to customize nginx's behavior. To revert back to the original settings, just delete `/etc/nginx/`.

### Management

Basic nginx management is done via systemd, using the following commands:

```bash
sudo systemctl enable --now nginx # To enable nginx on startup and run it immediately.
sudo systemctl stop nginx   # To stop nginx.
```

More details about `systemctl` are available [at this address](https://www.freedesktop.org/software/systemd/man/systemctl.html).
