---
title: Appstream Metainfo
summary: The purpose and format of Appstream Metainfo
---

# AppStream Metainfo

:::important

AppStream metainfo is required for all graphical applications in the Solus repository.

:::

AppStream allows upstream projects to define metadata about the components they provide using small XML files, metainfo files, which get installed into locations on the client system and are used by distributors to enhance their metadata.

AppStream metainfo has become a requirement for all graphical application in Solus repository because software centers such as GNOME Software and KDE Discover rely on it to display applications that are available in the repository. AppStream metainfo should be shipped by the upstream project, bundled in with its source, but sometimes it isn't. In this case, packagers are required to add AppStream metainfo themselves.

Generally, for graphical applications, a package must provide one appstream metainfo file, an icon file, and a .desktop file for AppStream composition to succeed. However, there are exceptions to this. For example, metainfo for a font package does not need a .desktop file or icons. An application may provide more than one metainfo file.

## A short note on terminology

_AppStream_ is the specification. _Metainfo_ is provided by individual projects, but may also be referred to as metadata; the legacy name for this is _AppData_. AppStream composes multiple metainfo sources in a single _catalog_; this also may be referred to as metadata. Catalogs are used by software centers to display information about projects (e.g. desktop application, font, etc.). Catalogs from multiple different sources be can installed and leveraged at the same time by software centers.

## Adding appstream metainfo to an existing package

There are a few scenarios that Packagers might encounter:

