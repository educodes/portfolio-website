import React from "react";
import Logo from "../assets/static/icon_white.png";
import "../assets/styles/components/Header.scss";

const Header = () => {
  return (
    <header>
      <nav className="header__nav">
        <div className="container nav__container">
          <a href="#" id="home">
            <img id="e-logo" className="nav__logo" src={Logo} alt="logo" />
          </a>

          <ul className="menu">
            <li className="menu__item">
              <a className="menu__item--link " href="#home">
                <i className="fas fa-home icon__menu"></i>
                <span className="text-menu">Inicio</span>
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__item--link" href="#about">
                <i className="fas fa-user-astronaut icon__menu"></i>
                <span className="text-menu">Sobre Mí</span>
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__item--link" href="#projects">
                <i className="fas fa-layer-group icon__menu"></i>
                <span className="text-menu">Proyectos</span>
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__item--link" href="#contact">
                <i className="fas fa-paper-plane icon__menu"></i>
                <span className="text-menu">Contacto</span>
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__item--link" target="_blank" href="https://github.com/educodes">
                <i className="fab fa-github icon__menu"></i>
                <span className="text-menu">gitHub</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
