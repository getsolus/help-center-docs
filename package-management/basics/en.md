---
title: Basics to Package Management
---
# Basics to Package Management

Solus uses the eopkg package management system to deliver software to the end-user.  
Below are some basic commands for using eopkg.

## Installing Software

You can install one or more packages by using:

``` bash
sudo eopkg install packagename
```

For example:

``` bash
sudo eopkg install gnome-documents gnome-music
```

## Reinstalling Software

You can reinstall one or more packages by using:

``` bash
sudo eopkg install --reinstall packagename
```

For example:

``` bash
sudo eopkg install --reinstall gnome-documents gnome-music
```

## Uninstalling Software

You can uninstall one or more packages by using:

```
sudo eopkg remove packagename
```

For example:

``` bash
sudo eopkg remove gnome-documents gnome-music
```

### Get Information on Software

You can get information on software, such as its description, version, installation size, and more, by using

``` bash
sudo eopkg info packagename
```

For example:

``` bash
sudo eopkg info gnome-documents
```

## Updating

You can update your system by using:

``` bash
sudo eopkg upgrade
```

If you want to **only** update a specific piece of software on your system, you can specify is like below:

``` bash
sudo eopkg upgrade firefox
```

## Searching

You can search the software selection Solus provides by using:

``` bash
sudo eopkg search term
```

For example:

``` bash
sudo eopkg search documents
```

Notice that you don't need to search for a specific software name, although you can do that. We search summaries and software names by default.