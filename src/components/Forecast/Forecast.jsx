import './Forecast';
import ForecastCSS from './Forecast.module.css';
import { useState } from 'react';
import { TextField, Autocomplete } from '@mui/material';
import { stores, groups, categories, subcategories } from '../../utils/MenuProps';
import ForecastTable from './ForecastTable/ForecastTable';
import ForecastChart from './ForecastChart/ForecastChart';

const Forecast = () => {
  const [iaDataTable, setDataChart] = useState(true);

  function handleDataChart() {
    iaDataTable ? setDataChart(false) : '';
  }

  function handleDataTable() {
    !iaDataTable ? setDataChart(true) : '';
  }

  return (
    <>
    {/* Переключатель Таблица-График */}
    <div className={ForecastCSS.switchContainer}>
      <button className={`${ForecastCSS.option} ${iaDataTable ? ForecastCSS.optionActive : ''}`} onClick={handleDataTable}>Таблица</button>
      <button className={`${ForecastCSS.option} ${!iaDataTable ? ForecastCSS.optionActive : ''}`} onClick={handleDataChart}>График</button>
    </div>
    {/* Основной блок с данными */}
    <div className={ForecastCSS.dataContainer}>
      {/* Тут будет компонент SearchForm, пока просто его задизайнил */}
      <div className={ForecastCSS.searchContainer}>
        <input className={ForecastCSS.search} placeholder='Поиск'/>
        <button className={ForecastCSS.findBtn}>Найти</button>
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
          disablePortal
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
      {iaDataTable
        ? <ForecastTable />
        : <ForecastChart />
      }
      </div>
    </div>
    </>
  )
}

export default Forecast;
