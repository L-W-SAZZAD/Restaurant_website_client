import React from "react";
import SignUpForm from "./SignUpForm";
import Helmets from "../../Utilities/Helmets/Helmets";

export default function SignUp() {
  return (
    <div className="pt-24 bg-setter">
      <Helmets text="SignUp" />
      <div className="sign_up lg:w-[1320px] lg:mx-auto lg:px-0 px-3 py-5">
        <SignUpForm />
      </div>
    </div>
  );
}
