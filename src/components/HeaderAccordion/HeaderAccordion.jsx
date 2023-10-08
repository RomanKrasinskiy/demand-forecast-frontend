import styles from './HeaderAccordion.module.css'


// eslint-disable-next-line react/prop-types
const HeaderAccordion = ({ onSignOut }) => {
  // забираем из стейта наполнение полей
  const name = useSelector(state => state.user.name);
  const occupation = useSelector(state => state.user.occupation);
  const email = useSelector(state => state.user.email);  const onSignOutClick = () => {
        onSignOut();
      };

  return (
    <>
        <span className={`${styles["span"]}`}>
            <section className={`${styles["accordion"]}`}>
                <div className={`${styles["tab"]}`}>
                <input type="checkbox" name="accordion-1" id="cb1"></input>
                <label htmlFor="cb1" className={styles["tabLabel"]}>{name}
                    <p className={`${styles["tabSubtitle"]}`}>{occupation}</p>
                    
                </label>
                <div className={styles["tabContent"]}>
                    <p className={`${styles["tabEmail"]}`}>{email}</p>
                    <button onClick={onSignOutClick} className={`${styles["tabButton"]}`}>Выход</button>
                </div>
                
                </div>
            </section>
        </span>
    </>
    
  );
};

export default HeaderAccordion;