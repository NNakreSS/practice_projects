import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// axion
import axios from "axios";

export const fetchText = createAsyncThunk(
  "textGenerator/getText",
  async (paragraphCount, format) => {
    console.log(paragraphCount, format);
    const { data } = await axios(
      `${
        import.meta.env.VITE_BASE_URL
      }&paras=${paragraphCount}&format=${format}`
    );
    return data;
  }
);

const initialState = {
  text: [],
  error: null,
  status: "idle",
  format: "text", // or html
};

const reducers = {
  setFormat(state, { payload }) {
    state.format = payload;
  },
};

const extraReducers = (builder) => {
  builder
    .addCase(fetchText.fulfilled, (state, action) => {
      state.text = action.payload;
      state.status = "succes";
    })
    .addCase(fetchText.pending, (state) => {
      state.status = "pending";
    })
    .addCase(fetchText.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });
};

const textGeneratorSlice = createSlice({
  name: "text",
  initialState,
  reducers,
  extraReducers,
});

export default textGeneratorSlice.reducer;
export const { setFormat } = textGeneratorSlice.actions;
