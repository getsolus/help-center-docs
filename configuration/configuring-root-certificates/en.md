+++
title = "Configuring Root Certificates"
lastmod = "2022-06-10T14:22:00-06:00"
+++
# Configuring Root Certificates

Manage local SSL/TLS Certificate Authority (CA) certificates with any of the desktop environments supported by Solus.

## Public vs. Local Certificates

Public SSL certificates are included in Solus system packages and are regularly updated with normal package updates.

There are many reasons you may want to install a certificate that is custom, self-signed, or provided by your local systems administrator.

The topic of SSL and TLS certificates for protecting network resources is a deep and complex topic. Many great resources are publicly available for fundamental usage and workflows. This article will describe the default utilities and NSS database location in Solus.

## Basic Requirements

This article assumes basic familiarity with using the command line. 

A web browser and desktop environment like Budgie can be very useful in testing a certificate served for a network resource.

The creation and validation of a certificate is outside the scope of this article and you must already have a signed certificate. 

These instructions assume usage for secure network connections on the internet or corporate networks, but may also be used for other purposes like signing e-mail.   

{{< altimg "network-overview.jpg" "help-center/configuration/configuring-network/" >}}

WARNING: You must trust the source of any certificate to be installed. Using an insecure or otherwise compromised certificate is a critical security risk.

## The NSS Database

Solus utilizes Network Security Service(NSS) for managing digital certificates. Each system user account will have a user NSS database located at `$HOME/.pki/nssdb`.   

The `certutil` utility is installed by default and can be verified with `which certutil`. We will be operating on the logged-in user's NSSDB, without need for Root permissions. A summary of options can be shown with `--syntax`, and `-H` will show a complete list of option descriptions.

### List Database Entities

`$ certutil -d sql:$HOME/.pki/nssdb -L`

#### Example Output

This example shows an existing self-signed, trusted CA certificate as described by the SSL Trust Attribute `C`.

```
Certificate Nickname                                         Trust Attributes
                                                             SSL,S/MIME,JAR/XPI

mynew-Root-CA                                                C,,
```

### Add a Certificate

`$ certutil -d sql:$HOME/.pki/nssdb -A -t "P,," -n <cert-name> -i <path_to_crt_file>`

#### Example Output

```
$ certutil -d sql:$HOME/.pki/nssdb -A -t "C,," -n mynew-Root-CA -i mynew-Root-CA.CRT
$ certuilt -d sql:$HOME/.pki/nssdb -L
Certificate Nickname                                         Trust Attributes
                                                             SSL,S/MIME,JAR/XPI

mynew-Root-CA                                                C,,
```

### Validate the Certificate

`$ certutil -d sql:$HOME/.pki/nssdb -V -u <certusage> -n <cert_name>`

#### Example Output

In this example, we specify the usage context with the `-u` option to "Verify CA" `Y`.

```
$ certutil -d sql:$HOME/.pki/nssdb -V -n mynew-Root-CA -u Y
certutil: certificate is valid
```

In this example, we try to validate the Root/CA certificate in the SSL client usage context.

```
$ certutil -d sql:$HOME/.pki/nssdb -V -n mynew-Root-CA -u C
certutil: certificate is invalid: Certificate key usage inadequate for attempted operation.
```

### Using a Certificate

Some client applications will need to be restarted to use the new CA certificate. Valid SSL or TLS host/service certificates including a signature with the newly installed CA/Root certificate can now be validated and inspected. Web browsers provide utilities for certificate inspection, often with a status icon in the URL bar. 

A command line method of inspecting a certificate: `curl https://protected.resource.uri -vI --stderr -`

### Deleting a Certificate in the Database

`$ certutil -d sql:$HOME/.pki/nssdb -D -n <cert-name>`

#### Example Output

```
$ certuilt -d sql:$HOME/.pki/nssdb -L
Certificate Nickname                                         Trust Attributes
                                                             SSL,S/MIME,JAR/XPI
```

## Advanced Topics

### Certificate Types

SSL/TLS and SSH certificates are separate and unique concepts with distinct use-cases. This article did not provide details on hosting or serving network resources with a non-public certificate, as most implementations are service dependent (eg: Apache vs MongoDB) and are generally independent from Solus' Public/Private Key Infrastructure (PKI).

Read the certutil help documentation for more details on the available types of certificates that can be managed this way.

### Self-signed Certificate Alternatives

If your goal is to simply conform with modern browser security standards for local resources, for example in a home lab, free certificate services are publicly available that can integrate with many services that will greatly simplify the certificate management process. No matter what certificate management method is used, there are trade-offs that must be considered and great caution is recommended before presenting resources to unsafe networks like the internet. Issues like expired certificates have impacted major internet services, and can prevent access to critical services or resources. 

### Installing CA Certificates in the Browser

It may be possible to install a CA certificate into a web browser directly. This will not allow other clients access to the certificate and many types of certificates can not be installed this way and will result in a confusing message like "This certificate is already installed as a certificate authority", although no certificate has been installed.
