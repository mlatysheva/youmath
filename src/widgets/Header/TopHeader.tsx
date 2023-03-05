import classes from './Header.module.scss';
import logo from "../../shared/assets/images/logo.svg";
import { menuItems } from './model/menuItems';
import { LinkItem } from '../../shared/ui/LinkItem/LinkItem';
import { BASE_URL } from '../../app/constants/baseUrl';
import { Link } from 'react-router-dom';

export const TopHeader = () => {
  return (
    <div
      className={classes.topHeader}
    >      
      <div className={`${classes.topHeaderWrapper} wrapper`}>
        <Link to={BASE_URL} className={classes.logo}>
          <img src={logo} className={classes.logo} alt="Company logo" />
        </Link>
        <div className={classes.topHeaderNav}>
          {menuItems.map((item) => (
            <LinkItem key={item.title} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
