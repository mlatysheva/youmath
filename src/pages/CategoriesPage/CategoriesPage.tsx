import { CategoriesList } from '../../widgets/CategoriesList/CategoriesList';
import classes from './CategoriesPage.module.scss';

export const CategoriesPage = () => {
  return (
    <div className={`${classes.CategoriesPage} wrapper`}>
      <h1>Разделы</h1>
      <CategoriesList />
    </div>
  );
};
