import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  help: false,
  text: "",
  helpText: `
  Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

 `,
};

const reducers = {
  addText(state, { payload }) {
    state.text = payload;
  },
  toggleHelp(state) {
    state.help = !state.help;
  },
};

const markdownSlicer = createSlice({
  name: "markdown",
  initialState,
  reducers,
});

export default markdownSlicer.reducer;
export const { addText , toggleHelp } = markdownSlicer.actions;
