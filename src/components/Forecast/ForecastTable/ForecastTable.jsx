import ForecastTableCSS from './ForecastTable.module.css';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from "react-redux";
import { setNewForecastRowSelect } from '../../store/filterSlice';

const ForecastTable = () => {
  // контролируем выбранные ячейки
  const forecastRowSelection = useSelector(state => state.filter.productRowSelect);

  // Забираем прогноз
  const forecast = useSelector(state => state.data.forecast);

  // Функция трансформации данных с бэка в съедобный для Data Grid вид - строки
  function transformForecastTableRows(initialArray) {
    const finalArray = initialArray.map((item, index) => {
      const forecastValues = Object.values(item.forecast);
  
      const transformedItem = {
        id: index + 1,
        c1: item.product,
      };
  
      for (let i = 0; i < forecastValues.length; i++) {
        transformedItem[`c${i + 2}`] = forecastValues[i];
      }
  
      return transformedItem;
    });
  
    return finalArray;
  }
  // Трансформируем прогноз в строки
  const forecastTableRowsDataGrid = transformForecastTableRows(forecast);

  // Функция трансформации данных с бэка в съедобный для Data Grid вид - колонки
  function transformForecastTableColumns(initialArray) {
    const columns = [
      { field: 'c1', headerName: 'Product', width: 200, headerClassName: 'header' },
    ];
  
    const forecastDates = Object.keys(initialArray[0].forecast);
  
    forecastDates.forEach((date, index) => {
      columns.push({
        field: `c${index + 2}`,
        headerName: date,
        width: 145,
        headerClassName: 'header',
      });
    });
  
    return columns;
  }
  // Трансформируем прогноз в колонки
  const forecastTableColumnsDataGrid = transformForecastTableColumns(forecast);

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
        rows={forecastTableRowsDataGrid} 
        columns={forecastTableColumnsDataGrid}
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