| No  | Scenario                                                                                         | Solution                                                                                                                                                                                                                     |
| --- | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | An application already provides appstream metainfo                                               | Nothing to do                                                                                                                                                                                                                |
| 2   | An application contains appstream metainfo in the source package but we do not install it        | Install the appstream metainfo to `/usr/share/metainfo`. _Example_: [here](https://github.com/getsolus/packages/commit/0a726a53454e7c8a6b0e66de69d59bcc66f0fc19)                                                             |
| 3   | An application doesn't contain appstream metainfo in the source package but it exists on Flathub | Borrow and tweak the appstream metainfo from the Flathub repo. Encourage upstream project to add it to their source. _Example_: [here](https://github.com/getsolus/packages/commit/da2f65b93f412da43d1db9edbcb08bb90517a0eb) |
| 4   | An application doesn't provide appstream metainfo and it doesn't exist on flathub                | See [here](writing-appstream-metainfo). _Example_: [here](https://github.com/getsolus/packages/commit/414219d8b2ceeabe85178d3a467f81b9131016f4)                                                         |
| 5   | Appstream metainfo is provided but composition of it is failing                                   | See [here](#testing-appstream-metainfo). _Example_: [here](https://github.com/getsolus/packages/commit/583b7c742caf50e2f66a70e9b62e9b91566c03f5).                                    |

AppStream metainfo is to be installed in the `/usr/share/metainfo/` directory. It must be placed in the package which should be installed in order to get the software described by the respective metadata. This means that you might need to move the _.metainfo.xml or _.appdata.xml to the right (sub)package.

In case your AppStream metainfo is describing a desktop application (you can tell by the XML root-node having a type="desktop-application" or type="desktop" attribute), the .metainfo.xml file must be placed in the same package as the .desktop file already is, which (as above) must be the package containing the application itself.

## Testing appstream metainfo

- Clone the package repo

- Build it or fetch the package e.g. `eopkg fetch sunshine`.

- Extract the package e.g. `uneopkg sunshine-0.23.1-15-1-x86_64.eopkg`. This will unzip the `.eopkg` file containing the `metainfo.xml` and `files.xml` meta information as well as extract the contained `install.tar.xz` archive to a folder called `install`.

- Ensure `appstreamcli compose` is available, and install it if it's not.

  ```bash
  sudo eopkg it appstream
  ```

- Run a report against the extracted install directory.


  For general testing, the following command should be sufficient:

  ```bash
  appstreamcli compose install/ --hints-dir=hints --verbose
  ```

  For more advanced testing, such as media generation, e.g. to test font screenshots get auto-generated, run:
  
  ```bash
  appstreamcli compose install/ --hints-dir=hints --media-dir=media --media-baseurl=localhost:8000 --verbose
  ```

  - If it reports `Success!`, there is nothing to do.
  - If it reports warnings, they should be rectified if possible.
  - If it reports errors, they must be rectified so that the metainfo for that package is composed into the catalog. More details can be found in the "hints" folder.

To fix any potential warnings or errors, you can edit the metainfo file in `install/usr/share/metainfo/` then rerun `appstreamcli compose install/` to verify the issues have been rectified. A patch then can be created to be submitted to the upstream project if it provides the metainfo, which can also be applied to the Solus package repository for the corresponding package. If the upstream doesn't provide the metainfo file, then a patch should be submitted directly to the corresponding package in the Solus package repository instead.

## Debugging failures

The `appstreamcli compose` tool will normally give good hints about failures but the most common issues are:

- A `.desktop` file cannot be matched to the metainfo file.
  - By default, the `.desktop` file name must match the `<id>` provided in `.xml` file in `/usr/share/metainfo/`. For example, the if you have `<id>org.foobar.my_package</id>` the `.desktop` file should be called `org.foobar.my_package.desktop`. However, there is an exception to this if the metainfo provides a launchable tag. For example, if the metainfo contains `<launchable type="desktop-id">my_package.desktop</launchable>` then the `.desktop` file can be just called `my_package.desktop`. For more information view the upstream documentation [here](https://www.freedesktop.org/software/appstream/docs/sect-Metadata-Application.html#spec-appdata-introduction).
- No metainfo file is provided. 
  - No appstream metainfo was found in `/usr/share/metainfo/`.
  - Appstream metainfo may exist in `/usr/share/appdata/` but that path is now obsolete and is no longer read from.
- No icon found.
  - Install a icon to a directory respecting the freedesktop icon specification. For `.png` files this is `/usr/share/icons/hicolor/{size}x{size}/apps/`. Where size should be at least 64px. For `.svg` files this is `/usr/share/icons/hicolor/scalable/apps/`.
  - A icon may be too small to be accepted, it must be at least 64px. Note: that `appstream-generator` is a little more generous and allows 48px icons.

## Writing AppStream metainfo

When the upstream project does not provide any metainfo, and no alternatives exist on platforms such as FlatHub, is it recommended to write the metainfo and submit it to the upstream project. Whilst it is awaiting review upstream, it can be applied downstream to the relevant package.

There are some existing tools to help you write metainfo from scratch:

- https://www.freedesktop.org/software/appstream/metainfocreator/#/
- https://flathub.org/apps/page.codeberg.JakobDev.jdAppStreamEdit

These tools should prompt you with enough information to create valid metainfo, but to double check, you may run the validate tool provided by the `appstream` package. To validate the metainfo you've created, run `appstreamcli validate my_package_metainfo.xml`.

:::note

It is not necessary to pass all pedantic warnings, but all errors must be rectified.

:::

## Running `appstream-generator`

`appstream-generator` is a tool that supports composing a catalog against complex data sources. For our purposes, it provides a backend for Solus that understands a repository managed by `eopkg`, as well as individual `.eopkg` files themselves. Individual packagers are unlikely to need to use this tool, unless they are managing a medium to long term repository that they need an appstream catalog for.

To generate a catalog with appstream generator, a `asgen-config.json` file must be provided.

Here is a example configuration file for running against local repositories.
```json
{
    "ProjectName": "Solus",
    "ArchiveRoot": "/var/lib/solbuild",
    "MediaBaseUrl": "http://localhost:8000/export/media",
    "HtmlBaseUrl": "http://localhost:8000/export/html",
    "Backend": "solus",
    "Suites": {
        "local": {
            "sections": ["main"],
            "architectures": ["x86_64"]
        }
    }
}
```

A local repository should contain a `eopkg-index.xml` file as well as `.eopkg` files. Remember to run, `eopkg index --skip-signing` in the root of the local repository before starting to ensure the index is up to date. For the sample provided above, the eopkg index file should reside in `/var/lib/solbuild/local/eopkg-index.xml`.

To generate the catalog run `appstream-generator process local --verbose`. Depending on the size of the repository, this may take a long time; subsequent runs will take far less time.

To view the HTML report, you can start a http server with `python3 -m http.server 8000`, enter `http://localhost:8000/` in your web browser, then navigate to `export/html/`.

It can also be ran against a remote repository, here is a sample configuration.
```json
{
    "ProjectName": "Solus",
    "ArchiveRoot": "https://fastly.getsol.us/repo",
    "MediaBaseUrl": "https://appstream.getsol.us/media",
    "HtmlBaseUrl": "https://appstream.getsol.us",
    "Backend": "solus",
    "Suites": {
        "gwendraeth": {
            "sections": ["main"],
            "architectures": ["x86_64"]
        },
        "gwendraeth-updates": {
            "sections": ["main"],
            "architectures": ["x86_64"],
            "dataPriority": 10,
            "baseSuite": "gwendraeth"
        }
    }
}
```

In this example, `appstream-generator` will run against two suites which correspond to the "gwendraeth" and "gwendraeth-updates" repositories, where the index URL for "gwendraeth" would correspond to `https://fastly.getsol.us/repo/gwendraeth/eopkg-index.xml.xz`.

To generate a catalog for just gwendraeth, run `appstream-generator process gwendraeth --verbose`. To generate a catalog against gwendraeth _as well as_ any differences in the gwendraeth-updates repository, run `appstream-generator process gwendraeth-updates --verbose`. Appstream generator is smart enough to only process `.eopkg` files that are different in the "gwendraeth-updates" repository.

For more documentation, consult [upstream documentation](https://github.com/ximion/appstream-generator/tree/master/docs).
