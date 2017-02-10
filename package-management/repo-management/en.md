---
title: Repository Management
---
# Repository Management

While Solus currently only provides two repositories, stable (shannon) and stable, our package manager does support actively using multiple repositories on your system. This 
is useful if you are using a vendor-provided repository.

## Adding a Repository

You can add a repository by using:

``` bash
sudo eopkg add-repo Name Url
```

For example:

``` bash
sudo eopkg add-repo Example http://example.com/repo/eopkg-index.xml.gz
```

**Note:** This does not enable the repository.

## Removing a Repository

You can remove a repository by using:

``` bash
sudo eopkg remove-repo Name
```

For example:

``` bash
sudo eopkg remove-repo Example
```

## Enabling a Repository

You can enable a repository for usage, by using:

``` bash
sudo eopkg enable-repo Name
```

For example:

``` bash
sudo eopkg enable-repo Example
```

## Disabling a Repository

You can disable a repository by using:

``` bash
sudo eopkg disable-repo Name
```

For example:

``` bash
sudo eopkg disable-repo Example
```

## Updating a Repository

You can update the index of a repository by using:

``` bash
sudo eopkg update-repo Name
```

For example:

``` bash
sudo eopkg update-repo Example
```

**Note:** You can update all repository by **not** providing a name.

## List repositories

You can list all the repositories added on your system by using:

``` bash
sudo eopkg list-repo
```