---
title: Eopkg Configuration
summary: Modifying the eopkg configuration
---

# Modifying the Eopkg Configuration

The eopkg configuration file changes how eopkg works. The first section in the config has settings for the process of building a package. The second section allows you to configure the directories that eopkg uses for various operations. Lastly, the `general` section contains settings for the general operation of eopkg.

## Copying the default configuration

Solus aims to be a stateless operating system, so the default configuration file for eopkg is saved to `/usr/share/defaults/eopkg/eopkg.conf`. To modify the configuration, you'll have to start by copying the default configuration file into `/etc/eopkg` so it will override the default file:

```sh
sudo mkdir -p /etc/eopkg && cp /usr/share/defaults/eopkg/eopkg.conf /etc/eopkg/eopkg.conf
```

Once the file has been copied, you can edit it with your text editor of choice.

## Notable keys

Most keys in the config you'll probably want to leave untouched. Some, however, are useful to know about:

| Key               | Description                                                  | Values        |
| -------------------------------------------------------------------------------- | ------------- |
| generateDebug     | Whether or not debug symbol subpackages will be generated    | True / False  |
| jobs              | How many building jobs to use when compiling the source      | auto / number |
| retry_attempts    | How many times to retry downloading a package during install | number        |

## Restoring defaults

If at any time you want to go back to the default configuration, simply remove the config file in `/etc/eopkg`.
