import StatisticsTableCSS from './StatisticsTable.module.css';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { setNewStatsRowSelectId, setNewStatsRowSelectName } from '../../store/filterSlice';
import { useState } from 'react';
import NothingFound from '../../NothingFound/NothingFound';

const StatisticsTable = () => {
  // Создаём диспетчер
  const dispatch = useDispatch();

  // Забираем статистику
  const statsData = useSelector(state => state.data.stats);

  // Функция трансформации данных с бэка в съедобный для Data Grid вид - строки
  function transformCategoriesData(initialArray) {
    return initialArray.map((item, index) => {
      const finalRow = {
        id: index + 1,
        c1: item.product_name,
        c2: item.profit.reduce((total, entry) => total + entry.units, 0),
        c3: item.profit.reduce((total, entry) => total + entry.units_promo, 0),
        c4: item.profit.reduce((total, entry) => total + entry.money, 0),
        c5: item.profit.reduce((total, entry) => total + (entry.units - entry.units_promo), 0),
        c6: item.profit.reduce((total, entry) => total + entry.money_promo, 0),
      };
      return finalRow;
    });
  }
  // Трансформируем продукты в строчки таблицы
  const statsDataRowsDataGrid = transformCategoriesData(statsData);
  // Колонки в таблице продуктов постоянные - нет смысла их держать в стейте.
  const productTableColumns = [
    { field: 'c1', headerName: 'Товар', width: 310, headerClassName: 'header'},
    { field: 'c2', headerName: 'Фактические продажи', width: 300, headerClassName: 'header' },
    { field: 'c3', headerName: 'Прогноз шт', width: 186, headerClassName: 'header' },
    { field: 'c4', headerName: 'Прогноз ₽', width: 186, headerClassName: 'header' },
    { field: 'c5', headerName: 'Разница прогнозов', width: 240, headerClassName: 'header' },
    { field: 'c6', headerName: 'Качество прогноза по WAPE', width: 308, headerClassName: 'header' },
  ];

  // Контролируем выбранные ячейки
  const productRowSelectId = useSelector(state => state.filter.productRowSelectId);
  // Создаём стейт айдишников выбранных строк
  const [selectedRowIds, setSelectedRowIds] = useState(productRowSelectId);
  // Хэндлер изменения стейта выбранных строк
  const handleSelectionChange = (newSelection) => {
    setSelectedRowIds(newSelection);
    const updatedSelectedValues = newSelection.map((rowId) => {
      const selectedRowData = statsDataRowsDataGrid.find((row) => row.id === rowId);
      if (selectedRowData) {
        return selectedRowData.c5;
      }
      return null;
    });
    dispatch(setNewStatsRowSelectName(updatedSelectedValues));
    dispatch(setNewStatsRowSelectId(newSelection));
  };

  return (
    <div className={StatisticsTableCSS.table}>
      {(statsData.length > 0)
        ? <DataGrid
            sx={{
              '& .header': {
                backgroundColor: '#F1F5FF',
              },
              '& .MuiDataGrid-columnHeaderCheckbox': {
                backgroundColor: '#F1F5FF',
              },
            }}
            rows={statsDataRowsDataGrid} 
            columns={productTableColumns}
            initialState={{pagination: { paginationModel: { pageSize: 10 }}}}
            pageSizeOptions={[5, 10, 20, 30]}
            checkboxSelection
            disableRowSelectionOnClick
            keepNonExistentRowsSelected
            onRowSelectionModelChange={handleSelectionChange}
            rowSelectionModel={selectedRowIds}
          />
        : <NothingFound/>
        }  
    </div>
  )
}

export default StatisticsTable;