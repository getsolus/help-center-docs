---
title: KSysGuard
summary: Quick Start guide to KSysGuard on Solus
date: 2022-12-16
---

# KSysGuard

[KSysGuard](https://userbase.kde.org/KSysGuard) KSysGuard, also known as KDE System Guard and KDE System Monitor, is designed to make simple process control available to a user without needing to do any special setup.

## Installation

KSysGuard is usually installed as part of the KDE Plasma Desktop environment, but can be installed from the Software Center or via terminal:

``` bash
sudo eopkg it ksysguard
```

## Use KSysGuard as a non-root user

The per process networking plugin requires elevated access to your system. To enable the plugin as non-root user, execute these commands:

``` bash
sudo setcap "CAP_NET_RAW=+ep" "/usr/lib64/kf5/ksysguard/ksgrd_network_helper"
```

## Usage

KSysGuard [User’s Guide](https://userbase.kde.org/KSysGuard) or the KDE Help Centre (open khelp on your Plasma Desktop).
