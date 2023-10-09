import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    shopFilter: '',
    groupFilter: '',
    categoryFilter: '',
    subcategoryFilter: '',
    productFilter: '', 
    dateFilter: '',
    productRowSelectName: [],
    productRowSelectId: [],
    forecastRowSelectName: [],
    forecastRowSelectId: [],
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

    setNewProductFilter(state, action) {
      state.productFilter = action.payload
    },

    setNewDateFilter(state, action) {
      state.dateFilter = action.payload
    },

    setNewProductRowSelectName(state, action) {
      state.productRowSelectName = action.payload
    },

    setNewProductRowSelectId(state, action) {
      state.productRowSelectId = action.payload
    },

    setNewForecastRowSelectName(state, action) {
      state.forecastRowSelectName = action.payload
    },

    setNewForecastRowSelectId(state, action) {
      state.forecastRowSelectId = action.payload
    },
    setNewStatisticsShopFilter(state, action) {
      state.statisticsShopFilter = action.payload
    },


    setNewStatsRowSelectName(state, action) {
      state.forecastRowSelectName = action.payload
    },

    setNewStatsRowSelectId(state, action) {
      state.forecastRowSelectId = action.payload
      
    },
  }
})

export const { 
  setNewShopFilter, 
  setNewGroupFilter, 
  setNewCategoriesFilter, 
  setNewSubcategoriesFilter,
  setNewProductFilter, 
  setNewDateFilter,
  setNewProductRowSelectName,
  setNewProductRowSelectId,
  setNewForecastRowSelectName,
  setNewForecastRowSelectId,
  setNewStatisticsShopFilter,
  setNewStatsRowSelectName,
  setNewStatsRowSelectId
} = filterSlice.actions;

export default filterSlice.reducer;