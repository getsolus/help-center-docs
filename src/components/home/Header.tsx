import React from "react";
import Stack from "@mui/material/Stack";

const Header = () => {
  return (
    <Stack alignItems="center" className="hero hero--secondary" justifyContent="center" padding="5vh 10vw" spacing={2}>
      <h1 className="hero__title">Solus Help Center</h1>
      <p className="hero__subtitle">Documentation for Solus</p>
    </Stack>
  );
};

export default Header;
