import { createSlice } from "@reduxjs/toolkit";

const dataState = {
  // тут будет то, что нам нужно разбрасывать из ответов бэка на наполнение страниц
}

export const dataSlice = createSlice({
  name: 'data',
  dataState,
  reducers: {
    // здесь пропишем все нужные действия со стейтами
  }
})

// export const { тут будут экшены из reducers } = dataSlice.actions;

export default dataSlice.reducer;
