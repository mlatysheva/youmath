import React from 'react';
import classes from './Footer.module.scss';
import { Counter } from '../Counter/Counter';

export const Footer = () => {
  return (
    <div className={classes.booter}>
      <div className={classes.Copyright}>
        <p>&copy; 2023 All rights reserved.</p>
      </div>
      <div className={classes.Wrapper}>
        <div className={classes.Terms}> 
          <a href="#">Terms and Conditions</a> 
        </div> 
          <Counter/>
      </div>
      <div className={classes.Logo}>
        <img src="../../shared/assets/images/logo.jpg" alt="Company logo" />
      </div>
    </div>
  );
};