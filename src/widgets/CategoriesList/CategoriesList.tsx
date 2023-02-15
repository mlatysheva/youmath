import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import { getCategories } from './categoriesSlice';
import classes from './CategoriesList.module.scss';
import { currentCategories } from './categoriesSlice';
import { CategoryProps } from '../../entities/Category/categoryType';

export const CategoriesList = () => {

  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.categories);

  /**
   * @description: Fetch and place the Categories to the Redux store on component mount
   */
  useEffect(() => {
    dispatch(getCategories());
  }, []);

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
