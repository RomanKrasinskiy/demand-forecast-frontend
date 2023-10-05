import "./ProductDatabase";
import ProductDataCSS from './ProductDatabase.module.css';
import { TextField, Autocomplete } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { stores, groups, categories, subcategories } from '../../utils/MenuProps';
import { tableColumns, tableRows } from '../../utils/ProductData';
import SearchForm from './../SearchForm/SearchForm';

function ProductDatabase() {
  // на рендере страницы дёргаем из Датастейта:
  // const stores = перечень ТК мапнутый в форму нужную для фильтра (useSelector)
  // const groups = перечень Групп мапнутый в форму нужную для фильтра (useSelector)
  // const categories = перечень Категорий мапнутый в форму нужную для фильтра (useSelector)
  // const subcategories = перечень Подкатегорий мапнутый в форму нужную для фильтра (useSelector)
  // {tableRows, tableColumns} = на рендере тут все товары по выбранной на вхое ТК (useSelector)

  // обработка клика по выбору позиции из фильтра = отрендерить таблицу по новым данным, то есть:
  //   - отправили запрос на бэк с новым параметром фильттра (useDispatch на ответ обращения апишки?)
  //   - после ответа с бэка дёрнули из стейта новые данные (useSelect)
  // обработка поиска по товару = аналогично

  // обработка галочки в таблице = добавить в стейт, который будет отправлять запрос на бэк за прогнозом. (useDispatch)
  // при этом у нас нет кнопки "получить прогноз". так что стейт получается "накопительный"

  // обработка снятия галочки в таблице = убрать из стейта, который будет отправлять запрос на бэк за прогнозом. (useDispatch)

  return (
    <>
    {/* Переключатель Таблица-График */}
    <div className={ProductDataCSS.switchContainer}>
      <button className={ProductDataCSS.optionActive} >Таблица</button>
    </div>
    {/* Основной блок с данными */}
    <div className={ProductDataCSS.dataContainer}>
      <div className={ProductDataCSS.searchContainer}>
        <SearchForm />
      </div>
      {/* Панель с фильтрами */}
      <div className={ProductDataCSS.optionsContainer}>
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
      <div className={ProductDataCSS.data}>
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
      />
      </div>
    </div>
    </>
  );
}
export default ProductDatabase;
