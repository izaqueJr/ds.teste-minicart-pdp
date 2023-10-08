"use client";
import React from "react";
import { IProduct } from "@/types/product";
import { CartContextType } from "@/types/CartContextType";

interface IMinicartProductListProps {
  cartContext: CartContextType;
}

const MinicartProductList = ({ cartContext }: IMinicartProductListProps) => {
  const { removeFromCart, cart, handleQuantityChange } = cartContext;

  return (
    <section className="product-list">
      {cart.map((product: IProduct) => (
        <div className="product-list__card row" key={product?.id}>
          <figure className="product-list__image">
            <img src={product?.image} alt={product?.title} />
          </figure>

          <div className="product-list__info col">
            <div className="product-list__info-content row">
              <h3 className="product-list__name">{product?.title}</h3>
              <button
                className="product-list__remove"
                onClick={() => removeFromCart(product?.id)}
              >
                <img src="/images/icon-remove.svg" alt="" />
              </button>
            </div>

            <div className="product-list__info-content row">
              <p className="product-list__price">
                {product?.price?.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>

              <div className="product-list__quantity row">
                <div className="product-list__quantity-value">
                  <span>{product?.quantity}</span>
                </div>

                <div className="product-list__quantity-selectors col">
                  <button onClick={() => handleQuantityChange(product?.id, 1)}>
                    <img src="/images/icon-arrow-up.svg" alt="" />
                  </button>
                  <button onClick={() => handleQuantityChange(product?.id, -1)}>
                    <img src="/images/icon-arrow-down.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MinicartProductList;
