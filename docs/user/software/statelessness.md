# Stateless Configuration

TODO

- Decide if "configuration (files)" or "configurations" should be used
- Include other user areas: usr/local, /etc/, /opt, /home, and /var
- Do we mention `%vendorconfdir` `%sysconfdir`, what about /usr/share/defaults/etc/ ?

## What is Statelessness?

Stateless configuration (commonly called _statelessness_) is a method of organizing configuration files for applications on Linux with the goal that users are provided with working defaults, and at the same time, are able to override these defaults such that the system gracefully returns to the defaults when the user removes their overriding configuration.

This stateless behavior is acheived by having applications understand the **hierarchy of configuration files**. The User configuration overrides the System configuration, and the System configuration overrides the OS provided configuration. If no User configuration is provided, then the System configuration is used, and if no System configuration is provided, then the OS provided configuration is used.

- User configurations _Highest priority_
- System configurations
- OS provided configurations, AKA default configurations _Lowest priority_

### User configurations

The user configurations can be distinct for each user profile on a machine. These configurations are stored in the `XDG_CONFIG_HOME` directory: `~/.config`, while some applications insist on placing configuration files straight into the home directory. For example the `fish` shell uses the `~/.config/fish` directory to store user configurations, while the `bash` shell uses the `~/.basrc`configuration file straight from the home directory.

_The package manager will never touch User configurations._

### System configurations

The system configurations are used by all users on a machine. These configurations are stored in the `/etc` directory, for example, the `fish` shell uses the `/etc/fish` directory.

_The package manager will never touch System configurations._

### OS provided configurations

The OS provided configurations are used by all users on a machine. These configurations are stored in the `/usr/share/defaults` directory. For example, the `sway` window manager uses `/usr/share/defaults/sway`

_The package manager_ **will** _change OS provided configurations._

## Using statlessness

Using statelessness, you can modify configurations knowing you always have the option to return to the Solus defaults. Additionally, your User configurations can contain the minimal set of desired changes and use default configuration for the rest.

To demonstrate this in practice, we will use the `sway` window manager:

Create a directory for your User configuration, then copy the default configuration file provided by Solus:

```bash
mkdir ~/.config/sway
cp /usr/share/defaults/sway/config ~/.config/sway/config
```

:::tip

You could also place this configuration file in `/etc/sway`, where the configuration would apply to all users.

:::

Now you can edit your configuration file:

```bash
nano ~/.config/sway/config
```

To return to Solus defaults, remove your configuration file:

```bash
rm ~/.config/sway/config
```

If you think you have somehow changed the Solus provided defaults, re-install `sway` to overwrite any configuration in `/usr/share/defaults/sway`:

```bash
sudo eopkg install --reinstall sway
```

You can see additional examples on the [Web Development page](/docs/user/software/development/web.md).

## Common default configuration locations

This is a list of common default configurations users may wish to copy and change.

### SSH

`/usr/share/defaults/etc/ssh/`

### TODO: Others?

- pam, ssl

## Statelessness for packagers

Refer to TODO future doc.

## References

This page relies heavily on the _Clear Linux Project Docs_

- https://www.clearlinux.org/clear-linux-documentation/guides/clear/stateless.html
- https://www.clearlinux.org/clear-linux-documentation/reference/manpages/stateless.7.html
