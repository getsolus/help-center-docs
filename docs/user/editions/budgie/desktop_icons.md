---
title: Desktop Icons
summary: Switching to Nemo desktop icons
---

# Desktop Icons

Budgie supports a few different desktop icons implementations: Budgie Desktop View, Nemo, and DesktopFolder.

As of Solus 4.3, desktop icons are provided by Budgie Desktop View, a barebones implementation created after desktop icon support was removed from Nautilus. Now that Nemo is available in the Solus package repository, users have the option to switch from Budgie Desktop View to Nemo for desktop icons. Using Nemo's implementation will be the default for Solus 4.5 and on for new installations.

## Switching to Nemo

If you don't want to wait and would like to use Nemo for your desktop icons now, heres how you can:

1. In Budgie Desktop Settings, go to the Desktop page on the left and turn off desktop icons, just in case.
2. Create a file in `~/.config/autostart` named `org.nemo-desktop.desktop`, and into it paste the following:
```
[Desktop Entry]
Type=Application
Name=Nemo
Comment=Start Nemo desktop at log in
Exec=nemo-desktop
OnlyShowIn=Budgie;
AutostartCondition=GSettings org.nemo.desktop show-desktop-icons
X-GNOME-AutoRestart=true
NoDisplay=true
```
3. Run this in a terminal (or set it via Dconf Editor) to tell Budgie to use Nemo for the desktop view: `gsettings set com.solus-project.budgie-wm desktop-type-override nemo`
4. Uninstall budgie-desktop-view
5. Log out and back in
6. Turn Desktop Icons back on in Budgie Desktop Settings if they aren't already enabled.

Make sure you have the package `budgie-desktop-branding-fortitude-plus` installed as well. It contains a few settings overrides to make Nemo Desktop work with conky, Showtime, and desktop_weather.

If you followed these steps, you should now be using Nemo's desktop icons! Yay!