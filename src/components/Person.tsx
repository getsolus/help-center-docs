import { Avatar, Box, Stack, SxProps, useMediaQuery } from "@mui/material";
import React from "react";
import { Person as PersonType, WebsiteType } from "../types";
import { SiteTheme } from "../theme";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
import { Teams } from "../data/teams";
import { People } from "../data/people";
import Grid2 from "@mui/material/Unstable_Grid2";

type PersonProps = {
  embeddedIn: string;
  isBadge?: boolean;
  onAvatarClick?: () => void;
  person: PersonType;
  sx?: SxProps;
};

export const Person = ({ embeddedIn, isBadge = false, onAvatarClick, person, sx = {} }: PersonProps) => {
  const usePersonRow = useMediaQuery(SiteTheme.breakpoints.up("sm"));
  const key = `Person-${embeddedIn}-${person.names.first}${person.names.last}`;
  const avatar = useBaseUrl(`/img/avatars/${person.names.first}${person.names.last}.webp`);
  const name = `${person.names.first} ${person.names.middle ?? ""} ${person.names.last}`;

  const github = person.websites.find((w) => w.type === WebsiteType.GITHUB);
  const primarySite = person.websites.find((w) => w.type === WebsiteType.WEBSITE) ?? github;

  return (
    <Stack
      alignItems={!usePersonRow && !isBadge ? "center" : undefined}
      className={`avatar ${!isBadge ? "card--bg" : ""}`}
      direction={usePersonRow || (!usePersonRow && isBadge) ? "row" : "column"}
      key={key}
      spacing={!usePersonRow ? 2 : undefined}
      sx={sx}
    >
      <Box onClick={isBadge && onAvatarClick ? onAvatarClick : undefined} sx={{ cursor: "pointer" }}>
        <Link key={`Link-HeaderAvatar-${key}`} target="_blank" to={!isBadge ? primarySite?.to : undefined}>
          <Avatar
            alt={`${name}'s avatar`}
            className="PersonLinkHeaderAvatar"
            src={avatar}
            sx={{ height: isBadge ? 40 : 64, width: isBadge ? 40 : 64 }}
          />
        </Link>
      </Box>
      <Stack
        alignItems={!usePersonRow && !isBadge ? "center" : undefined}
        className="avatar__intro"
        gap={!isBadge ? 1 : 0}
      >
        <Stack className="avatar__name" direction="row" gap={2}>
          {name}
          {!isBadge &&
            person.websites.map((w) => (
              <Link key={`Link-Website-${key}-${w.type}`} target="_blank" to={w.to}>
                <w.icon className="PersonWebsiteIcon" height={24} width={24} />
              </Link>
            ))}
        </Stack>
        {!isBadge && (
          <>
            <Box textAlign={!usePersonRow ? "center" : undefined}>
              {person.description}
            </Box>
            {person.matrix && <small>Matrix: {person.matrix}</small>}
          </>
        )}
      </Stack>
    </Stack>
  );
};

export const Administration = () => {
  const adminTeam = Teams.find((t) => t.name === "Admin Team");
  const administration = adminTeam?.members.map(([member]) => People[member]);
  const useGrid = useMediaQuery(SiteTheme.breakpoints.up("xl"));

  return (
    <Stack gap={4} sx={{ marginBlockEnd: 4 }}>
      <h1 style={{ margin: 0 }}>Administration</h1>
      {adminTeam && adminTeam.description}
      <Grid2 columns={useGrid ? 12 : 6} container margin={0} spacing={4} width={1}>
        {administration &&
          administration.map((person) => (
            <Grid2 key={`AdministrationGridItem-${person.names.first}`} xs={6}>
              <Person embeddedIn="Administration" person={person} sx={{ alignItems: "center", height: "100%", p: 2 }} />
            </Grid2>
          ))}
      </Grid2>
    </Stack>
  );
};
