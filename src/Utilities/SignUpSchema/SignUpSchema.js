import * as Yup from "yup";
export const signUpSchema = Yup.object({
  fullName: Yup.string()
    .min(3, "Invalid Name")
    .max(20, "To Much Long ...")
    .required(true),
  email: Yup.string().email("InValid Email Address").required(true),
  password: Yup.string()
    .matches(/(?=.*[A-Z])/, "At least one uppercase character")
    .matches(/(?=.*\d)/, "At least one digit")
    .matches(
      /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/,
      "At least one special character "
    )
    .matches(/^.{8,20}$/, "Password must be 8-20 Characters Long ")
    .required("invalid Password"),
});
