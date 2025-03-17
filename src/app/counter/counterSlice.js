import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: false,
  },
  reducers: {},
});

export default counterSlice.reducer;
