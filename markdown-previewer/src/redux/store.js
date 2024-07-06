import { configureStore } from "@reduxjs/toolkit";
import markdown from "./markdownSlicer";

const Store = configureStore({
  reducer: {
    markdown,
  },
});

export default Store;
