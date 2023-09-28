import './ErrorPage';
import { Link } from 'react-router-dom';
import ErrorPageCSS from './ErrorPage.module.css';
import logo from '../../images/logo.svg';
import cat404 from '../../images/cat404.png';

function ErrorPage() {

  return (
    <>
    <div className={ErrorPageCSS.header}>
      <img className={ErrorPageCSS.logo} src={logo} alt="Лента"/>
    </div>
    <div className={ErrorPageCSS.container}>
      <img className={ErrorPageCSS.img} src={cat404} alt="Упс, не туда попали"/>
      <h1 className={ErrorPageCSS.title}>Упс! Кажется, вы не туда попали.</h1>
      <h2 className={ErrorPageCSS.description}>Перейдите на главную страницу сайта.</h2>
      <Link className={ErrorPageCSS.btn} to="/">Главная страница</Link>
    </div>
    </>
  )
}

export default ErrorPage;