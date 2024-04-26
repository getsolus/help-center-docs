---
title: Monitoring YAML
summary: The purpose and format of monitoring.yml
---

# `monitoring.yml`

:::important

A `monitoring.yml` file is not yet required for Solus packages.

:::

A `monitoring.yml` file is included in the Packages repository directory for every Solus package to enable automatic scanning for new releases and security advisories.

Checking for new releases is done by mapping the Solus package to an [Anitya](https://github.com/fedora-infra/anitya) ID. _Anitya_ is a Red Hat project, part of [release-monitoring.org](https://release-monitoring.org/)

Checking for security advisories ([CVEs](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures)), is done by mapping the Solus package to a _Common Platform Enumeration Name_ ([CPE](https://nvd.nist.gov/products/cpe)) from the National Vulnerability Database.

## Adding monitoring.yml to an existing package

To add a monitoring.yml file to an existing package you can use the following `go-task` command to add a template file, starting from within the directory containing the `package.yml` for a given package:

```bash
go-task add-monitoring
```

Which will create a file with the following contents:

```yaml
releases:
  id: null # Check https://release-monitoring.org/
  rss: null # For example https://github.com/PyO3/maturin/releases.atom
# No known CPE, checked 2024-04-24
security:
  cpe: ~
```

You must, at minimum, fill out `id` and check if the package has a CPE name. `rss` should be deleted if no feed is available.

## systemd as an example

Let's look at the `monitoring.yml` file for `systemd` as an example.

The `systemd` directory in the Packages repository looks like this:

```text
systemd
├── monitoring.yml
├── package.yml
├── pspec_x86_64.xml
└── *lots of other files we can ignore*
```

The `monitoring.yml` looks like this:

```yaml
releases:
  id: 205088
  ignore:
    # We only update to the n-1 stable release. So for now we're only interested in 252.x updates
    - "253.*"
  rss: https://github.com/systemd/systemd-stable/tags.atom
security:
  cpe:
    - vendor: systemd_project
      product: systemd
    - vendor: freedesktop
      product: systemd
  ignore:
    # A non-existent CVE added here as an example
    - CVE-2022-55555
```

## "releases" fields

Fields used to monitor for new versions.

| Field    | Type                        | Required ?              | Description                                                                                                                                                                                                                                              |
| -------- | --------------------------- | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`     | integer                     | Yes                     | Anitya ID from [release-monitoring.org](https://release-monitoring.org/)                                                                                                                                                                                 |
| `ignore` | list of regular expressions | No                      | List of regular expressions enclosed in quotes matching versions to ignore. Include a comment explaining the ignored versions.                                                                                                                           |
| `rss`    | URL                         | No, strongly encouraged | URL for a releases RSS feed. If the only RSS feed you can find for a project is a general "news" feed, don't include the field. For GitHub projects, You can use the "tags" or "releases" feed: `https://github.com/USER/REPOSITORY/tagsORreleases.atom` |

### Finding the Anitya ID

To find the Anitya ID, search [release-monitoring.org](https://release-monitoring.org/) by project name, then take the ID out of the URL for the correct search result.

For example, the correct `systemd` search result for us is `systemd-stable` with the URL [https://release-monitoring.org/project/205088/](https://release-monitoring.org/project/205088/), so we use `205088` in the `id` field

If a project is not tracked by release-monitoring.org, you can create an account and [add it.](https://release-monitoring.org/static/docs/user-guide.html#creating-new-project)

## "security" fields

Fields used to monitor for security advisories (CVEs)

| Field    | Type            | Required ? | Description                                                                                                                                                                                               |
| -------- | --------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cpe`    | list            | Yes        | List of `vendor:product` pairs from a full CPE name. CVEs for a given project may be published under more than one CPE; include more than one if that is likely.                                          |
| `ignore` | list of strings | No         | List of specific CVE identifiers which can be ignored, including a comment explaining why each CVE was ignored. As an example, a CVE can be ignored if the Solus package includes a patch fixing the CVE. |

### What is a CPE Name?

A [CPE Name](https://en.wikipedia.org/wiki/Common_Platform_Enumeration) is a structured naming scheme for information technology systems, primarily used to search for CVEs.

CPE names contain redundant information we can ignore, we are only interested in the vendor and the product.

For example, `cpe:2.3:a:systemd_project:systemd` is the CPE for the _vendor_ `systemd_project`, and the _product_ `systemd`.

### Finding the CPE Name

The easiest way to search for CPE Names is with the following command; replacing `systemd` with your search term:

```bash
curl -s -X POST https://cpe-guesser.cve-search.org/search -d "{\"query\": [\"systemd\"]}" | jq .
```

Note this command uses the `jq` tool, which you may not have installed:

```bash
sudo eopkg it jq
```

If you have our [helper functions](/docs/packaging/prepare-for-packaging#set-up-repository-helper-functions-optional) installed, you can use the following command:

```bash
cpesearch systemd
```

:::tip

Convert your search term to lower case and try variations on the search term if you get no results. The CPE search is not a "fuzzy" search.

:::

The command returns the following:

```text
[
  [
    49192,
    "cpe:2.3:a:ubuntu_developers:systemd"
  ],
  [
    116392,
    "cpe:2.3:a:lennart_poettering:systemd"
  ],
  [
    120506,
    "cpe:2.3:a:freedesktop:systemd"
  ],
  [
    120627,
    "cpe:2.3:a:systemd_project:systemd"
  ]
]
```

Ignore the numerical ids, let's walk through the CPEs by vendor:

- `ubuntu_developers` is for `systemd` patched by Ubuntu; we can ignore it
- `lennart_poettering` is for the main `systemd` developer and is probably a bleeding edge vendor; ignore it
- `freedesktop` is from freedesktop.org and is a good candidate, so we add it
- `systemd_project` is a good candidate, so we add it

### No known CPE

If an established product hasn't had a security advisory in the past, it might not have a CPE.

In that case, include an empty `security` and `cpe` field with a comment in the following format:

```yaml
# No known CPE, checked 20240123
security:
  cpe: ~
```

:::tip

If you are unsure of what to do in this case, feel free to ask in the Solus Packaging Matrix room.

:::
