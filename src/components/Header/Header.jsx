import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import Logo from '../Logo/Logo';
import HeaderAccordion from "../HeaderAccordion/HeaderAccordion";

// eslint-disable-next-line react/prop-types
const Header = ({ onSignOut }) => {
  const activeState = ({ isActive }) => {
    return {
      color: isActive ? "white" : "",
      backgroundColor: isActive ? "rgba(0, 60, 150, 1)" : "",
      borderRadius: isActive && '46px',
      fontWeight: isActive && '500'
    };
  };
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <nav className={styles.navContainer}>
          <NavLink
            to="/productdatabase" style={activeState}
            className={`${styles.navLink} ${styles.navDataBase}`}
          >
            База товаров
          </NavLink>
          <NavLink to="/forecast" style={activeState}
          className={`${styles.navLink} ${styles.navForecast}`}
          >
            Прогноз
          </NavLink>
          <NavLink
            to="/statistics" style={activeState}
            className={`${styles.navLink} ${styles.navStatistics}`}
          >
            Статистика
          </NavLink>
        </nav>
        <HeaderAccordion onSignOut={onSignOut} />
      </div>
    </header>
  );
};

export default Header;
