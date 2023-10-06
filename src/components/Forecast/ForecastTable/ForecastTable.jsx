import ForecastTableCSS from './ForecastTable.module.css';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from "react-redux";

const ForecastTable = () => {
  const [rowSelectionModel, setRowSelectionModel] = useState([0]);

  // Забираем наполнение таблицы
  const forecastTableColumns = useSelector(state => state.data.forecastTableColumns);
  const forecastTableRows = useSelector(state => state.data.forecastTableRows);

  // Создаём диспетчер
  // const dispatch = useDispatch();


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
        rows={forecastTableRows} 
        columns={forecastTableColumns}
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