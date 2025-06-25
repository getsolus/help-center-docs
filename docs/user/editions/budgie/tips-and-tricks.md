---
title: Tips and Tricks
summary: Tips and Tricks for Budgie users
---

# Tips and Tricks

## Budgie Shortcuts

Budgie provides multiple shortcuts to make navigating around Budgie faster and easier.

| Keyboard Shortcut                  | Action                                                     |
| ---------------------------------- | ---------------------------------------------------------- |
| Alt + F2                           | Open Budgie Run dialog                                     |
| Alt + F4                           | Kill the active window on the desktop                      |
| Alt + Tab                          | Open application switcher overlay                          |
| Shift + Alt + Tab                  | Open application switcher, switch to previous applications |
| Super (_also Super + S_)           | Open Budgie Menu                                           |
| Super + A                          | Open Applets section of Raven                              |
| Super + L                          | Lock the screen                                            |
| Super + N                          | Open Notifications section of Raven                        |
| Super + Space (_also Alt + Shift_) | Switch keyboard layouts                                    |

## Restoring Panel Defaults

To restore Budgie's default panel settings, run the command below

```bash
budgie-panel --reset --replace &
```

After this you can press CTRL + D to close the terminal without closing the Budgie Panel process.

## Enable Numlock at Login

At the login screen on boot, numlock might not be enabled even if set in your BIOS / UEFI.

To change this, you will need the `numlockx` and `lightdm-settings` packages:

```
sudo eopkg it numlockx lightdm-settings && sudo lightdm-settings
```

Numlock can then be enabled or disabled via a toggle switch on the _Settings_ tab:

![image](https://github.com/user-attachments/assets/d613d863-9e83-47d2-830f-38d3cacba9b7)

**Note:** in the Budgie Menu, you can find `lightdm-settings` as System Tools > Login Window.

----------

> TODO: There's got to be more that we can add here
