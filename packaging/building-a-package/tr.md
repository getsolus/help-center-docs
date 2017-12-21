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

### solbuild güncelleniyor

Temel imajı güncel tutmak iyi bir fikirdir; temel imajdaki paketler için tekrar tekrar güncellemeleri indirmenize gerek kalmadan inşa sürelerinin kısalmasına yardımcı olur ve kesinlikle kurulum ihtiyaçlarınıza göre de paketleri indirmeniz gerekir. 

Solbuild'i güncellemek için şunu çalıştırın: `sudo solbuild update`

## Ortak ayarlamalar

Sonra, paketleri daha kolay yönetmenizi, kurmanızı, kontrol etmenizi ve yayınlamanızı sağlayan bir dizi make komut seti olan `common` ile ortak ayarlarlamalar yapılmalıdır.

`git clone https://dev.solus-project.com/source/common.git` yaparak ortak depoyu git ile kopyalamalısınız. Aynı dizinde, oluşturduğunuz paketler için alt klasörlere sahip olacaksınız

Ardından, sembolik bağları kurmanız gerekir. Bunu `git` komutunu çalıştırdığınız dizinden yapın:

``` bash
ln -sv common/Makefile.common .
ln -sv common/Makefile.toplevel Makefile
ln -sv common/Makefile.iso .
```
Sonra, oluşturduğunuz **paket** **klasörünün** içinde şunu çalıştırın: `echo" include ../Makefile.common "> Makefile`

Bu, `make` komutlarını paket klasöründen çağırmanızı sağlayacaktır.

Klasörünüz şuna benzer bir şey olmalı:

```
| common/
| your-package/
| - Makefile
| Makefile
| Makefile.common
| Makefile.iso
```

## Paketlerin İnşaası (Solus için)

Ortak ayarlamaları yaptıktan sonra şimdi paketi inşa edebilirsiniz. İnşa bağımlılıklarının ve benzerlerinin yerel olarak (chroot ortamında) kurulacağına dikkat edin.

``` bash
make
```

Parolanızı sudo ile girmeniz istenir, böylece bağımlılıklar indirilebilir ve gerekli eopkg dosyaları oluşturulabilir.

Diğer "ortak" komutları [burada] (https://dev.solus-project.com/source/common/browse/master/about/) bulabilirsiniz.

Başarılı bir yapıya kavuştuğunuzda, çıkan `.eopkg` dosyaları, `pspec_*.xml` makine dosyası (şu anda `pspec_x86_64.xml`) ile birlikte geçerli dizine taşınacaktır.

Her şeyin uygun yerlerde olduğundan emin olmak için, üretilen eopkg dosyalarınızın içeriğini kontrol etmenizi öneririz. Bunu `eopkg ls paket_adı.eopkg` kullanarak yapabilirsiniz.
