import './Forecast';
import ForecastCSS from './Forecast.module.css';
import { useState } from 'react';
import { TextField, Autocomplete, Paper, InputBase, Button } from '@mui/material';
import { stores, groups, categories, subcategories } from '../../utils/MenuProps';
import ForecastTable from './ForecastTable/ForecastTable';
import ForecastChart from './ForecastChart/ForecastChart';

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
      {/* Тут будет компонент SearchForm, пока просто его задизайнил */}
      <div className={ForecastCSS.searchContainer}>
      <Paper
      component="form"
      sx={{  display: 'flex', alignItems: 'center', width: '100', borderRadius: '24px', border: '1px solid rgba(167, 167, 167, 1)', boxShadow: 'none', marginBottom: '24px',}}
    >
      <InputBase
        sx={{ 
          ml: 2.5, 
          flex: 1, 
          fontSize: '20px',
          fontWeight: '400',
          fontFamily: 'HelveticaNeueCyr',
         }}
          placeholder="Поиск"
          
        // inputProps={{ 'aria-label': 'search google maps' }}
      />
      <Button
        variant="contained"
        sx={{
          width: "160px",
          height: "60px",
          backgroundColor: 'rgba(0, 60, 150, 1)',
          fontSize: '20px',          
          borderRadius: "23px",
          color: "white",
          border: "1px solid rgba(0, 60, 150, 1)",
          boxShadow: 'none',
          textTransform: 'none',

        }}
      >
        Найти
      </Button>
      
    </Paper>
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
