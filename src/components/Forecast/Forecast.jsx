import './Forecast';
import ForecastCSS from './Forecast.module.css';
import logo from '../../images/logo.svg';
import dropArrow from '../../images/drop-arrow.svg';
import { TextField, Autocomplete } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { stores, groups, categories, subcategories } from '../../utils/MenuProps';
import { columns, rows } from '../../utils/ForecastData';
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

  return (
    <>
      {/* Тут будет компонент Хедер, пока просто его задизайнил */}
    <div className={ForecastCSS.header}>
      <img className={ForecastCSS.logo} src={logo} alt="Лента"/>
      <div className={ForecastCSS.btnContainer}>
        <button className={ForecastCSS.passiveBtn}>База товаров</button>
        <button className={ForecastCSS.activeBtn}>Прогноз</button>
        <button className={ForecastCSS.passiveBtn}>Статистика</button>
      </div>
      <div className={ForecastCSS.userContainer}>
        <div className={ForecastCSS.userData}>
          <p className={ForecastCSS.userName}>Василий Антонов</p>
          <p className={ForecastCSS.userTitle}>Должность</p>
        </div>
        <img className={Forecast.select} src={dropArrow}/>
      </div>
    </div>
    {/* Переключатель Таблица-График */}
    <div className={ForecastCSS.switchContainer}>
      <p className={ForecastCSS.optionActive}>Таблица</p>
      <p className={ForecastCSS.option}>График</p>
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
          rows={rows} 
          columns={columns}
          initialState={{
            pagination: { paginationModel: { pageSize: 5 }},
          }}
          pageSizeOptions={[5, 10, 20, 30]}
          checkboxSelection
          disableRowSelectionOnClick
          // slots={{ toolbar: CustomToolbar }} - Экспорт в Эксель только в платной версии
        />
        {/* График */}
        
      </div>
    </div>
    </>
  )
}

export default Forecast;