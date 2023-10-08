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
import { useEffect } from 'react';

function ProductDatabase() {
  // контролируем выбранные ячейки
  const productRowSelection = useSelector(state => state.filter.productRowSelect);

  // забираем из стейта наполнение фильтров
  const stores = useSelector(state => state.data.shopNames);
  const groups = useSelector(state => state.data.groupNames);
  const categories = useSelector(state => state.data.categoryNames);
  const subcategories = useSelector(state => state.data.subcategoryNames);
  // Функция трансформации данных с бэка в съедобный для Autocomplete вид - магазины
  function transformIntoShopsList(initialArray) {
    return initialArray.map((item, index) => {
      return {
        key: (index + 1),
        label: item.store_name,
      };
    });
  }
  // Трансформируем магазины в опции фильтра
  const storesList = transformIntoShopsList(stores);

  // забираем из стейта значение фильтров
  const shopFilter = useSelector(state => state.filter.shopFilter);
  const groupFilter = useSelector(state => state.filter.groupFilter);
  const categoryFilter = useSelector(state => state.filter.categoryFilter);
  const subcategoryFilter = useSelector(state => state.filter.subcategoryFilter);
  
  // Забираем продукты, полученные с бэка
  const categoriesData = useSelector(state => state.data.categories);
  // Функция трансформации данных с бэка в съедобный для Data Grid вид - строки
  function transformCategoriesData(initialArray) {
    return initialArray.map((item, index) => {
      const finalRow = {
        id: index + 1,
        c1: item.store,
        c2: item.group,
        c3: item.category,
        c4: item.subcategory,
        c5: item.product,
      };
      return finalRow;
    });
  }
  // Трансформируем продукты в строчки таблицы
  const categoriesDataRowsDataGrid = transformCategoriesData(categoriesData);

  // Колонки в таблице продуктов постоянные - нет смысла их держать в стейте.
  const productTableColumns = [
    { field: 'c1', headerName: 'ТК', width: 308, headerClassName: 'header'},
    { field: 'c2', headerName: 'Группа', width: 310, headerClassName: 'header' },
    { field: 'c3', headerName: 'Категория', width: 310, headerClassName: 'header' },
    { field: 'c4', headerName: 'Подкатегория', width: 310, headerClassName: 'header' },
    { field: 'c5', headerName: 'Товар', width: 310, headerClassName: 'header' },
  ];

  // Создаём диспетчер
  const dispatch = useDispatch();

  // обработка клика по выбору позиции из фильтра = отрендерить таблицу по новым данным, то есть:
  //   - отправили запрос на бэк с новым параметром фильтра (useDispatch на ответ обращения апишки?)
  //   - после ответа с бэка дёрнули из стейта новые данные (useSelect)
  // обработка поиска по товару = аналогично

  // добавить обработку кнопке "Получить прогноз"

  useEffect(() => {
    

  }, []);
  
  return (
    
    <>
    {/* Переключатель Таблица-График */}
    <div className={ProductDataCSS.btnContainer}>
      <div className={ProductDataCSS.switchContainer}>
        <button className={ProductDataCSS.optionActive}>Таблица</button>
      </div>
      <button className={`${ProductDataCSS.btnForecast} ${(productRowSelection.length > 0) ? ProductDataCSS.btnForecastActive : ''}`} data-tooltip="Выберите строки для прогноза">Получить прогноз</button>
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
          options={storesList}
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
        rows={categoriesDataRowsDataGrid} 
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
