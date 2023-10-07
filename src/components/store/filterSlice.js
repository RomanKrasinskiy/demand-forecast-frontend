import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    shopFilter: null,
    groupFilter: null,
    categoryFilter: null,
    subcategoryFilter: null,
    productFilter: null, // для поиска 
    dateFilter: null,
    productRowSelect: [],
    forecastRowSelect: [],
  },
  reducers: {
    setNewShopFilter(state, action) {
      state.shopFilter = {
        key: action.payload.key,
        label: action.payload.label,
      }
    },
  
    setNewGroupFilter(state, action) {
      state.groupFilter = {
        key: action.payload.key,
        label: action.payload.label,
      }
    },

    setNewCategoriesFilter(state, action) {
      state.categoryFilter = {
        key: action.payload.key,
        label: action.payload.label,
      }
    },

    setNewSubcategoriesFilter(state, action) {
      state.subcategoryFilter = {
        key: action.payload.key,
        label: action.payload.label,
      }
    },

    setNewDateFilter(state, action) {
      state.dateFilter = {
        key: action.payload.key,
        label: action.payload.label,
      }
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