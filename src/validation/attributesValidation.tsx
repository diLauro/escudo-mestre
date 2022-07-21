import * as yup from "yup";

export const attributesSchema = yup.object().shape({
  CON: yup.object().shape({
    value: yup
      .number()
      .typeError("Obtigátorio")
      .required("Obrigátorio.")
      .min(8, "Mín 8!")
      .max(18, "Máx 18"),
  }),
  FR: yup.object().shape({
    value: yup
      .number()
      .typeError("Obtigátorio")
      .required("Obrigátorio.")
      .min(8, "Mín 8!")
      .max(18, "Máx 18"),
  }),
  AGI: yup.object().shape({
    value: yup
      .number()
      .typeError("Obtigátorio")
      .required("Obrigátorio.")
      .min(8, "Mín 8!")
      .max(18, "Máx 18"),
  }),
  DEX: yup.object().shape({
    value: yup
      .number()
      .typeError("Obtigátorio")
      .required("Obrigátorio.")
      .min(8, "Mín 8!")
      .max(18, "Máx 18"),
  }),
  INT: yup.object().shape({
    value: yup
      .number()
      .typeError("Obtigátorio")
      .required("Obrigátorio.")
      .min(8, "Mín 8!")
      .max(18, "Máx 18"),
  }),
  WILL: yup.object().shape({
    value: yup
      .number()
      .typeError("Obtigátorio")
      .required("Obrigátorio.")
      .min(8, "Mín 8!")
      .max(18, "Máx 18"),
  }),
  CAR: yup.object().shape({
    value: yup
      .number()
      .typeError("Obtigátorio")
      .required("Obrigátorio.")
      .min(8, "Mín 8!")
      .max(18, "Máx 18"),
  }),
  PER: yup.object().shape({
    value: yup
      .number()
      .typeError("Obtigátorio")
      .required("Obrigátorio.")
      .min(8, "Mín 8!")
      .max(18, "Máx 18"),
  }),
});
