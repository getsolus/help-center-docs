import { Person, WebsiteType } from "../types";

import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import MastodonIcon from "@site/static/img/icons/mastodon.svg";

export const People: Record<string, Person> = {
  AlgentAlbrahimi: {
    description: "",
    matrix: "@algent:matrix.org",
    names: {
      first: "Algent",
      last: "Albrahimi",
    },
    websites: [
      {
        icon: GitHubIcon,
        to: "https://github.com/algent-al",
        type: WebsiteType.GITHUB,
      },
      {
        icon: MastodonIcon,
        to: "https://fosstodon.org/@algent",
        type: WebsiteType.MASTODON,
      },
    ],
  },
  DavidHarder: {
    description: "",
    matrix: "@davidjharder:matrix.org",
    names: {
      first: "David",
      last: "Harder",
    },
    websites: [
      {
        icon: GitHubIcon,
        to: "https://github.com/davidjharder",
        type: WebsiteType.GITHUB,
      },
    ],
  },
  EvanMaddock: {
    description:
      "Sci-fi and tech nerd who enjoys programming, woodworking, cooking, and other miscellaneous stuff. Not necessarily in that order.",
    matrix: "@ebonjaeger:matrix.org",
    names: {
      first: "Evan",
      last: "Maddock",
    },
    websites: [
      {
        icon: GitHubIcon,
        to: "https://github.com/EbonJaeger",
        type: WebsiteType.GITHUB,
      },
      {
        icon: MastodonIcon,
        to: "https://fosstodon.org/@EbonJaeger",
        type: WebsiteType.MASTODON,
      },
    ],
  },
  GavinZhao: {
    description: "",
    matrix: "@gzgavinzhao:matrix.org",
    names: {
      first: "Gavin",
      last: "Zhao",
    },
    websites: [
      {
        icon: GitHubIcon,
        to: "https://github.com/GZGavinZhao",
        type: WebsiteType.GITHUB,
      },
    ],
  },
  HansKelson: {
    description: "",
    matrix: "@sheepman:m.stupid.frickin.website",
    names: {
      first: "Hans",
      last: "Kelson",
    },
    websites: [
      {
        icon: GitHubIcon,
        to: "https://github.com/sheepman4267",
        type: WebsiteType.GITHUB,
      },
    ],
  },
  JoeyRiches: {
    description: "",
    matrix: "@joebonrichie:matrix.org",
    names: {
      first: "Joey",
      last: "Riches",
    },
    websites: [
      {
        icon: GitHubIcon,
        to: "https://github.com/joebonrichie",
        type: WebsiteType.GITHUB,
      },
    ],
  },
  ReillyBrogan: {
    description: "",
    matrix: "@reillybrogan:matrix.org",
    names: {
      first: "Reilly",
      last: "Brogan",
    },
    websites: [
      {
        icon: GitHubIcon,
        to: "https://github.com/ReillyBrogan",
        type: WebsiteType.GITHUB,
      },
    ],
  },
  SilkeHofstra: {
    description: "",
    matrix: "@silex:slxh.eu",
    names: {
      first: "Silke",
      last: "Hofstra",
    },
    websites: [
      {
        icon: GitHubIcon,
        to: "https://github.com/silkeh",
        type: WebsiteType.GITHUB,
      },
      {
        icon: LanguageIcon,
        to: "https://slxh.nl",
        type: WebsiteType.WEBSITE,
      },
    ],
  },
  TraceyClark: {
    description: "",
    matrix: "@traceyc:matrix.org",
    names: {
      first: "Tracey",
      last: "Clark",
    },
    websites: [
      {
        icon: GitHubIcon,
        to: "https://github.com/TraceyC77",
        type: WebsiteType.GITHUB,
      },
      {
        icon: MastodonIcon,
        to: "https://fosstodon.org/@TraceyC",
        type: WebsiteType.MASTODON,
      },
      {
        icon: LanguageIcon,
        to: "https://www.tlcnet.info",
        type: WebsiteType.WEBSITE,
      },
    ],
  },
  TroyHarvey: {
    description: "",
    matrix: "@harveydevel:matrix.org",
    names: {
      first: "Troy",
      last: "Harvey",
    },
    websites: [
      {
        icon: GitHubIcon,
        to: "https://github.com/HarveyDevel",
        type: WebsiteType.GITHUB,
      },
    ],
  },
  Malfisya: {
    description: "",
    matrix: "@alfisya:matrix.org",
    names: {
      first: "Muhammad",
      middle: "Alfi",
      last: "Syahrin",
    },
    websites: [
      {
        icon: GitHubIcon,
        to: "https://github.com/malfisya",
        type: WebsiteType.GITHUB,
      },
      {
        icon: MastodonIcon,
        to: "https://masto.ai/@alfisya",
        type: WebsiteType.MASTODON,
      },
    ],
  },
};
