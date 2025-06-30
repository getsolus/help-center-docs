import React from "react";

import clsx from "clsx";

import Translate, { translate } from "@docusaurus/Translate";
import Link from "@docusaurus/Link";
import Image from "@theme/IdealImage";
import Heading from "@theme/Heading";
import { Button, ButtonGroup, Grid, Stack, useMediaQuery, useTheme } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import useBaseUrl from "@docusaurus/useBaseUrl";

import FaSettingsIcon from "@mui/icons-material/Settings";
import FaTipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

import Editions from "@site/src/data/editions";
import { Edition } from "@site/src/types";

type EditionCardProps = Edition;

const EditionCard = ({ name, url, urlConfig, urlTips, description }: EditionCardProps) => {
  const theme = useTheme();
  const hideIcons = useMediaQuery(theme.breakpoints.down("xl"));
  const image = useBaseUrl(`/img/${name}.jpg`);

  return (
    <Grid size={{ xs: 6 }}>
      <Stack className={clsx("card")} height={1}>
        <Stack className={clsx("card__image")}>
          <Link to={url}>
            <Image
              img={image}
              alt={translate({
                message: "Screenshot of {name} edition",
                id: "edition.card.image",
                description: "Alt text for images of editions",
              })}
            />
          </Link>
        </Stack>
        <Stack className="card__body">
          <Heading as="h3">
            <a href={name}>{name}</a>
          </Heading>
          <p>{description}</p>
        </Stack>
        <Stack className="card__footer">
          <ButtonGroup
            aria-label="contained card button group"
            fullWidth
            sx={{ borderRadius: "10px" }}
            variant="contained"
          >
            <Button
              href={urlConfig}
              startIcon={!hideIcons ? <FaSettingsIcon /> : undefined}
              sx={{ borderRadius: "10px", paddingInline: 2 }}
            >
              <Translate id="edition.card.configuration">Configuration</Translate>
            </Button>
            <Button
              href={urlTips}
              startIcon={!hideIcons ? <FaTipsAndUpdatesIcon /> : undefined}
              sx={{ borderRadius: "10px", paddingInline: 2 }}
            >
              <Translate id="edition.card.tipsntricks">Tips & Tricks</Translate>
            </Button>
          </ButtonGroup>
        </Stack>
      </Stack>
    </Grid>
  );
};

export const EditionCardsRow = () => {
  return (
    <Grid container columns={{ xs: 6, sm: 6, md: 6, lg: 12 }} spacing={2}>
      {Editions.map((edition: Edition) => (
        <EditionCard key={edition.name} {...edition} />
      ))}
    </Grid>
  );
};
