import React, { useRef } from "react";

export default function Forget({ model, setModel }) {
  const input = useRef();
  const handelForget = () => {
    console.log(input.current);
  };
  return (
    <div>
      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  py-10  px-3 opacity-100 rounded-lg bg_bg">
        <h2 className="text-xl text-center py-3 font-semibold tracking-wider text-white">
          Forget Password
        </h2>
        <div className="forget_input text-center">
          <input
            ref={input}
            className="bg-white border-none outline-none py-3 px-3 text-lg rounded-md "
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
          />
        </div>
        <p className="pt-2 text-red-600 font-medium text-base">error</p>
        <div className="pt-5">
          <button
            onClick={handelForget}
            className=" btn_bg btn py-2 px-10 rounded-md border-none outline-none text-lg font-bold tracking-wide text-white"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
