"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import { IProduct } from "@/types/product";
import { IChildrenProps } from "@/types/children";
import { CartContextType } from "@/types/CartContextType";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: IChildrenProps) => {
  const [cart, setCart] = useState<IProduct[]>([]);
  const [openCart, setOpenCart] = useState<boolean>(false);

  const previousCart =
    typeof window !== "undefined" ? sessionStorage.getItem("cart") : null;

  useEffect(() => {
    if (previousCart) {
      setCart(JSON.parse(previousCart));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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

      window.setTimeout(() => {
        setOpenCart(true);
      }, 1000);
      return;
    } else {
      window.setTimeout(() => {
        setOpenCart(true);
      }, 1000);
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter((product) => product.id !== productId);

    setCart(updatedCart);
  };

  function handleQuantityChange(productId: number, change: number) {
    const updatedCart = cart
      .map((product) => {
        if (product.id === productId) {
          if (product.quantity === 1 && change === -1) {
            return null;
          }
          return {
            ...product,
            quantity: product.quantity + change,
          };
        }

        return product;
      })
      .filter(Boolean) as IProduct[];

    setCart(updatedCart);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        handleQuantityChange,
        setOpenCart,
        openCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
