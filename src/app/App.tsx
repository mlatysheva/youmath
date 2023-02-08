import { Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Spinner } from '../shared/ui/Spinner/Spinner';
import { HomePage } from '../pages/HomePage/HomePage';
import './styles/index.scss';
import classes from './styles/App.module.scss';
import { CataloguePage } from '../pages/CataloguePage/CataloguePage';
import { ContactsPage } from '../pages/ContactsPage/ContactsPage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import { baseUrl as url } from './constants/baseUrl';
import { Layout } from '../shared/ui/Layout/Layout';
import { ThemeProvider, createMuiTheme } from '@mui/material';
import { blue } from '@mui/material/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: blue
  },
  typography: {
    fontFamily: 'Roboto',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold:600,
  }
});

function App() {
  const baseUrl = url;

  return (
    <div className={classes.App}>
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Suspense fallback={<Spinner />}>
              <Layout>             
                <Routes>
                  <Route path={`/${baseUrl}`} element={<HomePage />} />
                  <Route
                    path={`/${baseUrl}/catalogue`}
                    element={<CataloguePage />}
                  />
                  {/* <Route path={`/${baseUrl}/catalogue:id`} element={<ItemPage />} /> */}
                  <Route path={`/${baseUrl}/contacts`} element={<ContactsPage />} />
                  <Route path={`/${baseUrl}/*`} element={<NotFoundPage />} />
                </Routes>               
              </Layout>
            </Suspense>
          </BrowserRouter>
        </ThemeProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
