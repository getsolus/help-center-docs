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
        A feature-rich, luxurious desktop using the most modern technologies.
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
        A sophisticated desktop experience for the tinkerers. Simple by default, powerful when needed.
      </Translate>
    ),
  },
  {
    name: "GNOME",
    url: "gnome",
    urlConfig: "gnome/configuration",
    urlTips: "gnome/tips-and-tricks",
    description: (
      <Translate id="edition.gnome.description">A simple, streamlined desktop for more modern hardware.</Translate>
    ),
  },
  {
    name: "MATE",
    url: "mate",
    urlConfig: "mate/configuration",
    urlTips: "mate/tips-and-tricks",
    description: (
      <Translate id="edition.mate.description">A traditional desktop for advanced users and older hardware.</Translate>
    ),
  },
  {
    name: "Xfce",
    url: "xfce",
    urlConfig: "xfce/configuration",
    urlTips: "xfce/tips-and-tricks",
    description: (
      <Translate id="edition.xfce.description">
        A lightweight desktop that aims to be fast while still being friendly.
      </Translate>
    ),
  },
];

export default Editions;
