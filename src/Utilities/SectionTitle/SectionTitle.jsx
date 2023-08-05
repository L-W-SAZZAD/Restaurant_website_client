import React from "react";

export default function SectionTitle({ title, subTitle }) {
  return (
    <div className=" flex flex-col justify-center items-center py-5">
      <div className="heading">
        <h2 className="text-lg text-[#D99904] border-b-4 border-dashed border-[#D9D9D9] pb-1">
          {title}
        </h2>
      </div>
      <h1 className=" text-4xl font-bold text-white pt-3 pb-10">{subTitle}</h1>
    </div>
  );
}
