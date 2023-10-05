import ForecastTableCSS from './ForecastTable.module.css';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { tableColumns, tableRows } from '../../../utils/ForecastData';

const ForecastTable = () => {
  const [rowSelectionModel, setRowSelectionModel] = useState([]);

  return (
    <div className={ForecastTableCSS.table}>
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
        initialState={{
          pagination: { paginationModel: { pageSize: 10 }},
        }}
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

export default ForecastTable;