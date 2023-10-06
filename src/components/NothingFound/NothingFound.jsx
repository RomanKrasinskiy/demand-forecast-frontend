import NothingFoundCSS from './NothingFound.module.css';

function NothingFound() {
  return (
    <div className={NothingFoundCSS.container}>
      <div className={NothingFoundCSS.image}/>
      <div className={NothingFoundCSS.textContainer}>
        <h2 className={NothingFoundCSS.title}>К сожалению, ничего не нашлось</h2>
        <p className={NothingFoundCSS.description}>У нас есть много продуктов, но ваши фильтры могут быть слишком строгими. Попробуйте изменить из настройки.</p>
      </div>
    </div>
  )
}

export default NothingFound;