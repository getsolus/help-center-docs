---
title: Install the NVIDIA proprietary drivers
summary: Configure the NVIDIA proprietary drivers on Solus to improve performance for games and other compute tasks.
---

Solus has an open-source driver for NVIDIA cards (Nouveau) which is appropriate for basic usage. If you want to use your NVIDIA card to play games or for other compute tasks, install the proprietary NVIDIA driver for best performance.

## Before you start

To install the correct driver, check:

- Which NVIDIA graphics card you have.
- Which kernel you are running (current or LTS) by running the command `uname -r`.

## Procedure

To install the proprietary NVIDIA drivers in Solus, do the following steps:

1. Open **GNOME Software** or **Discover** (Solus Plasma).

1. Search for <kbd>nvidia driver</kbd>.

1. Install the apropriate driver according to your kernel and graphics card.

   The following table lists the available Nvidia drivers in Solus:

   | Your Graphics Card                    | Your Kernel | Driver to Install                              |
   | :------------------------------------ | :---------- | :--------------------------------------------- |
   | Maxwell (GeForce 900 series) or newer | `current`   | **NVIDIA Graphics Driver**                     |
   |                                       | `lts`       | **NVIDIA Graphics Driver (LTS Kernel)**        |
   | Kepler (GeForce 600/700 series)       | `current`   | **NVIDIA 470.xx Graphics Driver**              |
   |                                       | `lts`       | **NVIDIA 470.xx Graphics Driver (LTS Kernel)** |

1. If you plan to play games using Steam or Wine/Lutris, install the 32-bit libraries.

   - In GNOME software, under **Add-ons** install **32bit libraries for NVIDIA binary driver**.

1. Restart your computer.
