import { Edition } from "../types";

import Translate from "@docusaurus/Translate";

const Editions: Edition[] = [
  {
    name: "Budgie",
    url: "budgie",
    urlConfig: "budgie/configuration",
    urlTips: "budgie/tips-and-tricks",
    description: (
      <Translate id="edition.budgie.description">
        A feature-rich desktop using modern technologies. Customize your desktop with the dedicated Budgie Desktop
        Settings app. Raven enables you to view notifications, control media playback and sound devices, and more!
      </Translate>
    ),
  },
  {
    name: "Plasma",
    url: "plasma",
    urlConfig: "plasma/configuration",
    urlTips: "plasma/tips-and-tricks",
    description: (
      <Translate id="edition.plasma.description">
        A sophisticated desktop experience for the tinkerers. We ship Plasma with a curated experience with sensible
        defaults, enabling you to more quickly get to tinkering with the parts you love most.
      </Translate>
    ),
  },
  {
    name: "GNOME",
    url: "gnome",
    urlConfig: "gnome/configuration",
    urlTips: "gnome/tips-and-tricks",
    description: (
      <Translate id="edition.gnome.description">
        A simple, streamlined desktop for more modern hardware. We ship GNOME with a variety of extensions, including
        Speedinator and Appindicatorsupport. It's ready to go from the moment you start using it.
      </Translate>
    ),
  },
  {
    name: "Xfce",
    url: "xfce",
    urlConfig: "xfce/configuration",
    urlTips: "xfce/tips-and-tricks",
    description: (
      <Translate id="edition.xfce.description">
        A lightweight desktop that aims to be fast while still being friendly. We ship the Xfce Desktop to provide a
        full-featured experience for users running less powerful hardware.
      </Translate>
    ),
  },
];

export default Editions;
