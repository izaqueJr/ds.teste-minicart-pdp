import React from "react";
import "./header.scss";
import MiniCart from "../Minicart";

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
          <MiniCart />
        </div>
      </div>
    </header>
  );
};

export default Header;
