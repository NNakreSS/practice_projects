import { configureStore } from "@reduxjs/toolkit";
import memoryGame from "./slices/memoryGameSlice";

const Store = configureStore({
  reducer: {
    memoryGame,
  },
});

export default Store;
