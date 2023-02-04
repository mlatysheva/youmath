import React from 'react';
import classes from './Spinner.module.scss';

/**
 * @description A spinner component to be used when data is loading
 * @returns {JSX.Element}
 */
export const Spinner: React.FC = () => {
  return (
    <div className={classes['lds-spinner']}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
