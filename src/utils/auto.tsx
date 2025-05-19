import { Breakpoint, useMediaQuery, useTheme } from "@mui/material";

export const AutoCenteredOnSmall = (): "center" | "flex-start" => {
  const theme = useTheme();

  return useMediaQuery(theme.breakpoints.down("md")) ? "center" : "flex-start";
};

type StackDirection = "column" | "column-reverse" | "row" | "row-reverse";

export const AutoColumnOnSmall = (
  dir: StackDirection = "row",
  columnDir: StackDirection = "column",
  breakpoint: Breakpoint = "md"
): StackDirection => {
  const theme = useTheme();

  return useMediaQuery(theme.breakpoints.down(breakpoint)) ? columnDir : dir;
};
