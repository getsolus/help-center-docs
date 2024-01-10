import React from "react";
import clsx from "clsx";
import Translate, { translate } from "@docusaurus/Translate";
import Link from "@docusaurus/Link";
import Image from "@theme/IdealImage";
import Heading from "@theme/Heading";
import { Button, ButtonGroup, Stack, useMediaQuery, useTheme } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import SettingsIcon from "@mui/icons-material/Settings";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

import useBaseUrl from "@docusaurus/useBaseUrl";

const Editions = [
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
    name: "XFCE",
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

type EditionCardProps = {
  name: string;
  url: string;
  urlConfig: string;
  urlTips: string;
  description: JSX.Element;
};

const EditionCard = ({ name, url, urlConfig, urlTips, description }: EditionCardProps) => {
  const theme = useTheme();
  const hideIcons = useMediaQuery(theme.breakpoints.down("xl"));
  const image = useBaseUrl(`/img/${name}.jpg`);

  return (
    <Grid2 xs={6}>
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
              startIcon={!hideIcons ? <SettingsIcon /> : undefined}
              sx={{ borderRadius: "10px", paddingInline: 2 }}
            >
              <Translate id="edition.card.configuration">Configuration</Translate>
            </Button>
            <Button
              href={urlTips}
              startIcon={!hideIcons ? <TipsAndUpdatesIcon /> : undefined}
              sx={{ borderRadius: "10px", paddingInline: 2 }}
            >
              <Translate id="edition.card.tipsntricks">Tips & Tricks</Translate>
            </Button>
          </ButtonGroup>
        </Stack>
      </Stack>
    </Grid2>
  );
};

export const EditionCardsRow = () => {
  return (
    <Grid2 container columns={{ xs: 6, sm: 6, md: 6, lg: 12 }} spacing={2}>
      {Editions.map((edition) => (
        <EditionCard key={edition.name} {...edition} />
      ))}
    </Grid2>
  );
};
