import './Forecast';
import ForecastCSS from './Forecast.module.css';
// import logo from '../../images/logo.svg';
// import dropArrow from '../../images/drop-arrow.svg';
import { Button } from '@mui/material';
// import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import DirectionsIcon from '@mui/icons-material/Directions';
// import { stores, groups, categories, subcategories } from '../../utils/MenuProps';
// import { columns, rows } from '../../utils/ForecastData';
import { useState } from 'react';
// import Header from './../Header/Header';
// import SearchForm from './../SearchForm/SearchForm';

// function CustomToolbar() {
//   return (
//     <GridToolbarContainer>
//       <GridToolbarExport />
//     </GridToolbarContainer>
//   );
// }

const Forecast = () => {
  const [table, setTable] = useState(true);
  const [chart, setChart] = useState(false);

  function switchState(item) {
    if (item === 'table') {
      setTable(true);
      setChart(false);
    } else if (item === 'chart') {
      setTable(false);
      setChart(true);
    }
  }

  return (
    <section className={ForecastCSS.forecast}>
      {/* Переключатель Таблица-График */}
      <div className={ForecastCSS.switchContainer}>
        <p onClick={() => switchState('table')} className={table ? `${ForecastCSS.option} ${ForecastCSS.active}` : ForecastCSS.option}>Таблица</p>
        <p onClick={() => switchState('chart')} className={chart ? `${ForecastCSS.option} ${ForecastCSS.active}` : ForecastCSS.option}>График</p>
      </div>
      <div className={ForecastCSS.forecastContainer}>
    {/* Основной блок с данными */}
        <div className={ForecastCSS.dataContainer}>
      {/* Тут будет компонент SearchForm, пока просто его задизайнил */}
      <Paper
      component="form"
      sx={{  display: 'flex', alignItems: 'center', width: '100', borderRadius: '24px', border: '1px solid rgba(167, 167, 167, 1)', boxShadow: 'none' }}
    >
      <InputBase
        sx={{ ml: 2.5, flex: 1, fontSize: '20px',
          fontFamily: 'HelveticaNeueCyr', }}
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
          fontFamily: 'HelveticaNeueCyr',
          borderRadius: "23px",
          color: "white",
          border: "1px solid rgba(0, 60, 150, 1)",
          boxShadow: 'none',
        }}
      >
        Найти
      </Button>
      
    </Paper>
      {/* Панель с фильтрами */}
      {/* <div className={ForecastCSS.optionsContainer}>
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
      </div> */}
      {/* Таблица */}
      {/* <div className={ForecastCSS.table}> */}
        {/* <DataGrid 
          sx={{
            '& .header': {
              backgroundColor: '#F1F5FF',
            },
            '& .MuiDataGrid-columnHeaderCheckbox': {
              backgroundColor: '#F1F5FF',
            },
          }}
          rows={rows} 
          columns={columns}
          initialState={{
            pagination: { paginationModel: { pageSize: 5 }},
          }}
          pageSizeOptions={[5, 10, 20, 30]}
          checkboxSelection
          disableRowSelectionOnClick
          // slots={{ toolbar: CustomToolbar }} - Экспорт в Эксель только в платной версии
        /> */}
        {/* График */}
        
      {/* </div> */}
    </div>
    </div>
    </section>
    
  )
}

export default Forecast;