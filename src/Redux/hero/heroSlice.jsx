import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHero = createAsyncThunk("hero/fetch", async () => {
  const res = await axios(
    "https://hamideh-b.github.io/json-apple-react/db.json"
  );
  return res.data.hero;
});
const heroSlice = createSlice({
  name: "hero",
  initialState: {
    hero: [],
    loading: true,
    error: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHero.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHero.fulfilled, (state, action) => {
        state.hero = action.payload;
        state.loading = false;
      })
      .addCase(fetchHero.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});
export default heroSlice.reducer;
