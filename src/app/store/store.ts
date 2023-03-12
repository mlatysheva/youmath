import { configureStore} from '@reduxjs/toolkit';
import categoriesReducer from '../../widgets/CategoriesList/categoriesSlice';
import { popularTasksReducer } from '../../widgets/PopularTasks/model/slice';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    popularTasks: popularTasksReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;