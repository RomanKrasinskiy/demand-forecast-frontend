import StatisticsCSS from './Statistics.module.css';
import { TextField, Autocomplete } from '@mui/material';
import StatisticsTable from './StatisticsTable/StatisticsTable';
import StatisticsChart from './StatisticsChart/StatisticsChart';
import { useState } from "react";
import DatePickerCalendar from '../DatePickerCalendar/DatePickerCalendar';
import SearchForm from '../SearchForm/SearchForm';
import { useDispatch, useSelector } from 'react-redux';
import { setNewCategoriesFilter, setNewGroupFilter, setNewShopFilter, setNewSubcategoriesFilter } from '../store/filterSlice';
const Statistics = () => {

  const [isDataTable, setDataTable] = useState(true);
  function handleDataChart() {
    isDataTable ? setDataTable(false) : '';
  }
  function handleDataTable() {
    !isDataTable ? setDataTable(true) : '';
  }

   // забираем из стейта наполнение фильтров
   const stores = useSelector(state => state.data.shopNames);
   const groups = useSelector(state => state.data.groupNames);
   const categories = useSelector(state => state.data.categoryNames);
   const subcategories = useSelector(state => state.data.subcategoryNames);
  //  const productTableRows = useSelector(state => state.data.productTableRows);
 
   // забираем из стейта значение фильтров
   const shopFilter = useSelector(state => state.filter.shopFilter);
   const groupFilter = useSelector(state => state.filter.groupFilter);
   const categoryFilter = useSelector(state => state.filter.categoryFilter);
   const subcategoryFilter = useSelector(state => state.filter.subcategoryFilter);
  //  const dateFilter = useSelector(state => state.filter.dateFilter);

   // const productFilter = useSelector(state => state.filter.productFilter); // - это в сёрч форму нужно будет убрать.
 
   // пытаемся контролировать выбранные значения фильтров
   // const [shopFilterValue, setShopFilterValue] = useState(shopFilter);
   const dispatch = useDispatch();
   // const newShopFilter = (newValue) => dispatch(setNewShopFilter({newValue}));
  return (
    <>
    {/* Переключатель Таблица-График */}
    <div className={StatisticsCSS.switchContainer}>
      <button className={`${StatisticsCSS.option} ${isDataTable ? StatisticsCSS.optionActive : ''}`} onClick={handleDataTable}>Таблица</button>
      <button className={`${StatisticsCSS.option} ${!isDataTable ? StatisticsCSS.optionActive : ''}`} onClick={handleDataChart}>График</button>
    </div>
    {/* Основной блок с данными */}
    <div className={StatisticsCSS.dataContainer}>
      {/* Тут будет компонент SearchForm, пока просто его задизайнил */}
      <div className={StatisticsCSS.searchContainer}>
        <SearchForm />
      </div>
      {/* Панель с фильтрами */}
      <div className={StatisticsCSS.optionsContainer}>
        <Autocomplete
          disablePortal
          sx={{ 
            maxWidth: '387px',
            width: '100%',
          }}
          id="stores"
          options={stores}
          value={shopFilter}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          renderInput={(params) => <TextField {...params} label="ТК" />}
          onChange={(event, newValue) => {
            dispatch(setNewShopFilter(newValue))
            console.log(newValue)
          }}
        />
        <Autocomplete
          disablePortal
          id="group"
          options={groups}
          value={groupFilter}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          sx={{ 
            maxWidth: '387px', 
            width: '100%',
          }}
          onChange={(event, newValue) => {
            dispatch(setNewGroupFilter(newValue))
            
          }}
          renderInput={(params) => <TextField {...params} label="Группа" />}
        />
        <Autocomplete
          disablePortal
          id="categories"
          options={categories}
          value={categoryFilter}

          sx={{ 
            maxWidth: '387px', 
            width: '100%',
          }}
          renderInput={(params) => <TextField {...params} label="Категория" />}
          onChange={(event, newValue) => {
            dispatch(setNewCategoriesFilter(newValue))
          }}
        />
        <Autocomplete
          disablePortal
          id="subcategories"
          options={subcategories}
          value={subcategoryFilter}
          sx={{ 
            maxWidth: '387px', 
            width: '100%',
          }}
          renderInput={(params) => <TextField {...params} label="Подкатегория" />}
          onChange={(event, newValue) => {
            dispatch(setNewSubcategoriesFilter(newValue))
          }}
        />
          <DatePickerCalendar />
        

      </div>
      <div className={StatisticsCSS.data}>
      {isDataTable
        ? <StatisticsTable />
        : <StatisticsChart />
      }
      </div>
    </div>
    </>
  )
}

export default Statistics;

