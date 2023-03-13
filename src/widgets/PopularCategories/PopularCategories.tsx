import { Typography } from '@mui/material';
import { CategoriesList } from '../CategoriesList/CategoriesList';
import classes from './PopularCategories.module.scss'

export const PopularCategories = () => {

  return (
    <div className={`${classes.PopularCategories} wrapper`}>
      <Typography 
        sx={{
          fontSize: '2rem', 
          fontFamily: 'Ubuntu',
          fontStyle: 'normal',
          fontWeight: 700, 
          color: '#000000',
          textAlign: 'left',
        }}
      >
        Популярные разделы
      </Typography>
      <CategoriesList />
    </div>
  )
}