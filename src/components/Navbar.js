import React, {useState} from 'react';
import Profile from './Profile/Profile';
import MenuList from './MenuList/MenuList';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav id="hamburger-menu">
        <HamburgerMenu toggleMenu={toggleMenu} isOpen={isOpen} />
        <div className="menu_box">
            <Profile />
            <MenuList isOpen={isOpen} />
        </div>
    </nav>
  );
}

export default Navbar;