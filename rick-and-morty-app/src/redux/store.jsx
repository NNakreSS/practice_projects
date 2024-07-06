import { configureStore } from "@reduxjs/toolkit";
// Slices
import charactersSlice from "./slices/charactersSlice";
import themeSlice from "./slices/themeSlice";

const Store = configureStore({
  reducer: {
    characters: charactersSlice,
    theme: themeSlice,
  },
});

export default Store;
