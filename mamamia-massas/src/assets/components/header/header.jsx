import homeIcon from "./home.jpg";
import gnocchiIcon from "./gnocchiIcon.jpg";
import pastasIcon from "./pastas.jpg";
import bebidasIcon from "./bebidas.png";

function Header() {
  return (
    <header>
      <h1>Mamamia Massas</h1>
      <nav>
        <ul>
          <li>
            <a href="#">
              <img src={homeIcon} alt="Home" />
              Início
            </a>
          </li>
          <li>
            <a href="#">
              <img src={gnocchiIcon} alt="Gnocchi" />
              Gnocchi
            </a>
          </li>
          <li>
            <a href="#">
              <img src={pastasIcon} alt="Pastas" />
              Pastas
            </a>
          </li>
          <li>
            <a href="#">
              <img src={bebidasIcon} alt="Bebidas" />
              Bebidas
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
