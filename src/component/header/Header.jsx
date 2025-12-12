import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import S from "./header.module.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={S.header}>
      <div className={S.boxLogo}>
        <img src={Logo} alt="logo do site, coração verde" />
        <Link to="/" onClick={closeMenu}>
          Médicos & Dentistas
        </Link>
      </div>

      <nav className={`${S.nav} ${menuOpen ? S.navOpen : ""}`}>
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/voluntario" onClick={closeMenu}>
          Seja Voluntário
        </Link>
      </nav>

      <button
        className={`${S.menuToggle} ${menuOpen ? S.menuToggleOpen : ""}`}
        onClick={toggleMenu}
        aria-label="Abrir menu"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
