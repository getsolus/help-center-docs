---
title: Troubleshooting for Packagers
summary: Common packaging issues and how to fix them
---

# Troubleshooting for Packagers

This page covers common packaging issues and how to fix them. We also show you how to share your packaging work so you can ask for help in the Solus Matrix rooms.

## Asking for help

When you run into a problem that you don't know how to fix you should ask for help in the [Solus Packaging matrix room](/user/contributing/getting-involved.md#matrix-chat). But first you should send the `package.yml` file and `solbuild` output to somewhere others can see it; we recommend you use [GitHub Gists](https://gist.github.com/). These commands assume you have set up `github-cli`.

If you would rather not use Gists, use a pastebin site like [bpaste](https://bpa.st/)

Send the `package.yml` file in the current directory to a public Gist:

```bash
cat package.yml | gh gist create --public
```

Send the output of `solbuild` to a public Gist:

```bash
go-task &| gh gist create --public
```

*Note: the usual `solbuild`` output will not be shown when this command is running, and it will take at least a few seconds*

Send the output of `solbuild` to a new `output.txt` file:

```bash
go-task &| tee output.txt
```

## Common Issues

### "Error downloading https://github.com/project/blah/1.2.3.tar.gz: checksum mismatch"

Your `source` tarball does not match the checksum next to it in `package.yml`. You should  use `go-task new` or `go-task update` to write the correct checksum automatically.

###  ffmpeg-chromium won't compile

Make Harvey do it instead

### "Failed to build packages err="Failed to fetch source https://github.com/project/blah.git#{commit ref here}, reason: exit status 1\n"

If your build fails immediately this  message, and your are using a **git source**, you should clear the `solbuild` git sources cache:

```bash
sudo rm -rf /var/lib/solbuild/sources
```

