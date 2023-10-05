import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    shopId: 'Reutov',
    // здесь будут лежать фильтры для отправки запросов для получения данных
  },
  reducers: {
    // здесь пропишем все нужные действия со стейтами
  }
})

// export const { тут будут экшены из reducers } = filterSlice.actions;

export default filterSlice.reducer;