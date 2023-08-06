import React, { useContext } from "react";
import signUpPic from "../../assets/others/authentication.gif";
import SocialLogin from "../../Shear/SocialLogin/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signUpSchema } from "../../Utilities/SignUpSchema/SignUpSchema";
import { AuthContext } from "../../UserContext/UserContext";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";

export default function SignUpForm() {
  const { signUp, loading, userUpdate, verifyEmail, user } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/signIn";
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: () => {
      register();
    },
  });

  //   sign up
  const register = () => {
    signUp(formik.values.email, formik.values.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // updatePRofile
        userUpdate(formik.values.fullName)
          .then(() => {
            // verify email
            verifyEmail()
              .then(() => {
                toast.success("Check Your Email And Verify ");
                navigate(from, { replace: true });
              })
              .catch((error) => toast.error(error.message));
            // verify email
          })
          .catch((error) => toast.error(error.message));
        // updatePRofile
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <form
      onSubmit={formik.handleSubmit}
      action=""
      className="lg:flex md:flex justify-center items-center gap-10"
    >
      {/* image */}
      <div className="signUp_image lg:w-[60%] md:w-[50%] lg:block md:block hidden">
        <img
          className="w-full h-full object-cover block rounded-md"
          src={signUpPic}
          alt="signUp"
        />
      </div>
      {/* image */}

      {/* input form */}
      <div className="signUp_info lg:w-[40%] md:w-[50%]">
        <div className="fullName_input py-3">
          <label
            htmlFor="fullName"
            className="text-xl text_color pb-3 inline-block font-bold tracking-wider"
          >
            FullName
          </label>
          <div>
            <input
              className="px-3 py-3 rounded-md text-lg tracking-wide lg:w-[100%] md:w-[100%] w-[90%]  bg-transparent text-white shadow-md shadow-slate-300 outline-none border-none"
              type="text"
              name="fullName"
              id="fullName"
              placeholder="FullName"
              onChange={formik.handleChange}
            />
            {/* error message */}
            {formik.errors.fullName && (
              <p className="text-red-700 pt-3 text-sm font-semibold tracking-wide">
                {formik.errors.fullName}
              </p>
            )}
            {/* error message */}
          </div>
        </div>
        <div className="email_input py-3">
          <label
            htmlFor="email"
            className="text-xl text_color pb-3 inline-block font-bold tracking-wider"
          >
            Email
          </label>
          <div>
            <input
              className="px-3 py-3 rounded-md text-lg tracking-wide lg:w-[100%] md:w-[100%] w-[90%] bg-transparent text-white shadow-md shadow-slate-300 outline-none border-none"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={formik.handleChange}
            />
            {/* error message */}
            {formik.errors.email && (
              <p className="text-red-700 pt-3 text-sm font-semibold tracking-wide">
                {formik.errors.email}
              </p>
            )}
            {/* error message */}
          </div>
        </div>
        <div className="password_input py-3">
          <label
            htmlFor="password"
            className="text-xl text_color pb-3 inline-block font-bold tracking-wider"
          >
            Password
          </label>
          <div>
            <input
              className="px-3 py-3 rounded-md text-lg tracking-wide  bg-transparent lg:w-[100%] md:w-[100%] w-[90%] text-white shadow-md shadow-slate-300 outline-none border-none"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={formik.handleChange}
            />
            {/* error message */}
            {formik.errors.password && (
              <p className="text-red-700 pt-3 text-sm font-semibold tracking-wide">
                {formik.errors.password}
              </p>
            )}
            {/* error message */}
          </div>
        </div>
        <div className="py-5">
          <button
            disabled={loading}
            type="submit"
            className=" btn_bg btn py-2 px-10 rounded-md border-none outline-none text-lg font-bold tracking-wide text-white lg:w-full md:w-full w-[90%]"
          >
            {loading ? <PulseLoader color="#36d7b7" /> : " Sign Up"}
          </button>
        </div>
        {/* social log in  */}
        <div>
          <h2 className="text-center text-lg text-[#d5d2d2]">
            ----------Another Login With----------
          </h2>
          <div className="py-5">
            <SocialLogin />
          </div>
          <p className="text-center text-base text-[#d5d2d2]">
            Already Have An Account{" "}
            <Link className="text-lg  text_color pl-3" to="/signIn">
              Sign In
            </Link>
          </p>
        </div>
        {/* social log in  */}
      </div>
      {/* input form */}
    </form>
  );
}
