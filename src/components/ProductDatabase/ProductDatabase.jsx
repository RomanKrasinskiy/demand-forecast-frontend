import "./ProductDatabase";
import ProductDataCSS from './ProductDatabase.module.css';
import { TextField, Autocomplete } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from "react-redux";
import SearchForm from './../SearchForm/SearchForm';

function ProductDatabase() {
  const stores = useSelector(state => state.data.shopNames);
  const groups = useSelector(state => state.data.groupNames);
  const categories = useSelector(state => state.data.categoryNames);
  const subcategories = useSelector(state => state.data.subcategoryNames);
  const productTableRows = useSelector(state => state.data.productTableRows);
  // Колонки в таблице продуктов постоянные - не вижу смысла их дежать в стейте.
  const productTableColumns = [
    { field: 'c1', headerName: 'ТК', width: 308, headerClassName: 'header'},
    { field: 'c2', headerName: 'Группа', width: 310, headerClassName: 'header' },
    { field: 'c3', headerName: 'Категория', width: 310, headerClassName: 'header' },
    { field: 'c4', headerName: 'Подкатегория', width: 310, headerClassName: 'header' },
    { field: 'c5', headerName: 'Товар', width: 310, headerClassName: 'header' }
  ];

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
        rows={productTableRows} 
        columns={productTableColumns}
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
