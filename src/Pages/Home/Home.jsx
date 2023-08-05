import React from "react";
import Banner from "../../Components/Banner/Banner";
import Swpper from "../../Components/Swpper/Swpper";
import BestoBos from "../BestoBos/BestoBos";
import PopularMenu from "../PopularMenu/PopularMenu";

export default function Home() {
  return (
    <div>
      <Banner />
      <Swpper />
      <BestoBos />
      <PopularMenu />
    </div>
  );
}
