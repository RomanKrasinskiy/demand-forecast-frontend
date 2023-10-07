import ProductDataCSS from './ProductDatabase.module.css';
import { TextField, Autocomplete } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from "react-redux";
import { 
  setNewCategoriesFilter, 
  setNewGroupFilter, 
  setNewShopFilter, 
  setNewSubcategoriesFilter,
  setNewProductRowSelect,
 } from '../store/filterSlice';
import SearchForm from './../SearchForm/SearchForm';

function ProductDatabase() {
  // контролируем выбранные ячейки
  const productRowSelection = useSelector(state => state.filter.productRowSelect);

  // забираем из стейта наполнение фильтров
  const stores = useSelector(state => state.data.shopNames);
  const groups = useSelector(state => state.data.groupNames);
  const categories = useSelector(state => state.data.categoryNames);
  const subcategories = useSelector(state => state.data.subcategoryNames);

  // забираем из стейта значение фильтров
  const shopFilter = useSelector(state => state.filter.shopFilter);
  const groupFilter = useSelector(state => state.filter.groupFilter);
  const categoryFilter = useSelector(state => state.filter.categoryFilter);
  const subcategoryFilter = useSelector(state => state.filter.subcategoryFilter);
  // const productFilter = useSelector(state => state.filter.productFilter); // - это в сёрч форму нужно будет убрать.

  // Создаём диспетчер
  const dispatch = useDispatch();
  
  // Колонки в таблице продуктов постоянные - не вижу смысла их держать в стейте.
  const productTableColumns = [
    { field: 'c1', headerName: 'ТК', width: 308, headerClassName: 'header'},
    { field: 'c2', headerName: 'Группа', width: 310, headerClassName: 'header' },
    { field: 'c3', headerName: 'Категория', width: 310, headerClassName: 'header' },
    { field: 'c4', headerName: 'Подкатегория', width: 310, headerClassName: 'header' },
    { field: 'c5', headerName: 'Товар', width: 310, headerClassName: 'header' },
  ];
  // Забираем наполнение строк таблицы
  const productTableRows = useSelector(state => state.data.productTableRows);

  // обработка клика по выбору позиции из фильтра = отрендерить таблицу по новым данным, то есть:
  //   - отправили запрос на бэк с новым параметром фильтра (useDispatch на ответ обращения апишки?)
  //   - после ответа с бэка дёрнули из стейта новые данные (useSelect)
  // обработка поиска по товару = аналогично

  // галочки в таблице:
  //   - по клику падают в массив в filterSlice

  // добавить обработку кнопке "Получить прогноз"

  return (
    
    <>
    {/* Переключатель Таблица-График */}
    <div className={ProductDataCSS.btnContainer}>
      <div className={ProductDataCSS.switchContainer}>
        <button className={ProductDataCSS.optionActive}>Таблица</button>
      </div>
      <button className={`${ProductDataCSS.btnExcel} ${(productRowSelection.length > 0) ? ProductDataCSS.btnExcelActive : ''}`} data-tooltip="Выберите строки для прогноза">Выгрузить в Excel</button>
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
          isOptionEqualToValue={(option, value) => option.id === value.id}
          sx={{ 
            maxWidth: 387, 
            width: '100%',
            height: 48,
          }}
          renderInput={(params) => <TextField {...params} label="ТК" />}
          value={shopFilter}
          onChange={(event, newValue) => {
            dispatch(setNewShopFilter(newValue))
          }}
        />
        <Autocomplete
          disablePortal
          id="group"
          options={groups}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          sx={{ 
            maxWidth: 387, 
            width: '100%',
            height: 48,
          }}
          renderInput={(params) => <TextField {...params} label="Группа" />}
          value={groupFilter}
          onChange={(event, newValue) => {
            dispatch(setNewGroupFilter(newValue))
          }}
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
          value={categoryFilter}
          onChange={(event, newValue) => {
            dispatch(setNewCategoriesFilter(newValue))
          }}
        />
        <Autocomplete
          disablePortal
          id="subcategories"
          options={subcategories}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          sx={{ 
            maxWidth: 387, 
            width: '100%',
            height: 48,
          }}
          renderInput={(params) => <TextField {...params} label="Подкатегория" />}
          value={subcategoryFilter}
          onChange={(event, newValue) => {
            dispatch(setNewSubcategoriesFilter(newValue))
          }}
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
        keepNonExistentRowsSelected
        onRowSelectionModelChange={(newRowSelectionModel) => {
          dispatch(setNewProductRowSelect(newRowSelectionModel));
        }}
        rowSelectionModel={productRowSelection}
      />
      </div>
    </div>
    </>
  );
}
export default ProductDatabase;
