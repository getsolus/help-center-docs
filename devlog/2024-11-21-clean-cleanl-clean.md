---
title: Clean, clean, clean!
slug: clean-clean-clean
authors: alfi
tags: [housekeeping, cleanup, devlog, solus]
hide_table_of_contents: false
---

Hello everyone! Alfi here, member of Solus Cleanup Crew. It's been more than a year since I started contributing to Solus and I want to talk about it. About what I did, what we did, what we accomplished so far, and what we want to do next.

<!-- truncate -->

## A bit of background

I started contributing in October 2023, when Solus participated in [Hacktoberfest](https://getsol.us/2023/10/01/solus-and-hacktoberfest-2023/). Hacktoberfest is a month-long event that encourage people to contribute to open source project in exchange for some digital merchandise. Finally, an excuse to contribute to something I use every day. Although, as an accountant, all of this is new experience to me. It was confusing at first, but I persisted. Finally, I got the hang of it and I managed to submit around 100 pull request during the month of the event. I was very excited and motivated. During the month, a few people joined the event and contributed to Solus, but then November came and most of the contribution slowed down. I was the only one left that continued doing the beginner tasks, mostly adding homepage to packages.

At the start of January 2024, Jakob Gezelius ([androidnisse](https://github.com/androidnisse)) comes in and starts contributing to homepage task too. Worried that we would stepped on each other's feet, we started a private chat to organize the tasks between ourselves. Until May, the two of us had been chipping away at the homepage task which at this point left 650 packages without a homepage. Then we had more contributors joining. I decided to make a group chat to accommodate all the people joining. It was called "Solus Homepage Team" at the time. More contributors and staff members joined the room, then it was renamed as "Solus Cleanup Crew" and moved under the official Solus matrix space.

## What is it?

Solus cleanup crew is a group of community contributors as as well staff members with the goal of bringing the Solus package repository up to current standard. It is a subset of the packaging room on our matrix channel. We organize the work on all the cleanup related tasks.

## Why bother?

Solus has been updating their tooling and infrastructure since its resurrection. While most of the tooling changes can be accomplished by staff members alone, there are things that they cannot do. While many consider Solus repository as small, it still contains more than 6000 packages. Some packages have never even gotten an update since Solus was first created! We want to get rid of all its cruft before we can migrate to a better tooling. That's where the community contributor can come in and help.

For me personally, it is a chance to learn something new and fill my time with more purpose. Sometimes, I feel like a slob scrolling through things, opening the same three apps over and over or sleeping midday. Technically speaking, doing packaging is still scrolling through things, still opening the same three apps over and over, and I still get my midday nap, but now it is with purpose. I love that what I do can be enjoyed by other people. It is mostly invisible and not even noticed by people, but the chance of it helping people gives me so much joy. Why bother? Because I love it.

## What we accomplished

We create a few repository wide task that can done with little reading of our packaging guide. The keen-eyed of you may have already seen these tasks. It is always attached at the end of every Sync Updates since July. These are the tasks we did:
|No. | Task | Date Started | Start count | Current count|
|----|-------------| ------| ------------|--------------|
|1.| [Adding homepage key to package.yml](https://github.com/getsolus/packages/issues/411)|30-09-2023|2300|8
|2.| [Adding AppStream metainfo to all font packages](https://github.com/getsolus/packages/issues/449)|06-10-2023| 38 | Done 🎉|
|3.| [Adding AppStream metainfo to all graphical applications](https://github.com/getsolus/packages/issues/1389)|22-01-2024|316|198|
|4.| [Applying new cargo macros](https://github.com/getsolus/packages/issues/3111)|27-06-2024|37| Done 🎉|
|5.| [Changing all packages with homepages pointing to wiki.gnome.org](https://github.com/getsolus/packages/issues/4116)|20-10-2024|87|62|
|6.| [Adding monitoring.yml](https://github.com/getsolus/packages/issues/4121)|21-10-2024|3070|2937|
|7.| [Tagging packages that do not build](https://github.com/getsolus/packages/issues?q=is%3Aopen+is%3Aissue+label%3A%22Packaging+Problem%22)|Ongoing| N/A| 13
|8.| [Tagging packages that should be deprecated](https://github.com/getsolus/packages/issues?q=is%3Aopen+is%3Aissue+label%3A%22Package%3A+Removal+Request%22)|Ongoing| N/A| 25

As you can see from the table above, we just completed two tasks and we are close to completing homepage task. Packages that do not build also are also getting solved one by one. Right now, there are 12 people in Solus Cleanup Crew Matrix room, 6 of them are new contributors. We also create a new AppStream metainfo documentation, clean up our issue templates, implement a better tagging system for organizing issues and much more. Solus Cleanup Crew is also becoming a place where we can onboard new contributors and recruit new staff. I thought we accomplished a lot and I am happy with it.

## What next?

We want to focus on adding appstream metainfo for remaining 200 packages, in line with the goal of 4.7 ISO. It will not be easy nor quick, but we will try our best. We want Solus users to have the best experience possible when we finally say goodbye to `solus-sc` and switch to modern software center (Gnome Software and KDE Discover). We want you to be able to install all graphical application from software center and have all the relevant information (Legible screenshot, Hi-Res Icon, good description, etc).

We also want to add more [monitoring.yml](https://help.getsol.us/docs/packaging/monitoring.yml) files to packages, so we can utilize our proof-of-concept ["Package Update Monitor"](https://shared.getsol.us/justin/updates/) created by [Justin Zobel](https://github.com/Justinzobel). I, myself and [Joey Riches](https://github.com/joebonrichie) will explore the possibility of curating our own "Editor's Choice" and "Featured Apps" in Gnome Software, made possible by [`gnome-app-list`](https://gitlab.gnome.org/GNOME/gnome-app-list). I think the road ahead is very exciting for us and hopefully for you too!

## Want to help?

We are always eager for people to join and spend their time contributing to Solus. There are many ways you can [contribute](https://help.getsol.us/docs/user/contributing/getting-involved), but for me it is packaging. For me, packaging can be relaxing, sometimes frustrating, but always gives me joy at the end. If you are interested to dip your toe on packaging and want to help us, here are the simple steps:

1. Join the Solus Packaging Room on Matrix
2. Read and practice our [packaging documentation](https://help.getsol.us/docs/packaging/)
3. Submit your first Pull Request. We recommend doing the wiki gnome task or monitoring task
4. Follow along the review process until your PR gets merged
5. Continue on contributing and you might get invited to Solus Cleanup Crew

## Closing thoughts

I want to thank all the contributors that made all of this possible. It was such a wonderful effort from everyone and we will strive to keep that up. Let me know if you are interested in a follow-up blog about the detail of doing packaging for Solus. _Terima kasih dan sampai jumpa_!
