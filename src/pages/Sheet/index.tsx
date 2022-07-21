import {
  Box,
  Button,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  Stack,
  Switch,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { get, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Atributes } from "../../components/Attributes";
import constants from "../../data/constants.json";
import { attributesSchema } from "../../validation/attributesValidation";
import { useCallback, useState } from "react";

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
    mode: "onBlur",
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
    console.log(getValues());
    setTotal([totalValue, totalMod]);
  }, []);

  return (
    <Container
      sx={{
        minHeight: "100vh",
      }}
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

        <form onSubmit={handleSubmit(submit)}>
          <Grid item xs={12} md={7} mt={2}>
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
          </Grid>

          <Grid item xs={12} md={7}>
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
          </Grid>
        </form>
      </Grid>
    </Container>
  );
};
