import React, { useState, useEffect } from 'react';
import Profile from './Profile/Profile';
import MenuList from './MenuList/MenuList';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const [isOpen, setIsOpen] = useState(!isMobile);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 600;
      setIsMobile(mobile);
      if (!mobile) {
        setIsOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    if (isMobile) {
      setIsOpen(prev => !prev);
    }
};

  return (
    <nav id="hamburger-menu">
        <HamburgerMenu toggleMenu={toggleMenu} isOpen={isOpen} />
        <div className="menu_box">
            <Profile />
            <MenuList isOpen={isOpen} onLinkClick={toggleMenu}/>
        </div>
    </nav>
  );
}

export default Navbar;