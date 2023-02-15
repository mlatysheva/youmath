import { Typography } from '@mui/material';
import classes from './Sidebar.module.scss';
import { CategoriesList } from '../CategoriesList/CategoriesList';

export const Sidebar = () => {

  return (
    <div className={classes.Sidebar}>
      <Typography variant='h3'>
        Разделы
      </Typography>
      <CategoriesList />
    </div>
  )
}
