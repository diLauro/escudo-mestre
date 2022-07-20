import React from "react";
import { ThemeProvider, Typography } from "@mui/material";
import { CtxGlogal, initiaState } from "./context/global";
import Template from "./template";
import { theme } from "./theme";

export default function App() {
  return (
    <CtxGlogal.Provider value={initiaState}>
      <ThemeProvider theme={theme}>
        <Template />
      </ThemeProvider>
    </CtxGlogal.Provider>
  );
}
