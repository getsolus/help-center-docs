---
title: Package Inclusion Policy
summary: What's needed to include packages into the repository
---

# Package Inclusion Policy

This policy sets forth the criteria for a package to be accepted for inclusion into the Solus repositories or rejected.

## Criteria

### Explicitly Redistributable

- Software under a free software or open source software license, or license text which explicitly states that it is **permissible** to redistribute the software.
- For anything that cannot be redistributed by Solus, there is the possibility for them to be provided as a Flatpak, for Third Party repository inclusion, however the Solus project is not responsible for flatpak or snap implementation of these items. These items should then fetch only at installation time, and not contain non distributable components.
- Solus supports both VCS (currently only git, this will expand) and traditional software sources (such as tarballs) for packages, equally.
- Unless **absolutely unavoidable**, the sources for a package should be source, and not **binary, prebuilt** sources. Exceptions may be made in rare cases, such as stage1 bootstrap for a compiler, or requires custom components otherwise impossible to provide in Solus (patched libraries, etc.)

### Server Software

- Mail servers such as Postfix, Dovecot, etc, are **not** eligible for inclusion. Solus does not provide a server operating system.
- Web servers and database daemons **are** eligible for inclusion, as they facilitate web developers to work locally.
- Anything outside of these may be catered to by the usage of Docker, or other container technology. Thus, container technology must be supported by Solus to support access to ancillary cases.

### Software Age

- DOA (dead-on-arrival) packages are generally rejected from Solus. However, they may be included at the discretion of the project, if they provide unique functionality.
- Projects with no tags/tarballs which lack traction, may be frozen until a suitable release is made. Tagging releases is an indicator for good release engineering practices.
- Typically, we prefer **stable** tagged releases. However, this may be waived if:
- The software has significant traction (i.e. prerelease)
- A bug fix only exists beyond the latest stable release for a git source

### Stack Complexity

- Certain requests may tick all the boxes, but introduce a level of complexity or require a level of engagement not possible to balance for Solus Staff. Under certain situations, a request will be frozen until it has a dedicated maintainer.
- This extends to requests for full desktop environments. However, this does not extend to minor components like drop-in window managers or panels separate of a dependent stack (i.e. Awesome WM, tint2, etc.)

### Value Add

- A web wrapper which **adds value**, such as Discord, with the global push-to-talk shortcut, is eligible for inclusion.
- A web page wrapper, that adds **no further value** other than “convenient desktop shortcut” or “tray icon”, are **not** eligible for inclusion. Web browsers already support desktop notifications.
- If the newly requested package offers no functionality above that of an alternative already in the repositories, it will very likely be rejected. “It’s pretty” is never a sufficient reason.
- If the requested package is curated towards, or developed with the intent to work on, a specific operating system, it will very likely be rejected. This includes packages which require libraries that are built with the intent to work on a specific operating system.
- Likewise, when a new package offers a better alternative to an **existing** package, we should look to replace the old one with the new one, to ensure the repository is always deduplicating.

## Rejection

Solus Staff members reserve the right to permanently reject a package request without the need for further discussion once the rejection is issued. The limited time of contributors should be considered and respected, instead of dragging out and 'necromancing' old issues in a vain attempt to force inclusion of previously rejected software. In the event of any policy change, existing/expired package requests will NOT be reevaluated under new criteria as this would lead to an exponential growth in work upon every policy change, and is physically impossible to handle for a project of _any_ size.
