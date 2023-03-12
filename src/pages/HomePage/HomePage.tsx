import { CategoriesList } from '../../widgets/CategoriesList/CategoriesList';
import { PopularTasks } from '../../widgets/PopularTasks';
import classes from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={classes.HomePage}>
      <PopularTasks />
      <CategoriesList />
    </div>
  );
};
