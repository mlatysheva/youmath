import React, { Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Spinner } from '../shared/ui/Spinner/Spinner';
import { Header } from '../widgets/Header/Header';
import { HomePage } from '../pages/HomePage/HomePage';
import './styles/index.scss';
import classes from './styles/App.module.scss';
import { CataloguePage } from '../pages/CataloguePage/CataloguePage';
import { ContactsPage } from '../pages/ContactsPage/ContactsPage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import { Footer } from '../widgets/Footer/Footer';
import { baseUrl as url } from './constants/baseUrl';
import { NavBar } from '../widgets/NavBar/NavBar';

function App() {
  const baseUrl = url;

  return (
    <div className={classes.App}>
      <ErrorBoundary>
        <BrowserRouter>
          <Suspense fallback={<Spinner />}>
            <Header />
            <NavBar />
            <Routes>
              <Route path={`/${baseUrl}`} element={<HomePage />} />
              <Route path={`/${baseUrl}/catalogue`} element={<CataloguePage />} />
              {/* <Route path={`/${baseUrl}/catalogue:id`} element={<ItemPage />} /> */}
              <Route path={`/${baseUrl}/contacts`} element={<ContactsPage />} />
              <Route path={`/${baseUrl}/*`} element={<NotFoundPage />} />
            </Routes>
            <Footer />
          </Suspense>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;
