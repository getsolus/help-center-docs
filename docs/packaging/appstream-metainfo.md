---
title: Appstream Metainfo
summary: The purpose and format of Appstream Metainfo
---

# AppStream Metainfo

:::important

AppStream metainfo is required for the inclusion of graphical application to Solus repository.

:::

AppStream allows upstream projects to define metadata about the components they provide using small XML files, metainfo files, which get installed into locations on the client system and are used by distributors to enhance their metadata. 

AppStream metainfo become a requirement for Solus because new software centers such as GNOME software and KDE Siscover rely on it to know which applications are available in repository. Typically AppStream metainfo is shipped bundled with graphical application itself, but sometimes upstream doesn't do so. Packagers are required to add AppStream metainfo themselves when that happen.

## Adding appstream metainfo to an existing package

There are a few scenarios that Packagers might encounter:

|No   |      Scenario               |Solution               |
| -------- | --------------------------------- | -----------|
|  1  | An application already provides appstream metainfo| Nothing to do|                                                                                                                                                                           
|2| An application contains appstream metainfo in the source package but we do not install it | Install the appstream metainfo to `/usr/share/metainfo`. _Example_: [here](https://github.com/getsolus/packages/commit/0a726a53454e7c8a6b0e66de69d59bcc66f0fc19 )|                                                   
|3| An application doesn't contain appstream metainfo in the source package but it exists on Flathub                       | Borrow and tweak the appstream metainfo from the Flathub repo. Encourage upstream to add it to their source. _Example_: [here](https://github.com/getsolus/packages/commit/da2f65b93f412da43d1db9edbcb08bb90517a0eb)| 
|4| An application doesn't provide appstream metainfo and it doesn't exist on flathub| Write the appstream data, submit it to upstream. _Example_: [here](https://github.com/getsolus/packages/commit/414219d8b2ceeabe85178d3a467f81b9131016f4)| 
|   5 |Appstream metainfo is provided but generation of it is failing| See [here](https://github.com/getsolus/solus-appstream-data#debugging-failures). _Example_: [here](https://github.com/getsolus/packages/commit/583b7c742caf50e2f66a70e9b62e9b91566c03f5).| 


AppStream metadata is to be placed in the `/usr/share/metainfo/` directory and must be placed in the package which should be installed in order to get the software described by the respective metadata. This means that you might need to move the *.metainfo.xml or *.appdata.xml to the right (meta)package.

In case your AppStream metadata is describing a desktop-application (you can tell by the XML root-node having a type="desktop-application" or type="desktop" attribute), the .appdata.xml file must be placed in the same package as the .desktop file already is, which (as above) must be the package containing the application itself. 

## Testing appstream data

- Clone the package repo

- Build it or eopkg fetch pkgname

- Run `sudo eopkg it appstream-glib`, `appstream-builder --packages-dir=. --include-failed -v`

- Look in the `example-failed.xml.gz` file to see if the appstream generation failed

- Look in the `example.xml.gz` file to see if the appstream generation succeeded.

- Install the package and run `appstream-util validate /usr/share/metainfo/pkgname.xml`

## Other Info

Generally speaking, a package must provide one appstream metainfo file, an icon as well as an .desktop file to succeed. However, there are exceptions to this. If an application provides more than one appstream metainfo file then the package must be subpackaged to generation of all the appstream metainfo files to succeed.