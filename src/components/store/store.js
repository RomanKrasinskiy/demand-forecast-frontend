import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./userSlice";
// import filterReducer from "./filterSlice";
// import dataReducer from "./dataSlice";

export const store = configureStore({
  reducer: {
    // user: userReducer,
    // filter: filterReducer,
    // data: dataReducer,
  }
});
