import { Box, Paper } from "@mui/material";
import { useContext } from "react";
import { NavBar } from "../components/NavBar";
import { CtxGlogal } from "../context/global";

export default function Template() {
  const ctxLogin = useContext(CtxGlogal);

  console.log(ctxLogin)
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {ctxLogin.user && <NavBar />}
      <Paper sx={{ borderRadius: 0, flexGrow: 1 }}>Teste</Paper>
    </Box>
  );
}
