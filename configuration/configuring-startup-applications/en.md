+++
title = "Configuring Startup Applications"
+++
# Configuring Startup Applications

Manage the applications that you want to automatically run when starting Solus.

## Budgie

You can configure your startup applications in the Budgie Desktop Settings. Open the Budgie Menu and then click on "Budgie Desktop Settings" in the System Tools category. Alternatively, you can access the Budgie Desktop Settings by opening Raven (`Super + A`) and clicking on the settings icon at the bottom of Raven.

Once you have opened Budgie Settings, click on "Autostart" in the left-hand menu.

{{< altimg "budgie-autostart.jpg" "help-center/configuration/configuring-startup-applications/" >}}

By default, the list of startup applications will be empty on a freshly installed copy of Solus. To add an application, click on the `+` button and then on "Add application" to load a list of your installed applications.

{{< altimg "budgie-autostart-list.jpg" "help-center/configuration/configuring-startup-applications/" >}}

Find the application you are looking for by scrolling the list or by using the search icon at the top of the window. Once you have found the application, click on it and then finish by clicking the "Add" button.

{{< altimg "budgie-autostart-added.jpg" "help-center/configuration/configuring-startup-applications/" >}}

Your application will have been added to the startup list and it will automatically run the next time you start Solus. If you wish to remove an application from your startup list, simply click the `-` button next to the application you wish to stop running automatically.

## GNOME

Using GNOME, configure your startup applications by opening the Overlay using the `Super` button on your keyboard or by clicking the applications icon in the dock and then find and click on "Tweak Tool". Next, click on "Startup Applications" in the left-hand menu.

{{< altimg "gnome-startup-applications.jpg" "help-center/configuration/configuring-startup-applications/" >}}

By default, the list of startup applications will be empty on a freshly installed copy of Solus. To add an application, click on the `+` button to load a list of your installed applications.

{{< altimg "gnome-startup-applications-list.jpg" "help-center/configuration/configuring-startup-applications/" >}}

Find the application you are looking for by scrolling the list or by using the search icon at the top of the window. Once you have found the application, click on it and then finish by clicking the "Add" button.

{{< altimg "gnome-startup-applications-added.jpg" "help-center/configuration/configuring-startup-applications/" >}}

Your application will have been added to the startup list and it will automatically run the next time you start Solus. If you wish to remove an application from your startup list, simply click the "Remove" button next to the application you wish to stop running automatically.

## MATE 

With MATE, startup applications can be added by opening the Brisk Menu, clicking on "Preferences" and then on "Startup Applications". Under the Startup Programs tab, click on "+ Add".

{{< altimg "mate-startup-applications.jpg" "help-center/configuration/configuring-keyboard-layout/" >}}

In the Command box, you will need to write the name of the process (your application) that you want to add. If you wish, you can also fill in a Name and Comment but these are not compulsory. In the example below, we have added the Eye of MATE Image Viewer to the startup list.  

{{< altimg "mate-startup-add.jpg" "help-center/configuration/configuring-startup-applications/" >}}

Once you are happy with your inputs, click the "+ Add" button. The process will be added to the list and automatically started next time you load Solus.

{{< altimg "mate-startup-applications-added.jpg" "help-center/configuration/configuring-startup-applications/" >}}

Note that the process for the Image Viewer is simply called `eom`. You can check the name of a running process by using the MATE System Monitor found under "System Tools" in the Brisk Menu. By looking under the Processes tab, you can see the name of the process you are wishing to start automatically.

{{< altimg "mate-system-monitor-processes.jpg" "help-center/configuration/configuring-startup-applications/" >}}