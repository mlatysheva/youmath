import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from '../pages/HomePage/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import { BASE_URL } from './constants/baseUrl';
import { AboutPage } from '../pages/AboutPage/AboutPage';
import { CategoriesPage} from '../pages/CategoriesPage/CategoriesPage';


export const MainRouter: React.FC = () => {
  const baseUrl = BASE_URL;

  return (
    <div className={'main' + ' ' + 'wrapper'}>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path={`/${baseUrl}`} element={<HomePage />} />
        <Route path={`/${baseUrl}/about`} element={<AboutPage />} />
        <Route path={`/${baseUrl}/categories`} element={<CategoriesPage />} />
        <Route path={`/${baseUrl}/*`} element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

