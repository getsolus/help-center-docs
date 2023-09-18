---
title: Update Your Development Environment
summary: Update your development environment before working on a package
sidebar_position: 2
---

# Update Your Development Environment

## Update the development tools and the system

Always make sure your development environment and system are up to date before beginning work on a package. First, update the development tools and system

1. Update common
2. Update the solbuild base image `sudo solbuild update`
3. Update the system.

The below assumes your Solus packaging directories are under `~/solus-builds`

```bash
cd ~/solus-builds/common
git pull
sudo solbuild update
sudo eopkg up
```

Next, you can either [Submit a New Package](creating-a-new-package.md) or [Update an Existing Package](updating-an-existing-package.md)