import { Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';
import { Spinner } from '../shared/ui/Spinner/Spinner';
import './styles/index.scss';
import classes from './styles/App.module.scss';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { theme } from './styles/theme';
import { Footer } from '../widgets/Footer/Footer';
import { Header } from '../widgets/Header/Header';
import { TopHeader } from '../widgets/Header/TopHeader';
import { MainRouter } from './MainRouter';

function App() {
  return (
    <div className={classes.App}>
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Suspense fallback={<Spinner />}>
              <Provider store={store}>                
                <TopHeader />
                <Header />
                <MainRouter />
                <Footer />              
              </Provider>
            </Suspense>
          </BrowserRouter>
        </ThemeProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
