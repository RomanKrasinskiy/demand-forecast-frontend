import StatisticsCSS from './Statistics.module.css';
import { TextField, Autocomplete } from '@mui/material';
import { useState } from "react";
import DatePickerCalendar from '../DatePickerCalendar/DatePickerCalendar';
import SearchForm from '../SearchForm/SearchForm';
import { useDispatch, useSelector } from 'react-redux';
import { setNewCategoriesFilter, setNewGroupFilter, setNewProductRowSelectId, setNewProductRowSelectName, setNewShopFilter, setNewSubcategoriesFilter } from '../store/filterSlice';
// import { getCategories, getShops } from '../../api/DataApi';
// import { setCategories, setShops } from '../store/dataSlice';
import { DataGrid } from '@mui/x-data-grid';

const Statistics = () => {

  const dispatch = useDispatch();

  // забираем из стейта наполнение фильтров
  const stores = useSelector(state => state.data.shopNames);
  const categories = useSelector(state => state.data.categories);

  // забираем из стейта значение фильтров
  const shopFilter = useSelector(state => state.filter.shopFilter);
  const groupFilter = useSelector(state => state.filter.groupFilter);
  const categoryFilter = useSelector(state => state.filter.categoryFilter);
  const subcategoryFilter = useSelector(state => state.filter.subcategoryFilter);

  // Функция трансформации данных с бэка в съедобный для Autocomplete вид - магазины
  function transformIntoShopsList(initialArray) {
    return initialArray.map((item, index) => {
      return {
        key: (index + 1),
        label: item.store_name,
      };
    });
  }
  // Трансформируем статистику в опции фильтра
  const storesList = transformIntoShopsList(stores);

  // Функция трансформации данных с бэка в съедобный для Autocomplete вид - группы
  function transformIntoGroupsList(initialArray) {
    const uniqueGroups = [...new Set(initialArray.map(item => item.group))];
    const newArray = uniqueGroups.map((groupName, index) => ({
      key: index + 1,
      label: groupName,
    }));

    return newArray
  }
  // Трансформируем группы в опции фильтра
  const groupsList = transformIntoGroupsList(categories);
  
  // Функция трансформации данных с бэка в съедобный для Autocomplete вид - категории
  function transformIntoCategoriesList(initialArray) {
    const uniqueCategories = [...new Set(initialArray.map(item => item.category))];
    const newArray = uniqueCategories.map((categoryName, index) => ({
      key: index + 1,
      label: categoryName,
    }));
  
    return newArray
  }
  // Трансформируем категории в опции фильтра
  const categoriesList = transformIntoCategoriesList(categories);

  // Функция трансформации данных с бэка в съедобный для Autocomplete вид - подкатегории
  function transformIntoSubategoriesList(initialArray) {
    const uniqueSubcategories = [...new Set(initialArray.map(item => item.subcategory))];
    const newArray = uniqueSubcategories.map((subcategoryName, index) => ({
      key: index + 1,
      label: subcategoryName,
    }));

    return newArray
  }
  // Трансформируем категории в опции фильтра
  const subcategoriesList = transformIntoSubategoriesList(categories);

  // Забираем продукты, полученные с бэка
  const statsData = useSelector(state => state.data.stats);
  // Функция трансформации данных с бэка в съедобный для Data Grid вид - строки
  function transformCategoriesData(initialArray) {
    return initialArray.map((item, index) => {
      const finalRow = {
        id: index + 1,
        c1: item.product_name,
        c2: item.profit.reduce((total, entry) => total + entry.units, 0),
        c3: item.profit.reduce((total, entry) => total + entry.units_promo, 0),
        c4: item.profit.reduce((total, entry) => total + entry.money, 0),
        c5: item.profit.reduce((total, entry) => total + (entry.units - entry.units_promo), 0),
        c6: item.profit.reduce((total, entry) => total + entry.money_promo, 0),
      };
      return finalRow;
    });
  }
  // Трансформируем продукты в строчки таблицы
  const statsDataRowsDataGrid = transformCategoriesData(statsData);
  // Колонки в таблице продуктов постоянные - нет смысла их держать в стейте.
  const productTableColumns = [
    { field: 'c1', headerName: 'Товар', width: 310, headerClassName: 'header'},
    { field: 'c2', headerName: 'Фактические продажи', width: 300, headerClassName: 'header' },
    { field: 'c3', headerName: 'Прогноз шт', width: 186, headerClassName: 'header' },
    { field: 'c4', headerName: 'Прогноз ₽', width: 186, headerClassName: 'header' },
    { field: 'c5', headerName: 'Разница прогнозов', width: 240, headerClassName: 'header' },
    { field: 'c6', headerName: 'Качество прогноза по WAPE', width: 308, headerClassName: 'header' },
  ];
  // Контролируем выбранные ячейки
  const productRowSelectId = useSelector(state => state.filter.productRowSelectId);
  // Создаём стейт айдишников выбранных строк
  const [selectedRowIds, setSelectedRowIds] = useState(productRowSelectId);
  // Хэндлер изменения стейта выбранных строк
  const handleSelectionChange = (newSelection) => {
    setSelectedRowIds(newSelection);
    const updatedSelectedValues = newSelection.map((rowId) => {
      const selectedRowData = statsDataRowsDataGrid.find((row) => row.id === rowId);
      if (selectedRowData) {
        return selectedRowData.c5;
      }
      return null;
    });
    dispatch(setNewProductRowSelectName(updatedSelectedValues));
    dispatch(setNewProductRowSelectId(newSelection));
  };
  // Юз эффекты

  // useEffect(() => {
  //       getShops()
  //         .then((data) => { // в data приходит целый не фильтрованый объект с данными
  //           // console.log(data);
  //           dispatch(setShops(data))
  //         })
  //         .catch((err) => console.log(`Ошибка: ${err}`));
  //   }, [dispatch]);
    
  // useEffect(() => {
  //     getCategories()
  //       .then((data) => { // в data приходит целый не фильтрованый объект с данными
  //         // console.log(data);
  //         dispatch(setCategories(data)) // нужно отфильтровать
  //       })
  //       .catch((err) => console.log(`Ошибка: ${err}`));
  // }, [dispatch]);

  return (
    <>
    <div className={StatisticsCSS.btnContainer}>
    <div className={StatisticsCSS.switchContainer}>
      <button className={StatisticsCSS.optionActive}>Таблица</button>
    </div>
    <button className={`${StatisticsCSS.btnForecast} ${(selectedRowIds.length > 0) ? 
        StatisticsCSS.btnForecastActive : ''}`} 
        data-tooltip="Выберите строки для прогноза">Получить прогноз</button>
    </div>
    <div className={StatisticsCSS.dataContainer}>
      <div className={StatisticsCSS.searchContainer}>
        <SearchForm />
      </div>
      <div className={StatisticsCSS.optionsContainer}>

      <Autocomplete
          disablePortal
          id="stores"
          options={storesList}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          sx={{ 
            maxWidth: 387, 
            width: '100%',
            height: 48,
            '& .MuiOutlinedInput-root': {
              fontSize: "13px",
            }
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
          options={groupsList}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          sx={{ 
            maxWidth: 387, 
            width: '100%',
            height: 48,
            '& .MuiOutlinedInput-root': {
              fontSize: "13px",
            }
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
          options={categoriesList}
          sx={{ 
            maxWidth: 387, 
            width: '100%',
            height: 48,
            '& .MuiOutlinedInput-root': {
              fontSize: "13px",
            }
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
          options={subcategoriesList}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          sx={{ 
            maxWidth: 387, 
            width: '100%',
            height: 48,
            '& .MuiOutlinedInput-root': {
              fontSize: "13px",
            }
          }}
          renderInput={(params) => <TextField {...params} label="Подкатегория" />}
          value={subcategoryFilter}
          onChange={(event, newValue) => {
            dispatch(setNewSubcategoriesFilter(newValue))
          }}
        />
          <DatePickerCalendar 
          
          />
        

      </div>
      <div className={StatisticsCSS.data}>
      <DataGrid
        sx={{
          '& .header': {
            backgroundColor: '#F1F5FF',
          },
          '& .MuiDataGrid-columnHeaderCheckbox': {
            backgroundColor: '#F1F5FF',
          },
          
        }}
        rows={statsDataRowsDataGrid} 
        columns={productTableColumns}
        initialState={{pagination: { paginationModel: { pageSize: 10 }}}}
        pageSizeOptions={[5, 10, 20, 30]}
        checkboxSelection
        disableRowSelectionOnClick
        keepNonExistentRowsSelected
        onRowSelectionModelChange={handleSelectionChange}
        rowSelectionModel={selectedRowIds}
      />  
      
      {/* {isDataTable
        ? <StatisticsTable />
        : <StatisticsChart />
      } */}
      </div>
    </div>
    </>
  )
}

export default Statistics;

