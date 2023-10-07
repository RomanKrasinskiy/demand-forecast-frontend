import ForecastTableCSS from './ForecastTable.module.css';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from "react-redux";
import { setNewForecastRowSelect } from '../../store/filterSlice';

const ForecastTable = () => {
  // контролируем выбранные ячейки
  const forecastRowSelection = useSelector(state => state.filter.productRowSelect);

  // Забираем наполнение таблицы
  const forecastTableColumns = useSelector(state => state.data.forecastTableColumns);
  const forecastTableRows = useSelector(state => state.data.forecastTableRows);

  // Создаём диспетчер
  const dispatch = useDispatch();


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
        onRowSelectionModelChange={(newRowSelection) => {
          dispatch(setNewForecastRowSelect(newRowSelection));
        }}
        rowSelectionModel={forecastRowSelection}
      />  
    </div>
  )
}

export default ForecastTable;