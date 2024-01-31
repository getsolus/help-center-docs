# Testing an ISO

A handy checklist anyone can use for testing an ISO.

This is a list of some general things to check. It is not meant to be exhaustive, just enough to hit major points and hopefully uncover obvious problems. Testers are certainly not prohibited from doing more, at their discretion. Not all points will be testable by everyone (ex: docking / undocking). That is fine; this is just a reference.

When testing, try to keep different types of users in mind. For instance, would a general / new user be comfortable with the experience? Would a technical user be put off by a limitation?

## For any release

- ISO can be written to a USB, used to boot a system and install
- Can unlock the device if the live ISO lock screen engages
- Installer is easy to follow
- Installer detects location, time and time zone properly. Bonus points if the correct timezone is shown in the picker and you don't have to manually select one.
- Start menu works, has search
- Can scan / print / use your peripherals
- Sound over speakers
- Bluetooth device connects, has high fidelity and headphone modes, you can hear sound
- Install your usual software and just make sure basic functionality works
- Plugging in a USB drive allows user to mount the drive and access files
- System can be put to sleep and woken, things still work after waking (display, keyboard, mouse, sound, network)
- Able to create and use samba shares via file manager (you must [enable smb after installation](/docs/user/software/networking/samba.md#samba-on-solus))
- Anything that's been flaky in your experience (LVM, for instance)

### Laptops

- Multi-monitor display behaves properly with docking and undocking.

### VMs

This functionality might be affected by the settings of the VM.

- Copy and paste works from host to guest _before_ install, while booted into the live ISO
- Copy and paste works _after_ installation and rebooting the VM

## For the specific release

- Any issues that have been recently fixed, or are known to be recently flaky.
- Check the ISO task in the tracker for other potential areas of interest.
