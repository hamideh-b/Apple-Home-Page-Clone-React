import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFooterNav = createAsyncThunk("footerNav/fetch", async () => {
  const res = await axios(
    "https://hamideh-b.github.io/json-apple-react/db.json"
  );
  return res.data.footerNav;
});
const footerNavSlice = createSlice({
  name: "footerNav",
  initialState: {
    footerNav: [],
    loading: true,
    error: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFooterNav.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFooterNav.fulfilled, (state, action) => {
        state.footerNav = action.payload;
        state.loading = false;
      })
      .addCase(fetchFooterNav.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});
export default footerNavSlice.reducer;
