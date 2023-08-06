import React from "react";
import chefService from "../../assets/home/chef-service.jpg";
import { Parallax } from "react-parallax";

export default function BestoBos() {
  return (
    <div className="py-10">
      <Parallax
        blur={{ min: -15, max: 25 }}
        bgImage={chefService}
        bgImageAlt="the dog"
        strength={-200}
      >
        <div className=" py-10">
          <div className=" lg:max-w-[500px] lg:w-[50%] md:w-[50%] sm:w-[80%] w-[90%] bg-black h-[300px] mx-auto opacity-70 rounded-md">
            <div className=" flex flex-col items-center justify-center h-full w-full ">
              <h2 className="text-3xl text-center text-[#fff] font-bold pb-3">
                {" "}
                Mini Boss Restaurant
              </h2>
              <p className=" text-justify px-14 text-[#e7e5e5] text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque, sunt, similique natus libero modi quia assumenda,
                corporis id ratione commodi tempore dolor totam non laboriosam
                enim consectetur earum a iure.
              </p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
}
