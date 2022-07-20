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
  useMediaQuery,
  useTheme,
} from "@mui/material";

export const Sheet = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Container
      sx={{
        minHeight: "100vh",
      }}
    >
      <Typography component="h1" variant="h4" pt={3}>
        Ficha
      </Typography>

      <Grid container spacing={2} mt={1} justifyContent="center">
        <Grid item xs={12}>
          <FormControlLabel
            control={<Switch name="editCharacter" />}
            label="Habilitar edição"
          />
        </Grid>

        <Grid item xs={12} md={7}>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h5" fontWeight="bold">
                Atributos
              </Typography>
            </Grid>
            {!matches && (<Grid item xs={3}/>)}
            <Grid item xs={3} md={2} textAlign="center">
              Valor
            </Grid>
            <Grid item xs={3} md={2} textAlign="center">
              Mod
            </Grid>
            <Grid item xs={3} md={2} textAlign="center">
              %
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={7}>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={3} md={6}>
              <Typography>
                {matches ? (
                  <>
                    <Typography component="span" fontWeight="bold">
                      Constituição
                    </Typography>
                    (CON)
                  </>
                ) : (
                  <>CON</>
                )}
              </Typography>
            </Grid>
            <Grid item xs={3} md={2}>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                sx={{ input: { textAlign: "center" } }}
              />
            </Grid>
            <Grid item xs={3} md={2}>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                sx={{ input: { textAlign: "center" } }}
              />
            </Grid>
            <Grid item xs={3} md={2}>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
                sx={{ input: { textAlign: "center" } }}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={7}>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={6}>
              <Typography>
                <Typography component="span" fontWeight="bold">
                  Força
                </Typography>{" "}
                (FR)
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                sx={{ input: { textAlign: "center" } }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                sx={{ input: { textAlign: "center" } }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
                sx={{ input: { textAlign: "center" } }}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={7}>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={6}>
              <Typography>
                <Typography component="span" fontWeight="bold">
                  Destreza
                </Typography>{" "}
                (DEX)
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                sx={{ input: { textAlign: "center" } }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                sx={{ input: { textAlign: "center" } }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
                sx={{ input: { textAlign: "center" } }}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={7}>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={6}>
              <Typography>
                <Typography component="span" fontWeight="bold">
                  Agilidade
                </Typography>{" "}
                (AGI)
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                sx={{ input: { textAlign: "center" } }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                sx={{ input: { textAlign: "center" } }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
                sx={{ input: { textAlign: "center" } }}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={7}>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={6}>
              <Typography>
                <Typography component="span" fontWeight="bold">
                  Inteligência
                </Typography>{" "}
                (INT)
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                sx={{ input: { textAlign: "center" } }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                sx={{ input: { textAlign: "center" } }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
                sx={{ input: { textAlign: "center" } }}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={7}>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={6}>
              <Typography>
                <Typography component="span" fontWeight="bold">
                  Força de Vontade
                </Typography>{" "}
                (WILL)
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                sx={{ input: { textAlign: "center" } }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                sx={{ input: { textAlign: "center" } }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
                sx={{ input: { textAlign: "center" } }}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={7}>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={6}>
              <Typography>
                <Typography component="span" fontWeight="bold">
                  Percepção
                </Typography>{" "}
                (PER)
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                sx={{ input: { textAlign: "center" } }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                sx={{ input: { textAlign: "center" } }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
                sx={{ input: { textAlign: "center" } }}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={7}>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={6}>
              <Typography>
                <Typography component="span" fontWeight="bold">
                  Carisma
                </Typography>{" "}
                (CAR)
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                sx={{ input: { textAlign: "center" } }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                sx={{ input: { textAlign: "center" } }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
                sx={{ input: { textAlign: "center" } }}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={7}>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={6}>
              Total
            </Grid>
            <Grid item xs={2} textAlign="center">
              101
            </Grid>
            <Grid item xs={2} textAlign="center">
              0
            </Grid>
          </Grid>
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
                color="secondary"
                variant="outlined"
                size="large"
                sx={{ marginX: 1 }}
              >
                Voltar
              </Button>

              <Button variant="contained" size="large" sx={{ marginX: 1 }}>
                Salvar
              </Button>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};
