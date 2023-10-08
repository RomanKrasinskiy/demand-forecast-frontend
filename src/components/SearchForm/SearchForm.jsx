import SearchCSS from './Search.module.css';
import { useSelector, useDispatch } from "react-redux";
import { setNewProductFilter } from '../store/filterSlice';
import { useState } from 'react';

function SerchForm() {
  // Забираем из стейта значение фильтра
  const productFilter = useSelector(state => state.filter.productFilter);
  const [searchQuery, setSearchQuery] = useState(productFilter);
  // Создаём диспетчер
  const dispatch = useDispatch();
  // Поведение инпута
  function handleChange(e) {
    setSearchQuery(e.target.value);
  }
  // Обработка сабмита
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(setNewProductFilter(searchQuery));
  }

  return (
    <form className={SearchCSS.searchContainer} onSubmit={handleSubmit}>
      <input className={SearchCSS.search} placeholder='Поиск' defaultValue={productFilter || ''} onChange={handleChange}/>
      <button className={SearchCSS.findBtn} type='submit'>Найти</button>
    </form>
  )
}

export default SerchForm;