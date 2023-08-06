import * as Yup from "yup";
export const signInSchema = Yup.object({
  email: Yup.string().email("InValid Email Address").required(true),
  password:
    Yup.string()
    .required("invalid Password"),
});
