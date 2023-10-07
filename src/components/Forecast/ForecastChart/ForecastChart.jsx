import ForecastChartCSS from './ForecastChart.module.css';
import { DataGrid } from '@mui/x-data-grid';
import { Line } from 'react-chartjs-2';
import { useSelector, useDispatch } from "react-redux";
import { setNewForecastRowSelect } from '../../store/filterSlice';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip
  } from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
)

const ForecastChart = () => {
  // В табличке всегда всего одна колонка - с названием продукта.
  const forecastChartColumns = [
    { field: 'c1', headerName: 'Товар', width: '100%', headerClassName: 'header'},
  ];
  // Забираем наполнение таблицы
  const forecastChartRows = useSelector(state => state.data.forecastChartRows);
  // Опции для графика
  // const maxValue = подумать над формулой, которая считает максимальное значение по оси У;
  const options = {
    plugins: {
      legend: {
        display: true,
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 20,
      }
    },
    responsive: true
  }
  const forecastChartData = useSelector(state => state.data.forecastChartData);
  // контролируем выбранные ячейки
  const forecastRowSelection = useSelector(state => state.filter.productRowSelect);

  // Создаём диспетчер
  const dispatch = useDispatch();

  return (
    <div className={ForecastChartCSS.container}>
      <div className={ForecastChartCSS.chart}>
        <Line
          data = {forecastChartData}
          options = {options}
        ></Line>
      </div>
      <div className={ForecastChartCSS.table}>
        <DataGrid 
          rows={forecastChartRows} 
          columns={forecastChartColumns}
          initialState={{
            pagination: { paginationModel: { pageSize: 9 }},
          }}
          checkboxSelection
          disableRowSelectionOnClick
          keepNonExistentRowsSelected
          onRowSelectionModelChange={(newRowSelection) => {
            dispatch(setNewForecastRowSelect(newRowSelection));
          }}
          rowSelectionModel={forecastRowSelection}
        />
      </div>
    </div>
  )
}

export default ForecastChart;
