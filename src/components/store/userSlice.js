import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'Имя',
    occupation: 'Должность',
    email: 'Ваш email@gmail.com',
    loggedIn: false,
  },
  reducers: {
    setloggedIn(state, action) {
      state.loggedIn = action.payload
    },
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

export const { setNewUserName, setNewUserOccupation, setNewUserEmail, setloggedIn } = userSlice.actions;

export default userSlice.reducer;