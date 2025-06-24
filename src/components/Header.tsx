import React from "react";
import SearchBar from "./SearchBar";
import { HeaderProps } from "../utils/type";

const Header: React.FC<HeaderProps> = ({ query, onSearch, loading }) => {
  return (
    <header className="header">
      <div className="header__logo">
      
        <a href="/">
          <img src="/logo.png" width={120} />
        </a>
      </div>
      <nav className="header__nav">
        <ul className="header__menu">
          <li>
            <SearchBar onSearch={onSearch} query={query} loading={loading} />
          </li>
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="#about">Acerca de</a>
          </li>
          <li>
            <a href="#services">Servicios</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>
      <button className="header__button">Iniciar Sesión</button>
    </header>
  );
};

export default Header;
