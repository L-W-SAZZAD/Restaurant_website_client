import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  message: "",
};

const updateSlice = createSlice({
  name: "updateData",
  initialState,
  reducers: {
    updateDatas: (state, action) => {
      state.count = state.count + action.payload;
      //   state.message = action.payload.message;
    },
  },
});

export default updateSlice.reducer;
export const { updateDatas } = updateSlice.actions;
