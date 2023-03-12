import { PopularCategories } from '../../widgets/PopularCategories/PopularCategories';
import { PopularTasks } from '../../widgets/PopularTasks';
import classes from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={classes.HomePage}>
      <PopularTasks />
      <PopularCategories />
    </div>
  );
};
