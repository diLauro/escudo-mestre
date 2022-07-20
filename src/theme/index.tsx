import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { orange } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#006400",
    },
    secondary: {
      main: "#ffa500",
    },
  },
});
