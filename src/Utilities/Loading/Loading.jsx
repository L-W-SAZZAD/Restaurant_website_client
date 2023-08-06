import React from "react";
import { PropagateLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex justify-center items-center lg:w-[1320px] mx-auto  lg:px-0 px-3">
      <PropagateLoader color="#36d7b7" />
    </div>
  );
}
