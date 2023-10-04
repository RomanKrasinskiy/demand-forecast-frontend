import styles from './Logo.module.css';
import { Link } from "react-router-dom";

function Logo() {


  return (
    <div className={styles.container}>
      <Link className={styles.logo} to="/forecast" />
    </div>
  )
}

export default Logo;