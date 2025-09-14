---
title: Window managers
summary: Quick guides on installing additional window managers on Solus
---

## Tiling window managers

Tiling window managers automatically arrange open application windows on your computer screen without any overlap.

### i3

Install i3 on Solus by running the following command:

```bash
# If you use Solus plasma, don't run this command
sudo eopkg install i3
```

:::tip

If you use Solus GNOME, you can use i3 with support for other GNOME functionality by selecting GNOME+i3 in the login screen.

:::

### Sway

Sway is a Wayland-only tiling window manager. To install Sway on Solus:

1. Run the following command:

   ```bash
   sudo eopkg install sway
   ```

2. Configure Sway. For more information, see the [Sway wiki](https://github.com/swaywm/sway/wiki).

## Stacking window manager

Stacking window managers allow windows to overlap like papers on a desk, giving you full control over their position and size.

### Labwc

Labwc is a Wayland-only stacking window manager. To install Labwc on Solus:

1. Run the following command:

   ```bash
   sudo eopkg install labwc
   ```

2. Configure Labwc. For more information, see the [Labwc wiki](https://labwc.github.io/).
