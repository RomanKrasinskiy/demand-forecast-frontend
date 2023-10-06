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
  // Забираем из стейта наполнение фильтров
  const stores = useSelector(state => state.data.shopNames);
  const groups = useSelector(state => state.data.groupNames);
  const categories = useSelector(state => state.data.categoryNames);
  const subcategories = useSelector(state => state.data.subcategoryNames);

  // Забираем из стейта значение фильтров
  const shopFilter = useSelector(state => state.filter.shopFilter);
  const groupFilter = useSelector(state => state.filter.groupFilter);
  const categoryFilter = useSelector(state => state.filter.categoryFilter);
  const subcategoryFilter = useSelector(state => state.filter.subcategoryFilter);
  // const productFilter = useSelector(state => state.filter.productFilter); // - это в сёрч форму нужно будет убрать.

  // Создаём диспетчер
  const dispatch = useDispatch();

  // на рендере страницы дёргаем из Датастейта:

  // const tableColumns и tableRows = наполнение таблицы прогнозом. И их надо прокинуть параметрами в компоненты. (useSelector)

  // const data, chartRows, chartColumns = наполнение графика прогноза. options для него можно иметь постоянным, но нужно посмотреть,
  // можно ли задать максимум по оси Y не конкретным числом, а в зависимости от наполнения графика (есть ли такой параметр в chart.js)
  // это тоже надо прокинуть параметром в компонент (useSelector)

  // {tableColumns, tableRows} и {data, chartRows, chartColumns} - это одни и те же данные, но по-разному мапнутые
  // также нужно подумать, эту логику нужно прописывать тут или лучше в копонентах таблицы и графика соответственно.

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
    <div className={ForecastCSS.switchContainer}>
      <button className={`${ForecastCSS.option} ${isDataTable ? ForecastCSS.optionActive : ''}`} onClick={handleDataTable}>Таблица</button>
      <button className={`${ForecastCSS.option} ${!isDataTable ? ForecastCSS.optionActive : ''}`} onClick={handleDataChart}>График</button>
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
          options={stores}
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
