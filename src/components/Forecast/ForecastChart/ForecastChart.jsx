import ForecastChartCSS from './ForecastChart.module.css';
import { DataGrid } from '@mui/x-data-grid';
import { Line } from 'react-chartjs-2';
import { useSelector, useDispatch } from "react-redux";
import { setNewForecastRowSelectId, setNewForecastRowSelectName } from '../../store/filterSlice';
import { useState } from 'react';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip
  } from 'chart.js';
import NothingFound from '../../NothingFound/NothingFound';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
)

const ForecastChart = () => {
  // Создаём диспетчер
  const dispatch = useDispatch();

  // Забираем прогноз
  const forecast = useSelector(state => state.data.forecast);

  // ГРАФИК
  // Функция трансформации данных с бэка в съедобный для ChartJS вид
  function transformForecastChartData(initialArray) {
    if (!Array.isArray(initialArray) || initialArray.length === 0) {
      return { labels: [], datasets: [] };
    }

    const labels = Object.keys(initialArray[0].forecast);
    const datasets = [];

    function generateColors(numColors) {
      const colors = [];
      const goldenAngle = 360 / 1.61803398875; // Golden angle in degrees
      for (let i = 0; i < numColors; i++) {
        const hue = (goldenAngle * i) % 360; // Generate a hue value
        const color = `hsl(${hue}, 70%, 50%)`; // Convert to HSL color format
        colors.push(color);
      }
      return colors;
    }

    const fixedColors = generateColors(initialArray.length);
  
    initialArray.forEach((item, index) => {
      const color = fixedColors[index];
      const productData = {
        label: item.product,
        data: labels.map((date) => item.forecast[date]),
        backgroundColor: color,
        borderColor: color,
        pointBorderColor: '#003C96',
      };
      datasets.push(productData);
    });
  
    return { labels, datasets };
  }
  // Трансформируем прогноз в дату для графика 
  const forecastChartData = transformForecastChartData(forecast);
  // Проверяем, а не пустой ли массив мы преобразовываем
  const chartDataIsEmpty = forecastChartData.labels.length === 0;
  // Определяем максимальное значение в датасетах для обозначеия границы графика по оси Y
  function findMaxValueInDatasets(chartData) {
    if (chartDataIsEmpty) {
      return 0;
    }

    let maxValue = Number.MIN_SAFE_INTEGER;
  
    chartData.datasets.forEach((dataset) => {
      const maxInDataset = Math.max(...dataset.data);
      if (maxInDataset > maxValue) {
        maxValue = maxInDataset;
      }
    });
  
    return maxValue;
  }
  // Записываем максимальное значение в переменную
  const maxValue = findMaxValueInDatasets(forecastChartData);
  // Опции для графика
  const options = {
    plugins: {
      legend: {
        display: true,
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: maxValue+2,
      }
    },
    responsive: true
  }

  // ТАБЛИЦА РЯДОМ С ГРАФИКОМ
  // Функция трансформации данных с бэка в съедобный для Data Grid вид - строки
  function transformForecastChartTableRows(initialArray) {
    if (!Array.isArray(initialArray) || initialArray.length === 0) {
      return [];
    }
    
    const finalArray = initialArray.map((item, index) => ({
      id: index + 1,
      c1: item.product,
    }));
  
    return finalArray;
  }
  // Трансформируем прогноз в строки
  const forecastChartTableRowsDataGrid = transformForecastChartTableRows(forecast);
  // В табличке всегда всего одна колонка - с названием продукта.
  const forecastChartColumns = [
    { field: 'c1', headerName: 'Товар', width: '100%', headerClassName: 'header'},
  ];

  // Контролируем выбранные ячейки
  const forecastRowSelectId = useSelector(state => state.filter.forecastRowSelectId);
  // Создаём стейт айдишников выбранных строк
  const [selectedRowIds, setSelectedRowIds] = useState(forecastRowSelectId);
  // Хэндлер изменения стейта выбранных строк
  const handleSelectionChange = (newSelection) => {
    setSelectedRowIds(newSelection);

    const updatedSelectedValues = newSelection.map((rowId) => {
      const selectedRowData = forecastChartTableRowsDataGrid.find((row) => row.id === rowId);

      if (selectedRowData) {
        return selectedRowData.c1;
      }

      return null;
    });
    
    dispatch(setNewForecastRowSelectName(updatedSelectedValues));
    dispatch(setNewForecastRowSelectId(newSelection));
  };

  return (
    (forecast.length > 0)
      ? <div className={ForecastChartCSS.container}>
          <div className={ForecastChartCSS.chart}>
            <Line
              data = {forecastChartData}
              options = {options}
            ></Line>
          </div>
          <div className={ForecastChartCSS.table}>
            <DataGrid 
              rows={forecastChartTableRowsDataGrid} 
              columns={forecastChartColumns}
              initialState={{
                pagination: { paginationModel: { pageSize: 9 }},
              }}
              checkboxSelection
              disableRowSelectionOnClick
              keepNonExistentRowsSelected
              rowSelectionModel={selectedRowIds}
              onRowSelectionModelChange={handleSelectionChange}
            />
          </div>
        </div>
      : <NothingFound/>
  )
}

export default ForecastChart;
