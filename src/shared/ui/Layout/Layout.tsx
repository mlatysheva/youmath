import { ReactNode } from 'react';
import classes from './Layout.module.scss';
import { Header } from '../../../widgets/Header/Header';
import { Footer } from '../../../widgets/Footer/Footer';
import { TopHeader } from '../../../widgets/Header/TopHeader';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = (props: LayoutProps) => {
  const { children } = props; 

  return (
    <div className={classes.Layout}>  
      <TopHeader />
      <Header />  
      <div className={classes.mainWrapper}>
        {children}  
      </div>
      <Footer />     
    </div>
  );
}
