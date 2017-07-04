+++
title = "Taking a Screenshot"
+++
# Taking a Screenshot

From keyboard shortcuts to graphical interfaces, Solus provides multiple ways for taking a screenshot.

Taking a screenshot can be made even easier by choosing your own shortcuts or it can be made more interactive by using special applets and applications to target specific screen areas or to include the pointer and borders.

## Budgie

To take a screenshot in Budgie, the user has the option of using the Screenshot Widget applet, creating a keyboard shortcut or by using the GNOME Screenshot application.

### Screenshot Widget

The Screenshot Widget needs to be installed and added to your panel before it can be used.  Start by opening the Software Center and then search for `budgie-screenshot-applet`.  Click the "Install" button and input your user password to authenticate the installation.

{{< altimg "budgie-software-center-screenshot-applet.jpg" "help-center/common-tasks/taking-a-screenshot/" >}}

To add the Screenshot Widget to your panel, open Raven, either by clicking on its icon in the far right of the system tray or using the keyboard shortcut `Super + A`. Now click the Raven settings cog icon.

{{< altimg "raven-settings-cog.jpg" "help-center/configuration/enabling-workspaces/" >}}

Click the "Panel" button, then in the Applets section, click the `+` button.

Find the Screenshot Widget entry and select it. Click the `+` button at the top of the panel. This will add the Screenshot Widget to the center section.  By left clicking on the icon, you will be given the option to take a screenshot of the whole screen, a single window or a specific area.

{{< altimg "budgie-screenshot-applet.jpg" "help-center/common-tasks/taking-a-screenshot/" >}}

To access the Screenshot Widget settings, click on the cog icon in the top right corner. You will now be able to changes options such as including the pointer, taking delayed screenshots and the location where screenshots are saved.

{{< altimg "budgie-screenshot-applet-settings.jpg" "help-center/common-tasks/taking-a-screenshot/" >}}

### Keyboard Shortcuts

To enable the taking of screenshots using a keyboard shortcut, open the Budgie Menu and then click on "Keyboard" in the System Settings category. Scroll to the bottom of the list of shortcuts and then click on the `+` button.

{{< altimg "screenshot-shortcuts.jpg" "help-center/common-tasks/taking-a-screenshot/" >}}

Give your shortcut a name and then type `gnome-screenshot` into the command box.  Next, click on "Set Shortcut..." and now press the key combination you wish to use as the shortcut.  Finish by clicking the "Add" button.

{{< altimg "screenshot-shortcuts-add.jpg" "help-center/common-tasks/taking-a-screenshot/" >}}

Your new shortcut can now be used to take a picture of the whole screen.  You can customize the shortcut by adding some options to the command.  A few examples are listed below, a full list of options can be found by opening Terminal and typing `gnome-screenshot -h`.

Command                       | Resulting Screenshot
------------------------------|----------------
gnome-screenshot              | Screen
gnome-screenshot -w           | Window
gnome-screenshot -a           | Area
gnome-screenshot -p           | Include Pointer
gnome-screenshot --delay=5    | 5 Second Delay
gnome-screenshot -w --delay=2 | Window with 2 Second Delay

### GNOME Screenshot Application

Budgie also comes with a GUI (Graphical User Interface) for the GNOME Screenshot application. To use it, open the Budgie Menu and then click on "Screenshot" in the Utilities category. This allows you to take screenshots for the whole screen, a window or a selected area along with delay and pointer options. Use the "Take Screenshot" button to take a shot.

{{< altimg "gnome-screenshot-application.jpg" "help-center/common-tasks/taking-a-screenshot/" >}}

## GNOME

Screenshots can easily be taken with GNOME by using keyboard shortcuts or its own Screenshot application.

### Keyboard Shortcuts

You can view and edit the pre-set screenshot shortcuts by opening the Overlay using the `Super` button on your keyboard or by clicking the applications icon in the dock and then finding and clicking on "Keyboard". Scroll down to the Screenshot category to see the various shortcuts.

