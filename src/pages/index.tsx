import React from "react";
import Layout from "@theme/Layout";

import Container from "@mui/material/Container";
import Grid2 from "@mui/material/Unstable_Grid2";
import { DocSection } from "../types";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import Doc from "../components/home/Doc";
import Header from "../components/home/Header";

const DocList: DocSection[] = [
  {
    title: "Users",
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
  {
    title: "Dev Log",
    description: <>Learn what our developers have been up to</>,
    link: "blog",
    img: <EngineeringOutlinedIcon sx={{ fontSize: 96 }} />,
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
            sm: 18,
            md: 18,
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
