---
title: Troubleshooting for Packagers
summary: Common packaging issues and how to fix them
---

# Troubleshooting for Packagers

This page covers common packaging issues and how to fix them. We also show you how to share your packaging work so you can ask for help in the Solus Matrix rooms.

## Asking for help

When you run into a problem that you don't know how to fix you should ask for help in the [Solus Packaging Matrix room](/user/contributing/getting-involved.md#matrix-chat). But first you should send the `package.yml` file and `solbuild` output to somewhere others can see it; we recommend you use [GitHub Gists](https://gist.github.com/). These commands assume you have set up `github-cli`.

If you would rather not use Gists, use a pastebin site like [bpaste](https://bpa.st/)

Send the `package.yml` file in the current directory to a public Gist:

```bash
cat package.yml | gh gist create --public
```

Send the output of `solbuild` to a public Gist:

```bash
go-task &| gh gist create --public
```

_Note: the usual `solbuild` output will not be shown when this command is running, and it will take at least a few seconds_

Send the output of `solbuild` to a new `output.txt` file:

```bash
go-task &| tee output.txt
```

## Common Issues

### "Error downloading https://github.com/project/blah/1.2.3.tar.gz: checksum mismatch"

Your `source` tarball does not match the checksum next to it in `package.yml`. You should use `go-task new` or `go-task update` to write the correct checksum automatically.

### "Failed to build packages err="Failed to fetch source https://github.com/project/blah.git#{commit ref here}, reason: exit status 1\n"

If your build fails immediately this message, and you are using a **git source**, you should clear the `solbuild` git sources cache:

```bash
sudo rm -rf /var/lib/solbuild/sources/git
```

### "mount: /var/lib/solbuild/roots/unstable-x86_64: WARNING: source write-protected, mounted read-only"

If you interrupt a build sometimes `solbuild` does not unmount cleanly, and you will need to unmount manually:

```bash
sudo umount -f /var/lib/solbuild/roots/unstable-x86_64
```

### Solbuild is eating up all my disk space

The `solbuild` cache at `/var/cache/solbuild` can grow to tens of gigabytes easily. Recover that disk space by running the "delete cache (`dc`)" command:

```bash
sudo solbuild dc
```

### An old package using `%configure` doesn't build

- Replace `%configure` with `%reconfigure` and try again.
- If `%reconfigure` produces the error `configure: error: unrecognized option: '--runstatedir=/run'`, then use the new `%configure_no_runstatedir` macro

### Something is wrong with my solbuild profile

Try running `go-task solbuild-reset`. This will delete the solbuild cache and profile, then download and initialize a fresh copy of the default unstable profile.

### Git commands fail and complain about package checks

```bash
git commit --amend
WRN packages/q/qqwing/package.yml:1: Package release is not incremented by 1
ERR packages/q/qqwing/pspec_x86_64.xml:1: Package release is not incremented by 1
Package checks failed: /home/user/solus-packages/common/CI/package_checks.py packages/q/qqwing/package.yml packages/q/qqwing/pspec_x86_64.xml
```

- Solus uses pre-commit hooks to check for simple errors. Right now, certain `git` commands can fail, particularly `git commit --amend` and `git commit --fixup`
- You can bypass the pre-commit hooks by adding the `no-verify` option, for example: `git commit --amend --no-verify`. Checks will still be run by GitHub after a Pull Request is created.
