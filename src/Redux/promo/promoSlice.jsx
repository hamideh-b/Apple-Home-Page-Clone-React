import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPromo = createAsyncThunk("promo/fetch", async () => {
  const res = await axios(
    "https://hamideh-b.github.io/json-apple-react/db.json"
  );
  return res.data.promo;
});
const promoSlice = createSlice({
  name: "promo",
  initialState: {
    promo: [],
    loading: true,
    error: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPromo.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPromo.fulfilled, (state, action) => {
        state.promo = action.payload;
        state.loading = false;
      })
      .addCase(fetchPromo.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});
export default promoSlice.reducer;
