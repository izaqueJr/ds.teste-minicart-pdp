import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <figure>
            <a href="">
              <img src="/images/icon-logo.svg" alt="" />
            </a>
          </figure>
        </div>
        <nav className="header__navigation">
          <ul>
            <li className="header__menu-item">MENU ITEM 01</li>
            <li className="header__menu-item">MENU ITEM 02</li>
            <li className="header__menu-item">MENU ITEM 03</li>
            <li className="header__menu-item">MENU ITEM 04</li>
            <li className="header__menu-item">MENU ITEM 05</li>
          </ul>
        </nav>
        <div className="header__cart">
          <button className="header__cart-button">
            <figure className="header__cart-icon">
              <img
                src="/images/icon-minicart.svg"
                alt="Ícone do Carrinho de Compras"
              />
            </figure>
            CART
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
