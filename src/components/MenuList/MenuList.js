function MenuList({isOpen, onLinkClick}) {
  function handleLinkClick(event) {
    setTimeout(() => {
        onLinkClick();
    }, 100);
}

  return (
    <ul className="links">
        <li><a href="#home" onClick={handleLinkClick} className="nav-link menu_item"><i className="fas fa-home"></i> Home</a></li>
        <li><a href="#about" onClick={handleLinkClick} className="nav-link menu_item"><i className="fas fa-female"></i> About</a></li>
        <li><a href="#skills" onClick={handleLinkClick} className="nav-link menu_item"><i className="fas fa-graduation-cap"></i> Skills</a></li>
        <li><a href="#portfolio" onClick={handleLinkClick} className="nav-link menu_item"><i className="fas fa-folder-open"></i> Portfolio</a></li>
        <li><a href="#certificates" onClick={handleLinkClick} className="nav-link menu_item"><i className="fas fa-trophy"></i> Certificates</a></li>
        <li><a href="#contact" onClick={handleLinkClick} className="nav-link menu_item"><i className="fas fa-address-book"></i> Contact</a></li>
    </ul>
  );
}

export default MenuList;