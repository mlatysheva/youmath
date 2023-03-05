import { CategoriesList } from '../../widgets/CategoriesList/CategoriesList';
import classes from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={classes.HomePage}>
      <h1>Добро пожаловать в Математическую лабораторию!</h1>
      <CategoriesList />
    </div>
  );
};
