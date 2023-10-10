import { useSelector } from 'react-redux';
import styles from './Preloader.module.css';

export default function Preloader() {
  const preloaderState = useSelector(state => state.user.preloaderState);
  return (
    <>
      {preloaderState && (
        <div className={styles.preloader}>
      <div className={styles.loaderContainer}>
        <span className={styles.loader}></span>
      </div>
      </div>
    )}
    </>
  );
}