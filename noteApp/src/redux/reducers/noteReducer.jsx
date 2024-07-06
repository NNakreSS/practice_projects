import { createSlice, nanoid } from "@reduxjs/toolkit";

const reducers = {
  setTitle: (state, action) => {
    state.noteForm.title = action.payload;
  },
  setNote: (state, action) => {
    //TODO İsimlendirmeler karışıyor addNote ve setNote için birisinde note kullanımını değiş.
    state.noteForm.note = action.payload;
  },
  setActiveColor: (state, action) => {
    state.noteForm.activeColor = action.payload;
  },
  deleteNote: (state, { payload: id }) => {
    const filtered = state.notes.filter((note) => !(note.id == id));
    state.notes = filtered;
    localStorage.setItem("notes", JSON.stringify(filtered));
  },
  setSearch: (state, { payload: search }) => {
    state.noteForm.search = search;
  },

  addNote: {
    reducer(state, action) {
      state.notes = [...state.notes, action.payload];
      state.noteForm.title = "";
      state.noteForm.note = "";
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    prepare(payload) {
      return {
        payload: {
          id: nanoid(),
          ...payload,
        },
      };
    },
  },
};

const noteSlice = createSlice({
  name: "note",
  initialState: {
    colors: [
      "bg-green-700",
      "bg-yellow-700",
      "bg-orange-700",
      "bg-blue-700",
      "bg-pink-700",
      "bg-teal-700",
      "bg-gray-700",
    ],
    notes: JSON.parse(localStorage.getItem("notes")) || [],
    noteForm: {
      activeColor: "bg-gray-700",
      title: "",
      note: "",
      search: "",
    },
  },
  reducers,
});

export const {
  setTitle,
  setNote,
  setActiveColor,
  addNote,
  deleteNote,
  setSearch,
} = noteSlice.actions;
export default noteSlice.reducer;
