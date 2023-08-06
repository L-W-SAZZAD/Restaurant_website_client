import React from "react";

export default function Button({ children }) {
  return (
    <button className=" btn_bg btn py-2 px-10 rounded-md border-none outline-none text-lg font-bold tracking-wide text-white">
      {children}
    </button>
  );
}
