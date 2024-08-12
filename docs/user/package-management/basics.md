---
title: Basics to Package Management
summary: Basics to Package Management
---

# Basics of package management in Solus

Solus uses the eopkg package manager. You can use `eopkg` to install, update, and remove software packages on your Solus system.

The following table lists the most common `eopkg` commands:

| Task                                                          | Command                                       | Example                                                      |
| ------------------------------------------------------------- | --------------------------------------------- | ------------------------------------------------------------ |
| Install software                                              | `sudo eopkg install PACKAGE_NAME`             | `sudo eopkg install gnome-documents gnome-music`             |
| Reinstall software                                            | `sudo eopkg install --reinstall PACKAGE_NAME` | `sudo eopkg install --reinstall gnome-documents gnome-music` |
| Uninstall software                                            | `sudo eopkg remove PACKAGE_NAME`              | `sudo eopkg remove gnome-documents gnome-music`              |
| Update your system                                            | `sudo eopkg upgrade`                          | -                                                            |
| Update specific software                                      | `sudo eopkg upgrade PACKAGE_NAME`             | `sudo eopkg upgrade firefox`                                 |
| Search for software                                           | `eopkg search KEYWORD`                        | `eopkg search documents`                                     |
| Get information on software, such as description or version   | `eopkg info PACKAGE_NAME`                     | `eopkg info gnome-documents`                                 |