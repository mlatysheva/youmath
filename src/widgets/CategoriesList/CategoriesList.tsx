import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import { getCategories } from '../../features/categoriesSlice';
import classes from './CategoriesList.module.scss';
import { currentCategories } from '../../features/categoriesSlice';
import { CategoryProps } from '../../app/types/categoryType';

export const CategoriesList = () => {

  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.categories.categories);

  /**
   * @description: Fetch and place the Categories to the Redux store on component mount
   */
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  if (categories.length > 0) {
    return (
      <div className={classes.container}>
        {categories.map((category: CategoryProps) => {
          return (
            <div key={category.id}>
              <p>{category.title}</p>
            </div>
          );
        })}    
      </div>
    )
  } else {
    return (
      <div className={classes.container}>
        {currentCategories.map((category: string) => {
          return (
            <div
              key={category}
              className={classes.categoryLink}
            >
              {category}
            </div>
          );
        })}    
      </div>
    )
  }
};
