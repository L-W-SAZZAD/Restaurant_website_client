import React from "react";

export default function Button({ children }) {
  return (
    <button className="btn_bg py-2 px-10 rounded-md border-none outline-none text-lg font-bold tracking-wide text-white">
      {children}
    </button>
  );
}
