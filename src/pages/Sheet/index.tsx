import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  Stack,
  Switch,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import Atributes from "../../components/Attributes";
import constants from "../../data/constants.json";
import { attributesSchema } from "../../validation/attributesValidation";
import { FaMinus, FaPlus } from "react-icons/fa";

export const Sheet = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(attributesSchema),
    mode: "all",
  });

  const [total, setTotal] = useState<number[]>([0, 0]);

  const submit = (dataForm: any) => {
    // console.log(dataForm);
    // console.log(getValues()['DEX'].value);
    totalAttributes();
  };

  const totalAttributes = useCallback(() => {
    let totalValue = 0;
    let totalMod = 0;
    constants.forEach((item) => {
      totalValue += getValues()[item.abbreviation].value
        ? Number.parseInt(getValues()[item.abbreviation].value)
        : 0;
      totalMod += getValues()[item.abbreviation].mod
        ? Number.parseInt(getValues()[item.abbreviation].mod)
        : 0;
    });
    setTotal([totalValue, totalMod]);
  }, []);

  return (
    <Container
      sx={{
        minHeight: "100vh",
      }}
      maxWidth="xl"
    >
      <Typography component="h1" variant="h4" pt={3}>
        Ficha
      </Typography>

      <Grid container spacing={2} mt={1} justifyContent="center" p={2}>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Switch name="editCharacter" />}
            label="Habilitar edição"
          />
        </Grid>

        <Grid item xs={12} md={7} mt={2}>
          <form onSubmit={handleSubmit(submit)}>
            <Grid container spacing={1} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h5" fontWeight="bold">
                  Atributos
                </Typography>
              </Grid>
              {!matches && <Grid item xs={3} />}
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
            <Divider sx={{ marginY: 2 }} />

            <Grid container spacing={1}>
              {constants.map(({ label, abbreviation }) => (
                <Atributes
                  label={label}
                  abbreviation={abbreviation}
                  register={register}
                  errors={errors}
                  setValue={setValue}
                  totalAttributes={totalAttributes}
                  key={abbreviation}
                />
              ))}

              <Grid container spacing={1} alignItems="center">
                <Grid item xs={12} md={6}></Grid>
                {!matches && <Grid item xs={3} />}
                <Grid item xs={3} md={2} textAlign="center">
                  {total[0]}
                </Grid>
                <Grid item xs={3} md={2} textAlign="center">
                  {total[1]}
                </Grid>
                <Grid item xs={3} md={2} textAlign="center"></Grid>
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

                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      sx={{ marginX: 1 }}
                    >
                      Salvar
                    </Button>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </form>
        </Grid>

        <Grid item xs={12} md={5}>
          <Grid item xs={12} mt={2}>
            <Typography variant="h5" fontWeight="bold">
              Indicadores
            </Typography>

            <Divider sx={{ marginY: 2 }} />

            <Grid container spacing={3}>
              <Grid item xs={6} md={4}>
                <Card
                  sx={{
                    boxShadow: `0 0 5px ${theme.palette.secondary.main}`,
                  }}
                >
                  <CardContent>
                    <Typography gutterBottom variant="h3" textAlign="center">
                      20
                      <Typography
                        gutterBottom
                        component="span"
                        variant="h4"
                        textAlign="center"
                        color="GrayText"
                      >
                        <br />( 21 )
                      </Typography>
                    </Typography>
                    <Typography
                      variant="h5"
                      textAlign="center"
                      color={theme.palette.secondary.dark}
                    >
                      Pontos de Vida
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button size="small">
                      <FaMinus />
                    </Button>
                    <Button size="small">
                      <FaPlus />
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={6} md={4}>
                <Card
                  sx={{
                    boxShadow: `0 0 5px ${theme.palette.secondary.main}`,
                  }}
                >
                  <CardContent>
                    <Typography gutterBottom variant="h3" textAlign="center">
                      20
                      <Typography
                        gutterBottom
                        component="span"
                        variant="h3"
                        textAlign="center"
                        color="GrayText"
                      >
                        {" "}
                        / 21
                      </Typography>
                    </Typography>
                    <Typography
                      variant="h5"
                      textAlign="center"
                      color={theme.palette.secondary.dark}
                    >
                      Pontos de Vida
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button size="small">
                      <FaMinus />
                    </Button>
                    <Button size="small">
                      <FaPlus />
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={6} md={4}>
                <Card
                  sx={{
                    boxShadow: `0 0 5px ${theme.palette.secondary.main}`,
                  }}
                >
                  <CardContent>
                    <Typography gutterBottom variant="h3" textAlign="center">
                      20
                      <Typography
                        gutterBottom
                        component="span"
                        variant="h3"
                        textAlign="center"
                        color="GrayText"
                      >
                        {" "}
                        / 21
                      </Typography>
                    </Typography>
                    <Typography
                      variant="h5"
                      textAlign="center"
                      color={theme.palette.secondary.dark}
                    >
                      Pontos de Vida
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button size="small">
                      <FaMinus />
                    </Button>
                    <Button size="small">
                      <FaPlus />
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={6} md={4}>
                <Card
                  sx={{
                    boxShadow: `0 0 5px ${theme.palette.text.secondary}`,
                  }}
                >
                  <CardContent>
                    <Typography gutterBottom variant="h3" textAlign="center">
                      20
                      <Typography
                        gutterBottom
                        component="span"
                        variant="h3"
                        textAlign="center"
                        color="GrayText"
                      >
                        {" "}
                        / 21
                      </Typography>
                    </Typography>
                    <Typography
                      variant="h5"
                      textAlign="center"
                      color={theme.palette.secondary.dark}
                    >
                      Pontos de Vida
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button size="small">
                      <FaMinus />
                    </Button>
                    <Button size="small">
                      <FaPlus />
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={6} md={4}>
                <Card
                  sx={{
                    boxShadow: `0 0 5px ${theme.palette.secondary.main}`,
                  }}
                >
                  <CardContent>
                    <Typography gutterBottom variant="h3" textAlign="center">
                      20
                      <Typography
                        gutterBottom
                        component="span"
                        variant="h3"
                        textAlign="center"
                        color="GrayText"
                      >
                        {" "}
                        / 21
                      </Typography>
                    </Typography>
                    <Typography
                      variant="h5"
                      textAlign="center"
                      color={theme.palette.secondary.dark}
                    >
                      Pontos de Vida
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button size="small">
                      <FaMinus />
                    </Button>
                    <Button size="small">
                      <FaPlus />
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={6} md={4}>
                <Card
                  sx={{
                    boxShadow: `0 0 5px ${theme.palette.secondary.main}`,
                  }}
                >
                  <CardContent>
                    <Typography gutterBottom variant="h3" textAlign="center">
                      20
                      <Typography
                        gutterBottom
                        component="span"
                        variant="h3"
                        textAlign="center"
                        color="GrayText"
                      >
                        {" "}
                        / 21
                      </Typography>
                    </Typography>
                    <Typography
                      variant="h5"
                      textAlign="center"
                      color={theme.palette.secondary.dark}
                    >
                      Pontos de Vida
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button size="small">
                      <FaMinus />
                    </Button>
                    <Button size="small">
                      <FaPlus />
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={7}>
          <Grid item xs={12} mt={2}>
            <Typography variant="h5" fontWeight="bold">
              Aprimoramentos
            </Typography>

            <Divider sx={{ marginY: 2 }} />
          </Grid>
        </Grid>

        <Grid item xs={12} md={5}>
          <Grid item xs={12} mt={2}>
            <Typography variant="h5" fontWeight="bold">
              Perícias de Combate
            </Typography>

            <Divider sx={{ marginY: 2 }} />
          </Grid>
        </Grid>

        <Grid item xs={12} md={12}>
          <Grid item xs={12} mt={2}>
            <Typography variant="h5" fontWeight="bold">
              Perícias
            </Typography>

            <Divider sx={{ marginY: 2 }} />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
