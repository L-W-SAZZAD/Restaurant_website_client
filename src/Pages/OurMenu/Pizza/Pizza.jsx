import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularDatas } from "../../../features/PopularDatas/popularDatas";
import SectionTitle from "../../../Utilities/SectionTitle/SectionTitle";
import Loading from "../../../Utilities/Loading/Loading";
import Error from "../../../Utilities/Error/Error";
import SinglePizza from "./SinglePizza";
import Button from "../../../Utilities/Buton/Button";
import PizzaCover from "./PizzaCover";

export default function Pizza({ popularDatas, isLoading, isError, error }) {
  //   decide how to render
  let content;
  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <Error error={error} />;
  }
  if (!isLoading && !isError && popularDatas.length === 0) {
    content = (
      <p className=" text-center py-2 text-lg font-medium">No Menu Found</p>
    );
  }
  if (!isLoading && !isError && popularDatas.length > 0) {
    content = popularDatas
      .filter((data) => data.category === "pizza")
      .map((pizza) => <SinglePizza key={pizza._id} pizza={pizza} />);
  }
  console.log(popularDatas);
  return (
    <div>
      <div className="npy-10 lg:w-[1320px] mx-auto lg:px-0 px-3">
        <SectionTitle
          title="---Check it out---"
          subTitle="FROM OUR MENU Pizza"
        ></SectionTitle>
        {/* popular data */}
        <div className="py-10">
          <PizzaCover category="Pizza" />
        </div>
        {/* pizza cover */}

        {/* pizza cover */}
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-10">
          {/* popular */}
          {content}
          {/* popular */}
        </div>
        {/* popular data */}
        <div className="button  pt-10 text-center">
          <Button>View All</Button>
        </div>
      </div>
    </div>
  );
}
