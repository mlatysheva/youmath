import React from 'react';
import classes from './Search.module.scss';

interface Props {}

export const Search: React.FC<Props> = () => {
  return (
    <div className={classes.searchContainer}>
      <input
        type="text"
        className={classes.searchInput}
        placeholder="Поиск..."
      />
      <button className={classes.searchButton}>Go</button>
    </div>
  );
};
