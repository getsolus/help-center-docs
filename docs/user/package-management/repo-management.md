---
title: Repository Management
summary: Repository Management
---

# Repository management

Solus offers two main software sources: Polaris (stable) and Unstable. The `eopkg` package manager can use multiple sources on your system, which is helpful if you use a source provided by another vendor.

## Official repositories

The official Solus repositories are:

| Repository       | URL                                                      | Notes                                                                                                       |
| ---------------- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Polaris (Stable) | `https://cdn.getsol.us/repo/polaris/eopkg-index.xml.xz`  | Default software source.                                                                                    |
| Unstable         | `https://cdn.getsol.us/repo/unstable/eopkg-index.xml.xz` | Only use this source if build Solus packages or you test new software before it moves to the stable source. |

:::danger

Updating your system while using the **unstable** source might be risky.

Before updating, check the [#solus-packaging](https://matrix.to/#/#solus-packaging:matrix.org) Matrix room.

:::

## Repository management commands

The following table lists the `eopkg` commands you can use to manage your software sources.

| Action                                 | Command                        | Example                                                                   |
| -------------------------------------- | ------------------------------ | ------------------------------------------------------------------------- |
| Add a repository                       | `sudo eopkg add-repo NAME URL` | `sudo eopkg add-repo Example https://example.com/repo/eopkg-index.xml.xz` |
| Remove a repository                    | `sudo eopkg remove-repo NAME`  | `sudo eopkg remove-repo Example`                                          |
| Enable a repository                    | `sudo eopkg enable-repo NAME`  | `sudo eopkg enable-repo Example`                                          |
| Disable a repository                   | `sudo eopkg disable-repo NAME` | `sudo eopkg disable-repo Example`                                         |
| Update a repository                    | `sudo eopkg update-repo NAME`  | `sudo eopkg update-repo Example`                                          |
| Update all repositories                | `sudo eopkg update-repo`       | `sudo eopkg update-repo`                                                  |
| List repositories added to your system | `eopkg list-repo`              | `eopkg list-repo`                                                         |
