
import * as React from 'react';
import { createTheme, ThemeProvider } from "@mui/material";
import { orange } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
          main: "#006400"
        },
        secondary: {
          main: "#ffa500"
        }
      }
});

