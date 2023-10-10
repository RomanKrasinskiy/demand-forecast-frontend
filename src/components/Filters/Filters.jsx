import { TextField, Autocomplete } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from 'react';
import { 
    setNewCategoriesFilter, 
    setNewGroupFilter, 
    setNewShopFilter, 
    setNewSubcategoriesFilter,
   } from '../store/filterSlice';
// import { getCategories, getShops } from '../../api/DataApi';
// import { setCategories, setShops } from '../store/dataSlice';

function Filters() {
    // Создаём диспетчер
    const dispatch = useDispatch();

    // забираем из стейта наполнение фильтров
    const stores = useSelector(state => state.data.shopNames);
    const categories = useSelector(state => state.data.categories);

    // забираем из стейта значение фильтров
    const shopFilter = useSelector(state => state.filter.shopFilter);
    const groupFilter = useSelector(state => state.filter.groupFilter);
    const categoryFilter = useSelector(state => state.filter.categoryFilter);
    const subcategoryFilter = useSelector(state => state.filter.subcategoryFilter);

    // Функция трансформации данных с бэка в съедобный для Autocomplete вид - магазины
    function transformIntoShopsList(initialArray) {
      return initialArray.map((item, index) => {
        return {
          key: (index + 1),
          label: item.store_name,
        };
      });
    }
    // Трансформируем магазины в опции фильтра
    const storesList = transformIntoShopsList(stores);

    // Функция трансформации данных с бэка в съедобный для Autocomplete вид - группы
    function transformIntoGroupsList(initialArray) {
      const uniqueGroups = [...new Set(initialArray.map(item => item.group))];
      const newArray = uniqueGroups.map((groupName, index) => ({
        key: index + 1,
        label: groupName,
      }));
  
      return newArray
    }
    // Трансформируем группы в опции фильтра
    const groupsList = transformIntoGroupsList(categories);
    
    // Функция трансформации данных с бэка в съедобный для Autocomplete вид - категории
    function transformIntoCategoriesList(initialArray) {
      const uniqueCategories = [...new Set(initialArray.map(item => item.category))];
      const newArray = uniqueCategories.map((categoryName, index) => ({
        key: index + 1,
        label: categoryName,
      }));
    
      return newArray
    }
    // Трансформируем категории в опции фильтра
    const categoriesList = transformIntoCategoriesList(categories);

    // Функция трансформации данных с бэка в съедобный для Autocomplete вид - подкатегории
    function transformIntoSubategoriesList(initialArray) {
      const uniqueSubcategories = [...new Set(initialArray.map(item => item.subcategory))];
      const newArray = uniqueSubcategories.map((subcategoryName, index) => ({
        key: index + 1,
        label: subcategoryName,
      }));
  
      return newArray
    }
    // Трансформируем категории в опции фильтра
    const subcategoriesList = transformIntoSubategoriesList(categories);

    // Юз эффекты
    // useEffect(() => {
    //       getShops()
    //         .then((data) => { // в data приходит целый не фильтрованый объект с данными
    //           // console.log(data);
    //           dispatch(setShops(data))
    //         })
    //         .catch((err) => console.log(`Ошибка: ${err}`));
    //   }, [dispatch]);
      
    // useEffect(() => {
    //   if (groupFilter.length === 0) {
    //     getCategories()
    //       .then((data) => { // в data приходит целый не фильтрованый объект с данными
    //         // console.log(data);
    //         dispatch(setCategories(data)) // нужно отфильтровать
    //       })
    //       .catch((err) => console.log(`Ошибка: ${err}`));
    //   }
    // }, [dispatch]);
    
    return (
        <>
        <Autocomplete
          disablePortal
          id="stores"
          options={storesList}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          sx={{ 
            maxWidth: 387, 
            width: '100%',
            height: 48,
            '& .MuiOutlinedInput-root': {
            fontSize: "13px",
          }
          }}
          renderInput={(params) => <TextField {...params} label="ТК" />}
          value={shopFilter}
          onChange={(event, newValue) => {
            dispatch(setNewShopFilter(newValue))
          }}
        />
        <Autocomplete
          disablePortal
          id="group"
          options={groupsList}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          sx={{ 
            maxWidth: 387, 
            width: '100%',
            height: 48,
            '& .MuiOutlinedInput-root': {
              fontSize: "13px",
            }
          }}
          renderInput={(params) => <TextField {...params} label="Группа" />}
          value={groupFilter}
          onChange={(event, newValue) => {
            dispatch(setNewGroupFilter(newValue))
          }}
        />
        <Autocomplete
          disablePortal
          id="categories"
          options={categoriesList}
          sx={{ 
            maxWidth: 387, 
            width: '100%',
            height: 48,
            '& .MuiOutlinedInput-root': {
              fontSize: "13px",
            }
          }}
          renderInput={(params) => <TextField {...params} label="Категория" />}
          value={categoryFilter}
          onChange={(event, newValue) => {
            dispatch(setNewCategoriesFilter(newValue))
          }}
        />
        <Autocomplete
          disablePortal
          id="subcategories"
          options={subcategoriesList}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          sx={{ 
            maxWidth: 387, 
            width: '100%',
            height: 48,
            '& .MuiOutlinedInput-root': {
            fontSize: "13px",
          }
          }}
          renderInput={(params) => <TextField {...params} label="Подкатегория" />}
          value={subcategoryFilter}
          onChange={(event, newValue) => {
            dispatch(setNewSubcategoriesFilter(newValue))
          }}
        />
        </>
    )
}

export default Filters;