function MenuList({isOpen}) {
  return (
    <ul className="links">
        <li><a href="#home" className="nav-link menu_item"><i className="fas fa-home"></i> Home</a></li>
        <li><a href="#about" className="nav-link menu_item"><i className="fas fa-female"></i> About</a></li>
        <li><a href="#skills" className="nav-link menu_item"><i className="fas fa-graduation-cap"></i> Skills</a></li>
        <li><a href="#portfolio" className="nav-link menu_item"><i className="fas fa-folder-open"></i> Portfolio</a></li>
        <li><a href="#certificates" className="nav-link menu_item"><i className="fas fa-trophy"></i> Certificates</a></li>
        <li><a href="#contact" className="nav-link menu_item"><i className="fas fa-address-book"></i> Contact</a></li>
    </ul>
  );
}

export default MenuList;