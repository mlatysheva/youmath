import React from "react";
import './Search.module.scss';
import classes from './Search.module.scss';

interface Props {}

export const Search: React.FC<Props> = () => {
  return (
    <header>
    <div className={classes.searchContainer}>
      <input type="text" className={classes.searchInput} placeholder="Search..." />
      <button className={classes.searchButton}>Go</button>
    </div>
    </header>
  );
};
