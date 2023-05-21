import React from "react";
import Layout from "@theme/Layout";

import Container from "@mui/material/Container";
import Grid2 from "@mui/material/Unstable_Grid2";
import { DocSection } from "../types";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import Doc from "../components/home/Doc";
import Header from "../components/home/Header";

const DocList: DocSection[] = [
  {
    title: "Help Center Home",
    description: <>Installing, software, boot management, troubleshooting and more</>,
    link: "docs/user/intro",
    img: <PersonOutlineOutlinedIcon sx={{ fontSize: 96 }} />,
  },
  {
    title: "Packaging",
    description: <>Get to grips with our advanced packaging features using easy to follow guides</>,
    link: "docs/packaging",
    img: <Inventory2OutlinedIcon sx={{ fontSize: 96 }} />,
  },
];

const Docs = () => {
  return (
    <Layout title="Documentation" description="Solus">
      <Header />
      <Container sx={{ marginBlock: "4vh", maxWidth: 1920 }}>
        <Grid2
          columns={{
            xs: 6,
            sm: 6,
            md: 12,
          }}
          container
          margin={0}
          spacing={4}
          width={1}
        >
          {DocList.map((d) => (
            <Doc {...d} key={`Doc-${d.title}`} />
          ))}
        </Grid2>
      </Container>
    </Layout>
  );
};

export default Docs;
