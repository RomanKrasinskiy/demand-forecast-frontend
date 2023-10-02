import styles from './Logo.module.css';
import { Link } from "react-router-dom";

function Logo() {


  return (
    <div className={styles.container}>
      <Link className={styles.logo} to="/" />
    </div>
  )
}

export default Logo;