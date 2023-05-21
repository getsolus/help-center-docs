import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

type DocSection = {
  title: string;
  description: JSX.Element;
  link: string;
  img: JSX.Element;
};

const DocList: DocSection[] = [
  {
    title: "Help Center Home",
    description: <>Installing, software, boot mangement, troubleshooting and more</>,
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

function Doc({ title, img, description, link }: DocSection) {
  return (
    <div className={clsx("col col-3")}>
      <div className="text--center">{img}</div>
      <div className="text--center padding-horiz--md">
        <Link href={link}>
          <h3>{title}</h3>
        </Link>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function DocSections(): JSX.Element {
  return (
    <section className={styles.docSection}>
      <div className="container">
        <div className="row">
          {DocList.map((props, idx) => (
            <Doc key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
