import React, { useState } from "react";
import logo from "../../assets/logo.png";
import userImg from "../../assets/home/01.jpg";
import Hamburger from "hamburger-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" fixed z-50 top-0 left-0 w-full">
      <div className="lg:flex md:flex sm:flex flex justify-between items-center lg:justify-between md:justify-between sm:justify-between lg:w-[1320px] lg:mx-auto w-full lg:px-0 px-3 relative cursor-pointer z-50">
        {/* navbar logo */}
        <div className="navbar_logos lg:flex items-center justify-center gap-3 py-5 ">
          <figure className=" w-[60px] h-[60px]">
            <img src={logo} alt="logo" />
          </figure>

          <figcaption className="lg:block hidden">
            {" "}
            <span className="text_color lg:text-3xl font-extrabold text-white">
              Mini Boss
            </span>{" "}
            <span className="text_color_mini">Restaurant</span>
          </figcaption>
        </div>
        {/* navbar logo */}
        {/* nav list */}
        <ul
          className={`lg:flex md:flex lg:static md:static absolute items-center gap-5 capitalize bg-black lg:bg-transparent md:bg-transparent top-[100%] ${
            isOpen ? "left-0" : "left-[-900px]"
          }  lg:w-fit md:w-fit w-[60%] text-center duration-500`}
        >
          <li className="lg:pb-0 md:pb-0 pb-3 lg:pt-0 md:pt-0 pt-3 hover:text-red-500 cursor-pointer duration-300 text-[#f3f3f3] text-lg">
            Home
          </li>
          <li className="lg:pb-0 md:pb-0 pb-5 hover:text-red-500 cursor-pointer duration-300 text-[#f3f3f3] text-lg">
            Contact Us
          </li>
          <li className="lg:pb-0 md:pb-0 pb-5 hover:text-red-500 cursor-pointer duration-300 text-[#f3f3f3] text-lg">
            Dashboard
          </li>
          <li className="lg:pb-0 md:pb-0 pb-5 hover:text-red-500 cursor-pointer duration-300 text-[#f3f3f3] text-lg">
            Our Menu
          </li>
          <li className="lg:pb-0 md:pb-0 pb-5 hover:text-red-500 cursor-pointer duration-300 text-[#f3f3f3] text-lg">
            Our Shop
          </li>
          <li className="lg:pb-0 md:pb-0 pb-5 hover:text-red-500 cursor-pointer duration-300 text-[#f3f3f3] text-lg lg:hidden md:hidden block">
            SIGN OUT
          </li>
          <figure className="user_img w-[60px] h-[60px] mx-auto mb-5 lg:hidden md:hidden block ">
            <img
              className="w-full h-full object-cover block  rounded-full mx-auto "
              src={userImg}
              alt="img"
            />
          </figure>
        </ul>
        {/* nav list */}
        <div className="user_profile  flex items-center justify-center gap-5">
          <li className=" hover:text-red-500 cursor-pointer duration-300 text-[#f3f3f3] text-lg">
            SIGN OUT
          </li>
          <figure className="user_img w-[60px] h-[60px] ">
            <img
              className="w-full h-full object-cover block  rounded-full "
              src={userImg}
              alt="img"
            />
          </figure>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden md:hidden"
          >
            <Hamburger />
          </div>
        </div>
      </div>
    </div>
  );
}
