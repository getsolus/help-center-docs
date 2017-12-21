+++
title = "Bir Paket Oluşturma"
lastmod = "2017-05-14T10:49:10+03:00"
+++
# Bir Paket Oluşturma

Bu kılavuz size dosya (lar), araç oluşturma ve paket oluşturma konularında size yol gösterecektir.

## Paketleyici dosyasını ayarlama

Yapım sistemini kullanmak için öncelikle paketleyici ayrıntılarınızı içeren bir yapılandırma dosyası oluşturmalısınız.

Bu dosya ev dizininizin `.solus` klasöründe bulunur. `.solus` klasörünü ve `packager` dosyasını oluşturmanız gerekecektir. Paketleyici dosyasının içinde, `Name` ve `Email` olmak üzere iki tanıma ihtiyacınız var. Bu tanımlar, paketleyici ayrıntılarının elde edilen ikili paketin içinde saklanması için makine dosyası üretilirken kullanılır.

``` ini
[Packager]
Name= Adınız
Email= e-Posta Adresiniz
```

## Solbuild kullanımı

`Solbuild` aracı başlangıçta bir temel imajla başlatılmalıdır. Bundan sonra yapılan tüm derlemeler bunu bir temel olarak kullanacak ve derlemeler için zaman ve disk alanı kazanmak için geçici bir yer paylaşımı kökü oluşturacaktır.

### solbuild başlatılıyor

Önce system.devel bileşenini çağırarak kurun: `sudo eopkg it -c system.devel`

Sonra, kendisini `sudo eopkg it solbuild` ile kurun. Eğer `unstable` repoya dayalı bir yapı inşa ediyorsanız, ayrıca `solbuild-config-unstable` ı kurun.

Sonra, solbuild'i `sudo solbuild init` vasıtasıyla başlatmanız gerekir

İmajı indirirken ve hazırlarken biraz zaman alacaktır. Kökünü yarı düzenli olarak güncellemek iyi bir fikirdir, aksi takdirde güncellemeler her yapı üzerine uygulanacaktır.

### Updating solbuild

It is a good idea to keep the base image updated. It will help reduce build times by not having to repeatedly download updates to packages in the base image, and will strictly need to pull down the packages your build needs.

To update solbuild, run: `sudo solbuild update`

## Setting up common

Next you need to set up `common`, a set of make scripts that enables you to more easily manage, build, check, and publish packages.

You need to clone the common repository with git `sudo eopkg it git` by doing `git clone https://dev.solus-project.com/source/common.git` in the same directory you will have sub-folders for packages you are building.

Next you need to set up symlinks. Do this from the same directory you executed the `git` command:

``` bash
ln -sv common/Makefile.common .
ln -sv common/Makefile.toplevel Makefile
ln -sv common/Makefile.iso .
```

Next, inside the **folder** of the **package** you are building, run: `echo "include ../Makefile.common" > Makefile`

This will enable you to call `make` commands from inside the package folder.

Your folder should look something similar to this:

```
| common/
| your-package/
| - Makefile
| Makefile
| Makefile.common
| Makefile.iso
```

## Building packages (Solus only)

After setting up common, you can now build the package. Note that build dependencies and such will be installed locally (in the chroot environment).

``` bash
make
```

You will be prompted to enter your password by sudo so dependencies may be downloaded and the necessary eopkg files may be generated.

You may find other `common` commands [here](https://dev.solus-project.com/source/common/browse/master/about/).

Once you’ve achieved a successful build, the resulting `.eopkg` files will be moved to the current directory, along with the machine file, `pspec_*.xml` (currently `pspec_x86_64.xml`). We recommending checking the contents of your 
generated eopkg file(s) to ensure everything is located in the appropriate locations. You can do this by using `lseopkg file_name.eopkg`.
