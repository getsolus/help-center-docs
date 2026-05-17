---
title: Configuration
summary: Help for configuring GNOME Shell on Solus
---

# Configuration

## System

### Date and time

To change the date and time settings in GNOME, you can open the Overlay using the `Super` button on your keyboard or by clicking the applications icon in the dock and then finding and clicking on "Date & Time".

You will be presented with the following window. This window provides you with the ability to enable / disable automatic date & time, automatic time zone changing, and the time format.

![GNOME Date and Time](configuration/gnome-date-and-time.png)


### Default applications

With GNOME, you will need to open the Overlay using the `Super` button on your keyboard or by clicking the applications icon in the dock and then finding and clicking on "Details".

Upon entering the Details section, click on "Default Applications" and then use the drop down boxes to select a different default application for each category. For most categories, you will need to have installed alternative applications before you can change the default settings. For instance, if you wish to change the default video player from GNOME MPV to VLC then you must first install VLC (available in the Software Center).

![GNOME Default Applications](configuration/gnome-default-apps.png)

_Note: In the image above, we've changed the Web browser and Photo viewer._

You can specify default applications for individual file types by right clicking on a file and then clicking on "Open With...".

![GNOME Context Menu ](configuration/open-with-other.png)

Next, select the application you wish to use from the list. You may need to click "View All Applications" if you can't see the one you would like to use. Finish by clicking "Select". In the future, all files with the same file type will open with the same application.

![GNOME Application Selection](configuration/open-with-selection.png)

## Displays

In GNOME, You can configure your display(s) simply by right clicking anywhere on the desktop and clicking "Display Settings".

![GNOME Desktop Context Menu](configuration/right-click-desktop.png)

Alternatively, you can open the Overlay using the `Super` button on your keyboard

You will then be shown the following window.

![GNOME Displays Overview](configuration/gnome-display-settings.png)

Click on the individual display you wish to configure. You will now be able to select if you wish to use this monitor as the primary or secondary display, mirror it with another display, or turn it off. This window also gives you the size and aspect ratio, ability to rotate the display, and ability to change the resolution.

![GNOME Individual Display Settings](configuration/gnome-individual-display.png)

Going back to the Displays section, you also have the option to arrange your displays. Click the “Arrange Combined Displays” button and then drag your displays so they are arranged to your liking.

![GNOME Arrange Displays](configuration/gnome-move-display.png)

Click "Apply" once you are happy with your changes. You will be shown a message asking if the display looks OK, if it does, click on "Keep Changes" within 20 seconds.

![GNOME Confirm Display Settings](configuration/gnome-display-confirmation.png)

## Keyboard layout

With GNOME, open the Overlay using the `Super` button on your keyboard and search for "Keyboard Layout" or open the settings app and find "Keyboard" on the sidebar.

You will now be shown the following dialog.

![GNOME Region and Languages](configuration/gnome-keyboard-layout.png)

Click the `+ Add Input Source` button to add an input source (keyboard layout). You will be shown the following dialog.

![GNOME Add Input Source](configuration/gnome-select-input-source.png)

Here you can select the language and then keyboard layout within each language section. If it does not appear in this list, click the `⋮` button (three vertical dots). This will enable you to search for the keyboard layout you wish to use.

After choosing the keyboard layout, click "Done". You will be brought back to the following dialog with your new keyboard layout. In the image below, we are now using English (US), Finnish, and Swedish layout.

![GNOME Add Input Source](configuration/gnome-selected-input-source.png)

You can remove a keyboard layout by clicking on `⋮` button (three vertical dots), for instance Swedish, then clicking the `Remove` button. You can also rearrange them via click and holding the `⋮⋮` on the left side.

If you wish to use multiple keyboard layouts, you can switch between them by using the keyboard shortcut `Super + Space` or by clicking on the keyboard layout icon shown in the system tray. The icon will automatically appear when you have 2 or more keyboard layouts selected.

![GNOME Keyboard Indicator](configuration/gnome-select-lang-tray.png)

### IBus

For ease of use, GNOME has IBus up and running by default. If you need an additional IBus IME see: [IBus](/docs/user/software/localization/ibus/)

You can now switch between your layouts by using the keyboard shortcut `Super + Space` or by clicking on the keyboard layout icon shown in the system tray.

## Language

With GNOME, open the Overlay using the `Super` button on your keyboard and search for "Region & Language"

You will now be shown the following window. This window allows you to change your language, formatting for dates and times and the language of your keyboard.

![GNOME Region and Languages](configuration/gnome-region-and-language.png)

Start by clicking "Language". This brings up a selection of languages to chose from.

![GNOME Selecting Language](configuration/gnome-select-lang-popup.png)

If your language does not appear in the list, click the ⋮ button at the bottom (three vertical dots) to show all the available languages. You can use the search box to go directly to your choice or scroll down the list.

![GNOME Language Search](configuration/gnome-search-lang.png)

