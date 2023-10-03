import './ForecastChart';
import ForecastChartCSS from './ForecastChart.module.css';
import { data, options, chartRows, chartColumns } from '../../../utils/ForecastData';
import { DataGrid } from '@mui/x-data-grid';
import { Line } from 'react-chartjs-2';
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

  return (
    <div className={ForecastChartCSS.container}>
      <div className={ForecastChartCSS.chart}>
        <Line
          data = {data}
          options = {options}
        ></Line>
      </div>
      <div className={ForecastChartCSS.table}>
        <DataGrid 
          rows={chartRows} 
          columns={chartColumns}
          initialState={{
            pagination: { paginationModel: { pageSize: 9 }},
          }}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    </div>
  )
}

export default ForecastChart;
