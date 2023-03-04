import classes from './Header.module.scss';
import logo from "../../shared/assets/images/logo.svg";
import { menuItems } from './model/menuItems';
import { LinkItem } from '../../shared/ui/LinkItem/LinkItem';

export const TopHeader = () => {
  return (
    <div
      className={classes.topHeader}
    >      
      <div className={`${classes.topHeader} wrapper`}>
        <a href="/" className={classes.logo}>
          <img src={logo} className={classes.logo} alt="Company logo" />
        </a>
        <div className={classes.topHeaderNav}>
          {menuItems.map((item) => (
            <LinkItem key={item.title} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};