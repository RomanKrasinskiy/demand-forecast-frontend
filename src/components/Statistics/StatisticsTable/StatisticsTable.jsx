import StatisticsTableCSS from './StatisticsTable.module.css';
// import { DataGrid } from '@mui/x-data-grid';
import { tableColumns, tableRows } from '../../../utils/ForecastData';
import { DataGrid } from '@mui/x-data-grid';

const StatisticsTable = () => {

  return (
    <div className={StatisticsTableCSS.table}>
      <DataGrid
        sx={{
          '& .header': {
            backgroundColor: '#F1F5FF',
          },
          '& .MuiDataGrid-columnHeaderCheckbox': {
            backgroundColor: '#F1F5FF',
          },
        }}
        rows={tableRows} 
        columns={tableColumns}
        
        initialState={{pagination: { paginationModel: { pageSize: 10 }}}}

        pageSizeOptions={[5, 10, 20, 30]}
        checkboxSelection
        disableRowSelectionOnClick
      />  
    </div>
  )
}

export default StatisticsTable;