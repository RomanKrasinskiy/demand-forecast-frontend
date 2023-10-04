import ForecastCSS from './Forecast.module.css';
import { useState } from 'react';
import { TextField, Autocomplete } from '@mui/material';
import { stores, groups, categories, subcategories } from '../../utils/MenuProps';
import ForecastTable from './ForecastTable/ForecastTable';
import ForecastChart from './ForecastChart/ForecastChart';
import SearchForm from './../SearchForm/SearchForm';

const Forecast = () => {
  const [isDataTable, setDataChart] = useState(true);

  function handleDataChart() {
    isDataTable ? setDataChart(false) : '';
  }

  function handleDataTable() {
    !isDataTable ? setDataChart(true) : '';
  }

  return (
    <>
    {/* Переключатель Таблица-График */}
    <div className={ForecastCSS.switchContainer}>
      <button className={`${ForecastCSS.option} ${isDataTable ? ForecastCSS.optionActive : ''}`} onClick={handleDataTable}>Таблица</button>
      <button className={`${ForecastCSS.option} ${!isDataTable ? ForecastCSS.optionActive : ''}`} onClick={handleDataChart}>График</button>
    </div>
    {/* Основной блок с данными */}
    <div className={ForecastCSS.dataContainer}>
      <div className={ForecastCSS.searchContainer}>
        <SearchForm />
      </div>
      {/* Панель с фильтрами */}
      <div className={ForecastCSS.optionsContainer}>
        <Autocomplete
          disablePortal
          id="stores"
          options={stores}
          sx={{ 
            maxWidth: 387, 
            width: '100%',
            height: 48,
          }}
          renderInput={(params) => <TextField {...params} label="ТК" />}
        />
        <Autocomplete
          // disablePortal
          id="group"
          options={groups}
          sx={{ 
            maxWidth: 387, 
            width: '100%',
            height: 48,
          }}
          renderInput={(params) => <TextField {...params} label="Группа" />}
        />
        <Autocomplete
          disablePortal
          id="categories"
          options={categories}
          sx={{ 
            maxWidth: 387, 
            width: '100%',
            height: 48,
          }}
          renderInput={(params) => <TextField {...params} label="Категория" />}
        />
        <Autocomplete
          disablePortal
          id="subcategories"
          options={subcategories}
          sx={{ 
            maxWidth: 387, 
            width: '100%',
            height: 48,
          }}
          renderInput={(params) => <TextField {...params} label="Подкатегория" />}
        />
      </div>
      <div className={ForecastCSS.data}>
      {isDataTable
        ? <ForecastTable />
        : <ForecastChart />
      }
      </div>
    </div>
    </>
  )
}

export default Forecast;
