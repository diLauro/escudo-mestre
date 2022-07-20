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

export const Character = () => {
  return (
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
              <Button color="secondary" variant="outlined" size="large" sx={{marginX: 1}}>
                Voltar
              </Button>

              <Button variant="contained" size="large" sx={{marginX: 1}}>
                Salvar
              </Button>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};
