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

## Adding appstream metainfo to an existing package

There are a few scenarios that Packagers might encounter:

| No  | Scenario                                                                                         | Solution                                                                                                                                                                                                                     |
| --- | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | An application already provides appstream metainfo                                               | Nothing to do                                                                                                                                                                                                                |
| 2   | An application contains appstream metainfo in the source package but we do not install it        | Install the appstream metainfo to `/usr/share/metainfo`. _Example_: [here](https://github.com/getsolus/packages/commit/0a726a53454e7c8a6b0e66de69d59bcc66f0fc19)                                                             |
| 3   | An application doesn't contain appstream metainfo in the source package but it exists on Flathub | Borrow and tweak the appstream metainfo from the Flathub repo. Encourage upstream project to add it to their source. _Example_: [here](https://github.com/getsolus/packages/commit/da2f65b93f412da43d1db9edbcb08bb90517a0eb) |
| 4   | An application doesn't provide appstream metainfo and it doesn't exist on flathub                | Write the appstream metadata, submit it to upstream project. _Example_: [here](https://github.com/getsolus/packages/commit/414219d8b2ceeabe85178d3a467f81b9131016f4)                                                         |
| 5   | Appstream metainfo is provided but generation of it is failing                                   | See [here](#testing-appstream-metainfo). _Example_: [here](https://github.com/getsolus/packages/commit/583b7c742caf50e2f66a70e9b62e9b91566c03f5).                                    |

AppStream metainfo is to be installed in the `/usr/share/metainfo/` directory. It must be placed in the package which should be installed in order to get the software described by the respective metadata. This means that you might need to move the _.metainfo.xml or _.appdata.xml to the right (sub)package.

In case your AppStream metainfo is describing a desktop application (you can tell by the XML root-node having a type="desktop-application" or type="desktop" attribute), the .appdata.xml file must be placed in the same package as the .desktop file already is, which (as above) must be the package containing the application itself.

## Testing appstream metainfo

- Clone the package repo

- Build it or eopkg fetch pkgname e.g. `eopkg fetch sunshine`.

- Extract the package e.g. `uneopkg sunshine-0.23.1-15-1-x86_64.eopkg`. This will unzip the `.eopkg` file containing the `metainfo.xml` and `files.xml` meta information as well as extract the contained `install.tar.xz` archive to a folder called `install`.

- Ensure `appstream compose` is available and install it if it's not `sudo eopkg it appstream`.

- Run a report against the extracted install directory `appstream compose install/ --verbose`. To test media generation run `appstreamcli compose install/ --media-dir=media --media-baseurl=localhost:8000 --verbose` e.g. for auto-generated font screenshots.
  - If it reports `Success!` there is nothing to do.
  - If it reports warnings they should be rectified if possible.
  - If it reports errors they should definitely be rectified so that the appstream for that package is composed into the catalog.

To fix any potential warnings or errors you can edit the metainfo file in `install/usr/share/metainfo/` then rerun `appstream compose install/` to verify the issues have been rectified. A patch then can be created to be submitted to the upstream project if it provides the metainfo then that patch can also be applied to the solus monorepo for the corresponding package. If the upstream doesn't provide the metainfo file then a patch should be submitted directly to the corresponding package in the solus monorepo instead.

## Other Info

A package must provide one appstream metainfo file, an icon file and a .desktop file for AppStream generation to succeed. However, there are exceptions to this. If an application provides more than one AppStream metainfo file then the package must be subpackaged for generation of all the appstream metainfo files to succeed.

## Debugging Failures

The `appstreamcli compose` tool will normally give good hints about failures but the most common issues are:

- A `.desktop` file cannot be matched to the metainfo file.
  - By default, the `.desktop` file name must match the `<id>` provided in `.xml` file in `/usr/share/metainfo/`. For example, the if you have `<id>org.foobar.mypackage</id>` the `.desktop` file should
    be called `org.foobar.mypackage.desktop`. However, there is an exception to this if the metainfo provides a launchable tag. For example, if the metainfo contains `<launchable type="desktop-id">mypackage.desktop</launchable>` then the `.desktop` file can be just called `mypackage.desktop`. For more information view the upstream documentation [here](https://www.freedesktop.org/software/appstream/docs/sect-Metadata-Application.html#spec-appdata-introduction)

## Running `appstream-generator`

`appstream-generator` is a tool that supports composing a catalog against complex data sources. For our purposes, it provides a backend for Solus that understands a repository managed by `eopkg` as well as individual `.eopkg` files themselves. Individual packagers should be unlikely to need to use this tool unless they are managing a medium to long term repository that they need appstream data for.

To generate a catalog with appstream generator a `asgen-config.json` file must be provided.

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

A local repository should contain a `eopkg-index.xml` file as well as `.eopkg` files. Remember to run, `eopkg index --skip-signing` in the root of the local repository before starting to ensure the index is up to date. In the sample provided above the eopkg index file should reside in `/var/lib/solbuild/local/eopkg-index.xml`.

To generate the catalog run `appstream-generator process local --verbose`. Depending on the size of the repository this may take a long time, subsequent runs will take far less time
as the packages are held in a database and cached.

To view the HTML report you can start a http server with `python3 -m http.server 8000`, enter `http://localhost:8000/` in your web browser, then navigate to `export/html/`.

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
            "architectures": ["x86_64"]
            "dataPriority": 10,
            "baseSuite": "gwendraeth"
        }
    }
}
```

In this example appstream-generator will run against two suites which correspond to the "gwendraeth" and "gwendraeth-updates" repositories. Where the index URL for "gwendraeth" would correspond to `https://fastly.getsol.us/repo/gwendraeth/eopkg-index.xml.xz` in this example.

To generate a catalog for just gwendraeth run `appstream-generator process gwendraeth --verbose`. To generate a catalog against gwendraeth _as well as_ any differences in the gwendraeth-updates repository run `appstream-generator process gwendraeth-updates --verbose`. Appstream generator is smart enough to only process `.eopkg` files that are different in the "gwendraeth-updates" repository in this case.

For more documentation consult [upstream](https://github.com/ximion/appstream-generator/tree/master/docs).
