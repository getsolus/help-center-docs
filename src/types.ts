import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { ComponentType, SVGProps } from "react";

export enum WebsiteType {
  GITHUB,
  MASTODON,
  WEBSITE,
}

export type DocSection = {
  description: JSX.Element;
  img: JSX.Element;
  link: string;
  title: string;
};

export type Person = {
  description: () => JSX.Element;
  matrix?: string;
  names: PersonName;
  websites: PersonWebsite[];
};

export type PersonName = {
  first: string;
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
