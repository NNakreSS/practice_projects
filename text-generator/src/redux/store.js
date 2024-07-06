import { configureStore } from "@reduxjs/toolkit";
// slicers
import text from "./slices/textGeneratorSlice";

const Store = configureStore({
  reducer: {
    text,
  },
});

export default Store;
