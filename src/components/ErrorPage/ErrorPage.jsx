import './ErrorPage';
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";
import ErrorPageCSS from './ErrorPage.module.css';
import Logo from '../Logo/Logo';
import MainBackground from "../Main/MainBackground/MainBackground";

function ErrorPage() {

  return (
    <div className={ErrorPageCSS.page}>
      <MainBackground/>
      <div className={ErrorPageCSS.container}>
        <Logo />
        <div className={ErrorPageCSS.textContainer}>
          <h1 className={ErrorPageCSS.title}>Ошибка 404</h1>
          <p className={ErrorPageCSS.text}>Мы не смогли найти информацию по вашему запросу</p>
          <p className={ErrorPageCSS.linkText}>Вы можете <Link className={ErrorPageCSS.link} to='/'>вернуться на предыдущую страницу</Link></p>
        </div>
        <Link to='/'>
          <Button 
            variant='contained'
            sx={{
              width: '304px',
              height: '60px',
              backgroundColor: 'rgba(0, 60, 150, 1)',
              borderRadius: '46px',
              border: '2px solid rgba(0, 60, 150, 1)',
              color: 'white',
              fontSize: '20px',
              fontFamily: 'Helvetica Neue',
              textTransform: 'none',
            }}
          >На главную</Button>
        </Link>
      </div>
      
    </div>
  )
}

export default ErrorPage;