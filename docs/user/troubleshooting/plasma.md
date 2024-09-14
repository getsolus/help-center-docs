---
title: Plasma Troubleshooting
summary: Troubleshooting Issues With the Plasma Desktop
---

# Plasma Desktop Troubleshooting

This contains fixes for various issues you might encounter with the Plasma desktop environment.

## Desktop no longer responds to clicks, cursor stuck in "move" mode (cross)

This is often caused by a Firefox bug. It can be triggered by various things, like moving Firefox windows.

**Symptoms:**

- Can't click on anything on the desktop.
- Bringing up windows with keyboard shortcuts (ex: Super for the app menu, F9 for a drop down terminal) works, but they don't get focused. You can't interact with them.
- Mouse cursor is stuck in move mode, it looks like a cross.

You may not need to reboot to recover from this state. Killing all `firefox` processes may be all that's necessary. To do so:

1. Open a virtual terminal by pressing `Ctrl+Alt+F3`.
1. Run the following to kill all `firefox` windows:

```bash
killall firefox
```

This should close all Firefox windows.

1. Return to the Plasma session by pressing `Ctrl+Alt+F2`.
   You should now be able to use Plasma normally.

## Application windows look corrupt / incomplete

**Symptoms**

- Application windows look corrupt. For example, NeoChat does not display room or user icons.
- Menus in an application are blank.

You may be able to fix this by clearing KDE / Plasma cache files.

:::caution Important

You should not be logged into your Plasma session while deleting the cache files, booting from a live USB is necessary.

:::

1. While still logged into your Plasma session, go to your home directory:

```bash
cd
```

1. Run these commands to back up the following directories:

```bash
cp -av ~/.kde{,.bak}
cp -av ~/.config{,.bak}
cp -av ~/.local{,.bak}
cp -av ~/share{,.bak}
```

The commands create a copy of the folders. Each copy has the `.bak` extension (Example: `~/.config.bak`). These can be used to recover configuration files, if necessary.

1. Shut down the system.
1. Boot from a live USB, which you can create from one of the [Solus installers](https://getsol.us/download/).
1. [Mount your hard drive's file system](./boot-rescue.md#mounting-your-system).
1. Change to your user's directory where you mounted your file system. For example, if you used `/mount`:

```bash
cd /mount/home/username
```

Replace "username" with the username you use for Solus.
You can make sure the directory is correct by listing the files:

```bash
ls -laH
```

You should see the files you would usually see in your home directory when logged into Solus normally.

:::caution Important

Avoid deleting the following directories: `~/.kde`, `~/.kde4`, `~/.local`, and `~/.config`

:::

1. Remove the various caches that Plasma uses.
   Execute the following commands:

```bash
rm -rf .cache/plasmashell*
rm -rf .cache/org.kde.dirmodel-qml.kcache
rm -rf .cache/kioexec/ .cache/krunner/ .cache/ksycoca5*
rm -rf .cache/krunnerbookmarkrunnerfirefoxdbfile.sqlite

cd ../.local/
rm -rf kate/ kded5/ klipper/ knewstuff3/ kscreen/ konsole/ kwalletd/ ksysguard/ kmail2/ kcookiejar/ kactivitymanagerd/

cd ../share/
rm -rf dolphin kate kcookiejar kded5 keyrings klipper kmail2 knewstuff3 konsole kscreen ksysguard kwalletd kxmlgui5 plasma_engine_comic plasma plasma_notes org.kde.gwenview

cd ../.config/
rm -f plasma*
rm -rf kde* akonadi* KDE kconf_updaterc baloo* dolphinrc drkonqirc gwenviewrc kmail2rc k*rc katemetainfos
```

1. Shut down the live environment and remove the live USB drive.
1. Reboot back into your regular Plasma session. Verify the issue is fixed.
1. If you experience system instability, restore the previously backed up folders.

To restore an entire directory:

```
cp -rav .kde.bak/share/config/ .kde/share/config
```

After restoring the files or directories, restart your system.
