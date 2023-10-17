import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="header__logo">
      <figure>
        <Link href="/">
          <img src="/images/icon-logo.svg" alt="logo" />
        </Link>
      </figure>
    </div>
  );
};
export default Logo;
