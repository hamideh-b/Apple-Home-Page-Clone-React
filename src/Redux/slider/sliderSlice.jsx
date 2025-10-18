import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSlider = createAsyncThunk("slider/fetch", async () => {
  const res = await axios(
    "https://hamideh-b.github.io/json-apple-react/db.json"
  );
  return res.data.slider;
});
const sliderSlice = createSlice({
  name: "slider",
  initialState: {
    slider: [],
    loading: true,
    error: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSlider.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSlider.fulfilled, (state, action) => {
        state.slider = action.payload;
        state.loading = false;
      })
      .addCase(fetchSlider.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});
export default sliderSlice.reducer;
