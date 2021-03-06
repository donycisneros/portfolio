import React from 'react';

import NavbarLogo from './NavbarLogo';
import NavbarStar from './NavbarStar';
import PortfolioNavMenu from './PortfolioNavMenu';

const NotFoundNavbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container nav-not-found">
        <NavbarLogo />
        <NavbarStar />
        <PortfolioNavMenu />
      </div>
    </nav>
  );
};

export default NotFoundNavbar;
