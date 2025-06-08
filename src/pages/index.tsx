import React from "react";

import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

import { DocSection } from "../types";

import { Container, Stack } from "@mui/material";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";

import clsx from "clsx";

import styles from "./styles.module.css";

const sections: DocSection[] = [
  {
    type: "link",
    label: "Users",
    description: "Installing, software, boot management, troubleshooting and more.",
    href: "docs/user/intro",
    icon: PersonOutlineOutlinedIcon,
  },
  {
    type: "link",
    label: "Packaging",
    description: "Get to grips with our advanced packaging features using easy to follow guides.",
    href: "docs/packaging",
    icon: Inventory2OutlinedIcon,
  },
  {
    type: "link",
    label: "Organization",
    description: "Learn about the Solus Project organization, and how to contribute.",
    href: "docs/organization/intro",
    icon: Groups2OutlinedIcon,
  },
  {
    type: "link",
    label: "Dev Log",
    description: "Learn what our developers have been up to, and preview upcoming changes.",
    href: "blog",
    icon: EngineeringOutlinedIcon,
  },
];

const Card = (item: DocSection) => {
  return (
    <Link to={item.href} className={clsx("card padding--lg", styles.cardContainer)}>
      <Heading as="h2" className={clsx("text--truncate", styles.cardTitle)} title={item.label}>
        <item.icon fontSize="large" sx={{ marginRight: 1 }} /> {item.label}
      </Heading>
      {item.description && (
        <p className={clsx("text--truncate", styles.cardDescription)} title={item.description}>
          {item.description}
        </p>
      )}
    </Link>
  );
};

const Docs = () => {
  return (
    <Layout title="Documentation" description="Solus">
      <Container sx={{ marginBlock: "4vh" }}>
        <Stack
          className="hero hero--secondary"
          alignItems="center"
          justifyContent="center"
          padding="5vh 10vw"
          spacing={2}
        >
          <Heading as="h1" className="hero__title">
            Solus Help Center
          </Heading>
          <p className="hero__subtitle">Documentation for Solus</p>
        </Stack>
        <section className="row">
          {sections.map((section, index) => (
            <article key={index} className="col col--6 margin-bottom--lg">
              <Card
                type="link"
                href={section.href}
                label={section.label}
                description={section.description}
                icon={section.icon}
              />
            </article>
          ))}
        </section>
      </Container>
    </Layout>
  );
};

export default Docs;
