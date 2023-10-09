import React from "react";
import "@/styles/header.scss";
import MiniCart from "../Minicart";
import Logo from "./components/Logo";
import Nav from "./components/Nav";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container desktop">
        <Logo />
        <Nav />
        <div className="header__cart">
          <MiniCart />
        </div>
      </div>

      <div className="header__container mobile">
        <div className="header__menu-mobile">
          <img src="/images/icon-menu.svg" alt="menu" />
        </div>

        <Logo />

        <div className="header__cart">
          <MiniCart />
        </div>
      </div>
    </header>
  );
};

export default Header;
