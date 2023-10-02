import './MainBackground.module.css';
import style from './MainBackground.module.css';

function MainBackground() {


  return (
    <section className={style.section}>
        <div className={style.containerBackground}>
            <div className={style.circle}></div>
            <div className={style.leaf}></div> 
        </div>
    </section>
  )
}

export default MainBackground;