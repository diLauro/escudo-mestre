import React from "react";
import { Card, ThemeProvider, Typography } from "@mui/material";
import { CtxGlogal, initiaState } from "./context/global";
import Template from "./template";
import { theme } from "./theme";
import Router from "./router";

export default function App() {
  return (
    <CtxGlogal.Provider value={initiaState}>
      <ThemeProvider theme={theme}>
        <Template>
          <Router />
        </Template>
      </ThemeProvider>
    </CtxGlogal.Provider>
  );
}
