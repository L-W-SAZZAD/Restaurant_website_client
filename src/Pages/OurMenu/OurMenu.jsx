import React, { useEffect } from "react";
import Pizza from "./Pizza/Pizza";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularDatas } from "../../features/PopularDatas/popularDatas";
import Helmets from "../../Utilities/Helmets/Helmets";

export default function OurMenu() {
  const { popularDatas, isLoading, isError, error } = useSelector(
    (state) => state.popular
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopularDatas());
  }, [dispatch]);

  return (
    <div className="padding_top">
      <Helmets text="OurMenu" />
      <Pizza
        popularDatas={popularDatas}
        isError={isError}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
}
