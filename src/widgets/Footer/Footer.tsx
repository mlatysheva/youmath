import React from 'react';
import classes from './Footer.module.scss';
import { Counter } from '../Counter/Counter';
import logo from '../../shared/assets/images/logo.jpg';

export const Footer = () => {
  return (
    <div className={classes.booter}>
      <div className={classes.copyright}>
        <p>&copy; 2023 All rights reserved.</p>
      </div>
      <div className={classes.wrapper}>
        <div className={classes.terms}>
          <a href="#">Terms and Conditions</a>
        </div>
        <Counter />
      </div>
      <div className={classes.logo}>
        <img src={logo} className={classes.logo} alt="Company logo" />
      </div>
    </div>
  );
};
