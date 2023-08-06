import React, { useContext, useState } from "react";
import SocialLogin from "../../Shear/SocialLogin/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signInSchema } from "../../Utilities/SignInSchema/SignInSchema";
import { AuthContext } from "../../UserContext/UserContext";
import { toast } from "react-toastify";
import Forget from "../../Shear/Forget/Forget";
import { PulseLoader } from "react-spinners";

export default function SignInForm({ model, setModel }) {
  const { signIn, loading, forgetPassword, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const initialValues = {
    email: "",
    password: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: signInSchema,
    onSubmit: () => {
      logIn();
    },
  });
  // login user
  const logIn = () => {
    signIn(formik.values.email, formik.values.password)
      .then((result) => {
        const user = result.user;
        if (user.emailVerified === false) {
          return toast.warn(
            "Your Email Is Not emailVerified ,Verify Your Email And Log in Again"
          );
        }
        navigate(from, { replace: true });
        toast.success("Log In Success");
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <form
      action=""
      onSubmit={formik.handleSubmit}
      className="signUp_info lg:w-[40%] md:w-[50%] "
    >
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

          {/* forget password  */}
          <Link to="" onClick={() => setModel(true)}>
            <p className="pt-3 text_color">Forget Password ?</p>
          </Link>
          {/* forget password  */}
        </div>
      </div>
      <div className="py-5">
        <button
          disabled={loading}
          type="submit"
          className=" btn_bg btn py-2 px-10 rounded-md border-none outline-none text-lg font-bold tracking-wide text-white lg:w-full md:w-full w-[90%]"
        >
          {loading ? <PulseLoader color="#36d7b7" /> : " Sign In"}
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
          Are You New Here Create Account{" "}
          <Link className="text-lg  text_color pl-3" to="/signUp">
            Sign Up
          </Link>
        </p>
      </div>
      {/* social log in  */}
      {model && <Forget model={model} setModel={setModel} />}
    </form>
  );
}
