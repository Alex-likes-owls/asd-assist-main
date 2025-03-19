import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    toggle: false,
  },
  reducers: {
    changeToggle: (state) => {
      state.toggle = !state.toggle;
    },
  },
});

export const { changeToggle } = counterSlice.actions;
export default counterSlice.reducer;
