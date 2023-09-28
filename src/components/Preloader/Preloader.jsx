import "./Preloader";
import PropTypes from 'prop-types';

export default function Preloader({ isActive }) {
  // Проверяем, что в loggedIn попадает именно boolean значение
  // Нужно декомпозировать.
  Preloader.propTypes = {
    isActive: PropTypes.bool.isRequired,
  }
  

  return (
    <>
      {isActive && (<div>Preloader</div>)}
    </>
  );
  

}