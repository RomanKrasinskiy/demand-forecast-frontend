import { createSlice } from "@reduxjs/toolkit";

const userState = {
// здесь пропишем всё, что нам нужно держать в стейте по пользователю
};

const filtersState = {
// здесь пропишем всё, что анм нужно держать в стейте по поисковым запросам 
};

const dataState = {
// тут будет то, что нам нужно разбрасывать из ответов бэка на наполнение страниц
}

export const userSlice = createSlice({
  name: 'user',
  userState,
  reducers: {
  // здесь пропишем все нужные действия со стейтами
  }
})

export const filtersSlice = createSlice({
  name: 'filters',
  filtersState,
  reducers: {
  // здесь пропишем все нужные действия со стейтами
  }
})

export const dataSlice = createSlice({
  name: 'data',
  dataState,
  reducers: {
  // здесь пропишем все нужные действия со стейтами
  }
})

// export const { тут будут экшены из reducers } = userSlice.actions;
// export const { тут будут экшены из reducers } = filtersSlice.actions;
// export const { тут будут экшены из reducers } = dataSlice.actions;

// export default userSlice.reducer; и тут я озадачился, а можно ли вообще держать в редаксе несколько стейтов, редюсеров и вот этого всего


