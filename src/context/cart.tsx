"use client";
import React, { createContext, useState, useContext } from "react";
import { IProduct } from "@/types/product";
import { IChildrenProps } from "@/types/children";

const CartContext = createContext({});

export const CartProvider = ({ children }: IChildrenProps) => {
  const [cart, setCart] = useState<IProduct[]>([]);

  const addToCart = (product: IProduct) => {
    const isProductInCart = cart.find((item) => item.id === product.id);

    if (isProductInCart) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...isProductInCart, quantity: isProductInCart.quantity + 1 }
            : item
        )
      );
      return;
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (productId: number, quantity: number) => {
    const isProductInCart = cart.find((item) => item.id === productId);

    if (isProductInCart) {
      setCart(
        cart.map((item) =>
          item.id === productId
            ? {
                ...isProductInCart,
                quantity: isProductInCart.quantity - quantity,
              }
            : item
        )
      );
      return;
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
