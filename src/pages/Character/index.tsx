import {
  Box,
  Button,
  Container,
  FormControlLabel,
  Grid,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { useContext, useEffect } from "react";
import { CtxGlogal } from "../../context/global";
import { useCreateDocs } from "../../hook/useCreateDocs";

export const Character = () => {
  const { data, setData } = useContext(CtxGlogal);

  const { docCreator, setDocCreator, infoCreator, isLoading, setSendCreator } =
    useCreateDocs(data.db, "characters");

  const submit = () => {

    setDocCreator({
      player: localStorage.getItem("key"),
      basicInfo: {
        nome: "Finch",
        altura: 1.78,
        peso: 90,
        descricao: "teste descrição",
        sexo: "Masculino",
        dataNascimento: "10/07/1955",
        idadeReal: 40,
        idadeAparente: 35,
        profissao: "Advogado",
        localNascimento: "new york",
        religiao: "nenhuma",
        backgound: "teste",
      },
    });
    setSendCreator(true);
  };


  return !isLoading ? (
    <Container
      sx={{
        minHeight: "100vh",
      }}
    >
      <Typography component="h1" variant="h4" pt={3}>
        Personagens
      </Typography>
      <Grid container spacing={2} mt={1}>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Switch name="editCharacter" />}
            label="Habilitar edição"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField label="Nome*" variant="outlined" size="small" fullWidth />
        </Grid>

        <Grid item xs={3}>
          <TextField label="Altura" variant="outlined" size="small" fullWidth />
        </Grid>

        <Grid item xs={3}>
          <TextField label="Peso" variant="outlined" size="small" fullWidth />
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="Descrição Física*"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>

        <Grid item xs={3}>
          <TextField label="Sexo*" variant="outlined" size="small" fullWidth />
        </Grid>

        <Grid item xs={3}>
          <TextField
            label="Data Nascimento"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>

        <Grid item xs={3}>
          <TextField
            label="Idade Real*"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>

        <Grid item xs={3}>
          <TextField
            label="Idade Aparente"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>

        <Grid item xs={3}>
          <TextField
            label="Profissão*"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="Local Nascimento"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>

        <Grid item xs={3}>
          <TextField
            label="Religião"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Background"
            variant="outlined"
            size="small"
            fullWidth
            multiline
          />
        </Grid>

        <Grid item xs={12}>
          <Stack
            spacing={2}
            justifyContent="end"
            flexDirection="row"
            flexWrap="nowrap"
          >
            <Box>


              <Button
                variant="contained"
                size="large"
                sx={{ marginX: 1 }}
                onClick={() => {
                  submit();
                }}
              >
                Continuar
              </Button>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  ) : (
    <>h1</>
  );
};
