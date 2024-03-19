---
title: Repository Management
summary: Repository Management
---

# Repository Management

While Solus currently only provides two repositories, stable (shannon) and unstable, our package manager does support actively using multiple repositories on your system. This is useful if you are using a vendor-provided repository.

## Official Solus Repositories

The official Solus repositories are:

| Repository           | URL                                                      | Notes                                                                                                                                                |
| -------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Stable (shannon)** | `https://cdn.getsol.us/repo/shannon/eopkg-index.xml.xz`  | This is the default repository.                                                                                                                      |
| **Unstable**         | `https://cdn.getsol.us/repo/unstable/eopkg-index.xml.xz` | This repository should only be used if you intend to build Solus packages or to test new packages before they are synced to the _stable_ repository. |

:::danger

It is not always safe to perform a system update when using the **unstable** repository. Always check the topic of the [#solus-packaging](https://matrix.to/#/#solus-packaging:matrix.org) Matrix room before updating.

:::

## Adding a Repository

You can add a repository by using:

```bash
sudo eopkg add-repo Name Url
```

For example:

```bash
sudo eopkg add-repo Example https://example.com/repo/eopkg-index.xml.xz
```

**Note:** This does not enable the repository.

## Removing a Repository

You can remove a repository by using:

```bash
sudo eopkg remove-repo Name
```

For example:

```bash
sudo eopkg remove-repo Example
```

## Enabling a Repository

You can enable a repository for usage, by using:

```bash
sudo eopkg enable-repo Name
```

For example:

```bash
sudo eopkg enable-repo Example
```

## Disabling a Repository

You can disable a repository by using:

```bash
sudo eopkg disable-repo Name
```

For example:

```bash
sudo eopkg disable-repo Example
```

## Updating a Repository

You can update the index of a repository by using:

```bash
sudo eopkg update-repo Name
```

For example:

```bash
sudo eopkg update-repo Example
```

**Note:** You can update all repositories by **not** providing a name.

## List repositories

You can list all the repositories added on your system by using:

```bash
eopkg list-repo
```
