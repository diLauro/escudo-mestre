import {
  Button,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import Atributes from "../../components/Attributes";
import constants from "../../data/constants.json";
import { FaPlus, FaMinus } from "react-icons/fa";

export const FirstAccess = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [step, setStep] = useState<number>(1);
  const [total, setTotal] = useState<number[]>([0, 0]);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(attributesSchema),
    // mode: "all",
  });

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
    <>
      {step === 1 && (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4">Qual o nome do seu personagem?</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="Nome completo do personagem"
              color="primary"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              onClick={() => setStep(2)}
            >
              Continuar
            </Button>
          </Grid>
        </Grid>
      )}

      {step === 2 && (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4">Qual idade do seu personagem?</Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Idade Real"
              placeholder="Nome completo do personagem"
              color="primary"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Idade Real"
              placeholder="Nome completo do personagem"
              color="primary"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              onClick={() => setStep(3)}
            >
              Continuar
            </Button>
          </Grid>
        </Grid>
      )}

      {step === 3 && (
        <Grid container mt={4}>
          <Grid item xs={12}>
            <form onSubmit={handleSubmit(() => {})}>
              <Grid container spacing={2} alignItems="center">
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

                <Grid container spacing={1} alignItems="center" mt={1}>
                  <Grid item xs={12} md={6}></Grid>
                  {!matches && <Grid item xs={2} />}
                  <Grid item xs={4} md={3} textAlign="center">

                  <TextField
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() => {}}
                              onMouseDown={() => {}}
                              edge="start"
                            >
                              <FaMinus size={15} />
                            </IconButton>
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() => {}}
                              onMouseDown={() => {}}
                              edge="end"
                            >
                              <FaPlus size={15} />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      sx={{ input: { textAlign: "center" } }}
                    />

                    
                    {total[0]}
                  </Grid>
                  <Grid item xs={4} md={3} textAlign="center">
                    {total[1]}
                  </Grid>
                  <Grid item xs={2} md={3} textAlign="center">
                    <TextField
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() => {}}
                              onMouseDown={() => {}}
                              edge="start"
                            >
                              <FaMinus size={15} />
                            </IconButton>
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() => {}}
                              onMouseDown={() => {}}
                              edge="end"
                            >
                              <FaPlus size={15} />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      sx={{ input: { textAlign: "center" } }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item></Grid>
          <Grid item xs={12}>
            <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              onClick={() => setStep(2)}
            >
              Continuar
            </Button>
          </Grid>
        </Grid>
      )}
    </>
  );
};
