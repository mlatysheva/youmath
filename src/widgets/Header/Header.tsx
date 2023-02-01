import { Link } from 'react-router-dom';
import classes from './Header.module.scss';

export const Header = () => {

  return (
    <div className={classes.header}>
      <a href="" className="logo" target="_blank" rel="noreferrer"></a>
      <div className={classes.nav}>
        <Link to="/">Главная</Link>
        <Link to="/catalogue">Каталог</Link>
        <Link to="/contacts">Контакты</Link>
      </div>
    </div>
  )
};

