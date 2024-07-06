import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: localStorage.getItem("theme"),
};

const reducers = {
  switchTheme: (state) => {
    state.theme = state.theme == "light" ? "dark" : "light";
    localStorage.setItem("theme", state.theme);
  },
};

const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers,
});

export default ThemeSlice.reducer;
export const { switchTheme } = ThemeSlice.actions;
