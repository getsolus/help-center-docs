import { Team } from "../types";

export const Teams: Team[] = [
  {
    description:
      "This team supports and enables everyone else to be able to do what needs to be done. They are also responsible for the high level decisions that chart the overall course of the project.",
    members: [
      ["RuneMorling", null],
      ["ReillyBrogan", null],
      ["JoeyRiches", null],
      ["TraceyClark", null],
      ["IkeyDoherty", null],
      ["DavidHarder", null],
    ],
    name: "Admin Team",
  },
  {
    description:
      "This team handles the building of packages in the Solus repository. Some team members help maintain one or more of our included desktop environments.",
    members: [
      ["JustinZobel", "Plasma"],
      ["ReillyBrogan", "Plasma"],
      ["JoshuaStrobl", "Budgie"],
      ["EvanMaddock", "Budgie/XFCE"],
      ["JoeyRiches", "GNOME"],
      ["IkeyDoherty", "GNOME"],
      ["ZachBacon", "GNOME/XFCE"],
      ["ThomasStaudinger", "Third-Party"],
      ["SilkeHofstra", null],
      ["TraceyClark", null],
      ["DavidHarder", null],
      ["TroyHarvey", null],
      ["AlgentAlbrahimi", null],
      ["GavinZhao", null],
      ["HansKelson", null],
    ],
    name: "Packaging Team",
  },
  {
    description: "This team writes and maintains software for Solus.",
    members: [
      ["RuneMorling", null],
      ["ReillyBrogan", null],
      ["SilkeHofstra", null],
      ["JoeyRiches", null],
      ["EvanMaddock", null],
    ],
    name: "Development Team",
  },
  {
    description:
      "This team is responsible for ensuring that the Solus infrastructure and services are kept up to date and running smoothly.",
    members: [
      ["RuneMorling", null],
      ["JoshuaStrobl", null],
      ["ReillyBrogan", null],
      ["SilkeHofstra", null],
      ["IkeyDoherty", null],
    ],
    name: "Infrastructure Team",
  },
  {
    description:
      "This team is responsible for interacting with the community through documentation, communication, and moderation.",
    members: [
      ["DavidHarder", null],
      ["EvanMaddock", null],
      ["TraceyClark", null],
    ],
    name: "Community & Moderation Team",
  },
];
