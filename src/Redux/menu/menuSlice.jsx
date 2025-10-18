import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMenu = createAsyncThunk("menu/fetch", async () => {
  const res = await axios(
    "https://hamideh-b.github.io/json-apple-react/db.json"
  );
  return res.data.menu;
});
const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menu: [],
    loading: true,
    error: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.menu = action.payload;
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});
export default menuSlice.reducer;
