import MenuContainer from "../MenuContainer/MenuContainer";
import MenuButton from "../MenuButton/MenuButton";
import spaghettiLogo from "../../assets/logo_pasta.png";

import "./Header.css";

function Header() {
  return (
    <header className="Header">
      <div>
        <img src={spaghettiLogo} alt="Spaghetti Logo" style={{borderRadius: '8px', width: '32px', height: '32px', objectFit: 'contain', maxWidth: '32px', maxHeight: '32px' }} />
        <h1>Mamamia Massas</h1>
        <nav>
          <MenuContainer>
            <MenuButton label="Início" page="home" />
            <MenuButton label="Gnocchi" page="gnocchi" />
            <MenuButton label="Pastas" page="pastas" />
            <MenuButton label="Bebidas" page="drinks" />
          </MenuContainer>
        </nav>
      </div>
    </header>
  );
}

export default Header;
