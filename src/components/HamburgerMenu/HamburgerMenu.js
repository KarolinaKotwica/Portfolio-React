function HamburgerMenu({isOpen, toggleMenu}) {
  return (
    <>
        <input 
          id="menu_toggle" 
          type="checkbox"
          checked={isOpen}
          onChange={toggleMenu}
          />
        <label className="menu_btn" htmlFor="menu_toggle">
            <span></span>
        </label>
    </>
  );
}

export default HamburgerMenu;