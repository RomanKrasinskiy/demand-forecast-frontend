import ProductDataCSS from './ProductDatabase.module.css';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from "react-redux";
import { 
  setNewProductRowSelectName,
  setNewProductRowSelectId,
 } from '../store/filterSlice';
import SearchForm from './../SearchForm/SearchForm';
import Filters from '../Filters/Filters';
import NothingFound from '../NothingFound/NothingFound';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductDatabase() {
  // Создаём диспетчер
  const dispatch = useDispatch();

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

  // Контролируем выбранные ячейки
  const productRowSelectId = useSelector(state => state.filter.productRowSelectId);
  // Создаём стейт айдишников выбранных строк
  const [selectedRowIds, setSelectedRowIds] = useState(productRowSelectId);
  // Хэндлер изменения стейта выбранных строк
  const handleSelectionChange = (newSelection) => {
    setSelectedRowIds(newSelection);

    const updatedSelectedValues = newSelection.map((rowId) => {
      const selectedRowData = categoriesDataRowsDataGrid.find((row) => row.id === rowId);
      if (selectedRowData) {
        return selectedRowData.c5;
      }
      return null;
    });
    
    dispatch(setNewProductRowSelectName(updatedSelectedValues));
    dispatch(setNewProductRowSelectId(newSelection));
  };

  // Обработка клика по кнопке "Получить прогноз"
  const navigate = useNavigate();
  const handleClick = () => {
    const handleGoForecast = () => { navigate("/forecast") };
    if (selectedRowIds.length > 0) { handleGoForecast() }
  };

  return (
    
    <>
    {/* Переключатель Таблица-График */}
    <div className={ProductDataCSS.btnContainer}>
      <div className={ProductDataCSS.switchContainer}>
        <button className={ProductDataCSS.optionActive}>Таблица</button>
      </div>
      <button 
        className={`${ProductDataCSS.btnForecast} ${(selectedRowIds.length > 0) ? ProductDataCSS.btnForecastActive : ''}`} 
        data-tooltip="Выберите строки для прогноза"
        onClick={handleClick}
      >
        Получить прогноз
      </button>
    </div>
    {/* Основной блок с данными */}
    <div className={ProductDataCSS.dataContainer}>
      <div className={ProductDataCSS.searchContainer}>
        <SearchForm />
      </div>
      {/* Панель с фильтрами */}
      <div className={ProductDataCSS.optionsContainer}>
        <Filters />
      </div>
      {/* Блок с таблицей */}
      <div className={ProductDataCSS.data}>
        {(categoriesData.length > 0)
          ? <DataGrid 
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
              rowSelectionModel={selectedRowIds}
              onRowSelectionModelChange={handleSelectionChange}
            />
          : <NothingFound />
        }
      </div>
    </div>
    </>
  );
}
export default ProductDatabase;
