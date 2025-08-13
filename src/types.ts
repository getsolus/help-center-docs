import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { ComponentType, ReactNode, SVGProps } from "react";
import { PropSidebarItemLink } from "@docusaurus/plugin-content-docs";

export enum WebsiteType {
  GITHUB,
  MASTODON,
  WEBSITE,
}

type DocImg = {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> | ComponentType<SVGProps<SVGSVGElement>>;
};

export type DocSection = PropSidebarItemLink & DocImg;

export type Edition = {
  name: string;
  url: string;
  urlConfig: string;
  urlTips: string;
  description: ReactNode;
};

export type Person = {
  description: string;
  matrix?: string;
  names: PersonName;
  websites: PersonWebsite[];
};

export type PersonName = {
  first: string;
  middle?: string;
  last: string;
};

export type PersonWebsite = {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> | ComponentType<SVGProps<SVGSVGElement>>;
  to: string;
  type: WebsiteType;
};

export type Team = {
  description: string;
  members: [string, null | string][];
  name: string;
};
