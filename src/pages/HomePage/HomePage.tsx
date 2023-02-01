import classes from './HomePage.module.scss';
import logo from '../../shared/assets/images/logo.jpg';

export const HomePage = () => {
  return (
    <div className={'main' + " " + classes['home-page']}>
      <h1>Добро пожаловать в Математическую лабораторию!</h1>
      <img src={logo} className={classes['logo']} alt="logo" />
    </div>
  )
};