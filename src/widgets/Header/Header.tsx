import { Link } from 'react-router-dom';
import classes from './Header.module.scss';
import { baseUrl as url } from '../../app/constants/baseUrl';

export const Header = () => {

  const baseUrl = url;

  return (
    <div className={classes.header}>
      <a href="" className="logo" target="_blank" rel="noreferrer"></a>
      <div className={classes.nav}>
        <Link to={`/${baseUrl}`}>Главная</Link>
        <Link to={`/${baseUrl}/catalogue`}>Каталог</Link>
        <Link to={`/${baseUrl}/contacts`}>Контакты</Link>
      </div>
    </div>
  )
};

