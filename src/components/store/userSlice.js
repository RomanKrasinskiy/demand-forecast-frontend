import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    // тут будут данные о юзере
  },
  reducers: {
    // здесь пропишем все нужные действия со стейтами
  }
})

// export const { тут будут экшены из reducers } = userSlice.actions;

export default userSlice.reducer;