import React from 'react';
import { NavBar } from './NavBar/NavBar';
import './NavBar/NavBar.module.scss';
import './Search/Search.module.scss';

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <NavBar />
  );
};

export { Header };

