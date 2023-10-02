import styles from './HeaderAccordion.module.css'


const HeaderAccordion = () => {
    
  

  return (
    <>
        <span className={`${styles["span"]}`}>
            <section className={`${styles["accordion"]}`}>
                <div className={`${styles["tab"]}`}>
                <input type="checkbox" name="accordion-1" id="cb1"></input>
                <label htmlFor="cb1" className={styles["tabLabel"]}>Имя пользователя
                    <p className={`${styles["tabSubtitle"]}`}>Начальник по пирожкам</p>
                    
                </label>
                <div className={styles["tabContent"]}>
                    <p className={`${styles["tabEmail"]}`}>fosdfsdsdffsdijf@gmail.com</p>
                    <button className={`${styles["tabButton"]}`}>Выход</button>
                </div>
                
                </div>
            </section>
        </span>
    </>
    
  );
};

export default HeaderAccordion;