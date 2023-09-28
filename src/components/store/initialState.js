import { createSlice } from "@reduxjs/toolkit";

const initialState = {
// здесь пропишем всё, что нам нужно держать в стейте
};

export const initialSlice = createSlice({
  name: 'initial',
  initialState,
  reducers: {
  // здесь пропишем все нужные действия со стейтами
  }
})

// export const { тут будут экшены из reducers } = initialSlice.actions;

export default initialSlice.reducer;

