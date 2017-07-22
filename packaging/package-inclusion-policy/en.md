+++
title = "Package Inclusion Policy"
lastmod = "2017-07-22T16:28:23+03:00"
+++
# Package Inclusion Policy

This policy sets forth the criteria for a package to be accepted for inclusion into the Solus repositories.

- 2-Distro Waiver:
 - If the software appears in Debian and/or Ubuntu, Fedora, and openSUSE, in the **currently active, core** repositories, the maintainer is permitted to waive some entry requirements (This does not apply to software license,  legality or known-insecure software. Additionally this cannot be used to bypass the server rules.). PPAs, OBS projects outside of the **openSUSE**: namespace, or Arch Linux, do **NOT** add any weight to a request.
- Software Age:
 - DOA (dead-on-arrival) packages are generally rejected from Solus. However, they may be included at the discretion of the project, if they provide unique functionality. In addition, this software **MUST** comply with the  2-Distro Waiver.
 - Projects with no tags/tarballs which lack traction, may be frozen until a suitable release is made. Tagging releases is an indicator for good release engineering practices.
 - Typically, we prefer **stable** tagged releases. However, this may be waived if:
     - The software has significant traction (i.e. prerelease)
     - A bug fix only exists beyond the latest stable release for a git source
- Value Add:
 - A web wrapper which **adds value**, such as Discord, with the global push-to-talk shortcut, is eligible for inclusion.
 - A web page wrapper, that adds **no further value** other than “convenient desktop shortcut” or “tray icon”, is **NOT** eligible for inclusion. Web browsers already support desktop notifications.
 - If the newly requested package offers no functionality above that of an alternative already in the repositories, it will very likely be rejected. “It’s pretty” is never a sufficient reason.
 - Likewise, when a new package offers a better alternative to an **existing** package, we should look to replace the old one with the new one, to ensure the repository is always deduplicating.
- Explicitly Redistributable:
 - Software under a free software or open source software license, or license text which explicitly states that it is **permissible** to redistribute the software.
 - For anything that cannot be redistributed by Solus, there is the possibility for them to be provided as a Flatpak, for Third Party repository inclusion. These items should then fetch only at installation time, and not contain non distributable components.
 - Solus supports both VCS (currently only git, this will expand) and traditional software sources (such as tarballs) for packages, equally.
 - Unless **absolutely unavoidable**, the sources for a package should be source, and not **binary, prebuilt** sources. Exceptions may be made in rare cases, such as stage1 bootstrap for a compiler, or requires custom components otherwise impossible to provide in Solus (patched libraries, etc.)
- Server software:
 - Mail servers such as Postfix, Dovecot, etc, are **NOT** eligible for inclusion. Solus does not provide a server operating system.
 - Web servers and database daemons **ARE** eligible for inclusion, as they facilitate web developers to work locally.
 - Anything outside of these may be catered to by the usage of Docker, or other container technology. Thus, container technology must be supported by Solus to support access to ancillary cases.
- Stack Complexity:
 - Certain requests may tick all the boxes, but introduce a level of complexity or require a level of engagement not possible to balance for the packaging team. Under certain situations, a request will be frozen until it has a dedicated maintainer.
 - This extends to requests for full desktop environments. However, this does not extend to minor components like drop-in window managers or panels separate of a dependent stack (i.e. Awesome WM, tint2, etc.)