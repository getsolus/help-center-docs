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

- Get to a virtual terminal (TTY) with Ctrl-Alt-F3
- Run `killall firefox`, this should close all Firefox windows
- Return to your Plasma session with Ctrl-Alt-F2

You should now be able to use Plasma normally.

## Application windows look corrupt / incomplete

**Symptoms**
- Application windows look corrupt. For example, NeoChat not displaying room or user icons.
- Menus in an application are blank.

You may be able to fix this by clearing KDE / Plasma cache files.
NOTE: You should not be logged into your Plasma session while doing this. It is also highly recommended to back up the folders mentioned below before deleting anything.

- While still logged into your Plasma session, cd to your home directory, and back up the following directories:

  ```bash
  cd
  cp -av ~/.kde{,.bak}
  cp -av ~/.config{,.bak}
  cp -av ~/.local{,.bak}
  cp -av ~/share{,.bak}
  ```

- Log out of Plasma. Boot from a live USB, such as one of the Solus live environments.
- Mount your hard drive's system. For instructions on how to do this see [Mounting your system](https://help.getsol.us/docs/user/troubleshooting/boot-rescue#mounting-your-system)

- Change to your user's directory where you mounted your system. In this example, your system has been mounted to `/mount`:

  ```bash
  cd /mount/home/username
  ```

- Run the following from your home directory that you just switched to:

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
Reboot back into your regular Plasma session. Check the application to see if it looks OK now.
