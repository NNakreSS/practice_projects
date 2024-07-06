import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

const reducers = {
  increment: (state) => {
    state.value += 1;
  },
  decrement: (state) => {
    state.value -= 1;
  },
  incrementByAmount: (state, action) => {
    state.value += Number(action.payload);
  },
};

const counterReducer = createSlice({
  name: "counter",
  initialState,
  reducers,
});

export const { increment, decrement, incrementByAmount } =
  counterReducer.actions;
export default counterReducer.reducer;
