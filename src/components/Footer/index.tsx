import React from "react";
import "@/styles/footer.scss";

const Footer = () => {
  return (
    <footer className="footer col">
      <div className="footer__container row">
        <img src="/images/icon-logo.svg" alt="" />
      </div>
      <div className="footer__container col">
        <p>© 2023 - Ecommerce </p>

        <p>Desenvolvido por Izaque Rodrigues </p>
      </div>
    </footer>
  );
};

export default Footer;
