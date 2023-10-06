import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    shopFilter: null,
    groupFilter: null,
    categoryFilter: null,
    subcategoryFilter: null,
    productFilter: null,
  },
  reducers: {
    setNewShopFilter(state, action) {
      state.shopFilter = {
        key: action.payload.key,
        label: action.payload.label,
      }
    },
  }
})

export const { setNewShopFilter } = filterSlice.actions;

export default filterSlice.reducer;