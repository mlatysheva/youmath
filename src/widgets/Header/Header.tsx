import React from 'react';
import classes from './Header.module.scss';
import { Search } from '../Search/Search';
import { AppBar, Toolbar, Typography } from '@mui/material';

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <AppBar
      className={classes.header}
    >
      <Toolbar
        className={classes.toolbar}
      >
        <Typography>
          <a href="https://practicum.yandex.ru/" className={classes.logo}>
            YouMath
          </a>
        </Typography>
       
      </Toolbar>      
      <p className={classes.slogan}>Making the world a better math</p>
      <Search />
    </AppBar>
  );
};

export { Header };
