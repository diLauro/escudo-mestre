import {
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { memo, useEffect, useState } from "react";
import {
  DeepRequired,
  FieldErrorsImpl,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

type Props = {
  label: string;
  abbreviation: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrorsImpl<DeepRequired<FieldValues>>;
  setValue: UseFormSetValue<FieldValues>;
  totalAttributes: () => void;
};

const Atributes = ({
  label,
  abbreviation,
  register,
  errors,
  setValue,
  totalAttributes,
}: Props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const [fieldValue, setFieldValue] = useState<number | undefined>();
  const [fieldMod, setFieldMod] = useState<number | undefined>();
  const [fieldPercentage, setFieldPercentage] = useState<number | undefined>();

  useEffect(() => {
    const value = fieldValue ? fieldValue : 0;
    const mod = fieldMod ? fieldMod : 0;
    const percentage = (value + mod) * 4;
    setFieldPercentage(percentage);
  }, [fieldMod, fieldValue]);

  return (
    <>
      <Grid item xs={3} md={6}>
        <Typography>
          {matches ? (
            <>
              <Typography component="span" fontWeight="bold">
                {label}
              </Typography>{" "}
              ({abbreviation})
            </>
          ) : (
            <>{abbreviation}</>
          )}
        </Typography>
      </Grid>
      <Grid item xs={3} md={2}>
        <TextField
          {...register(`${abbreviation}.value`)}
          inputProps={{ type: "number", min: "0", inputMode: "numeric" }}
          variant="outlined"
          size="small"
          fullWidth
          sx={{ input: { textAlign: "center" } }}
          onChange={(e) => {
            setValue(`${abbreviation}.value`, e.target.value);
            setFieldValue(Number.parseInt(e.target.value));
            totalAttributes();
          }}
          error={errors[abbreviation]?.value?.message ? true : false}
          helperText={
            errors[abbreviation]?.value?.message &&
            `${errors[abbreviation]?.value?.message}`
          }
        />
      </Grid>
      <Grid item xs={3} md={2}>
        <TextField
          autoComplete="off"
          type="number"
          {...register(`${abbreviation}.mod`)}
          variant="outlined"
          size="small"
          fullWidth
          sx={{ input: { textAlign: "center" } }}
          onChange={(e) => {
            setValue(`${abbreviation}.mod`, e.target.value);
            setFieldMod(Number.parseInt(e.target.value));
            totalAttributes();
          }}
        />
      </Grid>
      <Grid item xs={3} md={2}>
        <TextField
          autoComplete="off"
          type="number"
          {...register(`${abbreviation}.percentage`)}
          variant="outlined"
          size="small"
          fullWidth
          InputProps={{
            readOnly: true,
          }}
          sx={{ input: { textAlign: "center" } }}
          value={fieldPercentage}
          onChange={(e) => setFieldMod(Number.parseInt(e.target.value))}
        />
      </Grid>
    </>
  );
};

export default Atributes;