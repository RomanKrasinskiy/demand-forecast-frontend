import "./ProductDatabase";
import ProductDataCSS from './ProductDatabase.module.css';
import { TextField, Autocomplete } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { stores, groups, categories, subcategories } from '../../utils/MenuProps';
import { tableColumns, tableRows } from '../../utils/ProductData';

function ProductDatabase() {
  return (
    <>
    {/* Переключатель Таблица-График */}
    <div className={ProductDataCSS.switchContainer}>
      <button className={ProductDataCSS.optionActive} >Таблица</button>
    </div>
    {/* Основной блок с данными */}
    <div className={ProductDataCSS.dataContainer}>
      {/* Тут будет компонент SearchForm, пока просто его задизайнил */}
      <div className={ProductDataCSS.searchContainer}>
        <input className={ProductDataCSS.search} placeholder='Поиск'/>
        <button className={ProductDataCSS.findBtn}>Найти</button>
      </div>
      {/* Панель с фильтрами */}
      <div className={ProductDataCSS.optionsContainer}>
        <Autocomplete
          disablePortal
          id="stores"
          options={stores}
          sx={{ 
            maxWidth: 387, 
            width: '100%',
            height: 48,
          }}
          renderInput={(params) => <TextField {...params} label="ТК" />}
        />
        <Autocomplete
          disablePortal
          id="group"
          options={groups}
          sx={{ 
            maxWidth: 387, 
            width: '100%',
            height: 48,
          }}
          renderInput={(params) => <TextField {...params} label="Группа" />}
        />
        <Autocomplete
          disablePortal
          id="categories"
          options={categories}
          sx={{ 
            maxWidth: 387, 
            width: '100%',
            height: 48,
          }}
          renderInput={(params) => <TextField {...params} label="Категория" />}
        />
        <Autocomplete
          disablePortal
          id="subcategories"
          options={subcategories}
          sx={{ 
            maxWidth: 387, 
            width: '100%',
            height: 48,
          }}
          renderInput={(params) => <TextField {...params} label="Подкатегория" />}
        />
      </div>
      <div className={ProductDataCSS.data}>
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
      />
      </div>
    </div>
    </>
  );
}
export default ProductDatabase;
