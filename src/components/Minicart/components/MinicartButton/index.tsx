"use client";
import { useCart } from "@/context/cart";
import { CartContextType } from "@/types/CartContextType";
import React from "react";

interface IMinicartProductListProps {
  cartContext: CartContextType;
}

const MinicartButton = ({ cartContext }: IMinicartProductListProps) => {
  const { openCart, setOpenCart } = cartContext;

  const toggleCart = () => {
    setOpenCart(!openCart);
  };

  return (
    <button onClick={toggleCart} className="mini-cart__button">
      <figure className="cart__icon">
        <img
          src="/images/icon-minicart.svg"
          alt="Ícone do Carrinho de Compras"
        />
      </figure>
      CART
    </button>
  );
};

export default MinicartButton;
