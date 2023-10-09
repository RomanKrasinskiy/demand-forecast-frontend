import ForecastCSS from './Forecast.module.css';
import { useState } from 'react';
import { useSelector } from "react-redux";
import ForecastTable from './ForecastTable/ForecastTable';
import ForecastChart from './ForecastChart/ForecastChart';
import SearchForm from './../SearchForm/SearchForm';
import Filters from '../Filters/Filters';

const Forecast = () => {
  const [isDataTable, setDataChart] = useState(true);

  function handleDataChart() {
    isDataTable ? setDataChart(false) : '';
  }

  function handleDataTable() {
    !isDataTable ? setDataChart(true) : '';
  }
  
  // Получаем состояние выбранных ячеек
  const forecastRowSelectId = useSelector(state => state.filter.forecastRowSelectId);

  // клик по кнопке Скачать в Эксель = дёрнуть бэк за файлом.

  return (
    <>
    {/* Переключатель Таблица-График */}
    <div className={ForecastCSS.btnContainer}>
      <div className={ForecastCSS.switchContainer}>
        <button className={`${ForecastCSS.option} ${isDataTable ? ForecastCSS.optionActive : ''}`} onClick={handleDataTable}>Таблица</button>
        <button className={`${ForecastCSS.option} ${!isDataTable ? ForecastCSS.optionActive : ''}`} onClick={handleDataChart}>График</button>
      </div>
      <button className={`${ForecastCSS.btnExcel} ${(forecastRowSelectId.length > 0) ? ForecastCSS.btnExcelActive : ''}`} data-tooltip="Выберите строки для экспорта">Выгрузить в Excel</button>
    </div>
    {/* Основной блок с данными */}
    <div className={ForecastCSS.dataContainer}>
      <div className={ForecastCSS.searchContainer}>
        <SearchForm />
      </div>
      {/* Панель с фильтрами */}
      <div className={ForecastCSS.optionsContainer}>
        <Filters />
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
