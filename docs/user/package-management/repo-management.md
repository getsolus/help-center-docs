---
title: Repository Management
summary: Repository Management
---

# Repository management

Solus offers two main software sources: stable (shannon) and unstable. The `eopkg` package manager can use multiple sources on your system, which is helpful if you use a source provided by another vendor.

## Official repositories

The official Solus repositories are:

| Repository       | URL                                                      | Notes                                                                                                       |
| ---------------- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Stable (shannon) | `https://cdn.getsol.us/repo/shannon/eopkg-index.xml.xz`  | Default software source.                                                                                    |
| Unstable         | `https://cdn.getsol.us/repo/unstable/eopkg-index.xml.xz` | Only use this source if build Solus packages or you test new software before it moves to the stable source. |

:::danger

Updating your system while using the **unstable** source might be risky.

Before updating, check the [#solus-packaging](https://matrix.to/#/#solus-packaging:matrix.org) Matrix room.

:::

## Repository management commands

The following table lists the `eopkg` commands you can use to manage your software sources.

| Action                                 | Command                        | Example                                                                   | Notes                                                    |
| -------------------------------------- | ------------------------------ | ------------------------------------------------------------------------- | -------------------------------------------------------- |
| Add a repository                       | `sudo eopkg add-repo Name URL` | `sudo eopkg add-repo Example https://example.com/repo/eopkg-index.xml.xz` | This doesn't enable the repository.                      |
| Remove a repository                    | `sudo eopkg remove-repo Name`  | `sudo eopkg remove-repo Example`                                          | -                                                        |
| Enable a repository                    | `sudo eopkg enable-repo Name`  | `sudo eopkg enable-repo Example`                                          | -                                                        |
| Disable a repository                   | `sudo eopkg disable-repo Name` | `sudo eopkg disable-repo Example`                                         | -                                                        |
| Update a repository                    | `sudo eopkg update-repo Name`  | `sudo eopkg update-repo Example`                                          | You can update all repositories by not providing a name. |
| List repositories added to your system | `eopkg list-repo`              | `eopkg list-repo`                                                         | -                                                        |
