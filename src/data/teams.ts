import { Team } from "../types";

export const Teams: Team[] = [
  {
    description:
      "This team supports and enables everyone else to be able to do what needs to be done. They are also responsible for the high level decisions that chart the overall course of the project.",
    members: [
      ["ReillyBrogan", null],
      ["JoeyRiches", null],
      ["TraceyClark", null],
      ["TroyHarvey", null],
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
      ["EvanMaddock", "Budgie/XFCE"],
      ["JoeyRiches", "GNOME"],
      ["SilkeHofstra", null],
      ["TraceyClark", "Plasma"],
      ["DavidHarder", null],
      ["TroyHarvey", null],
      ["AlgentAlbrahimi", null],
      ["GavinZhao", null],
      ["HansKelson", null],
      ["Malfisya", "GNOME"],
    ],
    name: "Packaging Team",
  },
  {
    description: "This team writes and maintains software for Solus.",
    members: [
      ["ReillyBrogan", null],
      ["SilkeHofstra", null],
      ["JoeyRiches", null],
      ["HansKelson", null],
    ],
    name: "Development Team",
  },
  {
    description:
      "This team is responsible for ensuring that the Solus infrastructure and services are kept up to date and running smoothly.",
    members: [
      ["ReillyBrogan", null],
      ["SilkeHofstra", null],
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
      ["TroyHarvey", null],
    ],
    name: "Community & Moderation Team",
  },
];
