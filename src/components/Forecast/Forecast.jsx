import './Forecast';
import ForecastCSS from './Forecast.module.css';
import { TextField, Autocomplete } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { stores, groups, categories, subcategories } from '../../utils/MenuProps';
// import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
} from 'chart.js';
import { tableColumns, tableRows } from '../../utils/ForecastData';
// import { chartColumns, chartRows, data, options } from '../../utils/ForecastData';
// import SearchForm from './../SearchForm/SearchForm';

// function CustomToolbar() {
//   return (
//     <GridToolbarContainer>
//       <GridToolbarExport />
//     </GridToolbarContainer>
//   );
// }

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
)

const Forecast = () => {

  return (
    <>
    {/* Переключатель Таблица-График */}
    <div className={ForecastCSS.switchContainer}>
      <button className={ForecastCSS.optionActive} id='tableBtn'>Таблица</button>
      <button className={ForecastCSS.option} id='graphBtn'>График</button>
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
      {/* Таблица */}
      <div className={ForecastCSS.table}>
        <DataGrid 
          sx={{
            '& .header': {
              backgroundColor: '#F1F5FF',
            },
            '& .MuiDataGrid-columnHeaderCheckbox': {
              backgroundColor: '#F1F5FF',
            },
          }}
          rows={tableRows} 
          columns={tableColumns}
          initialState={{
            pagination: { paginationModel: { pageSize: 10 }},
          }}
          pageSizeOptions={[5, 10, 20, 30]}
          checkboxSelection
          disableRowSelectionOnClick
          // slots={{ toolbar: CustomToolbar }} - Экспорт в Эксель только в платной версии
        />  
      </div>
    </div>
    </>
  )
}

export default Forecast;

// </div>
//       {/* График */}
//       <div className={ForecastCSS.chartContainer}>
//         <div className={ForecastCSS.chart}>
//           <Line
//             data = {data}
//             options = {options}
//           ></Line>
//         </div>
//         <div className={ForecastCSS.chartTable}>
//           <DataGrid 
//             rows={chartRows} 
//             columns={chartColumns}
//             initialState={{
//               pagination: { paginationModel: { pageSize: 9 }},
//             }}
//             checkboxSelection
//             disableRowSelectionOnClick
//             // slots={{ toolbar: CustomToolbar }} - Экспорт в Эксель только в платной версии
//           />
//         </div>