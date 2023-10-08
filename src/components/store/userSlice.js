import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'Имя',
    occupation: 'Должность',
    email: 'Ваш email@gmail.com',
  },
  reducers: {
    setNewUserName(state, action) {
      state.name = action.payload
    },

    setNewUserOccupation(state, action) {
      state.occupation = action.payload
    },

    setNewUserEmail(state, action) {
      state.email = action.payload
    },
  }
})

export const { setNewUserName, setNewUserOccupation, setNewUserEmail } = userSlice.actions;

export default userSlice.reducer;