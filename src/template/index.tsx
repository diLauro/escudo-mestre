import { Box, Paper } from "@mui/material";
import { NavBar } from "../components/NavBar";

type Props = {
  children?: JSX.Element;
};
export default function Template({ children }: Props) {

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {localStorage.getItem("key") && <NavBar />
       }
      <Paper sx={{ borderRadius: 0, flexGrow: 1}}>{children}</Paper>
    </Box>
  );
}
