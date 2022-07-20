import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { orange } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#9c27b0",
    },
    secondary: {
      main: "#f9a825",
    },
  },
});
