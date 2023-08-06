import React from "react";
import pizza from "../../../assets/reservation/category-pizza.jpg";
import { Parallax } from "react-parallax";

export default function PizzaCover({ category }) {
  return (
    <div className="">
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={pizza}
        bgImageAlt="the dog"
        strength={-200}
      >
        <div className="py-20">
          <div className=" lg:w-1/2 md:w-1/2 w-[80%] h-[300px] bg-[#15151573] mx-auto flex justify-center items-center rounded-md">
            <p className="text-4xl font-semibold tracking-wide">{category}</p>
          </div>
        </div>
      </Parallax>
    </div>
  );
}
