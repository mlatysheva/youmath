import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiUrl } from '../../app/constants/apiUrl';
import { CategoryProps } from '../../entities/Category/categoryType';

export const currentCategories = ['Высшая математика для гуманитариев (М.А. Евдокимов, С.Г. Афанасьева, 2005)',
  'Высшая математика для дистанционного обучения',
  'Высшая математтика для заочного факультета',
  'Дифференциальное исчисление и его приложения',
  'Дифференциальные уравнения',
  'Дифференциальные уравнения. Ряды. Теория вероятностей (С.Г. Корнфельд, Н.Н. Попов, 2014)',
  'Дифференцирование функций. (С.Н. Кубышкина, Е.Ю. Арланова, 2015)',
  'Задания для подготовки к изучению курса высшей математики (С.Г. Корнфельд, 2013)',
  'Интеграл Римана и его приложения. Дифференциальные уравнения. Ряды',
  'Интегральное исчисление',
  'Комплексные числа',
  'Комплексный анализ. Теория вероятностей (С.Н. Кубышкина, 2015)',
  'Линейная алгебра и аналитическая геометрия',
  'Математика для гуманитарного образования',
  'Математическая статистика',
  'Математическое программирование и исследование операций (М.А. Евдокимов, 2012)',
  'Операционное исчисление',
  'Основные методы интегрирования (С. Н. КУБЫШКИНА, Е.Ю. АРЛАНОВА, 2016)',
  'Полярные координаты',
  'Прикладная математика и информатика',
  'Теория вероятностей',
  'Теория функций комплексной переменной и операционное исчисление',
  'Уравнения математической физики',
  'Числовые ряды',
  'Элементы векторного анализа и теории поля'];

const initialState: CategoryProps[] = [];

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async(_, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.get(`${apiUrl}/categories/`);
      const categories = res.data.results;
      dispatch(setCategories(categories));
      console.dir(categories);
    } catch (error) {
      rejectWithValue(error);
      console.error(error);
    }
  }
);

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState, 
  reducers: {
    setCategories: (state: CategoryProps[], action) => {
      state = action.payload;
      return state;
    }
  }
});

export const { setCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;