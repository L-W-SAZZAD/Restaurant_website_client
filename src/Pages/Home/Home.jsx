import React from "react";
import Banner from "../../Components/Banner/Banner";
import Swpper from "../../Components/Swpper/Swpper";
import BestoBos from "../BestoBos/BestoBos";
import PopularMenu from "../PopularMenu/PopularMenu";
import Update from "../../Utilities/Update/Update";
import Helmets from "../../Utilities/Helmets/Helmets";

export default function Home() {
  return (
    <div>
      <Helmets text="Home" />
      <Banner />
      <Swpper />
      <BestoBos />
      <PopularMenu />
      <Update />
    </div>
  );
}
