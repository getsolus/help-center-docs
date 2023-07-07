import { blueGrey } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    subfullhd: true;
    fullhd: true;
  }
}

const Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      subfullhd: 1800,
      fullhd: 1920,
    },
  },
  palette: {
    primary: {
      light: blueGrey.A700,
      main: blueGrey.A700,
      dark: blueGrey.A100,
    },
  },
});

export const SiteTheme = responsiveFontSizes(Theme, {
  breakpoints: Theme.breakpoints.keys,
  factor: 2,
});
