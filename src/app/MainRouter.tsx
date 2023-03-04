import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from '../pages/HomePage/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import { baseUrl } from './constants/baseUrl';


export const MainRouter: React.FC = () => {

  return (
    <div className="main">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path={`/${baseUrl}`} element={<HomePage />} />
        <Route path={`/${baseUrl}/*`} element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

