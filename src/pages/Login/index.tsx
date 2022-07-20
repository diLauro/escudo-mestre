import { Button, Card, Container, Grid, TextField } from "@mui/material";
import { RollingDices } from "../../components/Loading";

export const Login = () => {
  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItens: "center",
        flexDirection: "column"
      }}
    >
      <Grid container justifyContent="center" spacing={3}>
        <Grid item xs={7} >
          Escudo Mestre
        </Grid>
        <Grid item xs={7} >
          <TextField label="Login" variant="outlined" fullWidth/>
        </Grid>
        <Grid item xs={7} >
          <TextField label="Password" variant="outlined" fullWidth/>
        </Grid>
        <Grid item xs={7} >
          <Button variant="contained" size="large" fullWidth>Sign up</Button>
        </Grid>
      
      </Grid>
    </Container>
  );
};
