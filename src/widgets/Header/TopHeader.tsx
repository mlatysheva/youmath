import classes from './Header.module.scss';
import logo from "../../shared/assets/images/logo.svg";
import { menuItems } from './model/menuItems';
import { LinkItem } from '../../shared/ui/LinkItem/LinkItem';
import { BASE_URL } from '../../app/constants/baseUrl';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Search } from '../Search/Search';

export const TopHeader = () => {
  const [ collapsed, setCollapsed ] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === `/${BASE_URL}` || pathname === `/${BASE_URL}/`) {
      setCollapsed(false);
    } else {
      setCollapsed(true);
    }
    console.log(`pathname is ${pathname}, ${pathname !== `/${BASE_URL}`}, collapsed is ${collapsed}`);

  }, [pathname, collapsed]);

  return (
    <div
      className={classes.topHeader}
    >      
      <div className={`${classes.topHeaderWrapper} wrapper`}>
        <Link to={BASE_URL} className={classes.logo}>
          <img src={logo} className={classes.logo} alt="Company logo" />
        </Link>
        { collapsed && 
          <div className={classes.searchInTopWrapper}>
            <Search />
          </div>
        }      
        <div className={classes.topHeaderNav}>
          {menuItems.map((item) => (
            <LinkItem key={item.title} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
