import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFooterbreadcrumb = createAsyncThunk(
  "footerbreadcrumb/fetch",
  async () => {
    const res = await axios("https://hamideh-b.github.io/json-apple-react/db.json");
    return res.data.footerbreadcrumb;
  }
);
const footerbreadcrumbSlice = createSlice({
  name: "footerbreadcrumb",
  initialState: {
    footerbreadcrumb: [],
    loading: true,
    error: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFooterbreadcrumb.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFooterbreadcrumb.fulfilled, (state, action) => {
        state.footerbreadcrumb = action.payload;
        state.loading = false;
      })
      .addCase(fetchFooterbreadcrumb.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});
export default footerbreadcrumbSlice.reducer;
