+++
title = "Release Processes"
lastmod = "2018-08-28T12:17:05+03:00"
+++
# Release Processes

This post is intended as both information to users, and guidelines for developers and contributors of Solus. Solus employs a formal architecture to enable the curated rolling release model, which is made possible through the use of ferryd, solbuild and a split-repository model.

## Repository staging

All package builds for Solus, updates or otherwise, will always enter the `unstable` repository first. Consequently, all Solus developers and contributors should ensure `solbuild` is configured to use the unstable target. As and when the weekly stabilisation efforts have completed, the `unstable` repository will be pulled into `shannon`, the stable target.

This effectively means that `shannon` is a rolling snapshot of `unstable`. Note that the weekly sync will not make each repository match identically - the **tip** of every package in `unstable` will be merged into `shannon`. This ensures that the `shannon` update path is cost-efficient in terms of package availability, and that the delta packages provided on `shannon` match the true update path for those users. Lastly, this also ensures that there are no unintended packages arriving in shannon from older builds.

Solus installations always default to the `shannon` repository, making shannon the published distribution, and `unstable` the development distribution.

## Weekly Sync - Every Friday

At minimum there shall be one sync per week - this will always be on a Friday. As a result, users are never more than a few days away from unstable. This allows packagers to make deeper changes to Solus and still have time to stabilise the repository before releasing changes on the Friday.

Given the high volume of changes within Solus in any sync window, the Friday sync should be viewed more as a release than a simple sync. All developers and contributors should try their best to ensure that their changes do not introduce regressions, and that existing update paths are **always respected**.

Minor syncs during the week, and correctional syncs shortly after the Friday-sync, are permitted assuming they do not introduce breaking changes to shannon. These may include minor packaging changes, security updates, etc.

## Package deprecation

Under rare circumstances a package may need to be deprecated or even renamed. Packagers owning these changes must first communicate the need to ensure a coordinated deprecation. Raise the issue on the dev portal, or speak with the core team on IRC to ensure this is implemented correctly.

Deprecated packages will remove themselves from the users systems as the first operation in an update or package install using the package manager, once marked as `Obsolete` in the index.

## Major stack changes

Large stack upgrades should begin as closely to the last Friday sync as possible, to ensure there is plenty of time for the work to be completed, integrated, and tested for regressions.

## Test, test, test!

If you are pushing changes that affect the core Solus installations, you can trivially test these by both updating your own installation, as well as producing test ISOs from unstable. Producing an ISO first to verify a stack change is usually preferable as an initial canary test.

To build any of the Solus ISOs from git, simply clone the relevant image from the [Dev Portal](https://dev.getsol.us/) and run `make`. Do note that branded Solus ISOs should not be distributed as they would infer the images had passed QA - the distribution of unstable ISOs would reflect badly on the project.

Choose the relevant image (`budgie`, `gnome`, `plasma`, `mate`) and substitute `TEST_ISO` below to begin building the ISO.

```bash
    export TEST_ISO="budgie"

    # Ensure you have the correct ISO build dependencies
    sudo eopkg it syslinux libisoburn squashfs-tools

    # Clone an ISO repo
    git clone https://dev.getsol.us/source/solus-image-$TEST_ISO.git
    pushd solus-image-$TEST_ISO

    # Build the ISO. You must have the `common/` tree set up per the Packaging introduction.
    make
```

