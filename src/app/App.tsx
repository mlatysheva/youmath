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

function App() {
  return (
    <div className={classes['App']}>
      <ErrorBoundary>
          <BrowserRouter>
            <Suspense fallback={<Spinner />}>
              <Header />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/catalogue" element={<CataloguePage />} />
                {/* <Route path="/catalogue/:id" element={<ItemPage />} /> */}
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/*" element={<NotFoundPage />} />
              </Routes>
              <Footer />
            </Suspense>
          </BrowserRouter>
        </ErrorBoundary>
      </div>
  );
}

export default App;
