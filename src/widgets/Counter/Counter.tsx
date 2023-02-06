import React from 'react';
import classes from './Counter.module.scss';

interface Props {}

export const Counter: React.FC<Props> = () => {
  return (
    <div className={classes.wrapper}>
      <p>Visitor count: 12345</p>
    </div>
  );
};
