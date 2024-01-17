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

You may not need to reboot to recover from this state. Killing all firefox processes may be all that's necessary. To do so:

1. Open a virtual terminal by pressing `Ctrl+Alt+F3`.
2. Run the following to kill all firefox windows:
  ```bash
  killall firefox
  ```
  This should close all Firefox windows.
3. Return to the Plasma session by pressing `Ctrl-Alt-F2`.

  You should now be able to use Plasma normally.

## Application windows look corrupt / incomplete

**Symptoms**
- Application windows look corrupt. For example, NeoChat does not display room or user icons.
- Menus in an application are blank.

You may be able to fix this by clearing KDE / Plasma cache files, by following the steps below.

:::caution

You should not be logged into your Plasma session while doing this. It is also highly recommended to back up the folders mentioned below before deleting anything.

:::

1. While still logged into your Plasma session, cd to your home directory:

  ```bash
  cd
  ```

2. Run these commands to back up the following directories:

  ```bash
  cp -av ~/.kde{,.bak}
  cp -av ~/.config{,.bak}
  cp -av ~/.local{,.bak}
  cp -av ~/share{,.bak}
  ```

  The output will show what files were copied. Each directory will have another copy with a .bak extension such as `~/.config.bak`. These can be used to recover configuration files, if necessary.

2. Shut down the system. Boot from a live USB, such as one of the Solus live environments.
3. Mount your hard drive's system. For instructions on how to do this see [Mounting your system](/docs/user/troubleshooting/boot-rescue#mounting-your-system).
4. Change to your user's directory where you mounted your system. In this example, your system has been mounted to `/mount`:

  ```bash
  cd /mount/home/username
  ```

  Replace "username" with the username you use for Solus.
  You can make sure the directory is correct by listing the files:

  ```bash
  ls -laH
  ```

  You should see the files you would usually see in your home directory when logged into Solus normally.

5. Now you need to remove the various caches that Plasma uses.

  Run the following from your home directory that you just switched to:

  ```bash
  rm -rf .kde
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
6. Shut down the live environment and remove the live USB drive.
7. Reboot back into your regular Plasma session. Check the application to see if it looks OK now.
8. It should not be necessary to recover the cache files that were deleted. If you need to, you can recover a file by copying it from the backup directory to the actual directory.

  For example, to recover the file `.kde/share/config/kdeglobals`:
  ```
  cp -av .kde.bak/share/config/kdeglobals .kde/share/config/kdeglobals
  ```
  To restore an entire directory:
  ```
  cp -rav .kde.bak/share/config/ .kde/share/config
  ```
  After restoring the file(s) or directories, log out of Plasma and log back in.