{{< altimg "gnome-keyboard-shortcuts.jpg" "help-center/common-tasks/taking-a-screenshot/" >}}

If you would like to add additional keyboard shortcuts with further options, such as a delay or visible pointer, scroll to the bottom of the list of shortcuts and then click on the `+` button.

{{< altimg "screenshot-shortcuts.jpg" "help-center/common-tasks/taking-a-screenshot/" >}}

Give your shortcut a name and then type `gnome-screenshot` into the command box.  Next, click on "Set Shortcut..." and now press the key combination you wish to use as the shortcut.  Finish by clicking the "Add" button.

{{< altimg "screenshot-shortcuts-add.jpg" "help-center/common-tasks/taking-a-screenshot/" >}}

Your new shortcut can now be used to take a picture of the whole screen.  You can customize the shortcut by adding some options to the command.  A few examples are listed below, a full list of options can be found by opening Terminal and typing `gnome-screenshot -h`.

Command                       | Resulting Screenshot
------------------------------|----------------
gnome-screenshot              | Screen
gnome-screenshot -w           | Window
gnome-screenshot -a           | Area
gnome-screenshot -p           | Include Pointer
gnome-screenshot --delay=5    | 5 Second Delay
gnome-screenshot -w --delay=2 | Window with 2 Second Delay

### GNOME Screenshot Application

The GNOME Screenshot application is available for those wanting to use a GUI. To use it, open the Overlay using the `Super` button on your keyboard or by clicking the applications icon in the dock and then find and click on "Screenshot". This allows you to take screenshots for the whole screen, a window or a selected area along with delay and pointer options. Use the "Take Screenshot" button to take a shot.

{{< altimg "gnome-screenshot-application.jpg" "help-center/common-tasks/taking-a-screenshot/" >}}

## MATE

Using MATE, take screenshots using keyboard shortcuts or by using the MATE Screenshot application.

### Keyboard Shortcuts

View and edit MATE's screenshot keyboard shortcuts by opening the Brisk Menu, clicking on "Preferences" and then on "Keyboard Shortcuts". Scroll down to the Desktop category to see the screenshot items. 

{{< altimg "mate-keyboard-shortcuts.jpg" "help-center/common-tasks/taking-a-screenshot/" >}}

If you would like to add additional keyboard shortcuts with further options, such as a delay or targeting a specific window or area , click on the "+ Add" button. Give your shortcut a name and then type `mate-screenshot` into the command box. Finish by clicking the "Apply" button.

{{< altimg "mate-keyboard-shortcuts-add.jpg" "help-center/common-tasks/taking-a-screenshot/" >}}

This will add the command to the list of shortcuts but you will need to click on "Disabled" next to your new entry and then immediately press the key combination you wish to use to finish setting it up.

{{< altimg "mate-keyboard-shortcuts-added.jpg" "help-center/common-tasks/taking-a-screenshot/" >}}

Your new shortcut can now be used to take a picture of the whole screen. You can customize the shortcut by adding some options to the command. A few examples are listed below, a full list of options can be found by opening Terminal and typing `mate-screenshot -h`. To edit a keyboard shortcut, simply click on its name.

Command                       | Resulting Screenshot
------------------------------|----------------
mate-screenshot               | Screen
mate-screenshot -w            | Window
mate-screenshot -a            | Area
mate-screenshot -b            | Include Border
mate-screenshot --delay=5     | 5 Second Delay
mate-screenshot -w --delay=2  | Window with 2 Second Delay

### MATE Screenshot Application

For those that prefer a GUI, the MATE Screenshot application is available. You can find it by opening the Brisk Menu, clicking on "Accessories" and then on "Take Screenshot". This allows you to take screenshots for the whole screen, a window or a selected area along with delay and pointer options. Use the "Take Screenshot" button to take a shot.

{{< altimg "mate-screenshot-application.jpg" "help-center/common-tasks/taking-a-screenshot/" >}}