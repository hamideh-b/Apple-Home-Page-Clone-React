import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFooterInfo = createAsyncThunk(
  "footerInfo/fetch",
  async () => {
    const res = await axios(
      "https://hamideh-b.github.io/json-apple-react/db.json"
    );
    return res.data.footerInfo;
  }
);
const footerInfoSlice = createSlice({
  name: "footerInfo",
  initialState: {
    footerInfo: [],
    loading: true,
    error: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFooterInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFooterInfo.fulfilled, (state, action) => {
        state.footerInfo = action.payload;
        state.loading = false;
      })
      .addCase(fetchFooterInfo.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});
export default footerInfoSlice.reducer;
