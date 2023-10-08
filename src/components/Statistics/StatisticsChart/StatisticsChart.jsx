import StatisticsChartCSS from './StatisticsChart.module.css';
import { data, options, chartRows, chartColumns } from '../../../utils/StatisticsData';
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

const StatisticsChart = () => {

  return (
    <div className={StatisticsChartCSS.container}>
      <div className={StatisticsChartCSS.chart}>
        <Line
          data = {data}
          options = {options}
        ></Line>
      </div>
      <div className={StatisticsChartCSS.table}>
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

export default StatisticsChart;
