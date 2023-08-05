import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPopularDatas } from "./fetchApi";

const initialState = {
  popularDatas: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchPopularDatas = createAsyncThunk(
  "popularDatas/fetchPopularDatas",
  async () => {
    const popular = getPopularDatas();
    return popular;
  }
);

const popularMenuDatasSlice = createSlice({
  name: "popularDatas",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPopularDatas.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(fetchPopularDatas.fulfilled, (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.popularDatas = action.payload;
    });
    builder.addCase(fetchPopularDatas.rejected, (state, action) => {
      state.isLoading = false;
      state.popularDatas = [];
      state.isError = true;
      state.error = action.error?.message;
    });
  },
});

export default popularMenuDatasSlice.reducer;
