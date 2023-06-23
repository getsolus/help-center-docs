import React from "react";
import clsx from "clsx";
import Translate from "@docusaurus/Translate";
import Link from "@docusaurus/Link";
import Image from "@theme/IdealImage";
import Heading from "@theme/Heading";
import { Box, Button, ButtonGroup, Stack } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid2 from "@mui/material/Unstable_Grid2";
import SettingsIcon from "@mui/icons-material/Settings";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

import imgBudgie from "@site/static/img/Budgie.jpg";
import imgPlasma from "@site/static/img/Plasma.jpg";
import imgGNOME from "@site/static/img/GNOME.jpg";
import imgMATE from "@site/static/img/MATE.jpg";

const Editions = [
  {
    name: "Budgie",
    image: imgBudgie,
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
    image: imgPlasma,
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
    image: imgGNOME,
    url: "gnome",
    urlConfig: "gnome/configuration",
    urlTips: "gnome/tips-and-tricks",
    description: (
      <Translate id="edition.gnome.description">A simple, streamlined desktop for more modern hardware.</Translate>
    ),
  },
  {
    name: "MATE",
    image: imgMATE,
    url: "mate",
    urlConfig: "mate/configuration",
    urlTips: "mate/tips-and-tricks",
    description: (
      <Translate id="edition.mate.description">A traditional desktop for advanced users and older hardware.</Translate>
    ),
  },
];

type EditionCardProps = {
  name: string;
  image: string;
  url: string;
  urlConfig: string;
  urlTips: string;
  description: JSX.Element;
};

const EditionCard = ({ name, image, url, urlConfig, urlTips, description }: EditionCardProps) => {
  return (
    <Box className="col margin-bottom--lg" xs={6}>
      <Stack className={clsx("card")}>
        <Stack className={clsx("card__image")}>
          <Link to={url}>
            <Image
              img={image}
              alt={Translate({
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
          <ThemeProvider theme={buttonTheme}>
            <ButtonGroup
              variant="contained"
              fullWidth="true"
              aria-label="contained card button group"
              sx={{ borderRadius: "10px" }}
            >
              <Button href={urlConfig} startIcon={<SettingsIcon />} sx={{ borderRadius: "10px" }}>
                <Translate id="edition.card.configuration">Configuration</Translate>
              </Button>
              <Button href={urlTips} startIcon={<TipsAndUpdatesIcon />} sx={{ borderRadius: "10px" }}>
                <Translate id="edition.card.tipsntricks">Tips & Tricks</Translate>
              </Button>
            </ButtonGroup>
          </ThemeProvider>
        </Stack>
      </Stack>
    </Box>
  );
};

export const EditionCardsRow = () => {
  return (
    <Grid2 container>
      {Editions.map((edition) => (
        <EditionCard key={edition.name} {...edition} />
      ))}
    </Grid2>
  );
};

const buttonTheme = createTheme({
  palette: {
    primary: {
      main: blueGrey.A700,
      dark: blueGrey.A100,
    },
  },
});
