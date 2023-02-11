import { ReactNode } from 'react';
import classes from './Layout.module.scss';
import { Header } from '../../../widgets/Header/Header';
import { NavBar } from '../../../widgets/NavBar/NavBar';
import { Footer } from '../../../widgets/Footer/Footer';
import { Sidebar } from '../../../widgets/Sidebar/Sidebar';

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
          <NavBar />
          {children}  
        </div>   
      </div>   
      <Footer />     
    </div>
  );
}