Once you have selected the language you wish to use, click "Done". You _may_ need to logout and login to your computer for it to take affect.

## Mouse and touchpad

With GNOME, open the Overlay using the `Super` button on your keyboard and searching for "Mouse and Touchpad"(_Alternatively you can open settings and find it there_). You will see either settings for your mouse or trackpad, depending on the device.

### Mouse

![GNOME Mouse Settings](configuration/gnome-mouse-and-touchpad.png)

For mice, you can set:

- The primary button (usually left click) to be left or right.
- Mouse speed.
- Enabling / disabling "natural scrolling" (reversed scrolling direction).
- Mouse acceleration

### Touchpad

![GNOME Touchpad Settings](configuration/gnome-touchpad-settings.png)

For touchpads, you can set:

- The primary button (usually left click) to be left or right.
- Enabling / disabling of the touchpad.
- Enabling / disabling "natural scrolling" (reversed scrolling direction).
- Touchpad speed.
- Enabling / disabling of Tap to Click.

### Pointing Stick

If you use a Lenovo ThinkPad, another section will appear where in you can change the settings of the TrackPoint (_often called a red nub_)

![GNOME TrackPoint Settings](configuration/gnome-pointing-stick.png)


### Testing

You can test your settings by clicking the "Test Your Settings" button in the top right of the window.

## Networking

Easily change network settings with GNOME by left or right clicking on the Quick Settings in the top panel and then clicking on the arrow or "All Settings" in the bottom.

![GNOME Network Indicator](configuration/gnome-wifi-top-panel.png)

Alternatively, you can open the Overlay using the `Super` button on your keyboard and searching for either "Wifi" or "Network"

### Non-hidden network

Once you have opened the "WiFi" menu, you will now see all non-hidden wifi networks in your area. Click on the network you wish to join and it will automatically ask for a password if it is protected.

![GNOME Network Selection](configuration/gnome-visible-wifi.png)

![GNOME Network Authentication](configuration/gnome-promt-wifi-pass.png)

If your password is correct, you will now be authenticated with the network.

### Hidden network

To join a hidden network, click the "Connect to Hidden Network".

![GNOME Network Overview](configuration/gnome-hidden-network.png)

It will show the following dialog, where you type the network name and type of security (if any).

![GNOME Hidden Network](configuration/gnome-connect-to-hidden.png)

If the network is found and you entered the right credentials, you will automatically connect to it.

## Sound and sound devices

With GNOME, the volume can be changed by left or right clicking the system tray in the top panel and then simply dragging the volume slider with your mouse.

![GNOME Volume Control](configuration/gnome-change-sound.png)

Alternatively, you achieve the same result by scrolling in sound icon in the Quick Settings.

![GNOME Scroll Volume](configuration/gnome-scroll-sound.png)

### Settings

You can access sound settings, including individual application volume controls, and a simple speaker test by opening the Overlay using the `Super` button on your keyboard and searching for "Sound".

![GNOME Sound Settings](configuration/gnome-sound-settings.png)

## Users

To add and remove users with GNOME, Open Settings > System > Users.
Alternatively, you can open the Overlay using the `Super` button on your keyboard and searching for "Users".  

![GNOME User Indicator](configuration/gnome-user-settings.png)

To manage your own or other accounts, you first need to authenticate. Click the "Unlock" button in the top right corner and type your password. Note that you are required to be an administrator. If you're the only user on the system, then your account is an administrator by default.

In the event the password provided is correct, the "Unlock" button will disappear and the "Add User" option will no longer be grayed out.

### Adding a user

To add a user, click the "Add User..." button in the bottom.
This will open the Add User window (shown below).

![GNOME Add User Dialog](configuration/gnome-add-user-dialog.png)

Fill in the required items and then finish adding the new user by clicking "Add" in the top right corner.

### Removing a user

To remove a user, click on the user you wish to remove. Now click on the red "Remove User..." button in the bottom right corner.

![GNOME User List](configuration/gnome-remove-user-1.png)

![GNOME User List](configuration/gnome-remove-user-2.png)

Upon clicking to remove the user, you will be given the option to keep their files, delete their files, or cancel the removal of the user’s account.

![GNOME Keep Files Prompt](configuration/gnome-keep-file-dialog.png)

## User interface

### Desktop background

The GNOME desktop background can be changed by simply right clicking anywhere on the desktop and selecting "Change background".

![GNOME Background Right Click Menu](configuration/gnome-change-background.png)

Alternatively, you can open Settings and find "Appearance" in the sidebar.

![GNOME Settings Background Section](configuration/gnome-appearance.png)

In this section, you can choose between Solus wallpapers, your own imported wallpaper by clicking add wallpaper or solid colors. 

> [!NOTE]
> Information in navigating GNOME such as Workspaces, Keyboard Shortcuts, as well Customization can be found
in [Tips and Tricks](tips-and-tricks.md)
