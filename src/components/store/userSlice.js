import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'Василий Антонов',
    occupation: 'Должность...',
    email: 'antonov77@gmail.com',
    loggedIn: true, // вероятно проблемы на стороне бекенда
    preloaderState: false,
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
    setPreloaderState(state, action) {
      state.preloaderState = action.payload
    },
  }
})

export const { setNewUserName, setNewUserOccupation, setNewUserEmail, setloggedIn, setPreloaderState } = userSlice.actions;

export default userSlice.reducer;