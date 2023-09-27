import { configureStore } from "@reduxjs/toolkit";
import initialReducer from "./initialState";

export const store = configureStore({
  reducer: {
    initial: initialReducer,
  }
});
