import { ReactNode, Suspense } from 'react';
import classes from './Layout.module.scss';
import { Header } from '../../../widgets/Header/Header';
import { NavBar } from '../../../widgets/NavBar/NavBar';
import { Footer } from '../../../widgets/Footer/Footer';
import { Spinner } from '../Spinner/Spinner';
import { Sidebar } from '../../../widgets/Sidebar/Sidebar';
import { AppBar, Toolbar, Typography } from '@mui/material';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = (props: LayoutProps) => {
  const { children } = props; 

  return (
    <div className={classes.Layout}>  
      <Header /> 
      <div className={classes.centralSection}>
        <Sidebar />
        <div className={classes.mainWrapper}>
          <div className={classes.toolbarSpan}></div>
          <NavBar />
          {children}  
        </div>   
      </div>   
      <Footer />     
    </div>
  );
}