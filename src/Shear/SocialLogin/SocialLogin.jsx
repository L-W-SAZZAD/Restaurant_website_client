import React from "react";
import facebook from "../../assets/socialIcon/facebook.png";
import linkdin from "../../assets/socialIcon/linkedin.png";
import google from "../../assets/socialIcon/google.png";

export default function SocialLogin() {
  return (
    <div className="flex justify-center items-center gap-10">
      <div className="google w-[50px] h-[50px] btn_bg_social cursor-pointer rounded-full flex justify-center items-center">
        <img className="w-[30px]" src={google} alt="google" />
      </div>
      <div className="facebook w-[50px] h-[50px] btn_bg_social cursor-pointer rounded-full flex justify-center items-center">
        <img className="w-[30px]" src={facebook} alt="facebook" />
      </div>
      <div className="github w-[50px] h-[50px] btn_bg_social cursor-pointer rounded-full flex justify-center items-center">
        <img className="w-[30px]" src={linkdin} alt="github" />
      </div>
    </div>
  );
}
