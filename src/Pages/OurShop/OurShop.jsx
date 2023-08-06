import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { fetchPopularDatas } from "../../features/PopularDatas/popularDatas";

export default function OurShop() {
  const [tabIndex, setTabIndex] = useState(0);
  const tabsValue = ["Salad", "pizza", "soups", "desserts", "drinks"];
  const { popularDatas, isLoading, isError, error } = useSelector(
    (state) => state.popular
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopularDatas());
  }, [dispatch]);

  return (
    <div className="padding_top">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="flex justify-center gap-5 border-none cursor-pointer">
          {tabsValue.map((tab, inx) => (
            <Tab
              key={inx}
              className="border-none outline-none bg-[#c72997] text-white text-lg font-semibold px-3 py-2 rounded-md uppercase"
            >
              {tab}
            </Tab>
          ))}
        </TabList>
        <TabPanel>Hello</TabPanel>
        <TabPanel>hilleo</TabPanel>
      </Tabs>
    </div>
  );
}
