import { baseUrl as url } from '../../../app/constants/baseUrl';
import { Search } from '../Search/Search';
import './NavBar.module.scss';
import classes from './NavBar.module.scss';
import React from 'react'


interface Props {}

export const NavBar: React.FC<Props> = () => {
  const baseUrl = url;

  return (
    <header>
      <a href="#" className={classes.logo}>My Website</a>
      <p className={classes.slogan}>Making the world a better place</p>
      <Search />
    </header>
  );
};
