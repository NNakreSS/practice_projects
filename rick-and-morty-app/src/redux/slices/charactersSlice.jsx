import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// async thunk midlwares
export const fetchCharacters = createAsyncThunk(
  "characters/getCharacter",
  async (pageUrl) => {
    const endPoint =
      import.meta.env.VITE_API_BASE_ENDPOINT + "/character?page=" + pageUrl;
    const { data } = await axios(endPoint);
    console.log(data);
    return data;
  }
);

// create initial state
const initialState = {
  items: [],
  isLoading: false,
  error: null,
  pages: null,
};

// reducers
const reducers = {};

// extraReducers
const extraReducers = (build) => {
  build
    .addCase(fetchCharacters.fulfilled, (state, action) => {
      state.items = action.payload.results;
      state.pages = action.payload.info.pages;
      state.isLoading = false;
    })
    .addCase(fetchCharacters.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchCharacters.rejected, (state, action) => {
      console.log(action.error.message);
      state.isLoading = false;
      state.error = action.error.message;
    });
};

const CharactersSlice = createSlice({
  name: "character",
  initialState,
  reducers,
  extraReducers,
});

export default CharactersSlice.reducer;
export const {} = CharactersSlice.actions;
