import React from 'react';

import './Header.scss';
import Logo from '../../assets/Logo.png';

const Header = () => (
  <header className="header">
    <img src={Logo} alt="logo"></img>
  </header>
);

export default Header;
