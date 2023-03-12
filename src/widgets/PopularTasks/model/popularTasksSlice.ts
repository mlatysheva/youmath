import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../../app/constants/apiUrl';
import { TaskCardProps } from '../../../shared/ui/TaskCard/TaskCard';

const initialState: TaskCardProps[] = [];

export const getPopularTasks = createAsyncThunk(
  'popularTasks/getPopularTasks',
  async(_, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.get(`${API_URL}/works?offset=4&limit=3`);
      const works = res.data.results;
      dispatch(popularTasksActions.setPopularTasks(works));
      console.dir(res.data);
    } catch (error) {
      rejectWithValue(error);
      console.error(error);
    }
  }
);

export const popularTasksSlice = createSlice({
  name: 'popularTasks',
  initialState, 
  reducers: {
    setPopularTasks: (state: TaskCardProps[], action) => {
      state = action.payload;
      return state;
    }
  }
});

export const { actions: popularTasksActions } = popularTasksSlice;
export const { reducer: popularTasksReducer } = popularTasksSlice;
