import styles from './HeaderAccordion.module.css'


// eslint-disable-next-line react/prop-types
const HeaderAccordion = ({ onSignOut }) => {
    
    const onSignOutClick = () => {
        onSignOut();
      };

  return (
    <>
        <span className={`${styles["span"]}`}>
            <section className={`${styles["accordion"]}`}>
                <div className={`${styles["tab"]}`}>
                <input type="checkbox" name="accordion-1" id="cb1"></input>
                <label htmlFor="cb1" className={styles["tabLabel"]}>Имя
                    <p className={`${styles["tabSubtitle"]}`}>Должность</p>
                    
                </label>
                <div className={styles["tabContent"]}>
                    <p className={`${styles["tabEmail"]}`}>Ваш email@gmail.com</p>
                    <button onClick={onSignOutClick} className={`${styles["tabButton"]}`}>Выход</button>
                </div>
                
                </div>
            </section>
        </span>
    </>
    
  );
};

export default HeaderAccordion;