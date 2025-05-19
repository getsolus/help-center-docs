import { Backdrop, Box, Stack } from "@mui/material";
import React, { useState } from "react";
import { Person as PersonType, Team as TeamType } from "../types";
import { AutoColumnOnSmall } from "../utils/auto";
import { Person } from "./Person";
import { SiteTheme } from "../theme";
import { People } from "../data/people";
import { Teams } from "../data/teams";

type TeamMemberProps = {
  haveSupplementalInfo: boolean;
  teamName: string;
  person: PersonType;
  supplementalInfo: string | null;
};

export const TeamMember = ({ haveSupplementalInfo, teamName, person, supplementalInfo }: TeamMemberProps) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <Stack
      direction={AutoColumnOnSmall("row", "column", "sm")}
      key={`Team-${teamName}-GridItem-${person.names.first}${person.names.last}`}
    >
      <Backdrop
        onClick={() => setShowOverlay(false)}
        open={showOverlay}
        sx={{ p: 2, zIndex: SiteTheme.zIndex.tooltip }}
      >
        <Person embeddedIn={teamName} isBadge={false} person={person} sx={{ minWidth: 240, padding: 4 }} />
      </Backdrop>
      <Person
        embeddedIn={teamName}
        isBadge
        onAvatarClick={() => setShowOverlay(true)}
        person={person}
        sx={{ minWidth: 240 }}
      />
      {haveSupplementalInfo && <Box sx={{ fontWeight: "bold", lineHeight: "40px", marginInlineStart: "6px" }}>{supplementalInfo}</Box>}
    </Stack>
  );
};

export const Team = ({ team }: { team: TeamType }) => {
  const haveSupplementalInfo = !!team.members.find((el) => !!el[1]);

  return (
    <Stack className="card" gap={2} p={2}>
      <h2 style={{ margin: 0 }}>{team.name}</h2>
      <h4 style={{ fontWeight: "normal", margin: 0, marginBlockEnd: 0 }}>{team.description}</h4>
      {team.members.map(([name, supplementalInfo]) => (
        <TeamMember
          haveSupplementalInfo={haveSupplementalInfo}
          teamName={team.name}
          person={People[name]}
          supplementalInfo={supplementalInfo}
        />
      ))}
    </Stack>
  );
};

export const TeamsList = () => {
  return (
    <Stack gap={4}>
      <h1 style={{ margin: 0 }}>Teams</h1>
      The Solus project is made up of several teams. Each team has its own responsibilities and focuses. Because of the
      size of the overall Solus organization, members are often on multiple teams.
      {Teams.filter((t) => t.name !== "Admin Team").map((team) => (
        <Team key={`TeamsList-Team-${team.name}`} team={team} />
      ))}
    </Stack>
  );
};
