import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navabr/Navbar";

export default function RootLayOut() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <h3>Footer</h3>
    </div>
  );
}
