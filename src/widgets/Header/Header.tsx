import React from 'react';
import classes from './Header.module.scss';
import { Search } from '../Search/Search';

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <div
      className={classes.header}
    >      
      <a href="https://practicum.yandex.ru/" className={classes.logo}>
        YouMath
      </a>     
            
      <p className={classes.slogan}>Making the world a better math</p>
      <Search />
    </div>
  );
};

export { Header };
