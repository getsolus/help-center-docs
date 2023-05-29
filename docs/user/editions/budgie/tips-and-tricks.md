---
title: Tips and Tricks
summary: Tips and Tricks for Budgie users
---

# Tips and Tricks

## Budgie Shortcuts

Budgie provides multiple shortcuts to make navigating around Budgie faster and easier.

Keyboard Shortcut | Action
----- | -----
Alt + F2 | Open Budgie Run dialog
Alt + F4 | Kill the active window on the desktop
Alt + Tab | Open application switcher overlay
Shift + Alt + Tab | Open application switcher, switch to previous applications
Super | Open Budgie Menu
Super + A | Open Applets section of Raven
Super + L | Lock the screen
Super + N | Open Notifications section of Raven
Super + Space (*also Alt + Shift*) | Switch keyboard layouts
Super + Shift + P | Open Power Dialog

## Panel Applets

Panel applets can be managed in Budgie Desktop Settings by clicking on the panel you wish to manage in the menu on the left. From this page, you can rearrange the applets that are currently running, remove applets from the panel, or add installed applets to the panel. Some applets have settings that you can also configure from this page by clicking on an applet in the list.

Extra applets are available in the Solus package repository.

## Raven Widgets

Budgie 10.7 introduced Raven widgets. These are very similar to panel applets, but in Raven. The same options that you have with panel applets also exist for Raven widgets. Open Budgie Desktop Settings and click the Raven tab on the left to configure your Raven widgets.

## Restoring Panel Defaults

To restore Budgie's default panel settings, run the command below

```bash
budgie-panel --reset --replace &
```

After this you can press CTRL + D to close the terminal without closing the Budgie Panel process.
