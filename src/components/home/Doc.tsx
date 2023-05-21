import React from "react";
import Link from "@docusaurus/Link";
import { Box, Stack } from "@mui/material";
import { DocSection } from "../../types";
import Grid2 from "@mui/material/Unstable_Grid2";

const Doc = ({ title, img, description, link }: DocSection) => {
  return (
    <Grid2 key={`Doc-Grid-${title}`} xs={6}>
      <Box className="card shadow--lw" sx={{ p: 6 }}>
        <Stack alignItems="center" gap={2} textAlign="center">
          {img}
          <Link to={link}>
            <h3 style={{ fontWeight: "bold" }}>{title}</h3>
          </Link>
          {description}
        </Stack>
      </Box>
    </Grid2>
  );
};

export default Doc;
