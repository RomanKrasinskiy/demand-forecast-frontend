import { createSlice } from "@reduxjs/toolkit";

const filterState = {
  // здесь пропишем всё, что анм нужно держать в стейте по поисковым запросам
}

export const filterSlice = createSlice({
  name: 'filter',
  filterState,
  reducers: {
    // здесь пропишем все нужные действия со стейтами
  }
})

// export const { тут будут экшены из reducers } = filterSlice.actions;

export default filterSlice.reducer;