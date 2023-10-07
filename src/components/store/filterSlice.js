import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    shopFilter: '',
    groupFilter: '',
    categoryFilter: '',
    subcategoryFilter: '',
    productFilter: '', // для поиска 
    dateFilter: '',
    productRowSelect: [],
    forecastRowSelect: [],
  },
  reducers: {
    setNewShopFilter(state, action) {
      state.shopFilter = action.payload
    },

    setNewGroupFilter(state, action) {
      state.groupFilter = action.payload
    },

    setNewCategoriesFilter(state, action) {
      state.categoryFilter = action.payload
    },

    setNewSubcategoriesFilter(state, action) {
      state.subcategoryFilter = action.payload
    },

    setNewDateFilter(state, action) {
      state.dateFilter = action.payload
    },

    setNewProductRowSelect(state, action) {
      state.productRowSelect = action.payload
    },

    setNewForecastRowSelect(state, action) {
      state.productRowSelect = action.payload
    },
  }
})

export const { 
  setNewShopFilter, 
  setNewGroupFilter, 
  setNewCategoriesFilter, 
  setNewSubcategoriesFilter, 
  setNewDateFilter,
  setNewProductRowSelect,
  setNewForecastRowSelect,
} = filterSlice.actions;

export default filterSlice.reducer;