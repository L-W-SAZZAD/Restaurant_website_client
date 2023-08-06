import React from "react";

export default function Error({ error }) {
  return (
    <div className=" lg:w-[1320px] mx-auto flex justify-center items-center lg:px-0 px-3">
      <h3>{error}</h3>
    </div>
  );
}
