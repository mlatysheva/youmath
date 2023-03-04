import React from 'react';
import classes from './Header.module.scss';
import { Search } from '../Search/Search';
import { randomItems } from './model/randomItems';
import { LinkItem } from '../../shared/ui/LinkItem/LinkItem';

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <div
      className={classes.header}
    >      
      <div className={`${classes.headerMain} wrapper`}>
        <h1 className={classes.title}>Примеры решения задач <br></br>по высшей математике</h1> 
        <p className={classes.regular}>Не думай — качай, типовик — сдавай!</p>              
        <Search />
        <div className={classes.randomItems}>
          {randomItems.map((item) => (
            <LinkItem className={classes.randomLink} key={item.title} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { Header };
