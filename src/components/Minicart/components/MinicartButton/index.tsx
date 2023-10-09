"use client";
import { useCart } from "@/context/cart";
import { CartContextType } from "@/types/CartContextType";
import React from "react";

interface IMinicartProductListProps {
  cartContext: CartContextType;
}

const MinicartButton = ({ cartContext }: IMinicartProductListProps) => {
  const { openCart, setOpenCart, cart } = cartContext;

  const toggleCart = () => {
    setOpenCart(!openCart);
  };

  return (
    <button onClick={toggleCart} className="minicartButton">
      <div className="cart__quantity">{cart.length}</div>
      <figure className="cart__icon">
        <img
          src="/images/icon-minicart.svg"
          alt="Ícone do Carrinho de Compras"
        />
      </figure>
      <span>CART</span>
    </button>
  );
};

export default MinicartButton;
