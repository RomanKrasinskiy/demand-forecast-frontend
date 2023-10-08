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
    statisticsShopFilter: [],
  },
  reducers: {
    setNewShopFilter(state, action) {
      state.shopFilter = action.payload,
      console.log(state.shopFilter)
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
      state.dateFilter = action.payload
    },

    setNewProductRowSelect(state, action) {
      state.productRowSelect = action.payload
    },

    setNewForecastRowSelect(state, action) {
      state.productRowSelect = action.payload
    },

    setNewStatisticsShopFilter(state, action) {
      state.statisticsShopFilter = action.payload
    }
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
  setNewStatisticsShopFilter,
} = filterSlice.actions;

export default filterSlice.reducer;