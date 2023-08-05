import { configureStore } from "@reduxjs/toolkit";
import popularDatas from "../PopularDatas/popularDatas";

export const store = configureStore({
  reducer: {
    popular: popularDatas,
  },
});
