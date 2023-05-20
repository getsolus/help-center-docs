---
title: eopkg
summary: Quick intro to package management with eopkg
lastmod:
---

# eopkg

Solus uses the `eopkg` package management system to deliver software to the end-user. It is actively developed by Solus, for Solus. We hope you enjoy the simplicity it offers for day-to-day use. For power users, there's plenty for you too!

# Basics

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

## Get Information on Software

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




# Advanced



## History and Rollback

Solus provides a history and rollback feature via its package manager, eopkg. This feature allows you to see when your repository was last updated, actions such as installation, removal, and upgrading of software.

Our rollback feature allows you to essentially rewind your system's software back to a previous state, assuming you or our repository has the versions in question.

### History

You can see the history from eopkg by using:

``` bash
sudo eopkg history
```

### Rollback

To rollback your system, first use the above history command to check what the transaction / operation number was. Then, we use the following command:

``` bash
sudo eopkg history -t number
```

The number, in this case, is the operation before the one you want to change. So if the number was `100`, then you would use `99`.



## Repository Management

While Solus currently only provides two repositories, stable (shannon) and unstable, our package manager does support actively using multiple repositories on your system. This is useful if you are using a vendor-provided repository.

### Adding a Repository

You can add a repository by using:

``` bash
sudo eopkg add-repo Name Url
```

For example:

``` bash
sudo eopkg add-repo Example https://example.com/repo/eopkg-index.xml.gz
```

**Note:** This does not enable the repository.

### Removing a Repository

You can remove a repository by using:

``` bash
sudo eopkg remove-repo Name
```

For example:

``` bash
sudo eopkg remove-repo Example
```

### Enabling a Repository

You can enable a repository for usage, by using:

``` bash
sudo eopkg enable-repo Name
```

For example:

``` bash
sudo eopkg enable-repo Example
```

### Disabling a Repository

You can disable a repository by using:

``` bash
sudo eopkg disable-repo Name
```

For example:

``` bash
sudo eopkg disable-repo Example
```

### Updating a Repository

You can update the index of a repository by using:

``` bash
sudo eopkg update-repo Name
```

For example:

``` bash
sudo eopkg update-repo Example
```

**Note:** You can update all repository by **not** providing a name.

### List repositories

You can list all the repositories added on your system by using:

``` bash
sudo eopkg list-repo
```

