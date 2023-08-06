import React, { useEffect } from "react";
import SectionTitle from "../../Utilities/SectionTitle/SectionTitle";
import Popular from "./Popular";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularDatas } from "../../features/PopularDatas/popularDatas";
import Loading from "../../Utilities/Loading/Loading";
import Error from "../../Utilities/Error/Error";
import Button from "../../Utilities/Buton/Button";

export default function PopularMenu() {
  const { popularDatas, isLoading, isError, error } = useSelector(
    (state) => state.popular
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopularDatas());
  }, [dispatch]);

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
      .filter((data) => data.category === "popular")
      .map((popular) => <Popular key={popular._id} popular={popular} />);
  }
  return (
    <div className="npy-10 lg:w-[1320px] mx-auto lg:px-0 px-3">
      <SectionTitle
        title="---Check it out---"
        subTitle="FROM OUR MENU"
      ></SectionTitle>
      {/* popular data */}
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
  );
}
