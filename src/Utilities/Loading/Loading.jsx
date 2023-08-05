import React from "react";
import { PropagateLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex justify-center items-center w-full">
      <PropagateLoader color="#36d7b7" />
    </div>
  );
}
