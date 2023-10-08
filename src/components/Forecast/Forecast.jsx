import ForecastCSS from './Forecast.module.css';
import { useState } from 'react';
import { TextField, Autocomplete } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import { setNewCategoriesFilter, setNewGroupFilter, setNewShopFilter, setNewSubcategoriesFilter } from '../store/filterSlice';
import ForecastTable from './ForecastTable/ForecastTable';
import ForecastChart from './ForecastChart/ForecastChart';
import SearchForm from './../SearchForm/SearchForm';

const Forecast = () => {
  const [isDataTable, setDataChart] = useState(true);

  function handleDataChart() {
    isDataTable ? setDataChart(false) : '';
  }

  function handleDataTable() {
    !isDataTable ? setDataChart(true) : '';
  }
  
  // Получаем состояние выбранных ячеек
  const forecastRowSelection = useSelector(state => state.filter.productRowSelect);

  // Забираем из стейта наполнение фильтров
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

  // Забираем из стейта значение фильтров
  const shopFilter = useSelector(state => state.filter.shopFilter);
  const groupFilter = useSelector(state => state.filter.groupFilter);
  const categoryFilter = useSelector(state => state.filter.categoryFilter);
  const subcategoryFilter = useSelector(state => state.filter.subcategoryFilter);
  // const productFilter = useSelector(state => state.filter.productFilter); // - это в сёрч форму нужно будет убрать.

  // Создаём диспетчер
  const dispatch = useDispatch();

  // обработка клика по выбору позиции из фильтра = отрендерить таблицу/график по новым данным, то есть:
  //   - отправили запрос на бэк с новым параметром фильттра (useDispatch на ответ обращения апишки?)
  //   - после ответа с бэка дёрнули из стейта новые данные (useSelect)
  // обработка поиска по товару = аналогично

  // галочки в таблице = массив с номерами строк rowSelectionModel (местный стейт, не редакс), который будет отправлять запрос на бэк 
  // за прогнозом, а полученный результат useDispatch в слайс с данными.

  // клик по кнопке Скачать в Эксель = дёрнуть бэк за файлом.

  return (
    <>
    {/* Переключатель Таблица-График */}
    <div className={ForecastCSS.btnContainer}>
      <div className={ForecastCSS.switchContainer}>
        <button className={`${ForecastCSS.option} ${isDataTable ? ForecastCSS.optionActive : ''}`} onClick={handleDataTable}>Таблица</button>
        <button className={`${ForecastCSS.option} ${!isDataTable ? ForecastCSS.optionActive : ''}`} onClick={handleDataChart}>График</button>
      </div>
      <button className={`${ForecastCSS.btnExcel} ${(forecastRowSelection.length > 0) ? ForecastCSS.btnExcelActive : ''}`} data-tooltip="Выберите строки для экспорта">Выгрузить в Excel</button>
    </div>
    {/* Основной блок с данными */}
    <div className={ForecastCSS.dataContainer}>
      <div className={ForecastCSS.searchContainer}>
        <SearchForm />
      </div>
      {/* Панель с фильтрами */}
      <div className={ForecastCSS.optionsContainer}>
        <Autocomplete
          disablePortal
          id="stores"
          options={storesList}
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
          // disablePortal
          id="group"
          options={groups}
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
