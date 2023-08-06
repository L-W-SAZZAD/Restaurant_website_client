import { configureStore } from "@reduxjs/toolkit";
import popularDatas from "../PopularDatas/popularDatas";
import UpdateSlice from "../UpdateData/UpdateSlice";

export const store = configureStore({
  reducer: {
    popular: popularDatas,
    updateCount: UpdateSlice,
  },
});
