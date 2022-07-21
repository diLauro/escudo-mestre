import { Box, Paper } from "@mui/material";
import React, { useContext } from "react";
import { NavBar } from "../components/NavBar";
import { CtxGlogal } from "../context/global";

type Props = {
  children?: JSX.Element;
};
export default function Template({ children }: Props) {
  const ctxLogin = useContext(CtxGlogal);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {ctxLogin.user && <NavBar />}
      <Paper sx={{ borderRadius: 0, flexGrow: 1 }}>{children}</Paper>
    </Box>
  );
}
