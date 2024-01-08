import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../store/counter-two-state";
import authReducer from "../store/auth";

// const store = configureStore({
//   reducer: counterSlice.reducer,
// });

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;
