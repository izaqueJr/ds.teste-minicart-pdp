"use client";

import React, { useState, useEffect } from "react";
import { useCart } from "@/context/cart";
import { IProduct } from "@/types/product";
import MinicartProductList from "./components/MinicartProductList";
import MinicartButton from "./components/MinicartButton";
import "@/styles/minicart.scss";

const MiniCart = () => {
  const cartContext = useCart();
  if (!cartContext) return null;

  const { cart, openCart, setOpenCart } = cartContext;

  const toggleCart = () => {
    setOpenCart(!openCart);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      const cartElement = document.getElementById("cart");
      if (cartElement && !cartElement.contains(event.target)) {
        setOpenCart(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const total = cart.reduce(
    (acc: number, product: IProduct) => acc + product.price * product.quantity,
    0
  );

  return (
    <>
      <MinicartButton cartContext={cartContext} />
      {openCart && (
        <div className="cart__wrapper" id="cart">
          <div className={`cart__content ${openCart && "open"}`}>
            {cart?.length > 0 ? (
              <>
                <h6 className="cart__title"> Meu carrinho </h6>
                <section className="cart__content-container">
                  <MinicartProductList cartContext={cartContext} />

                  <div className="cart__footer col">
                    <div className="cart__total row">
                      <span>Total</span>

                      <span>
                        {total.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </span>
                    </div>

                    <button className="cart__button-primary">
                      <span>FINALIZAR COMPRA</span>
                    </button>

                    <button
                      onClick={toggleCart}
                      className="cart__button-secondary"
                    >
                      <span>CONTINUAR COMPRANDO</span>
                    </button>
                  </div>
                </section>
              </>
            ) : (
              <section className="cart__empty">
                <p className="cart__empty--text">Seu carrinho está vazio</p>

                <button onClick={toggleCart} className="cart__button-primary">
                  <span>CONTINUAR COMPRANDO</span>
                </button>
              </section>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MiniCart;
