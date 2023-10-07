import StatisticsTableCSS from './StatisticsTable.module.css';
// import { DataGrid } from '@mui/x-data-grid';
import { tableColumns, tableRows } from '../../../utils/StatisticsData';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const StatisticsTable = () => {

  // контролируем выбранные ячейки
  const [rowSelectionModel, setRowSelectionModel] = useState([0]);
  // const stores = useSelector(state => state.data.shopNames);
  const shopFilter = useSelector(state => state.filter.shopFilter);

  console.log(shopFilter)
  
  
  
  
  
  const filteredRows = tableRows.filter(item => shopFilter?.key == item.id); 

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
        rows={filteredRows} 
        columns={tableColumns}
        initialState={{pagination: { paginationModel: { pageSize: 10 }}}}
        pageSizeOptions={[5, 10, 20, 30]}
        checkboxSelection
        disableRowSelectionOnClick
        keepNonExistentRowsSelected
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setRowSelectionModel(newRowSelectionModel);
        }}
        rowSelectionModel={rowSelectionModel}
      />  
    </div>
  )
}

export default StatisticsTable;