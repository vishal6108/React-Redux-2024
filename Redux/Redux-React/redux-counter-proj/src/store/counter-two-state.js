import { createSlice } from "@reduxjs/toolkit";
const initialCounterState = {
  counter: 0,
  toggleContent: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state, action) {
      state.counter = state.counter - action.payload;
    },
    toggle(state) {
      state.toggleContent = !state.toggleContent;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
