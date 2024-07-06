import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Reducers/todoSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;
