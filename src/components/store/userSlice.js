import { createSlice } from "@reduxjs/toolkit";

const userState = {
  // тут будут данные о юзере
}

export const userSlice = createSlice({
  name: 'user',
  userState,
  reducers: {
    // здесь пропишем все нужные действия со стейтами
  }
})

// export const { тут будут экшены из reducers } = userSlice.actions;

export default userSlice.reducer;