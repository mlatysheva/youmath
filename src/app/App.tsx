import React from 'react';
import logo from '../shared/assets/images/logo.jpg';
import classes from './styles/App.module.scss';

function App() {
  return (
    <div className={classes.App}>
      <header className={classes["App-header"]}>
        <img src={logo} className={classes['App-logo']} alt="logo" />
        <p>
          Welcome to Math Laboratory!
        </p>
      </header>
    </div>
  );
}

export default App;
