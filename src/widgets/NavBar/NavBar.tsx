import { Link } from 'react-router-dom';
import { baseUrl as url } from '../../app/constants/baseUrl';
import classes from './NavBar.module.scss';
import React from 'react'


interface Props {}

export const NavBar: React.FC<Props> = () => {
  const baseUrl = url;

  return (
    <div className={classes.nav}>
      <Link to={`/${baseUrl}`}>Главная</Link>
      <Link to={`/${baseUrl}/catalogue`}>Каталог</Link>
      <Link to={`/${baseUrl}/contacts`}>Контакты</Link>
    </div>
  );
};
