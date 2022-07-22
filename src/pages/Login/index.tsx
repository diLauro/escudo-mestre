import { Button, Container, Grid, TextField } from "@mui/material";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);

  const signInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log(response.user.uid);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setAuthing(false);
      });
  };

  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItens: "center",
        flexDirection: "column",
      }}
    >
      <Grid container justifyContent="center" spacing={3}>
        <Grid item xs={7}>
          Escudo Mestre
        </Grid>
        <Grid item xs={7}>
          <TextField label="Login" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={7}>
          <TextField label="Password" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={7}>
          <Button variant="contained" size="large" fullWidth onClick={() => {signInWithGoogle()}} disabled={authing}>
            Sign up with Google
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
