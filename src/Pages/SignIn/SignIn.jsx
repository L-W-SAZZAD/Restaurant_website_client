import React, { useState } from "react";
import signUp from "../../assets/others/authentication.gif";
import SignInForm from "./SignInForm";
import Helmets from "../../Utilities/Helmets/Helmets";

export default function SignIn() {
  const [model, setModal] = useState(false);
  return (
    <div
      className={`pt-24 bg-setter ${model && "opacity-70"}
      }`}
    >
      <Helmets text="SignIn" />
      <div className="sign_up lg:w-[1320px] lg:mx-auto lg:px-0 px-3 py-5">
        <div className="lg:flex md:flex justify-center items-center gap-10">
          {/* image */}
          <div className="signUp_image lg:w-[60%] md:w-[50%] lg:block md:block hidden">
            <img
              className="w-full h-full object-cover block rounded-md"
              src={signUp}
              alt="signUp"
            />
          </div>
          {/* image */}

          {/* input form */}
          <SignInForm model={model} setModel={setModal} />
          {/* input form */}
        </div>
      </div>
    </div>
  );
}
