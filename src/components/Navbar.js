import { memo } from "react";
import { NavLink, Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <header className="navWrap">
      <div className="nav glass">
        <Link className="brand" to="/">
          <div className="brandBadge">
            <img
              className="brandLogo"
              src="/rtm-logo.jpg"
              alt="RT Material de Construção"
            />
          </div>
        </Link>

        <nav className="links">
          <NavLink to="/" end>Início</NavLink>
          <NavLink to="/catalogo">Catálogo</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
          <NavLink to="/contato">Contato</NavLink>
        </nav>

        <Link className="btn primary" to="/catalogo">Ver produtos</Link>
      </div>
    </header>
  );
}

export default memo(Navbar);
