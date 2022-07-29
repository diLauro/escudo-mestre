import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { GiDiceShield } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CtxGlogal } from "../../context/global";
export const NavBar = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const { data, setData } = useContext(CtxGlogal);

  const logout = async () => {
    window.localStorage.clear();
    setData({ app: data.app, db: data.db });
    await signOut(auth);
    navigate("/");
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <GiDiceShield size={30} />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Escudo Mestre
        </Typography>
        <Button
          color="inherit"
          onClick={() => {
            logout();
          }}
        >
          <FiLogOut size={22} style={{ marginRight: 15 }} /> Sair
        </Button>
      </Toolbar>
    </AppBar>
  );
};
