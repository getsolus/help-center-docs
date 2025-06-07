---
title: Desktop environments
summary: Quick guides on switching between or installing additional desktop environments on Solus
---

Solus offers multiple [desktop environments](https://getsol.us/solus/experiences/): From the feature-rich and modern Budgie to the traditional Xfce experience. 

For the best experience, use the Solus ISO of your preferred desktop environment. You can install additional desktop environments later if you want to experiment with different options.

:::danger[Warning]

If you use Solus Plasma, do not install any other desktop environments. This configuration is not supported and might cause system instability.

We don't offer assistance for this configuration.

:::

## Budgie

Solus's flagship desktop experience. If you use Solus GNOME or Solus Xfce, you can test Budgie by running the following command:

```bash
# If you use Solus plasma, don't run this command
sudo eopkg install -c desktop.budgie
```

## GNOME

Solus GNOME offers includes a variety of extensions installed by default. If you use Solus Budgie or Solus Xfce, you can test GNOME by running the following command:

```bash
# If you use Solus plasma, don't run this command
sudo eopkg install gdm gnome-shell gnome-desktop-branding gnome-control-center
```

## Xfce

Solus Xfce offers a fast and lightweight desktop experience. If you use Solus GNOME, Solus MATE, or Solus Budgie, you can test XFCE by running the following command:

```bash
# If you use Solus plasma, don't run this command
sudo eopkg install -c desktop.xfce
```

## MATE

:::warning[Important]

Solus MATE is deprecated. For a fast and lightweight desktop experience, use Solus Xfce.

:::