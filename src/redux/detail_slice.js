import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://127.0.0.1:3000";

const initialState = {
  itemDetail: null,
  status: "idle",
  error: null,
};

export const fetchItemDetail = createAsyncThunk(
  "detail/fetchItemDetail",
  async (itemId) => {
    try {
      const response = await axios.get(`${API_URL}/items/${itemId}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch item details.");
    }
  }
);

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItemDetail.pending, (state) => ({
        ...state,
        status: "loading",
        error: null,
      }))
      .addCase(fetchItemDetail.fulfilled, (state, action) => ({
        ...state,
        itemDetail: action.payload,
        status: "succeeded",
        error: null,
      }))
      .addCase(fetchItemDetail.rejected, (state, action) => ({
        ...state,
        status: "failed",
        error: action.error.message,
      }));
  },
});

export default detailSlice.reducer;
