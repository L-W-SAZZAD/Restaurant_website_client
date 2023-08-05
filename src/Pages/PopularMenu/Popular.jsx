import React from "react";
import Button from "../../Utilities/Buton/Button";

export default function Popular({ popular }) {
  const { image, price, name, recipe, _id } = popular;
  return (
    <div>
      <div className="card_popular shadow-lg shadow-slate-300 p-10 rounded-lg">
        <div className="card_img w-full h-[250px] overflow-hidden block">
          <img
            className=" w-full h-full object-cover overflow-hidden block hover:scale-105 duration-500 cursor-pointer"
            src={image}
            alt={name}
          />
        </div>
        <h2 className="text-xl py-3 text_color_mini">Name: {name}</h2>
        <p className="pb-3 text-[#d6cfcf]">{recipe}</p>
        <h4 className="text-end text-2xl pb-5 text_color">Price: ${price}</h4>
        <div className=" text-end">
          <Button>Details</Button>
        </div>
      </div>
    </div>
  );
}
